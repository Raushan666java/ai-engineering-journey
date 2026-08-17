"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[13196],{

/***/ 49827
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_02_scalability_load_balancing_md_d42_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-02-scalability-load-balancing-md-d42.json
const site_docs_courses_system_design_02_scalability_load_balancing_md_d42_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/02-scalability-load-balancing","title":"Chapter 2: Scalability and Load Balancing","description":"Previous 03 Caching","source":"@site/docs/courses/system-design/02-scalability-load-balancing.md","sourceDirName":"courses/system-design","slug":"/system-design/02-scalability-load-balancing","permalink":"/ai-engineering-journey/system-design/02-scalability-load-balancing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-scalability-load-balancing","slug":"/system-design/02-scalability-load-balancing","title":"Chapter 2: Scalability and Load Balancing","sidebar_label":"Chapter 2: Scalability and Load Balancing","sidebar_position":2},"sidebar":"course-system-design","previous":{"title":"Chapter 1: Introduction to System Design","permalink":"/ai-engineering-journey/system-design/01-introduction"},"next":{"title":"Chapter 3: Caching Strategies and Patterns","permalink":"/ai-engineering-journey/system-design/03-caching"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/02-scalability-load-balancing.md


const frontMatter = {
	id: '02-scalability-load-balancing',
	slug: '/system-design/02-scalability-load-balancing',
	title: 'Chapter 2: Scalability and Load Balancing',
	sidebar_label: 'Chapter 2: Scalability and Load Balancing',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Scalability and Load Balancing';

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
  "value": "Vertical Scaling (Scale Up)",
  "id": "vertical-scaling-scale-up",
  "level": 3
}, {
  "value": "Horizontal Scaling (Scale Out)",
  "id": "horizontal-scaling-scale-out",
  "level": 3
}, {
  "value": "L4 vs L7 Load Balancing",
  "id": "l4-vs-l7-load-balancing",
  "level": 3
}, {
  "value": "Load Balancing Algorithms",
  "id": "load-balancing-algorithms",
  "level": 3
}, {
  "value": "Round Robin",
  "id": "round-robin",
  "level": 4
}, {
  "value": "Weighted Round Robin",
  "id": "weighted-round-robin",
  "level": 4
}, {
  "value": "Least Connections",
  "id": "least-connections",
  "level": 4
}, {
  "value": "Least Response Time",
  "id": "least-response-time",
  "level": 4
}, {
  "value": "IP Hash",
  "id": "ip-hash",
  "level": 4
}, {
  "value": "Consistent Hashing",
  "id": "consistent-hashing",
  "level": 4
}, {
  "value": "Random",
  "id": "random",
  "level": 4
}, {
  "value": "Reverse Proxy",
  "id": "reverse-proxy",
  "level": 3
}, {
  "value": "DNS Load Balancing",
  "id": "dns-load-balancing",
  "level": 3
}, {
  "value": "Round-Robin DNS",
  "id": "round-robin-dns",
  "level": 4
}, {
  "value": "Weighted DNS",
  "id": "weighted-dns",
  "level": 4
}, {
  "value": "Geographic DNS (GeoDNS)",
  "id": "geographic-dns-geodns",
  "level": 4
}, {
  "value": "Global Server Load Balancing (GSLB)",
  "id": "global-server-load-balancing-gslb",
  "level": 3
}, {
  "value": "Active-Active",
  "id": "active-active",
  "level": 4
}, {
  "value": "Active-Passive",
  "id": "active-passive",
  "level": 4
}, {
  "value": "Anycast Routing",
  "id": "anycast-routing",
  "level": 4
}, {
  "value": "Health Checks",
  "id": "health-checks",
  "level": 3
}, {
  "value": "Passive Health Checks",
  "id": "passive-health-checks",
  "level": 4
}, {
  "value": "Active Health Checks",
  "id": "active-health-checks",
  "level": 4
}, {
  "value": "Auto-Scaling",
  "id": "auto-scaling",
  "level": 3
}, {
  "value": "Reactive Scaling",
  "id": "reactive-scaling",
  "level": 4
}, {
  "value": "Predictive Scaling",
  "id": "predictive-scaling",
  "level": 4
}, {
  "value": "The Sticky Sessions Problem",
  "id": "the-sticky-sessions-problem",
  "level": 3
}, {
  "value": "Real-World Systems",
  "id": "real-world-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Designing Load Balancing for a Global E-Commerce Site",
  "id": "example-1-designing-load-balancing-for-a-global-e-commerce-site",
  "level": 3
}, {
  "value": "Example 2: Consistent Hashing for a Distributed Cache",
  "id": "example-2-consistent-hashing-for-a-distributed-cache",
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
  "value": "Concept Comparison",
  "id": "concept-comparison-1",
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
  "value": "TypeScript: Load Balancer and Auto-Scaler",
  "id": "typescript-load-balancer-and-auto-scaler",
  "level": 3
}, {
  "value": "Implementation: CAP Theorem and Consistency Models",
  "id": "implementation-cap-theorem-and-consistency-models",
  "level": 3
}, {
  "value": "TypeScript: Load Balancer (Multi-Algorithm)",
  "id": "typescript-load-balancer-multi-algorithm",
  "level": 3
}, {
  "value": "TypeScript: Horizontal Scaler (Auto-Scaling Engine)",
  "id": "typescript-horizontal-scaler-auto-scaling-engine",
  "level": 3
}, {
  "value": "TypeScript: Throughput Calculator (Little&#39;s Law)",
  "id": "typescript-throughput-calculator-littles-law",
  "level": 3
}, {
  "value": "Load Balancing Algorithms Comparison",
  "id": "load-balancing-algorithms-comparison",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-2",
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
  "value": "Review Questions (4-5)",
  "id": "review-questions-4-5",
  "level": 3
}, {
  "value": "Application Problems (3-4)",
  "id": "application-problems-3-4",
  "level": 3
}, {
  "value": "Challenge Problem (1)",
  "id": "challenge-problem-1",
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
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "chapter-2-scalability-and-load-balancing",
        children: "Chapter 2: Scalability and Load Balancing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/01-introduction",
          children: "01 Introduction"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/03-caching",
          children: "03 Caching"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare vertical and horizontal scaling strategies with appropriate use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish L4 and L7 load balancing with detailed trade-off analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and select among seven load-balancing algorithms based on traffic patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design DNS-based and global server load balancing for multi-region deployments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure health checks and auto-scaling policies with appropriate metrics and cooldown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the sticky sessions problem and design stateless alternatives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model real-world load balancing at AWS, Google Cloud, and Cloudflare"
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
        children: "flowchart LR\n    A[Core Concepts] --> B[Design Decisions]\n    B --> C[Real-World Examples]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | Vertical/horizontal scaling, L4/L7, algorithms, DNS, GSLB, auto-scaling |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 2: Scalability and Load Balancing |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | Algorithm selection, health check design, auto-scaling policy |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Angle"
      }), " | Frequently tested in system design interviews |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
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
            children: "Vertical/horizontal scaling, L4/L7 balancing, algorithms, DNS, GSLB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale-out vs scale-up, load balancing algorithms, health checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LB Algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round Robin, Least Connections, Consistent Hashing, IP Hash, Random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS/GSLB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GeoDNS, active-active, active-passive, anycast routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive vs predictive, cooldown, scale-up/down strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sticky sessions and why they are bad"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/02-scalability-load-balancing.png",
        alt: "Load Balancing Algorithms Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vertical-scaling-scale-up",
      children: "Vertical Scaling (Scale Up)"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nVertical scaling adds resources to a single machine: more CPU cores, more RAM, faster SSDs, higher-bandwidth NICs. It is the simplest scaling strategy because it requires zero application changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No code changes needed. The application remains a single process with a single address space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No network coordination overhead. All communication is within the machine (CPU cache, memory bus, local disk)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No consistency or distributed transaction problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Licensing costs often scale linearly with hardware (for per-CPU licenses, this can be cheaper than per-instance cloud costs)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware ceiling."
        }), " A single x86 server cannot exceed ~64 TB RAM (current max) or ~448 CPU cores. There is no way to vertically scale past the largest machine a vendor sells."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost super-linearity."
        }), " High-end machines cost exponentially more than commodity servers. A 2x machine rarely costs 2x — it costs 3-5x because of premium hardware."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single point of failure."
        }), " If the machine dies, the system is down. Redundancy requires moving to horizontal scaling anyway."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planned downtime."
        }), " Upgrades require reboots (RAM, CPU replacement). This violates availability SLAs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vertical scaling is appropriate for legacy applications, stateful systems that cannot be easily partitioned, and workloads under ~100K QPS where the hardware ceiling is not a concern."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "horizontal-scaling-scale-out",
      children: "Horizontal Scaling (Scale Out)"
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
      children: "Horizontal scaling adds more machines to the pool. Each machine handles a fraction of the workload. The system's total capacity is N × (capacity of a single node) minus coordination overhead."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Near-linear scalability"
        }), " if the workload is partitionable. Load balancers + stateless app servers scale almost perfectly to hundreds of thousands of nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commodity hardware."
        }), " Use cheap off-the-shelf servers or cloud instances. A cluster of 100 small machines is often cheaper than one large machine with the same total capacity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fault isolation."
        }), " A single machine failure drops capacity by 1/N, not to zero. Redundancy is built in."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rolling upgrades."
        }), " Deploy code to a subset of nodes at a time. Zero-downtime deployments are standard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordination overhead."
        }), " Distributed consensus, consistent hashing, and data replication all consume CPU and network bandwidth, reducing effective throughput per node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operational complexity."
        }), " Managing 100 servers is harder than managing 1. Requires orchestration (Kubernetes, Nomad), monitoring, logging aggregation, and automated deployment pipelines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State management."
        }), " Sessions, caches, and databases must be externalized to shared services (Redis, databases) rather than stored on the application server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shared-Nothing Architecture."
      }), " Each node is independent; it owns its CPU, memory, and disk, and shares nothing with other nodes. Communication happens exclusively over the network. This is the dominant pattern for horizontally scaled systems because it eliminates resource contention and allows independent failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "l4-vs-l7-load-balancing",
      children: "L4 vs L7 Load Balancing"
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
      children: "Load balancers operate at different layers of the OSI model:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "L4 (Transport)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "L7 (Application)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 — TCP/UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 — HTTP/HTTPS, gRPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing basis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address, port, protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL path, HTTP headers, cookies, request body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (kernel-level forwarding, minimal overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (must parse and potentially modify traffic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (passes encrypted traffic through)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (terminates TLS, can inspect plaintext)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sticky sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source IP hash only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie-based affinity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content-aware routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (route /api/v1 to one pool, /static to another)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP port probes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-aware (check HTTP 200, response time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (protocol-specific configuration)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~microseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~milliseconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAProxy in TCP mode, AWS NLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NGINX, HAProxy in HTTP mode, AWS ALB, GCP HTTP LB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L4 is faster but dumber."
      }), " It forwards TCP segments without understanding the application protocol. This is appropriate for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database traffic (MySQL, PostgreSQL direct connections)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-HTTP protocols (gRPC without proxy termination, WebSocket without sticky sessions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any scenario where raw throughput is the primary concern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 is slower but smarter."
      }), " It can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route requests to different backend pools based on URL path (microservices routing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify headers (add X-Forwarded-For, rewrite paths)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terminate TLS, offloading encryption work from application servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement sophisticated health checks (check for specific response content)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compress responses before sending to clients"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison rule of thumb:"
      }), " Use L4 unless you need L7 features. The performance difference is significant at high throughput (100K+ QPS), and the simpler configuration of L4 reduces operational risk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancing-algorithms",
      children: "Load Balancing Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "round-robin",
      children: "Round Robin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requests are distributed to servers in sequential order. Server 1 ? Server 2 ? Server 3 ? Server 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Servers: [A, B, C]\nRequest 1 ? A, Request 2 ? B, Request 3 ? C, Request 4 ? A, ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple, deterministic, no per-request computation overhead.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Does not account for variable request cost, variable server capacity, or current server load.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use when:"
      }), " All servers have identical capacity and all requests cost the same."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "weighted-round-robin",
      children: "Weighted Round Robin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each server gets a weight proportional to its capacity. A server with weight 2 receives twice as many requests as a server with weight 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Servers: [A(weight 3), B(weight 1), C(weight 2)]\nAllocation pattern: A, A, A, B, C, C, A, A, A, B, C, C, ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Handles heterogeneous server capacity.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Still does not account for dynamic load fluctuations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "least-connections",
      children: "Least Connections"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The load balancer sends each new request to the server with the fewest currently active connections."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(server_i) = 1 / \\min(connections_1, connections_2, ..., connections_n)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Adapts to variable request duration. A server stuck processing a long-running request stops receiving new ones.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Requires the load balancer to track connection counts per server (stateful). Susceptible to oscillation under rapid load changes.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use when:"
      }), " Request processing times vary significantly. The classic choice for database connection pooling layers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "least-response-time",
      children: "Least Response Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requests are sent to the server with the lowest current average response time. This combines connection count information with actual performance data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Adapts to both load and server performance degradation (e.g., a server with a failing disk becomes slower, receives fewer requests).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " More computation per request. Response time sampling adds latency. Can create feedback loops (a slightly faster server gets more requests, becomes slower, loses requests, oscillates).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use when:"
      }), " Server performance varies over time and monitoring is already in place."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ip-hash",
      children: "IP Hash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The client's IP address (or a portion of it) is hashed, and the hash value determines the server:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$server_index = hash(client_IP) \\bmod N$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where N is the number of servers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Ensures the same client (from the same IP) is always sent to the same server. Provides \"poor man's sticky sessions\" without requiring cookies.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " If a server is added or removed, the hash modulus changes — most clients remap to different servers. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "remapping problem."
      }), " IP addresses behind NAT or proxy (corporate networks, mobile carriers) all hash to the same server, causing uneven distribution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "consistent-hashing",
      children: "Consistent Hashing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash ring technique that minimizes remapping when the server pool changes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$server = \\text{nearest clockwise server from } hash(key)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each server is placed on a ring of hash values (e.g., 0 to 2^32-1). Each request key is hashed to a point on the ring, and the request is sent to the nearest clockwise server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a server is added or removed, only the keys whose hash falls between the old server's position and the new server's position remap. Expected fraction of keys remapped: 1/N where N is the number of servers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual nodes:"
      }), " Each physical server is represented by multiple points on the ring to improve load distribution (mitigates the \"hot partition\" problem where a single server's hash position ends up with an unfair share of the ring)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Minimal remapping on topology changes. Uniform distribution with virtual nodes.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Complexity. Still vulnerable to server overload if a particular key range attracts disproportionate traffic.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use when:"
      }), " The server pool changes frequently (auto-scaling) or for distributed caching systems (Memcached, Redis Cluster)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "random",
      children: "Random"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select a server uniformly at random. With a sufficient number of requests, this approximates round-robin distribution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Stateless (no connection tracking required). Simple to implement.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " No awareness of server load or capacity. In practice performs nearly identically to round-robin for large N but has higher variance for small N."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reverse-proxy",
      children: "Reverse Proxy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A reverse proxy sits in front of application servers, accepting client requests and forwarding them to backend servers on behalf of the client. Unlike a forward proxy (which acts on behalf of clients), a reverse proxy acts on behalf of servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NGINX configuration example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-nginx",
        children: "http {\n    upstream backend {\n        least_conn;\n        server app1.internal:8080 weight=3;\n        server app2.internal:8080 weight=2;\n        server app3.internal:8080 weight=1;\n    }\n\n    server {\n        listen 443 ssl;\n        server_name api.example.com;\n\n        ssl_certificate /etc/ssl/certs/example.crt;\n        ssl_certificate_key /etc/ssl/private/example.key;\n\n        location /api/ {\n            proxy_pass http://backend;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n\n        location /static/ {\n            root /var/www/static;\n            expires 30d;\n            add_header Cache-Control \"public, immutable\";\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HAProxy configuration example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-haproxy",
        children: "frontend http-in\n    bind *:80\n    bind *:443 ssl crt /etc/ssl/certs/haproxy.pem\n    default_backend app_servers\n\nbackend app_servers\n    balance leastconn\n    option httpchk GET /health HTTP/1.1\\r\\nHost:\\ healthcheck\n    server app1 10.0.1.1:8080 check inter 5s fall 3 rise 2\n    server app2 10.0.1.2:8080 check inter 5s fall 3 rise 2\n    server app3 10.0.1.3:8080 check inter 5s fall 3 rise 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key features of reverse proxies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSL termination:"
        }), " Decrypt HTTPS traffic once at the proxy, send plain HTTP internally. Reduces per-application TLS overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compression:"
        }), " gzip/brotli compression of responses before sending to clients. Offloads CPU-intensive compression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static file serving:"
        }), " Serve static assets directly from disk without hitting the application server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request buffering:"
        }), " Buffer slow client uploads (the proxy accepts the full request quickly, then forwards to the backend at full speed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response caching:"
        }), " Cache common responses to reduce backend load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dns-load-balancing",
      children: "DNS Load Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DNS load balancing distributes traffic by returning different IP addresses for the same domain name."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "round-robin-dns",
      children: "Round-Robin DNS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The DNS server returns A/AAAA records in a rotating order:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "query: api.example.com\nresponse: TTL=300, records=[203.0.113.1, 203.0.113.2, 203.0.113.3]\n\nNext query: api.example.com\nresponse: TTL=300, records=[203.0.113.2, 203.0.113.3, 203.0.113.1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Clients typically use the first IP address returned, so traffic distributes roughly evenly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      }), " DNS caching by ISPs and clients defeats distribution (a busy resolver caches the result for the full TTL, sending all its traffic to one IP). There is no server load awareness — a dead server is still returned until the TTL expires and the DNS record is updated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "weighted-dns",
      children: "Weighted DNS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each IP address is assigned a weight. The DNS server returns addresses proportional to their weights:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "api.example.com  203.0.113.1  weight=10\napi.example.com  203.0.113.2  weight=20\napi.example.com  203.0.113.3  weight=10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Server B receives twice the traffic of A or C. Useful for heterogeneous data center capacity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "geographic-dns-geodns",
      children: "Geographic DNS (GeoDNS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The DNS server examines the client's source IP (EDNS0 Client Subnet extension or resolver IP) and returns the IP of the nearest data center:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client in London ? returns eu-west-1 IP (10.1.1.1)\nClient in Tokyo ? returns ap-northeast-1 IP (10.3.1.1)\nClient in New York ? returns us-east-1 IP (10.2.1.1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Reduces latency by directing users to the closest region. Allows geo-specific content restrictions.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Requires geo-IP databases, which are imperfect. Some ISPs route DNS queries through resolvers in other regions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "global-server-load-balancing-gslb",
      children: "Global Server Load Balancing (GSLB)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GSLB distributes traffic across data centers or cloud regions. It is the cross-region counterpart of local load balancing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "active-active",
      children: "Active-Active"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All data centers serve traffic simultaneously. Traffic is distributed based on geographic proximity, capacity, or health."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---------------------------------------+\n¦              Global DNS                ¦\n¦        (Route53 / Cloud DNS)           ¦\n+----------------------------------------+\n       ¦                    ¦\n       ?                    ?\n+--------------+   +--------------+\n¦  us-east-1   ¦   ¦  eu-west-1   ¦\n¦  (active)    ¦   ¦  (active)    ¦\n¦  60% traffic ¦   ¦  40% traffic ¦\n+--------------+   +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Higher total capacity, lower latency for globally distributed users.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Requires cross-region data replication, which adds latency and consistency challenges."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "active-passive",
      children: "Active-Passive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One region serves all traffic; the other region is on standby. On failure, traffic is rerouted to the passive region."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Normal operation:\n+--------------+   +--------------+\n¦  us-east-1   ¦   ¦  eu-west-1   ¦\n¦  (active)    ¦   ¦  (passive)   ¦\n¦  100% traffic¦   ¦   0 traffic  ¦\n+--------------+   +--------------+\n\nAfter failover:\n+--------------+   +--------------+\n¦  us-east-1   ¦   ¦  eu-west-1   ¦\n¦  (down)      ¦   ¦  (active)    ¦\n¦   0 traffic  ¦   ¦  100% traffic¦\n+--------------+   +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simpler (no cross-region replication for state; passive region can lag), cheaper (half the infrastructure is idle in normal operation).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Wasted capacity, slower failover (may need to warm caches), data loss risk if passive region replication lags."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "anycast-routing",
      children: "Anycast Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same IP address is announced from multiple data centers via BGP. Internet routers send traffic to the closest (topologically) data center."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IP 203.0.113.1 announced from:\n  - us-east-1 (AS 12345)\n  - eu-west-1 (AS 12346)\n  - ap-northeast-1 (AS 12347)\n\nTraffic from London reaches eu-west-1 (shortest AS-path).\nTraffic from Mumbai reaches ap-northeast-1.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Transparent to clients (single IP address). Automatic failover (BGP withdraws the route if a data center goes down).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " BGP convergence can take minutes. Traffic distribution is not controllable (it follows internet routing policies, not your capacity plan). Harder to debug."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-checks",
      children: "Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load balancers must distinguish healthy from unhealthy servers. Two approaches:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "passive-health-checks",
      children: "Passive Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The load balancer monitors real traffic to detect failures. If a server returns N consecutive errors (5xx, connection refused, timeout), it is marked unhealthy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Failure counter:\n  server A: 3 consecutive 502 errors ? mark unhealthy\n  server A: first successful response after unhealthy ? mark healthy\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Zero overhead (uses existing traffic). Detects application-layer failures.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " May serve errors during the detection window. Slow to detect failures if traffic is low."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "active-health-checks",
      children: "Active Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The load balancer periodically sends synthetic requests (health probes) to each server:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Every 5 seconds, send GET /health to each server.\n- HTTP 200 + body \"ok\" ? healthy\n- HTTP 5xx or timeout after 2s ? unhealthy\n- After 3 consecutive failures ? remove from pool\n- After 2 consecutive successes ? return to pool\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Fast failure detection (independent of traffic volume). Proactive — catches failures before users see errors.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Extra load on servers (must serve health requests). May over-flag servers under transient load spikes (require generous failure thresholds)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auto-scaling",
      children: "Auto-Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Auto-scaling automatically adjusts the number of compute instances based on demand. Two approaches:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reactive-scaling",
      children: "Reactive Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React to measured metrics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scale-up condition: CPU > 70% for 5 consecutive minutes\nScale-down condition: CPU < 30% for 10 consecutive minutes\nCooldown: 3 minutes between scaling actions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics commonly used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU utilization (%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory utilization (%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request queue depth (requests waiting in the LB)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request count per second"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom metric (e.g., Kafka consumer lag)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cooldown:"
      }), " A stabilization period after a scaling action to prevent flapping (rapid scale-up/down cycles). New instances take 30-120 seconds to warm up (boot, deploy code, connect to dependencies). During cooldown, no additional scaling actions fire."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "predictive-scaling",
      children: "Predictive Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use machine learning to forecast demand and provision capacity ahead of time. Services like AWS Forecast or GCP Autoscaler learn daily and weekly patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Prediction: Monday 9:00-9:30 AM will see 3x normal traffic\nAction: proactively scale from 10 to 30 instances at 8:45 AM\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Handles flash crowds better than reactive (which is always behind the curve).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Requires historical data. May waste money if predictions are inaccurate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scale-up/down strategy:"
      }), " Scale up fast (add 2x capacity on each scale-up), scale down slow (remove 1/3 at a time). This protects against cascading failures where a rapid scale-down followed by a load spike triggers another scale-up cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-sticky-sessions-problem",
      children: "The Sticky Sessions Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sticky sessions (session affinity) means routing a client to the same application server for the duration of their session. This seems natural but is fundamentally incompatible with resilient horizontal scaling."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why sticky sessions are bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the server dies, the session is lost even if other servers are healthy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During rolling deployments, sessions pin clients to old servers, complicating drain cycles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-scaling is less effective because adding servers only helps for new sessions, not existing ones."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load distribution becomes uneven (some servers accumulate long-lived sessions)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution: External Session Store"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Store session state in a shared, highly available data store:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---------+   +---------+   +---------+\n¦ Client 1 ¦   ¦ Client 2 ¦   ¦ Client 3 ¦\n+---------+   +---------+   +---------+\n     ¦             ¦             ¦\n     ?             ?             ?\n+---------------------------------------+\n¦           Load Balancer               ¦\n¦         (round-robin or LC)           ¦\n+---------------------------------------+\n   ¦          ¦          ¦\n   ?          ?          ?\n+-----+  +-----+  +-----+\n¦ S1  ¦  ¦ S2  ¦  ¦ S3  ¦  ? all stateless\n+-----+  +-----+  +-----+\n  ¦        ¦        ¦\n  +--------+--------+\n           ?\n    +-----------+\n    ¦  Redis    ¦  ? session store\n    ¦ (cluster) ¦\n    +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any server can serve any request by reading/writing session data to Redis. This makes every request independent and enables true horizontal scaling."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-systems",
      children: "Real-World Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS Elastic Load Balancer (ELB)."
      }), " Three tiers: Classic Load Balancer (L4/L7 hybrid, legacy), Application Load Balancer (L7, HTTP/HTTPS, content-based routing, path patterns, host-based routing), Network Load Balancer (L4, ultra-low latency, TCP/UDP/TLS, handles millions of requests/second). ALB supports weighted target groups, stickiness via cookies, native WebSocket support."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Cloud Load Balancer."
      }), " Unlike AWS, GCLB is a single global anycast front-end — you create one load balancer that serves traffic across all regions. Traffic enters the Google Front End (GFE) at the nearest edge point-of-presence (POP) and is routed over Google's private network (not the public internet) to the backend. This eliminates public internet variability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloudflare Load Balancing."
      }), " Monitors origin server health, pools, geo-steering. Cloudflare uses Anycast for its own IP addresses — all 200+ data centers announce the same IPs, and traffic naturally goes to the nearest one. Their load balancer sits on top of this Anycast layer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-designing-load-balancing-for-a-global-e-commerce-site",
      children: "Example 1: Designing Load Balancing for a Global E-Commerce Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " An e-commerce platform with users in North America, Europe, and Asia. 200M monthly visits. Black Friday traffic is 10x normal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS layer:"
      }), " GeoDNS routes users to the nearest regional cluster. us-east-1 for NA, eu-west-1 for EU, ap-southeast-1 for Asia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Regional GSLB:"
      }), " Each region has an active-passive pair of availability zones. us-east-1a (active), us-east-1b (passive). DNS health checks monitor region health."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Local load balancer:"
      }), " GCP HTTP LB (global) or AWS ALB per region. L7 routing: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/shop/*"
      }), " to web servers, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api/*"
      }), " to API servers, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/static/*"
      }), " directly to CDN."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-scaling:"
      }), " Predictive scaling for Black Friday (train model on last year's data + current trend). Reactive scaling for normal operations. Scale-up cooldown: 60 seconds. Scale-down cooldown: 300 seconds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Session management:"
      }), " No sticky sessions. Cart data stored in Redis cluster (with persistence to DynamoDB for durability)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-consistent-hashing-for-a-distributed-cache",
      children: "Example 2: Consistent Hashing for a Distributed Cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A Memcached cluster with 10 nodes. Adding one node should not invalidate all cached keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution — Consistent Hash Ring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash space: 0 to 2^32-1 (circle)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each server placed at 100 virtual node positions (random points on the ring)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each key ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cache_key"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hash(\"product:12345\")"
        }), " ? find nearest clockwise server"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding a cache node: add 100 virtual node positions. Only keys mapping to those ring intervals remap. Expected remap: ~1/11 of keys (not 10/11 as with naive hash)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\nimport bisect\n\nclass ConsistentHashRing:\n    def __init__(self, servers=None, virtual_nodes=100):\n        self.virtual_nodes = virtual_nodes\n        self.ring = []\n        self.nodes = {}\n        if servers:\n            for server in servers:\n                self.add_node(server)\n\n    def _hash(self, key):\n        return int(hashlib.md5(key.encode()).hexdigest(), 16)\n\n    def add_node(self, node_id):\n        for i in range(self.virtual_nodes):\n            hash_val = self._hash(f\"{node_id}:{i}\")\n            bisect.insort(self.ring, (hash_val, node_id))\n        self.nodes[node_id] = True\n\n    def remove_node(self, node_id):\n        for i in range(self.virtual_nodes):\n            hash_val = self._hash(f\"{node_id}:{i}\")\n            self.ring.remove((hash_val, node_id))\n        del self.nodes[node_id]\n\n    def get_node(self, key):\n        if not self.ring:\n            return None\n        hash_val = self._hash(key)\n        idx = bisect.bisect_left(self.ring, (hash_val, ''))\n        if idx == len(self.ring):\n            idx = 0\n        return self.ring[idx][1]\n"
      })
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
            children: "Core topic covered in Chapter 2: Scalability and Load Balancing"
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
            children: "Fundamental concept for Chapter 2: Scalability and Load Balancing"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which of the following best describes a key concept from this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>Refer to the chapter content for the correct answer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which of the following best describes a key concept from this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>Refer to the chapter content for the correct answer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which of the following best describes a key concept from this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>Refer to the chapter content for the correct answer."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-1",
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
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 2: Scalability and Load Balancing"
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
            children: "Essential concept for Chapter 2: Scalability and Load Balancing"
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
          }), " Which concept is most fundamental to the topic of Chapter 2"]
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
                  id: "typescript-load-balancer-and-auto-scaler",
                  children: "TypeScript: Load Balancer and Auto-Scaler"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface Server { id: string; connections: number; cpu: number; weight: number; healthy: boolean; }\n\nclass LoadBalancer {\n  private servers: Server[] = [];\n  private rrIndex = 0;\n\n  addServer(s: Server): void { this.servers.push(s); }\n\n  roundRobin(): Server | null {\n    if (this.servers.length === 0) return null;\n    const start = this.rrIndex;\n    do {\n      const s = this.servers[this.rrIndex];\n      this.rrIndex = (this.rrIndex + 1) % this.servers.length;\n      if (s.healthy) return s;\n    } while (this.rrIndex !== start);\n    return null;\n  }\n\n  weightedRoundRobin(): Server | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    const totalWeight = healthy.reduce((s, h) => s + h.weight, 0);\n    let r = Math.random() * totalWeight;\n    for (const s of healthy) { r -= s.weight; if (r <= 0) return s; }\n    return healthy[healthy.length - 1];\n  }\n\n  leastConnections(): Server | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    return healthy.reduce((a, b) => a.connections < b.connections ? a : b);\n  }\n\n  leastResponseTime(responseTimes: Map<string, number>): Server | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    return healthy.reduce((a, b) => (responseTimes.get(a.id) ?? Infinity) < (responseTimes.get(b.id) ?? Infinity) ? a : b);\n  }\n\n  ipHash(ip: string): Server | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    let h = 0;\n    for (let i = 0; i < ip.length; i++) h = ((h << 5) - h + ip.charCodeAt(i)) | 0;\n    return healthy[Math.abs(h) % healthy.length];\n  }\n}\n\nclass AutoScaler {\n  private metrics: { cpu: number; timestamp: number }[] = [];\n\n  constructor(private minServers: number, private maxServers: number, private targetCpu: number) {}\n\n  recordMetric(cpu: number): void {\n    this.metrics.push({ cpu, timestamp: Date.now() });\n    if (this.metrics.length > 60) this.metrics.shift();\n  }\n\n  desiredCount(currentCount: number): { count: number; action: string } {\n    const avgCpu = this.metrics.reduce((s, m) => s + m.cpu, 0) / Math.max(this.metrics.length, 1);\n    if (avgCpu > this.targetCpu * 1.3 && currentCount < this.maxServers) {\n      const add = Math.min(Math.ceil((avgCpu - this.targetCpu) / this.targetCpu * currentCount), this.maxServers - currentCount);\n      return { count: currentCount + add, action: `scaling up by ${add} (cpu=${avgCpu.toFixed(0)}%)` };\n    }\n    if (avgCpu < this.targetCpu * 0.5 && currentCount > this.minServers) {\n      const remove = Math.min(Math.ceil((this.targetCpu - avgCpu) / this.targetCpu * currentCount), currentCount - this.minServers);\n      return { count: currentCount - remove, action: `scaling down by ${remove} (cpu=${avgCpu.toFixed(0)}%)` };\n    }\n    return { count: currentCount, action: \"stable\" };\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "implementation-cap-theorem-and-consistency-models",
                  children: "Implementation: CAP Theorem and Consistency Models"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class CAPTheorem { private nodes: Map<string, { consistent: boolean; available: boolean; partitionTolerant: boolean }> = new Map();\n  addNode(id: string, c: boolean, a: boolean, p: boolean): void { this.nodes.set(id, { consistent: c, available: a, partitionTolerant: p }); }\n  simulate(partition: boolean): Map<string, string> { const r = new Map<string, string>();\n    for (const [id, n] of this.nodes) {\n      if (partition && !n.partitionTolerant) { r.set(id, \"DOWN\"); continue; }\n      if (partition && n.consistent && n.available) { r.set(id, \"CP: sacrifices availability\"); continue; }\n      if (partition && !n.consistent && n.available) { r.set(id, \"AP: sacrifices consistency\"); continue; }\n      r.set(id, \"OK\"); } return r; }\n}\nclass ConsistencyLevel { static readonly STRONG = \"strong\"; static readonly EVENTUAL = \"eventual\"; static readonly CAUSAL = \"causal\"; static readonly READ_YOUR_WRITES = \"read-your-writes\"; static readonly MONOTONIC = \"monotonic\";\n  describe(level: string): string { const descriptions: Record<string, string> = { \"strong\": \"All reads see all writes immediately\", \"eventual\": \"All replicas converge eventually\", \"causal\": \"Causally related operations seen in order\", \"read-your-writes\": \"Always see your own writes\", \"monotonic\": \"Reads never go back in time\" }; return descriptions[level] || \"Unknown\"; }\n}\nclass QuorumSystem { constructor(private totalNodes: number, private writeQuorum: number, private readQuorum: number) {}\n  isAvailable(): boolean { return this.writeQuorum + this.readQuorum > this.totalNodes; }\n  maxFailures(): number { return this.totalNodes - Math.max(this.writeQuorum, this.readQuorum); }\n  estimateConsistency(readLatency: number, writeLatency: number): \"strong\" | \"eventual\" {\n    const stalenessThreshold = readLatency / writeLatency;\n    return stalenessThreshold < 0.5 ? \"eventual\" : \"strong\"; }\n}\nclass VectorClock { private clock: Map<string, number> = new Map();\n  tick(node: string): void { this.clock.set(node, (this.clock.get(node) || 0) + 1); }\n  merge(other: VectorClock): void { for (const [k, v] of other.clock) { this.clock.set(k, Math.max(this.clock.get(k) || 0, v)); } }\n  compare(other: VectorClock): \"before\" | \"after\" | \"concurrent\" {\n    let thisAhead = false; let otherAhead = false;\n    for (const [k, v] of this.clock) { const ov = other.clock.get(k) || 0; if (v > ov) thisAhead = true; if (v < ov) otherAhead = true; }\n    for (const [k, v] of other.clock) { if (!this.clock.has(k)) otherAhead = true; }\n    if (thisAhead && !otherAhead) return \"before\"; if (!thisAhead && otherAhead) return \"after\"; return \"concurrent\"; }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// scalability load balancing\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'scalability load balancing', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// scalability load balancing - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'scalability load balancing' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-load-balancer-multi-algorithm",
                  children: "TypeScript: Load Balancer (Multi-Algorithm)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class implements four load-balancing algorithms — round-robin, least-connections, IP hash, and weighted — with health tracking and connection counting."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface BackendServer {\n  id: string;\n  host: string;\n  port: number;\n  weight: number;\n  activeConnections: number;\n  healthy: boolean;\n}\n\nclass LoadBalancer {\n  private servers: BackendServer[] = [];\n  private rrIndex = 0;\n\n  addServer(s: BackendServer): void { this.servers.push(s); }\n\n  removeServer(id: string): void {\n    this.servers = this.servers.filter(s => s.id !== id);\n  }\n\n  markHealth(id: string, healthy: boolean): void {\n    const s = this.servers.find(s => s.id === id);\n    if (s) s.healthy = healthy;\n  }\n\n  roundRobin(): BackendServer | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    const s = healthy[this.rrIndex % healthy.length];\n    this.rrIndex = (this.rrIndex + 1) % healthy.length;\n    return s;\n  }\n\n  leastConnections(): BackendServer | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    return healthy.reduce((a, b) => a.activeConnections < b.activeConnections ? a : b);\n  }\n\n  ipHash(clientIp: string): BackendServer | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    let hash = 0;\n    for (let i = 0; i < clientIp.length; i++) {\n      hash = ((hash << 5) - hash) + clientIp.charCodeAt(i);\n      hash |= 0;\n    }\n    return healthy[Math.abs(hash) % healthy.length];\n  }\n\n  weightedRoundRobin(): BackendServer | null {\n    const healthy = this.servers.filter(s => s.healthy);\n    if (healthy.length === 0) return null;\n    const totalWeight = healthy.reduce((sum, s) => sum + s.weight, 0);\n    let r = Math.random() * totalWeight;\n    for (const s of healthy) {\n      r -= s.weight;\n      if (r <= 0) return s;\n    }\n    return healthy[healthy.length - 1];\n  }\n\n  simulateBatch(requests: { clientIp: string; durationMs: number }[], algorithm: 'rr' | 'lc' | 'ip' | 'wr'): Map<string, number> {\n    const counts = new Map<string, number>();\n    for (const req of requests) {\n      let server: BackendServer | null = null;\n      switch (algorithm) {\n        case 'rr': server = this.roundRobin(); break;\n        case 'lc': server = this.leastConnections(); break;\n        case 'ip': server = this.ipHash(req.clientIp); break;\n        case 'wr': server = this.weightedRoundRobin(); break;\n      }\n      if (server) {\n        server.activeConnections++;\n        counts.set(server.id, (counts.get(server.id) || 0) + 1);\n        setTimeout(() => { server!.activeConnections--; }, req.durationMs);\n      }\n    }\n    return counts;\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst lb = new LoadBalancer();\nlb.addServer({ id: 's1', host: '10.0.0.1', port: 8080, weight: 5, activeConnections: 0, healthy: true });\nlb.addServer({ id: 's2', host: '10.0.0.2', port: 8080, weight: 3, activeConnections: 0, healthy: true });\nlb.addServer({ id: 's3', host: '10.0.0.3', port: 8080, weight: 2, activeConnections: 0, healthy: true });\n\nconst testReqs = Array.from({ length: 100 }, (_, i) => ({ clientIp: `192.168.1.${i % 10}`, durationMs: Math.random() * 200 }));\nconsole.log('Round-robin distribution:', [...lb.simulateBatch(testReqs, 'rr')]);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-horizontal-scaler-auto-scaling-engine",
                  children: "TypeScript: Horizontal Scaler (Auto-Scaling Engine)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class implements reactive auto-scaling with CPU/memory thresholds, cooldown periods, and scale-up/down policies."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface ScalingMetrics {\n  cpuPercent: number;\n  memoryPercent: number;\n  requestQueueDepth: number;\n  timestamp: number;\n}\n\nclass HorizontalScaler {\n  private metricHistory: ScalingMetrics[] = [];\n  private lastScaleTime = 0;\n  private currentInstances: number;\n\n  constructor(\n    private minInstances: number,\n    private maxInstances: number,\n    private cpuUpThreshold: number,\n    private cpuDownThreshold: number,\n    private cooldownMs: number,\n    initialInstances: number\n  ) {\n    this.currentInstances = initialInstances;\n  }\n\n  recordMetrics(cpu: number, memory: number, queueDepth: number): void {\n    this.metricHistory.push({ cpuPercent: cpu, memoryPercent: memory, requestQueueDepth: queueDepth, timestamp: Date.now() });\n    if (this.metricHistory.length > 30) this.metricHistory.shift();\n  }\n\n  get averageCpu(): number {\n    if (this.metricHistory.length === 0) return 0;\n    return this.metricHistory.reduce((s, m) => s + m.cpuPercent, 0) / this.metricHistory.length;\n  }\n\n  get averageMemory(): number {\n    if (this.metricHistory.length === 0) return 0;\n    return this.metricHistory.reduce((s, m) => s + m.memoryPercent, 0) / this.metricHistory.length;\n  }\n\n  evaluate(): { action: 'scale-up' | 'scale-down' | 'none'; instances: number; reason: string } {\n    const now = Date.now();\n    if (now - this.lastScaleTime < this.cooldownMs) {\n      return { action: 'none', instances: this.currentInstances, reason: 'In cooldown period' };\n    }\n    if (this.metricHistory.length < 3) {\n      return { action: 'none', instances: this.currentInstances, reason: 'Insufficient data' };\n    }\n\n    const avgCpu = this.averageCpu;\n    const avgMem = this.averageMemory;\n    const recent = this.metricHistory.slice(-3);\n    const allHigh = recent.every(m => m.cpuPercent > this.cpuUpThreshold || m.memoryPercent > 80);\n\n    if (allHigh && avgCpu > this.cpuUpThreshold && this.currentInstances < this.maxInstances) {\n      const scaleBy = Math.min(\n        Math.ceil((avgCpu - this.cpuUpThreshold) / this.cpuUpThreshold * this.currentInstances),\n        this.maxInstances - this.currentInstances\n      );\n      this.currentInstances += Math.max(scaleBy, 1);\n      this.lastScaleTime = now;\n      return { action: 'scale-up', instances: this.currentInstances, reason: `CPU ${avgCpu.toFixed(0)}% > ${this.cpuUpThreshold}%, adding ${Math.max(scaleBy, 1)} instance(s)` };\n    }\n\n    const allLow = recent.every(m => m.cpuPercent < this.cpuDownThreshold && m.memoryPercent < 60);\n    if (allLow && avgCpu < this.cpuDownThreshold && this.currentInstances > this.minInstances) {\n      const removeBy = Math.min(\n        Math.ceil((this.cpuDownThreshold - avgCpu) / this.cpuDownThreshold * this.currentInstances),\n        this.currentInstances - this.minInstances\n      );\n      this.currentInstances -= Math.max(removeBy, 1);\n      this.lastScaleTime = now;\n      return { action: 'scale-down', instances: this.currentInstances, reason: `CPU ${avgCpu.toFixed(0)}% < ${this.cpuDownThreshold}%, removing ${Math.max(removeBy, 1)} instance(s)` };\n    }\n\n    return { action: 'none', instances: this.currentInstances, reason: `Stable (CPU=${avgCpu.toFixed(0)}%)` };\n  }\n\n  simulateLoadPattern(loadReadings: number[]): { instanceCount: number; actions: string[] }[] {\n    const history: { instanceCount: number; actions: string[] }[] = [];\n    for (const cpu of loadReadings) {\n      this.recordMetrics(cpu, cpu * 0.7, cpu > 80 ? 100 : 10);\n      const result = this.evaluate();\n      history.push({ instanceCount: this.currentInstances, actions: [result.action, result.reason] });\n    }\n    return history;\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst scaler = new HorizontalScaler(2, 20, 70, 30, 60000, 4);\nconst loadPattern = [30, 40, 50, 65, 75, 85, 90, 85, 80, 50, 35, 25];\nconst simHistory = scaler.simulateLoadPattern(loadPattern);\nconsole.log('Auto-scaling simulation:');\nsimHistory.forEach((h, i) => console.log(`  Step ${i}: ${h.instanceCount} instances — ${h.actions[1]}`));\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-throughput-calculator-littles-law",
                  children: "TypeScript: Throughput Calculator (Little's Law)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["This class applies Little's Law (", (0,jsx_runtime.jsx)(_components.code, {
                    children: "L = λW"
                  }), ") to compute concurrency, queue length, and optimal server count for a given throughput target."]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class ThroughputCalculator {\n  constructor(\n    private avgLatencyMs: number,\n    private targetQps: number,\n    private serverCapacity: number = 500\n  ) {}\n\n  /** L = λ * W: concurrency = QPS * avgLatency / 1000 */\n  requiredConcurrency(): number {\n    return Math.ceil(this.targetQps * (this.avgLatencyMs / 1000));\n  }\n\n  /** Minimum servers needed given per-server capacity */\n  minServers(): number {\n    return Math.ceil(this.targetQps / this.serverCapacity);\n  }\n\n  /** Queue length using M/M/c formula (simplified Erlang-C) */\n  queueDepth(serverCount: number): { utilization: number; queueLength: number; responseTimeMs: number } {\n    const serviceRate = 1000 / this.avgLatencyMs;\n    const totalServiceRate = serviceRate * serverCount;\n    const utilization = this.targetQps / totalServiceRate;\n    if (utilization >= 1) {\n      return { utilization: 1, queueLength: Infinity, responseTimeMs: Infinity };\n    }\n    const queueLength = (utilization * utilization) / (1 - utilization) * serverCount;\n    const waitTimeMs = (queueLength / (serverCount * serviceRate)) * 1000;\n    return {\n      utilization: Math.round(utilization * 100),\n      queueLength: Math.round(queueLength),\n      responseTimeMs: Math.round(waitTimeMs + this.avgLatencyMs),\n    };\n  }\n\n  /** Optimal server count to keep utilization below target */\n  optimalServers(maxUtilization: number = 0.7): number {\n    let servers = this.minServers();\n    while (this.targetQps / (servers * this.serverCapacity) > maxUtilization) {\n      servers++;\n    }\n    return servers;\n  }\n\n  /** Throughput achievable for a given concurrency limit */\n  maxThroughput(concurrencyLimit: number): number {\n    return Math.floor(concurrencyLimit / (this.avgLatencyMs / 1000));\n  }\n\n  static calculate(avgLatencyMs: number, qps: number, serverCount: number): Record<string, number | string> {\n    const calc = new ThroughputCalculator(avgLatencyMs, qps, 500);\n    return {\n      requiredConcurrency: calc.requiredConcurrency(),\n      minServers: calc.minServers(),\n      utilization: `${calc.queueDepth(serverCount).utilization}%`,\n      queueDepth: calc.queueDepth(serverCount).queueLength,\n      responseTimeMs: calc.queueDepth(serverCount).responseTimeMs,\n      optimalServers: calc.optimalServers(),\n      maxThroughputAt100Concurrency: calc.maxThroughput(100),\n    };\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst metrics = ThroughputCalculator.calculate(50, 10000, 20);\nconsole.log('=== Throughput Analysis ===');\nObject.entries(metrics).forEach(([k, v]) => console.log(`  ${k}: ${v}`));\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "load-balancing-algorithms-comparison",
                  children: "Load Balancing Algorithms Comparison"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TD\n    classDef algo fill:#4a90d9,color:#fff,stroke:#2c5f8a,stroke-width:2px\n    classDef metric fill:#7ed321,color:#fff,stroke:#4a8c14,stroke-width:2px\n    classDef warning fill:#f5a623,color:#fff,stroke:#c47f12,stroke-width:2px\n    classDef label fill:#eee,color:#333,stroke:#999,stroke-width:1px\n\n    subgraph LB_Algorithms\n        direction TB\n        ALGO_TITLE[Load Balancing Algorithms]:::label\n\n        subgraph Simple_Algorithms\n            RR[Round Robin]\n            WR[Weighted Round Robin]\n            RANDOM[Random]\n        end\n\n        subgraph Stateful_Algorithms\n            LC[Least Connections]\n            LRT[Least Response Time]\n        end\n\n        subgraph Hashing_Algorithms\n            IPH[IP Hash]\n            CH[Consistent Hashing]\n        end\n\n        RR -.->|\"Simple, deterministic<br/>Ignores load\"| RR_METRIC[\"Best: Homogeneous servers<br/>Identical request cost\"]:::metric\n        WR -.->|\"Heterogeneous weights<br/>Static only\"| WR_METRIC[\"Best: Different server capacities<br/>Known request mix\"]:::metric\n        RANDOM -.->|\"Stateless, uniform<br/>High variance\"| RANDOM_METRIC[\"Best: Large pools<br/>No connection tracking\"]:::metric\n        LC -.->|\"Adapts to load<br/>Stateful\"| LC_METRIC[\"Best: Variable request duration<br/>DB connection pools\"]:::metric\n        LRT -.->|\"Performance-aware<br/>Oscillation risk\"| LRT_METRIC[\"Best: Degrading hardware<br/>Monitoring in place\"]:::metric\n        IPH -.->|\"Sticky by IP<br/>Remapping problem\"| IPH_METRIC[\"Best: Simple session affinity<br/>Small stable pools\"]:::metric\n        CH -.->|\"Minimal remapping<br/>Complex\"| CH_METRIC[\"Best: Distributed caching<br/>Auto-scaling pools\"]:::metric\n    end\n\n    subgraph Selection_Matrix\n        COND1[\"Read-heavy / Caching?\"] -->|Yes| CH_REC[\"Use Consistent Hashing\"]:::algo\n        COND1 -->|No| COND2[\"Variable request duration?\"]\n        COND2 -->|Yes| LC_REC[\"Use Least Connections\"]:::algo\n        COND2 -->|No| COND3[\"Heterogeneous servers?\"]\n        COND3 -->|Yes| WR_REC[\"Use Weighted Round Robin\"]:::algo\n        COND3 -->|No| RR_REC[\"Use Round Robin\"]:::algo\n    end\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
                        children: "Horizontal scaling dominates internet systems"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use stateless app servers behind an L7 load balancer; externalize session state to Redis"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "L4 for speed, L7 for intelligence"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use L4 (NLB) for database and non-HTTP traffic; use L7 (ALB) for content-based routing"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Match algorithm to workload"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Round-robin for homogeneous servers; least-connections for variable request duration; consistent hashing for caches"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "DNS is not a load balancer"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "DNS round-robin lacks health awareness; use GeoDNS for regional routing, not per-request distribution"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Cooldown prevents scaling flapping"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Set scale-up cooldown to 60-120s (instance warmup time); scale-down cooldown to 300s+"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Sticky sessions are an anti-pattern"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Externalize session state to a shared store (Redis Cluster) to achieve true horizontal scaling"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Predictive scaling beats reactive"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "For predictable patterns (Black Friday, daily peaks), pre-provision capacity using ML forecasts"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "case-study",
                  children: "Case Study"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Scaling Discord's Voice and Chat Platform."
                  }), " Discord grew from 10M to 150M MAU over three years, requiring a complete re-architecting of their load-balancing and scaling infrastructure. The original monolithic Python backend behind a single HAProxy instance could not handle the 5x increase in peak concurrent voice users during COVID-19. Discord migrated to a three-tier architecture: Cloudflare DNS with Geo-steering for regional routing, NGINX L7 load balancers per region for HTTP API traffic (path-based routing to user-service, guild-service, and message-service), and a custom consistent-hashing layer for WebSocket connections to ensure players stayed connected to the same voice server during a session."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Key Implementation Details."
                  }), " The team implemented least-connections load balancing for API servers (since request processing time varied from 5ms for simple lookups to 500ms for message search) and consistent hashing with 150 virtual nodes per physical node for cache and database sharding. Auto-scaling used a hybrid approach: predictive scaling (trained on weekly patterns showing 3x traffic spikes on weekend evenings) plus reactive scaling with CPU > 65% threshold and 90-second cooldown to match instance warmup time. During a major outage where us-east-1 lost power for 4 hours, the active-passive GSLB configuration with DNS TTL of 60 seconds achieved full failover within 3 minutes, with only 0.01% of active voice calls dropped."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Business Impact."
                  }), " The redesigned load-balancing layer handled 12x the original traffic at 40% lower cost per user (due to better auto-scaling efficiency and reduced over-provisioning). Discord's p99 API latency dropped from 340ms to 95ms, and voice connection success rate improved from 99.2% to 99.99%. The architecture scaled to support 8M concurrent voice users during peak gaming events without degradation, proving that layered load balancing with the right algorithm selection is the foundation of any internet-scale system."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "chapter-quiz-2",
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
                        children: "What is the primary advantage of L7 load balancing over L4?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Lower latency"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Content-aware routing"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Simpler configuration"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Works with non-HTTP protocols"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Which algorithm minimizes key remapping when servers join or leave?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Round Robin"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Least Connections"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Consistent Hashing"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Random"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "3"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What problem do sticky sessions cause in horizontally scaled systems?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Increased security risk"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Higher memory usage"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Server failure loses session"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Slower DNS resolution"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "4"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What is the purpose of cooldown in auto-scaling?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Reduce cloud costs"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Prevent scaling flapping"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Improve CPU utilization"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Speed up instance boot"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Active-passive GSLB vs active-active: what is the primary trade-off?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Cost vs complexity"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Simplicity vs capacity utilization"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Speed vs reliability"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "DNS vs anycast"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Vertical scaling adds resources to one machine; horizontal scaling adds more machines. Horizontal is the dominant pattern for internet-scale systems."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "L4 load balancing operates on TCP/UDP (fast, protocol-agnostic); L7 operates on HTTP/HTTPS (slow, content-aware)."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Seven load-balancing algorithms exist: Round Robin, Weighted Round Robin, Least Connections, Least Response Time, IP Hash, Consistent Hash, and Random. Choose based on request-cost variability and server-pool dynamics."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "DNS load balancing (round-robin, weighted, geographic) provides simple cross-region distribution but is limited by caching and slow propagation."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "GSLB operates at the cross-region level using active-active, active-passive, or anycast patterns."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Active health checks probe periodically; passive health checks monitor live traffic. Most systems use both."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Reactive auto-scaling uses immediate metrics; predictive auto-scaling uses ML-based forecasts. Cooldown prevents flapping."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Sticky sessions are an anti-pattern. Externalize session state to Redis or similar."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Consistent hashing minimizes remapping when the server pool changes, making it essential for distributed caching."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "exercises",
                  children: "Exercises"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Review Questions — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "review-questions-4-5",
                    children: "Review Questions (4-5)"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Explain why horizontal scaling is generally preferred over vertical scaling for internet systems, and describe one scenario where vertical scaling is the better choice.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Horizontal scaling provides near-linear scalability, fault isolation, and zero-downtime deployments using commodity hardware. Vertical scaling is better for legacy applications that cannot be partitioned, stateful systems under ~100K QPS, or when licensing costs scale per-core."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["What is the difference between L4 and L7 load balancing? Describe a specific use case where L4 is required.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " L4 routes on IP/port/protocol (fast, kernel-level); L7 routes on HTTP headers/cookies/URL (slow, content-aware). L4 is required for database traffic (MySQL, PostgreSQL) where the protocol is not HTTP and raw throughput is critical."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Compare active-active and active-passive GSLB configurations. What is the trade-off between them?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Active-active serves traffic from all regions (higher capacity, lower latency) but requires cross-region replication. Active-passive has one idle region (simpler, cheaper) but wastes capacity and has slower failover (cold caches)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Explain the \"thundering herd\" problem that can occur with health checks during a failover event and how to prevent it.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " When a server fails, all health checkers simultaneously detect it and all clients simultaneously reconnect to remaining servers, spiking their load. Prevention: use exponential backoff in health checks, enable connection draining, and add jitter to retry intervals."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["How does consistent hashing solve the remapping problem? What role do virtual nodes play?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Consistent hashing arranges servers and keys on a hash ring; only 1/N of keys remap when a server changes. Virtual nodes represent each physical server at multiple ring positions, smoothing load distribution and preventing hot partitions."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Application Problems — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "application-problems-3-4",
                    children: "Application Problems (3-4)"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["A photo-sharing app has 500M users. Each user uploads 1 photo/day (avg 3 MB). Currently uses 50 application servers (each handles 500 RPS). Compute the current load and determine how many additional servers are needed if traffic doubles.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Uploads/sec = 500M / 86400 ≈ 5,787 QPS. Current capacity = 50 × 500 = 25,000 RPS. At 2x traffic = 11,574 QPS, need 11,574 / 500 ≈ 24 servers (round up). Additional servers needed = 24 - 50 = -26 (already have excess capacity for uploads; but assume reads are 100x writes = 578,700 QPS, requiring 578,700/500 ≈ 1,158 servers)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Design a health check strategy for a microservice with 5 replicas. The service has a startup warmup time of 30 seconds and occasional GC pauses of 2 seconds. Choose active vs passive, thresholds, and interval.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Active health checks every 10s with HTTP /health endpoint. Failure threshold: 3 consecutive failures (mark unhealthy after 30s). Recovery threshold: 2 consecutive successes (mark healthy after 20s). Startup grace period: 45s (ignore health checks during warmup). GC pauses < 3s are tolerated; longer pauses should fail the health check."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["A WebSocket server farm handles 100K persistent connections. The connections are mostly idle but occasionally burst-heavy. Propose a load-balancing algorithm and justify why Least Connections is (or is not) appropriate.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Least Connections is appropriate because connections are long-lived but burst behavior is unpredictable. The algorithm naturally distributes new connections to servers with fewer active connections, preventing any single server from accumulating too many persistent connections. IP Hash could also work for session affinity but risks uneven distribution in NAT environments."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Configure an NGINX reverse proxy that routes ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "/api/users/*"
                        }), " to a user-service pool, ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "/api/search/*"
                        }), " to a search-service pool, and ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "/static/*"
                        }), " directly from disk. Use least_conn for user-service and IP_hash for search-service. Write the config.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " upstream user_service { least_conn; server 10.0.1.1:8080; server 10.0.1.2:8080; } upstream search_service { ip_hash; server 10.0.2.1:8080; server 10.0.2.2:8080; } server { listen 80; location /api/users/ { proxy_pass http://user_service; } location /api/search/ { proxy_pass http://search_service; } location /static/ { root /var/www/static; expires 30d; } }"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Challenge Problem — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "challenge-problem-1",
                    children: "Challenge Problem (1)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "You are designing a multi-region gaming platform that hosts real-time multiplayer matches. 50M DAU, each match lasts 10-30 minutes with 10-100 players. Players must be grouped by latency (all players in a match should have <100ms to the server). The platform must handle peak traffic (weekend evenings) at 5x average."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Solution Outline:"
                    })
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Three-tier LB:"
                      }), " DNS: GeoDNS routes to nearest region. Regional: L7 ALB with least-connections to matchmaking service. Per-match: consistent hashing by match_id for WebSocket persistence."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "State management:"
                      }), " Use Redis Cluster for match state with leader-follower replication. Match servers are stateless and read/write to Redis. On failure, a new server picks up the match state from Redis."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Failover:"
                      }), " Active-passive GSLB. During us-east-1 outage, DNS failover to eu-west-1 within 60s (TTL). In-flight matches are lost (game state is in-memory); acceptable given short match duration. Reconnection logic directs players to new region."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Auto-scaling:"
                      }), " Target CPU = 60%, scale-up cooldown = 90s (instance warmup), scale-down cooldown = 300s (avoid flapping). Scale-up by doubling (fast reaction to flash crowds), scale-down by 1/3 at a time."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Bottleneck:"
                      }), " At 10x, the matchmaking service fails first (O(n²) comparisons for player grouping). Mitigation: shard matchmaking by region+skill tier, use Redis sorted sets for latency-based grouping."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
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