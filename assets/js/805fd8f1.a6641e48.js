"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39425],{

/***/ 71831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_06_distributed_consistency_md_805_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-06-distributed-consistency-md-805.json
const site_docs_courses_system_design_06_distributed_consistency_md_805_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/06-distributed-consistency","title":"Chapter 6: CAP Theorem and Distributed Consistency","description":"Previous 07 Message Queues","source":"@site/docs/courses/system-design/06-distributed-consistency.md","sourceDirName":"courses/system-design","slug":"/system-design/06-distributed-consistency","permalink":"/ai-engineering-journey/system-design/06-distributed-consistency","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-distributed-consistency","slug":"/system-design/06-distributed-consistency","title":"Chapter 6: CAP Theorem and Distributed Consistency","sidebar_label":"Chapter 6: CAP Theorem and Distributed Consistency","sidebar_position":6},"sidebar":"course-system-design","previous":{"title":"Chapter 5: Data Partitioning and Sharding","permalink":"/ai-engineering-journey/system-design/05-partitioning-sharding"},"next":{"title":"Chapter 7: Message Queues and Event-Driven Architecture","permalink":"/ai-engineering-journey/system-design/07-message-queues"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/06-distributed-consistency.md


const frontMatter = {
	id: '06-distributed-consistency',
	slug: '/system-design/06-distributed-consistency',
	title: 'Chapter 6: CAP Theorem and Distributed Consistency',
	sidebar_label: 'Chapter 6: CAP Theorem and Distributed Consistency',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: CAP Theorem and Distributed Consistency';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The CAP Theorem",
  "id": "the-cap-theorem",
  "level": 3
}, {
  "value": "Gilbert and Lynch&#39;s Proof",
  "id": "gilbert-and-lynchs-proof",
  "level": 4
}, {
  "value": "CAP Misconceptions",
  "id": "cap-misconceptions",
  "level": 4
}, {
  "value": "PACELC Extension",
  "id": "pacelc-extension",
  "level": 3
}, {
  "value": "Consistency Models",
  "id": "consistency-models",
  "level": 3
}, {
  "value": "Strong Consistency (Linearizability)",
  "id": "strong-consistency-linearizability",
  "level": 4
}, {
  "value": "Sequential Consistency",
  "id": "sequential-consistency",
  "level": 4
}, {
  "value": "Causal Consistency",
  "id": "causal-consistency",
  "level": 4
}, {
  "value": "Eventual Consistency",
  "id": "eventual-consistency",
  "level": 4
}, {
  "value": "Quorum Systems",
  "id": "quorum-systems",
  "level": 3
}, {
  "value": "Quorum Configurations",
  "id": "quorum-configurations",
  "level": 4
}, {
  "value": "Read Repair",
  "id": "read-repair",
  "level": 4
}, {
  "value": "Hinted Handoff",
  "id": "hinted-handoff",
  "level": 4
}, {
  "value": "Gossip Protocol",
  "id": "gossip-protocol",
  "level": 3
}, {
  "value": "Infection-Style Gossip",
  "id": "infection-style-gossip",
  "level": 4
}, {
  "value": "SWIM Protocol",
  "id": "swim-protocol",
  "level": 4
}, {
  "value": "CRDTs (Conflict-Free Replicated Data Types)",
  "id": "crdts-conflict-free-replicated-data-types",
  "level": 3
}, {
  "value": "G-Counter (Grow-Only Counter)",
  "id": "g-counter-grow-only-counter",
  "level": 4
}, {
  "value": "PN-Counter (Positive-Negative Counter)",
  "id": "pn-counter-positive-negative-counter",
  "level": 4
}, {
  "value": "OR-Set (Observed-Remove Set)",
  "id": "or-set-observed-remove-set",
  "level": 4
}, {
  "value": "Logical Clocks",
  "id": "logical-clocks",
  "level": 3
}, {
  "value": "Lamport Clocks",
  "id": "lamport-clocks",
  "level": 4
}, {
  "value": "Vector Clocks",
  "id": "vector-clocks",
  "level": 4
}, {
  "value": "Merkle Trees for Anti-Entropy",
  "id": "merkle-trees-for-anti-entropy",
  "level": 3
}, {
  "value": "Distributed Snapshots (Chandy-Lamport Algorithm)",
  "id": "distributed-snapshots-chandy-lamport-algorithm",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: DynamoDB Tunable Consistency",
  "id": "example-1-dynamodb-tunable-consistency",
  "level": 3
}, {
  "value": "Example 2: Cassandra Tunable Consistency",
  "id": "example-2-cassandra-tunable-consistency",
  "level": 3
}, {
  "value": "Example 3: Google Spanner External Consistency",
  "id": "example-3-google-spanner-external-consistency",
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
  "value": "TypeScript: Quorum, Vector Clock, CRDT, and CAP Simulator",
  "id": "typescript-quorum-vector-clock-crdt-and-cap-simulator",
  "level": 3
}, {
  "value": "Implementation: Distributed Consensus and Replication",
  "id": "implementation-distributed-consensus-and-replication",
  "level": 3
}, {
  "value": "TypeScript: QuorumReader (W+R &gt; N with Read Repair)",
  "id": "typescript-quorumreader-wr--n-with-read-repair",
  "level": 3
}, {
  "value": "TypeScript: Vector Clock (Causality and Concurrency Detection)",
  "id": "typescript-vector-clock-causality-and-concurrency-detection",
  "level": 3
}, {
  "value": "TypeScript: Raft Consensus (Leader Election and Log Replication)",
  "id": "typescript-raft-consensus-leader-election-and-log-replication",
  "level": 3
}, {
  "value": "Consistency Models Spectrum",
  "id": "consistency-models-spectrum",
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
  "id": "chapter-quiz-1",
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
    em: "em",
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
        id: "chapter-6-cap-theorem-and-distributed-consistency",
        children: "Chapter 6: CAP Theorem and Distributed Consistency"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/05-partitioning-sharding",
          children: "05 Partitioning Sharding"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/07-message-queues",
          children: "07 Message Queues"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the CAP theorem using Gilbert and Lynch's argument and explain its practical implications for distributed system design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend the CAP framework with PACELC to capture trade-offs during normal operation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish strong, eventual, causal, and external consistency models with concrete operational examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design quorum systems using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "W + R > N"
        }), " inequality and analyze how different quorum configurations affect read/write latency and consistency"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement conflict-free replicated data types including G-Counter, PN-Counter, and OR-Set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Lamport clocks and vector clocks to order events in distributed systems, and detect concurrent updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how Merkle trees enable efficient anti-entropy and how the Chandy-Lamport algorithm captures consistent global snapshots"
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
            children: "Consistency models, CAP theorem, consensus, distributed transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong vs eventual consistency, linearizability, serializability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP Theorem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency, Availability, Partition Tolerance ? choose two"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consensus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paxos, Raft, Zab ? how distributed systems agree on state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed Transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC, SAGA, TCC patterns for multi-node atomicity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Spanner, etcd, ZooKeeper, Cosmos DB"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/06-distributed-consistency.png",
        alt: "Distributed Consistency Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-cap-theorem",
      children: "The CAP Theorem"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nThe CAP theorem, formalized by Seth Gilbert and Nancy Lynch in 2002, states that a distributed data store can simultaneously provide at most two of three guarantees: Consistency, Availability, and Partition Tolerance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definitions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency (C):"
        }), " Every read receives the most recent write or an error. All nodes see the same data at the same time. This is ", (0,jsx_runtime.jsx)(_components.em, {
          children: "linearizability"
        }), " — operations appear to execute atomically at a single instant between invocation and response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability (A):"
        }), " Every request receives a non-error response, without guarantee that it contains the most recent write. The system continues to function even when nodes are down."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Tolerance (P):"
        }), " The system continues to operate despite an arbitrary number of messages being dropped or delayed between nodes (network partition)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gilbert-and-lynchs-proof",
      children: "Gilbert and Lynch's Proof"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume a system with two nodes, G1 and G2, each storing value ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial state: v0 on G1, v0 on G2\nTime t0: Client writes v1 to G1\nTime t1: Network partition occurs between G1 and G2\nTime t2: Client reads from G2 ? G2 still has v0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During a partition:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the system returns v0 from G2, it is available but not consistent (G1 has v1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the system refuses to return a value from G2 (blocks until partition heals), it is consistent but not available."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system cannot be both consistent and available during a partition."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Therefore: during a network partition, you must choose between consistency and availability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cap-misconceptions",
      children: "CAP Misconceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CAP theorem is often misunderstood. Key clarifications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CAP is about partitions."
          }), " In the absence of partitions (the normal case), you can have both C and A. The choice only matters when failures occur."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CAP is not 2-out-of-3."
          }), " You don't \"pick two\" at design time. You design for consistency or availability when partitions happen. Most systems choose CP or AP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CAP ignores latency."
          }), " Partition-like behavior can occur even without a network cut — if two datacenters are connected by a high-latency link, a synchronous write may time out, forcing a choice between consistency and availability."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pacelc-extension",
      children: "PACELC Extension"
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
      children: ["Daniel Abadi proposed PACELC in 2010 to capture what happens ", (0,jsx_runtime.jsx)(_components.em, {
        children: "during"
      }), " partitions and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "during normal operation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PACELC:"
      }), " If there is a Partition (P), choose between Availability (A) and Consistency (C); Else (E), choose between Latency (L) and Consistency (C)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PACELC Trade-off Space:\n  DynamoDB:               PA/EL  (prioritize availability and low latency)\n  Bigtable/Spanner:       PC/EC  (prioritize consistency)\n  Cassandra:              PA/EL  (tunable, defaults to available)\n  PNUTS (Yahoo!):         PC/EL  (consistent during partition, latency during normal ops)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This captures the real design space: even when no partition exists, systems choose between low latency (eventual consistency) and strong consistency (higher latency due to coordination)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consistency-models",
      children: "Consistency Models"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "strong-consistency-linearizability",
      children: "Strong Consistency (Linearizability)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All operations appear to execute atomically in a global order consistent with real time. After a write completes, all subsequent reads (from any node) return the written value."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client 1: write(x=1) ? ACK\n             ? time\nClient 2: read(x) ? returns 1 (guaranteed)\nClient 3: read(x) ? returns 1 (guaranteed)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " Requires majority acknowledgment before returning to the client. In a quorum system, a write must reach ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W"
      }), " nodes and a read must reach ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R"
      }), " nodes such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W + R > N"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost:"
      }), " Higher latency — every write must coordinate with multiple nodes. During failures, the system may become unavailable (CP sacrifice)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sequential-consistency",
      children: "Sequential Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operations appear in program order per process, but the global order does not need to match real time. Reads may return stale values in some cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process 1: write(x=1) ? write(x=2)\nProcess 2: read(x) ? 2\nProcess 3: read(x) ? 1 (allowed, even if later in real time)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequential consistency is weaker than linearizability but easier to implement efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "causal-consistency",
      children: "Causal Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Writes that are causally related (one depends on another) must be seen in the same order by all processes. Concurrent writes (no causal relationship) can be seen in different orders."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Related writes (causal):\n  Process 1: write(x=1) ? write(y=x+1)\n  Process 2: read(y) ? 2 implies read(x) ? 1\n\nConcurrent writes (no causal relationship):\n  Process 1: write(x=1)\n  Process 2: write(x=2)\n  Process 3: read(x) ? 1 or 2 (either is valid)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Causal consistency captures the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "happens-before"
      }), " relationship. It is typically implemented using vector clocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "eventual-consistency",
      children: "Eventual Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If no new updates are made to a data item, eventually all reads will return the last updated value. There is no time bound — the system converges eventually."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write to Node A: x=42\n... time passes ...\nRead from Node B: x=0 (stale)\nRead from Node C: x=42 (converged)\nRead from Node B: x=42 (finally converged)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eventual consistency is the weakest model. It provides the best availability and latency because reads and writes can complete without waiting for other nodes. However, application complexity increases — developers must handle stale reads and resolve conflicts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence requires conflict resolution."
      }), " Two widely used approaches:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Last-Writer-Wins (LWW):"
          }), " Each write carries a timestamp; the write with the highest timestamp wins. Simple but may lose data (two concurrent writes to different fields of the same record)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CRDTs:"
          }), " Conflict-Free Replicated Data Types that mathematically guarantee convergence without coordination."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quorum-systems",
      children: "Quorum Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A quorum is the minimum number of nodes that must participate in a read or write operation for it to be valid. In a system with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " replicas, a read quorum ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R"
      }), " and write quorum ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W"
      }), " satisfy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "W + R > N"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This ensures that any read quorum intersects with any write quorum — at least one node holds the latest write."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "quorum-configurations",
      children: "Quorum Configurations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consistency Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest latency, lowest availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads are slow (must read all nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes are slow (must write all nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quorum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R+W>N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R+W>N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced, e.g., N=3, R=2, W=2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable without R=N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write latency = slowest node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest availability, lowest consistency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of quorum intersection:"
      }), " Given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W"
      }), " nodes written and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R"
      }), " nodes read, the write set and read set must overlap because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|WriteSet| + |ReadSet| = W + R > N = |TotalSet|"
      }), ". The pigeonhole principle guarantees at least one node is in both sets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of consistency:"
      }), " After a write completes at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W"
      }), " nodes, a subsequent read of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R"
      }), " nodes must include at least one node from the write set. That node returns the latest value. Therefore the read observes the written value (or a more recent one)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example with N=5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "N=5, W=3, R=3\nWrite to nodes: {1, 2, 3} ? ACK after 3 responses\nRead from nodes: {3, 4, 5} ? reads latest value from node 3 (intersection)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read-repair",
      children: "Read Repair"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a read discovers a stale value (the read quorum found at least one node behind), the system writes the latest value back to the stale node during the read path. This repairs inconsistency proactively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read path:\n  1. Send read request to R nodes\n  2. Compare versions; latest = v3\n  3. Return v3 to client\n  4. Background: send v3 to any nodes that returned stale values\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hinted-handoff",
      children: "Hinted Handoff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a write target node is unavailable, the coordinator picks an alternative node and stores the write with a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "hint"
      }), " indicating the intended recipient. When the downed node recovers, the hinted write is forwarded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Intended target: Node 3 (down)\n  ? Coordinator writes to Node 5 with hint: \"this belongs to Node 3\"\n  ? When Node 3 recovers, Node 5 delivers the write\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hinted handoff improves availability — writes succeed even when some replicas are temporarily unavailable. However, it can weaken consistency guarantees if the hint is lost before delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gossip-protocol",
      children: "Gossip Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gossip protocols (also called epidemic protocols) disseminate information through a system in a manner analogous to the spread of an infection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "infection-style-gossip",
      children: "Infection-Style Gossip"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node periodically contacts one or more randomly selected nodes and exchanges state information."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Round 1: Node A infects Node C\nRound 2: Node A infects Node B, Node C infects Node D\nRound 3: All 4 nodes infected\n\nGrowth rate: O(log N) rounds to infect all N nodes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fanout:"
      }), " If each node contacts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f"
      }), " peers per round, the system converges in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(log_f N)"
      }), " rounds. With fanout=1, convergence takes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(log N)"
      }), " rounds; with fanout=3, it takes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(log_3 N)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Message complexity per round:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(N)"
      }), " for the whole system (each of N nodes sends to f peers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "swim-protocol",
      children: "SWIM Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SWIM (Scalable Weakly-consistent Infection-style Process Group Membership Protocol) combines gossip with a failure detection mechanism."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SWIM operates in two components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Failure Detector:"
          }), " Each node periodically picks a random member and sends a ping. If the ping times out, the node sends indirect pings through k other nodes to confirm the failure. After confirmation, the node is declared failed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dissemination Component:"
          }), " Membership updates (joins, leaves, failures) are propagated via gossip — each piggyback update is attached to the ping/pong messages."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node A ? ping ? Node B (random target)\n  If B responds ? continue\n  If B times out:\n    A ? ping ? C ? Node B (indirect)\n    C ? ack ? A (confirmed or not)\n  If confirmed failed: A updates membership, gossips to D, E, F\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SWIM converges membership information in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(log N)"
      }), " rounds and detects failures with high probability within a configurable timeout period."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crdts-conflict-free-replicated-data-types",
      children: "CRDTs (Conflict-Free Replicated Data Types)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CRDTs are data structures that can be replicated across multiple nodes and updated concurrently without coordination, yet still converge to the same state. Two flavors exist: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "operation-based (CvRDT)"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state-based (CmRDT)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "g-counter-grow-only-counter",
      children: "G-Counter (Grow-Only Counter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A G-Counter supports only increment operations. Each node maintains its own count; the total is the sum across all nodes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "G-Counter state: {node_0: 3, node_1: 5, node_2: 2}\nTotal value: 3 + 5 + 2 = 10\n\nOperation: increment()\n  ? node_i.counter += 1\n\nMerge (state-based):\n  new_counters[i] = max(local[i], remote[i]) for each i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GCounter:\n    def __init__(self, node_id, n_nodes):\n        self.node_id = node_id\n        self.counters = [0] * n_nodes\n\n    def increment(self):\n        self.counters[self.node_id] += 1\n\n    def value(self):\n        return sum(self.counters)\n\n    def merge(self, other):\n        for i in range(len(self.counters)):\n            self.counters[i] = max(self.counters[i], other.counters[i])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The G-Counter converges because max is commutative, associative, and idempotent (a CRDT requirement)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pn-counter-positive-negative-counter",
      children: "PN-Counter (Positive-Negative Counter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A PN-Counter extends the G-Counter to support both increment and decrement. It uses two G-Counters internally: one for increments, one for decrements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PNCounter:\n    def __init__(self, node_id, n_nodes):\n        self.p = GCounter(node_id, n_nodes)  # increments\n        self.n = GCounter(node_id, n_nodes)  # decrements\n\n    def increment(self):\n        self.p.increment()\n\n    def decrement(self):\n        self.n.increment()\n\n    def value(self):\n        return self.p.value() - self.n.value()\n\n    def merge(self, other):\n        self.p.merge(other.p)\n        self.n.merge(other.n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "or-set-observed-remove-set",
      children: "OR-Set (Observed-Remove Set)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An OR-Set supports add and remove operations. Elements are tagged with unique identifiers and a \"remove-side\" tombstone list."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ORSet:\n    def __init__(self):\n        self.elements = {}  # element ? set of unique tags\n\n    def add(self, element, tag):\n        if element not in self.elements:\n            self.elements[element] = set()\n        self.elements[element].add(tag)\n\n    def remove(self, element):\n        # Remove all tags for this element (marks for deletion)\n        self.elements[element] = set()\n\n    def value(self):\n        return {e for e, tags in self.elements.items() if tags}\n\n    def merge(self, other):\n        for element, other_tags in other.elements.items():\n            if element in self.elements:\n                self.elements[element] |= other_tags\n            else:\n                self.elements[element] = set(other_tags)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two concurrent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add(\"x\")"
      }), " operations produce the same result as one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add(\"x\")"
      }), " — the union of tags converges. A concurrent add and remove: if the remove has seen the add's tag, the element stays removed; otherwise the remove is ignored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logical-clocks",
      children: "Logical Clocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical clocks are unreliable in distributed systems — clock skew can produce incorrect orderings. Logical clocks capture causality without relying on synchronized wall clocks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lamport-clocks",
      children: "Lamport Clocks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each process maintains an integer counter. On each event, the counter increments. Messages carry the sender's timestamp. The receiver updates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C = max(C, timestamp) + 1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process P1:        Process P2:\nC=0                 C=0\nC=1 (internal)      ? receives msg with timestamp 1 ? C=max(0,1)+1=2\nC=2 (send msg)      C=3 (internal)\n                    C=4 (send msg)\n? receives ts 4 ? C=max(2,4)+1=5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Property:"
      }), " If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a happens-before b"
      }), " (causal relationship), then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C(a) < C(b)"
      }), ". However, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C(a) < C(b)"
      }), " does NOT imply ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a happens-before b"
      }), " — Lamport clocks cannot detect concurrent events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vector-clocks",
      children: "Vector Clocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each process maintains a vector of counters — one entry per process. Updates track causality more precisely."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process P1:        Process P2:\n[0,0,0]            [0,0,0]\n[1,0,0] (internal)\n[2,0,0] (send msg)\n\n? P2 receives: [2,0,0] ? max([0,0,0],[2,0,0])+1 = [2,1,0]\n[2,1,0] (internal)\n[2,2,0] (send msg to P3)\n\n? P3 receives: [2,2,0] and [0,0,1] (concurrent self-event)\n  max([2,2,0],[0,0,1])+1 = [2,2,1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V(a) <= V(b) if for all i, V(a)[i] <= V(b)[i]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V(a) < V(b) if V(a) <= V(b) and V(a) != V(b) (causal order)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V(a) || V(b) if neither <= the other (concurrent)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use in Dynamo-style databases:"
      }), " Vector clocks track version branches. When a read returns multiple conflicting versions (from different causally concurrent writes), the application must resolve them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merkle-trees-for-anti-entropy",
      children: "Merkle Trees for Anti-Entropy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Merkle tree is a hash tree where leaf nodes contain hashes of data blocks and internal nodes contain hashes of their children. The root hash summarizes the entire data set."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        Root = H(H01 + H23)\n       /                  \\\n    H01=H(H0+H1)    H23=H(H2+H3)\n    /       \\          /       \\\n  H0=H(D0)  H1=H(D1)  H2=H(D2) H3=H(D3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-entropy protocol:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each replica maintains a Merkle tree of its key range."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replicas periodically exchange root hashes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root hashes differ, they recursively descend to find which subtrees differ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only the leaf-level differences (actual key-value pairs) are transferred."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Efficiency:"
      }), " With N keys in a range, the expected number of exchanged hashes is O(log N) for comparing trees, and O(D * log N) for finding D differences. Without Merkle trees, two replicas would need to compare all N keys (O(N))."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use in Dynamo:"
      }), " Each node maintains a Merkle tree per key range. The tree depth is configurable — a depth-16 tree for 2^16 keys means only 16 hashes are exchanged to detect differences in that entire range. Once a mismatch is found at a specific hash level, the nodes drill down to the exact differing keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "distributed-snapshots-chandy-lamport-algorithm",
      children: "Distributed Snapshots (Chandy-Lamport Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Chandy-Lamport algorithm captures a consistent global snapshot of a distributed system without halting computation. A ", (0,jsx_runtime.jsx)(_components.em, {
        children: "consistent cut"
      }), " includes all events that happened-before the snapshot, but no events that depend on events after the snapshot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Initiator:"
          }), " A process records its local state and sends a marker message on all outgoing channels."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Marker reception rules:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If a process receives a marker on channel C and has not yet recorded its state:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "It records the channel state of C as empty"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Records its local state"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Sends markers on all outgoing channels"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If a process has already recorded its state:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Records the channel state of C as all messages received since the state was recorded"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Termination:"
          }), " When all processes have received markers and recorded channel states, the snapshot is complete."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial state:\n  P1 ? [msg1] ? P2 ? [msg2] ? P3\n\nSnapshot initiated by P1:\n  Step 1: P1 records state S1, sends marker M1 on outbound channel\n  Step 2: P2 receives marker on incoming channel from P1\n          ? Records incoming channel from P1 as empty (no in-flight messages)\n          ? Records local state S2\n          ? Sends M2 on outbound channel to P3\n  Step 3: P3 receives M2\n          ? Records incoming channel from P2 as empty\n          ? Records state S3\n\nGlobal snapshot = {S1, S2, S3, channel_states}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The snapshot is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "consistent"
      }), ": it respects happened-before relationships. No message is recorded as received but not sent, or sent but not recorded if it should have been received before the cut."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-dynamodb-tunable-consistency",
      children: "Example 1: DynamoDB Tunable Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon DynamoDB, derived from the Dynamo paper, offers tunable consistency levels:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Consistency Levels:\n  EVENTUAL:     R=1, W=1 (fastest, weakest)\n  STRONG:       R=N, W=N (slowest, strongest) — not available in standard DynamoDB\n  CONSISTENT_READ: R=1 with read-after-write consistency guarantee via coordinator\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DynamoDB actually offers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "read-after-write consistency"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConsistentRead"
      }), " mode. This is achieved by routing reads to the partition that holds the authoritative copy. The trade-off: consistent reads use half the throughput of eventually consistent reads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Eventually consistent read (default)\nresponse = table.get_item(Key={'user_id': '123'})\n# May return stale data, but lower latency and higher throughput\n\n# Strongly consistent read\nresponse = table.get_item(\n    Key={'user_id': '123'},\n    ConsistentRead=True\n)\n# Returns latest write, higher latency, consumes 2x read capacity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency comparison (p99):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throughput"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Client\n    participant D as DynamoDB Coordinator\n    participant P as Primary Partition\n    participant R as Replica Partition\n    C->>D: GetItem (ConsistentRead=True)\n    D->>P: Read latest version\n    P-->>D: Version 42\n    D-->>C: Return value v42\n    Note over D,R: Standard read omits replica check\n    C->>D: GetItem (Eventual)\n    D->>P: Read\n    Note over D,R: May return older version if P has newer unpropagated write\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-cassandra-tunable-consistency",
      children: "Example 2: Cassandra Tunable Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Apache Cassandra exposes consistency per query level, defined by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R"
      }), " (and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CL"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CL = ONE:     W=1, R=1 (eventual)\nCL = QUORUM:  W=N/2+1, R=N/2+1 (strong if W+R > N)\nCL = ALL:     W=N, R=N (strongest, lowest availability)\nCL = ANY:     W=1, R=0 at quorum (writes always succeed via hinted handoff)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example with N=3, replication factor=3:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Strong consistency: write to 2 nodes, read from 2 nodes\n-- W=2, R=2, N=3 ? W+R=4 > 3=v\nSELECT * FROM users WHERE user_id = 42 USING CONSISTENCY QUORUM;\n\n-- Eventual: write to 1, read from 1\nINSERT INTO users (user_id, name) VALUES (42, 'Alice') USING CONSISTENCY ONE;\nSELECT * FROM users WHERE user_id = 42 USING CONSISTENCY ONE;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CL.ONE read: response as soon as fastest replica responds (p50 ~2ms, p99 ~10ms)\nCL.QUORUM read: response when 2 of 3 replicas respond (p50 ~5ms, p99 ~25ms)\nCL.ALL read: response when all 3 replicas respond (p50 ~10ms, p99 ~50ms)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-google-spanner-external-consistency",
      children: "Example 3: Google Spanner External Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google Spanner provides ", (0,jsx_runtime.jsx)(_components.em, {
        children: "external consistency"
      }), " — the strongest consistency model for geographically distributed databases. It is equivalent to linearizability but across datacenters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mechanism:"
      }), " Spanner uses the TrueTime API, which exposes a time interval ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[earliest, latest]"
      }), " for the current time. TrueTime guarantees bounded clock skew of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "< 7ms"
      }), " using GPS clocks and atomic clocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TrueTime.now() returns [t_earliest, t_latest]\n\nWrite commit protocol:\n  1. Assign commit timestamp = t_latest of TrueTime.now()\n  2. Wait until t_earliest > assigned timestamp (commit wait)\n  3. Commit to Paxos group\n\nThis ensures that:\n  - A read after a write always sees the write (t_earliest > commit_ts)\n  - Global ordering of transactions is consistent with real time\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Global consistent read across datacenters\nBEGIN;\n  SELECT * FROM users WHERE region = 'US' AND region = 'EU';\n  -- Reads from US datacenter and EU datacenter\n  -- Both results are from a single consistent snapshot\nCOMMIT;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TrueTime skew bound:"
      }), " 1-7ms. Spanner waits 7ms between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t_latest"
      }), " assignment and commit, ensuring all clocks in the system have passed the assigned timestamp. This \"commit wait\" is the performance cost of external consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Timeline:\n  Coordinator: assigns commit_ts = T_latest = 10\n  Coordinator: sleeps until TrueTime.earliest > 10 (minimum 7ms)\n  Coordinator: commits, now safe because all clocks > 10\n  Client reads after commit ? all nodes have time > 10 ? sees write\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Datacenter US-East\"\n        A1[Spanner Server] --- B1[GPS Clock]\n        A1 --- C1[Atomic Clock]\n    end\n    subgraph \"Datacenter EU-West\"\n        A2[Spanner Server] --- B2[GPS Clock]\n        A2 --- C2[Atomic Clock]\n    end\n    subgraph \"Datacenter Asia-East\"\n        A3[Spanner Server] --- B3[GPS Clock]\n        A3 --- C3[Atomic Clock]\n    end\n    C[Client] --> D[TrueTime API]\n    D --> A1 & A2 & A3\n    A1 --> E[Paxos Group US]\n    A2 --> F[Paxos Group EU]\n    A3 --> G[Paxos Group Asia]\n    E & F & G --> H[Global Snapshot]\n"
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
            children: "Core topic in Chapter 6: CAP Theorem and Distributed Consistency"
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
            children: "Essential concept from Chapter 6: CAP Theorem and Distributed Consistency"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the key takeaway from this chapter?"]
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
          }), " Which concept is most critical for distributed systems?"]
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
                children: "Q3:"
              }), " How does this topic apply to FAANG-level system design?"]
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
                children: ["Answer</summary>Refer to the chapter content</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-quorum-vector-clock-crdt-and-cap-simulator",
                  children: "TypeScript: Quorum, Vector Clock, CRDT, and CAP Simulator"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class QuorumReader {\n  constructor(private n: number, private w: number, private r: number) {\n    if (w + r <= n) throw new Error(\"Quorum condition W+R > N not met\");\n  }\n\n  async write(key: string, value: string, replicas: { write: (k: string, v: string) => Promise<boolean> }[]): Promise<number> {\n    let acks = 0;\n    for (const rep of replicas) { try { if (await rep.write(key, value)) acks++; } catch {} }\n    if (acks < this.w) throw new Error(`Write failed: ${acks}/${this.w} acks`);\n    return acks;\n  }\n\n  async read<T>(key: string, replicas: { read: (k: string) => Promise<T | null> }[]): Promise<{ value: T | null; version: number }[]> {\n    const results: { value: T | null; version: number }[] = [];\n    for (const rep of replicas) {\n      try { const val = await rep.read(key); if (val !== null) results.push({ value: val, version: 1 }); } catch {}\n    }\n    if (results.length < this.r) throw new Error(`Read failed: ${results.length}/${this.r} responses`);\n    return results;\n  }\n}\n\nclass VectorClock {\n  private clock = new Map<string, number>();\n\n  tick(nodeId: string): void { this.clock.set(nodeId, (this.clock.get(nodeId) ?? 0) + 1); }\n\n  get(nodeId: string): number { return this.clock.get(nodeId) ?? 0; }\n\n  isAfter(other: VectorClock): boolean {\n    let atLeastOneGreater = false;\n    const allNodes = new Set([...this.clock.keys(), ...other.clock.keys()]);\n    for (const n of allNodes) {\n      if (this.get(n) < other.get(n)) return false;\n      if (this.get(n) > other.get(n)) atLeastOneGreater = true;\n    }\n    return atLeastOneGreater;\n  }\n\n  isConcurrent(other: VectorClock): boolean { return !this.isAfter(other) && !other.isAfter(this); }\n\n  merge(other: VectorClock): void {\n    const allNodes = new Set([...this.clock.keys(), ...other.clock.keys()]);\n    for (const n of allNodes) this.clock.set(n, Math.max(this.get(n), other.get(n)));\n  }\n}\n\nclass GCounter {\n  private counts = new Map<string, number>();\n\n  increment(nodeId: string): void { this.counts.set(nodeId, (this.counts.get(nodeId) ?? 0) + 1); }\n\n  value(): number { return [...this.counts.values()].reduce((a, b) => a + b, 0); }\n\n  merge(other: GCounter): void {\n    const allNodes = new Set([...this.counts.keys(), ...other.counts.keys()]);\n    for (const n of allNodes) this.counts.set(n, Math.max(this.counts.get(n) ?? 0, other.counts.get(n) ?? 0));\n  }\n}\n\nclass CAPSimulator {\n  simulatePartition(chooseConsistency: boolean): string[] {\n    const events: string[] = [];\n    events.push(\"Network partition occurs - clients cannot reach all replicas\");\n    if (chooseConsistency) {\n      events.push(\"System chooses CONSISTENCY: rejects writes to minority partition\");\n      events.push(\"Minority partition becomes unavailable (CP)\");\n      events.push(\"All clients see the same data when the partition heals\");\n    } else {\n      events.push(\"System chooses AVAILABILITY: accepts writes on both sides\");\n      events.push(\"Both partitions remain fully available (AP)\");\n      events.push(\"Data diverges; conflict resolution needed when partition heals\");\n    }\n    return events;\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "implementation-distributed-consensus-and-replication",
                  children: "Implementation: Distributed Consensus and Replication"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "enum RaftRole { FOLLOWER, CANDIDATE, LEADER }\ninterface LogEntry { term: number; command: string; index: number; }\nclass RaftNode {\n  public role = RaftRole.FOLLOWER; public currentTerm = 0; public votedFor: string | null = null;\n  public log: LogEntry[] = []; public commitIndex = 0; public lastApplied = 0;\n  constructor(public id: string, private peers: string[]) {}\n  startElection(): { term: number; votes: number; won: boolean } {\n    this.role = RaftRole.CANDIDATE; this.currentTerm++; this.votedFor = this.id; let votes = 1;\n    for (const p of this.peers) { if (this.requestVote(p)) votes++; }\n    const won = votes > this.peers.length / 2;\n    if (won) this.role = RaftRole.LEADER;\n    return { term: this.currentTerm, votes, won }; }\n  private requestVote(peer: string): boolean { return true; }\n  appendEntries(entries: LogEntry[]): boolean {\n    if (this.role !== RaftRole.FOLLOWER) return false;\n    this.log.push(...entries); this.commitIndex = this.log.length - 1; return true; }\n}\nclass PaxosProposer { public proposalNum = 0; public value: any = null;\n  prepare(acceptors: PaxosAcceptor[]): { ok: boolean; lastValue: any } {\n    this.proposalNum++; let promises = 0; let lastValue: any = null;\n    for (const a of acceptors) { const r = a.prepare(this.proposalNum); if (r.promise) promises++; if (r.lastAccepted !== null) lastValue = r.lastAccepted; }\n    return { ok: promises > acceptors.length / 2, lastValue }; }\n  accept(acceptors: PaxosAcceptor[], value: any): boolean {\n    this.value = value; let accepted = 0;\n    for (const a of acceptors) { if (a.accept(this.proposalNum, value)) accepted++; }\n    return accepted > acceptors.length / 2; }\n}\nclass PaxosAcceptor {\n  public minProposal = 0; public acceptedProposal = 0; public acceptedValue: any = null;\n  prepare(n: number): { promise: boolean; lastAccepted: any } {\n    if (n > this.minProposal) { this.minProposal = n; return { promise: true, lastAccepted: this.acceptedValue }; }\n    return { promise: false, lastAccepted: null }; }\n  accept(n: number, value: any): boolean {\n    if (n >= this.minProposal) { this.minProposal = n; this.acceptedProposal = n; this.acceptedValue = value; return true; }\n    return false; }\n}\nclass GossipProtocol {\n  private state = new Map<string, { value: any; version: number }>(); private peers: string[] = [];\n  addPeer(id: string): void { this.peers.push(id); }\n  update(key: string, value: any): void { const ver = (this.state.get(key)?.version || 0) + 1; this.state.set(key, { value, version: ver }); }\n  gossip(): { key: string; value: any; version: number }[] { return [...this.state.entries()].map(([k, v]) => ({ key: k, value: v.value, version: v.version })); }\n  merge(updates: { key: string; value: any; version: number }[]): void { for (const u of updates) { const existing = this.state.get(u.key); if (!existing || u.version > existing.version) this.state.set(u.key, { value: u.value, version: u.version }); } }\n}\nclass TwoPC { private cohort: string[] = []; addCohort(id: string): void { this.cohort.push(id); } prepare(txn: string): boolean { console.log(`Prepare ${txn} on ${this.cohort.length} cohorts`); return true; } commit(txn: string): void { console.log(`Commit ${txn}`); } abort(txn: string): void { console.log(`Abort ${txn}`); } }\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// distributed consistency\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'distributed consistency', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// distributed consistency - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'distributed consistency' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-quorumreader-wr--n-with-read-repair",
                  children: "TypeScript: QuorumReader (W+R > N with Read Repair)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["This class implements a Dynamo-style quorum read/write system with read repair and hinted handoff, demonstrating the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "W + R > N"
                  }), " consistency guarantee."]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface Replica {\n  id: string;\n  data: Map<string, { value: string; version: number; timestamp: number }>;\n  alive: boolean;\n}\n\nclass QuorumReader {\n  private replicas: Replica[] = [];\n\n  constructor(\n    private n: number,\n    private w: number,\n    private r: number\n  ) {\n    if (w + r <= n) throw new Error(`W+R > N required: ${w}+${r} <= ${n}`);\n  }\n\n  addReplica(id: string): void {\n    this.replicas.push({ id, data: new Map(), alive: true });\n  }\n\n  markReplicaStatus(id: string, alive: boolean): void {\n    const rep = this.replicas.find(r => r.id === id);\n    if (rep) rep.alive = alive;\n  }\n\n  async write(key: string, value: string): Promise<{ success: boolean; acks: number; version: number }> {\n    const aliveReplicas = this.replicas.filter(r => r.alive);\n    const selected = aliveReplicas.slice(0, this.n);\n    let acks = 0;\n    const version = Date.now();\n\n    const results = await Promise.allSettled(\n      selected.map(async (rep) => {\n        rep.data.set(key, { value, version, timestamp: Date.now() });\n        acks++;\n      })\n    );\n\n    const hintedHandoff: string[] = [];\n    if (acks < this.w) {\n      for (const rep of this.replicas.filter(r => !r.alive)) {\n        hintedHandoff.push(rep.id);\n      }\n    }\n\n    return {\n      success: acks >= this.w,\n      acks,\n      version,\n    };\n  }\n\n  async read(key: string): Promise<{ value: string | null; version: number; readRepaired: boolean }> {\n    const aliveReplicas = this.replicas.filter(r => r.alive);\n    const selected = aliveReplicas.slice(0, this.n);\n    const responses: { rep: Replica; value: string; version: number }[] = [];\n\n    for (const rep of selected) {\n      const entry = rep.data.get(key);\n      if (entry) {\n        responses.push({ rep, value: entry.value, version: entry.version });\n      }\n    }\n\n    if (responses.length < this.r) {\n      return { value: null, version: 0, readRepaired: false };\n    }\n\n    responses.sort((a, b) => b.version - a.version);\n    const latest = responses[0];\n\n    // Read repair: update stale replicas\n    let readRepaired = false;\n    for (const resp of responses) {\n      if (resp.version < latest.version) {\n        resp.rep.data.set(key, { value: latest.value, version: latest.version, timestamp: Date.now() });\n        readRepaired = true;\n      }\n    }\n\n    return { value: latest.value, version: latest.version, readRepaired };\n  }\n\n  isStronglyConsistent(): boolean {\n    return this.w + this.r > this.n;\n  }\n\n  maxFailuresTolerated(): number {\n    return this.n - Math.max(this.w, this.r);\n  }\n\n  stats(): { n: number; w: number; r: number; strong: boolean; replicas: number; alive: number } {\n    return {\n      n: this.n, w: this.w, r: this.r,\n      strong: this.isStronglyConsistent(),\n      replicas: this.replicas.length,\n      alive: this.replicas.filter(r => r.alive).length,\n    };\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst qr = new QuorumReader(3, 2, 2);\nqr.addReplica('node-a'); qr.addReplica('node-b'); qr.addReplica('node-c');\n\nconst w = await qr.write('user:42', '{\"name\":\"Alice\"}');\nconsole.log('Write:', w.success ? `ACK (v${w.version})` : 'FAILED');\n\nqr.markReplicaStatus('node-a', false);\nconst r = await qr.read('user:42');\nconsole.log('Read:', r.value, '| Read repaired:', r.readRepaired);\nconsole.log('Consistency:', qr.isStronglyConsistent() ? 'STRONG' : 'EVENTUAL');\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-vector-clock-causality-and-concurrency-detection",
                  children: "TypeScript: Vector Clock (Causality and Concurrency Detection)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class implements vector clocks with tick, compare, and merge operations for detecting causal relationships and concurrent updates."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class VectorClock {\n  private clock: Map<string, number> = new Map();\n\n  constructor(...initial: [string, number][]) {\n    for (const [node, ts] of initial) this.clock.set(node, ts);\n  }\n\n  tick(nodeId: string): void {\n    this.clock.set(nodeId, (this.clock.get(nodeId) ?? 0) + 1);\n  }\n\n  get(nodeId: string): number {\n    return this.clock.get(nodeId) ?? 0;\n  }\n\n  getAll(): Map<string, number> {\n    return new Map(this.clock);\n  }\n\n  compare(other: VectorClock): 'before' | 'after' | 'concurrent' | 'equal' {\n    const allNodes = new Set([...this.clock.keys(), ...other.clock.keys()]);\n    let thisAhead = false;\n    let otherAhead = false;\n\n    for (const node of allNodes) {\n      const tv = this.get(node);\n      const ov = other.get(node);\n      if (tv > ov) thisAhead = true;\n      if (tv < ov) otherAhead = true;\n    }\n\n    if (!thisAhead && !otherAhead) return 'equal';\n    if (thisAhead && !otherAhead) return 'after';\n    if (!thisAhead && otherAhead) return 'before';\n    return 'concurrent';\n  }\n\n  isConcurrent(other: VectorClock): boolean {\n    return this.compare(other) === 'concurrent';\n  }\n\n  happensBefore(other: VectorClock): boolean {\n    return this.compare(other) === 'before';\n  }\n\n  merge(other: VectorClock): void {\n    const allNodes = new Set([...this.clock.keys(), ...other.clock.keys()]);\n    for (const node of allNodes) {\n      this.clock.set(node, Math.max(this.get(node), other.get(node)));\n    }\n  }\n\n  clone(): VectorClock {\n    const vc = new VectorClock();\n    for (const [node, ts] of this.clock) vc.clock.set(node, ts);\n    return vc;\n  }\n\n  toString(): string {\n    const parts = [...this.clock.entries()]\n      .sort(([a], [b]) => a.localeCompare(b))\n      .map(([k, v]) => `${k}=${v}`);\n    return `[${parts.join(', ')}]`;\n  }\n\n  static fromString(str: string): VectorClock {\n    const vc = new VectorClock();\n    const match = str.match(/\\[(.*?)\\]/);\n    if (match) {\n      for (const part of match[1].split(',').map(s => s.trim())) {\n        const [k, v] = part.split('=');\n        if (k && v) vc.clock.set(k.trim(), parseInt(v.trim(), 10));\n      }\n    }\n    return vc;\n  }\n\n  static simulateConcurrentWrites(): { v1: VectorClock; v2: VectorClock; result: string } {\n    const vc1 = new VectorClock();\n    const vc2 = new VectorClock();\n\n    vc1.tick('A'); vc1.tick('A'); vc1.tick('A'); // A writes 3 times\n    vc2.tick('B'); vc2.tick('B'); // B writes 2 times\n\n    // Concurrent: neither dominates\n    const cmp = vc1.compare(vc2);\n    return {\n      v1: vc1.clone(),\n      v2: vc2.clone(),\n      result: cmp, // should be 'concurrent'\n    };\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst sim = VectorClock.simulateConcurrentWrites();\nconsole.log('VC1:', sim.v1.toString());\nconsole.log('VC2:', sim.v2.toString());\nconsole.log('Comparison:', sim.result);\n\n// Causal relationship\nconst causal1 = new VectorClock(['A', 1]);\ncausal1.tick('A');\n\nconst causal2 = new VectorClock(['A', 2]);\nconsole.log('Causal check (1->2):', causal1.happensBefore(causal2) ? 'happens-before' : 'concurrent');\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-raft-consensus-leader-election-and-log-replication",
                  children: "TypeScript: Raft Consensus (Leader Election and Log Replication)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class simulates the Raft consensus algorithm — leader election, log replication, and commit — with configurable cluster size and failure scenarios."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "type RaftRole = 'follower' | 'candidate' | 'leader';\n\ninterface RaftLogEntry {\n  term: number;\n  command: string;\n  index: number;\n}\n\nclass RaftNode {\n  role: RaftRole = 'follower';\n  currentTerm = 0;\n  votedFor: string | null = null;\n  log: RaftLogEntry[] = [];\n  commitIndex = 0;\n  lastApplied = 0;\n  electionTimeout: number;\n  private peers: RaftNode[] = [];\n  private heartbeatInterval: number;\n  private lastHeartbeat: number = Date.now();\n\n  constructor(\n    public id: string,\n    electionTimeoutMs: number = 150,\n    heartbeatMs: number = 50\n  ) {\n    this.electionTimeout = electionTimeoutMs + Math.random() * 150;\n    this.heartbeatInterval = heartbeatMs;\n  }\n\n  setPeers(peers: RaftNode[]): void {\n    this.peers = peers;\n  }\n\n  startElection(): { success: boolean; term: number; votesReceived: number } {\n    this.role = 'candidate';\n    this.currentTerm++;\n    this.votedFor = this.id;\n    let votes = 1; // vote for self\n\n    for (const peer of this.peers) {\n      if (peer.id === this.id) continue;\n      if (peer.requestVote(this.currentTerm, this.id)) {\n        votes++;\n      }\n    }\n\n    const majority = Math.floor((this.peers.length + 1) / 2) + 1;\n    if (votes >= majority) {\n      this.role = 'leader';\n      this.lastHeartbeat = Date.now();\n    } else {\n      this.role = 'follower';\n    }\n\n    return { success: this.role === 'leader', term: this.currentTerm, votesReceived: votes };\n  }\n\n  private requestVote(term: number, candidateId: string): boolean {\n    if (term < this.currentTerm) return false;\n    if (term > this.currentTerm) {\n      this.currentTerm = term;\n      this.role = 'follower';\n      this.votedFor = null;\n    }\n    if (this.votedFor === null || this.votedFor === candidateId) {\n      this.votedFor = candidateId;\n      return true;\n    }\n    return false;\n  }\n\n  appendEntries(prevLogIndex: number, prevLogTerm: number, entries: RaftLogEntry[], leaderCommit: number): boolean {\n    if (entries.length === 0) {\n      // Heartbeat\n      this.lastHeartbeat = Date.now();\n      if (leaderCommit > this.commitIndex) {\n        this.commitIndex = Math.min(leaderCommit, this.log.length - 1);\n      }\n      return true;\n    }\n\n    if (prevLogIndex >= this.log.length) return false;\n    if (prevLogIndex >= 0 && this.log[prevLogIndex].term !== prevLogTerm) return false;\n\n    let newIndex = prevLogIndex + 1;\n    for (let i = 0; i < entries.length; i++) {\n      if (newIndex + i < this.log.length) {\n        this.log[newIndex + i] = entries[i];\n      } else {\n        this.log.push(entries[i]);\n      }\n    }\n\n    if (leaderCommit > this.commitIndex) {\n      this.commitIndex = Math.min(leaderCommit, this.log.length - 1);\n    }\n    return true;\n  }\n\n  sendHeartbeats(): void {\n    if (this.role !== 'leader') return;\n    for (const peer of this.peers) {\n      if (peer.id === this.id) continue;\n      peer.appendEntries(\n        this.log.length - 1,\n        this.log.length > 0 ? this.log[this.log.length - 1].term : 0,\n        [],\n        this.commitIndex\n      );\n    }\n  }\n\n  detectTimeout(timeoutMs: number = 300): boolean {\n    if (this.role === 'leader') return false;\n    return Date.now() - this.lastHeartbeat > timeoutMs;\n  }\n\n  simulateCluster(command: string): { leader: string | null; committed: boolean; entries: number } {\n    // Leader proposes entry\n    if (this.role !== 'leader') {\n      return { leader: null, committed: false, entries: this.log.length };\n    }\n\n    const entry: RaftLogEntry = { term: this.currentTerm, command, index: this.log.length };\n    this.log.push(entry);\n\n    let replicasAcked = 1; // self-ack\n    for (const peer of this.peers) {\n      if (peer.id === this.id) continue;\n      if (peer.appendEntries(this.log.length - 2, entry.term - 1, [entry], this.commitIndex)) {\n        replicasAcked++;\n      }\n    }\n\n    const majority = Math.floor((this.peers.length + 1) / 2) + 1;\n    if (replicasAcked >= majority) {\n      this.commitIndex = this.log.length - 1;\n      return { leader: this.id, committed: true, entries: this.log.length };\n    }\n    return { leader: this.id, committed: false, entries: this.log.length };\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst nodes = [0, 1, 2, 3, 4].map(i => new RaftNode(`node-${i}`, 150 + i * 30, 50));\nfor (const n of nodes) n.setPeers(nodes);\n\nconst leader = nodes[0];\nleader.startElection();\nconsole.log('Leader elected:', leader.id, 'Term:', leader.currentTerm);\n\nconst result = leader.simulateCluster('SET x=42');\nconsole.log('Propose command:', result.committed ? 'COMMITTED' : 'REJECTED', '| Entries:', result.entries);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "consistency-models-spectrum",
                  children: "Consistency Models Spectrum"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart LR\n    classDef strong fill:#4a90d9,color:#fff,stroke:#2c5f8a,stroke-width:2px\n    classDef moderate fill:#7ed321,color:#fff,stroke:#4a8c14,stroke-width:2px\n    classDef weak fill:#f5a623,color:#fff,stroke:#c47f12,stroke-width:2px\n    classDef example fill:#eee,color:#333,stroke:#999,stroke-width:2px\n\n    subgraph Consistency_Spectrum\n        direction LR\n        TITLE[Consistency Models Spectrum]:::example\n\n        STRONG[Strong<br/>Linearizability]:::strong\n        SEQ[Sequential]:::strong\n        CAUSAL[Causal]:::moderate\n        RYW[Read-Your-Writes]:::moderate\n        MONO[Monotonic Reads]:::moderate\n        EVENT[Eventual]:::weak\n\n        STRONG --> SEQ --> CAUSAL --> RYW --> MONO --> EVENT\n    end\n\n    subgraph Properties\n        STRONG_P[\"+ Atomic global order<br/>+ Linearizable<br/>- Highest latency<br/>- Unavailable during partition\"]:::example\n        CAUSAL_P[\"+ Causality preserved<br/>+ No clock skew issues<br/>+ Available during partition<br/>- Partial ordering only\"]:::example\n        EVENT_P[\"+ Maximum availability<br/>+ Lowest latency<br/>- No ordering guarantees<br/>- Conflict resolution required\"]:::example\n    end\n\n    STRONG -.-> STRONG_P\n    STRONG -.- SPANNER[\"spanner<br/>ZooKeeper<br/>etcd\"]:::strong\n    CAUSAL -.-> CAUSAL_P\n    CAUSAL -.- DYNAMO[\"DynamoDB<br/>Cassandra<br/>Riak\"]:::moderate\n    EVENT -.-> EVENT_P\n    EVENT -.- DNS[\"DNS<br/>CDN<br/>Memcached\"]:::weak\n\n    subgraph CAP_Tradeoffs\n        CAP_TITLE[CAP / PACELC Trade-offs]:::example\n        CP[\"CP Systems<br/>Consistency > Availability<br/>Partition = Reject writes\"]:::strong\n        AP[\"AP Systems<br/>Availability > Consistency<br/>Partition = Accept all writes\"]:::weak\n        EL[\"Normal: Low Latency<br/>Eventual consistency\"]:::moderate\n        EC[\"Normal: Strong Consistency<br/>Higher Latency\"]:::strong\n    end\n"
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
                        children: "CAP applies only during partitions"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "In normal operation (no partition), you can have both consistency and availability — optimize for the common case"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "PACELC captures the real trade-off"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "During normal operation, choose between low latency (eventual consistency) and strong consistency (coordination overhead)"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "W+R > N guarantees strong consistency"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Configure N=3, W=2, R=2 for balanced strong consistency with single-node fault tolerance"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Vector clocks detect but don't resolve conflicts"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use vector clocks to detect concurrent writes; defer conflict resolution to application logic or CRDTs"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "CRDTs eliminate conflicts by design"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use G-Counter for counters, PN-Counter for +/- counters, OR-Set for sets with add/remove — no conflict resolution needed"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Raft provides understandable consensus"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Leader election + log replication + committed entries. Used by etcd, Consul, and MongoDB (replica set)"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Merkle trees enable O(log N) anti-entropy"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Exchange root hashes; recursively drill down to find exact differing keys — scales to billions of keys"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "case-study",
                  children: "Case Study"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Google Spanner — External Consistency at Global Scale."
                  }), " Google Spanner is the first globally distributed database to provide external consistency (the strongest consistency model, equivalent to linearizability across data centers). The defining challenge was coordinating writes across 100+ data centers while maintaining serializable isolation — a problem that traditional consensus algorithms (Paxos, Raft) could not solve because they rely on physical clocks, which drift across data centers by 10-100ms. Spanner's innovation was TrueTime, a hardware-assisted time synchronization service built on GPS receivers and atomic clocks in each data center. TrueTime exposes a time interval ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "[earliest, latest]"
                  }), " with bounded uncertainty of 1-7ms, allowing Spanner to assign commit timestamps that are guaranteed to be globally unique and consistent with real-time order."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Architecture Details."
                  }), " Spanner uses a two-layer replication architecture. The top layer is a Paxos group per shard (each shard = ~2-4 GB of data). The bottom layer is TrueTime-driven commit wait: after a Paxos leader assigns a commit timestamp ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "t = TT.now().latest"
                  }), ", it waits until ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "TT.now().earliest > t"
                  }), " before marking the write as committed. This \"commit wait\" (typically 7ms) guarantees that any subsequent read, anywhere in the world, will observe the write because all clocks in the system have passed the commit timestamp. Reads use a similar mechanism — a read timestamp is chosen and the system waits until ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "TT.now().earliest > read_timestamp"
                  }), " to ensure all writes up to that point are visible."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Business Impact."
                  }), " Spanner powers Google's most critical applications: Google Ads (formerly AdWords), Google Play, and Google Search indexing. The switch from a sharded MySQL deployment to Spanner reduced operational complexity by 80% (no more manual shard management) and enabled cross-datacenter reads with strong consistency. The TrueTime commit wait adds 7ms of latency per write — an acceptable cost for applications that need global ACID transactions. The key lesson: Spanner did not sacrifice consistency for scale — it used physical infrastructure (GPS + atomic clocks) to make a previously impossible trade-off (linearizability at global scale) feasible. For systems that do not need external consistency, Spanner's approach is over-engineered; for financial, auction, and advertising systems where every cent must be accounted for correctly, it is the only correct choice."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "chapter-quiz-1",
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
                        children: "What does the CAP theorem state?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "A system can have all three of C, A, P"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "During a partition, choose C or A"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Consistency is always optional"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Availability is always guaranteed"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What does PACELC add beyond CAP?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Performance metrics"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Latency vs consistency trade-off during normal operation"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Partition detection"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Cost analysis"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "3"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What is the quorum condition for strong consistency?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W + R < N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W + R = N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W + R > N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W = R = N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "4"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Which clock type can detect concurrent updates?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Lamport clock"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Vector clock"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Physical clock"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Logical clock"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What mechanism does Spanner use for external consistency?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "GPS synchronization"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Paxos consensus"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "TrueTime API"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Atomic broadcasts"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The CAP theorem proves that during a network partition, a distributed system must choose between consistency and availability; it does not apply when the network is healthy"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "PACELC extends CAP by also addressing the latency-vs-consistency trade-off that exists during normal operation"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Strong consistency (linearizability) provides the simplest programming model but requires majority coordination and sacrifices availability under partition"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Eventual consistency offers maximum availability and low latency but requires application-level conflict resolution"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Quorum systems guarantee consistency when ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "W + R > N"
                    }), " and can be tuned per operation for latency-vs-consistency trade-offs"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Read repair and hinted handoff are repair mechanisms that prevent inconsistency from accumulating"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Gossip protocols (infection-style, SWIM) enable failure detection and information dissemination in ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "O(log N)"
                    }), " rounds"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "CRDTs (G-Counter, PN-Counter, OR-Set) mathematically guarantee convergence without coordination by using commutative, associative, idempotent merge functions"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Lamport clocks order causally related events but cannot detect concurrency; vector clocks capture full causality and enable concurrent-write detection"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Merkle trees enable efficient anti-entropy by exchanging ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "O(log N)"
                    }), " hashes instead of ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "O(N)"
                    }), " keys"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The Chandy-Lamport algorithm captures consistent global snapshots without halting the system by using marker messages"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "exercises",
                  children: "Exercises"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Review Questions — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "review-questions",
                    children: "Review Questions"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Prove that a quorum system with ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "N=5"
                        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "W=3"
                        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "R=3"
                        }), " guarantees that a read always observes the latest completed write. What happens if ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "W=2"
                        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "R=3"
                        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "N=5"
                        }), "?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " W+R = 6 > N = 5, so any read quorum (3 nodes) must overlap with any write quorum (3 nodes) by at least 1 node (pigeonhole principle). The overlapping node returns the latest value. With W=2, R=3: W+R=5 = N, so overlapping node is NOT guaranteed — read quorum may not include the node with the latest write."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["You have a vector clock ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "[3, 0, 5]"
                        }), " from process 0 and ", (0,jsx_runtime.jsx)(_components.code, {
                          children: "[2, 4, 0]"
                        }), " from process 1. Are these causally related or concurrent? Show the comparison.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " For each node: node 0: 3 > 2, node 1: 0 < 4, node 2: 5 > 0. Neither dominates (vc1 has some > and some < vc2). Therefore they are CONCURRENT — representing two independent write branches that need conflict resolution."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["In the Chandy-Lamport snapshot algorithm, what guarantees that two markers sent by the same process on two different channels are received in an order that preserves the consistent cut?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " The FIFO property of channels guarantees that markers sent on a channel are received in order. Once a process records its state and sends markers, all subsequent messages on that channel are part of the post-snapshot state. The consistent cut is preserved because no message is recorded as received before it was sent."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Why does DynamoDB's strongly consistent read consume twice the read capacity compared to an eventually consistent read?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " A strongly consistent read must read from the primary partition (which holds the authoritative latest version) and verify no newer write is pending. This requires a read to the leader and potentially a quorum check, consuming 2x the I/O of an eventually consistent read that can read from any replica."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Spanner's TrueTime waits for a commit-wait interval of 7ms. What would happen if this interval were reduced to 0?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Without commit wait, a write could be visible in one datacenter before its commit timestamp has passed in another datacenter. A subsequent read in the second datacenter with a lower read timestamp could miss the write, violating external consistency (linearizability across datacenters)."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Application Problems — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "application-problems",
                    children: "Application Problems"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Design a quorum configuration:"
                        }), " N=7 (3 US, 2 EU, 2 Asia). 60% reads from US.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Choose W=4, R=4 for strong consistency (W+R=8 > 7). Place US replicas strategically: read from 2 US + 1 EU + 1 Asia for R=4. This minimizes median latency because most reads (60%) complete with 2 local US responses. Failure tolerance: up to 3 nodes can fail before consistency is lost."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Vector clock merges:"
                        }), " P0 writes [1,0,0], P1 reads and writes [1,1,0], P2 concurrently writes [0,0,1].\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " The version tree: root [0,0,0] -> [1,0,0] -> two branches: [1,1,0] (P1) and [0,0,1] (P2). Neither dominates -> CONFLICT. Dynamo-style read repair returns both conflicting values to the application for resolution. The application must merge x=2 and x=3 (e.g., by using LWW or application-specific merge logic)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Gossip convergence analysis:"
                        }), " 1000 nodes, fanout=3.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Each round each node contacts 3 random nodes. After r rounds, the fraction of nodes that have received the update ≈ 1 - (1/1000 * sum of squares)^r. With fanout=3, rounds to 99% ≈ log_3(1000) ≈ 6.3 rounds. With fanout=1: log_1(1000) → doesn't converge logarithmically; need N * (1 - 1/e) per round ≈ O(N) rounds. Practically, fanout=3 achieves 99% in ~7 rounds while fanout=1 takes ~20+ rounds."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Challenge Problem — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "challenge-problem",
                    children: "Challenge Problem"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Design a Multi-Datacenter CRDT-Based Shopping Cart"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Solution Outline:"
                    })
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "CRDT structure:"
                        }), " Use an Observed-Remove Map (OR-Map) with product_id as key and a (counter, tag_set) pair as value. add_item(product_id, qty): if product exists, merge quantities via PN-Counter (increment); if new, add with tag. remove_item(product_id): mark all known tags as removed (add wins). clear_cart(): remove all known tags for all products. update_quantity: treat as add_item with delta (new - old). The merge function: for each (product, tags) pair, take union of tags; if any tags remain, product exists; quantity = max(local_qty, remote_qty)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "State evolution:"
                        }), " Before: DC1={}, DC2={}, DC3={}. After concurrent ops: DC1 adds A(qty=2), then A(qty=1) → {A: qty=3, tags={t1,t2}}. DC2 adds B(qty=1) → {B: qty=1, tags={t3}}. DC3 removes A → {A: qty=0, tags={}}. After gossip replication: all DCs converge to {A: qty=3, tags={t1,t2}, B: qty=1, tags={t3}} because add wins over remove (t1 and t2 are not in the remove set, so A remains)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Replication protocol:"
                        }), " Gossip every 5 seconds with fanout=3. Each node maintains a version vector of last-updated timestamps per key. Anti-entropy: Merkle tree per key range to detect differences; full CRDT state transfer on mismatch. Target convergence: <60s (12 rounds at 5s)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Memory overhead:"
                        }), " Each product entry stores tags (UUID = 16 bytes each). With 10K products and 3 ops/product/day = 30K tags. State size ≈ 10K × (product_id 8B + qty 8B + avg 3 tags × 16B) ≈ 10K × 64B = 640KB. With tombstones: removed products keep their tags until compaction. Optimization: periodic compaction merges tags and discards tombstones older than 24 hours."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Partition scenario:"
                        }), " EU-West isolated for 30s: users in EU can still add/remove items (CRDTs work offline). Other DCs continue. After partition heals: gossip sync merges CRDT states. All operations commute — no data loss. The add-wins semantics ensure that concurrent adds survive even if a concurrent remove occurred in another DC."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n"]
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