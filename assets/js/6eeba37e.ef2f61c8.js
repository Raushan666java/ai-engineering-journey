"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40965],{

/***/ 50616
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_banking_technology_02_digital_payment_systems_md_6ee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-banking-technology-02-digital-payment-systems-md-6ee.json
const site_docs_courses_banking_technology_02_digital_payment_systems_md_6ee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/banking-technology/02-digital-payment-systems","title":"Chapter 02: Digital Payment Systems","description":"Learning Objectives","source":"@site/docs/courses/banking-technology/02-digital-payment-systems.md","sourceDirName":"courses/banking-technology","slug":"/banking-technology/02-digital-payment-systems","permalink":"/ai-engineering-journey/banking-technology/02-digital-payment-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-digital-payment-systems","slug":"/banking-technology/02-digital-payment-systems","title":"Chapter 02: Digital Payment Systems","sidebar_label":"Chapter 02: Digital Payment Systems","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"Chapter 01: Core Banking Solutions (CBS)","permalink":"/ai-engineering-journey/banking-technology/01-core-banking-solutions"},"next":{"title":"Chapter 03: Banking Security Guidelines","permalink":"/ai-engineering-journey/banking-technology/03-banking-security-guidelines"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/banking-technology/02-digital-payment-systems.md


const frontMatter = {
	id: '02-digital-payment-systems',
	slug: '/banking-technology/02-digital-payment-systems',
	title: 'Chapter 02: Digital Payment Systems',
	sidebar_label: 'Chapter 02: Digital Payment Systems',
	sidebar_position: 2
};
const contentTitle = 'Chapter 02: Digital Payment Systems';

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
  "value": "1. Introduction to Digital Payment Systems",
  "id": "1-introduction-to-digital-payment-systems",
  "level": 3
}, {
  "value": "2. UPI Architecture",
  "id": "2-upi-architecture",
  "level": 3
}, {
  "value": "2.1 UPI Overview",
  "id": "21-upi-overview",
  "level": 4
}, {
  "value": "2.2 UPI Architecture — Four-Party Model",
  "id": "22-upi-architecture--four-party-model",
  "level": 4
}, {
  "value": "2.3 UPI Reference Number (12-digit URN)",
  "id": "23-upi-reference-number-12-digit-urn",
  "level": 4
}, {
  "value": "2.4 UPI PIN and Authentication",
  "id": "24-upi-pin-and-authentication",
  "level": 4
}, {
  "value": "2.5 UPI Ecosystem Participants",
  "id": "25-upi-ecosystem-participants",
  "level": 4
}, {
  "value": "3. IMPS vs NEFT vs RTGS — Technical Comparison",
  "id": "3-imps-vs-neft-vs-rtgs--technical-comparison",
  "level": 3
}, {
  "value": "3.1 IMPS (Immediate Payment Service)",
  "id": "31-imps-immediate-payment-service",
  "level": 4
}, {
  "value": "3.2 NEFT (National Electronic Funds Transfer)",
  "id": "32-neft-national-electronic-funds-transfer",
  "level": 4
}, {
  "value": "3.3 RTGS (Real Time Gross Settlement)",
  "id": "33-rtgs-real-time-gross-settlement",
  "level": 4
}, {
  "value": "3.4 Comparison Table",
  "id": "34-comparison-table",
  "level": 4
}, {
  "value": "4. RuPay Card Processing",
  "id": "4-rupay-card-processing",
  "level": 3
}, {
  "value": "4.1 RuPay Overview",
  "id": "41-rupay-overview",
  "level": 4
}, {
  "value": "4.2 RuPay Transaction Flow (POS)",
  "id": "42-rupay-transaction-flow-pos",
  "level": 4
}, {
  "value": "4.3 RuPay Economics for Banks",
  "id": "43-rupay-economics-for-banks",
  "level": 4
}, {
  "value": "5. FASTag and NETC",
  "id": "5-fastag-and-netc",
  "level": 3
}, {
  "value": "5.1 FASTag Overview",
  "id": "51-fastag-overview",
  "level": 4
}, {
  "value": "5.2 Wallet-Based vs Credit-Based FASTag",
  "id": "52-wallet-based-vs-credit-based-fastag",
  "level": 4
}, {
  "value": "6. Aadhaar Payments Bridge System (APBS)",
  "id": "6-aadhaar-payments-bridge-system-apbs",
  "level": 3
}, {
  "value": "6.1 APBS Architecture",
  "id": "61-apbs-architecture",
  "level": 4
}, {
  "value": "7. BBPS (Bharat Bill Payment System)",
  "id": "7-bbps-bharat-bill-payment-system",
  "level": 3
}, {
  "value": "7.1 BBPS Architecture",
  "id": "71-bbps-architecture",
  "level": 4
}, {
  "value": "7.2 BBPS Categories",
  "id": "72-bbps-categories",
  "level": 4
}, {
  "value": "8. AePS (Aadhaar-enabled Payment System)",
  "id": "8-aeps-aadhaar-enabled-payment-system",
  "level": 3
}, {
  "value": "8.1 AePS Architecture",
  "id": "81-aeps-architecture",
  "level": 4
}, {
  "value": "9. NACH (National Automated Clearing House)",
  "id": "9-nach-national-automated-clearing-house",
  "level": 3
}, {
  "value": "10. Tokenization",
  "id": "10-tokenization",
  "level": 3
}, {
  "value": "10.1 Card-on-File Tokenization (CoFT)",
  "id": "101-card-on-file-tokenization-coft",
  "level": 4
}, {
  "value": "10.2 Device-Based Tokenization",
  "id": "102-device-based-tokenization",
  "level": 4
}, {
  "value": "11. Recurring Payments — eMandate",
  "id": "11-recurring-payments--emandate",
  "level": 3
}, {
  "value": "11.1 UPI eMandate",
  "id": "111-upi-emandate",
  "level": 4
}, {
  "value": "12. UPI Lite and UPI123Pay",
  "id": "12-upi-lite-and-upi123pay",
  "level": 3
}, {
  "value": "12.1 UPI Lite",
  "id": "121-upi-lite",
  "level": 4
}, {
  "value": "12.2 UPI123Pay",
  "id": "122-upi123pay",
  "level": 4
}, {
  "value": "13. Architecture Diagrams",
  "id": "13-architecture-diagrams",
  "level": 3
}, {
  "value": "Complete UPI Transaction Flow",
  "id": "complete-upi-transaction-flow",
  "level": 4
}, {
  "value": "Examples (Exam-Style MCQs)",
  "id": "examples-exam-style-mcqs",
  "level": 2
}, {
  "value": "14. TypeScript Code Examples",
  "id": "14-typescript-code-examples",
  "level": 3
}, {
  "value": "14.1 UPI Payment Flow Simulator",
  "id": "141-upi-payment-flow-simulator",
  "level": 4
}, {
  "value": "14.2 UPI PIN Verification Module",
  "id": "142-upi-pin-verification-module",
  "level": 4
}, {
  "value": "14.3 RuPay Card Transaction Processor",
  "id": "143-rupay-card-transaction-processor",
  "level": 4
}, {
  "value": "14.4 BBPS Bill Payment Processor",
  "id": "144-bbps-bill-payment-processor",
  "level": 4
}, {
  "value": "14. Architecture Diagrams — Additional",
  "id": "14-architecture-diagrams--additional",
  "level": 3
}, {
  "value": "UPI Complete Transaction Sequence (Detailed)",
  "id": "upi-complete-transaction-sequence-detailed",
  "level": 4
}, {
  "value": "FASTag / NETC Toll Collection System",
  "id": "fastag--netc-toll-collection-system",
  "level": 4
}, {
  "value": "15. Latest Developments (2024-2026)",
  "id": "15-latest-developments-2024-2026",
  "level": 3
}, {
  "value": "15.1 UPI Growth Statistics (2024-2026)",
  "id": "151-upi-growth-statistics-2024-2026",
  "level": 4
}, {
  "value": "15.2 New UPI Features (2024-2026)",
  "id": "152-new-upi-features-2024-2026",
  "level": 4
}, {
  "value": "15.3 RuPay Developments",
  "id": "153-rupay-developments",
  "level": 4
}, {
  "value": "15.4 Regulatory Changes",
  "id": "154-regulatory-changes",
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
        id: "chapter-02-digital-payment-systems",
        children: "Chapter 02: Digital Payment Systems"
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
        href: "../../assets/images/lessons/banking-technology/02-digital-payment-systems/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/banking-technology/02-digital-payment-systems/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/banking-technology/02-digital-payment-systems/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/banking-technology/02-digital-payment-systems/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/banking-technology/02-digital-payment-systems/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/banking-technology/02-digital-payment-systems/visual-explanation.png",
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
        children: "Explain UPI architecture including NPCI role, PSPs, issuer/acquirer banks, and the UPI reference number flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare IMPS, NEFT, and RTGS on settlement type, timing, and transaction limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe RuPay card processing and how it differs from Visa/Mastercard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand FASTag RFID-based toll collection and the NETC system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze Aadhaar Payments Bridge System (APBS) and its architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain BBPS, AePS, NACH, and tokenization mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe recurring payments via eMandate, UPI Lite, and UPI123Pay"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-introduction-to-digital-payment-systems",
      children: "1. Introduction to Digital Payment Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "India's digital payment ecosystem has undergone a paradigm shift since 2016, driven by the Unified Payments Interface (UPI), regulatory support from RBI, and the infrastructure built by NPCI. Digital payments in India are categorized into:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retail Payment Systems:"
        }), " UPI, IMPS, NEFT, RTGS, BBPS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Card Payments:"
        }), " RuPay, Visa, Mastercard (Contact, Contactless, Tokenized)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aadhaar-based Payments:"
        }), " AePS, APBS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative Channels:"
        }), " FASTag (NETC), UPI Lite, UPI123Pay"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key driver of this ecosystem is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "National Payments Corporation of India (NPCI)"
      }), " — an umbrella organization for operating retail payment and settlement systems in India, established by RBI and IBA in 2008."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-upi-architecture",
      children: "2. UPI Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-upi-overview",
      children: "2.1 UPI Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unified Payments Interface (UPI) is an instant real-time payment system developed by NPCI. It facilitates inter-bank transactions through mobile phones using a Virtual Payment Address (VPA). UPI operates 24x7x365 and processes over 10 billion transactions per month (as of 2025)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPA (Virtual Payment Address):"
        }), " Format — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "username@bankhandle"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ram@sbi"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI ID:"
        }), " Unique identifier for a user's bank account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI PIN:"
        }), " 4-6 digit personal identification number set by the user"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI Reference Number:"
        }), " 12-digit unique transaction identifier"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-upi-architecture--four-party-model",
      children: "2.2 UPI Architecture — Four-Party Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------+     +------------------+\n|   Payer (User A) |     | Payee (User B)   |\n|   VPA: ram@sbi   |     | VPA: shyam@hdfc  |\n+--------+---------+     +--------+---------+\n         |                        |\n         | 1. Initiate Payment    | 5. Credit\n         | VPA: shyam@hdfc        | Notification\n         | Amount: Rs. 500        |\n+--------v---------+     +--------v---------+\n| Payer's PSP      |     | Payee's PSP      |\n| (PhonePe/GPay)   |     | (PhonePe/GPay)   |\n| Acquiring side   |     | Issuing side     |\n+--------+---------+     +--------+---------+\n         | 2. UPI Request        |\n         +-----------+-----------+\n                     |\n            +--------v---------+\n            |   NPCI UPI       |\n            |   Switch         |\n            | (Central System) |\n            +--------+---------+\n                     |\n            +--------v---------+\n            |   Payee PSP      |\n            | Routes to        |\n            | Payee Bank       |\n            +--------+---------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed Transaction Flow (12 steps):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1:  Payer opens PSP app (Google Pay/PhonePe/PayTM)\nStep 2:  Payer enters: VPA (shyam@hdfc), Amount (Rs. 500)\nStep 3:  PSP (Acquirer) formats UPI request:\n         {\n           \"txnId\": \"UPI20250706123456\",\n           \"payerVpa\": \"ram@sbi\",\n           \"payeeVpa\": \"shyam@hdfc\",\n           \"amount\": \"500.00\",\n           \"payerAddr\": \"+919876543210@upi\"\n         }\nStep 4:  PSP sends to NPCI UPI Switch\nStep 5:  NPCI validates VPA format, checks blacklist/whitelist\nStep 6:  NPCI routes to Payee PSP (based on @hdfc handle)\nStep 7:  Payee PSP validates payee VPA exists at HDFC\nStep 8:  NPCI sends OTP/PIN request back to Payer PSP\nStep 9:  Payer enters UPI PIN\nStep 10: PIN encrypted and sent via PSP -> NPCI -> Issuer Bank\nStep 11: Issuer Bank (SBI) validates PIN via HSM, debits Rs. 500\nStep 12: Credited to payee (HDFC) — UPI Ref No generated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-upi-reference-number-12-digit-urn",
      children: "2.3 UPI Reference Number (12-digit URN)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UPI Reference Number (also called UPI Transaction ID or URN) is a 12-digit identifier generated by NPCI for every successful UPI transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "URN Format Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XXXXXXXXXXXX (12 digits)\n├── First 4 digits: NPCI Institution ID (numeric)\n├── Next 4 digits: Date (MMDD format)\n└── Last 4 digits: Sequence number (auto-increment)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "12340706000001"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1234"
        }), " — NPCI Institution ID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0706"
        }), " — July 06"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "000001"
        }), " — Sequence number (first transaction of the day)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-upi-pin-and-authentication",
      children: "2.4 UPI PIN and Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UPI PIN is a 4-6 digit secret known only to the user. It is set during UPI registration (first-time setup via debit card OTP)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPI PIN Authentication Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User enters UPI PIN -> PSP App -> Encrypted with PSP Key\n-> NPCI UPI Switch -> Decrypted at Issuer Bank HSM\n-> HSM validates PIN against stored PIN offset\n-> Response: Success/Failure -> NPCI -> PSP -> User\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Layers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIN is NEVER stored in cleartext"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIN offset stored at issuer bank (salted hash of PIN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport encryption: TLS 1.2+ between all parties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device binding: App is tied to device ID + SIM card"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction signing: Each UPI transaction is digitally signed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "25-upi-ecosystem-participants",
      children: "2.5 UPI Ecosystem Participants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Participant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NPCI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central switch, clearing, settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPCI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payer PSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiates transaction on payer side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Pay, PhonePe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payee PSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives transaction on payee side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PhonePe, PayTM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer Bank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds payer's account, validates PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SBI, HDFC, ICICI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acquirer Bank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds payee's account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDFC for merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPI App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer-facing application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BHIM, GPay, PhonePe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TPAP (Third Party App Provider)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-bank PSP (operates under a bank)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Pay (under Axis)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PPI (Prepaid Payment Instrument)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet issuer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PayTM Wallet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-imps-vs-neft-vs-rtgs--technical-comparison",
      children: "3. IMPS vs NEFT vs RTGS — Technical Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-imps-immediate-payment-service",
      children: "3.1 IMPS (Immediate Payment Service)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMPS is an instant interbank electronic fund transfer service available 24x7x365. Operated by NPCI. It is the underlying real-time settlement system that also powers UPI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sender -> Sender Bank CBS -> IMPS Switch (NPCI) -> Receiver Bank CBS -> Receiver\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message Formats:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISO 8583 variant for ATM/POS mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XML for mobile/internet banking mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SFMS for interbank messaging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settlement: Real-time (immediate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimum: Re. 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum: Rs. 5 lakh (per transaction, increased by RBI in phases)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Channels: Mobile, Internet Banking, ATM, SMS, USSD (*99#)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Availability: 24x7x365"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPS Modes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Identifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2A (Account + IFSC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account No + IFSC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional bank transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2M (Mobile + MMID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile No + MMID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile-first transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2P (VPA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPA (UPI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPI-based transfers (UPI uses IMPS for settlement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Card-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Card Number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Card-to-account transfers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-neft-national-electronic-funds-transfer",
      children: "3.2 NEFT (National Electronic Funds Transfer)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBI (via INFINET)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred Net Settlement (DNS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every 30 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No minimum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bank-specific (typically Rs. 5-10 lakh)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24x7x365 (from Dec 2019)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFMS (ISO 8583 variant)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-rtgs-real-time-gross-settlement",
      children: "3.3 RTGS (Real Time Gross Settlement)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time (continuous, individual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rs. 2,00,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No upper limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7:00 AM - 6:00 PM (Weekdays, except 2nd/4th Sat)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFMS MT103"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "34-comparison-table",
      children: "3.4 Comparison Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------+------------------+------------------+------------------+\n|    Feature       |      IMPS        |      NEFT        |      RTGS        |\n+------------------+------------------+------------------+------------------+\n| Operator         | NPCI             | RBI              | RBI              |\n| Settlement       | Real-time        | Deferred Net     | Real-time Gross  |\n| Timing           | 24x7x365         | 24x7x365         | 7AM-6PM Mon-Sat  |\n| Settlement Speed | Seconds          | Up to 30 min     | Immediate        |\n| Min Amount       | Re. 1            | No min           | Rs. 2,00,000     |\n| Max Amount       | Rs. 5,00,000     | Bank specific    | No limit         |\n| Message Standard | ISO 8583/SFMS    | SFMS             | SFMS (MT103)     |\n| Network          | IMPS Switch      | INFINET          | INFINET          |\n| Channel          | Mobile/Net/ATM   | Net/Mobile       | Net/Branch       |\n| Finality         | Immediate        | Batch end        | Real-time        |\n+------------------+------------------+------------------+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-rupay-card-processing",
      children: "4. RuPay Card Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-rupay-overview",
      children: "4.1 RuPay Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RuPay is an Indian domestic card payment network launched by NPCI in 2012. It is the most widely used card in India, especially under the Pradhan Mantri Jan Dhan Yojana (PMJDY) and RuPay-Jana Dhan-Aadhaar (JAM) trinity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RuPay vs Visa/Mastercard:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RuPay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visa/Mastercard"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPCI (domestic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VisaNet/Mastercard (global)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch Fees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (domestic routing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (USD-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPCI UPI/CBS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard global auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RuPay Tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VTS/MDST (Visa/Mastercard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contactless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RuPay Contactless (NFC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PayWave/PayPass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D Secure (Rupay Secure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D Secure (Verified by Visa/MC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mostly India (growing intl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global (200+ countries)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Chip + PIN mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Chip + PIN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-rupay-transaction-flow-pos",
      children: "4.2 RuPay Transaction Flow (POS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Customer taps/inserts RuPay card at POS terminal\n2. POS reads card data (Track 2 / EMV Data)\n3. POS sends ISO 8583 0200 message to Acquirer Bank\n4. Acquirer Bank routes to NPCI (RuPay Switch)\n5. NPCI validates:\n   ├── Card BIN check (RuPay BIN: 60, 65, 81, 82...)\n   ├── Card status (active/blocked/hotlisted)\n   └── Merchant category check\n6. NPCI routes to Issuer Bank\n7. Issuer Bank:\n   ├── Validates CVV/PIN\n   ├── Checks available balance/credit limit\n   ├── Generates ARQC (EMV) or online auth\n   └── Sends approval/decline\n8. Response flows back through NPCI -> Acquirer -> POS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RuPay BIN Range:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "60xxxx — RuPay Classic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "65xxxx — RuPay Platinum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "81xxxx — RuPay Select"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "82xxxx — RuPay World"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "508xxx — RuPay JCB (International co-badge)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-rupay-economics-for-banks",
      children: "4.3 RuPay Economics for Banks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Indian banks, RuPay is significantly cheaper than Visa/Mastercard:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issuance fee:"
        }), " RuPay: Rs. 20-30; Visa/MC: Rs. 100-150 per card"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switch fee:"
        }), " RuPay: ~Rs. 0.50-1 per transaction; Visa/MC: ~Rs. 5-15 (varies with forex)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Annual membership:"
        }), " RuPay: Lower fixed fee; Visa/MC: Higher (USD-denominated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Settlement:"
        }), " RuPay settles in INR (no forex risk); Visa/MC settles in USD"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-fastag-and-netc",
      children: "5. FASTag and NETC"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-fastag-overview",
      children: "5.1 FASTag Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FASTag is a RFID-based toll collection system operated by NPCI under the National Electronic Toll Collection (NETC) program. It uses passive RFID tags affixed to vehicle windshields."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Specifications:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FASTag RFID Tag:\n├── Frequency: 865-867 MHz (UHF RFID, as per TRAI)\n├── Standard: ISO 18000-6C (EPC Gen2)\n├── Read Range: 4-6 meters (booth), 50m+ (free-flow)\n├── Memory: 96-512 bits EPC memory\n├── Battery: Passive (no battery, powered by reader RF signal)\n├── Data Storage: Vehicle Registration No + Tag ID + Wallet Link\n└── Tamper: Tamper-evident adhesive (removal destroys tag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NETC Transaction Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Vehicle approaches toll plaza\n2. RFID Antenna at lane (boom barrier) emits RF signal\n3. FASTag responds with Tag ID + Vehicle Registration No\n4. Lane Controller reads tag data\n5. Transaction sent to NETC Acquiring Bank (acquirer)\n   ├── Vehicle class determination (based on tag type)\n   └── Toll amount calculation (based on plaza + vehicle class)\n6. Acquirer sends to NPCI NETC Switch\n7. NPCI routes to Issuer Bank (where tag is linked)\n8. Issuer Bank:\n   ├── Validates tag status (active/blacklisted)\n   ├── Checks wallet balance / credit limit\n   └── Debits toll amount\n9. Settlement: NPCI -> Issuer -> Acquirer\n10. Lane Controller gets \"Success\" -> Boom barrier opens\n11. SMS/email notification to customer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NETC Clearing Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant V as Vehicle (FASTag)\n    participant L as Lane Controller\n    participant A as NETC Acquirer\n    participant N as NPCI NETC Switch\n    participant I as NETC Issuer\n    \n    V->>L: RFID Signal (Tag ID + Vehicle No)\n    L->>A: Toll Transaction Request\n    A->>N: ISO 8583 NETC message\n    N->>I: Debit Request\n    I->>I: Validate & Debit\n    I-->>N: Success\n    N-->>A: Settlement Advice\n    A-->>L: Barrier Open\n    L-->>V: Gate Opens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-wallet-based-vs-credit-based-fastag",
      children: "5.2 Wallet-Based vs Credit-Based FASTag"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet FASTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepaid wallet linked to tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credit FASTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postpaid credit line linked to tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICICI, HDFC credit card-linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Savings FASTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct debit from savings account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SBI, some PSBs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-aadhaar-payments-bridge-system-apbs",
      children: "6. Aadhaar Payments Bridge System (APBS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-apbs-architecture",
      children: "6.1 APBS Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APBS enables the transfer of government subsidies/benefits directly to beneficiaries' bank accounts using Aadhaar as the financial address. Implemented by NPCI under the DBT (Direct Benefit Transfer) program."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Central Government (PFMS)\n        |\n        v\nSponsor Bank (e.g., SBI for PAHAL)\n        |\n        v\nNPCI APBS Gateway\n        |\n        +---------+---------+\n        |                   |\n    Canara Bank         PNB\n    (Mapper Bank)       (Mapper Bank)\n        |                   |\n    Aadhaar to A/C     Aadhaar to A/C\n    Mapping DB         Mapping DB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1:  Government department sends subsidy file to PFMS\nStep 2:  PFMS forwards beneficiary list with Aadhaar to Sponsor Bank\nStep 3:  Sponsor Bank sends Aadhaar + Amount to NPCI APBS\nStep 4:  NPCI routes to Mapper Bank (where Aadhaar is mapped)\nStep 5:  Mapper Bank looks up Aadhaar-to-Account mapping\nStep 6:  Validates: Aadhaar is linked, account is active, KYC complete\nStep 7:  Transaction sent to Destination Bank CBS\nStep 8:  Beneficiary account credited\nStep 9:  Response back to NPCI -> Sponsor Bank -> PFMS -> Government\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "APBS Key Terms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PFMS:"
        }), " Public Financial Management System (government's payment platform)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sponsor Bank:"
        }), " Bank that manages the scheme's funds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapper Bank:"
        }), " Bank where beneficiary's Aadhaar is mapped to account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination Bank:"
        }), " Bank where beneficiary holds the account"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-bbps-bharat-bill-payment-system",
      children: "7. BBPS (Bharat Bill Payment System)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "71-bbps-architecture",
      children: "7.1 BBPS Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BBPS is an integrated bill payment system offering interoperable bill payment services to customers across India. Operated by NPCI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+     +----------+     +----------+\n| Customer A|    | Customer B|    | Customer C|\n+-----+----+     +-----+----+     +-----+----+\n      |                |                |\n+-----v----------------v----------------v------+\n|          Bill Payment Aggregators            |\n|          (PayTM, PhonePe, Google Pay)         |\n+------------------+---------------------------+\n                   |\n+------------------v---------------------------+\n|          BBPS Central Unit (NPCI)            |\n|          - Transaction Switch                |\n|          - Settlement Management             |\n|          - Dispute Resolution                |\n+----+-------------------+------------------+--+\n     |                   |                  |\n+----v-------+    +------v-------+   +------v-------+\n| Biller Unit |    | Biller Unit  |   |  Biller Unit |\n| (Electric)  |    | (Gas)        |   | (Telecom)    |\n+-------------+    +--------------+   +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three-Tier Model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customer:"
        }), " Pays bills through any registered channel (web, mobile, agent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BPU (Bharat Payment Unit):"
        }), " Operating unit (banks, aggregators, agents) — can be Online Payment Unit (OPU) or offline agent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BBPS Central Unit:"
        }), " NPCI — clearing, settlement, rules, standards"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bill Fetch: Customer -> BPU -> BBPS Central -> Biller -> Bill Details -> Back to Customer\nBill Pay: Customer -> BPU -> BBPS Central -> RBI Settlement -> Biller -> Confirmation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "72-bbps-categories",
      children: "7.2 BBPS Categories"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Electricity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All state electricity boards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telecom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airtel, Jio, BSNL, VI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indane, HP Gas, Bharat Gas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Water"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Municipal corporations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tata Sky, Dish TV, Airtel DTH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loan Repayment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banks, NBFCs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Education"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "School/college fees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Premium payments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credit Card"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bill payment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-aeps-aadhaar-enabled-payment-system",
      children: "8. AePS (Aadhaar-enabled Payment System)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "81-aeps-architecture",
      children: "8.1 AePS Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AePS allows Aadhaar-based financial transactions using a micro-ATM device. Operated by NPCI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cash Withdrawal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balance Enquiry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mini Statement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aadhaar to Aadhaar Fund Transfer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cash Deposit (added later)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Flow (Cash Withdrawal):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Customer provides: Aadhaar Number + Transaction Type + Amount\n2. Micro-ATM captures Aadhaar via biometric scanner\n3. UIDAI authentication (fingerprint/iris match)\n4. Upon successful authentication:\n   ├── Aadhaar Number + Bank IIN + Amount sent to NPCI AePS Switch\n   ├── NPCI routes to Issuer Bank (based on Aadhaar mapping)\n   ├── Issuer Bank validates account balance\n   ├── CBS debits account\n   └── Response sent back to micro-ATM via NPCI\n5. Micro-ATM dispenses cash\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IIN (Issuer Identification Number):"
      }), " First 6 digits of Aadhaar number indicate the enrolling agency/registrar. Used by AePS to route to the correct bank."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-nach-national-automated-clearing-house",
      children: "9. NACH (National Automated Clearing House)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NACH is a web-based solution to facilitate bulk transactions (salaries, dividends, subsidies). Replaced the legacy ECS (Electronic Clearing Service)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NACH Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NACH Credit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sponsor -> Destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Salary, Dividend, Subsidy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NACH Debit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sponsor <- Destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loan EMI, SIP, Insurance Premium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NACH Technical Flow (Debit):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Mandate registered: Customer -> Destination Bank -> NPCI\n2. Sponsor (e.g., Mutual Fund) submits debit file to Sponsor Bank\n3. Sponsor Bank -> NPCI NACH System\n4. NPCI processes in batches (2-3 cycles per day)\n5. NPCI routes to Destination Bank CBS\n6. Destination Bank debits customer account\n7. Settlement: NPCI -> Destination Bank -> Sponsor Bank -> Sponsor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NACH Mandate Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Registration -> Verification (by sponsor) -> Activation -> \nActive Mandate -> Debit Transactions -> \nModification/Cancellation (if needed) -> Deactivation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-tokenization",
      children: "10. Tokenization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tokenization replaces sensitive card data (Primary Account Number / PAN) with a unique token that can be used for transactions without exposing the actual card number."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "101-card-on-file-tokenization-coft",
      children: "10.1 Card-on-File Tokenization (CoFT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As per RBI's mandate (effective Jan 2022, extended to Mar 2022), no entity other than card issuers can store actual card numbers. Tokenization is mandatory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CoFT Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Customer enters card details on merchant website\n2. Merchant sends PAN to Card Network (token request)\n3. Card Network generates TOKEN (16-digit, BIN-preserving)\n4. Token stored at merchant (not PAN)\n5. Merchant deletes PAN (as per RBI mandate)\n6. All future transactions use TOKEN instead of PAN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XXXXXXYYYYYYYYZZ\n├── XXXXXX: Same BIN as original card (merchant can identify card type)\n├── YYYYYYYY: Tokenized account identifier\n└── ZZ: Check digits\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "102-device-based-tokenization",
      children: "10.2 Device-Based Tokenization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in mobile wallets (Apple Pay, Google Pay, Samsung Pay) where the token is stored in the device's secure element (SE)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token Requestor:"
        }), " The wallet provider (e.g., Google Pay)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token Service Provider (TSP):"
        }), " Card network (Visa/Mastercard/RuPay)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain Restriction:"
        }), " Token works only on that device + wallet combination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cryptogram:"
        }), " Dynamic CVV generated per transaction"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-recurring-payments--emandate",
      children: "11. Recurring Payments — eMandate"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "111-upi-emandate",
      children: "11.1 UPI eMandate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eMandate enables recurring payments (subscriptions, SIPs, insurance premiums) through UPI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Merchant initiates eMandate creation\n2. Customer approves via PSP app\n3. Mandate details:\n   ├── Merchant ID\n   ├── Amount (fixed/variable)\n   ├── Frequency (daily/weekly/monthly)\n   ├── Start date, End date\n   └── Maximum number of debits\n4. Customer authenticates with UPI PIN\n5. Mandate registered at NPCI -> Issuer Bank\n6. On recurring date:\n   ├── Merchant initiates debit\n   ├── NPCI checks mandate validity\n   ├── Issuer bank debits without additional PIN\n   └── (If exceed limit: customer must approve)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "eMandate Limits (RBI):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authentication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to Rs. 15,000 per transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No additional factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rs. 15,001 - Rs. 1,00,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFA once per mandate + Additional factor on first debit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Above Rs. 1,00,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFA on each transaction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-upi-lite-and-upi123pay",
      children: "12. UPI Lite and UPI123Pay"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-upi-lite",
      children: "12.1 UPI Lite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UPI Lite is an on-device wallet for small-value payments (up to Rs. 500 per transaction, Rs. 2,000 total balance). No UPI PIN required for transactions — works on balance stored in mobile app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UPI Lite Wallet (in PSP app):\n├── Max Balance: Rs. 2,000\n├── Per Transaction Limit: Rs. 500\n├── Cumulative Daily Limit: Rs. 2,000 (or wallet balance)\n├── Authentication: App-level (device unlock / app PIN)\n├── No UPI PIN required for payments\n├── Settlement: Offline-capable (later sync) -- TBD by NPCI\n└── Top-up: From linked bank account via UPI\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPI Lite Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Customer loads UPI Lite wallet (from main account via UPI)\n2. Payment: Select UPI Lite as source\n3. On-device balance check (no network call to bank)\n4. Balance deducted from in-app wallet\n5. Transaction recorded locally\n6. Periodically synced with NPCI (batch)\n7. Settlement done at NPCI end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-upi123pay",
      children: "12.2 UPI123Pay"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UPI123Pay is a feature-phone-based UPI system for users without smartphones. It operates through IVR, app in USSD, proximity voice-based payments, and missed call-based payments."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Approach:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UPI123Pay Methods:\n├── IVR (Interactive Voice Response): Call 08045146000\n│   ├── OTP-based authentication\n│   └── Follow voice prompts\n├── USSD (*99#): Traditional GSM-based\n│   ├── No internet required\n│   └── Menu-driven on feature phone\n├── Proximity Voice: NFC/QR code based\n├── Missed Call: Call merchant's number\n│   └── Callback with payment link\n└── NFC Tags: Tap phone on NFC tag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-architecture-diagrams",
      children: "13. Architecture Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complete-upi-transaction-flow",
      children: "Complete UPI Transaction Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant U as User\n    participant A as PSP App (Payer)\n    participant UPI as NPCI UPI Switch\n    participant IB as Issuer Bank\n    participant AB as Acquirer Bank\n    participant M as Merchant/Payee\n    \n    U->>A: Open App, Enter VPA + Amount\n    A->>A: Validate VPA format\n    A->>UPI: Payment Request (Payer VPA, Payee VPA, Amount)\n    UPI->>UPI: Resolve Payee VPA -> Bank\n    UPI->>IB: Validate Payer VPA (exists, active)\n    IB-->>UPI: VPA Valid\n    UPI-->>A: Proceed to PIN Entry\n    A->>U: UPI PIN Request\n    U->>A: Enter UPI PIN\n    A->>A: Encrypt PIN (PSP Key)\n    A->>UPI: PIN + Transaction Data\n    UPI->>IB: Verify PIN via HSM\n    IB->>IB: Validate PIN + Balance Check\n    IB->>IB: Debit Account\n    IB-->>UPI: Success + UPI Ref No\n    UPI->>AB: Credit Payee Account\n    AB->>M: Notification\n    AB-->>UPI: Settlement Confirm\n    UPI-->>A: Transaction Successful\n    A-->>U: \"Sent Rs. 500 to shyam@hdfc\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples-exam-style-mcqs",
      children: "Examples (Exam-Style MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\nWhat is the per-transaction limit for UPI Lite?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Rs. 10,000\nB) Rs. 5,000\nC) Rs. 500\nD) Rs. 1,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Rs. 500**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "UPI Lite has a per-transaction limit of Rs. 500, with a maximum wallet balance of Rs. 2,000. No UPI PIN is needed for payments, making it ideal for small-value transactions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      }), "\nWhich organization operates the NETC (National Electronic Toll Collection) system?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) RBI\nB) IRDAI\nC) NHAI\nD) NPCI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: D) NPCI**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NPCI operates the NETC program under which FASTag is implemented. NHAI manages the highways but NPCI operates the payment system."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3:"
      }), "\nIn UPI four-party model, what is the role of the PSP?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Settlement of transactions\nB) Customer-facing payment application operator\nC) Aadhaar authentication provider\nD) Merchant onboarding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Customer-facing payment application operator**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "PSP (Payment Service Provider) operates the customer-facing app (Google Pay, PhonePe, PayTM). PSPs can be banks or non-banks (TPAPs)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4:"
      }), "\nHow does AePS authenticate a customer's identity?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) OTP on registered mobile\nB) UPI PIN\nC) Biometric authentication via Aadhaar (fingerprint/iris)\nD) Debit card PIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Biometric authentication via Aadhaar**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "AePS uses biometric authentication (fingerprint or iris) through UIDAI's authentication system. The micro-ATM device captures the biometric and sends it to UIDAI for verification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5:"
      }), "\nWhat is RuPay card's primary advantage for Indian banks compared to Visa/Mastercard?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) International acceptance\nB) Lower transaction processing fees (denominated in INR)\nC) Higher credit limits\nD) Faster transaction processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Lower transaction processing fees**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RuPay has significantly lower processing fees because it settles in INR domestically, avoiding USD-based interchange fees charged by Visa/Mastercard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-typescript-code-examples",
      children: "14. TypeScript Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-upi-payment-flow-simulator",
      children: "14.1 UPI Payment Flow Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VPADetails {\n  username: string;\n  bankHandle: string;\n  fullVPA: string;\n}\n\ninterface UPITransactionRequest {\n  txnId: string;\n  payerVpa: string;\n  payeeVpa: string;\n  amount: number;\n  payerAddr: string;\n  txnNote: string;\n  merchantId?: string;\n}\n\ninterface UPITransactionResponse {\n  txnId: string;\n  urn: string;\n  responseCode: string;\n  message: string;\n  timestamp: Date;\n}\n\ninterface UPIPinValidation {\n  encryptedPin: string;\n  keyIdentifier: string;\n  txnId: string;\n}\n\nclass UPIProcessor {\n  private validVPAs: Map&lt;string, { bank: string; active: boolean }&gt; = new Map();\n  private processedTxns: Map&lt;string, UPITransactionResponse&gt; = new Map();\n  private txnCounter: number = 0;\n\n  constructor() {\n    this.seedVPAs();\n  }\n\n  private seedVPAs(): void {\n    this.validVPAs.set('ram@sbi', { bank: 'SBI', active: true });\n    this.validVPAs.set('shyam@hdfc', { bank: 'HDFC', active: true });\n    this.validVPAs.set('priya@icici', { bank: 'ICICI', active: true });\n    this.validVPAs.set('amit@paytm', { bank: 'Paytm Payments Bank', active: true });\n  }\n\n  validateVPA(vpa: string): boolean {\n    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(vpa);\n  }\n\n  resolveVPA(vpa: string): { bank: string; active: boolean } | null {\n    const result = this.validVPAs.get(vpa.toLowerCase());\n    return result || null;\n  }\n\n  generateURN(): string {\n    this.txnCounter++;\n    const date = new Date();\n    const mmdd = `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;\n    const instId = '1234';\n    return `${instId}${mmdd}${String(this.txnCounter).padStart(6, '0')}`;\n  }\n\n  initiatePayment(req: UPITransactionRequest): UPITransactionResponse {\n    if (!this.validateVPA(req.payerVpa)) {\n      return { txnId: req.txnId, urn: '', responseCode: 'U19', message: 'Invalid payer VPA format', timestamp: new Date() };\n    }\n    if (!this.validateVPA(req.payeeVpa)) {\n      return { txnId: req.txnId, urn: '', responseCode: 'U20', message: 'Invalid payee VPA format', timestamp: new Date() };\n    }\n\n    const payer = this.resolveVPA(req.payerVpa);\n    const payee = this.resolveVPA(req.payeeVpa);\n\n    if (!payer) { return { txnId: req.txnId, urn: '', responseCode: 'U21', message: 'Payer VPA not found', timestamp: new Date() }; }\n    if (!payer.active) { return { txnId: req.txnId, urn: '', responseCode: 'U22', message: 'Payer account inactive', timestamp: new Date() }; }\n    if (!payee) { return { txnId: req.txnId, urn: '', responseCode: 'U23', message: 'Payee VPA not found', timestamp: new Date() }; }\n\n    const urn = this.generateURN();\n    const response: UPITransactionResponse = {\n      txnId: req.txnId,\n      urn,\n      responseCode: '00',\n      message: `Successfully sent Rs.${req.amount} to ${req.payeeVpa}`,\n      timestamp: new Date(),\n    };\n    this.processedTxns.set(urn, response);\n    return response;\n  }\n\n  getTransaction(urn: string): UPITransactionResponse | undefined {\n    return this.processedTxns.get(urn);\n  }\n\n  processRefund(urn: string): UPITransactionResponse {\n    const txn = this.processedTxns.get(urn);\n    if (!txn) { throw new Error('Transaction not found'); }\n    const refundTxnId = `REF${Date.now()}`;\n    const refundURN = this.generateURN();\n    const response: UPITransactionResponse = {\n      txnId: refundTxnId,\n      urn: refundURN,\n      responseCode: '00',\n      message: `Refund processed for original URN ${urn}`,\n      timestamp: new Date(),\n    };\n    this.processedTxns.set(refundURN, response);\n    return response;\n  }\n}\n\n// Usage\nconst upi = new UPIProcessor();\nconst request: UPITransactionRequest = {\n  txnId: `UPI${Date.now()}`,\n  payerVpa: 'ram@sbi',\n  payeeVpa: 'shyam@hdfc',\n  amount: 500,\n  payerAddr: '+919876543210@upi',\n  txnNote: 'Lunch payment',\n};\nconst result = upi.initiatePayment(request);\nconsole.log('UPI Payment Result:', JSON.stringify(result, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-upi-pin-verification-module",
      children: "14.2 UPI PIN Verification Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PINRecord {\n  pinOffset: string;\n  salt: string;\n  algorithm: 'PBKDF2-HMAC-SHA256' | 'ARGON2';\n  iterations: number;\n  lastVerified: Date;\n  failedAttempts: number;\n  locked: boolean;\n}\n\nclass UPIPinManager {\n  private pinStore: Map&lt;string, PINRecord&gt; = new Map();\n  private maxFailedAttempts: number = 3;\n  private lockDurationMs: number = 30 * 60 * 1000;\n\n  constructor() {\n    this.seedPins();\n  }\n\n  private seedPins(): void {\n    this.pinStore.set('ram@sbi', {\n      pinOffset: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0',\n      salt: 'randomsalt123',\n      algorithm: 'PBKDF2-HMAC-SHA256',\n      iterations: 10000,\n      lastVerified: new Date(),\n      failedAttempts: 0,\n      locked: false,\n    });\n  }\n\n  private hashPin(pin: string, salt: string, iterations: number): string {\n    let hash = salt + pin;\n    for (let i = 0; i &lt; iterations; i++) {\n      let h = 0;\n      for (let j = 0; j &lt; hash.length; j++) {\n        h = ((h &lt;&lt; 5) - h) + hash.charCodeAt(j);\n        h = h & h;\n      }\n      hash = Math.abs(h).toString(16);\n    }\n    return hash;\n  }\n\n  validatePin(vpa: string, enteredPin: string): boolean {\n    const record = this.pinStore.get(vpa);\n    if (!record) { throw new Error('VPA not registered for UPI PIN'); }\n    if (record.locked) { throw new Error('UPI PIN is locked. Please reset via debit card.'); }\n\n    const computedHash = this.hashPin(enteredPin, record.salt, record.iterations);\n    if (computedHash === record.pinOffset) {\n      record.failedAttempts = 0;\n      record.lastVerified = new Date();\n      return true;\n    }\n\n    record.failedAttempts++;\n    if (record.failedAttempts >= this.maxFailedAttempts) {\n      record.locked = true;\n      console.log(`[SECURITY] UPI PIN locked for ${vpa} due to ${record.failedAttempts} failed attempts`);\n    }\n    return false;\n  }\n\n  setPin(vpa: string, newPin: string, oldPin?: string): boolean {\n    if (newPin.length &lt; 4 || newPin.length > 6) { throw new Error('UPI PIN must be 4-6 digits'); }\n    if (!/^\\d{4,6}$/.test(newPin)) { throw new Error('UPI PIN must be numeric'); }\n\n    if (oldPin && !this.validatePin(vpa, oldPin)) { throw new Error('Current PIN is incorrect'); }\n\n    const salt = Math.random().toString(36).substring(2, 12);\n    const iterations = 10000 + Math.floor(Math.random() * 5000);\n    const offset = this.hashPin(newPin, salt, iterations);\n\n    this.pinStore.set(vpa, {\n      pinOffset: offset,\n      salt,\n      algorithm: 'PBKDF2-HMAC-SHA256',\n      iterations,\n      lastVerified: new Date(),\n      failedAttempts: 0,\n      locked: false,\n    });\n    return true;\n  }\n\n  isLocked(vpa: string): boolean {\n    return this.pinStore.get(vpa)?.locked || false;\n  }\n\n  resetPinViaDebitCard(vpa: string, debitCardLast4: string): boolean {\n    if (debitCardLast4.length !== 4 || !/^\\d{4}$/.test(debitCardLast4)) {\n      throw new Error('Invalid debit card last 4 digits');\n    }\n    const record = this.pinStore.get(vpa);\n    if (!record) { throw new Error('VPA not found'); }\n    record.locked = false;\n    record.failedAttempts = 0;\n    console.log(`[AUDIT] PIN reset initiated for ${vpa} using debit card ending ${debitCardLast4}`);\n    return true;\n  }\n}\n\n// Usage\nconst pinManager = new UPIPinManager();\ntry {\n  const valid = pinManager.validatePin('ram@sbi', '1234');\n  console.log('PIN valid:', valid);\n} catch (err) {\n  console.error('PIN Error:', (err as Error).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-rupay-card-transaction-processor",
      children: "14.3 RuPay Card Transaction Processor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type CardBIN = '60' | '65' | '81' | '82' | '508' | '5085';\ntype CardType = 'CLASSIC' | 'PLATINUM' | 'SELECT' | 'WORLD' | 'JCB';\ntype TransactionMode = 'CONTACT' | 'CONTACTLESS' | 'ECOMM' | 'MOTO';\n\ninterface RuPayCard {\n  pan: string;\n  bin: string;\n  cardType: CardType;\n  expiryMonth: number;\n  expiryYear: number;\n  cardholderName: string;\n  active: boolean;\n  dailyLimit: number;\n  dailySpent: number;\n}\n\nclass RuPaySwitch {\n  private cards: Map&lt;string, RuPayCard&gt; = new Map();\n  private binMap: Map&lt;string, CardType&gt; = new Map([\n    ['60', 'CLASSIC'], ['65', 'PLATINUM'], ['81', 'SELECT'],\n    ['82', 'WORLD'], ['5085', 'JCB'],\n  ]);\n\n  constructor() {\n    this.seedCards();\n  }\n\n  private seedCards(): void {\n    this.cards.set('6220180012345678', {\n      pan: '6220180012345678', bin: '622018', cardType: 'CLASSIC',\n      expiryMonth: 12, expiryYear: 2028, cardholderName: 'RAM SHARMA',\n      active: true, dailyLimit: 50000, dailySpent: 0,\n    });\n  }\n\n  identifyCardType(pan: string): CardType | null {\n    for (const [prefix, type] of this.binMap) {\n      if (pan.startsWith(prefix)) { return type; }\n    }\n    return null;\n  }\n\n  validateCard(pan: string, cvv: string, expiryMonth: number, expiryYear: number): boolean {\n    const card = this.cards.get(pan);\n    if (!card) { throw new Error('Card not found'); }\n    if (!card.active) { throw new Error('Card is inactive'); }\n    if (cvv.length !== 3 || !/^\\d{3}$/.test(cvv)) { throw new Error('Invalid CVV'); }\n\n    const now = new Date();\n    const cardExpiry = new Date(expiryYear, expiryMonth, 1);\n    if (cardExpiry &lt; now) { throw new Error('Card expired'); }\n    if (card.expiryMonth !== expiryMonth || card.expiryYear !== expiryYear) {\n      throw new Error('Expiry mismatch');\n    }\n    return true;\n  }\n\n  authorizeTransaction(pan: string, amount: number, mode: TransactionMode): boolean {\n    const card = this.cards.get(pan);\n    if (!card) { throw new Error('Card not found'); }\n\n    const newDaily = card.dailySpent + amount;\n    if (newDaily > card.dailyLimit) {\n      console.log(`[RuPay] Daily limit exceeded: ${card.dailySpent} + ${amount} > ${card.dailyLimit}`);\n      return false;\n    }\n\n    card.dailySpent = newDaily;\n    console.log(`[RuPay] Authorized: ${mode} Rs.${amount} on card ${pan.slice(-4)} (${card.cardType})`);\n    return true;\n  }\n\n  processSettlement(pan: string, amount: number): string {\n    const ref = `RPS${Date.now()}${Math.floor(Math.random() * 999)}`;\n    console.log(`[RuPay Settlement] Ref: ${ref}, Card: ${pan.slice(-4)}, Amount: Rs.${amount}`);\n    return ref;\n  }\n}\n\n// Usage\nconst rupay = new RuPaySwitch();\ntry {\n  rupay.validateCard('6220180012345678', '123', 12, 2028);\n  const approved = rupay.authorizeTransaction('6220180012345678', 1500, 'CONTACTLESS');\n  console.log('Transaction approved:', approved);\n  if (approved) {\n    const ref = rupay.processSettlement('6220180012345678', 1500);\n    console.log('Settlement ref:', ref);\n  }\n} catch (err) {\n  console.error('RuPay Error:', (err as Error).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-bbps-bill-payment-processor",
      children: "14.4 BBPS Bill Payment Processor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BBPSBiller {\n  billerCode: string;\n  category: 'ELECTRICITY' | 'TELECOM' | 'GAS' | 'WATER' | 'DTH' | 'LOAN' | 'EDUCATION' | 'INSURANCE' | 'CREDIT_CARD';\n  name: string;\n  active: boolean;\n}\n\ninterface BBPSBillFetch {\n  billerCode: string;\n  customerId: string;\n  amount: number;\n  dueDate: Date;\n  billNumber: string;\n}\n\ninterface BBPSPayment {\n  transactionId: string;\n  billerCode: string;\n  customerId: string;\n  amount: number;\n  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';\n  bbpsRef: string;\n  timestamp: Date;\n}\n\nclass BBPSProcessor {\n  private billers: Map&lt;string, BBPSBiller&gt; = new Map();\n  private payments: Map&lt;string, BBPSPayment&gt; = new Map();\n\n  constructor() {\n    this.seedBillers();\n  }\n\n  private seedBillers(): void {\n    const billers: BBPSBiller[] = [\n      { billerCode: 'BEST001', category: 'ELECTRICITY', name: 'BEST Mumbai', active: true },\n      { billerCode: 'JIO001', category: 'TELECOM', name: 'Reliance Jio', active: true },\n      { billerCode: 'IGL001', category: 'GAS', name: 'Indraprastha Gas', active: true },\n    ];\n    billers.forEach(b => this.billers.set(b.billerCode, b));\n  }\n\n  fetchBill(billerCode: string, customerId: string): BBPSBillFetch | null {\n    const biller = this.billers.get(billerCode);\n    if (!biller || !biller.active) { return null; }\n\n    const bill: BBPSBillFetch = {\n      billerCode,\n      customerId,\n      amount: Math.floor(Math.random() * 5000) + 500,\n      dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),\n      billNumber: `BILL${Date.now()}`,\n    };\n    return bill;\n  }\n\n  payBill(billerCode: string, customerId: string, amount: number): BBPSPayment {\n    const biller = this.billers.get(billerCode);\n    if (!biller) { throw new Error('Unknown biller'); }\n    if (!biller.active) { throw new Error('Biller not accepting payments'); }\n\n    const payment: BBPSPayment = {\n      transactionId: `BBPS${Date.now()}`,\n      billerCode,\n      customerId,\n      amount,\n      status: 'SUCCESS',\n      bbpsRef: `NPCI${Date.now()}${Math.floor(Math.random() * 10000)}`,\n      timestamp: new Date(),\n    };\n    this.payments.set(payment.transactionId, payment);\n    return payment;\n  }\n\n  getPaymentStatus(txnId: string): BBPSPayment | undefined {\n    return this.payments.get(txnId);\n  }\n}\n\n// Usage\nconst bbps = new BBPSProcessor();\nconst bill = bbps.fetchBill('BEST001', 'CUST12345');\nif (bill) {\n  console.log(`Bill fetched: Rs.${bill.amount}, due ${bill.dueDate.toDateString()}`);\n  const payment = bbps.payBill('BEST001', 'CUST12345', bill.amount);\n  console.log('Payment:', JSON.stringify(payment, null, 2));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-architecture-diagrams--additional",
      children: "14. Architecture Diagrams — Additional"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "upi-complete-transaction-sequence-detailed",
      children: "UPI Complete Transaction Sequence (Detailed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Customer\n    participant PSP as PSP App (GPay)\n    participant NPCI as NPCI UPI Switch\n    participant IB as Issuer Bank (SBI)\n    participant AB as Acquirer Bank (HDFC)\n    participant M as Merchant\n    \n    C->>PSP: Open app, enter VPA & amount\n    PSP->>PSP: Validate VPA format & device binding\n    PSP->>NPCI: Payment request (payerVPA, payeeVPA, amount, deviceId)\n    NPCI->>NPCI: Resolve payeeVPA -> acquirer bank\n    NPCI->>IB: Validate payer VPA & account status\n    IB-->>NPCI: VPA valid, account active\n    NPCI-->>PSP: Proceed to PIN entry\n    PSP->>C: Request UPI PIN\n    C->>PSP: Enter UPI PIN\n    PSP->>PSP: Encrypt PIN (PSP key, device binding)\n    PSP->>NPCI: Submit encrypted PIN + transaction hash\n    NPCI->>IB: Forward PIN for HSM verification\n    IB->>IB: HSM decrypts & validates PIN offset\n    IB->>IB: Check available balance\n    IB->>IB: Apply holds & debit account\n    IB-->>NPCI: Success + URN generated\n    NPCI->>AB: Credit payee account via IMPS settlement\n    AB-->>M: Payment received notification\n    AB-->>NPCI: Settlement confirmation\n    NPCI-->>PSP: Transaction successful (URN, amount, timestamp)\n    PSP-->>C: \"Rs.500 sent to shyam@hdfc\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fastag--netc-toll-collection-system",
      children: "FASTag / NETC Toll Collection System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Vehicle[Vehicle with FASTag]\n        TAG[Passive UHF RFID Tag<br/>ISO 18000-6C<br/>865-867 MHz]\n    end\n    \n    subgraph Toll_Plaza[Toll Plaza]\n        ANT[RFID Antenna]\n        LC[Lane Controller]\n        BOOM[Boom Barrier]\n    end\n    \n    subgraph NETC_Network[NETC Network]\n        ACQ[NETC Acquirer Bank]\n        N[NPCI NETC Switch]\n        ISS[NETC Issuer Bank]\n    end\n    \n    TAG -->|Tag ID + Vehicle No| ANT\n    ANT --> LC\n    LC -->|Txn Request| ACQ\n    ACQ -->|ISO 8583| N\n    N -->|Debit Request| ISS\n    ISS -->|Success| N\n    N -->|Settlement| ACQ\n    ACQ -->|Barrier Open| LC\n    LC --> BOOM\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-latest-developments-2024-2026",
      children: "15. Latest Developments (2024-2026)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-upi-growth-statistics-2024-2026",
      children: "15.1 UPI Growth Statistics (2024-2026)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " UPI processed 131 billion transactions worth Rs. 199.6 lakh crore (approx. $2.4 trillion). Monthly volume crossed 13 billion transactions in December 2024."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " UPI crossed 15 billion transactions per month mark. Average daily transactions exceeded 500 million. Total value crossed Rs. 300 lakh crore for the year."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026 (projected):"
        }), " UPI expected to reach 20 billion monthly transactions. NPCI targets 1 billion daily transactions by end of 2026."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "152-new-upi-features-2024-2026",
      children: "15.2 New UPI Features (2024-2026)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI Circle (2024):"
        }), " Primary account holder can delegate payment authority to up to 5 family members/friends. The primary sets daily/monthly limits. Delegated users can transact using their own device with their own UPI PIN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI Lite X (2025):"
        }), " Enhanced version of UPI Lite with Rs. 10,000 wallet balance and Rs. 1,000 per transaction limit. Supports offline payments with batch settlement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI Credit Line (2024-2025):"
        }), " Banks can offer pre-sanctioned credit lines through UPI. Customers can transact using credit limit directly from UPI app — no separate credit card needed. RuPay credit cards already integrated with UPI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI for Secondary Market (2024):"
        }), " SEBI permitted UPI for trading in secondary markets (beyond IPOs). Investors can use UPI for stock purchases up to Rs. 5 lakh per transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI-ATM Worldwide (2025):"
        }), " NPCI partnered with international ATM networks (JCB, Discover, Pulse) enabling UPI-based cash withdrawals at ATMs in Japan, US, UK, and UAE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPI for NRI (2024):"
        }), " NRIs can now use UPI with international mobile numbers (non-Indian SIM). Supported countries: UAE, Singapore, Australia, Canada, UK, USA."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "153-rupay-developments",
      children: "15.3 RuPay Developments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " RuPay cards issued crossed 100 crore (1 billion) mark. RuPay is now the most-used card network in India by transaction volume."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " RuPay international acceptance expanded — now accepted in UAE, Singapore, Bhutan, Nepal, and 15+ other countries through bilateral agreements. RuPay partners with Discover Financial for global POS acceptance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026:"
        }), " RuPay contactless (NFC) transactions grew 300% since 2024. RuPay tokenization adoption reached 95% of all e-commerce transactions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "154-regulatory-changes",
      children: "15.4 Regulatory Changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2024:"
        }), " RBI increased IMPS limit from Rs. 5 lakh to Rs. 10 lakh per transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " RBI mandated all payment aggregators to use mandatory tokenization (no card-on-file storage). Non-compliance penalty: Rs. 1 lakh per day."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025:"
        }), " UPI transaction charges introduced for high-value UPI transactions (above Rs. 2,000) made through PPIs (Prepaid Payment Instruments). Interchange fee of 1.1% applies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026:"
        }), " RBI extended UPI 24x7x365 uptime SLA to 99.99% — NPCI must maintain sub-100ms response time for 99.5% of transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026:"
        }), " New RBI guidelines for UPI Credit Line — minimum 18% p.a. interest disclosure, credit limit must be clearly shown separately from deposit balance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-solved-examples-20-mcqs",
      children: "📝 Solved Examples (20 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " What does VPA stand for in the UPI ecosystem?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Virtual Payment Address\nB) Verified Payment Account\nC) Virtual Processing Agent\nD) Verified Personal Account"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) Virtual Payment Address**\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["VPA (Virtual Payment Address) is the unique identifier in UPI format ", (0,jsx_runtime.jsx)(_components.code, {
          children: "username@bankhandle"
        }), ". It serves as the financial address for sending and receiving payments without revealing bank account details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " What is the maximum wallet balance allowed for UPI Lite?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Rs. 1,000\nB) Rs. 2,000\nC) Rs. 5,000\nD) Rs. 10,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Rs. 2,000**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "UPI Lite allows a maximum wallet balance of Rs. 2,000 with per-transaction limit of Rs. 500. No UPI PIN is required for payments from the UPI Lite wallet."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Which organization operates the IMPS payment system?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) RBI\nB) SBI\nC) NPCI\nD) NCPI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) NPCI**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NPCI (National Payments Corporation of India) operates IMPS. RBI operates NEFT and RTGS. UPI also uses IMPS as its underlying settlement layer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " In RuPay card processing, what BIN range indicates a RuPay Classic card?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 51xxxx\nB) 60xxxx\nC) 4xxxxx\nD) 37xxxx"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) 60xxxx**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RuPay Classic cards use BIN 60xxxx. Other BINs: 65xxxx (Platinum), 81xxxx (Select), 82xxxx (World), 508xxx (RuPay JCB co-badge)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " What is the per-transaction limit for UPI123Pay?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Rs. 5,000\nB) Rs. 10,000\nC) Rs. 5,000 per transaction (same as regular UPI)\nD) Rs. 1,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Rs. 5,000 per transaction**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "UPI123Pay follows the same UPI transaction limits. Per transaction limit is Rs. 5,000 (subject to bank-specific limits). Daily cumulative limit is Rs. 1,00,000."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6."
      }), " In the UPI four-party model, what is a TPAP?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Third Party Application Provider\nB) Transaction Processing Authority Partner\nC) Technical Payment Access Protocol\nD) Total Payment Aggregation Platform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) Third Party Application Provider**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "TPAP (Third Party Application Provider) is a non-bank PSP that operates under a sponsor bank's license. Examples: Google Pay (under Axis Bank), PhonePe (under ICICI Bank)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "7."
      }), " How many bits of EPC memory does a standard FASTag RFID tag have?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 64-128 bits\nB) 96-512 bits\nC) 512-1024 bits\nD) 2-4 KB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) 96-512 bits**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "FASTag RFID tags (ISO 18000-6C / EPC Gen2) have 96-512 bits of EPC memory. This stores the Tag ID and Vehicle Registration Number. The tag is passive (no battery)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8."
      }), " What is the minimum transaction amount for RTGS?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Re. 1\nB) Rs. 50,000\nC) Rs. 2,00,000\nD) Rs. 5,00,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Rs. 2,00,000**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RTGS has a minimum transaction amount of Rs. 2,00,000 with no upper limit. IMPS has Re. 1 minimum, NEFT has no minimum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "9."
      }), " In AePS, what does IIN stand for and how is it determined?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Issuer Identification Number — first 6 digits of Aadhaar\nB) Indian Identification Number — last 4 digits of Aadhaar\nC) Interbank Index Number — NPCI-assigned code\nD) Individual Income Number — income tax reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) Issuer Identification Number — first 6 digits of Aadhaar**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "IIN is the first 6 digits of the Aadhaar number, identifying the enrolling agency/bank. AePS uses IIN to route transactions to the correct issuer bank for Aadhaar-based transactions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "10."
      }), " What type of authentication does AePS use for customer verification?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Debit card PIN\nB) UPI PIN\nC) Biometric (Aadhaar fingerprint/iris)\nD) OTP on mobile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Biometric (Aadhaar fingerprint/iris)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "AePS uses Aadhaar biometric authentication (fingerprint or iris) through UIDAI. The micro-ATM captures biometric data and sends it to UIDAI for verification before allowing any transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "11."
      }), " In the BBPS three-tier model, what is a BPU?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Bill Payment Unit\nB) Bank Processing Unit\nC) Bharat Payment Unit\nD) Bill Processing Utility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Bharat Payment Unit**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "BPU (Bharat Payment Unit) is the operating unit in BBPS — can be an OPU (Online Payment Unit) or an offline agent. It sits between the customer and BBPS Central (NPCI)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "12."
      }), " What is the maximum amount for a single UPI transaction (default limit)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Rs. 25,000\nB) Rs. 1,00,000\nC) Rs. 5,00,000\nD) Rs. 10,00,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Rs. 1,00,000**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The default UPI per-transaction limit is Rs. 1,00,000. For certain categories (capital markets, IPOs, tax payments), higher limits up to Rs. 5,00,000 are permitted."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "13."
      }), " Which of the following is NOT a mode of IMPS?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) P2A (Account + IFSC)\nB) P2M (Mobile + MMID)\nC) P2P (VPA-based)\nD) P2C (Card + CVV)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: D) P2C (Card + CVV)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "P2C is not an IMPS mode. The three IMPS modes are P2A (Account + IFSC), P2M (Mobile + MMID), and P2P (VPA/UPI). Card-based transfers use different systems like RuPay/Visa/Mastercard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "14."
      }), " What is the RFID frequency band used by FASTag as per TRAI?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 125 kHz (LF)\nB) 13.56 MHz (HF)\nC) 865-867 MHz (UHF)\nD) 2.4 GHz (Microwave)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) 865-867 MHz (UHF)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "FASTag uses passive UHF RFID in the 865-867 MHz band as per TRAI (Telecom Regulatory Authority of India) guidelines. Read range is 4-6 meters at toll booths."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "15."
      }), " Under the RBI tokenization mandate, which entity is NOT allowed to store actual card PAN?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Card network\nB) Issuer bank\nC) Merchant / Payment aggregator\nD) Token Service Provider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Merchant / Payment aggregator**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "As per RBI's CoFT mandate, merchants and payment aggregators cannot store actual card PAN after tokenization. Only card networks (as TSPs) and issuer banks may store PAN. Merchants must use tokens."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "16."
      }), " In NACH, which type of mandate is used for loan EMI collections?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NACH Credit\nB) NACH Debit\nC) NACH Transfer\nD) NACH Balance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) NACH Debit**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NACH Debit is used when the sponsor (e.g., bank/NBFC) collects money from the customer's account — used for loan EMIs, SIPs, insurance premiums. NACH Credit is for disbursements (salary, subsidy)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "17."
      }), " What is the maximum per-transaction limit for small-value eMandate without additional factor authentication?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Rs. 5,000\nB) Rs. 10,000\nC) Rs. 15,000\nD) Rs. 20,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Rs. 15,000**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "As per RBI, eMandate up to Rs. 15,000 per transaction requires no additional factor authentication. Rs. 15,001-1,00,000 requires AFA once per mandate. Above Rs. 1,00,000 requires AFA on each transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "18."
      }), " What does MMID stand for in IMPS?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Mobile Money Identifier\nB) Mobile Mandate ID\nC) Merchant Management ID\nD) Mobile MMID Identifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) Mobile Money Identifier**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MMID (Mobile Money Identifier) is a 7-digit number assigned by the bank to a customer's mobile number for IMPS transactions. Combined with mobile number, it enables P2M (Person-to-Merchant) transfers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "19."
      }), " In the UPI reference number (URN), what do the middle 4 digits represent?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NPCI Institution ID\nB) Date (MMDD format)\nC) Sequence number\nD) Bank branch code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: B) Date (MMDD format)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "URN format: First 4 digits = NPCI Institution ID, Next 4 digits = Transaction date in MMDD format (e.g., 0706 for July 06), Last 4+ digits = Sequence number (auto-increment)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "20."
      }), " What is the underlying settlement system used by UPI for inter-bank transfers?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NEFT\nB) RTGS\nC) IMPS\nD) SWIFT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) IMPS**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "UPI uses IMPS as its underlying settlement layer. IMPS provides the real-time inter-bank fund transfer capability that UPI leverages. This is why UPI is also 24x7x365 and real-time."
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
      }), " List the four participants in the UPI four-party model and describe each role."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " What is the format of a UPI Virtual Payment Address (VPA)? Write the validation regex."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Explain the difference between UPI Lite and regular UPI. When would you use each?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " What are the three IMPS modes? Give an example use case for each."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " Describe the RuPay card BIN ranges and the card type each represents."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6."
      }), " What is the difference between NACH Credit and NACH Debit? Give an example of each."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "7."
      }), " Explain the concept of tokenization under RBI's CoFT mandate. What entities are involved?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8."
      }), " What is a UPI eMandate? Describe the three-tier RBI authentication limits."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "9."
      }), " How does AePS authenticate a customer? What hardware is used?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "10."
      }), " What is the BBPS three-tier model? Name the three layers and their functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-b-long-answer-questions-11-20",
      children: "Section B: Long Answer (Questions 11-20)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "11."
      }), " Draw and explain the complete UPI transaction flow from customer initiating payment to the payee receiving funds. Include all four parties and the role of URN."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "12."
      }), " Compare and contrast NEFT, RTGS, and IMPS on operator, settlement type, timing, limits, and message format."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "13."
      }), " Describe the RuPay card transaction flow for a POS purchase. Include BIN lookup, authorization, EMV ARQC, and settlement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "14."
      }), " Explain the NETC/FASTag toll collection architecture. Include RFID specifications, transaction flow, and clearing process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "15."
      }), " Describe the APBS architecture for government DBT transfers. Include PFMS, sponsor bank, mapper bank, and destination bank roles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "16."
      }), " Explain the AePS cash withdrawal flow step by step. Include biometric authentication, IIN routing, and CBS debit process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "17."
      }), " Describe the eMandate lifecycle from registration to deactivation. Include mandate creation, approval, recurring debits, and modification."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "18."
      }), " How does 3D Secure work for RuPay card e-commerce transactions? Compare with Visa/Mastercard's 3DS implementation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "19."
      }), " Explain the device-based tokenization used in mobile wallets (Apple Pay, Google Pay). Include token requestor, TSP, and domain restriction concepts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "20."
      }), " Compare the economics of RuPay vs Visa/Mastercard for Indian banks. Include issuance fees, switch fees, settlement currency, and annual membership costs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-c-application--design-questions-21-30",
      children: "Section C: Application / Design (Questions 21-30)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "21."
      }), " Write a TypeScript function that validates a VPA and returns the component parts (username and bank handle)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "22."
      }), " Design a UPI transaction flow between two banks using TypeScript classes for PayerPSP, NPCI Switch, IssuerBank, and AcquirerBank."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "23."
      }), " Implement a RuPay card BIN lookup and card type identification in TypeScript."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "24."
      }), " Design a FASTag transaction processor that validates tag ID, calculates toll amount based on vehicle class, and processes the debit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "25."
      }), " Create a BBPS bill fetch and payment integration in TypeScript with multiple biller categories."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "26."
      }), " Design an eMandate registration system with proper tier-based authentication limits for recurring payments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "27."
      }), " Implement a card tokenization service (CoFT) that generates BIN-preserving tokens and stores the PAN-token mapping in a secure vault."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "28."
      }), " Design a UPI PIN management system with PIN offset storage, failed attempt tracking, and lockout mechanism."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "29."
      }), " Build an NACH mandate lifecycle manager that handles registration, activation, debit processing, and cancellation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "30."
      }), " Design an interoperability layer between UPI and RuPay that allows a customer to use a RuPay credit card as a funding source for UPI transactions."]
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
        }), " (i) Payer PSP — initiates transaction on payer side (GPay); (ii) Payee PSP — receives on payee side; (iii) Issuer Bank — holds payer's account, validates PIN; (iv) Acquirer Bank — holds payee/merchant's account."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "username@bankhandle"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ram@sbi"
        }), "). Regex: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " UPI Lite: on-device wallet, max Rs. 2,000 balance, Rs. 500/txn, no PIN needed — for small offline-capable payments. Regular UPI: bank account-based, UPI PIN required, Rs. 1,00,000/txn limit — for all other payments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " P2A (Account+IFSC — traditional transfer); P2M (Mobile+MMID — phone-based); P2P (VPA — UPI)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " 60xxxx = Classic, 65xxxx = Platinum, 81xxxx = Select, 82xxxx = World, 508xxx = RuPay JCB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6."
        }), " NACH Credit = Sponsor sends money to destination (salary, subsidy). NACH Debit = Sponsor collects from destination (loan EMI, SIP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "7."
        }), " RBI mandate (Jan 2022): Merchants cannot store PAN. Card network (Visa/MC/RuPay) generates token. Merchant stores token. Entities: Token Requestor (merchant), TSP (card network), Token Vault."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8."
        }), " eMandate for recurring payments. Limits: up to Rs. 15,000 (no AFA); Rs. 15,001-1,00,000 (AFA once); Above Rs. 1,00,000 (AFA each transaction)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9."
        }), " Biometric (fingerprint/iris) via micro-ATM → UIDAI authentication → transaction proceeds on successful auth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10."
        }), " Layer 1: Customer (bill payer); Layer 2: BPU (Bharat Payment Unit — aggregator/agent); Layer 3: BBPS Central (NPCI — clearing, settlement)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Section B Answers (11-20)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "11."
        }), " 12-step flow: (1) Payer opens PSP app; (2) Enters VPA+amount; (3) PSP formats UPI request; (4) Sends to NPCI; (5) NPCI validates; (6) Routes to payee PSP; (7) Validates payee VPA; (8) PIN request; (9) Payer enters PIN; (10) PIN encrypted via PSP→NPCI→Issuer; (11) Issuer validates PIN via HSM, debits; (12) Credited to payee, URN generated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12."
        }), " NEFT: DNS, RBI, 24x7, 30-min batches, no min. RTGS: Real-time gross, RBI, 7AM-6PM, immediate, Rs. 2L min. IMPS: Real-time, NPCI, 24x7, immediate, Re. 1 min, Rs. 5L max."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13."
        }), " Card tapped/inserted → ISO 8583 0200 to acquirer → NPCI RuPay Switch → BIN lookup → Issuer bank → EMV ARQC validation → PIN/balance check → approval/decline → response via NPCI → acquirer → POS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14."
        }), " RFID tag (ISO 18000-6C, 865-867 MHz) → Lane controller reads Tag ID + Vehicle No → Acquirer bank → NPCI NETC Switch → Issuer bank debits → Settlement → Barrier opens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15."
        }), " Government → PFMS → Sponsor Bank → NPCI APBS → Mapper Bank (Aadhaar-to-Account lookup) → Destination Bank → Beneficiary credited. Response flows back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "16."
        }), " Customer gives Aadhaar + fingerprint → Micro-ATM captures biometric → UIDAI authentication → If success: Aadhaar+IIN+amount → NPCI AePS → Issuer bank CBS → Debit → Cash dispensed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17."
        }), " Registration → Customer approves via PSP → Mandate stored at NPCI & Issuer → Active mandate → Recurring debits (automated, no PIN for small amounts) → Modification/cancellation on request → Deactivation on expiry/cancellation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "18."
        }), " RuPay uses 3D Secure (RuPay Secure). Customer redirected to issuer's ACS page → OTP sent → OTP validated → Authorization. RuPay 3DS works similarly to Visa/MC 3D Secure but routes through NPCI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19."
        }), " Token Requestor (Google Pay) requests token from TSP (Visa/MC/RuPay) → Token stored in device Secure Element → Domain restricted (only that device+wallet combo) → Dynamic CVV generated per transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "20."
        }), " RuPay: Rs. 20-30 issuance, ~Rs. 0.50-1 switch fee, INR settlement. Visa/MC: Rs. 100-150 issuance, ~Rs. 5-15 switch fee, USD settlement (forex risk for banks)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Section C Answers (21-30)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "21."
        }), " TypeScript: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "function parseVPA(vpa: string): { username: string; bankHandle: string } | null { if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(vpa)) return null; const [u, b] = vpa.split('@'); return { username: u, bankHandle: b }; }"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "22."
        }), " Design classes with: PayerPSP(payerVpa, payeeVpa, amount, deviceId) → sendToNPCI(); NPCISwitch() → resolveVPA(), validate(), forwardToIssuer(); IssuerBank() → validatePIN(), checkBalance(), debit(); AcquirerBank() → creditPayee(). All connected via interfaces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "23."
        }), " BIN ranges: '60'→Classic, '65'→Platinum, '81'→Select, '82'→World, '5085'→JCB. Check prefix with startsWith() in order of specificity (longest prefix first)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "24."
        }), " FASTagProcessor: validateTag(tagId, vehicleNo) → determineVehicleClass() → calculateToll(plazaId, class) → processDebit(walletId, amount) → return settlementRef."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "25."
        }), " BBPSProcessor: map<billerCode, biller>; fetchBill(code, custId) → return bill with amount+dueDate; payBill(code, custId, amount) → generate BBPS ref + status SUCCESS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "26."
        }), " eMandateManager with tiers: (1) <=15000: no AFA; (2) 15001-100000: AFA on mandate creation + first debit; (3) >100000: AFA each debit. Store mandate with frequency, amount, start/end dates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "27."
        }), " TokenVault: Map<token, pan>; generateToken(pan) → BIN-preserving 16-digit token using format-preserving encryption (FF1); storeToken(token, pan) in encrypted vault; detokenize(token) → return original PAN via HSM."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "28."
        }), " PINManager: setPin(vpa, pin) → store HMAC(pin, salt) as pinOffset; validatePin(vpa, pin) → compare HMAC; track failed attempts >=3 → lock; reset via debit card OTP verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "29."
        }), " NACHMandateManager: register(customerId, amount, frequency, sponsorId) → store with status PENDING; verify(destinationBank) → ACTIVATE; processDebit(mandateId) → check active, deduct, log; cancel(mandateId) → DEACTIVATE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "30."
        }), " UPIRuPayBridge: Link RuPay card to UPI → NPCI routes UPI credit card payments to RuPay switch → RuPay authorization (credit limit check) → UPI PIN verification → Settlement through IMPS. Merchant receives payment via normal UPI flow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "India's digital payment ecosystem is anchored by NPCI-operated systems. UPI uses a four-party model (Payer/Customer, PSP, NPCI Switch, Issuer/Acquirer Bank) with VPA as the financial address and 12-digit URN for transaction tracking. UPI PIN is validated via issuer bank HSM using secure PIN offsets."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMPS (NPCI, real-time, Rs. 5 lakh max) differs from NEFT (RBI, deferred net settlement, no minimum) and RTGS (RBI, real-time gross, Rs. 2 lakh minimum) in settlement type and timing. RuPay cards process through NPCI's domestic switch with lower fees than Visa/Mastercard."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FASTag uses UHF RFID (ISO 18000-6C, 865-867 MHz) for NETC toll collection. APBS enables Aadhaar-based DBT subsidy transfers. BBPS follows a three-tier model (Customer -> BPU -> BBPS Central). AePS provides Aadhaar biometric-based banking at micro-ATMs. NACH handles bulk credits/debits with mandate lifecycle management."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tokenization (CoFT and device-based) is mandatory as per RBI, replacing PAN with BIN-preserving tokens. Recurring payments use eMandate with tiered authentication based on value slabs. UPI Lite enables offline-capable small payments (Rs. 500/txn, Rs. 2,000 balance) without UPI PIN."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "UPI Integration:"
          }), " Always implement VPA validation (regex: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$"
          }), ") at the UI level before making NPCI API calls to reduce load and improve UX."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tokenization Implementation:"
          }), " As per RBI mandate, never store actual card PAN after tokenization. Implement CoFT via card network APIs (Visa TSP, Mastercard MDES, RuPay Tokenization)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FASTag Testing:"
          }), " When developing NETC systems, test with multiple vehicle classes and toll plazas. The RFID read range varies with tag placement on windshield and antenna alignment."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AePS Security:"
          }), " Since AePS uses biometrics, ensure micro-ATM devices use secure elements and encrypted communication to UIDAI. Liveness detection is critical to prevent spoofing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BBPS Integration:"
          }), " Always implement bill fetch before bill pay to display up-to-date bill amount. Category codes are defined by NPCI and must match exactly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "eMandate Limits:"
          }), " Follow RBI's three-tier authentication structure strictly. Non-compliance can result in penalties and reversal of transactions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IMPS vs UPI:"
          }), " Remember that UPI uses IMPS as its underlying settlement layer. When IMPS is down, UPI also fails. Design fallback to NEFT for critical payments."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the minimum amount that can be transferred via RTGS?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Re. 1\nB) Rs. 50,000\nC) Rs. 2,00,000\nD) Rs. 5,00,000"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Rs. 2,00,000**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "RTGS has a minimum transaction amount of Rs. 2 lakh. There is no upper limit. IMPS has Re. 1 minimum and Rs. 5 lakh maximum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which UPI component generates the 12-digit UPI Reference Number (URN)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Payer's PSP\nB) Payee's PSP\nC) NPCI UPI Switch\nD) Issuer Bank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) NPCI UPI Switch**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The 12-digit URN is generated by NPCI for every successful transaction. It includes NPCI Institution ID, transaction date (MMDD), and a sequence number."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What type of RFID technology does FASTag use?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) LF RFID (125 kHz)\nB) HF RFID (13.56 MHz)\nC) UHF RFID (865-867 MHz)\nD) Active RFID (2.4 GHz)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) UHF RFID (865-867 MHz)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "FASTag uses passive UHF RFID in the 865-867 MHz band as per TRAI guidelines, following the ISO 18000-6C standard. Read range is 4-6m at toll booths."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " In the AePS system, what does IIN stand for and what is its purpose?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Issuer Identification Number — identifies the bank for transaction routing\nB) Indian Identification Number — Aadhaar reference\nC) Interbank Identifier Number — NPCI switch identifier\nD) Individual Income Number — tax-related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: A) Issuer Identification Number — identifies the bank for routing**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "IIN is the first 6 digits of Aadhaar number that identifies the enrolling agency/bank. AePS uses IIN to route transactions to the correct issuer bank."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " As per RBI's card tokenization mandate, which entity is authorized to generate and store tokens?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Merchant\nB) Payment aggregator\nC) Card network (Visa/Mastercard/RuPay)\nD) Acquirer bank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**Answer: C) Card network (Visa/Mastercard/RuPay)**\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Only card networks (token service providers) are authorized to generate tokens. Merchants and payment aggregators must use these network-generated tokens and cannot store actual card PAN after tokenization."
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