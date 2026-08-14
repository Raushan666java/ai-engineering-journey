"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[44981],{

/***/ 12698
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_21_case_study_uber_md_ad2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-21-case-study-uber-md-ad2.json
const site_docs_courses_system_design_21_case_study_uber_md_ad2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/21-case-study-uber","title":"Chapter 21: Case Study — Uber and Location-Based Services","description":"Previous 22 Case Study Twitter","source":"@site/docs/courses/system-design/21-case-study-uber.md","sourceDirName":"courses/system-design","slug":"/system-design/21-case-study-uber","permalink":"/ai-engineering-journey/system-design/21-case-study-uber","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"id":"21-case-study-uber","slug":"/system-design/21-case-study-uber","title":"Chapter 21: Case Study — Uber and Location-Based Services","sidebar_label":"Chapter 21: Case Study — Uber and Location-Based Services","sidebar_position":21},"sidebar":"course-system-design","previous":{"title":"Chapter 20: Case Study — Netflix and Video Streaming","permalink":"/ai-engineering-journey/system-design/20-case-study-netflix"},"next":{"title":"Chapter 22: Case Study — Twitter and News Feed","permalink":"/ai-engineering-journey/system-design/22-case-study-twitter"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/21-case-study-uber.md


const frontMatter = {
	id: '21-case-study-uber',
	slug: '/system-design/21-case-study-uber',
	title: 'Chapter 21: Case Study — Uber and Location-Based Services',
	sidebar_label: 'Chapter 21: Case Study — Uber and Location-Based Services',
	sidebar_position: 21
};
const contentTitle = 'Chapter 21: Case Study — Uber and Location-Based Services';

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
  "value": "Theory / Case Study",
  "id": "theory--case-study",
  "level": 2
}, {
  "value": "Phase 1: Problem Scope and Requirements",
  "id": "phase-1-problem-scope-and-requirements",
  "level": 3
}, {
  "value": "Phase 2: Pre-Uber Architecture — The Monolith Era",
  "id": "phase-2-pre-uber-architecture--the-monolith-era",
  "level": 3
}, {
  "value": "Phase 3: Post-Uber Architecture — Microservices, S2, and Kafka",
  "id": "phase-3-post-uber-architecture--microservices-s2-and-kafka",
  "level": 3
}, {
  "value": "Phase 4: Data Storage, Sharding, and Infrastructure",
  "id": "phase-4-data-storage-sharding-and-infrastructure",
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
  "value": "Mermaid: Uber Architecture Evolution",
  "id": "mermaid-uber-architecture-evolution",
  "level": 3
}, {
  "value": "TypeScript: Geospatial Index, Surge Pricing, Dispatch Matcher",
  "id": "typescript-geospatial-index-surge-pricing-dispatch-matcher",
  "level": 3
}, {
  "value": "TypeScript: Ride Matching",
  "id": "typescript-ride-matching",
  "level": 3
}, {
  "value": "Implementation: Uber Architecture Case Study",
  "id": "implementation-uber-architecture-case-study",
  "level": 3
}, {
  "value": "TypeScript: Ride Matcher with Geohash Indexing, Surge Pricer with Dynamic Zones, and Trip Tracker",
  "id": "typescript-ride-matcher-with-geohash-indexing-surge-pricer-with-dynamic-zones-and-trip-tracker",
  "level": 3
}, {
  "value": "TypeScript: Map Matching and ETA Prediction",
  "id": "typescript-map-matching-and-eta-prediction",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study: Surge Pricing During a Stadium Event",
  "id": "case-study-surge-pricing-during-a-stadium-event",
  "level": 2
}, {
  "value": "Case Study: GPS Trajectory Map Matching in Urban Canyons",
  "id": "case-study-gps-trajectory-map-matching-in-urban-canyons",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
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
        id: "chapter-21-case-study--uber-and-location-based-services",
        children: "Chapter 21: Case Study — Uber and Location-Based Services"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/20-case-study-netflix",
          children: "20 Case Study Netflix"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/22-case-study-twitter",
          children: "22 Case Study Twitter"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the architectural evolution from a monolith to a domain-oriented microservice ecosystem at global scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand geospatial indexing techniques including QuadTree, Google S2, and Uber's H3 hexagon system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a real-time location pipeline handling 30M+ GPS updates per minute with Kafka and Flink"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the dispatch and matching algorithm as a minimum-weight bipartite matching optimization problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explore surge pricing mechanics as a real-time demand-supply equilibrium system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examine the trade-offs in sharding strategies for location-based services operating in 70+ countries"
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
        href: "../../assets/images/lessons/system-design/21-case-study-uber/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/21-case-study-uber/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/21-case-study-uber/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/21-case-study-uber/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/21-case-study-uber/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/21-case-study-uber/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Uber architecture: dispatch, real-time matching, polyglot persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geospatial indexing, real-time matching, polyglot persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dispatch System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geospatial indexing, real-time driver matching, ETAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polyglot Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL, Redis, Cassandra, Kafka, Schemaless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microservices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-oriented decomposition, 2200+ microservices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evolving from monolith to microservices, data platform unification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory / Case Study]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[Chapter Quiz]\n    C --> D\n    E[Concept Comparison]\n    D --> E\n    F[Quick Reference]\n    E --> F\n    G[Chapter Quiz]\n    F --> G\n    H[Exercises]\n    G --> H\n"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/21-uber.png",
        alt: "Uber Architecture Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-problem-scope-and-requirements",
      children: "Phase 1: Problem Scope and Requirements"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nUber connects riders with drivers in real time across 70+ countries and 10,000+ cities. By 2024, the platform handled over 100 million monthly active riders and a comparable number of drivers, processing 30+ billion location events per day. Every four seconds, each active driver's GPS coordinate streams to Uber's servers. The matching system must pair a rider with the best available driver in under 500 milliseconds — fewer than the blink of an eye. The ETA displayed in the rider app must be accurate within 60 seconds for trips lasting over 30 minutes. Surge pricing adjusts in real time as demand spikes during rush hour, concerts, or severe weather."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The challenge is multifaceted. Location data is inherently two-dimensional, requiring specialized indexing structures that standard B-Trees cannot handle efficiently. GPS coordinates arrive with noise — urban canyons, tunnels, and atmospheric interference degrade accuracy. The system must distinguish between a driver stopped at a red light and a driver who has parked and gone offline. The matching problem is combinatorial: given N available drivers and M riders in a region, find the assignment that minimizes total wait time, subject to constraints on driver preferences, rider ratings, and vehicle type."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-functional requirements include five-nines availability for the dispatch core, global consistency for trip accounting (a rider must never be double-billed), and sub-second P99 latency for the match endpoint. The system must tolerate the failure of an entire AWS Availability Zone without losing trip state. Compliance with GDPR (right to deletion), CCPA, and local transportation regulations in each market adds further complexity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Specific quantifiable targets:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match latency P50 < 200ms, P99 < 500ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ETA accuracy: within 60 seconds for 95% of trips over 30 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Location event ingestion: 7.5M events/second sustained, 15M peak"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trip accounting: zero tolerance for double-billing or missing charges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System uptime: 99.999% for dispatch core, 99.99% for secondary services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disaster recovery: RTO < 5 minutes, RPO < 1 second for trip state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global deployment: 8 primary data regions, active-active for dispatch reads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The functional requirements span four major user flows. For riders: request a ride, track the driver in real time, pay seamlessly, and rate the experience. For drivers: go online, receive ride requests, navigate to pickup and destination, and receive earnings. For the platform: match riders with available drivers optimally, compute accurate ETAs, adjust prices dynamically, and detect fraud. For city operations teams: monitor supply and demand dashboards, manage driver incentives, and respond to incident reports."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-pre-uber-architecture--the-monolith-era",
      children: "Phase 2: Pre-Uber Architecture — The Monolith Era"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Uber's original architecture circa 2010 was a Python monolith built on top of a single MySQL database. The monolith handled ride requests, driver dispatch, payment processing, driver onboarding, surge pricing, and the web dashboard — all in one codebase. The database held a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trips"
      }), " table, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "drivers"
      }), " table, and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "riders"
      }), " table, with spatial queries executed through MySQL's geospatial extensions (which at the time supported only basic bounding-box lookups via MyISAM tables with R-Tree indexes)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As Uber expanded from San Francisco to Paris, London, Shanghai, and São Paulo, the monolith groaned under its own weight. A deployment to fix a typo in the payment email template required redeploying the entire stack, risking the dispatch system. The MySQL master could not keep up with write volume — the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trips"
      }), " table alone grew to hundreds of gigabytes, and adding indexes caused replication lag that made followers minutes stale."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The spatial queries were the first bottleneck. Finding nearby drivers required a MySQL query like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT * FROM drivers WHERE lat BETWEEN ? AND ? AND lng BETWEEN ? AND ? AND status = 'available'"
      }), ". This bounding-box scan worked for 1,000 drivers but failed at 100,000. The response time for a dispatch query grew from 50 milliseconds to several seconds. Uber's engineers realized they needed a fundamentally different approach to spatial indexing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-post-uber-architecture--microservices-s2-and-kafka",
      children: "Phase 3: Post-Uber Architecture — Microservices, S2, and Kafka"
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
      children: "Uber's transformation into a service-oriented architecture unfolded over several years, resulting in 750+ microservices organized by domain. The architecture can be understood as a set of interconnected subsystems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Geospatial Indexing — S2 and H3"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The heart of Uber's location infrastructure is Google's S2 geometry library, later supplemented by Uber's own H3 hexagon system. S2 addresses the fundamental problem of spatial indexing: how do you map a 2D coordinate into a 1D index that can be stored in a B-Tree, used as a key in a hash table, or indexed by a database?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S2 solves this by projecting the Earth's surface onto a cube, then subdividing each cube face into a hierarchy of cells. The Hilbert space-filling curve visits every cell in a well-defined order, producing a single 64-bit integer (a \"cell ID\") for any point on Earth. Two points that are geographically close will have cell IDs that are numerically similar — a property that makes range queries efficient. The hierarchy has 31 levels (0 through 30), where level 0 cells cover roughly half the Earth's surface and level 30 cells cover roughly 0.5 square centimeters. Uber uses cells at levels 12-15 for dispatch (roughly 1-10 square kilometers per cell)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H3, developed by Uber in 2018, improves on S2 by using hexagons instead of squares. Hexagons have the critical property that all neighboring cells share an edge — a square's diagonal neighbors are farther away than its side neighbors, creating distortions in distance calculations. The hexagon hierarchy is aperture-7: each parent hexagon contains approximately 7 child hexagons. H3 resolution ranges from 0 (continent-sized) to 15 (roughly 0.5 square meters). Uber uses H3 primarily for visualization, aggregation, and market analysis rather than real-time dispatch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison of Geospatial Indexing Approaches"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QuadTree was considered early in Uber's history before S2 was adopted. A QuadTree recursively subdivides space into four quadrants until each cell contains fewer than a threshold number of points. QuadTrees support dynamic grid sizing — dense urban areas are subdivided more finely than sparse rural areas — which naturally adapts to point density. However, QuadTrees have significant drawbacks for Uber's use case. They require in-memory tree traversal for neighbor queries, cannot be indexed in a standard database (the tree structure is complex to serialize), and are hard to shard across machines. In contrast, S2's 64-bit cell IDs are B-Tree friendly, storable in any database, and trivially shardable by cell ID prefix."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H3's hexagons add a third option with advantages for aggregation and visualization. A hexagon's six equidistant neighbors eliminate the distance distortion problem that plagues square grids. When computing \"how many drivers are in the neighborhood,\" hexagons give more consistent results regardless of direction. The aperture-7 hierarchy means each parent hexagon has roughly 7 children, which maps naturally to the base-10 decimal system for human-readable zoom levels. However, hexagons require more computation for parent-child relationships (the 7 children do not tile perfectly), and H3's 64-bit encoding is less efficient than S2's for range queries because hexagons do not tile the plane with a space-filling curve."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber's architecture uses all three: S2 for dispatch (because cell IDs are sorted by proximity, enabling efficient range scans for nearby drivers), H3 for visualization (because hexagons produce cleaner heat maps and aggregation buckets), and QuadTree elements in the analytics layer for offline geospatial modeling where tree-based adaptive subdivision provides better precision for long-tail analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "S2 Cell Hierarchy in Practice"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The S2 cell hierarchy ranges from level 0 (each face of the cube — roughly half a hemisphere) to level 30 (0.5 cm²). Each level subdivides the previous level by 4, so cell area decreases by a factor of 4 for each increment. For dispatch purposes, Uber found that levels 12-15 provide the right granularity:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 12: ~100 km² — used for very sparse areas (highways between cities, rural zones)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 13: ~25 km² — default for suburban dispatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 14: ~6.25 km² — default for urban dispatch (the most commonly used)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 15: ~1.56 km² — used for dense downtown cores with many drivers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice of level is dynamic. A geofence query starts at level 14 for the rider's location. If too few drivers are found (below a configurable threshold, typically 5), the query expands to the parent cell at level 13, then level 12, each time querying the cell's drivers plus a one-cell ring around it. Conversely, if too many drivers are found (above 100, typically), the system can narrow to child cells and route the query to only the cells closest to the rider. This adaptive depth ensures consistent performance across varying densities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-Time Location Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every active driver's smartphone sends a GPS coordinate every 4 seconds via a gRPC or WebSocket connection. This stream of 7.5 million updates per second must be ingested without data loss."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Driver App --[gRPC/WebSocket]--> Gateway Service --[Kafka]--> Flink Streaming\n                                                                    |\n                                                            +---------+---------+\n                                                            |                   |\n                                                         Redis              HDFS\n                                                   (Current Location)   (Historical)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gateway service authenticates the driver, validates the coordinate (rejecting obviously impossible values like lat=500), and publishes the event to a Kafka topic partitioned by city. Flink consumes this stream with a sliding window of 4 seconds. For each window, Flink computes the driver's smoothed position using a Kalman filter, updates the driver's current position in a Redis cluster (keyed by driver ID with a TTL of 15 seconds to handle disconnects), and writes the raw event to HDFS for batch analytics."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kalman filter is essential. Raw GPS readings have an error radius of 5-15 meters. The filter models the driver's state as position and velocity, producing an estimate that is significantly more accurate than any single reading. When a driver enters a tunnel and GPS is lost, the Kalman filter's prediction step continues propagating the last known velocity, providing a plausible position estimate until the signal returns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Dispatch Algorithm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a rider opens the Uber app and requests a ride, the following sequence executes in under 500 milliseconds:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The rider's phone sends its GPS coordinates to the matching service."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The matching service uses S2 to compute the cell ID at resolution 14 for the rider's location."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It queries a geofence around the rider — typically the rider's S2 cell plus all neighboring cells (the \"ring\" at distance 1)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For each cell, it reads from Redis the list of available drivers in that cell, along with their current state (location, heading, speed, rating, acceptance rate)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A scoring function computes a score for each eligible driver:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ETA score: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "min(estimated_time_to_pickup, MAX_WAIT)"
            }), " where ETA is computed using the map-matched route from the driver's position to the rider's position, factoring in current traffic."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Direction score: penalizes drivers heading away from the rider."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Rating score: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "driver_rating / 5.0"
            }), ", ensuring high-rated drivers are preferred."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Surge multiplier: adjusted based on current demand/supply ratio."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supply score: if the area is supply-constrained, the system expands the search radius."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The assignment is formulated as a minimum-weight bipartite matching problem. Given M riders and N drivers in a geofence region, the Hungarian algorithm finds the assignment that minimizes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sum(estimated_wait_time)"
          }), " across all pairs. In practice, Uber uses a greedy approximation that is near-optimal but runs in O(N log N) instead of O(N^3)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Surge Pricing Mechanics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Surge pricing adjusts the fare multiplier in real time based on the ratio of active riders to available drivers in each geofence region. The system computes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "surge_multiplier = base_ratio + (current_demand / current_supply) * sensitivity_factor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This multiplier is clamped to a range (typically 1.0x to 3.0x, but can go higher during emergencies). The pricing service processes demand statistics every 2-5 minutes from Flink aggregation. A machine learning model trained on historical trip data predicts demand for each geofence in 5-minute windows, allowing the system to pre-position surge pricing before demand spikes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riders see the surge multiplier before confirming a ride. Drivers are notified of surge zones so they can reposition themselves. This market-based mechanism efficiently allocates supply to demand: when a concert ends, surge pricing draws drivers to the venue, clearing the queue faster than a flat-price system would."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ETA Prediction"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber's ETA prediction has evolved from a simple distance/speed heuristic to an ensemble of gradient-boosted decision trees and neural networks. The feature set includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Road-segment-specific historical speed profiles (15-minute buckets for each day of the week)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time traffic data from Waze partnership and internal GPS speed aggregation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intersection delay modeling (turn times, traffic light patterns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time-of-day and day-of-week features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weather data (precipitation, visibility, temperature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Special events (concerts, sports games, parades)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver behavior features (does this driver typically drive faster or slower than average?)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model is served via Uber's Michelangelo ML platform, which handles feature extraction, model inference, and online training. The ETA is recalculated every 30 seconds during a trip and whenever the driver deviates significantly from the expected route."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trip Tracking and Map Matching"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During a trip, the driver's GPS trajectory is a sequence of noisy points. Map matching aligns these points to the road network. Uber uses a hidden Markov model (HMM) approach: each GPS observation is an emission from a hidden state (the true road position), and transitions between hidden states follow the road network topology. The Viterbi algorithm finds the most likely sequence of road segments."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map matching serves several purposes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accurate ETA updates (a driver 100 meters off the expected route may add 5 minutes to ETA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route deviation detection (the driver is going the wrong way)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fare calculation (distance traveled on roads, not GPS distance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety monitoring (is the trip following the expected path?)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Payment Processing Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment processing at Uber's scale must handle millions of transactions daily across 70+ countries, each with different payment methods, currencies, tax regimes, and regulatory requirements. The payment system is a separate domain-oriented microservice with its own data store and failure isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The payment flow begins when a trip ends. The fare calculation service computes the final amount based on: base fare + distance * per_distance_rate + time * per_minute_rate + surge_multiplier + booking_fee - promotions. For upfront pricing (introduced in 2016), the fare is computed at request time and guaranteed to the rider unless the route changes significantly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the fare is computed, the payment service:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorizes the rider's payment method (credit card, PayPal, Uber Cash, or local methods like Alipay in China, Boleto in Brazil, M-Pesa in Kenya)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Charges the split-second optimized fare (using idempotency keys to prevent double-charges)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deposits the driver's earnings (after Uber's commission, typically 20-30%) into the driver's earnings wallet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the 7-day settlement cycle for drivers who choose weekly payouts (instant pay for Uber Pro members)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates receipts in the rider's local language and currency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The payment service uses its own database sharded by region, with strict ACID guarantees for the transaction itself. However, for reporting and reconciliation, it publishes events to Kafka that are consumed by the accounting service and the fraud detection pipeline. Dual-write concerns (writing to both the payment database and Kafka) are handled by the transactional outbox pattern: the payment service writes the event to an outbox table in the same database transaction, and a separate process reads the outbox and publishes to Kafka."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fraud detection is a critical sub-system. The fraud service processes payment events through a combination of rules (matching against known fraud patterns) and ML models that score each transaction on features like: device fingerprint, GPS location of the rider vs. the payment method's billing address, historical chargeback rate, velocity of new accounts from the same device, and anomaly detection on trip patterns (e.g., very short trips with very high fares)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Driver Onboarding and Compliance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Driver onboarding is a complex workflow that must satisfy regulatory requirements in every market. The onboarding service implements a state machine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identity verification: Upload government ID (passport, driver's license) ? document OCR extraction ? background check via third-party API (Checkr in the US, similar partners globally)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vehicle inspection: Upload vehicle registration and insurance ? verify coverage meets minimum requirements ? schedule in-person or virtual vehicle inspection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training: Complete safety video series ? pass knowledge test ? acknowledge community guidelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activation: Receive activation notification ? download driver app ? go online for first time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The onboarding service uses Kafka as the event backbone: each step completion publishes an event, and downstream services react. The background check service listens for the \"identity verified\" event and initiates the background check. The vehicle inspection service listens for the \"documents uploaded\" event and triggers the inspection workflow."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event-driven architecture allows onboarding to be asynchronous and resilient. If the background check provider is slow (taking hours or days), the rest of the onboarding can proceed up to the point where the background check result is needed. The service maintains a \"onboarding completeness\" score for each applicant and sends progress notifications via push notification, email, and SMS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety Features"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber's safety features are a first-class architectural concern, not an afterthought. The safety system comprises several sub-services:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RideCheck"
          }), ": An ML model running on the client app and server detects unexpected trip events: long stops, route deviations, crashes (detected via accelerometer/GPS patterns). When detected, the system sends an in-app prompt asking if the rider is okay and, if no response, escalates to the safety response team and optionally contacts emergency services."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Emergency Button"
          }), ": In-app button that shares real-time location, trip details, and vehicle information with local emergency services. The integration uses a third-party API (RapidSOS in the US) to transmit data directly to 911 dispatchers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-Time ID Check"
          }), ": Drivers are periodically prompted to take a selfie before going online. The selfie is compared to the driver's profile photo using facial recognition. The system uses a one-to-one matching model with a threshold confidence score. Failures trigger a manual review by the safety team."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trip Sharing"
          }), ": Riders can share their real-time trip status with trusted contacts via a shareable link that shows the driver's name, photo, vehicle details, and live GPS location on a map."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SOS Beacon"
          }), ": In markets where it is supported, the app can trigger an audible alarm and flash the screen to deter an attacker."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each safety feature is implemented as an independent microservice with its own data store, ensuring that a failure in the dispatch system does not impact safety features."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical Data and Analytics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The raw location stream, trip records, and driver-rider interactions all flow to Hadoop HDFS for offline processing. Hive and Spark process this data for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fraud detection: identifying fake trips, GPS spoofing, collusion between drivers and riders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Market analysis: demand patterns by city, neighborhood, time of day"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver supply forecasting: predicting how many drivers will be online next Tuesday at 3 PM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pricing model training: training data for surge prediction and ETA models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business intelligence: dashboards for city operations teams"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-data-storage-sharding-and-infrastructure",
      children: "Phase 4: Data Storage, Sharding, and Infrastructure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka Event Backbone"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kafka sits at the center of Uber's architecture, handling 30+ billion events per day across 300+ topics. Critical topics include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location_updates"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trip_events"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "payment_events"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dispatch_decisions"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "surge_updates"
      }), ". Kafka MirrorMaker replicates data across data centers, providing disaster recovery and allowing read traffic to be served from the nearest data center. The event schema is managed by Apache Avro, ensuring backward and forward compatibility as services evolve independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding Strategy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber shards its data primarily by city or region. Each city is largely self-contained: a ride request in San Francisco does not need to query driver data in Tokyo. City-level sharding provides natural data isolation, reduces cross-shard queries, and allows capacity to be added on a per-city basis."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "However, cross-city trips (e.g., a rider going from San Francisco to Oakland) require API orchestration. The dispatch service coordinates between the origin city shard (finding a driver) and the destination city shard (preparing for arrival). The trip record exists in the origin shard, with a cross-reference in the destination shard."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Infrastructure and Deployment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber runs on a multi-cloud and on-premises hybrid infrastructure. The core dispatch system runs on bare-metal servers in colocation facilities for predictable latency. Analytics workloads run on public cloud (AWS and GCP). The deployment pipeline uses uDeploy (Uber's internal CI/CD system), and services are containerized with Docker and orchestrated by Peloton (Uber's internal resource scheduler). Service discovery uses Hyperbahn (Ringpop-based), and the observability stack includes M3 (metrics, built by Uber to replace Graphite), Jaeger (distributed tracing, also built by Uber and later open-sourced as a CNCF project), and ELK (logging)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Observability at Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M3 is Uber's metrics system, built to handle 10 million metrics per second across the entire fleet. Metrics are collected by a local agent on each host and sent to M3 aggregators, which downsample over time: 10-second resolution for the first hour, 1-minute for 24 hours, 5-minute for 30 days, and 1-hour for permanent retention. Each service exports RED metrics (Rate of requests, Errors, Duration of requests) for every endpoint, organized by status code, shard, and host. The dispatch service's M3 dashboard is the first thing an on-call engineer checks during an incident."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jaeger, which originated at Uber, provides end-to-end tracing for every ride request. A single ride request trace spans 15-25 services: API gateway ? authentication ? geofence ? driver search ? scoring ? assignment ? notification ? payment authorization. Each span records the service name, operation name, start time, duration, and any errors. Jaeger's sampling strategy is adaptive: high-volume endpoints are sampled at 1%, but if a trace includes an error, it is force-sampled at 100%. This ensures the team can always debug failures without overwhelming the trace storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaos Engineering and Resilience Testing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber runs a structured chaos engineering program called \"uChaos\" that injects failures into the production system during low-traffic periods. The chaos experiments include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency injection"
        }), ": Adds 500ms of latency to random Redis read requests to simulate a slow cache"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance termination"
        }), ": Randomly kills 5% of the dispatch service instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet loss"
        }), ": Drops 1% of packets between the dispatch service and the driver location store"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kafka broker failure"
        }), ": Shuts down one Kafka broker and verifies that producers and consumers rebalance without data loss"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each experiment has a blast radius (limited to one city or one region), a hypothesis (\"The dispatch service will maintain P99 < 500ms even with 20% of instances terminated\"), and an automated rollback (\"If error rate exceeds 1% for 30 seconds, terminate the experiment\"). The results are reviewed in a weekly resilience review meeting, and teams are responsible for fixing any regressions within the next sprint."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Gateway and Versioning Strategy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber's API Gateway sits between mobile clients and backend services, handling authentication, rate limiting, request routing, and response aggregation. The gateway evolved through three generations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generation 1"
        }), " (monolith era): A simple Nginx reverse proxy with hardcoded route tables. Every new feature required a configuration change and restart."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generation 2"
        }), " (early microservices): A custom Go-based gateway that read route definitions from ZooKeeper. Services registered themselves, and the gateway dynamically routed requests. This supported canary deployments (5% of traffic to a new service version) and circuit breaking (if a service returned 5xx errors for 10% of requests, the gateway would fail-open for 30 seconds)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generation 3"
        }), " (current): A layered gateway architecture. The outer layer (Envoy proxy at the edge) handles TLS termination, DDoS protection, and basic rate limiting. The inner layer (Uber's custom gateway service) handles authentication, business-level routing, and response aggregation. The two layers communicate via localhost HTTP to minimize latency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API versioning follows a pragmatic strategy: the mobile client specifies its version in a request header (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-Uber-App-Version: 4.32.1"
      }), "). The gateway routes to the appropriate service version based on the app version range declared by each service. Old service versions are decommissioned when fewer than 1% of active clients use them. This avoids the overhead of URL-based versioning (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v1/"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v2/"
      }), ") while maintaining backward compatibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Mesh and Communication Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber's 750+ services communicate through a service mesh built on Hyperbahn (Ringpop-based RPC). Each service has a well-defined API contract defined in Apache Thrift IDL or gRPC protobuf. The communication patterns fall into three categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Synchronous request-response"
          }), " (gRPC): Used for latency-sensitive operations like dispatch matching, ETA queries, and fare calculation. The client makes a request and waits for the response within a configured timeout (typically 100-500ms). Finagle's connection pooling keeps persistent TCP connections to downstream services, eliminating connection establishment overhead."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Asynchronous event-driven"
          }), " (Kafka): Used for operations that do not require an immediate response. Examples include location update events, trip completion notifications, and payment processing confirmations. The producer publishes an event to a Kafka topic and continues processing. One or more consumer groups process the event asynchronously."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming"
          }), " (gRPC streams / WebSocket): Used for real-time bidirectional communication with mobile clients. The driver app maintains a persistent WebSocket connection to the gateway service. The rider app uses gRPC server-sent streaming for location updates and trip status changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice between synchronous and asynchronous communication at each boundary is a critical architectural decision. The dispatch matching endpoint is synchronous because the rider is waiting for a response. However, the downstream scoring may fan out to multiple services in parallel using Finagle futures: the dispatch service sends concurrent requests to the geofence service, the surge service, and the ETA service, then combines the results using a composite future that completes when all three respond. If any service is slow, the entire request waits for the slowest response. To mitigate this, each service has a strict timeout (geofence: 50ms, surge: 30ms, ETA: 100ms). If a service times out, the dispatch uses a default value (no surge multiplier, average ETA estimate) and logs the timeout for debugging."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Caching Strategy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber's caching strategy operates at multiple levels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Driver positions"
          }), " (Redis, TTL 15s): The primary hot cache. Each driver's current position (lat, lng, heading, speed, status) is stored in a Redis hash with key ", (0,jsx_runtime.jsx)(_components.code, {
            children: "driver:<id>:state"
          }), ". The TTL is set to 15 seconds to automatically expire stale data for drivers who go offline without sending a disconnect signal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Geofence driver lists"
          }), " (Redis, no TTL but continuously refreshed): For each active S2 cell, a Redis set stores the driver IDs currently in that cell. When a driver's position updates and their cell changes, the Flink job atomically removes the ID from the old cell's set and adds it to the new cell's set using a Lua script for atomicity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ETA precomputation"
          }), " (Redis, TTL 60s): For popular origin-destination pairs (e.g., downtown to airport), the ETA is precomputed every 60 seconds and cached. Cache hits serve in under 5ms instead of the 200ms ETA model inference time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trip metadata"
          }), " (Memcache, TTL 30 minutes): Trip details that change infrequently (origin address, destination, rider name) are cached in Memcache to reduce database load."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Observability at Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uber operates in an active-active configuration across multiple data centers. Each data center can serve the full dispatch workload. Reads are served from the local data center, while writes are fanned out to all data centers. Cross-datacenter replication for driver positions uses a custom solution built on Kafka MirrorMaker: each data center runs its own Kafka cluster, and MirrorMaker copies all location events to the other data centers with a replication lag target of under 2 seconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This active-active configuration has saved Uber from several major outages. When a power failure affected one data center, traffic was diverted to the other data centers within 60 seconds. The only visible impact to riders was a slight increase in match latency (from 200ms to 350ms) for the duration of the failover."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Client Layer\"\n        RD[Rider App]\n        DR[Driver App]\n    end\n\n    subgraph \"Gateway Layer\"\n        API[API Gateway]\n        WS[WebSocket Gateway]\n    end\n\n    subgraph \"Dispatch\"\n        MT[Matching Service]\n        SP[Surge Pricing]\n        ETA[ETA Service]\n        GEO[Geospatial Index S2]\n    end\n\n    subgraph \"Streaming\"\n        KF[Kafka Event Bus]\n        FL[Flink Stream Processing]\n    end\n\n    subgraph \"Data Layer\"\n        RD[(Redis Driver State)]\n        SQL[(MySQL Trip Store)]\n        HDFS[(HDFS Historical)]\n    end\n\n    subgraph \"Analytics\"\n        HV[Hive]\n        SPK[Spark]\n        MW[Michelangelo ML]\n    end\n\n    RD --> API\n    DR --> WS\n    WS --> KF\n    KF --> FL\n    FL --> RD\n    FL --> HDFS\n    API --> MT\n    API --> SP\n    API --> ETA\n    MT --> GEO\n    MT --> KF\n    SP --> KF\n    ETA --> KF\n    HDFS --> HV\n    HDFS --> SPK\n    HDFS --> MW\n    SQL --> MT\n    SQL --> SP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory / Case Study"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 21: Case Study — Uber and Location-Based Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })
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
            children: "Theory / Case Study"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 21: Case Study — Uber and Location-Based Services"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory / Case Study"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        })
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
            children: "What geospatial indexing approach does Uber use for real-time dispatch?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) QuadTree, B) Google S2 with Hilbert curve 64-bit cell IDs, C) R-Tree in MySQL, D) PostGIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does the dispatch algorithm perform matching between riders and drivers?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Random assignment, B) Minimum-weight bipartite matching using greedy approximation scoring drivers by ETA, rating, and direction, C) First-come-first-served, D) Driver self-selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What data structure does Uber use for demand/supply ratio trending?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Redis Sorted Sets, B) Count-min sketch, C) Flink sliding windows with Kalman filtering aggregated per geofence, D) MySQL materialized views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does Uber shard data across its infrastructure?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) By user ID hash, B) By city/region providing natural data isolation, C) Random sharding, D) By driver ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the Kalman filter's role in the GPS pipeline?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Encrypt GPS data, B) Smooth noisy GPS readings combining position+velocity prediction with each observation, C) Compress GPS coordinates, D) Route calculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-uber-architecture-evolution",
      children: "Mermaid: Uber Architecture Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    M[Monolith: Python + MySQL] --> S[Service Split: Trip, Payment, Dispatch]\n    S --> K[Kafka Event Bus]\n    K --> D[Dispatch Service]\n    K --> T[Trip Service]\n    K --> P[Payment Service]\n    K --> R[Real-time: Flink]\n    D --> G[Geospatial Index]\n    T --> DB[(MySQL Cluster)]\n    R --> A[ETA Predictions]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-geospatial-index-surge-pricing-dispatch-matcher",
      children: "TypeScript: Geospatial Index, Surge Pricing, Dispatch Matcher"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class S2CellId {\n  static readonly maxLevel = 30;\n  static fromLatLng(lat: number, lng: number, level: number): bigint {\n    const phi = (lat * Math.PI) / 180;\n    const theta = (lng * Math.PI) / 180;\n    const x = Math.cos(phi) * Math.cos(theta);\n    const y = Math.cos(phi) * Math.sin(theta);\n    const z = Math.sin(phi);\n    const face = 0; // simplified: always face 0\n    const u = x / Math.max(Math.abs(y), Math.abs(z));\n    const v = y / Math.max(Math.abs(x), Math.abs(z));\n    const uvToST = (uv: number) => 0.5 * (uv + 1);\n    const stToIJ = (s: number, level: number) => Math.min(Math.floor(s * (1 << level)), (1 << level) - 1);\n    const i = stToIJ(uvToST(u), level);\n    const j = stToIJ(uvToST(v), level);\n    return BigInt((face << (2 * level)) | (i << level) | j);\n  }\n}\n\nclass SurgePricing {\n  private demandHistory = new Map<string, number[]>();\n  private readonly decayFactor = 0.7;\n\n  recordDemand(geofence: string, requestCount: number): void {\n    if (!this.demandHistory.has(geofence)) this.demandHistory.set(geofence, []);\n    this.demandHistory.get(geofence)!.push(requestCount);\n  }\n\n  getMultiplier(geofence: string, supply: number): number {\n    const demands = this.demandHistory.get(geofence) ?? [0];\n    const recentDemand = demands.slice(-10).reduce((a, b) => a + b, 0) / Math.min(demands.length, 10);\n    if (supply === 0) return 5.0;\n    const ratio = recentDemand / supply;\n    if (ratio <= 1) return 1.0;\n    return Math.min(5.0, 1.0 + (ratio - 1) * 0.5);\n  }\n}\n\nclass DispatchOptimizer {\n  match(requests: { id: string; lat: number; lng: number }[], drivers: { id: string; lat: number; lng: number }[]): Map<string, string> {\n    const assignment = new Map<string, string>();\n    const used = new Set<string>();\n    for (const req of requests) {\n      let best: string | null = null;\n      let bestDist = Infinity;\n      for (const drv of drivers) {\n        if (used.has(drv.id)) continue;\n        const dist = Math.hypot(drv.lat - req.lat, drv.lng - req.lng);\n        if (dist < bestDist) { bestDist = dist; best = drv.id; }\n      }\n      if (best) { assignment.set(req.id, best); used.add(best); }\n    }\n    return assignment;\n  }\n}\n\nclass ETAPredictor {\n  predict(distanceKm: number, trafficFactor: number): number {\n    const baseSpeed = 30;\n    const adjustedSpeed = baseSpeed * (1 - trafficFactor * 0.5);\n    return (distanceKm / adjustedSpeed) * 3600;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-ride-matching",
      children: "TypeScript: Ride Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RideRequest { userId: string; lat: number; lng: number; }\ninterface Driver { id: string; lat: number; lng: number; available: boolean; }\n\nclass RideMatcher {\n  match(request: RideRequest, drivers: Driver[]): Driver | null {\n    let best: Driver | null = null;\n    let minDist = Infinity;\n    for (const d of drivers) {\n      if (!d.available) continue;\n      const dist = Math.sqrt((d.lat - request.lat) ** 2 + (d.lng - request.lng) ** 2);\n      if (dist < minDist) { minDist = dist; best = d; }\n    }\n    return best;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-uber-architecture-case-study",
      children: "Implementation: Uber Architecture Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class UberArchitecture {\n  private drivers = new Map<string, { id: string; lat: number; lng: number; status: string; rating: number; totalTrips: number }>();\n  private riders = new Map<string, { id: string; lat: number; lng: number; paymentMethod: string }>();\n  private trips = new Map<string, { riderId: string; driverId: string; pickup: number[]; dropoff: number[]; status: string; fare: number; distance: number }>();\n  private pricingZones = new Map<string, { multiplier: number; demand: number; supply: number }>();\n  registerDriver(id: string, lat: number, lng: number): void { this.drivers.set(id, { id, lat, lng, status: \"available\", rating: 5.0, totalTrips: 0 }); }\n  registerRider(id: string, lat: number, lng: number): void { this.riders.set(id, { id, lat, lng, paymentMethod: \"card\" }); }\n  private haversine(lat1: number, lng1: number, lat2: number, lng2: number): number { const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLng = (lng2 - lng1) * Math.PI / 180; const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2; return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); }\n  findNearby(lat: number, lng: number, radiusKm = 5): string[] { const nearby: { id: string; dist: number }[] = [];\n    for (const [id, d] of this.drivers) { if (d.status !== \"available\") continue; const dist = this.haversine(lat, lng, d.lat, d.lng); if (dist <= radiusKm) nearby.push({ id, dist }); }\n    return nearby.sort((a, b) => a.dist - b.dist).map(n => n.id); }\n  requestRide(riderId: string, pickupLat: number, pickupLng: number, dropoffLat: number, dropoffLng: number): { tripId: string; driverId: string; fare: number; eta: number } | null {\n    const rider = this.riders.get(riderId); if (!rider) return null; const nearby = this.findNearby(pickupLat, pickupLng); if (nearby.length === 0) return null;\n    const driverId = nearby[0]; const driver = this.drivers.get(driverId)!; driver.status = \"busy\"; const dist = this.haversine(pickupLat, pickupLng, dropoffLat, dropoffLng);\n    const fare = this.calculateFare(dist); const tripId = `trip-${Date.now()}`;\n    this.trips.set(tripId, { riderId, driverId, pickup: [pickupLat, pickupLng], dropoff: [dropoffLat, dropoffLng], status: \"in_progress\", fare, distance: dist });\n    return { tripId, driverId, fare, eta: Math.round(dist / 30 * 60) }; }\n  private calculateFare(distKm: number): number { return Math.round((2.5 + distKm * 1.5 + distKm / 30 * 60 * 0.3) * 100) / 100; }\n  completeTrip(tripId: string): { fare: number } { const t = this.trips.get(tripId); if (!t) throw new Error(\"Trip not found\"); t.status = \"completed\"; this.drivers.get(t.driverId)!.status = \"available\"; return { fare: t.fare }; }\n}\nclass SurgePricing { private zones = new Map<string, { demand: number; supply: number }>();\n  recordDemand(zone: string): void { const z = this.zones.get(zone) || { demand: 0, supply: 1 }; z.demand++; this.zones.set(zone, z); }\n  recordSupply(zone: string): void { const z = this.zones.get(zone) || { demand: 1, supply: 0 }; z.supply++; this.zones.set(zone, z); }\n  getMultiplier(zone: string): number { const z = this.zones.get(zone); if (!z || z.supply === 0) return 1; const ratio = z.demand / z.supply; return ratio <= 1 ? 1 : ratio <= 2 ? 1.5 : ratio <= 3 ? 2.0 : 3.0; }\n}\nclass TripRouter { shortestPath(lat1: number, lng1: number, lat2: number, lng2: number): { distanceKm: number; durationMin: number; path: number[][] } { const dist = this.haversine(lat1, lng1, lat2, lng2); return { distanceKm: Math.round(dist * 10) / 10, durationMin: Math.round(dist / 30 * 60), path: [[lat1, lng1], [lat2, lng2]] }; }\n  private haversine(lat1: number, lng1: number, lat2: number, lng2: number): number { const R = 6371; const [rlat1, rlat2, rlng1, rlng2] = [lat1, lat2, lng1, lng2].map(d => d * Math.PI / 180); const dlat = rlat2 - rlat1; const dlng = rlng2 - rlng1; const a = Math.sin(dlat/2)**2 + Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(dlng/2)**2; return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-ride-matcher-with-geohash-indexing-surge-pricer-with-dynamic-zones-and-trip-tracker",
      children: "TypeScript: Ride Matcher with Geohash Indexing, Surge Pricer with Dynamic Zones, and Trip Tracker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RideMatcher {\n  private geoIndex = new Map<string, string[]>();\n  private drivers = new Map<string, { id: string; lat: number; lng: number; available: boolean; rating: number; heading: number }>();\n  private readonly geohashPrecision = 7;\n\n  geohash(lat: number, lng: number, precision: number = this.geohashPrecision): string {\n    const base32 = \"0123456789bcdefghjkmnpqrstuvwxyz\";\n    let hash = \"\";\n    let minLat = -90, maxLat = 90, minLng = -180, maxLng = 180;\n    for (let i = 0; i < precision; i++) {\n      let hashBit = 0;\n      for (let j = 0; j < 5; j++) {\n        if (i * 5 + j % 2 === 0) {\n          const mid = (minLng + maxLng) / 2;\n          if (lng >= mid) { hashBit = (hashBit << 1) | 1; minLng = mid; }\n          else { hashBit = (hashBit << 1) | 0; maxLng = mid; }\n        } else {\n          const mid = (minLat + maxLat) / 2;\n          if (lat >= mid) { hashBit = (hashBit << 1) | 1; minLat = mid; }\n          else { hashBit = (hashBit << 1) | 0; maxLat = mid; }\n        }\n      }\n      hash += base32[hashBit];\n    }\n    return hash;\n  }\n\n  neighbors(hash: string): string[] {\n    const adjacent = new Set<string>();\n    const base32 = \"0123456789bcdefghjkmnpqrstuvwxyz\";\n    for (const c of base32) {\n      for (let i = hash.length - 1; i >= 0; i--) {\n        const neighbor = hash.slice(0, i) + c + hash.slice(i + 1);\n        adjacent.add(neighbor);\n      }\n    }\n    return [...adjacent];\n  }\n\n  updateDriverLocation(driverId: string, lat: number, lng: number): void {\n    const driver = this.drivers.get(driverId);\n    if (!driver) return;\n    const oldHash = this.geohash(driver.lat, driver.lng);\n    const newHash = this.geohash(lat, lng);\n    if (oldHash !== newHash) {\n      const oldList = this.geoIndex.get(oldHash);\n      if (oldList) {\n        const idx = oldList.indexOf(driverId);\n        if (idx >= 0) oldList.splice(idx, 1);\n      }\n    }\n    driver.lat = lat;\n    driver.lng = lng;\n    if (!this.geoIndex.has(newHash)) this.geoIndex.set(newHash, []);\n    if (!this.geoIndex.get(newHash)!.includes(driverId)) this.geoIndex.get(newHash)!.push(driverId);\n  }\n\n  findNearest(riderLat: number, riderLng: number, radiusCells = 1): { driverId: string; eta: number }[] {\n    const riderHash = this.geohash(riderLat, riderLng);\n    const cells = [riderHash, ...this.neighbors(riderHash).slice(0, radiusCells * 8)];\n    const candidates: { driverId: string; dist: number; eta: number }[] = [];\n    const seen = new Set<string>();\n    for (const cell of cells) {\n      const driversInCell = this.geoIndex.get(cell) ?? [];\n      for (const driverId of driversInCell) {\n        if (seen.has(driverId)) continue;\n        seen.add(driverId);\n        const d = this.drivers.get(driverId)!;\n        if (!d.available) continue;\n        const dist = this.haversine(riderLat, riderLng, d.lat, d.lng);\n        const eta = this.estimateETA(dist, d.heading, riderLat, riderLng, d.lat, d.lng);\n        candidates.push({ driverId, dist, eta });\n      }\n    }\n    return candidates.sort((a, b) => a.eta - b.eta).map(({ driverId, eta }) => ({ driverId, eta }));\n  }\n\n  private estimateETA(distKm: number, driverHeading: number, riderLat: number, riderLng: number, driverLat: number, driverLng: number): number {\n    const speedKmph = 30;\n    const directionPenalty = Math.abs(driverHeading - this.bearing(driverLat, driverLng, riderLat, riderLng)) > 90 ? 1.3 : 1.0;\n    return Math.round((distKm / speedKmph) * 3600 * directionPenalty);\n  }\n\n  private bearing(lat1: number, lng1: number, lat2: number, lng2: number): number {\n    const dLng = (lng2 - lng1) * Math.PI / 180;\n    const y = Math.sin(dLng) * Math.cos(lat2 * Math.PI / 180);\n    const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) - Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLng);\n    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;\n  }\n\n  private haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {\n    const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLng = (lng2 - lng1) * Math.PI / 180;\n    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;\n    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  }\n}\n\nclass SurgePricer {\n  private zones = new Map<string, { demand: number; supply: number; baselineDemand: number; multiplier: number; lastUpdated: number }>();\n  private readonly minMultiplier = 1.0;\n  private readonly maxMultiplier = 5.0;\n  private readonly decayRate = 0.1;\n\n  recordDemand(zoneId: string): void {\n    if (!this.zones.has(zoneId)) this.zones.set(zoneId, { demand: 0, supply: 1, baselineDemand: 0, multiplier: 1.0, lastUpdated: Date.now() });\n    const zone = this.zones.get(zoneId)!;\n    zone.demand++;\n    zone.lastUpdated = Date.now();\n    this.recalculate(zoneId);\n  }\n\n  recordSupply(zoneId: string): void {\n    if (!this.zones.has(zoneId)) this.zones.set(zoneId, { demand: 1, supply: 0, baselineDemand: 0, multiplier: 1.0, lastUpdated: Date.now() });\n    const zone = this.zones.get(zoneId)!;\n    zone.supply++;\n    zone.lastUpdated = Date.now();\n    this.recalculate(zoneId);\n  }\n\n  setBaseline(zoneId: string, baselineDemand: number): void {\n    if (!this.zones.has(zoneId)) this.zones.set(zoneId, { demand: 0, supply: 1, baselineDemand: 0, multiplier: 1.0, lastUpdated: Date.now() });\n    this.zones.get(zoneId)!.baselineDemand = baselineDemand;\n  }\n\n  getMultiplier(zoneId: string): number {\n    const zone = this.zones.get(zoneId);\n    if (!zone || zone.supply === 0) return this.maxMultiplier;\n    const ratio = zone.demand / zone.supply;\n    const spikeFactor = zone.baselineDemand > 0 ? zone.demand / Math.max(zone.baselineDemand, 1) : 1;\n    const multiplier = Math.min(this.maxMultiplier, Math.max(this.minMultiplier, 1.0 + (ratio - 1) * 0.5 * spikeFactor));\n    return Math.round(multiplier * 10) / 10;\n  }\n\n  private recalculate(zoneId: string): void {\n    const zone = this.zones.get(zoneId);\n    if (zone) zone.multiplier = this.getMultiplier(zoneId);\n  }\n\n  decayAll(): void {\n    const now = Date.now();\n    for (const [zoneId, zone] of this.zones) {\n      const elapsed = (now - zone.lastUpdated) / 1000;\n      if (elapsed > 120) {\n        zone.multiplier = Math.max(this.minMultiplier, zone.multiplier - this.decayRate * (elapsed / 60));\n        if (zone.multiplier <= this.minMultiplier + 0.1) {\n          zone.multiplier = this.minMultiplier;\n          zone.demand = 0;\n          zone.supply = 1;\n        }\n      }\n    }\n  }\n\n  getActiveSurgeZones(): { zoneId: string; multiplier: number }[] {\n    return [...this.zones.entries()]\n      .filter(([_, z]) => z.multiplier > this.minMultiplier)\n      .map(([zoneId, z]) => ({ zoneId, multiplier: z.multiplier }))\n      .sort((a, b) => b.multiplier - a.multiplier);\n  }\n}\n\nclass TripTracker {\n  private trips = new Map<string, { driverId: string; riderId: string; path: { lat: number; lng: number; ts: number }[]; status: string; fare: number; distance: number }>();\n  private readonly farePerKm = 1.5;\n  private readonly farePerMin = 0.3;\n  private readonly baseFare = 2.5;\n\n  startTrip(tripId: string, driverId: string, riderId: string): void {\n    this.trips.set(tripId, { driverId, riderId, path: [], status: \"in_progress\", fare: 0, distance: 0 });\n  }\n\n  recordGPS(tripId: string, lat: number, lng: number): void {\n    const trip = this.trips.get(tripId);\n    if (!trip) return;\n    const lastPoint = trip.path[trip.path.length - 1];\n    if (lastPoint) {\n      trip.distance += this.haversine(lastPoint.lat, lastPoint.lng, lat, lng);\n    }\n    trip.path.push({ lat, lng, ts: Date.now() });\n  }\n\n  matchPathToRoad(tripId: string, roadNetwork: { nodes: { lat: number; lng: number }[]; edges: [number, number][] }): { matchedPoints: number; deviation: number } {\n    const trip = this.trips.get(tripId);\n    if (!trip || trip.path.length === 0) return { matchedPoints: 0, deviation: 0 };\n    let matched = 0;\n    let totalDeviation = 0;\n    for (const point of trip.path) {\n      let minDist = Infinity;\n      for (const node of roadNetwork.nodes) {\n        const dist = this.haversine(point.lat, point.lng, node.lat, node.lng);\n        if (dist < minDist) minDist = dist;\n      }\n      if (minDist < 0.05) matched++;\n      totalDeviation += minDist;\n    }\n    return { matchedPoints: matched, deviation: totalDeviation / trip.path.length };\n  }\n\n  calculateFare(tripId: string, surgeMultiplier = 1.0): { fare: number; distanceKm: number; durationMin: number } {\n    const trip = this.trips.get(tripId);\n    if (!trip || trip.path.length < 2) return { fare: 0, distanceKm: 0, durationMin: 0 };\n    const durationMs = trip.path[trip.path.length - 1].ts - trip.path[0].ts;\n    const durationMin = durationMs / 60000;\n    const distanceKm = trip.distance;\n    const fare = (this.baseFare + distanceKm * this.farePerKm + durationMin * this.farePerMin) * surgeMultiplier;\n    trip.fare = Math.round(fare * 100) / 100;\n    return { fare: trip.fare, distanceKm: Math.round(distanceKm * 10) / 10, durationMin: Math.round(durationMin * 10) / 10 };\n  }\n\n  endTrip(tripId: string): { fare: number; distanceKm: number; pathLength: number } {\n    const trip = this.trips.get(tripId);\n    if (!trip) throw new Error(\"Trip not found\");\n    trip.status = \"completed\";\n    return { fare: trip.fare, distanceKm: Math.round(trip.distance * 10) / 10, pathLength: trip.path.length };\n  }\n\n  private haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {\n    const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLng = (lng2 - lng1) * Math.PI / 180;\n    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;\n    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-map-matching-and-eta-prediction",
      children: "TypeScript: Map Matching and ETA Prediction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MapMatcher {\n  private roadGraph = new Map<string, { neighbors: string[]; speedKmph: number; bearing: number }>();\n\n  addRoad(segmentId: string, neighbors: string[], speedKmph: number, bearing: number): void {\n    this.roadGraph.set(segmentId, { neighbors, speedKmph, bearing });\n  }\n\n  viterbiMatch(gpsPoints: { lat: number; lng: number; ts: number }[]): { roadSegments: string[]; confidence: number } {\n    if (gpsPoints.length === 0) return { roadSegments: [], confidence: 0 };\n    const candidates = [...this.roadGraph.keys()];\n    const dp: Map<string, { prob: number; prev: string | null }>[] = [];\n    const first: Map<string, { prob: number; prev: string | null }> = new Map();\n    for (const seg of candidates) {\n      first.set(seg, { prob: 1 / candidates.length, prev: null });\n    }\n    dp.push(first);\n    for (let t = 1; t < gpsPoints.length; t++) {\n      const prev = dp[t - 1];\n      const curr: Map<string, { prob: number; prev: string | null }> = new Map();\n      for (const seg of candidates) {\n        let maxProb = 0;\n        let bestPrev: string | null = null;\n        for (const [prevSeg, prevState] of prev) {\n          const road = this.roadGraph.get(prevSeg)!;\n          const transitionProb = road.neighbors.includes(seg) ? 0.8 : 0.2;\n          const emissionProb = 1 / candidates.length;\n          const prob = prevState.prob * transitionProb * emissionProb;\n          if (prob > maxProb) { maxProb = prob; bestPrev = prevSeg; }\n        }\n        curr.set(seg, { prob: maxProb, prev: bestPrev });\n      }\n      dp.push(curr);\n    }\n    let bestSeg = \"\";\n    let bestProb = 0;\n    for (const [seg, state] of dp[dp.length - 1]) {\n      if (state.prob > bestProb) { bestProb = state.prob; bestSeg = seg; }\n    }\n    const path: string[] = [bestSeg];\n    for (let t = dp.length - 1; t > 0; t--) {\n      const prev = dp[t].get(bestSeg)!.prev;\n      if (prev) { path.unshift(prev); bestSeg = prev; }\n    }\n    return { roadSegments: path, confidence: bestProb };\n  }\n}\n\nclass ETAPredictor {\n  private historicalSpeed = new Map<string, { dayOfWeek: number; hour: number; avgSpeed: number }[]>();\n\n  train(observations: { segmentId: string; dayOfWeek: number; hour: number; speed: number }[]): void {\n    for (const obs of observations) {\n      if (!this.historicalSpeed.has(obs.segmentId)) this.historicalSpeed.set(obs.segmentId, []);\n      this.historicalSpeed.get(obs.segmentId)!.push({ dayOfWeek: obs.dayOfWeek, hour: obs.hour, avgSpeed: obs.speed });\n    }\n  }\n\n  predict(segments: string[], dayOfWeek: number, hour: number, trafficFactor = 1.0): { totalMinutes: number; segmentBreakdown: { segmentId: string; minutes: number }[] } {\n    const segmentBreakdown: { segmentId: string; minutes: number }[] = [];\n    let totalMinutes = 0;\n    for (const segId of segments) {\n      const history = this.historicalSpeed.get(segId) ?? [];\n      const relevant = history.filter(h => h.dayOfWeek === dayOfWeek && Math.abs(h.hour - hour) <= 1);\n      const avgSpeed = relevant.length > 0 ? relevant.reduce((s, h) => s + h.avgSpeed, 0) / relevant.length : 30;\n      const adjustedSpeed = avgSpeed * (1 - trafficFactor * 0.3);\n      const distanceKm = 1;\n      const minutes = (distanceKm / adjustedSpeed) * 60;\n      segmentBreakdown.push({ segmentId: segId, minutes: Math.round(minutes * 10) / 10 });\n      totalMinutes += minutes;\n    }\n    return { totalMinutes: Math.round(totalMinutes * 10) / 10, segmentBreakdown };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    classDef client fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef dispatch fill:#fff3e0,stroke:#f57c00,stroke-width:2px\n    classDef stream fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n    classDef data fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n    classDef price fill:#fce4ec,stroke:#c62828,stroke-width:2px\n\n    subgraph \"Client Layer\"\n        RD[Rider App]:::client\n        DR[Driver App]:::client\n    end\n\n    subgraph \"Ride Lifecycle\"\n        REQ[Request Ride<br/>Geohash Lookup]:::dispatch\n        MATCH[Match Driver<br/>Bipartite Scoring]:::dispatch\n        PICK[Driver En Route<br/>ETA Refresh 30s]:::dispatch\n        TRIP[Trip In Progress<br/>GPS 4s Interval]:::dispatch\n        COMP[Complete Trip<br/>Fare Calculation]:::dispatch\n    end\n\n    subgraph \"Geospatial Service\"\n        GEO[Geohash Index<br/>S2 Cell IDs]:::dispatch\n        RING[Ring Expansion<br/>Level 14 to 13 to 12]:::dispatch\n        KALMAN[Kalman Filter<br/>Noise Reduction]:::dispatch\n    end\n\n    subgraph \"Streaming Pipeline\"\n        KAFKA[Kafka Event Bus<br/>7.5M events/s]:::stream\n        FLINK[Flink Stream<br/>Sliding Window 4s]:::stream\n        REDIS[(Redis Cache<br/>Driver Positions)]:::data\n    end\n\n    subgraph \"Pricing Engine\"\n        SURGE[Surge Pricing<br/>Demand/Supply Ratio]:::price\n        BASELINE[Baseline Demand<br/>ML Prediction]:::price\n        FARE[Fare Calculator<br/>Distance + Time + Surge]:::price\n    end\n\n    subgraph \"Historical Store\"\n        HDFS[(HDFS<br/>Raw GPS Traces)]:::data\n        HIVE[Hive Analytics<br/>Batch Processing]:::data\n        ML[Michelangelo ML<br/>ETA Models]:::data\n    end\n\n    RD --> REQ\n    DR --> GEO\n    REQ --> RING\n    RING --> MATCH\n    GEO --> MATCH\n    MATCH --> PICK\n    PICK --> TRIP\n    TRIP --> COMP\n    DR --> KAFKA\n    KAFKA --> FLINK\n    FLINK --> REDIS\n    FLINK --> HDFS\n    FLINK --> KALMAN\n    KALMAN --> GEO\n    REQ --> SURGE\n    SURGE --> BASELINE\n    BASELINE --> ML\n    HDFS --> ML\n    MATCH --> FARE\n    FARE --> SURGE\n    COMP --> FARE\n    COMP --> HIVE\n"
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
            children: "Geospatial indexing with S2 cell IDs enables efficient nearest-driver queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Hilbert curve-based 64-bit cell IDs; query by cell + ring expansion; adapt cell level (12-15) by density"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kalman filtering reduces GPS noise from 15m to sub-3m accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model driver state as position + velocity; prediction step handles tunnel dropouts; update step corrects with each GPS reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Surge pricing as real-time demand/supply equilibrium with ML prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute multiplier per geofence every 2-5 minutes; use historical baselines to distinguish events from noise; decay multiplier gradually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch as minimum-weight bipartite matching with greedy approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score drivers by ETA (60%), rating (20%), direction (10%), surge zone (10%); use greedy O(N log N) instead of Hungarian O(N³)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "City-level sharding provides natural data isolation for location-based services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard by city/region; cross-city trips use API orchestration; each city's data is self-contained for most queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active-active multi-region with Kafka MirrorMaker under 2s replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each region serves reads locally; writes fan out via MirrorMaker; validate with uChaos experiments quarterly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven architecture with Kafka as backbone for 30B+ events/day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition by city; use Avro schema registry for compatibility; transactional outbox pattern for dual-write safety"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-surge-pricing-during-a-stadium-event",
      children: "Case Study: Surge Pricing During a Stadium Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A major concert ends at 11 PM at a stadium in downtown San Francisco. 30,000 attendees simultaneously request rides. The area normally has 200 available drivers. The surge pricing system must detect the spike, compute multipliers, and communicate pricing to riders and drivers within 2 minutes of the event ending."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The geohash-based zone covering the stadium (precision 7, ~150m x 150m) shows demand surging from a baseline of 50 requests per 5-minute window to 3,000 requests in 2 minutes. The supply in the zone remains at 180 drivers (20 drivers were already in transit to the area). The SurgePricer computes: demand/supply ratio = 3,000/180 approximately 16.7. The spike factor (current demand / baseline demand) = 3,000/50 = 60. The multiplier is clamped at the maximum of 5.0x. Within 2 minutes of the event ending, all rider apps within the stadium zone show 5.0x surge pricing on their screens."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system broadcasts surge zone notifications to all drivers within a 3-mile radius (geohash ring at distance 3 from the stadium cell). 800 drivers respond by navigating toward the stadium. The ML baseline predictor, trained on 6 months of concert data, had predicted a 4.2x surge for this event at 11 PM Friday. The actual 5.0x is 19% higher due to an unexpected encore extending the event by 20 minutes. As supply increases (from 180 to 950 drivers over 15 minutes), the decay function reduces the multiplier stepwise: 5.0x to 3.5x after 5 minutes to 2.0x after 10 minutes to 1.2x after 20 minutes. The ML model records the deviation for retraining, improving next week's prediction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-gps-trajectory-map-matching-in-urban-canyons",
      children: "Case Study: GPS Trajectory Map Matching in Urban Canyons"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A driver navigates through downtown Manhattan where skyscrapers cause GPS multipath errors of up to 50 meters. The driver takes a route: starting at 5th Avenue and 42nd Street, proceeding south on 5th Avenue for 2 km, then turning onto 34th Street. The raw GPS trajectory shows points jumping 30-50 meters east into buildings due to signal reflection."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kalman filter smooths the raw GPS stream. Each observation (every 4 seconds) with a 50m error radius is combined with the prediction from the previous state (position + velocity). The filtered position is typically within 8 meters of the true road position. The map matcher runs the Viterbi algorithm on the filtered trajectory: it considers the road network segments within a 100m buffer of each filtered point and finds the most likely sequence of road segments. The emission probability is computed as a Gaussian centered on the road segment with 10m standard deviation. The transition probability favors segments that are connected in the road graph and have similar bearing to the driver's heading."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The matching result is a sequence of road segment IDs with 93% confidence. The trip tracker uses the matched road path for accurate fare calculation: the fare distance is 2.3 km (road distance) vs 2.1 km (GPS crow-flies) -- a 10% difference that would otherwise undercharge the rider. The ETA prediction uses the matched path to compute remaining time: at the current traffic speed on 5th Avenue (15 km/h), the remaining 0.8 km to 34th Street takes 3.2 minutes. The ETA is refreshed every 30 seconds and displayed to the rider as \"4 minutes away.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case study uber\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'case study uber', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case study uber - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'case study uber' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uber's architecture evolved from a Python monolith with a single MySQL database to a 750+ service microservice ecosystem powered by Kafka and Flink."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google S2 geometry maps latitude/longitude to 64-bit cell IDs using a Hilbert curve on a cube projection, enabling efficient spatial indexing in standard databases and key-value stores."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uber's H3 hexagon system improves on S2 by using hexagons for uniform neighbor distances, used primarily for visualization and market analysis rather than real-time dispatch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The real-time location pipeline ingests 7.5M GPS updates/second via gRPC/WebSocket ? Kafka ? Flink, with Kalman filtering for noise reduction and Redis for current state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The dispatch algorithm formulates matching as minimum-weight bipartite matching using S2-based geofence queries, scoring drivers by ETA, rating, direction, and surge multiplier."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Surge pricing uses real-time demand/supply ratios per geofence with ML-driven demand prediction to dynamically adjust fare multipliers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sharding by city provides natural data isolation, with cross-city trips handled via API orchestration between region shards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system achieves sub-500ms match latency through careful use of in-memory caches (Redis), approximation algorithms, and precomputed geospatial indexes."
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
      }), "1. **B-Trees** fail for 2D queries because they index 1D ranges. S2's **Hilbert curve** maps 2D coordinates to 1D 64-bit cell IDs preserving proximity — nearby points have numerically similar cell IDs enabling efficient B-Tree range scans. S2 is better for dispatch (range queries), H3 for visualization (uniform hexagon neighbors).\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kafka"
            }), " ingests 7.5M GPS events/second partitioned by city. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flink"
            }), " applies a sliding 4-second window with Kalman filtering: prediction step (propagates velocity) + update step (corrects with observation), reducing noise from 15m to ~3m. Filtered positions are written to Redis (TTL 15s) and HDFS."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "dispatch algorithm"
            }), " scores each (rider, driver) pair using ETA (60%), rating (20%), direction (10%), and surge zone (10%). It solves as minimum-weight bipartite matching using greedy approximation (O(N log N)) instead of Hungarian (O(N³)). Driver preferences (max distance, destination filter) are applied as hard constraints."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Surge multiplier"
            }), " = baseline_ratio + (demand/supply) × sensitivity, clamped to 1.0x-5.0x. ML features: time-of-day, day-of-week, weather, event calendar, historical demand per geofence. Model trained on Michelangelo with 5-minute prediction windows."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "City-level sharding"
            }), " provides natural data isolation — a San Francisco ride doesn't query Tokyo data. Cross-city trips require API orchestration between origin and destination shards. Consistent hashing maps users to shards."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "uChaos"
            }), " injects controlled failures (latency injection, instance termination, Kafka broker failure) during low traffic with automated rollback. Unlike traditional DR testing (scheduled, isolated), uChaos runs continuously in production with blast radius limited to one city."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. **Spatial Index**: Use S2 at level 14 (6.25 km² for urban dispatch). Store driver IDs in Redis Sets per cell with TTL 15s. Geofence expansion: query cell + ring 1; if <5 drivers, expand to ring 2 (parent cell level 13). Atomic Lua script for driver cell transitions.\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ETA Features"
            }), ": 8 families — (1) road-segment historical speed profiles (15-min buckets), (2) real-time traffic, (3) intersection delay, (4) time-of-day/week, (5) weather, (6) events, (7) driver behavior, (8) route complexity. Cold-start: use city-wide average speeds for new drivers, update after 10 trips."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Surge Simulation"
            }), ": Detect spike by comparing 2-min demand vs 60-min baseline. Compute multiplier: min(5.0, max(1.0, ratio × spike_factor × 0.5)). Decay: every 60s, reduce by 0.3x if supply/demand ratio decreases. Prevent overshoot by capping surge area to 10-block radius and decaying outer zones first."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Failure Analysis"
            }), ": (a) Flink crash: checkpoint recovery from last successful checkpoint (2-min processing lag). (b) Redis unreachable: fallback to stale driver positions in local cache with 30s TTL. (c) Kafka broker failure: ISR (in-sync replicas) election within 10s. (d) Slow S2 query: Hystrix circuit breaker opens after 200ms, return cached geofence results. (e) Table lock: detect via query timeout, route reads to replica."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Solution>\n**Global Outage Recovery**:\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tier 1 (30s RTO)"
          }), ": Replay Kafka ", (0,jsx_runtime.jsx)(_components.code, {
            children: "location_updates"
          }), " topic from last 30 seconds. Flink restores from checkpoint, reprocesses events, repopulates Redis. Validation gate: check driver speed (no >200 km/h), duplicate detection (same driver in two cells), temporal consistency (timestamps monotonic). Go: error rate < 0.1%."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tier 2 (5min RTO)"
          }), ": Fallback Redis cluster with larger TTLs (60s vs 15s) and no-eviction policy. Pre-warmed by shadowing primary Redis writes. DNS failover via Route53 health checks pointing to fallback cluster."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tier 3 (30min RTO)"
          }), ": SMS-based dispatch — rider texts keyword to short code, IVR collects pickup location, system uses precomputed city-grid (H3 hexagons with baseline driver counts by hour, updated daily) to estimate nearest driver. No real-time GPS means double-dispatch prevention uses idempotency tokens per phone number with 5-min TTL. RPO for SMS flow: 24 hours (data freshness). Communication: in-app banner, push notification, SMS blast to all active users, social media post, press release template. GDPR 72-hour notification prepared but not sent (no personal data breach)."]
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