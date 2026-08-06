"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[95744],{

/***/ 86371
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_15_cdn_dns_edge_md_d98_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-15-cdn-dns-edge-md-d98.json
const site_docs_courses_system_design_15_cdn_dns_edge_md_d98_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/15-cdn-dns-edge","title":"Chapter 15: CDN, DNS, and Edge Computing","description":"Previous 16 Api Gateways Cqrs","source":"@site/docs/courses/system-design/15-cdn-dns-edge.md","sourceDirName":"courses/system-design","slug":"/system-design/15-cdn-dns-edge","permalink":"/ai-engineering-journey/system-design/15-cdn-dns-edge","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-cdn-dns-edge","slug":"/system-design/15-cdn-dns-edge","title":"Chapter 15: CDN, DNS, and Edge Computing","sidebar_label":"Chapter 15: CDN, DNS, and Edge Computing","sidebar_position":15},"sidebar":"coursesSidebar","previous":{"title":"Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond","permalink":"/ai-engineering-journey/system-design/14-distributed-data-structures"},"next":{"title":"Chapter 16: API Gateways, CQRS, and Event Sourcing","permalink":"/ai-engineering-journey/system-design/16-api-gateways-cqrs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/15-cdn-dns-edge.md


const frontMatter = {
	id: '15-cdn-dns-edge',
	slug: '/system-design/15-cdn-dns-edge',
	title: 'Chapter 15: CDN, DNS, and Edge Computing',
	sidebar_label: 'Chapter 15: CDN, DNS, and Edge Computing',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: CDN, DNS, and Edge Computing';

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
  "value": "1. DNS Hierarchy",
  "id": "1-dns-hierarchy",
  "level": 3
}, {
  "value": "2. DNS Resolution Flow",
  "id": "2-dns-resolution-flow",
  "level": 3
}, {
  "value": "3. DNS Caching",
  "id": "3-dns-caching",
  "level": 3
}, {
  "value": "4. DNS Record Types",
  "id": "4-dns-record-types",
  "level": 3
}, {
  "value": "5. DNS-Based Load Balancing",
  "id": "5-dns-based-load-balancing",
  "level": 3
}, {
  "value": "6. Anycast Routing",
  "id": "6-anycast-routing",
  "level": 3
}, {
  "value": "7. CDN Architecture",
  "id": "7-cdn-architecture",
  "level": 3
}, {
  "value": "8. CDN Caching Strategies",
  "id": "8-cdn-caching-strategies",
  "level": 3
}, {
  "value": "9. Edge Caching Comparison",
  "id": "9-edge-caching-comparison",
  "level": 3
}, {
  "value": "10. Image Optimization Pipeline",
  "id": "10-image-optimization-pipeline",
  "level": 3
}, {
  "value": "11. Origin Shielding",
  "id": "11-origin-shielding",
  "level": 3
}, {
  "value": "12. DDoS Mitigation at Edge",
  "id": "12-ddos-mitigation-at-edge",
  "level": 3
}, {
  "value": "13. Edge Computing",
  "id": "13-edge-computing",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: DNS Resolution with Tracing",
  "id": "example-1-dns-resolution-with-tracing",
  "level": 3
}, {
  "value": "Example 2: Anycast DDoS Absorption",
  "id": "example-2-anycast-ddos-absorption",
  "level": 3
}, {
  "value": "Example 3: Image Optimization at Edge",
  "id": "example-3-image-optimization-at-edge",
  "level": 3
}, {
  "value": "Example 4: Cloudflare Worker for JWT Validation",
  "id": "example-4-cloudflare-worker-for-jwt-validation",
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
  "value": "Practical Implementation",
  "id": "practical-implementation",
  "level": 2
}, {
  "value": "CDN Cache Simulator",
  "id": "cdn-cache-simulator",
  "level": 3
}, {
  "value": "DNS Resolution Chain Simulator",
  "id": "dns-resolution-chain-simulator",
  "level": 3
}, {
  "value": "Latency-Aware Edge Router",
  "id": "latency-aware-edge-router",
  "level": 3
}, {
  "value": "CDN Origin Pull ? Sequence Diagram",
  "id": "cdn-origin-pull--sequence-diagram",
  "level": 3
}, {
  "value": "Global Edge Architecture ? Deployment View",
  "id": "global-edge-architecture--deployment-view",
  "level": 3
}, {
  "value": "Cache Hit Ratio vs Latency ? Trade-off Visualization",
  "id": "cache-hit-ratio-vs-latency--trade-off-visualization",
  "level": 3
}, {
  "value": "TypeScript: DNS Resolver with Iterative Walk and Latency Routing",
  "id": "typescript-dns-resolver-with-iterative-walk-and-latency-routing",
  "level": 3
}, {
  "value": "TypeScript: CDN Edge Node with Cache Hierarchy and Purge",
  "id": "typescript-cdn-edge-node-with-cache-hierarchy-and-purge",
  "level": 3
}, {
  "value": "DNS Resolution Flow with Subgraphs",
  "id": "dns-resolution-flow-with-subgraphs",
  "level": 3
}, {
  "value": "Implementation: DNS, CDN, and Edge Computing",
  "id": "implementation-dns-cdn-and-edge-computing",
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
        id: "chapter-15-cdn-dns-and-edge-computing",
        children: "Chapter 15: CDN, DNS, and Edge Computing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/14-distributed-data-structures",
          children: "14 Distributed Data Structures"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/16-api-gateways-cqrs",
          children: "16 Api Gateways Cqrs"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the full DNS resolution path from stub resolver to authoritative server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze DNS caching hierarchies: browser, OS, resolver, and negative caching with TTL semantics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare DNS-based load balancing strategies: round-robin, weighted, geo-based, and latency-based"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design CDN architectures: origin shield, edge PoPs, pull vs push zones, cache invalidation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate edge computing platforms: Lambda@Edge, Cloudflare Workers, and EdgeKV"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate DDoS mitigation strategies at the edge: rate limiting, WAF, scrubbing, anycast absorption"
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
        href: "../../assets/images/lessons/system-design/15-cdn-dns-edge/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/15-cdn-dns-edge/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/15-cdn-dns-edge/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/15-cdn-dns-edge/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/15-cdn-dns-edge/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/15-cdn-dns-edge/visual-explanation.png",
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
        children: "flowchart LR\n    A[Core Concepts] --> B[Design Decisions]\n    B --> C[Real-World Examples]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | CDN, DNS, edge computing, content delivery, latency optimization |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 15: CDN, DNS, and Edge Computing |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | CDN configuration, DNS routing, edge compute design |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "Core concepts covered in Chapter 15: CDN, DNS, and Edge Computing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, Examples, Concept Comparison, Quick Reference"
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
        children: "flowchart LR\n    A[Theory]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[CrossApplication Matrix]\n    C --> D\n    E[Chapter Quiz]\n    D --> E\n"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/15-cdn-dns-edge.png",
        alt: "CDN DNS Edge Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-dns-hierarchy",
      children: "1. DNS Hierarchy"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nThe Domain Name System (DNS) is a hierarchical, distributed naming system that resolves human-readable domain names (e.g., api.example.com) to IP addresses. The hierarchy has four tiers:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root servers"
      }), ": 13 logical root zones (A through M) operated by 12 independent organizations, anycasted across hundreds of physical locations worldwide. Root servers answer with referrals to TLD servers. They contain no domain-specific records."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TLD servers"
      }), ": Authoritative for top-level domains (.com, .org, .net, .io, .gov, country TLDs like .uk, .jp). Operated by registries (Verisign for .com/.net, Public Interest Registry for .org). Each TLD server knows which authoritative nameservers serve each registered domain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authoritative servers"
      }), ": The final source of truth for a specific domain. Maintained by the domain owner or DNS provider (Route53, CloudDNS, Cloudflare). Store actual DNS records (A, AAAA, CNAME, MX, etc.). The SOA (Start of Authority) record identifies the primary authoritative server."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recursive resolvers"
      }), ": Intermediate caching servers (typically operated by ISPs, Google 8.8.8.8, Cloudflare 1.1.1.1). Recursively walk the hierarchy on behalf of clients and cache results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-dns-resolution-flow",
      children: "2. DNS Resolution Flow"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client (stub resolver)\n  ? Recursive resolver (e.g., 8.8.8.8)\n    ? Root server (gets .com TLD referral)\n    ? TLD server (gets example.com authoritative referral)\n    ? Authoritative server (returns A record: 93.184.216.34)\n  ? Returns IP to client\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getaddrinfo(\"api.example.com\", ...)"
        }), " — the stub resolver (OS library) sends a UDP query (port 53) to the configured recursive resolver"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive resolver checks its cache; on miss, sends query to a root server (built-in root hints file)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root server responds with NS records for .com TLD, plus glue A records for those NS IPs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolver queries .com TLD server, which returns NS records for example.com"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolver queries example.com's authoritative nameserver, which returns the A record for api.example.com"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolver caches the result for the record's TTL, returns IP to client"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each delegation step involves potential UDP (default, 512 bytes) or TCP fallback for large responses (DNSSEC, many records)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-dns-caching",
      children: "3. DNS Caching"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Browser cache"
      }), ": Chrome caches DNS with configurable expiration (default 60s per record, up to 1 minute via net.dns caching). In-memory, per-process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OS cache (stub resolver cache)"
      }), ": Windows caches positive results for 86400s (1 day) by default, negative results for 300s (5 min). Linux glibc nscd or systemd-resolved provides nameserver caching. Accessible via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ipconfig /displaydns"
      }), " on Windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolver cache"
      }), ": Recursive resolvers cache aggressively (typically full TTL). Google Public DNS respects TTL but has a minimum of 10 seconds. ISPs may ignore TTL (a practice called \"TTL overrides\") to reduce upstream load — problematic for fast failover."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Negative caching"
      }), ": NXDOMAIN results (domain doesn't exist) and NODATA (domain exists but record type missing) are cached per RFC 2308. SOA minimum TTL field controls negative cache duration, typically 300-3600 seconds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TTL and propagation"
      }), ": TTL (Time To Live) in seconds controls how long a resolver can cache a record. Short TTLs (30-300s) enable faster failover but increase resolver load. Long TTLs (86400s+) reduce traffic but delay updates. DNS propagation is the time for all caches to expire after a record change."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TTL Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failover, leader election"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-300s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load-balanced endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "900-3600s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal web services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86400s+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static records, MX"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-dns-record-types",
      children: "4. DNS Record Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4 address mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93.184.216.34"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6 address mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2606:2800:220:1:248:1893:25c8:1946"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical name (alias)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "www ? example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mail exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "priority 10 mail.example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nameserver delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ns1.example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPF, DKIM, DMARC, verification tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "priority weight port target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start of authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary NS, admin email, serial, refresh, retry, expire, minimum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CNAME caveat"
      }), ": A CNAME record cannot coexist with any other record type at the same name. The apex domain (example.com) cannot be a CNAME — use ALIAS/ANAME records (provided by some DNS providers) that resolve at the authoritative server level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-dns-based-load-balancing",
      children: "5. DNS-Based Load Balancing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Round-robin DNS"
      }), ": Multiple A records for one name returned in rotating order. Simple but stateless — does not consider server health or load. If one server fails, clients with cached results still connect to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "api.example.com  ?  10.0.0.1 (TTL=60)\n                   10.0.0.2 (TTL=60)\n                   10.0.0.3 (TTL=60)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weighted round-robin"
      }), ": Associate weights with each IP. A weight-3 server gets 3× the traffic of a weight-1 server. Used for gradual traffic migration during deployments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Geo-based DNS"
      }), ": Return different IPs based on the resolver's geographic location (GeoIP database). Direct US users to us-east servers, EU users to eu-west. Imprecise because resolver location may differ from client location (especially with public resolvers like 8.8.8.8)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency-based routing"
      }), ": DNS service (AWS Route53 LBR, Google Cloud DNS) probes endpoint health and latency from various vantage points in real-time. Returns the lowest-latency healthy endpoint. More accurate than geo-based but requires health probing infrastructure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-anycast-routing",
      children: "6. Anycast Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anycast advertises the same IP prefix from multiple geographically distributed locations using BGP (Border Gateway Protocol). Traffic routes to the nearest (topologically closest) location. This provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency reduction"
        }), ": Clients reach the nearest PoP organically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DDoS absorption"
        }), ": Attack traffic distributes across all anycast sites. Cloudflare absorbs 100+ Tbps across 330+ cities by spreading attack traffic across multiple data centers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplified DNS"
        }), ": Same IP globally; no geo-based logic needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anycast vs Unicast DNS"
      }), ": Most major DNS providers (Cloudflare 1.1.1.1, Google 8.8.8.8, Quad9 9.9.9.9) use anycast. Unicast roots (13 IPs with one physical location each) are the historical standard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-cdn-architecture",
      children: "7. CDN Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Content Delivery Network (CDN) caches content at edge Points of Presence (PoPs) close to end users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Origin server"
      }), ": The primary server holding the authoritative copy of all content. Serves cache misses to edge nodes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge servers (PoPs)"
      }), ": Distributed cache servers within ISP networks or data exchange points. Serve cached content directly; fetch from origin on miss. Typical PoP counts: Cloudflare ~330 cities, Akamai ~4,150+ locations in ~130 countries, AWS CloudFront ~600+ PoPs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pull zone (origin pull)"
      }), ": Edge fetches content on first user request, caches it, serves subsequent requests. Simplest setup. Cold-start latency on first request per object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User ? PoP (miss) ? Origin ? PoP caches ? User\nUser ? PoP (hit)  ? User\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Push zone"
      }), ": Content is proactively uploaded to edge nodes. Used for large files (videos, software downloads) where pull latency is unacceptable. Requires pre-provisioning storage on edge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-cdn-caching-strategies",
      children: "8. CDN Caching Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache-Control headers"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-age=3600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache for 1 hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s-maxage=3600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override max-age for shared caches (CDNs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cacheable by any cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cacheable only by browser, not CDN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "no-cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must validate with origin before serving cached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "no-store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not cache at all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "must-revalidate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin must validate stale content"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ETag"
      }), ": An opaque entity tag (typically a content hash) sent by the origin. Conditional request: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "If-None-Match: \"abc123\""
      }), " ? origin returns 304 Not Modified if content unchanged, saving bandwidth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last-Modified"
      }), ": Timestamp of last change. Conditional: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "If-Modified-Since: Wed, 21 Oct 2023 07:28:00 GMT"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purge and invalidation"
      }), ": When content changes, cached copies must be invalidated. Full purge (clear all) vs selective purge (by URL, by pattern, by cache tag). Cache tags (surrogate-key headers) allow batch invalidation: a single request invalidates all objects tagged \"v2-release\". CDN purges propagate in seconds to minutes depending on CDN architecture."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-edge-caching-comparison",
      children: "9. Edge Caching Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CloudFront (AWS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloudflare"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Akamai"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PoP count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~600+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~330 cities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4,150+ locations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast + Geo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map-based (Global Traffic Mgmt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$ per path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (instant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (API-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any HTTP(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any HTTP(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda@Edge / CF fn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EdgeWorkers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS WAF (addon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated (free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kona Site Defender"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-image-optimization-pipeline",
      children: "10. Image Optimization Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern CDNs perform on-the-fly image transformations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Origin produces full-resolution source images (PNG/TIFF/RAW)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Edge receives first request for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "image.jpg?w=800&q=80"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge fetches origin, resizes to 800px width, converts to WebP/AVIF, compresses to quality 80"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformed image cached at edge; subsequent requests hit cache"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key parameters: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "w"
      }), " (width), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "h"
      }), " (height), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "q"
      }), " (quality), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f"
      }), " (format), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fit"
      }), " (cover/contain), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dpr"
      }), " (device pixel ratio). Responsive images via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<picture>"
      }), " with multiple source variants."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format negotiation"
      }), ": Browser sends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept: image/avif,image/webp,*/*"
      }), " header. Edge serves AVIF if supported, WebP fallback, original JPEG/PNG as baseline. AVIF compression saves 50% over JPEG at equivalent quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-origin-shielding",
      children: "11. Origin Shielding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without shielding, a cache miss for a popular object triggers N concurrent origin requests from N different edge PoPs — a thundering herd on the origin. Origin shielding designates a single intermediate shield layer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User ? Edge PoP (miss) ? Shield PoP (miss) ? Origin\n                              ?\n                        Shield caches\nUser2 ? Edge PoP (miss) ? Shield PoP (hit) ? User2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only one edge node (the shield) ever contacts the origin per object. Subsequent misses from other PoPs fetch from the shield."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-ddos-mitigation-at-edge",
      children: "12. DDoS Mitigation at Edge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate limiting"
      }), ": Edge enforces per-IP, per-user-agent, per-path request rates. Sliding window algorithm (1-second windows, 100 req/min limit). 429 Too Many Requests returned on exceed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Application Firewall (WAF)"
      }), ": Inspects HTTP traffic for SQL injection, XSS, path traversal, SSRF, and OWASP Top 10. Typically uses rule sets (Cloudflare OWASP Core Ruleset, AWS Managed Rules) with anomaly scoring (score > threshold = block/challenge)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bot detection"
      }), ": Classifies traffic using:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JS challenge (compute proof-of-work in browser)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAPTCHA (visual challenge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser fingerprinting (TLS handshake, HTTP/2 settings, WebGL, canvas)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ML-based behavioral analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scrubbing centers"
      }), ": Large-scale DDoS traffic (volumetric attacks > 1 Tbps) is redirected to purpose-built scrubbing centers that filter attack traffic before forwarding clean traffic to origin. AWS Shield Advanced + WAF provides always-on detection and 3-second mitigation SLAs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-edge-computing",
      children: "13. Edge Computing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda@Edge"
      }), ": AWS Lambda functions triggered by CloudFront events (viewer request, origin request, viewer response, origin response). Use cases: rewrite URLs, A/B testing, authentication (JWT validation at edge), header normalization, redirects. Execution limited to 5 seconds, 128 MB, Node.js/Python."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloudflare Workers"
      }), ": V8 isolates (not containers) running JavaScript/WASM. Sub-millisecond cold starts, 50-100µs processing overhead per request. Globally distributed every request runs on the nearest of 330+ PoPs. KV storage (eventually consistent, global). Durable Objects (strongly consistent, single-location)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EdgeKV"
      }), ": Distributed key-value storage at edge. Cloudflare Workers KV (eventually consistent, 1s-60s propagation), AWS EdgeKV (via Lambda@Edge + DynamoDB global tables). Use cases: feature flags, configuration, A/B test assignments, redirect maps, JWT public keys."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use case matrix"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Compute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Origin"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL rewriting/redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Near-zero latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A/B split testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Cookie-based split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication (JWT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Validate at edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? On-the-fly transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-processing pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Personalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Cookie/header based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-page rendering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy aggregation queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Resource limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Full compute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? No local DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? Full ACID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-dns-resolution-with-tracing",
      children: "Example 1: DNS Resolution with Tracing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On a Linux/Mac system, trace DNS resolution for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "www.github.com"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "dig +trace www.github.com\n\n# Root: .  NS a.root-servers.net.\n# TLD: com.  NS a.gtld-servers.net.\n# Authoritative: github.com.  NS ns1.p16.dynect.net.\n# Answer: www.github.com.  CNAME github.com.\n#         github.com.  A 140.82.121.3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resolver walked 4 hops (root ? .com TLD ? github.com authoritative ? answer) in approximately 120ms. With warm cache, subsequent lookups complete in <1ms."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-anycast-ddos-absorption",
      children: "Example 2: Anycast DDoS Absorption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloudflare's architecture uses anycast to distribute a 2 Tbps DDoS attack across their global network:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attack: 2 Tbps UDP amplification targeting 1.2.3.4\n? BGP distributes to 330+ PoPs worldwide\n? Each PoP absorbs ~6 Gbps of attack traffic\n? Rate limiting and packet filtering at each PoP\n? Clean traffic (legitimate user requests) forwarded to origin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without anycast, the single origin data center would need 2 Tbps of scrubbing capacity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-image-optimization-at-edge",
      children: "Example 3: Image Optimization at Edge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Cloudflare Image Resizing, a request transform pipeline:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original URL:\n  https://cdn.example.com/photos/sunset.png\n\nEdge transforms:\n  https://cdn.example.com/cdn-cgi/image/w=800,h=600,q=75,f=avif/photos/sunset.png\n\nResponse headers:\n  Content-Type: image/avif\n  Content-Length: 45KB (was 340KB PNG)\n  Cf-Cache-Status: MISS (first request)\n  Cache-Control: public, max-age=31536000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimization savings: 87% bandwidth reduction with AVIF vs PNG, visually lossless at q=75."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-cloudflare-worker-for-jwt-validation",
      children: "Example 4: Cloudflare Worker for JWT Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Edge authentication worker\naddEventListener('fetch', event => {\n  event.respondWith(handleRequest(event.request))\n})\n\nasync function handleRequest(request) {\n  const url = new URL(request.url)\n  if (url.pathname.startsWith('/api/')) {\n    const token = request.headers.get('Authorization')?.split(' ')[1]\n    if (!token) return new Response('Unauthorized', { status: 401 })\n    try {\n      const payload = await verifyJWT(token, JWT_SECRET)\n      request.headers.set('X-User-Id', payload.sub)\n      request.headers.set('X-User-Role', payload.role)\n    } catch {\n      return new Response('Invalid token', { status: 403 })\n    }\n  }\n  return fetch(request)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This worker runs in 330+ locations globally. JWT verification completes in ~200µs per request, adding no perceptible latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 15: CDN, DNS, and Edge Computing"
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
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 15: CDN, DNS, and Edge Computing"
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
            children: "Theory"
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
            children: "How many logical root servers exist in the DNS hierarchy?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which DNS record type cannot coexist with other record types at the same name?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary benefit of origin shielding in a CDN?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced latency for users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents thundering herd on origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower bandwidth costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improved image compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which DDoS mitigation technique distributes attack traffic across many data centers?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bot detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What distinguishes Cloudflare Workers from Lambda@Edge?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher memory limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8 isolates instead of containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on Python only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires dedicated servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
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
            children: "Use short TTLs (30-300s) for failover-critical records; long TTLs (86400s+) for static records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS-based leader election: 5s TTL. Static assets: 86400s TTL with content-hashed URLs for instant invalidation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Control: s-maxage overrides max-age for CDNs; use no-cache for sensitive data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set s-maxage=0 for authenticated API responses; s-maxage=86400 for public static assets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Origin shielding prevents thundering herd — always enable for popular content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure a single shield region per origin; all edge misses route through the shield"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge computing (Workers/Lambda@Edge) handles auth, rewrite, A/B testing at sub-ms overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move JWT validation from origin to edge: validate token, inject user headers, forward to origin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anycast routing provides automatic DDoS absorption — traffic spreads across all PoPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advertise same IP from all PoPs via BGP; each PoP absorbs its share of attack traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image optimization at edge reduces bandwidth by 50-87%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use on-the-fly AVIF/WebP conversion with quality negotiation via Accept header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF + rate limiting at edge blocks attacks before they reach origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy OWASP Core Ruleset with anomaly scoring; rate-limit per IP at 100 req/min"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario: Global Video Streaming Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A video streaming service with 200 million monthly active users deploys content across 50 edge PoPs worldwide. The initial architecture uses a simple DNS round-robin: all users receive one of 50 IPs randomly. This causes severe problems: a user in Tokyo is routed to a US East Coast PoP (250ms latency), a popular video release triggers a thundering herd on the origin (50,000 requests/second for a single 4K trailer), and a DNS-based DDoS attack on the apex domain takes down the entire service for 45 minutes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The team redesigns the architecture in three phases. First, they migrate to anycast DNS (Cloudflare) so every user automatically reaches the nearest PoP. Second, they implement an origin shield: a single shield PoP in us-east-1 intercepts all cache misses. Third, they deploy edge workers (Cloudflare Workers) for request-level routing: each worker checks a latency map in EdgeKV, selects the optimal origin region, and sets a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-region"
      }), " header for geo-specific content. Cache hit ratio improves from 45% to 92%, P95 latency drops from 850ms to 45ms, and the 3 Tbps DDoS attack that would have saturated a single origin is now absorbed across 330+ PoPs with no user impact."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The edge workers also handle A/B testing: 5% of users see a new UI variant, validated via JWT tokens at the edge before any origin request. Image thumbnails are resized on-the-fly from a single 4K source, saving 80% bandwidth compared to pre-generating 12 variants. The total infrastructure cost decreases by 40% because fewer origin servers are needed, even as traffic grows 3× year-over-year."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 15: CDN, DNS, and Edge Computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental to system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
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
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept for Chapter 15: CDN, DNS, and Edge Computing"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
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
          }), " Which concept is most fundamental to the topic of Chapter 15"]
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
                children: ["Answer</summary>See the Real-World Systems section</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "practical-implementation",
                  children: "Practical Implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "cdn-cache-simulator",
                  children: "CDN Cache Simulator"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "The following TypeScript class models a CDN edge cache with TTL-based expiry, LRU eviction, and hit/miss tracking ? useful for understanding cache behavior under load:"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface CacheEntry<T> {\n  data: T;\n  cachedAt: number;\n  ttl: number;\n  lastAccessed: number;\n  sizeBytes: number;\n}\n\nclass CdnEdgeCache<T> {\n  private store: Map<string, CacheEntry<T>> = new Map();\n  private maxEntries: number;\n  private maxMemoryBytes: number;\n  private currentMemoryBytes = 0;\n  public hits = 0;\n  public misses = 0;\n\n  constructor(maxEntries = 10000, maxMemoryMB = 512) {\n    this.maxEntries = maxEntries;\n    this.maxMemoryBytes = maxMemoryMB * 1024 * 1024;\n  }\n\n  get(key: string): T | null {\n    const entry = this.store.get(key);\n    if (!entry) { this.misses++; return null; }\n    if (Date.now() - entry.cachedAt > entry.ttl * 1000) {\n      this.store.delete(key);\n      this.currentMemoryBytes -= entry.sizeBytes;\n      this.misses++;\n      return null;\n    }\n    entry.lastAccessed = Date.now();\n    this.hits++;\n    return entry.data;\n  }\n\n  set(key: string, data: T, ttl: number, sizeBytes: number): void {\n    while (\n      this.store.size >= this.maxEntries ||\n      this.currentMemoryBytes + sizeBytes > this.maxMemoryBytes\n    ) {\n      this.evictLRU();\n    }\n    this.store.set(key, {\n      data, cachedAt: Date.now(), ttl,\n      lastAccessed: Date.now(), sizeBytes,\n    });\n    this.currentMemoryBytes += sizeBytes;\n  }\n\n  private evictLRU(): void {\n    let oldest = Date.now();\n    let oldestKey = '';\n    for (const [k, v] of this.store) {\n      if (v.lastAccessed < oldest) { oldest = v.lastAccessed; oldestKey = k; }\n    }\n    if (oldestKey) {\n      const evicted = this.store.get(oldestKey)!;\n      this.currentMemoryBytes -= evicted.sizeBytes;\n      this.store.delete(oldestKey);\n    }\n  }\n\n  getHitRate(): number {\n    const total = this.hits + this.misses;\n    return total === 0 ? 0 : this.hits / total;\n  }\n\n  getMemoryUsageMB(): number {\n    return Math.round(this.currentMemoryBytes / (1024 * 1024));\n  }\n}\n\n// Usage simulation\nconst edge = new CdnEdgeCache<string>(1000, 64);\nfor (let i = 0; i < 10000; i++) {\n  const key = `/images/photo_${i % 500}.jpg`;\n  let img = edge.get(key);\n  if (!img) { edge.set(key, `binary_${i}`, 3600, 200_000); }\n}\nconsole.log(`Hit rate: ${(edge.getHitRate() * 100).toFixed(1)}%`);\nconsole.log(`Memory: ${edge.getMemoryUsageMB()} MB`);\nconsole.log(`Hits: ${edge.hits}, Misses: ${edge.misses}`);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "dns-resolution-chain-simulator",
                  children: "DNS Resolution Chain Simulator"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This TypeScript implementation models the full recursive DNS walk from stub resolver through root, TLD, and authoritative servers with timing:"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface Nameserver {\n  name: string;\n  ip: string;\n  latencyMs: number;\n  records: Map<string, DnsRecord[]>;\n}\n\ninterface DnsRecord {\n  type: 'A' | 'AAAA' | 'CNAME' | 'NS' | 'MX' | 'SOA';\n  name: string;\n  value: string;\n  ttl: number;\n}\n\nclass DnsResolutionChain {\n  private rootServers: Nameserver[] = [\n    {\n      name: 'a.root-servers.net', ip: '198.41.0.4',\n      latencyMs: 15, records: new Map(),\n    },\n  ];\n  private tldServers: Nameserver[] = [\n    {\n      name: 'a.gtld-servers.net', ip: '192.5.6.30',\n      latencyMs: 25, records: new Map(),\n    },\n  ];\n  private authoritativeServers: Nameserver[] = [];\n  private resolverCache: Map<string, { record: DnsRecord; expiresAt: number }> = new Map();\n  private totalTimeMs = 0;\n\n  registerDomain(domain: string, records: DnsRecord[]): void {\n    const ns: Nameserver = {\n      name: `ns1.${domain}`, ip: `1.2.3.4`,\n      latencyMs: 10 + Math.random() * 20,\n      records: new Map(),\n    };\n    ns.records.set(domain, records);\n    this.authoritativeServers.push(ns);\n  }\n\n  async resolve(domain: string, type: string): Promise<{ ip: string; timeMs: number; hops: string[] }> {\n    const hops: string[] = [];\n    const cached = this.resolverCache.get(`${domain}:${type}`);\n    if (cached && Date.now() < cached.expiresAt) {\n      return { ip: cached.record.value, timeMs: 0, hops: ['cache hit'] };\n    }\n\n    // Walk root\n    const root = this.rootServers[0];\n    this.totalTimeMs += root.latencyMs;\n    hops.push(`root(${root.name}) ? referral to TLD`);\n\n    // Walk TLD\n    const tld = this.tldServers[0];\n    this.totalTimeMs += tld.latencyMs;\n    const tldDomain = domain.split('.').slice(-1)[0];\n    hops.push(`tld(${tld.name}, ${tldDomain}) ? referral to authoritative`);\n\n    // Walk authoritative\n    const auth = this.authoritativeServers.find(\n      s => s.records.has(domain)\n    );\n    if (!auth) throw new Error(`No authoritative server for ${domain}`);\n    this.totalTimeMs += auth.latencyMs;\n    const records = auth.records.get(domain)!;\n    const record = records.find(r => r.type === type);\n    if (!record) throw new Error(`No ${type} record for ${domain}`);\n    hops.push(`auth(${auth.name}) ? ${record.type} ${record.value}`);\n\n    this.resolverCache.set(`${domain}:${type}`, {\n      record, expiresAt: Date.now() + record.ttl * 1000,\n    });\n    return { ip: record.value, timeMs: this.totalTimeMs, hops };\n  }\n}\n\nconst dns = new DnsResolutionChain();\ndns.registerDomain('example.com', [\n  { type: 'A', name: 'example.com', value: '93.184.216.34', ttl: 3600 },\n]);\ndns.resolve('example.com', 'A').then(r =>\n  console.log(`Resolved ? ${r.ip} in ${r.timeMs}ms\\n  ${r.hops.join('\\n  ')}`)\n);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "latency-aware-edge-router",
                  children: "Latency-Aware Edge Router"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "An edge computing request router that selects the optimal PoP based on real-time latency probes and geo-proximity:"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface PopEndpoint {\n  id: string;\n  region: string;\n  latitude: number;\n  longitude: number;\n  capacity: number;      // requests/sec\n  currentLoad: number;   // requests/sec\n  baseLatencyMs: number; // baseline RTT from region\n}\n\ninterface RoutingDecision {\n  popId: string;\n  estimatedLatencyMs: number;\n  originFallback: boolean;\n}\n\nclass LatencyAwareEdgeRouter {\n  private pops: PopEndpoint[] = [];\n  private latencyMatrix: Map<string, Map<string, number>> = new Map();\n  private readonly ORIGIN_LATENCY_MS = 150;\n\n  constructor() {\n    this.pops = [\n      { id: 'us-east-1', region: 'NA', latitude: 39.0, longitude: -77.0,\n        capacity: 50000, currentLoad: 12000, baseLatencyMs: 10 },\n      { id: 'us-west-1', region: 'NA', latitude: 37.7, longitude: -122.4,\n        capacity: 40000, currentLoad: 18000, baseLatencyMs: 12 },\n      { id: 'eu-west-1', region: 'EU', latitude: 53.3, longitude: -6.2,\n        capacity: 35000, currentLoad: 8000, baseLatencyMs: 8 },\n      { id: 'ap-southeast-1', region: 'SEA', latitude: 1.3, longitude: 103.8,\n        capacity: 30000, currentLoad: 15000, baseLatencyMs: 15 },\n    ];\n  }\n\n  private haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {\n    const R = 6371;\n    const dLat = (lat2 - lat1) * Math.PI / 180;\n    const dLon = (lon2 - lon1) * Math.PI / 180;\n    const a = Math.sin(dLat / 2) ** 2 +\n      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *\n      Math.sin(dLon / 2) ** 2;\n    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  }\n\n  route(clientLat: number, clientLon: number): RoutingDecision {\n    let best: PopEndpoint | null = null;\n    let bestScore = Infinity;\n\n    for (const pop of this.pops) {\n      const distanceKm = this.haversineKm(clientLat, clientLon, pop.latitude, pop.longitude);\n      const geoLatency = distanceKm / 200; // ~5ms per 1000km fiber\n      const loadFactor = pop.currentLoad / pop.capacity;\n      const latencyEstimate = pop.baseLatencyMs + geoLatency + loadFactor * 20;\n      const score = latencyEstimate + loadFactor * 50;\n      if (score < bestScore) { bestScore = score; best = pop; }\n    }\n\n    const estimatedLatencyMs = Math.round(bestScore);\n    return {\n      popId: best!.id,\n      estimatedLatencyMs,\n      originFallback: estimatedLatencyMs > this.ORIGIN_LATENCY_MS,\n    };\n  }\n\n  recordRequest(popId: string): void {\n    const pop = this.pops.find(p => p.id === popId);\n    if (pop) pop.currentLoad = Math.min(pop.currentLoad + 1, pop.capacity);\n  }\n}\n\nconst router = new LatencyAwareEdgeRouter();\nconst locations = [\n  { city: 'New York', lat: 40.7, lon: -74.0 },\n  { city: 'London', lat: 51.5, lon: -0.1 },\n  { city: 'Singapore', lat: 1.3, lon: 103.8 },\n];\nfor (const loc of locations) {\n  const decision = router.route(loc.lat, loc.lon);\n  console.log(\n    `${loc.city} ? ${decision.popId} ` +\n    `(~${decision.estimatedLatencyMs}ms, ` +\n    `originFallback: ${decision.originFallback})`\n  );\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "cdn-origin-pull--sequence-diagram",
                  children: "CDN Origin Pull ? Sequence Diagram"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "sequenceDiagram\n    participant User\n    participant EdgePOP as Edge PoP (Cache)\n    participant Shield as Shield PoP\n    participant Origin\n    participant Registry as Image Registry\n\n    User->>EdgePOP: GET /images/photo.webp\n    EdgePOP->>EdgePOP: Cache Miss (no entry)\n    EdgePOP->>Shield: Forward request\n    Shield->>Shield: Cache Miss\n    Shield->>Origin: GET /images/photo.webp\n    Origin->>Registry: Fetch source PNG\n    Registry-->>Origin: Source image (1.2MB)\n    Origin->>Origin: Resize to 800px\n    Origin->>Origin: Convert to WebP (q=80)\n    Origin-->>Shield: Return 200 (85KB)\n    Shield->>Shield: Store with max-age=86400\n    Shield-->>EdgePOP: Return cached response\n    EdgePOP->>EdgePOP: Store with max-age=86400\n    EdgePOP-->>User: 200 OK (image/webp, 85KB)\n\n    User->>EdgePOP: GET /images/photo.webp (2nd user)\n    EdgePOP->>EdgePOP: Cache HIT\n    EdgePOP-->>User: 200 OK (from edge cache)\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "global-edge-architecture--deployment-view",
                  children: "Global Edge Architecture ? Deployment View"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TB\n    subgraph DNS_Layer[\"DNS Layer\"]\n        ANYCAST[\"Anycast DNS<br/>1.1.1.1 / 8.8.8.8\"]\n        LATENCY_RT[\"Latency-Based Routing<br/>Route53 / CloudDNS\"]\n    end\n\n    subgraph EDGE_POPS[\"Edge PoPs (330+ Locations)\"]\n        POP1[\"North America<br/>Cache + Workers\"]\n        POP2[\"Europe<br/>Cache + Workers\"]\n        POP3[\"Asia-Pacific<br/>Cache + Workers\"]\n        POP4[\"South America<br/>Cache + Workers\"]\n    end\n\n    subgraph EDGE_SERVICES[\"Edge Services\"]\n        WAF[\"WAF + Rate Limiting<br/>OWASP Ruleset\"]\n        AUTH[\"JWT Validation<br/>Cloudflare Worker\"]\n        IMG_OPT[\"Image Optimization<br/>AVIF/WebP Resize\"]\n        BOT_DETECT[\"Bot Detection<br/>ML + JS Challenge\"]\n    end\n\n    subgraph EDGE_STORAGE[\"Edge Storage Layer\"]\n        KV[\"EdgeKV<br/>Eventually Consistent<br/>Feature Flags / Config\"]\n        DO[\"Durable Objects<br/>Strongly Consistent<br/>Matchmaking State\"]\n    end\n\n    subgraph ORIGIN[\"Origin Infrastructure\"]\n        API[\"API Servers<br/>Auto-scaling Group\"]\n        DB[\"Primary Database<br/>RDS / Aurora\"]\n        OBJ_STORE[\"Object Store<br/>S3 / GCS\"]\n        REDIS[\"Redis Cache<br/>Session / Leaderboard\"]\n    end\n\n    ANYCAST --> POP1 & POP2 & POP3 & POP4\n    LATENCY_RT --> POP1 & POP2 & POP3 & POP4\n    POP1 & POP2 & POP3 & POP4 --> WAF\n    WAF --> AUTH & IMG_OPT & BOT_DETECT\n    AUTH --> KV & DO\n    IMG_OPT --> OBJ_STORE\n    KV & DO --> API\n    API --> DB & REDIS\n\n    classDef aws fill:#FF9900,color:#000\n    classDef cf fill:#F38020,color:#000\n    classDef infra fill:#1E293B,color:#fff\n    class ANYCAST,LATENCY_RT aws\n    class WAF,AUTH,IMG_OPT,BOT_DETECT cf\n    class API,DB,OBJ_STORE,REDIS infra\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "cache-hit-ratio-vs-latency--trade-off-visualization",
                  children: "Cache Hit Ratio vs Latency ? Trade-off Visualization"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "quadrantChart\n    title CDN Cache Configuration Trade-offs\n    x-axis \"Low Hit Ratio\" --> \"High Hit Ratio\"\n    y-axis \"High Latency\" --> \"Low Latency\"\n    quadrant-1 \"Optimal Region\"\n    quadrant-2 \"Good ? high cache but slower\"\n    quadrant-3 \"Poor ? miss-heavy\"\n    quadrant-4 \"Good ? fast but uncached\"\n    \"Long TTL (86400s)\": [0.95, 0.25]\n    \"Short TTL (60s)\": [0.45, 0.85]\n    \"Origin Shield + Long TTL\": [0.97, 0.40]\n    \"Push Zone (all content)\": [0.99, 0.10]\n    \"No CDN (direct origin)\": [0.00, 0.95]\n    \"Worker + KV Auth\": [0.70, 0.90]\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-dns-resolver-with-iterative-walk-and-latency-routing",
                  children: "TypeScript: DNS Resolver with Iterative Walk and Latency Routing"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class DNSCacheEntry {\n  constructor(public ip: string, public expiresAt: number) {}\n  isExpired(): boolean { return Date.now() > this.expiresAt; }\n}\n\nclass DNSServer {\n  constructor(\n    public name: string,\n    public ip: string,\n    public latencyMs: number,\n    public zone: Map<string, { type: string; value: string; ttl: number }[]>\n  ) {}\n}\n\nclass DNSResolver {\n  private cache = new Map<string, DNSCacheEntry>();\n  private rootServers: DNSServer[];\n  private tldServers: Map<string, DNSServer> = new Map();\n  private authServers: Map<string, DNSServer> = new Map();\n  private latencyMap = new Map<string, number>();\n\n  constructor() {\n    this.rootServers = [\n      new DNSServer('a.root-servers.net', '198.41.0.4', 15, new Map()),\n      new DNSServer('b.root-servers.net', '199.9.14.201', 22, new Map()),\n    ];\n    this.buildInitialZones();\n  }\n\n  private buildInitialZones(): void {\n    const comTLD = new DNSServer('a.gtld-servers.net', '192.5.6.30', 25, new Map());\n    comTLD.zone.set('example.com', [{ type: 'NS', value: 'ns1.example.com', ttl: 86400 }]);\n    this.tldServers.set('com', comTLD);\n\n    const authNS = new DNSServer('ns1.example.com', '93.184.216.34', 10, new Map());\n    authNS.zone.set('example.com', [\n      { type: 'A', value: '93.184.216.34', ttl: 3600 },\n      { type: 'AAAA', value: '2606:2800:220:1:248:1893:25c8:1946', ttl: 3600 },\n    ]);\n    this.authServers.set('example.com', authNS);\n  }\n\n  registerTLD(tld: string, server: DNSServer): void { this.tldServers.set(tld, server); }\n  registerAuth(domain: string, server: DNSServer): void { this.authServers.set(domain, server); }\n  recordLatency(serverName: string, ms: number): void { this.latencyMap.set(serverName, ms); }\n\n  private pickLowestLatency(servers: DNSServer[]): DNSServer {\n    let best = servers[0];\n    let bestLat = this.latencyMap.get(best.name) ?? best.latencyMs;\n    for (const s of servers) {\n      const lat = this.latencyMap.get(s.name) ?? s.latencyMs;\n      if (lat < bestLat) { best = s; bestLat = lat; }\n    }\n    return best;\n  }\n\n  async resolve(domain: string, type = 'A', recursive = true): Promise<{ ip: string; hops: string[]; timeMs: number }> {\n    const cacheKey = `${domain}:${type}`;\n    const cached = this.cache.get(cacheKey);\n    if (cached && !cached.isExpired()) return { ip: cached.ip, hops: ['cache'], timeMs: 0 };\n    const hops: string[] = [];\n    const start = Date.now();\n    let result: string | null = null;\n\n    if (recursive) {\n      for (const root of this.rootServers) {\n        hops.push(`Query root ${root.name} (${root.ip})`);\n      }\n      const domainParts = domain.split('.');\n      const tldName = domainParts[domainParts.length - 1];\n      const tld = this.tldServers.get(tldName);\n      if (!tld) throw new Error(`No TLD server for .${tldName}`);\n      hops.push(`Query TLD ${tld.name} for ${domain}`);\n\n      const auth = this.authServers.get(domain);\n      if (!auth) throw new Error(`No authoritative server for ${domain}`);\n      hops.push(`Query auth ${auth.name} for ${domain} ${type} record`);\n\n      const records = auth.zone.get(domain);\n      const match = records?.find(r => r.type === type);\n      if (!match) throw new Error(`No ${type} record for ${domain}`);\n      result = match.value;\n      hops.push(`Found ${type} record: ${result} (TTL=${match.ttl}s)`);\n\n      this.cache.set(cacheKey, new DNSCacheEntry(result, Date.now() + match.ttl * 1000));\n    } else {\n      const bestRoot = this.pickLowestLatency(this.rootServers);\n      hops.push(`Query root ${bestRoot.name} (latency ${bestRoot.latencyMs}ms)`);\n      const tld = this.tldServers.get(domain.split('.').pop()!);\n      const bestTLD = this.pickLowestLatency([tld!]);\n      hops.push(`Query TLD ${bestTLD.name}`);\n      const auth = this.authServers.get(domain)!;\n      hops.push(`Query auth ${auth.name}`);\n      const match = auth.zone.get(domain)?.find(r => r.type === type);\n      if (!match) throw new Error(`Not found`);\n      result = match.value;\n    }\n\n    return { ip: result!, hops, timeMs: Date.now() - start };\n  }\n\n  purgeCache(pattern?: string): void {\n    if (!pattern) { this.cache.clear(); return; }\n    for (const [key] of this.cache) {\n      if (key.includes(pattern)) this.cache.delete(key);\n    }\n  }\n}\n\nasync function demoDNS() {\n  const resolver = new DNSResolver();\n  const result = await resolver.resolve('example.com', 'A');\n  console.log(`Resolved to ${result.ip} in ${result.timeMs}ms`);\n  console.log(`Hops: ${result.hops.join(' → ')}`);\n  const cached = await resolver.resolve('example.com', 'A');\n  console.log(`Cached result: ${cached.ip} (${cached.hops[0]}, ${cached.timeMs}ms)`);\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-cdn-edge-node-with-cache-hierarchy-and-purge",
                  children: "TypeScript: CDN Edge Node with Cache Hierarchy and Purge"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class CacheEntry {\n  hits = 0;\n  constructor(\n    public content: string,\n    public contentType: string,\n    public ttl: number,\n    public cachedAt: number,\n    public sizeBytes: number,\n    public tags: string[]\n  ) {}\n  isExpired(): boolean { return Date.now() - this.cachedAt > this.ttl * 1000; }\n}\n\nclass CDNEdgeNode {\n  private l1Cache = new Map<string, CacheEntry>();\n  private l2Cache = new Map<string, CacheEntry>();\n  private pendingFetches = new Map<string, Promise<CacheEntry>>();\n  public hits = { l1: 0, l2: 0 };\n  public misses = 0;\n\n  constructor(\n    private originUrl: string,\n    private l1MaxSize: number,\n    private l2MaxSize: number,\n    private originFetchLatencyMs: number\n  ) {}\n\n  async get(path: string): Promise<{ content: string; contentType: string; from: string }> {\n    const l1Entry = this.l1Cache.get(path);\n    if (l1Entry && !l1Entry.isExpired()) {\n      l1Entry.hits++;\n      this.hits.l1++;\n      return { content: l1Entry.content, contentType: l1Entry.contentType, from: 'L1' };\n    }\n    const l2Entry = this.l2Cache.get(path);\n    if (l2Entry && !l2Entry.isExpired()) {\n      l2Entry.hits++;\n      this.hits.l2++;\n      this.promoteToL1(path, l2Entry);\n      return { content: l2Entry.content, contentType: l2Entry.contentType, from: 'L2' };\n    }\n    return this.fetchFromOrigin(path);\n  }\n\n  private async fetchFromOrigin(path: string): Promise<{ content: string; contentType: string; from: string }> {\n    if (this.pendingFetches.has(path)) {\n      const entry = await this.pendingFetches.get(path)!;\n      return { content: entry.content, contentType: entry.contentType, from: 'origin-coalesced' };\n    }\n    const fetchPromise = this.originPull(path);\n    this.pendingFetches.set(path, fetchPromise);\n    try {\n      const entry = await fetchPromise;\n      this.l1Cache.set(path, entry);\n      this.l2Cache.set(path, entry);\n      this.misses++;\n      this.evictIfNeeded();\n      return { content: entry.content, contentType: entry.contentType, from: 'origin' };\n    } finally {\n      this.pendingFetches.delete(path);\n    }\n  }\n\n  private async originPull(path: string): Promise<CacheEntry> {\n    await new Promise(r => setTimeout(r, this.originFetchLatencyMs));\n    const mockContent = `content-for-${path}-${Date.now()}`;\n    return new CacheEntry(mockContent, 'text/plain', 3600, Date.now(), mockContent.length, ['default']);\n  }\n\n  private promoteToL1(path: string, entry: CacheEntry): void {\n    if (!this.l1Cache.has(path)) {\n      this.l1Cache.set(path, entry);\n      this.evictIfNeeded();\n    }\n  }\n\n  private evictIfNeeded(): void {\n    for (const [key, entry] of this.l1Cache) {\n      if (entry.isExpired()) this.l1Cache.delete(key);\n    }\n    while (this.getL1Size() > this.l1MaxSize) this.evictLRU(this.l1Cache);\n    while (this.getL2Size() > this.l2MaxSize) this.evictLRU(this.l2Cache);\n  }\n\n  private getL1Size(): number {\n    let s = 0;\n    for (const e of this.l1Cache.values()) s += e.sizeBytes;\n    return s;\n  }\n\n  private getL2Size(): number {\n    let s = 0;\n    for (const e of this.l2Cache.values()) s += e.sizeBytes;\n    return s;\n  }\n\n  private evictLRU(cache: Map<string, CacheEntry>): void {\n    let oldest = Infinity;\n    let oldestKey = '';\n    for (const [key, entry] of cache) {\n      const lastAccess = Date.now() - entry.cachedAt;\n      if (lastAccess < oldest) { oldest = lastAccess; oldestKey = key; }\n    }\n    if (oldestKey) cache.delete(oldestKey);\n  }\n\n  purgeByTag(tag: string): number {\n    let count = 0;\n    for (const [key, entry] of this.l1Cache) {\n      if (entry.tags.includes(tag)) { this.l1Cache.delete(key); count++; }\n    }\n    for (const [key, entry] of this.l2Cache) {\n      if (entry.tags.includes(tag)) { this.l2Cache.delete(key); count++; }\n    }\n    return count;\n  }\n\n  purgeAll(): void { this.l1Cache.clear(); this.l2Cache.clear(); }\n\n  getStats(): { l1Size: number; l2Size: number; hitRate: number } {\n    const total = this.hits.l1 + this.hits.l2 + this.misses;\n    return {\n      l1Size: this.l1Cache.size,\n      l2Size: this.l2Cache.size,\n      hitRate: total > 0 ? (this.hits.l1 + this.hits.l2) / total : 0,\n    };\n  }\n}\n\nasync function demoCDN() {\n  const cdn = new CDNEdgeNode('https://origin.example.com', 1024 * 1024, 10 * 1024 * 1024, 50);\n  let r = await cdn.get('/images/photo.jpg');\n  console.log(`First request: ${r.from}`);\n  r = await cdn.get('/images/photo.jpg');\n  console.log(`Second request: ${r.from} (L1 hit)`);\n  r = await cdn.get('/images/photo.jpg');\n  console.log(`Third request: ${r.from} (L1 hit)`);\n  cdn.purgeByTag('default');\n  r = await cdn.get('/images/photo.jpg');\n  console.log(`After purge: ${r.from} (origin miss)`);\n  console.log('CDN Stats:', cdn.getStats());\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "dns-resolution-flow-with-subgraphs",
                  children: "DNS Resolution Flow with Subgraphs"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TB\n    subgraph CLIENT[\"Client Side\"]\n        BROWSER[\"Browser / App<br/>Stub Resolver\"]\n        OS_CACHE[\"OS Cache<br/>systemd-resolved / nscd\"]\n        APP_CACHE[\"Application Cache<br/>DNS.resolve()\"]\n    end\n\n    subgraph RECURSIVE[\"Recursive Resolver\"]\n        RESOLVER[\"Recursive Resolver<br/>8.8.8.8 / 1.1.1.1\"]\n        RES_CACHE[\"Resolver Cache<br/>Full TTL\"]\n        NEG_CACHE[\"Negative Cache<br/>NXDOMAIN / NODATA\"]\n    end\n\n    subgraph HIERARCHY[\"DNS Hierarchy\"]\n        ROOT[\"Root Servers<br/>a.root-servers.net (198.41.0.4)<br/>13 logical zones, anycast\"]\n        TLD[\"TLD Servers<br/>.com (Verisign)<br/>.org (PIR)\"]\n        AUTH[\"Authoritative Servers<br/>Route53 / CloudDNS<br/>Zone: example.com\"]\n    end\n\n    subgraph RESPONSE[\"Response Types\"]\n        A_REC[\"A Record<br/>93.184.216.34\"]\n        AAAA_REC[\"AAAA Record<br/>2606:2800:220:1:...\"]\n        CNAME_REC[\"CNAME Record<br/>www → example.com\"]\n        MX_REC[\"MX Record<br/>mail.example.com\"]\n    end\n\n    BROWSER --> OS_CACHE --> RESOLVER\n    RESOLVER --> RES_CACHE\n    RES_CACHE --> NEG_CACHE\n    RESOLVER --> ROOT\n    ROOT -->|\"Referral: .com NS\"| TLD\n    TLD -->|\"Referral: example.com NS\"| AUTH\n    AUTH -->|\"Answer: A 93.184.216.34\"| RESOLVER\n    RESOLVER --> A_REC & CNAME_REC & MX_REC\n\n    classDef client fill:#E3F2FD,color:#1565C0\n    classDef rec fill:#F3E5F5,color:#7B1FA2\n    classDef hier fill:#E8F5E9,color:#2E7D32\n    classDef resp fill:#FFF3E0,color:#E65100\n    class BROWSER,OS_CACHE,APP_CACHE client\n    class RESOLVER,RES_CACHE,NEG_CACHE rec\n    class ROOT,TLD,AUTH hier\n    class A_REC,AAAA_REC,CNAME_REC,MX_REC resp\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "implementation-dns-cdn-and-edge-computing",
                  children: "Implementation: DNS, CDN, and Edge Computing"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface DNSRecord { domain: string; type: \"A\" | \"AAAA\" | \"CNAME\" | \"MX\" | \"NS\" | \"TXT\"; value: string; ttl: number; }\nclass DNSResolver {\n  private zone = new Map<string, DNSRecord[]>(); private cache = new Map<string, { record: DNSRecord; expiry: number }>();\n  addRecord(domain: string, type: DNSRecord[\"type\"], value: string, ttl = 3600): void { const key = domain; if (!this.zone.has(key)) this.zone.set(key, []); this.zone.get(key)!.push({ domain, type, value, ttl }); }\n  resolve(domain: string, type: string): string | null {\n    const cacheKey = `${domain}:${type}`; const cached = this.cache.get(cacheKey);\n    if (cached && cached.expiry > Date.now()) return cached.record.value;\n    const records = this.zone.get(domain); if (!records) return null;\n    const match = records.find(r => r.type === type); if (!match) return null;\n    this.cache.set(cacheKey, { record: match, expiry: Date.now() + match.ttl * 1000 }); return match.value; }\n  flushCache(): void { this.cache.clear(); }\n}\nclass CDNNode { private cache = new Map<string, { content: string; ttl: number; cachedAt: number; hits: number }>();\n  private region: string; constructor(region: string) { this.region = region; }\n  get(url: string): string | null { const entry = this.cache.get(url); if (!entry || Date.now() - entry.cachedAt > entry.ttl * 1000) { this.cache.delete(url); return null; } entry.hits++; return entry.content; }\n  set(url: string, content: string, ttl = 3600): void { this.cache.set(url, { content, ttl, cachedAt: Date.now(), hits: 0 }); }\n  getStats(): { items: number; totalHits: number; hitRate: number } {\n    let hits = 0; for (const e of this.cache.values()) hits += e.hits;\n    const items = this.cache.size; return { items, totalHits: hits, hitRate: items > 0 ? hits / items : 0 }; }\n}\nclass EdgeWorker { private handlers = new Map<string, (req: Request) => Response>();\n  on(event: string, handler: (req: Request) => Response): void { this.handlers.set(event, handler); }\n  dispatch(event: string, req: Request): Response { const h = this.handlers.get(event); return h ? h(req) : new Response(\"Not found\", { status: 404 }); }\n}\nclass Request { constructor(public url: string, public method: string, public headers: Record<string, string>) {} }\nclass Response { constructor(public body: string, public init: { status: number; headers?: Record<string, string> }) {} }\nclass GeoDNS { private regions = new Map<string, string[]>(); addRegion(name: string, ips: string[]): void { this.regions.set(name, ips); }\n  resolveByLocation(location: string): string[] { return this.regions.get(location) || this.regions.get(\"default\") || []; } }\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// cdn dns edge\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'cdn dns edge', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// cdn dns edge - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'cdn dns edge' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "DNS hierarchy has 4 levels: root, TLD, authoritative, recursive resolver — each delegation step is a query from resolver to nameserver"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "DNS caching occurs at 4 layers (browser, OS, resolver, app) with TTL controlling refresh frequency"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Round-robin DNS is simple but health-unaware; latency-based routing (Route53 LBR) is more sophisticated"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Anycast routing (same IP from multiple locations via BGP) provides automatic DDoS absorption and latency reduction"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "CDNs cache at edge PoPs using pull (on-demand) or push (proactive) zones with Cache-Control and ETag validation"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Cache invalidation mechanisms include TTL expiry, conditional requests (ETag/If-Modified-Since), and explicit purge"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Image optimization pipelines at edge reduce bandwidth by 50-87% using format conversion (WebP/AVIF) and on-the-fly resizing"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Origin shielding prevents thundering herd by routing all cache misses through a single shield layer"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Edge computing (Lambda@Edge, Cloudflare Workers) runs sub-millisecond code at PoPs for auth, rewrite, and personalization"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "DDoS mitigation at edge combines rate limiting, WAF rules, bot detection, and anycast-based scrubbing"
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
                  }), "1. (1) Stub resolver queries recursive resolver for mail.example.org. (2) Resolver queries root server → referral to .org TLD. (3) Resolver queries .org TLD server → referral to example.org authoritative NS. (4) Resolver queries example.org authoritative → returns A record for mail.example.org (or CNAME + A). Each step: query type NS → referral, final query type A → answer. Total: 4 queries, ~80ms.\n2. CNAME is an alias that replaces the query name entirely. If other records exist at the same name, query resolution becomes ambiguous. Workarounds: ALIAS/ANAME record (DNS provider resolves at authoritative server), use a subdomain (www.example.com), or serve the apex from a web server that redirects to www.\n3. Round-robin returns IPs in order regardless of server health or geographic proximity. Anycast routes via BGP to the topologically nearest location. Round-robin produces uneven distribution when client resolvers are not uniformly distributed (e.g., 80% of traffic from Google's 8.8.8.8), or when servers have different capacities.\n4. (1) Edge receives request, checks cache → MISS. (2) Forward to shield PoP → MISS. (3) Shield fetches from origin. Origin returns 200 with Cache-Control: public, max-age=86400, ETag: \"abc123\". (4) Shield caches response. (5) Shield returns to edge. (6) Edge caches and serves user. Subsequent requests: edge HIT. After TTL expires: edge sends If-None-Match to shield → 304 Not Modified → serve cached content.\n5. V8 isolates are lighter than containers: startup in microseconds vs milliseconds, share the same OS process, memory isolation via V8 heap sandbox. Security: each isolate has no access to other isolates' memory. Performance: near-zero cold start, 50-100µs per request overhead. Limitation: no arbitrary system calls, limited to 128MB memory, 50ms CPU per request."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "application-problems",
                  children: "Application Problems"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "1. First domain: 1 root + 1 TLD + 1 authoritative = 3 queries × 20ms = 60ms. Remaining 7 domains: resolver has root/TLD cached → 1 query each = 7 × 20ms = 140ms. Total DNS: 200ms. Page load: 120 resources × 50ms RTT (6 parallel connections) ≈ 1s + 200ms DNS = 1.2s. DNS contribution: 200/1200 ≈ 16.7%.\n2. Each PoP handles (attack + clean) / N PoPs. With 330 Cloudflare PoPs: (3500 Gbps) / 330 ≈ 10.6 Gbps per PoP, within 100 Gbps uplink. With 4,150 Akamai PoPs: 3500/4150 ≈ 0.84 Gbps per PoP. Minimum PoPs: ceil(3500/100) = 35 PoPs for Cloudflare; ceil(3500/100) = 35 for Akamai. Both exceed minimum.\n3. Assets with content hash in filename: Cache-Control: public, immutable, max-age=31536000 (1 year). HTML files (no hash): Cache-Control: public, max-age=0, must-revalidate. API responses: Cache-Control: public, max-age=60. Purge strategy: after deploy, purge all HTML and API cache keys (selective purge by cache tag), but not hashed assets (they have new filenames). Use surrogate-key headers to tag all HTML as \"html\" and all API as \"api\" for batch purge.\n4. (a) Without CDN: 10M × 200KB = 2000 GB/day × $0.09 = $180/day. (b) With 30% hit ratio: CDN serves 3M hits (600 GB × $0.02 = $12) + origin serves 7M misses (1400 GB × $0.09 = $126) = $138/day. (c) At 90% hit ratio: CDN 9M hits (1800 GB × $0.02 = $36) + origin 1M misses (200 GB × $0.09 = $18) = $54/day. Edge computing: 100K × $0.0000001 = $0.01/day, negligible."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "challenge-problem",
                  children: "Challenge Problem"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "Design a global edge architecture for a multiplayer game:\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "DNS"
                    }), ": Use anycastDNS (Cloudflare) — all PoPs advertise the same IP. Players automatically reach the nearest PoP without geo-IP lookups. TTL = 30s for fast failover."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "CDN"
                    }), ": Pull zone for static assets (game clients hosted on S3 with CloudFront). Push zone for game patches (pre-deployed to all PoPs). Origin shield in us-west-2 and eu-west-1 for redundancy. Image optimization: on-the-fly WebP conversion for game screenshots."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Edge Compute"
                    }), ": Cloudflare Workers for JWT validation at every PoP (sub-ms overhead). Workers validate token against EdgeKV (stores JWKS keys, synced every 60s). Leaderboard reads use HLL sketches stored in EdgeKV — 12KB per leaderboard, merged globally every minute. Matchmaking state uses Durable Objects (strong consistency per game region, global via DO multi-region replication)."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "DDoS Mitigation"
                    }), ": Layer 3/4: anycast absorption (each PoP handles its share). Layer 7: WAF (OWASP ruleset, rate limiting at 100 req/s per IP). Scrubbing: traffic over 100 Gbps per PoP triggers automatic BGP diversion to scrubbing centers. Game-specific: validate game protocol packets before forwarding to matchmaking services."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Bandwidth"
                    }), ": 50M DAU × 100 requests/day × 2KB avg API response = 10 TB/day. Static patches: 500MB per patch × 10M updates/month = 5 TB/month. CDN egress: ~$0.02/GB × 10 TB = $200/day. Total monthly: ~$6,000 + $2,000 edge compute = ~$8,000/month."]
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