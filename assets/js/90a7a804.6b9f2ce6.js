"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92271],{

/***/ 7935
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_42_interview_logistics_md_90a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-42-interview-logistics-md-90a.json
const site_docs_courses_laravel_42_interview_logistics_md_90a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/42-interview-logistics","title":"Chapter 42: Logistics & Supply Chain → Interview Q&A","description":"Previous HR & Recruitment — Interview Q&A","source":"@site/docs/courses/laravel/42-interview-logistics.md","sourceDirName":"courses/laravel","slug":"/laravel/42-interview-logistics","permalink":"/ai-engineering-journey/laravel/42-interview-logistics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":42,"frontMatter":{"id":"42-interview-logistics","slug":"/laravel/42-interview-logistics","title":"Chapter 42: Logistics & Supply Chain → Interview Q&A","sidebar_label":"Chapter 42: Logistics & Supply Chain → Interview Q&A","sidebar_position":42},"sidebar":"course-laravel","previous":{"title":"Chapter 41: Interview Q&A → Education & EdTech","permalink":"/ai-engineering-journey/laravel/41-interview-education"},"next":{"title":"Chapter 43: HR & Recruitment → Interview Q&A","permalink":"/ai-engineering-journey/laravel/43-interview-hr"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/42-interview-logistics.md


