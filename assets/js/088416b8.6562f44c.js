"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[11280],{

/***/ 81445
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_banking_technology_01_core_banking_solutions_md_088_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-banking-technology-01-core-banking-solutions-md-088.json
const site_docs_courses_banking_technology_01_core_banking_solutions_md_088_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/banking-technology/01-core-banking-solutions","title":"Chapter 01: Core Banking Solutions (CBS)","description":"Learning Objectives","source":"@site/docs/courses/banking-technology/01-core-banking-solutions.md","sourceDirName":"courses/banking-technology","slug":"/banking-technology/01-core-banking-solutions","permalink":"/ai-engineering-journey/banking-technology/01-core-banking-solutions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-core-banking-solutions","slug":"/banking-technology/01-core-banking-solutions","title":"Chapter 01: Core Banking Solutions (CBS)","sidebar_label":"Chapter 01: Core Banking Solutions (CBS)","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Banking Technology & Digital Banking","permalink":"/ai-engineering-journey/banking-technology"},"next":{"title":"Chapter 02: Digital Payment Systems","permalink":"/ai-engineering-journey/banking-technology/02-digital-payment-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/banking-technology/01-core-banking-solutions.md


const frontMatter = {
	id: '01-core-banking-solutions',
	slug: '/banking-technology/01-core-banking-solutions',
	title: 'Chapter 01: Core Banking Solutions (CBS)',
	sidebar_label: 'Chapter 01: Core Banking Solutions (CBS)',
	sidebar_position: 1
};
const contentTitle = 'Chapter 01: Core Banking Solutions (CBS)';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. Introduction to Core Banking Solutions",
  "id": "1-introduction-to-core-banking-solutions",
  "level": 3
}, {
  "value": "1.1 Evolution of CBS in India",
  "id": "11-evolution-of-cbs-in-india",
  "level": 4
}, {
  "value": "1.2 Why CBS Matters for IBPS Exams",
  "id": "12-why-cbs-matters-for-ibps-exams",
  "level": 4
}, {
  "value": "2. CBS Architecture — Three-Tier Model",
  "id": "2-cbs-architecture--three-tier-model",
  "level": 3
}, {
  "value": "2.1 Front-End (Channel) Tier",
  "id": "21-front-end-channel-tier",
  "level": 4
}, {
  "value": "2.2 Middleware (Gateway) Tier",
  "id": "22-middleware-gateway-tier",
  "level": 4
}, {
  "value": "2.3 Back-End (Core) Tier",
  "id": "23-back-end-core-tier",
  "level": 4
}, {
  "value": "3. CBS Platforms — T24, Finacle, BaNCS",
  "id": "3-cbs-platforms--t24-finacle-bancs",
  "level": 3
}, {
  "value": "3.1 Temenos T24 (now Temenos Transact)",
  "id": "31-temenos-t24-now-temenos-transact",
  "level": 4
}, {
  "value": "3.2 Infosys Finacle",
  "id": "32-infosys-finacle",
  "level": 4
}, {
  "value": "3.3 TCS BaNCS",
  "id": "33-tcs-bancs",
  "level": 4
}, {
  "value": "4. Transaction Processing — NEFT, RTGS, IMPS",
  "id": "4-transaction-processing--neft-rtgs-imps",
  "level": 3
}, {
  "value": "4.1 NEFT (National Electronic Funds Transfer)",
  "id": "41-neft-national-electronic-funds-transfer",
  "level": 4
}, {
  "value": "4.2 RTGS (Real Time Gross Settlement)",
  "id": "42-rtgs-real-time-gross-settlement",
  "level": 4
}, {
  "value": "4.3 NEFT vs RTGS vs IMPS — Technical Comparison",
  "id": "43-neft-vs-rtgs-vs-imps--technical-comparison",
  "level": 4
}, {
  "value": "5. ATM Switch Networking",
  "id": "5-atm-switch-networking",
  "level": 3
}, {
  "value": "5.1 ATM Switch Architecture",
  "id": "51-atm-switch-architecture",
  "level": 4
}, {
  "value": "5.2 National Financial Switch (NFS)",
  "id": "52-national-financial-switch-nfs",
  "level": 4
}, {
  "value": "6. CBS Database Design — Partitioning and Sharding",
  "id": "6-cbs-database-design--partitioning-and-sharding",
  "level": 3
}, {
  "value": "6.1 Partitioning in Oracle/DB2",
  "id": "61-partitioning-in-oracledb2",
  "level": 4
}, {
  "value": "6.2 Sharding for Multi-Tenant CBS",
  "id": "62-sharding-for-multi-tenant-cbs",
  "level": 4
}, {
  "value": "6.3 CBS Database Tables (Critical)",
  "id": "63-cbs-database-tables-critical",
  "level": 4
}, {
  "value": "7. Cheque Truncation System (CTS)",
  "id": "7-cheque-truncation-system-cts",
  "level": 3
}, {
  "value": "7.1 What is CTS?",
  "id": "71-what-is-cts",
  "level": 4
}, {
  "value": "7.2 CTS Technical Flow",
  "id": "72-cts-technical-flow",
  "level": 4
}, {
  "value": "8. MICR, IFSC, and Indian Financial System Code",
  "id": "8-micr-ifsc-and-indian-financial-system-code",
  "level": 3
}, {
  "value": "8.1 MICR (Magnetic Ink Character Recognition)",
  "id": "81-micr-magnetic-ink-character-recognition",
  "level": 4
}, {
  "value": "8.2 IFSC (Indian Financial System Code)",
  "id": "82-ifsc-indian-financial-system-code",
  "level": 4
}, {
  "value": "8.3 IFSC Database Table Design",
  "id": "83-ifsc-database-table-design",
  "level": 4
}, {
  "value": "9. Architecture Diagrams",
  "id": "9-architecture-diagrams",
  "level": 3
}, {
  "value": "CBS High-Level Architecture",
  "id": "cbs-high-level-architecture",
  "level": 4
}, {
  "value": "NEFT Transaction Flow",
  "id": "neft-transaction-flow",
  "level": 4
}, {
  "value": "Examples (Exam-Style MCQs)",
  "id": "examples-exam-style-mcqs",
  "level": 2
}, {
  "value": "10. TypeScript Code Examples",
  "id": "10-typescript-code-examples",
  "level": 3
}, {
  "value": "10.1 CBS Transaction Simulator",
  "id": "101-cbs-transaction-simulator",
  "level": 4
}, {
  "value": "10.2 NEFT / RTGS Message Processing",
  "id": "102-neft--rtgs-message-processing",
  "level": 4
}, {
  "value": "10.3 IFSC and MICR Validation Utility",
  "id": "103-ifsc-and-micr-validation-utility",
  "level": 4
}, {
  "value": "10.4 ISO 8583 Message Builder",
  "id": "104-iso-8583-message-builder",
  "level": 4
}, {
  "value": "11. Architecture Diagrams — Additional",
  "id": "11-architecture-diagrams--additional",
  "level": 3
}, {
  "value": "ATM Switch Network with NFS Interconnect",
  "id": "atm-switch-network-with-nfs-interconnect",
  "level": 4
}, {
  "value": "CBS Database Partitioning Strategy",
  "id": "cbs-database-partitioning-strategy",
  "level": 4
}, {
  "value": "12. Latest Developments (2024-2026)",
  "id": "12-latest-developments-2024-2026",
  "level": 3
}, {
  "value": "12.1 CBS Modernization Initiatives",
  "id": "121-cbs-modernization-initiatives",
  "level": 4
}, {
  "value": "12.2 New Payment System Integration with CBS",
  "id": "122-new-payment-system-integration-with-cbs",
  "level": 4
}, {
  "value": "12.3 CBS Security Enhancements (2024-2026)",
  "id": "123-cbs-security-enhancements-2024-2026",
  "level": 4
}, {
  "value": "📝 Solved Examples (20 MCQs)",
  "id": "-solved-examples-20-mcqs",
  "level": 2
}, {
  "value": "📖 Exercise Bank (30 Questions)",
  "id": "-exercise-bank-30-questions",
  "level": 2
}, {
  "value": "Section A: Short Answer (Questions 1-10)",
  "id": "section-a-short-answer-questions-1-10",
  "level": 3
}, {
  "value": "Section B: Long Answer (Questions 11-20)",
  "id": "section-b-long-answer-questions-11-20",
  "level": 3
}, {
  "value": "Section C: Application / Design (Questions 21-30)",
  "id": "section-c-application--design-questions-21-30",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "chapter-01-core-banking-solutions-cbs",
        children: "Chapter 01: Core Banking Solutions (CBS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/banking-technology/01-core-banking-solutions/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/banking-technology/01-core-banking-solutions/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/banking-technology/01-core-banking-solutions/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/banking-technology/01-core-banking-solutions/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/banking-technology/01-core-banking-solutions/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/banking-technology/01-core-banking-solutions/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three-tier architecture of Core Banking Solutions (CBS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare leading CBS platforms: T24, Finacle, and BaNCS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the technical flow of NEFT and RTGS settlement systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand ATM switch networking and ISO 8583 message standards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze CBS database design strategies including partitioning and sharding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Cheque Truncation System (CTS) and MICR/IFSC code structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decode the Indian Financial System Code (IFSC) format and its usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-introduction-to-core-banking-solutions",
      children: "1. Introduction to Core Banking Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core Banking Solution (CBS) is the centralized software platform that enables customers to operate their accounts from any branch of the bank, regardless of where the account was opened. In India, CBS adoption began in the early 2000s under the financial sector reform initiatives led by RBI and IBA."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The fundamental principle of CBS is \"Anywhere, Anytime Banking\" — a customer walks into Branch A in Mumbai but transacts on an account opened at Branch Z in Delhi. This is made possible by a centralized database and real-time transaction processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-evolution-of-cbs-in-india",
      children: "1.1 Evolution of CBS in India"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1970s–1980s:"
        }), " Branch-level standalone accounting systems (manual ledger + batch processing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1990s:"
        }), " LAN-based branch automation with local databases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2000–2005:"
        }), " Introduction of CBS — centralized systems by Infosys (Finacle), TCS (BaNCS), and Temenos (T24)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2006–2010:"
        }), " Nationwide rollout of CBS across all Public Sector Banks (PSBs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2010–present:"
        }), " CBS integrated with digital channels — UPI, Internet Banking, Mobile Banking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-why-cbs-matters-for-ibps-exams",
      children: "1.2 Why CBS Matters for IBPS Exams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IBPS SO IT Officer exams test CBS knowledge because it is the backbone of banking operations. Questions cover:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CBS architecture layers (front-end, middleware, back-end)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction flow from ATM/Internet Banking to the core system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CBS database design for high-volume transaction processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interface standards like ISO 8583 for ATM/POS messaging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-cbs-architecture--three-tier-model",
      children: "2. CBS Architecture — Three-Tier Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most CBS platforms in India follow a three-tier architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------------+\n|         Front-End / Channel Tier         |\n|  ATM  |  Internet Banking  |  Mobile     |\n|  POS  |  Branch Teller     |  Call Centre|\n+-------------------+----------------------+\n                    | HTTPS / MQ / ISO 8583\n+-------------------v----------------------+\n|         Middleware / Gateway Tier         |\n|  Transaction Gateway | Message Queue     |\n|  Protocol Converter  | Load Balancer     |\n|  ISO 8583 <-> XML    | Auth Gateway      |\n+-------------------+----------------------+\n                    | JDBC / ODBC / MQ\n+-------------------v----------------------+\n|         Back-End / Core Tier             |\n|  CBS Application Server                  |\n|  Account Master | Transaction Engine     |\n|  General Ledger | Interest Calculator    |\n|  Database (Oracle/DB2)                   |\n+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-front-end-channel-tier",
      children: "2.1 Front-End (Channel) Tier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The front-end tier includes all customer-facing and staff-facing interfaces. Each channel uses a different protocol:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Channel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message Format"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP + ISO 8583"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO 8583 (1987/1993/2003)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internet Banking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS/REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON/XML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile Banking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS/REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branch Teller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAN/TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML over MQ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call Centre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTI + Screen Pop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POS Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/IP + ISO 8583"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO 8583"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-middleware-gateway-tier",
      children: "2.2 Middleware (Gateway) Tier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The middleware tier is the brain of the integration layer. It performs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol conversion:"
        }), " ISO 8583 to XML/Java objects and vice versa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message routing:"
        }), " Forward transactions to the correct CBS module"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancing:"
        }), " Distribute incoming requests across multiple CBS instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction logging:"
        }), " Maintain audit trails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Encryption/decryption, MAC verification, SSL termination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queue management:"
        }), " IBM MQ, ActiveMQ, or RabbitMQ for guaranteed message delivery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — ATM Transaction Flow through Middleware:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer inserts card at ATM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ATM sends ISO 8583 message (0200 financial request) to middleware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware decrypts PIN block, validates card via HSM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware transforms ISO 8583 to XML/REST call for CBS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CBS processes transaction, sends response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware transforms response back to ISO 8583"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ATM dispenses cash/displays result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-back-end-core-tier",
      children: "2.3 Back-End (Core) Tier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The back-end tier contains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CBS Application Server:"
        }), " Runs core banking logic (account management, interest calculation, limit checking)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Server:"
        }), " Oracle, IBM DB2, or PostgreSQL with high-availability clustering (RAC, DataGuard)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "General Ledger (GL):"
        }), " Ensures accounting balance across all transactions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction Engine:"
        }), " Processes debits/credits with ACID compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch Processing Engine:"
        }), " Runs EOD (End of Day), interest postings, standing instructions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-cbs-platforms--t24-finacle-bancs",
      children: "3. CBS Platforms — T24, Finacle, BaNCS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-temenos-t24-now-temenos-transact",
      children: "3.1 Temenos T24 (now Temenos Transact)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "T24 is a Swiss-origin CBS platform widely used by private banks in India (HDFC, Kotak, Yes Bank)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-entity, multi-currency design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built on Temenos Application Framework (TAFJ) — Java-based runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OFS (Open Financial System) interface for external integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time online processing with end-of-day batch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Stack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language: COBOL (legacy) moved to Java (TAFJ)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database: Oracle, MSSQL, or DB2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Platform: Linux, AIX, Solaris"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Messaging: MQ Series, Tuxedo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "T24 Module Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "T24 Modules:\n├── CUSTOMER (Customer Management)\n├── ACCOUNT (Savings/Current/FD/RD)\n├── TELLER (Cash/Cheque Transactions)\n├── FUNDS (NEFT/RTGS/IMPS)\n├── LENDING (Loans/Overdrafts)\n├── SECURITIES (Investments)\n└── SECURITY (User/Role Management)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-infosys-finacle",
      children: "3.2 Infosys Finacle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finacle is the most widely deployed CBS in Indian public sector banks (SBI, PNB, BOB, Canara Bank). Built by Infosys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Java/J2EE based application server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finacle Connect (API gateway) for third-party integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for both real-time and near-real-time processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in analytics and CRM modules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Stack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language: Java, C++"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database: Oracle, DB2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application Server: WebSphere, WebLogic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Platform: AIX, Linux"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finacle Module Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Finacle Modules:\n├── Finacle Core (CBS engine)\n├── Finacle Connect (API layer)\n├── Finacle CRM (Customer management)\n├── Finacle Treasury\n├── Finacle Trade Finance\n├── Finacle Islamic Banking\n└── Finacle Alerts (Notifications)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-tcs-bancs",
      children: "3.3 TCS BaNCS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BaNCS (Banking Network and Channel Systems) is from Tata Consultancy Services. Used by Bank of India, Indian Bank, and many co-operative banks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Component-based architecture with SOA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BaNCSConnect for channel integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCS' Quartz platform for real-time processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-entity, multi-currency, multi-language support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Stack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language: Java, C++"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database: Oracle, DB2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server: WebLogic, JBoss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Platform: Linux, AIX"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Platform Comparison Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T24 (Temenos)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finacle (Infosys)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BaNCS (TCS)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java (TAFJ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java/C++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DB Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle, MSSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle, DB2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle, DB2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary Banks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDFC, Kotak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SBI, PNB, BOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOI, Indian Bank"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finacle Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BaNCSConnect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-transaction-processing--neft-rtgs-imps",
      children: "4. Transaction Processing — NEFT, RTGS, IMPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-neft-national-electronic-funds-transfer",
      children: "4.1 NEFT (National Electronic Funds Transfer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NEFT is a deferred net settlement (DNS) system — transactions are settled in batches at specific intervals. Operated by RBI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender Bank CBS -> NEFT Gateway (NPCI/RBI) -> Receiver Bank CBS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step (Technical):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer initiates NEFT from Internet Banking/Mobile"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sender's CBS validates account, balance, and beneficiary IFSC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sender's CBS sends transaction through INFINET (Indian Financial Network)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NEFT Service Centre at RBI/NPCI processes the message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settlement batch occurs every 30 minutes (24x7 from Dec 2019)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiver's CBS credits the beneficiary account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirmation message sent back to sender"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Message Format:"
      }), " Structured Financial Messaging System (SFMS) messages based on ISO 8583 variant modified for Indian needs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Technical Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settlement type: Deferred Net Settlement (DNS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timing: 24x7x365 (from Dec 2019)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch interval: Every 30 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction limit: No minimum; maximum varies by bank (typically Rs. 5-10 lakh for retail)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Availability: 24x7"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-rtgs-real-time-gross-settlement",
      children: "4.2 RTGS (Real Time Gross Settlement)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RTGS is a real-time settlement system — each transaction is settled individually on a gross basis. Operated by RBI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender Bank -> RTGS System (RBI) -> Receiver Bank\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step (Technical):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sender's CBS prepares RTGS message (SFMS MT103)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Message sent to RTGS system via INFINET"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RTGS system checks sender's settlement account balance at RBI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If sufficient balance: transaction settled immediately (gross settlement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiver's CBS gets real-time credit notification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If insufficient balance: transaction queued (queue management at RBI)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Queue Management at RTGS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple queues based on priority (Critical, High, Normal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "By-pass facility for critical transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-collateralization for government securities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Technical Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settlement type: Real Time Gross Settlement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timing: 7:00 AM to 6:00 PM (Mon-Sat, except 2nd/4th Saturday)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimum limit: Rs. 2 lakh (no maximum)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Processing: Continuous, transaction-by-transaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settlement finality: Irrevocable and unconditional"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-neft-vs-rtgs-vs-imps--technical-comparison",
      children: "4.3 NEFT vs RTGS vs IMPS — Technical Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------+------------------+------------------+------------------+\n|    Parameter     |      NEFT        |      RTGS        |      IMPS        |\n+------------------+------------------+------------------+------------------+\n| Settlement Type  | Deferred Net     | Real-Time Gross  | Real-Time        |\n|                  | Settlement (DNS) | (RTGS)           | (Immediate)      |\n| Timing           | 24x7x365         | 7AM-6PM Weekdays | 24x7x365         |\n| Transaction Min  | No minimum       | Rs. 2,00,000     | Re. 1            |\n| Transaction Max  | Bank-specific    | No upper limit   | Rs. 5,00,000     |\n| Settlement       | Every 30 min     | Real-time        | Real-time        |\n| Message Format   | SFMS             | SFMS (MT103)     | ISO 8583 / SFMS  |\n| Operated By      | RBI/NPCI         | RBI              | NPCI             |\n| Channel          | INFINET          | INFINET          | IMPS Switch      |\n| Purpose          | Low-value remit  | High-value remit | Mobile Instant   |\n+------------------+------------------+------------------+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-atm-switch-networking",
      children: "5. ATM Switch Networking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-atm-switch-architecture",
      children: "5.1 ATM Switch Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ATM switch (also called Interchange Switch or EFT Switch) connects multiple ATMs to the CBS and to the interbank network (NPCI/NFS)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+    +----------+    +----------+\n| ATM A    |    | ATM B    |    | ATM C    |\n+-----+----+    +-----+----+    +-----+----+\n      |               |               |\n      +-------+-------+-------+-------+\n              |               |\n        +-----v------+  +-----v------+\n        | Bank A     |  | Bank B     |\n        | ATM Switch |  | ATM Switch |\n        +-----+------+  +-----+------+\n              |               |\n      +-------+-------+-------+\n              |               |\n        +-----v------+  +-----v------+\n        | NPCI NFS   |  | Mastercard |\n        | Interchange |  | Cirrus    |\n        +-----+------+  +------------+\n              |\n        +-----v------+\n        | CBS of     |\n        | Issuing    |\n        | Bank       |\n        +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ISO 8583 — The ATM Message Standard:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ISO 8583 defines the message format for all ATM and POS transactions. Key message types:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MTI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization Request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization Response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial Request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial Response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal Request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0420"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal/Chargeback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settlement Request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ISO 8583 Message Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Message Length (2 bytes) | MTI (4 digits) | Bitmap (8-16 bytes) | Data Elements (variable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Data Elements (DE) in ATM Messages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 2: PAN (Primary Account Number) — 19 digits max"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 3: Processing Code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 4: Amount (Transaction amount in minor units)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 11: STAN (Systems Trace Audit Number)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 12: Local Transaction Time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 13: Local Transaction Date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 32: Acquiring Institution ID"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 35: Track 2 Data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 37: Retrieval Reference Number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 39: Response Code (00 = Approved)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 41: Card Acceptor Terminal ID"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 52: PIN Data (encrypted PIN block)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DE 54: Additional Amounts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-national-financial-switch-nfs",
      children: "5.2 National Financial Switch (NFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFS is the domestic interbank ATM network operated by NPCI. It connects over 1.2 lakh ATMs of all member banks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How an Interbank ATM Transaction Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer inserts Card A (Bank A) at ATM of Bank B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank B's ATM Switch reads card BIN (Bank Identification Number)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BIN 'XXXXXX' identifies Bank A as issuer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank B's Switch sends ISO 8583 0200 message to NFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NFS routes to Bank A's Switch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank A's Switch forwards to Bank A's CBS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CBS validates PIN (via HSM), checks balance, debits account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Response: ISO 8583 0210 (Approved/Declined)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank A's Switch sends response back through NFS to Bank B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank B's ATM dispenses cash"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HSM (Hardware Security Module) Role:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIN encryption/decryption using LMK (Local Master Key)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIN translation between acquirer and issuer keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ARQC/ARPC verification for EMV chip cards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure key management (TMK, TAK, ZPK)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-cbs-database-design--partitioning-and-sharding",
      children: "6. CBS Database Design — Partitioning and Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "High-volume CBS databases must handle millions of transactions daily. Key design strategies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-partitioning-in-oracledb2",
      children: "6.1 Partitioning in Oracle/DB2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partitioning splits a large table into smaller, manageable segments while maintaining logical unity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common CBS Partitioning Schemes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction Table: TXN_HISTORY\n├── Range Partitioning: BY RANGE (TXN_DATE)\n│   ├── PARTITION p2024_q1 VALUES LESS THAN ('01-APR-2024')\n│   ├── PARTITION p2024_q2 VALUES LESS THAN ('01-JUL-2024')\n│   ├── PARTITION p2024_q3 VALUES LESS THAN ('01-OCT-2024')\n│   └── PARTITION p2024_q4 VALUES LESS THAN ('01-JAN-2025')\n│\n├── List Partitioning: BY LIST (BRANCH_CODE)\n│   ├── PARTITION north VALUES ('DEL', 'LKO', 'CHD')\n│   ├── PARTITION west VALUES ('MUM', 'PUN', 'AHM')\n│   └── PARTITION south VALUES ('BEN', 'CHE', 'HYD')\n│\n└── Hash Partitioning: BY HASH (ACCOUNT_NO) PARTITIONS 16\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits for CBS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Pruning:"
        }), " Queries with date range only scan relevant partitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel DML:"
        }), " Operations on different partitions run in parallel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Lifecycle Management:"
        }), " Old partitions can be compressed or moved to slower storage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability:"
        }), " One partition failure doesn't bring down entire table"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-sharding-for-multi-tenant-cbs",
      children: "6.2 Sharding for Multi-Tenant CBS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sharding distributes data across multiple database instances/servers. Used by large banks to scale horizontally."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CBS Sharding Architecture:\n\nRouter/Proxy Layer\n├── Shard 1 (Oracle RAC A)\n│   ├── Accounts 1-500000\n│   └── TXN for these accounts\n├── Shard 2 (Oracle RAC B)\n│   ├── Accounts 500001-1000000\n│   └── TXN for these accounts\n├── Shard 3 (Oracle RAC C)\n│   ├── Accounts 1000001-1500000\n│   └── TXN for these accounts\n└── Config Server (Shard Map)\n    ├── Shard Key: ACCOUNT_NO\n    └── Range: 0000000000-9999999999\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding Key Selection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Account Number:"
        }), " Most common shard key in CBS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customer ID:"
        }), " Used when all accounts of a customer should be in same shard"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch Code:"
        }), " Used for geographically distributed deployments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges in CBS Sharding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-shard transactions (ACID across shards is complex)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed joins (customer + account + transaction across shards)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resharding when data grows (moving data between shards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-cbs-database-tables-critical",
      children: "6.3 CBS Database Tables (Critical)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Account Master Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ACCOUNT_MASTER:\n├── ACCOUNT_NO (PK, Shard Key)\n├── CUSTOMER_ID (FK to CUSTOMER_MASTER)\n├── BRANCH_CODE\n├── PRODUCT_CODE (SAV/CUR/FD/RD)\n├── CURRENT_BALANCE (DECIMAL 18,2)\n├── LEDGER_BALANCE (DECIMAL 18,2)\n├── STATUS (ACTIVE/DORMANT/CLOSED)\n├── OPEN_DATE\n├── LAST_TXN_DATE\n├── INTEREST_RATE\n├── NOMINEE_DETAILS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TRANSACTION_LOG:\n├── TXN_REF_NO (PK)\n├── ACCOUNT_NO (FK, Partition Key)\n├── TXN_DATE (Partition Key)\n├── TXN_TYPE (DEBIT/CREDIT)\n├── TXN_AMOUNT (DECIMAL 18,2)\n├── CHANNEL (ATM/IB/MB/BRANCH)\n├── TERMINAL_ID\n├── REFERENCE_NO\n├── NEFT_URN / RTGS_REF_NO\n├── RESPONSE_CODE\n├── POSTING_DATE\n├── VALUE_DATE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-cheque-truncation-system-cts",
      children: "7. Cheque Truncation System (CTS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "71-what-is-cts",
      children: "7.1 What is CTS?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CTS is a system where cheque images and electronic data are transmitted between banks instead of physically moving paper cheques. Implemented by RBI in 2008 (CTS-2010 standard)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before CTS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Physical cheque movement:\nBranch A (Drawer) -> Clearing House (City A) -> Air/Road Transport\n-> Clearing House (City B) -> Branch B (Drawee)\nTime: 3-14 days\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After CTS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Physical cheque stays at presenting bank:\nBranch A (Drawer) -> Scan (Front + Back) -> CTS Grid (NPCI)\n-> Presenting Bank -> Drawee Bank\nTime: T+1 (1 day)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "72-cts-technical-flow",
      children: "7.2 CTS Technical Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. PAYER deposits cheque at PRESENTING BANK\n2. Cheque scanned (Front: all details; Back: endorsement)\n   ├── Image: Greyscale TIFF, 200 DPI minimum\n   ├── MICR Line: Auto-read by scanner\n   └── Digital Signature: Using bank's private key\n3. Image + data sent to CTS Grid (NPCI)\n4. CTS Grid validates:\n   ├── Image quality (size: &lt; 200KB per image)\n   ├── MICR read vs manual data\n   └── Digital signature verification\n5. CTS Grid routes to PAYING BANK through INFINET\n6. Paying Bank CBS:\n   ├── Image displayed to teller (or auto-approval)\n   ├── Signature verification\n   ├── Funds availability check\n   └── Debit decision: Return or Honour\n7. Settlement through RBI current account\n8. Presenting bank gets credit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CTS-2010 Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image dimensions: 1200 x 650 pixels (front), 900 x 600 pixels (back)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File format: TIFF with CCITT Group 4 compression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimum DPI: 200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grid capture: 300 DPI for MICR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption: PKI-based digital signatures using licensed Certifying Authorities (CAs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive period: 10 years"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-micr-ifsc-and-indian-financial-system-code",
      children: "8. MICR, IFSC, and Indian Financial System Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "81-micr-magnetic-ink-character-recognition",
      children: "8.1 MICR (Magnetic Ink Character Recognition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MICR is a 9-digit code printed on cheque leaves using magnetic ink (iron oxide-based). Allows high-speed automated cheque processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MICR Code Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CCCC BBB A\n├── CCCC: City Code (4 digits) — First 3 digits = city PIN prefix, 4th = 0\n│   Example: 400 for Mumbai, 110 for Delhi, 700 for Kolkata\n├── BBB: Bank Code (3 digits) — Assigned by IBA\n│   Example: 002 for SBI, 011 for HDFC\n└── A: Branch Code (1 digit) — Specific to branch within bank-city\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "400002011"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "City: Mumbai (400)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank: SBI (002)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch: 011 (Mumbai Main Branch)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "82-ifsc-indian-financial-system-code",
      children: "8.2 IFSC (Indian Financial System Code)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IFSC is an 11-character alphanumeric code that uniquely identifies a bank branch for electronic payment systems (NEFT, RTGS, IMPS)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IFSC Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SBIN0012345\n├── SBIN: Bank Code (4 chars) — Alphabetical\n│   Example: SBIN for SBI, HDFC for HDFC, ICIC for ICICI\n├── 0: Reserved character (5th char) — Always '0' for future use\n└── 12345: Branch Code (6 chars) — Alphanumeric, unique within bank\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where IFSC is used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NEFT/RTGS/IMPS beneficiary registration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UPI transactions (through VPA mapping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tax payments (NSDL/ODSL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mandate registration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BBPS bill payments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How CBS Validates IFSC:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. User enters beneficiary IFSC\n2. CBS validates format: ^[A-Z]{4}0[A-Z0-9]{6}$\n3. CBS looks up IFSC database (master table)\n4. Validates branch exists and is NEFT-enabled\n5. Gets MICR code, city, branch name from IFSC master\n6. Displays confirmation to user before adding beneficiary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "83-ifsc-database-table-design",
      children: "8.3 IFSC Database Table Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IFSC_MASTER:\n├── IFSC_CODE (PK, VARCHAR2(11))\n├── BANK_NAME (VARCHAR2(100))\n├── BANK_CODE (VARCHAR2(9))\n├── BRANCH_NAME (VARCHAR2(100))\n├── ADDRESS (VARCHAR2(500))\n├── CITY (VARCHAR2(50))\n├── DISTRICT (VARCHAR2(50))\n├── STATE (VARCHAR2(50))\n├── MICR_CODE (VARCHAR2(9))\n├── CONTACT (VARCHAR2(20))\n├── NEFT_ENABLED (CHAR1: Y/N)\n├── RTGS_ENABLED (CHAR1: Y/N)\n├── IMPS_ENABLED (CHAR1: Y/N)\n├── LAST_UPDATED (TIMESTAMP)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RBI publishes the IFSC master database as a downloadable Excel file, updated periodically. Banks consume this for their CBS IFSC validation tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-architecture-diagrams",
      children: "9. Architecture Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cbs-high-level-architecture",
      children: "CBS High-Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph Channels\n        A[ATM Channel]\n        B[Internet Banking]\n        C[Mobile Banking]\n        D[Branch Teller]\n        E[Call Centre]\n    end\n    \n    subgraph Middleware\n        F[Transaction Gateway]\n        G[Protocol Converter<br/>ISO 8583 -> XML/JSON]\n        H[HSM Interface<br/>PIN Encryption]\n        I[Load Balancer]\n        J[Message Queue<br/>IBM MQ / ActiveMQ]\n    end\n    \n    subgraph Backend\n        K[CBS Application Server<br/>T24 / Finacle / BaNCS]\n        L[Database<br/>Oracle RAC / DB2]\n        M[EOD Batch Engine]\n        N[Reporting Engine]\n    end\n    \n    subgraph Interbank\n        O[NPCI NFS Switch]\n        P[RBI RTGS/NEFT]\n        Q[UPI System]\n    end\n    \n    A --> F\n    B --> F\n    C --> F\n    D --> F\n    E --> F\n    F --> G\n    G --> H\n    H --> I\n    I --> J\n    J --> K\n    K --> L\n    K --> M\n    K --> N\n    K --> O\n    K --> P\n    K --> Q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "neft-transaction-flow",
      children: "NEFT Transaction Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Customer\n    participant IB as Internet Banking\n    participant CBS as Sender CBS\n    participant GW as NEFT Gateway\n    participant RBI as RBI Settlement\n    participant RS as Receiver CBS\n    \n    C->>IB: Add Beneficiary<br/>(Name, IFSC, A/C)\n    IB->>CBS: Validate IFSC\n    CBS-->>IB: Beneficiary Valid\n    C->>IB: Initiate NEFT<br/>(Amount, PIN/OTP)\n    IB->>CBS: Auth Request\n    CBS->>CBS: Check Balance\n    CBS-->>IB: Transaction Submitted\n    CBS->>GW: SFMS Message\n    GW->>GW: Batch Queue<br/>(30 min cycle)\n    GW->>RBI: Settlement Batch\n    RBI->>RBI: Debit Ours, Credit Theirs\n    RBI->>RS: Credit Advise\n    RS->>RS: Credit Beneficiary\n    RS-->>CBS: Success Confirmation\n    CBS-->>IB: Transaction Success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples-exam-style-mcqs",
      children: "Examples (Exam-Style MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\nWhich ISO 8583 message type indicates a Financial Request (e.g., ATM cash withdrawal)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 0100\nB) 0200\nC) 0400\nD) 0500"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) 0200**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Explanation: MTI 0200 is the Financial Request message used for ATM cash withdrawals. 0100 is Authorization Request, 0400 is Reversal, and 0500 is Settlement."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      }), "\nWhich settlement method is used by NEFT for processing transactions?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Real Time Gross Settlement\nB) Deferred Net Settlement\nC) Immediate Payment Settlement\nD) Continuous Linked Settlement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Deferred Net Settlement**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Explanation: NEFT operates on DNS, where transactions are batched and settled at 30-minute intervals. RTGS uses RTGS (Real Time Gross Settlement) where each transaction settles individually in real time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3:"
      }), "\nIn the IFSC code \"SBIN0012345\", what does the 5th character '0' represent?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Bank Code\nB) Reserved for future use\nC) Branch Code separator\nD) Check digit for validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Reserved for future use**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Explanation: The 5th character of IFSC is always '0', reserved by RBI for future use. The first 4 characters represent the bank, and the last 6 represent the branch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4:"
      }), "\nWhat is the minimum processing DPI required for MICR reading in CTS-2010 standards?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 100 DPI\nB) 200 DPI\nC) 300 DPI\nD) 600 DPI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) 300 DPI**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Explanation: CTS-2010 specifies 300 DPI for MICR reading to ensure accurate magnetic character recognition. The front image requires 200 DPI minimum but MICR capture is at 300 DPI."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5:"
      }), "\nWhich component in CBS architecture is responsible for converting ISO 8583 messages to XML/JSON for the core application?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) HSM\nB) Load Balancer\nC) Protocol Converter\nD) EOD Batch Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Protocol Converter**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Explanation: The Protocol Converter in the middleware tier handles conversion between channel-specific message formats (ISO 8583 for ATM/POS) and formats understood by the CBS application (XML/JSON)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-typescript-code-examples",
      children: "10. TypeScript Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "101-cbs-transaction-simulator",
      children: "10.1 CBS Transaction Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CBSAccount {\n  accountNo: string;\n  customerId: string;\n  branchCode: string;\n  productCode: 'SAV' | 'CUR' | 'FD' | 'RD';\n  currentBalance: number;\n  ledgerBalance: number;\n  status: 'ACTIVE' | 'DORMANT' | 'CLOSED';\n  openDate: Date;\n  lastTxnDate: Date;\n  interestRate: number;\n}\n\ninterface CBSTransaction {\n  txnRefNo: string;\n  accountNo: string;\n  txnDate: Date;\n  txnType: 'DEBIT' | 'CREDIT';\n  txnAmount: number;\n  channel: 'ATM' | 'IB' | 'MB' | 'BRANCH' | 'UPI';\n  terminalId: string;\n  responseCode: string;\n  postingDate: Date;\n  valueDate: Date;\n}\n\ninterface IFSCRecord {\n  ifscCode: string;\n  bankName: string;\n  bankCode: string;\n  branchName: string;\n  city: string;\n  state: string;\n  micrCode: string;\n  neftEnabled: boolean;\n  rtgsEnabled: boolean;\n  impsEnabled: boolean;\n}\n\nclass CBSTransactionEngine {\n  private accounts: Map<string, CBSAccount> = new Map();\n  private transactions: CBSTransaction[] = [];\n  private txnCounter: number = 0;\n\n  constructor() {\n    this.seedAccounts();\n  }\n\n  private seedAccounts(): void {\n    const sample: CBSAccount[] = [\n      { accountNo: '1001000001', customerId: 'C001', branchCode: 'MUM001', productCode: 'SAV', currentBalance: 50000, ledgerBalance: 50000, status: 'ACTIVE', openDate: new Date('2020-01-15'), lastTxnDate: new Date('2026-07-01'), interestRate: 3.5 },\n      { accountNo: '1001000002', customerId: 'C002', branchCode: 'DEL002', productCode: 'CUR', currentBalance: 200000, ledgerBalance: 200000, status: 'ACTIVE', openDate: new Date('2019-06-01'), lastTxnDate: new Date('2026-07-05'), interestRate: 0.0 },\n      { accountNo: '1001000003', customerId: 'C003', branchCode: 'BEN003', productCode: 'SAV', currentBalance: 1500, ledgerBalance: 1500, status: 'ACTIVE', openDate: new Date('2021-11-20'), lastTxnDate: new Date('2026-06-28'), interestRate: 3.0 },\n    ];\n    sample.forEach(a => this.accounts.set(a.accountNo, a));\n  }\n\n  processDebit(accountNo: string, amount: number, channel: CBSTransaction['channel'], terminalId: string): CBSTransaction {\n    const acct = this.accounts.get(accountNo);\n    if (!acct) { throw new Error('CBS-ERR-001: Account not found'); }\n    if (acct.status !== 'ACTIVE') { throw new Error('CBS-ERR-002: Account is ' + acct.status); }\n    if (acct.currentBalance &lt; amount) { throw new Error('CBS-ERR-003: Insufficient balance'); }\n\n    acct.currentBalance -= amount;\n    acct.lastTxnDate = new Date();\n    this.txnCounter++;\n\n    const txn: CBSTransaction = {\n      txnRefNo: `CBS${String(Date.now()).slice(-10)}${String(this.txnCounter).padStart(4, '0')}`,\n      accountNo,\n      txnDate: new Date(),\n      txnType: 'DEBIT',\n      txnAmount: amount,\n      channel,\n      terminalId,\n      responseCode: '00',\n      postingDate: new Date(),\n      valueDate: new Date(),\n    };\n    this.transactions.push(txn);\n    return txn;\n  }\n\n  processCredit(accountNo: string, amount: number, channel: CBSTransaction['channel'], terminalId: string): CBSTransaction {\n    const acct = this.accounts.get(accountNo);\n    if (!acct) { throw new Error('CBS-ERR-001: Account not found'); }\n    if (acct.status !== 'ACTIVE') { throw new Error('CBS-ERR-002: Account is ' + acct.status); }\n\n    acct.currentBalance += amount;\n    acct.ledgerBalance = acct.currentBalance;\n    acct.lastTxnDate = new Date();\n    this.txnCounter++;\n\n    const txn: CBSTransaction = {\n      txnRefNo: `CBS${String(Date.now()).slice(-10)}${String(this.txnCounter).padStart(4, '0')}`,\n      accountNo,\n      txnDate: new Date(),\n      txnType: 'CREDIT',\n      txnAmount: amount,\n      channel,\n      terminalId,\n      responseCode: '00',\n      postingDate: new Date(),\n      valueDate: new Date(),\n    };\n    this.transactions.push(txn);\n    return txn;\n  }\n\n  getBalance(accountNo: string): number {\n    const acct = this.accounts.get(accountNo);\n    if (!acct) { throw new Error('CBS-ERR-001: Account not found'); }\n    return acct.currentBalance;\n  }\n\n  getTransactionHistory(accountNo: string): CBSTransaction[] {\n    return this.transactions.filter(t => t.accountNo === accountNo);\n  }\n\n  generateDayEndReport(): object {\n    const totals = { totalDebits: 0, totalCredits: 0, txnCount: this.transactions.length };\n    for (const t of this.transactions) {\n      if (t.txnType === 'DEBIT') { totals.totalDebits += t.txnAmount; }\n      else { totals.totalCredits += t.txnAmount; }\n    }\n    return totals;\n  }\n}\n\n// Usage\nconst engine = new CBSTransactionEngine();\ntry {\n  const txn = engine.processDebit('1001000001', 2500, 'ATM', 'ATM-MUM-004');\n  console.log('Transaction successful:', txn.txnRefNo);\n  console.log('New balance:', engine.getBalance('1001000001'));\n} catch (err) {\n  console.error('Transaction failed:', (err as Error).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "102-neft--rtgs-message-processing",
      children: "10.2 NEFT / RTGS Message Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NEFTMessage {\n  senderIFSC: string;\n  receiverIFSC: string;\n  senderAccount: string;\n  receiverAccount: string;\n  amount: number;\n  remitterName: string;\n  beneficiaryName: string;\n  transactionDate: Date;\n  urn: string;\n}\n\ninterface RTGSMessage {\n  mt103Block1: string;\n  mt103Block2: string;\n  mt103Block3: string;\n  senderBank: string;\n  receiverBank: string;\n  amount: number;\n  valueDate: Date;\n  settlementAccountAtRBI: string;\n  priority: 'CRITICAL' | 'HIGH' | 'NORMAL';\n}\n\nclass NEFTProcessor {\n  private batchQueue: NEFTMessage[] = [];\n  private processedURNs: Set<string> = new Set();\n  private batchInterval: number = 30; // minutes\n\n  validateIFSC(ifsc: string): boolean {\n    return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);\n  }\n\n  submitTransaction(msg: NEFTMessage): string {\n    if (!this.validateIFSC(msg.senderIFSC)) { throw new Error('Invalid sender IFSC'); }\n    if (!this.validateIFSC(msg.receiverIFSC)) { throw new Error('Invalid receiver IFSC'); }\n    const urn = `NEFT${String(Date.now())}${Math.floor(Math.random() * 1000)}`;\n    msg.urn = urn;\n    this.batchQueue.push(msg);\n    console.log(`[NEFT] Transaction queued: ${urn}`);\n    return urn;\n  }\n\n  processBatch(): NEFTMessage[] {\n    console.log(`[NEFT] Processing batch of ${this.batchQueue.length} transactions`);\n    const batch = [...this.batchQueue];\n    this.batchQueue = [];\n\n    for (const txn of batch) {\n      this.processedURNs.add(txn.urn);\n      console.log(`[NEFT] Settled: ${txn.urn} - Rs.${txn.amount} from ${txn.senderIFSC} to ${txn.receiverIFSC}`);\n    }\n    return batch;\n  }\n\n  getQueueLength(): number { return this.batchQueue.length; }\n\n  getSettlementStatus(urn: string): string {\n    return this.processedURNs.has(urn) ? 'SETTLED' : 'PENDING';\n  }\n}\n\nclass RTGSProcessor {\n  private settlementAccounts: Map<string, number> = new Map();\n\n  constructor() {\n    this.settlementAccounts.set('RBISETTLEMENT', 50000000000);\n    this.settlementAccounts.set('SBISETTLEMENT', 20000000000);\n    this.settlementAccounts.set('HDFCSETTLEMENT', 15000000000);\n  }\n\n  processRealTime(msg: RTGSMessage): string {\n    if (msg.amount &lt; 200000) { throw new Error('RTGS minimum amount is Rs. 2,00,000'); }\n\n    const senderBal = this.settlementAccounts.get(msg.settlementAccountAtRBI) || 0;\n    if (senderBal &lt; msg.amount) {\n      console.log(`[RTGS] Queueing transaction - insufficient settlement balance`);\n      return `QUEUED-${Date.now()}`;\n    }\n\n    this.settlementAccounts.set(msg.settlementAccountAtRBI, senderBal - msg.amount);\n    const ref = `RTGS${Date.now()}${Math.floor(Math.random() * 9999)}`;\n    console.log(`[RTGS] Real-time settlement: ${ref} - Rs.${msg.amount}`);\n    return ref;\n  }\n\n  getSettlementBalance(bank: string): number {\n    return this.settlementAccounts.get(bank) || 0;\n  }\n}\n\n// Usage\nconst neft = new NEFTProcessor();\nconst neftTxn: NEFTMessage = {\n  senderIFSC: 'SBIN0012345', receiverIFSC: 'HDFC0006789',\n  senderAccount: '1001000001', receiverAccount: '2002000001',\n  amount: 50000, remitterName: 'Ram Sharma', beneficiaryName: 'Shyam Verma',\n  transactionDate: new Date(), urn: ''\n};\nconst urn = neft.submitTransaction(neftTxn);\nconsole.log('NEFT URN:', urn);\nneft.processBatch();\nconsole.log('NEFT Settlement Status:', neft.getSettlementStatus(urn));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "103-ifsc-and-micr-validation-utility",
      children: "10.3 IFSC and MICR Validation Utility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type BankCode = 'SBIN' | 'HDFC' | 'ICIC' | 'AXIS' | 'PUNB' | 'CANB' | 'BOB' | 'YESB' | 'KKBK' | 'UTIB';\n\ninterface IFSCValidationResult {\n  valid: boolean;\n  bankName?: string;\n  branchName?: string;\n  city?: string;\n  micrCode?: string;\n  error?: string;\n}\n\ninterface MICRValidationResult {\n  valid: boolean;\n  cityCode?: string;\n  bankCode?: string;\n  branchSuffix?: string;\n  error?: string;\n}\n\nclass IFSCValidator {\n  private ifscMaster: Map<string, IFSCRecord> = new Map();\n\n  constructor() {\n    this.seed();\n  }\n\n  private seed(): void {\n    const records: IFSCRecord[] = [\n      { ifscCode: 'SBIN0012345', bankName: 'State Bank of India', bankCode: 'SBI', branchName: 'Mumbai Main', city: 'Mumbai', state: 'Maharashtra', micrCode: '400002011', neftEnabled: true, rtgsEnabled: true, impsEnabled: true },\n      { ifscCode: 'HDFC0006789', bankName: 'HDFC Bank', bankCode: 'HDFC', branchName: 'Delhi Connaught Place', city: 'Delhi', state: 'Delhi', micrCode: '110240036', neftEnabled: true, rtgsEnabled: true, impsEnabled: true },\n      { ifscCode: 'ICIC0001122', bankName: 'ICICI Bank', bankCode: 'ICIC', branchName: 'Bangalore MG Road', city: 'Bangalore', state: 'Karnataka', micrCode: '560229003', neftEnabled: true, rtgsEnabled: true, impsEnabled: true },\n    ];\n    records.forEach(r => this.ifscMaster.set(r.ifscCode, r));\n  }\n\n  validate(ifsc: string): IFSCValidationResult {\n    const formatPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;\n    if (!formatPattern.test(ifsc)) {\n      return { valid: false, error: 'Invalid IFSC format. Must be 11 chars: 4 letters + 0 + 6 alphanumeric' };\n    }\n    const record = this.ifscMaster.get(ifsc);\n    if (!record) { return { valid: false, error: 'IFSC not found in master database' }; }\n    return {\n      valid: record.neftEnabled,\n      bankName: record.bankName,\n      branchName: record.branchName,\n      city: record.city,\n      micrCode: record.micrCode,\n    };\n  }\n\n  getBankFromIFSC(ifsc: string): string | null {\n    const result = this.validate(ifsc);\n    return result.valid ? result.bankName || null : null;\n  }\n}\n\nclass MICRValidator {\n  private cityMap: Map<string, string> = new Map([\n    ['400', 'Mumbai'], ['110', 'Delhi'], ['700', 'Kolkata'],\n    ['600', 'Chennai'], ['560', 'Bangalore'], ['500', 'Hyderabad'],\n    ['380', 'Ahmedabad'], ['411', 'Pune'],\n  ]);\n\n  private bankMap: Map<string, string> = new Map([\n    ['002', 'SBI'], ['011', 'HDFC'], ['012', 'ICICI'],\n    ['030', 'Axis'], ['024', 'Punjab National Bank'],\n  ]);\n\n  validate(micr: string): MICRValidationResult {\n    if (!/^\\d{9}$/.test(micr)) {\n      return { valid: false, error: 'MICR must be exactly 9 digits' };\n    }\n\n    const cityPart = micr.substring(0, 3);\n    const cityCode = cityPart + '0';\n    const bankCode = micr.substring(3, 6);\n    const branchSuffix = micr.substring(6, 7);\n\n    return {\n      valid: true,\n      cityCode: cityCode,\n      city: this.cityMap.get(cityPart) || 'Unknown',\n      bankCode: bankCode,\n      bankName: this.bankMap.get(bankCode) || 'Unknown',\n      branchSuffix: branchSuffix,\n    };\n  }\n}\n\n// Usage\nconst validator = new IFSCValidator();\nconst result = validator.validate('SBIN0012345');\nconsole.log('IFSC Validation:', JSON.stringify(result, null, 2));\n\nconst micrVal = new MICRValidator();\nconst micrResult = micrVal.validate('400002011');\nconsole.log('MICR Validation:', JSON.stringify(micrResult, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "104-iso-8583-message-builder",
      children: "10.4 ISO 8583 Message Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type MTI = '0100' | '0110' | '0200' | '0210' | '0400' | '0420' | '0500';\n\ninterface ISO8583Message {\n  mti: MTI;\n  bitmap: string;\n  dataElements: Map&lt;number, string&gt;;\n}\n\nclass ISO8583Builder {\n  private elements: Map&lt;number, string&gt; = new Map();\n\n  setMTI(mti: MTI): this {\n    this.elements.set(0, mti);\n    return this;\n  }\n\n  setDE(de: number, value: string): this {\n    this.elements.set(de, value);\n    return this;\n  }\n\n  setPAN(pan: string): this {\n    if (!/^\\d{16,19}$/.test(pan)) { throw new Error('Invalid PAN'); }\n    return this.setDE(2, pan);\n  }\n\n  setAmount(amount: number): this {\n    const minorUnits = Math.round(amount * 100).toString().padStart(12, '0');\n    return this.setDE(4, minorUnits);\n  }\n\n  setSTAN(stan: string): this {\n    return this.setDE(11, stan);\n  }\n\n  setDateTime(date: Date): this {\n    const time = `${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}${String(date.getSeconds()).padStart(2, '0')}`;\n    const dateStr = `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;\n    this.setDE(12, time);\n    this.setDE(13, dateStr);\n    return this;\n  }\n\n  setTerminalId(id: string): this {\n    return this.setDE(41, id);\n  }\n\n  build(): ISO8583Message {\n    const mti = this.elements.get(0) as MTI;\n    const bitmap = this.computeBitmap();\n    const dataElements = new Map(this.elements);\n    dataElements.delete(0);\n    return { mti, bitmap, dataElements };\n  }\n\n  private computeBitmap(): string {\n    const bits: string[] = Array(64).fill('0');\n    for (const de of this.elements.keys()) {\n      if (de >= 1 && de &lt;= 64) { bits[de - 1] = '1'; }\n    }\n    return bits.join('');\n  }\n\n  parseResponse(response: ISO8583Message): string {\n    const respCode = response.dataElements.get(39) || '99';\n    const codeMap: Record&lt;string, string&gt; = {\n      '00': 'Approved', '01': 'Refer to issuer', '05': 'Declined',\n      '14': 'Invalid card', '51': 'Insufficient funds', '91': 'Issuer unavailable',\n    };\n    return codeMap[respCode] || 'Unknown';\n  }\n}\n\n// Usage\nconst atmMsg = new ISO8583Builder()\n  .setMTI('0200')\n  .setPAN('6220180012345678')\n  .setAmount(5000)\n  .setSTAN('123456')\n  .setDateTime(new Date())\n  .setTerminalId('ATM-MUM-012')\n  .build();\n\nconsole.log('ISO 8583 Message:', JSON.stringify({\n  mti: atmMsg.mti,\n  bitmap: atmMsg.bitmap.substring(0, 16) + '...',\n  elements: Object.fromEntries(atmMsg.dataElements),\n}, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-architecture-diagrams--additional",
      children: "11. Architecture Diagrams — Additional"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "atm-switch-network-with-nfs-interconnect",
      children: "ATM Switch Network with NFS Interconnect"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph Bank_A[Bank A Network]\n        ATM_A1[ATM A-1]\n        ATM_A2[ATM A-2]\n        SW_A[Bank A ATM Switch]\n        CBS_A[Bank A CBS]\n    end\n    \n    subgraph Bank_B[Bank B Network]\n        ATM_B1[ATM B-1]\n        ATM_B2[ATM B-2]\n        SW_B[Bank B ATM Switch]\n        CBS_B[Bank B CBS]\n    end\n    \n    subgraph NPCI_NFS[NPCI NFS Interchange]\n        NFS[National Financial Switch]\n        HSM_NFS[HSM Key Mgmt]\n        SETTLE[NFS Settlement Engine]\n    end\n    \n    subgraph Other_Networks[International Networks]\n        MC[Mastercard Cirrus]\n        VISA[Visa Plus]\n    end\n    \n    ATM_A1 --> SW_A\n    ATM_A2 --> SW_A\n    SW_A --> CBS_A\n    SW_A --> NFS\n    \n    ATM_B1 --> SW_B\n    ATM_B2 --> SW_B\n    SW_B --> CBS_B\n    SW_B --> NFS\n    \n    NFS --> HSM_NFS\n    NFS --> SETTLE\n    NFS --> MC\n    NFS --> VISA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cbs-database-partitioning-strategy",
      children: "CBS Database Partitioning Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph Transaction_Router[Transaction Router]\n        R[Load Balancer / Router]\n    end\n    \n    subgraph Shard_1[Shard 1 - North Region]\n        DB1[(Oracle RAC A<br/>Accounts 1-500K)]\n        APP1[App Server A]\n    end\n    \n    subgraph Shard_2[Shard 2 - West Region]\n        DB2[(Oracle RAC B<br/>Accounts 500K-1M)]\n        APP2[App Server B]\n    end\n    \n    subgraph Shard_3[Shard 3 - South Region]\n        DB3[(Oracle RAC C<br/>Accounts 1M-1.5M)]\n        APP3[App Server C]\n    end\n    \n    subgraph Central_Services[Central Services]\n        GL[General Ledger]\n        CONFIG[Config Server<br/>Shard Map]\n        EOD[EOD Batch Engine]\n    end\n    \n    R --> APP1\n    R --> APP2\n    R --> APP3\n    APP1 --> DB1\n    APP2 --> DB2\n    APP3 --> DB3\n    APP1 --> GL\n    APP2 --> GL\n    APP3 --> GL\n    DB1 --> EOD\n    DB2 --> EOD\n    DB3 --> EOD\n    R --> CONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-latest-developments-2024-2026",
      children: "12. Latest Developments (2024-2026)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-cbs-modernization-initiatives",
      children: "12.1 CBS Modernization Initiatives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " RBI issued guidelines for CBS API standardization — all banks must expose CBS functions through RESTful APIs (account opening, balance enquiry, transaction history) by March 2025. This enables easier integration with Account Aggregators and Open Banking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " SBI completed migration of 40 crore accounts to new-gen CBS platform (Finacle 11) with real-time processing and cloud-ready architecture. Downtime reduced from 4 hours (weekly) to zero (active-active)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " RBI mandated all PSBs to implement real-time fraud detection integrated with CBS — transactions are scored before posting. CBS must expose a pre-auth hook for fraud scoring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " HDFC Bank merged CBS platforms with HDFC Ltd (post-merger integration). T24 CBS consolidated across merged entity covering 8 crore+ customers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026:"
        }), " RBI's Digital Payments Index shows CBS transaction processing capacity has grown 5x since 2023, handling 500+ transactions per second during peak hours across major banks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-new-payment-system-integration-with-cbs",
      children: "12.2 New Payment System Integration with CBS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " CBS platforms integrated with UPI Circle (delegated payments) — primary account holder can set transaction limits for family members."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " CBS now supports CBDC (e-Rupee) wallet management natively — banks can mint, distribute, and redeem CBDC tokens through core system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026:"
        }), " All CBS platforms in India now support ISO 20022 messaging for cross-border payments, replacing legacy SWIFT MT messages for improved data richness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-cbs-security-enhancements-2024-2026",
      children: "12.3 CBS Security Enhancements (2024-2026)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " RBI circular mandated real-time CBS-to-SOC integration — all transactions above Rs. 10 lakh must generate SIEM alerts automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " CBS platforms now include built-in AI-based anomaly detection for transaction patterns. SBI's CBS flagged over 2 lakh suspicious transactions in first year."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026:"
        }), " Mandatory \"maker-checker\" for all CBS administrative functions enforced through CBS-level dual control — no single user can approve their own transactions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-solved-examples-20-mcqs",
      children: "📝 Solved Examples (20 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " What is the primary settlement method used by NEFT?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Real-time gross settlement\nB) Deferred net settlement\nC) Immediate payment settlement\nD) Continuous linked settlement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Deferred Net Settlement**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NEFT operates on Deferred Net Settlement (DNS), where transactions are batched and settled at 30-minute intervals. RTGS uses real-time gross settlement where each transaction settles individually."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " In the IFSC code ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HDFC0001234"
      }), ", which portion identifies the bank?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 0001\nB) HDFC\nC) 01234\nD) HDFC0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) HDFC**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The first 4 characters of IFSC represent the bank code (HDFC for HDFC Bank). The 5th character is always '0' (reserved), and the last 6 characters represent the branch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Which CBS platform is developed by Temenos and used by HDFC Bank?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Finacle\nB) BaNCS\nC) T24 (Temenos Transact)\nD) SilverLake"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) T24 (Temenos Transact)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "T24 (now Temenos Transact) is built by Temenos (Switzerland). It uses Java-based TAFJ runtime and OFS for external integration. HDFC, Kotak, and Yes Bank use T24."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " What does MTI 0110 represent in ISO 8583?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Financial Request\nB) Authorization Request\nC) Authorization Response\nD) Reversal Request"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Authorization Response**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTI 0110 is the Authorization Response, sent in reply to an 0100 Authorization Request. 0200 is Financial Request, 0400 is Reversal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " What is the RPO (Recovery Point Objective) mandated by RBI for critical CBS systems?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) < 1 hour\nB) < 15 minutes\nC) < 5 minutes\nD) < 30 minutes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) < 15 minutes**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RBI mandates RPO of less than 15 minutes for critical banking systems. RTO should be 2-4 hours. This ensures minimal data loss in case of a disaster."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6."
      }), " In CBS database design, what is the advantage of RANGE partitioning on TXN_DATE?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Faster inserts\nB) Partition pruning for date-range queries\nC) Reduced storage\nD) Automatic indexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Partition pruning for date-range queries**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RANGE partitioning on TXN_DATE enables partition pruning — queries with date range filters only scan relevant partitions instead of the entire table, dramatically improving query performance for transaction history lookups."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "7."
      }), " Which Data Element (DE) in ISO 8583 contains the transaction amount?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) DE 2\nB) DE 3\nC) DE 4\nD) DE 11"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) DE 4**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "DE 4 contains the transaction amount in minor units. DE 2 is PAN, DE 3 is Processing Code, DE 11 is STAN (Systems Trace Audit Number)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8."
      }), " What is the minimum image resolution required for cheque front image in CTS-2010?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 100 DPI\nB) 150 DPI\nC) 200 DPI\nD) 300 DPI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) 200 DPI**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "CTS-2010 specifies minimum 200 DPI for the front image (greyscale TIFF) and 300 DPI for MICR capture area. Image size must be less than 200 KB per image."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "9."
      }), " Which protocol is used by ATM channels to communicate with the CBS middleware?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) HTTP/REST\nB) ISO 8583 over TCP/IP\nC) SOAP/XML\nD) WebSocket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) ISO 8583 over TCP/IP**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "ATMs use ISO 8583 message format over TCP/IP connections to communicate with the bank's ATM Switch/middleware. The middleware converts ISO 8583 to XML/JSON for the CBS."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "10."
      }), " What is the batch interval for NEFT settlement?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 10 minutes\nB) 20 minutes\nC) 30 minutes\nD) 60 minutes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) 30 minutes**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NEFT operates with a batch interval of 30 minutes, 24x7x365. Each batch settles all queued transactions on a net basis through the RBI's settlement accounts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "11."
      }), " In CBS three-tier architecture, which tier handles protocol conversion?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Front-end tier\nB) Middleware tier\nC) Back-end tier\nD) Database tier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Middleware tier**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The middleware/gateway tier handles protocol conversion (ISO 8583 to XML/JSON), message routing, load balancing, security, and queue management between the channel tier and core CBS."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "12."
      }), " What is the MICR code for SBI's Mumbai Main Branch?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 400002011\nB) 400011002\nC) 002400011\nD) 011400002"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) 400002011**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MICR breakdown: 400 (Mumbai city code) + 002 (SBI bank code) + 011 (branch suffix). The format is CCCC BBB A where C=city, B=bank, A=branch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "13."
      }), " What type of HSM operation is used for PIN translation between acquirer and issuer keys in ATM transactions?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) PIN generation\nB) PIN verification\nC) PIN translation (ZPK under LMK)\nD) Key loading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) PIN translation (ZPK under LMK)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The HSM translates the PIN block from the acquirer's ZPK (Zone PIN Key) to the issuer's ZPK using the LMK (Local Master Key). This ensures PIN confidentiality across different banking networks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "14."
      }), " Which CBS platform is used by the largest number of Indian Public Sector Banks?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) T24\nB) Finacle\nC) BaNCS\nD) FlexCube"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Finacle**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Finacle (Infosys) is the most widely deployed CBS in Indian PSBs including SBI, PNB, BOB, Canara Bank, and many others. T24 is popular in private banks, BaNCS in select PSBs and co-operative banks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "15."
      }), " What is the maximum number of data elements possible in a single ISO 8583 message (1987 version)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 64\nB) 128\nC) 192\nD) 256"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) 128**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "ISO 8583 (1987 version) uses a 128-bit bitmap, allowing for 128 possible data elements. The 1993 version expanded to 192 bits. Each bit in the bitmap indicates presence of the corresponding data element."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "16."
      }), " In CBS sharding, what is the most commonly used shard key?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Branch code\nB) Account number\nC) Customer name\nD) Transaction date"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Account number**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Account number is the most common shard key in CBS because transactions always reference an account. It enables even distribution and predictable routing. Customer ID is also used when all accounts of one customer must stay together."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "17."
      }), " What is the file format required for cheque images in CTS-2010?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) JPEG\nB) PNG\nC) TIFF with CCITT Group 4 compression\nD) BMP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) TIFF with CCITT Group 4 compression**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "CTS-2010 mandates TIFF format with CCITT Group 4 compression for cheque images. This provides lossless compression optimized for black-and-white document images. Image dimensions: 1200x650 pixels (front)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "18."
      }), " Which module in T24 handles NEFT/RTGS/IMPS transactions?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) CUSTOMER\nB) TELLER\nC) FUNDS\nD) LENDING"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) FUNDS**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The FUNDS module in T24 handles all fund transfers including NEFT, RTGS, and IMPS. TELLER handles cash/cheque transactions, CUSTOMER manages customer profiles, and LENDING handles loans."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "19."
      }), " What is the purpose of the National Financial Switch (NFS)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Processing UPI transactions\nB) Domestic interbank ATM network\nC) Government payment processing\nD) Cross-border fund transfer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Domestic interbank ATM network**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NFS (National Financial Switch) is NPCI's domestic interbank ATM network connecting over 1.2 lakh ATMs of all member banks. It routes ATM transactions between acquiring banks and issuing banks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "20."
      }), " Under CTS, how long must banks archive cheque images?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 5 years\nB) 8 years\nC) 10 years\nD) 15 years"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) 10 years**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "CTS-2010 mandates that cheque images must be archived for 10 years. This ensures availability for dispute resolution, audit, and legal requirements. The archive uses PKI-based digital signatures for integrity verification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-exercise-bank-30-questions",
      children: "📖 Exercise Bank (30 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-a-short-answer-questions-1-10",
      children: "Section A: Short Answer (Questions 1-10)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " List the three layers of CBS architecture and the primary function of each layer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Write the IFSC validation regex pattern and explain what each part validates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Explain the difference between partitioning and sharding in CBS database design."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " What is the role of HSM in ATM transaction processing? Name three HSM operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " Compare NEFT, RTGS, and IMPS on settlement type, operator, and minimum amount."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6."
      }), " Describe the complete CTS-2010 cheque clearing workflow in 8 steps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "7."
      }), " What are the three types of partitioning used in CBS databases? Give an example column for each."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8."
      }), " List five critical ISO 8583 Data Elements and their purposes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "9."
      }), " Explain the MICR code structure with an example. What information does each part encode?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "10."
      }), " What is the role of the OFS interface in T24 CBS? How does it enable external integration?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-b-long-answer-questions-11-20",
      children: "Section B: Long Answer (Questions 11-20)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "11."
      }), " Draw and explain the three-tier CBS architecture. Describe how a transaction flows from ATM to CBS and back, including all protocol conversions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "12."
      }), " Compare T24, Finacle, and BaNCS CBS platforms on technology stack, database support, API layer, and primary bank users in India."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "13."
      }), " Describe the NEFT technical flow step by step. Include the INFINET network, SFMS messages, batch processing, and settlement mechanism."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "14."
      }), " Explain ISO 8583 message structure. Include the message length field, MTI, bitmap, and data elements. Give an example 0200 financial request message."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "15."
      }), " Describe how an interbank ATM transaction works through NFS. Include BIN lookup, ISO 8583 routing, HSM PIN verification, and settlement between banks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "16."
      }), " Explain the design considerations for CBS database sharding. Discuss shard key selection, cross-shard transactions, and resharding challenges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "17."
      }), " Compare deferred net settlement (NEFT) with real-time gross settlement (RTGS). Discuss advantages and disadvantages of each for different use cases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "18."
      }), " Describe the CBS General Ledger integration. How does a transaction posted to an account also update the bank's GL? Include double-entry accounting principles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "19."
      }), " Explain how CBS handles EOD (End of Day) processing. Include interest calculation, standing instructions, report generation, and batch job sequencing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "20."
      }), " Discuss the evolution of CBS in India from standalone branch systems to modern centralized platforms. Include key milestones and technology transitions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-c-application--design-questions-21-30",
      children: "Section C: Application / Design (Questions 21-30)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "21."
      }), " Design a CBS partition scheme for a bank with 5 crore accounts and 500 million daily transactions. Specify partition keys, types, and retention strategy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "22."
      }), " Write a Java/Pseudocode function to validate an IFSC code and return the corresponding bank name and branch from a master database."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "23."
      }), " Design a high-level architecture for CBS disaster recovery with RPO < 5 minutes and RTO < 1 hour. Include synchronous replication, DR site location, and failover procedure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "24."
      }), " Create a load balancing and queue architecture for CBS that can handle 10,000 TPS (transactions per second) during peak festival season."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "25."
      }), " Design an API gateway strategy for exposing CBS functions to third parties (fintechs, Account Aggregators). Include authentication, rate limiting, and data transformation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "26."
      }), " Compare range vs list vs hash partitioning for the TRANSACTION_LOG table. Which is most appropriate and why?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "27."
      }), " Design a CBS integration flow for UPI payments. Show how a UPI transaction traverses from the UPI app through NPCI to CBS and back."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "28."
      }), " Create an ISO 8583 message builder in TypeScript that constructs an 0200 financial request for an ATM withdrawal of Rs. 10,000."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "29."
      }), " Design a sharding architecture for a multi-tenant CBS serving 20 smaller banks on a shared platform. Include tenant isolation and data privacy controls."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "30."
      }), " Design a real-time fraud scoring system integrated with CBS that evaluates transactions before posting. Include rules engine, ML scoring, and hotlist checking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Section A Answers (1-10)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Three layers: (i) Front-End/Channel Tier — customer-facing interfaces (ATM, Internet Banking, Mobile, Branch); (ii) Middleware/Gateway Tier — protocol conversion, message routing, load balancing, security, queue management; (iii) Back-End/Core Tier — CBS application server, database, GL, EOD batch engine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Regex: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^[A-Z]{4}0[A-Z0-9]{6}$"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^[A-Z]{4}"
        }), " = first 4 characters are uppercase letters (bank code); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " = 5th character is always zero (reserved); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[A-Z0-9]{6}$"
        }), " = last 6 characters are alphanumeric (branch code)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Partitioning splits a table within a single database instance. Sharding distributes data across multiple database instances. Partitioning is for manageability within one server; sharding is for horizontal scaling across servers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " HSM handles PIN encryption/decryption using LMK, PIN translation between acquirer and issuer keys, and ARQC/ARPC verification for EMV chip cards. Also handles secure key management (TMK, TAK, ZPK)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " NEFT: DNS, RBI, No minimum. RTGS: Real-time gross, RBI, Rs. 2 lakh minimum. IMPS: Real-time, NPCI, Re. 1 minimum."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6."
        }), " (1) Cheque deposited; (2) Scanned front+back; (3) MICR auto-read; (4) Digital signature applied; (5) Image+data sent to CTS Grid; (6) Grid validates and routes; (7) Paying bank processes; (8) Settlement through RBI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "7."
        }), " Range (TXN_DATE), List (BRANCH_CODE), Hash (ACCOUNT_NO)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8."
        }), " DE 2 (PAN), DE 3 (Processing Code), DE 4 (Amount), DE 11 (STAN), DE 39 (Response Code). Each has specific format and length constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9."
        }), " MICR: 9 digits — CCCC (city code, first 3 digits = city PIN prefix, 4th=0) + BBB (3-digit bank code by IBA) + A (1-digit branch suffix). Example: 400002011 = Mumbai + SBI + branch 011."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10."
        }), " OFS (Open Financial System) is T24's external integration interface. It allows third-party systems to send/receive messages in OFS format to perform CBS operations like account inquiry, fund transfer, and customer management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Section B Answers (11-20)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "11."
        }), " Front-end sends ISO 8583 (ATM) or HTTPS (Internet Banking) → Middleware converts protocol, validates via HSM, routes via MQ → Back-end CBS application processes, updates Oracle/DB2 database, returns response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12."
        }), " T24: Java (TAFJ), Oracle/MSSQL/DB2, OFS, HDFC/Kotak/Yes Bank. Finacle: Java/C++, Oracle/DB2, Finacle Connect, SBI/PNB/BOB. BaNCS: Java/C++, Oracle/DB2, BaNCSConnect, BOI/Indian Bank."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13."
        }), " (1) Customer initiates from Internet Banking; (2) CBS validates IFSC + balance; (3) SFMS message sent via INFINET; (4) NEFT Service Centre queues; (5) Batch settlement every 30 min; (6) Receiver CBS credits; (7) Confirmation sent back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14."
        }), " Message Length (2 bytes) | MTI (4 digits) | Primary Bitmap (8 bytes) | Secondary Bitmap (8 bytes, optional) | Data Elements (variable). Example 0200: Length=0150, MTI=0200, Bitmap=... DE2=622018..., DE4=000000500000."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15."
        }), " Card inserted at Bank B ATM → BIN identifies Bank A as issuer → ISO 8583 0200 sent through NFS to Bank A → HSM validates PIN → CBS checks balance → Response via NFS → ATM dispenses cash. Settlement via RBI current accounts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "16."
        }), " Shard key selection: ACCOUNT_NO or CUSTOMER_ID. Challenges: cross-shard transactions (2PC/XA), distributed joins, resharding complexity. Solution: design shard key to minimize cross-shard operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17."
        }), " DNS (NEFT): Batched, lower cost, suitable for retail, 30-min settlement, no minimum. RTGS: Real-time, higher cost, suitable for high-value, immediate settlement, Rs. 2L minimum. NEFT better for retail volume; RTGS better for time-sensitive high-value transfers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "18."
        }), " Each transaction debits/credits both customer account and bank GL. Debit customer = Credit GL (double-entry). GL summary entries posted at transaction time; EOD reconciles GL with account balances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19."
        }), " EOD sequence: (1) Stop new transactions; (2) Calculate and post interest; (3) Process standing instructions; (4) Run overdue/due reports; (5) Generate GL balancing reports; (6) Archive daily transactions; (7) Start new business date."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "20."
        }), " 1970s-80s: Standalone branch systems → 1990s: LAN-based automation → 2000s: First CBS (Finacle, BaNCS, T24) → 2006-10: Nationwide PSB rollout → 2010-present: CBS + digital channels (UPI, Mobile, AI)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Section C Answers (21-30)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "21."
        }), " Use RANGE on TXN_DATE (quarterly partitions, retain 3 years online, archive older to compressed tables). Sub-partition by LIST on BRANCH_CODE (region-wise). For sharding: HASH on ACCOUNT_NO across 32 shards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "22."
        }), " Format validation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^[A-Z]{4}0[A-Z0-9]{6}$"
        }), " → Lookup in IFSC_MASTER table (indexed by IFSC_CODE) → Return BANK_NAME + BRANCH_NAME + CITY + MICR_CODE if found, else \"Invalid IFSC\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "23."
        }), " Active-Passive with synchronous replication (DWDM/Fibre Channel) to DR site 300+ km away. Oracle DataGuard in SYNC mode. Auto-failover script monitors PDC heartbeat; on failure, activates DR DNS, DR CBS, and DR ATM Switch. RPO < 5 sec, RTO < 1 hr."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "24."
        }), " Multi-layered: (1) Global load balancer (F5/AWS ALB); (2) Layer of middleware instances (auto-scaling group based on queue depth); (3) Partitioned message queues (Kafka/IBM MQ by account number hash); (4) CBS app servers with connection pooling; (5) Database shards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "25."
        }), " API Gateway (Kong/Apigee) with: OAuth 2.0 + API key authentication; Rate limiting (1000 req/min per client); Request transformation (REST → CBS OFS/XML); Response transformation (CBS → JSON); Audit logging; Circuit breaker for CBS failures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "26."
        }), " Range on TXN_DATE: Best for date-range queries (account statements, daily reports). Allows partition pruning. List on BRANCH_CODE: Good for branch-wise reporting but can cause uneven data distribution. Hash on ACCOUNT_NO: Even distribution but no partition pruning for date queries. Recommend RANGE on date with LIST sub-partition on branch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "27."
        }), " UPI App → PSP → NPCI UPI Switch → CBS via API Gateway → Validate account + balance → Debit account → Post transaction → Send UPI Ref No → Response via NPCI → PSP → App. CBS also generates GL entries and IRC (Interchange Reconciliation) file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "28."
        }), " TypeScript: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new ISO8583Builder().setMTI('0200').setPAN('6220180012345678').setAmount(10000).setSTAN('654321').setDateTime(new Date()).setTerminalId('ATM-MUM-015').setDE(3, '000000').build()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "29."
        }), " Each tenant bank gets isolated schema with RANGE partitioning. Separate database users with row-level security (RLS) policies. Config server maps tenant_id → shard. API gateway validates tenant context from API key. Cross-tenant data access prohibited."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "30."
        }), " Pre-auth hook in CBS sends transaction to fraud engine: (1) Rules check (velocity, amount threshold, geo); (2) ML model scores transaction (real-time, sub-50ms); (3) Hotlist check (account, terminal, IP); (4) Score threshold decision — Allow/Decline/Refer; (5) Response to CBS to proceed or reject."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core Banking Solution (CBS) is the centralized platform that enables \"Anywhere, Anytime\" banking. The three-tier architecture consists of the Front-End (Channel) Tier handling diverse channels like ATM, Internet Banking, and Mobile Banking; the Middleware (Gateway) Tier providing protocol conversion, message routing, and security; and the Back-End (Core) Tier running the CBS application and database."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leading CBS platforms in India are T24 (Temenos — HDFC, Kotak), Finacle (Infosys — SBI, PNB, BOB), and BaNCS (TCS — BOI, Indian Bank). Each has a Java-based application server with multi-entity support and API integration layers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NEFT operates on Deferred Net Settlement with 30-minute batch cycles (24x7x365), RTGS uses Real-Time Gross Settlement (Rs. 2 lakh minimum), and IMPS provides instant real-time settlement (24x7x365, Re. 1 minimum). ATM switching uses ISO 8583 message standard over the National Financial Switch (NFS) network with HSM for PIN security."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CBS database design employs partitioning (range, list, hash) and sharding for handling high-volume transaction tables. The Cheque Truncation System (CTS-2010) enables image-based cheque clearing with TIFF images at 200 DPI (front) and digital signatures, eliminating physical cheque movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MICR codes (9-digit, magnetic ink) and IFSC codes (11-character alphanumeric) are critical identifiers used across all payment systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "For CBS Implementation:"
          }), " Always consider the middleware tier as the critical integration layer — banks that invested in robust middleware (with protocol converters and HSMs) have easier integration with newer channels like UPI."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Partitioning Strategy:"
          }), " In CBS, use RANGE partitioning on transaction date and LIST partitioning on branch codes. Never use hash partitioning on date columns as it defeats partition pruning."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IFSC Validation:"
          }), " Always validate IFSC format (", (0,jsx_runtime.jsx)(_components.code, {
            children: "^[A-Z]{4}0[A-Z0-9]{6}$"
          }), ") at the front-end level before making backend CBS calls. This reduces unnecessary load and provides instant feedback to customers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CTS Readiness:"
          }), " Ensure cheque scanners support 300 DPI for MICR capture. Lower DPI results in MICR read failures, causing return of cheques."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ATM Switch Design:"
          }), " Maintain separate queues for interbank (NFS) and on-us transactions. On-us transactions should bypass NFS to reduce latency and NPCI interchange fees."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NEFT/RTGS Queue Management:"
          }), " For RTGS, implement auto-queue functionality with priority-based queue management to avoid timeouts during high-volume periods."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sharding Key Selection:"
          }), " Use ACCOUNT_NO or CUSTOMER_ID as sharding key for CBS. Avoid branch-based sharding as customers may move between branches."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the transaction minimum and maximum limit for RTGS in India?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) No minimum, Rs. 5 lakh maximum\nB) Rs. 2 lakh minimum, no maximum\nC) Rs. 1 minimum, Rs. 5 lakh maximum\nD) Rs. 10 lakh minimum, Rs. 100 lakh maximum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Rs. 2 lakh minimum, no maximum**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RTGS has a minimum transaction value of Rs. 2 lakh. There is no upper limit for RTGS transactions. IMPS has a minimum of Re. 1 and maximum of Rs. 5 lakh."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which CBS platform is built by Infosys and used by the largest number of Public Sector Banks in India?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) T24 (Temenos)\nB) Finacle\nC) BaNCS\nD) SilverLake"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Finacle**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Finacle by Infosys is the most widely deployed CBS in Indian PSBs including SBI, PNB, BOB, and Canara Bank. T24 is used by private banks like HDFC, and BaNCS by BOI and Indian Bank."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " In ISO 8583 messaging, which Data Element (DE) contains the Primary Account Number?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) DE 2\nB) DE 3\nC) DE 4\nD) DE 11"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) DE 2**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "DE 2 (PAN) contains the Primary Account Number. DE 3 is Processing Code, DE 4 is Transaction Amount, and DE 11 is STAN (Systems Trace Audit Number)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " The Cheque Truncation System (CTS) replaces which of the following in the traditional clearing process?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Signature verification\nB) Physical movement of cheques\nC) MICR code reading\nD) Account validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Physical movement of cheques**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "CTS replaces the physical movement of paper cheques between banks with electronic image-based clearing. The physical cheque stays at the presenting bank, and only digital images are exchanged through the CTS grid."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " In CBS three-tier architecture, which component performs PIN encryption and verification for ATM transactions?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Load Balancer\nB) Protocol Converter\nC) HSM (Hardware Security Module)\nD) Transaction Gateway"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) HSM (Hardware Security Module)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "HSM handles all cryptographic operations including PIN encryption/decryption using LMK, PIN translation between acquirer and issuer keys, and ARQC/ARPC verification for EMV chip cards."
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