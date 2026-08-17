"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[42006],{

/***/ 62119
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_24_interview_preparation_md_4d6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-24-interview-preparation-md-4d6.json
const site_docs_courses_system_design_24_interview_preparation_md_4d6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/24-interview-preparation","title":"Chapter 24: System Design Interview Preparation","description":"Previous None","source":"@site/docs/courses/system-design/24-interview-preparation.md","sourceDirName":"courses/system-design","slug":"/system-design/24-interview-preparation","permalink":"/ai-engineering-journey/system-design/24-interview-preparation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"id":"24-interview-preparation","slug":"/system-design/24-interview-preparation","title":"Chapter 24: System Design Interview Preparation","sidebar_label":"Chapter 24: System Design Interview Preparation","sidebar_position":24},"sidebar":"course-system-design","previous":{"title":"Chapter 23: Case Study — Dropbox and File Storage","permalink":"/ai-engineering-journey/system-design/23-case-study-dropbox"},"next":{"title":"System Design — Complete University Textbook","permalink":"/ai-engineering-journey/system-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/24-interview-preparation.md


const frontMatter = {
	id: '24-interview-preparation',
	slug: '/system-design/24-interview-preparation',
	title: 'Chapter 24: System Design Interview Preparation',
	sidebar_label: 'Chapter 24: System Design Interview Preparation',
	sidebar_position: 24
};
const contentTitle = 'Chapter 24: System Design Interview Preparation';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "Theory / Case Study",
  "id": "theory--case-study",
  "level": 2
}, {
  "value": "Phase 1: The Interview Format",
  "id": "phase-1-the-interview-format",
  "level": 3
}, {
  "value": "Phase 2: The Structured Answer Framework",
  "id": "phase-2-the-structured-answer-framework",
  "level": 3
}, {
  "value": "Phase 3: Company-Specific Question Catalogs",
  "id": "phase-3-company-specific-question-catalogs",
  "level": 3
}, {
  "value": "Phase 4: Common Pitfalls",
  "id": "phase-4-common-pitfalls",
  "level": 3
}, {
  "value": "Phase 5: The Evaluation Rubric",
  "id": "phase-5-the-evaluation-rubric",
  "level": 3
}, {
  "value": "Phase 6: Mock Interview Workflow",
  "id": "phase-6-mock-interview-workflow",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study 1: Amazon Shopping Cart Mock Interview",
  "id": "case-study-1-amazon-shopping-cart-mock-interview",
  "level": 2
}, {
  "value": "Case Study 2: Real-World Design Failure — Knight Capital",
  "id": "case-study-2-real-world-design-failure--knight-capital",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Implementation: System Design Interview Preparation",
  "id": "implementation-system-design-interview-preparation",
  "level": 3
}, {
  "value": "Resources for Further Study",
  "id": "resources-for-further-study",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "chapter-24-system-design-interview-preparation",
        children: "Chapter 24: System Design Interview Preparation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/23-case-study-dropbox",
          children: "23 Case Study Dropbox"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the structured six-phase answer framework for any system design interview question"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internalize estimation heuristics for traffic, storage, bandwidth, and query-per-second calculations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catalog company-specific question patterns for FAANG and top-tier tech companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the evaluation rubric at each engineering level (E3/E4 to E6+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize common pitfalls and develop strategies to avoid them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Practice time-boxed mock interview workflow with specific phase durations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interview strategies, system design frameworks, mock interview templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Six-phase framework, estimation heuristics, company patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements -> Estimation -> HLD -> Deep Dive -> Bottlenecks -> Summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Estimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPS, storage, bandwidth, memory at order-of-magnitude precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Company Patterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAANG-specific question types and evaluation rubrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silent thinking, over-engineering, vague requirements, no trade-offs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    classDef phase fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef skill fill:#fff3e0,stroke:#f57c00,stroke-width:2px\n    classDef action fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n    classDef warning fill:#fce4ec,stroke:#d32f2f,stroke-width:2px\n\n    subgraph Framework[\"Six-Phase Framework\"]\n        direction TB\n        R[\"Requirements Clarification<br/>(1-2 min)\"]:::phase\n        E[\"Estimation<br/>(2-3 min)\"]:::phase\n        H[\"High-Level Design<br/>(5-8 min)\"]:::phase\n        D[\"Deep Dive<br/>(15-20 min)\"]:::phase\n        T[\"Trade-offs<br/>(5-10 min)\"]:::phase\n        W[\"Wrap-up<br/>(5 min)\"]:::phase\n        R --> E --> H --> D --> T --> W\n    end\n\n    subgraph Skills[\"Skills Tested\"]\n        S1[\"Structured Thinking\"]:::skill\n        S2[\"Depth + Breadth\"]:::skill\n        S3[\"Communication\"]:::skill\n    end\n\n    subgraph Pitfalls[\"Common Pitfalls\"]\n        P1[\"Jumping to Solution\"]:::warning\n        P2[\"No Estimation\"]:::warning\n        P3[\"Single Points of Failure\"]:::warning\n        P4[\"Over-Engineering\"]:::warning\n    end\n\n    subgraph Outcome[\"Interview Outcome\"]\n        O1[\"Score ≥ 7/10 → E5 Ready\"]:::action\n        O2[\"Score ≥ 9/10 → E6 Ready\"]:::action\n    end\n\n    Framework --> Skills\n    Skills --> Pitfalls\n    Pitfalls --> Outcome\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory--case-study",
      children: "Theory / Case Study"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/24-interview-preparation.png",
        alt: "System Design Interview Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-the-interview-format",
      children: "Phase 1: The Interview Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nA system design interview typically lasts 45-60 minutes. The format varies by company but generally follows one of four archetypes:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Design (most common)"
      }), ": \"Design YouTube.\" The interviewer wants to see how you approach a familiar consumer product, making reasonable assumptions about scale, and prioritizing features based on user needs. These questions test your ability to decompose a known product into its architectural components."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimation-Focused"
      }), ": \"Design a URL shortener.\" These questions are heavy on data modeling and traffic estimation. The interviewer wants to verify your ability to compute storage requirements, bandwidth needs, and caching strategies from first principles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Infrastructure Design"
      }), ": \"Design a distributed key-value store.\" These questions test your knowledge of distributed systems fundamentals: consistent hashing, replication, quorum protocols, conflict resolution, and failure handling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-Level Design (LLD)"
      }), ": \"Design a parking lot system.\" These questions focus on object-oriented design, class hierarchies, design patterns, and clean API contracts. They are more common at Uber, Amazon (certain teams), and for senior+ roles at smaller companies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The interviewer is evaluating four dimensions simultaneously:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structured thinking"
        }), ": Can you follow a systematic approach rather than jumping to random details?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth"
        }), ": When you dive into a component, can you reason about trade-offs at multiple levels?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breadth"
        }), ": Do you know the relevant technologies (caching, databases, load balancers, CDNs, queues)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Communication"
        }), ": Can you explain complex ideas clearly, use whiteboard diagrams effectively, and incorporate feedback?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-the-structured-answer-framework",
      children: "Phase 2: The Structured Answer Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most reliable approach to any system design question follows six phases. The time allocations are guidelines — adjust based on the question's emphasis and the interviewer's signals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Requirements Clarification (1-2 minutes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never start designing before clarifying requirements. Ask questions to establish scope:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functional requirements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"What are the core features? What is v1 vs v2?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Who are the users? Consumers? Content creators? Admins?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"What are the primary actions users take?\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-functional requirements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"What scale are we designing for? DAU? Total users?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Is this a read-heavy or write-heavy system?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"What are the latency requirements? P99? P95?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"What consistency model do we need? Strong? Eventual?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Are there availability constraints? 99.9%? 99.99%?\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example for \"Design YouTube\":"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users: 500M DAU watching videos, 5M content creators uploading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actions: Watch video (read), upload video (write), search, comment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale: 500M DAU, each watching 5 videos/day = 2.5B views/day"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency: Video start under 2 seconds, search under 500ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency: Eventual for views/likes, strong for video metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Availability: 99.99% uptime on playback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Estimation (2-3 minutes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estimation demonstrates your ability to reason about scale. Compute the key numbers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traffic estimation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DAU = 500M\nDaily views = DAU * views_per_user = 500M * 5 = 2.5B\nWrites: uploads per day = 5M * 1 = 5M\nReads: video views per second = 2.5B / 86400 ˜ 29,000 QPS\nPeak QPS: 3-5x average ˜ 100,000 QPS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Storage estimation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Average video size: 50MB (compressed, various resolutions)\nDaily new video storage: 5M * 50MB = 250TB/day\nYearly storage: 250TB * 365 ˜ 91PB/year\nTotal storage (5 years): ~455PB\nMetadata per video: 1KB\nTotal metadata: 5 years * 5M * 365 * 1KB ˜ 9TB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bandwidth estimation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Upload bandwidth: 5M videos/day * 50MB / 86400s ˜ 2.9 GB/s\nDownload bandwidth: 29,000 QPS * 50MB = 1.45 TB/s\nCDN bandwidth: 95% of download served by CDN ˜ 1.38 TB/s\nOrigin bandwidth: remaining 5% ˜ 72.5 GB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory estimation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache for hot videos (80% of traffic from 20% of videos):\n    Hot videos = 2.5B * 0.2 = 500M cached videos\n    At 50MB each: 500M * 50MB = 25PB ? not feasible\n    Cache only metadata/popular= 100M * 10KB = 1TB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory lookup cheat sheet:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L1 cache reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5 ns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L2 cache reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 ns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 ns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSD random read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk seek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network packet (intra-DC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential disk read (1MB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB/s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scale cheat sheet:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,024 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1,000 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1,000 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1,000 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 PB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1,000 TB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 EB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1,000 PB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: High-Level Design (5-8 minutes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Draw the box diagram. Identify the major components and their interactions. Use a consistent set of building blocks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? CDN ? Load Balancer ? Web Servers ? Application Services ? Data Stores\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For \"Design YouTube\":"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client (browser/mobile app) ? CDN (video content) ? Load Balancer ? API Gateway\n  ? User Service ? Video Service ? Upload Service ? Transcoder ? Metadata DB\n  ? Search Service (Elasticsearch) ? Recommendation Service ? Analytics Pipeline\n  ? Blob Storage (videos) ? CDN Origin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At this phase, you are sketching boxes and drawing arrows. Do not descend into implementation details yet. Your goal is to demonstrate that you know what components exist and how they connect. Label each box with the technology you would use (PostgreSQL, Redis, Kafka, Elasticsearch, S3) and justify each choice briefly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4: Data Model (3-5 minutes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design the core schema or data structures. For relational databases:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE users (\n    user_id BIGINT PRIMARY KEY,\n    name VARCHAR(100),\n    email VARCHAR(255),\n    created_at TIMESTAMP\n);\n\nCREATE TABLE videos (\n    video_id BIGINT PRIMARY KEY,\n    user_id BIGINT REFERENCES users,\n    title VARCHAR(500),\n    description TEXT,\n    s3_key VARCHAR(500),\n    duration_seconds INT,\n    size_bytes BIGINT,\n    format VARCHAR(20),\n    created_at TIMESTAMP,\n    view_count BIGINT DEFAULT 0\n);\n\nCREATE TABLE video_encodings (\n    id BIGINT PRIMARY KEY,\n    video_id BIGINT REFERENCES videos,\n    resolution VARCHAR(10),\n    s3_key VARCHAR(500),\n    bitrate INT\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For key-value stores, describe the schema:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: user_id ? {name, email, created_at}\nVideo: video_id ? {user_id, title, description, s3_key, duration, ...}\nTimeline: user_id ? sorted_set(video_id, timestamp)  -- in Redis\nUpload queue: list(video_id)  -- in Kafka\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explain why you chose the data model you did, including indexing strategy and partitioning approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 5: Deep Dive (15-20 minutes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the most important phase. Pick 2-3 components from your high-level design and go deep. The interviewer will guide you toward areas they want to explore. Common deep dive topics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bottleneck analysis"
      }), ": Identify the weakest link and propose optimizations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The database will be the bottleneck at 100K QPS. Let's add read replicas and cache frequent queries in Redis.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The video transcoder takes 5 minutes per video. Let's use a queue with 100 worker nodes and transcoding priority (shorter videos first).\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"CDN cache misses cause origin load spikes. Let's pre-warm the CDN for trending videos.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caching strategy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Multi-tier caching for YouTube:\n  L1: Browser cache (video segments, API responses) — TTL 5 minutes\n  L2: CDN cache (video content, thumbnails) — 95% hit rate\n  L3: Application cache (Redis — video metadata, user sessions) — 99% hit rate\n  L4: Database replica cache (MySQL query cache if needed)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication and consistency"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The metadata database uses async replication: writes to master, reads from replicas. This gives us low-latency reads but possible stale reads. If we need read-after-write consistency for video metadata, we route the user to the master for N seconds after their last write.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Video views are eventually consistent. We batch write view counts to Redis every 5 seconds, then flush to MySQL every minute. Temporary view count inaccuracies are acceptable.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fault tolerance and availability"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The system spans 3 availability zones. Load balancers route to healthy instances.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Kafka with replication factor 3 ensures queued jobs survive broker failures.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Database master failover: automated via consensus (Raft/Paxos) or semi-automated (Orchestrator for MySQL).\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 6: Trade-offs and Alternatives (5-10 minutes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Demonstrate depth by discussing what you chose NOT to do and why:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"I chose PostgreSQL over Cassandra because our data model is relational and consistent reads matter for video metadata. If we needed higher write throughput at the cost of consistency, Cassandra would be better.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"I chose synchronous replication for the payment system (strong consistency required) but async for video views (performance over precision).\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"I chose a monolithic API gateway for simplicity. If the team grows to 50 engineers, they should migrate to a microservice gateway like Envoy for independent deployments.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"I chose pull-based CDN cache invalidation. Push-based would be faster but requires CDN vendor support and adds complexity.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This phase is your opportunity to show that you understand engineering as a series of trade-offs, not absolute right answers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-company-specific-question-catalogs",
      children: "Phase 3: Company-Specific Question Catalogs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Google"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google interviewers favor questions that test algorithmic thinking and scalability. Their questions often have a search or data processing angle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design YouTube (most common — video streaming, upload, search, recommendations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Google Docs (real-time collaboration, OT/CRDT, conflict resolution, operational transformation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Google Maps (geospatial indexing, route optimization, real-time traffic, ETA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Web Crawler (distributed crawling, politeness policy, deduplication, prioritization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Gmail (email storage, search, attachment handling, spam detection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Search Autocomplete (trie data structure, top-K queries, personalization, real-time updates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Distributed Queue (Kafka-like: partitioning, replication, consumer groups, exactly-once semantics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Distributed Key-Value Store (Paxos/Raft, consistent hashing, hinted handoff, read repair)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google emphasizes estimation and data structures. They may ask you to compute the QPS for a specific operation and then design the data structure to support it. Practice trie, Bloom filter, consistent hashing, and quorum protocols."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Facebook/Meta"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Meta interviewers focus on social graph traversal, real-time communication, and news feed algorithms:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design News Feed (the original system design interview question — ranking, storage, fan-out, personalization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Messenger/Chat (WebSocket, presence detection, message ordering, delivery guarantees, encryption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Nearby Friends (geospatial indexing, WebSocket push, battery optimization, privacy controls)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Facebook Live (streaming protocol, latency optimization, transcoding, interactive features)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Graph Search (social graph traversal, inverted index, access control, natural language queries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Photo Storage (thumbnails, CDN, face recognition, EXIF metadata, deduplication)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Meta questions often have a strong data modeling component. Expect to design the schema for the social graph, the photo album, or the messaging system. Practice adjacency list vs adjacency matrix for graphs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon's leadership principle \"Bias for Action\" means they want to see you make decisions quickly. Amazon's \"bar raiser\" interviewers often ask ambiguous questions to test your ability to scope and prioritize:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Shopping Cart (session management, persistence, price changes, inventory reservation, concurrency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Product Catalog (hierarchical categories, faceted search, variants, pricing, inventory across sellers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Recommendation Engine (collaborative filtering, content-based, matrix factorization, real-time personalization, cold start)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Fulfillment Center (warehouse layout optimization, inventory placement, picking routes, shipping optimization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Product Search (inverted index, faceted navigation, spelling correction, ML ranking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon interviewers care deeply about failure modes. For every component, be ready to answer \"What happens when this fails?\" They also expect detailed understanding of consistency models — Amazon's Dynamo paper (eventual consistency, vector clocks) is required reading."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Netflix/Spotify"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These companies focus on media streaming, recommendation, and encoding pipelines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Video Streaming (adaptive bitrate, CDN selection, buffering strategy, DRM, edge servers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Music Recommendation (collaborative filtering, audio features, playlists, real-time personalization, A/B testing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Audio Encoding Pipeline (parallel encoding, codec selection, metadata extraction, CDN distribution)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix questions often probe CDN and caching architecture. Understand Open Connect (Netflix's CDN appliance), adaptive bitrate algorithms (BOLA, MPC), and the encoding ladder (resolution × bitrate combinations)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Uber"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber questions focus on real-time systems, geospatial data, and marketplace dynamics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Ride Matching (geospatial index, bipartite matching, real-time streaming, surge pricing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design ETA Prediction (ML features, map matching, real-time traffic, Kalman filtering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Surge Pricing (demand-supply curves, real-time pricing, geographic granularity, fairness)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Geospatial Indexing (S2, H3, QuadTree, GeoHash — compare and contrast)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LLD-Focused Questions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some companies (especially for mid-level roles) focus on low-level design:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parking Lot System (class hierarchy for spots, vehicles, ticketing, payment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vending Machine (state machine for inventory, coins, product selection, change)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elevator System (request scheduling algorithm, door safety, peak time handling, fault tolerance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chess Game (piece hierarchy, move validation, check/checkmate detection, game state, AI integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logger Library (thread-safe log writing, multiple sinks, log levels, rotation, async I/O)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed Cache Library (LRU/LFU eviction, sharding, replication, serialization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate Limiter Library (token bucket, sliding window, distributed counters, per-user limits)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For LLD questions, draw a class diagram with relationships (inheritance, composition, dependency). Use design patterns appropriately: Strategy (for pricing algorithms), Observer (for event-driven updates), Factory (for creating domain objects), Singleton (for loggers — with thread safety considerations)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-common-pitfalls",
      children: "Phase 4: Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jumping to Solution Without Requirements Clarification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most common mistake. You hear \"design YouTube\" and immediately start drawing video upload and transcoding. You miss that the interviewer wanted to focus on search, not upload. Always spend 1-2 minutes clarifying scope. This signals structured thinking."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ignoring Data Modeling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many candidates jump straight to the infrastructure diagram (load balancers, CDNs, databases) without defining what the data looks like. You cannot size a database without knowing the schema. Always spend 3-5 minutes on data modeling. The schema reveals the access patterns, which determines the indexing strategy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forgetting Read vs Write Trade-offs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A system optimized for writes (append-only log) looks very different from one optimized for reads (denormalized cache). Always explicitly state whether your design favors reads or writes, and justify the choice based on the requirements. If the system has both heavy reads and heavy writes, explain how you balance them (e.g., write-behind cache, read replicas, CQRS pattern)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Addressing Fault Tolerance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every component in your diagram will fail. If you do not explicitly describe how your system handles failure, the interviewer will assume you have not thought about it. For each tier:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"If the primary database fails, the replica is promoted automatically.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"If a cache node fails, traffic is redirected to remaining nodes. The cache hit rate degrades temporarily but the system stays up.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"If a message broker fails, producers buffer messages locally until the broker recovers.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Caching Opportunities"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching is the single most effective optimization in system design. If you do not mention caching, you are missing an easy signal. Identify the hot paths and apply caching:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Video metadata is cached in Redis with a 5-minute TTL.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Thumbnails are cached at the CDN edge.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Frequent search queries are cached: results for the top 10,000 queries are precomputed and refreshed every hour.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"User sessions are cached in Memcached with session ID as key.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Designing Single Points of Failure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common SPOFs to avoid:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single database master (use master-replica or multi-master)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single load balancer (use DNS round-robin + multiple LB instances)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single cache cluster (use consistent hashing with replication)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single message queue broker (use Kafka with replication)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single CDN provider (have a fallback CDN or direct origin serving)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Over-Engineering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not every system needs Paxos, CRDTs, and a custom distributed file system. Match complexity to scale. A URL shortener with 1M users does not need a multi-region deployment. The interviewer is testing your judgment as much as your knowledge."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Neglecting the Estimation Phase"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skipping the estimation and jumping to architecture is a red flag. The estimation shows you can reason quantitatively about trade-offs. Even a rough calculation demonstrates that you consider cost, capacity, and performance as design constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-the-evaluation-rubric",
      children: "Phase 5: The Evaluation Rubric"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAANG companies evaluate system design against level-specific criteria. Understanding the rubric helps you calibrate your answer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E3/E4 (Entry-level / Early Career)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can design a small system with guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifies basic components (load balancer, database, cache)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles single-data-center deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understands basic trade-offs (SQL vs NoSQL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bar: \"With prompting, can produce a reasonable high-level design for a system serving 1-10M users.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E5 (Senior Engineer)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independently designs a medium-complexity system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles multiple data centers / replication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifies bottlenecks and proposes solutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understands consistency models and their trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bar: \"Can design a complete system serving 100M+ users with minimal guidance, covering most edge cases.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E6 (Staff Engineer)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drives ambiguous, large-scale design from inception"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles global-scale systems (500M+ users, multi-region)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes appropriate technology choices with justification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifies failure modes and designs for resilience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bar: \"Can take a vague problem statement and produce a production-quality architecture that handles all major failure modes and scales to billions of users.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E7+ (Principal / Distinguished)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Designs systems that span multiple organizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Defines technical strategy that affects the company"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mentors through architectural decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluates multi-year trade-offs (build vs buy, platform vs product)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bar: \"Produces architecture that influences the company's technical direction and unblocks other teams.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-6-mock-interview-workflow",
      children: "Phase 6: Mock Interview Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Practice with a timer. The following schedule simulates a real interview:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0:00 - 0:05    Requirements clarification\n               - Establish scope, users, features\n               - Define non-functional constraints\n               \n0:05 - 0:08    Estimation\n               - QPS, storage, bandwidth\n               - Write down key numbers\n               \n0:08 - 0:15    High-level design\n               - Box diagram on whiteboard\n               - Label each box, draw connections\n               \n0:15 - 0:30    Deep dive (pick 2-3 areas)\n               - Data model and schema\n               - Caching strategy\n               - Replication and consistency\n               - Bottleneck analysis\n               \n0:30 - 0:35    Trade-offs and alternatives\n               - What else could work\n               - Why you chose this path\n               \n0:35 - 0:40    Wrap / Follow-up questions\n               - \"How would you handle a regional outage?\"\n               - \"How to reduce P99 latency by 50%?\"\n               - \"How to make this eventually consistent?\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always start with requirements clarification: functional scope, scale (DAU, QPS, storage), and non-functional constraints (latency, consistency, availability) before drawing a single box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents designing the wrong system and shows structured thinking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimation is non-negotiable: compute QPS, storage, bandwidth, and cache memory in under 3 minutes using order-of-magnitude arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demonstrates quantitative reasoning; every architecture decision follows from these numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase your answer: Requirements → Estimation → HLD → Data Model → Deep Dive → Trade-offs, with strict time allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covers all evaluation dimensions (structured thinking, depth, breadth, communication)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the Deep Dive phase, pick 2-3 components and explore them with caching strategy, replication model, bottleneck analysis, and failure handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This is where senior vs junior differentiation happens — depth over breadth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always address fault tolerance for every tier: DB failover, cache node loss, broker outage, CDN fallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing failure modes is the most common reason for \"no hire\" at E5+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match complexity to scale: a URL shortener for 1M users does not need Paxos, CRDTs, and multi-region deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interviewers test judgment — over-engineering is as bad as under-engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know the company's question patterns: Google tests algorithms/search, Meta tests social graph/realtime, Amazon tests failure modes/decision speed, Uber tests geospatial/realtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tailoring your preparation to the company doubles your pass rate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-1-amazon-shopping-cart-mock-interview",
      children: "Case Study 1: Amazon Shopping Cart Mock Interview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A senior engineer candidate is asked to \"Design Amazon's Shopping Cart\" in a 45-minute interview. The candidate begins by clarifying requirements: \"300M active users, 50M peak holiday sessions, 30-day cart persistence, multi-seller carts, inventory reserved at checkout not add-to-cart, mobile with intermittent connectivity, price changes between add and checkout.\" They then estimate: cart read QPS = 50M sessions × 10 item checks / 86400 ≈ 5,800 QPS; cart write QPS = 2,900 QPS; storage = 50M sessions × 30 days × 256 bytes ≈ 384 GB."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The high-level design includes: client → CDN → API Gateway → Cart Service (stateless, auto-scaled) → Session Store (Redis with persistence) → Cart DB (DynamoDB with user_id as partition key + item_id as sort key) → Inventory Service → Pricing Service. The deep dive focuses on 30-day persistence using Redis with AOF persistence and DynamoDB as the source of truth, with a reconciliation cron job that syncs Redis → DynamoDB every 5 minutes. For intermittent connectivity, the mobile client maintains a local SQLite cache and syncs via last-write-wins on reconnect."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trade-offs discussed: DynamoDB vs PostgreSQL (DynamoDB wins on auto-scaling for holiday peaks but loses on complex queries; cart queries are all by primary key, so DynamoDB is ideal), Redis AOF vs RDB (AOF chosen for durability despite 2x memory overhead), synchronous inventory check vs async (synchronous chosen to prevent overselling but adds 50ms latency). Failure analysis: if Cart DB is unreachable, Redis serves reads for 5 minutes before circuit breaker opens; if Inventory Service is slow, cart show returns cached availability with a \"price may have changed\" banner. The candidate scores 9/10 and receives an E6 offer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-2-real-world-design-failure--knight-capital",
      children: "Case Study 2: Real-World Design Failure — Knight Capital"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In 2012, Knight Capital lost $440M in 45 minutes due to a flawed system design deployment. The incident illustrates every system design antipattern from this chapter. Knight deployed new retail order routing code to 8 servers, but a previous deployment had been tested on 7 of them. The 8th server ran old code that interpreted a previously unused flag field as \"send order\" instead of \"disable.\" The result: the 8th server sent millions of erroneous orders into the market at 4M orders/second."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The design failures: no canary deployment (all 8 servers went live simultaneously), no feature flags (a boolean field could trigger real orders), no gradual rollout, no monitoring for anomalous order rates, no circuit breaker when order volume exceeded historical patterns by 1000x, and no kill switch for the new functionality. The post-mortem recommends: phased rollouts (10% → 30% → 100%), feature flags that gate new behavior independently of deployment, real-time anomaly detection with automatic rollback, circuit breakers on external order flow, and a manual kill switch that an operator can trigger within 2 seconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This case study directly maps to interview expectations: when you design a system and the interviewer asks \"what happens when this fails?\", they are testing whether you have learned the lessons of Knight Capital, GitHub's Oct 21 outage, and every major production incident. Always include deployment strategy, feature flags, monitoring dashboards, and rollback procedures in your design."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the first phase of the six-phase system design interview framework?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Deep Dive, B) High-Level Design, C) Requirements Clarification, D) Estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A system with 500M DAU, each performing 5 actions per day, has approximately what average QPS?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) 5,000, B) 29,000, C) 100,000, D) 500,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B (500M×5/86400 ≈ 28,935)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which company's interview questions most heavily emphasize failure mode analysis and decision-making under ambiguity?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Google, B) Meta, C) Amazon, D) Uber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What distinguishes an E5 answer from an E6 answer in a system design interview?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) E6 designs for 1B+ users, B) E6 handles multi-region, C) E6 designs for multiple orgs, D) E5 doesn't need estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B (E5: 100M+ users; E6: global-scale 500M+, multi-region, all failure modes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which pattern should you use when a system has heavy writes AND heavy reads with different data shapes?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Master-slave replication, B) CQRS, C) Read replicas, D) Multi-master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-system-design-interview-preparation",
      children: "Implementation: System Design Interview Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class InterviewQuestion { constructor(public topic: string, public difficulty: \"easy\" | \"medium\" | \"hard\", public description: string, public keyPoints: string[]) {} }\nclass InterviewPrep {\n  private questions: InterviewQuestion[] = [];\n  addQuestion(q: InterviewQuestion): void { this.questions.push(q); }\n  getByTopic(topic: string): InterviewQuestion[] { return this.questions.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase())); }\n  getRandom(difficulty?: string): InterviewQuestion { const filtered = difficulty ? this.questions.filter(q => q.difficulty === difficulty) : this.questions; return filtered[Math.floor(Math.random() * filtered.length)]; }\n  runMock(topic: string, count = 3): { questions: InterviewQuestion[] } { const qs = this.getByTopic(topic).slice(0, count); return { questions: qs }; }\n}\nclass BackOfEnvelopeCalculator {\n  calculateQPS(dau: number, actionsPerUser: number, peakMultiplier = 5): { avgQPS: number; peakQPS: number } {\n    const avgQPS = Math.ceil(dau * actionsPerUser / 86400); return { avgQPS, peakQPS: avgQPS * peakMultiplier }; }\n  estimateStorage(dailyWrites: number, writeSizeBytes: number, retentionDays: number, replication = 3): { dailyGB: string; monthlyGB: string; yearlyTB: string } {\n    const daily = (dailyWrites * writeSizeBytes * replication) / (1024 * 1024 * 1024);\n    return { dailyGB: daily.toFixed(2), monthlyGB: (daily * 30).toFixed(2), yearlyTB: (daily * 365 / 1024).toFixed(2) }; }\n  estimateBandwidth(qps: number, responseSizeBytes: number): { mbps: string; gbps: string } {\n    const bps = qps * responseSizeBytes * 8 / (1024 * 1024); return { mbps: bps.toFixed(2), gbps: (bps / 1024).toFixed(3) }; }\n}\nclass ScoringEngine { score(userPoints: string[], keyPoints: string[]): { score: number; feedback: string; missed: string[] } {\n  const mentioned = new Set(userPoints.map(p => p.toLowerCase())); const missed = keyPoints.filter(kp => !mentioned.has(kp.toLowerCase()));\n  const hitRate = (keyPoints.length - missed.length) / keyPoints.length; const score = Math.round(hitRate * 100);\n  return { score, feedback: score >= 80 ? \"Strong\" : score >= 60 ? \"Adequate\" : \"Needs improvement\", missed }; }\n}\nclass SystemDesignFramework { private frameworks = new Map<string, { steps: string[] }>();\n  add(name: string, steps: string[]): void { this.frameworks.set(name, { steps }); }\n  get(name: string): { steps: string[] } | undefined { return this.frameworks.get(name); }\n  recommend(requirements: string[]): string { if (requirements.some(r => r.includes(\"real-time\"))) return \"WebSocket + Event-Driven\"; if (requirements.some(r => r.includes(\"analytics\"))) return \"Lambda + Kappa\"; return \"Microservices\"; }\n}\n\n// interview preparation\n// distributed-systems-scalability implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'interview preparation', data: { topic: 'distributed-systems-scalability' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// interview preparation - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'system-design demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'system-design', chapter: 'interview preparation' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n\nclass InterviewScorer {\n  private criteria = new Map<string, { score: number; maxScore: number; feedback: string }>()\n  private readonly MAX_SCORE = 10\n\n  addCriterion(name: string, maxScore: number = 1): void {\n    this.criteria.set(name, { score: 0, maxScore, feedback: '' })\n  }\n\n  score(name: string, score: number, feedback: string): void {\n    const c = this.criteria.get(name)\n    if (c) {\n      c.score = Math.min(score, c.maxScore)\n      c.feedback = feedback\n    }\n  }\n\n  total(): number {\n    return Array.from(this.criteria.values()).reduce((s, c) => s + c.score, 0)\n  }\n\n  maxTotal(): number {\n    return Array.from(this.criteria.values()).reduce((s, c) => s + c.maxScore, 0)\n  }\n\n  percentage(): number {\n    return Math.round((this.total() / this.maxTotal()) * 100)\n  }\n\n  readiness(): { level: string; readyFor: string; gaps: string[] } {\n    const pct = this.percentage()\n    const gaps: string[] = []\n    for (const [name, c] of this.criteria) {\n      if (c.score < c.maxScore) gaps.push(`${name} (${c.score}/${c.maxScore}): ${c.feedback}`)\n    }\n    if (pct >= 90) return { level: 'Strong', readyFor: 'E6+ (Staff/Principal)', gaps }\n    if (pct >= 70) return { level: 'Solid', readyFor: 'E5 (Senior)', gaps }\n    if (pct >= 50) return { level: 'Developing', readyFor: 'E4 (Mid-level)', gaps }\n    return { level: 'Needs Work', readyFor: 'E3 (Entry-level)', gaps }\n  }\n\n  generateReport(): string {\n    const lines: string[] = ['--- Interview Score Report ---']\n    for (const [name, c] of this.criteria) {\n      const bar = '█'.repeat(c.score) + '░'.repeat(c.maxScore - c.score)\n      lines.push(`${name}: ${bar} ${c.score}/${c.maxScore} — ${c.feedback}`)\n    }\n    const r = this.readiness()\n    lines.push(`\\nTotal: ${this.total()}/${this.maxTotal()} (${this.percentage()}%)`)\n    lines.push(`Level: ${r.level} — ${r.readyFor}`)\n    if (r.gaps.length) {\n      lines.push(`Gaps:\\n  ${r.gaps.join('\\n  ')}`)\n    }\n    return lines.join('\\n')\n  }\n}\n\nclass QuestionBank {\n  private questions: Map<string, {\n    category: 'product' | 'infrastructure' | 'estimation' | 'lld'\n    difficulty: 'easy' | 'medium' | 'hard'\n    description: string\n    keyPoints: string[]\n    followUps: string[]\n  }> = new Map()\n\n  add(id: string, q: {\n    category: 'product' | 'infrastructure' | 'estimation' | 'lld'\n    difficulty: 'easy' | 'medium' | 'hard'\n    description: string\n    keyPoints: string[]\n    followUps: string[]\n  }): void {\n    this.questions.set(id, q)\n  }\n\n  get(id: string) { return this.questions.get(id) }\n\n  filter(opts: { category?: string; difficulty?: string }): string[] {\n    return Array.from(this.questions.entries())\n      .filter(([_, q]) =>\n        (!opts.category || q.category === opts.category) &&\n        (!opts.difficulty || q.difficulty === opts.difficulty)\n      )\n      .map(([id]) => id)\n  }\n\n  random(opts: { category?: string; difficulty?: string } = {}): string {\n    const filtered = this.filter(opts)\n    if (!filtered.length) return ''\n    return filtered[Math.floor(Math.random() * filtered.length)]\n  }\n\n  generateMockInterview(count: number = 3): Array<{\n    id: string; category: string; difficulty: string; description: string\n  }> {\n    const all = Array.from(this.questions.entries())\n    const shuffled = all.sort(() => Math.random() - 0.5).slice(0, count)\n    return shuffled.map(([id, q]) => ({\n      id, category: q.category, difficulty: q.difficulty, description: q.description\n    }))\n  }\n}\n\nclass CapacityPlanner {\n  planServers({\n    totalStorageBytes,\n    perServerRawBytes,\n    utilization,\n    replicationFactor,\n    erasureCodingRate,\n  }: {\n    totalStorageBytes: number\n    perServerRawBytes: number\n    utilization: number\n    replicationFactor: number\n    erasureCodingRate: number\n  }): { rawNeeded: string; racks: number; servers: number; powerMW: number; annualKWh: string } {\n    const effectivePerServer = perServerRawBytes * utilization / erasureCodingRate\n    const servers = Math.ceil(totalStorageBytes / effectivePerServer)\n    const racks = Math.ceil(servers / 40)\n    const powerMW = (servers * 320) / 1_000_000\n    const annualKWh = (powerMW * 1000 * 8760).toFixed(0)\n    return {\n      rawNeeded: this.formatBytes(totalStorageBytes * replicationFactor),\n      racks, servers, powerMW: Math.round(powerMW * 100) / 100,\n      annualKWh\n    }\n  }\n\n  private formatBytes(bytes: number): string {\n    if (bytes >= 1e15) return (bytes / 1e15).toFixed(1) + ' PB'\n    if (bytes >= 1e12) return (bytes / 1e12).toFixed(1) + ' TB'\n    if (bytes >= 1e9) return (bytes / 1e9).toFixed(1) + ' GB'\n    return bytes + ' B'\n  }\n}\n\n// Demo usage\nconst scorer = new InterviewScorer()\nscorer.addCriterion('Requirements Clarification', 1)\nscorer.addCriterion('Estimation', 1)\nscorer.addCriterion('High-Level Design', 1)\nscorer.addCriterion('Data Model', 1)\nscorer.addCriterion('Deep Dive', 2)\nscorer.addCriterion('Trade-offs', 1)\nscorer.score('Requirements Clarification', 1, 'Asked about scale, users, features')\nscorer.score('Estimation', 0.8, 'Computed QPS and storage but missed bandwidth')\nscorer.score('High-Level Design', 1, 'All components present, clean diagram')\nscorer.score('Data Model', 0.5, 'Schema shown but no indexing strategy')\nscorer.score('Deep Dive', 1.5, 'Good caching and replication analysis, missed failure modes')\nscorer.score('Trade-offs', 0.8, 'Discussed SQL vs NoSQL but missed CDN trade-off')\nconsole.log(scorer.generateReport())\n\nconst bank = new QuestionBank()\nbank.add('yt', { category: 'product', difficulty: 'hard', description: 'Design YouTube', keyPoints: ['video upload', 'transcoding', 'CDN', 'recommendations'], followUps: ['How to handle viral video?', 'CDN cache miss storm?'] })\nbank.add('url', { category: 'estimation', difficulty: 'medium', description: 'Design URL shortener', keyPoints: ['base62 encoding', 'redirection', 'analytics'], followUps: ['How to handle 1B URLs?', 'Custom slug support?'] })\nbank.add('kv', { category: 'infrastructure', difficulty: 'hard', description: 'Design distributed KV store', keyPoints: ['consistent hashing', 'quorum', 'hinted handoff'], followUps: ['Node addition?', 'Read repair?'] })\nconsole.log('Mock interview:', bank.generateMockInterview(2))\n\nconst planner = new CapacityPlanner()\nconst plan = planner.planServers({\n  totalStorageBytes: 50e15,\n  perServerRawBytes: 12 * 12e12,\n  utilization: 0.7,\n  replicationFactor: 3,\n  erasureCodingRate: 1.5\n})\nconsole.log('Capacity plan:', plan)\nexport { InterviewScorer, QuestionBank, CapacityPlanner }\n## Summary\n\n- The six-phase framework (Requirements ? Estimation ? HLD ? Data Model ? Deep Dive ? Trade-offs) provides a reliable structure for any system design interview question.\n- Estimation demonstrates quantitative reasoning: compute QPS, storage, bandwidth, and memory requirements to justify architectural choices.\n- The evaluation rubric differs by level: E3/E4 needs guided small-system design, E5 independently designs medium systems, E6 drives large-scale ambiguous design, E7+ defines multi-org technical strategy.\n- Common pitfalls include skipping requirements clarification, ignoring data modeling, forgetting fault tolerance, designing SPOFs, and over-engineering beyond the problem's scale.\n- Company-specific question patterns exist: Google tests algorithmic thinking (search, key-value stores), Meta tests social graph and real-time, Amazon tests failure modes and decisions under ambiguity.\n- LLD questions require class diagrams, design patterns, and clean API contracts rather than distributed systems infrastructure.\n- Mock interviews should be strictly time-boxed: 5min requirements, 3min estimation, 7min HLD, 15min deep dive, 5min trade-offs, 5min wrap.\n- Internalize the latency numbers cheat sheet, storage scale cheat sheet, and QPS estimation patterns for rapid mental calculation during interviews.\n\n---\n\n## Exercises\n\n### Review Questions\n\n<details><summary>Solution</summary>1. **Six-phase framework**: (1) Requirements Clarification (1-2 min) — clarify scope, users, features, non-functional constraints. (2) Estimation (2-3 min) — QPS, storage, bandwidth, memory. (3) High-Level Design (5-8 min) — box diagram with components and connections. (4) Data Model (3-5 min) — schema or key-value design with indexing strategy. (5) Deep Dive (15-20 min) — pick 2-3 components, explore caching, replication, bottlenecks, failure modes. (6) Trade-offs (5-10 min) — discuss alternatives and justify your choices.\n\n2. **URL shortener estimation**: Daily writes = 100M. 10-year storage = 100M × 365 × 10 × 1KB = 365TB. Read QPS = 100M × 100 / 86400 ≈ 115,740 QPS. Bandwidth = 115,740 × 1KB ≈ 115 MB/s. Peak bandwidth (5x) ≈ 575 MB/s.\n\n3. **E5 vs E6**: E5 independently designs for 100M+ users with minimal guidance. E6 drives ambiguous large-scale design for 500M+ users, handles multi-region deployment, and covers all failure modes. Example: E5 designs a single-region video platform; E6 designs multi-region with disaster recovery, CDN pre-warming, and regional failover.\n\n4. **Five pitfalls**: (1) Jumping to solution — always spend 1-2 min on requirements. (2) Ignoring data modeling — schema reveals access patterns. (3) Forgetting fault tolerance — discuss failure for every tier. (4) Missing caching — identify hot paths and add caching. (5) Over-engineering — match complexity to scale.\n\n5. **Company patterns**: Google — algorithmic thinking (search, KV stores, data processing). Meta — social graph traversal, real-time communication, news feed. Amazon — failure modes, decisions under ambiguity, leadership principles. Uber — geospatial indexing, real-time matching, marketplace dynamics.\n</details>\n\n### Application Problems\n\n<details><summary>Solution</summary>1. **Question Classification**: (a) Product, (b) Infrastructure, (c) Product, (d) LLD, (e) Product, (f) Infrastructure, (g) LLD, (h) Infrastructure, (i) LLD (j) Product. Clarifying questions for each should cover users, scale, read/write ratio, consistency, availability, and latency requirements.\n\n2. **Uber estimation**: DAU = 50M × 0.4 = 20M. Peak hour ride requests = 20M × 0.1 / 1h = 2M requests/hour ≈ 556 QPS. Trip storage = 500M × 2KB × 365 × 5 = 1.825PB. Bandwidth for GPS: 10M × 1KB × (1/4) = 2.5 GB/s inbound. The system is write-heavy (GPS updates far exceed ride requests).\n\n3. **Trade-off analysis (example: SQL vs NoSQL for URL shortener)**:\n   SQL (PostgreSQL): pros — ACID transactions, joins for analytics, strong consistency for redirects (no stale reads), well-understood tooling. Cons — harder to shard, write bottleneck on master, read replicas add eventual consistency. NoSQL (DynamoDB/Cassandra): pros — auto-scaling, partition-tolerant, high write throughput. Cons — no joins (need denormalized tables), eventual consistency (risk of stale redirects for recently created URLs). Recommendation: Start with SQL (strong consistency matters for redirects), add read replicas, then shard by hash of short code when exceeding 50K QPS.\n</details>\n\n### Challenge Problem\n\n<details><summary>Solution>\n**Amazon Shopping Cart — Mock Interview Solution**\n\n**Clarifying questions**: V1 vs V2 features? Guest vs logged-in carts? Multi-device sync? Tax/shipping calculation at cart stage? Cart size limits? Abandoned cart recovery?\n\n**Estimation**: Cart reads = 50M sessions × 10 item checks / 86400 ≈ 5,800 QPS. Writes = 50M sessions × 2 items/session / 86400 ≈ 1,160 QPS. Storage = 50M sessions × 30 days × 256 bytes ≈ 384 GB. Bandwidth = 5,800 QPS × 2KB response ≈ 11.6 MB/s.\n\n**Architecture**: Client → CDN → API Gateway → Cart Service (stateless, auto-scaled) → Session Store (Redis + DynamoDB) → Cart DB (DynamoDB, user_id PK + item_id SK) → Inventory Service → Pricing Service.\n\n**Deep Dive — 30-day persistence**: Redis with AOF persistence for fast reads. DynamoDB as source of truth. Reconciliation cron job syncs Redis→DynamoDB every 5 min. Mobile: local SQLite cache, sync via last-write-wins on reconnect.\n\n**Trade-offs**: DynamoDB vs PostgreSQL (DynamoDB for auto-scaling holiday peaks, cart queries are all PK-based); Redis AOF vs RDB (AOF chosen for durability); synchronous vs async inventory check (synchronous prevents overselling at cost of 50ms latency).\n\n**Failure modes**: Cart DB unreachable → Redis serves reads for 5 min, circuit breaker opens. Inventory service slow → show cached availability with \"price may have changed\" banner. Cross-DC session → use route-53 latency-based routing with DynamoDB global tables.\n</details>\n\n### TypeScript: Estimation Utilities and Design Patterns\n\n```typescript\nclass InterviewEstimator {\n  dailyQPS(dau: number, requestsPerUser: number, peakFactor = 5): { avg: number; peak: number } {\n    const avg = (dau * requestsPerUser) / 86400;\n    return { avg: Math.round(avg), peak: Math.round(avg * peakFactor) };\n  }\n\n  storagePerDay(writes: number, recordSizeBytes: number): string {\n    return this.formatBytes(writes * recordSizeBytes);\n  }\n\n  bandwidth(bytesPerSecond: number): string { return this.formatBytes(bytesPerSecond) + \"/s\"; }\n\n  cacheMemory(cacheSize: number, recordSizeBytes: number): string {\n    return this.formatBytes(cacheSize * recordSizeBytes);\n  }\n\n  serverCount(qps: number, capacityPerServer: number): number {\n    return Math.ceil(qps / capacityPerServer) + 1;\n  }\n\n  private formatBytes(bytes: number): string {\n    if (bytes >= 1e12) return (bytes / 1e12).toFixed(1) + \" TB\";\n    if (bytes >= 1e9) return (bytes / 1e9).toFixed(1) + \" GB\";\n    if (bytes >= 1e6) return (bytes / 1e6).toFixed(1) + \" MB\";\n    if (bytes >= 1e3) return (bytes / 1e3).toFixed(1) + \" KB\";\n    return bytes + \" B\";\n  }\n}\n\nclass AvailabilityCalculator {\n  series(components: number[]): number { return components.reduce((p, a) => p * a, 1); }\n  parallel(components: number[]): number { return 1 - components.reduce((p, a) => p * (1 - a), 1); }\n  nines(a: number): string {\n    if (a >= 0.99999) return \"Five 9s\";\n    if (a >= 0.9999) return \"Four 9s\";\n    if (a >= 0.999) return \"Three 9s\";\n    if (a >= 0.99) return \"Two 9s\";\n    return \"One 9 or less\";\n  }\n\n  annualDowntime(a: number): string {\n    const seconds = (1 - a) * 365 * 86400;\n    if (seconds &lt; 60) return `${seconds.toFixed(0)} seconds`;\n    if (seconds &lt; 3600) return `${(seconds / 60).toFixed(1)} minutes`;\n    return `${(seconds / 3600).toFixed(1)} hours`;\n  }\n}\n\nclass ConsistentHashRing {\n  private ring = new Map&lt;number, string&gt;();\n  private keys: number[] = [];\n  private virtualNodes = 150;\n\n  addNode(node: string): void {\n    for (let v = 0; v &lt; this.virtualNodes; v++) {\n      const h = this.hash(`${node}:${v}`);\n      if (!this.ring.has(h)) this.ring.set(h, node);\n    }\n    this.keys = [...this.ring.keys()].sort((a, b) => a - b);\n  }\n\n  getNode(key: string): string {\n    const h = this.hash(key);\n    let i = this.keys.findIndex(k => k >= h);\n    if (i === -1) i = 0;\n    return this.ring.get(this.keys[i])!;\n  }\n\n  private hash(s: string): number {\n    let h = 0;\n    for (let i = 0; i &lt; s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }\n    return h >>> 0;\n  }\n}\n\nclass DesignTradeoffAnalyzer {\n  private prosCons = new Map&lt;string, { pros: string[]; cons: string[] }&gt;();\n  addOption(name: string, pros: string[], cons: string[]): void { this.prosCons.set(name, { pros, cons }); }\n  compare(...options: string[]): { option: string; score: number; pros: string[]; cons: string[] }[] {\n    return options.map(o => {\n      const entry = this.prosCons.get(o) ?? { pros: [], cons: [] };\n      return { option: o, score: entry.pros.length - entry.cons.length, pros: entry.pros, cons: entry.cons };\n    }).sort((a, b) => b.score - a.score);\n  }\n}\n\nclass MockInterviewScorer {\n  private scores = new Map&lt;string, number[]&gt;();\n  scoreCriterion(criterion: string, score: number): void {\n    if (!this.scores.has(criterion)) this.scores.set(criterion, []);\n    this.scores.get(criterion)!.push(score);\n  }\n  getTotal(): number {\n    return [...this.scores.values()].reduce((s, v) => s + v[v.length - 1], 0);\n  }\n  isReady(): boolean { return this.getTotal() >= 7; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resources-for-further-study",
      children: "Resources for Further Study"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Books (ranked by difficulty)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "???: \"System Design Interview — An Insider's Guide\" (Alex Xu) — Best for beginners, covers 15 common questions step by step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "???: \"Designing Data-Intensive Applications\" (Martin Kleppmann) — Required reading for distributed systems fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "???: \"The Art of Scalability\" (Abbott & Fisher) — Comprehensive but dense, covers organizational and process scalability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "???: \"Building Microservices\" (Sam Newman) — Practical guidance on service boundaries, communication patterns, and deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "???: \"Distributed Systems\" (van Steen & Tanenbaum) — Academic textbook covering theory behind replication, consensus, and consistency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YouTube Channels"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gaurav Sen (System Design) — Best format: clear diagrams, real system examples, multiple perspectives per topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tech Dummies (Design YouTube, Netflix, Uber) — Deep dives with whiteboard diagrams, good for visual learners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hello Interview (asynchronous mock interviews) — Recorded mock interviews with real-time feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Design Interview (codeKarle) — Clean, well-structured walkthroughs of common questions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mock Interview Platforms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pramp — Free peer-to-peer mock interviews with structured feedback forms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interviewing.io — Anonymous technical interviews with engineers from FAANG companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DesignGurus — Mock interviews specifically for system design with expert reviewers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cheat Sheet to Memorize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Latency Numbers (drill until automatic):\n   L1: 0.5ns    L2: 7ns    RAM: 100ns\n   SSD: 0.1ms   Disk: 10ms  Network: 0.5ms\n\nScale Units:\n   10^6 = million (MB)    10^9 = billion (GB)\n   10^12 = trillion (TB)  10^15 = quadrillion (PB)\n\nQPS Examples for Reference:\n   Twitter: 6K tweets/s          Facebook: 200K statuses/s\n   YouTube: 30K video views/s    WhatsApp: 40K messages/s\n\nCaching Hierarchy:\n   L1: Browser       L2: CDN        L3: App (Redis)    L4: DB\n\nDatabase Scaling Progression:\n   Single ? Read replicas ? Sharding ? Vitess/Citus ? NewSQL\n\nConsistency Spectrum (strongest to weakest):\n   Linearizability ? Sequential ? Causal ? Eventual\n"
      })
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