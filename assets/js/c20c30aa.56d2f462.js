"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76240],{

/***/ 83233
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_46_interview_real_estate_md_c20_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-46-interview-real-estate-md-c20.json
const site_docs_courses_laravel_46_interview_real_estate_md_c20_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/46-interview-real-estate","title":"Chapter 46: Real Estate & Property Interview Q&A","description":"Previous Legal & Compliance Interview Q&A","source":"@site/docs/courses/laravel/46-interview-real-estate.md","sourceDirName":"courses/laravel","slug":"/laravel/46-interview-real-estate","permalink":"/ai-engineering-journey/laravel/46-interview-real-estate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":46,"frontMatter":{"id":"46-interview-real-estate","slug":"/laravel/46-interview-real-estate","title":"Chapter 46: Real Estate & Property Interview Q&A","sidebar_label":"Chapter 46: Real Estate & Property Interview Q&A","sidebar_position":46},"sidebar":"coursesSidebar","previous":{"title":"Chapter 45: Customer Service & Support → Interview Q&A","permalink":"/ai-engineering-journey/laravel/45-interview-customer-service"},"next":{"title":"Chapter 47: Legal & Compliance Interview Q&A","permalink":"/ai-engineering-journey/laravel/47-interview-legal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/46-interview-real-estate.md