const frontMatter = {
	id: '42-interview-logistics',
	slug: '/laravel/42-interview-logistics',
	title: 'Chapter 42: Logistics & Supply Chain → Interview Q&A',
	sidebar_label: 'Chapter 42: Logistics & Supply Chain → Interview Q&A',
	sidebar_position: 42
};
const contentTitle = 'Chapter 42: Logistics & Supply Chain → Interview Q&A';

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. Logistics Domain Knowledge",
  "id": "1-logistics-domain-knowledge",
  "level": 2
}, {
  "value": "Q1: What are the core components of a supply chain management system, and how do they interact?",
  "id": "q1-what-are-the-core-components-of-a-supply-chain-management-system-and-how-do-they-interact",
  "level": 3
}, {
  "value": "Q2: Explain the difference between perpetual inventory and periodic inventory systems. Which is更适合 for a Laravel-based logistics platform?",
  "id": "q2-explain-the-difference-between-perpetual-inventory-and-periodic-inventory-systems-which-is更适合-for-a-laravel-based-logistics-platform",
  "level": 3
}, {
  "value": "Q3: What is safety stock, and how do you calculate it?",
  "id": "q3-what-is-safety-stock-and-how-do-you-calculate-it",
  "level": 3
}, {
  "value": "Q4: Describe the different transportation modes in logistics and their tradeoffs.",
  "id": "q4-describe-the-different-transportation-modes-in-logistics-and-their-tradeoffs",
  "level": 3
}, {
  "value": "Q5: What is the difference between FTL, LTL, and parcel shipping in trucking?",
  "id": "q5-what-is-the-difference-between-ftl-ltl-and-parcel-shipping-in-trucking",
  "level": 3
}, {
  "value": "Q6: What is a Bill of Lading (BOL), and what information does it contain?",
  "id": "q6-what-is-a-bill-of-lading-bol-and-what-information-does-it-contain",
  "level": 3
}, {
  "value": "Q7: Explain the concept of freight class and how it affects pricing.",
  "id": "q7-explain-the-concept-of-freight-class-and-how-it-affects-pricing",
  "level": 3
}, {
  "value": "2. Technical Implementation",
  "id": "2-technical-implementation",
  "level": 2
}, {
  "value": "Q8: How would you build an inventory prediction agent in Laravel?",
  "id": "q8-how-would-you-build-an-inventory-prediction-agent-in-laravel",
  "level": 3
}, {
  "value": "Q9: Implement a route optimization agent that minimizes delivery distance.",
  "id": "q9-implement-a-route-optimization-agent-that-minimizes-delivery-distance",
  "level": 3
}, {
  "value": "Q10: How would you automate shipment tracking with carrier API polling?",
  "id": "q10-how-would-you-automate-shipment-tracking-with-carrier-api-polling",
  "level": 3
}, {
  "value": "Q11: Design a supplier management agent that evaluates and tiers suppliers.",
  "id": "q11-design-a-supplier-management-agent-that-evaluates-and-tiers-suppliers",
  "level": 3
}, {
  "value": "Q12: How would you implement a warehouse automation agent for pick/pack optimization?",
  "id": "q12-how-would-you-implement-a-warehouse-automation-agent-for-pickpack-optimization",
  "level": 3
}, {
  "value": "Q13: Build a demand forecasting agent with seasonal analysis.",
  "id": "q13-build-a-demand-forecasting-agent-with-seasonal-analysis",
  "level": 3
}, {
  "value": "Q14: How would you implement a fleet management agent for maintenance prediction?",
  "id": "q14-how-would-you-implement-a-fleet-management-agent-for-maintenance-prediction",
  "level": 3
}, {
  "value": "Q15: Design a supply chain visibility agent that generates executive reports.",
  "id": "q15-design-a-supply-chain-visibility-agent-that-generates-executive-reports",
  "level": 3
}, {
  "value": "3. Architecture &amp; Design",
  "id": "3-architecture--design",
  "level": 2
}, {
  "value": "Q16: Design a real-time shipment tracking architecture using Laravel.",
  "id": "q16-design-a-real-time-shipment-tracking-architecture-using-laravel",
  "level": 3
}, {
  "value": "Q17: How would you architect a scalable order and inventory system that handles flash sales?",
  "id": "q17-how-would-you-architect-a-scalable-order-and-inventory-system-that-handles-flash-sales",
  "level": 3
}, {
  "value": "Q18: Design an IoT data ingestion pipeline for logistics sensor data.",
  "id": "q18-design-an-iot-data-ingestion-pipeline-for-logistics-sensor-data",
  "level": 3
}, {
  "value": "Q19: How would you design a multi-warehouse inventory allocation system?",
  "id": "q19-how-would-you-design-a-multi-warehouse-inventory-allocation-system",
  "level": 3
}, {
  "value": "Q20: How do you handle idempotency in logistics payment and shipment APIs?",
  "id": "q20-how-do-you-handle-idempotency-in-logistics-payment-and-shipment-apis",
  "level": 3
}, {
  "value": "Q21: Describe the architecture for a carrier rate shopping system.",
  "id": "q21-describe-the-architecture-for-a-carrier-rate-shopping-system",
  "level": 3
}, {
  "value": "4. Behavioral &amp; Scenario",
  "id": "4-behavioral--scenario",
  "level": 2
}, {
  "value": "Q22: Design a real-time shipment tracking platform from scratch.",
  "id": "q22-design-a-real-time-shipment-tracking-platform-from-scratch",
  "level": 3
}, {
  "value": "Q23: How would you build an inventory prediction system that prevents stockouts?",
  "id": "q23-how-would-you-build-an-inventory-prediction-system-that-prevents-stockouts",
  "level": 3
}, {
  "value": "Q24: Describe a supply chain management platform you would build. What features, architecture, and AI capabilities would it include?",
  "id": "q24-describe-a-supply-chain-management-platform-you-would-build-what-features-architecture-and-ai-capabilities-would-it-include",
  "level": 3
}, {
  "value": "Q25: Your team is building a last-mile delivery optimization system. How do you approach it?",
  "id": "q25-your-team-is-building-a-last-mile-delivery-optimization-system-how-do-you-approach-it",
  "level": 3
}, {
  "value": "Q26: A critical supplier has a 40% defect rate. Walk through how you&#39;d handle this technically and operationally.",
  "id": "q26-a-critical-supplier-has-a-40-defect-rate-walk-through-how-youd-handle-this-technically-and-operationally",
  "level": 3
}, {
  "value": "Q27: How would you handle a warehouse management system migration from a legacy system to your Laravel platform with zero downtime?",
  "id": "q27-how-would-you-handle-a-warehouse-management-system-migration-from-a-legacy-system-to-your-laravel-platform-with-zero-downtime",
  "level": 3
}, {
  "value": "Q28: A delivery driver reports that the mobile tracking app is showing incorrect ETA. How do you debug this?",
  "id": "q28-a-delivery-driver-reports-that-the-mobile-tracking-app-is-showing-incorrect-eta-how-do-you-debug-this",
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
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
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
        id: "chapter-42-logistics--supply-chain--interview-qa",
        children: "Chapter 42: Logistics & Supply Chain → Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/41-interview-education",
          children: "Interview Q&A — Education & EdTech"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/43-interview-hr",
          children: "HR & Recruitment — Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part IX: Interview Preparation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers common interview questions for Laravel developer roles at logistics, supply chain, and freight technology companies. Questions span domain knowledge, AI-powered technical implementation, architecture design, and behavioral scenarios specific to the logistics industry."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Logistics interview questions covering supply chain, inventory, shipping, route optimization, warehouse management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain models, inventory management, shipping optimization, route planning, real-time tracking"
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
            children: "PHP, Laravel, Eloquent, logistics domain knowledge"
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
      id: "1-logistics-domain-knowledge",
      children: "1. Logistics Domain Knowledge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/42-interview-logistics.png",
        alt: "Logistics Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-are-the-core-components-of-a-supply-chain-management-system-and-how-do-they-interact",
      children: "Q1: What are the core components of a supply chain management system, and how do they interact?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A supply chain management (SCM) system connects ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "suppliers"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "manufacturers"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "warehouses"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "carriers"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "customers"
      }), " into a unified flow of materials, information, and finances. The core components are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Procurement & Supplier Management"
        }), " → sourcing raw materials, managing purchase orders, evaluating supplier performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inventory Management"
        }), " → tracking stock levels across locations, setting reorder points, managing safety stock."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warehouse Management"
        }), " → receiving, putaway, pick/pack/ship workflows, bin location optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Order Management"
        }), " → order capture, fulfillment allocation, shipment scheduling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transportation & Fleet Management"
        }), " → carrier selection, route optimization, vehicle maintenance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shipment Tracking"
        }), " → real-time status updates, delivery confirmation, exception handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demand Forecasting"
        }), " → historical analysis, seasonal prediction, replenishment planning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These components interact through events: a new order triggers inventory reservation, which triggers pick/pack in the warehouse, which triggers carrier assignment and route optimization, which feeds into the tracking system. In Laravel, this event chain maps naturally to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "queued jobs"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "broadcast events"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI agent orchestration"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-difference-between-perpetual-inventory-and-periodic-inventory-systems-which-is更适合-for-a-laravel-based-logistics-platform",
      children: "Q2: Explain the difference between perpetual inventory and periodic inventory systems. Which is更适合 for a Laravel-based logistics platform?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Perpetual inventory"
      }), " updates stock levels in real-time with every transaction (sale, receipt, adjustment, transfer). The database always reflects the current on-hand quantity. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Periodic inventory"
      }), " relies on physical counts at fixed intervals, with stock levels calculated as: beginning inventory + purchases → estimated usage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Laravel logistics platform should implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "perpetual inventory"
      }), " using database transactions and atomic locks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "DB::transaction(function () use ($product, $quantity) {\n    $inventory = ProductInventory::where('product_id', $product->id)\n        ->lockForUpdate()\n        ->firstOrFail();\n\n    if ($inventory->quantity < $quantity) {\n        throw new InsufficientStockException($product, $inventory->quantity, $quantity);\n    }\n\n    $inventory->decrement('quantity', $quantity);\n    InventoryMovement::create([\n        'product_id' => $product->id,\n        'type' => 'outbound',\n        'quantity' => $quantity,\n        'reference_type' => 'order',\n        'reference_id' => $order->id,\n    ]);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lockForUpdate()"
      }), " prevents race conditions when multiple requests try to reserve stock simultaneously → a common failure mode in high-volume logistics systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-safety-stock-and-how-do-you-calculate-it",
      children: "Q3: What is safety stock, and how do you calculate it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Safety stock is extra inventory held to buffer against demand variability and supply uncertainty. It prevents stockouts when actual demand exceeds forecast or when suppliers deliver late."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard formula is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Safety Stock = Z × σ_d × √L\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Z"
        }), " = service level factor (1.65 for 95%, 2.33 for 99%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "σ_d"
        }), " = standard deviation of demand"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L"
        }), " = lead time in days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a Laravel logistics agent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SafetyStockCalculator\n{\n    public function calculate(\n        Collection $historicalDailyDemand,\n        int $leadTimeDays,\n        float $serviceLevel = 0.95\n    ): float {\n        $mean = $historicalDailyDemand->avg();\n        $stdDev = sqrt(\n            $historicalDailyDemand->reduce(fn ($carry, $d) =>\n                $carry + ($d - $mean) ** 2, 0\n            ) / max($historicalDailyDemand->count() - 1, 1)\n        );\n\n        $zScore = match (true) {\n            $serviceLevel >= 0.99 => 2.33,\n            $serviceLevel >= 0.95 => 1.65,\n            $serviceLevel >= 0.90 => 1.28,\n            default => 1.04,\n        };\n\n        return $zScore * $stdDev * sqrt($leadTimeDays);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-describe-the-different-transportation-modes-in-logistics-and-their-tradeoffs",
      children: "Q4: Describe the different transportation modes in logistics and their tradeoffs."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Air"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-value, time-sensitive, perishable goods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ocean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk, non-perishable, international shipments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Road (Truck)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional distribution, last-mile delivery, LTL/FTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy/bulk goods over land, intermodal containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipeline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Liquids, gas, specialized commodities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parcel/Courier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-unit high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce, documents, small packages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel logistics platforms often implement a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "carrier selection agent"
      }), " that evaluates these tradeoffs against shipment constraints (weight, destination, delivery deadline, budget) and selects the optimal mode programmatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-ftl-ltl-and-parcel-shipping-in-trucking",
      children: "Q5: What is the difference between FTL, LTL, and parcel shipping in trucking?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FTL (Full Truckload)"
        }), ": The shipment occupies the entire trailer. The customer pays for the full truck regardless of actual fill percentage. Best for large shipments (>10 pallets or >15,000 lbs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LTL (Less-Than-Truckload)"
        }), ": Multiple shippers share trailer space. The carrier consolidates shipments at hub terminals. Pricing is based on weight, dimensions, and freight class. Best for shipments between 150–15,000 lbs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parcel Shipping"
        }), ": Small packages handled by carriers like UPS, FedEx, USPS. Dimension (DIM) weight pricing applies. Best for packages under 150 lbs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Laravel rate-shopping agent might query carrier APIs for all three modes and present a cost/speed matrix:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$rates = collect();\nforeach ($carriers as $carrier) {\n    $rates->push([\n        'carrier' => $carrier->name,\n        'mode' => $this->determineMode($shipment),\n        'rate' => $carrier->getRate($shipment),\n        'transit_days' => $carrier->getTransitTime($shipment),\n        'service_level' => $carrier->getServiceLevel($shipment),\n    ]);\n}\nreturn $rates->sortBy('rate')->values();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-a-bill-of-lading-bol-and-what-information-does-it-contain",
      children: "Q6: What is a Bill of Lading (BOL), and what information does it contain?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bill of Lading"
      }), " is a legal document between the shipper and carrier detailing the shipment's origin, destination, parties, and terms. It serves three functions: as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "receipt"
      }), " for goods, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contract of carriage"
      }), ", and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "document of title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key fields: shipper name/address, consignee name/address, carrier name, origin, destination, piece count, weight, commodity description, NMFC freight class, hazardous materials designation, special instructions, signature lines."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a Laravel application, BOLs are typically generated as PDFs using Laravel's Blade templating engine rendered to PDF via DomPDF or Browsershot, populated from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Shipment"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Order"
      }), " models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-the-concept-of-freight-class-and-how-it-affects-pricing",
      children: "Q7: Explain the concept of freight class and how it affects pricing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Freight class (defined by the National Motor Freight Classification → NMFC) categorizes commodities into 18 classes (50–500) based on four characteristics: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "density"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stowability"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "handling"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "liability"
      }), ". Higher classes mean higher cost per pound because the freight is less dense, harder to stow, more difficult to handle, or more valuable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Laravel rate engine might use a lookup table mapping product categories to NMFC codes, then calculate DIM weight and apply the class-based rate multiplier:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$dimWeight = ($length * $width * $height) / $dimDivisor;\n$chargeableWeight = max($actualWeight, $dimWeight);\n$rate = $chargeableWeight * $baseRate * $classMultiplier;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-technical-implementation",
      children: "2. Technical Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-build-an-inventory-prediction-agent-in-laravel",
      children: "Q8: How would you build an inventory prediction agent in Laravel?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An inventory prediction agent forecasts future demand and calculates replenishment parameters. The implementation uses the Laravel AI SDK with structured output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Product;\nuse App\\Models\\ProductInventory;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\nuse Laravel\\AI\\Attributes\\Tool;\n\nclass InventoryPredictionAgent extends Agent\n{\n    protected string $instructions = 'You are an inventory prediction specialist. Analyze demand data and return JSON predictions.';\n\n    public function predictDemand(Product $product, int $daysAhead = 30): array\n    {\n        $history = ProductInventory::where('product_id', $product->id)\n            ->where('movement_type', 'outbound')\n            ->where('created_at', '>=', now()->subMonths(6))\n            ->selectRaw('DATE(created_at) as date, SUM(quantity) as daily_demand')\n            ->groupBy('date')\n            ->pluck('daily_demand');\n\n        $mean = $history->avg();\n        $stdDev = $this->standardDeviation($history, $mean);\n        $safetyStock = 1.65 * $stdDev * sqrt($product->lead_time_days);\n        $reorderPoint = ($mean * $product->lead_time_days) + $safetyStock;\n\n        $aiInsights = $this->ask(\"\n            Product: {$product->name}\n            Daily demand (mean): \" . round($mean, 2) . \"\n            Daily demand (std dev): \" . round($stdDev, 2) . \"\n            Lead time: {$product->lead_time_days} days\n            Current stock: {$product->current_stock}\n            Reorder point: \" . round($reorderPoint) . \"\n\n            Analyze inventory health and provide:\n            1. Stockout risk level (low/medium/high)\n            2. Recommended reorder quantity\n            3. Seasonal patterns observed\n            4. Specific actions to take\n        \");\n\n        return [\n            'product_id' => $product->id,\n            'predicted_daily_demand' => round($mean, 2),\n            'demand_std_dev' => round($stdDev, 2),\n            'safety_stock' => round($safetyStock),\n            'reorder_point' => round($reorderPoint),\n            'forecast_days' => $daysAhead,\n            'ai_insights' => $aiInsights,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-implement-a-route-optimization-agent-that-minimizes-delivery-distance",
      children: "Q9: Implement a route optimization agent that minimizes delivery distance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A route optimization agent solves a variant of the Traveling Salesman Problem using the nearest-neighbor heuristic, enhanced with priority weighting for time-sensitive deliveries:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Shipment;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\n\nclass RouteOptimizationAgent extends Agent\n{\n    protected string $instructions = 'You are a route optimization specialist. Generate optimized delivery sequences.';\n\n    public function optimizeRoute(array $stops, string $origin): array\n    {\n        $waypoints = collect($stops)->map(fn ($s) => [\n            'id' => $s['id'],\n            'address' => $s['address'],\n            'lat' => $s['lat'],\n            'lng' => $s['lng'],\n            'priority' => $s['priority'] ?? 1,\n            'time_window' => $s['time_window'] ?? null,\n        ]);\n\n        $distances = $this->fetchDistanceMatrix(\n            $origin,\n            $waypoints->pluck('address')->toArray()\n        );\n\n        $route = $this->solveTspWithPriorities($waypoints, $distances);\n\n        $summary = $this->ask(\"\n            Analyze this optimized delivery route:\n            - Stops: {$route->count()}\n            - Total distance: {$route->sum('distance_km')} km\n            - Priority stops: {$route->where('priority', '>', 1)->count()}\n\n            Provide:\n            1. Estimated fuel cost savings vs unoptimized route\n            2. Time window compliance assessment\n            3. Reordering recommendations if any stop is at risk\n        \");\n\n        return [\n            'route' => $route->toArray(),\n            'total_distance_km' => $route->sum('distance_km'),\n            'estimated_hours' => $route->sum('estimated_minutes') / 60,\n            'ai_recommendations' => $summary,\n        ];\n    }\n\n    protected function solveTspWithPriorities(\n        Collection $waypoints, array $distances\n    ): Collection {\n        $sorted = $waypoints->sortByDesc('priority')->values();\n        $route = collect();\n        $current = 0;\n        $visited = [0];\n\n        while (count($visited) < $sorted->count()) {\n            $bestNext = null;\n            $bestDist = PHP_FLOAT_MAX;\n\n            foreach ($sorted as $i => $stop) {\n                if (in_array($i, $visited)) {\n                    continue;\n                }\n                $dist = $distances[$current][$i] ?? PHP_FLOAT_MAX;\n                $weight = $dist / ($stop['priority'] ?: 1);\n\n                if ($weight < $bestDist) {\n                    $bestDist = $weight;\n                    $bestNext = $i;\n                }\n            }\n\n            if ($bestNext !== null) {\n                $visited[] = $bestNext;\n                $route->push($sorted[$bestNext]);\n                $current = $bestNext;\n            }\n        }\n\n        return $route;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-would-you-automate-shipment-tracking-with-carrier-api-polling",
      children: "Q10: How would you automate shipment tracking with carrier API polling?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a scheduled Laravel agent that polls carrier APIs, detects status changes, records tracking events, and triggers notifications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Shipment;\nuse App\\Models\\TrackingEvent;\nuse App\\Notifications\\ShipmentStatusChanged;\nuse Illuminate\\Support\\Facades\\Http;\n\nclass ShipmentTrackingAgent\n{\n    public function pollActiveShipments(): void\n    {\n        Shipment::whereIn('status', ['shipped', 'in_transit', 'out_for_delivery'])\n            ->chunk(100, function ($shipments) {\n                foreach ($shipments as $shipment) {\n                    $this->processShipment($shipment);\n                }\n            });\n    }\n\n    public function processShipment(Shipment $shipment): void\n    {\n        $carrier = $shipment->carrier;\n        $adapter = CarrierAdapterFactory::make($carrier->code);\n        $status = $adapter->getTrackingStatus($shipment->tracking_number);\n\n        if ($status['status'] !== $shipment->status) {\n            $previousStatus = $shipment->status;\n\n            DB::transaction(function () use ($shipment, $status) {\n                $shipment->update(['status' => $status['status']]);\n\n                TrackingEvent::create([\n                    'shipment_id' => $shipment->id,\n                    'status' => $status['status'],\n                    'location' => $status['location'] ?? null,\n                    'description' => $status['description'] ?? null,\n                    'timestamp' => $status['timestamp'] ?? now(),\n                    'raw_response' => $status['raw'] ?? null,\n                ]);\n            });\n\n            if (in_array($status['status'], ['delivered', 'exception', 'damaged'])) {\n                $shipment->order->customer->notify(\n                    new ShipmentStatusChanged($shipment, $previousStatus)\n                );\n            }\n\n            if ($status['status'] === 'delivered') {\n                $this->dispatchDeliveryConfirmation($shipment);\n            }\n\n            if ($status['status'] === 'exception') {\n                $this->escalateException($shipment, $status);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CarrierAdapterFactory"
      }), " pattern lets you add new carriers without modifying the tracking agent → each carrier implements a common ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CarrierAdapter"
      }), " interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-design-a-supplier-management-agent-that-evaluates-and-tiers-suppliers",
      children: "Q11: Design a supplier management agent that evaluates and tiers suppliers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A supplier management agent tracks performance metrics and generates automated procurement recommendations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Supplier;\nuse App\\Models\\PurchaseOrder;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\n\nclass SupplierEvaluationAgent extends Agent\n{\n    protected string $instructions = 'You are a supplier relationship manager. Evaluate performance and recommend actions.';\n\n    public function evaluateSupplier(Supplier $supplier): array\n    {\n        $orders = PurchaseOrder::where('supplier_id', $supplier->id)\n            ->where('created_at', '>=', now()->subMonths(6))\n            ->get();\n\n        $totalOrders = $orders->count();\n        $onTime = $orders->where('status', 'delivered')\n            ->where('delivered_at', '<=', DB::raw('expected_delivery_at'))\n            ->count();\n\n        $defective = PurchaseOrderItem::whereIn('purchase_order_id', $orders->pluck('id'))\n            ->where('defective_quantity', '>', 0)\n            ->sum('defective_quantity');\n        $totalItems = PurchaseOrderItem::whereIn('purchase_order_id', $orders->pluck('id'))\n            ->sum('quantity_ordered');\n\n        $onTimeRate = $totalOrders > 0 ? ($onTime / $totalOrders) * 100 : 0;\n        $defectRate = $totalItems > 0 ? ($defective / $totalItems) * 100 : 0;\n        $leadTimeAccuracy = $this->calculateLeadTimeAccuracy($orders);\n\n        // Calculate composite score\n        $score = ($onTimeRate * 0.4)\n            + ((100 - $defectRate) * 0.3)\n            + ($leadTimeAccuracy * 0.3);\n\n        $tier = match (true) {\n            $score >= 90 => 'platinum',\n            $score >= 75 => 'gold',\n            $score >= 60 => 'silver',\n            $score >= 40 => 'bronze',\n            default => 'probation',\n        };\n\n        $aiRecommendation = $this->ask(\"\n            Supplier: {$supplier->name}\n            Score: \" . round($score, 1) . \"\n            Tier: {$tier}\n            On-time rate: \" . round($onTimeRate, 1) . \"%\n            Defect rate: \" . round($defectRate, 2) . \"%\n            Lead time accuracy: \" . round($leadTimeAccuracy, 1) . \"%\n\n            Provide:\n            1. Whether to renew, renegotiate, or terminate\n            2. Specific negotiation points based on performance gaps\n            3. Risk assessment for sole-source dependency\n        \");\n\n        $supplier->update([\n            'performance_score' => round($score, 1),\n            'tier' => $tier,\n            'last_evaluated_at' => now(),\n        ]);\n\n        return [\n            'supplier_id' => $supplier->id,\n            'score' => round($score, 1),\n            'tier' => $tier,\n            'metrics' => [\n                'on_time_rate' => round($onTimeRate, 1),\n                'defect_rate' => round($defectRate, 2),\n                'lead_time_accuracy' => round($leadTimeAccuracy, 1),\n            ],\n            'ai_recommendation' => $aiRecommendation,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-would-you-implement-a-warehouse-automation-agent-for-pickpack-optimization",
      children: "Q12: How would you implement a warehouse automation agent for pick/pack optimization?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A warehouse agent optimizes pick paths, assigns bin locations, and creates efficient pick batches:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Order;\nuse App\\Models\\Warehouse;\nuse App\\Models\\WarehouseBin;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\n\nclass WarehouseAutomationAgent extends Agent\n{\n    protected string $instructions = 'You are a warehouse operations specialist. Optimize picking and bin assignment.';\n\n    public function createPickBatch(Warehouse $warehouse, Collection $orders): array\n    {\n        $pickItems = collect();\n        foreach ($orders as $order) {\n            foreach ($order->items as $item) {\n                $bin = WarehouseBin::where('warehouse_id', $warehouse->id)\n                    ->where('product_id', $item->product_id)\n                    ->where('quantity', '>=', $item->quantity)\n                    ->orderBy('zone')\n                    ->orderBy('aisle')\n                    ->orderBy('shelf')\n                    ->first();\n\n                if ($bin) {\n                    $pickItems->push([\n                        'order_id' => $order->id,\n                        'product_id' => $item->product_id,\n                        'quantity' => $item->quantity,\n                        'bin' => \"{$bin->zone}-{$bin->aisle}-{$bin->shelf}\",\n                        'zone' => $bin->zone,\n                    ]);\n                }\n            }\n        }\n\n        $optimizedPath = $this->solvePickPath($pickItems);\n\n        $aiInsights = $this->ask(\"\n            Warehouse: {$warehouse->name}\n            Orders in batch: {$orders->count()}\n            Pick items: {$pickItems->count()}\n            Zones: {$pickItems->pluck('zone')->unique()->join(', ')}\n\n            Provide:\n            1. Estimated pick time\n            2. Optimal picker headcount\n            3. Zone congestion warning if any zone has >40 picks\n            4. Recommendations to rearrange fast-moving SKUs closer to packing\n        \");\n\n        return [\n            'pick_items' => $optimizedPath,\n            'total_picks' => $optimizedPath->count(),\n            'estimated_minutes' => $optimizedPath->count() * 0.5,\n            'ai_insights' => $aiInsights,\n        ];\n    }\n\n    protected function solvePickPath(Collection $items): Collection\n    {\n        return $items->sortBy(function ($item) {\n            $parts = explode('-', $item['bin']);\n            return sprintf('%s%04d%04d', $parts[0], (int)$parts[1], (int)$parts[2]);\n        })->values();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-build-a-demand-forecasting-agent-with-seasonal-analysis",
      children: "Q13: Build a demand forecasting agent with seasonal analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A demand forecasting agent aggregates historical data, computes seasonal factors, and generates forward-looking predictions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Order;\nuse App\\Models\\Product;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\n\nclass DemandForecastAgent extends Agent\n{\n    protected string $instructions = 'You are a demand forecasting analyst. Predict future demand using seasonal decomposition.';\n\n    public function forecast(Product $product, int $monthsAhead = 3): array\n    {\n        $history = Order::whereHas('items', fn ($q) => $q->where('product_id', $product->id))\n            ->where('created_at', '>=', now()->subYears(2))\n            ->selectRaw(\"DATE_FORMAT(created_at, '%Y-%m') as month, SUM(quantity) as total\")\n            ->groupBy('month')\n            ->orderBy('month')\n            ->pluck('total', 'month');\n\n        $monthlyTotals = $history->values();\n        $totalMonths = $monthlyTotals->count();\n        $grandAverage = $monthlyTotals->avg();\n\n        // Calculate seasonal indices\n        $seasonalFactors = collect();\n        foreach (range(0, 11) as $monthIndex) {\n            $monthValues = $history->filter(fn ($v, $k) =>\n                (int) substr($k, 5, 2) === ($monthIndex + 1)\n            );\n            $monthAvg = $monthValues->avg() ?: $grandAverage;\n            $seasonalFactors->push($monthAvg / ($grandAverage ?: 1));\n        }\n\n        // Linear trend\n        $xMean = ($totalMonths - 1) / 2;\n        $yMean = $grandAverage;\n        $numerator = 0;\n        $denominator = 0;\n        foreach ($monthlyTotals as $i => $y) {\n            $numerator += ($i - $xMean) * ($y - $yMean);\n            $denominator += ($i - $xMean) ** 2;\n        }\n        $trendSlope = $denominator > 0 ? $numerator / $denominator : 0;\n\n        // Generate forecasts\n        $forecasts = [];\n        for ($m = 1; $m <= $monthsAhead; $m++) {\n            $futureIndex = $totalMonths + $m - 1;\n            $trendComponent = $grandAverage + ($trendSlope * $futureIndex);\n            $seasonalIndex = $seasonalFactors[(now()->addMonths($m))->month - 1];\n            $forecasts[] = round($trendComponent * $seasonalIndex);\n        }\n\n        $aiAnalysis = $this->ask(\"\n            Product: {$product->name}\n            Historical monthly avg: \" . round($grandAverage) . \"\n            Trend slope: \" . round($trendSlope, 2) . \" units/month\n            Forecast (next {$monthsAhead} months): \" . json_encode($forecasts) . \"\n            Peak seasonal factor: \" . round($seasonalFactors->max(), 2) . \"\n            Low seasonal factor: \" . round($seasonalFactors->min(), 2) . \"\n\n            Provide:\n            1. Overall demand trend direction\n            2. Anomalous months that deviate from pattern\n            3. Inventory strategy recommendation for peak season\n            4. Confidence level of this forecast\n        \");\n\n        return [\n            'product_id' => $product->id,\n            'forecasts' => $forecasts,\n            'seasonal_factors' => $seasonalFactors->toArray(),\n            'trend_slope' => round($trendSlope, 4),\n            'ai_analysis' => $aiAnalysis,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-would-you-implement-a-fleet-management-agent-for-maintenance-prediction",
      children: "Q14: How would you implement a fleet management agent for maintenance prediction?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Vehicle;\nuse App\\Models\\MaintenanceLog;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\n\nclass FleetManagementAgent extends Agent\n{\n    protected string $instructions = 'You are a fleet maintenance specialist. Predict failures and schedule maintenance.';\n\n    public function assessVehicleHealth(Vehicle $vehicle): array\n    {\n        $logs = MaintenanceLog::where('vehicle_id', $vehicle->id)\n            ->orderBy('created_at')\n            ->get();\n\n        $totalKm = $vehicle->current_odometer;\n        $lastOilChange = $logs->where('type', 'oil_change')->last()?->odometer_at_service ?? 0;\n        $kmSinceOilChange = $totalKm - $lastOilChange;\n\n        $engineTempAlerts = $logs->where('type', 'alert')\n            ->where('description', 'like', '%engine temp%')\n            ->count();\n\n        $brakeWearAlerts = $logs->where('type', 'alert')\n            ->where('description', 'like', '%brake%')\n            ->count();\n\n        $predictions = [];\n        if ($kmSinceOilChange > 8000) {\n            $predictions[] = ['component' => 'oil_change', 'urgency' => 'due_soon',\n                'due_in_km' => 10000 - $kmSinceOilChange];\n        }\n        if ($engineTempAlerts > 3) {\n            $predictions[] = ['component' => 'cooling_system', 'urgency' => 'inspect',\n                'reason' => 'Repeated high-temperature alerts'];\n        }\n        if ($brakeWearAlerts > 2) {\n            $predictions[] = ['component' => 'brakes', 'urgency' => 'schedule',\n                'reason' => 'Brake wear alerts detected'];\n        }\n\n        if ($totalKm % 50000 < 2000) {\n            $predictions[] = ['component' => 'timing_belt', 'urgency' => 'scheduled',\n                'due_in_km' => 50000 - ($totalKm % 50000)];\n        }\n\n        $aiAssessment = $this->ask(\"\n            Vehicle: {$vehicle->make} {$vehicle->model} ({$vehicle->year})\n            Total KM: {$totalKm}\n            KM since last oil change: {$kmSinceOilChange}\n            Active predictions: \" . json_encode($predictions) . \"\n            Total maintenance logs this year: {$logs->count()}\n\n            Provide:\n            1. Overall fleet health rating (good/fair/poor)\n            2. Maintenance schedule optimization\n            3. Cost projection for next quarter\n            4. Recommendation: repair vs replace if >15 years old\n        \");\n\n        return [\n            'vehicle_id' => $vehicle->id,\n            'health_status' => count($predictions) > 3 ? 'needs_attention' : 'good',\n            'predictions' => $predictions,\n            'ai_assessment' => $aiAssessment,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-design-a-supply-chain-visibility-agent-that-generates-executive-reports",
      children: "Q15: Design a supply chain visibility agent that generates executive reports."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents;\n\nuse App\\Models\\Order;\nuse App\\Models\\Shipment;\nuse App\\Models\\ProductInventory;\nuse App\\Models\\Supplier;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\AI\\Agent;\n\nclass SupplyChainVisibilityAgent extends Agent\n{\n    protected string $instructions = 'You are a supply chain analytics director. Generate executive visibility reports.';\n\n    public function generateReport(): array\n    {\n        $totalInventory = ProductInventory::sum('quantity');\n        $inventoryValue = ProductInventory::sum(DB::raw('quantity * unit_cost'));\n        $pendingOrders = Order::whereIn('status', ['pending', 'processing'])->count();\n        $activeShipments = Shipment::whereIn('status', ['in_transit', 'out_for_delivery'])->count();\n        $delayedShipments = Shipment::where('status', 'in_transit')\n            ->where('estimated_delivery', '<', now())\n            ->count();\n\n        $bottlenecks = $this->detectBottlenecks();\n\n        $aiInsights = $this->ask(\"\n            Supply Chain Status Report:\n            - Total inventory units: {$totalInventory}\n            - Inventory value: \\${$inventoryValue}\n            - Pending orders: {$pendingOrders}\n            - Active shipments: {$activeShipments}\n            - Delayed shipments: {$delayedShipments}\n            - Bottlenecks: \" . json_encode($bottlenecks) . \"\n\n            Generate strategic insights:\n            1. Overall supply chain health rating\n            2. Top 3 risks requiring immediate attention\n            3. Quick wins for the next 7 days\n            4. Strategic recommendations for the next quarter\n            5. Cost optimization opportunities\n        \");\n\n        return [\n            'generated_at' => now()->toIso8601String(),\n            'metrics' => [\n                'total_inventory_units' => $totalInventory,\n                'inventory_value' => $inventoryValue,\n                'pending_orders' => $pendingOrders,\n                'active_shipments' => $activeShipments,\n                'delayed_shipments' => $delayedShipments,\n                'on_time_rate' => $activeShipments > 0\n                    ? round((1 - $delayedShipments / $activeShipments) * 100, 1)\n                    : 100,\n            ],\n            'bottlenecks' => $bottlenecks,\n            'ai_strategic_insights' => $aiInsights,\n        ];\n    }\n\n    protected function detectBottlenecks(): array\n    {\n        $bottlenecks = [];\n\n        $lowStock = ProductInventory::whereRaw('quantity < reorder_point')->get();\n        if ($lowStock->isNotEmpty()) {\n            $bottlenecks[] = [\n                'type' => 'inventory',\n                'severity' => $lowStock->count() > 10 ? 'critical' : 'warning',\n                'message' => \"{$lowStock->count()} products below reorder point\",\n            ];\n        }\n\n        $overdueShipments = Shipment::where('estimated_delivery', '<', now())\n            ->where('status', 'in_transit')\n            ->count();\n        if ($overdueShipments > 0) {\n            $bottlenecks[] = [\n                'type' => 'shipment',\n                'severity' => $overdueShipments > 5 ? 'critical' : 'warning',\n                'message' => \"{$overdueShipments} shipments past estimated delivery\",\n            ];\n        }\n\n        return $bottlenecks;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-architecture--design",
      children: "3. Architecture & Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-design-a-real-time-shipment-tracking-architecture-using-laravel",
      children: "Q16: Design a real-time shipment tracking architecture using Laravel."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A real-time tracking system needs to ingest carrier updates, push status changes to customers, and handle high throughput. Here's the architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Carrier APIs ──► Polling Agent ──► Tracking Event Store ──► Laravel Reverb ──► Customer Dashboard\n                       │                                                  │\n                       └──► Exception Detector ──► Notification Queue ──► Email/SMS/Push\n                                   │\n                                   └──► Escalation Agent ──► Slack Alert\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Polling Agent"
          }), " → A scheduled Laravel command runs every 5 minutes, polling carrier APIs via adapter pattern. Each carrier implements a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CarrierAdapter"
          }), " interface (", (0,jsx_runtime.jsx)(_components.code, {
            children: "FedExAdapter"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UPSAdapter"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DHLAdapter"
          }), "), making the system extensible."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Store"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tracking_events"
          }), " table stores immutable events. Indexed by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shipment_id"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "created_at"
          }), " for fast timeline queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-Time Broadcasting"
          }), " → Laravel Reverb pushes status changes to authenticated customer channels:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "broadcast(new ShipmentStatusUpdated($shipment, $event))->toOthers();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exception Detection"
          }), " → A job analyzes incoming events and flags anomalies: delivery exceptions, location mismatches, delayed scans."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching Layer"
          }), " → Redis caches the latest status per tracking number with TTL to absorb duplicate reads from tracking pages:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Cache::put(\"tracking:{$trackingNumber}\", $latestStatus, 300);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling"
        }), " → The polling queue runs on dedicated Horizon workers. Carrier API rate limits are respected via a token bucket algorithm per carrier."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-would-you-architect-a-scalable-order-and-inventory-system-that-handles-flash-sales",
      children: "Q17: How would you architect a scalable order and inventory system that handles flash sales?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flash sales create extreme write contention on inventory quantities. The architecture requires:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pessimistic Locking with Queue Serialization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Reserve inventory via a queued job to serialize per-product access\nclass ReserveInventoryJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable;\n\n    public function __construct(\n        public Order $order,\n        public Collection $items\n    ) {\n        $this->onQueue('inventory-reservations');\n    }\n\n    public function handle(): void\n    {\n        DB::transaction(function () {\n            foreach ($this->items as $item) {\n                $inventory = ProductInventory::where('product_id', $item->product_id)\n                    ->lockForUpdate()\n                    ->firstOrFail();\n\n                throw_if(\n                    $inventory->quantity < $item->quantity,\n                    InsufficientStockException::class\n                );\n\n                $inventory->decrement('quantity', $item->quantity);\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis-based Inventory Counter for Hot Products:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function reserveQuick(string $sku, int $qty): bool\n{\n    $remaining = Redis::decrby(\"inventory:{$sku}\", $qty);\n    if ($remaining < 0) {\n        Redis::incrby(\"inventory:{$sku}\", $qty); // Rollback\n        return false;\n    }\n    // Async reconcile with database\n    ProcessInventoryReconciliation::dispatch($sku, $qty);\n    return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate read replicas for catalog browsing (inventory_quantity is eventually consistent on read models)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write-behind cache with Redis + DB dual-write and reconciliation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order deduplication at the API gateway using idempotency keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graceful degradation: show \"limited availability\" instead of exact counts during peak load"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-design-an-iot-data-ingestion-pipeline-for-logistics-sensor-data",
      children: "Q18: Design an IoT data ingestion pipeline for logistics sensor data."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logistics IoT sensors (GPS trackers, temperature loggers, vibration sensors, door sensors) generate high-frequency telemetry that must be ingested, processed, and stored reliably."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensors ──► MQTT Broker ──► Laravel MQTT Client ──► Ingestion Job ──► InfluxDB/TimescaleDB\n                              │                           │\n                              ▼                           ▼\n                          Stream Processor ──► Alert Engine ──► Notification\n                              │\n                              ▼\n                          Aggregate Writer ──► PostgreSQL (summaries)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ingestion endpoint (Laravel):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class IngestTelemetryController\n{\n    public function __invoke(Request $request): JsonResponse\n    {\n        $validated = $request->validate([\n            'device_id' => 'required|string|exists:fleet_devices,device_id',\n            'type' => 'required|in:gps,temperature,door,vibration',\n            'payload' => 'required|array',\n            'timestamp' => 'required|integer',\n            'signature' => 'required|string',\n        ]);\n\n        // Verify device authenticity\n        throw_unless(\n            $this->verifySignature($validated),\n            UnauthorizedHttpException::class\n        );\n\n        // Dispatch to processing pipeline\n        ProcessTelemetryBatch::dispatch($validated)\n            ->onQueue('iot-ingestion');\n\n        return response()->json(['accepted' => true], 202);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ProcessTelemetryBatch implements ShouldQueue\n{\n    public function handle(): void\n    {\n        // Write raw telemetry to time-series store\n        $this->writeToTimescale($this->data);\n\n        // Check threshold alerts\n        $this->checkThresholds($this->data);\n\n        // Update materialized aggregates\n        Cache::increment(\"device:{$deviceId}:reading_count\");\n    }\n\n    protected function checkThresholds(array $data): void\n    {\n        if ($data['type'] === 'temperature'\n            && ($data['payload']['value'] < -20 || $data['payload']['value'] > 30)) {\n            TemperatureAlert::dispatch($data['device_id'], $data['payload']['value']);\n        }\n\n        if ($data['type'] === 'door' && $data['payload']['state'] === 'open') {\n            DoorOpenEvent::dispatch($data['device_id']);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time-series storage"
        }), " (TimescaleDB or InfluxDB) for raw telemetry, PostgreSQL for aggregates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signature verification"
        }), " prevents spoofed device data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP 202 Accepted"
        }), " with async processing avoids blocking the sensor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch writes"
        }), " using PostgreSQL COPY or InfluxDB line protocol for throughput"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL-based retention"
        }), " → raw data expires after 90 days; hourly/daily aggregates persist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-would-you-design-a-multi-warehouse-inventory-allocation-system",
      children: "Q19: How would you design a multi-warehouse inventory allocation system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A multi-warehouse system must decide which warehouse fulfills each order based on proximity, inventory availability, and workload balancing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class InventoryAllocationService\n{\n    public function allocate(Order $order): AllocationResult\n    {\n        $eligibleWarehouses = Warehouse::whereHas('inventories', function ($q) use ($order) {\n            $q->whereIn('product_id', $order->items->pluck('product_id'))\n              ->whereRaw('quantity >= ?', [$order->items->sum('quantity')]);\n        })->get();\n\n        $scored = $eligibleWarehouses->map(function ($warehouse) use ($order) {\n            $distance = $this->geocodeService->distance(\n                $warehouse->address,\n                $order->shipping_address\n            );\n            $load = $warehouse->current_orders_today / ($warehouse->max_capacity ?: 1);\n            $inventoryScore = $this->calculateInventoryScore($warehouse, $order->items);\n\n            return [\n                'warehouse' => $warehouse,\n                'score' => ($distance * 0.4) + ($load * 100 * 0.3) + ($inventoryScore * 0.3),\n            ];\n        });\n\n        return new AllocationResult(\n            warehouse: $scored->sortBy('score')->first()['warehouse'] ?? null,\n            alternatives: $scored->sortBy('score')->take(3)->toArray(),\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The allocation strategy can be swapped at runtime via Laravel's service container → nearest warehouse, lowest cost, or workload-balanced."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-handle-idempotency-in-logistics-payment-and-shipment-apis",
      children: "Q20: How do you handle idempotency in logistics payment and shipment APIs?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logistics operations involve financial transactions (carrier payments, COD settlements, customs fees) where duplicate processing causes real monetary loss. Idempotency is enforced via:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PaymentController\n{\n    public function processPayment(Request $request): JsonResponse\n    {\n        $idempotencyKey = $request->header('Idempotency-Key');\n\n        // Check for existing result\n        $existing = Cache::get(\"idempotency:{$idempotencyKey}\");\n        if ($existing) {\n            return response()->json($existing, $existing['_status_code'] ?? 200);\n        }\n\n        $payment = DB::transaction(function () use ($request, $idempotencyKey) {\n            // Lock on idempotency key to prevent concurrent duplicates\n            $lock = Cache::lock(\"idempotency-lock:{$idempotencyKey}\", 10);\n            if (!$lock->get()) {\n                throw new ConflictHttpException('Request in progress');\n            }\n\n            $shipment = Shipment::findOrFail($request->shipment_id);\n            $result = $this->paymentGateway->charge($shipment);\n\n            Payment::create([\n                'idempotency_key' => $idempotencyKey,\n                'shipment_id' => $shipment->id,\n                'amount' => $result['amount'],\n                'status' => $result['status'],\n                'gateway_transaction_id' => $result['transaction_id'],\n            ]);\n\n            return $result;\n        });\n\n        // Cache result for 24 hours\n        Cache::put(\"idempotency:{$idempotencyKey}\", $payment, 86400);\n\n        return response()->json($payment);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idempotency_key"
      }), " is stored in the database with a unique index, ensuring even if the cache is cleared, duplicate requests cannot create duplicate payments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-describe-the-architecture-for-a-carrier-rate-shopping-system",
      children: "Q21: Describe the architecture for a carrier rate shopping system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A rate shopping system queries multiple carriers in parallel and returns the best option:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Request ──► RateShoppingController ──► RateShoppingService\n                                              │\n                    ┌─────────────────────────┼────────────────────────┐\n                    ▼                         ▼                        ▼\n            FedExClient              UPSClient                DHLClient\n                    │                         │                        │\n                    ▼                         ▼                        ▼\n              FedEx API                 UPS API                  DHL API\n                    │                         │                        │\n                    └─────────────────────────┼────────────────────────┘\n                                              ▼\n                                      Aggregator\n                                      (sort, filter, cache)\n                                              │\n                                              ▼\n                                      Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel execution with concurrent HTTP calls:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class RateShoppingService\n{\n    public function shop(Shipment $shipment): Collection\n    {\n        $carriers = Carrier::where('active', true)->get();\n\n        $rates = $carriers->map(function ($carrier) use ($shipment) {\n            return Http::timeout(5)\n                ->post($carrier->api_endpoint . '/rates', [\n                    'origin_zip' => $shipment->origin_zip,\n                    'destination_zip' => $shipment->destination_zip,\n                    'weight' => $shipment->weight_kg,\n                    'dimensions' => $shipment->dimensions,\n                    'service' => $carrier->services()->pluck('code'),\n                ])->json();\n        });\n\n        return collect($rates)\n            ->flatten(1)\n            ->sortBy('total_charge')\n            ->take(10)\n            ->values();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using Laravel's concurrent HTTP client (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Http::pool()"
      }), ") improves response time by sending all carrier requests simultaneously instead of sequentially."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-behavioral--scenario",
      children: "4. Behavioral & Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-design-a-real-time-shipment-tracking-platform-from-scratch",
      children: "Q22: Design a real-time shipment tracking platform from scratch."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview approach:"
      }), " Start by clarifying scope, then walk through the full stack."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " A platform that lets customers, customer service agents, and logistics managers track shipments in real-time. Supports 10,000 active shipments, 1 million tracking events/day, 100 concurrent users."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "shipments"
        }), " → origin, destination, carrier, tracking_number, status, estimated_delivery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tracking_events"
        }), " → shipment_id, status, location, description, timestamp (immutable, append-only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "shipment_subscribers"
        }), " → user_id, shipment_id, notification_preferences"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/shipments/{trackingNumber}"
        }), " → public tracking endpoint (rate limited)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/shipments/{trackingNumber}/subscribe"
        }), " → WebSocket channel subscription"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/carrier/webhook"
        }), " → carrier webhook receiver (HMAC-signed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-Time Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel Reverb broadcasts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "presence-shipment.{trackingNumber}"
        }), " channels"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client-side Echo listener updates the tracking timeline in real-time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Broadcasting a tracking update\nShipmentStatusUpdated::dispatch($shipment, $event);\n\n// Customer subscribes via Echo\nEcho.private(`shipment.${trackingNumber}`)\n    .listen('ShipmentStatusUpdated', (e) => {\n        trackingTimeline.addEvent(e.event);\n        if (e.event.status === 'delivered') {\n            showConfirmation();\n        }\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reliability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carrier webhook retry with exponential backoff (up to 3 retries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fallback polling every 15 minutes for carriers without webhooks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deduplication via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(shipment_id, carrier_event_id)"
        }), " unique index"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dead letter queue for unprocessable webhook payloads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel Pulse dashboard showing tracking event throughput, carrier latency, webhook failure rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert if any carrier's webhook success rate drops below 95%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-how-would-you-build-an-inventory-prediction-system-that-prevents-stockouts",
      children: "Q23: How would you build an inventory prediction system that prevents stockouts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview approach:"
      }), " Start with the business problem, then propose a phased implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 → Statistical Baseline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate daily demand mean and standard deviation per SKU"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute safety stock: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Z × σ × √L"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set reorder point: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(daily demand × lead time) + safety stock"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert when inventory drops below reorder point"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 → Seasonal Adjustment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group historical data by month/weekday"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute seasonal indices per period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply seasonal factor to base prediction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 → AI Enhancement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feed historical demand, seasonal factors, and external data (promotions, weather, holidays) into an LLM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The AI agent produces structured predictions with confidence levels using the Laravel AI SDK"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class InventoryPredictionService\n{\n    public function __construct(\n        private DemandForecastAgent $forecastAgent,\n        private SafetyStockCalculator $safetyStock,\n    ) {}\n\n    public function predict(Product $product): Prediction\n    {\n        $forecast = $this->forecastAgent->forecast($product, 30);\n        $safety = $this->safetyStock->calculate(\n            $product->dailyDemandHistory(),\n            $product->lead_time_days,\n            0.95\n        );\n\n        return new Prediction(\n            product: $product,\n            dailyForecast: $forecast['forecasts'][0],\n            safetyStock: $safety,\n            reorderPoint: ($forecast['forecasts'][0] * $product->lead_time_days) + $safety,\n            confidence: $forecast['ai_analysis']['confidence'] ?? 'medium',\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4 → Closed-Loop Automation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When predicted stockout probability exceeds 70%, auto-generate a purchase order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human approval gate for orders exceeding $10,000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-delivery analysis compares predicted vs actual demand, adjusts model parameters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases Handled:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New products"
        }), " → use category-average demand until 30 days of history exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outliers"
        }), " → winsorize at 99th percentile to avoid one Black Friday skewing the model"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow movers"
        }), " → minimum safety stock floor of 5 units regardless of formula"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-describe-a-supply-chain-management-platform-you-would-build-what-features-architecture-and-ai-capabilities-would-it-include",
      children: "Q24: Describe a supply chain management platform you would build. What features, architecture, and AI capabilities would it include?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Platform:"
      }), " \"SupplyChainOS\" → a modular, multi-tenant SCM platform for mid-market companies (50–500 employees) managing 10,000–100,000 SKUs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Modules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Module"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Features"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI Agent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Procurement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PO management, supplier portal, RFQ automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supplier evaluation, auto-PO generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inventory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-warehouse stock, cycle counting, transfers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demand forecasting, reorder optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Warehouse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Putaway, pick/pack/ship, bin management, wave planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick path optimization, slotting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Order Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order intake, fulfillment allocation, returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocation optimization, return reason analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transportation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier management, rate shopping, label generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route optimization, carrier selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time tracking, customer portal, ETA predictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delay prediction, exception handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analytics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboards, KPIs, custom reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategic insights, anomaly detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tenant A ──►            ┌─────────────────────┐\nTenant B ──►            │   API Gateway        │\nTenant C ──►            │   (Rate Limiting,    │\n                         │    Auth, Throttling) │\n                         └─────────┬───────────┘\n                                   ▼\n                         ┌─────────────────────┐\n                         │  Laravel Application │\n                         │  (Modules as Services)│\n                         └──┬──────┬──────┬────┘\n                            ▼      ▼      ▼\n                    ┌──────┐ ┌──────┐ ┌──────┐\n                    │PostgreSQL│ │ Redis │ │Queue  │\n                    └──────┘ └──────┘ └──────┘\n                            │\n                            ▼\n                    ┌─────────────────────┐\n                    │  AI Agent Layer      │\n                    │  (Laravel AI SDK)    │\n                    │  - Forecasting       │\n                    │  - Optimization      │\n                    │  - Anomaly Detection│\n                    └─────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Tenancy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database-per-tenant for data isolation (critical in supply chain where customer inventory data is sensitive)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared Redis for rate limiting, job queue per tenant namespace"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tenant-scoped AI agents with isolated conversation history"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Integration Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inventory Prediction Agent"
        }), " → daily forecast per SKU, reorder suggestions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route Optimization Agent"
        }), " → TSP solver with priority weighting for time-sensitive shipments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supplier Evaluation Agent"
        }), " → automated scorecards and tier assignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demand Forecasting Agent"
        }), " → seasonal decomposition with trend analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anomaly Detection Agent"
        }), " → flags unusual order patterns, supplier delays, inventory discrepancies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read-heavy inventory browsing goes through Redis cache with 60-second TTL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write-heavy order processing uses dedicated queue workers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carrier API calls use connection pooling and rate limit awareness per carrier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracking event ingestion is fire-and-forget with batch persistence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-your-team-is-building-a-last-mile-delivery-optimization-system-how-do-you-approach-it",
      children: "Q25: Your team is building a last-mile delivery optimization system. How do you approach it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A regional delivery fleet handles 500 stops/day across 10 vehicles. Routes are currently planned manually by dispatchers, resulting in 30% excess mileage and frequent missed delivery windows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Data Collection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical delivery data: stop locations, time-on-site, route completion times"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vehicle constraints: capacity, operating hours, driver shift limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer constraints: delivery time windows, special instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Route Optimization Engine:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a route solver using the nearest-neighbor heuristic with time-window constraints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RouteOptimizationAgent"
        }), " that analyzes routes and suggests improvements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class LastMileOptimizer\n{\n    public function optimize(Collection $stops, Collection $vehicles): array\n    {\n        // Cluster stops by geographic region\n        $clusters = $this->dbscanCluster($stops, $vehicles->count());\n\n        // Assign clusters to vehicles based on capacity\n        $assignments = $this->assignVehicles($clusters, $vehicles);\n\n        // Solve TSP per vehicle with time-window constraints\n        foreach ($assignments as &$assignment) {\n            $assignment['route'] = $this->solveConstrainedTsp(\n                $assignment['stops'],\n                $assignment['vehicle']\n            );\n        }\n\n        return $assignments;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Real-Time Adjustments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drivers use a mobile app that reports GPS position every 30 seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backend recalculates remaining route when a stop is completed early or late"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a new urgent pickup request arrives, the system determines which driver can absorb it with minimal disruption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Feedback Loop:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actual vs predicted delivery times are compared daily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The model learns stop-specific service time distributions (a downtown office takes 5 minutes, a residential stop takes 3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly AI-generated reports highlight drivers with consistently optimized vs suboptimal routing patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-a-critical-supplier-has-a-40-defect-rate-walk-through-how-youd-handle-this-technically-and-operationally",
      children: "Q26: A critical supplier has a 40% defect rate. Walk through how you'd handle this technically and operationally."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Response:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm the data"
        }), " by querying the supplier's quality metrics in the database:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$supplier = Supplier::with('purchaseOrders.items')->findOrFail($id);\n$defectRate = $supplier->purchaseOrders()\n    ->join('purchase_order_items', 'purchase_orders.id', '=', 'purchase_order_items.purchase_order_id')\n    ->selectRaw('SUM(defective_quantity) / SUM(quantity_ordered) * 100 as defect_rate')\n    ->value('defect_rate');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flag the supplier"
          }), " → update their tier to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "probation"
          }), " and trigger an alert."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto-adjust inventory"
          }), " → increase safety stock multiplier for this supplier's products to compensate for expected rejects:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$safetyMultiplier = match ($supplier->tier) {\n    'probation' => 2.0,\n    'bronze' => 1.5,\n    'silver' => 1.25,\n    default => 1.0,\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reroute incoming shipments"
        }), " to the quality inspection (QC) hold area instead of direct putaway:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$shipment->update(['routing_rule' => 'qc_inspection']);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notify stakeholders"
        }), " via the supplier evaluation agent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operational Response:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalate to procurement team with data-backed report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger supplier corrective action request (SCAR) workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Begin qualification of alternative suppliers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If contract allows, initiate chargeback for defective materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule a supplier onsite audit"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After 30 days, re-run the evaluation and check if defect rate improved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not, the supplier evaluation agent recommends termination and auto-generates a request for proposal (RFP) to alternative suppliers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-how-would-you-handle-a-warehouse-management-system-migration-from-a-legacy-system-to-your-laravel-platform-with-zero-downtime",
      children: "Q27: How would you handle a warehouse management system migration from a legacy system to your Laravel platform with zero downtime?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Strangler Fig pattern → gradually route functionality from the legacy system to the new Laravel platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 → Parallel Read (1–2 weeks):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy Laravel app alongside legacy WMS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both systems read from the same database (legacy writes, Laravel reads)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate that Laravel's read models match legacy output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automated comparison scripts nightly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 → Write Pilot (2–4 weeks):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate receiving workflows first (lowest risk)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel handles receiving; legacy system reads from shared database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ship orders from a single test warehouse in Laravel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for data discrepancies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 → Cutover by Module (4–8 weeks):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Week 4: Receiving ──► Laravel\nWeek 5: Putaway    ──► Laravel\nWeek 6: Picking    ──► Laravel\nWeek 7: Packing    ──► Laravel\nWeek 8: Shipping   ──► Laravel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each module cutover is gated by a 3-day observation period with manual verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4 → Legacy Retirement (Week 9):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy system placed in read-only mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical data migrated to archive database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy decommissioned after 30 days"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Laravel Patterns Used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository pattern"
        }), " → abstracts data access so both systems can coexist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-driven integration"
        }), " → domain events (", (0,jsx_runtime.jsx)(_components.code, {
          children: "OrderShipped"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InventoryAdjusted"
        }), ") keep both systems in sync during migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature flags"
        }), " → toggle individual warehouses between legacy and Laravel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback plan"
        }), " → each warehouse has a documented rollback procedure if discrepancies exceed threshold"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-a-delivery-driver-reports-that-the-mobile-tracking-app-is-showing-incorrect-eta-how-do-you-debug-this",
      children: "Q28: A delivery driver reports that the mobile tracking app is showing incorrect ETA. How do you debug this?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Check the data pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Is the GPS data reaching the backend? Check the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "telemetry_ingestions"
        }), " table for recent records from this driver's device."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Is the route calculation using the correct waypoints? Query the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shipment.waypoints"
        }), " JSON column."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Is the ETA calculation using the right formula? Check the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EtaCalculator"
        }), " service."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Common failure modes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETA frozen on same time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS updates not processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check MQTT connection, device battery optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETA jumping wildly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS coordinate outliers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add Kalman filter smoothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETA always 30 min off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong timezone handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure all timestamps are UTC; convert at display layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETA not updating after detour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route not recalculated on deviation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement route deviation detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Add observability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Log ETA calculation for debugging\nLog::debug('ETA calculated', [\n    'shipment_id' => $shipment->id,\n    'driver_id' => $driver->id,\n    'current_location' => $gpsReading,\n    'remaining_waypoints' => $remainingStops,\n    'calculated_eta' => $eta,\n    'traffic_factor' => $trafficMultiplier,\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Monitoring alert:"
      }), "\nIf any driver's ETA error exceeds 15 minutes for more than 3 consecutive readings, trigger an alert with the full calculation context for investigation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key logistics concepts for interview preparation."]
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
            children: "Supply Chain Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track goods from supplier to customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-entity chain with status tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain optimal stock levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder points + warehouse zones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize delivery distance and time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waypoint algorithms + traffic data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor shipments live"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS + event-driven status updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organize storage and picking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zone mapping + barcode scanning"
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
        }), " Quick reference for logistics interview topics."]
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
            children: "Logistics Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shipment, Inventory, Supplier, Warehouse, Fleet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance minimization + waypoint sequencing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder point + safety stock + ABC analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS integration + event-driven updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse Ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zone management + picking optimization"
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
            children: "Supply Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visibility vs complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding cost vs stockout risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal route vs recalculation cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shipment visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time accuracy vs battery life"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utilization vs picking efficiency"
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
        }), " Test your logistics interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What does route optimization minimize?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Only fuel cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Delivery distance and time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Only driver hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only vehicle wear"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) Delivery distance and time</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What is the key challenge in inventory management?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Product quality"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Balancing holding cost against stockout risk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Packaging design"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Supplier relationships"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) Balancing holding cost against stockout risk</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " How does real-time tracking update shipment status?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Manual updates only"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) GPS integration + event-driven triggers"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Daily batch updates"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Customer-reported status"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) GPS integration + event-driven triggers</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What does ABC analysis do in inventory?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Groups items by purchase frequency"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Categorizes items by value and importance"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Analyzes supplier performance"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Tracks warehouse capacity"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                    children: ["Answer</summary>B) Categorizes items by value and importance</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "concept-comparison-1",
                      children: "Concept Comparison"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Compare key logistics concepts for interview preparation."]
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
                            children: "Supply Chain Models"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Track goods from supplier to customer"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Multi-entity chain with status tracking"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Inventory Management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Maintain optimal stock levels"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Reorder points + warehouse zones"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Route Optimization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Minimize delivery distance and time"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Waypoint algorithms + traffic data"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Real-Time Tracking"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Monitor shipments live"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "GPS + event-driven status updates"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Warehouse Management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Organize storage and picking"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Zone mapping + barcode scanning"
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
                        }), " Quick reference for logistics interview topics."]
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
                            children: "Logistics Models"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Shipment, Inventory, Supplier, Warehouse, Fleet"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Route Optimization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Distance minimization + waypoint sequencing"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Inventory Control"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Reorder point + safety stock + ABC analysis"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Real-Time Tracking"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "GPS integration + event-driven updates"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Warehouse Ops"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Zone management + picking optimization"
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
                            children: "Supply Chain"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "End-to-end tracking"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Visibility vs complexity"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Inventory"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Stock optimization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Holding cost vs stockout risk"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Route Planning"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Delivery optimization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Optimal route vs recalculation cost"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Tracking"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Shipment visibility"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Real-time accuracy vs battery life"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Warehouse"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Storage management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Utilization vs picking efficiency"
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
                        }), " Test your logistics interview knowledge."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q1:"
                      }), " What does route optimization minimize?"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "A) Only fuel cost"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "B) Delivery distance and time"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "C) Only driver hours"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "D) Only vehicle wear"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                        children: ["Answer</summary>B) Delivery distance and time</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q2:"
                          }), " What is the key challenge in inventory management?"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "A) Product quality"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "B) Balancing holding cost against stockout risk"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "C) Packaging design"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "D) Supplier relationships"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                            children: ["Answer</summary>B) Balancing holding cost against stockout risk</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " How does real-time tracking update shipment status?"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "A) Manual updates only"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "B) GPS integration + event-driven triggers"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "C) Daily batch updates"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "D) Customer-reported status"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                children: ["Answer</summary>B) GPS integration + event-driven triggers</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Q4:"
                                  }), " What does ABC analysis do in inventory?"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "A) Groups items by purchase frequency"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "B) Categorizes items by value and importance"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "C) Analyzes supplier performance"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "D) Tracks warehouse capacity"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                    children: ["Answer</summary>B) Categorizes items by value and importance</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "concept-comparison-2",
                                      children: "Concept Comparison"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Compare key logistics concepts for interview preparation."]
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
                                            children: "Supply Chain Models"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Track goods from supplier to customer"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Multi-entity chain with status tracking"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Inventory Management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Maintain optimal stock levels"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Reorder points + warehouse zones"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Route Optimization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Minimize delivery distance and time"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Waypoint algorithms + traffic data"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Real-Time Tracking"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Monitor shipments live"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "GPS + event-driven status updates"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Warehouse Management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Organize storage and picking"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Zone mapping + barcode scanning"
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
                                        }), " Quick reference for logistics interview topics."]
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
                                            children: "Logistics Models"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Shipment, Inventory, Supplier, Warehouse, Fleet"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Route Optimization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Distance minimization + waypoint sequencing"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Inventory Control"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Reorder point + safety stock + ABC analysis"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Real-Time Tracking"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "GPS integration + event-driven updates"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Warehouse Ops"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Zone management + picking optimization"
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
                                            children: "Supply Chain"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "End-to-end tracking"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Visibility vs complexity"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Inventory"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Stock optimization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Holding cost vs stockout risk"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Route Planning"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Delivery optimization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Optimal route vs recalculation cost"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Tracking"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Shipment visibility"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Real-time accuracy vs battery life"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Warehouse"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Storage management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Utilization vs picking efficiency"
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
                                        }), " Test your logistics interview knowledge."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Q1:"
                                      }), " What does route optimization minimize?"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "A) Only fuel cost"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "B) Delivery distance and time"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "C) Only driver hours"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "D) Only vehicle wear"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                        children: ["Answer</summary>B) Delivery distance and time</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: "Q2:"
                                          }), " What is the key challenge in inventory management?"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "A) Product quality"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "B) Balancing holding cost against stockout risk"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "C) Packaging design"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "D) Supplier relationships"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                            children: ["Answer</summary>B) Balancing holding cost against stockout risk</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                children: "Q3:"
                                              }), " How does real-time tracking update shipment status?"]
                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "A) Manual updates only"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "B) GPS integration + event-driven triggers"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "C) Daily batch updates"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "D) Customer-reported status"
                                              }), "\n"]
                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                children: ["Answer</summary>B) GPS integration + event-driven triggers</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "Q4:"
                                                  }), " What does ABC analysis do in inventory?"]
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "A) Groups items by purchase frequency"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "B) Categorizes items by value and importance"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "C) Analyzes supplier performance"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "D) Tracks warehouse capacity"
                                                  }), "\n"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                    children: ["Answer</summary>B) Categorizes items by value and importance</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "concept-comparison-3",
                                                      children: "Concept Comparison"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Compare key logistics concepts for interview preparation."]
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
                                                            children: "Supply Chain Models"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Track goods from supplier to customer"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Multi-entity chain with status tracking"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Inventory Management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Maintain optimal stock levels"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Reorder points + warehouse zones"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Route Optimization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Minimize delivery distance and time"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Waypoint algorithms + traffic data"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Real-Time Tracking"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Monitor shipments live"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "GPS + event-driven status updates"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Warehouse Management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Organize storage and picking"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Zone mapping + barcode scanning"
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
                                                        }), " Quick reference for logistics interview topics."]
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
                                                            children: "Logistics Models"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Shipment, Inventory, Supplier, Warehouse, Fleet"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Route Optimization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Distance minimization + waypoint sequencing"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Inventory Control"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Reorder point + safety stock + ABC analysis"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Real-Time Tracking"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "GPS integration + event-driven updates"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Warehouse Ops"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Zone management + picking optimization"
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
                                                            children: "Supply Chain"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "End-to-end tracking"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Visibility vs complexity"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Inventory"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Stock optimization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Holding cost vs stockout risk"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Route Planning"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Delivery optimization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Optimal route vs recalculation cost"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Tracking"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Shipment visibility"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Real-time accuracy vs battery life"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Warehouse"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Storage management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Utilization vs picking efficiency"
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
                                                        }), " Test your logistics interview knowledge."]
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                        children: "Q1:"
                                                      }), " What does route optimization minimize?"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "A) Only fuel cost"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "B) Delivery distance and time"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "C) Only driver hours"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "D) Only vehicle wear"
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                        children: ["Answer</summary>B) Delivery distance and time</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                            children: "Q2:"
                                                          }), " What is the key challenge in inventory management?"]
                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "A) Product quality"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "B) Balancing holding cost against stockout risk"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "C) Packaging design"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "D) Supplier relationships"
                                                          }), "\n"]
                                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                            children: ["Answer</summary>B) Balancing holding cost against stockout risk</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                children: "Q3:"
                                                              }), " How does real-time tracking update shipment status?"]
                                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "A) Manual updates only"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "B) GPS integration + event-driven triggers"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "C) Daily batch updates"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "D) Customer-reported status"
                                                              }), "\n"]
                                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                children: ["Answer</summary>B) GPS integration + event-driven triggers</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                    children: "Q4:"
                                                                  }), " What does ABC analysis do in inventory?"]
                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "A) Groups items by purchase frequency"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "B) Categorizes items by value and importance"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "C) Analyzes supplier performance"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "D) Tracks warehouse capacity"
                                                                  }), "\n"]
                                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                    children: ["Answer</summary>B) Categorizes items by value and importance</details>\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "summary",
                                                                      children: "Summary"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "This chapter covered the interview Q&A landscape for Laravel developers targeting logistics and supply chain roles. The key areas to master are:"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Domain fluency"
                                                                        }), " → understand inventory math (safety stock, reorder points), transportation modes, warehouse workflows, and supply chain KPIs"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "AI agent implementation"
                                                                        }), " → be able to write real agent code using the Laravel AI SDK for demand forecasting, route optimization, supplier evaluation, and fleet management"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Architecture design"
                                                                        }), " → discuss real-time tracking pipelines, multi-warehouse allocation, IoT ingestion at scale, and carrier integration patterns"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "Scenario problem-solving"
                                                                        }), " → think through system migrations, debugging production issues, and building zero-downtime solutions"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "The Laravel edge"
                                                                        }), " → emphasize queues for async processing, Reverb for real-time updates, broadcasting for WebSocket delivery, atomic locks for inventory contention, and the AI SDK for intelligent agents"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "exercises",
                                                                      children: "Exercises"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Carrier Rate Cache"
                                                                          }), ": Design a caching strategy for carrier rate quotes that balances freshness (rates change daily) with response time (shoppers expect <500ms). Implement a Laravel solution using Cache tags and a background job that warms the cache each morning."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Warehouse Slotting Agent"
                                                                          }), ": Extend the ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "WarehouseAutomationAgent"
                                                                          }), " to analyze pick frequency per SKU and recommend bin relocations. Fast-moving items should move to黄金 aisle locations; slow movers to deep storage."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Multi-Echelon Inventory"
                                                                          }), ": Design a data model that supports multi-echelon inventory (central DC → regional warehouse → local fulfillment center). Write a Laravel agent that propagates demand signals upstream with lead-time offsets."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Customs Document Automation"
                                                                          }), ": Build an agent that generates customs documentation (commercial invoice, packing list, certificate of origin) from shipment data using LLM-powered field extraction and compliance validation."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Supplier Scorecard API"
                                                                          }), ": Design a REST API in Laravel that exposes supplier performance metrics. Include filtering by date range, trend data, and PDF export of scorecards."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Real-Time Fleet Map"
                                                                          }), ": Implement a Laravel Reverb channel that broadcasts vehicle GPS positions every 5 seconds. Design the client-side rendering strategy for a map with 50+ vehicles without overwhelming the browser."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Inventory Audit Reconciliation"
                                                                          }), ": Write a script that compares Redis inventory counters against PostgreSQL quantities, identifies discrepancies, and logs them for manual review. Handle the case where Redis has no record (cache miss) vs a mismatched value."]
                                                                        }), "\n"]
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