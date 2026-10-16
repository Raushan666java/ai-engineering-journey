"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3713],{

/***/ 7213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_24_transactions_md_684_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-24-transactions-md-684.json
const site_docs_courses_java_24_transactions_md_684_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/24-transactions","title":"Transaction Management","description":"Transactions are the bedrock of reliable data processing. A transaction groups multiple operations into a single unit of work that either succeeds completely (commit) or fails entirely (rollback), preserving data integrity even under concurrent access, hardware failures, and application crashes.","source":"@site/docs/courses/java/24-transactions.md","sourceDirName":"courses/java","slug":"/java/24-transactions","permalink":"/ai-engineering-journey/java/24-transactions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"id":"24-transactions","slug":"/java/24-transactions","title":"Transaction Management","sidebar_label":"Transaction Management","sidebar_position":24},"sidebar":"course-java","previous":{"title":"Spring Data for NoSQL","permalink":"/ai-engineering-journey/java/23-nosql"},"next":{"title":"Authentication & Authorization","permalink":"/ai-engineering-journey/java/25-auth-authz"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/24-transactions.md


const frontMatter = {
	id: '24-transactions',
	slug: '/java/24-transactions',
	title: 'Transaction Management',
	sidebar_label: 'Transaction Management',
	sidebar_position: 24
};
const contentTitle = 'Transaction Management';

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
  "value": "@Transactional — Declarative Transactions",
  "id": "transactional--declarative-transactions",
  "level": 2
}, {
  "value": "Basic Usage",
  "id": "basic-usage",
  "level": 3
}, {
  "value": "How @Transactional Works",
  "id": "how-transactional-works",
  "level": 3
}, {
  "value": "Propagation Behaviors",
  "id": "propagation-behaviors",
  "level": 3
}, {
  "value": "REQUIRES_NEW In-Depth",
  "id": "requires_new-in-depth",
  "level": 3
}, {
  "value": "NESTED Behavior with Savepoints",
  "id": "nested-behavior-with-savepoints",
  "level": 3
}, {
  "value": "Isolation Levels",
  "id": "isolation-levels",
  "level": 3
}, {
  "value": "rollbackFor and noRollbackFor",
  "id": "rollbackfor-and-norollbackfor",
  "level": 3
}, {
  "value": "readOnly Flag",
  "id": "readonly-flag",
  "level": 3
}, {
  "value": "timeout",
  "id": "timeout",
  "level": 3
}, {
  "value": "Complete @Transactional Example",
  "id": "complete-transactional-example",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "TransactionTemplate — Programmatic Transactions",
  "id": "transactiontemplate--programmatic-transactions",
  "level": 2
}, {
  "value": "Basic TransactionTemplate",
  "id": "basic-transactiontemplate",
  "level": 3
}, {
  "value": "TransactionCallback with Return Value",
  "id": "transactioncallback-with-return-value",
  "level": 3
}, {
  "value": "Lambda Syntax",
  "id": "lambda-syntax",
  "level": 3
}, {
  "value": "Per-Item Transactions with TransactionTemplate",
  "id": "per-item-transactions-with-transactiontemplate",
  "level": 3
}, {
  "value": "Dynamic Transaction Attributes",
  "id": "dynamic-transaction-attributes",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-2",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-2",
  "level": 2
}, {
  "value": "PlatformTransactionManager Hierarchy",
  "id": "platformtransactionmanager-hierarchy",
  "level": 2
}, {
  "value": "Interface Hierarchy",
  "id": "interface-hierarchy",
  "level": 3
}, {
  "value": "DataSourceTransactionManager",
  "id": "datasourcetransactionmanager",
  "level": 3
}, {
  "value": "JpaTransactionManager",
  "id": "jpatransactionmanager",
  "level": 3
}, {
  "value": "JtaTransactionManager",
  "id": "jtatransactionmanager",
  "level": 3
}, {
  "value": "ChainedTransactionManager",
  "id": "chainedtransactionmanager",
  "level": 3
}, {
  "value": "Custom PlatformTransactionManager",
  "id": "custom-platformtransactionmanager",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-3",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-3",
  "level": 2
}, {
  "value": "Transaction Synchronization",
  "id": "transaction-synchronization",
  "level": 2
}, {
  "value": "@TransactionalEventListener",
  "id": "transactionaleventlistener",
  "level": 3
}, {
  "value": "TransactionSynchronizationManager",
  "id": "transactionsynchronizationmanager",
  "level": 3
}, {
  "value": "Registering Synchronization from @Transactional Methods",
  "id": "registering-synchronization-from-transactional-methods",
  "level": 3
}, {
  "value": "Resource Binding",
  "id": "resource-binding",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-4",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-4",
  "level": 2
}, {
  "value": "Declarative vs Programmatic Transactions",
  "id": "declarative-vs-programmatic-transactions",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-5",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-5",
  "level": 2
}, {
  "value": "Distributed Transactions",
  "id": "distributed-transactions",
  "level": 2
}, {
  "value": "JTA and the Two-Phase Commit Protocol",
  "id": "jta-and-the-two-phase-commit-protocol",
  "level": 3
}, {
  "value": "Atomikos Configuration",
  "id": "atomikos-configuration",
  "level": 3
}, {
  "value": "Narayana Configuration",
  "id": "narayana-configuration",
  "level": 3
}, {
  "value": "Limitations of 2PC / XA",
  "id": "limitations-of-2pc--xa",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-6",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-6",
  "level": 2
}, {
  "value": "Saga Pattern",
  "id": "saga-pattern",
  "level": 2
}, {
  "value": "Choreography Saga",
  "id": "choreography-saga",
  "level": 3
}, {
  "value": "Orchestration Saga",
  "id": "orchestration-saga",
  "level": 3
}, {
  "value": "Saga with Kafka",
  "id": "saga-with-kafka",
  "level": 3
}, {
  "value": "Compensating Transaction Pattern",
  "id": "compensating-transaction-pattern",
  "level": 3
}, {
  "value": "Eventuate Tram",
  "id": "eventuate-tram",
  "level": 3
}, {
  "value": "Axon Saga",
  "id": "axon-saga",
  "level": 3
}, {
  "value": "Saga with REST Callbacks",
  "id": "saga-with-rest-callbacks",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-7",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-7",
  "level": 2
}, {
  "value": "Pessimistic Locking",
  "id": "pessimistic-locking",
  "level": 2
}, {
  "value": "@Lock Annotations",
  "id": "lock-annotations",
  "level": 3
}, {
  "value": "Lock Modes",
  "id": "lock-modes",
  "level": 3
}, {
  "value": "Pessimistic Locking in a Service",
  "id": "pessimistic-locking-in-a-service",
  "level": 3
}, {
  "value": "Lock Timeout",
  "id": "lock-timeout",
  "level": 3
}, {
  "value": "Deadlock Handling",
  "id": "deadlock-handling",
  "level": 3
}, {
  "value": "Deadlock Prevention Strategy",
  "id": "deadlock-prevention-strategy",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-8",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-8",
  "level": 2
}, {
  "value": "Optimistic Locking",
  "id": "optimistic-locking",
  "level": 2
}, {
  "value": "@Version",
  "id": "version",
  "level": 3
}, {
  "value": "How Version Checking Works",
  "id": "how-version-checking-works",
  "level": 3
}, {
  "value": "OptimisticLockException Handling",
  "id": "optimisticlockexception-handling",
  "level": 3
}, {
  "value": "Retry Pattern for Optimistic Locking",
  "id": "retry-pattern-for-optimistic-locking",
  "level": 3
}, {
  "value": "Version Management in REST Controllers",
  "id": "version-management-in-rest-controllers",
  "level": 3
}, {
  "value": "Optimistic vs Pessimistic Comparison",
  "id": "optimistic-vs-pessimistic-comparison",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-9",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-9",
  "level": 2
}, {
  "value": "Transaction Configuration",
  "id": "transaction-configuration",
  "level": 2
}, {
  "value": "Enabling Transaction Management",
  "id": "enabling-transaction-management",
  "level": 3
}, {
  "value": "Custom Transaction Attributes with @Transactional",
  "id": "custom-transaction-attributes-with-transactional",
  "level": 3
}, {
  "value": "Transaction Configuration with Properties",
  "id": "transaction-configuration-with-properties",
  "level": 3
}, {
  "value": "Transaction Template with Custom Configuration",
  "id": "transaction-template-with-custom-configuration",
  "level": 3
}, {
  "value": "Multi-DataSource Transaction Configuration",
  "id": "multi-datasource-transaction-configuration",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-10",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-10",
  "level": 2
}, {
  "value": "Entity and Repository Definitions",
  "id": "entity-and-repository-definitions",
  "level": 2
}, {
  "value": "Application Entry Point",
  "id": "application-entry-point",
  "level": 3
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-11",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-11",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-12",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-12",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "transaction-management",
        children: "Transaction Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transactions are the bedrock of reliable data processing. A transaction groups multiple operations into a single unit of work that either succeeds completely (commit) or fails entirely (rollback), preserving data integrity even under concurrent access, hardware failures, and application crashes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring's transaction management abstracts over JDBC, JPA, JTA, and even non-relational stores behind a consistent programming model. You declare transactional boundaries declaratively with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), ", control propagation and isolation declaratively, and plug in any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PlatformTransactionManager"
      }), " without changing your business logic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covers the entire transaction landscape: from simple local transactions with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " through programmatic control with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionTemplate"
      }), ", to distributed sagas across microservices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Transactional"
        }), " with all seven propagation behaviors and five isolation levels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control rollback behavior with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rollbackFor"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noRollbackFor"
        }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readOnly"
        }), " flag, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeout"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage transactions programmatically using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TransactionTemplate"
        }), " with callbacks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PlatformTransactionManager"
        }), " hierarchy and choose the right implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Synchronize transaction lifecycle events with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TransactionalEventListener"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TransactionSynchronizationManager"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide between declarative and programmatic transaction management for a given scenario"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement distributed transactions with JTA, Atomikos, and the two-phase commit protocol"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement the Saga pattern with choreography and orchestration approaches"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply pessimistic locking with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Lock"
        }), " annotations and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT ... FOR UPDATE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement optimistic locking with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Version"
        }), " and retry logic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactional--declarative-transactions",
      children: "@Transactional — Declarative Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/24-transactions.png",
        alt: "Transaction Management Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " is the cornerstone of Spring's transaction management. When placed on a method or class, it wraps execution in a transactional boundary managed by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PlatformTransactionManager"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class PaymentService {\r\n\r\n    private final AccountRepository accountRepository;\r\n    private final LedgerRepository ledgerRepository;\r\n\r\n    public PaymentService(AccountRepository accountRepository,\r\n                          LedgerRepository ledgerRepository) {\r\n        this.accountRepository = accountRepository;\r\n        this.ledgerRepository = ledgerRepository;\r\n    }\r\n\r\n    @Transactional\r\n    public void transfer(Long fromAccountId, Long toAccountId, BigDecimal amount) {\r\n        Account from = accountRepository.findById(fromAccountId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Source account not found\"));\r\n        Account to = accountRepository.findById(toAccountId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Target account not found\"));\r\n\r\n        from.debit(amount);\r\n        to.credit(amount);\r\n\r\n        accountRepository.save(from);\r\n        accountRepository.save(to);\r\n\r\n        ledgerRepository.logTransfer(fromAccountId, toAccountId, amount);\r\n    }\r\n\r\n    @Transactional(readOnly = true)\r\n    public BigDecimal getBalance(Long accountId) {\r\n        return accountRepository.findById(accountId)\r\n            .map(Account::getBalance)\r\n            .orElse(BigDecimal.ZERO);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-transactional-works",
      children: "How @Transactional Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring creates a proxy around the target bean. When a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " method is invoked, the proxy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks whether a transaction already exists or creates a new one"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invokes the target method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commits if the method returns normally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rolls back if a runtime exception (or specified checked exception) is thrown"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class ProxyDemoService {\r\n\r\n    @Transactional\r\n    public void doWork() {\r\n        // This method runs inside a transaction\r\n    }\r\n\r\n    public void callInternal() {\r\n        // BEWARE: Self-invocation bypasses the proxy!\r\n        // No transaction will be created here:\r\n        this.doWork();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To fix self-invocation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.context.ApplicationContext;\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class SelfInvocationFix {\r\n\r\n    @Autowired\r\n    private ApplicationContext context;\r\n\r\n    @Transactional\r\n    public void doWork() {\r\n        // actual transactional work\r\n    }\r\n\r\n    public void callInternal() {\r\n        // Get the proxy from the context\r\n        SelfInvocationFix proxy = context.getBean(SelfInvocationFix.class);\r\n        proxy.doWork(); // Now @Transactional is effective\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propagation-behaviors",
      children: "Propagation Behaviors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Propagation defines how transactions relate to each other when a transactional method calls another transactional method."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "REQUIRED"
            }), " (default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join existing transaction; create new if none exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "REQUIRES_NEW"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspend existing transaction; create new always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NESTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute within nested transaction (savepoint) if exists; create new otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MANDATORY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail if no existing transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SUPPORTS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join if exists; execute non-transactionally otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NOT_SUPPORTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspend existing transaction; execute non-transactionally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NEVER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail if a transaction exists"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Propagation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n/**\r\n * Demonstrates all seven propagation behaviors.\r\n */\r\n@Service\r\npublic class PropagationDemoService {\r\n\r\n    private final AuditLogRepository auditLogRepository;\r\n    private final NotificationService notificationService;\r\n\r\n    public PropagationDemoService(AuditLogRepository auditLogRepository,\r\n                                   NotificationService notificationService) {\r\n        this.auditLogRepository = auditLogRepository;\r\n        this.notificationService = notificationService;\r\n    }\r\n\r\n    @Transactional\r\n    public void parentOperation() {\r\n        // This runs within a transaction (REQUIRED by default)\r\n\r\n        childRequired();      // joins the same transaction\r\n        childRequiresNew();   // suspends parent, creates new, resumes parent\r\n        childNested();        // creates a savepoint within parent\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.REQUIRED)\r\n    public void childRequired() {\r\n        // Joins the caller's transaction.\r\n        // If caller has none, creates one.\r\n        auditLogRepository.save(new AuditLog(\"required child executed\"));\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\r\n    public void childRequiresNew() {\r\n        // Suspends the caller's transaction and creates a brand new one.\r\n        // The new transaction commits independently — even if the parent\r\n        // rolls back, this child's work is already committed.\r\n        auditLogRepository.save(new AuditLog(\"requires_new child executed\"));\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.NESTED)\r\n    public void childNested() {\r\n        // Creates a JDBC savepoint within the parent transaction.\r\n        // If this child rolls back, the parent can continue.\r\n        // If the parent rolls back, the child goes with it.\r\n        auditLogRepository.save(new AuditLog(\"nested child executed\"));\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.MANDATORY)\r\n    public void childMandatory() {\r\n        // Throws IllegalTransactionStateException if no transaction exists.\r\n        auditLogRepository.save(new AuditLog(\"mandatory child executed\"));\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.SUPPORTS)\r\n    public void childSupports() {\r\n        // Joins if a transaction exists; runs without if none.\r\n        auditLogRepository.save(new AuditLog(\"supports child executed\"));\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.NOT_SUPPORTED)\r\n    public void childNotSupported() {\r\n        // Suspends any existing transaction; runs without transaction.\r\n        auditLogRepository.save(new AuditLog(\"not_supported child executed\"));\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.NEVER)\r\n    public void childNever() {\r\n        // Throws IllegalTransactionStateException if a transaction exists.\r\n        auditLogRepository.save(new AuditLog(\"never child executed\"));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requires_new-in-depth",
      children: "REQUIRES_NEW In-Depth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRES_NEW"
      }), " is used, the parent transaction is suspended. The child starts a new physical transaction, commits independently, and then the parent resumes. If the child succeeds but the parent fails, the child's work persists. This is critical for audit logging, where you must record an operation even if the business operation fails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Propagation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class AuditService {\r\n\r\n    private final AuditLogRepository auditLogRepository;\r\n\r\n    public AuditService(AuditLogRepository auditLogRepository) {\r\n        this.auditLogRepository = auditLogRepository;\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\r\n    public void logAction(String action, String performedBy, String details) {\r\n        AuditLog log = new AuditLog(action, performedBy, details);\r\n        auditLogRepository.save(log);\r\n        // This commit is independent of the caller's transaction\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\r\n    public void logFailure(String action, String performedBy, Throwable error) {\r\n        AuditLog log = new AuditLog(\r\n            action + \"_FAILED\",\r\n            performedBy,\r\n            error.getMessage()\r\n        );\r\n        auditLogRepository.save(log);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nested-behavior-with-savepoints",
      children: "NESTED Behavior with Savepoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "NESTED"
      }), " uses JDBC savepoints to create a sub-transaction within the parent. The nested transaction can roll back independently via a savepoint, without affecting the parent. However, if the parent rolls back, the nested transaction rolls back too."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Propagation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class BulkImportService {\r\n\r\n    private final ItemRepository itemRepository;\r\n\r\n    public BulkImportService(ItemRepository itemRepository) {\r\n        this.itemRepository = itemRepository;\r\n    }\r\n\r\n    @Transactional\r\n    public void bulkImport(List<ImportRow> rows) {\r\n        for (int i = 0; i < rows.size(); i++) {\r\n            try {\r\n                importSingleRow(rows.get(i));\r\n            } catch (Exception e) {\r\n                // Only this row's changes are rolled back\r\n                System.err.println(\"Row \" + i + \" failed, continuing with next\");\r\n            }\r\n        }\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.NESTED)\r\n    public void importSingleRow(ImportRow row) {\r\n        Item item = new Item(row.getName(), row.getPrice());\r\n        itemRepository.save(item);\r\n        // If this throws, only this row's savepoint is rolled back\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isolation-levels",
      children: "Isolation Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isolation controls how transaction changes are visible to other concurrent transactions. The SQL standard defines four levels, each preventing a different set of phenomena:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dirty Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Repeatable Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phantom Read"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "READ_UNCOMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "READ_COMMITTED"
            }), " (default in most databases)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "REPEATABLE_READ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SERIALIZABLE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Isolation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class InventoryService {\r\n\r\n    private final InventoryRepository inventoryRepository;\r\n\r\n    public InventoryService(InventoryRepository inventoryRepository) {\r\n        this.inventoryRepository = inventoryRepository;\r\n    }\r\n\r\n    @Transactional(isolation = Isolation.READ_COMMITTED)\r\n    public int getStockLevel(Long productId) {\r\n        // Default in PostgreSQL, Oracle, SQL Server\r\n        // Guarantees no dirty reads\r\n        return inventoryRepository.getStock(productId);\r\n    }\r\n\r\n    @Transactional(isolation = Isolation.REPEATABLE_READ)\r\n    public void verifyAndDeductStock(Long productId, int quantity) {\r\n        // Prevents non-repeatable reads:\r\n        // If we read twice in this transaction, we see the same value\r\n        int stock = inventoryRepository.getStock(productId);\r\n        if (stock < quantity) {\r\n            throw new InsufficientStockException(productId, quantity, stock);\r\n        }\r\n        inventoryRepository.deductStock(productId, quantity);\r\n    }\r\n\r\n    @Transactional(isolation = Isolation.SERIALIZABLE)\r\n    public void allocateInventory(Long orderId, List<OrderLine> lines) {\r\n        // Strictest level: prevents phantoms and all anomalies\r\n        // Use sparingly — throughput suffers significantly\r\n        for (OrderLine line : lines) {\r\n            int stock = inventoryRepository.getStock(line.getProductId());\r\n            if (stock >= line.getQuantity()) {\r\n                inventoryRepository.deductStock(\r\n                    line.getProductId(), line.getQuantity());\r\n                inventoryRepository.createAllocation(\r\n                    orderId, line.getProductId(), line.getQuantity());\r\n            }\r\n        }\r\n    }\r\n\r\n    @Transactional(isolation = Isolation.READ_UNCOMMITTED)\r\n    public int approximateStockLevel(Long productId) {\r\n        // Allows dirty reads — fastest but least safe\r\n        return inventoryRepository.getStock(productId);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollbackfor-and-norollbackfor",
      children: "rollbackFor and noRollbackFor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " rolls back on runtime (unchecked) exceptions and does NOT roll back on checked exceptions. Override this with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rollbackFor"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noRollbackFor"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class RollbackControlService {\r\n\r\n    private final OrderRepository orderRepository;\r\n\r\n    public RollbackControlService(OrderRepository orderRepository) {\r\n        this.orderRepository = orderRepository;\r\n    }\r\n\r\n    @Transactional(rollbackFor = InsufficientStockException.class)\r\n    public void placeOrder(Order order) throws InsufficientStockException {\r\n        // Will roll back on InsufficientStockException even though it's checked\r\n        orderRepository.save(order);\r\n    }\r\n\r\n    @Transactional(noRollbackFor = PaymentDeclinedException.class)\r\n    public void processPayment(Payment payment) {\r\n        // Will NOT roll back on PaymentDeclinedException (runtime)\r\n        // Useful when you want to save the failed payment record\r\n        paymentRepository.save(payment);\r\n    }\r\n\r\n    @Transactional(rollbackFor = {SQLException.class, DataIntegrityViolationException.class},\r\n                   noRollbackFor = BusinessValidationException.class)\r\n    public void complexRollbackRules(Entity entity) {\r\n        // Custom combination\r\n    }\r\n\r\n    @Transactional(rollbackForClassName = {\"java.sql.SQLException\"},\r\n                   noRollbackForClassName = {\"com.course.tx.OptimisticLockException\"})\r\n    public void rollbackByClassName() {\r\n        // Class name strings — useful when the exception class isn't on the classpath\r\n        // at compile time\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readonly-flag",
      children: "readOnly Flag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "readOnly"
      }), " attribute has different effects depending on the underlying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PlatformTransactionManager"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hibernate/JPA"
        }), ": Sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FlushMode.MANUAL"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clear()"
        }), " after reads, avoiding dirty checking overhead. May also set the JDBC connection to read-only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Connection.setReadOnly(true)"
        }), ") which some databases optimize."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JDBC"
        }), ": Sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "connection.setReadOnly(true)"
        }), ", which some databases use for query optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MongoDB"
        }), ": No effect"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NoSQL generally"
        }), ": May be ignored"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class ReadOnlyDemoService {\r\n\r\n    private final AccountRepository accountRepository;\r\n    private final TransactionRepository transactionRepository;\r\n\r\n    public ReadOnlyDemoService(AccountRepository accountRepository,\r\n                                TransactionRepository transactionRepository) {\r\n        this.accountRepository = accountRepository;\r\n        this.transactionRepository = transactionRepository;\r\n    }\r\n\r\n    @Transactional(readOnly = true)\r\n    public AccountSummary getAccountSummary(Long accountId) {\r\n        // Hibernate skips dirty checking — no flush at commit\r\n        // Database may optimize query path\r\n        Account account = accountRepository.findById(accountId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Account not found\"));\r\n        List<Transaction> recentTxns = transactionRepository\r\n            .findTop10ByAccountIdOrderByDateDesc(accountId);\r\n        return new AccountSummary(account, recentTxns);\r\n    }\r\n\r\n    @Transactional(readOnly = true)\r\n    public List<Account> findAccountsByCustomer(String customerId) {\r\n        return accountRepository.findByCustomerId(customerId);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timeout",
      children: "timeout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "timeout"
      }), " attribute sets the maximum seconds a transaction may run. Exceeding the timeout causes a transaction rollback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class TimeoutDemoService {\r\n\r\n    private final BatchProcessor batchProcessor;\r\n\r\n    public TimeoutDemoService(BatchProcessor batchProcessor) {\r\n        this.batchProcessor = batchProcessor;\r\n    }\r\n\r\n    @Transactional(timeout = 30)\r\n    public void processWithTimeout() {\r\n        // Must complete within 30 seconds or transaction rolls back\r\n        batchProcessor.execute();\r\n    }\r\n\r\n    @Transactional(timeout = 5)\r\n    public void quickOperation() {\r\n        // Tight timeout for fast operations\r\n        batchProcessor.quickTask();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-transactional-example",
      children: "Complete @Transactional Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Isolation;\r\nimport org.springframework.transaction.annotation.Propagation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport java.math.BigDecimal;\r\n\r\n@Service\r\npublic class OrderFulfillmentService {\r\n\r\n    private final PaymentService paymentService;\r\n    private final InventoryService inventoryService;\r\n    private final ShippingService shippingService;\r\n    private final AuditService auditService;\r\n\r\n    public OrderFulfillmentService(PaymentService paymentService,\r\n                                    InventoryService inventoryService,\r\n                                    ShippingService shippingService,\r\n                                    AuditService auditService) {\r\n        this.paymentService = paymentService;\r\n        this.inventoryService = inventoryService;\r\n        this.shippingService = shippingService;\r\n        this.auditService = auditService;\r\n    }\r\n\r\n    @Transactional(\r\n        propagation = Propagation.REQUIRED,\r\n        isolation = Isolation.REPEATABLE_READ,\r\n        rollbackFor = {PaymentFailedException.class, InventoryShortageException.class},\r\n        noRollbackFor = {NotificationFailureException.class},\r\n        timeout = 60,\r\n        readOnly = false\r\n    )\r\n    public Order fulfillOrder(Order order) {\r\n        // 1. Process payment (in this transaction)\r\n        paymentService.processPayment(order.getPayment());\r\n\r\n        // 2. Reserve inventory (in this transaction)\r\n        for (OrderLine line : order.getLines()) {\r\n            inventoryService.reserve(line.getProductId(), line.getQuantity());\r\n        }\r\n\r\n        // 3. Create shipping label (in this transaction)\r\n        ShippingLabel label = shippingService.createLabel(order);\r\n\r\n        order.setStatus(\"FULFILLED\");\r\n        order.setShippingLabel(label);\r\n\r\n        // 4. Log audit independently — uses REQUIRES_NEW\r\n        // This persists even if the main transaction rolls back\r\n        auditService.logAction(\r\n            \"ORDER_FULFILLED\",\r\n            order.getCustomerId(),\r\n            \"Order \" + order.getId() + \" fulfilled\"\r\n        );\r\n\r\n        return order;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactiontemplate--programmatic-transactions",
      children: "TransactionTemplate — Programmatic Transactions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you need fine-grained control over transaction boundaries — for example, looping with per-item transactions or conditionally committing — use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionTemplate"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-transactiontemplate",
      children: "Basic TransactionTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.PlatformTransactionManager;\r\nimport org.springframework.transaction.TransactionDefinition;\r\nimport org.springframework.transaction.TransactionStatus;\r\nimport org.springframework.transaction.support.TransactionCallback;\r\nimport org.springframework.transaction.support.TransactionTemplate;\r\n\r\n@Service\r\npublic class TransactionTemplateService {\r\n\r\n    private final TransactionTemplate transactionTemplate;\r\n\r\n    public TransactionTemplateService(PlatformTransactionManager transactionManager) {\r\n        this.transactionTemplate = new TransactionTemplate(transactionManager);\r\n        this.transactionTemplate.setPropagationBehavior(\r\n            TransactionDefinition.PROPAGATION_REQUIRED);\r\n        this.transactionTemplate.setIsolationLevel(\r\n            TransactionDefinition.ISOLATION_READ_COMMITTED);\r\n        this.transactionTemplate.setTimeout(30);\r\n        this.transactionTemplate.setReadOnly(false);\r\n    }\r\n\r\n    public Order executeInTransaction(Order order) {\r\n        return transactionTemplate.execute(new TransactionCallback<Order>() {\r\n            @Override\r\n            public Order doInTransaction(TransactionStatus status) {\r\n                try {\r\n                    // All operations here are within one transaction\r\n                    orderRepository.save(order);\r\n                    inventoryService.reserve(order.getLines());\r\n                    return order;\r\n                } catch (Exception e) {\r\n                    // Roll back explicitly\r\n                    status.setRollbackOnly();\r\n                    throw new RuntimeException(\"Transaction failed\", e);\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    public void executeWithoutResult(List<Order> orders) {\r\n        transactionTemplate.execute(new TransactionCallbackWithoutResult() {\r\n            @Override\r\n            protected void doInTransactionWithoutResult(TransactionStatus status) {\r\n                for (Order order : orders) {\r\n                    if (order.getAmount().compareTo(BigDecimal.ZERO) < 0) {\r\n                        // Mark this transaction for rollback\r\n                        status.setRollbackOnly();\r\n                        return;\r\n                    }\r\n                    orderRepository.save(order);\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactioncallback-with-return-value",
      children: "TransactionCallback with Return Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.TransactionStatus;\r\nimport org.springframework.transaction.support.TransactionCallback;\r\nimport org.springframework.transaction.support.TransactionTemplate;\r\n\r\nimport java.math.BigDecimal;\r\n\r\n@Service\r\npublic class TransactionCallbackService {\r\n\r\n    private final TransactionTemplate transactionTemplate;\r\n    private final AccountRepository accountRepository;\r\n\r\n    public TransactionCallbackService(TransactionTemplate transactionTemplate,\r\n                                       AccountRepository accountRepository) {\r\n        this.transactionTemplate = transactionTemplate;\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    public BigDecimal transferWithResult(Long fromId, Long toId, BigDecimal amount) {\r\n        return transactionTemplate.execute(new TransactionCallback<BigDecimal>() {\r\n            @Override\r\n            public BigDecimal doInTransaction(TransactionStatus status) {\r\n                Account from = accountRepository.findById(fromId)\r\n                    .orElseThrow(() -> new IllegalArgumentException(\"Account not found\"));\r\n\r\n                Account to = accountRepository.findById(toId)\r\n                    .orElseThrow(() -> new IllegalArgumentException(\"Account not found\"));\r\n\r\n                if (from.getBalance().compareTo(amount) < 0) {\r\n                    status.setRollbackOnly();\r\n                    throw new InsufficientBalanceException(fromId, amount);\r\n                }\r\n\r\n                from.setBalance(from.getBalance().subtract(amount));\r\n                to.setBalance(to.getBalance().add(amount));\r\n\r\n                accountRepository.save(from);\r\n                accountRepository.save(to);\r\n\r\n                return from.getBalance();\r\n            }\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-syntax",
      children: "Lambda Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TransactionTemplate supports lambda syntax for concise code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\n\r\n@Service\r\npublic class LambdaTransactionService {\r\n\r\n    private final TransactionTemplate transactionTemplate;\r\n    private final AccountRepository accountRepository;\r\n\r\n    public LambdaTransactionService(TransactionTemplate transactionTemplate,\r\n                                     AccountRepository accountRepository) {\r\n        this.transactionTemplate = transactionTemplate;\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    public void transferLambda(Long fromId, Long toId, BigDecimal amount) {\r\n        transactionTemplate.executeWithoutResult(status -> {\r\n            Account from = accountRepository.findById(fromId)\r\n                .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n            Account to = accountRepository.findById(toId)\r\n                .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n            from.setBalance(from.getBalance().subtract(amount));\r\n            to.setBalance(to.getBalance().add(amount));\r\n\r\n            accountRepository.save(from);\r\n            accountRepository.save(to);\r\n        });\r\n    }\r\n\r\n    public String createWithLambda(String name) {\r\n        return transactionTemplate.execute(status -> {\r\n            Account account = new Account(name);\r\n            accountRepository.save(account);\r\n            return account.getId().toString();\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "per-item-transactions-with-transactiontemplate",
      children: "Per-Item Transactions with TransactionTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A common pattern: process each item in its own transaction so a single failure does not roll back other items:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.TransactionStatus;\r\nimport org.springframework.transaction.support.TransactionCallbackWithoutResult;\r\nimport org.springframework.transaction.support.TransactionTemplate;\r\n\r\nimport java.util.List;\r\n\r\n@Service\r\npublic class PerItemTransactionService {\r\n\r\n    private final TransactionTemplate transactionTemplate;\r\n    private final ItemRepository itemRepository;\r\n\r\n    public PerItemTransactionService(TransactionTemplate transactionTemplate,\r\n                                      ItemRepository itemRepository) {\r\n        this.transactionTemplate = transactionTemplate;\r\n        this.itemRepository = itemRepository;\r\n    }\r\n\r\n    public void processItemsIndividually(List<ImportRow> items) {\r\n        int successCount = 0;\r\n        int failureCount = 0;\r\n\r\n        for (ImportRow item : items) {\r\n            try {\r\n                transactionTemplate.execute(new TransactionCallbackWithoutResult() {\r\n                    @Override\r\n                    protected void doInTransactionWithoutResult(TransactionStatus status) {\r\n                        Item entity = new Item(item.getName(), item.getPrice());\r\n                        itemRepository.save(entity);\r\n                    }\r\n                });\r\n                successCount++;\r\n            } catch (Exception e) {\r\n                failureCount++;\r\n                System.err.println(\"Failed to import item: \" + item.getName());\r\n            }\r\n        }\r\n\r\n        System.out.println(\"Import complete: \" + successCount + \" succeeded, \"\r\n            + failureCount + \" failed\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-transaction-attributes",
      children: "Dynamic Transaction Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.PlatformTransactionManager;\r\nimport org.springframework.transaction.TransactionDefinition;\r\nimport org.springframework.transaction.TransactionStatus;\r\nimport org.springframework.transaction.support.DefaultTransactionDefinition;\r\nimport org.springframework.transaction.support.TransactionTemplate;\r\n\r\n@Service\r\npublic class DynamicTransactionService {\r\n\r\n    private final PlatformTransactionManager transactionManager;\r\n    private final AccountRepository accountRepository;\r\n\r\n    public DynamicTransactionService(PlatformTransactionManager transactionManager,\r\n                                      AccountRepository accountRepository) {\r\n        this.transactionManager = transactionManager;\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    public void executeWithDynamicAttributes(String operationType, Runnable work) {\r\n        DefaultTransactionDefinition def = new DefaultTransactionDefinition();\r\n\r\n        switch (operationType) {\r\n            case \"READ_ONLY\" -> {\r\n                def.setReadOnly(true);\r\n                def.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);\r\n            }\r\n            case \"CRITICAL_WRITE\" -> {\r\n                def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);\r\n                def.setIsolationLevel(TransactionDefinition.ISOLATION_SERIALIZABLE);\r\n                def.setTimeout(10);\r\n            }\r\n            case \"AUDIT_LOG\" -> {\r\n                def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);\r\n                def.setTimeout(5);\r\n            }\r\n            default -> {\r\n                def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);\r\n                def.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);\r\n            }\r\n        }\r\n\r\n        TransactionStatus status = transactionManager.getTransaction(def);\r\n        try {\r\n            work.run();\r\n            transactionManager.commit(status);\r\n        } catch (RuntimeException e) {\r\n            transactionManager.rollback(status);\r\n            throw e;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-2",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-2",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "platformtransactionmanager-hierarchy",
      children: "PlatformTransactionManager Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PlatformTransactionManager"
      }), " is the strategy interface that all transaction management builds on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interface-hierarchy",
      children: "Interface Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PlatformTransactionManager\r\n├── AbstractPlatformTransactionManager\r\n│   ├── DataSourceTransactionManager    (JDBC / single DataSource)\r\n│   ├── JpaTransactionManager           (JPA / EntityManager)\r\n│   ├── JtaTransactionManager          (JTA / application server)\r\n│   └── HibernateTransactionManager    (Hibernate 5, legacy)\r\n├── ReactiveTransactionManager\r\n│   └── ReactiveTransactionAdapter\r\n└── ChainedTransactionManager          (multiple resources)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datasourcetransactionmanager",
      children: "DataSourceTransactionManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Manages transactions on a plain JDBC ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), ". The simplest implementation — does not support savepoints, but is lightweight and fast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.jdbc.datasource.DataSourceTransactionManager;\r\n\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\npublic class DataSourceTxConfig {\r\n\r\n    @Bean\r\n    public DataSourceTransactionManager transactionManager(DataSource dataSource) {\r\n        DataSourceTransactionManager tm = new DataSourceTransactionManager(dataSource);\r\n        tm.setDefaultTimeout(30);\r\n        tm.setRollbackOnCommitFailure(true);\r\n        return tm;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jpatransactionmanager",
      children: "JpaTransactionManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wraps a JPA ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EntityManagerFactory"
      }), ". Supports nested transactions via JDBC savepoints when JPA is backed by a JDBC resource."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport jakarta.persistence.EntityManagerFactory;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.orm.jpa.JpaTransactionManager;\r\n\r\n@Configuration\r\npublic class JpaTxConfig {\r\n\r\n    @Bean\r\n    public JpaTransactionManager transactionManager(EntityManagerFactory emf) {\r\n        JpaTransactionManager tm = new JpaTransactionManager(emf);\r\n        tm.setNestedTransactionAllowed(true);\r\n        return tm;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jtatransactionmanager",
      children: "JtaTransactionManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Delegates to the Jakarta Transaction API (JTA) implementation provided by the application server (WebSphere, WebLogic, JBoss) or a standalone provider (Atomikos, Narayana, Bitronix)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.transaction.jta.JtaTransactionManager;\r\n\r\nimport jakarta.transaction.TransactionManager;\r\nimport jakarta.transaction.UserTransaction;\r\n\r\n@Configuration\r\npublic class JtaTxConfig {\r\n\r\n    @Bean\r\n    public JtaTransactionManager transactionManager(\r\n            UserTransaction userTransaction,\r\n            TransactionManager transactionManager) {\r\n\r\n        JtaTransactionManager tm = new JtaTransactionManager();\r\n        tm.setUserTransaction(userTransaction);\r\n        tm.setTransactionManager(transactionManager);\r\n        tm.setAllowCustomIsolationLevels(true);\r\n        return tm;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chainedtransactionmanager",
      children: "ChainedTransactionManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ChainedTransactionManager"
      }), " (deprecated in recent Spring versions; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "org.springframework.data.transaction.ChainedTransactionManager"
      }), " from Spring Data) commits and rolls back multiple transaction managers in order. Use it when you need to coordinate across heterogeneous resources — for example, a JPA repository and a MongoDB repository in the same transactional method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.data.transaction.ChainedTransactionManager;\r\nimport org.springframework.orm.jpa.JpaTransactionManager;\r\nimport org.springframework.jdbc.datasource.DataSourceTransactionManager;\r\n\r\nimport jakarta.persistence.EntityManagerFactory;\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\npublic class ChainedTxConfig {\r\n\r\n    @Bean\r\n    public ChainedTransactionManager chainedTransactionManager(\r\n            EntityManagerFactory emf, DataSource dataSource) {\r\n\r\n        JpaTransactionManager jpaTm = new JpaTransactionManager(emf);\r\n        DataSourceTransactionManager dsTm = new DataSourceTransactionManager(dataSource);\r\n\r\n        // Commits: jpaTm first, then dsTm\r\n        // Rollback: dsTm first, then jpaTm\r\n        return new ChainedTransactionManager(jpaTm, dsTm);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-platformtransactionmanager",
      children: "Custom PlatformTransactionManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.transaction.*;\r\nimport org.springframework.transaction.support.AbstractPlatformTransactionManager;\r\nimport org.springframework.transaction.support.DefaultTransactionStatus;\r\nimport org.springframework.transaction.support.TransactionSynchronizationManager;\r\n\r\npublic class CustomTransactionManager extends AbstractPlatformTransactionManager {\r\n\r\n    private final TransactionStore transactionStore;\r\n\r\n    public CustomTransactionManager(TransactionStore transactionStore) {\r\n        this.transactionStore = transactionStore;\r\n        setNestedTransactionAllowed(true);\r\n        setDefaultTimeout(30);\r\n    }\r\n\r\n    @Override\r\n    protected Object doGetTransaction() throws TransactionException {\r\n        CustomTransactionObject txObject = new CustomTransactionObject();\r\n        txObject.setHasTransaction(TransactionSynchronizationManager\r\n            .hasResource(transactionStore));\r\n        return txObject;\r\n    }\r\n\r\n    @Override\r\n    protected void doBegin(Object transaction, TransactionDefinition definition)\r\n            throws TransactionException {\r\n        CustomTransactionObject txObject = (CustomTransactionObject) transaction;\r\n        txObject.setBeginTime(System.currentTimeMillis());\r\n        txObject.setReadOnly(definition.isReadOnly());\r\n        txObject.setTimeout(definition.getTimeout());\r\n        TransactionSynchronizationManager.bindResource(\r\n            transactionStore, txObject);\r\n    }\r\n\r\n    @Override\r\n    protected void doCommit(DefaultTransactionStatus status)\r\n            throws TransactionException {\r\n        CustomTransactionObject txObject = (CustomTransactionObject) status.getTransaction();\r\n        transactionStore.commit(txObject);\r\n        TransactionSynchronizationManager.unbindResource(transactionStore);\r\n    }\r\n\r\n    @Override\r\n    protected void doRollback(DefaultTransactionStatus status)\r\n            throws TransactionException {\r\n        CustomTransactionObject txObject = (CustomTransactionObject) status.getTransaction();\r\n        transactionStore.rollback(txObject);\r\n        TransactionSynchronizationManager.unbindResource(transactionStore);\r\n    }\r\n\r\n    static class CustomTransactionObject {\r\n        private boolean hasTransaction;\r\n        private long beginTime;\r\n        private boolean readOnly;\r\n        private int timeout;\r\n\r\n        public boolean isHasTransaction() { return hasTransaction; }\r\n        public void setHasTransaction(boolean hasTransaction) {\r\n            this.hasTransaction = hasTransaction;\r\n        }\r\n\r\n        public long getBeginTime() { return beginTime; }\r\n        public void setBeginTime(long beginTime) { this.beginTime = beginTime; }\r\n\r\n        public boolean isReadOnly() { return readOnly; }\r\n        public void setReadOnly(boolean readOnly) { this.readOnly = readOnly; }\r\n\r\n        public int getTimeout() { return timeout; }\r\n        public void setTimeout(int timeout) { this.timeout = timeout; }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-3",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-3",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-synchronization",
      children: "Transaction Synchronization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring's transaction synchronization allows you to register callbacks that execute at specific points in the transaction lifecycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactionaleventlistener",
      children: "@TransactionalEventListener"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@TransactionalEventListener"
      }), " fires an event handler only at a specific transaction phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.context.event.EventListener;\r\nimport org.springframework.scheduling.annotation.Async;\r\nimport org.springframework.stereotype.Component;\r\nimport org.springframework.transaction.event.TransactionPhase;\r\nimport org.springframework.transaction.event.TransactionalEventListener;\r\n\r\n@Component\r\npublic class OrderEventListeners {\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\r\n    public void onOrderConfirmed(OrderConfirmedEvent event) {\r\n        // Only fires after the transaction commits successfully\r\n        emailService.sendConfirmation(event.getOrderId());\r\n        analyticsService.trackOrder(event.getOrderId());\r\n    }\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)\r\n    public void onOrderFailed(OrderConfirmedEvent event) {\r\n        // Only fires after the transaction rolls back\r\n        notificationService.alertFailure(event.getOrderId());\r\n    }\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMPLETION)\r\n    public void onOrderComplete(OrderConfirmedEvent event) {\r\n        // Fires after both commit and rollback\r\n        auditService.logCompletion(event.getOrderId());\r\n    }\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)\r\n    public void beforeCommit(OrderConfirmedEvent event) {\r\n        // Fires just before the transaction commits\r\n        validationService.finalCheck(event.getOrderId());\r\n    }\r\n\r\n    @Async\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\r\n    public void asyncEmailNotification(OrderConfirmedEvent event) {\r\n        // Non-blocking: sends email asynchronously after commit\r\n        emailService.sendHtmlEmail(event.getOrderId());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactionsynchronizationmanager",
      children: "TransactionSynchronizationManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionSynchronizationManager"
      }), " provides access to the current transaction's context. Use it for registering resources and checking transaction state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.support.TransactionSynchronization;\r\nimport org.springframework.transaction.support.TransactionSynchronizationManager;\r\n\r\n@Service\r\npublic class TransactionContextService {\r\n\r\n    public void workWithTransactionContext() {\r\n        // Check if we are in a transaction\r\n        boolean inTransaction = TransactionSynchronizationManager.isActualTransactionActive();\r\n        boolean readOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();\r\n\r\n        System.out.println(\"In transaction: \" + inTransaction + \", readOnly: \" + readOnly);\r\n\r\n        // Get the current transaction name\r\n        String txName = TransactionSynchronizationManager.getCurrentTransactionName();\r\n        System.out.println(\"Transaction name: \" + txName);\r\n\r\n        // Register a synchronization\r\n        if (inTransaction) {\r\n            TransactionSynchronizationManager.registerSynchronization(\r\n                new TransactionSynchronization() {\r\n\r\n                    @Override\r\n                    public void beforeCommit(boolean readOnly) {\r\n                        System.out.println(\"Before commit (readOnly=\" + readOnly + \")\");\r\n                    }\r\n\r\n                    @Override\r\n                    public void afterCommit() {\r\n                        System.out.println(\"After commit\");\r\n                    }\r\n\r\n                    @Override\r\n                    public void beforeCompletion() {\r\n                        System.out.println(\"Before completion\");\r\n                    }\r\n\r\n                    @Override\r\n                    public void afterCompletion(int status) {\r\n                        String statusStr = switch (status) {\r\n                            case STATUS_COMMITTED -> \"COMMITTED\";\r\n                            case STATUS_ROLLED_BACK -> \"ROLLED_BACK\";\r\n                            case STATUS_UNKNOWN -> \"UNKNOWN\";\r\n                            default -> \"?\";\r\n                        };\r\n                        System.out.println(\"After completion: \" + statusStr);\r\n                    }\r\n\r\n                    @Override\r\n                    public void flush() {\r\n                        System.out.println(\"Flush requested\");\r\n                    }\r\n                }\r\n            );\r\n        }\r\n    }\r\n\r\n    public String getCurrentTransactionInfo() {\r\n        boolean active = TransactionSynchronizationManager.isActualTransactionActive();\r\n        String name = TransactionSynchronizationManager.getCurrentTransactionName();\r\n        boolean readOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();\r\n        int timeout = TransactionSynchronizationManager.getCurrentTransactionIsolationLevel();\r\n\r\n        return String.format(\r\n            \"Active: %b, Name: %s, ReadOnly: %b, Isolation: %d\",\r\n            active, name, readOnly, timeout\r\n        );\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-synchronization-from-transactional-methods",
      children: "Registering Synchronization from @Transactional Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\nimport org.springframework.transaction.support.TransactionSynchronization;\r\nimport org.springframework.transaction.support.TransactionSynchronizationManager;\r\n\r\n@Service\r\npublic class SynchronizationRegistrationService {\r\n\r\n    @Transactional\r\n    public void performOperation(String data) {\r\n        // Core business logic\r\n        repository.save(data);\r\n\r\n        // Register callback that runs after commit\r\n        TransactionSynchronizationManager.registerSynchronization(\r\n            new TransactionSynchronization() {\r\n                @Override\r\n                public void afterCommit() {\r\n                    // Guaranteed to run only if this transaction commits\r\n                    cacheService.evict(data);\r\n                    messageBroker.send(\"DataUpdated\", data);\r\n                }\r\n            }\r\n        );\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-binding",
      children: "Resource Binding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionSynchronizationManager"
      }), " also manages resource binding — associating a JDBC ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connection"
      }), " or JPA ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EntityManager"
      }), " with the current thread."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.jdbc.datasource.DataSourceUtils;\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.support.TransactionSynchronizationManager;\r\n\r\nimport javax.sql.DataSource;\r\nimport java.sql.Connection;\r\n\r\n@Service\r\npublic class ResourceBindingService {\r\n\r\n    private final DataSource dataSource;\r\n\r\n    public ResourceBindingService(DataSource dataSource) {\r\n        this.dataSource = dataSource;\r\n    }\r\n\r\n    public void demonstrateResourceBinding() {\r\n        // Check if a Connection is already bound to this transaction\r\n        boolean hasResource = TransactionSynchronizationManager.hasResource(dataSource);\r\n\r\n        if (!hasResource) {\r\n            // Get connection through DataSourceUtils (participates in transaction)\r\n            Connection connection = DataSourceUtils.getConnection(dataSource);\r\n            // The connection is now bound to the current transaction\r\n            TransactionSynchronizationManager.bindResource(dataSource, connection);\r\n        }\r\n\r\n        // Later in the same transaction:\r\n        Connection sameConnection = (Connection)\r\n            TransactionSynchronizationManager.getResource(dataSource);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-4",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-4",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "declarative-vs-programmatic-transactions",
      children: "Declarative vs Programmatic Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both approaches have their place. Choose based on the complexity and nature of your transaction boundaries."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Declarative (@Transactional)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Programmatic (TransactionTemplate)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boilerplate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal — single annotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More code per method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — transaction scope is visible at a glance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate — logic interleaved with transaction code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coarse — applies to entire method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained — per-item, conditional commit/rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self-invocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypassed (proxy limitation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic attributes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can change per invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exception handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative via rollbackFor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full try/catch/retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration tests with Spring context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier to unit test the callback logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple CRUD, service-layer boundaries, consistent behavior across calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing, per-item transactions, conditional rollback, retry logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\nimport org.springframework.transaction.support.TransactionTemplate;\r\n\r\nimport java.math.BigDecimal;\r\nimport java.util.List;\r\n\r\n@Service\r\npublic class ComparisonService {\r\n\r\n    private final AccountRepository accountRepository;\r\n    private final TransactionTemplate transactionTemplate;\r\n\r\n    public ComparisonService(AccountRepository accountRepository,\r\n                              TransactionTemplate transactionTemplate) {\r\n        this.accountRepository = accountRepository;\r\n        this.transactionTemplate = transactionTemplate;\r\n    }\r\n\r\n    // Declarative — best for simple whole-method transactions\r\n    @Transactional\r\n    public void transferDeclarative(Long fromId, Long toId, BigDecimal amount) {\r\n        Account from = accountRepository.findById(fromId).orElseThrow();\r\n        Account to = accountRepository.findById(toId).orElseThrow();\r\n        from.debit(amount);\r\n        to.credit(amount);\r\n        accountRepository.save(from);\r\n        accountRepository.save(to);\r\n    }\r\n\r\n    // Programmatic — best when you need per-item transaction boundaries\r\n    public void batchTransferDeclarative(List<TransferRequest> requests) {\r\n        // BEWARE: One transaction for ALL transfers\r\n        // One failure rolls back EVERYTHING\r\n        for (TransferRequest req : requests) {\r\n            transferDeclarative(req.fromId(), req.toId(), req.amount());\r\n        }\r\n    }\r\n\r\n    // Programmatic — each transfer is an independent transaction\r\n    public void batchTransferProgrammatic(List<TransferRequest> requests) {\r\n        for (TransferRequest req : requests) {\r\n            transactionTemplate.execute(status -> {\r\n                try {\r\n                    Account from = accountRepository.findById(req.fromId()).orElseThrow();\r\n                    Account to = accountRepository.findById(req.toId()).orElseThrow();\r\n                    from.debit(req.amount());\r\n                    to.credit(req.amount());\r\n                    accountRepository.save(from);\r\n                    accountRepository.save(to);\r\n                    return null;\r\n                } catch (Exception e) {\r\n                    status.setRollbackOnly();\r\n                    throw e;\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    // Programmatic — conditional commit/rollback\r\n    public void conditionalProcess(List<TransferRequest> requests) {\r\n        transactionTemplate.execute(status -> {\r\n            int processed = 0;\r\n            for (TransferRequest req : requests) {\r\n                if (req.amount().compareTo(BigDecimal.valueOf(10000)) > 0) {\r\n                    // Skip this transfer but continue with others\r\n                    continue;\r\n                }\r\n                if (req.amount().compareTo(BigDecimal.ZERO) <= 0) {\r\n                    // Invalid — roll back everything\r\n                    status.setRollbackOnly();\r\n                    throw new IllegalArgumentException(\"Invalid amount: \" + req.amount());\r\n                }\r\n                Account from = accountRepository.findById(req.fromId()).orElseThrow();\r\n                Account to = accountRepository.findById(req.toId()).orElseThrow();\r\n                from.debit(req.amount());\r\n                to.credit(req.amount());\r\n                accountRepository.save(from);\r\n                accountRepository.save(to);\r\n                processed++;\r\n            }\r\n            return processed;\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-5",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-5",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distributed-transactions",
      children: "Distributed Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an operation spans multiple databases, message brokers, or services, a local transaction is insufficient. Distributed transaction coordination is required."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jta-and-the-two-phase-commit-protocol",
      children: "JTA and the Two-Phase Commit Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JTA (Jakarta Transaction API) coordinates transactions across multiple XA resources using the two-phase commit (2PC) protocol:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 (Prepare):"
      }), " The transaction manager asks each resource manager to prepare for commit. Each resource writes its changes to durable storage and votes \"ready\" or \"abort.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 (Commit/Rollback):"
      }), " If all vote \"ready,\" the coordinator sends a commit. If any votes \"abort,\" the coordinator sends a rollback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.distributed;\r\n\r\nimport jakarta.transaction.*;\r\nimport org.springframework.stereotype.Service;\r\n\r\n@Service\r\npublic class JtaDemoService {\r\n\r\n    private final UserTransaction userTransaction;\r\n    private final OrderRepository orderRepository;\r\n    private final InventoryRepository inventoryRepository;\r\n    private final BillingRepository billingRepository;\r\n\r\n    public JtaDemoService(UserTransaction userTransaction,\r\n                           OrderRepository orderRepository,\r\n                           InventoryRepository inventoryRepository,\r\n                           BillingRepository billingRepository) {\r\n        this.userTransaction = userTransaction;\r\n        this.orderRepository = orderRepository;\r\n        this.inventoryRepository = inventoryRepository;\r\n        this.billingRepository = billingRepository;\r\n    }\r\n\r\n    public void createOrderWithJta(Order order, Payment payment) {\r\n        try {\r\n            userTransaction.begin();\r\n\r\n            orderRepository.save(order);\r\n            inventoryRepository.deductStock(order.getProductId(), order.getQuantity());\r\n            billingRepository.charge(payment);\r\n\r\n            userTransaction.commit();\r\n        } catch (Exception e) {\r\n            try {\r\n                userTransaction.rollback();\r\n            } catch (SystemException se) {\r\n                throw new RuntimeException(\"Rollback failed\", se);\r\n            }\r\n            throw new RuntimeException(\"Order creation failed\", e);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "atomikos-configuration",
      children: "Atomikos Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Atomikos is a popular standalone JTA transaction manager for Spring applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.distributed;\r\n\r\nimport com.atomikos.icatch.jta.UserTransactionImp;\r\nimport com.atomikos.icatch.jta.JtaTransactionManager;\r\nimport com.atomikos.jdbc.AtomikosDataSourceBean;\r\nimport org.postgresql.xa.PGXADataSource;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.context.annotation.DependsOn;\r\nimport org.springframework.transaction.jta.JtaTransactionManager;\r\n\r\nimport jakarta.transaction.TransactionManager;\r\nimport jakarta.transaction.UserTransaction;\r\nimport java.util.Properties;\r\n\r\n@Configuration\r\npublic class AtomikosConfig {\r\n\r\n    @Bean(initMethod = \"init\", destroyMethod = \"close\")\r\n    public AtomikosDataSourceBean dataSourceA() {\r\n        PGXADataSource pgXaDs = new PGXADataSource();\r\n        pgXaDs.setUrl(\"jdbc:postgresql://localhost:5432/db_a\");\r\n        pgXaDs.setUser(\"user\");\r\n        pgXaDs.setPassword(\"password\");\r\n\r\n        AtomikosDataSourceBean ds = new AtomikosDataSourceBean();\r\n        ds.setUniqueResourceName(\"XA_DS_A\");\r\n        ds.setXaDataSource(pgXaDs);\r\n        ds.setMaxPoolSize(10);\r\n        ds.setBorrowConnectionTimeout(30);\r\n        return ds;\r\n    }\r\n\r\n    @Bean(initMethod = \"init\", destroyMethod = \"close\")\r\n    public AtomikosDataSourceBean dataSourceB() {\r\n        PGXADataSource pgXaDs = new PGXADataSource();\r\n        pgXaDs.setUrl(\"jdbc:postgresql://localhost:5432/db_b\");\r\n        pgXaDs.setUser(\"user\");\r\n        pgXaDs.setPassword(\"password\");\r\n\r\n        AtomikosDataSourceBean ds = new AtomikosDataSourceBean();\r\n        ds.setUniqueResourceName(\"XA_DS_B\");\r\n        ds.setXaDataSource(pgXaDs);\r\n        ds.setMaxPoolSize(10);\r\n        ds.setBorrowConnectionTimeout(30);\r\n        return ds;\r\n    }\r\n\r\n    @Bean\r\n    public UserTransaction userTransaction() {\r\n        UserTransactionImp ut = new UserTransactionImp();\r\n        ut.setTransactionTimeout(60);\r\n        return ut;\r\n    }\r\n\r\n    @Bean\r\n    public TransactionManager atomikosTransactionManager() {\r\n        com.atomikos.icatch.jta.UserTransactionManager utm =\r\n            new com.atomikos.icatch.jta.UserTransactionManager();\r\n        utm.setForceShutdown(false);\r\n        return utm;\r\n    }\r\n\r\n    @Bean\r\n    @DependsOn({\"userTransaction\", \"atomikosTransactionManager\"})\r\n    public JtaTransactionManager transactionManager(\r\n            UserTransaction userTransaction,\r\n            TransactionManager atomikosTransactionManager) {\r\n\r\n        JtaTransactionManager tm = new JtaTransactionManager();\r\n        tm.setUserTransaction(userTransaction);\r\n        tm.setTransactionManager(atomikosTransactionManager);\r\n        tm.setAllowCustomIsolationLevels(true);\r\n        return tm;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "narayana-configuration",
      children: "Narayana Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Narayana is JBoss's transaction manager, also available standalone."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.distributed;\r\n\r\nimport com.arjuna.ats.jbossatx.jta.RecoveryManagerService;\r\nimport com.arjuna.ats.jta.common.JTAEnvironmentBean;\r\nimport com.arjuna.ats.jta.common.jtaPropertyManager;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.transaction.jta.JtaTransactionManager;\r\n\r\n@Configuration\r\npublic class NarayanaConfig {\r\n\r\n    @Bean\r\n    public JtaTransactionManager transactionManager() {\r\n        jtaPropertyManager.getJTAEnvironmentBean()\r\n            .setTransactionManagerClassName(\r\n                \"com.arjuna.ats.internal.jta.transaction.arjunacore.TransactionManagerImple\");\r\n\r\n        return new JtaTransactionManager();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limitations-of-2pc--xa",
      children: "Limitations of 2PC / XA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency"
        }), ": The prepare phase requires an extra round-trip to all participants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking"
        }), ": If the coordinator crashes after prepare, participants hold locks until recovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability"
        }), ": The coordinator is a single point of failure and a throughput bottleneck."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support"
        }), ": Not all databases and message brokers support XA. NoSQL databases generally do not."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity"
        }), ": Recovery managers, transaction logs, and heuristic outcomes (ambiguous commits) add operational burden."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not suitable for microservices"
        }), ": 2PC does not span network boundaries well — services must share the same transaction manager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-6",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-6",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "saga-pattern",
      children: "Saga Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Saga pattern manages distributed transactions across microservices without 2PC. Each service performs its local transaction and publishes an event or message. If a step fails, previous steps execute compensating transactions to undo their effects."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "choreography-saga",
      children: "Choreography Saga"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each service publishes events that trigger the next service's action. No central coordinator."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.choreography;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n/**\r\n * Choreography-based Saga for order fulfillment.\r\n *\r\n * Flow:\r\n *   1. Order Service: create order (PENDING)\r\n *   2. Inventory Service: reserve items  →  fail → Order Service: CANCEL order\r\n *   3. Payment Service: charge card      →  fail → Inventory: release items\r\n *   4. Shipping Service: create label    →  fail → Payment: refund\r\n */\r\n@Service\r\npublic class OrderSagaOrchestrator {\r\n\r\n    private final EventPublisher eventPublisher;\r\n\r\n    public OrderSagaOrchestrator(EventPublisher eventPublisher) {\r\n        this.eventPublisher = eventPublisher;\r\n    }\r\n\r\n    @Transactional\r\n    public void createOrder(Order order) {\r\n        order.setStatus(\"PENDING\");\r\n        orderRepository.save(order);\r\n        eventPublisher.publish(new OrderCreatedEvent(order.getId(), order.getItems()));\r\n    }\r\n\r\n    public void onInventoryReserved(InventoryReservedEvent event) {\r\n        orderRepository.findById(event.getOrderId()).ifPresent(order -> {\r\n            order.setStatus(\"INVENTORY_RESERVED\");\r\n            orderRepository.save(order);\r\n            eventPublisher.publish(\r\n                new PaymentRequestEvent(order.getId(), order.getTotal()));\r\n        });\r\n    }\r\n\r\n    public void onPaymentProcessed(PaymentProcessedEvent event) {\r\n        orderRepository.findById(event.getOrderId()).ifPresent(order -> {\r\n            order.setStatus(\"PAYMENT_PROCESSED\");\r\n            orderRepository.save(order);\r\n            eventPublisher.publish(\r\n                new ShippingRequestEvent(order.getId(), order.getAddress()));\r\n        });\r\n    }\r\n\r\n    // Compensating: release inventory if payment fails\r\n    public void onPaymentFailed(PaymentFailedEvent event) {\r\n        orderRepository.findById(event.getOrderId()).ifPresent(order -> {\r\n            order.setStatus(\"PAYMENT_FAILED\");\r\n            orderRepository.save(order);\r\n            eventPublisher.publish(\r\n                new ReleaseInventoryEvent(order.getId(), order.getItems()));\r\n        });\r\n    }\r\n\r\n    // Compensating: refund payment if shipping fails\r\n    public void onShippingFailed(ShippingFailedEvent event) {\r\n        orderRepository.findById(event.getOrderId()).ifPresent(order -> {\r\n            order.setStatus(\"SHIPPING_FAILED\");\r\n            orderRepository.save(order);\r\n            eventPublisher.publish(\r\n                new RefundPaymentEvent(order.getId(), order.getTotal()));\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.choreography;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Propagation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class InventorySagaService {\r\n\r\n    private final InventoryRepository inventoryRepository;\r\n    private final EventPublisher eventPublisher;\r\n\r\n    public InventorySagaService(InventoryRepository inventoryRepository,\r\n                                 EventPublisher eventPublisher) {\r\n        this.inventoryRepository = inventoryRepository;\r\n        this.eventPublisher = eventPublisher;\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\r\n    public void handleOrderCreated(OrderCreatedEvent event) {\r\n        try {\r\n            for (OrderItem item : event.getItems()) {\r\n                inventoryRepository.reserve(item.getProductId(), item.getQuantity());\r\n            }\r\n            eventPublisher.publish(\r\n                new InventoryReservedEvent(event.getOrderId()));\r\n        } catch (Exception e) {\r\n            eventPublisher.publish(\r\n                new InventoryReservationFailedEvent(event.getOrderId(), e.getMessage()));\r\n        }\r\n    }\r\n\r\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\r\n    public void handleReleaseInventory(ReleaseInventoryEvent event) {\r\n        for (OrderItem item : event.getItems()) {\r\n            inventoryRepository.release(item.getProductId(), item.getQuantity());\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orchestration-saga",
      children: "Orchestration Saga"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A central Saga Coordinator sends commands to each service and handles failures."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.orchestration;\r\n\r\nimport org.springframework.stereotype.Service;\r\n\r\n/**\r\n * Orchestration-based Saga.\r\n *\r\n * A central OrderSagaCoordinator sends commands to each service\r\n * and invokes compensating actions on failure.\r\n */\r\n@Service\r\npublic class OrderSagaCoordinator {\r\n\r\n    private final InventoryClient inventoryClient;\r\n    private final PaymentClient paymentClient;\r\n    private final ShippingClient shippingClient;\r\n    private final SagaLogRepository sagaLogRepository;\r\n\r\n    public OrderSagaCoordinator(InventoryClient inventoryClient,\r\n                                 PaymentClient paymentClient,\r\n                                 ShippingClient shippingClient,\r\n                                 SagaLogRepository sagaLogRepository) {\r\n        this.inventoryClient = inventoryClient;\r\n        this.paymentClient = paymentClient;\r\n        this.shippingClient = shippingClient;\r\n        this.sagaLogRepository = sagaLogRepository;\r\n    }\r\n\r\n    public void executeSaga(CreateOrderCommand command) {\r\n        String sagaId = java.util.UUID.randomUUID().toString();\r\n        sagaLogRepository.save(new SagaLog(sagaId, \"STARTED\", command.getOrderId()));\r\n\r\n        try {\r\n            // Step 1: Reserve inventory\r\n            InventoryResponse inventoryResponse = inventoryClient.reserve(\r\n                sagaId, command.getOrderId(), command.getItems());\r\n\r\n            sagaLogRepository.save(\r\n                new SagaLog(sagaId, \"INVENTORY_RESERVED\", command.getOrderId()));\r\n\r\n            // Step 2: Process payment\r\n            PaymentResponse paymentResponse = paymentClient.charge(\r\n                sagaId, command.getOrderId(), command.getTotal());\r\n\r\n            sagaLogRepository.save(\r\n                new SagaLog(sagaId, \"PAYMENT_PROCESSED\", command.getOrderId()));\r\n\r\n            // Step 3: Create shipment\r\n            ShippingResponse shippingResponse = shippingClient.ship(\r\n                sagaId, command.getOrderId(), command.getAddress());\r\n\r\n            sagaLogRepository.save(\r\n                new SagaLog(sagaId, \"SHIPPED\", command.getOrderId()));\r\n\r\n            sagaLogRepository.save(\r\n                new SagaLog(sagaId, \"COMPLETED\", command.getOrderId()));\r\n\r\n        } catch (Exception e) {\r\n            sagaLogRepository.save(\r\n                new SagaLog(command.getOrderId(), \"FAILED\", e.getMessage()));\r\n            compensate(sagaId, command);\r\n        }\r\n    }\r\n\r\n    private void compensate(String sagaId, CreateOrderCommand command) {\r\n        // Execute compensating actions in reverse order\r\n        try {\r\n            shippingClient.cancel(sagaId, command.getOrderId());\r\n        } catch (Exception e) {\r\n            // Log and continue — best effort compensation\r\n        }\r\n\r\n        try {\r\n            paymentClient.refund(sagaId, command.getOrderId(), command.getTotal());\r\n        } catch (Exception e) {\r\n            // Log and continue\r\n        }\r\n\r\n        try {\r\n            inventoryClient.release(sagaId, command.getOrderId(), command.getItems());\r\n        } catch (Exception e) {\r\n            // Log and continue\r\n        }\r\n\r\n        sagaLogRepository.save(\r\n            new SagaLog(sagaId, \"COMPENSATED\", command.getOrderId()));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "saga-with-kafka",
      children: "Saga with Kafka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Kafka for saga event communication provides durability, ordering guarantees, and replayability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.kafka;\r\n\r\nimport org.apache.kafka.clients.admin.NewTopic;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.kafka.annotation.KafkaListener;\r\nimport org.springframework.kafka.core.KafkaTemplate;\r\nimport org.springframework.stereotype.Service;\r\n\r\n@Configuration\r\npublic class KafkaSagaConfig {\r\n\r\n    @Bean\r\n    public NewTopic orderCommands() {\r\n        return new NewTopic(\"saga.order.commands\", 3, (short) 1);\r\n    }\r\n\r\n    @Bean\r\n    public NewTopic inventoryEvents() {\r\n        return new NewTopic(\"saga.inventory.events\", 3, (short) 1);\r\n    }\r\n\r\n    @Bean\r\n    public NewTopic paymentEvents() {\r\n        return new NewTopic(\"saga.payment.events\", 3, (short) 1);\r\n    }\r\n\r\n    @Bean\r\n    public NewTopic shippingEvents() {\r\n        return new NewTopic(\"saga.shipping.events\", 3, (short) 1);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.kafka;\r\n\r\nimport com.fasterxml.jackson.databind.ObjectMapper;\r\nimport org.apache.kafka.clients.consumer.ConsumerRecord;\r\nimport org.springframework.kafka.annotation.KafkaListener;\r\nimport org.springframework.kafka.core.KafkaTemplate;\r\nimport org.springframework.stereotype.Service;\r\n\r\nimport java.util.Map;\r\n\r\n@Service\r\npublic class KafkaSagaCoordinator {\r\n\r\n    private final KafkaTemplate<String, String> kafkaTemplate;\r\n    private final ObjectMapper objectMapper;\r\n    private final SagaStateRepository stateRepository;\r\n\r\n    public KafkaSagaCoordinator(KafkaTemplate<String, String> kafkaTemplate,\r\n                                 ObjectMapper objectMapper,\r\n                                 SagaStateRepository stateRepository) {\r\n        this.kafkaTemplate = kafkaTemplate;\r\n        this.objectMapper = objectMapper;\r\n        this.stateRepository = stateRepository;\r\n    }\r\n\r\n    public void startSaga(CreateOrderCommand command) {\r\n        SagaState state = new SagaState(\r\n            command.getOrderId(),\r\n            \"ORDER_CREATED\",\r\n            command\r\n        );\r\n        stateRepository.save(state);\r\n        kafkaTemplate.send(\"saga.order.commands\", command.getOrderId(),\r\n            toJson(new ReserveInventoryCommand(command.getOrderId(), command.getItems())));\r\n    }\r\n\r\n    @KafkaListener(topics = \"saga.inventory.events\")\r\n    public void onInventoryEvent(ConsumerRecord<String, String> record) {\r\n        InventoryEvent event = fromJson(record.value(), InventoryEvent.class);\r\n        SagaState state = stateRepository.findById(record.key()).orElse(null);\r\n\r\n        if (event.isSuccess()) {\r\n            state.setStatus(\"INVENTORY_RESERVED\");\r\n            stateRepository.save(state);\r\n            kafkaTemplate.send(\"saga.order.commands\", record.key(),\r\n                toJson(new ProcessPaymentCommand(\r\n                    state.getOrderId(), state.getCommand().getTotal())));\r\n        } else {\r\n            kafkaTemplate.send(\"saga.order.commands\", record.key(),\r\n                toJson(new CompensateOrderCommand(state.getOrderId(), \"INVENTORY_FAILED\")));\r\n        }\r\n    }\r\n\r\n    @KafkaListener(topics = \"saga.payment.events\")\r\n    public void onPaymentEvent(ConsumerRecord<String, String> record) {\r\n        PaymentEvent event = fromJson(record.value(), PaymentEvent.class);\r\n        SagaState state = stateRepository.findById(record.key()).orElse(null);\r\n\r\n        if (event.isSuccess()) {\r\n            state.setStatus(\"PAYMENT_PROCESSED\");\r\n            stateRepository.save(state);\r\n            kafkaTemplate.send(\"saga.order.commands\", record.key(),\r\n                toJson(new CreateShipmentCommand(\r\n                    state.getOrderId(), state.getCommand().getAddress())));\r\n        } else {\r\n            kafkaTemplate.send(\"saga.order.commands\", record.key(),\r\n                toJson(new CompensateOrderCommand(\r\n                    state.getOrderId(), \"PAYMENT_FAILED\")));\r\n        }\r\n    }\r\n\r\n    @KafkaListener(topics = \"saga.shipping.events\")\r\n    public void onShippingEvent(ConsumerRecord<String, String> record) {\r\n        ShippingEvent event = fromJson(record.value(), ShippingEvent.class);\r\n        SagaState state = stateRepository.findById(record.key()).orElse(null);\r\n\r\n        if (event.isSuccess()) {\r\n            state.setStatus(\"COMPLETED\");\r\n            stateRepository.save(state);\r\n        } else {\r\n            kafkaTemplate.send(\"saga.order.commands\", record.key(),\r\n                toJson(new CompensateOrderCommand(\r\n                    state.getOrderId(), \"SHIPPING_FAILED\")));\r\n        }\r\n    }\r\n\r\n    @KafkaListener(topics = \"saga.order.commands\")\r\n    public void onCompensation(ConsumerRecord<String, String> record) {\r\n        CompensateOrderCommand cmd = fromJson(record.value(), CompensateOrderCommand.class);\r\n        if (cmd != null) {\r\n            handleCompensation(cmd);\r\n        }\r\n    }\r\n\r\n    private void handleCompensation(CompensateOrderCommand cmd) {\r\n        SagaState state = stateRepository.findById(cmd.getOrderId()).orElse(null);\r\n        if (state == null) return;\r\n\r\n        String currentStatus = state.getStatus();\r\n\r\n        if (\"PAYMENT_PROCESSED\".equals(currentStatus)) {\r\n            kafkaTemplate.send(\"saga.order.commands\", cmd.getOrderId(),\r\n                toJson(new RefundPaymentCommand(cmd.getOrderId(), 0)));\r\n        }\r\n        if (\"INVENTORY_RESERVED\".equals(currentStatus)\r\n            || \"PAYMENT_PROCESSED\".equals(currentStatus)) {\r\n            kafkaTemplate.send(\"saga.order.commands\", cmd.getOrderId(),\r\n                toJson(new ReleaseInventoryCommand(cmd.getOrderId())));\r\n        }\r\n\r\n        state.setStatus(\"COMPENSATED\");\r\n        stateRepository.save(state);\r\n    }\r\n\r\n    private String toJson(Object obj) {\r\n        try {\r\n            return objectMapper.writeValueAsString(obj);\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(\"Serialization error\", e);\r\n        }\r\n    }\r\n\r\n    private <T> T fromJson(String json, Class<T> type) {\r\n        try {\r\n            return objectMapper.readValue(json, type);\r\n        } catch (Exception e) {\r\n            return null;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compensating-transaction-pattern",
      children: "Compensating Transaction Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each saga step must have a compensating action:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forward Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compensating Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSERT INTO orders (PENDING)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE orders SET status = CANCELLED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserve inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE inventory SET reserved = reserved + qty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE inventory SET reserved = reserved - qty"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charge payment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSERT INTO payments (AUTHORIZED)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSERT INTO refunds (FULL_REFUND)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create shipment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSERT INTO shipments (CREATED)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE shipments SET status = CANCELLED"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class CompensatingActionService {\r\n\r\n    private final OrderRepository orderRepository;\r\n    private final InventoryRepository inventoryRepository;\r\n    private final PaymentGateway paymentGateway;\r\n\r\n    public CompensatingActionService(OrderRepository orderRepository,\r\n                                      InventoryRepository inventoryRepository,\r\n                                      PaymentGateway paymentGateway) {\r\n        this.orderRepository = orderRepository;\r\n        this.inventoryRepository = inventoryRepository;\r\n        this.paymentGateway = paymentGateway;\r\n    }\r\n\r\n    @Transactional\r\n    public void createOrderAndReserve(Order order) {\r\n        order.setStatus(\"PENDING\");\r\n        orderRepository.save(order);\r\n        inventoryRepository.reserve(order.getItems());\r\n    }\r\n\r\n    @Transactional\r\n    public void compensateCreateOrderAndReserve(Order order) {\r\n        // Undo the inventory reservation\r\n        inventoryRepository.release(order.getItems());\r\n        // Cancel the order\r\n        order.setStatus(\"CANCELLED\");\r\n        orderRepository.save(order);\r\n    }\r\n\r\n    public boolean chargePayment(String orderId, BigDecimal amount) {\r\n        try {\r\n            paymentGateway.charge(orderId, amount);\r\n            return true;\r\n        } catch (Exception e) {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    public boolean refundPayment(String orderId, BigDecimal amount) {\r\n        try {\r\n            paymentGateway.refund(orderId, amount);\r\n            return true;\r\n        } catch (Exception e) {\r\n            return false;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eventuate-tram",
      children: "Eventuate Tram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eventuate Tram is a microservice saga framework that uses message-based coordination."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Dependency: io.eventuate.tram:eventuate-tram-core\r\n\r\npackage com.course.tx.saga.eventuate;\r\n\r\nimport io.eventuate.tram.commands.common.Command;\r\nimport io.eventuate.tram.sagas.orchestration.SagaDefinition;\r\nimport io.eventuate.tram.sagas.simpledsl.SimpleSaga;\r\n\r\npublic class OrderFulfillmentSaga implements SimpleSaga<OrderSagaData> {\r\n\r\n    private final SagaDefinition<OrderSagaData> sagaDefinition;\r\n\r\n    public OrderFulfillmentSaga() {\r\n        this.sagaDefinition = step()\r\n            .invokeParticipant(this::reserveInventory)\r\n            .withCompensation(this::releaseInventory)\r\n            .step()\r\n            .invokeParticipant(this::processPayment)\r\n            .withCompensation(this::refundPayment)\r\n            .step()\r\n            .invokeParticipant(this::createShipment)\r\n            .build();\r\n    }\r\n\r\n    @Override\r\n    public SagaDefinition<OrderSagaData> getSagaDefinition() {\r\n        return sagaDefinition;\r\n    }\r\n\r\n    private Command reserveInventory(OrderSagaData data) {\r\n        return new ReserveInventoryCommand(data.getOrderId(), data.getItems());\r\n    }\r\n\r\n    private Command releaseInventory(OrderSagaData data) {\r\n        return new ReleaseInventoryCommand(data.getOrderId(), data.getItems());\r\n    }\r\n\r\n    private Command processPayment(OrderSagaData data) {\r\n        return new ProcessPaymentCommand(data.getOrderId(), data.getTotal());\r\n    }\r\n\r\n    private Command refundPayment(OrderSagaData data) {\r\n        return new RefundPaymentCommand(data.getOrderId(), data.getTotal());\r\n    }\r\n\r\n    private Command createShipment(OrderSagaData data) {\r\n        return new CreateShipmentCommand(data.getOrderId(), data.getAddress());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "axon-saga",
      children: "Axon Saga"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Axon Framework provides saga orchestration as a first-class concept."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.axon;\r\n\r\nimport org.axonframework.commandhandling.gateway.CommandGateway;\r\nimport org.axonframework.modelling.saga.SagaEventHandler;\r\nimport org.axonframework.modelling.saga.SagaLifecycle;\r\nimport org.axonframework.modelling.saga.StartSaga;\r\nimport org.axonframework.spring.stereotype.Saga;\r\n\r\n@Saga\r\npublic class OrderSaga {\r\n\r\n    private String orderId;\r\n    private boolean inventoryReserved;\r\n    private boolean paymentProcessed;\r\n    private boolean shipmentCreated;\r\n\r\n    @StartSaga\r\n    @SagaEventHandler(associationProperty = \"orderId\")\r\n    public void handle(OrderCreatedEvent event, CommandGateway commandGateway) {\r\n        this.orderId = event.getOrderId();\r\n        SagaLifecycle.associateWith(\"orderId\", event.getOrderId());\r\n\r\n        commandGateway.send(new ReserveInventoryCommand(\r\n            event.getOrderId(), event.getItems()));\r\n    }\r\n\r\n    @SagaEventHandler(associationProperty = \"orderId\")\r\n    public void handle(InventoryReservedEvent event, CommandGateway commandGateway) {\r\n        this.inventoryReserved = true;\r\n        commandGateway.send(new ProcessPaymentCommand(\r\n            event.getOrderId(), event.getTotal()));\r\n    }\r\n\r\n    @SagaEventHandler(associationProperty = \"orderId\")\r\n    public void handle(PaymentProcessedEvent event, CommandGateway commandGateway) {\r\n        this.paymentProcessed = true;\r\n        commandGateway.send(new CreateShipmentCommand(\r\n            event.getOrderId(), event.getAddress()));\r\n    }\r\n\r\n    @SagaEventHandler(associationProperty = \"orderId\")\r\n    public void handle(ShipmentCreatedEvent event) {\r\n        this.shipmentCreated = true;\r\n        SagaLifecycle.end();\r\n    }\r\n\r\n    // Compensating handlers\r\n    @SagaEventHandler(associationProperty = \"orderId\")\r\n    public void handle(PaymentFailedEvent event, CommandGateway commandGateway) {\r\n        if (inventoryReserved) {\r\n            commandGateway.send(new ReleaseInventoryCommand(\r\n                event.getOrderId(), event.getItems()));\r\n        }\r\n        SagaLifecycle.end();\r\n    }\r\n\r\n    @SagaEventHandler(associationProperty = \"orderId\")\r\n    public void handle(InventoryReservationFailedEvent event, CommandGateway commandGateway) {\r\n        SagaLifecycle.end();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "saga-with-rest-callbacks",
      children: "Saga with REST Callbacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a message broker is unavailable, saga coordination can use REST callbacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.saga.rest;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.web.client.RestTemplate;\r\n\r\nimport java.util.concurrent.CompletableFuture;\r\nimport java.util.concurrent.ConcurrentHashMap;\r\n\r\n@Service\r\npublic class RestSagaCoordinator {\r\n\r\n    private final RestTemplate restTemplate;\r\n    private final ConcurrentHashMap<String, SagaState> sagaStates = new ConcurrentHashMap<>();\r\n\r\n    public RestSagaCoordinator(RestTemplate restTemplate) {\r\n        this.restTemplate = restTemplate;\r\n    }\r\n\r\n    public CompletableFuture<SagaResult> startSaga(SagaRequest request) {\r\n        CompletableFuture<SagaResult> future = new CompletableFuture<>();\r\n        SagaState state = new SagaState(\r\n            request.getOrderId(),\r\n            request,\r\n            future\r\n        );\r\n        sagaStates.put(request.getOrderId(), state);\r\n\r\n        // Step 1: Call inventory service\r\n        try {\r\n            InventoryResponse invResp = restTemplate.postForObject(\r\n                \"http://inventory-service/api/reserve\",\r\n                new InventoryRequest(request.getOrderId(), request.getItems()),\r\n                InventoryResponse.class\r\n            );\r\n\r\n            if (invResp != null && invResp.isSuccess()) {\r\n                // Step 2: Call payment service\r\n                PaymentResponse payResp = restTemplate.postForObject(\r\n                    \"http://payment-service/api/charge\",\r\n                    new PaymentRequest(request.getOrderId(), request.getTotal()),\r\n                    PaymentResponse.class\r\n                );\r\n\r\n                if (payResp != null && payResp.isSuccess()) {\r\n                    // Step 3: Call shipping service\r\n                    ShippingResponse shipResp = restTemplate.postForObject(\r\n                        \"http://shipping-service/api/ship\",\r\n                        new ShippingRequest(request.getOrderId(), request.getAddress()),\r\n                        ShippingResponse.class\r\n                    );\r\n\r\n                    if (shipResp != null && shipResp.isSuccess()) {\r\n                        future.complete(new SagaResult(request.getOrderId(), \"COMPLETED\"));\r\n                    } else {\r\n                        compensate(request.getOrderId());\r\n                        future.complete(new SagaResult(request.getOrderId(), \"SHIPPING_FAILED\"));\r\n                    }\r\n                } else {\r\n                    compensate(request.getOrderId());\r\n                    future.complete(new SagaResult(request.getOrderId(), \"PAYMENT_FAILED\"));\r\n                }\r\n            } else {\r\n                future.complete(new SagaResult(request.getOrderId(), \"INVENTORY_FAILED\"));\r\n            }\r\n        } catch (Exception e) {\r\n            compensate(request.getOrderId());\r\n            future.completeExceptionally(e);\r\n        }\r\n\r\n        return future;\r\n    }\r\n\r\n    private void compensate(String orderId) {\r\n        SagaState state = sagaStates.get(orderId);\r\n        if (state == null) return;\r\n\r\n        // Compensate in reverse order\r\n        try {\r\n            restTemplate.postForObject(\r\n                \"http://shipping-service/api/cancel\",\r\n                new CancelRequest(orderId),\r\n                Void.class);\r\n        } catch (Exception e) { /* best effort */ }\r\n\r\n        try {\r\n            restTemplate.postForObject(\r\n                \"http://payment-service/api/refund\",\r\n                new RefundRequest(orderId, state.getRequest().getTotal()),\r\n                Void.class);\r\n        } catch (Exception e) { /* best effort */ }\r\n\r\n        try {\r\n            restTemplate.postForObject(\r\n                \"http://inventory-service/api/release\",\r\n                new ReleaseRequest(orderId, state.getRequest().getItems()),\r\n                Void.class);\r\n        } catch (Exception e) { /* best effort */ }\r\n    }\r\n\r\n    private record SagaState(String orderId, SagaRequest request,\r\n                              CompletableFuture<SagaResult> future) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-7",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-7",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pessimistic-locking",
      children: "Pessimistic Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pessimistic locking acquires a database lock on the data before any operation, preventing other transactions from modifying or reading the locked data. Use it when conflicts are frequent and the cost of retries is high."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock-annotations",
      children: "@Lock Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data JPA provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Lock"
      }), " for repository methods:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport jakarta.persistence.LockModeType;\r\nimport org.springframework.data.jpa.repository.JpaRepository;\r\nimport org.springframework.data.jpa.repository.Lock;\r\nimport org.springframework.data.jpapaRepository.QueryHints;\r\nimport org.springframework.data.jpa.repository.Query;\r\nimport org.springframework.stereotype.Repository;\r\n\r\nimport java.util.Optional;\r\n\r\n@Repository\r\npublic interface AccountLockingRepository extends JpaRepository<Account, Long> {\r\n\r\n    @Lock(LockModeType.PESSIMISTIC_WRITE)\r\n    @Query(\"select a from Account a where a.id = :id\")\r\n    Optional<Account> findByIdWithPessimisticWriteLock(Long id);\r\n\r\n    @Lock(LockModeType.PESSIMISTIC_READ)\r\n    @Query(\"select a from Account a where a.id = :id\")\r\n    Optional<Account> findByIdWithPessimisticReadLock(Long id);\r\n\r\n    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)\r\n    @Query(\"select a from Account a where a.id = :id\")\r\n    Optional<Account> findByIdWithPessimisticForceIncrement(Long id);\r\n\r\n    @Lock(LockModeType.PESSIMISTIC_WRITE)\r\n    @QueryHints({@QueryHint(name = \"jakarta.persistence.lock.timeout\", value = \"3000\")})\r\n    @Query(\"select a from Account a where a.id = :id\")\r\n    Optional<Account> findByIdWithLockTimeout(Long id);\r\n\r\n    @Lock(LockModeType.PESSIMISTIC_WRITE)\r\n    @Query(\"select a from Account a where a.balance > :minBalance\")\r\n    List<Account> findAccountsWithBalanceAbove(BigDecimal minBalance);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock-modes",
      children: "Lock Modes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Lock Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL (PostgreSQL)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PESSIMISTIC_READ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... FOR SHARE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared lock — others can read but not write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PESSIMISTIC_WRITE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... FOR UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive lock — no other transaction can read or write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PESSIMISTIC_FORCE_INCREMENT"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... FOR UPDATE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Version"
            }), " increment"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like WRITE but also increments the version column"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pessimistic-locking-in-a-service",
      children: "Pessimistic Locking in a Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport java.math.BigDecimal;\r\n\r\n@Service\r\npublic class PessimisticLockingService {\r\n\r\n    private final AccountLockingRepository accountRepository;\r\n\r\n    public PessimisticLockingService(AccountLockingRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    @Transactional\r\n    public void transferWithPessimisticLock(Long fromId, Long toId, BigDecimal amount) {\r\n        // These SELECT ... FOR UPDATE queries acquire row-level locks\r\n        Account from = accountRepository.findByIdWithPessimisticWriteLock(fromId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Source not found\"));\r\n\r\n        Account to = accountRepository.findByIdWithPessimisticWriteLock(toId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Target not found\"));\r\n\r\n        if (from.getBalance().compareTo(amount) < 0) {\r\n            throw new InsufficientBalanceException(fromId, amount);\r\n        }\r\n\r\n        from.setBalance(from.getBalance().subtract(amount));\r\n        to.setBalance(to.getBalance().add(amount));\r\n\r\n        accountRepository.save(from);\r\n        accountRepository.save(to);\r\n    }\r\n\r\n    @Transactional\r\n    public BigDecimal readWithSharedLock(Long accountId) {\r\n        // SELECT ... FOR SHARE — allows other shared locks\r\n        // but blocks exclusive locks\r\n        Account account = accountRepository.findByIdWithPessimisticReadLock(accountId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n        return account.getBalance();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock-timeout",
      children: "Lock Timeout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure how long a transaction waits to acquire a lock before giving up:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport jakarta.persistence.LockTimeoutException;\r\n\r\n@Service\r\npublic class LockTimeoutService {\r\n\r\n    private final AccountLockingRepository accountRepository;\r\n\r\n    public LockTimeoutService(AccountLockingRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    @Transactional\r\n    public void transferWithTimeout(Long fromId, Long toId, BigDecimal amount) {\r\n        try {\r\n            // Uses @QueryHint timeout = 3000ms (3 seconds)\r\n            Account from = accountRepository.findByIdWithLockTimeout(fromId)\r\n                .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n            Account to = accountRepository.findByIdWithLockTimeout(toId)\r\n                .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n            from.debit(amount);\r\n            to.credit(amount);\r\n            accountRepository.save(from);\r\n            accountRepository.save(to);\r\n\r\n        } catch (LockTimeoutException e) {\r\n            // Could not acquire lock within 3 seconds\r\n            throw new ConcurrentOperationException(\"Transaction timed out acquiring lock\", e);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deadlock-handling",
      children: "Deadlock Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deadlocks occur when two transactions each hold a lock the other needs. Databases detect deadlocks automatically and roll back one transaction (the \"victim\"). Your code must retry."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport org.springframework.dao.DeadlockLoserDataAccessException;\r\nimport org.springframework.retry.annotation.Backoff;\r\nimport org.springframework.retry.annotation.Retryable;\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport java.math.BigDecimal;\r\n\r\n@Service\r\npublic class DeadlockResilientService {\r\n\r\n    private final AccountLockingRepository accountRepository;\r\n\r\n    public DeadlockResilientService(AccountLockingRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    @Retryable(\r\n        value = {DeadlockLoserDataAccessException.class,\r\n                 CannotAcquireLockException.class},\r\n        maxAttempts = 3,\r\n        backoff = @Backoff(delay = 100, multiplier = 2, maxDelay = 1000)\r\n    )\r\n    @Transactional\r\n    public void transferWithRetry(Long fromId, Long toId, BigDecimal amount) {\r\n        Account from = accountRepository.findByIdWithPessimisticWriteLock(fromId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n        Account to = accountRepository.findByIdWithPessimisticWriteLock(toId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n        from.debit(amount);\r\n        to.credit(amount);\r\n        accountRepository.save(from);\r\n        accountRepository.save(to);\r\n    }\r\n\r\n    // Manual retry without Spring Retry\r\n    @Transactional\r\n    public void transferWithManualRetry(Long fromId, Long toId, BigDecimal amount) {\r\n        int maxRetries = 3;\r\n        int retryDelay = 100;\r\n\r\n        for (int attempt = 1; attempt <= maxRetries; attempt++) {\r\n            try {\r\n                Account from = accountRepository.findByIdWithPessimisticWriteLock(fromId)\r\n                    .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n                Account to = accountRepository.findByIdWithPessimisticWriteLock(toId)\r\n                    .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n                from.debit(amount);\r\n                to.credit(amount);\r\n                accountRepository.save(from);\r\n                accountRepository.save(to);\r\n                return; // Success\r\n            } catch (DeadlockLoserDataAccessException e) {\r\n                if (attempt == maxRetries) {\r\n                    throw e; // Last attempt failed\r\n                }\r\n                try {\r\n                    Thread.sleep(retryDelay * (long) Math.pow(2, attempt - 1));\r\n                } catch (InterruptedException ie) {\r\n                    Thread.currentThread().interrupt();\r\n                    throw new RuntimeException(\"Retry interrupted\", ie);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deadlock-prevention-strategy",
      children: "Deadlock Prevention Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport org.springframework.stereotype.Service;\r\n\r\n/**\r\n * Deadlock prevention: always acquire locks in the same order.\r\n * If all transactions lock accounts in ascending order of ID,\r\n * deadlocks are structurally impossible.\r\n */\r\n@Service\r\npublic class OrderedLockingService {\r\n\r\n    private final AccountLockingRepository accountRepository;\r\n\r\n    public OrderedLockingService(AccountLockingRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    public void safeTransfer(Long accountA, Long accountB, BigDecimal amount) {\r\n        // Always lock smaller ID first\r\n        Long first = Math.min(accountA, accountB);\r\n        Long second = Math.max(accountA, accountB);\r\n\r\n        Account firstAccount = accountRepository.findByIdWithPessimisticWriteLock(first)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Account not found: \" + first));\r\n\r\n        Account secondAccount = accountRepository.findByIdWithPessimisticWriteLock(second)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Account not found: \" + second));\r\n\r\n        if (accountA < accountB) {\r\n            firstAccount.debit(amount);\r\n            secondAccount.credit(amount);\r\n        } else {\r\n            secondAccount.debit(amount);\r\n            firstAccount.credit(amount);\r\n        }\r\n\r\n        accountRepository.save(firstAccount);\r\n        accountRepository.save(secondAccount);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-8",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-8",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimistic-locking",
      children: "Optimistic Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimistic locking assumes conflicts are rare. Instead of acquiring locks upfront, it detects conflicts at commit time using a version column."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version",
      children: "@Version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Version"
      }), " field to your entity. JPA increments it on every update and checks it on every commit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport jakarta.persistence.*;\r\n\r\n@Entity\r\n@Table(name = \"accounts\")\r\npublic class Account {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    private String ownerName;\r\n\r\n    private BigDecimal balance;\r\n\r\n    @Version\r\n    private Long version;\r\n\r\n    public Account() {}\r\n\r\n    public Account(String ownerName, BigDecimal balance) {\r\n        this.ownerName = ownerName;\r\n        this.balance = balance;\r\n        this.version = 0L;\r\n    }\r\n\r\n    public void debit(BigDecimal amount) {\r\n        if (this.balance.compareTo(amount) < 0) {\r\n            throw new InsufficientBalanceException(this.id, amount);\r\n        }\r\n        this.balance = this.balance.subtract(amount);\r\n    }\r\n\r\n    public void credit(BigDecimal amount) {\r\n        this.balance = this.balance.add(amount);\r\n    }\r\n\r\n    public Long getId() { return id; }\r\n    public void setId(Long id) { this.id = id; }\r\n\r\n    public String getOwnerName() { return ownerName; }\r\n    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }\r\n\r\n    public BigDecimal getBalance() { return balance; }\r\n    public void setBalance(BigDecimal balance) { this.balance = balance; }\r\n\r\n    public Long getVersion() { return version; }\r\n    public void setVersion(Long version) { this.version = version; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-version-checking-works",
      children: "How Version Checking Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Initial read:\r\nSELECT id, balance, version FROM accounts WHERE id = 1;\r\n-- Result: id=1, balance=100.00, version=5\r\n\r\n-- Update (JPA generates this):\r\nUPDATE accounts SET balance = 90.00, version = 6\r\nWHERE id = 1 AND version = 5;\r\n\r\n-- If another transaction updated the row between our read and write,\r\n-- the version will have changed. The WHERE version=5 matches zero rows,\r\n-- and JPA throws OptimisticLockException.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimisticlockexception-handling",
      children: "OptimisticLockException Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport jakarta.persistence.OptimisticLockException;\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport java.math.BigDecimal;\r\n\r\n@Service\r\npublic class OptimisticLockingService {\r\n\r\n    private final AccountRepository accountRepository;\r\n\r\n    public OptimisticLockingService(AccountRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    @Transactional\r\n    public void transfer(Long fromId, Long toId, BigDecimal amount) {\r\n        Account from = accountRepository.findById(fromId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n        Account to = accountRepository.findById(toId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n        from.debit(amount);\r\n        to.credit(amount);\r\n\r\n        // On save, Hibernate checks the version column.\r\n        // If another thread modified the same entity, this throws\r\n        // OptimisticLockException (or StaleStateException in Hibernate)\r\n        accountRepository.save(from);\r\n        accountRepository.save(to);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retry-pattern-for-optimistic-locking",
      children: "Retry Pattern for Optimistic Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport jakarta.persistence.OptimisticLockException;\r\nimport org.hibernate.StaleStateException;\r\nimport org.springframework.dao.OptimisticLockingFailureException;\r\nimport org.springframework.retry.annotation.Backoff;\r\nimport org.springframework.retry.annotation.Retryable;\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport java.math.BigDecimal;\r\nimport java.util.function.Supplier;\r\n\r\n@Service\r\npublic class RetryOptimisticLockingService {\r\n\r\n    private final AccountRepository accountRepository;\r\n\r\n    public RetryOptimisticLockingService(AccountRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    @Retryable(\r\n        value = {OptimisticLockException.class,\r\n                 StaleStateException.class,\r\n                 OptimisticLockingFailureException.class},\r\n        maxAttempts = 5,\r\n        backoff = @Backoff(delay = 50, multiplier = 2, maxDelay = 500)\r\n    )\r\n    @Transactional\r\n    public void transferWithRetry(Long fromId, Long toId, BigDecimal amount) {\r\n        Account from = accountRepository.findById(fromId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n        Account to = accountRepository.findById(toId)\r\n            .orElseThrow(() -> new IllegalArgumentException(\"Not found\"));\r\n\r\n        from.debit(amount);\r\n        to.credit(amount);\r\n        accountRepository.save(from);\r\n        accountRepository.save(to);\r\n    }\r\n\r\n    // Generic retry utility\r\n    public <T> T withOptimisticRetry(Supplier<T> operation) {\r\n        int maxAttempts = 5;\r\n        int baseDelay = 50;\r\n\r\n        for (int attempt = 1; attempt <= maxAttempts; attempt++) {\r\n            try {\r\n                return operation.get();\r\n            } catch (OptimisticLockException | StaleStateException\r\n                     | OptimisticLockingFailureException e) {\r\n                if (attempt == maxAttempts) {\r\n                    throw e;\r\n                }\r\n                try {\r\n                    Thread.sleep(baseDelay * (long) Math.pow(2, attempt - 1));\r\n                } catch (InterruptedException ie) {\r\n                    Thread.currentThread().interrupt();\r\n                    throw new RuntimeException(\"Retry interrupted\", ie);\r\n                }\r\n            }\r\n        }\r\n        throw new RuntimeException(\"Should not reach here\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-management-in-rest-controllers",
      children: "Version Management in REST Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx.locking;\r\n\r\nimport org.springframework.http.ResponseEntity;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/accounts\")\r\npublic class AccountController {\r\n\r\n    private final AccountRepository accountRepository;\r\n\r\n    public AccountController(AccountRepository accountRepository) {\r\n        this.accountRepository = accountRepository;\r\n    }\r\n\r\n    @PutMapping(\"/{id}\")\r\n    public ResponseEntity<Account> updateAccount(\r\n            @PathVariable Long id,\r\n            @RequestBody AccountUpdateRequest request) {\r\n\r\n        return accountRepository.findById(id)\r\n            .map(account -> {\r\n                // The client sends the version they last read\r\n                if (!account.getVersion().equals(request.getVersion())) {\r\n                    return ResponseEntity.status(409).build();\r\n                }\r\n                account.setOwnerName(request.getOwnerName());\r\n                Account saved = accountRepository.save(account);\r\n                return ResponseEntity.ok(saved);\r\n            })\r\n            .orElse(ResponseEntity.notFound().build());\r\n    }\r\n\r\n    @PutMapping(\"/{id}/balance\")\r\n    public ResponseEntity<Account> updateBalance(\r\n            @PathVariable Long id,\r\n            @RequestBody BalanceUpdateRequest request) {\r\n\r\n        return accountRepository.findById(id)\r\n            .map(account -> {\r\n                try {\r\n                    account.setBalance(request.getNewBalance());\r\n                    Account saved = accountRepository.save(account);\r\n                    return ResponseEntity.ok(saved);\r\n                } catch (OptimisticLockException e) {\r\n                    return ResponseEntity.status(409)\r\n                        .header(\"X-Conflict\", \"Version conflict, retry\")\r\n                        .build();\r\n                }\r\n            })\r\n            .orElse(ResponseEntity.notFound().build());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimistic-vs-pessimistic-comparison",
      children: "Optimistic vs Pessimistic Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pessimistic Locking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lock acquisition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At commit time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At read time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low contention, read-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High contention, write-heavy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (no lock overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (locks serialize access)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlocks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible (no locks held)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (retry required)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Retry required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (version conflict)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (deadlock victim)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale data duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window between read and commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No stale reads (locked)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version increment on every write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock management in database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal (version column)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Requires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... FOR UPDATE"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-9",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-9",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-configuration",
      children: "Transaction Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enabling-transaction-management",
      children: "Enabling Transaction Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.transaction.annotation.EnableTransactionManagement;\r\n\r\n@Configuration\r\n@EnableTransactionManagement\r\n// @EnableTransactionManagement(order = 0) — custom order for advisors\r\n// @EnableTransactionManagement(mode = AdviceMode.ASPECTJ) — use AspectJ instead of proxies\r\npublic class TransactionConfig {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-transaction-attributes-with-transactional",
      children: "Custom Transaction Attributes with @Transactional"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.core.annotation.AliasFor;\r\nimport org.springframework.transaction.annotation.Isolation;\r\nimport org.springframework.transaction.annotation.Propagation;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\nimport java.lang.annotation.*;\r\n\r\n@Target({ElementType.METHOD, ElementType.TYPE})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@Inherited\r\n@Documented\r\n@Transactional(\r\n    propagation = Propagation.REQUIRED,\r\n    isolation = Isolation.REPEATABLE_READ,\r\n    timeout = 30,\r\n    rollbackFor = DataIntegrityException.class,\r\n    readOnly = false\r\n)\r\npublic @interface CustomTransactional {\r\n\r\n    @AliasFor(annotation = Transactional.class, attribute = \"readOnly\")\r\n    boolean readOnly() default false;\r\n\r\n    @AliasFor(annotation = Transactional.class, attribute = \"timeout\")\r\n    int timeout() default 30;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-configuration-with-properties",
      children: "Transaction Configuration with Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\r\nspring:\r\n  transaction:\r\n    default-timeout: 30\r\n    rollback-on-commit-failure: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-template-with-custom-configuration",
      children: "Transaction Template with Custom Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.transaction.PlatformTransactionManager;\r\nimport org.springframework.transaction.TransactionDefinition;\r\nimport org.springframework.transaction.support.TransactionTemplate;\r\n\r\n@Configuration\r\npublic class TransactionTemplateConfig {\r\n\r\n    @Bean\r\n    public TransactionTemplate transactionTemplate(\r\n            PlatformTransactionManager transactionManager) {\r\n        TransactionTemplate template = new TransactionTemplate(transactionManager);\r\n        template.setPropagationBehaviorName(\r\n            \"PROPAGATION_REQUIRED\");\r\n        template.setIsolationLevel(\r\n            TransactionDefinition.ISOLATION_READ_COMMITTED);\r\n        template.setTimeout(30);\r\n        template.setReadOnly(false);\r\n        template.setName(\"app-tx-template\");\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public TransactionTemplate readOnlyTransactionTemplate(\r\n            PlatformTransactionManager transactionManager) {\r\n        TransactionTemplate template = new TransactionTemplate(transactionManager);\r\n        template.setReadOnly(true);\r\n        template.setTimeout(10);\r\n        template.setName(\"readonly-tx-template\");\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public TransactionTemplate requiresNewTransactionTemplate(\r\n            PlatformTransactionManager transactionManager) {\r\n        TransactionTemplate template = new TransactionTemplate(transactionManager);\r\n        template.setPropagationBehavior(\r\n            TransactionDefinition.PROPAGATION_REQUIRES_NEW);\r\n        template.setTimeout(5);\r\n        template.setName(\"requires-new-tx-template\");\r\n        return template;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-datasource-transaction-configuration",
      children: "Multi-DataSource Transaction Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.beans.factory.annotation.Qualifier;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.context.annotation.Primary;\r\nimport org.springframework.jdbc.datasource.DataSourceTransactionManager;\r\nimport org.springframework.orm.jpa.JpaTransactionManager;\r\nimport org.springframework.transaction.PlatformTransactionManager;\r\n\r\nimport jakarta.persistence.EntityManagerFactory;\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\npublic class MultiDataSourceTxConfig {\r\n\r\n    @Primary\r\n    @Bean\r\n    public PlatformTransactionManager primaryTransactionManager(\r\n            @Qualifier(\"primaryDataSource\") DataSource dataSource) {\r\n        return new DataSourceTransactionManager(dataSource);\r\n    }\r\n\r\n    @Bean\r\n    public PlatformTransactionManager reportingTransactionManager(\r\n            @Qualifier(\"reportingDataSource\") DataSource dataSource) {\r\n        return new DataSourceTransactionManager(dataSource);\r\n    }\r\n\r\n    @Bean\r\n    public PlatformTransactionManager jpaTransactionManager(\r\n            @Qualifier(\"jpaEntityManagerFactory\") EntityManagerFactory emf) {\r\n        return new JpaTransactionManager(emf);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.beans.factory.annotation.Qualifier;\r\nimport org.springframework.stereotype.Service;\r\nimport org.springframework.transaction.annotation.Transactional;\r\n\r\n@Service\r\npublic class MultiDataSourceService {\r\n\r\n    private final OrderRepository orderRepository;\r\n    private final ReportRepository reportRepository;\r\n\r\n    public MultiDataSourceService(\r\n            OrderRepository orderRepository,\r\n            @Qualifier(\"reportingRepository\") ReportRepository reportRepository) {\r\n        this.orderRepository = orderRepository;\r\n        this.reportRepository = reportRepository;\r\n    }\r\n\r\n    @Transactional(\"primaryTransactionManager\")\r\n    public void saveOrder(Order order) {\r\n        orderRepository.save(order);\r\n    }\r\n\r\n    @Transactional(\"reportingTransactionManager\")\r\n    public void generateReport() {\r\n        reportRepository.runReport();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-10",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-10",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entity-and-repository-definitions",
      children: "Entity and Repository Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The domain classes used across the examples:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport jakarta.persistence.*;\r\nimport java.math.BigDecimal;\r\nimport java.time.LocalDateTime;\r\n\r\n@Entity\r\n@Table(name = \"accounts\")\r\npublic class Account {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    @Column(nullable = false)\r\n    private String ownerName;\r\n\r\n    @Column(nullable = false, precision = 19, scale = 2)\r\n    private BigDecimal balance;\r\n\r\n    @Version\r\n    private Long version;\r\n\r\n    @Column(nullable = false)\r\n    private LocalDateTime createdAt;\r\n\r\n    @Column(nullable = false)\r\n    private LocalDateTime updatedAt;\r\n\r\n    public Account() {}\r\n\r\n    public Account(String ownerName, BigDecimal balance) {\r\n        this.ownerName = ownerName;\r\n        this.balance = balance;\r\n        this.version = 0L;\r\n        this.createdAt = LocalDateTime.now();\r\n        this.updatedAt = LocalDateTime.now();\r\n    }\r\n\r\n    public void debit(BigDecimal amount) {\r\n        if (balance.compareTo(amount) < 0) {\r\n            throw new InsufficientBalanceException(id, amount);\r\n        }\r\n        this.balance = balance.subtract(amount);\r\n        this.updatedAt = LocalDateTime.now();\r\n    }\r\n\r\n    public void credit(BigDecimal amount) {\r\n        this.balance = balance.add(amount);\r\n        this.updatedAt = LocalDateTime.now();\r\n    }\r\n\r\n    public Long getId() { return id; }\r\n    public void setId(Long id) { this.id = id; }\r\n\r\n    public String getOwnerName() { return ownerName; }\r\n    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }\r\n\r\n    public BigDecimal getBalance() { return balance; }\r\n    public void setBalance(BigDecimal balance) { this.balance = balance; }\r\n\r\n    public Long getVersion() { return version; }\r\n    public void setVersion(Long version) { this.version = version; }\r\n\r\n    public LocalDateTime getCreatedAt() { return createdAt; }\r\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\r\n\r\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\r\n    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.data.jpa.repository.JpaRepository;\r\nimport org.springframework.stereotype.Repository;\r\n\r\nimport java.math.BigDecimal;\r\nimport java.util.List;\r\n\r\n@Repository\r\npublic interface AccountRepository extends JpaRepository<Account, Long> {\r\n\r\n    List<Account> findByOwnerName(String ownerName);\r\n\r\n    List<Account> findByBalanceGreaterThan(BigDecimal threshold);\r\n\r\n    long countByBalanceLessThan(BigDecimal threshold);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport jakarta.persistence.*;\r\nimport java.math.BigDecimal;\r\nimport java.time.LocalDateTime;\r\n\r\n@Entity\r\n@Table(name = \"orders\")\r\npublic class Order {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    @Column(nullable = false)\r\n    private String customerId;\r\n\r\n    @Column(nullable = false, precision = 19, scale = 2)\r\n    private BigDecimal amount;\r\n\r\n    @Column(nullable = false)\r\n    private String status;\r\n\r\n    @Column(nullable = false)\r\n    private LocalDateTime createdAt;\r\n\r\n    public Order() {}\r\n\r\n    public Order(String customerId, BigDecimal amount) {\r\n        this.customerId = customerId;\r\n        this.amount = amount;\r\n        this.status = \"PENDING\";\r\n        this.createdAt = LocalDateTime.now();\r\n    }\r\n\r\n    public Long getId() { return id; }\r\n    public void setId(Long id) { this.id = id; }\r\n\r\n    public String getCustomerId() { return customerId; }\r\n    public void setCustomerId(String customerId) { this.customerId = customerId; }\r\n\r\n    public BigDecimal getAmount() { return amount; }\r\n    public void setAmount(BigDecimal amount) { this.amount = amount; }\r\n\r\n    public String getStatus() { return status; }\r\n    public void setStatus(String status) { this.status = status; }\r\n\r\n    public LocalDateTime getCreatedAt() { return createdAt; }\r\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.data.jpa.repository.JpaRepository;\r\nimport org.springframework.stereotype.Repository;\r\n\r\nimport java.util.List;\r\n\r\n@Repository\r\npublic interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    List<Order> findByCustomerId(String customerId);\r\n\r\n    List<Order> findByStatus(String status);\r\n\r\n    long countByStatus(String status);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport jakarta.persistence.*;\r\nimport java.time.LocalDateTime;\r\n\r\n@Entity\r\n@Table(name = \"audit_logs\")\r\npublic class AuditLog {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    @Column(nullable = false)\r\n    private String action;\r\n\r\n    @Column(nullable = false)\r\n    private String performedBy;\r\n\r\n    @Column(length = 4000)\r\n    private String details;\r\n\r\n    @Column(nullable = false)\r\n    private LocalDateTime createdAt;\r\n\r\n    public AuditLog() {}\r\n\r\n    public AuditLog(String action, String performedBy, String details) {\r\n        this.action = action;\r\n        this.performedBy = performedBy;\r\n        this.details = details;\r\n        this.createdAt = LocalDateTime.now();\r\n    }\r\n\r\n    public AuditLog(String action) {\r\n        this.action = action;\r\n        this.performedBy = \"system\";\r\n        this.createdAt = LocalDateTime.now();\r\n    }\r\n\r\n    public Long getId() { return id; }\r\n    public void setId(Long id) { this.id = id; }\r\n\r\n    public String getAction() { return action; }\r\n    public void setAction(String action) { this.action = action; }\r\n\r\n    public String getPerformedBy() { return performedBy; }\r\n    public void setPerformedBy(String performedBy) { this.performedBy = performedBy; }\r\n\r\n    public String getDetails() { return details; }\r\n    public void setDetails(String details) { this.details = details; }\r\n\r\n    public LocalDateTime getCreatedAt() { return createdAt; }\r\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.data.jpa.repository.JpaRepository;\r\nimport org.springframework.stereotype.Repository;\r\n\r\n@Repository\r\npublic interface AuditLogRepository extends JpaRepository<AuditLog, Long> {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\npublic class InsufficientBalanceException extends RuntimeException {\r\n\r\n    private final Long accountId;\r\n    private final BigDecimal requested;\r\n    private final BigDecimal available;\r\n\r\n    public InsufficientBalanceException(Long accountId, BigDecimal requested) {\r\n        super(\"Insufficient balance in account \" + accountId\r\n            + \": requested \" + requested);\r\n        this.accountId = accountId;\r\n        this.requested = requested;\r\n        this.available = null;\r\n    }\r\n\r\n    public Long getAccountId() { return accountId; }\r\n    public BigDecimal getRequested() { return requested; }\r\n    public BigDecimal getAvailable() { return available; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\npublic class ConcurrentOperationException extends RuntimeException {\r\n    public ConcurrentOperationException(String message, Throwable cause) {\r\n        super(message, cause);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-entry-point",
      children: "Application Entry Point"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.tx;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\r\nimport org.springframework.retry.annotation.EnableRetry;\r\n\r\n@SpringBootApplication\r\n@EnableRetry\r\npublic class TransactionCourseApplication {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(TransactionCourseApplication.class, args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-11",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-11",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@Transactional"
          }), ": Declarative transaction management with seven propagation levels (", (0,jsx_runtime.jsx)(_components.code, {
            children: "REQUIRED"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REQUIRES_NEW"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NESTED"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MANDATORY"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SUPPORTS"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NOT_SUPPORTED"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NEVER"
          }), ") and five isolation levels (", (0,jsx_runtime.jsx)(_components.code, {
            children: "READ_UNCOMMITTED"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "READ_COMMITTED"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REPEATABLE_READ"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SERIALIZABLE"
          }), "). Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rollbackFor"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "noRollbackFor"
          }), " to control rollback behavior, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "readOnly"
          }), " for optimization hints, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "timeout"
          }), " for maximum execution duration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TransactionTemplate"
          }), ": Programmatic transaction management with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TransactionCallback"
          }), " (with return value) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TransactionCallbackWithoutResult"
          }), ". Use when you need per-item transactions, conditional commit/rollback, or dynamic transaction attributes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PlatformTransactionManager hierarchy"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataSourceTransactionManager"
          }), " for JDBC, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JpaTransactionManager"
          }), " for JPA, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JtaTransactionManager"
          }), " for distributed XA transactions, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ChainedTransactionManager"
          }), " for coordinating multiple resources."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transaction synchronization"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@TransactionalEventListener"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AFTER_COMMIT"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AFTER_ROLLBACK"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AFTER_COMPLETION"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BEFORE_COMMIT"
          }), " phases. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TransactionSynchronizationManager"
          }), " provides thread-bound transaction context and resource management."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Declarative vs programmatic"
          }), ": Declarative is cleaner and sufficient for most service-layer boundaries. Programmatic is necessary when you need fine-grained control, per-item transactions, or dynamic configuration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Distributed transactions"
          }), ": JTA with 2PC provides strong consistency across multiple databases but has significant latency, blocking, and complexity trade-offs. The Saga pattern (choreography or orchestration) provides eventual consistency with compensating transactions and is more suitable for microservices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pessimistic locking"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Lock(PESSIMISTIC_WRITE/PESSIMISTIC_READ/PESSIMISTIC_FORCE_INCREMENT)"
          }), " acquires database locks at read time. Use for high-contention scenarios with retry logic for deadlock victims. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT ... FOR UPDATE"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT ... FOR SHARE"
          }), " are the underlying SQL mechanisms."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimistic locking"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Version"
          }), " column increments on every update, with conflict detection at commit time throws ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OptimisticLockException"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StaleStateException"
          }), ". Use for low-contention scenarios with retry patterns. Always retry with exponential backoff."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-12",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative transaction demarcation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use propagation, isolation, rollbackFor attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required, RequiresNew, Nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED is default; RequiresNew for independent units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_UNCOMMITTED to SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED balances safety and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based conflict detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Version on a numeric/timestamp column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTA, 2PC, Saga patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC for short XA; Saga for long-running workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-12",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@Transactional\"] --> B[Propagation]\r\n    B --> C[Isolation Levels]\r\n    C --> D[Rollback Rules]\r\n    D --> E[Programmatic Tx]\r\n    E --> F[Distributed Tx]\r\n    F --> G[Saga Pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REQUIRED"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REQUIRES_NEW"
          }), " propagation. Give a concrete scenario where you would use each."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "readOnly = true"
          }), " on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Transactional"
          }), "? Does it actually prevent writes?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NESTED"
          }), " propagation differ from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REQUIRES_NEW"
          }), "? Which one commits independently?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What happens when ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Transactional"
          }), " is placed on a private method? Why?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the four standard isolation levels and which concurrency phenomena each prevents."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rollbackFor = SomeException.class"
          }), " and throwing a runtime exception?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When would you choose ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TransactionTemplate"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Transactional"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the two-phase commit protocol. What are its failure modes?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare choreography-based sagas with orchestration-based sagas. What are the trade-offs?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Version"
          }), " in JPA implement optimistic locking? What happens when a version conflict is detected?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a deadlock? How can you prevent it in a pessimistic locking scenario?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PESSIMISTIC_READ"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PESSIMISTIC_WRITE"
          }), " locking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bank Transfer Service"
          }), ": Implement a complete bank transfer service with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Transactional"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "REPEATABLE_READ"
            }), " isolation"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pessimistic write locking on both accounts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper deadlock handling with retry"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Audit logging with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "REQUIRES_NEW"
            }), " propagation"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Balance validation before transfer"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Email notification via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@TransactionalEventListener(AFTER_COMMIT)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bulk Order Importer"
          }), ": Build a batch import processor that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reads 1000+ orders from a CSV file"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Imports each order in its own transaction (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TransactionTemplate"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Skips invalid rows without rolling back valid ones"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Logs each failure with details"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Returns a summary of successes and failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses per-item transaction boundaries to maximize throughput"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inventory Reservation System"
          }), ": Implement a distributed inventory service with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Optimistic locking on inventory quantities via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Version"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Retry with exponential backoff on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OptimisticLockException"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dedicated endpoint that returns the current version to clients"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version-based conflict detection in REST API responses (HTTP 409)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration tests that verify concurrent reservation behavior"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Saga-Based Order Processing"
          }), ": Design and implement a complete saga for order fulfillment:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 1: Order Service creates order in PENDING state"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 2: Inventory Service reserves stock"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 3: Payment Service charges the customer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 4: Shipping Service creates a shipment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compensating actions for each step"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement with both choreography (events) and orchestration (coordinator) patterns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Distributed Transaction Coordinator"
          }), ": Build a custom distributed transaction coordinator that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manages transactions across a PostgreSQL database and a MongoDB replica set"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements a simplified two-phase commit protocol"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintains a transaction log for recovery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles prepare failures with automatic rollback"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides a REST API to inspect ongoing and completed transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements timeout-based abort for stuck transactions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Phase Saga with Axon"
          }), ": Implement an Axon Framework saga for a travel booking system:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Book flight → Reserve hotel → Rent car → Confirm all"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each step is a separate microservice with its own database"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compensating actions: cancel flight, release hotel, cancel car"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle partial failures — if car rental fails, cancel both flight and hotel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement timeout handling — if any step takes longer than 30 seconds, compensate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add monitoring: saga state, step status, and compensating action history"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Concurrent Auction System"
          }), ": Build a real-time bidding system that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses optimistic locking for bids"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses pessimistic locking for payment processing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements a distributed lock on auction closing via Redis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles concurrent bids with retry logic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents deadlocks with ordered resource acquisition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides a real-time leaderboard using Redis sorted sets"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensures exactly-once payment processing using idempotency keys"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transaction Monitor"
          }), ": Build a Spring Boot Actuator extension that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exposes real-time transaction metrics via a custom Actuator endpoint"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tracks active transaction count, commit rate, rollback rate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Monitors average transaction duration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identifies transactions running longer than a threshold"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides an endpoint to inspect currently active transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Logs slow transactions with stack traces for debugging"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Integrates with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TransactionSynchronizationManager"
            }), " and AOP"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chained Transaction Manager for Heterogeneous Stores"
          }), ": Implement a custom transaction coordinator that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Coordinates transactions across PostgreSQL (JPA), MongoDB, and a REST API"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses the Saga pattern internally with compensating actions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provides ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Transactional"
            }), " compatibility with a custom annotation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Works with Spring's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PlatformTransactionManager"
            }), " abstraction"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles partial failures gracefully with automatic compensation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides configurable consistency levels (strong vs eventual per participant)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Includes a recovery mechanism for failed compensations"
          }), "\n"]
        }), "\n"]
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



/***/ }

}]);