const frontMatter = {
	id: '46-interview-real-estate',
	slug: '/laravel/46-interview-real-estate',
	title: 'Chapter 46: Real Estate & Property Interview Q&A',
	sidebar_label: 'Chapter 46: Real Estate & Property Interview Q&A',
	sidebar_position: 46
};
const contentTitle = 'Chapter 46: Real Estate & Property Interview Q&A';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. Real Estate Domain Knowledge",
  "id": "1-real-estate-domain-knowledge",
  "level": 2
}, {
  "value": "Q1: What are the key entities in a real estate platform data model, and how do they relate?",
  "id": "q1-what-are-the-key-entities-in-a-real-estate-platform-data-model-and-how-do-they-relate",
  "level": 3
}, {
  "value": "Q2: What is an MLS, and how does it affect system design for a real estate application?",
  "id": "q2-what-is-an-mls-and-how-does-it-affect-system-design-for-a-real-estate-application",
  "level": 3
}, {
  "value": "Q3: How do real estate platforms handle property status transitions?",
  "id": "q3-how-do-real-estate-platforms-handle-property-status-transitions",
  "level": 3
}, {
  "value": "Q4: Explain the concept of property tax, escrow, and title in a real estate transaction context.",
  "id": "q4-explain-the-concept-of-property-tax-escrow-and-title-in-a-real-estate-transaction-context",
  "level": 3
}, {
  "value": "Q5: What is a Comparable Market Analysis (CMA) and how would you automate it?",
  "id": "q5-what-is-a-comparable-market-analysis-cma-and-how-would-you-automate-it",
  "level": 3
}, {
  "value": "2. Technical Implementation",
  "id": "2-technical-implementation",
  "level": 2
}, {
  "value": "Q6: How would you build a PropertyListingAgent that generates AI-powered property descriptions?",
  "id": "q6-how-would-you-build-a-propertylistingagent-that-generates-ai-powered-property-descriptions",
  "level": 3
}, {
  "value": "Q7: How would you implement a ValuationPredictionAgent that estimates property values?",
  "id": "q7-how-would-you-implement-a-valuationpredictionagent-that-estimates-property-values",
  "level": 3
}, {
  "value": "Q8: How would you build a TourSchedulingAgent that automates property showing coordination?",
  "id": "q8-how-would-you-build-a-tourschedulingagent-that-automates-property-showing-coordination",
  "level": 3
}, {
  "value": "Q9: How would you implement a DocumentProcessingAgent for leases, deeds, and inspection reports?",
  "id": "q9-how-would-you-implement-a-documentprocessingagent-for-leases-deeds-and-inspection-reports",
  "level": 3
}, {
  "value": "Q10: How would you build a LeadQualificationAgent for real estate leads?",
  "id": "q10-how-would-you-build-a-leadqualificationagent-for-real-estate-leads",
  "level": 3
}, {
  "value": "Q11: How would you implement a MarketAnalysisAgent for neighborhood trends?",
  "id": "q11-how-would-you-implement-a-marketanalysisagent-for-neighborhood-trends",
  "level": 3
}, {
  "value": "Q12: How would you build a RentalManagementAgent for automating landlord operations?",
  "id": "q12-how-would-you-build-a-rentalmanagementagent-for-automating-landlord-operations",
  "level": 3
}, {
  "value": "Q13: How would you implement a CRM for real estate agents using AI?",
  "id": "q13-how-would-you-implement-a-crm-for-real-estate-agents-using-ai",
  "level": 3
}, {
  "value": "3. Architecture &amp; Design",
  "id": "3-architecture--design",
  "level": 2
}, {
  "value": "Q14: Describe the architecture of a property listing platform built with Laravel.",
  "id": "q14-describe-the-architecture-of-a-property-listing-platform-built-with-laravel",
  "level": 3
}, {
  "value": "Q15: How would you handle property search at scale?",
  "id": "q15-how-would-you-handle-property-search-at-scale",
  "level": 3
}, {
  "value": "Q16: How would you integrate geolocation and mapping into a real estate application?",
  "id": "q16-how-would-you-integrate-geolocation-and-mapping-into-a-real-estate-application",
  "level": 3
}, {
  "value": "Q17: How would you design the MLS data sync pipeline for reliability and scale?",
  "id": "q17-how-would-you-design-the-mls-data-sync-pipeline-for-reliability-and-scale",
  "level": 3
}, {
  "value": "Q18: How would you design the photo and virtual tour storage pipeline for real estate listings?",
  "id": "q18-how-would-you-design-the-photo-and-virtual-tour-storage-pipeline-for-real-estate-listings",
  "level": 3
}, {
  "value": "4. Behavioral &amp; Scenario",
  "id": "4-behavioral--scenario",
  "level": 2
}, {
  "value": "Q19: Walk me through designing an AI-powered real estate platform from scratch.",
  "id": "q19-walk-me-through-designing-an-ai-powered-real-estate-platform-from-scratch",
  "level": 3
}, {
  "value": "Q20: How would you implement property recommendation for a real estate platform?",
  "id": "q20-how-would-you-implement-property-recommendation-for-a-real-estate-platform",
  "level": 3
}, {
  "value": "Q21: Describe how you&#39;d build a property management SaaS using Laravel.",
  "id": "q21-describe-how-youd-build-a-property-management-saas-using-laravel",
  "level": 3
}, {
  "value": "Q22: You discover that property search queries are timing out during peak hours. Walk through your debugging and solution process.",
  "id": "q22-you-discover-that-property-search-queries-are-timing-out-during-peak-hours-walk-through-your-debugging-and-solution-process",
  "level": 3
}, {
  "value": "Q23: A client reports that the AI-generated property descriptions sometimes include fabricated features (e.g., &quot;granite countertops&quot; when there are none). How do you handle this?",
  "id": "q23-a-client-reports-that-the-ai-generated-property-descriptions-sometimes-include-fabricated-features-eg-granite-countertops-when-there-are-none-how-do-you-handle-this",
  "level": 3
}, {
  "value": "Q24: Design a system for real-time property price change alerts.",
  "id": "q24-design-a-system-for-real-time-property-price-change-alerts",
  "level": 3
}, {
  "value": "Q25: How would you implement a smart search feature that understands natural language queries like &quot;3-bedroom condo downtown under $400k with parking&quot;?",
  "id": "q25-how-would-you-implement-a-smart-search-feature-that-understands-natural-language-queries-like-3-bedroom-condo-downtown-under-400k-with-parking",
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
  "value": "Concept Comparison",
  "id": "concept-comparison-2",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-2",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-2",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-2",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison-3",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-3",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-3",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-3",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
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
        id: "chapter-46-real-estate--property-interview-qa",
        children: "Chapter 46: Real Estate & Property Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/45-interview-customer-service",
          children: "Customer Service & Support — Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/47-interview-legal",
          children: "Legal & Compliance Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part IX: Interview Preparation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common interview questions for Laravel developer roles in real estate technology (PropTech), property management SaaS, and real estate platform companies. Questions cover domain knowledge, technical implementation with AI agents, system architecture, and behavioral scenarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/laravel/46-interview-real-estate/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/46-interview-real-estate/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/46-interview-real-estate/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/46-interview-real-estate/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/46-interview-real-estate/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/46-interview-real-estate/visual-explanation.png",
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
            children: "Real estate interview questions covering property management, listings, matching, valuation, transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property listings, buyer matching, price valuation, transaction management, market analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q&A format with practical code examples and domain-specific scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP, Laravel, Eloquent, real estate domain knowledge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts]\n    B[Interview Questions]\n    C[Code Examples]\n    D[Best Practices]\n    E[Common Pitfalls]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-real-estate-domain-knowledge",
      children: "1. Real Estate Domain Knowledge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/46-interview-real-estate.png",
        alt: "Real Estate Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-are-the-key-entities-in-a-real-estate-platform-data-model-and-how-do-they-relate",
      children: "Q1: What are the key entities in a real estate platform data model, and how do they relate?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A typical real estate platform revolves around a core ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Property"
      }), " entity → the physical asset (land, house, condo, commercial unit). A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Property"
      }), " has one or more ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Listing"
      }), " records over time (each representing a period when it's on the market). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Broker"
      }), ") represents the licensed professional. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Client"
      }), " generalizes buyers, sellers, and renters. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Showing"
      }), " links an agent or client to a property tour. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Offer"
      }), " represents a purchase or lease proposal tied to a listing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The relationships form a hub-and-spoke:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Property 1──* Listing 1──* Offer\n                Listing 1──* Showing (Agent + Client)\nAgent    1──* Listing\nAgent    1──* Client (relationship table)\nClient   1──* Showing\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Laravel, you'd model these with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HasMany"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BelongsToMany"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Property model\npublic function listings(): HasMany\n{\n    return $this->hasMany(Listing::class);\n}\n\n// Listing model\npublic function offers(): HasMany\n{\n    return $this->hasMany(Offer::class);\n}\n\npublic function showings(): HasMany\n{\n    return $this->hasMany(Showing::class);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additional supporting entities include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Inspection"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Document"
      }), " (deeds, disclosures), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction"
      }), " (closed deals), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Commission"
      }), ". MLS integrations often add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MlsFeed"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MlsSyncLog"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Photo"
      }), " as a separate model with variant sizes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-an-mls-and-how-does-it-affect-system-design-for-a-real-estate-application",
      children: "Q2: What is an MLS, and how does it affect system design for a real estate application?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple Listing Service (MLS)"
      }), " is a private database used by real estate brokers to share property listing data. Each regional MLS (there are ~600 in North America) has its own data format, field definitions, and API access rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Impact on system design:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data ingestion"
        }), ": You need a sync engine that polls MLS feeds via RETS (Real Estate Transaction Standard) or the newer RESO Web API. Each MLS may have different authentication (basic auth, OAuth, certificate-based)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Field mapping"
        }), ": A normalization layer must map MLS-specific fields to your canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "properties"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "listings"
        }), " tables. An MLS might call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ListPrice"
        }), " while yours stores ", (0,jsx_runtime.jsx)(_components.code, {
          children: "price"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update frequency"
        }), ": Most MLSs provide incremental updates (add/changed/deleted). You need a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MlsSyncLog"
        }), " table to track the last sync timestamp and process deltas in batches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data ownership"
        }), ": MLS data is typically licensed. You may not be allowed to cache indefinitely, or you must attribute the source. Some MLSs require a \"data feed agreement\" and audit logging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deduplication"
        }), ": A property may be listed on multiple MLSs. You need a dedup strategy → often using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parcel_id"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        }), " fingerprinting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Example MLS sync job\nclass SyncMlsFeedJob implements ShouldQueue\n{\n    public function handle(RetsClient $rets): void\n    {\n        $properties = $rets->search('Property', 'A', [\n            'query' => \"(LastUpdated={$this->getLastSync()}+)\",\n        ]);\n\n        foreach ($properties as $mlsData) {\n            $property = Property::updateOrCreate(\n                ['mls_id' => $mlsData['ListingKey']],\n                $this->normalizeMlsFields($mlsData)\n            );\n        }\n\n        MlsSyncLog::create([\n            'mls_id' => $this->mlsId,\n            'synced_at' => now(),\n            'count' => count($properties),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-real-estate-platforms-handle-property-status-transitions",
      children: "Q3: How do real estate platforms handle property status transitions?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property statuses follow a well-defined lifecycle. Common statuses include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coming Soon"
        }), " → Pre-market, not yet publicly available"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active"
        }), " → On the market, accepting showings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under Contract"
        }), " → An offer has been accepted, but the deal hasn't closed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pending"
        }), " → Contingencies (inspection, financing) are being satisfied"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Closed"
        }), " → Sale completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expired"
        }), " → Listing agreement ended without a sale"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Withdrawn"
        }), " → Removed from market before expiration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Off Market"
        }), " → Not currently listed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Laravel, model this with a state machine pattern. Laravel offers several approaches:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Listing extends Model\n{\n    protected function status(): Attribute\n    {\n        return Attribute::make(\n            get: fn (string $value) => ListingStatus::from($value),\n        );\n    }\n\n    public function transitionTo(ListingStatus $newStatus): bool\n    {\n        $allowed = ListingStatus::allowedTransitions()[$this->status->value] ?? [];\n\n        if (!in_array($newStatus->value, $allowed)) {\n            throw new InvalidStatusTransitionException(\n                \"Cannot transition from {$this->status->value} to {$newStatus->value}\"\n            );\n        }\n\n        return $this->updateQuietly(['status' => $newStatus->value]);\n    }\n}\n\n// Using an enum with explicit transitions\nenum ListingStatus: string\n{\n    case ComingSoon = 'coming_soon';\n    case Active = 'active';\n    case UnderContract = 'under_contract';\n    case Pending = 'pending';\n    case Closed = 'closed';\n    case Expired = 'expired';\n    case Withdrawn = 'withdrawn';\n\n    public static function allowedTransitions(): array\n    {\n        return [\n            'coming_soon' => ['active'],\n            'active' => ['under_contract', 'expired', 'withdrawn'],\n            'under_contract' => ['pending', 'active'], // deal falls through\n            'pending' => ['closed', 'active'], // contingency fails\n            'expired' => ['active'], // re-list\n            'withdrawn' => ['active'], // re-list\n            'closed' => [], // terminal state\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each transition typically triggers side effects: changing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "status_changed_at"
      }), ", firing events for notifications (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ListingUnderContract"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ListingClosed"
      }), "), and potentially updating search indexes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-the-concept-of-property-tax-escrow-and-title-in-a-real-estate-transaction-context",
      children: "Q4: Explain the concept of property tax, escrow, and title in a real estate transaction context."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These three concepts are central to real estate closings and must be modeled in any platform that handles transactions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Property tax"
          }), ": An annual ad-valorem tax levied by local government (county, city, school district). In transactions, taxes are prorated between buyer and seller at closing. The system must track the annual tax amount, the assessment date, and compute daily prorations. Many platforms integrate with county tax assessor databases for lookups."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Escrow"
          }), ": A neutral third-party arrangement where funds and documents are held until all conditions of the sale are met. In SaaS platforms, escrow tracking monitors deposit amounts, contingencies (inspection, financing, appraisal), and milestone dates. An ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Escrow"
          }), " model might track deposit amount, holder info, contingency deadlines, and release conditions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Title"
          }), ": Legal proof of ownership. Title companies search public records for liens, encumbrances, or ownership disputes before closing. A platform should record the title company, policy number, and issue date. Title defects are a common reason deals fall through → systems may track ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TitleIssue"
          }), " records with resolution status."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Transaction extends Model\n{\n    public function escrow(): HasOne\n    {\n        return $this->hasOne(Escrow::class);\n    }\n\n    public function titleInfo(): HasOne\n    {\n        return $this->hasOne(TitleInfo::class);\n    }\n\n    public function taxProration(): float\n    {\n        $annualTax = $this->property->annual_tax;\n        $closingDate = $this->closing_date;\n        $daysElapsed = now()->diffInDays($closingDate->startOfYear());\n\n        return round(($annualTax / 365) * $daysElapsed, 2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-a-comparable-market-analysis-cma-and-how-would-you-automate-it",
      children: "Q5: What is a Comparable Market Analysis (CMA) and how would you automate it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CMA estimates a property's value by comparing it to recently sold, similar properties in the same area. Automation requires:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify comparables"
        }), " → Query recently sold properties (last 6 months) within a radius (0.5–1 mile) with similar attributes (±20% square footage, ±1 bedroom/bathroom, same property type)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adjust for differences"
        }), " → Apply $/sqft adjustments, feature premiums (pool, garage, renovated kitchen), and location factors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weight comparables"
        }), " → More recent and geographically closer sales get higher weight."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate price range"
        }), " → Output low/average/high estimates with confidence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ValuationService\n{\n    public function generateCma(Property $subject): CmaResult\n    {\n        $comparables = Property::query()\n            ->where('id', '!=', $subject->id)\n            ->whereBetween('sold_at', [now()->subMonths(6), now()])\n            ->whereRaw(\n                \"ST_Distance(location, ST_MakePoint(?, ?)) < ?\",\n                [$subject->longitude, $subject->latitude, 1609] // ~1 mile\n            )\n            ->whereBetween('square_feet', [\n                $subject->square_feet * 0.8,\n                $subject->square_feet * 1.2,\n            ])\n            ->where('property_type', $subject->property_type)\n            ->get();\n\n        $adjustedValues = $comparables->map(fn ($comp) => [\n            'property' => $comp->address,\n            'sold_price' => $comp->sold_price,\n            'adjusted_price' => $comp->sold_price * $this->adjustmentFactor($subject, $comp),\n            'distance' => $this->haversineDistance($subject, $comp),\n        ]);\n\n        $weightedAvg = $adjustedValues->sum(fn ($v) => $v['adjusted_price'] / max($v['distance'], 0.1))\n            / $adjustedValues->sum(fn ($v) => 1 / max($v['distance'], 0.1));\n\n        return new CmaResult(\n            low: $adjustedValues->min('adjusted_price'),\n            average: round($weightedAvg),\n            high: $adjustedValues->max('adjusted_price'),\n            comparablesCount: $comparables->count(),\n            confidence: $this->confidenceScore($comparables),\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-technical-implementation",
      children: "2. Technical Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-build-a-propertylistingagent-that-generates-ai-powered-property-descriptions",
      children: "Q6: How would you build a PropertyListingAgent that generates AI-powered property descriptions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PropertyListingAgent"
      }), " takes raw property data (features, room dimensions, location, images) and produces compelling, search-optimized listing copy. The architecture:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Property;\nuse App\\Models\\Listing;\nuse App\\Services\\AiService;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass PropertyListingAgent\n{\n    public function __construct(\n        protected AiService $ai,\n    ) {}\n\n    public function generateListing(Property $property, array $options = []): array\n    {\n        $features = $this->extractKeyFeatures($property);\n        $description = $this->generateDescription($property, $features);\n        $sellingPoints = $this->generateSellingPoints($property, $features);\n        $suggestedPrice = $this->suggestPrice($property);\n\n        return [\n            'description' => $description,\n            'selling_points' => $sellingPoints,\n            'suggested_price' => $suggestedPrice,\n            'seo_keywords' => $this->extractSeoKeywords($description),\n            'generated_at' => now(),\n        ];\n    }\n\n    protected function extractKeyFeatures(Property $property): array\n    {\n        $features = [];\n\n        if ($property->bedrooms && $property->bathrooms) {\n            $features[] = \"{$property->bedrooms} bed, {$property->bathrooms} bath\";\n        }\n\n        if ($property->square_feet) {\n            $features[] = number_format($property->square_feet) . ' sq ft';\n        }\n\n        if ($property->year_built) {\n            $features[] = \"Built {$property->year_built}\";\n        }\n\n        if ($property->lot_size) {\n            $features[] = number_format($property->lot_size) . ' sq ft lot';\n        }\n\n        if ($property->amenities) {\n            $features = array_merge($features, $property->amenities);\n        }\n\n        return $features;\n    }\n\n    protected function generateDescription(Property $property, array $features): string\n    {\n        $prompt = \"Write a compelling real estate listing description for the following property.\n            Focus on lifestyle benefits, not just features.\n            Highlight what makes this property unique.\n            Keep it between 100-150 words.\n            Address: {$property->address_line_1}, {$property->city}, {$property->state} {$property->zip_code}\n            Features: \" . implode(', ', $features) . \"\n            Neighborhood: {$property->neighborhood}\n            Property Type: {$property->property_type}\";\n\n        return $this->ai->generateText($prompt);\n    }\n\n    protected function generateSellingPoints(Property $property, array $features): array\n    {\n        $prompt = \"List 5 specific selling points for this {$property->property_type} in {$property->city}.\n            Each point should be 10-15 words and emphasize a different aspect\n            (location, layout, upgrades, outdoor space, neighborhood).\n            Features: \" . implode(', ', $features);\n\n        $response = $this->ai->generateText($prompt);\n\n        return explode(\"\\n\", array_filter(explode(\"\\n\", $response), fn ($l) => trim($l)));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The agent should also handle batch generation for multiple listings via queued jobs, and store the AI output in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PropertyListingAiCache"
      }), " or similar to avoid regenerating on every page load."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-would-you-implement-a-valuationpredictionagent-that-estimates-property-values",
      children: "Q7: How would you implement a ValuationPredictionAgent that estimates property values?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A valuation agent combines traditional comparable-sales analysis with AI-driven adjustments and market trend data:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ValuationPredictionAgent\n{\n    public function __construct(\n        protected ValuationService $valuationService,\n        protected AiService $ai,\n        protected MarketDataService $marketData,\n    ) {}\n\n    public function estimateValue(Property $property): ValuationResult\n    {\n        $cma = $this->valuationService->generateCma($property);\n        $marketTrends = $this->marketData->getLocalTrends(\n            $property->zip_code,\n            $property->property_type,\n        );\n\n        $adjustmentFactors = $this->ai->analyzeWithContext(\n            \"Analyze these comparable sales for a property at {$property->address_line_1}.\n            CMA range: \\${$cma->low} to \\${$cma->high}.\n            Market trend: {$marketTrends['quarterly_change']}% quarterly change.\n            Are there any recent market shifts, seasonal effects, or local developments\n            that suggest the price should be adjusted from the raw CMA?\",\n            ['model' => 'gpt-4o', 'temperature' => 0.3],\n        );\n\n        $adjustedEstimate = $this->applyAiAdjustment(\n            $cma->average,\n            $adjustmentFactors,\n            $marketTrends,\n        );\n\n        return new ValuationResult(\n            estimatedValue: $adjustedEstimate,\n            confidenceScore: $cma->confidence,\n            priceRange: ['low' => $cma->low, 'high' => $cma->high],\n            methodology: 'cma_with_ai_adjustment',\n            keyFactors: [\n                'Comps analyzed: ' . $cma->comparablesCount,\n                'Market trend: ' . $marketTrends['quarterly_change'] . '% QoQ',\n                'Adjustment applied: ' . $adjustmentFactors['summary'],\n            ],\n            generatedAt: now(),\n        );\n    }\n\n    protected function applyAiAdjustment(\n        float $baseEstimate,\n        array $factors,\n        array $marketTrends,\n    ): float {\n        $adjustment = 1.0;\n\n        // Market trend adjustment (up to ±5%)\n        $adjustment += $marketTrends['quarterly_change'] / 100 * 0.5;\n\n        // AI-suggested adjustments\n        $adjustment += ($factors['location_premium'] ?? 0);\n        $adjustment += ($factors['condition_adjustment'] ?? 0);\n\n        return round($baseEstimate * $adjustment, -2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key design decision is keeping the AI as an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "adjustment layer"
      }), " on top of a deterministic CMA, not as the primary valuation source. This prevents hallucinated valuations while still capturing soft factors (curb appeal, school district reputation, noise levels) that pure data approaches miss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-build-a-tourschedulingagent-that-automates-property-showing-coordination",
      children: "Q8: How would you build a TourSchedulingAgent that automates property showing coordination?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tour scheduling agent must handle the full lifecycle: availability lookup → slot proposal → confirmation → reminder → feedback:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class TourSchedulingAgent\n{\n    public function requestShowing(\n        Listing $listing,\n        Client $client,\n        string $preferredDate,\n        ?string $preferredTime = null,\n    ): SchedulingResult {\n        $agent = $listing->agent;\n\n        // 1. Check agent availability\n        $slots = $this->getAvailableSlots($agent, $preferredDate);\n\n        if (empty($slots)) {\n            // Agent is fully booked → suggest next 3 available dates\n            $alternatives = $this->findNextAvailableDates($agent, $preferredDate, 3);\n\n            return SchedulingResult::unavailable($alternatives);\n        }\n\n        // 2. If preferred time requested, match it\n        if ($preferredTime) {\n            $matched = $this->matchToSlot($slots, $preferredTime);\n\n            if ($matched) {\n                $showing = $this->bookShowing($listing, $client, $agent, $matched);\n\n                return SchedulingResult::confirmed($showing);\n            }\n        }\n\n        // 3. No match → offer best slots\n        return SchedulingResult::options(\n            slots: $slots,\n            message: 'Please select a time from the available slots below.',\n        );\n    }\n\n    protected function getAvailableSlots(Agent $agent, string $date): array\n    {\n        $existingShowings = Showing::query()\n            ->where('agent_id', $agent->id)\n            ->whereDate('scheduled_at', $date)\n            ->whereIn('status', ['scheduled', 'confirmed'])\n            ->pluck('scheduled_at');\n\n        $businessHours = $this->getBusinessHours($agent, $date);\n        $slotDuration = 30; // minutes\n\n        return collect($businessHours)\n            ->reject(fn ($slot) => $existingShowings->contains(\n                fn ($showing) =>\n                    $showing->between($slot, $slot->copy()->addMinutes($slotDuration))\n            ))\n            ->values()\n            ->toArray();\n    }\n\n    protected function bookShowing(\n        Listing $listing,\n        Client $client,\n        Agent $agent,\n        Carbon $slot,\n    ): Showing {\n        $showing = Showing::create([\n            'listing_id' => $listing->id,\n            'client_id' => $client->id,\n            'agent_id' => $agent->id,\n            'scheduled_at' => $slot,\n            'status' => 'confirmed',\n            'confirmation_token' => Str::random(32),\n        ]);\n\n        // Queue email confirmation + calendar invite + SMS reminder\n        SendShowingConfirmation::dispatch($showing);\n        SendShowingReminder::dispatch($showing)->delay($slot->subHours(2));\n\n        return $showing;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production, integrate with calendar APIs (Google Calendar, Outlook) to reflect agent availability in real time. Add confirmation and cancellation tokens so clients can modify bookings without logging in."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-would-you-implement-a-documentprocessingagent-for-leases-deeds-and-inspection-reports",
      children: "Q9: How would you implement a DocumentProcessingAgent for leases, deeds, and inspection reports?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A document processing agent extracts structured data from uploaded documents using OCR + AI extraction:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class DocumentProcessingAgent\n{\n    public function process(Document $document): ExtractionResult\n    {\n        $text = $this->extractText($document);\n        $schema = $this->detectDocumentType($text);\n\n        $extracted = $this->ai->extractStructuredData(\n            text: $text,\n            schema: $schema,\n            validation: true,\n        );\n\n        $this->storeExtractedData($document, $extracted);\n\n        return new ExtractionResult(\n            documentType: $schema['type'],\n            confidence: $extracted['_confidence'],\n            data: $extracted,\n            warnings: $extracted['_warnings'] ?? [],\n        );\n    }\n\n    protected function detectDocumentType(string $text): array\n    {\n        $type = $this->ai->classify(\n            text: Str::limit($text, 500),\n            categories: [\n                'lease_agreement',\n                'deed',\n                'inspection_report',\n                'mortgage_document',\n                'title_report',\n                'disclosure',\n                'other',\n            ],\n        );\n\n        return match ($type) {\n            'lease_agreement' => [\n                'type' => 'lease_agreement',\n                'fields' => [\n                    'tenant_name' => 'string',\n                    'landlord_name' => 'string',\n                    'property_address' => 'string',\n                    'monthly_rent' => 'number',\n                    'security_deposit' => 'number',\n                    'lease_start_date' => 'date',\n                    'lease_end_date' => 'date',\n                    'pet_policy' => 'string',\n                    'utilities_included' => 'array',\n                ],\n            ],\n            'deed' => [\n                'type' => 'deed',\n                'fields' => [\n                    'grantor' => 'string',\n                    'grantee' => 'string',\n                    'parcel_id' => 'string',\n                    'legal_description' => 'string',\n                    'consideration_amount' => 'number',\n                    'recording_date' => 'date',\n                    'notary_information' => 'string',\n                ],\n            ],\n            'inspection_report' => [\n                'type' => 'inspection_report',\n                'fields' => [\n                    'inspector_name' => 'string',\n                    'inspection_date' => 'date',\n                    'overall_rating' => 'string',\n                    'major_issues' => 'array',\n                    'minor_issues' => 'array',\n                    'estimated_repair_costs' => 'number',\n                    'recommendations' => 'array',\n                ],\n            ],\n            default => throw new UnsupportedDocumentTypeException($type),\n        };\n    }\n\n    protected function extractText(Document $document): string\n    {\n        return match ($document->mime_type) {\n            'application/pdf' => $this->extractPdfText($document->path),\n            'image/jpeg', 'image/png' => $this->performOcr($document->path),\n            'text/plain' => Storage::disk('documents')->get($document->path),\n            default => throw new UnsupportedFileTypeException($document->mime_type),\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Documents should be processed asynchronously via jobs. The extracted data should be stored in a JSON column on the document record, and key fields (e.g., rent amount, lease dates) should be promoted to indexed columns for querying."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-would-you-build-a-leadqualificationagent-for-real-estate-leads",
      children: "Q10: How would you build a LeadQualificationAgent for real estate leads?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lead qualification agent scores and routes prospects based on budget, property preferences, timeline, and behavioral signals:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class LeadQualificationAgent\n{\n    public function qualify(Lead $lead): QualificationResult\n    {\n        $score = $this->calculateScore($lead);\n        $classification = $this->classify($score);\n        $match = $this->findMatchingProperties($lead);\n        $recommendations = $this->generateRecommendations($lead, $classification);\n\n        return new QualificationResult(\n            score: $score,\n            classification: $classification,\n            matchingProperties: $match,\n            recommendations: $recommendations,\n            nextAction: $this->determineNextAction($lead, $classification),\n        );\n    }\n\n    protected function calculateScore(Lead $lead): float\n    {\n        $score = 0.0;\n\n        // Budget clarity (higher is better)\n        if ($lead->min_budget && $lead->max_budget) {\n            $score += 25;\n            $budgetRange = $lead->max_budget - $lead->min_budget;\n            if ($budgetRange < 50000) {\n                $score += 10; // Narrow range = serious\n            }\n        } elseif ($lead->max_budget) {\n            $score += 15;\n        }\n\n        // Timeline urgency\n        $score += match ($lead->timeline) {\n            'immediate' => 30,\n            '1-3_months' => 25,\n            '3-6_months' => 15,\n            'just_browsing' => 5,\n            default => 10,\n        };\n\n        // Property preference specificity\n        if ($lead->preferred_locations) {\n            $score += min(count($lead->preferred_locations) * 5, 15);\n        }\n        if ($lead->min_bedrooms) {\n            $score += 5;\n        }\n        if ($lead->property_type) {\n            $score += 5;\n        }\n\n        // Behavioral signals\n        $score += $this->calculateEngagementScore($lead);\n\n        // Pre-approval = hot lead\n        if ($lead->pre_approved) {\n            $score += 20;\n        }\n\n        return min($score, 100);\n    }\n\n    protected function calculateEngagementScore(Lead $lead): float\n    {\n        $score = 0;\n\n        // Property detail views\n        $propertyViews = $lead->propertyViews()->where('created_at', '>', now()->subWeek())->count();\n        $score += min($propertyViews * 2, 10);\n\n        // Saved searches or favorites\n        $saved = $lead->savedSearches()->count() + $lead->favorites()->count();\n        $score += min($saved * 3, 10);\n\n        // Inquired about specific properties\n        $inquiries = $lead->inquiries()->where('created_at', '>', now()->subWeek())->count();\n        $score += min($inquiries * 5, 15);\n\n        return $score;\n    }\n\n    protected function classify(float $score): string\n    {\n        return match (true) {\n            $score >= 80 => 'hot',\n            $score >= 60 => 'warm',\n            $score >= 35 => 'lukewarm',\n            default => 'cold',\n        };\n    }\n\n    protected function findMatchingProperties(Lead $lead): array\n    {\n        return Property::query()\n            ->where('status', 'active')\n            ->when($lead->min_budget, fn ($q) => $q->where('price', '>=', $lead->min_budget))\n            ->when($lead->max_budget, fn ($q) => $q->where('price', '<=', $lead->max_budget))\n            ->when($lead->min_bedrooms, fn ($q) => $q->where('bedrooms', '>=', $lead->min_bedrooms))\n            ->when($lead->property_type, fn ($q) => $q->where('property_type', $lead->property_type))\n            ->when($lead->preferred_locations,\n                fn ($q) => $q->whereIn('city', $lead->preferred_locations))\n            ->take(5)\n            ->get()\n            ->toArray();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leads should be re-scored on key events (new property view, budget change, inquiry). Queue the qualification job on relevant events via Laravel's event system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-would-you-implement-a-marketanalysisagent-for-neighborhood-trends",
      children: "Q11: How would you implement a MarketAnalysisAgent for neighborhood trends?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A market analysis agent aggregates transaction data and generates intelligence reports:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MarketAnalysisAgent\n{\n    public function generateNeighborhoodReport(string $neighborhood, array $options = []): MarketReport\n    {\n        $properties = Property::where('neighborhood', $neighborhood)\n            ->whereNotNull('sold_at')\n            ->where('sold_at', '>=', now()->subMonths($options['lookback_months'] ?? 12));\n\n        $stats = $this->computeStatistics(clone $properties);\n        $inventory = $this->analyzeInventory($neighborhood);\n        $trends = $this->detectTrends($properties, $stats);\n        $insights = $this->generateInsights($stats, $inventory, $trends);\n\n        return new MarketReport(\n            neighborhood: $neighborhood,\n            period: [\n                'start' => now()->subMonths($options['lookback_months'] ?? 12),\n                'end' => now(),\n            ],\n            statistics: $stats,\n            inventory: $inventory,\n            trends: $trends,\n            insights: $insights,\n            generatedAt: now(),\n        );\n    }\n\n    protected function computeStatistics($query): array\n    {\n        $sold = $query->clone()->where('status', 'closed')->get();\n\n        return [\n            'total_sold' => $sold->count(),\n            'average_price' => round($sold->avg('sold_price'), 2),\n            'median_price' => $this->median($sold->pluck('sold_price')->toArray()),\n            'price_per_sqft' => round($sold->sum('sold_price') / $sold->sum('square_feet'), 2),\n            'average_days_on_market' => round($sold->avg('days_on_market')),\n            'total_volume' => $sold->sum('sold_price'),\n        ];\n    }\n\n    protected function analyzeInventory(string $neighborhood): array\n    {\n        $active = Property::where('neighborhood', $neighborhood)\n            ->where('status', 'active')\n            ->count();\n\n        $underContract = Property::where('neighborhood', $neighborhood)\n            ->whereIn('status', ['under_contract', 'pending'])\n            ->count();\n\n        $monthsOfInventory = $active > 0\n            ? round($active / max($this->monthlySalesRate($neighborhood), 1), 1)\n            : 0;\n\n        return [\n            'active_listings' => $active,\n            'under_contract' => $underContract,\n            'months_of_inventory' => $monthsOfInventory,\n            'market_type' => $monthsOfInventory < 4 ? \"seller's\" : ($monthsOfInventory > 6 ? \"buyer's\" : 'balanced'),\n        ];\n    }\n\n    protected function detectTrends($properties, array $stats): array\n    {\n        $monthly = $properties->clone()\n            ->selectRaw(\"DATE_TRUNC('month', sold_at) as month, COUNT(*) as count, AVG(sold_price) as avg_price\")\n            ->groupBy('month')\n            ->orderBy('month')\n            ->get();\n\n        return [\n            'monthly_trend' => $monthly,\n            'price_trend_percentage' => $this->calculateTrend($monthly->pluck('avg_price')),\n            'volume_trend_percentage' => $this->calculateTrend($monthly->pluck('count')),\n        ];\n    }\n\n    protected function generateInsights(array $stats, array $inventory, array $trends): array\n    {\n        $insights = [];\n\n        $months = $inventory['months_of_inventory'];\n        if ($months < 4) {\n            $insights[] = \"Low inventory ({$months} months) favors sellers → expect multiple offers.\";\n        } elseif ($months > 6) {\n            $insights[] = \"Buyers have leverage with {$months} months of inventory available.\";\n        }\n\n        if ($trends['price_trend_percentage'] > 5) {\n            $insights[] = \"Prices rising {$trends['price_trend_percentage']}% → values appreciating faster than market average.\";\n        } elseif ($trends['price_trend_percentage'] < -5) {\n            $insights[] = \"Prices declining → consider adjusting listing strategy for faster sale.\";\n        }\n\n        return $insights;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pair this agent with a scheduled command (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$schedule->call(...)->weekly()"
      }), ") to pre-generate reports for active neighborhoods and cache them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-would-you-build-a-rentalmanagementagent-for-automating-landlord-operations",
      children: "Q12: How would you build a RentalManagementAgent for automating landlord operations?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A rental management agent handles the end-to-end rental lifecycle: tenant onboarding, rent collection, maintenance, lease renewals, and inspections:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class RentalManagementAgent\n{\n    public function processMonthlyRent(): ProcessingSummary\n    {\n        $charges = 0;\n        $collected = 0;\n        $overdue = [];\n\n        $activeLeases = Lease::where('status', 'active')\n            ->where('next_payment_date', '<=', now())\n            ->with('tenant', 'property')\n            ->get();\n\n        foreach ($activeLeases as $lease) {\n            $payment = $this->attemptAutomaticPayment($lease);\n\n            if ($payment->successful) {\n                $collected += $payment->amount;\n                $lease->update(['last_payment_date' => now()]);\n                Notification::send($lease->tenant, new RentReceipt($lease, $payment));\n            } else {\n                $lease->increment('payment_attempts');\n                $overdue[] = [\n                    'lease_id' => $lease->id,\n                    'tenant' => $lease->tenant->name,\n                    'property' => $lease->property->address_line_1,\n                    'amount' => $lease->monthly_rent,\n                    'days_overdue' => now()->diffInDays($lease->next_payment_date),\n                ];\n            }\n        }\n\n        // Send reminder for overdue accounts\n        if ($overdue) {\n            $this->sendOverdueNotifications($overdue);\n        }\n\n        return new ProcessingSummary(\n            totalCollected: $collected,\n            totalCharges: $activeLeases->sum('monthly_rent'),\n            overdueAccounts: $overdue,\n            processedAt: now(),\n        );\n    }\n\n    public function handleMaintenanceRequest(\n        Tenant $tenant,\n        Property $property,\n        string $issue,\n        string $priority,\n    ): MaintenanceTicket {\n        $ticket = MaintenanceTicket::create([\n            'tenant_id' => $tenant->id,\n            'property_id' => $property->id,\n            'issue' => $issue,\n            'priority' => $priority,\n            'status' => 'submitted',\n            'submitted_at' => now(),\n        ]);\n\n        $this->notifyPropertyManager($ticket);\n\n        if ($priority === 'emergency') {\n            $this->escalateEmergency($ticket);\n        }\n\n        return $ticket;\n    }\n\n    public function processLeaseRenewals(): array\n    {\n        $upcoming = Lease::where('status', 'active')\n            ->whereBetween('end_date', [now(), now()->addMonths(2)])\n            ->get();\n\n        $renewals = [];\n\n        foreach ($upcoming as $lease) {\n            $marketRate = $this->getMarketRate(\n                $lease->property,\n                $lease->property->neighborhood,\n            );\n\n            $suggestedIncrease = $this->calculateRentIncrease($lease->monthly_rent, $marketRate);\n\n            $renewals[] = [\n                'lease' => $lease,\n                'current_rent' => $lease->monthly_rent,\n                'market_rate' => $marketRate,\n                'suggested_new_rent' => $lease->monthly_rent * (1 + $suggestedIncrease),\n                'increase_percentage' => round($suggestedIncrease * 100, 1),\n                'renewal_deadline' => $lease->end_date->subDays(30),\n            ];\n        }\n\n        return $renewals;\n    }\n\n    protected function attemptAutomaticPayment(Lease $lease): PaymentResult\n    {\n        try {\n            $payment = Billing::charge(\n                $lease->tenant->payment_method_id,\n                $lease->monthly_rent * 100, // cents\n                ['description' => \"Rent - {$lease->property->address_line_1} - {$lease->unit_number}\"],\n            );\n\n            return PaymentResult::successful($payment);\n        } catch (PaymentFailedException $e) {\n            Log::warning(\"Rent payment failed for lease {$lease->id}: {$e->getMessage()}\");\n\n            return PaymentResult::failed($e->getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "processMonthlyRent()"
      }), " through a scheduled task (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$schedule->job(...)->dailyAt('06:00')"
      }), ") and couple it with notification channels for receipts, reminders, and escalation alerts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-would-you-implement-a-crm-for-real-estate-agents-using-ai",
      children: "Q13: How would you implement a CRM for real estate agents using AI?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A real estate CRM tracks client interactions, predicts deal health, and recommends strategic follow-ups:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class RealEstateCrmAgent\n{\n    public function getClientTimeline(Client $client): array\n    {\n        return [\n            'properties_viewed' => $client->propertyViews()\n                ->with('property')\n                ->latest()\n                ->take(10)\n                ->get(),\n            'showings_attended' => $client->showings()\n                ->with('listing.property')\n                ->latest()\n                ->take(10)\n                ->get(),\n            'offers_made' => $client->offers()\n                ->with('listing.property')\n                ->latest()\n                ->take(5)\n                ->get(),\n            'agent_meetings' => $client->meetings()\n                ->latest()\n                ->take(10)\n                ->get(),\n            'communications' => $client->communications()\n                ->latest()\n                ->take(20)\n                ->get(),\n        ];\n    }\n\n    public function analyzeClientHealth(Client $client): ClientHealth\n    {\n        $lastActivity = $client->communications()\n            ->latest()\n            ->value('created_at');\n\n        $daysSinceContact = $lastActivity ? now()->diffInDays($lastActivity) : 999;\n\n        $offerCount = $client->offers()->count();\n        $showingCount = $client->showings()->count();\n\n        $healthScore = 100;\n\n        // Score deductions\n        if ($daysSinceContact > 30) {\n            $healthScore -= 30; // Stale relationship\n        } elseif ($daysSinceContact > 14) {\n            $healthScore -= 15;\n        }\n\n        if ($offerCount === 0 && $showingCount > 5) {\n            $healthScore -= 10; // Looking but not committing\n        }\n\n        if ($daysSinceContact > 60 && $offerCount === 0) {\n            $healthScore -= 20; // Likely lost\n        }\n\n        return new ClientHealth(\n            clientId: $client->id,\n            score: max($healthScore, 0),\n            status: $healthScore >= 70 ? 'engaged' : ($healthScore >= 40 ? 'at_risk' : 'stale'),\n            lastContact: $lastActivity,\n            daysSinceContact: $daysSinceContact,\n            recommendedAction: $this->suggestAction($healthScore, $client),\n        );\n    }\n\n    public function suggestFollowUps(Agent $agent): array\n    {\n        $clients = Client::whereHas('agents', fn ($q) => $q->where('agent_id', $agent->id))\n            ->get();\n\n        $suggestions = [];\n\n        foreach ($clients as $client) {\n            $health = $this->analyzeClientHealth($client);\n\n            if ($health->status === 'at_risk' || $health->status === 'stale') {\n                $suggestions[] = [\n                    'client' => $client->name,\n                    'priority' => $health->status === 'stale' ? 'high' : 'medium',\n                    'suggested_action' => $health->recommendedAction,\n                    'context' => \"Last contacted {$health->daysSinceContact} days ago\",\n                ];\n            }\n        }\n\n        // Sort by priority\n        usort($suggestions, fn ($a, $b) => $a['priority'] <=> $b['priority']);\n\n        return $suggestions;\n    }\n\n    public function calculateConversionRate(Agent $agent): array\n    {\n        $totalClients = Client::whereHas('agents', fn ($q) => $q->where('agent_id', $agent->id))\n            ->count();\n\n        $clientsWithOffers = Client::whereHas('agents', fn ($q) => $q->where('agent_id', $agent->id))\n            ->whereHas('offers')\n            ->count();\n\n        $clientsClosed = Client::whereHas('agents', fn ($q) => $q->where('agent_id', $agent->id))\n            ->whereHas('transactions')\n            ->count();\n\n        return [\n            'total_clients' => $totalClients,\n            'offer_conversion_rate' => $totalClients > 0\n                ? round($clientsWithOffers / $totalClients * 100, 1) : 0,\n            'closed_conversion_rate' => $totalClients > 0\n                ? round($clientsClosed / $totalClients * 100, 1) : 0,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Integrate this agent into agent dashboards. Cache health scores and update them incrementally (not daily full-rebuild) via model observers on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Communication"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Showing"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Offer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-architecture--design",
      children: "3. Architecture & Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-describe-the-architecture-of-a-property-listing-platform-built-with-laravel",
      children: "Q14: Describe the architecture of a property listing platform built with Laravel."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production real estate platform typically follows a layered architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────┐\n│                  Presentation Layer                  │\n│  Web (Blade/Inertia)  │  Mobile API  │  Public API  │\n├─────────────────────────────────────────────────────┤\n│                   Application Layer                  │\n│  Agents (Listing, Valuation, Tour, Document, Lead…) │\n│  Services (Valuation, Search, MLS Sync, Pricing)    │\n│  Jobs (Sync MLS, Generate Reports, Send Reminders)  │\n│  Events (ListingCreated, OfferAccepted, ShowingBooked)│\n├─────────────────────────────────────────────────────┤\n│                    Domain Layer                      │\n│  Models (Property, Listing, Agent, Client, Showing)  │\n│  Enums (PropertyType, ListingStatus, LeadScore)      │\n│  Value Objects (Address, Price, GeoLocation)         │\n│  Domain Events & Listeners                          │\n├─────────────────────────────────────────────────────┤\n│                 Infrastructure Layer                 │\n│  Database (PostgreSQL + PostGIS)                    │\n│  Cache (Redis → listings, search, session)          │\n│  Search (Meilisearch/Algolia for full-text search)  │\n│  Queue (Redis/SQS → MLS sync, notifications)         │\n│  Storage (S3 → images, documents, virtual tours)    │\n│  AI SDK (Anthropic/OpenAI for agents)               │\n│  Mapping (Mapbox/Google Maps → geocoding, search)   │\n└─────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key architectural decisions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search layer"
        }), ": Use a dedicated search engine (Meilisearch, Typesense, Algolia) for property search → never query the DB directly for user-facing search. Sync via Laravel Scout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLS sync"
        }), ": Separate ingestion pipeline using queued jobs. Process incremental updates, not full re-imports. Version MLS data with a hash of all fields to detect actual changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image pipeline"
        }), ": Accept uploads via direct-to-S3 presigned URLs. Generate multiple variants (thumbnail, medium, large) via queued job. Use WebP format with AVIF fallback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching strategy"
        }), ": Cache listing detail pages (cache keys by listing ID, invalidate on update). Cache neighborhood market reports (TTL: 1 day). Never cache search result counts or availability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Geolocation"
        }), ": Store coordinates as PostGIS geography type. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ST_DWithin"
        }), " for proximity queries. Geocode addresses on property creation via a job."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-would-you-handle-property-search-at-scale",
      children: "Q15: How would you handle property search at scale?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property search at scale requires a multi-layered strategy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 1: Search Engine (Elasticsearch/Meilisearch/Algolia)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Don't use MySQL for full-text property search. Dedicated search engines handle faceted search, geolocation filtering, and typo-tolerance efficiently:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Laravel Scout with Meilisearch\nclass Property extends Model\n{\n    use Searchable;\n\n    public function toSearchableArray(): array\n    {\n        return [\n            'id' => $this->id,\n            'address' => $this->address_line_1,\n            'city' => $this->city,\n            'state' => $this->state,\n            'zip_code' => $this->zip_code,\n            'neighborhood' => $this->neighborhood,\n            'price' => $this->currentListing?->price,\n            'bedrooms' => $this->bedrooms,\n            'bathrooms' => $this->bathrooms,\n            'square_feet' => $this->square_feet,\n            'property_type' => $this->property_type,\n            'status' => $this->status,\n            'description' => $this->description,\n            'features' => $this->features,\n            'year_built' => $this->year_built,\n            'lot_size' => $this->lot_size,\n            'amenities' => $this->amenities,\n            '_geo' => [\n                'lat' => $this->latitude,\n                'lng' => $this->longitude,\n            ],\n        ];\n    }\n}\n\n// Search query\n$results = Property::search($query)\n    ->where('status', 'active')\n    ->where('bedrooms', '>=', $minBeds)\n    ->where('price', '<=', $maxPrice)\n    ->whereIn('property_type', $types)\n    ->whereAround('_geo', ['lat' => 37.77, 'lng' => -122.42], 10) // 10km radius\n    ->orderBy('price', 'asc')\n    ->paginate(20);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 2: Caching"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache expensive aggregations (facet counts, price ranges) and rebuild them asynchronously when data changes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Cache facet data for search filters\n$facets = Cache::remember(\"search-facets:{$city}\", 3600, function () use ($city) {\n    return [\n        'price_min' => Property::where('city', $city)->min('currentListing.price'),\n        'price_max' => Property::where('city', $city)->max('currentListing.price'),\n        'property_types' => Property::where('city', $city)\n            ->distinct('property_type')->pluck('property_type'),\n        'bedroom_options' => Property::where('city', $city)\n            ->distinct('bedrooms')->orderBy('bedrooms')->pluck('bedrooms'),\n    ];\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 3: Query Optimization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use compound indexes on filtered columns (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INDEX(status, city, property_type, price)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition large tables by region or status (active vs. sold)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use database read replicas for search queries while writes go to the primary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement cursor-based pagination for large result sets instead of offset pagination"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 4: Degradation Strategy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Under heavy load, degrade gracefully:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable faceted counts (show counts only on hover or not at all)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove typo-tolerance (exact match only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fall back to simpler DB queries if search engine is down"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serve cached \"popular searches\" results for common queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-would-you-integrate-geolocation-and-mapping-into-a-real-estate-application",
      children: "Q16: How would you integrate geolocation and mapping into a real estate application?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real estate apps heavily depend on location features. Here's a comprehensive approach:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Geocoding addresses on save:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class GeocodeAddress implements ShouldQueue\n{\n    public function handle(Property $property): void\n    {\n        $address = \"{$property->address_line_1}, {$property->city}, {$property->state} {$property->zip_code}\";\n\n        $response = Http::withKey(config('services.mapbox.token'))\n            ->get('https://api.mapbox.com/geocoding/v5/mapbox.places/' . urlencode($address) . '.json', [\n                'limit' => 1,\n            ]);\n\n        if ($response->successful() && $feature = $response->json('features.0')) {\n            [$lng, $lat] = $feature['center'];\n\n            $property->updateQuietly([\n                'latitude' => $lat,\n                'longitude' => $lng,\n                'neighborhood' => $this->extractNeighborhood($feature),\n                'ai_enriched_data' => array_merge(\n                    $property->ai_enriched_data ?? [],\n                    ['geocoding_accuracy' => $feature['relevance']],\n                ),\n            ]);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proximity search with PostGIS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Install PostGIS extension\nDB::statement('CREATE EXTENSION IF NOT EXISTS postgis');\n\n// Add spatial column via migration\nSchema::table('properties', function (Blueprint $table) {\n    DB::statement('ALTER TABLE properties ADD COLUMN location geography(Point, 4326)');\n    DB::statement(\n        'UPDATE properties SET location = ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)'\n    );\n    DB::statement('CREATE INDEX properties_location_idx ON properties USING GIST (location)');\n});\n\n// Proximity query\n$nearby = Property::query()\n    ->whereRaw(\n        \"ST_DWithin(location, ST_SetSRID(ST_MakePoint(?, ?), 4326), ?)\",\n        [$longitude, $latitude, $radiusInMeters]\n    )\n    ->where('status', 'active')\n    ->orderByRaw(\n        \"location <-> ST_SetSRID(ST_MakePoint(?, ?), 4326)\",\n        [$longitude, $latitude]\n    )\n    ->take(20)\n    ->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Map integration considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend"
        }), ": Use Mapbox GL JS (preferred for real estate → better styling, 3D buildings) or Google Maps. Display properties as clustered markers at zoom levels < 14, switching to individual markers at higher zoom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image overlays"
        }), ": Support parcel boundaries, school district maps, flood zones, and walkability scores as vector tile layers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drive time polygons"
        }), ": Use Mapbox Isochrone API to show \"15-minute drive radius\" from a property, useful for commute-based searches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Street view"
        }), ": Embed Google Street View or Mapbox 360 imagery on listing detail pages. Generate automatically from the property's coordinates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance"
        }), ": Limit markers shown simultaneously (200 max). Use clustering. Lazy-load marker data as the user pans."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-would-you-design-the-mls-data-sync-pipeline-for-reliability-and-scale",
      children: "Q17: How would you design the MLS data sync pipeline for reliability and scale?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The MLS sync pipeline must handle regional differences, rate limits, incremental updates, and error recovery. Design:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MlsSyncPipeline\n{\n    // Step 1: Schedule per-MLS sync jobs\n    public function scheduleSyncs(): void\n    {\n        MlsFeed::where('active', true)->each(function (MlsFeed $mls) {\n            $frequency = match ($mls->sync_frequency) {\n                'realtime' => 5,    // minutes\n                'frequent' => 15,\n                'hourly' => 60,\n                'daily' => 1440,\n                default => 60,\n            };\n\n            SyncMlsData::dispatch($mls)\n                ->onQueue('mls-sync')\n                ->delay(now()->addMinutes($frequency * rand(1, 3))); // jitter\n        });\n    }\n\n    // Step 2: Process incremental updates\n    public function sync(MlsFeed $mls): SyncResult\n    {\n        $client = new MlsClient($mls->api_endpoint, $mls->credentials);\n\n        $lastSync = MlsSyncLog::where('mls_feed_id', $mls->id)\n            ->latest()\n            ->value('synced_at');\n\n        $changes = $client->getChangesSince($lastSync);\n\n        $processed = ['added' => 0, 'updated' => 0, 'deleted' => 0, 'errors' => []];\n\n        foreach ($changes as $change) {\n            try {\n                DB::transaction(function () use ($change, &$processed, $mls) {\n                    match ($change['action']) {\n                        'add' => $this->handleAdd($change['data'], $mls),\n                        'modify' => $this->handleUpdate($change['data'], $mls),\n                        'delete' => $this->handleDelete($change['id'], $mls),\n                    };\n                });\n                $processed[$change['action'] === 'delete' ? 'deleted' : 'added']++;\n            } catch (Throwable $e) {\n                $processed['errors'][] = [\n                    'mls_id' => $change['id'],\n                    'action' => $change['action'],\n                    'error' => $e->getMessage(),\n                ];\n                Log::error(\"MLS sync error on {$mls->name}: {$e->getMessage()}\");\n            }\n        }\n\n        MlsSyncLog::create([\n            'mls_feed_id' => $mls->id,\n            'synced_at' => now(),\n            'records_processed' => count($changes),\n            'records_added' => $processed['added'],\n            'records_updated' => $processed['updated'],\n            'records_deleted' => $processed['deleted'],\n            'errors' => $processed['errors'],\n            'status' => empty($processed['errors']) ? 'success' : 'partial',\n        ]);\n\n        return new SyncResult($processed);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key reliability patterns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transactional batches"
        }), ": Process each MLS change in its own DB transaction. One failure doesn't roll back the entire batch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead letter queue"
        }), ": After 3 retries, move failed records to a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mls_sync_errors"
        }), " table for manual review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limiting"
        }), ": Use Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cache::lock()"
        }), " per MLS feed to prevent overlapping syncs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotency"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mls_id"
        }), " as the unique identifier. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updateOrCreate"
        }), " prevents duplicates even if the same record arrives twice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health monitoring"
        }), ": Track sync lag (time since last successful sync). Alert if any MLS feed hasn't synced in 2x its expected interval."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-would-you-design-the-photo-and-virtual-tour-storage-pipeline-for-real-estate-listings",
      children: "Q18: How would you design the photo and virtual tour storage pipeline for real estate listings?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property media has specific requirements: high resolution, multiple variants, CDN delivery, EXIF stripping, and integration with MLS photo rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Upload controller\nclass PropertyPhotoController extends Controller\n{\n    public function store(UploadPhotoRequest $request, Property $property): JsonResponse\n    {\n        $file = $request->file('photo');\n\n        // Validate → real estate photos need high resolution\n        $request->validate([\n            'photo' => [\n                'required', 'image', 'mimes:jpeg,webp',\n                'dimensions:min_width=1024,min_height=768',\n                'max:15360', // 15MB\n            ],\n        ]);\n\n        $photo = $property->photos()->create([\n            'original_name' => $file->getClientOriginalName(),\n            'sort_order' => $property->photos()->max('sort_order') + 1,\n            'disk' => 's3',\n        ]);\n\n        // Dispatch variant generation as a job\n        ProcessPropertyPhoto::dispatch($photo, $file);\n\n        return response()->json($photo, 201);\n    }\n}\n\n// Job to generate variants\nclass ProcessPropertyPhoto implements ShouldQueue\n{\n    public function handle(): void\n    {\n        $paths = [];\n\n        // Original with stripped EXIF\n        $paths['original'] = $this->image->stripExif()->save($this->mediaPath('original'));\n\n        // Variants\n        $paths['large'] = $this->image->resize(1920, 1080)->toWebp(85)->save();\n        $paths['medium'] = $this->image->resize(800, 600)->toWebp(80)->save();\n        $paths['thumbnail'] = $this->image->crop(400, 300)->toWebp(75)->save();\n\n        // Upload all to S3\n        foreach ($paths as $variant => $localPath) {\n            Storage::disk('s3')->put(\n                \"properties/{$this->photo->property_id}/{$variant}/{$this->photo->id}.webp\",\n                file_get_contents($localPath),\n                ['CacheControl' => 'public, max-age=31536000'],\n            );\n        }\n\n        // Store URLs\n        $this->photo->update([\n            'urls' => [\n                'thumbnail' => Storage::disk('s3')->url(\"properties/{$this->photo->property_id}/thumbnail/{$this->photo->id}.webp\"),\n                'medium' => Storage::disk('s3')->url(\"properties/{$this->photo->property_id}/medium/{$this->photo->id}.webp\"),\n                'large' => Storage::disk('s3')->url(\"properties/{$this->photo->property_id}/large/{$this->photo->id}.webp\"),\n                'original' => Storage::disk('s3')->url(\"properties/{$this->photo->property_id}/original/{$this->photo->id}.webp\"),\n            ],\n            'processed_at' => now(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For virtual tours, store Matterport or Kuula embed URLs directly on the property. For 3D walkthroughs generated from photos, integrate with a service like Matterport or Zillow 3D Home, store the embed code, and render via an iframe on the listing page."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-behavioral--scenario",
      children: "4. Behavioral & Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-walk-me-through-designing-an-ai-powered-real-estate-platform-from-scratch",
      children: "Q19: Walk me through designing an AI-powered real estate platform from scratch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Understand the core workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The platform connects buyers/renters with properties via agents. The primary flow: search → discover → inquire → tour → offer → close. For agents: list properties → manage leads → schedule tours → process documents → close deals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Identify AI augmentation points"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map AI agents to each workflow step:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI Agent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RecommendationAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personalized property ranking based on user behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListingAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-generated descriptions, photo enhancement, highlight extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inquire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LeadQualificationAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lead scoring, routing, auto-response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TourSchedulingAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability coordination, reminders, feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ValuationAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMA generation, offer strategy recommendations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DocumentProcessingAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lease/deed/inspection parsing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Architecture decisions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monolith first"
        }), " → Real estate platforms have deeply interconnected data. A modular monolith with clear bounded contexts (Listings, Agents, Clients, Transactions) is the right starting point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL with PostGIS"
        }), " → Spatial queries, JSON columns for flexible MLS fields, full-text search fallback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scout + Meilisearch"
        }), " for the primary search experience."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queue-backed agents"
        }), " → All AI operations run asynchronously. A listing's description is generated after creation, not blocking the create request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-driven sync"
        }), " → When a property changes status, fire events that cascade through caches, search indexes, and notifications."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Data model foundation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Core tables\nproperties          -- Physical asset data (address, features, coordinates)\nlistings            -- Market presence (price, status, agent_id, mls_id)\nagents              -- Licensed professionals\nclients             -- Buyers, sellers, renters (polymorphic via client_type)\nshowing             -- Tour events (property, client, agent, time, status)\noffer               -- Purchase/lease proposals\ntransaction         -- Closed deals\ndocument            -- Uploaded files (polymorphic → attachable to any entity)\ncommunication       -- Email, SMS, call logs (polymorphic)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: AI agent orchestration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use Laravel's AI SDK to create specialized agents. Orchestrate them via a supervisor agent or event-driven pipeline:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Event-driven: when a property is created, start the listing pipeline\nclass PropertyCreated\n{\n    public function handle(Property $property): void\n    {\n        Pipeline::send($property)\n            ->through([\n                GenerateListingDescription::class,\n                ExtractKeyFeatures::class,\n                SuggestListingPrice::class,\n                GeocodeAddress::class,\n            ])\n            ->then(fn () => NotifyAgentOfNewListing::dispatch($property));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Scalability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MLS sync runs as a separate worker with its own queue (to avoid blocking user-facing operations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image processing is queued with high latency tolerance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search index updates are near-real-time via Scout's queue integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thumbnail and listing detail pages are cached in Redis with smart invalidation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-would-you-implement-property-recommendation-for-a-real-estate-platform",
      children: "Q20: How would you implement property recommendation for a real estate platform?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property recommendations need to balance user preferences, behavioral signals, and market dynamics. A hybrid approach works best:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 1: Collaborative Filtering (User-based)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"Users who viewed this property also viewed...\" → compute similarity from viewing patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PropertyRecommendationEngine\n{\n    public function getSimilarProperties(Property $property, int $limit = 6): array\n    {\n        // Users who viewed this property also viewed these\n        $coViewedIds = DB::table('property_views')\n            ->whereIn('session_id', function ($q) use ($property) {\n                $q->select('session_id')\n                    ->from('property_views')\n                    ->where('property_id', $property->id)\n                    ->where('created_at', '>', now()->subDays(30));\n            })\n            ->where('property_id', '!=', $property->id)\n            ->select('property_id', DB::raw('COUNT(*) as co_occurrence'))\n            ->groupBy('property_id')\n            ->orderByDesc('co_occurrence')\n            ->limit($limit)\n            ->pluck('property_id');\n\n        return Property::whereIn('id', $coViewedIds)\n            ->where('status', 'active')\n            ->get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 2: Content-based Filtering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Match properties by shared attributes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function getContentBasedRecommendations(Client $client): Collection\n{\n    $preferences = $client->preferences;\n\n    return Property::query()\n        ->where('status', 'active')\n        ->whereNotIn('id', $client->dismissedProperties()->pluck('property_id'))\n        ->when($preferences->locations, fn ($q, $locs) => $q->whereIn('city', $locs))\n        ->when($preferences->min_bedrooms, fn ($q, $b) => $q->where('bedrooms', '>=', $b))\n        ->when($preferences->max_price, fn ($q, $p) => $q->whereRelation('currentListing', 'price', '<=', $p))\n        ->when($preferences->property_types, fn ($q, $types) => $q->whereIn('property_type', $types))\n        ->orderByDesc('created_at')\n        ->take(10)\n        ->get();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 3: AI-Weighted Personalization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use AI to dynamically weigh features based on user behavior:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function getPersonalizedRecommendations(Client $client): Collection\n{\n    $candidates = $this->getCandidateProperties($client);\n\n    $ranked = $this->ai->rank(\n        items: $candidates->map(fn ($p) => [\n            'id' => $p->id,\n            'price' => $p->currentListing->price,\n            'bedrooms' => $p->bedrooms,\n            'bathrooms' => $p->bathrooms,\n            'square_feet' => $p->square_feet,\n            'neighborhood' => $p->neighborhood,\n            'features' => $p->features,\n            'days_on_market' => $p->currentListing->days_on_market,\n        ])->toArray(),\n        context: [\n            'recently_viewed' => $client->recentlyViewedProperties()->take(5)->toArray(),\n            'saved_searches' => $client->savedSearches()->toArray(),\n            'budget' => $client->budget_range,\n        ],\n        criteria: 'Relevance for this specific buyer → consider their\n            viewing history, saved searches, and stated preferences.\n            De-prioritize properties they have already dismissed.\n            Boost recently listed and price-reduced properties.',\n    );\n\n    return Property::whereIn('id', array_column($ranked, 'id'))\n        ->orderByRaw('FIELD(id,' . implode(',', array_column($ranked, 'id')) . ')')\n        ->get();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine all three approaches with a weighted blend (50% personalized AI, 30% content-based, 20% collaborative) and A/B test the ratios."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-describe-how-youd-build-a-property-management-saas-using-laravel",
      children: "Q21: Describe how you'd build a property management SaaS using Laravel."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A property management SaaS (PMS) serves landlords and property managers. Key modules:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Portfolio Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Landlords manage their properties (multi-unit buildings, single-family rentals, commercial). Each property has units with floor plans, rent rolls, and lease history."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Data model\nclass Portfolio extends Model\n{\n    public function properties(): HasMany { return $this->hasMany(Property::class); }\n}\n\nclass Unit extends Model\n{\n    public function property(): BelongsTo { return $this->belongsTo(Property::class); }\n    public function currentLease(): HasOne { return $this->hasOne(Lease::class)->where('status', 'active'); }\n    public function leaseHistory(): HasMany { return $this->hasMany(Lease::class); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Financial Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Track rent collection, security deposits, late fees, owner disbursements, and tax reporting:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated monthly rent charges (queued job on the 1st)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACH/credit card payment processing via Laravel Cashier or a dedicated processor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Late fee schedules (flat fee or percentage after grace period)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owner statements showing income, expenses, and net proceeds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with QuickBooks/Xero via API for accounting sync"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Maintenance Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tenants submit maintenance requests. The system triages and routes to vendors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MaintenanceRequest extends Model\n{\n    public function escalate(): void\n    {\n        if ($this->priority === 'emergency' && $this->responded_within !== null\n            && $this->responded_within->greaterThan(now()->subMinutes(30))) {\n            // Escalate to property manager\n            Notification::route('sms', $this->property->manager->phone)\n                ->notify(new EmergencyEscalation($this));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Document Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Store leases, addendums, inspection reports, and HOA documents. Auto-generate lease renewal documents using AI. Send document expiry alerts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Tenant Portal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A self-service portal (built with Inertia + Vue/React) where tenants:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View lease details and payment history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submit maintenance requests with photos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upload documents (renters insurance, pet records)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive announcements from management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Multi-tenancy Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a SaaS PMS, use Laravel's native multi-tenancy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Using Laravel Pennant or a custom tenant-scoping approach\nclass TenantScope implements Scope\n{\n    public function apply(Builder $builder, Model $model): void\n    {\n        $builder->where('tenant_id', app('currentTenant')->id);\n    }\n}\n\n// Each tenant gets isolated data with shared schema\n// Database per tenant for larger customers, shared DB with tenant_id for SMB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Compliance & Reporting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate rent rolls, vacancy reports, and financial statements. Track fair housing compliance. Maintain audit logs for all tenant interactions and financial transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-you-discover-that-property-search-queries-are-timing-out-during-peak-hours-walk-through-your-debugging-and-solution-process",
      children: "Q22: You discover that property search queries are timing out during peak hours. Walk through your debugging and solution process."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Profile the queries"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Enable query logging temporarily\nDB::enableQueryLog();\n\n// Run the slow search\n$results = Property::search($request->query)\n    ->where('status', 'active')\n    ->orderBy('price')\n    ->paginate(20);\n\n// Examine logged queries\n$log = DB::getQueryLog();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most likely issues: full table scans on unindexed columns, N+1 queries on listing details, pagination with high offsets."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Identify the bottleneck"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check Laravel Telescope or Pulse for slow queries. Common culprits:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ORDER BY RAND()"
        }), " for featured listings → switch to a pre-cached random order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "COUNT(*)"
        }), " on the full result set for pagination → use approximate counts or cache them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE city LIKE '%query%'"
        }), " causing full scans → use full-text indexes or Meilisearch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Loading all relations on every result → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "->with()"
        }), " only when rendering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Immediate fixes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// 1. Add database indexes\nSchema::table('listings', function (Blueprint $table) {\n    $table->index(['status', 'price']);\n    $table->index(['city', 'status', 'property_type']);\n});\n\n// 2. Replace offset pagination with cursor pagination\n$results = Property::orderBy('id')->cursorPaginate(20);\n\n// 3. Cache expensive aggregations\n$totalCount = Cache::remember(\"search-count:{$cacheKey}\", 300, function () {\n    return Property::where('status', 'active')->count();\n});\n\n// 4. Eager load only what the list view needs\nProperty::search($query)\n    ->with(['currentListing' => fn ($q) => $q->select('id', 'property_id', 'price', 'status')])\n    ->with('primaryPhoto');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Long-term solution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move property search to Meilisearch or Typesense → dedicated search engines handle filtering, faceting, and sorting at scale without database overhead. Use Laravel Scout for the integration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/scout.php\nreturn [\n    'driver' => env('SCOUT_DRIVER', 'meilisearch'),\n    'queue' => true, // Keep index updates async\n];\n\n// Model configuration\nclass Property extends Model\n{\n    use Searchable;\n\n    public function shouldBeSearchable(): bool\n    {\n        return $this->status === 'active' || $this->status === 'coming_soon';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-a-client-reports-that-the-ai-generated-property-descriptions-sometimes-include-fabricated-features-eg-granite-countertops-when-there-are-none-how-do-you-handle-this",
      children: "Q23: A client reports that the AI-generated property descriptions sometimes include fabricated features (e.g., \"granite countertops\" when there are none). How do you handle this?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a classic AI hallucination problem, especially dangerous in real estate where misrepresentation has legal liability."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Structured input with explicit constraints"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "protected function generateDescription(Property $property): string\n{\n    $prompt = \"Write a property description using ONLY the features listed below.\n        DO NOT invent or assume any features not explicitly provided.\n        If you are unsure about a feature, omit it entirely.\n        VERIFIED features: \" . json_encode($property->features) . \"\n        Square footage verified: {$property->square_feet}\n        Bedrooms/bathrooms verified: {$property->bedrooms}/{$property->bathrooms}\n        Year built verified: {$property->year_built}\n        DO NOT mention: granite, stainless steel, hardwood, or any finish materials\n        unless they appear in the verified features list above.\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. AI output validation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ListingOutputValidator\n{\n    public function validate(string $description, Property $property): ValidationResult\n    {\n        $claimedFeatures = $this->extractClaimedFeatures($description);\n        $verifiedFeatures = array_merge(\n            $property->features ?? [],\n            [\"{$property->bedrooms} bedroom\", \"{$property->bathrooms} bathroom\"],\n        );\n\n        $hallucinations = [];\n\n        foreach ($claimedFeatures as $feature) {\n            if (!$this->isVerified($feature, $verifiedFeatures)) {\n                $hallucinations[] = $feature;\n            }\n        }\n\n        return new ValidationResult(\n            passed: empty($hallucinations),\n            hallucinations: $hallucinations,\n            cleanedDescription: $this->removeHallucinations($description, $hallucinations),\n        );\n    }\n\n    protected function extractClaimedFeatures(string $description): array\n    {\n        // Use AI to extract all factual claims from the description\n        return $this->ai->extractJson(\n            \"Extract every specific feature claimed in this real estate description.\n            Return as a JSON array of strings. Only include verifiable claims.\",\n            $description,\n        );\n    }\n\n    protected function isVerified(string $claimed, array $verified): bool\n    {\n        foreach ($verified as $v) {\n            similar_text(strtolower($claimed), strtolower($v), $percent);\n            if ($percent > 80) {\n                return true;\n            }\n        }\n        return false;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Human review requirement"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For listing descriptions that will be published, require a \"draft\" status. Generate the description, flag it for agent review, and only activate it after the agent clicks \"Approve\". Track description revisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Liability disclaimer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Display a disclaimer on every listing: \"Information deemed reliable but not guaranteed. Buyer to verify all information.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-design-a-system-for-real-time-property-price-change-alerts",
      children: "Q24: Design a system for real-time property price change alerts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users want to know immediately when a property they're watching changes price. Design:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// 1. Event when price changes\nclass PriceChanged\n{\n    public function __construct(\n        public Listing $listing,\n        public float $oldPrice,\n        public float $newPrice,\n    ) {}\n}\n\n// 2. Listener that processes alerts\nclass SendPriceChangeAlerts implements ShouldQueue\n{\n    public function handle(PriceChanged $event): void\n    {\n        $watchers = WatchedProperty::where('listing_id', $event->listing->id)\n            ->where('notify_on_price_change', true)\n            ->get();\n\n        foreach ($watchers as $watcher) {\n            $notification = new PriceChangeNotification(\n                listing: $event->listing,\n                oldPrice: $event->oldPrice,\n                newPrice: $event->newPrice,\n                changeType: $event->newPrice < $event->oldPrice ? 'decrease' : 'increase',\n                changePercentage: round(\n                    abs($event->newPrice - $event->oldPrice) / $event->oldPrice * 100, 1\n                ),\n            );\n\n            $watcher->user->notify($notification);\n        }\n    }\n}\n\n// 3. Rate-limit notifications (don't spam for tiny changes)\npublic function shouldNotify(float $oldPrice, float $newPrice): bool\n{\n    $change = abs($newPrice - $oldPrice);\n    $percent = $change / $oldPrice;\n\n    // Always notify for drops > 5%\n    if ($newPrice < $oldPrice && $percent > 0.05) {\n        return true;\n    }\n\n    // Notify for any change > 10%\n    if ($percent > 0.10) {\n        return true;\n    }\n\n    // Notify for changes > $10,000 regardless of percentage\n    if ($change > 10000) {\n        return true;\n    }\n\n    return false;\n}\n\n// 4. Implement notification preferences per user\n// - Immediate (email + push)\n// - Daily digest\n// - Weekly summary\n\n// 5. Queue for performance → don't block the price update\nclass PriceChangedListener\n{\n    public function handle(PriceChanged $event): void\n    {\n        // Send immediately for significant drops\n        if ($event->newPrice < $event->oldPrice\n            && $this->isSignificantDrop($event->oldPrice, $event->newPrice)) {\n            SendPriceChangeAlerts::dispatch($event)\n                ->onQueue('high-priority-notifications');\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Scale considerations: For popular properties with thousands of watchers, batch notifications. Use Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Notification::send()"
      }), " which handles bulk sending efficiently. For real-time delivery, use Laravel Reverb to push notifications to the browser without polling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-how-would-you-implement-a-smart-search-feature-that-understands-natural-language-queries-like-3-bedroom-condo-downtown-under-400k-with-parking",
      children: "Q25: How would you implement a smart search feature that understands natural language queries like \"3-bedroom condo downtown under $400k with parking\"?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SmartPropertySearch\n{\n    public function search(string $query): SearchResult\n    {\n        // Phase 1: Extract structured filters from natural language\n        $filters = $this->ai->extractJson(\n            \"Extract real estate search filters from this query. Return a JSON object.\",\n            $query,\n            schema: [\n                'type' => 'object',\n                'properties' => [\n                    'min_bedrooms' => ['type' => 'integer', 'nullable' => true],\n                    'property_type' => ['type' => 'string', 'nullable' => true],\n                    'location' => ['type' => 'string', 'nullable' => true],\n                    'max_price' => ['type' => 'number', 'nullable' => true],\n                    'features' => ['type' => 'array', 'items' => ['type' => 'string']],\n                    'min_square_feet' => ['type' => 'number', 'nullable' => true],\n                    'keywords' => ['type' => 'string', 'nullable' => true],\n                ],\n            ],\n        );\n\n        // Phase 2: Execute filtered search\n        $results = Property::search($filters['keywords'] ?? $query)\n            ->when($filters['min_bedrooms'] ?? null,\n                fn ($q, $v) => $q->where('bedrooms', '>=', $v))\n            ->when($filters['property_type'] ?? null,\n                fn ($q, $v) => $q->where('property_type', $v))\n            ->when($filters['max_price'] ?? null,\n                fn ($q, $v) => $q->where('price', '<=', $v))\n            ->when($filters['location'] ?? null,\n                fn ($q, $v) => $q->where('city', $v)->orWhere('neighborhood', $v))\n            ->when(!empty($filters['features'] ?? []),\n                fn ($q) => $q->whereJsonContains('features', $filters['features']))\n            ->paginate(20);\n\n        // Phase 3: Generate human-readable summary of the search\n        $summary = $this->ai->generateText(\n            \"Summarize these home search results in one sentence:\n            Found {$results->total()} properties matching '{$query}'.\n            Price range: \\${$results->min('price')} - \\${$results->max('price')}.\",\n        );\n\n        return new SearchResult(\n            filters: $filters,\n            results: $results,\n            summary: $summary,\n            suggestedRefinements: $this->generateRefinements($filters, $results),\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For performance, cache the NL→filter mapping for common queries. For ambiguous queries (\"downtown\"), prompt the user for clarification or use a geographic hierarchy (neighborhood → city → county) with the most specific match winning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key real estate concepts for interview preparation."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Property Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List and manage properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich metadata + media + location data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buyer Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match buyers to suitable properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preference-based filtering + scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Price Valuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimate property market value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparable sales + regression analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle offers, contracts, closing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offer workflow + document management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Market Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze real estate trends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical data + predictive insights"
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
        }), " Quick reference for real estate interview topics."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "RE Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property, Buyer, Listing, Offer, Transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Property Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type, size, location, price, amenities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matching Criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Price range, location, size, features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valuation Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparables, income approach, cost approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offer -> Acceptance -> Contingencies -> Closing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Property Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listing management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detail completeness vs usability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buyer Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property recommendations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevance vs serendipity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Price estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy vs data freshness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deal management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security vs convenience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Market Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trend identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth vs timeliness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your real estate interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What data does a property listing typically include?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Only price"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Type, size, location, price, amenities, media"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Only address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only photos"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) Type, size, location, price, amenities, media</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What is the primary valuation method for residential properties?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Cost approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Comparable sales analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Income approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Tax assessment"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) Comparable sales analysis</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " What is the first step in a real estate transaction workflow?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Closing"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Offer submission"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Inspection"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Financing"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) Offer submission</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What does buyer matching optimize for?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Lowest price"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Preference-based property scoring"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Largest property size"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Newest listings"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                    children: ["Answer</summary>B) Preference-based property scoring</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "concept-comparison-1",
                      children: "Concept Comparison"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Compare key real estate concepts for interview preparation."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Concept"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Purpose"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Feature"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Property Management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "List and manage properties"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Rich metadata + media + location data"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Buyer Matching"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Match buyers to suitable properties"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Preference-based filtering + scoring"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Price Valuation"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Estimate property market value"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Comparable sales + regression analysis"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Transaction Mgmt"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Handle offers, contracts, closing"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Offer workflow + document management"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Market Analysis"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Analyze real estate trends"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Historical data + predictive insights"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "quick-reference-1",
                      children: "Quick Reference"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Quick reference for real estate interview topics."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                            children: "RE Models"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Property, Buyer, Listing, Offer, Transaction"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Property Features"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Type, size, location, price, amenities"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Matching Criteria"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Price range, location, size, features"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Valuation Methods"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Comparables, income approach, cost approach"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Transaction Workflow"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Offer -> Acceptance -> Contingencies -> Closing"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "cross-application-matrix-1",
                      children: "Cross-Application Matrix"
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Property Mgmt"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Listing management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Detail completeness vs usability"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Buyer Matching"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Property recommendations"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Relevance vs serendipity"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Valuation"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Price estimation"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Accuracy vs data freshness"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Transactions"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Deal management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Security vs convenience"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Market Analysis"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Trend identification"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Depth vs timeliness"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "chapter-quiz-1",
                      children: "Chapter Quiz"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Test your real estate interview knowledge."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q1:"
                      }), " What data does a property listing typically include?"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "A) Only price"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "B) Type, size, location, price, amenities, media"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "C) Only address"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "D) Only photos"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                        children: ["Answer</summary>B) Type, size, location, price, amenities, media</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q2:"
                          }), " What is the primary valuation method for residential properties?"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "A) Cost approach"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "B) Comparable sales analysis"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "C) Income approach"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "D) Tax assessment"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                            children: ["Answer</summary>B) Comparable sales analysis</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " What is the first step in a real estate transaction workflow?"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "A) Closing"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "B) Offer submission"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "C) Inspection"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "D) Financing"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                children: ["Answer</summary>B) Offer submission</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Q4:"
                                  }), " What does buyer matching optimize for?"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "A) Lowest price"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "B) Preference-based property scoring"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "C) Largest property size"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "D) Newest listings"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                    children: ["Answer</summary>B) Preference-based property scoring</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "concept-comparison-2",
                                      children: "Concept Comparison"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Compare key real estate concepts for interview preparation."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "Concept"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Purpose"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Key Feature"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Property Management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "List and manage properties"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Rich metadata + media + location data"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Buyer Matching"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Match buyers to suitable properties"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Preference-based filtering + scoring"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Price Valuation"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Estimate property market value"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Comparable sales + regression analysis"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Transaction Mgmt"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Handle offers, contracts, closing"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Offer workflow + document management"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Market Analysis"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Analyze real estate trends"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Historical data + predictive insights"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "quick-reference-2",
                                      children: "Quick Reference"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Quick reference for real estate interview topics."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                            children: "RE Models"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Property, Buyer, Listing, Offer, Transaction"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Property Features"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Type, size, location, price, amenities"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Matching Criteria"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Price range, location, size, features"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Valuation Methods"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Comparables, income approach, cost approach"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Transaction Workflow"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Offer -> Acceptance -> Contingencies -> Closing"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "cross-application-matrix-2",
                                      children: "Cross-Application Matrix"
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Property Mgmt"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Listing management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Detail completeness vs usability"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Buyer Matching"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Property recommendations"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Relevance vs serendipity"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Valuation"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Price estimation"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Accuracy vs data freshness"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Transactions"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Deal management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Security vs convenience"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Market Analysis"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Trend identification"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Depth vs timeliness"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "chapter-quiz-2",
                                      children: "Chapter Quiz"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Test your real estate interview knowledge."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Q1:"
                                      }), " What data does a property listing typically include?"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "A) Only price"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "B) Type, size, location, price, amenities, media"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "C) Only address"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "D) Only photos"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                        children: ["Answer</summary>B) Type, size, location, price, amenities, media</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: "Q2:"
                                          }), " What is the primary valuation method for residential properties?"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "A) Cost approach"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "B) Comparable sales analysis"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "C) Income approach"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "D) Tax assessment"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                            children: ["Answer</summary>B) Comparable sales analysis</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                children: "Q3:"
                                              }), " What is the first step in a real estate transaction workflow?"]
                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "A) Closing"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "B) Offer submission"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "C) Inspection"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "D) Financing"
                                              }), "\n"]
                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                children: ["Answer</summary>B) Offer submission</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "Q4:"
                                                  }), " What does buyer matching optimize for?"]
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "A) Lowest price"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "B) Preference-based property scoring"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "C) Largest property size"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "D) Newest listings"
                                                  }), "\n"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                    children: ["Answer</summary>B) Preference-based property scoring</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "concept-comparison-3",
                                                      children: "Concept Comparison"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Compare key real estate concepts for interview preparation."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Concept"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Purpose"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Key Feature"
                                                          })]
                                                        })
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Property Management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "List and manage properties"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Rich metadata + media + location data"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Buyer Matching"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Match buyers to suitable properties"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Preference-based filtering + scoring"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Price Valuation"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Estimate property market value"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Comparable sales + regression analysis"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Transaction Mgmt"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Handle offers, contracts, closing"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Offer workflow + document management"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Market Analysis"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Analyze real estate trends"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Historical data + predictive insights"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "quick-reference-3",
                                                      children: "Quick Reference"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Quick reference for real estate interview topics."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                                            children: "RE Models"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Property, Buyer, Listing, Offer, Transaction"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Property Features"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Type, size, location, price, amenities"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Matching Criteria"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Price range, location, size, features"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Valuation Methods"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Comparables, income approach, cost approach"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Transaction Workflow"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Offer -> Acceptance -> Contingencies -> Closing"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "cross-application-matrix-3",
                                                      children: "Cross-Application Matrix"
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Property Mgmt"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Listing management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Detail completeness vs usability"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Buyer Matching"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Property recommendations"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Relevance vs serendipity"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Valuation"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Price estimation"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Accuracy vs data freshness"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Transactions"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Deal management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Security vs convenience"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Market Analysis"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Trend identification"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Depth vs timeliness"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "chapter-quiz-3",
                                                      children: "Chapter Quiz"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Test your real estate interview knowledge."]
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                        children: "Q1:"
                                                      }), " What data does a property listing typically include?"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "A) Only price"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "B) Type, size, location, price, amenities, media"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "C) Only address"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "D) Only photos"
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                        children: ["Answer</summary>B) Type, size, location, price, amenities, media</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                            children: "Q2:"
                                                          }), " What is the primary valuation method for residential properties?"]
                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "A) Cost approach"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "B) Comparable sales analysis"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "C) Income approach"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "D) Tax assessment"
                                                          }), "\n"]
                                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                            children: ["Answer</summary>B) Comparable sales analysis</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                children: "Q3:"
                                                              }), " What is the first step in a real estate transaction workflow?"]
                                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "A) Closing"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "B) Offer submission"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "C) Inspection"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "D) Financing"
                                                              }), "\n"]
                                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                children: ["Answer</summary>B) Offer submission</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                    children: "Q4:"
                                                                  }), " What does buyer matching optimize for?"]
                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "A) Lowest price"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "B) Preference-based property scoring"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "C) Largest property size"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "D) Newest listings"
                                                                  }), "\n"]
                                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                    children: ["Answer</summary>B) Preference-based property scoring</details>\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "summary",
                                                                      children: "Summary"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "This chapter covered interview questions specific to Laravel developer roles in real estate and property technology. Key themes:"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Domain fluency"
                                                                        }), ": Understanding MLS systems, property status lifecycles, CMAs, escrow, and title processes demonstrates industry knowledge that sets you apart from generic Laravel developers."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Agent architecture"
                                                                        }), ": Real estate is a natural fit for AI agents → every workflow step (listing, valuation, tour scheduling, document processing, lead qualification, market analysis, rental management, CRM) can be augmented with AI. Show that you know where AI adds value and where deterministic logic is safer."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Spatial awareness"
                                                                        }), ": Geolocation, proximity search, and mapping are non-negotiable in real estate. Know PostGIS, geocoding pipelines, and map visualization trade-offs."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Scale considerations"
                                                                        }), ": Property platforms serve large datasets with complex filtering. Know when to use a dedicated search engine over database queries, how to design incremental MLS sync pipelines, and how to handle image/media pipelines at scale."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Accuracy over flash"
                                                                        }), ": AI hallucinations in real estate carry legal risk. Demonstrate that you prioritize validation, fact-checking, and human review over AI automation for high-stakes content."]
                                                                      }), "\n"]
                                                                    }), "\n"]
                                                                  })
                                                                })]
                                                              })
                                                            })]
                                                          })
                                                        })]
                                                      })
                                                    })]
                                                  })
                                                })]
                                              })
                                            })]
                                          })
                                        })]
                                      })
                                    })]
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      })
                    })]
                  })
                })]
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