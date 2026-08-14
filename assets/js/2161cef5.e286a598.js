"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[67204],{

/***/ 53394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_30_logistics_md_216_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-30-logistics-md-216.json
const site_docs_courses_laravel_30_logistics_md_216_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/30-logistics","title":"Chapter 30: Logistics & Supply Chain Agents","description":"Previous HR Recruitment","source":"@site/docs/courses/laravel/30-logistics.md","sourceDirName":"courses/laravel","slug":"/laravel/30-logistics","permalink":"/ai-engineering-journey/laravel/30-logistics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"id":"30-logistics","slug":"/laravel/30-logistics","title":"Chapter 30: Logistics & Supply Chain Agents","sidebar_label":"Chapter 30: Logistics & Supply Chain Agents","sidebar_position":30},"sidebar":"course-laravel","previous":{"title":"Chapter 29: Education & EdTech","permalink":"/ai-engineering-journey/laravel/29-education"},"next":{"title":"Chapter 31: HR & Recruitment — AI-Powered Talent Agents","permalink":"/ai-engineering-journey/laravel/31-hr-recruitment"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/30-logistics.md


const frontMatter = {
	id: '30-logistics',
	slug: '/laravel/30-logistics',
	title: 'Chapter 30: Logistics & Supply Chain Agents',
	sidebar_label: 'Chapter 30: Logistics & Supply Chain Agents',
	sidebar_position: 30
};
const contentTitle = 'Chapter 30: Logistics & Supply Chain Agents';

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
  "value": "30.1 Logistics Data Models",
  "id": "301-logistics-data-models",
  "level": 3
}, {
  "value": "Shipment Model",
  "id": "shipment-model",
  "level": 4
}, {
  "value": "Inventory Model",
  "id": "inventory-model",
  "level": 4
}, {
  "value": "Supplier Model",
  "id": "supplier-model",
  "level": 4
}, {
  "value": "Warehouse Model",
  "id": "warehouse-model",
  "level": 4
}, {
  "value": "Purchase Order Model",
  "id": "purchase-order-model",
  "level": 4
}, {
  "value": "Fleet Model",
  "id": "fleet-model",
  "level": 4
}, {
  "value": "30.2 Inventory Prediction Agents",
  "id": "302-inventory-prediction-agents",
  "level": 3
}, {
  "value": "30.3 Route Optimization Agents",
  "id": "303-route-optimization-agents",
  "level": 3
}, {
  "value": "30.4 Shipment Tracking Automation",
  "id": "304-shipment-tracking-automation",
  "level": 3
}, {
  "value": "30.5 Supplier Management Agents",
  "id": "305-supplier-management-agents",
  "level": 3
}, {
  "value": "30.6 Warehouse Automation Agents",
  "id": "306-warehouse-automation-agents",
  "level": 3
}, {
  "value": "30.7 Demand Forecasting Agents",
  "id": "307-demand-forecasting-agents",
  "level": 3
}, {
  "value": "30.8 Fleet Management Agents",
  "id": "308-fleet-management-agents",
  "level": 3
}, {
  "value": "30.9 Supply Chain Visibility Dashboard",
  "id": "309-supply-chain-visibility-dashboard",
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
        id: "chapter-30-logistics--supply-chain-agents",
        children: "Chapter 30: Logistics & Supply Chain Agents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/29-education",
          children: "Education"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/31-hr-recruitment",
          children: "HR Recruitment"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement logistics data models for shipments, inventory, suppliers, warehouses, fleet, and orders using Laravel migrations and Eloquent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build AI agents that predict inventory demand and calculate reorder points to prevent stockouts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement route optimization agents that minimize delivery distance and time using waypoint algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct shipment tracking agents with automated status detection, exception handling, and multi-channel notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy supplier evaluation agents that generate performance scorecards and automate procurement decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create warehouse automation agents that optimize pick/pack workflows and bin location assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build demand forecasting agents using seasonal analysis and machine learning models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement fleet management agents for vehicle health monitoring and maintenance scheduling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct supply chain visibility dashboards with agent-generated real-time analytics reports"
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
        href: "../../assets/images/lessons/laravel/30-logistics/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/30-logistics/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/30-logistics/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/30-logistics/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/30-logistics/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/30-logistics/visual-explanation.png",
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
            children: "Data Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logistics data models for inventory, shipments, routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design schemas for supply chain management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory Prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI agents for inventory forecasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict demand using historical data and seasonality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route optimization agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize delivery routes for cost and time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shipment Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated shipment tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track shipments across carriers with status updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supplier Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supplier management agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate supplier performance and automate procurement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse operations agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize picking, packing, and inventory placement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Order] --> B[Laravel App]     B --> C[Inventory Agent]     B --> D[Route Optimizer]     B --> E[Shipment Tracker]     B --> F[Supplier Agent]     B --> G[Warehouse Agent]     C --> H[Demand Forecast]     D --> I[Map Service]     E --> J[Carrier APIs]     F --> K[Procurement System]     G --> L[WMS] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/30-logistics.png",
        alt: "Logistics Domain"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "301-logistics-data-models",
      children: "30.1 Logistics Data Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Logistics schemas cover inventory, shipments, routes, suppliers, warehouses, and carriers with proper tracking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every logistics system rests on a core set of interconnected data models. These models represent the physical and digital flow of goods: where inventory lives, how it moves, who supplies it, and who receives it. In Laravel, we define these relationships through migrations and Eloquent models with proper foreign keys, indexes, and casts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "shipment-model",
      children: "Shipment Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('shipments', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('order_id')->constrained()->cascadeOnDelete();\n            $table->foreignId('warehouse_id')->constrained();\n            $table->foreignId('carrier_id')->nullable()->constrained('suppliers');\n            $table->string('tracking_number')->unique()->nullable();\n            $table->string('status')->default('pending');\n            $table->string('origin_address');\n            $table->string('destination_address');\n            $table->decimal('weight_kg', 8, 2)->nullable();\n            $table->decimal('shipping_cost', 10, 2)->nullable();\n            $table->timestamp('shipped_at')->nullable();\n            $table->timestamp('estimated_delivery')->nullable();\n            $table->timestamp('delivered_at')->nullable();\n            $table->json('waypoints')->nullable();\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('tracking_number');\n            $table->index('estimated_delivery');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('shipments');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\nuse Illuminate\\Database\\Eloquent\\Relations\\MorphMany;\n\nclass Shipment extends Model\n{\n    protected $fillable = [\n        'order_id', 'warehouse_id', 'carrier_id', 'tracking_number',\n        'status', 'origin_address', 'destination_address', 'weight_kg',\n        'shipping_cost', 'shipped_at', 'estimated_delivery', 'delivered_at',\n        'waypoints', 'metadata',\n    ];\n\n    protected $casts = [\n        'weight_kg' => 'decimal:2',\n        'shipping_cost' => 'decimal:2',\n        'shipped_at' => 'datetime',\n        'estimated_delivery' => 'datetime',\n        'delivered_at' => 'datetime',\n        'waypoints' => 'array',\n        'metadata' => 'array',\n    ];\n\n    public function order(): BelongsTo\n    {\n        return $this->belongsTo(Order::class);\n    }\n\n    public function warehouse(): BelongsTo\n    {\n        return $this->belongsTo(Warehouse::class);\n    }\n\n    public function carrier(): BelongsTo\n    {\n        return $this->belongsTo(Supplier::class, 'carrier_id');\n    }\n\n    public function trackingEvents(): HasMany\n    {\n        return $this->hasMany(ShipmentTrackingEvent::class);\n    }\n\n    public function scopeByStatus($query, string $status)\n    {\n        return $query->where('status', $status);\n    }\n\n    public function scopeOverdue($query)\n    {\n        return $query->whereNotNull('estimated_delivery')\n            ->where('estimated_delivery', '<', now())\n            ->whereNotIn('status', ['delivered', 'cancelled']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('shipment_tracking_events', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('shipment_id')->constrained()->cascadeOnDelete();\n            $table->string('status');\n            $table->string('location')->nullable();\n            $table->text('description')->nullable();\n            $table->json('metadata')->nullable();\n            $table->timestamp('recorded_at');\n            $table->timestamps();\n\n            $table->index('shipment_id');\n            $table->index('recorded_at');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('shipment_tracking_events');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass ShipmentTrackingEvent extends Model\n{\n    protected $fillable = [\n        'shipment_id', 'status', 'location', 'description',\n        'metadata', 'recorded_at',\n    ];\n\n    protected $casts = [\n        'metadata' => 'array',\n        'recorded_at' => 'datetime',\n    ];\n\n    public function shipment(): BelongsTo\n    {\n        return $this->belongsTo(Shipment::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "inventory-model",
      children: "Inventory Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('inventory_items', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('product_id')->constrained()->cascadeOnDelete();\n            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();\n            $table->integer('quantity_on_hand')->default(0);\n            $table->integer('quantity_reserved')->default(0);\n            $table->integer('quantity_available')\n                ->virtualAs('quantity_on_hand - quantity_reserved');\n            $table->integer('reorder_point')->default(10);\n            $table->integer('reorder_quantity')->default(50);\n            $table->string('bin_location')->nullable();\n            $table->string('lot_number')->nullable();\n            $table->date('expiry_date')->nullable();\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->unique(['product_id', 'warehouse_id']);\n            $table->index('reorder_point');\n            $table->index('expiry_date');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('inventory_items');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass InventoryItem extends Model\n{\n    protected $fillable = [\n        'product_id', 'warehouse_id', 'quantity_on_hand',\n        'quantity_reserved', 'reorder_point', 'reorder_quantity',\n        'bin_location', 'lot_number', 'expiry_date', 'metadata',\n    ];\n\n    protected $casts = [\n        'quantity_on_hand' => 'integer',\n        'quantity_reserved' => 'integer',\n        'reorder_point' => 'integer',\n        'reorder_quantity' => 'integer',\n        'expiry_date' => 'date',\n        'metadata' => 'array',\n    ];\n\n    public function product(): BelongsTo\n    {\n        return $this->belongsTo(Product::class);\n    }\n\n    public function warehouse(): BelongsTo\n    {\n        return $this->belongsTo(Warehouse::class);\n    }\n\n    public function movements(): HasMany\n    {\n        return $this->hasMany(InventoryMovement::class, 'inventory_item_id');\n    }\n\n    public function scopeLowStock($query)\n    {\n        return $query->whereColumn('quantity_on_hand', '<=', 'reorder_point');\n    }\n\n    public function scopeExpiringBefore($query, string $date)\n    {\n        return $query->whereNotNull('expiry_date')\n            ->where('expiry_date', '<', $date);\n    }\n\n    public function reserve(int $quantity): bool\n    {\n        if ($this->quantity_available < $quantity) {\n            return false;\n        }\n        $this->increment('quantity_reserved', $quantity);\n        return true;\n    }\n\n    public function release(int $quantity): void\n    {\n        $this->decrement('quantity_reserved', max(0, $quantity));\n    }\n\n    public function needsReorder(): bool\n    {\n        return $this->quantity_on_hand <= $this->reorder_point;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('inventory_movements', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('inventory_item_id')->constrained()->cascadeOnDelete();\n            $table->string('type');\n            $table->integer('quantity');\n            $table->string('reference_type')->nullable();\n            $table->unsignedBigInteger('reference_id')->nullable();\n            $table->text('reason')->nullable();\n            $table->foreignId('user_id')->nullable()->constrained();\n            $table->timestamps();\n\n            $table->index(['reference_type', 'reference_id']);\n            $table->index('type');\n            $table->index('created_at');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('inventory_movements');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass InventoryMovement extends Model\n{\n    protected $fillable = [\n        'inventory_item_id', 'type', 'quantity',\n        'reference_type', 'reference_id', 'reason', 'user_id',\n    ];\n\n    protected $casts = [\n        'quantity' => 'integer',\n    ];\n\n    public function inventoryItem(): BelongsTo\n    {\n        return $this->belongsTo(InventoryItem::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supplier-model",
      children: "Supplier Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('suppliers', function (Blueprint $table) {\n            $table->id();\n            $table->string('name');\n            $table->string('contact_name')->nullable();\n            $table->string('email')->nullable();\n            $table->string('phone')->nullable();\n            $table->string('address')->nullable();\n            $table->string('supplier_type');\n            $table->string('status')->default('active');\n            $table->integer('lead_time_days')->default(1);\n            $table->decimal('reliability_score', 5, 2)->nullable();\n            $table->decimal('quality_score', 5, 2)->nullable();\n            $table->decimal('cost_score', 5, 2)->nullable();\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('supplier_type');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('suppliers');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass Supplier extends Model\n{\n    protected $fillable = [\n        'name', 'contact_name', 'email', 'phone', 'address',\n        'supplier_type', 'status', 'lead_time_days',\n        'reliability_score', 'quality_score', 'cost_score', 'metadata',\n    ];\n\n    protected $casts = [\n        'lead_time_days' => 'integer',\n        'reliability_score' => 'decimal:2',\n        'quality_score' => 'decimal:2',\n        'cost_score' => 'decimal:2',\n        'metadata' => 'array',\n    ];\n\n    public function products(): HasMany\n    {\n        return $this->hasMany(Product::class);\n    }\n\n    public function purchaseOrders(): HasMany\n    {\n        return $this->hasMany(PurchaseOrder::class);\n    }\n\n    public function scorecard(): HasMany\n    {\n        return $this->hasMany(SupplierScorecard::class);\n    }\n\n    public function averageScore(): float\n    {\n        return round(\n            ($this->reliability_score + $this->quality_score + $this->cost_score) / 3,\n            2\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('supplier_scorecards', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('supplier_id')->constrained()->cascadeOnDelete();\n            $table->decimal('on_time_delivery_rate', 5, 2);\n            $table->decimal('defect_rate', 5, 2);\n            $table->decimal('lead_time_accuracy', 5, 2);\n            $table->decimal('communication_rating', 5, 2);\n            $table->decimal('overall_score', 5, 2);\n            $table->string('period');\n            $table->json('details')->nullable();\n            $table->timestamp('generated_at');\n            $table->timestamps();\n\n            $table->index(['supplier_id', 'period']);\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('supplier_scorecards');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass SupplierScorecard extends Model\n{\n    protected $fillable = [\n        'supplier_id', 'on_time_delivery_rate', 'defect_rate',\n        'lead_time_accuracy', 'communication_rating', 'overall_score',\n        'period', 'details', 'generated_at',\n    ];\n\n    protected $casts = [\n        'on_time_delivery_rate' => 'decimal:2',\n        'defect_rate' => 'decimal:2',\n        'lead_time_accuracy' => 'decimal:2',\n        'communication_rating' => 'decimal:2',\n        'overall_score' => 'decimal:2',\n        'details' => 'array',\n        'generated_at' => 'datetime',\n    ];\n\n    public function supplier(): BelongsTo\n    {\n        return $this->belongsTo(Supplier::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "warehouse-model",
      children: "Warehouse Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('warehouses', function (Blueprint $table) {\n            $table->id();\n            $table->string('name');\n            $table->string('code')->unique();\n            $table->string('address');\n            $table->string('city');\n            $table->string('state')->nullable();\n            $table->string('country');\n            $table->string('postal_code')->nullable();\n            $table->decimal('latitude', 10, 7)->nullable();\n            $table->decimal('longitude', 10, 7)->nullable();\n            $table->integer('capacity_cubic_m')->nullable();\n            $table->json('operating_hours')->nullable();\n            $table->string('status')->default('active');\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('code');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('warehouses');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass Warehouse extends Model\n{\n    protected $fillable = [\n        'name', 'code', 'address', 'city', 'state', 'country',\n        'postal_code', 'latitude', 'longitude', 'capacity_cubic_m',\n        'operating_hours', 'status', 'metadata',\n    ];\n\n    protected $casts = [\n        'latitude' => 'decimal:7',\n        'longitude' => 'decimal:7',\n        'capacity_cubic_m' => 'integer',\n        'operating_hours' => 'array',\n        'metadata' => 'array',\n    ];\n\n    public function inventoryItems(): HasMany\n    {\n        return $this->hasMany(InventoryItem::class);\n    }\n\n    public function shipments(): HasMany\n    {\n        return $this->hasMany(Shipment::class);\n    }\n\n    public function picklists(): HasMany\n    {\n        return $this->hasMany(Picklist::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "purchase-order-model",
      children: "Purchase Order Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('purchase_orders', function (Blueprint $table) {\n            $table->id();\n            $table->string('po_number')->unique();\n            $table->foreignId('supplier_id')->constrained();\n            $table->foreignId('warehouse_id')->constrained();\n            $table->string('status')->default('draft');\n            $table->date('order_date');\n            $table->date('expected_date')->nullable();\n            $table->date('received_date')->nullable();\n            $table->decimal('total_amount', 12, 2)->default(0);\n            $table->text('notes')->nullable();\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('order_date');\n            $table->index('expected_date');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('purchase_orders');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass PurchaseOrder extends Model\n{\n    protected $fillable = [\n        'po_number', 'supplier_id', 'warehouse_id', 'status',\n        'order_date', 'expected_date', 'received_date',\n        'total_amount', 'notes', 'metadata',\n    ];\n\n    protected $casts = [\n        'order_date' => 'date',\n        'expected_date' => 'date',\n        'received_date' => 'date',\n        'total_amount' => 'decimal:2',\n        'metadata' => 'array',\n    ];\n\n    public function supplier(): BelongsTo\n    {\n        return $this->belongsTo(Supplier::class);\n    }\n\n    public function warehouse(): BelongsTo\n    {\n        return $this->belongsTo(Warehouse::class);\n    }\n\n    public function items(): HasMany\n    {\n        return $this->hasMany(PurchaseOrderItem::class);\n    }\n\n    public function scopePending($query)\n    {\n        return $query->whereIn('status', ['draft', 'sent', 'confirmed']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('purchase_order_items', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('purchase_order_id')->constrained()->cascadeOnDelete();\n            $table->foreignId('product_id')->constrained();\n            $table->integer('quantity_ordered');\n            $table->integer('quantity_received')->default(0);\n            $table->decimal('unit_cost', 10, 2);\n            $table->decimal('total_cost', 12, 2)\n                ->virtualAs('quantity_ordered * unit_cost');\n            $table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('purchase_order_items');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fleet-model",
      children: "Fleet Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('vehicles', function (Blueprint $table) {\n            $table->id();\n            $table->string('license_plate')->unique();\n            $table->string('make');\n            $table->string('model');\n            $table->integer('year');\n            $table->string('vehicle_type');\n            $table->decimal('max_weight_kg', 8, 2);\n            $table->decimal('max_volume_m3', 8, 2);\n            $table->integer('odometer_km')->default(0);\n            $table->string('status')->default('available');\n            $table->date('last_maintenance_date')->nullable();\n            $table->date('next_maintenance_date')->nullable();\n            $table->integer('maintenance_interval_km')->default(10000);\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('vehicle_type');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('vehicles');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass Vehicle extends Model\n{\n    protected $fillable = [\n        'license_plate', 'make', 'model', 'year', 'vehicle_type',\n        'max_weight_kg', 'max_volume_m3', 'odometer_km', 'status',\n        'last_maintenance_date', 'next_maintenance_date',\n        'maintenance_interval_km', 'metadata',\n    ];\n\n    protected $casts = [\n        'year' => 'integer',\n        'max_weight_kg' => 'decimal:2',\n        'max_volume_m3' => 'decimal:2',\n        'odometer_km' => 'integer',\n        'last_maintenance_date' => 'date',\n        'next_maintenance_date' => 'date',\n        'maintenance_interval_km' => 'integer',\n        'metadata' => 'array',\n    ];\n\n    public function maintenanceRecords(): HasMany\n    {\n        return $this->hasMany(MaintenanceRecord::class);\n    }\n\n    public function isDueForMaintenance(): bool\n    {\n        if ($this->next_maintenance_date && $this->next_maintenance_date->isPast()) {\n            return true;\n        }\n        return false;\n    }\n\n    public function scopeAvailable($query)\n    {\n        return $query->where('status', 'available');\n    }\n\n    public function scopeDueForMaintenance($query)\n    {\n        return $query->whereNotNull('next_maintenance_date')\n            ->where('next_maintenance_date', '<=', now());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('maintenance_records', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('vehicle_id')->constrained()->cascadeOnDelete();\n            $table->string('type');\n            $table->text('description');\n            $table->integer('odometer_at_service');\n            $table->decimal('cost', 10, 2)->nullable();\n            $table->string('provider')->nullable();\n            $table->date('scheduled_date');\n            $table->date('completed_date')->nullable();\n            $table->string('status')->default('scheduled');\n            $table->json('parts_replaced')->nullable();\n            $table->text('notes')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('scheduled_date');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('maintenance_records');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "302-inventory-prediction-agents",
      children: "30.2 Inventory Prediction Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Inventory prediction agents forecast demand using historical sales data, seasonality, and market trends."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inventory prediction agents use historical sales data, current stock levels, and AI analysis to forecast demand and calculate optimal reorder points. The agent prevents stockouts while minimizing carrying costs by analyzing consumption patterns, seasonality, and lead times."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\InventoryItem;\nuse App\\Models\\InventoryMovement;\nuse App\\Models\\Product;\nuse App\\Models\\PurchaseOrder;\nuse App\\Models\\PurchaseOrderItem;\nuse Illuminate\\Support\\Collection;\nuse Illuminate\\Support\\Facades\\DB;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass InventoryPredictionAgent\n{\n    public function __construct(\n        protected int $lookbackDays = 90,\n        protected float $safetyStockFactor = 1.5,\n    ) {}\n\n    public function analyze(InventoryItem $item): InventoryPrediction\n    {\n        $movements = $this->getHistoricalMovements($item);\n        $dailyDemand = $this->calculateDailyDemand($movements);\n        $demandStdDev = $this->calculateStdDev($movements, $dailyDemand);\n        $leadTimeDays = $this->getLeadTime($item);\n        $reorderPoint = $this->calculateReorderPoint(\n            $dailyDemand, $leadTimeDays, $demandStdDev\n        );\n        $economicOrderQty = $this->calculateEOQ($item, $dailyDemand);\n        $daysUntilStockout = $this->daysUntilStockout($item, $dailyDemand);\n        $recommendation = $this->getAiRecommendation(\n            $item, $dailyDemand, $reorderPoint, $daysUntilStockout\n        );\n\n        return new InventoryPrediction(\n            item: $item,\n            dailyDemand: $dailyDemand,\n            demandStdDev: $demandStdDev,\n            leadTimeDays: $leadTimeDays,\n            reorderPoint: (int) ceil($reorderPoint),\n            economicOrderQty: (int) ceil($economicOrderQty),\n            daysUntilStockout: $daysUntilStockout,\n            recommendation: $recommendation,\n        );\n    }\n\n    protected function getHistoricalMovements(InventoryItem $item): Collection\n    {\n        $cutoff = now()->subDays($this->lookbackDays);\n\n        return InventoryMovement::where('inventory_item_id', $item->id)\n            ->whereIn('type', ['inbound', 'outbound', 'adjustment'])\n            ->where('created_at', '>=', $cutoff)\n            ->orderBy('created_at')\n            ->get();\n    }\n\n    protected function calculateDailyDemand(Collection $movements): float\n    {\n        $outboundTotal = $movements\n            ->where('type', 'outbound')\n            ->sum('quantity');\n\n        $negativeAdjustments = $movements\n            ->where('type', 'adjustment')\n            ->where('quantity', '<', 0)\n            ->sum('quantity');\n\n        $totalDemand = $outboundTotal + abs($negativeAdjustments);\n\n        return $totalDemand / max($this->lookbackDays, 1);\n    }\n\n    protected function calculateStdDev(Collection $movements, float $mean): float\n    {\n        $dailyTotals = $movements\n            ->where('type', 'outbound')\n            ->groupBy(fn ($m) => $m->created_at->format('Y-m-d'))\n            ->map(fn ($day) => $day->sum('quantity'));\n\n        if ($dailyTotals->isEmpty()) {\n            return 0;\n        }\n\n        $variance = $dailyTotals->reduce(\n            fn ($carry, $qty) => $carry + ($qty - $mean) ** 2, 0\n        ) / $dailyTotals->count();\n\n        return sqrt($variance);\n    }\n\n    protected function getLeadTime(InventoryItem $item): int\n    {\n        $product = $item->product;\n\n        if ($product && $product->supplier) {\n            return $product->supplier->lead_time_days;\n        }\n\n        return 7;\n    }\n\n    protected function calculateReorderPoint(\n        float $dailyDemand, int $leadTimeDays, float $stdDev\n    ): float {\n        $leadTimeDemand = $dailyDemand * $leadTimeDays;\n        $safetyStock = $stdDev * $this->safetyStockFactor * sqrt($leadTimeDays);\n\n        return $leadTimeDemand + $safetyStock;\n    }\n\n    protected function calculateEOQ(InventoryItem $item, float $dailyDemand): float\n    {\n        $annualDemand = $dailyDemand * 365;\n        $orderingCost = 25.00;\n        $holdingCost = $item->product?->unit_cost * 0.20 ?? 5.00;\n\n        if ($holdingCost <= 0) {\n            return $annualDemand;\n        }\n\n        return sqrt((2 * $annualDemand * $orderingCost) / $holdingCost);\n    }\n\n    protected function daysUntilStockout(\n        InventoryItem $item, float $dailyDemand\n    ): int {\n        if ($dailyDemand <= 0) {\n            return PHP_INT_MAX;\n        }\n\n        $availableQuantity = $item->quantity_on_hand - $item->quantity_reserved;\n\n        return (int) floor($availableQuantity / $dailyDemand);\n    }\n\n    protected function getAiRecommendation(\n        InventoryItem $item, float $dailyDemand,\n        int $reorderPoint, int $daysUntilStockout\n    ): array {\n        $product = $item->product;\n\n        $prompt = sprintf(\n            \"Analyze this inventory item and provide a recommendation:\\n\\n\".\n            \"Product: %s\\n\".\n            \"Current Stock: %d\\n\".\n            \"Reserved: %d\\n\".\n            \"Daily Demand: %.2f\\n\".\n            \"Calculated Reorder Point: %d\\n\".\n            \"Days Until Stockout: %d\\n\".\n            \"Reorder Quantity: %d\\n\".\n            \"Bin Location: %s\\n\\n\".\n            \"Respond with JSON: {\\\"risk_level\\\": \\\"low|medium|high\\\",\".\n            \" \\\"action\\\": \\\"reorder|hold|expedite|adjust\\\",\".\n            \" \\\"reason\\\": \\\"...\\\", \\\"suggested_quantity\\\": int}\",\n            $product?->name ?? 'Unknown',\n            $item->quantity_on_hand,\n            $item->quantity_reserved,\n            $dailyDemand,\n            $reorderPoint,\n            $daysUntilStockout,\n            $item->reorder_quantity,\n            $item->bin_location ?? 'N/A',\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' => 'You are a supply chain inventory analyst.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n\n    public function generateReorderSuggestions(): Collection\n    {\n        $lowStockItems = InventoryItem::lowStock()\n            ->with('product.supplier', 'warehouse')\n            ->get();\n\n        return $lowStockItems->map(fn (InventoryItem $item) => [\n            'item' => $item,\n            'prediction' => $this->analyze($item),\n        ]);\n    }\n}\n\nclass InventoryPrediction\n{\n    public function __construct(\n        public readonly InventoryItem $item,\n        public readonly float $dailyDemand,\n        public readonly float $demandStdDev,\n        public readonly int $leadTimeDays,\n        public readonly int $reorderPoint,\n        public readonly int $economicOrderQty,\n        public readonly int $daysUntilStockout,\n        public readonly array $recommendation,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'product_id' => $this->item->product_id,\n            'product_name' => $this->item->product?->name,\n            'warehouse' => $this->item->warehouse?->name,\n            'current_stock' => $this->item->quantity_on_hand,\n            'reserved' => $this->item->quantity_reserved,\n            'daily_demand' => round($this->dailyDemand, 2),\n            'demand_std_dev' => round($this->demandStdDev, 2),\n            'lead_time_days' => $this->leadTimeDays,\n            'reorder_point' => $this->reorderPoint,\n            'economic_order_qty' => $this->economicOrderQty,\n            'days_until_stockout' => $this->daysUntilStockout,\n            'recommendation' => $this->recommendation,\n            'needs_reorder' => $this->daysUntilStockout <= $this->leadTimeDays,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Combine historical data with external factors like weather, holidays, and economic indicators for more accurate demand forecasts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "303-route-optimization-agents",
      children: "30.3 Route Optimization Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Route optimization agents calculate optimal delivery routes considering distance, traffic, and time windows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Route optimization agents minimize delivery time, fuel consumption, and operational costs by intelligently sequencing waypoints. The agent considers traffic conditions, distance matrices, delivery time windows, vehicle capacity, and priority constraints to produce optimal routes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\Shipment;\nuse App\\Models\\Vehicle;\nuse App\\Models\\Warehouse;\nuse Illuminate\\Support\\Collection;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass RouteOptimizationAgent\n{\n    public function optimize(\n        Warehouse $origin,\n        Collection $shipments,\n        ?Vehicle $vehicle = null,\n    ): OptimizedRoute {\n        $waypoints = $this->extractWaypoints($shipments);\n        $distanceMatrix = $this->buildDistanceMatrix($origin, $waypoints);\n        $optimizedSequence = $this->solveTsp($distanceMatrix, $waypoints);\n        $routeLegs = $this->buildRouteLegs($origin, $optimizedSequence, $distanceMatrix);\n        $totalDistance = collect($routeLegs)->sum('distance_km');\n        $totalDuration = collect($routeLegs)->sum('duration_minutes');\n        $aiSuggestions = $this->getAiOptimizationTips(\n            $routeLegs, $origin, $vehicle\n        );\n\n        return new OptimizedRoute(\n            origin: $origin,\n            legs: $routeLegs,\n            totalDistance: $totalDistance,\n            totalDuration: $totalDuration,\n            waypointCount: count($waypoints),\n            aiSuggestions: $aiSuggestions,\n        );\n    }\n\n    protected function extractWaypoints(Collection $shipments): Collection\n    {\n        return $shipments->map(fn (Shipment $s, int $i) => [\n            'id' => $s->id,\n            'index' => $i + 1,\n            'address' => $s->destination_address,\n            'priority' => $this->getShipmentPriority($s),\n            'time_window_start' => $s->metadata['delivery_window_start'] ?? null,\n            'time_window_end' => $s->metadata['delivery_window_end'] ?? null,\n            'weight_kg' => $s->weight_kg ?? 0,\n        ]);\n    }\n\n    protected function getShipmentPriority(Shipment $shipment): int\n    {\n        if ($shipment->metadata['priority'] ?? false) {\n            return 1;\n        }\n\n        $match = match ($shipment->status) {\n            'on_time' => 2,\n            'delayed' => 1,\n            'critical' => 0,\n            default => 3,\n        };\n\n        if ($shipment->estimated_delivery\n            && $shipment->estimated_delivery->isBefore(now()->addHours(24))\n        ) {\n            $match = min($match, 1);\n        }\n\n        return $match;\n    }\n\n    protected function buildDistanceMatrix(\n        Warehouse $origin, Collection $waypoints\n    ): array {\n        $points = collect([[\n            'lat' => $origin->latitude,\n            'lng' => $origin->longitude,\n        ]])->merge($waypoints->map(fn ($wp) => [\n            'lat' => $wp['latitude'] ?? $this->geocode($wp['address'])['lat'],\n            'lng' => $wp['longitude'] ?? $this->geocode($wp['address'])['lng'],\n        ]));\n\n        $n = $points->count();\n        $matrix = [];\n\n        for ($i = 0; $i < $n; $i++) {\n            for ($j = 0; $j < $n; $j++) {\n                if ($i === $j) {\n                    $matrix[$i][$j] = ['distance_km' => 0, 'duration_minutes' => 0];\n                } else {\n                    $matrix[$i][$j] = $this->calculateRoute(\n                        $points[$i], $points[$j]\n                    );\n                }\n            }\n        }\n\n        return $matrix;\n    }\n\n    protected function geocode(string $address): array\n    {\n        $key = config('services.google.maps_api_key');\n        $url = sprintf(\n            'https://maps.googleapis.com/maps/api/geocode/json?address=%s&key=%s',\n            urlencode($address), $key\n        );\n\n        $response = \\Http::get($url)->json();\n\n        if (($response['status'] ?? '') === 'OK') {\n            $location = $response['results'][0]['geometry']['location'];\n\n            return [\n                'lat' => $location['lat'],\n                'lng' => $location['lng'],\n            ];\n        }\n\n        return ['lat' => 0, 'lng' => 0];\n    }\n\n    protected function calculateRoute(array $origin, array $destination): array\n    {\n        $key = config('services.google.maps_api_key');\n        $url = sprintf(\n            'https://maps.googleapis.com/maps/api/distancematrix/json'.\n            '?origins=%f,%f&destinations=%f,%f&key=%s&units=metric',\n            $origin['lat'], $origin['lng'],\n            $destination['lat'], $destination['lng'],\n            $key\n        );\n\n        $response = \\Http::get($url)->json();\n\n        if (($response['status'] ?? '') === 'OK') {\n            $element = $response['rows'][0]['elements'][0] ?? [];\n\n            return [\n                'distance_km' => ($element['distance']['value'] ?? 0) / 1000,\n                'duration_minutes' => ($element['duration']['value'] ?? 0) / 60,\n            ];\n        }\n\n        $roughDistance = $this->haversineDistance(\n            $origin['lat'], $origin['lng'],\n            $destination['lat'], $destination['lng']\n        );\n\n        return [\n            'distance_km' => $roughDistance,\n            'duration_minutes' => $roughDistance / 0.8,\n        ];\n    }\n\n    protected function haversineDistance(\n        float $lat1, float $lng1, float $lat2, float $lng2\n    ): float {\n        $earthRadius = 6371;\n        $dLat = deg2rad($lat2 - $lat1);\n        $dLng = deg2rad($lng2 - $lng1);\n        $a = sin($dLat / 2) ** 2\n            + cos(deg2rad($lat1)) * cos(deg2rad($lat2]) * sin($dLng / 2) ** 2;\n\n        return $earthRadius * 2 * atan2(sqrt($a), sqrt(1 - $a));\n    }\n\n    protected function solveTsp(\n        array $distanceMatrix, Collection $waypoints\n    ): array {\n        $n = $waypoints->count();\n\n        if ($n <= 1) {\n            return $waypoints->values()->all();\n        }\n\n        $prioritized = $waypoints->sortBy('priority')->values();\n        $sequence = [];\n        $visited = array_fill(0, $n, false);\n\n        $current = 0;\n        $sequence[] = $prioritized[$current];\n        $visited[$current] = true;\n\n        for ($step = 1; $step < $n; $step++) {\n            $nearest = -1;\n            $nearestDist = PHP_FLOAT_MAX;\n\n            for ($i = 0; $i < $n; $i++) {\n                if (!$visited[$i]) {\n                    $dist = $distanceMatrix[$current + 1][$i + 1]['distance_km'];\n                    $priority = $prioritized[$i]['priority'];\n                    $weightedDist = $dist * (1 + $priority * 0.5);\n\n                    if ($weightedDist < $nearestDist) {\n                        $nearestDist = $weightedDist;\n                        $nearest = $i;\n                    }\n                }\n            }\n\n            if ($nearest >= 0) {\n                $sequence[] = $prioritized[$nearest];\n                $visited[$nearest] = true;\n                $current = $nearest;\n            }\n        }\n\n        return $sequence;\n    }\n\n    protected function buildRouteLegs(\n        Warehouse $origin, array $sequence, array $distanceMatrix\n    ): array {\n        $legs = [];\n        $prevIndex = 0;\n\n        foreach ($sequence as $i => $waypoint) {\n            $wpIndex = $waypoint['index'];\n            $leg = $distanceMatrix[$prevIndex][$wpIndex] ?? [\n                'distance_km' => 0, 'duration_minutes' => 0,\n            ];\n\n            $legs[] = [\n                'from' => $i === 0 ? $origin->name : $sequence[$i - 1]['address'],\n                'to' => $waypoint['address'],\n                'shipment_id' => $waypoint['id'],\n                'distance_km' => round($leg['distance_km'], 1),\n                'duration_minutes' => round($leg['duration_minutes'], 0),\n                'priority' => $waypoint['priority'],\n            ];\n\n            $prevIndex = $wpIndex;\n        }\n\n        return $legs;\n    }\n\n    protected function getAiOptimizationTips(\n        array $legs, Warehouse $origin, ?Vehicle $vehicle\n    ): array {\n        $legsSummary = collect($legs)->map(\n            fn ($l) => sprintf(\n                '%s → %s (%.1f km, %d min)',\n                $l['from'], $l['to'], $l['distance_km'], $l['duration_minutes']\n            )\n        )->implode(\"\\n\");\n\n        $prompt = sprintf(\n            \"Analyze this delivery route and provide optimization suggestions:\\n\\n\".\n            \"Origin: %s\\n\".\n            \"Vehicle: %s %s (%s)\\n\".\n            \"Route:\\n%s\\n\\n\".\n            \"Respond with JSON: {\\\"fuel_savings_tips\\\": [...],\".\n            \" \\\"time_savings\\\": \\\"...\\\", \\\"risk_areas\\\": [...],\".\n            \" \\\"consolidation_suggestion\\\": \\\"...\\\"}\",\n            $origin->name,\n            $vehicle?->make ?? 'N/A',\n            $vehicle?->model ?? 'N/A',\n            $vehicle?->license_plate ?? 'N/A',\n            $legsSummary,\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a logistics route optimization analyst.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n}\n\nclass OptimizedRoute\n{\n    public function __construct(\n        public readonly Warehouse $origin,\n        public readonly array $legs,\n        public readonly float $totalDistance,\n        public readonly float $totalDuration,\n        public readonly int $waypointCount,\n        public readonly array $aiSuggestions,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'origin' => $this->origin->name,\n            'total_distance_km' => round($this->totalDistance, 1),\n            'total_duration_min' => round($this->totalDuration, 0),\n            'waypoints' => $this->waypointCount,\n            'legs' => $this->legs,\n            'ai_suggestions' => $this->aiSuggestions,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Route optimization is computationally expensive. Use heuristic algorithms for daily operations and exact solvers for planning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "304-shipment-tracking-automation",
      children: "30.4 Shipment Tracking Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Shipment tracking agents monitor shipments across carriers and provide real-time status updates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shipment tracking agents monitor shipments in real time, detect status changes, handle delivery exceptions, and dispatch multi-channel notifications to stakeholders. The agent bridges carrier API data with internal systems to provide end-to-end visibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\Shipment;\nuse App\\Models\\ShipmentTrackingEvent;\nuse App\\Notifications\\ShipmentDelayed;\nuse App\\Notifications\\ShipmentDelivered;\nuse App\\Notifications\\ShipmentException;\nuse Illuminate\\Support\\Collection;\nuse Illuminate\\Support\\Facades\\Log;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass ShipmentTrackingAgent\n{\n    protected array $carrierApis = [];\n\n    public function track(Shipment $shipment): TrackingUpdate\n    {\n        $externalStatus = $this->pollCarrier($shipment);\n        $previousStatus = $shipment->status;\n        $events = $this->generateTrackingEvents($shipment, $externalStatus);\n        $statusChanged = $externalStatus['status'] !== $previousStatus;\n        $exceptionDetected = $this->detectException($externalStatus, $shipment);\n        $aiAnalysis = null;\n\n        if ($statusChanged || $exceptionDetected) {\n            $this->recordEvents($shipment, $events);\n            $this->updateShipmentStatus($shipment, $externalStatus);\n            $aiAnalysis = $this->analyzeSituation(\n                $shipment, $events, $exceptionDetected\n            );\n        }\n\n        if ($statusChanged) {\n            $this->dispatchNotifications(\n                $shipment, $externalStatus['status'], $aiAnalysis\n            );\n        }\n\n        return new TrackingUpdate(\n            shipment: $shipment,\n            previousStatus: $previousStatus,\n            newStatus: $externalStatus['status'],\n            events: $events,\n            exceptionDetected: $exceptionDetected,\n            aiAnalysis: $aiAnalysis,\n        );\n    }\n\n    public function trackAllActive(): Collection\n    {\n        $activeShipments = Shipment::whereIn('status', [\n            'pending', 'picked_up', 'in_transit', 'out_for_delivery',\n        ])->get();\n\n        return $activeShipments->map(\n            fn (Shipment $s) => $this->track($s)\n        );\n    }\n\n    protected function pollCarrier(Shipment $shipment): array\n    {\n        if (!$shipment->tracking_number || !$shipment->carrier) {\n            return [\n                'status' => $shipment->status,\n                'location' => null,\n                'description' => 'No tracking information available.',\n                'timestamp' => now(),\n            ];\n        }\n\n        $carrierClass = $shipment->carrier->metadata['api_handler'] ?? null;\n\n        if ($carrierClass && class_exists($carrierClass)) {\n            try {\n                $handler = app($carrierClass);\n\n                return $handler->track($shipment->tracking_number);\n            } catch (\\Exception $e) {\n                Log::warning(\n                    'Carrier API error: ' . $e->getMessage(),\n                    ['shipment_id' => $shipment->id]\n                );\n\n                return [\n                    'status' => $shipment->status,\n                    'error' => $e->getMessage(),\n                ];\n            }\n        }\n\n        return [\n            'status' => $shipment->status,\n            'description' => 'No carrier API handler configured.',\n        ];\n    }\n\n    protected function generateTrackingEvents(\n        Shipment $shipment, array $externalStatus\n    ): array {\n        $events = [];\n        $statusMap = [\n            'pending' => 'Shipment created and awaiting pickup.',\n            'picked_up' => 'Package picked up by carrier.',\n            'in_transit' => 'Package in transit to destination.',\n            'out_for_delivery' => 'Package out for final delivery.',\n            'delivered' => 'Package delivered successfully.',\n            'delayed' => 'Delivery delayed due to operational reasons.',\n            'exception' => 'Delivery exception reported.',\n            'cancelled' => 'Shipment cancelled.',\n        ];\n\n        $events[] = [\n            'status' => $externalStatus['status'] ?? $shipment->status,\n            'location' => $externalStatus['location'] ?? null,\n            'description' => $externalStatus['description']\n                ?? ($statusMap[$shipment->status] ?? 'Status updated.'),\n            'metadata' => [\n                'source' => $externalStatus['source'] ?? 'internal',\n                'carrier_data' => $externalStatus['raw'] ?? null,\n            ],\n            'recorded_at' => $externalStatus['timestamp'] ?? now(),\n        ];\n\n        return $events;\n    }\n\n    protected function detectException(\n        array $externalStatus, Shipment $shipment\n    ): bool {\n        if (in_array($externalStatus['status'] ?? '', [\n            'exception', 'damaged', 'lost', 'returned',\n        ])) {\n            return true;\n        }\n\n        if ($shipment->estimated_delivery\n            && $shipment->estimated_delivery->isPast()\n            && !in_array($shipment->status, ['delivered', 'cancelled'])\n        ) {\n            return true;\n        }\n\n        if (isset($externalStatus['error'])) {\n            return true;\n        }\n\n        return false;\n    }\n\n    protected function recordEvents(\n        Shipment $shipment, array $events\n    ): void {\n        foreach ($events as $event) {\n            $shipment->trackingEvents()->create([\n                'status' => $event['status'],\n                'location' => $event['location'],\n                'description' => $event['description'],\n                'metadata' => $event['metadata'],\n                'recorded_at' => $event['recorded_at'],\n            ]);\n        }\n    }\n\n    protected function updateShipmentStatus(\n        Shipment $shipment, array $externalStatus\n    ): void {\n        $update = ['status' => $externalStatus['status']];\n\n        if (($externalStatus['status'] ?? '') === 'delivered') {\n            $update['delivered_at'] = $externalStatus['timestamp'] ?? now();\n        }\n\n        if (isset($externalStatus['location'])) {\n            $update['metadata'] = array_merge(\n                $shipment->metadata ?? [],\n                ['last_known_location' => $externalStatus['location']]\n            );\n        }\n\n        $shipment->update($update);\n    }\n\n    protected function analyzeSituation(\n        Shipment $shipment, array $events, bool $exceptionDetected\n    ): ?array {\n        if (!$exceptionDetected && $shipment->status === 'in_transit') {\n            return null;\n        }\n\n        $eventsSummary = collect($events)\n            ->map(fn ($e) => sprintf(\n                '%s - %s: %s',\n                $e['recorded_at']->toDateTimeString(),\n                $e['status'],\n                $e['description']\n            ))\n            ->implode(\"\\n\");\n\n        $prompt = sprintf(\n            \"Analyze this shipment situation and provide recommendations:\\n\\n\".\n            \"Shipment #%d\\nTracking: %s\\nStatus: %s\\n\".\n            \"Origin: %s\\nDestination: %s\\n\".\n            \"Estimated Delivery: %s\\n\\nEvents:\\n%s\\n\\n\".\n            \"Exception: %s\\n\\n\".\n            \"Respond with JSON: {\\\"severity\\\": \\\"low|medium|high|critical\\\",\".\n            \" \\\"root_cause\\\": \\\"...\\\", \\\"recommended_action\\\": \\\"...\\\",\".\n            \" \\\"customer_message\\\": \\\"...\\\", \\\"escalate\\\": bool}\",\n            $shipment->id,\n            $shipment->tracking_number ?? 'N/A',\n            $shipment->status,\n            $shipment->origin_address,\n            $shipment->destination_address,\n            $shipment->estimated_delivery?->toDateString() ?? 'N/A',\n            $eventsSummary,\n            $exceptionDetected ? 'Yes' : 'No',\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a logistics exception handling specialist.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n\n    protected function dispatchNotifications(\n        Shipment $shipment, string $newStatus, ?array $aiAnalysis\n    ): void {\n        $notifiable = $shipment->order?->user;\n\n        if (!$notifiable) {\n            return;\n        }\n\n        match ($newStatus) {\n            'delivered' => $notifiable->notify(\n                new ShipmentDelivered($shipment)\n            ),\n            'delayed' => $notifiable->notify(\n                new ShipmentDelayed($shipment, $aiAnalysis)\n            ),\n            'exception' => $notifiable->notify(\n                new ShipmentException($shipment, $aiAnalysis)\n            ),\n            default => null,\n        };\n\n        if ($aiAnalysis['escalate'] ?? false) {\n            Log::channel('slack')->warning(\n                'Shipment escalation required', [\n                    'shipment_id' => $shipment->id,\n                    'analysis' => $aiAnalysis,\n                ]\n            );\n        }\n    }\n}\n\nclass TrackingUpdate\n{\n    public function __construct(\n        public readonly Shipment $shipment,\n        public readonly string $previousStatus,\n        public readonly string $newStatus,\n        public readonly array $events,\n        public readonly bool $exceptionDetected,\n        public readonly ?array $aiAnalysis,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'shipment_id' => $this->shipment->id,\n            'tracking_number' => $this->shipment->tracking_number,\n            'previous_status' => $this->previousStatus,\n            'new_status' => $this->newStatus,\n            'status_changed' => $this->previousStatus !== $this->newStatus,\n            'exception_detected' => $this->exceptionDetected,\n            'events' => $this->events,\n            'ai_analysis' => $this->aiAnalysis,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "305-supplier-management-agents",
      children: "30.5 Supplier Management Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Supplier agents evaluate supplier performance against KPIs and automate procurement workflows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supplier management agents evaluate vendor performance across multiple dimensions — on-time delivery, product quality, pricing competitiveness, and communication responsiveness. The agent generates scorecards, identifies underperforming suppliers, and automates procurement decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\PurchaseOrder;\nuse App\\Models\\Supplier;\nuse App\\Models\\SupplierScorecard;\nuse Illuminate\\Support\\Collection;\nuse Illuminate\\Support\\Facades\\DB;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass SupplierEvaluationAgent\n{\n    public function __construct(\n        protected int $evaluationPeriodDays = 90,\n    ) {}\n\n    public function evaluate(Supplier $supplier): EvaluationResult\n    {\n        $purchaseOrders = $this->getRecentOrders($supplier);\n        $onTimeRate = $this->calculateOnTimeDeliveryRate($purchaseOrders);\n        $defectRate = $this->calculateDefectRate($supplier, $purchaseOrders);\n        $leadTimeAccuracy = $this->calculateLeadTimeAccuracy($purchaseOrders);\n        $costCompetitiveness = $this->calculateCostScore($purchaseOrders);\n        $communicationRating = $this->assessCommunication($supplier);\n        $overallScore = $this->computeOverallScore([\n            'on_time_delivery' => $onTimeRate,\n            'defect' => $defectRate,\n            'lead_time_accuracy' => $leadTimeAccuracy,\n            'cost' => $costCompetitiveness,\n            'communication' => $communicationRating,\n        ]);\n        $recommendation = $this->getAiEvaluation(\n            $supplier, $overallScore, $onTimeRate, $defectRate\n        );\n\n        $this->persistScorecard($supplier, [\n            'on_time_delivery_rate' => $onTimeRate,\n            'defect_rate' => $defectRate,\n            'lead_time_accuracy' => $leadTimeAccuracy,\n            'communication_rating' => $communicationRating,\n            'overall_score' => $overallScore,\n        ], $recommendation);\n\n        return new EvaluationResult(\n            supplier: $supplier,\n            onTimeDeliveryRate: $onTimeRate,\n            defectRate: $defectRate,\n            leadTimeAccuracy: $leadTimeAccuracy,\n            costScore: $costCompetitiveness,\n            communicationRating: $communicationRating,\n            overallScore: $overallScore,\n            recommendation: $recommendation,\n        );\n    }\n\n    public function evaluateAll(): Collection\n    {\n        return Supplier::where('status', 'active')\n            ->get()\n            ->map(fn (Supplier $s) => $this->evaluate($s));\n    }\n\n    protected function getRecentOrders(Supplier $supplier): Collection\n    {\n        $cutoff = now()->subDays($this->evaluationPeriodDays);\n\n        return PurchaseOrder::where('supplier_id', $supplier->id)\n            ->where('order_date', '>=', $cutoff->toDateString())\n            ->with('items')\n            ->get();\n    }\n\n    protected function calculateOnTimeDeliveryRate(\n        Collection $purchaseOrders\n    ): float {\n        $completedOrders = $purchaseOrders->filter(\n            fn ($po) => $po->received_date !== null\n        );\n\n        if ($completedOrders->isEmpty()) {\n            return 100.00;\n        }\n\n        $onTime = $completedOrders->filter(\n            fn ($po) => $po->expected_date\n                && $po->received_date <= $po->expected_date\n        );\n\n        return round(\n            ($onTime->count() / $completedOrders->count()) * 100, 2\n        );\n    }\n\n    protected function calculateDefectRate(\n        Supplier $supplier, Collection $purchaseOrders\n    ): float {\n        $totalItems = $purchaseOrders->sum(\n            fn ($po) => $po->items->sum('quantity_received')\n        );\n\n        if ($totalItems === 0) {\n            return 0.00;\n        }\n\n        $defectCount = $purchaseOrders->sum(\n            fn ($po) => $po->items->sum(\n                fn ($item) => $item->metadata['defect_quantity'] ?? 0\n            )\n        );\n\n        return round(($defectCount / $totalItems) * 100, 2);\n    }\n\n    protected function calculateLeadTimeAccuracy(\n        Collection $purchaseOrders\n    ): float {\n        $withDates = $purchaseOrders->filter(\n            fn ($po) => $po->expected_date && $po->received_date\n        );\n\n        if ($withDates->isEmpty()) {\n            return 100.00;\n        }\n\n        $totalDeviation = $withDates->sum(\n            fn ($po) => abs(\n                $po->received_date->diffInDays($po->expected_date)\n            )\n        );\n\n        $avgDeviation = $totalDeviation / $withDates->count();\n        $maxTolerance = 5;\n\n        return round(\n            max(0, 100 - ($avgDeviation / $maxTolerance) * 100), 2\n        );\n    }\n\n    protected function calculateCostScore(Collection $purchaseOrders): float\n    {\n        if ($purchaseOrders->isEmpty()) {\n            return 100.00;\n        }\n\n        $averageCostPerOrder = $purchaseOrders->avg('total_amount');\n        $costVariance = $purchaseOrders->reduce(\n            fn ($carry, $po) => $carry + abs(\n                $po->total_amount - $averageCostPerOrder\n            ),\n            0\n        ) / max($purchaseOrders->count(), 1);\n\n        $stabilityScore = max(0, 100 - ($costVariance / max($averageCostPerOrder, 1)) * 50);\n\n        return round($stabilityScore, 2);\n    }\n\n    protected function assessCommunication(Supplier $supplier): float\n    {\n        $baseScore = 85.00;\n\n        if (!$supplier->email) {\n            $baseScore -= 10;\n        }\n\n        if (!$supplier->phone) {\n            $baseScore -= 5;\n        }\n\n        return round(max(0, min(100, $baseScore)), 2);\n    }\n\n    protected function computeOverallScore(array $metrics): float\n    {\n        $weights = [\n            'on_time_delivery' => 0.35,\n            'defect' => 0.25,\n            'lead_time_accuracy' => 0.15,\n            'cost' => 0.15,\n            'communication' => 0.10,\n        ];\n\n        $defectScore = max(0, 100 - $metrics['defect']);\n        $weightedSum = 0;\n\n        foreach ($weights as $key => $weight) {\n            $value = $key === 'defect' ? $defectScore : $metrics[$key];\n            $weightedSum += $value * $weight;\n        }\n\n        return round($weightedSum, 2);\n    }\n\n    protected function getAiEvaluation(\n        Supplier $supplier, float $overallScore,\n        float $onTimeRate, float $defectRate,\n    ): array {\n        $prompt = sprintf(\n            \"Evaluate this supplier's performance and provide recommendations:\\n\\n\".\n            \"Supplier: %s (%s)\\nType: %s\\n\".\n            \"Overall Score: %.2f/100\\n\".\n            \"On-Time Delivery: %.2f%%\\n\".\n            \"Defect Rate: %.2f%%\\n\".\n            \"Lead Time: %d days\\n\\n\".\n            \"Respond with JSON: {\\\"tier\\\": \\\"platinum|gold|silver|bronze|probation\\\",\".\n            \" \\\"strengths\\\": [...], \\\"weaknesses\\\": [...],\".\n            \" \\\"improvement_plan\\\": \\\"...\\\", \\\"reorder_recommendation\\\": \\\"continue|review|discontinue\\\",\".\n            \" \\\"negotiation_leverage\\\": \\\"...\\\"}\",\n            $supplier->name,\n            $supplier->contact_name ?? 'N/A',\n            $supplier->supplier_type,\n            $overallScore,\n            $onTimeRate,\n            $defectRate,\n            $supplier->lead_time_days,\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a supply chain procurement analyst.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n\n    protected function persistScorecard(\n        Supplier $supplier, array $metrics, array $recommendation\n    ): void {\n        $supplier->scorecard()->create([\n            'on_time_delivery_rate' => $metrics['on_time_delivery_rate'],\n            'defect_rate' => $metrics['defect_rate'],\n            'lead_time_accuracy' => $metrics['lead_time_accuracy'],\n            'communication_rating' => $metrics['communication_rating'],\n            'overall_score' => $metrics['overall_score'],\n            'period' => now()->format('Y-m'),\n            'details' => $recommendation,\n            'generated_at' => now(),\n        ]);\n\n        $supplier->update([\n            'reliability_score' => $metrics['on_time_delivery_rate'],\n            'quality_score' => 100 - $metrics['defect_rate'],\n            'cost_score' => $metrics['communication_rating'],\n        ]);\n\n        if (($recommendation['tier'] ?? '') === 'probation') {\n            $supplier->update(['status' => 'under_review']);\n        }\n    }\n}\n\nclass EvaluationResult\n{\n    public function __construct(\n        public readonly Supplier $supplier,\n        public readonly float $onTimeDeliveryRate,\n        public readonly float $defectRate,\n        public readonly float $leadTimeAccuracy,\n        public readonly float $costScore,\n        public readonly float $communicationRating,\n        public readonly float $overallScore,\n        public readonly array $recommendation,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'supplier_id' => $this->supplier->id,\n            'name' => $this->supplier->name,\n            'on_time_delivery_rate' => $this->onTimeDeliveryRate,\n            'defect_rate' => $this->defectRate,\n            'lead_time_accuracy' => $this->leadTimeAccuracy,\n            'cost_score' => $this->costScore,\n            'communication_rating' => $this->communicationRating,\n            'overall_score' => $this->overallScore,\n            'tier' => $this->recommendation['tier'] ?? 'unrated',\n            'reorder_recommendation' =>\n                $this->recommendation['reorder_recommendation'] ?? 'continue',\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "306-warehouse-automation-agents",
      children: "30.6 Warehouse Automation Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Warehouse agents optimize picking routes, slotting, and inventory placement for efficiency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Warehouse automation agents optimize pick/pack workflows by intelligently assigning bin locations, grouping orders for batch picking, and generating optimal pick paths. The agent minimizes travel time within the warehouse and improves order fulfillment throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\InventoryItem;\nuse App\\Models\\Order;\nuse App\\Models\\Picklist;\nuse App\\Models\\Warehouse;\nuse Illuminate\\Support\\Collection;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass WarehouseAgent\n{\n    public function __construct(\n        protected int $pickBatchSize = 10,\n    ) {}\n\n    public function optimizePicklist(Warehouse $warehouse, Collection $orders): PicklistOptimization\n    {\n        $items = $this->collectOrderItems($orders);\n        $zoneMap = $this->buildZoneMap($warehouse);\n        $binnedItems = $this->assignBins($items, $warehouse);\n        $pickSequence = $this->optimizePickSequence($binnedItems, $zoneMap);\n        $batchAssignments = $this->createPickBatches($pickSequence);\n        $aiSuggestions = $this->getAiWarehouseRecommendations(\n            $warehouse, $batchAssignments, $orders\n        );\n\n        return new PicklistOptimization(\n            warehouse: $warehouse,\n            batches: $batchAssignments,\n            totalItems: $items->count(),\n            estimatedMinutes: $this->estimatePickTime($pickSequence),\n            aiSuggestions: $aiSuggestions,\n        );\n    }\n\n    protected function collectOrderItems(Collection $orders): Collection\n    {\n        return $orders->flatMap(\n            fn (Order $order) => $order->items->map(\n                fn ($item) => [\n                    'order_id' => $order->id,\n                    'product_id' => $item->product_id,\n                    'product_name' => $item->product?->name,\n                    'quantity' => $item->quantity,\n                    'sku' => $item->product?->sku,\n                ]\n            )\n        );\n    }\n\n    protected function buildZoneMap(Warehouse $warehouse): array\n    {\n        $zoneMap = [];\n        $items = InventoryItem::where('warehouse_id', $warehouse->id)\n            ->whereNotNull('bin_location')\n            ->with('product')\n            ->get();\n\n        foreach ($items as $item) {\n            $zone = $this->extractZone($item->bin_location);\n            $aisle = $this->extractAisle($item->bin_location);\n\n            if (!isset($zoneMap[$zone])) {\n                $zoneMap[$zone] = [];\n            }\n            if (!isset($zoneMap[$zone][$aisle])) {\n                $zoneMap[$zone][$aisle] = [];\n            }\n\n            $zoneMap[$zone][$aisle][] = [\n                'inventory_id' => $item->id,\n                'product_id' => $item->product_id,\n                'bin' => $item->bin_location,\n                'quantity' => $item->quantity_on_hand,\n            ];\n        }\n\n        return $zoneMap;\n    }\n\n    protected function extractZone(string $binLocation): string\n    {\n        return explode('-', $binLocation)[0] ?? 'A';\n    }\n\n    protected function extractAisle(string $binLocation): string\n    {\n        $parts = explode('-', $binLocation);\n\n        return $parts[1] ?? '01';\n    }\n\n    protected function assignBins(\n        Collection $items, Warehouse $warehouse\n    ): Collection {\n        return $items->map(function ($item) use ($warehouse) {\n            $inventory = InventoryItem::where('product_id', $item['product_id'])\n                ->where('warehouse_id', $warehouse->id)\n                ->first();\n\n            if (!$inventory) {\n                $inventory = $this->assignNewBin($item, $warehouse);\n            }\n\n            $item['bin_location'] = $inventory->bin_location ?? 'UNASSIGNED';\n            $item['inventory_id'] = $inventory->id;\n            $item['available'] = $inventory->quantity_available;\n\n            return $item;\n        });\n    }\n\n    protected function assignNewBin(array $item, Warehouse $warehouse): InventoryItem\n    {\n        $lastBin = InventoryItem::where('warehouse_id', $warehouse->id)\n            ->where('bin_location', 'like', 'A-%')\n            ->orderBy('bin_location', 'desc')\n            ->first();\n\n        $nextNumber = 1;\n        if ($lastBin && $lastBin->bin_location) {\n            $parts = explode('-', $lastBin->bin_location);\n            $nextNumber = ((int) ($parts[1] ?? 0)) + 1;\n        }\n\n        $binLocation = sprintf('A-%03d', $nextNumber);\n\n        return InventoryItem::create([\n            'product_id' => $item['product_id'],\n            'warehouse_id' => $warehouse->id,\n            'quantity_on_hand' => 0,\n            'quantity_reserved' => 0,\n            'reorder_point' => 10,\n            'reorder_quantity' => 50,\n            'bin_location' => $binLocation,\n        ]);\n    }\n\n    protected function optimizePickSequence(\n        Collection $items, array $zoneMap\n    ): Collection {\n        return $items->sortBy(function ($item) use ($zoneMap) {\n            $bin = $item['bin_location'] ?? '';\n            $zone = $this->extractZone($bin);\n            $aisle = (int) $this->extractAisle($bin);\n\n            $zoneOrder = array_search($zone, array_keys($zoneMap));\n            if ($zoneOrder === false) {\n                $zoneOrder = 999;\n            }\n\n            return sprintf('%04d-%04d', $zoneOrder, $aisle);\n        })->values();\n    }\n\n    protected function createPickBatches(Collection $pickSequence): array\n    {\n        $batches = [];\n        $currentBatch = [];\n        $currentOrderIds = [];\n\n        foreach ($pickSequence as $item) {\n            $orderId = $item['order_id'];\n\n            if (count($currentBatch) >= $this->pickBatchSize\n                && !in_array($orderId, $currentOrderIds)\n            ) {\n                $batches[] = [\n                    'id' => count($batches) + 1,\n                    'items' => $currentBatch,\n                    'order_count' => count(array_unique($currentOrderIds)),\n                    'item_count' => count($currentBatch),\n                ];\n                $currentBatch = [];\n                $currentOrderIds = [];\n            }\n\n            $currentBatch[] = $item;\n            $currentOrderIds[] = $orderId;\n        }\n\n        if (!empty($currentBatch)) {\n            $batches[] = [\n                'id' => count($batches) + 1,\n                'items' => $currentBatch,\n                'order_count' => count(array_unique($currentOrderIds)),\n                'item_count' => count($currentBatch),\n            ];\n        }\n\n        return $batches;\n    }\n\n    protected function estimatePickTime(Collection $pickSequence): int\n    {\n        $timePerItem = 0.5;\n        $travelTimeBetweenBins = 0.25;\n        $totalItems = $pickSequence->count();\n\n        return (int) ceil(\n            ($totalItems * $timePerItem)\n            + (max(0, $totalItems - 1) * $travelTimeBetweenBins)\n        );\n    }\n\n    protected function getAiWarehouseRecommendations(\n        Warehouse $warehouse, array $batches, Collection $orders\n    ): array {\n        $batchSummary = collect($batches)->map(\n            fn ($b) => sprintf(\n                'Batch %d: %d items across %d orders',\n                $b['id'], $b['item_count'], $b['order_count']\n            )\n        )->implode(\"\\n\");\n\n        $prompt = sprintf(\n            \"Analyze this warehouse pick operation:\\n\\n\".\n            \"Warehouse: %s\\nOrders: %d\\nPick Batches: %d\\n\\n%s\\n\\n\".\n            \"Respond with JSON: {\\\"bottlenecks\\\": [...],\".\n            \" \\\"staffing_recommendation\\\": \\\"...\\\",\".\n            \" \\\"slotting_optimization\\\": \\\"...\\\",\".\n            \" \\\"cross_docking_opportunity\\\": \\\"...\\\",\".\n            \" \\\"estimated_productivity\\\": \\\"...\\\"}\",\n            $warehouse->name,\n            $orders->count(),\n            count($batches),\n            $batchSummary,\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a warehouse operations optimization specialist.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n}\n\nclass PicklistOptimization\n{\n    public function __construct(\n        public readonly Warehouse $warehouse,\n        public readonly array $batches,\n        public readonly int $totalItems,\n        public readonly int $estimatedMinutes,\n        public readonly array $aiSuggestions,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'warehouse' => $this->warehouse->name,\n            'batches' => count($this->batches),\n            'total_items' => $this->totalItems,\n            'estimated_pick_time_min' => $this->estimatedMinutes,\n            'ai_suggestions' => $this->aiSuggestions,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Warehouse slotting optimization reduces picking time. Review slot assignments monthly as order patterns change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "307-demand-forecasting-agents",
      children: "30.7 Demand Forecasting Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Demand forecasting agents use ML models to predict future demand at SKU and location granularity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Demand forecasting agents predict future product demand by combining statistical time-series analysis with AI-powered pattern recognition. The agent identifies seasonal trends, growth trajectories, and anomalous demand shifts to generate accurate forecasts that drive procurement and inventory planning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\InventoryMovement;\nuse App\\Models\\Product;\nuse Illuminate\\Support\\Collection;\nuse Illuminate\\Support\\Facades\\DB;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass DemandForecastAgent\n{\n    public function __construct(\n        protected int $historicalMonths = 12,\n        protected int $forecastMonths = 3,\n    ) {}\n\n    public function forecast(Product $product): DemandForecast\n    {\n        $history = $this->loadHistoricalDemand($product);\n        $monthlyTotals = $this->aggregateMonthly($history);\n        $seasonalFactors = $this->calculateSeasonalFactors($monthlyTotals);\n        $trendLine = $this->calculateTrend($monthlyTotals);\n        $forecast = $this->generateForecast(\n            $monthlyTotals, $seasonalFactors, $trendLine\n        );\n        $confidence = $this->calculateConfidence($monthlyTotals, $forecast);\n        $aiAnalysis = $this->getAiDemandAnalysis(\n            $product, $monthlyTotals, $forecast\n        );\n\n        return new DemandForecast(\n            product: $product,\n            historicalData: $monthlyTotals,\n            seasonalFactors: $seasonalFactors,\n            forecast: $forecast,\n            confidence: $confidence,\n            aiAnalysis: $aiAnalysis,\n        );\n    }\n\n    public function forecastAll(): Collection\n    {\n        return Product::where('is_active', true)\n            ->get()\n            ->map(fn (Product $p) => $this->forecast($p));\n    }\n\n    protected function loadHistoricalDemand(Product $product): Collection\n    {\n        $cutoff = now()->subMonths($this->historicalMonths);\n\n        return InventoryMovement::whereHas(\n            'inventoryItem',\n            fn ($q) => $q->where('product_id', $product->id)\n        )\n            ->where('type', 'outbound')\n            ->where('created_at', '>=', $cutoff)\n            ->get();\n    }\n\n    protected function aggregateMonthly(Collection $movements): Collection\n    {\n        return $movements\n            ->groupBy(fn ($m) => $m->created_at->format('Y-m'))\n            ->map(fn ($group, $month) => [\n                'month' => $month,\n                'year' => (int) substr($month, 0, 4),\n                'month_num' => (int) substr($month, 5, 2),\n                'quantity' => $group->sum('quantity'),\n                'order_count' => $group->count(),\n                'avg_order_size' => round(\n                    $group->sum('quantity') / max($group->count(), 1), 1\n                ),\n            ])\n            ->sortBy('month')\n            ->values();\n    }\n\n    protected function calculateSeasonalFactors(Collection $monthlyTotals): array\n    {\n        if ($monthlyTotals->isEmpty()) {\n            return array_fill(1, 12, 1.0);\n        }\n\n        $overallAvg = $monthlyTotals->avg('quantity');\n\n        if ($overallAvg <= 0) {\n            return array_fill(1, 12, 1.0);\n        }\n\n        $monthlyAvgs = $monthlyTotals\n            ->groupBy('month_num')\n            ->map(fn ($months) => $months->avg('quantity'));\n\n        $factors = [];\n        for ($m = 1; $m <= 12; $m++) {\n            $factors[$m] = round(\n                ($monthlyAvgs[$m] ?? $overallAvg) / $overallAvg, 4\n            );\n        }\n\n        return $factors;\n    }\n\n    protected function calculateTrend(Collection $monthlyTotals): array\n    {\n        $n = $monthlyTotals->count();\n\n        if ($n < 2) {\n            return ['slope' => 0, 'intercept' => $monthlyTotals->first()['quantity'] ?? 0];\n        }\n\n        $xMean = ($n - 1) / 2;\n        $yMean = $monthlyTotals->avg('quantity');\n\n        $numerator = 0;\n        $denominator = 0;\n\n        foreach ($monthlyTotals as $i => $point) {\n            $x = $i;\n            $numerator += ($x - $xMean) * ($point['quantity'] - $yMean);\n            $denominator += ($x - $xMean) ** 2;\n        }\n\n        $slope = $denominator > 0 ? $numerator / $denominator : 0;\n        $intercept = $yMean - $slope * $xMean;\n\n        return [\n            'slope' => round($slope, 2),\n            'intercept' => round($intercept, 2),\n            'direction' => $slope > 0 ? 'up' : ($slope < 0 ? 'down' : 'flat'),\n            'growth_rate_pct' => round(\n                $yMean > 0 ? ($slope / $yMean) * 100 : 0, 2\n            ),\n        ];\n    }\n\n    protected function generateForecast(\n        Collection $history, array $seasonalFactors, array $trend\n    ): array {\n        $lastIndex = $history->count() - 1;\n        $forecast = [];\n\n        for ($i = 1; $i <= $this->forecastMonths; $i++) {\n            $futureIndex = $lastIndex + $i;\n            $trendComponent = $trend['intercept'] + $trend['slope'] * $futureIndex;\n\n            $targetMonth = now()->addMonths($i)->month;\n            $seasonalMultiplier = $seasonalFactors[$targetMonth] ?? 1.0;\n\n            $predicted = $trendComponent * $seasonalMultiplier;\n\n            $forecast[] = [\n                'month' => now()->addMonths($i)->format('Y-m'),\n                'month_name' => now()->addMonths($i)->format('F Y'),\n                'predicted_quantity' => (int) round(max(0, $predicted)),\n                'trend_component' => round($trendComponent, 1),\n                'seasonal_multiplier' => $seasonalMultiplier,\n            ];\n        }\n\n        return $forecast;\n    }\n\n    protected function calculateConfidence(\n        Collection $history, array $forecast\n    ): array {\n        if ($history->count() < 3) {\n            return ['score' => 30, 'level' => 'low'];\n        }\n\n        $actuals = $history->pluck('quantity')->toArray();\n        $mean = array_sum($actuals) / count($actuals);\n        $variance = 0;\n\n        foreach ($actuals as $val) {\n            $variance += ($val - $mean) ** 2;\n        }\n        $stdDev = sqrt($variance / count($actuals));\n\n        $cv = $mean > 0 ? $stdDev / $mean : 1;\n        $dataPointsScore = min(40, ($history->count() / $this->historicalMonths) * 40);\n        $variabilityScore = max(0, (1 - $cv) * 40);\n        $trendClarity = $forecast ? 10 : 0;\n        $totalScore = (int) round($dataPointsScore + $variabilityScore + $trendClarity);\n\n        $level = match (true) {\n            $totalScore >= 70 => 'high',\n            $totalScore >= 45 => 'medium',\n            default => 'low',\n        };\n\n        return ['score' => $totalScore, 'level' => $level];\n    }\n\n    protected function getAiDemandAnalysis(\n        Product $product, Collection $history, array $forecast\n    ): array {\n        $historySummary = $history->map(\n            fn ($m) => sprintf(\n                '%s: %d units (%d orders)',\n                $m['month'], $m['quantity'], $m['order_count']\n            )\n        )->implode(\"\\n\");\n\n        $forecastSummary = collect($forecast)->map(\n            fn ($f) => sprintf(\n                '%s: %d units predicted',\n                $f['month_name'], $f['predicted_quantity']\n            )\n        )->implode(\"\\n\");\n\n        $prompt = sprintf(\n            \"Analyze this product's demand pattern and provide forecast insights:\\n\\n\".\n            \"Product: %s\\nSKU: %s\\nPrice: $%.2f\\n\\n\".\n            \"Historical Demand (12 months):\\n%s\\n\\n\".\n            \"Forecast (3 months):\\n%s\\n\\n\".\n            \"Respond with JSON: {\\\"demand_pattern\\\": \\\"stable|growing|declining|seasonal|erratic\\\",\".\n            \" \\\"key_drivers\\\": [...], \\\"risks\\\": [...],\".\n            \" \\\"inventory_strategy\\\": \\\"...\\\", \\\"marketing_opportunity\\\": \\\"...\\\"}\",\n            $product->name,\n            $product->sku ?? 'N/A',\n            $product->unit_cost ?? 0,\n            $historySummary,\n            $forecastSummary,\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a demand forecasting and inventory planning analyst.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n}\n\nclass DemandForecast\n{\n    public function __construct(\n        public readonly Product $product,\n        public readonly Collection $historicalData,\n        public readonly array $seasonalFactors,\n        public readonly array $forecast,\n        public readonly array $confidence,\n        public readonly array $aiAnalysis,\n    ) {}\n\n    public function totalPredictedDemand(): int\n    {\n        return collect($this->forecast)->sum('predicted_quantity');\n    }\n\n    public function peakMonth(): ?array\n    {\n        return collect($this->forecast)->sortByDesc('predicted_quantity')->first();\n    }\n\n    public function toArray(): array\n    {\n        return [\n            'product_id' => $this->product->id,\n            'product_name' => $this->product->name,\n            'historical_period' => $this->historicalMonths ?? 12,\n            'forecast_months' => count($this->forecast),\n            'total_predicted' => $this->totalPredictedDemand(),\n            'seasonal_peaks' => $this->seasonalFactors,\n            'forecast' => $this->forecast,\n            'confidence' => $this->confidence,\n            'ai_analysis' => $this->aiAnalysis,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "308-fleet-management-agents",
      children: "30.8 Fleet Management Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Fleet agents manage vehicle maintenance schedules, fuel efficiency, and driver assignments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fleet management agents monitor vehicle health, track odometer readings, schedule preventive maintenance, and predict potential failures before they cause downtime. The agent ensures regulatory compliance and maximizes fleet availability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\MaintenanceRecord;\nuse App\\Models\\Vehicle;\nuse Illuminate\\Support\\Collection;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass FleetManagementAgent\n{\n    public function __construct(\n        protected int $maintenanceLookaheadDays = 30,\n    ) {}\n\n    public function assessVehicle(Vehicle $vehicle): FleetVehicleAssessment\n    {\n        $isDueForMaintenance = $vehicle->isDueForMaintenance();\n        $daysUntilNextService = $this->daysUntilService($vehicle);\n        $maintenanceHistory = $this->getRecentMaintenance($vehicle);\n        $utilizationScore = $this->calculateUtilization($vehicle, $maintenanceHistory);\n        $costPerKm = $this->calculateCostPerKm($vehicle, $maintenanceHistory);\n        $predictedIssues = $this->predictMaintenanceNeeds(\n            $vehicle, $maintenanceHistory\n        );\n        $aiRecommendations = $this->getAiFleetRecommendations(\n            $vehicle, $isDueForMaintenance, $predictedIssues\n        );\n\n        if ($isDueForMaintenance) {\n            $this->scheduleMaintenance($vehicle, $aiRecommendations);\n        }\n\n        return new FleetVehicleAssessment(\n            vehicle: $vehicle,\n            isDueForMaintenance: $isDueForMaintenance,\n            daysUntilNextService: $daysUntilNextService,\n            utilizationScore: $utilizationScore,\n            costPerKm: $costPerKm,\n            predictedIssues: $predictedIssues,\n            aiRecommendations: $aiRecommendations,\n        );\n    }\n\n    public function assessFleet(): Collection\n    {\n        return Vehicle::all()->map(\n            fn (Vehicle $v) => $this->assessVehicle($v)\n        );\n    }\n\n    protected function daysUntilService(Vehicle $vehicle): ?int\n    {\n        if (!$vehicle->next_maintenance_date) {\n            return null;\n        }\n\n        return (int) now()->diffInDays($vehicle->next_maintenance_date, false);\n    }\n\n    protected function getRecentMaintenance(Vehicle $vehicle): Collection\n    {\n        return $vehicle->maintenanceRecords()\n            ->where('created_at', '>=', now()->subMonths(12))\n            ->orderBy('created_at', 'desc')\n            ->get();\n    }\n\n    protected function calculateUtilization(\n        Vehicle $vehicle, Collection $maintenanceHistory\n    ): float {\n        $daysWithIssues = $maintenanceHistory\n            ->where('status', 'completed')\n            ->sum(\n                fn ($r) => $r->completed_date\n                    ? max(1, $r->completed_date->diffInDays($r->scheduled_date))\n                    : 0\n            );\n\n        $totalDays = 365;\n        $availableDays = $totalDays - $daysWithIssues;\n\n        return round(($availableDays / $totalDays) * 100, 2);\n    }\n\n    protected function calculateCostPerKm(\n        Vehicle $vehicle, Collection $maintenanceHistory\n    ): float {\n        $totalMaintenanceCost = $maintenanceHistory->sum('cost');\n        $totalKm = $vehicle->odometer_km;\n\n        if ($totalKm <= 0) {\n            return 0;\n        }\n\n        return round($totalMaintenanceCost / $totalKm, 4);\n    }\n\n    protected function predictMaintenanceNeeds(\n        Vehicle $vehicle, Collection $maintenanceHistory\n    ): array {\n        $issues = [];\n\n        $avgInterval = $maintenanceHistory\n            ->where('status', 'completed')\n            ->avg(\n                fn ($r) => $vehicle->odometer_km - ($r->odometer_at_service)\n            );\n\n        $engineServices = $maintenanceHistory->where('type', 'engine');\n        $brakeServices = $maintenanceHistory->where('type', 'brake');\n        $tireChanges = $maintenanceHistory->where('type', 'tire');\n\n        if ($engineServices->isEmpty()) {\n            $issues[] = [\n                'type' => 'engine',\n                'priority' => 'medium',\n                'description' => 'No recent engine service recorded.',\n            ];\n        }\n\n        $lastBrakeService = $brakeServices->first();\n        if ($lastBrakeService) {\n            $kmSinceBrake = $vehicle->odometer_km - $lastBrakeService->odometer_at_service;\n            if ($kmSinceBrake > 30000) {\n                $issues[] = [\n                    'type' => 'brake',\n                    'priority' => 'high',\n                    'description' => sprintf(\n                        'Brake service overdue by ~%d km.', $kmSinceBrake - 30000\n                    ),\n                ];\n            }\n        }\n\n        $lastTireChange = $tireChanges->first();\n        if ($lastTireChange) {\n            $kmSinceTires = $vehicle->odometer_km - $lastTireChange->odometer_at_service;\n            if ($kmSinceTires > 50000) {\n                $issues[] = [\n                    'type' => 'tire',\n                    'priority' => 'high',\n                    'description' => sprintf(\n                        'Tires have %d km since last change.', $kmSinceTires\n                    ),\n                ];\n            }\n        }\n\n        return $issues;\n    }\n\n    protected function getAiFleetRecommendations(\n        Vehicle $vehicle, bool $isDue, array $predictedIssues\n    ): array {\n        $issuesSummary = collect($predictedIssues)->map(\n            fn ($i) => sprintf('[%s] %s: %s', $i['priority'], $i['type'], $i['description'])\n        )->implode(\"\\n\");\n\n        $prompt = sprintf(\n            \"Analyze this fleet vehicle and provide maintenance recommendations:\\n\\n\".\n            \"Vehicle: %d %s %s (%d)\\nLicense: %s\\nType: %s\\n\".\n            \"Odometer: %d km\\nStatus: %s\\n\".\n            \"Due for Maintenance: %s\\nNext Service: %s\\n\".\n            \"Utilization: %.1f%%\\nCost/km: $%.4f\\n\\n\".\n            \"Predicted Issues:\\n%s\\n\\n\".\n            \"Respond with JSON: {\\\"overall_health\\\": \\\"excellent|good|fair|poor|critical\\\",\".\n            \" \\\"immediate_actions\\\": [...], \\\"scheduled_maintenance\\\": {...},\".\n            \" \\\"replacement_recommendation\\\": \\\"...\\\", \\\"lifecycle_estimate\\\": \\\"...\\\"}\",\n            $vehicle->year, $vehicle->make, $vehicle->model,\n            $vehicle->year, $vehicle->license_plate, $vehicle->vehicle_type,\n            $vehicle->odometer_km, $vehicle->status,\n            $isDue ? 'Yes' : 'No',\n            $vehicle->next_maintenance_date?->toDateString() ?? 'N/A',\n            $this->calculateUtilization($vehicle, collect([])),\n            $this->calculateCostPerKm($vehicle, collect([])),\n            $issuesSummary,\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a fleet maintenance and logistics analyst.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n\n    protected function scheduleMaintenance(\n        Vehicle $vehicle, array $recommendations\n    ): void {\n        $immediateActions = $recommendations['immediate_actions'] ?? [];\n\n        foreach ($immediateActions as $action) {\n            MaintenanceRecord::create([\n                'vehicle_id' => $vehicle->id,\n                'type' => $action['type'] ?? 'general',\n                'description' => $action['description'] ?? 'Scheduled maintenance',\n                'odometer_at_service' => $vehicle->odometer_km,\n                'scheduled_date' => now()->addDays($action['priority_days'] ?? 1),\n                'status' => 'scheduled',\n            ]);\n        }\n\n        $scheduledMaint = $recommendations['scheduled_maintenance'] ?? [];\n        if (isset($scheduledMaint['date'])) {\n            $vehicle->update([\n                'next_maintenance_date' => $scheduledMaint['date'],\n                'status' => 'maintenance_scheduled',\n            ]);\n        }\n    }\n}\n\nclass FleetVehicleAssessment\n{\n    public function __construct(\n        public readonly Vehicle $vehicle,\n        public readonly bool $isDueForMaintenance,\n        public readonly ?int $daysUntilNextService,\n        public readonly float $utilizationScore,\n        public readonly float $costPerKm,\n        public readonly array $predictedIssues,\n        public readonly array $aiRecommendations,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'vehicle_id' => $this->vehicle->id,\n            'name' => sprintf(\n                '%s %s (%s)',\n                $this->vehicle->make,\n                $this->vehicle->model,\n                $this->vehicle->license_plate\n            ),\n            'due_for_maintenance' => $this->isDueForMaintenance,\n            'days_until_service' => $this->daysUntilNextService,\n            'utilization_pct' => $this->utilizationScore,\n            'cost_per_km' => $this->costPerKm,\n            'predicted_issues' => $this->predictedIssues,\n            'overall_health' => $this->aiRecommendations['overall_health'] ?? 'unknown',\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "309-supply-chain-visibility-dashboard",
      children: "30.9 Supply Chain Visibility Dashboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The visibility dashboard aggregates real-time data from all agents for end-to-end supply chain monitoring."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The supply chain visibility dashboard aggregates data from all logistics agents into a unified real-time analytics layer. The analytics agent generates executive summaries, identifies bottlenecks, computes KPIs, and produces actionable reports that span the entire supply chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Agents\\Logistics;\n\nuse App\\Models\\InventoryItem;\nuse App\\Models\\PurchaseOrder;\nuse App\\Models\\Shipment;\nuse App\\Models\\Supplier;\nuse App\\Models\\Vehicle;\nuse App\\Models\\Warehouse;\nuse Illuminate\\Support\\Collection;\nuse Illuminate\\Support\\Facades\\DB;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass SupplyChainAnalyticsAgent\n{\n    public function generateReport(): SupplyChainReport\n    {\n        $inventorySummary = $this->summarizeInventory();\n        $orderFulfillment = $this->analyzeOrderFulfillment();\n        $shipmentStatus = $this->analyzeShipments();\n        $supplierPerformance = $this->summarizeSupplierPerformance();\n        $fleetStatus = $this->summarizeFleet();\n        $bottlenecks = $this->detectBottlenecks(\n            $inventorySummary, $orderFulfillment, $shipmentStatus\n        );\n        $kpis = $this->calculateKpis(\n            $inventorySummary, $orderFulfillment, $shipmentStatus\n        );\n        $aiInsights = $this->getAiStrategicInsights(\n            $kpis, $bottlenecks\n        );\n\n        return new SupplyChainReport(\n            inventorySummary: $inventorySummary,\n            orderFulfillment: $orderFulfillment,\n            shipmentStatus: $shipmentStatus,\n            supplierPerformance: $supplierPerformance,\n            fleetStatus: $fleetStatus,\n            bottlenecks: $bottlenecks,\n            kpis: $kpis,\n            aiInsights: $aiInsights,\n            generatedAt: now(),\n        );\n    }\n\n    protected function summarizeInventory(): array\n    {\n        $totalItems = InventoryItem::count();\n        $totalValue = InventoryItem::join('products', 'inventory_items.product_id', '=', 'products.id')\n            ->selectRaw('SUM(inventory_items.quantity_on_hand * products.unit_cost) as total_value')\n            ->value('total_value') ?? 0;\n\n        $lowStockCount = InventoryItem::lowStock()->count();\n        $expiringCount = InventoryItem::expiringBefore(\n            now()->addDays(30)->toDateString()\n        )->count();\n\n        $warehouseBreakdown = Warehouse::select([\n            'warehouses.id', 'warehouses.name',\n            DB::raw('COUNT(inventory_items.id) as item_count'),\n            DB::raw('SUM(inventory_items.quantity_on_hand) as total_units'),\n        ])\n            ->leftJoin('inventory_items', 'warehouses.id', '=', 'inventory_items.warehouse_id')\n            ->groupBy('warehouses.id', 'warehouses.name')\n            ->get()\n            ->toArray();\n\n        return [\n            'total_items' => $totalItems,\n            'total_value' => round($totalValue, 2),\n            'low_stock_count' => $lowStockCount,\n            'expiring_count' => $expiringCount,\n            'warehouse_breakdown' => $warehouseBreakdown,\n        ];\n    }\n\n    protected function analyzeOrderFulfillment(): array\n    {\n        $totalOrders = PurchaseOrder::count();\n        $pendingOrders = PurchaseOrder::pending()->count();\n        $completedOrders = PurchaseOrder::whereIn('status', ['received', 'completed'])->count();\n        $overdueOrders = PurchaseOrder::whereIn('status', ['sent', 'confirmed'])\n            ->whereNotNull('expected_date')\n            ->where('expected_date', '<', now())\n            ->count();\n\n        $fillRate = $totalOrders > 0\n            ? round(($completedOrders / $totalOrders) * 100, 2)\n            : 0;\n\n        return [\n            'total_orders' => $totalOrders,\n            'pending' => $pendingOrders,\n            'completed' => $completedOrders,\n            'overdue' => $overdueOrders,\n            'fill_rate_pct' => $fillRate,\n        ];\n    }\n\n    protected function analyzeShipments(): array\n    {\n        $total = Shipment::count();\n        $inTransit = Shipment::byStatus('in_transit')->count();\n        $outForDelivery = Shipment::byStatus('out_for_delivery')->count();\n        $delivered = Shipment::byStatus('delivered')->count();\n        $delayed = Shipment::byStatus('delayed')->count();\n        $overdue = Shipment::overdue()->count();\n\n        $onTimeRate = $delivered > 0\n            ? round(($delivered / ($delivered + $delayed)) * 100, 2)\n            : 100;\n\n        return [\n            'total' => $total,\n            'in_transit' => $inTransit,\n            'out_for_delivery' => $outForDelivery,\n            'delivered' => $delivered,\n            'delayed' => $delayed,\n            'overdue' => $overdue,\n            'on_time_rate_pct' => $onTimeRate,\n        ];\n    }\n\n    protected function summarizeSupplierPerformance(): array\n    {\n        $total = Supplier::where('status', 'active')->count();\n        $avgScore = Supplier::where('status', 'active')\n            ->selectRaw('AVG((COALESCE(reliability_score,0) + COALESCE(quality_score,0) + COALESCE(cost_score,0)) / 3) as avg_score')\n            ->value('avg_score') ?? 0;\n\n        $underperformers = Supplier::where('status', 'under_review')->count();\n\n        return [\n            'total_active' => $total,\n            'average_score' => round($avgScore, 2),\n            'under_review' => $underperformers,\n        ];\n    }\n\n    protected function summarizeFleet(): array\n    {\n        $total = Vehicle::count();\n        $available = Vehicle::where('status', 'available')->count();\n        $inService = Vehicle::where('status', 'in_service')->count();\n        $dueForMaintenance = Vehicle::dueForMaintenance()->count();\n        $maintenanceScheduled = Vehicle::where('status', 'maintenance_scheduled')->count();\n\n        return [\n            'total' => $total,\n            'available' => $available,\n            'in_service' => $inService,\n            'due_for_maintenance' => $dueForMaintenance,\n            'maintenance_scheduled' => $maintenanceScheduled,\n            'availability_rate_pct' => $total > 0\n                ? round(($available / $total) * 100, 2) : 0,\n        ];\n    }\n\n    protected function detectBottlenecks(\n        array $inventory, array $orders, array $shipments\n    ): array {\n        $bottlenecks = [];\n\n        if ($inventory['low_stock_count'] > 10) {\n            $bottlenecks[] = [\n                'area' => 'inventory',\n                'severity' => 'high',\n                'message' => sprintf(\n                    '%d products below reorder point.', $inventory['low_stock_count']\n                ),\n                'recommendation' => 'Expedite purchase orders for low-stock items.',\n            ];\n        }\n\n        if ($orders['overdue'] > 5) {\n            $bottlenecks[] = [\n                'area' => 'procurement',\n                'severity' => 'high',\n                'message' => sprintf(\n                    '%d overdue purchase orders.', $orders['overdue']\n                ),\n                'recommendation' => 'Contact suppliers and update expected delivery dates.',\n            ];\n        }\n\n        if ($shipments['overdue'] > 3) {\n            $bottlenecks[] = [\n                'area' => 'delivery',\n                'severity' => 'medium',\n                'message' => sprintf(\n                    '%d shipments past estimated delivery.', $shipments['overdue']\n                ),\n                'recommendation' => 'Notify customers and prioritize exception handling.',\n            ];\n        }\n\n        if ($this->summarizeFleet()['due_for_maintenance'] > 2) {\n            $bottlenecks[] = [\n                'area' => 'fleet',\n                'severity' => 'medium',\n                'message' => 'Multiple vehicles due for maintenance.',\n                'recommendation' => 'Schedule maintenance to prevent downtime.',\n            ];\n        }\n\n        return $bottlenecks;\n    }\n\n    protected function calculateKpis(\n        array $inventory, array $orders, array $shipments\n    ): array {\n        return [\n            'inventory_turnover' => [\n                'label' => 'Inventory Turnover',\n                'value' => $inventory['total_value'] > 0\n                    ? round($orders['completed'] / ($inventory['total_value'] / 1000), 2)\n                    : 0,\n                'unit' => 'ratio',\n                'trend' => 'stable',\n            ],\n            'order_fill_rate' => [\n                'label' => 'Order Fill Rate',\n                'value' => $orders['fill_rate_pct'],\n                'unit' => '%',\n                'trend' => $orders['fill_rate_pct'] >= 90 ? 'positive' : 'negative',\n            ],\n            'on_time_delivery' => [\n                'label' => 'On-Time Delivery',\n                'value' => $shipments['on_time_rate_pct'],\n                'unit' => '%',\n                'trend' => $shipments['on_time_rate_pct'] >= 95 ? 'positive' : 'needs_attention',\n            ],\n            'fleet_availability' => [\n                'label' => 'Fleet Availability',\n                'value' => $this->summarizeFleet()['availability_rate_pct'],\n                'unit' => '%',\n                'trend' => $this->summarizeFleet()['availability_rate_pct'] >= 80\n                    ? 'positive' : 'negative',\n            ],\n            'supplier_quality' => [\n                'label' => 'Supplier Quality Score',\n                'value' => $this->summarizeSupplierPerformance()['average_score'],\n                'unit' => 'points',\n                'trend' => 'monitoring',\n            ],\n        ];\n    }\n\n    protected function getAiStrategicInsights(\n        array $kpis, array $bottlenecks\n    ): array {\n        $kpiSummary = collect($kpis)->map(\n            fn ($k, $key) => sprintf('%s: %s %s', $k['label'], $k['value'], $k['unit'])\n        )->implode(\"\\n\");\n\n        $bottleneckSummary = collect($bottlenecks)->map(\n            fn ($b) => sprintf('[%s] %s', $b['severity'], $b['message'])\n        )->implode(\"\\n\");\n\n        $prompt = sprintf(\n            \"Analyze this supply chain status and provide strategic insights:\\n\\n\".\n            \"Key Metrics:\\n%s\\n\\n\".\n            \"Bottlenecks:\\n%s\\n\\n\".\n            \"Respond with JSON: {\\\"overall_health\\\": \\\"healthy|moderate|critical\\\",\".\n            \" \\\"top_priority\\\": \\\"...\\\", \\\"quick_wins\\\": [...],\".\n            \" \\\"strategic_recommendations\\\": [...], \\\"risk_outlook\\\": \\\"...\\\"}\",\n            $kpiSummary,\n            $bottleneckSummary ?: 'None detected.',\n        );\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'You are a supply chain strategic advisor.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return json_decode(\n            $response->choices[0]->message->content ?? '{}',\n            true\n        ) ?? [];\n    }\n}\n\nclass SupplyChainReport\n{\n    public function __construct(\n        public readonly array $inventorySummary,\n        public readonly array $orderFulfillment,\n        public readonly array $shipmentStatus,\n        public readonly array $supplierPerformance,\n        public readonly array $fleetStatus,\n        public readonly array $bottlenecks,\n        public readonly array $kpis,\n        public readonly array $aiInsights,\n        public readonly \\DateTimeInterface $generatedAt,\n    ) {}\n\n    public function toArray(): array\n    {\n        return [\n            'generated_at' => $this->generatedAt->toIso8601String(),\n            'overall_health' => $this->aiInsights['overall_health'] ?? 'unknown',\n            'inventory' => $this->inventorySummary,\n            'order_fulfillment' => $this->orderFulfillment,\n            'shipments' => $this->shipmentStatus,\n            'suppliers' => $this->supplierPerformance,\n            'fleet' => $this->fleetStatus,\n            'bottlenecks' => $this->bottlenecks,\n            'kpis' => $this->kpis,\n            'ai_insights' => $this->aiInsights,\n        ];\n    }\n}\n"
      })
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
            children: "Inventory Prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demand forecasting ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced stockouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires quality historical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic solvers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced fuel costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shipment Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier API integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API reliability dependency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supplier Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KPI evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better procurement decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data quality from suppliers"
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
            children: "Inventory::predictDemand()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict demand for SKU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shipment::track()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track shipment status"
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
            children: "Inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced stockouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical data needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuel cost reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shipments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracking agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API dependency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suppliers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Management agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better procurement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supplier data quality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What data sources improve demand forecasting accuracy?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Only historical sales"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Historical data plus weather, holidays, and economics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only weather data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only seasonal trends"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Combining historical data with external factors like weather, holidays, and economic indicators improves accuracy."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What type of solver is recommended for daily route optimization?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Exact solver"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Heuristic algorithm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Brute force"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Random assignment"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Heuristic algorithms are computationally practical for daily route optimization; exact solvers are used for planning."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How often should warehouse slotting be reviewed?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Never"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Monthly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Yearly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only when warehouse is full"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Slotting assignments should be reviewed monthly as order patterns change."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main dependency challenge for shipment tracking?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Database performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Carrier API reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Storage costs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) User interface design"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Shipment tracking depends on carrier API reliability for real-time updates."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this chapter, we built a complete logistics and supply chain intelligence system using Laravel and AI agents:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data models"
        }), " for shipments, inventory, suppliers, warehouses, purchase orders, and fleet vehicles — each with migrations, Eloquent relationships, casts, and query scopes that enforce domain invariants at the database level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inventory prediction agents"
        }), " that calculate daily demand, standard deviation, safety stock, reorder points, and economic order quantities, then consult an AI model for natural-language recommendations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route optimization agents"
        }), " that solve nearest-neighbor traveling-salesperson problems with priority weighting, integrate with Google Maps APIs for real distance matrices, and surface AI-generated fuel and time savings tips."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shipment tracking automation"
        }), " that polls carrier APIs, detects status changes and delivery exceptions, records tracking events, and dispatches notifications with AI-generated customer messages and escalation logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supplier management agents"
        }), " that compute on-time delivery rates, defect rates, lead time accuracy, and cost scores, then tier suppliers and drive procurement decisions via AI evaluation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warehouse automation agents"
        }), " that collect order items, build zone maps, assign bin locations, create optimized pick batches, and estimate pick times with AI productivity recommendations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demand forecasting agents"
        }), " that aggregate historical outbound movements into monthly totals, compute seasonal factors and linear trends, generate multi-month forecasts with confidence levels, and produce AI pattern analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fleet management agents"
        }), " that track utilization, cost-per-kilometer, predict brake/engine/tire maintenance needs, and schedule preventive maintenance with AI health assessments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supply chain visibility reports"
        }), " that consolidate all agent outputs into executive dashboards with KPIs, bottleneck detection, and AI-generated strategic insights."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Safety Stock Simulation"
          }), ": Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InventoryPredictionAgent"
          }), " to run 10,000 Monte Carlo simulations of demand during lead time. Return the 95th percentile as the safety stock level instead of the current standard-deviation-based formula."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Warehouse Route Optimization"
          }), ": Modify ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RouteOptimizationAgent"
          }), " to support multiple origin warehouses. The agent should decide which warehouse fulfills each shipment based on proximity, inventory availability, and current workload."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Carrier API Adapter Pattern"
          }), ": Build a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CarrierApiAdapter"
          }), " interface and implement adapters for FedEx, UPS, and DHL. Integrate them into ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ShipmentTrackingAgent"
          }), " so it dynamically selects the correct adapter based on the carrier's metadata."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Supplier Negotiation Letter Generator"
          }), ": Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SupplierEvaluationAgent"
          }), " to generate a personalized negotiation letter when a supplier's tier drops to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bronze"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "probation"
          }), ". The letter should cite specific performance data and suggest improvement targets."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic Pick Batch Sizing"
          }), ": Modify ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WarehouseAgent"
          }), " to dynamically adjust ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pickBatchSize"
          }), " based on real-time warehouse congestion. When pick density is high, use larger batches; when low, smaller batches to avoid delaying urgent orders."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demand Anomaly Detection"
          }), ": Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DemandForecastAgent"
          }), " to flag months where actual demand deviates from the forecast by more than 2 standard deviations. Log these as anomalies and trigger an AI analysis of possible causes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Predictive Fleet Replacement Model"
          }), ": Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FleetManagementAgent"
          }), " to calculate total cost of ownership (TCO) for each vehicle and recommend replacement when maintenance costs exceed 50% of the vehicle's estimated residual value."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-Time Dashboard Endpoint"
          }), ": Build a Laravel controller that calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SupplyChainAnalyticsAgent"
          }), " and returns the report as a JSON API response. Add caching with a 5-minute TTL so the dashboard loads instantly while remaining fresh."]
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