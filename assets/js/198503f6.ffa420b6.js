"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[23059],{

/***/ 36446
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_04_cloud_storage_md_198_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-04-cloud-storage-md-198.json
const site_docs_courses_cloud_computing_04_cloud_storage_md_198_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/04-cloud-storage","title":"Chapter 4: Cloud Storage Services","description":"Previous Cloud Compute Services | Next Cloud Database Services","source":"@site/docs/courses/cloud-computing/04-cloud-storage.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/04-cloud-storage","permalink":"/ai-engineering-journey/cloud-computing/04-cloud-storage","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-cloud-storage","slug":"/cloud-computing/04-cloud-storage","title":"Chapter 4: Cloud Storage Services","sidebar_label":"Chapter 4: Cloud Storage Services","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Cloud Compute Services","permalink":"/ai-engineering-journey/cloud-computing/03-cloud-compute"},"next":{"title":"Chapter 5: Cloud Database Services","permalink":"/ai-engineering-journey/cloud-computing/05-cloud-database"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/04-cloud-storage.md


const frontMatter = {
	id: '04-cloud-storage',
	slug: '/cloud-computing/04-cloud-storage',
	title: 'Chapter 4: Cloud Storage Services',
	sidebar_label: 'Chapter 4: Cloud Storage Services',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Cloud Storage Services';

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
  "value": "4.1 Taxonomy of Cloud Storage",
  "id": "41-taxonomy-of-cloud-storage",
  "level": 3
}, {
  "value": "4.2 Object Storage: S3, Blob, and GCS",
  "id": "42-object-storage-s3-blob-and-gcs",
  "level": 3
}, {
  "value": "4.3 Object Versioning and Lifecycle Policies",
  "id": "43-object-versioning-and-lifecycle-policies",
  "level": 3
}, {
  "value": "4.4 Block Storage: EBS, Azure Disk, and Persistent Disk",
  "id": "44-block-storage-ebs-azure-disk-and-persistent-disk",
  "level": 3
}, {
  "value": "4.5 File Storage: Managed Network Shares",
  "id": "45-file-storage-managed-network-shares",
  "level": 3
}, {
  "value": "4.6 Storage Replication and Data Protection",
  "id": "46-storage-replication-and-data-protection",
  "level": 3
}, {
  "value": "4.7 Content Delivery Networks (CDN)",
  "id": "47-content-delivery-networks-cdn",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 4.1: Object Storage Lifecycle Policy (JSON)",
  "id": "example-41-object-storage-lifecycle-policy-json",
  "level": 3
}, {
  "value": "Example 4.2: Mounting a Managed File Share (Linux)",
  "id": "example-42-mounting-a-managed-file-share-linux",
  "level": 3
}, {
  "value": "Example 4.3: TypeScript Storage Operations Wrapper",
  "id": "example-43-typescript-storage-operations-wrapper",
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
  "value": "TypeScript: Cost Calculator",
  "id": "typescript-cost-calculator",
  "level": 3
}, {
  "value": "TypeScript: Storage Lifecycle Policy Simulator",
  "id": "typescript-storage-lifecycle-policy-simulator",
  "level": 3
}, {
  "value": "TypeScript: Replication Manager",
  "id": "typescript-replication-manager",
  "level": 3
}, {
  "value": "TypeScript: Storage Tier Lifecycle Policy Engine",
  "id": "typescript-storage-tier-lifecycle-policy-engine",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "chapter-4-cloud-storage-services",
        children: "Chapter 4: Cloud Storage Services"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/03-cloud-compute",
          children: "Chapter 3: Cloud Compute Services"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/05-cloud-database",
          children: "Chapter 5: Cloud Database Services"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/cloud-computing/04-cloud-storage/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/04-cloud-storage/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/04-cloud-storage/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/04-cloud-storage/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/04-cloud-storage/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/04-cloud-storage/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between object, block, and file storage models and their use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare object storage offerings (S3, Azure Blob, GCS) including buckets/containers and tiers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure persistent block storage for virtual machines across different performance tiers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement shared file systems using NFS and SMB protocols in the cloud."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply lifecycle management policies to automate data tiering and cost optimization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate data durability and availability through replication strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design content delivery strategies using global CDN services."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand S3 consistency model and object versioning."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Object Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, Blob, GCS ? infinite scale via HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for static files, backups, data lakes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBS, Disk, PD ? raw volumes for VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for databases, OS boot volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EFS, Azure Files, Filestore ? shared NFS/SMB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for multi-VM shared access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot, Cool, Archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate tier transitions for cost savings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-move data between tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for cost management at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge caching for global performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cuts latency, reduces origin load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same-region vs cross-region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DR and compliance requirements drive choice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Storage Taxonomy] --> B[Object Storage]\nA --> C[Block Storage]\nA --> D[File Storage]\nB --> E[Versioning and Lifecycle]\nC --> F[Performance Tiers]\nD --> G[Shared Access Protocols]\nE --> H[CDN and Distribution]\nF --> H\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-taxonomy-of-cloud-storage",
      children: "4.1 Taxonomy of Cloud Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud providers offer three primary categories of storage, each optimized for different data access patterns and architectural requirements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage:"
        }), " Stores data as discrete objects with metadata and unique identifiers. Highly scalable, accessed via HTTP/REST APIs. Ideal for static media, backups, and data lakes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Storage:"
        }), " Provides raw storage volumes that can be formatted with a filesystem. Low latency, high throughput, attached to a single VM (mostly). Ideal for databases and OS boot volumes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Storage:"
        }), " Provides managed file shares accessible via standard network protocols (NFS/SMB). Supports concurrent access by multiple VMs. Ideal for home directories and shared application data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Cloud Storage Taxonomy\"\ndirection TB\nA[Cloud Storage]\nA --> B[Object Storage]\nA --> C[Block Storage]\nA --> D[File Storage]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    B --> B1[\"S3, Blob, GCS<br/>HTTP/REST API<br/>Infinite scale\"]\n    C --> C1[\"EBS, Disk, PD<br/>iSCSI/NVMe<br/>Low latency\"]\n    D --> D1[\"EFS, Azure Files, Filestore<br/>NFS/SMB<br/>Shared access\"]\n    \n    B1 --> E[\"Use: Backups, media, data lakes\"]\n    C1 --> F[\"Use: Databases, boot volumes\"]\n    D1 --> G[\"Use: Shared config, home dirs\"]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-object-storage-s3-blob-and-gcs",
      children: "4.2 Object Storage: S3, Blob, and GCS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object storage is the \"Swiss Army Knife\" of cloud storage, offering virtually infinite scale."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS S3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure Blob Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google Cloud Storage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Namespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global unique names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global unique names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrequent Tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Standard-IA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearline / Coldline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Archive Tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Glacier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-after-write, Eventual overwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-S3, SSE-KMS, SSE-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Storage encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side, CMEK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Object Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.75 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 TB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency Model:"
      }), " S3 provides read-after-write consistency for PUTS of new objects and eventual consistency for overwrite PUTS and DELETES. Azure Blob and GCS provide strong consistency for all operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Durability and Availability:"
      }), " Providers typically guarantee \"11 nines\" (99.999999999%) durability by replicating data across multiple physical disks and data centers (Availability Zones). For 10 million objects, this means statistically one object might be lost every 10 million years."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-object-versioning-and-lifecycle-policies",
      children: "4.3 Object Versioning and Lifecycle Policies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning:"
      }), " Protects against accidental deletion and allows recovery of previous object states. When enabled, every object modification creates a new version. Delete operations create delete markers instead of permanently removing data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Policies:"
      }), " Automatically transition data from \"Hot\" (expensive, fast) to \"Archive\" (cheap, slow) based on time. Example: move to infrequent access after 30 days, archive after 90 days, delete after 365 days."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph LR\nsubgraph \"Object Versioning\"\nA[PUT object.jpg] --> B[Version ID: 111]\nA --> C[Version ID: 222]\nA --> D[Version ID: 333]\nD --> E[Delete Marker]\nE --> F[Previous Versions retained but hidden]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"Lifecycle Transitions\"\n    G[Day 0: Standard] --> H[Day 30: Standard-IA]\n    H --> I[Day 90: Glacier]\n    I --> J[Day 365: Expire/Delete]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface LifecycleTransition {\ndays: number;\nstorageClass: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface LifecycleRule {\nid: string;\nenabled: boolean;\nprefix: string;\ntransitions: LifecycleTransition[];\nexpirationDays?: number;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "function generateLifecyclePolicy(\ndataCategory: \"logs\" | \"media\" | \"backups\" | \"compliance\"\n): LifecycleRule[] {\nconst policies: Record<string, LifecycleRule[]> = {\nlogs: [\n{\nid: \"logs-lifecycle\",\nenabled: true,\nprefix: \"logs/\",\ntransitions: [\n{ days: 30, storageClass: \"S3 Standard-IA\" },\n{ days: 90, storageClass: \"S3 Glacier\" },\n],\nexpirationDays: 365,\n},\n],\nmedia: [\n{\nid: \"media-hot\",\nenabled: true,\nprefix: \"media/\",\ntransitions: [\n{ days: 90, storageClass: \"S3 Standard-IA\" },\n{ days: 365, storageClass: \"S3 Glacier\" },\n],\n},\n],\nbackups: [\n{\nid: \"backups-long-term\",\nenabled: true,\nprefix: \"backups/\",\ntransitions: [\n{ days: 30, storageClass: \"S3 Standard-IA\" },\n{ days: 180, storageClass: \"S3 Glacier Deep Archive\" },\n],\n},\n],\ncompliance: [\n{\nid: \"compliance-immutable\",\nenabled: true,\nprefix: \"compliance/\",\ntransitions: [\n{ days: 365, storageClass: \"S3 Glacier\" },\n],\nexpirationDays: 2555,\n},\n],\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "return policies[dataCategory] || [];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const logRules = generateLifecyclePolicy(\"logs\");\nconsole.log(JSON.stringify(logRules, null, 2));\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Output:\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\n[\n{\n\"id\": \"logs-lifecycle\",\n\"enabled\": true,\n\"prefix\": \"logs/\",\n\"transitions\": [\n{ \"days\": 30, \"storageClass\": \"S3 Standard-IA\" },\n{ \"days\": 90, \"storageClass\": \"S3 Glacier\" }\n],\n\"expirationDays\": 365\n}\n]\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-block-storage-ebs-azure-disk-and-persistent-disk",
      children: "4.4 Block Storage: EBS, Azure Disk, and Persistent Disk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Block storage behaves like a physical hard drive. It is typically confined to a specific Availability Zone because it requires low-latency connection to the host."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max IOPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost/GB/month"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gp3 (General Purpose)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot volumes, dev/test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "io2 (Provisioned IOPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4,000 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".125"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "st1 (Throughput Optimized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big data, ETL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".045"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sc1 (Cold HDD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cold backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".015"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IOPS:"
        }), " Input/Output Operations Per Second. Measures how many read/write operations per second the volume can handle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throughput:"
        }), " Data transfer rate in MB/s. Critical for sequential workloads like data warehousing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snapshot:"
        }), " Point-in-time backup stored in S3. Can be used to create new volumes, resize, or migrate across AZs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption:"
        }), " EBS encryption at rest using KMS. Prevents unauthorized access if a volume or snapshot is compromised."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-file-storage-managed-network-shares",
      children: "4.5 File Storage: Managed Network Shares"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Managed file services eliminate the overhead of managing file servers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS EFS / FSx:"
        }), " EFS for Linux (NFSv4), FSx for Windows (SMB) and Lustre (HPC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Azure Files:"
        }), " Supports both SMB and NFS. Can be integrated with on-premises Active Directory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GCP Filestore:"
        }), " Fully managed NFS server for Compute Engine and GKE."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFSv4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bursting to 3 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared storage for Linux VMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSx for Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 2 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows file servers, AD integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSx for Lustre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lustre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1 TB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPC, ML training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB/NFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 100 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise file shares"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filestore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFSv3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 320 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance shared storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-storage-replication-and-data-protection",
      children: "4.6 Storage Replication and Data Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Replication Strategies\"\nA[Source Bucket/Volume]\nA --> B[Same-Region Replication]\nA --> C[Cross-Region Replication]\nB --> D[Compliance, Log aggregation]\nC --> E[DR, Geo-compliance, Latency optimization]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"Data Protection\"\n    F[Versioning]\n    G[Immutable Object Lock]\n    H[Replication]\n    I[Snapshots]\n    J[MFA Delete]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same-Region Replication (SRR):"
        }), " Copies objects to another bucket in the same region. Used for compliance, log aggregation, or data protection within the same geography."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Region Replication (CRR):"
        }), " Copies objects across AWS regions. Used for disaster recovery, geographic compliance, and latency optimization for global users."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Protection Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " Preserves all object versions. Protects against accidental deletion and overwrites."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Lock:"
        }), " Write-once-read-many (WORM) protection. Prevents object deletion even by root users. Essential for compliance (SEC 17a-4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA Delete:"
        }), " Requires multi-factor authentication to delete objects or change versioning state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snapshots:"
        }), " Point-in-time backups of block storage volumes. Incremental ? only changed data is saved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-content-delivery-networks-cdn",
      children: "4.7 Content Delivery Networks (CDN)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CDNs cache content at \"Edge Locations\" closer to the end-users to reduce latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nsequenceDiagram\nparticipant User as End User\nparticipant Edge as Edge Location\nparticipant Origin as Origin Server\nparticipant S3 as S3 Bucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User->>Edge: GET /image.jpg\nEdge->>Edge: Check cache\nalt Cache Hit\n    Edge-->>User: 200 OK + image (cached)\nelse Cache Miss\n    Edge->>Origin: Forward request\n    Origin->>S3: Fetch from origin\n    S3-->>Origin: image data\n    Origin-->>Edge: Cache response\n    Edge-->>User: 200 OK + image\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS CloudFront:"
        }), " Deeply integrated with S3 and WAF. Supports Lambda@Edge for serverless compute at the edge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Azure CDN / Front Door:"
        }), " Optimized for enterprise content and global application acceleration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GCP Cloud CDN:"
        }), " Leverages Google global private network and Anycast IP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDN Cache Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL (Time to Live):"
        }), " How long the edge keeps content before checking for a new version. Controlled by Cache-Control headers or origin settings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache Invalidation:"
        }), " Manually removing cached content before TTL expires. Use for immediate updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Origin Shield:"
        }), " An intermediate caching layer that reduces load on the origin server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-41-object-storage-lifecycle-policy-json",
      children: "Example 4.1: Object Storage Lifecycle Policy (JSON)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An S3 policy to move objects to Infrequent Access after 30 days and Archive after 90 days:\n\\\\json\n{\n\"Rules\": [\n{\n\"ID\": \"MoveToArchive\",\n\"Status\": \"Enabled\",\n\"Transitions\": [\n{ \"Days\": 30, \"StorageClass\": \"STANDARD_IA\" },\n{ \"Days\": 90, \"StorageClass\": \"GLACIER\" }\n]\n}\n]\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-42-mounting-a-managed-file-share-linux",
      children: "Example 4.2: Mounting a Managed File Share (Linux)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\bash\nsudo mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport fs-01234567.efs.us-east-1.amazonaws.com:/ /mnt/efs\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-43-typescript-storage-operations-wrapper",
      children: "Example 4.3: TypeScript Storage Operations Wrapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface StorageProvider {\nupload(bucket: string, key: string, data: Buffer, storageClass?: string): Promise<string>;\ndownload(bucket: string, key: string): Promise<Buffer>;\ndelete(bucket: string, key: string): Promise<void>;\nlist(bucket: string, prefix: string): Promise<string[]>;\ncopy(sourceBucket: string, sourceKey: string, destBucket: string, destKey: string): Promise<void>;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class S3StorageProvider implements StorageProvider {\nprivate endpoint: string;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(endpoint: string) {\nthis.endpoint = endpoint;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async upload(bucket: string, key: string, data: Buffer, storageClass = \"STANDARD\"): Promise<string> {\nconsole.log(\"Uploading\", key, \"to\", bucket, \"class:\", storageClass);\nconsole.log(\"  Size:\", (data.length / 1024 / 1024).toFixed(2), \"MB\");\nreturn \"https://\" + bucket + \".s3.amazonaws.com/\" + key;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async download(bucket: string, key: string): Promise<Buffer> {\nconsole.log(\"Downloading\", key, \"from\", bucket);\nreturn Buffer.from(\"simulated data\");\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async delete(bucket: string, key: string): Promise<void> {\nconsole.log(\"Deleted\", key, \"from\", bucket);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async list(bucket: string, prefix: string): Promise<string[]> {\nreturn [\"file1.txt\", \"file2.txt\", \"file3.txt\"];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async copy(sourceBucket: string, sourceKey: string, destBucket: string, destKey: string): Promise<void> {\nconsole.log(\"Copied\", sourceBucket + \"/\" + sourceKey, \"to\", destBucket + \"/\" + destKey);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class StorageManager {\nprivate provider: StorageProvider;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(provider: StorageProvider) {\nthis.provider = provider;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async backupDatabase(\ndatabaseName: string,\nbackupData: Buffer,\nretentionDays: number\n): Promise<string> {\nconst bucket = \"company-db-backups\";\nconst key = \"databases/\" + databaseName + \"/\" + Date.now() + \".bak\";"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let storageClass = \"STANDARD\";\nif (retentionDays > 90) storageClass = \"GLACIER\";\nelse if (retentionDays > 30) storageClass = \"STANDARD_IA\";\n\nreturn this.provider.upload(bucket, key, backupData, storageClass);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async replicateAcrossRegions(\nbucket: string,\nkey: string,\ndestinationRegion: string\n): Promise<void> {\nconst destBucket = bucket + \"-\" + destinationRegion;\nawait this.provider.copy(bucket, key, destBucket, key);\nconsole.log(\"Replicated\", key, \"to\", destinationRegion);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async generateStorageReport(): Promise<void> {\nconst buckets = [\"company-data\", \"company-logs\", \"company-backups\"];\nfor (const bucket of buckets) {\nconst objects = await this.provider.list(bucket, \"\");\nconsole.log(bucket + \":\", objects.length, \"objects\");\n}\n}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["const provider = new S3StorageProvider(\"", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://s3.us-east-1.amazonaws.com",
        children: "https://s3.us-east-1.amazonaws.com"
      }), "\");\nconst manager = new StorageManager(provider);"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async function runDemo(): Promise<void> {\nconst backupLocation = await manager.backupDatabase(\n\"production-db\",\nBuffer.alloc(1024 * 1024 * 100),\n180\n);\nconsole.log(\"Backup stored at:\", backupLocation);\nawait manager.replicateAcrossRegions(\"company-data\", \"critical-file.pdf\", \"eu-west-1\");\nawait manager.generateStorageReport();\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "runDemo();\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The three cloud storage models serve fundamentally different purposes ? object for scale and durability, block for performance, and file for shared access ? and knowing which to use is the key to cost-effective cloud architecture."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For cost-optimized object storage, set up lifecycle policies on day one ? move objects to infrequent access after 30 days and archive after 90. This can reduce storage costs by 80%+ for data with predictable access decay."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Object storage does not support file locking or POSIX semantics. If your application needs concurrent writes with locking, use block or file storage. Attempting to use object storage for a database will result in data corruption."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP-accessible key-value for files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite scale, eventual consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups, media, data lakes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw volumes formatted with FS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency, single-VM attachment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, boot volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network file system (NFS/SMB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-VM shared access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared configs, home dirs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hot Tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent access, highest cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cool/IA Tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infrequent access, lower cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30+ day retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups, logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Archive Tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare access, lowest cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to hours retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance archives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object modification history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protects against accidental deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-bucket or cross-region copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DR and compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disaster recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Object Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, Blob, GCS - buckets, keys, tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.999999999% durability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBS, Disk, PD - IOPS tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned IOPS costs extra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EFS (NFS), Azure Files (SMB), FSx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with connected clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition, Expiration, Intelligent-Tiering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate data tier movement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CDN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront, Azure CDN, Cloud CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge caching reduces origin load"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data lakes, backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption at rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term archives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev volumes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption, snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared application data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Home directories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance data retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What durability guarantee do major cloud providers offer for object storage?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 99.99%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 99.999999999% (11 nines)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 99.9999%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 100%"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) 99.999999999% (11 nines).** Object storage achieves this by automatically replicating data across multiple physical devices and availability zones. For 10 million objects, this means statistically one object might be lost every 10 million years.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you choose File Storage (EFS/Azure Files/Filestore) over attaching Block Storage to each VM?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Always ? file storage is cheaper"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When multiple VMs need concurrent read/write access to the same data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) File storage is faster than block storage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) When you need a boot volume for VMs"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When multiple VMs need concurrent read/write access to the same data.** Block storage can only be attached to one VM at a time. File storage provides shared access via NFS or SMB, making it ideal for shared configuration, home directories, and clustered applications.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens to data stored on an Instance Store volume when the EC2 instance is stopped?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Data is automatically saved to S3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Data persists until the instance is terminated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Data is permanently lost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Data is migrated to a new host"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Data is permanently lost.** Instance store volumes are physically attached to the host server. When the instance stops, the data on instance store volumes is lost. This is why critical data must always use persistent storage like EBS.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of Cross-Region Replication in object storage?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To make copies for load balancing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To provide disaster recovery and geographic compliance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To increase storage capacity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To reduce latency for local users"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To provide disaster recovery and geographic compliance.** Cross-Region Replication copies objects to a bucket in a different AWS region, protecting against region-wide outages and meeting data residency requirements.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which CDN behavior determines how long an edge location keeps content before checking for updates?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Cache invalidation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TTL (Time to Live)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Origin pull"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Edge function"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) TTL (Time to Live).** TTL is set via Cache-Control headers and controls how long the edge location stores content before re-fetching from the origin server.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cost-calculator",
      children: "TypeScript: Cost Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface StorageCostConfig {\n  tier: \"standard\" | \"infrequent\" | \"archive\" | \"glacier\";\n  storageGb: number;\n  monthlyGetRequests: number;\n  monthlyPutRequests: number;\n}\n\nclass StorageCostCalculator {\n  rates = {\n    standard: { perGb: 0.023, perGet: 4e-7, perPut: 5e-7 },\n    infrequent: { perGb: 0.0125, perGet: 1e-6, perPut: 1e-6 },\n    glacier: { perGb: 0.004, perGet: 4e-4, perPut: 3e-5 },\n    archive: { perGb: 0.001, perGet: 8e-4, perPut: 5e-5 },\n  };\n\n  monthlyCost(config: StorageCostConfig): number {\n    const r = this.rates[config.tier];\n    return config.storageGb * r.perGb + config.monthlyGetRequests * r.perGet + config.monthlyPutRequests * r.perPut;\n  }\n\n  compareTiers(config: Omit<StorageCostConfig, \"tier\">): Record<string, number> {\n    const result: Record<string, number> = {};\n    for (const tier of Object.keys(this.rates)) {\n      result[tier] = this.monthlyCost({ ...config, tier: tier as any });\n    }\n    return result;\n  }\n}\n// const calc = new StorageCostCalculator();\n// console.log(calc.compareTiers({ storageGb: 5000, monthlyGetRequests: 1e6, monthlyPutRequests: 1e5 }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-storage-lifecycle-policy-simulator",
      children: "TypeScript: Storage Lifecycle Policy Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type StorageTier = \"standard\" | \"infrequent-access\" | \"archive\" | \"deep-archive\";\n\ninterface LifecycleRule {\n  id: string;\n  prefix: string;\n  transitions: { days: number; tier: StorageTier }[];\n  expirationDays?: number;\n}\n\ninterface StorageObject {\n  key: string;\n  sizeGB: number;\n  lastAccessed: number;\n  currentTier: StorageTier;\n  age: number;\n}\n\nclass LifecyclePolicyEngine {\n  private rules: LifecycleRule[] = [];\n  private objects: StorageObject[] = [];\n  private tierCosts: Record<StorageTier, number> = {\n    \"standard\": 0.023, \"infrequent-access\": 0.0125,\n    \"archive\": 0.004, \"deep-archive\": 0.001,\n  };\n\n  addRule(rule: LifecycleRule): void { this.rules.push(rule); }\n  addObject(obj: StorageObject): void { this.objects.push(obj); }\n\n  simulateDay(): StorageObject[] {\n    const transitions: StorageObject[] = [];\n    for (const obj of this.objects) {\n      obj.age++;\n      for (const rule of this.rules) {\n        if (!obj.key.startsWith(rule.prefix)) continue;\n        for (const t of rule.transitions) {\n          if (obj.age >= t.days && obj.currentTier !== t.tier) {\n            const fromCost = this.tierCosts[obj.currentTier];\n            const toCost = this.tierCosts[t.tier];\n            const savings = obj.sizeGB * (fromCost - toCost);\n            obj.currentTier = t.tier;\n            transitions.push({ ...obj, currentTier: obj.currentTier });\n            console.log(`Transitioned ${obj.key} to ${t.tier}: saving $${savings.toFixed(3)}/month`);\n          }\n        }\n      }\n    }\n    return transitions;\n  }\n\n  calculateMonthlyCost(): number {\n    return this.objects.reduce((sum, obj) => sum + obj.sizeGB * this.tierCosts[obj.currentTier], 0);\n  }\n\n  simulateDays(days: number): void {\n    for (let d = 0; d < days; d++) this.simulateDay();\n  }\n}\n\nconst engine = new LifecyclePolicyEngine();\nengine.addRule({\n  id: \"logs-lifecycle\", prefix: \"logs/\",\n  transitions: [\n    { days: 30, tier: \"infrequent-access\" },\n    { days: 90, tier: \"archive\" },\n    { days: 365, tier: \"deep-archive\" },\n  ],\n  expirationDays: 2555,\n});\nengine.addRule({\n  id: \"media-lifecycle\", prefix: \"media/\",\n  transitions: [\n    { days: 90, tier: \"infrequent-access\" },\n    { days: 730, tier: \"archive\" },\n  ],\n});\nfor (let i = 1; i <= 5; i++) engine.addObject({ key: `logs/app-${i}.log`, sizeGB: 10, lastAccessed: 0, currentTier: \"standard\", age: 0 });\nfor (let i = 1; i <= 3; i++) engine.addObject({ key: `media/video-${i}.mp4`, sizeGB: 50, lastAccessed: 0, currentTier: \"standard\", age: 0 });\nconsole.log(\"Monthly cost before lifecycle:\", \"$\" + engine.calculateMonthlyCost().toFixed(2));\nengine.simulateDays(400);\nconsole.log(\"Monthly cost after lifecycle:\", \"$\" + engine.calculateMonthlyCost().toFixed(2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-replication-manager",
      children: "TypeScript: Replication Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ReplicationConfig {\n  sourceBucket: string;\n  destinationBucket: string;\n  destinationRegion: string;\n  prefix: string;\n  replicateDeleteMarkers: boolean;\n  encryptionEnabled: boolean;\n}\n\ninterface ReplicationMetrics {\n  totalObjects: number;\n  replicatedObjects: number;\n  failedObjects: number;\n  totalBytes: number;\n  replicatedBytes: number;\n  lastReplicationTime: number | null;\n  replicationLag: number;\n}\n\nclass ReplicationManager {\n  private configs: ReplicationConfig[] = [];\n  private metrics: Map<string, ReplicationMetrics> = new Map();\n\n  addConfig(config: ReplicationConfig): void {\n    this.configs.push(config);\n    this.metrics.set(config.sourceBucket + \"->\" + config.destinationBucket, {\n      totalObjects: 0, replicatedObjects: 0, failedObjects: 0,\n      totalBytes: 0, replicatedBytes: 0,\n      lastReplicationTime: null, replicationLag: 0,\n    });\n  }\n\n  recordObject(key: string, sizeBytes: number): void {\n    for (const cfg of this.configs) {\n      if (!key.startsWith(cfg.prefix)) continue;\n      const metricKey = cfg.sourceBucket + \"->\" + cfg.destinationBucket;\n      const m = this.metrics.get(metricKey)!;\n      m.totalObjects++;\n      m.totalBytes += sizeBytes;\n    }\n  }\n\n  replicate(): void {\n    for (const cfg of this.configs) {\n      const metricKey = cfg.sourceBucket + \"->\" + cfg.destinationBucket;\n      const m = this.metrics.get(metricKey)!;\n      const pending = m.totalObjects - m.replicatedObjects - m.failedObjects;\n      const success = Math.floor(pending * 0.95);\n      const failed = pending - success;\n\n      m.replicatedObjects += success;\n      m.failedObjects += failed;\n      m.lastReplicationTime = Date.now();\n      m.replicationLag = 5000 + Math.floor(Math.random() * 30000);\n\n      if (failed > 0) {\n        console.log(`[${metricKey}] ${success} replicated, ${failed} failed (lag: ${m.replicationLag}ms)`);\n      }\n    }\n  }\n\n  getComplianceReport(): { config: string; progress: number; lag: number }[] {\n    return [...this.metrics.entries()].map(([key, m]) => ({\n      config: key,\n      progress: m.totalObjects > 0 ? Math.round((m.replicatedObjects / m.totalObjects) * 100) : 100,\n      lag: m.replicationLag,\n    }));\n  }\n}\n\nconst repl = new ReplicationManager();\nrepl.addConfig({ sourceBucket: \"prod-data\", destinationBucket: \"prod-data-dr\", destinationRegion: \"eu-west-1\", prefix: \"critical/\", replicateDeleteMarkers: true, encryptionEnabled: true });\nfor (let i = 1; i <= 100; i++) repl.recordObject(`critical/order-${i}.json`, 1024 * 50);\nrepl.replicate();\nconsole.log(\"Replication status:\", JSON.stringify(repl.getComplianceReport(), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-storage-tier-lifecycle-policy-engine",
      children: "TypeScript: Storage Tier Lifecycle Policy Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TierConfig { name: string; costPerGBMo: number; retrievalHours: number; minDays: number; }\ninterface LifecycleRule { prefix: string; transitions: { tier: string; afterDays: number }[]; }\n\nclass LifecyclePolicyEngine {\n  private tiers: TierConfig[] = [\n    { name: \"Standard\", costPerGBMo: 0.023, retrievalHours: 0, minDays: 0 },\n    { name: \"Infrequent Access\", costPerGBMo: 0.0125, retrievalHours: 1, minDays: 30 },\n    { name: \"Glacier\", costPerGBMo: 0.0036, retrievalHours: 12, minDays: 90 },\n    { name: \"Deep Archive\", costPerGBMo: 0.00099, retrievalHours: 48, minDays: 180 },\n  ];\n\n  simulateCost(dataGB: number, rules: LifecycleRule[], months: number): { byTier: Record<string, number>; total: number } {\n    const monthlyCosts: Record<string, number> = {};\n    let currentData = dataGB;\n    for (let m = 1; m <= months; m++) {\n      for (const rule of rules) {\n        for (const t of rule.transitions) {\n          if (m === t.afterDays / 30 + 1) {\n            const tier = this.tiers.find(ti => ti.name === t.tier)!;\n            monthlyCosts[t.tier] = (monthlyCosts[t.tier] || 0) + currentData * tier.costPerGBMo;\n          }\n        }\n      }\n    }\n    const total = Object.values(monthlyCosts).reduce((a, b) => a + b, 0);\n    return { byTier: monthlyCosts, total: Math.round(total * 100) / 100 };\n  }\n}\n\nconst lpe = new LifecyclePolicyEngine();\nconst cost = lpe.simulateCost(10000, [{ prefix: \"logs/\", transitions: [{ tier: \"Infrequent Access\", afterDays: 30 }, { tier: \"Glacier\", afterDays: 90 }] }], 12);\nconsole.log(\"Yearly cost:\", JSON.stringify(cost, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cloud storage\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cloud storage', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// cloud storage - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud storage' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- Cloud storage is categorized into Object, Block, and File models.\n- Object storage excels at unstructured data with HTTP access and 11 nines durability.\n- Block storage provides low-latency random I/O ideal for database workloads.\n- File storage enables NFS/SMB shared access across multiple compute instances.\n- Object storage (S3/Blob/GCS) provides extreme durability and scale via HTTP access.\n- Object versioning protects against accidental deletion and enables data recovery.\n- Lifecycle policies automate cost optimization by transitioning data to cheaper tiers.\n- Block storage (EBS/Disk/PD) provides high-performance local storage for VMs.\n- File storage (EFS/Azure Files/Filestore) enables shared network access across multiple VMs.\n- Replication strategies (SRR/CRR) provide disaster recovery and compliance capabilities.\n- CDNs improve user experience by caching static and dynamic content at the network edge.\n\n## Exercises\n\n### Review Questions\n\n1. Compare Object Storage and Block Storage in terms of access method and scalability.\n2. What are \"11 nines\" of durability, and how do providers achieve this?\n3. When should you use a File Storage service instead of attaching multiple Block volumes?\n4. Explain the trade-offs of using an Archive storage tier (e.g., retrieval time vs. cost).\n5. How does a CDN improve the performance of a global web application?\n6. What is the difference between Same-Region and Cross-Region Replication?\n7. How does object versioning protect against data loss?\n\n### Application Problems\n\n1. A hospital needs to store X-ray images. Images are accessed frequently for the first 48 hours, then rarely for the next 5 years, but must be kept for 10 years for legal reasons. Design a storage and lifecycle strategy.\n\n2. A database requires 50,000 IOPS to handle peak transaction volume. Which block storage tier would you select on AWS, and how would you configure it?\n\n3. A team of developers needs to share a set of configuration files across 50 Linux servers. Propose a solution that ensures all servers see the same files in real-time.\n\n4. Write a TypeScript function that calculates the monthly storage cost for 10 TB of data using S3 Standard vs S3 Glacier, assuming 10% of data is accessed monthly.\n\n5. Design a CDN strategy for a global media company that serves 4K video content to users across North America, Europe, and Asia. Consider origin location, edge strategy, and cache TTL.\n\n### Challenge Problem\n\nYou are designing the storage backend for a YouTube-like video platform. Users upload 1000 videos per hour. Videos are transcoded into multiple resolutions. Popular videos are accessed globally, while old videos are rarely watched. Propose a comprehensive storage architecture that handles: 1) Initial upload, 2) Transcoding workspace, 3) Global distribution of popular content, 4) Cost-effective long-term retention of unpopular content, and 5) Data durability across regional failures.\n"
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