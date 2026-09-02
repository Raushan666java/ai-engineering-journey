"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[56883],{

/***/ 18752
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_18_case_studies_classic_md_8db_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-18-case-studies-classic-md-8db.json
const site_docs_courses_system_design_18_case_studies_classic_md_8db_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/18-case-studies-classic","title":"Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin","description":"Previous 19 Case Study Whatsapp","source":"@site/docs/courses/system-design/18-case-studies-classic.md","sourceDirName":"courses/system-design","slug":"/system-design/18-case-studies-classic","permalink":"/ai-engineering-journey/system-design/18-case-studies-classic","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-case-studies-classic","slug":"/system-design/18-case-studies-classic","title":"Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin","sidebar_label":"Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin","sidebar_position":18},"sidebar":"course-system-design","previous":{"title":"Chapter 17: Observability and Resiliency Patterns","permalink":"/ai-engineering-journey/system-design/17-observability-resiliency"},"next":{"title":"Chapter 19: Case Study — WhatsApp and Real-Time Messaging","permalink":"/ai-engineering-journey/system-design/19-case-study-whatsapp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/18-case-studies-classic.md


const frontMatter = {
	id: '18-case-studies-classic',
	slug: '/system-design/18-case-studies-classic',
	title: 'Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin',
	sidebar_label: 'Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin';

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
  "value": "Case Study: URL Shortener",
  "id": "case-study-url-shortener",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Estimation",
  "id": "estimation",
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
  "value": "Implementation: Classic Case Studies",
  "id": "implementation-classic-case-studies",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Case Study: Rate Limiter",
  "id": "case-study-rate-limiter",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-1",
  "level": 3
}, {
  "value": "Estimation",
  "id": "estimation-1",
  "level": 3
}, {
  "value": "High-Level Design",
  "id": "high-level-design-1",
  "level": 3
}, {
  "value": "Deep Dive",
  "id": "deep-dive-1",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary-1",
  "level": 3
}, {
  "value": "Case Study: Pastebin",
  "id": "case-study-pastebin",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-2",
  "level": 3
}, {
  "value": "Estimation",
  "id": "estimation-2",
  "level": 3
}, {
  "value": "High-Level Design",
  "id": "high-level-design-2",
  "level": 3
}, {
  "value": "Deep Dive",
  "id": "deep-dive-2",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary-2",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "TypeScript: URL Shortener with Base62, Collision Handling, and Redirection",
  "id": "typescript-url-shortener-with-base62-collision-handling-and-redirection",
  "level": 3
}, {
  "value": "TypeScript: Web Crawler with URL Frontier, Politeness, and Dedup",
  "id": "typescript-web-crawler-with-url-frontier-politeness-and-dedup",
  "level": 3
}, {
  "value": "URL Shortener Read/Write Path Architecture",
  "id": "url-shortener-readwrite-path-architecture",
  "level": 3
}, {
  "value": "TypeScript: URL Shortener, Rate Limiter, and Pastebin",
  "id": "typescript-url-shortener-rate-limiter-and-pastebin",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary-3",
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
    annotation: "annotation",
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
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-18-case-study--url-shortener-rate-limiter-pastebin",
        children: "Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/17-observability-resiliency",
          children: "17 Observability Resiliency"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/19-case-study-whatsapp",
          children: "19 Case Study Whatsapp"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a globally distributed URL shortening service with high read throughput and low redirect latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a distributed rate limiter using Redis with sliding window algorithms and Lua scripting for atomicity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a content-addressable pastebin service with deduplication, automatic expiry, and CDN-backed delivery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the trade-offs between hashing strategies, storage engines, and caching layers for write-once read-many workloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand how to pre-generate unique identifiers to avoid database contention on write paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare token bucket, leaky bucket, fixed window, and sliding window algorithms for rate limiting at scale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "flowchart LR\n    A[Theory] --> B[Case Study: URL Shortener]\n    C[Case Study: Rate Limiter]\n    B --> C\n    D[Case Study: Pastebin]\n    C --> D\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | Classic case studies: URL shortener, rate limiter, chat system |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | System decomposition, architecture comparison |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "Core concepts covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, Case Study: URL Shortener, Case Study: Rate Limiter, Case Study: Pastebin"
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
        children: "flowchart LR\n    A[Theory]\n    B[Case Study URL Shortener]\n    A --> B\n    C[Case Study Rate Limiter]\n    B --> C\n    D[Case Study Pastebin]\n    C --> D\n    E[Concept Comparison]\n    D --> E\n    F[Quick Reference]\n    E --> F\n    G[CrossApplication Matrix]\n    F --> G\n    H[Chapter Quiz]\n    G --> H\n"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/18-url-shortener-rate-limiter.png",
        alt: "URL Shortener Rate Limiter Pastebin Flowchart"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nEvery system design begins with precise functional and non-functional requirements. Ambiguity is the enemy of good architecture."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Shortener Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Generate short URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input a long URL, output a short key (6-8 characters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "301 or 302 redirect from short URL to original long URL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom alias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional user-defined short path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-link click count, referrer, geo, timestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional expiration for time-limited campaigns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 million URLs created per month"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40 writes per second (100M / ~2.6M sec/month)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~400 reads per second (10:1 read-to-write ratio)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirects under 10ms end-to-end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99% (four nines) — redirects must always work"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limiter Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Per-user quota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 requests per minute per API key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-IP quota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 requests per minute per source IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent enforcement across all app servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less than 1ms added to request path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-endpoint rules, burst allowances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inform clients of remaining quota and reset time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 1% of true rate under normal conditions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pastebin Requirements"
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
            children: "Create paste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept text content, return URL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax highlighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-detect or explicit language tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional TTL: 10min, 1hr, 1day, 1week, 1month, never"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public, unlisted (random URL), private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-once, read-many, content never changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M paste creations/day, 50M reads/day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw text + metadata, average paste ~10KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popular pastes served from edge"
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
      children: "Orders of magnitude matter. We compute storage, bandwidth, and QPS before choosing components."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Shortener Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100M URLs/month × 12 months = 1.2B URLs/year"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average entry: short key (8 bytes) + long URL (2048 bytes avg) + created_at (8 bytes) + user_id (8 bytes) + metadata (~200 bytes) = ~2.3KB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total per year: 1.2B × 2.3KB ˜ 2.8TB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With replication factor 3 and Cassandra overhead: ~10TB/year"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache: 80% of reads hit 20% of URLs (Pareto). Top 200M URLs in Redis: 200M × 2.3KB ˜ 460GB. Use Redis Cluster with sharding."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bandwidth writes: 40 QPS × 2.3KB ˜ 92KB/sec (trivial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bandwidth reads: 400 QPS × 2.3KB ˜ 920KB/sec"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limiter Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100M users × ~200 bytes/user (counter state) = 20GB if stored per-user"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis optimization: window data per key is small (<100 bytes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total Redis memory: ~2-4GB for 10M active daily users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network: rate limiter check adds ~1 round trip per request (or zero with local cache)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pastebin Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1M pastes/day × 10KB avg = 10GB/day raw content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30 days × 10GB = 300GB hot storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metadata: 1M × 1KB = 1GB/day ? 30GB/month"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object store (S3) costs: ~$23/TB/month for standard tier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transition infrequent-access pastes to S3 Glacier after 30 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDN: cache popular pastes (Pareto: 10% of pastes serve 90% of reads)"
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
      children: "Logical architecture before physical implementation. We decompose the system into collaborating services."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Shortener HLD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? CDN (static assets) ? Load Balancer (Round Robin) ? App Server Pool\n  +--? Write Path: KGS (Key Generation Service) ? Redis (cache) ? Cassandra (persistence)\n  +--? Read Path:  Redis (cache hit) ? Cassandra (cache miss ? populate cache)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Key Generation Service is the central innovation. A naive approach generates a random key on each write, requiring a database uniqueness check per request. KGS pre-generates batches of unique keys and marks them as used in a separate database table. Each app server maintains a local pool of 10,000 pre-generated keys, eliminating the database write bottleneck for ID generation entirely."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limiter HLD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? Load Balancer ? App Server (local rate limiter cache)\n  ? Redis Cluster (distributed counter, Lua scripting)\n  ? API Gateway (global rate limit rules)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The rate limiter sits in front of the API. A middleware layer intercepts each request, extracts the user or IP identifier, checks the current count, and either allows or rejects the request. The decision is cached locally on each app server to minimize Redis round trips for high-volume users."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pastebin HLD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? CDN (CloudFront) ? Load Balancer (ELB) ? App Server Pool (EC2 Auto Scaling)\n  +-- Write: S3 Object Store (paste content, keyed by SHA-256)\n  +-- Metadata: PostgreSQL RDS (Multi-AZ, with read replicas)\n  +-- Cache: ElastiCache Redis (popular metadata + rendered HTML)\n  +-- Search: Elasticsearch (full-text search over content and language)\n  +-- Workers: SQS ? Lambda (expiry, syntax highlighting, CDN pre-warm)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pastes are content-addressed. The server computes SHA-256(content) to generate a unique hash. If the hash already exists in the metadata database, the system returns the existing URL (deduplication). This approach guarantees that identical content always maps to the same paste, saving storage and reducing redundancy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Component Decision Matrix"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following table captures the rationale for each technology choice in the Pastebin architecture:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options Considered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chosen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, GCS, MinIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle policies for automated tier transitions, 11 nines durability, global edge presence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, MySQL, Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational schema with ACID for deduplication check, partial indexes for expiry queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis, Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich data structures (sorted sets for trending), persistence, pub-sub for cache invalidation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch, Algolia, MeiliSearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search with custom scoring, aggregations for language and category statistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQS, RabbitMQ, Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully managed, infinite retention window, dead-letter queues for failed highlighting jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax highlight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pygments, highlight.js, Prism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pygments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500+ language support, server-side execution with no client dependency, active community"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-phase",
      children: "Deep Dive Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now we examine the hard problems — the details that separate a toy from a production system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparative Analysis: Three Approaches to Unique ID Generation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most critical decision in a URL shortener is how to generate unique, collision-free keys. Three approaches dominate, each with distinct trade-offs:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collision Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base62 from counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "62^N (deterministic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) lookup on primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) increment + encode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 truncation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^56 (7 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Birthday bound: ~2.4B keys for 50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) on hash index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) hash + collision check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Snowflake ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^63 (signed 64-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero (monotonic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) range index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) server-local increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Base62 with a counter-based ID (distributed sequence generator) is the most practical choice. It guarantees no collisions, produces short keys, and the Counter can be sharded per server (e.g., server 1 generates IDs 1, N+1, 2N+1...). The encoding function is trivial:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "BASE62 = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\"\n\ndef encode_base62(num):\n    if num == 0:\n        return BASE62[0]\n    result = []\n    while num > 0:\n        num, rem = divmod(num, 62)\n        result.append(BASE62[rem])\n    return ''.join(reversed(result))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With 7 characters, Base62 gives us 62^7 ˜ 3.5 trillion unique keys. At 100M new URLs per month, this space lasts ~3,500 years."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Shortener Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hashing strategy is the first architectural decision. Base62 encoding (a-z, A-Z, 0-9 = 62 characters) produces short, human-readable keys. With 7 characters, we have 62^7 ˜ 3.5 trillion unique keys. MD5 hash truncation produces a 128-bit hash, truncated to the first 7 bytes, then Base62 encoded. The risk is collision: with 3.5 trillion keys and a truncated hash, the birthday paradox gives a ~50% collision probability at ~2.4 billion keys. For a URL shortener, collisions are unacceptable because they would redirect one URL to another."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Collision resolution strategies include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Append a counter"
        }), ": When a collision is detected, append a sequence number and re-hash."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback to longer key"
        }), ": If the first 7 characters collide, try 8, then 9 characters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use a counter-based ID"
        }), ": Increment a distributed counter (e.g., Snowflake ID or Redis INCR), then Base62 encode the numeric value. This guarantees uniqueness without collisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Shortener Security and Abuse Prevention"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL shorteners are a favorite tool for attackers. Shortened URLs obscure the destination, making them ideal for phishing and malware distribution. Security measures include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "URL validation on creation"
        }), ": Before generating a short URL, the system checks the long URL against known malware blocklists (Google Safe Browsing API, PhishTank, custom blocklists). Suspicious URLs are rejected with an error or flagged for manual review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Click-through warning"
        }), ": If a short URL has been reported as abusive or the destination domain has a low reputation score, users see an interstitial warning page before being redirected. The warning page shows the full destination URL and a \"Proceed at your own risk\" button."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limiting on creation"
        }), ": Per-IP and per-user limits on URL creation prevent bulk generation of malicious links. A single user creating 1,000 URLs in 5 minutes is throttled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expiring suspicious URLs"
        }), ": Newly created URLs that have zero clicks in 7 days and were flagged by the URL validator are automatically deleted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QR code generation"
        }), ": Short URLs are frequently encoded into QR codes. The system generates QR codes server-side with embedded expiry, ensuring that printed QR codes for time-limited campaigns stop working after expiry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The KGS approach uses a database-backed pool of pre-generated keys. A key table stores ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(id, key, is_used)"
      }), " rows. When an app server runs low on keys, it requests a batch of 10,000, atomically marking them as used. This design ensures:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No database contention on the write path for key generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables key recycling (reuse keys from deleted URLs after a grace period)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides consistent key length (no variable-length URLs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates collision entirely since each key is handed out exactly once"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache strategy: Use Redis with write-through and read-through. On write, store in both Redis and Cassandra. On read, check Redis first. The 301 vs 302 redirect decision matters. 301 (Moved Permanently) is cached by browsers and reduces server load but makes analytics harder because the browser never contacts the server again for that URL. 302 (Found) is not cached and passes through the server, enabling analytics tracking. The canonical answer: use 301 for most URLs (performance) but 302 for custom short URLs or analytics-tracked campaigns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Analytics tracking uses an asynchronous pipeline. The redirect returns immediately; an event is published to Kafka containing the short key, timestamp, referrer, user-agent, and IP geolocation. Downstream consumers process Kafka events into a time-series database (ClickHouse or Druid) for dashboard queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Sharding and Read Replicas"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At 1.2B URLs/year, a single database instance becomes a bottleneck. The sharding strategy uses the short key as the shard key with consistent hashing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "shard_id = hash(short_key) % NUM_SHARDS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With 64 shards and replication factor 3, each shard handles ~20M URLs/year. Each shard has one writer and two read replicas. Writes go to the writer; reads go to the replicas via round-robin (for Redis cache misses). This gives a read capacity of ~5,000 QPS at the database layer, well above the 400 QPS read requirement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Read Replica Lag and Consistency"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cache-aside pattern with write-through ensures that recent writes are always in Redis. Database read replicas may lag by up to 100ms. The consistency guarantee: after a successful write, the next read hits Redis (populated during write). If Redis is down and the read replica has not yet replicated the write, the user sees a stale redirect. For a URL shortener, this is acceptable — the user created the URL and the redirect works, just pointing to an old URL if they recently edited it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limiter Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Four algorithm choices with distinct trade-offs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Token Bucket"
      }), ": A bucket holds N tokens. Each request consumes 1 token. Tokens refill at rate R per second. Bursts of up to N requests pass through immediately. Implementation is simple with a single Redis key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bucket:{id}"
      }), " storing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(tokens, last_refill_timestamp)"
      }), ". The burst tolerance makes it ideal for API gateways handling traffic spikes. However, a sustained rate above R eventually exhausts the bucket and blocks all traffic until refill."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Leaky Bucket"
      }), ": Requests enter a queue of size N. A worker processes requests at rate R per second. Excess requests are discarded. This smooths traffic perfectly but introduces queuing latency and cannot handle bursts naturally. Useful for downstream services with fixed processing capacity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixed Window"
      }), ": Count requests in a window ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[T, T+60s)"
      }), ". If count exceeds threshold, reject. Simple to implement with Redis ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INCR"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPIRE"
      }), ". The boundary problem: if a user sends 100 requests at 0:59 and 100 more at 1:01, they serve 200 requests in a 2-second period while the 1-minute window shows only 100 each. This can allow 2x the allowed rate at window boundaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding Window Log"
      }), ": Maintain a sorted set of timestamps per user (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZADD"
      }), "). Count timestamps in the last 60 seconds with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZCOUNT"
      }), ". Reject if over limit. This is perfectly accurate (no boundary problem) but memory-intensive. A user with 100 req/min stores 100 entries per window. At 10M active users, this is prohibitive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding Window Counter"
      }), ": The compromise. Track the current window's counter and the previous window's counter. Calculate:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "weighted_count = current_count + previous_count × (window_elapsed / window_size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This approximates the true sliding window rate with O(1) storage per user — just two counters per key. Redis Lua script:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-lua",
        children: "local key = KEYS[1]\nlocal limit = tonumber(ARGV[1])\nlocal window = tonumber(ARGV[2])\nlocal now = tonumber(ARGV[3])\n\nlocal current_window = math.floor(now / window)\nlocal previous_window = current_window - 1\n\nlocal current_count = redis.call(\"GET\", key .. \":\" .. current_window) or 0\nlocal previous_count = redis.call(\"GET\", key .. \":\" .. previous_window) or 0\n\nlocal elapsed = (now % window) / window\nlocal weighted = current_count + previous_count * elapsed\n\nif weighted >= limit then\n    return 0  -- rate limited\nend\n\nredis.call(\"INCR\", key .. \":\" .. current_window)\nredis.call(\"EXPIRE\", key .. \":\" .. current_window, window * 2)\nreturn 1  -- allowed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local caching reduces Redis pressure by 10x. Each app server pre-allocates a batch of tokens (e.g., 10) and serves requests from memory until the batch is consumed, then requests a new batch from Redis. The cost is a slight overshoot on the rate limit (up to 10 requests per server per batch cycle). For most APIs, this accuracy trade-off is acceptable in exchange for eliminating 90% of Redis round trips."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rate limit headers follow the standard convention:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "X-RateLimit-Limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum requests per window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "X-RateLimit-Remaining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remaining requests in current window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "X-RateLimit-Reset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix timestamp when the window resets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Retry-After"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds to wait before retrying (on 429)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Handling hot users requires priority queuing. If a single user sends 10,000 req/s, their rate limiter key becomes a Redis hot spot. Solution: split the user's counter across N shards (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user:{id}:shard:{0..N}"
      }), ") and check each shard independently. The error margin increases slightly but the hot key is eliminated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pastebin Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content addressing via SHA-256 enables automatic deduplication. When a user creates a paste, the server:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receives the content and optional metadata (language, expiry, visibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computes SHA-256(content) to produce a 64-character hex digest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks the metadata database for an existing entry with this hash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found and permissions match, returns the existing URL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not found, uploads content to S3 with the hash as the object key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates a metadata record in PostgreSQL (hash, language, expiry, visibility, created_at, access_count)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates a short URL from the hash or a separate auto-increment ID for public pastes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deduplication at scale means that extremely popular content (source code snippets, error logs, configuration files) is stored once regardless of how many times users paste it. The hash serves as both the content identifier and the storage key."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expiry logic uses a TTL column in PostgreSQL and a background worker. The worker queries for expired pastes every 60 seconds, marks them as deleted in metadata, and issues S3 lifecycle rules to delete the underlying objects. For user experience, deleted pastes return a 410 Gone response with a clear message."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S3 lifecycle policies automate storage tier transitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Days 0-30: S3 Standard (frequent access)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Days 31-90: S3 Infrequent Access (IA, lower storage cost)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Days 91-365: S3 Glacier (archival, ~$1/TB/month)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After 365: S3 Glacier Deep Archive or deletion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The syntax highlighting pipeline processes pastes asynchronously. When a paste is created, the language is auto-detected (or specified by the user). A background worker runs a syntax highlighter (Pygments or highlight.js server-side) and stores the rendered HTML alongside the raw text. This pre-rendered HTML is served directly to clients, avoiding client-side processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CDN integration caches popular pastes at edge locations. The CDN key is the paste hash. When a paste receives more than a configurable threshold of requests (e.g., 1000/hour), the CDN is pre-warmed with the paste content. Subsequent requests bypass the origin entirely, reducing latency to <10ms globally."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limiting for Pastebin Create and Read"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pastebin's traffic asymmetry (50M reads vs 1M writes per day) means the create path is the primary abuse vector. Rate limiting applies differently to each operation:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unauthenticated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authenticated (Free)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authenticated (Pro)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create paste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 per hour, per IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 per hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 per hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read paste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 per minute, per IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 per minute, per IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 per minute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 per minute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Abuse detection on the create path includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content fingerprinting"
        }), ": Compute a rolling hash (Rabin-Karp) of submitted content to detect duplicate spam even with minor variations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Honeypot fields"
        }), ": Hidden form fields that only bots fill in; if populated, reject without processing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP reputation"
        }), ": Real-time check against known spammer IP ranges and VPN/proxy detection services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limit tiers verified via email"
        }), ": Unverified users have stricter limits; email verification raises the tier"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pastebin Data Model"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The PostgreSQL schema for paste metadata:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE pastes (\n    id BIGSERIAL PRIMARY KEY,\n    short_id VARCHAR(12) UNIQUE NOT NULL,\n    content_hash VARCHAR(64) NOT NULL,       -- SHA-256\n    s3_key VARCHAR(128) NOT NULL,\n    language VARCHAR(32) DEFAULT 'text',\n    visibility VARCHAR(10) DEFAULT 'public', -- public, unlisted, private\n    user_id BIGINT,                           -- nullable for anonymous\n    ip_address INET NOT NULL,\n    content_length INT NOT NULL,\n    title VARCHAR(256),\n    expires_at TIMESTAMPTZ,\n    created_at TIMESTAMPTZ DEFAULT NOW(),\n    is_deleted BOOLEAN DEFAULT FALSE\n);\n\nCREATE INDEX idx_pastes_hash ON pastes (content_hash) WHERE is_deleted = FALSE;\nCREATE INDEX idx_pastes_expiry ON pastes (expires_at) WHERE expires_at IS NOT NULL AND is_deleted = FALSE;\nCREATE INDEX idx_pastes_user ON pastes (user_id) WHERE is_deleted = FALSE;\nCREATE INDEX idx_pastes_created ON pastes (created_at DESC);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "content_hash"
      }), " unique index enables O(1) deduplication lookup. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "short_id"
      }), " is the public-facing URL key (either truncated hash or sequential counter). The partial index on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expires_at"
      }), " ensures the expiry worker scan is efficient even with billions of pastes, because most pastes have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expires_at IS NULL"
      }), " (no expiry)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-url-shortener",
      children: "Case Study: URL Shortener"
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
      children: "Alice runs a marketing platform that needs branded short URLs for client campaigns. Requirements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50M short URLs created per month initially"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "400 reads per write (heavy read bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom alias support for brand URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click analytics with geographic breakdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "99.99% availability SLA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "estimation",
      children: "Estimation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Writes/sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 (50M/month)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reads/sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage/year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.4TB raw, ~5TB with replication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200GB (top 100M URLs in Redis)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 Mbps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-design",
      children: "High-Level Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? CloudFront (CDN for redirects?) ? ELB ? EC2 App Servers (auto-scaling)\n  ? KGS (MySQL for key batches) ? Redis Cluster (cache, 10 shards)\n  ? Cassandra Cluster (6 nodes, RF=3) ? Kafka ? ClickHouse (analytics)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive",
      children: "Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key generation service uses a dedicated MySQL table with two columns: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(id, short_key, is_used)"
      }), ". A batch processor pre-generates 1M keys daily and stores them. App servers pull batches of 1,000 keys via a stored procedure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "BEGIN TRANSACTION;\nSELECT short_key FROM key_pool WHERE is_used = FALSE LIMIT 1000 FOR UPDATE;\nUPDATE key_pool SET is_used = TRUE WHERE short_key IN (...);\nCOMMIT;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App servers cache 10,000 keys in memory, requesting replacement when the pool drops below 1,000. This eliminates write-path database contention entirely."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache hierarchy: L1 (local app server LRU cache, 10MB, ~5,000 entries) ? L2 (Redis Cluster, 200GB, ~100M entries) ? Cassandra (full dataset). A Bloom filter in front of Cassandra eliminates unnecessary lookups for non-existent short URLs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache Invalidation Strategy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user updates a custom short URL's target, the cache must be invalidated:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The write path updates Cassandra first (strong consistency on the short URL's primary shard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After Cassandra acknowledges the write, Redis is updated with the new value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A cache invalidation message is published to a Redis pub-sub channel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All app servers subscribe to this channel and evict the stale entry from their L1 cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next read hits Redis (L2), which has the updated value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This invalidation strategy ensures that cache inconsistency window is bounded by the Redis update time (~1ms) plus the L1 pub-sub propagation time (~10-50ms). No stale entry persists beyond 100ms."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operational Monitoring and Alerting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key metrics tracked for the URL shortener:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redirect latency P50/P99/P99.9"
        }), ": Alert if P99 exceeds 20ms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache hit ratio"
        }), ": Alert if L1 + L2 combined hit ratio drops below 99.5% (target: 99.9%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KGS key pool depth"
        }), ": Alert if the pre-generated key pool drops below 1M keys (reserve for 1 hour)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cassandra read/write latency"
        }), ": Alert if P99 exceeds 50ms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error rate (4xx/5xx)"
        }), ": Alert if error rate exceeds 0.1% for 5 consecutive minutes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bloom filter false positive rate"
        }), ": Tracked weekly; if above 0.1%, the filter is rebuilt with larger capacity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-classic-case-studies",
      children: "Implementation: Classic Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TwitterCloneArchitecture {\n  private tweets = new Map<string, { id: string; userId: string; content: string; timestamp: number; likes: number }>();\n  private follows = new Map<string, Set<string>>(); private timelines = new Map<string, string[]>();\n  postTweet(userId: string, content: string): string { if (content.length > 280) throw new Error(\"Too long\"); const id = `tweet-${Date.now()}`; this.tweets.set(id, { id, userId, content, timestamp: Date.now(), likes: 0 });\n    const followerIds = this.follows.get(userId); if (followerIds) { for (const fid of followerIds) { if (!this.timelines.has(fid)) this.timelines.set(fid, []); this.timelines.get(fid)!.unshift(id); } }\n    if (!this.timelines.has(userId)) this.timelines.set(userId, []); this.timelines.get(userId)!.unshift(id); return id; }\n  getTimeline(userId: string, limit = 20): { id: string; content: string; author: string; timestamp: number }[] {\n    const ids = (this.timelines.get(userId) || []).slice(0, limit); return ids.map(id => { const t = this.tweets.get(id); return t ? { id: t.id, content: t.content, author: t.userId, timestamp: t.timestamp } : null; }).filter(Boolean) as any; }\n  follow(followerId: string, followeeId: string): void { if (!this.follows.has(followeeId)) this.follows.set(followeeId, new Set()); this.follows.get(followeeId)!.add(followerId); }\n}\nclass URLShortener { private urlMap = new Map<string, string>(); private reverseMap = new Map<string, string>();\n  shorten(url: string): string { if (this.reverseMap.has(url)) return this.reverseMap.get(url)!; const id = this.generateId(); this.urlMap.set(id, url); this.reverseMap.set(url, id); return id; }\n  resolve(id: string): string | undefined { return this.urlMap.get(id); }\n  private generateId(): string { return Math.random().toString(36).substring(2, 8); }\n}\nclass RateLimiterSlidingWindow { private windows = new Map<string, number[]>();\n  constructor(private maxRequests: number, private windowMs: number) {}\n  allow(key: string): boolean { const now = Date.now(); let window = this.windows.get(key) || []; window = window.filter(t => now - t < this.windowMs); if (window.length >= this.maxRequests) { this.windows.set(key, window); return false; } window.push(now); this.windows.set(key, window); return true; }\n}\nclass ChatSystem { private rooms = new Map<string, { messages: { user: string; text: string; ts: number }[]; users: Set<string> }>();\n  createRoom(id: string): void { this.rooms.set(id, { messages: [], users: new Set() }); }\n  joinRoom(roomId: string, userId: string): void { const room = this.rooms.get(roomId); if (room) room.users.add(userId); }\n  sendMessage(roomId: string, userId: string, text: string): void { const room = this.rooms.get(roomId); if (room && room.users.has(userId)) room.messages.push({ user: userId, text, ts: Date.now() }); }\n  getMessages(roomId: string, limit = 50): any[] { const room = this.rooms.get(roomId); return room ? room.messages.slice(-limit) : []; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case studies classic\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'case studies classic', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case studies classic - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'case studies classic' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KGS pre-generation eliminates write-path database hotspots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser caching via 301 redirects reduces server load by 80%+ for popular URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "301 vs 302 trades analytics precision for performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis write-through cache with L1 local cache achieves sub-10ms reads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cassandra provides write-optimized, horizontally scalable storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Async analytics pipeline decouples tracking from redirect latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision-free key generation requires counter-based or pre-generated IDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base62 encoding produces human-readable short URLs with sufficient entropy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-rate-limiter",
      children: "Case Study: Rate Limiter"
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
      children: "A public API platform serving 10,000 third-party developers. Each API key is rate-limited to 100 req/min for the free tier and 10,000 req/min for enterprise. The system must handle 500K req/s peak."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "estimation-1",
      children: "Estimation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Peak QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150,000 (3 counters per active key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30MB for counters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~500,000 checks/sec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5Gbps inbound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-design-1",
      children: "High-Level Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? ELB ? API Gateway (Zuul/Kong)\n  ? Rate Limiter Middleware\n    ? Local Token Cache (per-server)\n    ? Redis Cluster (distributed counters, Lua scripting)\n  ? Backend Services\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-1",
      children: "Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The token bucket variant used here is \"burst-aware.\" Each user is configured with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_burst"
      }), " (the bucket capacity) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refill_rate"
      }), " (tokens per second). Enterprise customers get a larger bucket and faster refill."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Redis Lua scripting ensures atomicity. The script is only ~20 lines but eliminates race conditions between checking and incrementing the counter. Without Lua, two concurrent requests could both read count=99, both increment, and both pass — allowing 101 requests instead of 100."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local caching is tiered by user plan. Free-tier users have no local cache (every request hits Redis). Enterprise users get a local batch of 100 tokens. This incentivizes upgrades while protecting the free-tier from abuse."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distributed Counter Synchronization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The fundamental challenge of distributed rate limiting is maintaining accurate state across many application servers without introducing a single point of failure. The solution space spans several approaches:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redis Load"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overshoot Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis on every request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1ms per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local batch (N tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+0ms (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced by N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to N per server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local batch + background sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventually consistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+0ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded by sync interval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRDT counters (Redis-free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+0ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded by merge interval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The production system uses a tiered approach: free-tier users check Redis on every request (strong consistency, every request counted accurately). Tier-2 users get a local cache of 10 tokens. Enterprise users get 100. The overshoot is bounded: at worst, a user exceeds their limit by (N × number_of_servers) tokens per window. With N=100 and 50 servers, the worst-case overshoot is 5,000 requests — acceptable for enterprise SLAs that specify \"burst up to 10x\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limit Header Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The rate limit response headers follow the IETF standard draft:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nX-RateLimit-Limit: 100\nX-RateLimit-Remaining: 87\nX-RateLimit-Reset: 1620000000\nRetry-After: 13\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-RateLimit-Remaining"
      }), " header is computed as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit - weighted_count"
      }), ", floored at zero. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-RateLimit-Reset"
      }), " is the Unix timestamp when the current window expires. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Retry-After"
      }), " header on 429 responses tells the client exactly how many seconds to wait before retrying."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Clients are expected to implement exponential backoff with jitter. A well-behaved client reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-RateLimit-Remaining"
      }), " and slows down as it approaches zero. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Retry-After"
      }), " header prevents thundering herd problems when all rate-limited clients retry simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary-1",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sliding window counter provides O(1) storage with sufficient accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lua scripting in Redis eliminates counter race conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local token batching reduces Redis load by 10x for trusted users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limit headers enable clients to self-regulate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sharding hot user keys prevents Redis hot spots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configurable rules per endpoint support tiered pricing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "<1ms overhead achieved with local cache hits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-pastebin",
      children: "Case Study: Pastebin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Real-world case studies reveal how architectural decisions map to business constraints at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-2",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A developer tool for sharing code snippets and logs. Pastes are write-once, read-many. Content ranges from 1-line shell commands to 10MB log files. Popular pastes can receive millions of views."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "estimation-2",
      children: "Estimation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Pastes/day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reads/day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average paste size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hot storage (30 days)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Archive storage (1 year)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.6TB in Glacier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN offload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90% of reads from edge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-design-2",
      children: "High-Level Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? CloudFront CDN ? ELB ? EC2 App Servers\n  ? S3 Object Store (paste content)\n  ? PostgreSQL (metadata, dedup)\n  ? Background Workers\n    +-- Expiry Worker (deletes expired pastes)\n    +-- Syntax Highlighting Worker\n    +-- CDN Pre-warm Worker\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-2",
      children: "Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content hashing for deduplication is the defining feature. SHA-256(content) produces a 64-character digest that serves as the S3 object key. The deduplication check is a simple primary key lookup in PostgreSQL. If the hash exists, the system returns the existing paste URL — but only if the visibility settings are compatible. A private paste that happens to match a public paste is treated as a new object (the hash is salted with a user-specific nonce)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The short URL for public pastes is generated from a truncated portion of the hash (first 8 hex characters ? 4 billion unique IDs) or from a sequential ID with the hash used only for storage deduplication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Syntax highlighting runs via a Celery-like task queue. The worker detects the language using file extension, shebang, or content heuristics (Pygments' lexer guessing). The rendered HTML is stored in both S3 (as a separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".html"
      }), " object) and in a CDN cache for fast delivery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Expiry uses a PostgreSQL partial index: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE INDEX idx_expired ON pastes (expires_at) WHERE expires_at IS NOT NULL"
      }), ". A cron-like worker runs every 60 seconds:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT id, s3_key FROM pastes WHERE expires_at < NOW() AND is_deleted = FALSE LIMIT 1000;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For each expired paste, the worker marks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_deleted = TRUE"
      }), " in metadata (soft delete for 30 days in case of accidental expiry), then schedules S3 object deletion via an async queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary-2",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content hashing enables free deduplication for identical pastes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA-256 as object key guarantees uniqueness in S3 without collisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Background workers decouple highlighting and expiry from request path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S3 lifecycle policies automate tier transitions and cost optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDN pre-warm reduces latency for viral content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soft delete window protects against accidental expiry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL partial index makes expiry queries efficient at scale"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: URL Shortener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Rate Limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: URL Shortener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Rate Limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Case Study: URL Shortener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Rate Limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: Pastebin"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary purpose of KGS in a URL shortener?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Generation Service — pre-generates unique keys to avoid write-path DB contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Gateway Service — routes traffic to key servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge Graph Service — stores URL metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Gateway Service — OS-level routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which rate limiting algorithm perfectly tracks the true rate without a boundary problem?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window Log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaky Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does Pastebin achieve deduplication?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing URL paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256 content hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-provided unique keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential ID generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the recommended Base62 key length for a URL shortener with 100M URLs/month?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the sliding window counter algorithm, how is the approximate count calculated?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current_count + previous_count × (elapsed/window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current_count + previous_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(current, previous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(current, previous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Pre-generate unique keys (KGS pattern) to eliminate write-path database contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL shorteners, ID generation services, coupon code generators — batch 10K keys per server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use 301 (permanent) redirect for most URLs, 302 (temporary) for analytics-tracked campaigns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default: 301 for all URLs. Override to 302 for campaign URLs that need per-click tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window counter in Redis balances accuracy and memory — O(1) storage per user, ~5% error margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API rate limiting: store two counters (current + previous window), use Lua for atomic check-and-increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content addressing via SHA-256 enables free deduplication for write-once read-many workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pastebin, image hosting, file sharing — identical content maps to same storage location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tier caching (L1 local → L2 Redis → DB) achieves 99%+ hit rates for read-heavy workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1: 10MB LRU per server (sub-ms). L2: Redis Cluster (1-5ms). L3: Cassandra/S3 (10-50ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 lifecycle policies automate storage tier transitions — Standard → IA → Glacier → Deep Archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-30d: Standard. 31-90d: IA. 91-365d: Glacier. >365d: Deep Archive or delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async analytics pipeline (Kafka → ClickHouse) decouples tracking from redirect latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL click analytics: publish to Kafka synchronously, consume asynchronously for dashboard queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario: Scaling a URL Shortener for Enterprise Marketing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A marketing analytics platform launches a branded URL shortener for enterprise clients. Each client wants custom domains (", (0,jsx_runtime.jsx)(_components.code, {
        children: "go.acme.com/link"
      }), "), per-domain analytics dashboards, and click tracking with geographic breakdown. Initial traffic is 10 million URLs/month, growing to 100 million within 6 months."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The team makes three critical architecture decisions. First, they implement KGS with a dedicated MySQL key_pool table. An hourly batch job generates 5 million keys (enough for 12 hours of growth). Each app server maintains a local pool of 10,000 keys, requesting a refill via a transactional stored procedure when the pool drops below 2,000. This eliminates any write-path database contention — key generation is purely an in-memory operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Second, they implement a multi-tier read path. L1 is a local LRU cache (10MB, ~5,000 entries) per server — sub-millisecond for hot URLs. L2 is a Redis Cluster (10 shards, 200GB total) — P99 read latency 2ms. A Bloom filter (m/n=9.6, k=7, 6MB per server) sits in front of Cassandra, eliminating 99% of lookups for non-existent short URLs. The combined cache hierarchy achieves a 99.7% hit rate, meaning only 0.3% of reads reach Cassandra."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Third, they deploy a click analytics pipeline using Kafka → ClickHouse. Each redirect publishes a small event to Kafka (short key, timestamp, referrer, user-agent, geo-IP). A ClickHouse consumer batch-inserts events every 5 seconds. Dashboard queries aggregate over 7-day windows with sub-second response times. The entire pipeline adds less than 2ms to the redirect path, and ClickHouse compresses the event stream to 0.5 bytes per event — storing 1 billion clicks/day in under 500MB."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The system handles 3,500 writes/second and 35,000 reads/second at peak with P99 redirect latency under 8ms. Monthly infrastructure cost is ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mn, {
                  children: "45"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "000"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "45,000 (vs "
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "45"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "000"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            })]
          })
        })]
      }), "280,000 estimated for a naive single-database design)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental to system design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study: URL Shortener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental to system design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across multiple system design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice has trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary trade-off discussed in this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>Refer to the chapter content</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " Which concept is most fundamental to the topic of Chapter 18"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Option A"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Option B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Option C"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Option D"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>Review the core sections</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " How does this chapter's main concept apply to real-world systems?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Option A"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Option B"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Option C"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Option D"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>See the Real-World Systems section</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-url-shortener-with-base62-collision-handling-and-redirection",
                  children: "TypeScript: URL Shortener with Base62, Collision Handling, and Redirection"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class URLShortener {\n  private store = new Map<string, string>();\n  private reverseStore = new Map<string, string>();\n  private counter = 1000000;\n  private customAliases = new Map<string, string>();\n  private clicks = new Map<string, number>();\n  private readonly BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\n\n  private encodeBase62(num: number): string {\n    if (num === 0) return this.BASE62[0];\n    let result = '';\n    while (num > 0) {\n      result = this.BASE62[num % 62] + result;\n      num = Math.floor(num / 62);\n    }\n    return result;\n  }\n\n  private hashUrl(url: string): string {\n    let h = 0;\n    for (let i = 0; i < url.length; i++) h = ((h << 5) - h + url.charCodeAt(i)) | 0;\n    return (h >>> 0).toString(36);\n  }\n\n  shorten(url: string, customAlias?: string): string {\n    if (this.reverseStore.has(url)) return this.reverseStore.get(url)!;\n\n    let shortId: string;\n    if (customAlias) {\n      if (this.store.has(customAlias) || this.customAliases.has(customAlias)) {\n        throw new Error('Custom alias already in use');\n      }\n      shortId = customAlias;\n      this.customAliases.set(customAlias, url);\n    } else {\n      shortId = this.encodeBase62(this.counter++);\n      while (this.store.has(shortId)) {\n        shortId = this.encodeBase62(this.counter++);\n      }\n    }\n\n    this.store.set(shortId, url);\n    this.reverseStore.set(url, shortId);\n    this.clicks.set(shortId, 0);\n    return shortId;\n  }\n\n  resolve(shortId: string, recordClick = true): { url?: string; statusCode: number } {\n    const url = this.store.get(shortId);\n    if (!url) return { statusCode: 404 };\n    if (recordClick) {\n      this.clicks.set(shortId, (this.clicks.get(shortId) ?? 0) + 1);\n    }\n    return { url, statusCode: 301 };\n  }\n\n  getClickCount(shortId: string): number { return this.clicks.get(shortId) ?? 0; }\n\n  delete(shortId: string): boolean {\n    const url = this.store.get(shortId);\n    if (!url) return false;\n    this.store.delete(shortId);\n    this.reverseStore.delete(url);\n    this.customAliases.delete(shortId);\n    this.clicks.delete(shortId);\n    return true;\n  }\n\n  getStats(): { totalUrls: number; totalClicks: number; topUrls: { id: string; url: string; clicks: number }[] } {\n    const totalClicks = [...this.clicks.values()].reduce((a, b) => a + b, 0);\n    const topUrls = [...this.store.entries()]\n      .map(([id, url]) => ({ id, url, clicks: this.clicks.get(id) ?? 0 }))\n      .sort((a, b) => b.clicks - a.clicks)\n      .slice(0, 10);\n    return { totalUrls: this.store.size, totalClicks, topUrls };\n  }\n\n  detectCollision(shortId: string, url: string): boolean {\n    const existing = this.store.get(shortId);\n    return existing !== undefined && existing !== url;\n  }\n}\n\nfunction demoURLShortener() {\n  const us = new URLShortener();\n  const id1 = us.shorten('https://example.com/very/long/url/1');\n  console.log(`Shortened to: ${id1}`);\n  const resolved = us.resolve(id1);\n  console.log(`Resolved: ${resolved.url} (${resolved.statusCode})`);\n  const id2 = us.shorten('https://example.com/very/long/url/1');\n  console.log(`Dedup check: ${id1 === id2 ? 'same ID (dedup)' : 'different ID'}`);\n  us.resolve(id1);\n  us.resolve(id1);\n  us.resolve(id2);\n  console.log('Stats:', JSON.stringify(us.getStats()));\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-web-crawler-with-url-frontier-politeness-and-dedup",
                  children: "TypeScript: Web Crawler with URL Frontier, Politeness, and Dedup"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface CrawlResult {\n  url: string;\n  statusCode: number;\n  content: string;\n  contentType: string;\n  links: string[];\n  crawlTimeMs: number;\n}\n\nclass RobotsTxtParser {\n  private disallowed = new Map<string, string[]>();\n  private crawlDelays = new Map<string, number>();\n\n  parse(domain: string, content: string): void {\n    const disallowed: string[] = [];\n    const lines = content.split('\\n');\n    let currentUserAgent = '';\n    for (const line of lines) {\n      const trimmed = line.trim();\n      if (trimmed.startsWith('User-agent:')) {\n        currentUserAgent = trimmed.split(':')[1].trim();\n      } else if (trimmed.startsWith('Disallow:')) {\n        const path = trimmed.split(':')[1]?.trim();\n        if (path && (currentUserAgent === '*' || currentUserAgent === 'my-crawler')) {\n          disallowed.push(path);\n        }\n      } else if (trimmed.startsWith('Crawl-Delay:')) {\n        const delay = parseInt(trimmed.split(':')[1]?.trim() || '10', 10);\n        this.crawlDelays.set(domain, delay);\n      }\n    }\n    if (disallowed.length > 0) this.disallowed.set(domain, disallowed);\n  }\n\n  isAllowed(domain: string, path: string): boolean {\n    const disallowed = this.disallowed.get(domain);\n    if (!disallowed) return true;\n    return !disallowed.some(d => path.startsWith(d));\n  }\n\n  getCrawlDelay(domain: string): number {\n    return this.crawlDelays.get(domain) ?? 1;\n  }\n}\n\nclass BloomFilterDedup {\n  private bits: boolean[];\n  private hashCount: number;\n\n  constructor(size: number, hashCount: number) {\n    this.bits = new Array(size).fill(false);\n    this.hashCount = hashCount;\n  }\n\n  add(url: string): void {\n    for (let i = 0; i < this.hashCount; i++) {\n      this.bits[this.hash(url, i) % this.bits.length] = true;\n    }\n  }\n\n  mightContain(url: string): boolean {\n    for (let i = 0; i < this.hashCount; i++) {\n      if (!this.bits[this.hash(url, i) % this.bits.length]) return false;\n    }\n    return true;\n  }\n\n  private hash(url: string, seed: number): number {\n    let h = seed * 31;\n    for (let i = 0; i < url.length; i++) h = ((h << 5) - h + url.charCodeAt(i)) | 0;\n    return h >>> 0;\n  }\n}\n\nclass URLFrontier {\n  private queue: string[] = [];\n  private inFlight = new Set<string>();\n  private seen = new Set<string>();\n  private domainQueues = new Map<string, string[]>();\n  private lastCrawlTime = new Map<string, number>();\n\n  constructor(private politenessDelayMs: number, private maxQueueSize = 100000) {}\n\n  add(url: string, force = false): void {\n    if (this.seen.has(url) && !force) return;\n    if (this.queue.length >= this.maxQueueSize) return;\n    this.seen.add(url);\n    this.queue.push(url);\n    const domain = new URL(url).hostname;\n    if (!this.domainQueues.has(domain)) this.domainQueues.set(domain, []);\n    this.domainQueues.get(domain)!.push(url);\n  }\n\n  addBatch(urls: string[]): void {\n    for (const url of urls) this.add(url);\n  }\n\n  async next(): Promise<string | null> {\n    const now = Date.now();\n    for (let i = 0; i < this.queue.length; i++) {\n      const url = this.queue[i];\n      if (this.inFlight.has(url)) continue;\n      const domain = new URL(url).hostname;\n      const lastCrawl = this.lastCrawlTime.get(domain) ?? 0;\n      if (now - lastCrawl < this.politenessDelayMs) continue;\n      this.queue.splice(i, 1);\n      this.inFlight.add(url);\n      this.lastCrawlTime.set(domain, now);\n      return url;\n    }\n    return null;\n  }\n\n  complete(url: string): void {\n    this.inFlight.delete(url);\n  }\n\n  size(): number { return this.queue.length; }\n  inFlightCount(): number { return this.inFlight.size; }\n}\n\nclass WebCrawler {\n  private frontier: URLFrontier;\n  private dedup: BloomFilterDedup;\n  private robotsParser = new RobotsTxtParser();\n  private visited = 0;\n  private errors = 0;\n  private startTime = 0;\n\n  constructor(\n    private seedUrls: string[],\n    private maxPages: number,\n    private maxConcurrency: number,\n    politenessDelayMs = 1000\n  ) {\n    this.frontier = new URLFrontier(politenessDelayMs);\n    this.dedup = new BloomFilterDedup(1000000, 7);\n    this.frontier.addBatch(seedUrls);\n  }\n\n  async crawl(): Promise<{ results: CrawlResult[]; stats: any }> {\n    this.startTime = Date.now();\n    const results: CrawlResult[] = [];\n    const active: Promise<void>[] = [];\n\n    for (let i = 0; i < this.maxConcurrency; i++) {\n      active.push(this.crawlWorker(results));\n    }\n\n    await Promise.all(active);\n    return {\n      results,\n      stats: {\n        visited: this.visited,\n        errors: this.errors,\n        durationMs: Date.now() - this.startTime,\n        frontierSize: this.frontier.size(),\n      },\n    };\n  }\n\n  private async crawlWorker(results: CrawlResult[]): Promise<void> {\n    while (this.visited < this.maxPages) {\n      const url = await this.frontier.next();\n      if (!url) break;\n\n      const domain = new URL(url).hostname;\n      if (!this.robotsParser.isAllowed(domain, new URL(url).pathname)) {\n        this.frontier.complete(url);\n        continue;\n      }\n\n      if (this.dedup.mightContain(url)) {\n        this.frontier.complete(url);\n        continue;\n      }\n\n      const start = Date.now();\n      try {\n        const response = await this.fetchUrl(url);\n        const crawlTime = Date.now() - start;\n        this.dedup.add(url);\n        this.visited++;\n\n        const links = this.extractLinks(url, response.content);\n        const result: CrawlResult = {\n          url, statusCode: response.statusCode,\n          content: response.content.substring(0, 1000),\n          contentType: response.contentType,\n          links, crawlTimeMs: crawlTime,\n        };\n        results.push(result);\n\n        const filteredLinks = links.filter(l => {\n          try {\n            return !this.dedup.mightContain(l) &&\n                   this.robotsParser.isAllowed(new URL(l).hostname, new URL(l).pathname);\n          } catch { return false; }\n        });\n        this.frontier.addBatch(filteredLinks);\n      } catch (err) {\n        this.errors++;\n      }\n      this.frontier.complete(url);\n    }\n  }\n\n  private async fetchUrl(url: string): Promise<{ statusCode: number; content: string; contentType: string }> {\n    await new Promise(r => setTimeout(r, 5 + Math.random() * 10));\n    return {\n      statusCode: 200,\n      content: `<html><body><a href=\"${url}/page1\">Link 1</a><a href=\"${url}/page2\">Link 2</a></body></html>`,\n      contentType: 'text/html',\n    };\n  }\n\n  private extractLinks(baseUrl: string, html: string): string[] {\n    const links: string[] = [];\n    const regex = /href=\"([^\"]+)\"/g;\n    let match;\n    while ((match = regex.exec(html)) !== null) {\n      try {\n        links.push(new URL(match[1], baseUrl).href);\n      } catch { continue; }\n    }\n    return links;\n  }\n}\n\nasync function demoCrawler() {\n  const crawler = new WebCrawler(['https://example.com'], 10, 3, 500);\n  const result = await crawler.crawl();\n  console.log(`Crawled ${result.stats.visited} pages in ${result.stats.durationMs}ms with ${result.stats.errors} errors`);\n  for (const r of result.results.slice(0, 3)) {\n    console.log(`  ${r.url} (${r.statusCode}, ${r.crawlTimeMs}ms, ${r.links.length} links)`);\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "url-shortener-readwrite-path-architecture",
                  children: "URL Shortener Read/Write Path Architecture"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TB\n    subgraph USERS[\"Users\"]\n        USER_CREATE[\"User creates short URL<br/>POST /shorten\"]\n        USER_CLICK[\"User clicks short URL<br/>GET /abc123\"]\n    end\n\n    subgraph WRITE_PATH[\"Write Path\"]\n        LB_W[\"Load Balancer\"]\n        APP_W[\"App Server<br/>Validate URL<br/>Check custom alias\"]\n        KGS[\"Key Generation Service<br/>MySQL key_pool table<br/>Pre-generates 1M keys/day\"]\n        COLLISION[\"Collision Check<br/>Bloom Filter + DB lookup\"]\n        CASSANDRA_W[\"Cassandra<br/>Write shard<br/>RF=3, CL=QUORUM\"]\n        REDIS_W[\"Redis Cache<br/>Write-through<br/>TTL=24h\"]\n        ANALYTICS_QUEUE[\"Kafka<br/>Analytics event<br/>Async tracking\"]\n    end\n\n    subgraph READ_PATH[\"Read Path\"]\n        LB_R[\"Load Balancer<br/>Geo-aware\"]\n        APP_R[\"App Server<br/>Parse short ID<br/>301 vs 302 decision\"]\n        L1_CACHE[\"L1 Cache<br/>Local LRU<br/>10MB / 5000 entries\"]\n        L2_CACHE[\"L2 Cache<br/>Redis Cluster<br/>200GB / 100M entries\"]\n        BLOOM_FILTER[\"Bloom Filter<br/>m=48M bits, k=7<br/>Filter non-existent keys\"]\n        CASSANDRA_R[\"Cassandra<br/>Read replica<br/>CL=ONE (eventual)\"]\n        LOG_CLICK[\"Click Logger<br/>Kafka → ClickHouse\"]\n    end\n\n    subgraph RESPONSE[\"Response\"]\n        REDIRECT[\"301/302 Redirect<br/>Location: long URL\"]\n        ANALYTICS[\"Analytics Pipeline<br/>ClickHouse Dashboard\"]\n    end\n\n    USER_CREATE --> LB_W --> APP_W\n    APP_W --> KGS\n    APP_W --> COLLISION\n    APP_W --> CASSANDRA_W\n    CASSANDRA_W --> REDIS_W\n    REDIS_W --> ANALYTICS_QUEUE\n\n    USER_CLICK --> LB_R --> APP_R\n    APP_R --> L1_CACHE\n    L1_CACHE -->|\"miss\"| L2_CACHE\n    L2_CACHE -->|\"miss\"| BLOOM_FILTER\n    BLOOM_FILTER -->|\"might exist\"| CASSANDRA_R\n    CASSANDRA_R --> L2_CACHE\n    L2_CACHE --> L1_CACHE\n    L1_CACHE --> APP_R\n    APP_R --> REDIRECT\n    APP_R --> LOG_CLICK\n    LOG_CLICK --> ANALYTICS\n\n    classDef user fill:#E3F2FD,color:#1565C0\n    classDef write fill:#FFCDD2,color:#C62828\n    classDef read fill:#C8E6C9,color:#2E7D32\n    classDef cache fill:#FFF3E0,color:#E65100\n    classDef resp fill:#F3E5F5,color:#7B1FA2\n    class USER_CREATE,USER_CLICK user\n    class LB_W,APP_W,KGS,COLLISION,CASSANDRA_W,REDIS_W,ANALYTICS_QUEUE write\n    class LB_R,APP_R,L1_CACHE,L2_CACHE,BLOOM_FILTER,CASSANDRA_R,LOG_CLICK read\n    class REDIRECT,ANALYTICS resp\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-url-shortener-rate-limiter-and-pastebin",
                  children: "TypeScript: URL Shortener, Rate Limiter, and Pastebin"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class URLShortener {\n  private store = new Map<string, string>();\n  private base62 = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\n  private counter = 1000000;\n\n  private encode(num: number): string {\n    let s = \"\";\n    while (num > 0) { s = this.base62[num % 62] + s; num = Math.floor(num / 62); }\n    return s;\n  }\n\n  shorten(longUrl: string): string {\n    const id = this.encode(this.counter++);\n    this.store.set(id, longUrl);\n    return `https://short.url/${id}`;\n  }\n\n  resolve(shortId: string): string | undefined { return this.store.get(shortId); }\n}\n\nclass SlidingWindowCounter {\n  private windows = new Map<string, { timestamp: number; count: number }[]>();\n  constructor(private limit: number, private windowMs: number) {}\n\n  allow(key: string): boolean {\n    const now = Date.now();\n    let entries = this.windows.get(key) ?? [];\n    entries = entries.filter(e => now - e.timestamp < this.windowMs);\n    const total = entries.reduce((s, e) => s + e.count, 0);\n    if (total >= this.limit) return false;\n    const last = entries[entries.length - 1];\n    if (last && now - last.timestamp < 1000) { last.count++; }\n    else { entries.push({ timestamp: now, count: 1 }); }\n    this.windows.set(key, entries);\n    return true;\n  }\n}\n\nclass PastebinStore {\n  private pastes = new Map<string, { content: string; title: string; language: string; createdAt: number; expiresAt: number }>();\n  private contentHash = new Map<string, string>();\n\n  create(content: string, title: string, language: string, ttlMs: number): string {\n    const hash = this.sha256(content);\n    const existing = this.contentHash.get(hash);\n    if (existing) return existing;\n    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;\n    this.pastes.set(id, { content, title, language, createdAt: Date.now(), expiresAt: Date.now() + ttlMs });\n    this.contentHash.set(hash, id);\n    return id;\n  }\n\n  get(id: string): { content: string; title: string; language: string } | null {\n    const paste = this.pastes.get(id);\n    if (!paste || Date.now() > paste.expiresAt) { this.pastes.delete(id); return null; }\n    return { content: paste.content, title: paste.title, language: paste.language };\n  }\n\n  private sha256(data: string): string {\n    let h = 0;\n    for (let i = 0; i < data.length; i++) h = ((h << 5) - h + data.charCodeAt(i)) | 0;\n    return Math.abs(h).toString(16);\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary-3",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "URL shorteners require collision-free key generation; KGS pre-generation is the standard pattern"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Rate limiters must balance accuracy, memory, and Redis round trips; sliding window counter is the practical winner"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Pastebin architectures exploit write-once read-many patterns with content addressing and aggressive caching"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "All three systems benefit from multi-tier caching (L1 local, L2 Redis, L3 database)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Async pipelines (Kafka, Celery) decouple analytics, highlighting, and expiry from the request path"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "CDN integration reduces origin load by 80-95% for read-heavy workloads"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Trade-off tables guide component selection: consistency vs availability, accuracy vs latency, cost vs performance"
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
                  }), "1. Boundary problem: in fixed-window (e.g., 100 req/min at :00), a user can send 100 requests at :59 and 100 at 1:01 — 200 requests in 2 seconds. Sliding window counter fixes this by tracking the current and previous window counters and computing a weighted average: `current + previous * (elapsed/window_size)`. This approximates the true sliding window rate within ~5% error.\n2. KGS pre-generates keys to eliminate write-path database contention. On-demand generation requires a database uniqueness check per request (SELECT + INSERT). Batch pre-generation (10K keys per batch, atomically marked as used) uses a single transaction for 10K keys, reducing DB writes by 10,000×. The app server then hands out keys from memory with zero database overhead.\n3. 301 (Moved Permanently): browser-cached, never contacts server again for that URL. Use for permanent short URLs where analytics tracking is not needed. 302 (Found): not cached, passes through server on every click. Use for custom short URLs, campaign URLs, or any URL requiring per-click analytics. Trade-off: 301 reduces server load by 80%+ but loses analytics granularity.\n4. SHA-256 of content produces a 64-character hex digest used as S3 object key. If two users paste identical content with the same visibility (public), the system returns the same URL — free deduplication. If one user sets their paste to private, the hash is salted with user_id: `SHA-256(content + user_id)` → different hash → separate storage. The public paste remains deduplicated; the private paste creates a new entry.\n5. Birthday paradox: with truncated MD5 (7 bytes = 56 bits), the probability of a collision reaches 50% at ~2^28 ≈ 268 million keys. For a system with billions of keys, collisions are guaranteed. Alternatives: (a) Base62 from distributed counter — zero collision risk. (b) Full SHA-256 (128 bits vs 56) — collision probability is negligible at trillions of keys. (c) Counter-based encoding (Snowflake-style).\n6. Token bucket: allows bursts up to bucket size (tokens accumulate during idle). Best for traffic with natural bursts (API calls from user interactions). Sliding window counter: enforces exact rate over window. Best when the rate limit is strict (SLA enforcement, paid API tiers). Token bucket overshoots after idle periods; sliding window is always accurate."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "application-problems",
                  children: "Application Problems"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "1. **Custom domains**: Each domain gets a key_pool table shard with a prefix (e.g., `acme_keys`). Domain-specific KGS generates keys with a domain prefix: `acme:aB3xK`. Domain-specific Redis cache shard (keyed by domain prefix). Analytics: partition ClickHouse table by domain_id, each domain queries its own partition. SSL: use ACME/LetsEncrypt with automatic certificate provisioning via DNS-01 challenge when domain is registered. DNS: CNAME each custom domain to the shared URL shortener domain (e.g., `go.acme.com CNAME shortener.com`).\n2. **Multi-layer rate limiter**: Redis key schema: `rl:{endpoint}:{user}:{ip}:window`. Lua script: check endpoint (10 req/s), then user (100 req/s), then IP (1000 req/s), then global (100000 req/s) — any layer exceeding limit returns 429 with layer identifier. If endpoint layer rate-limits, the request is rejected even if the user and IP layers have capacity — this is correct: the most restrictive limit always applies. Return headers indicate which layer triggered the limit.\n3. **Pastebin search**: Elasticsearch cluster with 3 nodes. Index mapping: `{ content: text, title: text, language: keyword, created_at: date, content_hash: keyword }`. Daily index (1M docs/day ≈ 10GB), 30-day retention = 30 indexes. Re-index: when language detection model updates, run a batch job that queries pastes created after the model version date, re-detects language, updates ES documents. Use reindex API with slicing for parallelization. Search latency: <100ms P99 for full-text queries.\n4. **Abuse prevention**: Tiers: unauthenticated (10/hr per IP), email-verified (50/hr), pro (500/hr). Content scanning: run ClamAV and regex scanner asynchronously via SQS queue. If scan takes >5 seconds, return the paste immediately and mark as \"scanning\" — if scan detects abuse, replace with 410 Gone. To scale scanning: lambda workers auto-scale to 1000 concurrent instances. Dedup: check SHA-256 against recent 24-hour window — if same hash appears >100 times in an hour from different IPs, rate-limit further uploads of that content."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "challenge-problem",
                  children: "Challenge Problem"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "**Distributed Pastebin with Collaborative Editing**: \n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Version storage: Use a content-delta chain (edit operations stored as operational transforms) rather than full copies per version. Each version stores: base snapshot (every 100 edits) + forward deltas. This reduces storage from O(N × content_size) to O(N × avg_delta_size). For source code pastebins, deltas average 50 bytes vs 10KB full copies."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "OT server: Stateless WebSocket server that receives edit operations from all collaborators, transforms concurrent operations against each other, and broadcasts the transformed result. Use a centralized OT sequencer (Redis Stream) to assign total order to edits. Each edit has: paste_id, user_id, operation (insert/delete with position), client_version, server_version."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Real-time sync: WebSocket connections to the nearest edge PoP. Each PoP has a local Redis pub-sub channel per paste. The OT server subscribes to all active paste channels. When an edit arrives, the server transforms it, appends to the event log, and publishes the transformed operation back to the channel for all clients."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Merge strategy: When two users edit the same document differently, OT ensures both edits are applied in a consistent order. If conflicts are semantically unresolvable (both users edit the same word differently), the server picks the first operation received (by server version) and notifies the second user of the conflict."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Interactions with deduplication: Real-time editing breaks content-addressed deduplication because the SHA-256 hash changes with every edit. Solution: use a \"base content hash\" for the initial paste (enables dedup for the initial upload), and a separate \"live editing session ID\" for ongoing edits. When the session ends (all users disconnect), compute the final SHA-256 and store as a new paste version. The original base hash still deduplicates with any identical future uploads."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Two users editing differently: The SHA-256 content address is the final resolved hash after applying all OT-transformed edits in sequence. Each user sees the same final state (OT guarantees convergence), so the SHA-256 is identical after all edits are applied. Intermediate states differ but are not stored as content-addressed objects — they exist only as transient delta streams in the OT server's memory."
                  })]
                }), (0,jsx_runtime.jsx)(_components.p, {}), "\n"]
              })
            })]
          })
        })]
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