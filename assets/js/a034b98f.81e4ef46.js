"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[37412],{

/***/ 14165
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_09_distributed_coordination_md_a03_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-09-distributed-coordination-md-a03.json
const site_docs_courses_system_design_09_distributed_coordination_md_a03_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/09-distributed-coordination","title":"Chapter 9: Distributed Coordination and Service Discovery","description":"Previous 10 Lld Solid Oop","source":"@site/docs/courses/system-design/09-distributed-coordination.md","sourceDirName":"courses/system-design","slug":"/system-design/09-distributed-coordination","permalink":"/ai-engineering-journey/system-design/09-distributed-coordination","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-distributed-coordination","slug":"/system-design/09-distributed-coordination","title":"Chapter 9: Distributed Coordination and Service Discovery","sidebar_label":"Chapter 9: Distributed Coordination and Service Discovery","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8: Microservices and API Design","permalink":"/ai-engineering-journey/system-design/08-microservices-apis"},"next":{"title":"Chapter 10: Low-Level Design: SOLID Principles and OOP","permalink":"/ai-engineering-journey/system-design/10-lld-solid-oop"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/09-distributed-coordination.md


const frontMatter = {
	id: '09-distributed-coordination',
	slug: '/system-design/09-distributed-coordination',
	title: 'Chapter 9: Distributed Coordination and Service Discovery',
	sidebar_label: 'Chapter 9: Distributed Coordination and Service Discovery',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Distributed Coordination and Service Discovery';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Service Registry Pattern",
  "id": "service-registry-pattern",
  "level": 3
}, {
  "value": "Client-Side vs Server-Side Discovery",
  "id": "client-side-vs-server-side-discovery",
  "level": 3
}, {
  "value": "Client-Side Discovery",
  "id": "client-side-discovery",
  "level": 4
}, {
  "value": "Server-Side Discovery",
  "id": "server-side-discovery",
  "level": 4
}, {
  "value": "ZooKeeper",
  "id": "zookeeper",
  "level": 3
}, {
  "value": "Zab Protocol",
  "id": "zab-protocol",
  "level": 4
}, {
  "value": "Znodes",
  "id": "znodes",
  "level": 4
}, {
  "value": "Watches",
  "id": "watches",
  "level": 4
}, {
  "value": "Leader Election Recipe",
  "id": "leader-election-recipe",
  "level": 4
}, {
  "value": "Etcd",
  "id": "etcd",
  "level": 3
}, {
  "value": "Leases",
  "id": "leases",
  "level": 4
}, {
  "value": "Watch API",
  "id": "watch-api",
  "level": 4
}, {
  "value": "Raft Consensus Algorithm",
  "id": "raft-consensus-algorithm",
  "level": 3
}, {
  "value": "Server States",
  "id": "server-states",
  "level": 4
}, {
  "value": "Leader Election",
  "id": "leader-election",
  "level": 4
}, {
  "value": "Log Replication",
  "id": "log-replication",
  "level": 4
}, {
  "value": "Safety Properties",
  "id": "safety-properties",
  "level": 4
}, {
  "value": "Paxos vs Raft vs Zab",
  "id": "paxos-vs-raft-vs-zab",
  "level": 3
}, {
  "value": "Distributed Locks",
  "id": "distributed-locks",
  "level": 3
}, {
  "value": "Implementation with ZooKeeper",
  "id": "implementation-with-zookeeper",
  "level": 4
}, {
  "value": "Fencing Tokens",
  "id": "fencing-tokens",
  "level": 4
}, {
  "value": "Heartbeats and Failure Detection",
  "id": "heartbeats-and-failure-detection",
  "level": 3
}, {
  "value": "Phi-Accrual Failure Detector",
  "id": "phi-accrual-failure-detector",
  "level": 4
}, {
  "value": "SWIM Membership Protocol",
  "id": "swim-membership-protocol",
  "level": 3
}, {
  "value": "Coordination-Free Systems",
  "id": "coordination-free-systems",
  "level": 3
}, {
  "value": "When Coordination Can Be Avoided",
  "id": "when-coordination-can-be-avoided",
  "level": 4
}, {
  "value": "Design Principles",
  "id": "design-principles",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Kubernetes and Etcd",
  "id": "example-1-kubernetes-and-etcd",
  "level": 3
}, {
  "value": "Example 2: Apache Kafka and KRaft",
  "id": "example-2-apache-kafka-and-kraft",
  "level": 3
}, {
  "value": "Example 3: HashiCorp Consul",
  "id": "example-3-hashicorp-consul",
  "level": 3
}, {
  "value": "Example 4: Consul Distributed Lock",
  "id": "example-4-consul-distributed-lock",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
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
  "value": "TypeScript: Raft Leader Election, Distributed Lock, and Service Registry",
  "id": "typescript-raft-leader-election-distributed-lock-and-service-registry",
  "level": 3
}, {
  "value": "Implementation: Distributed Coordination and Service Discovery",
  "id": "implementation-distributed-coordination-and-service-discovery",
  "level": 3
}, {
  "value": "TypeScript: DistributedLock, LeaderElection, and TwoPhaseCommit",
  "id": "typescript-distributedlock-leaderelection-and-twophasecommit",
  "level": 3
}, {
  "value": "Mermaid: ZooKeeper vs Etcd Consensus Architecture",
  "id": "mermaid-zookeeper-vs-etcd-consensus-architecture",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
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
    h4: "h4",
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
        id: "chapter-9-distributed-coordination-and-service-discovery",
        children: "Chapter 9: Distributed Coordination and Service Discovery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/08-microservices-apis",
          children: "08 Microservices Apis"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/10-lld-solid-oop",
          children: "10 Lld Solid Oop"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement service registry patterns and contrast client-side vs server-side service discovery for different deployment topologies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design ZooKeeper-based coordination using the Zab protocol, znode hierarchies, watches, and the leader election recipe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the Raft consensus algorithm across leader election, log replication, and safety properties, with detailed crash recovery analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Paxos, Raft, and Zab consensus protocols on the dimensions of understandability, performance, and safety guarantees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement distributed locks with fencing tokens and evaluate their correctness in the presence of process pauses and clock skew"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Phi-accrual failure detectors and SWIM membership protocols for robust failure detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design coordination-free systems that avoid consensus entirely using CRDTs and idempotent operations"
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
        href: "../../assets/images/lessons/system-design/09-distributed-coordination/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/09-distributed-coordination/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/09-distributed-coordination/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/09-distributed-coordination/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/09-distributed-coordination/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/09-distributed-coordination/visual-explanation.png",
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
            children: "Distributed coordination, ZooKeeper, etcd, leader election, locking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus, distributed locks, service discovery, configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coordination Services"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZooKeeper, etcd, Consul ? architecture and guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leader Election"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft-based election, fencing, lease mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed Locking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutex, read/write locks, lock reentrancy, deadlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka (ZooKeeper), Kubernetes (etcd), HashiCorp stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/09-distributed-coordination.png",
        alt: "Distributed Coordination Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-registry-pattern",
      children: "Service Registry Pattern"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nA service registry is a database of available service instances and their network locations. Services register themselves on startup and deregister on shutdown. Clients or routers query the registry to find service endpoints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Service Instance A (10.0.0.1:8080) -> Register at Registry\nService Instance B (10.0.0.2:8080) -> Register at Registry\nService Instance C (10.0.0.3:8080) -> Register at Registry\nClient -> \"Find user-service instances\" -> Registry\nRegistry -> [10.0.0.1:8080, 10.0.0.2:8080, 10.0.0.3:8080]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ZooKeeper / Etcd / Consul:"
        }), " Dedicated, highly-available coordination services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eureka (Netflix):"
        }), " AP-oriented registry (prioritizes availability over consistency)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes Services:"
        }), " DNS-based registry built into the platform"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "client-side-vs-server-side-discovery",
      children: "Client-Side vs Server-Side Discovery"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "client-side-discovery",
      children: "Client-Side Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The client queries the service registry directly and selects an instance using a load-balancing algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client -> queries Service Registry -> gets [10.0.0.1:8080, 10.0.0.2:8080]\nClient -> round-robin -> selects 10.0.0.1:8080\nClient -> HTTP -> 10.0.0.1:8080\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Simpler deployment (no extra proxy). Client can implement sophisticated load balancing (weighted, least connections, zone-aware)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Client must implement discovery logic (typically via a library). Every language/framework needs a library. Tight coupling between client and registry."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Netflix Eureka + Ribbon"
      }), " is the classic client-side discovery implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "server-side-discovery",
      children: "Server-Side Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The client sends requests to a load balancer (or API gateway), which queries the registry and routes to a healthy instance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client -> API Gateway -> queries Registry -> gets [10.0.0.1:8080]\nClient -> API Gateway -> forwards to 10.0.0.1:8080\nClient <- response\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Client is simple (just makes HTTP calls). Discovery logic is in the infrastructure. No client library dependency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Load balancer is a deployment and scaling concern. Must be highly available. Adds a network hop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Services"
      }), " use server-side discovery via kube-proxy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zookeeper",
      children: "ZooKeeper"
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
      children: "Apache ZooKeeper is a centralized coordination service for distributed systems. It provides a hierarchical namespace (znodes), watches, and a consensus protocol (Zab)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zab-protocol",
      children: "Zab Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZooKeeper Atomic Broadcast (Zab) is ZooKeeper's crash-recovery consensus protocol. It ensures that updates are applied in the same order across all servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zab has three phases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Discovery:"
          }), " A newly elected leader finds the latest epoch (term) and the latest accepted proposals from a quorum of followers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Synchronization:"
          }), " The leader ensures all followers have the same state by transmitting any missing proposals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Broadcast:"
          }), " The leader processes client requests, assigns a monotonically increasing ZooKeeper transaction ID (zxid), and broadcasts them to followers. A proposal is committed when a majority acknowledges it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Leader -> propose(zxid, data) -> Follower A, Follower B, Follower C\nFollower A -> ack(leader)\nFollower B -> ack(leader)\nLeader: majority (2/3) -> commit\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zab's key insight: it guarantees ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary order"
      }), " -- if a leader commits proposal p with zxid z, then any future leader must have all proposals with zxid < z committed before it can accept new proposals."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "znodes",
      children: "Znodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Znodes are ZooKeeper's data nodes, organized in a hierarchical tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/zookeeper\n  /services\n    /user-service\n      /instance-abc (data: \"10.0.0.1:8080\")\n      /instance-def (data: \"10.0.0.2:8080\")\n    /order-service\n      /instance-ghi (data: \"10.0.0.3:8080\")\n  /config\n    /database-url (data: \"postgres://...\")\n    /feature-flags\n      /new-ui (data: \"true\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Znode types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistent:"
        }), " Exists until explicitly deleted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ephemeral:"
        }), " Deleted automatically when the session that created it ends (client disconnect)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequential:"
        }), " Appended with a monotonically increasing sequence number (e.g., lock-0000000042)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container:"
        }), " (ZooKeeper 3.5+) Deleted when all children are removed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "watches",
      children: "Watches"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A watch is a one-time notification trigger. A client sets a watch on a znode; when that znode changes (data update, child added/removed, deletion), the server sends a notification."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client A: getData(\"/services/user-service\", watch=true)\n... time passes ...\nClient B: setData(\"/services/user-service\", \"10.0.0.5:8080\")\nServer -> notification to Client A: \"/services/user-service data changed\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-shot: after triggering, the watch must be re-registered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordered: notifications are delivered before the triggering operation's result"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best-effort: clients may miss a change if they reconnect between setting and triggering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "leader-election-recipe",
      children: "Leader Election Recipe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most common ZooKeeper recipe for leader election:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def elect_leader():\n    candidate_path = zk.create(\"/election/node-\", ephemeral=True, sequential=True)\n    sequence = int(candidate_path.split(\"-\")[-1])\n    children = zk.get_children(\"/election\")\n    sorted_children = sorted(children)\n    if sequence == min(sequences):\n        return {\"role\": \"leader\"}\n    else:\n        predecessor = sorted_children[sequences.index(sequence) - 1]\n        zk.get_data(f\"/election/{predecessor}\", watch=True)\n        return {\"role\": \"follower\", \"watching\": predecessor}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the leader fails, its ephemeral znode is deleted, triggering the next in line to become leader. The sequential chaining pattern limits notifications to one candidate, avoiding a herd effect."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "etcd",
      children: "Etcd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Etcd is a strongly consistent, distributed key-value store that uses the Raft consensus protocol. It is the primary coordination store in Kubernetes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "leases",
      children: "Leases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lease is a time-bound contract. The holder of a lease is guaranteed that its key will not expire before the lease expires. Leases are refreshed (kept alive) by periodic heartbeats."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create a lease with 10-second TTL\netcdctl lease grant 10\n# lease 694d71e5c8a7b3f0 granted with TTL(10s)\n\n# Put a key with the lease (key dies when lease expires)\netcdctl put --lease=694d71e5c8a7b3f0 /my-key \"my-value\"\n\n# Keep the lease alive\netcdctl lease keep-alive 694d71e5c8a7b3f0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "watch-api",
      children: "Watch API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Etcd provides a watch API for monitoring key changes. Watches are long-lived (not one-shot like ZooKeeper)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import etcd3\nclient = etcd3.client()\nwatch = client.add_watch_callback('/services/', callback=handle_service_change)\nfor event in watch:\n    print(f\"Key: {event.key}, Value: {event.value}, Type: {event.type}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raft-consensus-algorithm",
      children: "Raft Consensus Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Raft is a consensus algorithm designed for understandability. It breaks consensus into three sub-problems: leader election, log replication, and safety."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "server-states",
      children: "Server States"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each Raft server is in one of three states:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Leader: Handles all client requests, manages log replication\nFollower: Passive, responds to leader requests\nCandidate: Intermediate state during leader election\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State transitions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Follower -> (timeout, starts election) -> Candidate\nCandidate -> (receives majority votes) -> Leader\nLeader -> (discovers higher term) -> Follower\nCandidate -> (discovers higher term) -> Follower\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "leader-election",
      children: "Leader Election"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Election process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A follower starts an election when its election timeout expires (150-300ms randomized)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The follower increments its term, becomes a candidate, votes for itself, and sends RequestVote RPCs to all other servers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the candidate receives votes from a majority (itself + N/2 other servers), it becomes leader."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the candidate receives a message from a leader with a higher or equal term, it reverts to follower."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no majority is reached within the timeout, a new election begins with a higher term."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Term 3:\n  Server 1: election timeout -> candidate (term=3)\n           -> votes for self\n           -> RequestVote to Server 2, Server 3\n  Server 2: grants vote (hasn't voted in term 3)\n  Server 3: grants vote (hasn't voted in term 3)\n  Server 1: majority (3/3) -> becomes leader\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety of elections:"
      }), " Each server grants at most one vote per term. A server only grants its vote to a candidate whose log is at least as up-to-date as its own."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "log-replication",
      children: "Log Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once a leader is elected, it handles all client requests:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Append entry:"
        }), " Client sends a command to the leader. The leader appends the command to its log."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replicate:"
        }), " The leader sends AppendEntries RPCs to all followers, containing the new log entry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acknowledge:"
        }), " Followers append the entry to their logs and acknowledge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit:"
        }), " Once the leader receives acknowledgments from a majority, it commits the entry (applies it to the state machine)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond:"
        }), " The leader responds to the client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client -> set(x=5) -> Leader\nLeader: append entry {term=3, index=5, cmd=set(x=5)} to log\nLeader -> AppendEntries -> Follower A\nLeader -> AppendEntries -> Follower B\nFollower A -> ack\nFollower B -> ack\nLeader: majority -> commit index 5\nLeader: apply set(x=5) -> client: OK\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Log structure:"
      }), " Each log entry has a term number and an index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Log on Leader:\n  Index:       1          2          3          4          5\n  Term:        1          1          2          2          3\n  Command:     set(x=1)   set(y=2)   set(x=3)   del(y)     set(x=5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "safety-properties",
      children: "Safety Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Raft guarantees these safety properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Election safety:"
        }), " At most one leader can be elected in a given term."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leader append-only:"
        }), " A leader never overwrites or deletes entries in its log; it only appends."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log matching:"
        }), " If two logs contain an entry with the same index and term, the logs are identical in all preceding entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leader completeness:"
        }), " If a log entry is committed in a given term, then that entry will be present in the logs of all future leaders."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State machine safety:"
        }), " If a server has applied a log entry at a given index to its state machine, no other server will apply a different entry at the same index."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Log Matching Proof:"
      }), " When a leader sends AppendEntries for a new entry, it includes the term and index of the previous entry. If the follower does not have a matching entry at that position, it rejects the RPC. The leader then decrements the nextIndex for that follower and retries. This ensures logs converge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paxos-vs-raft-vs-zab",
      children: "Paxos vs Raft vs Zab"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Paxos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raft"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zab"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1998 (published)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2008 (ZooKeeper)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leader-elected, log-replicated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leader-based atomic broadcast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Understandability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notoriously difficult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designed for understandability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leader election"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguished proposer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit with timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated into discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (ballot numbers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit term + index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zxid (epoch + counter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic reconfiguration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chubby, Spanner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Etcd, Consul, TiKV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZooKeeper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity of implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-defined, many impls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to choose each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Raft"
        }), " for new systems (simplicity, good documentation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zab"
        }), " when ZooKeeper is in your infrastructure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paxos"
        }), " when building on proven implementations (not from scratch)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "distributed-locks",
      children: "Distributed Locks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed locks prevent multiple processes from simultaneously accessing a shared resource."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementation-with-zookeeper",
      children: "Implementation with ZooKeeper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The lock is represented by an ephemeral sequential znode. The process with the lowest sequence number holds the lock."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def acquire_lock(lock_path):\n    lock_node = zk.create(f\"{lock_path}/lock-\", b\"\", ephemeral=True, sequential=True)\n    lock_id = int(lock_node.split(\"-\")[-1])\n    while True:\n        children = zk.get_children(lock_path)\n        sorted_locks = sorted(children)\n        if lock_id == min(sorted_locks):\n            return\n        predecessor = f\"{lock_path}/{sorted_locks[sorted_locks.index(lock_node) - 1]}\"\n        zk.get_data(predecessor, watch=True)\n        wait_for_watch()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fencing-tokens",
      children: "Fencing Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A fencing token monotonically increases with each lock grant. The protected resource checks the token to ensure requests are from valid lock holders."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process A acquires lock (token=42)\nProcess A pauses (GC pause, 5 seconds)\nProcess A's lock expires\nProcess B acquires lock (token=43)\nProcess B updates resource (token=43 -> valid)\nProcess A resumes, tries to update resource (token=42 -> stale)\nResource rejects because 42 < 43\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def acquire_lock(client_id):\n    lock_node = create_ephemeral_sequential(\"/locks/resource-\", client_id)\n    success, token = wait_for_lock(lock_node)\n    return {\"locked\": True, \"fencing_token\": token}\n\ndef update_resource(key, value, fencing_token):\n    current_token = get_current_lock_token(key)\n    if fencing_token >= current_token:\n        set_data(key, value, fencing_token)\n        return OK\n    else:\n        return STALE_LOCK_ERROR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heartbeats-and-failure-detection",
      children: "Heartbeats and Failure Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phi-accrual-failure-detector",
      children: "Phi-Accrual Failure Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Phi-accrual failure detector, used in Cassandra and Akka, computes a suspicion level (phi) rather than a binary alive/dead judgment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track inter-arrival times of heartbeats."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain a sliding window of recent inter-arrival times."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the probability that the current gap would occur given the observed distribution."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Convert probability to phi: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phi = -log10(probability)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Heartbeat history (ms): [100, 150, 90, 110, 130, 95, 105, 120]\nCurrent gap: 500ms since last heartbeat\nProbability of gap >= 500ms: ~0.001\nphi = -log10(0.001) = 3.0\n\nThreshold:\n  phi < 1:   probably alive\n  phi < 3:   mildly suspicious\n  phi >= 3:  suspected dead\n  phi >= 10: confirmed dead\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages over fixed timeout:"
      }), " Adapts to network conditions. Continuous suspicion level. Lower false positives in high-latency environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "swim-membership-protocol",
      children: "SWIM Membership Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SWIM (Scalable Weakly-consistent Infection-style Process Group Membership Protocol) provides failure detection and membership dissemination."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Failure Detector:"
          }), " Each member picks a random target and sends a ping every T milliseconds. If the ping times out, indirect probes through k other members are attempted. If all probes fail, the target is marked as failed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dissemination:"
          }), " Membership updates are piggybacked on ping/pong messages and spread through gossip."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SWIM parameters:\n  T = 100ms (ping interval)\n  k = 3 (indirect probes)\n  timeout = 200ms (per probe)\n\nNode A at t=0: sends ping to random member B -> pong -> alive\nNode A at t=100ms: sends ping to random member C\n  -> no pong by t=300ms\n  -> sends indirect ping to D, E, F -> ask C\n  -> if any respond: C is alive\n  -> if all timeout: C is suspected failed -> gossip\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      }), " Each member sends O(1) messages per interval. Total: O(N * (1 + k)). This scales linearly with N."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coordination-free-systems",
      children: "Coordination-Free Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not every distributed problem requires consensus."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "when-coordination-can-be-avoided",
      children: "When Coordination Can Be Avoided"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-only workloads:"
        }), " Replicas serve reads without coordination if staleness is acceptable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotent operations:"
        }), " Same operation produces same result regardless of execution order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique key generation:"
        }), " Use UUIDs (no central coordinator) vs auto-increment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict-free data types:"
        }), " CRDTs converge without coordination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best-effort computations:"
        }), " Approximate counting, sketch algorithms, sampling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "design-principles",
      children: "Design Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotency:"
        }), " Operations that can be applied multiple times with the same result."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commutativity:"
        }), " Operations that commute do not need ordering guarantees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Associativity:"
        }), " Operations grouped in any order converge to the same result."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CRDT Counter (coordination-free):\n  Node 1: increment() -> local_count = 5\n  Node 2: increment() -> local_count = 3\n  Node 3: increment() -> local_count = 7\n  Any merge order: max(5,3) + max(3,7) + max(5,7) = 19\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-kubernetes-and-etcd",
      children: "Example 1: Kubernetes and Etcd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes uses Etcd as its backing store for all cluster state."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Etcd in Kubernetes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes State stored in Etcd:\n  /registry/pods/default/my-pod -> pod spec and status\n  /registry/services/default/my-service -> service spec\n  /registry/deployments/default/my-deployment -> deployment spec\n  /registry/configmaps/my-config -> configuration data\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Etcd leader election in Kubernetes:"
      }), " If the Etcd leader fails, the remaining nodes hold a Raft election. During the election (typically < 1 second), the Kubernetes API Server cannot write to Etcd."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes etcd cluster (3 nodes):\n  Node 1: Leader\n  Node 2: Follower\n  Node 3: Follower\n\n  Node 1 fails -> Node 2 and Node 3 detect election timeout\n  -> Node 2 becomes candidate (term=5)\n  -> Node 2 gets vote from Node 3\n  -> Node 2 becomes leader\n  -> Total downtime: ~300-500ms\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Etcd compaction:"
      }), " Kubernetes compacts Etcd's history to prevent unbounded growth. By default, Etcd retains 5000 revisions. Older revisions are compacted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-apache-kafka-and-kraft",
      children: "Example 2: Apache Kafka and KRaft"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka traditionally used ZooKeeper for metadata management. Starting with Kafka 2.8, ZooKeeper can be replaced with KRaft (Kafka Raft Metadata mode)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before (ZooKeeper-based):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kafka Broker -> ZooKeeper: broker registration, topic config, leader election\nZooKeeper -> maintains controller election, ISR management\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After (KRaft):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kafka Broker -> KRaft quorum (embedded Raft): metadata management\nNo ZooKeeper dependency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KRaft replaces ZooKeeper with:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata log:"
        }), " Stored in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__cluster_metadata"
        }), " topic. All metadata changes go through Raft."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controller quorum:"
        }), " Brokers form Raft quorum. Active leader manages metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata records:"
        }), " Partition assignments, broker registrations, configs, ACLs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "KRaft Cluster:\n  Controller 1 (leader): active metadata management\n  Controller 2 (voter): replicates metadata log\n  Controller 3 (voter): replicates metadata log\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      }), " Simpler operations (one fewer system), faster failover (sub-second), linear scalability to more partitions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-hashicorp-consul",
      children: "Example 3: HashiCorp Consul"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consul"
      }), " provides service discovery, health checking, and a distributed key-value store."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service registration in Consul:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "service {\n  name = \"web\"\n  port = 8080\n  check {\n    http     = \"http://localhost:8080/health\"\n    interval = \"10s\"\n    timeout  = \"5s\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service discovery via DNS:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "dig web.service.consul\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consul's architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consul servers:"
        }), " Run Raft consensus (cluster of 3 or 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consul clients:"
        }), " Run on each node, forward requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gossip protocol:"
        }), " Serf-based (SWIM-derived) for health dissemination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health checks:"
        }), " Performed by clients, results gossiped to servers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HashiCorp Nomad"
      }), " uses Consul for service discovery and cluster coordination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Nomad Job Spec -> Nomad Server -> Consul (service registration)\n                                -> Nomad Client -> runs workload\n                                -> Consul health check monitors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-consul-distributed-lock",
      children: "Example 4: Consul Distributed Lock"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def consul_lock(key, session_ttl=\"10s\"):\n    session_id = consul.session.create(behavior=\"delete\", ttl=session_ttl)\n    acquired = consul.kv.put(key=key, value=session_id, acquire=session_id)\n    if not acquired:\n        consul.session.destroy(session_id)\n        return None\n    def renew():\n        consul.session.renew(session_id)\n    return {\"session\": session_id, \"renew\": renew}\n\ndef consul_unlock(session_id):\n    consul.session.destroy(session_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This lock uses Consul's session mechanism: when the session expires (process crash or network partition), the key is automatically released."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Service Registry Pattern\"\n        S1[\"Service A<br/>10.0.0.1:8080\"] --> R[\"Service Registry<br/>(ZooKeeper/Etcd/Consul)\"]\n        S2[\"Service B<br/>10.0.0.2:8080\"] --> R\n        C[\"Client\"] -->|\"Discover\"| R\n        C -->|\"Route\"| S1\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Candidate\n    participant S2 as Server 2\n    participant S3 as Server 3\n    C->>C: Election timeout (term=3)\n    C->>C: Vote for self\n    C->>S2: RequestVote(term=3)\n    C->>S3: RequestVote(term=3)\n    S2-->>C: Vote granted\n    S3-->>C: Vote granted\n    C->>C: Majority reached -> Leader\n    Note over C: Begins sending heartbeats\n    C->>S2: AppendEntries(term=3, entries=[])\n    C->>S3: AppendEntries(term=3, entries=[])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
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
            children: "Core topic in Chapter 9: Distributed Coordination and Service Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
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
            children: "Essential concept from Chapter 9: Distributed Coordination and Service Discovery"
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
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements-driven decisions"
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
            children: "What protocol does ZooKeeper use for consensus?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Raft, B) Paxos, C) Zab (ZooKeeper Atomic Broadcast), D) Multi-Paxos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C) Zab (ZooKeeper Atomic Broadcast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In Raft, what triggers a leader election?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) The leader sends a heartbeat, B) A follower's election timeout expires, C) A client request fails, D) A log entry is committed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) A follower's election timeout expires (150-300ms randomized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the purpose of a fencing token in distributed locking?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) To identify the lock holder, B) To prevent stale lock holders from corrupting state, C) To encrypt lock data, D) To reduce lock acquisition latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) To prevent stale lock holders from corrupting shared state after GC pauses or network delays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does the Phi-accrual failure detector differ from a fixed timeout?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) It uses binary alive/dead judgment, B) It computes a continuous suspicion level based on heartbeat statistics, C) It is faster, D) It requires fewer heartbeats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) It computes a continuous suspicion level based on observed heartbeat inter-arrival time distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the herd effect in ZooKeeper leader election and how is it mitigated?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Too many clients connect at once; mitigated by connection pooling, B) All watchers fire simultaneously on leader failure; mitigated by sequential chaining, C) Followers crash under load; mitigated by more replicas, D) Leader processes too many requests; mitigated by partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) All watchers fire simultaneously on leader failure; mitigated by sequential chaining where each candidate watches only its predecessor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-raft-leader-election-distributed-lock-and-service-registry",
      children: "TypeScript: Raft Leader Election, Distributed Lock, and Service Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RaftNode {\n  private term = 0;\n  private votedFor: string | null = null;\n  private state: \"follower\" | \"candidate\" | \"leader\" = \"follower\";\n  private log: { term: number; command: string }[] = [];\n  private commitIndex = 0;\n  private lastApplied = 0;\n  private electionTimeout: number;\n\n  constructor(public id: string, private peers: RaftNode[]) {\n    this.electionTimeout = 150 + Math.random() * 150;\n  }\n\n  startElection(): void {\n    this.term++;\n    this.state = \"candidate\";\n    this.votedFor = this.id;\n    let votes = 1;\n    for (const peer of this.peers) {\n      if (peer.id === this.id) continue;\n      if (peer.requestVote(this.term, this.id)) votes++;\n    }\n    if (votes > this.peers.length / 2) {\n      this.state = \"leader\";\n    }\n  }\n\n  requestVote(term: number, candidateId: string): boolean {\n    if (term > this.term) { this.term = term; this.state = \"follower\"; this.votedFor = null; }\n    if (term === this.term && this.votedFor === null) {\n      this.votedFor = candidateId;\n      return true;\n    }\n    return false;\n  }\n\n  appendEntries(term: number, entries: { term: number; command: string }[]): boolean {\n    if (term >= this.term) {\n      this.term = term;\n      this.state = \"follower\";\n      this.log.push(...entries);\n      return true;\n    }\n    return false;\n  }\n\n  getState(): string { return this.state; }\n  getTerm(): number { return this.term; }\n  getLogLength(): number { return this.log.length; }\n}\n\nclass DistributedLock {\n  private locks = new Map<string, { owner: string; expiry: number; token: number }>();\n  private fencingTokenCounter = 0;\n\n  acquire(resource: string, owner: string, ttlMs: number): { success: boolean; token?: number } {\n    const now = Date.now();\n    const existing = this.locks.get(resource);\n    if (existing && existing.expiry > now && existing.owner !== owner) return { success: false };\n    const token = ++this.fencingTokenCounter;\n    this.locks.set(resource, { owner, expiry: now + ttlMs, token });\n    return { success: true, token };\n  }\n\n  release(resource: string, owner: string, token: number): boolean {\n    const lock = this.locks.get(resource);\n    if (!lock || lock.owner !== owner || lock.token !== token) return false;\n    this.locks.delete(resource);\n    return true;\n  }\n\n  isHeld(resource: string): boolean {\n    const lock = this.locks.get(resource);\n    return !!lock && lock.expiry > Date.now();\n  }\n}\n\nclass ServiceRegistry {\n  private services = new Map<string, { url: string; ttl: number; expiresAt: number }[]>();\n\n  register(name: string, url: string, ttlMs = 30000): void {\n    if (!this.services.has(name)) this.services.set(name, []);\n    this.services.get(name)!.push({ url, ttl: ttlMs, expiresAt: Date.now() + ttlMs });\n  }\n\n  discover(name: string): string[] {\n    const instances = this.services.get(name) ?? [];\n    const healthy = instances.filter(i => i.expiresAt > Date.now());\n    return healthy.map(i => i.url);\n  }\n\n  heartbeat(name: string, url: string): boolean {\n    const instances = this.services.get(name);\n    if (!instances) return false;\n    const found = instances.find(i => i.url === url);\n    if (!found) return false;\n    found.expiresAt = Date.now() + found.ttl;\n    return true;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-distributed-coordination-and-service-discovery",
      children: "Implementation: Distributed Coordination and Service Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DistributedLock { private locks = new Map<string, { owner: string; expiry: number; waiters: string[] }>();\n  acquire(lockName: string, owner: string, ttlMs = 30000): boolean {\n    const existing = this.locks.get(lockName);\n    if (existing && existing.expiry > Date.now() && existing.owner !== owner) return false;\n    this.locks.set(lockName, { owner, expiry: Date.now() + ttlMs, waiters: [] }); return true; }\n  release(lockName: string, owner: string): boolean {\n    const lock = this.locks.get(lockName); if (lock && lock.owner === owner) { this.locks.delete(lockName); return true; } return false; }\n  renew(lockName: string, owner: string, ttlMs = 30000): boolean { const lock = this.locks.get(lockName); if (lock && lock.owner === owner) { lock.expiry = Date.now() + ttlMs; return true; } return false; }\n}\nclass LeaderElection { private candidates: string[] = []; private leader: string | null = null; private term = 0;\n  addCandidate(id: string): void { if (!this.candidates.includes(id)) this.candidates.push(id); }\n  elect(): { leader: string; term: number } { this.term++; this.candidates.sort(); this.leader = this.candidates[0]; return { leader: this.leader, term: this.term }; }\n  stepDown(): void { this.leader = null; }\n  getLeader(): string | null { return this.leader; }\n}\nclass ServiceDiscovery { private services = new Map<string, { instances: string[]; healthy: boolean[] }>();\n  register(svc: string, instance: string): void { if (!this.services.has(svc)) this.services.set(svc, { instances: [], healthy: [] }); const s = this.services.get(svc)!; s.instances.push(instance); s.healthy.push(true); }\n  getInstances(svc: string): string[] { const s = this.services.get(svc); if (!s) return []; return s.instances.filter((_, i) => s.healthy[i]); }\n  markUnhealthy(svc: string, instance: string): void { const s = this.services.get(svc); if (!s) return; const idx = s.instances.indexOf(instance); if (idx >= 0) s.healthy[idx] = false; }\n}\nclass DistributedBarrier { private count: number; private waiting = 0; private release: (() => void) | null = null;\n  constructor(count: number) { this.count = count; }\n  async wait(): Promise<void> { this.waiting++; if (this.waiting >= this.count) { this.release?.(); this.waiting = 0; return; } return new Promise(r => this.release = r); }\n  reset(): void { this.waiting = 0; this.release = null; }\n}\nclass ZookeeperLike { private data = new Map<string, { value: string; ephemeral: boolean; watchers: Set<() => void> }>();\n  create(path: string, value: string, ephemeral = false): void { this.data.set(path, { value, ephemeral, watchers: new Set() }); }\n  get(path: string): string | undefined { return this.data.get(path)?.value; }\n  set(path: string, value: string): void { const node = this.data.get(path); if (node) { node.value = value; for (const w of node.watchers) w(); } }\n  watch(path: string, cb: () => void): void { const node = this.data.get(path); if (node) node.watchers.add(cb); }\n  exists(path: string): boolean { return this.data.has(path); }\n  delete(path: string): void { this.data.delete(path); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// distributed coordination\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'distributed coordination', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// distributed coordination - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'distributed coordination' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-distributedlock-leaderelection-and-twophasecommit",
      children: "TypeScript: DistributedLock, LeaderElection, and TwoPhaseCommit"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DistributedLock {\n  private locks = new Map<string, { owner: string; token: number; expiry: number; fencingToken: number }>();\n  private watchers = new Map<string, Set<(event: string) => void>>();\n  private fencingCounter = 0;\n\n  acquire(resource: string, owner: string, ttlMs: number = 30000): { success: boolean; fencingToken?: number } {\n    const now = Date.now();\n    const existing = this.locks.get(resource);\n    if (existing && existing.expiry > now && existing.owner !== owner) {\n      return { success: false };\n    }\n    const fencingToken = ++this.fencingCounter;\n    this.locks.set(resource, { owner, token: fencingToken, expiry: now + ttlMs, fencingToken });\n    this.notifyWatchers(resource, \"acquired\");\n    return { success: true, fencingToken };\n  }\n\n  release(resource: string, owner: string, fencingToken: number): boolean {\n    const lock = this.locks.get(resource);\n    if (!lock || lock.owner !== owner || lock.fencingToken !== fencingToken) return false;\n    this.locks.delete(resource);\n    this.notifyWatchers(resource, \"released\");\n    return true;\n  }\n\n  renew(resource: string, owner: string, ttlMs: number = 30000): boolean {\n    const lock = this.locks.get(resource);\n    if (!lock || lock.owner !== owner) return false;\n    lock.expiry = Date.now() + ttlMs;\n    return true;\n  }\n\n  isHeld(resource: string): boolean {\n    const lock = this.locks.get(resource);\n    return !!lock && lock.expiry > Date.now();\n  }\n\n  watch(resource: string, callback: (event: string) => void): void {\n    if (!this.watchers.has(resource)) this.watchers.set(resource, new Set());\n    this.watchers.get(resource)!.add(callback);\n  }\n\n  unwatch(resource: string, callback: (event: string) => void): void {\n    this.watchers.get(resource)?.delete(callback);\n  }\n\n  private notifyWatchers(resource: string, event: string): void {\n    for (const cb of this.watchers.get(resource) ?? []) cb(event);\n  }\n\n  getHeldLocks(): string[] {\n    const now = Date.now();\n    return [...this.locks.entries()].filter(([, v]) => v.expiry > now).map(([k]) => k);\n  }\n}\n\nclass LeaderElection {\n  private candidates: Map<string, { priority: number; lastHeartbeat: number; isAlive: boolean }> = new Map();\n  private currentLeader: string | null = null;\n  private currentTerm = 0;\n  private heartbeatIntervalMs: number;\n  private electionTimeoutMs: number;\n\n  constructor(heartbeatIntervalMs: number = 3000, electionTimeoutMs: number = 5000) {\n    this.heartbeatIntervalMs = heartbeatIntervalMs;\n    this.electionTimeoutMs = electionTimeoutMs;\n  }\n\n  addCandidate(id: string, priority: number = 1): void {\n    this.candidates.set(id, { priority, lastHeartbeat: Date.now(), isAlive: true });\n  }\n\n  heartbeat(candidateId: string): boolean {\n    const candidate = this.candidates.get(candidateId);\n    if (!candidate) return false;\n    candidate.lastHeartbeat = Date.now();\n    candidate.isAlive = true;\n    return true;\n  }\n\n  elect(): { leader: string | null; term: number } {\n    const now = Date.now();\n    const alive = [...this.candidates.entries()]\n      .filter(([, c]) => c.isAlive && (now - c.lastHeartbeat) < this.electionTimeoutMs)\n      .sort((a, b) => b[1].priority - a[1].priority || a[0].localeCompare(b[0]));\n\n    if (alive.length === 0) {\n      this.currentLeader = null;\n      return { leader: null, term: this.currentTerm };\n    }\n\n    const newLeader = alive[0][0];\n    if (newLeader !== this.currentLeader) {\n      this.currentLeader = newLeader;\n      this.currentTerm++;\n    }\n    return { leader: this.currentLeader, term: this.currentTerm };\n  }\n\n  detectFailure(): string[] {\n    const now = Date.now();\n    const failed: string[] = [];\n    for (const [id, candidate] of this.candidates) {\n      if (candidate.isAlive && (now - candidate.lastHeartbeat) > this.electionTimeoutMs * 2) {\n        candidate.isAlive = false;\n        failed.push(id);\n      }\n    }\n    if (failed.includes(this.currentLeader ?? \"\")) {\n      this.currentLeader = null;\n    }\n    return failed;\n  }\n\n  getLeader(): string | null {\n    if (this.currentLeader) {\n      const c = this.candidates.get(this.currentLeader);\n      if (c && c.isAlive && (Date.now() - c.lastHeartbeat) < this.electionTimeoutMs) {\n        return this.currentLeader;\n      }\n      this.currentLeader = null;\n    }\n    return null;\n  }\n\n  removeCandidate(id: string): void {\n    this.candidates.delete(id);\n    if (this.currentLeader === id) this.currentLeader = null;\n  }\n}\n\nclass TwoPhaseCommit {\n  private coordinators = new Map<string, { participants: string[]; phase: \"init\" | \"prepare\" | \"commit\" | \"abort\"; votes: Map<string, boolean>; timeout: number }>();\n\n  beginTransaction(txId: string, participants: string[], timeoutMs: number = 10000): void {\n    this.coordinators.set(txId, { participants, phase: \"init\", votes: new Map(), timeout: Date.now() + timeoutMs });\n  }\n\n  prepare(txId: string): { success: boolean; votes: { participant: string; ready: boolean }[] } {\n    const tx = this.coordinators.get(txId);\n    if (!tx) throw new Error(`Transaction ${txId} not found`);\n    tx.phase = \"prepare\";\n    const results: { participant: string; ready: boolean }[] = [];\n    for (const p of tx.participants) {\n      const ready = Math.random() > 0.1;\n      tx.votes.set(p, ready);\n      results.push({ participant: p, ready });\n    }\n    const allReady = results.every(r => r.ready);\n    return { success: allReady, votes: results };\n  }\n\n  commit(txId: string): { success: boolean; committed: string[]; failed: string[] } {\n    const tx = this.coordinators.get(txId);\n    if (!tx) throw new Error(`Transaction ${txId} not found`);\n    if (tx.phase !== \"prepare\") throw new Error(`Transaction ${txId} not in prepare phase`);\n    tx.phase = \"commit\";\n    const committed: string[] = [];\n    const failed: string[] = [];\n    for (const p of tx.participants) {\n      if (tx.votes.get(p)) {\n        committed.push(p);\n      } else {\n        failed.push(p);\n      }\n    }\n    return { success: failed.length === 0, committed, failed };\n  }\n\n  abort(txId: string): { aborted: string[] } {\n    const tx = this.coordinators.get(txId);\n    if (!tx) throw new Error(`Transaction ${txId} not found`);\n    tx.phase = \"abort\";\n    this.coordinators.delete(txId);\n    return { aborted: [...tx.participants] };\n  }\n\n  recoverCoordinator(txId: string): { status: string; recommendedAction: string } {\n    const tx = this.coordinators.get(txId);\n    if (!tx) return { status: \"not found\", recommendedAction: \"treat as committed or query participants\" };\n    if (Date.now() > tx.timeout) {\n      tx.phase = \"abort\";\n      return { status: \"timeout\", recommendedAction: \"abort transaction\" };\n    }\n    if (tx.phase === \"commit\") return { status: \"committed\", recommendedAction: \"no action needed\" };\n    if (tx.phase === \"prepare\") {\n      const allReady = [...tx.votes.values()].every(v => v);\n      return { status: \"prepare phase\", recommendedAction: allReady ? \"proceed to commit\" : \"abort\" };\n    }\n    return { status: tx.phase, recommendedAction: \"wait for coordinator recovery\" };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-zookeeper-vs-etcd-consensus-architecture",
      children: "Mermaid: ZooKeeper vs Etcd Consensus Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef zk fill#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef etcd fill#fce4ec,stroke:#c62828,stroke-width:2px\n    classDef shared fill#fff9c4,stroke:#f57f17,stroke-width:2px\n\n    subgraph \"Apache ZooKeeper (Zab Protocol)\"\n        ZK1[\"Leader<br/>Elected via Zab\"]:::zk\n        ZK2[\"Follower A\"]:::zk\n        ZK3[\"Follower B\"]:::zk\n        ZK4[\"Znode Hierarchy<br/>Persistent / Ephemeral / Sequential\"]:::zk\n        ZK5[\"Watches<br/>One-Shot Notifications\"]:::zk\n        ZK6[\"zxid<br/>Transaction ID\"]:::zk\n        ZK1 -->|\"Propose & Commit\"| ZK2\n        ZK1 -->|\"Propose & Commit\"| ZK3\n        ZK2 -->|\"ACK\"| ZK1\n        ZK3 -->|\"ACK\"| ZK1\n        ZK4 --> ZK1\n        ZK5 --> ZK1\n    end\n\n    subgraph \"Etcd (Raft Protocol)\"\n        E1[\"Leader<br/>Elected via Raft\"]:::etcd\n        E2[\"Follower C\"]:::etcd\n        E3[\"Follower D\"]:::etcd\n        E4[\"Key-Value Store<br/>Flat Namespace + Prefix Scan\"]:::etcd\n        E5[\"Watch API<br/>Long-Lived Streaming\"]:::etcd\n        E6[\"Leases<br/>Time-Bound Contracts\"]:::etcd\n        E1 -->|\"AppendEntries\"| E2\n        E1 -->|\"AppendEntries\"| E3\n        E2 -->|\"ACK\"| E1\n        E3 -->|\"ACK\"| E1\n        E4 --> E1\n        E5 --> E1\n    end\n\n    subgraph \"Shared Concepts\"\n        C1[\"Consensus<br/>Majority-Based\"]:::shared\n        C2[\"Leader Election<br/>Term / Epoch\"]:::shared\n        C3[\"Quorum<br/>N/2 + 1\"]:::shared\n        C4[\"Linearizable Writes\"]:::shared\n    end\n\n    ZK1 -.-> C1\n    E1 -.-> C1\n    ZK1 -.-> C2\n    E1 -.-> C2\n"
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
            children: "Service registries maintain dynamic mappings between service names and network locations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ZooKeeper/Etcd/Consul for production; use DNS-based discovery (Kubernetes) for containerized environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side discovery places load balancing in the client; server-side uses a central gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side enables sophisticated LB (weighted, zone-aware); server-side simplifies clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZooKeeper's Zab protocol provides linearizable writes via leader-based atomic broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ZooKeeper when you need hierarchical namespace + watches (Kafka, HBase)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raft consensus is designed for understandability with explicit leader election and log replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Raft (Etcd) for new systems; simpler implementation than Paxos or Zab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed locks require fencing tokens to prevent stale lock holder corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always validate fencing tokens on the resource side; never trust lock expiry alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phi-accrual failure detectors adapt to network conditions using statistical modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure phi thresholds based on observed heartbeat variance — higher variance needs higher thresholds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coordination-free systems avoid consensus using CRDTs and idempotent operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer CRDTs (state-based or operation-based) for eventually consistent workloads that can tolerate staleness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Cluster Coordination with Etcd"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A SaaS company running 500+ microservices on Kubernetes experienced periodic API Server timeouts during Etcd leader elections. Their Etcd cluster (3 nodes) was co-located with Kubernetes control plane components. During a routine rolling update of the Kubernetes API Server, a network blip caused the Etcd leader to miss heartbeats — triggering a Raft election that took 800ms (above the typical 300-500ms). During this window, all API Server write operations failed, causing cascading failures: deployment controllers stalled, service registration lagged, and new pods failed to schedule."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The root cause was identified as resource contention: Etcd nodes were competing for CPU with kube-apiserver and kube-scheduler on the same hosts. The team re-architected with dedicated Etcd nodes (c5.xlarge instances with gp3 SSDs), spread across 3 availability zones. They tuned Etcd's heartbeat interval from 100ms to 50ms and election timeout from 1000ms to 500ms. The leader election time dropped to under 200ms p99. They also implemented Etcd defragmentation (every 8 hours) to prevent the key-value store from exceeding the 100MB database size limit, which had caused OOM kills."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A second incident involved a split-brain scenario when the Etcd cluster lost its leader during a zone outage affecting 2 of 3 nodes. The remaining single node could not form a quorum, so all writes were blocked for 4 minutes until one of the failed nodes recovered. The team added a 5-node Etcd cluster spread across 3 zones (2+2+1 distribution), allowing the cluster to tolerate both a zone failure and a node failure simultaneously. The 99.9th percentile write latency improved from 25ms to 8ms after the dedicated hardware migration."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service registries maintain dynamic mappings between service names and network locations; ZooKeeper, Etcd, Consul, and Eureka are common implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client-side discovery places load-balancing logic in the client library; server-side discovery uses a central load balancer or API gateway"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZooKeeper's Zab protocol provides linearizable writes via a leader-based atomic broadcast with ordered zxid sequences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raft decomposes consensus into leader election (randomized timeouts), log replication (AppendEntries RPCs), and safety (log matching, leader completeness)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raft ensures safety by guaranteeing that a leader elected in a given term holds all previously committed entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed locks require fencing tokens to prevent stale lock holders from corrupting shared state after GC pauses or network delays"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phi-accrual failure detectors model inter-arrival times statistically, producing suspicion levels that adapt to network conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SWIM combines direct pings with indirect probes (k-ary) for failure detection and gossip-based piggybacking for membership dissemination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordination-free systems avoid consensus by using idempotent, commutative, and associative operations (CRDTs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 1"
      }), "\nZooKeeper watches are one-shot — they fire once and must be re-registered. When the client disconnects, the watch remains registered on the server. On reconnect, ZooKeeper fires the watch to inform the client that it may have missed changes during the disconnection. This is a safety mechanism: ZooKeeper cannot guarantee that no changes occurred while the client was disconnected, so it fires the watch to force the client to re-read the data and re-register the watch. To design around this, always expect spurious watch firings — re-read the data on watch fire and check if an actual change occurred before taking action.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 2"
      }), "\nThe candidate (term 4) should immediately revert to follower and accept the AppendEntries from the leader (term 5). This is because the leader with term 5 has a higher term — Raft's safety property ensures that the leader with the highest term is the authoritative leader. The candidate's election is abandoned because its term is stale. This prevents two leaders from coexisting and ensures log consistency (election safety property).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 3"
      }), "\nA fencing token is necessary because ZooKeeper ephemeral znodes alone do not protect against the case where a lock holder pauses (e.g., GC pause) for longer than the session timeout. The ephemeral znode is deleted when the session times out, but the process may resume later, still holding a stale lock view. With fencing tokens: the lock grants a monotonically increasing token; the resource rejects any operation with an old token (< current token). This prevents the zombie lock holder from corrupting state.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 4"
      }), "\nThe herd effect occurs when the leader fails and **all** watching candidates receive a notification simultaneously. Each candidate then tries to create its own sequential znode and check if it has the lowest sequence — causing N simultaneous ZK operations. Sequential chaining mitigates this by having each candidate watch only its predecessor (the next lower sequence number). When the leader fails, only the candidate with the second-lowest sequence number is notified — it checks if it's now the minimum and becomes leader, or sets a watch on its new predecessor. This limits notifications to O(1) per failure instead of O(N).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 1: ZooKeeper 10-Candidate Election"
      }), "\nInitial state: znodes `/election/node-000000001` through `node-000000010`. Process 1 (lowest seq) is leader. Processes 2-10 watch their predecessor (2 watches 1, 3 watches 2, ...). When process 1 crashes: (1) Its ephemeral znode `node-000000001` is deleted by ZK. (2) Process 2's watch fires because its predecessor (node-1) is deleted. (3) Process 2 creates a new ephemeral sequential znode (now `node-000000011` — because ZK sequence counter continues incrementing). (4) Process 2 checks: the new minimum is `node-000000002` (original process 2's znode). Process 2 becomes leader. **Total rounds: 1.** Worst-case time: 1 deletion notification + 1 create + 1 get-children = 3 operations × 5ms = 15ms.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 2: Raft Log Recovery"
      }), "\nLeader S1 wants to replicate index 5. It starts with `nextIndex[3] = 4`, `nextIndex[4] = 2`. **S3 (nextIndex=4):** S1 sends AppendEntries for index 4 (term 4, `set(w=4)`) with prevLogIndex=3, prevLogTerm=3. S3 has index 3 with term 3 → match! S3 appends entry 4 and acks. nextIndex[3] becomes 5. **S4 (nextIndex=2):** S1 sends AppendEntries for index 2 (term 1, `set(y=2)`) with prevLogIndex=1, prevLogTerm=1. S4 has index 1 with term 1 → match! S4 appends entry 2 (term 1). But S1 detects mismatch: it needs to send entries 3, 4, 5. nextIndex[4] stays at 2, decrementing... Actually Raft decrements nextIndex: S1 sends index 1 (prevLogIndex=0), S4 matches, then S1 appends entries 2, 3, 4, 5 one by one. NextIndex converges. **Rounds for S4:** ~3 rounds (decrement, match, replicate).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 3: Phi-Accrual Threshold"
      }), "\nMean 100ms, std 20ms. To detect within 500ms: compute P(gap >= 500ms) under normal distribution. Z = (500-100)/20 = 20 standard deviations. P(Z >= 20) is virtually 0 (< 1e-88). phi = -log10(1e-88) ≈ 88. **Threshold: phi = 5** (corresponds to ~400ms gap: Z = (400-100)/20 = 15, P ≈ 1e-50, phi = 50 — extremely improbable). In practice, with phi=5: a gap of 100 + 5*20 = 200ms would trigger suspicion (phi ~= -log10(P(Z >= 5)) = -log10(2.87e-7) ≈ 6.5). For < 1% false positives at 500ms, phi threshold of 3-5 is safe.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution: Global Leader Election System"
      }), "\n**1. Architecture: Etcd** — best fit for new systems with Raft consensus, simple API, watch streaming. Paxos too complex; Zab tied to ZooKeeper. **2. Topology:** 5 Etcd nodes per region (15 total). Quorum size = 8 (majority of 15). Leader preference: primary region (US-East) gets priority via lower election timeout. Region failure: remaining 2 regions (10 nodes) still have quorum (6 needed). **3. Leader election pseudocode:** Use Etcd's built-in Raft election. Implement lease-based leadership: candidate creates `/election/leader` with TTL=3s, refreshes via heartbeat. On leader failure, lease expires, other candidates race to acquire. **4. Latency:** Election (US-East fails): 2 RTTs to EU-West = 60ms + 2 to Asia-Pacific = 300ms = ~360ms p99. Query from Asia-Pacific: read from local Etcd follower (0-2ms) or forward to leader (150ms). **5. Failure handling:** All US-East nodes fail → quorum still exists in EU-West + Asia-Pacific. Link severed between US-East and EU-West → US-East becomes partitioned and cannot form quorum alone (5 < 8), EU-West + Asia-Pacific (10 nodes) maintain quorum. Throttling: jitter election timeouts (150-300ms randomized).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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