"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3216],{

/***/ 38678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_20_case_study_netflix_md_497_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-20-case-study-netflix-md-497.json
const site_docs_courses_system_design_20_case_study_netflix_md_497_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/20-case-study-netflix","title":"Chapter 20: Case Study — Netflix and Video Streaming","description":"Previous 21 Case Study Uber","source":"@site/docs/courses/system-design/20-case-study-netflix.md","sourceDirName":"courses/system-design","slug":"/system-design/20-case-study-netflix","permalink":"/ai-engineering-journey/system-design/20-case-study-netflix","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"20-case-study-netflix","slug":"/system-design/20-case-study-netflix","title":"Chapter 20: Case Study — Netflix and Video Streaming","sidebar_label":"Chapter 20: Case Study — Netflix and Video Streaming","sidebar_position":20},"sidebar":"coursesSidebar","previous":{"title":"Chapter 19: Case Study — WhatsApp and Real-Time Messaging","permalink":"/ai-engineering-journey/system-design/19-case-study-whatsapp"},"next":{"title":"Chapter 21: Case Study — Uber and Location-Based Services","permalink":"/ai-engineering-journey/system-design/21-case-study-uber"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/20-case-study-netflix.md


const frontMatter = {
	id: '20-case-study-netflix',
	slug: '/system-design/20-case-study-netflix',
	title: 'Chapter 20: Case Study — Netflix and Video Streaming',
	sidebar_label: 'Chapter 20: Case Study — Netflix and Video Streaming',
	sidebar_position: 20
};
const contentTitle = 'Chapter 20: Case Study — Netflix and Video Streaming';

const assets = {

};

/*End Image Gallery*/


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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Requirements Phase",
  "id": "requirements-phase",
  "level": 3
}, {
  "value": "Estimation Phase",
  "id": "estimation-phase",
  "level": 3
}, {
  "value": "High-Level Design Phase",
  "id": "high-level-design-phase",
  "level": 3
}, {
  "value": "Deep Dive Phase",
  "id": "deep-dive-phase",
  "level": 3
}, {
  "value": "Case Study: Netflix Playback Startup",
  "id": "case-study-netflix-playback-startup",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "High-Level Design",
  "id": "high-level-design",
  "level": 3
}, {
  "value": "Deep Dive",
  "id": "deep-dive",
  "level": 3
}, {
  "value": "Implementation: Netflix Architecture Case Study",
  "id": "implementation-netflix-architecture-case-study",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Case Study: Netflix Content Ingestion and Processing Pipeline",
  "id": "case-study-netflix-content-ingestion-and-processing-pipeline",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-1",
  "level": 3
}, {
  "value": "Content Ingestion Pipeline",
  "id": "content-ingestion-pipeline",
  "level": 3
}, {
  "value": "Subtitle and Audio Pipeline",
  "id": "subtitle-and-audio-pipeline",
  "level": 3
}, {
  "value": "Deep Dive: Subtitle Rendering Testing",
  "id": "deep-dive-subtitle-rendering-testing",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: Video Transcoding, Recommendation, and Chaos Engineering",
  "id": "typescript-video-transcoding-recommendation-and-chaos-engineering",
  "level": 3
}, {
  "value": "TypeScript: Advanced Video Transcoder with HLS Playlist, Collaborative Filtering Engine, and Fault Injection Simulator",
  "id": "typescript-advanced-video-transcoder-with-hls-playlist-collaborative-filtering-engine-and-fault-injection-simulator",
  "level": 3
}, {
  "value": "TypeScript: Streaming Pipeline with Per-Title Encoding and Chaos Kong Region Failover",
  "id": "typescript-streaming-pipeline-with-per-title-encoding-and-chaos-kong-region-failover",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study: 4K HDR Live Sports Event Streaming",
  "id": "case-study-4k-hdr-live-sports-event-streaming",
  "level": 2
}, {
  "value": "Case Study: Personalized Home Page for a New User",
  "id": "case-study-personalized-home-page-for-a-new-user",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary-1",
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
        id: "chapter-20-case-study--netflix-and-video-streaming",
        children: "Chapter 20: Case Study — Netflix and Video Streaming"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/19-case-study-whatsapp",
          children: "19 Case Study Whatsapp"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/21-case-study-uber",
          children: "21 Case Study Uber"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a global video streaming platform supporting 260M+ subscribers with sub-5-second startup time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the migration from monolithic to microservice architecture and the operational challenges of 800+ services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement adaptive bitrate streaming with DASH/HLS, encoding ladders, and per-title encoding optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect a CDN strategy with ISP-deployed Open Connect Appliances serving 95%+ of traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a personalized recommendation pipeline using candidate generation, neural ranking, and re-ranking stages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply chaos engineering principles including Chaos Monkey, Chaos Kong, and automated failure experimentation in production"
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
        href: "../../assets/images/lessons/system-design/20-case-study-netflix/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/20-case-study-netflix/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/20-case-study-netflix/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/20-case-study-netflix/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/20-case-study-netflix/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/20-case-study-netflix/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| Aspect | Details |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory] --> B[Case Study: Netflix Playback Startup]\n    C[Case Study: Netflix Content Ingestion and Processing Pipeline]\n    B --> C\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | Netflix architecture: microservices, chaos engineering, CDN, recommendation |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 20: Case Study — Netflix and Video Streaming |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | Chaos engineering, microservices decomposition, CDN strategy |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Angle"
      }), " | Frequently tested in system design interviews |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Core concepts covered in Chapter 20: Case Study — Netflix and Video Streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, Case Study: Netflix Playback Startup, Case Study: Netflix Content Ingestion and Processing Pipeline, Concept Comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design Skills"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concept mastery and practical application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Angle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common system design interview topic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n    B[Case Study Netflix Playback St]\n    A --> B\n    C[Case Study Netflix Content Ing]\n    B --> C\n    D[Concept Comparison]\n    C --> D\n    E[Quick Reference]\n    D --> E\n    F[CrossApplication Matrix]\n    E --> F\n    G[Chapter Quiz]\n    F --> G\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/20-netflix.png",
        alt: "Netflix Architecture Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-phase",
      children: "Requirements Phase"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nNetflix streams over 100 million hours of content daily across 190+ countries. The system must handle extreme scale while maintaining a seamless viewing experience."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Video catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17,000+ titles, 1M+ hours of content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive bitrate from 235p to 4K HDR (Dolby Vision)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global search across titles, actors, genres"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personalized per-user home page and suggestions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 5 profiles per account, independent watch history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resume playback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-device continuation within 1 second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "My List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-curated watchlist, persisted across devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline viewing on mobile, 100+ titles per device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio/subtitles in 30+ languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parental controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-profile content rating restrictions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-Functional Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "260M+ paid subscribers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100M+ hours per day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5 seconds to first frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quality switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seamless, no buffering indicator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99% uptime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+ of traffic served from Netflix-controlled edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2,000+ encoding profiles generated daily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<500ms to generate personalized page"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "estimation-phase",
      children: "Estimation Phase"
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Streaming Bandwidth"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100M hours/day = ~1.16M hours/sec peak"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average bitrate: ~5 Mbps (mix of SD/HD/4K)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Peak concurrent streams: ~20M (prime time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total peak bandwidth: 20M × 5 Mbps = 100,000 Gbps = 100 Tbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily data transfer: ~2.5 exabytes (2.5M TB)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master library: 1M hours × 50 GB/hour (4K source) = 50 PB of source content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoded output: each title encoded at 200+ bitrate/resolution combinations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-title encoded size: ~10 GB (all profiles)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total encoded catalog: 17,000 × 10 GB = 170 TB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDN cache: additional ~5 PB (most popular 10% of catalog cached at all OCAs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encoding Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New content: ~50 new originals per year + licensed content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily encoding jobs: 10,000+ (new titles + re-encodes with improved codecs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each job parallelized across 100-500 chunk encodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total compute: millions of FFmpeg/encoding instances per day"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "260M profiles × thousands of titles = 10^12 potential user-title pairs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model training: terabytes of watch history data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature vectors: 10,000+ dimensions per user and per title"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time inference: <500ms per personalized page load"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-design-phase",
      children: "High-Level Design Phase"
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
        children: "From Monolith to Microservices (2008-2016)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix began as a DVD-by-mail company. The streaming service launched in 2007 as a monolithic Java application deployed on a single datacenter. By 2008, a major database corruption event (3 days of DVD shipping downtime) triggered the decision to re-architect for the cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The migration followed a strangler fig pattern:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-critical features were extracted from the monolith first (user profiles, ratings, search)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each extracted service was rewritten as a stateless, cloud-native microservice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The monolith was gradually strangled until it existed only as the \"substrate\" for remaining features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "By 2012, Netflix had migrated fully to AWS with 500+ microservices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "By 2016, the monolith was completely eliminated; Netflix ran 800+ microservices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph Client Devices\n        TV[Smart TV]\n        MO[Mobile]\n        WEB[Browser]\n        ST[Streaming Stick]\n    end\n\n    subgraph Netflix CDN\n        OCA[Open Connect Appliance<br/>ISP Peering]\n        OCA2[Open Connect Appliance<br/>Colo]\n    end\n\n    subgraph AWS Cloud\n        subgraph API Layer\n            ZUUL[Zuul API Gateway]\n            ELB[Elastic Load Balancer]\n        end\n        subgraph Service Layer\n            MS1[User Service]\n            MS2[Catalog Service]\n            MS3[Playback Service]\n            MS4[Search Service]\n            MS5[Recommendation Service]\n            MS6[Encoding Pipeline]\n        end\n        subgraph Data Layer\n            CASS[(Cassandra<br/>User Data)]\n            EV[(EVCache<br/>Redis/Memcached)]\n            S3[(S3<br/>Source Content)]\n            ES[(Elasticsearch<br/>Search Index)]\n        end\n        subgraph Infrastructure\n            HYSTRIX[Hystrix Circuit Breakers]\n            CRONOS[Cronos Job Scheduler]\n            ATLAS[Atlas Monitoring]\n        end\n    end\n\n    TV --> OCA\n    MO --> OCA\n    WEB --> OCA\n    OCA --> ZUUL\n    OCA --> S3\n    ZUUL --> ELB\n    ELB --> MS3\n    ELB --> MS5\n    MS3 --> CASS\n    MS3 --> EV\n    MS5 --> EV\n    MS5 --> ES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Infrastructure Components"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zuul API Gateway"
          }), ": An edge service that routes requests to the appropriate backend service. Handles authentication, rate limiting, request debugging, and multi-region routing. Every external request passes through Zuul."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hystrix Circuit Breaker"
          }), ": All inter-service calls are wrapped in Hystrix circuit breakers. If a downstream service fails or slows down, the circuit opens and the caller fails fast rather than waiting for a timeout. Thread pool isolation ensures a failing dependency cannot exhaust the caller's resources."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "EVCache"
          }), ": Netflix's memcached-based distributed caching layer. Used for session data, catalog metadata, user profiles, and computation results (recommendation output, video metadata). Cross-region replication keeps caches warm during failover."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Atlas Monitoring"
          }), ": Time-series telemetry system collecting 1.2 trillion data points daily. Every service publishes metrics (request rate, latency, error rate, circuit breaker state). Dashboards and alerts enable operators to detect anomalies within seconds."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-phase",
      children: "Deep Dive Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDN Strategy: Open Connect Appliances"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix built its own CDN called Open Connect. The reasoning was economic and technical:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commercial CDNs would cost hundreds of millions of dollars per year at Netflix's volume"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency to the end user is critical for startup time and quality switching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control over cache eviction policies enables optimizations for Netflix-specific traffic patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISP cooperation reduces transit costs for both Netflix and ISPs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architecture of Open Connect:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An Open Connect Appliance (OCA) is a purpose-built server with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100TB+ of NVMe SSD storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100Gbps network interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom FreeBSD-based caching software"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-loaded with the most popular catalog content"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OCAs are deployed in two locations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ISP Peering Points"
        }), " (inside ISP data centers): Serve 95%+ of traffic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Netflix-Colocated"
        }), " (in carrier hotels): Serve the remaining traffic and act as fallback"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content pre-population:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New content is uploaded to AWS S3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A \"fill\" command is sent to all OCAs via the Open Connect control plane"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OCAs pull content from S3 (or peer OCAs) and store locally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Popular content is always cached; less popular content is cached on demand"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache eviction uses a popularity-weighted algorithm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each title has a \"cache score\" based on global and regional popularity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regional popularity varies: Bollywood titles are cached in Indian OCAs but not in US OCAs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New releases get a temporary boost to ensure initial demand is served from cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The least popular content is evicted first when storage is full"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiered cache architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? ISP POP ? Tier 1 OCA (inside ISP) ? Tier 2 OCA (colo)\n? Netflix Origin (AWS S3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tier 1 OCAs serve the vast majority of requests. If a miss occurs (unpopular content not pre-populated), the Tier 1 OCA fetches from Tier 2, which may fetch from S3. Tier 2 OCAs have larger storage and serve as a regional cache layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Adaptive Bitrate Streaming"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix streams video using both DASH (Dynamic Adaptive Streaming over HTTP) and HLS (Apple's HTTP Live Streaming). Modern devices use CMAF (Common Media Application Format), a container format that works with both DASH and HLS from a single set of files."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The encoding ladder is the set of bitrate-resolution pairs available for a title:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Profile"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bitrate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Codec"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "235p (416×234)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "235 Kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264/AVC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "360p (640×360)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "560 Kbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264/AVC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "480p (854×480)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264/AVC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "720p (1280×720)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264/AVC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full HD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1080p (1920×1080)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264/AVC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2160p (3840×2160)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC/H.265"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2160p (HDR10/DV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC/H.265"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Video content is divided into chunks (typically 2-4 seconds). The client's manifest file lists all available chunks at all bitrates. The client-side adaptive bitrate (ABR) algorithm selects the optimal bitrate based on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Available bandwidth"
        }), ": Measured by download speed of recent chunks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer occupancy"
        }), ": If buffer is draining, downgrade to prevent rebuffering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device capability"
        }), ": Screen resolution, codec support, decoding power"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network conditions"
        }), ": Latency, jitter, packet loss"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ABR algorithm on the client uses a buffer-based approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor the playout buffer size (target: 30-60 seconds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If buffer is growing ? consider upgrading to higher bitrate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If buffer is shrinking ? downgrade immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The rate of change is limited: no more than one step per chunk to avoid oscillation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Per-Title Encoding Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix discovered that a fixed encoding ladder (same bitrate profiles for all movies) was inefficient. An action movie with fast motion needs higher bitrates than a static dialogue scene to maintain quality. The solution: per-title encoding."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the source content to measure complexity: spatial detail (SI) and temporal motion (TI)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a \"probe encode\" at multiple bitrates for each chunk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure quality using VMAF (Video Multi-Method Assessment Fusion), a Netflix-developed metric combining multiple quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a convex hull of bitrate vs quality for each chunk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the encoding ladder points that give the best quality-per-bitrate trade-off"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result: some titles need 40 encoding profiles (complex action, nature documentaries), while others need only 12 (talking heads, animation). The encoding ladder is custom to each title, saving storage and bandwidth while maintaining quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Encoding Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The encoding pipeline is a large-scale distributed system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Source (IMF/J2K 4K) ? Step 1: Pre-processing\n  ? Step 2: Detection (scene cuts, black frames, audio sync)\n  ? Step 3: Parallel Chunk Encoding (N chunks × M profiles)\n  ? Step 4: Quality Validation (VMAF per chunk)\n  ? Step 5: Manifest Generation (MPD for DASH, M3U8 for HLS)\n  ? Step 6: Packaging (fMP4/CMAF segments)\n  ? Step 7: CDN Pre-population\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single 2-hour movie at 200 encoding profiles with 2-second chunks produces:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3,600 chunks per profile (2 hours × 60 min × 30 chunks/min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3,600 × 200 = 720,000 total chunks to encode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each chunk is encoded independently ? massive parallelism"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix runs this pipeline on AWS Spot instances (preemptible EC2 instances at 60-90% discount). The risk of spot termination is managed:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work is broken into small chunks (2-second segments)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A coordinator tracks completion and re-queues failed chunks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a spot instance is reclaimed mid-encode, only that chunk is re-encoded"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This reduces encoding costs by 70% compared to on-demand instances"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Personalized Recommendation System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recommendations drive 80% of watch time on Netflix. The ML pipeline has three stages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 1: Candidate Generation"
      }), " (Narrow 10,000+ titles ? ~500 candidates)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple independent algorithms generate candidate pools:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Collaborative Filtering"
          }), ": Matrix factorization on user-title interaction matrix. Users who watched similar content are used to surface new recommendations. Implementation: alternating least squares (ALS) training nightly on Spark."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Content-Based Filtering"
          }), ": Titles are represented by feature vectors (genre, cast, director, mood tags, visual similarity). Recommendations are titles nearest to the user's positive history in feature space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trending/Popular"
          }), ": Global and regional trending content. Fresh titles with strong engagement signals. Compensates for the \"cold start\" problem where new titles lack interaction history."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contextual"
          }), ": Time-of-day recommendations (wake up vs evening), device-based recommendations (mobile vs TV), and co-watch patterns (what people watch together)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The output of candidate generation is 500 candidate titles per user."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 2: Ranking"
      }), " (~500 candidates ? score and sort)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A deep neural network ranks the 500 candidates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User features"
        }), ": Watch history, ratings, search queries, device, time of day, profile age"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Title features"
        }), ": Metadata (genre, cast, year), popularity signals, freshness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context features"
        }), ": Session state (what they just finished watching), device type, network quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interaction features"
        }), ": How similar this candidate is to the user's recently watched titles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model architecture: A multi-layer perceptron (MLP) with 3-5 hidden layers, 1000+ neurons, trained on billions of user interactions. The output is a single relevance score per user-title pair."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Training happens online (incremental updates every few hours) and offline (full retrain weekly). The model is deployed as a TensorFlow/PyTorch model served via Netflix's custom inference infrastructure (Meson)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 3: Re-Ranking"
      }), " (~500 scored ? ~40 shown on home page)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The final stage applies business constraints:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diversity"
        }), ": Ensure different genres are represented. Don't show 10 action movies in a row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Freshness"
        }), ": Prioritize newly released content. Don't show the same 40 titles for weeks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Row-level variety"
        }), ": Each horizontal row on the Netflix UI is a different theme (\"Trending Now\", \"Because You Watched X\", \"New Releases\"). Re-ranking assigns titles to rows while avoiding duplicates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A/B test assignment"
        }), ": If a new recommendation algorithm is being tested, the re-ranker ensures consistent user experience within the test."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ranking and re-ranking stages together execute in under 500ms per user page load."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaos Engineering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix pioneered chaos engineering — the practice of intentionally injecting failures into production systems to build confidence in resilience."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaos Monkey"
      }), ": Randomly terminates EC2 instances in production. If the system survives, auto-scaling and retry mechanisms work correctly. If not, the team fixes the gap. Runs during business hours (not overnight — the goal is learning, not disruption)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency Monkey"
      }), ": Introduces artificial delays between services. Tests circuit breaker configurations and timeout handling. If Hystrix circuits open correctly, the system degrades gracefully. If not, cascading failures propagate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conformity Monkey"
      }), ": Finds instances that deviate from standard configuration (non-compliant AMI, missing agents, wrong security groups) and terminates them. Enforces configuration discipline across the entire fleet."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaos Kong"
      }), ": Simulates an entire AWS region failure. Netflix regions operate in active-active mode; Chaos Kong verifies that a region can be taken offline and traffic rerouted without impact to subscribers. Run quarterly, requiring coordination across the entire engineering organization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core principles of chaos engineering at Netflix:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Steady state hypothesis"
          }), ": Define a measurable baseline (e.g., \"stream starts within 5 seconds for 99% of users\"). The chaos experiment tests whether this hypothesis holds under failure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blast radius minimization"
          }), ": Start small. Chaos Monkey began by terminating 1 instance per autoscale group per day. Gradually expand to larger experiments."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automated experiments in production"
          }), ": Tests are automated and run continuously. Any engineer can schedule a chaos experiment via the Spinnaker platform."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitor and halt"
          }), ": If the steady state hypothesis is violated (e.g., error rate exceeds threshold), the experiment automatically halts and the system returns to normal."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaos Engineering Workflow in Practice"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The lifecycle of a chaos experiment at Netflix:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design"
          }), ": The engineer defines the experiment parameters: which service, what failure type (instance termination, latency injection, DNS failure), duration (typically 15-30 minutes), and the steady state hypothesis (error rate < 0.1%, P99 latency < 500ms)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), ": The experiment is scheduled via the Chaos Platform (FIT — Failure Injection Testing). The platform checks that no other experiments are running in the same service, no production incidents are active, and it is within business hours."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Execute"
          }), ": The platform injects the failure into a small subset of instances (e.g., 1% of the autoscaling group). Monitoring dashboards stream live metrics."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Observe"
          }), ": If the steady state hypothesis holds, the experiment automatically escalates to 5%, then 10%, then 50% of instances. If at any point the hypothesis fails, the experiment halts immediately and rollback is automatic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Report"
          }), ": After the experiment completes, the platform generates a report: which failures were injected, how the system responded, which circuits opened, whether fallbacks activated, and any unexpected behavior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Remediate"
          }), ": If the experiment revealed a weakness (e.g., a service's connection pool was exhausted), a JIRA ticket is auto-created and assigned to the service owner."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This workflow runs thousands of experiments per month across Netflix's infrastructure. The result: a system that routinely survives failures that would cause catastrophic outages in untested systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hystrix Circuit Breaker"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hystrix is a latency and fault tolerance library for distributed systems. Every inter-service call follows this pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "call_service() ? circuit_state == CLOSED?\n  ? YES: Make call with timeout (10ms, 50ms, 100ms per tier)\n    ? Success: Return result, close circuit if previously half-open\n    ? Failure/timeout: Increment failure counter. If threshold exceeded ? OPEN circuit\n  ? NO (OPEN): Return fallback immediately (fail fast)\n    ? After sleep window (5 seconds) ? HALF-OPEN\n    ? In half-open: Allow one test request\n      ? Success ? CLOSE circuit\n      ? Failure ? OPEN circuit, reset sleep window\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thread pool isolation: Each downstream dependency gets its own thread pool. If the \"search\" service's thread pool is exhausted, search requests fail fast, but the \"playback\" service's thread pool is unaffected. This prevents a single failing dependency from consuming all application resources."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fallback mechanisms:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default response (e.g., empty search results)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stale cached response (e.g., last known recommendations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Degraded behavior (e.g., show only trending content if personalization is down)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Hystrix dashboard provides real-time visibility into circuit states, request rates, latency percentiles, and error rates across all services."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Region Active-Active"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix operates in multiple AWS regions with an active-active architecture. All regions handle traffic simultaneously. If one region fails, traffic is absorbed by remaining regions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cassandra for cross-region data"
          }), ": User profiles, viewing history, ratings, and My List are stored in Cassandra with cross-region replication. Each write is replicated asynchronously to other regions. Read-your-write consistency is maintained via a \"local quorum\" — the user's primary region is determined by geolocation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "EVCache for cross-region caching"
          }), ": EVCache stores frequently accessed data. Cross-region replication is enabled for critical caches. If a region fails, the new primary region has warm caches via replication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Active-active with rollback"
          }), ": Deployment proceeds in phases: 5% of traffic ? 25% ? 50% ? 100%. If error rates increase at any phase, traffic is rolled back within minutes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Circuit breakers at the region level"
          }), ": If cross-region latency exceeds a threshold (e.g., >100ms between US East and US West), Hystrix circuits open and the local region serves from local data sources only."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spinnaker: Continuous Deployment at Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix built Spinnaker to manage deployments across 800+ microservices. Spinnaker is an open-source multi-cloud continuous delivery platform that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automates canary analysis"
        }), ": A new deployment is rolled out to 2% of instances. Monitoring data from the canary is compared against the baseline. If error rates or latency regressions exceed thresholds, the canary is automatically rolled back. This catches ~60% of production issues before full rollout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manages multi-region deployments"
        }), ": A change is deployed to US East first, validated for 30 minutes, then promoted to US West, then EU, then APAC. Each region has a manual approval gate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provides deployment strategies"
        }), ": Rolling red-black (blue-green) deployments for stateless services, rolling push for stateful services, and canary deployments for high-risk changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrates with Chaos Engineering"
        }), ": Before a canary deployment is promoted, Chaos Monkey is automatically triggered against the canary instances. If the canary survives, it is promoted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The deployment pipeline for a single microservice:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Build ? Test ? Package ? Deploy to Canary (2%) ? Observe (30 min)\n  ? Auto-promote or rollback ? Deploy to US East ? Observe\n  ? Deploy to US West ? Observe ? Deploy to EU ? Observe ? Deploy to APAC\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A/B Testing Infrastructure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every change to Netflix's UI, recommendation algorithm, or encoding pipeline goes through A/B testing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A randomized experiment assigns users to control or treatment groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The assignment is deterministic per user (based on user_id hash) for consistent experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics are collected automatically: engagement (hours watched), retention (7-day active), quality (rebuffering ratio), and business (subscription conversion)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Experiments run for a minimum of 2 weeks to accumulate statistical significance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Results are visualized in a unified dashboard with automated significance testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollout decisions are gated on positive or neutral A/B results; regressions block deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The A/B testing platform handles 10,000+ concurrent experiments. Each user can be in multiple experiments simultaneously (via overlapping experiment IDs). The platform uses variance reduction techniques (CUPED, stratified sampling) to detect small effect sizes without requiring billions of users per experiment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Watch History, Resume Playback, and My List"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These features are per-user data served with low latency:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cassandra schema"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(user_id, profile_id) ? {watch_history: list<viewing_event>, my_list: set<title_id>, resume_points: map<title_id, position>}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EVCache"
        }), ": Hot data cached in memory with TTL. Cache-aside pattern: read from cache, populate on miss from Cassandra."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resume playback"
        }), ": The last-played position is stored on every pause/stop event. Read on playback start. The goal is <1 second from \"resume\" click to playback at the saved position."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-netflix-playback-startup",
      children: "Case Study: Netflix Playback Startup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Real-world case studies reveal how architectural decisions map to business constraints at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user in Tokyo clicks \"Play\" on a 4K HDR title. The system must start playback in under 5 seconds. Design the startup sequence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-design",
      children: "High-Level Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Time 0ms: User clicks \"Play\" on Netflix app (Smart TV, Tokyo)\n  ?\nTime 50ms: App sends playback request to nearest OCA (ISP peering, Tokyo)\n  ?\nTime 150ms: OCA authenticates request via Zuul (AWS, local cache)\n  ?\nTime 300ms: OCA resolves manifest ? checks which chunks are cached locally\n  ?\nTime 500ms: OCA returns manifest + first chunk URL to device\n  ?\nTime 800ms: Device requests first chunk (4-second segment) from OCA\n  ?\nTime 1200ms: First chunk begins downloading. ABR algorithm evaluates bandwidth.\n  ?\nTime 2500ms: Buffer accumulates ~4 seconds. Playback begins at initial quality.\n  ?\nTime 4500ms: ABR upgrades to 4K HDR. Buffer stabilizes at 30 seconds.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive",
      children: "Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The critical path is the manifest resolution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The playback request includes the device model, screen resolution, network type (WiFi/LTE), and available codecs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server selects the optimal encoding ladder (pre-computed per-title)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The manifest is generated dynamically: only the supported profiles are included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The first chunk URL points to the nearest OCA where that content is cached"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the content is not cached at the Tokyo OCA, it is fetched from the Tokyo colo OCA or AWS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ABR algorithm on the client starts conservatively (lowest profile) and upgrades aggressively. The goal is \"fast start, quick escalation\":"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First chunk: lowest resolution (ensure fast download)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Second chunk: evaluate bandwidth from first chunk download speed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Third chunk: upgrade if bandwidth supports it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Within 10 seconds: typically at optimal quality for available bandwidth"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-netflix-architecture-case-study",
      children: "Implementation: Netflix Architecture Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NetflixArchitecture {\n  private catalog = new Map<string, { id: string; title: string; genres: string[]; duration: number; rating: number; year: number }>();\n  private userProfiles = new Map<string, { history: string[]; ratings: Map<string, number>; recommendations: string[] }>();\n  private cdnServers = new Map<string, { region: string; content: Set<string>; load: number }>();\n  addContent(item: { id: string; title: string; genres: string[]; duration: number; rating: number; year: number }): void { this.catalog.set(item.id, item); }\n  addCDNServer(id: string, region: string): void { this.cdnServers.set(id, { region, content: new Set(), load: 0 }); }\n  cacheContent(contentId: string, serverId: string): void { const s = this.cdnServers.get(serverId); if (s) { s.content.add(contentId); s.load = s.content.size; } }\n  getRecommendations(userId: string, limit = 10): string[] {\n    const profile = this.userProfiles.get(userId); if (!profile) { return [...this.catalog.values()].sort((a, b) => b.rating - a.rating).slice(0, limit).map(c => c.id); }\n    const watched = new Set(profile.history); return [...this.catalog.values()].filter(c => !watched.has(c.id)).sort((a, b) => b.rating - a.rating).slice(0, limit).map(c => c.id); }\n  recordWatch(userId: string, contentId: string): void { if (!this.userProfiles.has(userId)) this.userProfiles.set(userId, { history: [], ratings: new Map(), recommendations: [] }); this.userProfiles.get(userId)!.history.push(contentId); }\n}\nclass AdaptiveBitrateStreaming { private bitrates = new Map([[\"144p\", 300], [\"360p\", 1500], [\"480p\", 3000], [\"720p\", 5000], [\"1080p\", 8000], [\"4K\", 25000]]);\n  selectBitrate(bandwidthKbps: number): string { let selected = \"144p\"; for (const [res, bw] of this.bitrates) if (bandwidthKbps >= bw * 1.5) selected = res; return selected; }\n  estimateBuffer(bitrateKbps: number, bufferSeconds: number): number { return (bitrateKbps / 8) * bufferSeconds; }\n}\nclass PersonalizationEngine { rank(userId: string, items: string[], history: string[]): string[] { const s = new Set(history); return items.filter(i => !s.has(i)).slice(0, 20); } }\nclass RecommendationScorer { score(content: { rating: number; year: number }, preferences: { minRating: number; genres: string[] }): number { return content.rating * (content.year > 2020 ? 1.2 : 1.0); } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case study netflix\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'case study netflix', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case study netflix - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'case study netflix' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix built its own CDN (Open Connect) to serve 95%+ of traffic from ISP-peered appliances, saving hundreds of millions in transit costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The migration from a single Java monolith to 800+ cloud-native microservices took 8 years (2008-2016)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adaptive bitrate streaming with DASH/HLS and CMAF enables seamless quality switching across devices and networks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-title encoding optimization uses ML (VMAF) to create custom encoding ladders per movie, saving 30-50% bandwidth at equivalent quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chaos engineering (Chaos Monkey, Chaos Kong) ensures resilience by continuously testing failure scenarios in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The recommendation pipeline uses three stages: candidate generation (collaborative + content filtering), neural ranking (deep MLP), and re-ranking (diversity + freshness constraints)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hystrix circuit breakers with thread pool isolation prevent cascading failures across 800+ services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-region active-active with Cassandra and EVCache provides disaster recovery within minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The playback startup sequence completes in under 5 seconds via a carefully orchestrated chain of OCA lookup, manifest generation, and chunk download"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A/B testing is pervasive: every change to the recommendation system, UI, or encoding pipeline is validated against real user behavior before full rollout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-netflix-content-ingestion-and-processing-pipeline",
      children: "Case Study: Netflix Content Ingestion and Processing Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Real-world case studies reveal how architectural decisions map to business constraints at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-1",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A new 4K HDR movie is delivered to Netflix. It must be encoded, packaged, subtitled, and distributed to 190+ countries. All processing must complete within 24 hours of receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "content-ingestion-pipeline",
      children: "Content Ingestion Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Source Media (IMF package, 4K HDR, 5.1 audio)\n  ? Step 1: Ingest — Validate format, checksum, metadata (24-bit audio, color space, frame rate)\n  ? Step 2: QC — Automated quality checks (black frames, audio sync, freeze frames, audio loudness)\n  ? Step 3: Mezzanine — Transcode to intermediate format (ProRes 4444 or JPEG 2000) for encoding\n  ? Step 4: Analysis — Scene detection, complexity analysis (SI/TI), audio track detection\n  ? Step 5: Encoding — Per-title optimized encoding into 200+ profiles\n  ? Step 6: Quality Validation — VMAF scoring per chunk, minimum score gate\n  ? Step 7: Packaging — CMAF segments, MPD/M3U8 manifests per language/audio combination\n  ? Step 8: Subtitle Processing — OCR for burned-in subtitles, timed-text conversion (TTML ? WebVTT)\n  ? Step 9: CDN Pre-population — Fill command to all Open Connect appliances\n  ? Step 10: Catalog Activation — Title appears in search and recommendations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subtitle-and-audio-pipeline",
      children: "Subtitle and Audio Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each title in Netflix has 30+ language tracks for audio and subtitles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audio processing"
        }), ": Source 5.1 or Atmos mix is encoded at multiple bitrates (192kbps AAC to 768kbps Atmos). Dialogue normalization (dialnorm) metadata is embedded for consistent volume across titles. AD (Audio Description) tracks are separate audio streams mixed specifically for visually impaired viewers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subtitle processing"
        }), ": Source timed-text files (TTML) are validated for timing accuracy. Automated translation of subtitles (machine translation + human review). Forced narratives (burned-in text that is part of the video) require custom OCR and timing. Subtitle rendering tests ensure text fits within safe areas on all device types (TV safe zone vs mobile)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dubbed audio"
        }), ": For major languages (Spanish, Portuguese, German, French, Italian, Japanese), Netflix produces full dubbed audio tracks. These are mixed in Netflix's partner studios and delivered as separate audio assets. Each language dub is encoded independently and packaged into the manifest."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-subtitle-rendering-testing",
      children: "Deep Dive: Subtitle Rendering Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A critical quality issue: subtitles that render differently on different devices. A subtitle line that fits on a 65-inch TV may overflow on a 5-inch phone. Netflix's subtitle testing pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each subtitle event has a computed \"safe width\" based on character count and font metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each device profile (TV, tablet, phone, browser), the rendering engine simulates subtitle display"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subtitles that overflow on any device are flagged and sent to a human editor for line-breaking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The subtitle manifest includes pre-computed position and size metadata per device category"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Metric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 20: Case Study — Netflix and Video Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Netflix Playback Startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 20: Case Study — Netflix and Video Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Netflix Content Ingestion and Processing Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 20: Case Study — Netflix and Video Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 20: Case Study — Netflix and Video Streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Netflix Playback Startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 20: Case Study — Netflix and Video Streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Netflix Content Ingestion and Processing Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 20: Case Study — Netflix and Video Streaming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Netflix Playback Startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Netflix Content Ingestion and Processing Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "What is the primary advantage of Netflix's Open Connect CDN over commercial CDNs?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Lower latency, B) Cost savings at scale + control over cache policy, C) Better codec support, D) Simpler deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does per-title encoding optimization reduce bandwidth without quality loss?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Fixed bitrate for all titles, B) Probe encodes with VMAF scoring build custom ladders per title, C) Use only H.265 codec, D) Reduce resolution uniformly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the correct sequence of the three-stage recommendation pipeline?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Ranking → Re-ranking → Candidate Generation, B) Candidate Generation → Ranking → Re-ranking, C) Re-ranking → Candidate Generation → Ranking, D) Candidate Generation → Re-ranking → Ranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does Chaos Kong differ from Chaos Monkey in blast radius?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Chaos Kong terminates instances, Chaos Monkey fails regions, B) Chaos Monkey terminates instances, Chaos Kong simulates entire region failure, C) Both are identical, D) Chaos Monkey is for databases only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What mechanism prevents cascading failures across Netflix's 800+ microservices?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Synchronous calls only, B) Hystrix circuit breakers with thread pool isolation, C) Single database for all services, D) Manual failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-video-transcoding-recommendation-and-chaos-engineering",
      children: "TypeScript: Video Transcoding, Recommendation, and Chaos Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class VideoTranscoder {\n  private profiles = [\n    { name: \"240p\", resolution: \"426x240\", bitrate: 300_000 },\n    { name: \"360p\", resolution: \"640x360\", bitrate: 700_000 },\n    { name: \"720p\", resolution: \"1280x720\", bitrate: 2_500_000 },\n    { name: \"1080p\", resolution: \"1920x1080\", bitrate: 5_000_000 },\n    { name: \"4K\", resolution: \"3840x2160\", bitrate: 15_000_000 },\n  ];\n\n  selectLadder(deviceCapability: { maxResolution: string; bandwidth: number }): { name: string; bitrate: number }[] {\n    const maxIdx = this.profiles.findIndex(p => p.resolution.startsWith(deviceCapability.maxResolution.split(\"x\")[0]));\n    return this.profiles.slice(0, maxIdx + 1).filter(p => p.bitrate <= deviceCapability.bandwidth * 0.8);\n  }\n}\n\nclass AdaptiveBitrateStreamer {\n  private currentProfile = 0;\n  private buffer: number[] = [];\n\n  constructor(private profiles: { name: string; bitrate: number }[], private bufferTargetMs: number) {}\n\n  onChunkDownloaded(chunkSizeBytes: number, downloadTimeMs: number): string {\n    const throughput = (chunkSizeBytes * 8) / (downloadTimeMs / 1000);\n    this.buffer.push(throughput);\n    if (this.buffer.length > 10) this.buffer.shift();\n    const avgThroughput = this.buffer.reduce((s, t) => s + t, 0) / this.buffer.length;\n    let bestProfile = 0;\n    for (let i = 0; i < this.profiles.length; i++) {\n      if (this.profiles[i].bitrate <= avgThroughput * 0.8) bestProfile = i;\n    }\n    this.currentProfile = bestProfile;\n    return this.profiles[this.currentProfile].name;\n  }\n}\n\nclass RecommendationEngine {\n  private userHistory = new Map<string, Map<string, number>>();\n  private contentFeatures = new Map<string, { genre: string; year: number; avgRating: number }>();\n\n  recordView(userId: string, contentId: string, rating: number): void {\n    if (!this.userHistory.has(userId)) this.userHistory.set(userId, new Map());\n    this.userHistory.get(userId)!.set(contentId, rating);\n  }\n\n  getRecommendations(userId: string, limit = 10): { contentId: string; score: number }[] {\n    const history = this.userHistory.get(userId) ?? new Map();\n    const likedGenres = new Map<string, number>();\n    for (const [contentId, rating] of history) {\n      const features = this.contentFeatures.get(contentId);\n      if (features && rating >= 4) likedGenres.set(features.genre, (likedGenres.get(features.genre) ?? 0) + 1);\n    }\n    const scores: { contentId: string; score: number }[] = [];\n    for (const [contentId, features] of this.contentFeatures) {\n      if (history.has(contentId)) continue;\n      const genreScore = (likedGenres.get(features.genre) ?? 0) / Math.max(history.size, 1);\n      scores.push({ contentId, score: genreScore * features.avgRating });\n    }\n    return scores.sort((a, b) => b.score - a.score).slice(0, limit);\n  }\n}\n\nclass ChaosMonkey {\n  private enabled = false;\n  constructor(private failureRate: number) {}\n\n  start(): void { this.enabled = true; }\n\n  stop(): void { this.enabled = false; }\n\n  async inject<T>(serviceName: string, fn: () => Promise<T>): Promise<T> {\n    if (this.enabled && Math.random() < this.failureRate) {\n      const error = new Error(`ChaosMonkey: ${serviceName} failure injected`);\n      return Promise.reject(error);\n    }\n    return fn();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-video-transcoder-with-hls-playlist-collaborative-filtering-engine-and-fault-injection-simulator",
      children: "TypeScript: Advanced Video Transcoder with HLS Playlist, Collaborative Filtering Engine, and Fault Injection Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class HLSVideoTranscoder {\n  private readonly segmentDuration = 4;\n  private readonly codecs = [\"h264\", \"hevc\", \"av1\"];\n\n  generatePlaylist(sourceDuration: number, profiles: { name: string; bitrate: number; resolution: string }[]): string {\n    let playlist = \"#EXTM3U\\n#EXT-X-VERSION:7\\n\";\n    for (const profile of profiles) {\n      playlist += `#EXT-X-STREAM-INF:BANDWIDTH=${profile.bitrate},RESOLUTION=${profile.resolution},CODECS=\"${this.codecs[0]}\"\\n`;\n      playlist += `${profile.name}/index.m3u8\\n`;\n    }\n    return playlist;\n  }\n\n  generateMediaPlaylist(profileName: string, totalSegments: number): string {\n    let playlist = \"#EXTM3U\\n#EXT-X-TARGETDURATION:\" + this.segmentDuration + \"\\n#EXT-X-VERSION:7\\n\";\n    for (let i = 0; i < totalSegments; i++) {\n      playlist += `#EXTINF:${this.segmentDuration}.0,\\n${profileName}/segment-${i.toString().padStart(5, \"0\")}.ts\\n`;\n    }\n    return playlist;\n  }\n\n  segmentTimestamps(totalDuration: number): { start: number; end: number }[] {\n    const segments: { start: number; end: number }[] = [];\n    for (let t = 0; t < totalDuration; t += this.segmentDuration) {\n      segments.push({ start: t, end: Math.min(t + this.segmentDuration, totalDuration) });\n    }\n    return segments;\n  }\n\n  estimateQuality(vmafScores: number[]): { average: number; min: number; p95: number } {\n    const sorted = [...vmafScores].sort((a, b) => a - b);\n    return {\n      average: vmafScores.reduce((s, v) => s + v, 0) / vmafScores.length,\n      min: sorted[0],\n      p95: sorted[Math.floor(sorted.length * 0.95)],\n    };\n  }\n}\n\nclass CollaborativeFilteringEngine {\n  private userItemMatrix = new Map<string, Map<string, number>>();\n  private itemFeatures = new Map<string, number[]>();\n  private userFactors = new Map<string, number[]>();\n  private readonly latentDim = 20;\n\n  rateItem(userId: string, itemId: string, rating: number): void {\n    if (!this.userItemMatrix.has(userId)) this.userItemMatrix.set(userId, new Map());\n    this.userItemMatrix.get(userId)!.set(itemId, rating);\n  }\n\n  trainALS(iterations = 10): void {\n    const users = [...this.userItemMatrix.keys()];\n    const items = new Set<string>();\n    for (const ratings of this.userItemMatrix.values()) {\n      for (const itemId of ratings.keys()) items.add(itemId);\n    }\n    for (const userId of users) {\n      this.userFactors.set(userId, Array.from({ length: this.latentDim }, () => Math.random() * 0.1));\n    }\n    for (const itemId of items) {\n      this.itemFeatures.set(itemId, Array.from({ length: this.latentDim }, () => Math.random() * 0.1));\n    }\n    for (let iter = 0; iter < iterations; iter++) {\n      for (const [userId, ratings] of this.userItemMatrix) {\n        const uf = this.userFactors.get(userId)!;\n        for (const [itemId, rating] of ratings) {\n          const ifVec = this.itemFeatures.get(itemId)!;\n          const pred = uf.reduce((s, v, i) => s + v * ifVec[i], 0);\n          const err = rating - pred;\n          for (let k = 0; k < this.latentDim; k++) {\n            uf[k] += 0.01 * (err * ifVec[k] - 0.02 * uf[k]);\n            ifVec[k] += 0.01 * (err * uf[k] - 0.02 * ifVec[k]);\n          }\n        }\n      }\n    }\n  }\n\n  hybridRecommend(userId: string, history: string[], limit = 10): { itemId: string; score: number }[] {\n    const collabScores = new Map<string, number>();\n    const contentScores = new Map<string, number>();\n    const uf = this.userFactors.get(userId);\n    if (uf) {\n      for (const [itemId, ifVec] of this.itemFeatures) {\n        const score = uf.reduce((s, v, i) => s + v * ifVec[i], 0);\n        collabScores.set(itemId, score);\n      }\n    }\n    const historySet = new Set(history);\n    for (const [userId2, ratings] of this.userItemMatrix) {\n      if (userId2 === userId) continue;\n      for (const [itemId, rating] of ratings) {\n        if (!historySet.has(itemId)) {\n          contentScores.set(itemId, (contentScores.get(itemId) ?? 0) + rating);\n        }\n      }\n    }\n    const combined = new Map<string, number>();\n    for (const [itemId, score] of collabScores) {\n      combined.set(itemId, score * 0.7 + (contentScores.get(itemId) ?? 0) * 0.3);\n    }\n    for (const [itemId, score] of contentScores) {\n      if (!combined.has(itemId)) combined.set(itemId, score * 0.3);\n    }\n    const historyS = new Set(history);\n    return [...combined.entries()]\n      .filter(([id]) => !historyS.has(id))\n      .sort((a, b) => b[1] - a[1])\n      .slice(0, limit)\n      .map(([itemId, score]) => ({ itemId, score }));\n  }\n}\n\nclass FaultInjectionSimulator {\n  private targets = new Map<string, { failureRate: number; latencyMs: number; enabled: boolean }>();\n\n  registerService(name: string, failureRate: number, latencyMs: number): void {\n    this.targets.set(name, { failureRate, latencyMs, enabled: false });\n  }\n\n  enableChaos(): void {\n    for (const target of this.targets.values()) target.enabled = true;\n  }\n\n  disableChaos(): void {\n    for (const target of this.targets.values()) target.enabled = false;\n  }\n\n  async call<T>(serviceName: string, fn: () => Promise<T>): Promise<T> {\n    const target = this.targets.get(serviceName);\n    if (!target || !target.enabled) return fn();\n    if (Math.random() < target.failureRate) throw new Error(`FaultInjection: ${serviceName} failure`);\n    if (target.latencyMs > 0) await new Promise(r => setTimeout(r, target.latencyMs * Math.random()));\n    return fn();\n  }\n\n  runExperiment<T>(scenario: { durationMs: number; targets: string[] }, fn: () => Promise<T>): Promise<{ success: boolean; errors: string[]; latencyMs: number }> {\n    const errors: string[] = [];\n    const start = Date.now();\n    return fn().then(\n      () => ({ success: true, errors, latencyMs: Date.now() - start }),\n      (err) => { errors.push(err.message); return { success: false, errors, latencyMs: Date.now() - start }; }\n    );\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-streaming-pipeline-with-per-title-encoding-and-chaos-kong-region-failover",
      children: "TypeScript: Streaming Pipeline with Per-Title Encoding and Chaos Kong Region Failover"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class StreamingPipeline {\n  private encodingJobs = new Map<string, { status: string; progress: number; profiles: string[] }>();\n\n  async perTitleEncode(sourceId: string, complexity: { spatial: number; temporal: number }): Promise<string[]> {\n    const profileCount = complexity.spatial > 0.7 && complexity.temporal > 0.7 ? 40 : 12;\n    const profiles: string[] = [];\n    for (let i = 0; i < profileCount; i++) {\n      profiles.push(`profile-${i}`);\n      this.encodingJobs.set(`job-${sourceId}-${i}`, { status: \"encoding\", progress: 0, profiles });\n    }\n    for (let i = 0; i < profileCount; i++) {\n      await new Promise(r => setTimeout(r, 50));\n      const job = this.encodingJobs.get(`job-${sourceId}-${i}`)!;\n      job.progress = 100;\n      job.status = \"complete\";\n    }\n    return profiles;\n  }\n\n  measureVMAF(encodedChunk: Buffer, referenceChunk: Buffer): number {\n    const mse = encodedChunk.reduce((s, b, i) => s + (b - (referenceChunk[i] ?? 0)) ** 2, 0) / encodedChunk.length;\n    const maxSignal = 255;\n    const psnr = 10 * Math.log10((maxSignal ** 2) / Math.max(mse, 0.001));\n    return Math.min(100, Math.max(0, psnr * 2.5));\n  }\n}\n\nclass ChaosKong {\n  private regions = new Map<string, { active: boolean; trafficPercent: number; services: string[] }>();\n\n  addRegion(name: string, services: string[]): void {\n    this.regions.set(name, { active: true, trafficPercent: 100 / this.regions.size || 100, services });\n  }\n\n  async failRegion(regionName: string): Promise<{ healthy: boolean; redistributedTraffic: string[] }> {\n    const region = this.regions.get(regionName);\n    if (!region) return { healthy: false, redistributedTraffic: [] };\n    region.active = false;\n    const healthyRegions = [...this.regions.entries()].filter(([_, r]) => r.active);\n    const redistribution: string[] = [];\n    if (healthyRegions.length > 0) {\n      const share = region.trafficPercent / healthyRegions.length;\n      for (const [, r] of healthyRegions) {\n        r.trafficPercent += share;\n        redistribution.push(`${r.trafficPercent.toFixed(0)}%`);\n      }\n    }\n    region.trafficPercent = 0;\n    return { healthy: healthyRegions.length > 0, redistributedTraffic: redistribution };\n  }\n\n  async validateFailover(regionName: string, testFn: () => Promise<boolean>): Promise<{ passed: boolean; failoverTimeMs: number }> {\n    const start = Date.now();\n    const failed = await this.failRegion(regionName);\n    const healthy = await testFn();\n    return { passed: healthy && failed.healthy, failoverTimeMs: Date.now() - start };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    classDef client fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef edge fill:#fff3e0,stroke:#f57c00,stroke-width:2px\n    classDef stream fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n    classDef infra fill:#fce4ec,stroke:#c62828,stroke-width:2px\n    classDef data fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n    classDef chaos fill:#ffebee,stroke:#b71c1c,stroke-width:2px\n\n    subgraph \"Device Layer\"\n        TV[Smart TV]:::client\n        MOB[Mobile]:::client\n        WEB[Browser]:::client\n    end\n\n    subgraph \"CDN Edge\"\n        OCA1[OCA ISP<br/>Tier 1]:::edge\n        OCA2[OCA Colo<br/>Tier 2]:::edge\n        OCA3[OCA ISP<br/>Tier 1]:::edge\n    end\n\n    subgraph \"Streaming Pipeline\"\n        ENC[Encoder<br/>Per-Title Ladder]:::stream\n        CH[Chunker<br/>2s CMAF Segments]:::stream\n        PK[Packager<br/>DASH / HLS Manifests]:::stream\n        QA[Quality Gate<br/>VMAF Score]:::stream\n    end\n\n    subgraph \"Recommendation Pipeline\"\n        CG[Candidate Gen<br/>ALS + Content]:::data\n        NR[Neural Ranker<br/>Deep MLP]:::data\n        RR[Re-Ranker<br/>Diversity + Freshness]:::data\n    end\n\n    subgraph \"Chaos Infrastructure\"\n        CM[Chaos Monkey<br/>Instance Terminator]:::chaos\n        CK[Chaos Kong<br/>Region Failover]:::chaos\n        LM[Latency Monkey<br/>Delay Injection]:::chaos\n        HYSTRIX[Hystrix<br/>Circuit Breakers]:::chaos\n    end\n\n    subgraph \"Storage & Data\"\n        CASS[(Cassandra<br/>User Data)]:::data\n        EVC[(EVCache<br/>Redis/Memcached)]:::data\n        S3[(S3<br/>Source Content)]:::data\n    end\n\n    TV --> OCA1\n    MOB --> OCA2\n    WEB --> OCA3\n    OCA1 --> ENC\n    OCA3 --> ENC\n    ENC --> CH\n    CH --> PK\n    PK --> QA\n    QA --> OCA1\n    QA --> OCA2\n    QA --> OCA3\n    CG --> NR\n    NR --> RR\n    RR --> EVC\n    CM --> ENC\n    LM --> CG\n    CK --> CASS\n    HYSTRIX --> ENC\n    HYSTRIX --> CG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom CDN at ISP peering points saves hundreds of millions in bandwidth costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy Open Connect-style appliances at ISP peer points; pre-populate popular content; use tiered cache architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-title encoding optimization reduces bandwidth 30-50% without quality loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run probe encodes with VMAF scoring; build convex hull per title; use only encoding ladder points on the Pareto frontier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-stage recommendation pipeline drives 80% of watch time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Candidate generation (narrow 10K→500), neural ranking (score), re-ranking (diversity + freshness)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos engineering builds confidence in production resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with Chaos Monkey (instance termination), escalate to Chaos Kong (region failover); always define a steady state hypothesis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hystrix circuit breakers with thread pool isolation prevent cascading failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrap every inter-service call; use timeout per tier (10/50/100ms); fail fast with fallback responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region active-active with Cassandra cross-region replication enables rapid failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run all regions active; use local quorum for reads; async cross-region replication; chaos-test region failures quarterly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A/B testing every change validates impact before full rollout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use deterministic user assignment; run experiments for 2+ weeks; use CUPED for variance reduction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-4k-hdr-live-sports-event-streaming",
      children: "Case Study: 4K HDR Live Sports Event Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix enters the live sports streaming market with a championship boxing match. The event originates from Las Vegas in 4K HDR at 60fps. The ingest pipeline must encode and distribute with less than 30 seconds of glass-to-glass latency to 50M+ concurrent viewers worldwide. Unlike on-demand content, there is no opportunity to pre-encode or pre-populate the CDN."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The live ingest architecture uses a regional edge encoder in Las Vegas that receives the 8K source feed. The encoder runs the per-title analysis on-the-fly, detecting scene complexity from the first 5 seconds of each camera angle and constructing an optimized encoding ladder. Instead of 200 profiles, the live encoder uses 8 profiles (240p through 4K HDR) because the latency budget does not allow for exhaustive encoding. Each 2-second chunk is encoded in parallel across GPU-equipped workers. The first chunk (lowest resolution) is available at T+8 seconds; the full ladder completes by T+20 seconds. Chunks propagate through a \"live cascade\" from the venue OCA to regional OCAs to ISP OCAs using UDP multicast for the backbone hops and TCP for the last mile."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The failover plan spans three redundant ingest paths: the primary fiber link (latency 5ms), a secondary 5G bonding link (latency 20ms), and a satellite backup (latency 600ms — degraded quality only). When the primary link drops at T+15 minutes, the system switches to the secondary path within 3 seconds. Viewers see a momentary quality downgrade from 4K to 1080p as the encoder restarts on the secondary path. Chaos Kong validates the failover quarterly by simulating the loss of the US-West region, confirming that EU and APAC viewers continue streaming from their regional OCAs without interruption."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-personalized-home-page-for-a-new-user",
      children: "Case Study: Personalized Home Page for a New User"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user signs up for Netflix for the first time. They have no watch history, no ratings, and no profile preferences. The recommendation system faces the cold-start problem: collaborative filtering cannot generate candidates because the user-item interaction matrix has no entries for this user."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cold-start pipeline activates immediately. During onboarding, the user selects 3+ genres from a visually engaging tile picker. This selection is used as seed preferences for content-based filtering: the system computes the feature vectors for all titles in the selected genres (weighted by critical rating and popularity) and generates an initial candidate pool of 500 titles. The neural ranker scores these candidates using demographic features (the user's country, age range inferred from signup email domain, device type) and the selected genre preferences. The re-ranker ensures diversity across the genre selections and includes 20% \"exploration\" titles from outside the selected genres to broaden discovery."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the user watches 10 titles, the system transitions to hybrid recommendations: 70% collaborative filtering (using implicit signals from viewing behavior) and 30% content-based (using the initial genre preferences, now supplemented by actual viewing patterns). The A/B testing framework measures whether the hybrid approach increases 7-day retention compared to pure content-based recommendations. The experiment runs for 2 weeks across 5% of new users. If the hybrid model shows a statistically significant improvement in watch time, it is rolled out to 100% of new users in the next deployment cycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-1",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open Connect, Netflix's custom CDN deployed at ISP peering points, serves 95%+ of traffic and eliminates commercial CDN costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The migration from monolith to 800+ microservices was an 8-year effort driven by a catastrophic database failure in 2008"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adaptive bitrate streaming using DASH/HLS with CMAF single-format delivery provides seamless quality transitions across all devices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-title encoding optimization uses VMAF and convex hull analysis to create custom encoding ladders, saving bandwidth without sacrificing perceived quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The recommendation pipeline (candidate generation ? neural ranking ? re-ranking) drives 80% of watch time with under 500ms inference latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chaos engineering (Chaos Monkey, Latency Monkey, Chaos Kong) proactively tests infrastructure resilience through controlled failure injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hystrix circuit breakers with thread pool isolation, timeouts, and fallbacks prevent cascading failures across the microservice architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-region active-active operation with Cassandra cross-region replication and EVCache enables seamless region failover"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Zuul API gateway handles authentication, routing, rate limiting, and multi-region request distribution at the edge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A/B testing and continuous deployment via Spinnaker enable rapid, safe feature rollout across the global subscriber base"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. **Stage 1: Candidate Generation** narrows 10,000+ titles to ~500 using collaborative filtering (ALS matrix factorization), content-based filtering (feature vectors), trending/popular, and contextual signals. **Stage 2: Ranking** uses a deep MLP neural network with 3-5 hidden layers (1000+ neurons) to score candidates on user, title, context, and interaction features. **Stage 3: Re-Ranking** applies diversity, freshness, row-level variety, and A/B test constraints to produce the final ~40 titles shown on the home page.\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Per-title encoding"
            }), " analyzes source content complexity (spatial detail SI, temporal motion TI), runs probe encodes at multiple bitrates, measures quality with VMAF (Video Multi-Method Assessment Fusion), builds a convex hull of bitrate vs quality, and selects encoding ladder points on the Pareto frontier. Simple content (talking heads) needs only 12 profiles; complex content (action movies) needs up to 40."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaos Monkey"
            }), " terminates individual EC2 instances in production to validate auto-scaling and retry mechanisms. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaos Kong"
            }), " simulates an entire AWS region failure to validate active-active failover. Chaos Monkey's blast radius is a single instance; Chaos Kong's is an entire region. Chaos Monkey runs continuously; Chaos Kong runs quarterly with cross-org coordination."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hystrix"
            }), " wraps every inter-service call with a circuit breaker. When failures exceed a threshold, the circuit opens and requests fail fast instead of waiting for timeout. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread pool isolation"
            }), " ensures each downstream dependency has its own thread pool — a failure in one service cannot exhaust the caller's resources. In ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "HALF-OPEN"
            }), " state, one test request is allowed; success closes the circuit, failure re-opens it."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Open Connect"
            }), " appliances are purpose-built servers (100TB+ NVMe, 100Gbps NICs) deployed inside ISP data centers. Unlike commercial CDNs, OCAs are pre-populated with popular content via fill commands, use custom FreeBSD caching software with popularity-weighted eviction, and serve 95%+ of traffic from ISP peer points. Content is tiered: Tier 1 (ISP POP) → Tier 2 (colo) → S3 origin."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. **Cost-Optimized Encoding**: Encode all content to at least 720p (standard ladder, $2/hr). For 4K TV content (20% of watch time), also encode at 4K using per-title optimization ($2.50/hr). Current library (50K hrs): 80% × $2 + 20% × $2.50 = $1.60 + $0.50 = $2.10/hr avg = $105K/year. New content (5K hrs/year) = $10.5K/year. Total: $115.5K/year vs $250K/year for all-4K → saving $134.5K/year (54%).\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Global CDN"
            }), ": Use a scoring function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cache_priority = global_popularity^0.4 × regional_popularity^0.6 × freshness_boost"
            }), ". Pre-populate all content with score > 0.8 in every OCA. For local content, boost regional_popularity to 1.0 in home region. Use 100TB per OCA: top 10% of global catalog (17K titles × 10GB = 170TB) exceeds single OCA capacity, so per-region subsets are needed based on regional popularity."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cold-Start Strategy"
            }), ": During onboarding, users select 3+ genres. Use content-based filtering with genre feature vectors for initial candidates. Apply demographic features (country, inferred age, device type) as ranking weights. Reserve 20% of slots for exploration titles. After 10 views, transition to hybrid: 70% collaborative filtering (ALS on implicit signals from viewing behavior) + 30% content-based. Use multivariate A/B testing to validate cold-start algorithm variants."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Solution>\n**Live Streaming at Netflix Scale**\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use 2-second chunks (balancing latency vs encoding efficiency). Parallelize encoding across GPU workers: each chunk is independently encoded at 8 profiles. First chunk (lowest resolution) available at T+6s; full ladder at T+20s. Use a \"live cascade\" from venue → regional OCA (UDP multicast) → ISP OCA (TCP). Time to first byte for Australia viewer: venue→US West (50ms) + transpacific fiber (150ms) + Australia OCA (10ms) = ~210ms."
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ingest failover"
          }), ": Three redundant paths — primary fiber (5ms), secondary 5G bonding (20ms), satellite backup (600ms degraded). Automatic switchover within 3 seconds on primary loss. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Time-shifted viewing"
          }), ": Maintain a rolling buffer of the last 2 hours in HLS format. Live viewers get the 2s latest segment; late joiners start from an earlier segment. Transition live→on-demand at event end: finalize manifests, trigger regular CDN pre-population. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "C3 ad insertion"
          }), ": Use HLS interstitials (EXT-X-DATERANGE) to mark ad breaks. Server-side ad insertion replaces segments during manifest generation, ensuring frame-accurate transitions."]
        }), "\n"]
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