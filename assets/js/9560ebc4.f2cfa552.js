"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[16987],{

/***/ 11626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_22_case_study_ecommerce_md_956_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-22-case-study-ecommerce-md-956.json
const site_docs_courses_laravel_22_case_study_ecommerce_md_956_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/22-case-study-ecommerce","title":"Chapter 22: Case Study — SaaS E-Commerce Platform","description":"Previous Case Study AI Content","source":"@site/docs/courses/laravel/22-case-study-ecommerce.md","sourceDirName":"courses/laravel","slug":"/laravel/22-case-study-ecommerce","permalink":"/ai-engineering-journey/laravel/22-case-study-ecommerce","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"id":"22-case-study-ecommerce","slug":"/laravel/22-case-study-ecommerce","title":"Chapter 22: Case Study — SaaS E-Commerce Platform","sidebar_label":"Chapter 22: Case Study — SaaS E-Commerce Platform","sidebar_position":22},"sidebar":"course-laravel","previous":{"title":"Chapter 21: System Design: Laravel at Enterprise Scale","permalink":"/ai-engineering-journey/laravel/21-system-design-scale"},"next":{"title":"Chapter 23: Case Study — AI-Powered Content Platform","permalink":"/ai-engineering-journey/laravel/23-case-study-ai-content"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/22-case-study-ecommerce.md


const frontMatter = {
	id: '22-case-study-ecommerce',
	slug: '/laravel/22-case-study-ecommerce',
	title: 'Chapter 22: Case Study — SaaS E-Commerce Platform',
	sidebar_label: 'Chapter 22: Case Study — SaaS E-Commerce Platform',
	sidebar_position: 22
};
const contentTitle = 'Chapter 22: Case Study — SaaS E-Commerce Platform';

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
  "value": "Theory — End-to-End Design",
  "id": "theory--end-to-end-design",
  "level": 2
}, {
  "value": "6.1 Requirements Gathering",
  "id": "61-requirements-gathering",
  "level": 3
}, {
  "value": "6.2 Capacity Estimation",
  "id": "62-capacity-estimation",
  "level": 3
}, {
  "value": "6.3 Data Model",
  "id": "63-data-model",
  "level": 3
}, {
  "value": "6.4 Multi-Tenant Middleware and Scoping",
  "id": "64-multi-tenant-middleware-and-scoping",
  "level": 3
}, {
  "value": "6.5 Checkout Pipeline",
  "id": "65-checkout-pipeline",
  "level": 3
}, {
  "value": "6.5.1 Cart Service (Redis-Backed)",
  "id": "651-cart-service-redis-backed",
  "level": 4
}, {
  "value": "6.5.2 Order Creation Service",
  "id": "652-order-creation-service",
  "level": 4
}, {
  "value": "6.5.3 Payment Processing",
  "id": "653-payment-processing",
  "level": 4
}, {
  "value": "6.5.4 Inventory Management",
  "id": "654-inventory-management",
  "level": 4
}, {
  "value": "6.5.5 Order Confirmation Job",
  "id": "655-order-confirmation-job",
  "level": 4
}, {
  "value": "6.5.6 Real-Time Broadcasting with Reverb",
  "id": "656-real-time-broadcasting-with-reverb",
  "level": 4
}, {
  "value": "6.6 Product Search with Laravel Scout",
  "id": "66-product-search-with-laravel-scout",
  "level": 3
}, {
  "value": "6.7 Multi-Tenant Caching",
  "id": "67-multi-tenant-caching",
  "level": 3
}, {
  "value": "6.8 System Architecture",
  "id": "68-system-architecture",
  "level": 3
}, {
  "value": "6.9 Deployment and Scaling Strategy",
  "id": "69-deployment-and-scaling-strategy",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
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
        id: "chapter-22-case-study--saas-e-commerce-platform",
        children: "Chapter 22: Case Study — SaaS E-Commerce Platform"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/21-system-design-scale",
          children: "System Design"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/23-case-study-ai-content",
          children: "Case Study AI Content"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect a multi-tenant SaaS e-commerce platform using Laravel 13's core infrastructural components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform capacity estimation for a high-traffic, multi-store marketplace serving millions of users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a normalized, tenant-isolated relational schema with polymorphic relationships for media"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a distributed checkout pipeline with Redis-backed cart state, transactional order creation, and queue-driven fulfillment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a real-time product search layer using Laravel Scout with Meilisearch, including faceted filters and ranked sorting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a multi-tenant caching strategy with per-tenant Redis namespaces and selective invalidation"
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
        href: "../../assets/images/lessons/laravel/22-case-study-ecommerce/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/22-case-study-ecommerce/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/22-case-study-ecommerce/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/22-case-study-ecommerce/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/22-case-study-ecommerce/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/22-case-study-ecommerce/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant e-commerce platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define tenant isolation, catalog, cart, and checkout flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity Estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimate traffic, storage, and bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use peak traffic x growth factor calculations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant-aware products, orders, users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign key all tables to tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered job chain for order processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus::chain for sequential steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Scout with Meilisearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time full-text search with typo tolerance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant scaling strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate queue per tenant for noisy neighbor prevention"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Tenant A] --> B[Web App]     C[Tenant B] --> B     B --> D[Scout/Meilisearch]     B --> E[DB Per Tenant]     B --> F[Redis Cache]     B --> G[Queue Per Tenant]     H[Super Admin] --> I[Admin Panel]     I --> B "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory--end-to-end-design",
      children: "Theory — End-to-End Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/22-case-study-ecommerce.png",
        alt: "E-Commerce Case Study"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-requirements-gathering",
      children: "6.1 Requirements Gathering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Multi-tenant e-commerce requires tenant isolation for products, orders, carts, and customer data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before writing a single line of code, we must derive hard requirements from the business problem. Our client operates a white-label e-commerce platform where independent merchants launch branded online stores. The platform must simultaneously serve store owners, their customers, and platform administrators."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each store is a tenant. Tenants share the same codebase and database but see only their own data."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each store manages up to 100,000 SKUs with variants, images, categories, and SEO metadata."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 million orders per year across all stores, with full lifecycle tracking (pending → confirmed → processing → shipped → delivered → returned)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 million registered users who can maintain profiles, addresses, payment methods, and order history across multiple stores."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cart persistence, payment processing (Stripe via Cashier), inventory reservation, order confirmation, and email notification."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search across the entire catalog with faceted filtering, typo tolerance, and sorting by relevance, price, and recency."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order status notifications broadcast to store dashboards and customer browsers via WebSockets."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uptime SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% availability (≈8.7 hours of downtime per year, ≈43 minutes per month)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page load budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500ms server-side response time at p95 for all public-facing pages."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-Functional Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 queries per second (product browsing, search, cart reads)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write QPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 writes per second (order placement, cart mutations, inventory updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 TB/year (product images, order records, audit logs, media)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache footprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 GB working set (hot products, active carts, session data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 Mbps sustained (API traffic, image serving, WebSocket frames)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-capacity-estimation",
      children: "6.2 Capacity Estimation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Capacity planning uses peak traffic estimates, storage projections, and growth factor calculations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capacity estimation grounds architecture decisions in numbers rather than intuition. We work through each domain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traffic Estimation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "10 million orders per year yields roughly 27,400 orders per day, or about 0.3 orders per second at the daily average. However, e-commerce traffic is bursty: Black Friday can produce 10–20Ã→ the daily average. We size for 10Ã→ peak."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Daily orders avg = 10,000,000 / 365 ≈ 27,397\nOrders per second avg = 27,397 / 86,400 ≈ 0.32\nOrders per second peak (10Ã→) ≈ 3.2\n\nCheckout involves ~10 database writes per order (order, items, payment, inventory, etc.)\nWrite QPS peak ≈ 3.2 Ã→ 10 = 32 → round to 50 for headroom\n\nBrowsing-to-purchase ratio is typically 50:1 to 100:1\nRead QPS peak ≈ 32 Ã→ 6 = 192 → round to 200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Estimation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Product records: 100,000 stores Ã→ 100 products avg = 10M products\nEach product record ≈ 2 KB → 20 GB\nProduct images: 10M products Ã→ 3 images avg Ã→ 500 KB = 15 TB\n  → But we offload images to S3/CDN, database stores only URLs (~200 bytes) → 2 GB\n\nOrder records: 10M orders/year Ã→ 2 KB + 3 items/order Ã→ 500 bytes = 20 GB/year + 15 GB/year\nOrder growth at 10M/year → 35 GB/year\n\nMedia (polymorphic): banners, logos, category images → estimate 500 GB/year stored on S3\nDatabase metadata for media → ~10 GB/year\n\nTotal database storage → ~60 GB/year (excluding images stored on S3)\nTOTAL external storage (S3 + CDN) → ~5 TB/year\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Estimation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hot products: Pareto principle — 20% of products get 80% of views.\n2M hot products Ã→ 2 KB each → 4 GB\n\nActive carts: Assume 5% of 1M users have active carts at any time\n50,000 carts Ã→ 5 KB each → 250 MB\n\nSession data: 1M users, assume 10% active sessions\n100,000 sessions Ã→ 1 KB → 100 MB\n\nFull-text search index: ~50 GB (Meilisearch stores inverted indexes in memory)\nTotal cache + search memory ≈ 50 GB → justifies a dedicated Redis cluster + dedicated Meilisearch instance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-data-model",
      children: "6.3 Data Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every table includes a tenant_id foreign key, with indexes on tenant_id plus query columns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The data model must enforce tenant isolation at the schema level, avoid cross-tenant data leaks, and support high-throughput transactional workloads."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Schema"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Tenants (stores)\nCREATE TABLE tenants (\n    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    domain      VARCHAR(255) NOT NULL UNIQUE,\n    name        VARCHAR(255) NOT NULL,\n    email       VARCHAR(255) NOT NULL,\n    settings    JSON,\n    plan        ENUM('basic', 'professional', 'enterprise') NOT NULL DEFAULT 'basic',\n    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\n-- Products belong to a tenant, not to a user\nCREATE TABLE products (\n    id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    tenant_id     BIGINT UNSIGNED NOT NULL,\n    sku           VARCHAR(100) NOT NULL,\n    name          VARCHAR(500) NOT NULL,\n    slug          VARCHAR(500) NOT NULL,\n    description   TEXT,\n    price         DECIMAL(12, 2) NOT NULL,\n    compare_at_price DECIMAL(12, 2) NULL,\n    cost_price    DECIMAL(12, 2) NULL,\n    currency      CHAR(3) NOT NULL DEFAULT 'USD',\n    weight        DECIMAL(8, 2) NULL,\n    status        ENUM('draft', 'active', 'archived') NOT NULL DEFAULT 'draft',\n    category_id   BIGINT UNSIGNED NULL,\n    metadata      JSON,\n    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_tenant_status (tenant_id, status),\n    INDEX idx_category (category_id),\n    UNIQUE INDEX idx_tenant_sku (tenant_id, sku),\n\n    CONSTRAINT fk_product_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,\n    CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL\n) ENGINE=InnoDB;\n\n-- Product variants (size, color, etc.)\nCREATE TABLE product_variants (\n    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    product_id  BIGINT UNSIGNED NOT NULL,\n    tenant_id   BIGINT UNSIGNED NOT NULL,\n    sku         VARCHAR(100) NOT NULL,\n    name        VARCHAR(255) NOT NULL,\n    price       DECIMAL(12, 2) NULL,  -- overrides product price\n    stock       INT NOT NULL DEFAULT 0,\n    options     JSON,  -- e.g., {\"color\": \"Red\", \"size\": \"M\"}\n    sort_order  INT NOT NULL DEFAULT 0,\n    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_product (product_id),\n    INDEX idx_tenant (tenant_id),\n    UNIQUE INDEX idx_tenant_variant_sku (tenant_id, sku),\n\n    CONSTRAINT fk_variant_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,\n    CONSTRAINT fk_variant_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Orders\nCREATE TABLE orders (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    tenant_id       BIGINT UNSIGNED NOT NULL,\n    user_id         BIGINT UNSIGNED NOT NULL,\n    order_number    VARCHAR(50) NOT NULL,\n    status          ENUM('pending', 'confirmed', 'processing', 'shipped',\n                         'delivered', 'cancelled', 'returned') NOT NULL DEFAULT 'pending',\n    subtotal        DECIMAL(12, 2) NOT NULL,\n    tax_total       DECIMAL(12, 2) NOT NULL DEFAULT 0.00,\n    shipping_total  DECIMAL(12, 2) NOT NULL DEFAULT 0.00,\n    discount_total  DECIMAL(12, 2) NOT NULL DEFAULT 0.00,\n    grand_total     DECIMAL(12, 2) NOT NULL,\n    currency        CHAR(3) NOT NULL DEFAULT 'USD',\n    shipping_address_id BIGINT UNSIGNED NULL,\n    billing_address_id  BIGINT UNSIGNED NULL,\n    notes           TEXT NULL,\n    placed_at       TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_tenant_status (tenant_id, status),\n    INDEX idx_user (user_id),\n    INDEX idx_placed_at (placed_at),\n    UNIQUE INDEX idx_order_number (order_number),\n\n    CONSTRAINT fk_order_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,\n    CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Order items\nCREATE TABLE order_items (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    order_id        BIGINT UNSIGNED NOT NULL,\n    tenant_id       BIGINT UNSIGNED NOT NULL,\n    product_id      BIGINT UNSIGNED NOT NULL,\n    variant_id      BIGINT UNSIGNED NULL,\n    product_name    VARCHAR(500) NOT NULL,  -- snapshot at time of purchase\n    variant_label   VARCHAR(255) NULL,\n    quantity        INT NOT NULL DEFAULT 1,\n    unit_price      DECIMAL(12, 2) NOT NULL,\n    total_price     DECIMAL(12, 2) NOT NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    INDEX idx_order (order_id),\n    INDEX idx_tenant (tenant_id),\n    INDEX idx_product (product_id),\n\n    CONSTRAINT fk_item_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,\n    CONSTRAINT fk_item_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,\n    CONSTRAINT fk_item_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Payments\nCREATE TABLE payments (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    order_id        BIGINT UNSIGNED NOT NULL,\n    tenant_id       BIGINT UNSIGNED NOT NULL,\n    stripe_payment_intent_id VARCHAR(255) NULL,\n    method          VARCHAR(50) NOT NULL,\n    status          ENUM('pending', 'succeeded', 'failed', 'refunded', 'partial_refund') NOT NULL DEFAULT 'pending',\n    amount          DECIMAL(12, 2) NOT NULL,\n    currency        CHAR(3) NOT NULL DEFAULT 'USD',\n    transaction_id  VARCHAR(255) NULL,\n    refunded_amount DECIMAL(12, 2) NOT NULL DEFAULT 0.00,\n    metadata        JSON,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_order (order_id),\n    INDEX idx_tenant (tenant_id),\n    INDEX idx_status (status),\n\n    CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,\n    CONSTRAINT fk_payment_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Polymorphic media table\nCREATE TABLE media (\n    id                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    tenant_id         BIGINT UNSIGNED NOT NULL,\n    mediable_type     VARCHAR(255) NOT NULL,  -- e.g., App\\Models\\Product, App\\Models\\Category\n    mediable_id       BIGINT UNSIGNED NOT NULL,\n    disk              VARCHAR(50) NOT NULL DEFAULT 's3',\n    filename          VARCHAR(500) NOT NULL,\n    original_filename VARCHAR(500) NOT NULL,\n    mime_type         VARCHAR(100) NOT NULL,\n    size              BIGINT UNSIGNED NOT NULL,\n    collection_name   VARCHAR(100) NOT NULL DEFAULT 'default',  -- e.g., 'images', 'videos', 'documents'\n    sort_order        INT NOT NULL DEFAULT 0,\n    metadata          JSON,\n    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    INDEX idx_tenant (tenant_id),\n    INDEX idx_mediable (mediable_type, mediable_id),\n    INDEX idx_collection (mediable_type, mediable_id, collection_name),\n\n    CONSTRAINT fk_media_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Inventory ledger (for audit trail)\nCREATE TABLE inventory_movements (\n    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    tenant_id   BIGINT UNSIGNED NOT NULL,\n    variant_id  BIGINT UNSIGNED NOT NULL,\n    quantity    INT NOT NULL,\n    type        ENUM('reservation', 'release', 'confirmation', 'restock', 'adjustment') NOT NULL,\n    reference_type   VARCHAR(255) NULL,  -- e.g., App\\Models\\Order\n    reference_id     BIGINT UNSIGNED NULL,\n    before_qty  INT NOT NULL,\n    after_qty   INT NOT NULL,\n    created_by  BIGINT UNSIGNED NULL,\n    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    INDEX idx_variant (variant_id),\n    INDEX idx_tenant (tenant_id),\n    INDEX idx_type (type),\n    INDEX idx_created_at (created_at),\n\n    CONSTRAINT fk_inventory_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,\n    CONSTRAINT fk_inventory_variant FOREIGN KEY (variant_id) REFERENCES product_variants(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema Design Rationale"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every business table carries a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenant_id"
      }), " column indexed for fast filtering. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "discriminator-based multi-tenancy"
      }), ": a single schema with a tenant discriminator column. We chose this over the separate-database approach because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operational simplicity"
        }), ": one migration set, one backup strategy, one connection pool."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-tenant analytics"
        }), ": the platform team can run aggregated queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lower infrastructure cost"
        }), ": no per-tenant database provisioning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "media"
      }), " table uses a polymorphic relationship (", (0,jsx_runtime.jsx)(_components.code, {
        children: "mediable_type"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mediable_id"
      }), ") so that products, categories, brands, and CMS pages can all attach media without separate join tables. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collection_name"
      }), " column further groups media within a parent — e.g., a product might have an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "images"
      }), " collection and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "videos"
      }), " collection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inventory_movements"
      }), " table is an append-only ledger. Every stock change—reservation, confirmation, release, restock, adjustment—is recorded with before/after quantities. This gives us a full audit trail and enables point-in-time inventory reconstruction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use a trait for the tenant scope to ensure every model automatically filters by tenant_id."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-multi-tenant-middleware-and-scoping",
      children: "6.4 Multi-Tenant Middleware and Scoping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Global scopes automatically filter queries to the current tenant; middleware resolves the tenant from the request."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The correct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenant_id"
      }), " must be injected into every request before any business logic runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Http\\Middleware\\ResolveTenant.php\n<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\nuse Illuminate\\Http\\Request;\nuse Symfony\\Component\\HttpFoundation\\Response;\n\nclass ResolveTenant\n{\n    public function handle(Request $request, Closure $next): Response\n    {\n        $domain = $request->getHost();\n\n        $tenant = \\App\\Models\\Tenant::query()\n            ->where('domain', $domain)\n            ->firstOrFail();\n\n        $request->merge(['tenant_id' => $tenant->id]);\n        app()->instance(\\App\\Models\\Tenant::class, $tenant);\n\n        return $next($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A global scope automatically applies the tenant filter to every query:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Models\\Scopes\\TenantScope.php\n<?php\n\nnamespace App\\Models\\Scopes;\n\nuse Illuminate\\Database\\Eloquent\\Builder;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Scope;\n\nclass TenantScope implements Scope\n{\n    public function apply(Builder $builder, Model $model): void\n    {\n        $tenantId = request()->input('tenant_id');\n\n        if ($tenantId) {\n            $builder->where('tenant_id', $tenantId);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Traits\\BelongsToTenant.php\n<?php\n\nnamespace App\\Traits;\n\nuse App\\Models\\Scopes\\TenantScope;\n\ntrait BelongsToTenant\n{\n    protected static function bootBelongsToTenant(): void\n    {\n        static::addGlobalScope(new TenantScope);\n\n        static::creating(function ($model) {\n            if (empty($model->tenant_id)) {\n                $model->tenant_id = request()->input('tenant_id');\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every tenant-scoped model then uses the trait:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse App\\Traits\\BelongsToTenant;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Product extends Model\n{\n    use BelongsToTenant;\n\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-checkout-pipeline",
      children: "6.5 Checkout Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The checkout flow uses Bus::chain for ordered job execution: validate, process payment, update inventory, send confirmation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The checkout pipeline is the most transactionally sensitive path in the system. It involves multiple services and must maintain consistency across cart state, inventory, payment, and order persistence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "651-cart-service-redis-backed",
      children: "6.5.1 Cart Service (Redis-Backed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cart lives in Redis, not MySQL. This avoids write contention on the orders table during browsing and lets customers add items without authentication (carts merge on login)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\CartService.php\n<?php\n\nnamespace App\\Services;\n\nuse Illuminate\\Support\\Facades\\Redis;\nuse App\\Models\\ProductVariant;\n\nclass CartService\n{\n    private string $prefix;\n\n    public function __construct(string $sessionId)\n    {\n        $this->prefix = \"cart:{$sessionId}\";\n    }\n\n    public function addItem(int $variantId, int $quantity = 1): void\n    {\n        Redis::hincrby(\"{$this->prefix}:items\", $variantId, $quantity);\n        Redis::expire(\"{$this->prefix}:items\", 86400); // 24h TTL\n    }\n\n    public function removeItem(int $variantId): void\n    {\n        Redis::hdel(\"{$this->prefix}:items\", $variantId);\n    }\n\n    public function getItems(): array\n    {\n        $items = Redis::hgetall(\"{$this->prefix}:items\");\n\n        if (empty($items)) {\n            return [];\n        }\n\n        $variantIds = array_keys($items);\n\n        $variants = ProductVariant::with('product')\n            ->whereIn('id', $variantIds)\n            ->get()\n            ->keyBy('id');\n\n        $result = [];\n\n        foreach ($items as $variantId => $quantity) {\n            $variant = $variants[$variantId] ?? null;\n            if (!$variant) {\n                continue;\n            }\n\n            $result[] = [\n                'variant'    => $variant,\n                'quantity'   => (int) $quantity,\n                'unit_price' => $variant->price ?? $variant->product->price,\n                'total'      => ((int) $quantity) * ($variant->price ?? $variant->product->price),\n            ];\n        }\n\n        return $result;\n    }\n\n    public function clear(): void\n    {\n        Redis::del(\"{$this->prefix}:items\");\n    }\n\n    public function count(): int\n    {\n        $items = Redis::hgetall(\"{$this->prefix}:items\");\n\n        return array_sum(array_map('intval', $items ?: []));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "652-order-creation-service",
      children: "6.5.2 Order Creation Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the customer clicks \"Place Order\", the system executes a carefully ordered sequence inside a database transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\OrderService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Order;\nuse App\\Models\\OrderItem;\nuse App\\Models\\ProductVariant;\nuse App\\Models\\Payment;\nuse Illuminate\\Support\\Facades\\DB;\nuse Illuminate\\Support\\Facades\\Redis;\nuse Illuminate\\Support\\Str;\n\nclass OrderService\n{\n    public function __construct(\n        private CartService $cartService,\n        private PaymentService $paymentService,\n        private InventoryService $inventoryService,\n    ) {}\n\n    public function checkout(array $checkoutData): Order\n    {\n        $cartItems = $this->cartService->getItems();\n\n        if (empty($cartItems)) {\n            throw new \\RuntimeException('Cart is empty.');\n        }\n\n        $tenantId = request()->input('tenant_id');\n        $userId   = auth()->id();\n\n        // 1. Reserve inventory in Redis\n        $this->inventoryService->reserveStock($cartItems, $tenantId);\n\n        try {\n            $order = DB::transaction(function () use ($cartItems, $checkoutData, $tenantId, $userId) {\n                // 2. Calculate totals\n                $subtotal = collect($cartItems)->sum('total');\n                $tax      = $this->calculateTax($subtotal, $checkoutData['shipping_address']);\n                $shipping = $this->calculateShipping($cartItems, $checkoutData['shipping_address']);\n                $discount = $this->calculateDiscount($checkoutData['coupon_code'] ?? null, $subtotal);\n                $grandTotal = $subtotal + $tax + $shipping - $discount;\n\n                // 3. Create order\n                $order = Order::create([\n                    'tenant_id'           => $tenantId,\n                    'user_id'             => $userId,\n                    'order_number'        => $this->generateOrderNumber($tenantId),\n                    'status'              => 'pending',\n                    'subtotal'            => $subtotal,\n                    'tax_total'           => $tax,\n                    'shipping_total'      => $shipping,\n                    'discount_total'      => $discount,\n                    'grand_total'         => $grandTotal,\n                    'currency'            => 'USD',\n                    'shipping_address_id' => $checkoutData['shipping_address_id'],\n                    'billing_address_id'  => $checkoutData['billing_address_id'],\n                    'notes'               => $checkoutData['notes'] ?? null,\n                ]);\n\n                // 4. Create order items (snapshot product data)\n                foreach ($cartItems as $item) {\n                    OrderItem::create([\n                        'order_id'      => $order->id,\n                        'tenant_id'     => $tenantId,\n                        'product_id'    => $item['variant']->product_id,\n                        'variant_id'    => $item['variant']->id,\n                        'product_name'  => $item['variant']->product->name,\n                        'variant_label' => $item['variant']->name,\n                        'quantity'      => $item['quantity'],\n                        'unit_price'    => $item['unit_price'],\n                        'total_price'   => $item['total'],\n                    ]);\n                }\n\n                // 5. Confirm inventory in DB\n                $this->inventoryService->confirmStock($cartItems, $order->id, $tenantId);\n\n                return $order;\n            });\n        } catch (\\Throwable $e) {\n            // Release Redis reservation on failure\n            $this->inventoryService->releaseStock($cartItems, $tenantId);\n            throw $e;\n        }\n\n        // 6. Process payment (outside transaction — payment gateway is idempotent)\n        $payment = $this->paymentService->charge($order, $checkoutData['payment_method_id']);\n\n        // 7. Update order status on success\n        if ($payment->status === 'succeeded') {\n            $order->update(['status' => 'confirmed', 'placed_at' => now()]);\n        } else {\n            $order->update(['status' => 'cancelled']);\n            $this->inventoryService->releaseStock($cartItems, $tenantId);\n\n            throw new \\RuntimeException('Payment failed.');\n        }\n\n        // 8. Dispatch confirmation job\n        \\App\\Jobs\\ProcessOrderConfirmation::dispatch($order);\n\n        // 9. Clear the cart\n        $this->cartService->clear();\n\n        return $order;\n    }\n\n    private function generateOrderNumber(int $tenantId): string\n    {\n        $date = now()->format('Ymd');\n\n        $seq = DB::table('order_sequences')\n            ->where('tenant_id', $tenantId)\n            ->where('date', $date)\n            ->lockForUpdate()\n            ->value('sequence');\n\n        if (!$seq) {\n            DB::table('order_sequences')->insert([\n                'tenant_id' => $tenantId,\n                'date' => $date,\n                'sequence' => 1,\n            ]);\n            $seq = 1;\n        } else {\n            DB::table('order_sequences')\n                ->where('tenant_id', $tenantId)\n                ->where('date', $date)\n                ->increment('sequence');\n            $seq++;\n        }\n\n        return \"{$date}-{$tenantId}-{$seq}\";\n    }\n\n    private function calculateTax(float $subtotal, array $address): float\n    {\n        // Delegate to a tax calculation service or external API\n        return round($subtotal * 0.08, 2); // simplified\n    }\n\n    private function calculateShipping(array $items, array $address): float\n    {\n        // Delegate to shipping carrier API or weight-based logic\n        return 5.99;\n    }\n\n    private function calculateDiscount(?string $couponCode, float $subtotal): float\n    {\n        if (!$couponCode) {\n            return 0.00;\n        }\n\n        // Look up coupon in DB, validate, return discount amount\n        return 0.00;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "653-payment-processing",
      children: "6.5.3 Payment Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We use Laravel Cashier (Stripe) with a thin wrapper that returns a normalized payment record:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\PaymentService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Order;\nuse App\\Models\\Payment;\nuse Laravel\\Cashier\\Cashier;\nuse Stripe\\PaymentIntent;\n\nclass PaymentService\n{\n    public function charge(Order $order, string $paymentMethodId): Payment\n    {\n        $user = $order->user;\n\n        $stripePaymentIntent = \\Stripe\\PaymentIntent::create([\n            'amount'   => (int) ($order->grand_total * 100),\n            'currency' => strtolower($order->currency),\n            'customer' => $user->stripe_id,\n            'payment_method' => $paymentMethodId,\n            'off_session'    => true,\n            'confirm'        => true,\n            'metadata'       => [\n                'order_number' => $order->order_number,\n                'tenant_id'    => $order->tenant_id,\n            ],\n        ]);\n\n        return Payment::create([\n            'order_id'       => $order->id,\n            'tenant_id'      => $order->tenant_id,\n            'stripe_payment_intent_id' => $stripePaymentIntent->id,\n            'method'         => 'card',\n            'status'         => $stripePaymentIntent->status === 'succeeded' ? 'succeeded' : 'failed',\n            'amount'         => $order->grand_total,\n            'currency'       => $order->currency,\n            'transaction_id' => $stripePaymentIntent->charges->data[0]->id ?? null,\n        ]);\n    }\n\n    public function refund(Payment $payment, ?float $amount = null): Payment\n    {\n        $refund = \\Stripe\\Refund::create([\n            'payment_intent' => $payment->stripe_payment_intent_id,\n            'amount'         => $amount ? (int) ($amount * 100) : null,\n        ]);\n\n        $payment->update([\n            'status'          => $refund->status === 'succeeded' ? 'refunded' : 'partial_refund',\n            'refunded_amount' => DB::raw(\"refunded_amount + {$amount}\"),\n        ]);\n\n        return $payment->fresh();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "654-inventory-management",
      children: "6.5.4 Inventory Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inventory must be handled at two layers for correctness under concurrency. Redis provides fast, atomic stock reservations during cart-to-order conversion. MySQL provides the authoritative ledger."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\InventoryService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\InventoryMovement;\nuse App\\Models\\ProductVariant;\nuse Illuminate\\Support\\Facades\\DB;\nuse Illuminate\\Support\\Facades\\Redis;\n\nclass InventoryService\n{\n    private string $reservationKey(int $tenantId): string\n    {\n        return \"inventory:reservations:{$tenantId}\";\n    }\n\n    public function reserveStock(array $cartItems, int $tenantId): void\n    {\n        $redis = Redis::connection();\n\n        foreach ($cartItems as $item) {\n            $variant = $item['variant'];\n            $qty     = $item['quantity'];\n\n            $available = $variant->stock - (int) $redis->hget(\n                $this->reservationKey($tenantId),\n                $variant->id\n            ) ?? 0;\n\n            if ($available < $qty) {\n                throw new \\RuntimeException(\n                    \"Insufficient stock for variant {$variant->sku}. Available: {$available}, requested: {$qty}.\"\n                );\n            }\n        }\n\n        // All checks passed — reserve atomically\n        foreach ($cartItems as $item) {\n            $redis->hincrby(\n                $this->reservationKey($tenantId),\n                $item['variant']->id,\n                $item['quantity']\n            );\n\n            $redis->expire($this->reservationKey($tenantId), 900); // 15 min TTL\n        }\n    }\n\n    public function confirmStock(array $cartItems, int $orderId, int $tenantId): void\n    {\n        DB::transaction(function () use ($cartItems, $orderId, $tenantId) {\n            foreach ($cartItems as $item) {\n                $variant = ProductVariant::where('id', $item['variant']->id)\n                    ->lockForUpdate()\n                    ->firstOrFail();\n\n                $beforeQty = $variant->stock;\n\n                $variant->decrement('stock', $item['quantity']);\n\n                InventoryMovement::create([\n                    'tenant_id'      => $tenantId,\n                    'variant_id'     => $variant->id,\n                    'quantity'       => -$item['quantity'],\n                    'type'           => 'confirmation',\n                    'reference_type' => Order::class,\n                    'reference_id'   => $orderId,\n                    'before_qty'     => $beforeQty,\n                    'after_qty'      => $beforeQty - $item['quantity'],\n                    'created_by'     => auth()->id(),\n                ]);\n            }\n        });\n    }\n\n    public function releaseStock(array $cartItems, int $tenantId): void\n    {\n        $redis = Redis::connection();\n\n        foreach ($cartItems as $item) {\n            $redis->hincrby(\n                $this->reservationKey($tenantId),\n                $item['variant']->id,\n                -$item['quantity']\n            );\n        }\n    }\n\n    public function getAvailableStock(ProductVariant $variant, int $tenantId): int\n    {\n        $redis = Redis::connection();\n\n        $reserved = (int) $redis->hget(\n            $this->reservationKey($tenantId),\n            $variant->id\n        );\n\n        return $variant->stock - $reserved;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "655-order-confirmation-job",
      children: "6.5.5 Order Confirmation Job"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Jobs\\ProcessOrderConfirmation.php\n<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Order;\nuse App\\Notifications\\OrderConfirmed;\nuse App\\Services\\AnalyticsService;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass ProcessOrderConfirmation implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public function __construct(\n        public Order $order\n    ) {}\n\n    public function handle(AnalyticsService $analytics): void\n    {\n        // 1. Send email notification\n        $this->order->user->notify(new OrderConfirmed($this->order));\n\n        // 2. Broadcast real-time update via Reverb\n        broadcast(new \\App\\Events\\OrderStatusChanged($this->order))->toOthers();\n\n        // 3. Update analytics pipeline\n        $analytics->trackOrder($this->order);\n\n        // 4. Trigger fulfillment workflow if digital product\n        if ($this->order->items->every(fn ($item) => $item->product->is_digital)) {\n            \\App\\Jobs\\ProcessDigitalFulfillment::dispatch($this->order);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "656-real-time-broadcasting-with-reverb",
      children: "6.5.6 Real-Time Broadcasting with Reverb"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverb broadcasts order status changes to both the store's admin dashboard and the customer's order tracking page."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Events\\OrderStatusChanged.php\n<?php\n\nnamespace App\\Events;\n\nuse App\\Models\\Order;\nuse Illuminate\\Broadcasting\\Channel;\nuse Illuminate\\Broadcasting\\InteractsWithSockets;\nuse Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;\nuse Illuminate\\Foundation\\Events\\Dispatchable;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass OrderStatusChanged implements ShouldBroadcast\n{\n    use Dispatchable, InteractsWithSockets, SerializesModels;\n\n    public function __construct(\n        public Order $order\n    ) {}\n\n    public function broadcastOn(): array\n    {\n        return [\n            new Channel(\"tenant.{$this->order->tenant_id}.orders\"),\n            new Channel(\"user.{$this->order->user_id}.orders\"),\n        ];\n    }\n\n    public function broadcastWith(): array\n    {\n        return [\n            'order_number' => $this->order->order_number,\n            'status'       => $this->order->status,\n            'updated_at'   => $this->order->updated_at->toIso8601String(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Payment processing must be idempotent. Use unique order IDs to prevent double charges on retry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-product-search-with-laravel-scout",
      children: "6.6 Product Search with Laravel Scout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Scout with Meilisearch provides typo-tolerant full-text search with real-time index updates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search is a first-class feature. Every product page, category browse, and storefront depends on fast, relevant results."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scout Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/scout.php\n<?php\n\nreturn [\n    'driver' => env('SCOUT_DRIVER', 'meilisearch'),\n\n    'meilisearch' => [\n        'host' => env('MEILISEARCH_HOST', 'http://localhost:7700'),\n        'key'  => env('MEILISEARCH_KEY'),\n    ],\n\n    'queued' => true,  // sync model changes to search index via queue\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Making a Model Searchable"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse App\\Traits\\BelongsToTenant;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Laravel\\Scout\\Searchable;\n\nclass Product extends Model\n{\n    use BelongsToTenant, Searchable;\n\n    protected $fillable = [\n        'tenant_id', 'sku', 'name', 'slug', 'description',\n        'price', 'compare_at_price', 'currency', 'status',\n        'category_id', 'metadata',\n    ];\n\n    public function toSearchableArray(): array\n    {\n        return [\n            'id'          => $this->id,\n            'tenant_id'   => $this->tenant_id,\n            'name'        => $this->name,\n            'description' => $this->description,\n            'sku'         => $this->sku,\n            'price'       => (float) $this->price,\n            'currency'    => $this->currency,\n            'category'    => $this->category?->name,\n            'tags'        => $this->tags->pluck('name')->toArray(),\n            'color'       => $this->metadata['color'] ?? null,\n            'size'        => $this->metadata['size'] ?? null,\n            'created_at'  => $this->created_at->timestamp,\n        ];\n    }\n\n    public function searchableShouldBeSentTo(string $index): bool\n    {\n        // Per-tenant indexes for isolation\n        return $index === \"products_{$this->tenant_id}\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Controller with Faceted Search"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Http\\Controllers\\ProductSearchController.php\n<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Product;\nuse Illuminate\\Http\\Request;\nuse Laravel\\Scout\\Builder;\n\nclass ProductSearchController extends Controller\n{\n    public function __invoke(Request $request)\n    {\n        $tenantId = $request->input('tenant_id');\n        $query    = $request->input('q');\n        $filters  = $request->input('filters', []);\n        $sort     = $request->input('sort', 'relevance');\n\n        $builder = Product::search($query, function ($meilisearch, $query, $options) use ($tenantId, $filters, $sort) {\n            $options['index'] = \"products_{$tenantId}\";\n\n            // Apply faceted filters\n            $filterParts = [];\n\n            $filterParts[] = \"tenant_id = {$tenantId}\";\n\n            if (!empty($filters['category'])) {\n                $filterParts[] = \"category = '{$filters['category']}'\";\n            }\n\n            if (!empty($filters['min_price'])) {\n                $filterParts[] = \"price >= {$filters['min_price']}\";\n            }\n\n            if (!empty($filters['max_price'])) {\n                $filterParts[] = \"price <= {$filters['max_price']}\";\n            }\n\n            if (!empty($filters['color'])) {\n                $filterParts[] = \"color = '{$filters['color']}'\";\n            }\n\n            if (!empty($filters['size'])) {\n                $filterParts[] = \"size = '{$filters['size']}'\";\n            }\n\n            if (!empty($filterParts)) {\n                $options['filter'] = implode(' AND ', $filterParts);\n            }\n\n            // Sorting\n            $sortRules = [\n                'relevance' => [],\n                'price_asc'  => ['price:asc'],\n                'price_desc' => ['price:desc'],\n                'newest'     => ['created_at:desc'],\n            ];\n\n            $options['sort'] = $sortRules[$sort] ?? [];\n\n            return $meilisearch->search($query, $options);\n        });\n\n        $results = $builder->paginate(24);\n\n        // Extract facets from Meilisearch response\n        $facets = $results->raw()['facetDistribution'] ?? [];\n\n        return response()->json([\n            'products' => $results->items(),\n            'facets'   => $facets,\n            'meta'     => [\n                'current_page' => $results->currentPage(),\n                'last_page'    => $results->lastPage(),\n                'total'        => $results->total(),\n            ],\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-multi-tenant-caching",
      children: "6.7 Multi-Tenant Caching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cache keys are prefixed by tenant_id to prevent data leakage between tenants."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching in a multi-tenant system requires key isolation. A product update in Store A must not invalidate the cache for Store B."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\CacheService.php\n<?php\n\nnamespace App\\Services;\n\nuse Illuminate\\Support\\Facades\\Cache;\nuse Illuminate\\Support\\Facades\\Redis;\n\nclass CacheService\n{\n    private int $tenantId;\n\n    public function __construct(?int $tenantId = null)\n    {\n        $this->tenantId = $tenantId ?? request()->input('tenant_id', 0);\n    }\n\n    private function key(string $key): string\n    {\n        return \"tenant:{$this->tenantId}:{$key}\";\n    }\n\n    public function get(string $key, mixed $default = null): mixed\n    {\n        return Cache::get($this->key($key), $default);\n    }\n\n    public function put(string $key, mixed $value, int $ttl = 3600): void\n    {\n        Cache::put($this->key($key), $value, $ttl);\n    }\n\n    public function remember(string $key, int $ttl, callable $callback): mixed\n    {\n        return Cache::remember($this->key($key), $ttl, $callback);\n    }\n\n    public function forget(string $key): void\n    {\n        Cache::forget($this->key($key));\n    }\n\n    public function flushTenant(): void\n    {\n        $redis = Redis::connection();\n\n        $cursor = null;\n\n        do {\n            [$cursor, $keys] = $redis->scan($cursor, [\n                'match' => \"tenant:{$this->tenantId}:*\",\n                'count' => 100,\n            ]);\n\n            if (!empty($keys)) {\n                $redis->del($keys);\n            }\n        } while ($cursor !== 0);\n    }\n\n    // Tenant-aware cache invalidation on product update\n    public function invalidateProductCache(int $productId): void\n    {\n        $keys = [\n            \"product:{$productId}\",\n            \"product:{$productId}:variants\",\n            \"category_products:{$this->tenantId}\",\n            \"store_front:{$this->tenantId}\",\n        ];\n\n        foreach ($keys as $key) {\n            $this->forget($key);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using Cache Tags (Redis backend)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Caching a product with tenant-scoped tags\nCache::tags([\"tenant:{$tenantId}\", 'products'])\n    ->put(\"product:{$product->id}\", $product, 3600);\n\n// Invalidating all product caches for a tenant\nCache::tags([\"tenant:{$tenantId}\", 'products'])->flush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-system-architecture",
      children: "6.8 System Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The architecture uses tenant-per-database isolation with shared Redis and queue infrastructure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full system follows a layered, horizontally scalable topology."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────────────────────────────┐\n│                           Cloudflare CDN                                 │\n│                      (static assets, image resize)                       │\n└──────────────────────────────────────────────────────────────────────────┘\n                                    │\n                            ┌───────┴───────┐\n                            │   Load Balancer│  (AWS ALB / DigitalOcean LB)\n                            └───────┬───────┘\n                                    │\n                    ┌───────────────┼───────────────┐\n                    │               │               │\n            ┌───────┴───────┐ ┌───┴───────┐ ┌───────┴───────┐\n            │   Web Node 1  │ │ Web Node 2│ │   Web Node N  │\n            │  (Octane/Road) │ │(Octane/Rd)│ │  (Octane/Rd)  │\n            └───────┬───────┘ └───┬───────┘ └───────┬───────┘\n                    │               │               │\n                    └───────────────┼───────────────┘\n                                    │\n                    ┌───────────────┴───────────────┐\n                    │        Redis Cluster           │\n                    │  ┌─────────────────────────┐  │\n                    │  │ Session / Cache / Cart   │  │\n                    │  │ Inventory Reservation    │  │\n                    │  └─────────────────────────┘  │\n                    └───────────────┬───────────────┘\n                                    │\n                    ┌───────────────┴───────────────┐\n                    │       MySQL (Galera/RDS)       │\n                    │  ┌─────────────────────────┐  │\n                    │  │  Orders / Products /     │  │\n                    │  │  Users / Tenants         │  │\n                    │  └─────────────────────────┘  │\n                    └───────────────┬───────────────┘\n                                    │\n                    ┌───────────────┴───────────────┐\n                    │       Queue Workers            │\n                    │  (Horizon — order fulfillment, │\n                    │   email, search indexing,      │\n                    │   analytics)                    │\n                    └───────────────┬───────────────┘\n                                    │\n                    ┌───────────────┴───────────────┐\n                    │       Reverb (WebSocket)       │\n                    │  ┌─────────────────────────┐  │\n                    │  │ Real-time order status,  │  │\n                    │  │ dashboard updates        │  │\n                    │  └─────────────────────────┘  │\n                    └───────────────┬───────────────┘\n                                    │\n                    ┌───────────────┴───────────────┐\n                    │       Meilisearch              │\n                    │  ┌─────────────────────────┐  │\n                    │  │ Per-tenant product       │  │\n                    │  │ search indexes           │  │\n                    │  └─────────────────────────┘  │\n                    └───────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Decisions"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Octane (Swoole/RoadRunner)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each web node persists in memory, eliminating framework boot time on every request. Critical for the 500ms page load budget."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis for cart + inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory atomic operations avoid database contention during high-frequency cart mutations and stock checks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue workers for fulfillment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order confirmation, email, analytics, and search indexing are asynchronous. This protects the checkout endpoint from downstream latency."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb for WebSockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native Laravel WebSockets server that uses the same Redis backend. No need for a separate Node.js service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meilisearch per-tenant indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full index isolation prevents cross-tenant data leakage in search results and allows independent index tuning."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database-level tenant scoping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TenantScope"
            }), " global scope ensures developers cannot accidentally write cross-tenant queries."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Test tenant isolation thoroughly because a bug in scoping can leak customer data across tenants."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "69-deployment-and-scaling-strategy",
      children: "6.9 Deployment and Scaling Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Deploy with separate queue per tenant to prevent noisy neighbor problems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Horizontal Scaling Rules"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scaling Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU > 70% for 5 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add Octane nodes behind load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory > 80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster mode with more shards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connections > 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read replicas for product browsing (read-heavy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue backlog > 1,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scale worker pods via Vapor/Forge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meilisearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search latency > 100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add replica nodes for read scaling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global scope filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic data isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query overhead per request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus::chain ordered jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactional integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-step failure handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scout + Meilisearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typo-tolerant search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync delay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagged tenant cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-tenant invalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity for shared data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan scout:import App\\Models\\Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Import products into search index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bus::chain([...])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered job execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database per tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher infrastructure cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meilisearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast fuzzy search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered async execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment idempotency needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagged Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-tenant invalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tag overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does multi-tenant data isolation work in this case study?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Single database with row-level security"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Tenant_id foreign key on all tables with global scopes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Separate application instance per tenant"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) API gateway routing"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Every table has a tenant_id column and models use global scopes for automatic filtering."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What search engine powers product search?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Elasticsearch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Algolia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Meilisearch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Typesense"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Meilisearch is used with Laravel Scout for real-time full-text search."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is idempotency important in payment processing?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To reduce code complexity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To prevent double charges on job retry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To improve database performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To simplify the data model"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Job retries can re-execute payment logic; idempotency ensures customers are charged only once."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are cache keys scoped per tenant?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Separate Redis databases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Tenant_id prefix on cache keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Query string parameter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Separate cache servers"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Cache keys are prefixed by tenant_id to prevent data leakage between tenants."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Multi-tenant e-commerce requires careful schema design with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tenant_id"
        }), " discriminator column on every business table and a global Eloquent scope to enforce isolation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capacity estimation grounds architectural decisions in data: read QPS of ~200, write QPS of ~50, ~5TB storage per year, and ~50GB Redis cache working set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The checkout pipeline is a multi-step distributed transaction: Redis cart → inventory reservation → DB transaction (order + items + inventory) → payment gateway → confirmation job. Failure at any step releases reservations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inventory management uses a two-layer approach: fast Redis reservations for concurrency safety during checkout, and a MySQL ledger (", (0,jsx_runtime.jsx)(_components.code, {
          children: "inventory_movements"
        }), ") for authoritative audit trail."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product search uses Laravel Scout with Meilisearch. Per-tenant indexes provide data isolation. Faceted filters (category, price, color, size) and sort options are passed through Meilisearch's filter and sort parameters."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Multi-tenant caching uses prefixed keys (", (0,jsx_runtime.jsx)(_components.code, {
          children: "tenant:{id}:{key}"
        }), "), Redis namespaces, and tag-based flushing to prevent cross-tenant cache pollution."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system architecture follows a layered topology: CDN → Load Balancer → Octane web nodes → Redis → MySQL → Queue Workers → Reverb → Meilisearch. Each layer scales independently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time order status updates are broadcast via Reverb over tenant-scoped and user-scoped channels."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain why we use a discriminator-based multi-tenancy strategy (shared schema with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tenant_id"
        }), ") instead of separate databases per tenant. What are the trade-offs?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Walk through the checkout pipeline step by step. What happens if the payment succeeds but the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProcessOrderConfirmation"
        }), " job fails? How does the system recover?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the cart stored in Redis rather than MySQL? What happens if a Redis node fails and cart data is lost?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the two-layer inventory management strategy. Why do we reserve stock in Redis and confirm in MySQL rather than doing everything in one database transaction?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do Meilisearch per-tenant indexes prevent cross-tenant data leakage? What would happen if we used a single shared index with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tenant_id"
        }), " filter attribute instead?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a coupon validation system"
          }), ": Design a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CouponService"
          }), " that validates a coupon code against a tenant's active promotions. Coupons can be percentage-based or fixed-amount, have minimum order values, usage limits (per-coupon and per-customer), and expiration dates. Integrate it into the existing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderService::checkout()"
          }), " method by passing a validated coupon and applying the discount to the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "grand_total"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add a product variant price override"
          }), ": Extend the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderService"
          }), " so that when an order item references a variant with its own price (not null), the variant price is used instead of the parent product price. If the variant price is null, fall back to the product price. Modify the checkout pipeline to store the correct ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unit_price"
          }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "order_items"
          }), " table."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a cache warming strategy"
          }), ": The system will experience traffic spikes during flash sales. Design a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CacheWarmCommand"
          }), " (Artisan command) that pre-populates Redis with the top 20% of products (by view count) for a given tenant. Include logic to warm the product detail, category listing, and search result caches. Schedule it to run 15 minutes before a scheduled flash sale."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a multi-tenant analytics aggregate service"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design and implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TenantAnalyticsService"
      }), " that computes and caches the following metrics for each tenant in near real-time:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily metrics"
        }), ": total orders, revenue, average order value, new customers, top 10 products by revenue, top 5 categories by units sold."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Processing"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MetricsAggregator"
        }), " job runs every 5 minutes. It reads from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "orders"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "order_items"
        }), " tables created since the last run, computes deltas, and upserts into a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "daily_metrics"
        }), " table (one row per tenant per day)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching"
        }), ": The computed metrics are cached in Redis with a 10-minute TTL under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tenant:{id}:analytics:daily:{date}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API endpoint"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/{tenant}/analytics/daily?from=2025-01-01&to=2025-01-31"
        }), " returns the cached metrics. If cache is empty, it triggers a synchronous computation (with a warning header ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-Cache: Miss"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broadcast"
        }), ": After each aggregation cycle, broadcast a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MetricsUpdated"
        }), " event via Reverb to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tenant.{id}.analytics"
        }), " so dashboards update live."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write the migration for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "daily_metrics"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TenantAnalyticsService"
      }), " class, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MetricsAggregator"
      }), " job, the API controller, and the Reverb event class. Include explanations of how you handle timezone consistency, concurrent aggregation runs, and cache invalidation when an order is refunded."]
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