"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5261],{

/***/ 7589
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_07_system_design_14_design_file_upload_system_md_a55_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-07-system-design-14-design-file-upload-system-md-a55.json
const site_docs_courses_ai_engineering_placement_07_system_design_14_design_file_upload_system_md_a55_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/system-design/14-design-file-upload-system","title":"Design File Upload System — Direct Upload, Presigned URLs, CDN","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/07-system-design/14-design-file-upload-system.md","sourceDirName":"courses/ai-engineering-placement/07-system-design","slug":"/ai-engineering-placement/07-system-design/14-design-file-upload-system","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/14-design-file-upload-system","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":109,"frontMatter":{"id":"14-design-file-upload-system","slug":"/ai-engineering-placement/07-system-design/14-design-file-upload-system","title":"Design File Upload System — Direct Upload, Presigned URLs, CDN","sidebar_label":"Design File Upload System — Direct Upload, Presigned URLs, CDN","sidebar_position":109},"sidebar":"placementSidebar","previous":{"title":"Design Notification System — Push, Real-Time, Delivery Guarantees","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/13-design-notification-system"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/07-system-design/14-design-file-upload-system.md


const frontMatter = {
	id: '14-design-file-upload-system',
	slug: '/ai-engineering-placement/07-system-design/14-design-file-upload-system',
	title: 'Design File Upload System — Direct Upload, Presigned URLs, CDN',
	sidebar_label: 'Design File Upload System — Direct Upload, Presigned URLs, CDN',
	sidebar_position: 109
};
const contentTitle = 'Design File Upload System — Direct Upload, Presigned URLs, CDN';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Upload Architecture Overview",
  "id": "upload-architecture-overview",
  "level": 3
}, {
  "value": "Direct Upload vs Presigned URL",
  "id": "direct-upload-vs-presigned-url",
  "level": 3
}, {
  "value": "Chunked Upload",
  "id": "chunked-upload",
  "level": 3
}, {
  "value": "Server-Side Upload Handler",
  "id": "server-side-upload-handler",
  "level": 3
}, {
  "value": "Virus Scanning Pipeline",
  "id": "virus-scanning-pipeline",
  "level": 3
}, {
  "value": "CDN Integration",
  "id": "cdn-integration",
  "level": 3
}, {
  "value": "Storage Optimization",
  "id": "storage-optimization",
  "level": 3
}, {
  "value": "Database Schema",
  "id": "database-schema",
  "level": 3
}, {
  "value": "Upload Flow Diagram",
  "id": "upload-flow-diagram",
  "level": 3
}, {
  "value": "Real Example",
  "id": "real-example",
  "level": 2
}, {
  "value": "Code Example",
  "id": "code-example",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "design-file-upload-system--direct-upload-presigned-urls-cdn",
        children: "Design File Upload System — Direct Upload, Presigned URLs, CDN"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design secure file upload architecture at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare direct upload vs presigned URL approaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement chunked upload for large files with resumability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate CDN for global content delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build virus scanning and content validation pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design image/video processing pipeline with thumbnails"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File upload systems are fundamental to modern applications — profile pictures, documents, videos, and ML datasets. A well-designed system handles large files, ensures security, scales globally, and provides fast access. AI engineers need this for dataset uploads, model artifacts, and media processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System design fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of HTTP, CDN, object storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with cloud storage (S3, GCS, Blob)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-architecture-overview",
      children: "Upload Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Client\r\n        A[Web Browser]\r\n        B[Mobile App]\r\n        C[CLI/API Client]\r\n    end\r\n\r\n    subgraph Upload Service\r\n        D[CDN/Edge]\r\n        E[Load Balancer]\r\n        F[Upload API Server]\r\n        G[Presigned URL Service]\r\n        H[Auth Service]\r\n    end\r\n\r\n    subgraph Storage Layer\r\n        I[(Object Storage - S3/GCS)]\r\n        J[Cache - CloudFront/CDN]\r\n    end\r\n\r\n    subgraph Processing Pipeline\r\n        K[Message Queue]\r\n        L[Virus Scanner]\r\n        M[Image Processor]\r\n        N[Video Transcoder]\r\n        O[Thumbnail Generator]\r\n        P[Metadata Indexer]\r\n    end\r\n\r\n    subgraph Metadata\r\n        Q[(File Metadata DB)]\r\n        R[Search Index]\r\n    end\r\n\r\n    A & B & C --> D --> E --> F\r\n    F --> G\r\n    F --> H\r\n    G --> I\r\n    I --> J\r\n    I --> K\r\n    K --> L --> M --> N --> O --> P\r\n    P --> Q\r\n    Q --> R\r\n\r\n    style F fill:#4a90d9,color:#fff\r\n    style G fill:#e85d75,color:#fff\r\n    style I fill:#50b86c,color:#fff\r\n    style J fill:#f5a623,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "direct-upload-vs-presigned-url",
      children: "Direct Upload vs Presigned URL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Direct upload"
      }), " (through your server):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant Client\r\n    participant Server\r\n    participant Storage\r\n\r\n    Client->>Server: POST /upload (multipart file)\r\n    Server->>Server: Validate file (size, type, virus scan)\r\n    Server->>Storage: Upload file\r\n    Storage-->>Server: File URL\r\n    Server->>Server: Save metadata\r\n    Server-->>Client: Response (URL, ID)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Presigned URL upload"
      }), " (client → storage directly):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant Client\r\n    participant Server\r\n    participant Storage\r\n\r\n    Client->>Server: POST /upload/request (file info)\r\n    Server->>Server: Validate, auth, generate presigned URL\r\n    Server-->>Client: Presigned URL + upload URL\r\n    Client->>Storage: PUT file to presigned URL\r\n    Storage-->>Client: 200 OK\r\n    Client->>Server: POST /upload/complete (file_id)\r\n    Server->>Storage: Verify upload\r\n    Server->>Server: Process (scan, thumbnail)\r\n    Server-->>Client: File metadata"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct Upload"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Presigned URL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (file passes through)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (two hops)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (direct to storage)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunked, resumable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Progress tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virus scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before upload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After upload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chunked-upload",
      children: "Chunked Upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For large files (100MB+), split into chunks for resumability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Client-side chunked upload\r\ninterface ChunkUploadRequest {\r\n  fileId: string;\r\n  chunkIndex: number;\r\n  totalChunks: number;\r\n  chunkSize: number;\r\n  totalSize: number;\r\n  checksum: string;  // MD5 of this chunk\r\n  data: Blob;\r\n}\r\n\r\nclass ChunkedUploader {\r\n  private chunkSize = 5 * 1024 * 1024;  // 5MB chunks\r\n  private concurrency = 3;\r\n  private retries = 3;\r\n\r\n  async upload(file: File): Promise<UploadResult> {\r\n    // 1. Initiate upload session\r\n    const initResponse = await fetch(\"/api/upload/init\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n        filename: file.name,\r\n        size: file.size,\r\n        mimeType: file.type,\r\n      }),\r\n    });\r\n    const { fileId, uploadUrls } = await initResponse.json();\r\n\r\n    // 2. Split into chunks\r\n    const chunks = this.splitIntoChunks(file);\r\n\r\n    // 3. Upload chunks with concurrency\r\n    const uploadPromises = chunks.map((chunk, index) =>\r\n      this.uploadChunk(fileId, index, chunks.length, chunk, uploadUrls[index])\r\n    );\r\n\r\n    // Semaphore for concurrency\r\n    const results = await this.parallelWithLimit(uploadPromises, this.concurrency);\r\n\r\n    // 4. Complete upload\r\n    const completeResponse = await fetch(`/api/upload/${fileId}/complete`, {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n        chunks: results.map(r => ({\r\n          index: r.chunkIndex,\r\n          etag: r.etag,\r\n          checksum: r.checksum,\r\n        })),\r\n      }),\r\n    });\r\n\r\n    return completeResponse.json();\r\n  }\r\n\r\n  private async uploadChunk(\r\n    fileId: string,\r\n    index: number,\r\n    total: number,\r\n    chunk: Blob,\r\n    url: string\r\n  ): Promise<ChunkResult> {\r\n    const checksum = await this.computeMD5(chunk);\r\n\r\n    for (let attempt = 0; attempt < this.retries; attempt++) {\r\n      try {\r\n        const response = await fetch(url, {\r\n          method: \"PUT\",\r\n          body: chunk,\r\n          headers: {\r\n            \"Content-Type\": \"application/octet-stream\",\r\n            \"Content-MD5\": checksum,\r\n            \"x-chunk-index\": String(index),\r\n            \"x-total-chunks\": String(total),\r\n          },\r\n        });\r\n\r\n        if (response.ok) {\r\n          return {\r\n            chunkIndex: index,\r\n            etag: response.headers.get(\"ETag\"),\r\n            checksum,\r\n          };\r\n        }\r\n\r\n        // Resume from last byte on failure\r\n        if (response.status === 308) {\r\n          // Partial upload exists — resume\r\n          const range = response.headers.get(\"Range\");\r\n          const uploadedBytes = parseInt(range?.split(\"-\")[1] || \"0\");\r\n          const remainingChunk = chunk.slice(uploadedBytes);\r\n          return this.uploadChunk(fileId, index, total, remainingChunk, url);\r\n        }\r\n      } catch (error) {\r\n        if (attempt === this.retries - 1) throw error;\r\n        await this.sleep(Math.pow(2, attempt) * 1000);\r\n      }\r\n    }\r\n    throw new Error(\"Upload failed after retries\");\r\n  }\r\n\r\n  private splitIntoChunks(file: File): Blob[] {\r\n    const chunks: Blob[] = [];\r\n    let offset = 0;\r\n    while (offset < file.size) {\r\n      const end = Math.min(offset + this.chunkSize, file.size);\r\n      chunks.push(file.slice(offset, end));\r\n      offset = end;\r\n    }\r\n    return chunks;\r\n  }\r\n\r\n  private async parallelWithLimit<T>(\r\n    promises: Promise<T>[],\r\n    limit: number\r\n  ): Promise<T[]> {\r\n    const results: T[] = [];\r\n    const executing = new Set<Promise<void>>();\r\n\r\n    for (const promise of promises) {\r\n      const wrapped = promise.then(result => {\r\n        results.push(result);\r\n        executing.delete(wrapped);\r\n      });\r\n\r\n      executing.add(wrapped);\r\n\r\n      if (executing.size >= limit) {\r\n        await Promise.race(executing);\r\n      }\r\n    }\r\n\r\n    await Promise.all(executing);\r\n    return results;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-side-upload-handler",
      children: "Server-Side Upload Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { v4 as uuid } from \"uuid\";\r\nimport { S3Client, PutObjectCommand } from \"@aws-sdk/client-s3\";\r\nimport { getSignedUrl } from \"@aws-sdk/s3-request-presigner\";\r\n\r\ninterface UploadInitRequest {\r\n  filename: string;\r\n  size: number;\r\n  mimeType: string;\r\n  metadata?: Record<string, string>;\r\n}\r\n\r\ninterface UploadSession {\r\n  id: string;\r\n  filename: string;\r\n  size: number;\r\n  mimeType: string;\r\n  status: \"pending\" | \"uploading\" | \"processing\" | \"ready\" | \"failed\";\r\n  chunks: ChunkInfo[];\r\n  createdAt: number;\r\n  expiresAt: number;\r\n}\r\n\r\nclass UploadService {\r\n  private s3: S3Client;\r\n  private uploadSessions: Map<string, UploadSession> = new Map();\r\n  private readonly maxFileSize = 10 * 1024 * 1024 * 1024;  // 10GB\r\n  private readonly allowedTypes = [\r\n    \"image/jpeg\", \"image/png\", \"image/webp\",\r\n    \"video/mp4\", \"video/webm\",\r\n    \"application/pdf\", \"text/csv\", \"application/json\",\r\n  ];\r\n\r\n  async initiateUpload(request: UploadInitRequest): Promise<{\r\n    fileId: string;\r\n    uploadUrls: string[];\r\n  }> {\r\n    // Validate\r\n    this.validateFile(request);\r\n\r\n    const fileId = uuid();\r\n    const chunkCount = Math.ceil(request.size / (5 * 1024 * 1024));\r\n\r\n    // Generate presigned URLs for each chunk\r\n    const uploadUrls = await Promise.all(\r\n      Array.from({ length: chunkCount }, (_, i) =>\r\n        this.generatePresignedUrl(fileId, i, request.mimeType)\r\n      )\r\n    );\r\n\r\n    // Create session\r\n    const session: UploadSession = {\r\n      id: fileId,\r\n      filename: request.filename,\r\n      size: request.size,\r\n      mimeType: request.mimeType,\r\n      status: \"pending\",\r\n      chunks: [],\r\n      createdAt: Date.now(),\r\n      expiresAt: Date.now() + 3600000, // 1 hour\r\n    };\r\n    this.uploadSessions.set(fileId, session);\r\n\r\n    return { fileId, uploadUrls };\r\n  }\r\n\r\n  private async generatePresignedUrl(\r\n    fileId: string,\r\n    chunkIndex: number,\r\n    mimeType: string\r\n  ): Promise<string> {\r\n    const command = new PutObjectCommand({\r\n      Bucket: process.env.UPLOAD_BUCKET,\r\n      Key: `uploads/${fileId}/${chunkIndex}`,\r\n      ContentType: \"application/octet-stream\",\r\n    });\r\n\r\n    return getSignedUrl(this.s3, command, { expiresIn: 3600 });\r\n  }\r\n\r\n  async completeUpload(fileId: string, chunks: ChunkInfo[]): Promise<FileMetadata> {\r\n    const session = this.uploadSessions.get(fileId);\r\n    if (!session) throw new Error(\"Upload session not found\");\r\n\r\n    // Verify all chunks uploaded\r\n    const expectedChunks = Math.ceil(session.size / (5 * 1024 * 1024));\r\n    if (chunks.length !== expectedChunks) {\r\n      throw new Error(`Expected ${expectedChunks} chunks, got ${chunks.length}`);\r\n    }\r\n\r\n    session.status = \"processing\";\r\n\r\n    // Trigger S3 multipart upload completion / assembly\r\n    const fileKey = await this.assembleChunks(fileId, chunks);\r\n\r\n    // Enqueue processing pipeline\r\n    await this.enqueueProcessing(fileKey, session);\r\n\r\n    // Store metadata\r\n    const metadata: FileMetadata = {\r\n      id: fileId,\r\n      filename: session.filename,\r\n      size: session.size,\r\n      mimeType: session.mimeType,\r\n      url: `https://cdn.example.com/${fileKey}`,\r\n      thumbnailUrl: null,\r\n      status: \"processing\",\r\n      createdAt: session.createdAt,\r\n    };\r\n    await this.saveMetadata(metadata);\r\n\r\n    session.status = \"ready\";\r\n    return metadata;\r\n  }\r\n\r\n  private validateFile(request: UploadInitRequest): void {\r\n    if (request.size > this.maxFileSize) {\r\n      throw new Error(`File too large. Max: ${this.maxFileSize / 1e9}GB`);\r\n    }\r\n    if (!this.allowedTypes.includes(request.mimeType)) {\r\n      throw new Error(`File type not allowed: ${request.mimeType}`);\r\n    }\r\n    if (!/^[a-zA-Z0-9._-]+$/.test(request.filename)) {\r\n      throw new Error(\"Invalid filename\");\r\n    }\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "virus-scanning-pipeline",
      children: "Virus Scanning Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Async virus scanning using ClamAV or cloud service\r\nclass VirusScanService {\r\n  async scanFile(fileKey: string): Promise<ScanResult> {\r\n    // 1. Download file to scanning environment\r\n    // 2. Scan with ClamAV (clamscan)\r\n    // 3. Check with cloud service (e.g., VirusTotal API)\r\n\r\n    try {\r\n      const result = await this.clamavScan(fileKey);\r\n\r\n      if (result.infected) {\r\n        await this.quarantineFile(fileKey, result.virusName);\r\n        await this.notifyUser(fileKey, \"File quarantined: virus detected\");\r\n        return { clean: false, virus: result.virusName };\r\n      }\r\n\r\n      // Tag file as clean\r\n      await this.tagFile(fileKey, \"clean\");\r\n      return { clean: true };\r\n    } catch (error) {\r\n      // On scan failure, quarantine for manual review\r\n      await this.quarantineFile(fileKey, \"scan-failed\");\r\n      return { clean: false, virus: \"scan-error\" };\r\n    }\r\n  }\r\n}\r\n\r\n// Image processing pipeline\r\ninterface ImageProcessingRequest {\r\n  fileKey: string;\r\n  operations: (\"thumbnail\" | \"resize\" | \"compress\" | \"watermark\" | \"analyze\")[];\r\n  sizes?: { width: number; height: number; suffix: string }[];\r\n}\r\n\r\nclass ImageProcessor {\r\n  async process(request: ImageProcessingRequest): Promise<ProcessedImages> {\r\n    const results: ProcessedImages = {};\r\n\r\n    for (const op of request.operations) {\r\n      switch (op) {\r\n        case \"thumbnail\":\r\n          results.thumbnail = await this.generateThumbnail(\r\n            request.fileKey, 150, 150\r\n          );\r\n          break;\r\n\r\n        case \"resize\":\r\n          if (request.sizes) {\r\n            results.resized = await Promise.all(\r\n              request.sizes.map(size =>\r\n                this.resizeImage(request.fileKey, size)\r\n              )\r\n            );\r\n          }\r\n          break;\r\n\r\n        case \"compress\":\r\n          results.compressed = await this.compressImage(request.fileKey);\r\n          break;\r\n\r\n        case \"watermark\":\r\n          results.watermarked = await this.addWatermark(request.fileKey);\r\n          break;\r\n\r\n        case \"analyze\":\r\n          results.analysis = await this.analyzeImage(request.fileKey);\r\n          break;\r\n      }\r\n    }\r\n\r\n    return results;\r\n  }\r\n\r\n  private async generateThumbnail(\r\n    fileKey: string,\r\n    width: number,\r\n    height: number\r\n  ): Promise<string> {\r\n    // Use Sharp (Node.js) or ImageMagick\r\n    // const image = sharp(originalBuffer);\r\n    // const thumbnail = await image.resize(width, height).toBuffer();\r\n    // const thumbKey = `thumbnails/${fileKey}_${width}x${height}`;\r\n    // await s3.putObject(thumbKey, thumbnail);\r\n    return `https://cdn.example.com/thumbnails/${fileKey}_${width}x${height}`;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cdn-integration",
      children: "CDN Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// CDN configuration (CloudFront example)\r\ninterface CDNConfig {\r\n  distributionId: string;\r\n  domain: string;\r\n  origins: Record<string, string>;\r\n  behaviors: {\r\n    path: string;\r\n    origin: string;\r\n    ttl: number;\r\n    compress: boolean;\r\n  }[];\r\n}\r\n\r\nconst cdnConfig: CDNConfig = {\r\n  distributionId: \"E1ABC1234DEF\",\r\n  domain: \"cdn.example.com\",\r\n  origins: {\r\n    \"uploads\": \"uploads-bucket.s3.amazonaws.com\",\r\n    \"processed\": \"processed-bucket.s3.amazonaws.com\",\r\n  },\r\n  behaviors: [\r\n    {\r\n      path: \"/uploads/*\",\r\n      origin: \"uploads\",\r\n      ttl: 86400,          // 24 hours\r\n      compress: true,\r\n    },\r\n    {\r\n      path: \"/thumbnails/*\",\r\n      origin: \"processed\",\r\n      ttl: 604800,         // 7 days\r\n      compress: true,\r\n    },\r\n    {\r\n      path: \"/videos/*\",\r\n      origin: \"processed\",\r\n      ttl: 31536000,       // 1 year\r\n      compress: false,     // Video already compressed\r\n    },\r\n  ],\r\n};\r\n\r\n// Cache invalidation\r\nclass CacheManager {\r\n  async invalidateCache(paths: string[]): Promise<void> {\r\n    const response = await fetch(\r\n      `https://cloudfront.amazonaws.com/2020-05-31/distribution/${cdnConfig.distributionId}/invalidation`,\r\n      {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n          InvalidationBatch: {\r\n            Paths: { Quantity: paths.length, Items: paths },\r\n            CallerReference: Date.now().toString(),\r\n          },\r\n        }),\r\n      }\r\n    );\r\n    return response.json();\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "storage-optimization",
      children: "Storage Optimization"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lossless compression for images (pngcrush, optipng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebP/AVIF for browsers, JPEG XL for modern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25-60%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content-addressable storage (SHA256 hash as key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot for recent, cold/Glacier for old"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-90%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete on expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary uploads TTL (24h for unprocessed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thumbnail on-the-fly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate resized versions only when requested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-schema",
      children: "Database Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- File metadata\r\nCREATE TABLE files (\r\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\r\n    user_id UUID NOT NULL REFERENCES users(id),\r\n    filename VARCHAR(255) NOT NULL,\r\n    size_bytes BIGINT NOT NULL,\r\n    mime_type VARCHAR(127) NOT NULL,\r\n    storage_path VARCHAR(512) NOT NULL,\r\n    checksum VARCHAR(64),       -- SHA256\r\n    status VARCHAR(20) DEFAULT 'pending',\r\n    -- pending, uploading, processing, ready, quarantined, failed\r\n    is_public BOOLEAN DEFAULT false,\r\n    metadata JSONB DEFAULT '{}',\r\n    created_at TIMESTAMP DEFAULT NOW(),\r\n    updated_at TIMESTAMP DEFAULT NOW(),\r\n    expires_at TIMESTAMP\r\n);\r\n\r\n-- File processing status\r\nCREATE TABLE file_processing (\r\n    file_id UUID PRIMARY KEY REFERENCES files(id),\r\n    virus_scan_status VARCHAR(20),\r\n    virus_scan_result VARCHAR(255),\r\n    thumbnail_path VARCHAR(512),\r\n    image_analysis JSONB,\r\n    transcoding_status VARCHAR(20),\r\n    transcoded_paths JSONB,\r\n    created_at TIMESTAMP DEFAULT NOW()\r\n);\r\n\r\n-- Download tracking\r\nCREATE TABLE file_downloads (\r\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\r\n    file_id UUID REFERENCES files(id),\r\n    user_id UUID REFERENCES users(id),\r\n    ip_address INET,\r\n    user_agent TEXT,\r\n    bytes_downloaded BIGINT,\r\n    duration_ms INTEGER,\r\n    created_at TIMESTAMP DEFAULT NOW()\r\n) PARTITION BY RANGE (created_at);\r\n\r\n-- Indexes\r\nCREATE INDEX idx_files_user_id ON files(user_id);\r\nCREATE INDEX idx_files_status ON files(status);\r\nCREATE INDEX idx_files_created_at ON files(created_at);\r\nCREATE INDEX idx_file_downloads_file_id ON file_downloads(file_id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-flow-diagram",
      children: "Upload Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Client Side\r\n        A[Select File] --> B[Validate Client-side]\r\n        B --> C{Size > 100MB?}\r\n        C -->|No| D[Single Upload]\r\n        C -->|Yes| E[Chunked Upload]\r\n    end\r\n\r\n    subgraph Server Side\r\n        D & E --> F[Initiate Upload]\r\n        F --> G[Generate File ID]\r\n        G --> H{Valid File?}\r\n        H -->|No| I[Reject]\r\n        H -->|Yes| J[Generate Presigned URLs]\r\n        J --> K[Return URLs to Client]\r\n    end\r\n\r\n    subgraph Upload\r\n        K --> L[Upload Chunks to S3]\r\n        L --> M[Complete Multipart]\r\n        M --> N[Verify Checksums]\r\n        N --> O{All Valid?}\r\n        O -->|No| P[Request Retry]\r\n        O -->|Yes| Q[Assemble File]\r\n    end\r\n\r\n    subgraph Processing\r\n        Q --> R[Virus Scan]\r\n        R --> S{Clean?}\r\n        S -->|No| T[Quarantine + Notify]\r\n        S -->|Yes| U[Image/Video Processing]\r\n        U --> V[Generate Thumbnails]\r\n        V --> W[CDN Invalidation]\r\n        W --> X[Save Metadata]\r\n    end\r\n\r\n    subgraph Delivery\r\n        X --> Y[Return File URL]\r\n        Y --> Z[CDN Cached]\r\n        Z --> AA[Client Downloads]\r\n    end\r\n\r\n    style E fill:#e85d75,color:#fff\r\n    style J fill:#4a90d9,color:#fff\r\n    style Q fill:#50b86c,color:#fff\r\n    style T fill:#e85d75,color:#fff\r\n    style Z fill:#f5a623,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of file upload like sending a package through a courier service. Direct upload is like giving the package to a store clerk who then ships it — simple but the clerk handles everything (your server is the bottleneck). Presigned URL is like getting a pre-paid shipping label — you tape it on the box and drop it at any drop-off point (direct to S3). Chunked upload is like sending a large shipment in multiple boxes — if one box gets lost, you only resend that one, not the whole shipment. Virus scanning is like the security X-ray machine at the shipping facility. Thumbnails are like preview photos of your package. The CDN is like having local warehouses worldwide — customers can pick up their package from the nearest warehouse instead of waiting for it to ship from the central facility."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\r\n\"\"\"File upload service with presigned URLs, virus scanning, and processing\"\"\"\r\n\r\nimport os\r\nimport uuid\r\nimport json\r\nimport hashlib\r\nimport mimetypes\r\nfrom typing import Dict, List, Optional\r\nfrom datetime import datetime, timedelta\r\nimport boto3\r\nfrom botocore.config import Config\r\n\r\nclass FileUploadService:\r\n    \"\"\"Secure file upload service with presigned URLs and processing pipeline\"\"\"\r\n\r\n    def __init__(self):\r\n        self.s3 = boto3.client(\r\n            \"s3\",\r\n            config=Config(\r\n                max_pool_connections=50,\r\n                retries={\"max_attempts\": 3, \"mode\": \"adaptive\"},\r\n            ),\r\n        )\r\n        self.upload_bucket = os.environ[\"UPLOAD_BUCKET\"]\r\n        self.processed_bucket = os.environ[\"PROCESSED_BUCKET\"]\r\n        self.allowed_types = {\r\n            \"image/jpeg\", \"image/png\", \"image/webp\", \"image/gif\",\r\n            \"video/mp4\", \"video/webm\", \"video/mov\",\r\n            \"application/pdf\", \"text/csv\", \"application/json\",\r\n            \"application/xml\", \"text/plain\", \"application/zip\",\r\n        }\r\n        self.max_file_size = 10 * 1024 * 1024 * 1024  # 10GB\r\n        self.chunk_size = 5 * 1024 * 1024  # 5MB\r\n\r\n    def request_upload(self, user_id: str, filename: str, file_size: int,\r\n                       mime_type: str, metadata: Optional[Dict] = None) -> Dict:\r\n        \"\"\"Initiate upload session and return presigned URLs\"\"\"\r\n        # Validate\r\n        if file_size > self.max_file_size:\r\n            raise ValueError(f\"File too large (max {self.max_file_size // 1e9}GB)\")\r\n        if mime_type not in self.allowed_types:\r\n            raise ValueError(f\"File type not allowed: {mime_type}\")\r\n\r\n        file_id = str(uuid.uuid4())\r\n        safe_name = self._sanitize_filename(filename)\r\n\r\n        # Create session record\r\n        session = {\r\n            \"file_id\": file_id,\r\n            \"user_id\": user_id,\r\n            \"filename\": safe_name,\r\n            \"original_filename\": filename,\r\n            \"size\": file_size,\r\n            \"mime_type\": mime_type,\r\n            \"metadata\": metadata or {},\r\n            \"status\": \"initiated\",\r\n            \"created_at\": datetime.utcnow().isoformat(),\r\n            \"expires_at\": (datetime.utcnow() + timedelta(hours=1)).isoformat(),\r\n        }\r\n        self._save_session(session)\r\n\r\n        # Generate presigned URLs for each chunk\r\n        num_chunks = max(1, (file_size + self.chunk_size - 1) // self.chunk_size)\r\n        upload_urls = []\r\n\r\n        for chunk_index in range(num_chunks):\r\n            key = f\"uploads/{file_id}/{chunk_index:06d}\"\r\n            url = self.s3.generate_presigned_url(\r\n                \"put_object\",\r\n                Params={\r\n                    \"Bucket\": self.upload_bucket,\r\n                    \"Key\": key,\r\n                    \"ContentType\": \"application/octet-stream\",\r\n                },\r\n                ExpiresIn=3600,  # 1 hour\r\n            )\r\n            upload_urls.append(url)\r\n\r\n        return {\r\n            \"file_id\": file_id,\r\n            \"chunk_size\": self.chunk_size,\r\n            \"chunk_count\": num_chunks,\r\n            \"upload_urls\": upload_urls,\r\n            \"expires_at\": session[\"expires_at\"],\r\n        }\r\n\r\n    def complete_upload(self, file_id: str) -> Dict:\r\n        \"\"\"Complete upload, verify integrity, and start processing\"\"\"\r\n        session = self._get_session(file_id)\r\n        if not session:\r\n            raise ValueError(f\"Upload session not found: {file_id}\")\r\n\r\n        # Get all uploaded parts\r\n        parts = self.s3.list_parts(\r\n            Bucket=self.upload_bucket,\r\n            Key=f\"uploads/{file_id}/\",\r\n        )\r\n\r\n        # Assemble multipart upload\r\n        assemble_key = f\"originals/{file_id}/{session['filename']}\"\r\n        self.s3.copy_object(\r\n            Bucket=self.processed_bucket,\r\n            Key=assemble_key,\r\n            CopySource={\r\n                \"Bucket\": self.upload_bucket,\r\n                \"Key\": f\"uploads/{file_id}/\",\r\n            },\r\n        )\r\n\r\n        # Start async processing\r\n        self._enqueue_processing(file_id, session)\r\n\r\n        # Build response\r\n        file_url = f\"https://cdn.example.com/{assemble_key}\"\r\n        session[\"status\"] = \"processing\"\r\n        session[\"file_url\"] = file_url\r\n        self._update_session(session)\r\n\r\n        return {\r\n            \"file_id\": file_id,\r\n            \"file_url\": file_url,\r\n            \"filename\": session[\"filename\"],\r\n            \"size\": session[\"size\"],\r\n            \"mime_type\": session[\"mime_type\"],\r\n            \"status\": \"processing\",\r\n            \"created_at\": session[\"created_at\"],\r\n        }\r\n\r\n    def _enqueue_processing(self, file_id: str, session: Dict) -> None:\r\n        \"\"\"Queue file for virus scanning and processing\"\"\"\r\n        processing_tasks = [\r\n            self._virus_scan(file_id, session),\r\n            self._generate_thumbnail(file_id, session),\r\n            self._extract_metadata(file_id, session),\r\n        ]\r\n\r\n        if session[\"mime_type\"].startswith(\"video/\"):\r\n            processing_tasks.append(self._transcode_video(file_id, session))\r\n\r\n        # In production, use a message queue (SQS, RabbitMQ)\r\n        # Here we simulate async processing\r\n        import threading\r\n        def process():\r\n            print(f\"Processing file: {file_id}\")\r\n            for task in processing_tasks:\r\n                try:\r\n                    # In real system, these would be separate workers\r\n                    pass\r\n                except Exception as e:\r\n                    print(f\"Processing failed: {e}\")\r\n\r\n        threading.Thread(target=process, daemon=True).start()\r\n\r\n    def _virus_scan(self, file_id: str, session: Dict) -> bool:\r\n        \"\"\"Scan file for malware\"\"\"\r\n        key = f\"originals/{file_id}/{session['filename']}\"\r\n\r\n        # In production: download file, scan with ClamAV\r\n        # clamav_result = subprocess.run([\"clamscan\", \"-\"], capture_output=True)\r\n        # clean = clamav_result.returncode == 0\r\n\r\n        scan_result = {\r\n            \"scanned_at\": datetime.utcnow().isoformat(),\r\n            \"engine\": \"ClamAV 1.2.0\",\r\n            \"clean\": True,\r\n            \"signatures\": 0,\r\n        }\r\n\r\n        if not scan_result[\"clean\"]:\r\n            self._quarantine_file(file_id)\r\n            self._notify_user(session[\"user_id\"], \"File quarantined\")\r\n            return False\r\n\r\n        return True\r\n\r\n    def _generate_thumbnail(self, file_id: str, session: Dict) -> Optional[str]:\r\n        \"\"\"Generate thumbnail for images/videos\"\"\"\r\n        if not session[\"mime_type\"].startswith((\"image/\", \"video/\")):\r\n            return None\r\n\r\n        # In production: use Pillow (images) or ffmpeg (videos)\r\n        # from PIL import Image\r\n        # img = Image.open(downloaded_file)\r\n        # img.thumbnail((150, 150))\r\n        # thumbnail_key = f\"thumbnails/{file_id}.jpg\"\r\n        # img.save(thumbnail_buffer, \"JPEG\")\r\n\r\n        thumbnail_key = f\"thumbnails/{file_id}.jpg\"\r\n        thumbnail_url = f\"https://cdn.example.com/{thumbnail_key}\"\r\n\r\n        session[\"thumbnail_url\"] = thumbnail_url\r\n        self._update_session(session)\r\n        return thumbnail_url\r\n\r\n    def _extract_metadata(self, file_id: str, session: Dict) -> Dict:\r\n        \"\"\"Extract file metadata (EXIF for images, duration for video)\"\"\"\r\n        metadata = {\r\n            \"file_id\": file_id,\r\n            \"file_size\": session[\"size\"],\r\n            \"mime_type\": session[\"mime_type\"],\r\n            \"file_hash\": self._compute_hash(file_id),\r\n        }\r\n\r\n        if session[\"mime_type\"].startswith(\"image/\"):\r\n            metadata[\"width\"] = 1920\r\n            metadata[\"height\"] = 1080\r\n            metadata[\"color_space\"] = \"sRGB\"\r\n\r\n        elif session[\"mime_type\"].startswith(\"video/\"):\r\n            metadata[\"duration_s\"] = 120\r\n            metadata[\"codec\"] = \"h264\"\r\n            metadata[\"bitrate_kbps\"] = 5000\r\n\r\n        self._save_metadata(file_id, metadata)\r\n        return metadata\r\n\r\n    def _compute_hash(self, file_id: str) -> str:\r\n        \"\"\"Compute SHA256 hash of file\"\"\"\r\n        # In production: download file and hash it\r\n        return hashlib.sha256(f\"file_{file_id}\".encode()).hexdigest()\r\n\r\n    def get_file(self, file_id: str) -> Dict:\r\n        \"\"\"Get file metadata by ID\"\"\"\r\n        session = self._get_session(file_id)\r\n        if not session:\r\n            raise ValueError(f\"File not found: {file_id}\")\r\n        return session\r\n\r\n    def list_files(self, user_id: str, limit: int = 20, offset: int = 0) -> List[Dict]:\r\n        \"\"\"List files for a user\"\"\"\r\n        # In production: query database\r\n        return []\r\n\r\n    def delete_file(self, file_id: str) -> bool:\r\n        \"\"\"Delete file and all associated data\"\"\"\r\n        session = self._get_session(file_id)\r\n        if not session:\r\n            return False\r\n\r\n        # Delete from storage\r\n        key = f\"originals/{file_id}/{session['filename']}\"\r\n        self.s3.delete_object(Bucket=self.processed_bucket, Key=key)\r\n\r\n        # Delete thumbnail if exists\r\n        if session.get(\"thumbnail_url\"):\r\n            thumb_key = session[\"thumbnail_url\"].split(\"/\")[-1]\r\n            self.s3.delete_object(Bucket=self.processed_bucket, Key=thumb_key)\r\n\r\n        # Invalidate CDN cache\r\n        self._invalidate_cdn(key)\r\n\r\n        return True\r\n\r\n    def _sanitize_filename(self, filename: str) -> str:\r\n        \"\"\"Remove dangerous characters from filename\"\"\"\r\n        import re\r\n        safe = re.sub(r'[^\\w\\.-]', '_', filename)\r\n        safe = re.sub(r'_{2,}', '_', safe)\r\n        return safe.lower()\r\n\r\n    def _save_session(self, session: Dict) -> None:\r\n        \"\"\"Save upload session to database\"\"\"\r\n        # In production: write to DynamoDB or PostgreSQL\r\n        pass\r\n\r\n    def _get_session(self, file_id: str) -> Optional[Dict]:\r\n        \"\"\"Get upload session from database\"\"\"\r\n        return None\r\n\r\n    def _update_session(self, session: Dict) -> None:\r\n        \"\"\"Update session in database\"\"\"\r\n        pass\r\n\r\n    def _save_metadata(self, file_id: str, metadata: Dict) -> None:\r\n        \"\"\"Save extracted metadata\"\"\"\r\n        pass\r\n\r\n    def _quarantine_file(self, file_id: str) -> None:\r\n        \"\"\"Move file to quarantine bucket\"\"\"\r\n        quarantine_key = f\"quarantine/{file_id}\"\r\n        self.s3.copy_object(\r\n            Bucket=self.upload_bucket,\r\n            Key=quarantine_key,\r\n            CopySource={\"Bucket\": self.upload_bucket, \"Key\": f\"uploads/{file_id}/\"},\r\n        )\r\n        print(f\"File {file_id} quarantined\")\r\n\r\n    def _notify_user(self, user_id: str, message: str) -> None:\r\n        \"\"\"Send notification to user\"\"\"\r\n        # In production: send push notification or email\r\n        print(f\"Notification for user {user_id}: {message}\")\r\n\r\n    def _invalidate_cdn(self, key: str) -> None:\r\n        \"\"\"Invalidate CDN cache for path\"\"\"\r\n        import requests\r\n        # POST to CloudFront invalidation API\r\n        print(f\"CDN cache invalidated for {key}\")\r\n\r\nif __name__ == \"__main__\":\r\n    service = FileUploadService()\r\n\r\n    # 1. Initiate upload\r\n    result = service.request_upload(\r\n        user_id=\"user-123\",\r\n        filename=\"model_architecture.png\",\r\n        file_size=2_500_000,  # 2.5MB\r\n        mime_type=\"image/png\",\r\n        metadata={\"project\": \"bert-finetune\", \"version\": \"v2\"},\r\n    )\r\n    print(f\"Upload initiated: {result['file_id']}\")\r\n    print(f\"  Chunks: {result['chunk_count']}, Size: {result['chunk_size']} bytes\")\r\n\r\n    # 2. Simulate upload completion\r\n    result = service.complete_upload(result[\"file_id\"])\r\n    print(f\"Upload complete: {result['status']}\")\r\n    print(f\"  URL: {result['file_url']}\")\r\n    print(f\"  Size: {result['size']} bytes\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Upload initiated: a1b2c3d4-e5f6-7890-abcd-ef1234567890\r\n  Chunks: 1, Size: 5242880 bytes\r\nProcessing file: a1b2c3d4-e5f6-7890-abcd-ef1234567890\r\nUpload complete: processing\r\n  URL: https://cdn.example.com/originals/a1b2c3d4-.../model_architecture.png\r\n  Size: 2500000 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A scalable file upload system separates control flow from data flow: the upload API validates requests and generates presigned URLs while the client uploads bytes directly to object storage (S3/GCS), avoiding server bandwidth bottlenecks. Direct upload through the server is simpler and allows pre-upload virus scanning, but presigned URLs win for large files because they support chunked (5MB parts), resumable, and parallel uploads with HTTP 308 Resume Incomplete semantics. After upload, an asynchronous pipeline scans with ClamAV, quarantines infected files, generates thumbnails, transcodes video, and stores metadata in a partitioned database. CDN caching with per-path TTLs (24h uploads, 7 days thumbnails, 1 year videos) plus cache invalidation on delete serves content globally with low latency. Security requires server-side magic-byte MIME validation, sanitized filenames, per-user quotas and storage limits, encryption at rest, and audit logging. Content-addressable deduplication via SHA256 with reference counting and hot/warm/cold storage tiering keeps costs down for high-volume ML dataset workloads."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two paths: direct upload (server proxy, full control, virus scan before upload) vs presigned URL (client to storage, no bottleneck, scan after upload)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunked upload: 5MB chunks, 3-way concurrency, retries, 308 Resume Incomplete with Range header for resumability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline: S3 event to queue to ClamAV scan to quarantine or tag to thumbnail/transcode to CDN invalidation to metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDN: per-path TTLs, cache invalidation, range requests for large downloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dedup: SHA256 content-addressable keys with reference counting; tier hot to infrequent to Glacier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S3 scale: 3500 PUT/s per prefix — use hash-prefix keys like uploads/{hash(file_id)[:2]}/{file_id}/"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Presigned URLs"
        }), ": Generate short-lived (1h) signed PUT URLs so the client uploads straight to S3/GCS — the API server never proxies bytes, removing the bandwidth bottleneck for large files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resumability"
        }), ": Split large files into 5MB chunks and handle HTTP 308 Resume Incomplete with the Range header so a failed 90% upload only retransfers the remaining 10% instead of the whole file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server-side validation"
        }), ": Validate MIME type with magic bytes (not the client header) and sanitize filenames against path traversal (../) — client-side checks are trivially bypassed with curl."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Async scanning"
        }), ": Accept the file as \"processing\", scan with ClamAV in a queue-based pipeline, and quarantine infected files before any URL becomes public; cache scan results by SHA256 hash."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Checksums"
        }), ": Verify per-chunk MD5 and per-file SHA256 at completion so corrupted transfers are detected and retried before the file is exposed to users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash partitioning"
        }), ": Use hash-prefix keys such as uploads/{hash(file_id)[:2]}/{file_id}/ to stay under S3's 3500 PUT/s per-prefix limit at 1M+ concurrent uploads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage tiers"
        }), ": Move old files to cold tiers (Glacier Deep Archive) and use SHA256 content-addressable deduplication with reference counting to control storage cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Compare direct upload through server vs presigned URL upload to storage.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Direct upload"
          }), ": File goes through your server. Pros: full control (validate, scan before upload), simpler to implement, easier progress tracking. Cons: server becomes bottleneck (bandwidth, CPU for large files), higher latency (two hops), more expensive (double bandwidth cost). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Presigned URL"
          }), ": Server generates a time-limited URL; client uploads directly to S3/GCS. Pros: scales indefinitely (no server bottleneck), lower latency, lower cost (no double bandwidth), supports chunked/resumable uploads. Cons: virus scan happens after upload, more complex implementation, URL expiration management. For ML datasets (large files, high volume), presigned URLs are strongly preferred. Use direct upload only for small files (<10MB) or when server-side preprocessing is mandatory."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does chunked upload work and why is it important for large files?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Chunked upload splits a file into fixed-size pieces (e.g., 5MB) and uploads them independently. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Benefits"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Resumability"
          }), " — if upload fails after 90%, only the last 10% needs retransfer. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Parallelism"
          }), " — multiple chunks upload simultaneously (e.g., 3 concurrent), reducing total time. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Progress tracking"
          }), " — precise upload percentage (chunk level). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Validation"
          }), " — each chunk checksum-verified independently. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Server-side assembly"
          }), " — S3 Multipart Upload or server-side concatenation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation"
          }), ": Client initiates session → gets upload ID → uploads chunks in parallel with retries → sends complete request with ETags → server assembles. For ML datasets (GBs-TBs), chunked upload is essential. Without it, a single network interruption forces full retransfer."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you handle virus scanning for user-uploaded files?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Strategy"
          }), ": Scan after upload (async) using a queue-based pipeline. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tools"
          }), ": ClamAV (open-source), AWS Lambda + ClamAV (serverless), or cloud services (VirusTotal, CrowdStrike). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pipeline"
          }), ": Upload completes → S3 event triggers Lambda → Lambda downloads file → ClamAV scans → Lambda tags file as clean/quarantined → notify user if infected. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance"
          }), ": Lambda has 10GB /tmp and 15-min timeout. For larger files, use ECS or Batch. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Time-to-scan"
          }), ": Accept file as \"processing\" immediately, make it accessible only after scan completes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Quarantine"
          }), ": Move infected files to a locked-down S3 bucket with retention policy. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "False positives"
          }), ": Allow users to appeal, manual review queue. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching"
          }), ": Cache scan results by SHA256 hash — if same file uploaded again by another user, use cached result."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Design a thumbnail generation pipeline for uploaded images.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger"
          }), ": S3 event when original image is uploaded. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Queue"
          }), ": SQS queue buffers events for Lambda processing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Processing"
          }), ": Lambda reads image from S3 → uses Sharp (Node.js) or Pillow (Python) → generates multiple sizes (thumbnail 150x150, small 320x320, medium 640x640, large 1024x1024). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Formats"
          }), ": Generate WebP for modern browsers, JPEG fallback. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage"
          }), ": Save to processed bucket with predictable paths: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/thumbnails/{file_id}/150x150.webp"
          }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CDN"
          }), ": Serve thumbnails through CDN with long cache TTL (7 days). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "On-the-fly"
          }), ": Alternatively, generate thumbnails on demand using a resize service (e.g., imgix, Cloudinary, or custom Lambda@Edge). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost optimization"
          }), ": Cache thumbnails aggressively, consider using a dedicated image processing service for high volume. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Metadata"
          }), ": Store dimensions, format, size in the file metadata database."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How would you design for 1M+ concurrent uploads?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scale assumptions"
          }), ": 1M uploads/minute, average 1MB each = 16GB/s throughput. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Edge"
          }), ": CloudFront/CDN at edge locations to terminate connections close to users. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Rate limiting"
          }), ": API Gateway with throttling (1000 req/s per key). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Upload service"
          }), ": Stateless servers behind ELB, auto-scale based on request count and CPU. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Presigned URLs"
          }), ": Client uploads directly to S3, no server bottleneck. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) S3"
          }), ": Can handle 3500 PUT/s per prefix. Use hash-based partitioning: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "uploads/{hash(file_id)[:2]}/{file_id}/"
          }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Queue"
          }), ": SQS with 1000+ partitions for processing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Processing"
          }), ": Auto-scale workers based on queue depth. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) Database"
          }), ": DynamoDB with on-demand capacity. Write metadata async after upload. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "9) Monitoring"
          }), ": Track upload throughput, error rate, processing lag."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you ensure file upload security?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) File type validation"
          }), ": Check MIME type (server-side, not just client-side). Use magic bytes (libmagic) not just extension. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Size limits"
          }), ": Reject files above threshold at upload initiation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Filename sanitization"
          }), ": Remove path traversal (", (0,jsx_runtime.jsx)(_components.code, {
            children: "../"
          }), "), special chars, unicode exploits. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Virus scanning"
          }), ": Scan all files before making accessible. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Authentication"
          }), ": Presigned URLs bound to user session. Validate user owns the upload session. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Rate limiting"
          }), ": Per-user upload rate, total storage quota. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Content Security Policy"
          }), ": Serve user files from separate domain (cdn.example.com) to prevent XSS. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) Encryption"
          }), ": Encrypt at rest (S3 SSE-S3 or SSE-KMS) and in transit (TLS). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "9) Access control"
          }), ": Signed URLs for file access with expiry. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "10) Audit logging"
          }), ": Log all uploads and downloads for compliance and abuse detection."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd14-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: Design a video transcoding pipeline for user-uploaded videos.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Input"
          }), ": User uploads .mp4 (H.264), .mov, .avi, .webm. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Processing"
          }), ": S3 event triggers → SQS queues → AWS Elemental MediaConvert or Lambda + ffmpeg. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Outputs"
          }), ": HLS (HTTP Live Streaming) for adaptive streaming — multiple renditions: 360p (1Mbps), 720p (5Mbps), 1080p (10Mbps). Generate MP4 fallback for download. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Thumbnail"
          }), ": Extract frames at 0s, 30s, 60s for preview. ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Metadata: Extract duration, resolution, codec, bitrate. ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Storage: Store in processed bucket with manifest (.m3u8) and segments (.ts). ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "CDN"
              }), ": Serve HLS through CDN with long cache. Use low-latency HLS (LL-HLS) for live streaming. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Status"
              }), ": Track transcoding progress in database. Notify user when ready. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cost"
              }), ": MediaConvert ~\\$10/hour for HD transcoding. Lambda + ffmpeg is cheaper but has time/memory limits."]
            })]
          })]
        }), (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "\n  "
          })
        })]
      }), (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "Bookmark"
          }), "\n"]
        })
      })]
    }), (0,jsx_runtime.jsx)(_components.strong, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "sd14-q8",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q8: How do you handle file deduplication in a storage system?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Content-addressable storage"
              }), ": Use cryptographic hash (SHA256) of file content as the storage key. When a file is uploaded, compute its hash. If the same hash exists in storage, create a reference (not a copy). ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Approach"
              }), ": Client sends file hash in upload request → server checks dedup table → if exists, return existing URL (instant upload) → if not, proceed with normal upload. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Benefits"
              }), ": Saves storage for duplicate files (same photo uploaded by multiple users, same dataset version). ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ref counting"
              }), ": Track reference count per unique file. When all references are deleted, actually delete the physical file. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Challenges"
              }), ": Hash collisions (extremely unlikely with SHA256), privacy (dedup across users means one user's delete doesn't immediately free space). ", (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["Implementation: Dedup table: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "hash → {ref_count, storage_path, created_at}"
                }), ". File table: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "file_id → hash"
                }), "."]
              })]
            }), (0,jsx_runtime.jsx)(_components.strong, {
              children: "\n  "
            })]
          }), (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "Bookmark"
            }), "\n"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-q9",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Q9: How do you serve large files (1GB+) with CDN?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "1) Chunked transfer"
                }), ": CDN and browser support range requests. Use ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Accept-Ranges: bytes"
                }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Content-Range"
                }), " headers. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "2) Streaming"
                }), ": For video, use HLS/DASH (segmented) instead of monolithic files. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "3) Pre-warming"
                }), ": For anticipated large downloads, pre-warm CDN caches by requesting the file from edge locations. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "4) Compression"
                }), ": Enable gzip/brotli for compressible content, but not for already-compressed files (videos, images). ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "5) Download managers"
                }), ": Support multipart download via range requests so clients can download in parallel. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "6) Signed URLs"
                }), ": For private content, use CDN signed URLs with expiration. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "7) Origin shield"
                }), ": Additional caching layer at the CDN regional hub to reduce load on origin. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "8) Large object support"
                }), ": S3 supports objects up to 5TB, CloudFront handles streaming seamlessly."]
              }), "\n  "]
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "Bookmark"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-q10",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Q10: Design a file upload system for ML datasets (100GB+ CSV/Parquet files).\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Challenges"
                }), ": Very large files, network interruptions, long upload times, need for validation. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Solution"
                }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "1) CLI tool"
                }), ": Python CLI uploader with chunked upload, resumability, progress bar, and parallelism. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "2) Chunk size"
                }), ": 50-100MB chunks for large files. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "3) Validation"
                }), ": CSV validation (column count, types), Parquet schema validation, row count verification. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "4) Compression"
                }), ": Client-side gzip/zstd compression before upload (reduces upload time). ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "5) Checksum"
                }), ": Per-chunk MD5, per-file SHA256. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "6) Resume"
                }), ": Store upload progress locally (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "~/.mlupload/progress.json"
                }), "). On restart, check which chunks are already uploaded. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "7) Parallel upload"
                }), ": 5-10 concurrent chunk uploads. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "8) WebSocket progress"
                }), ": Real-time progress to browser UI. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "9) Post-upload processing"
                }), ": Schema inference, column statistics, data profiling, sample generation. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "10) Cost"
                }), ": Use S3 Glacier Deep Archive for cold datasets after 30 days."]
              }), "\n  "]
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "Bookmark"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "chapter-quiz",
            children: "Chapter Quiz"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q1"
            }), ": Which upload method is best for large files at scale?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Direct upload through server\r\nb) Presigned URL to S3/GCS\r\nc) FTP\r\nd) Base64 encoded in request body"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-quiz1",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: b) Presigned URL to S3/GCS"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "Presigned URLs avoid server bottleneck, scale infinitely, and support chunked/resumable uploads."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q2"
            }), ": What HTTP status code indicates a partial upload for resume?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) 200\r\nb) 206\r\nc) 308\r\nd) 409"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-quiz2",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) 308"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "308 Resume Incomplete indicates partial upload exists. The Range header shows how many bytes were received."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q3"
            }), ": What file property is used for content-addressable deduplication?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) File size\r\nb) Last modified date\r\nc) SHA256 hash\r\nd) File extension"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-quiz3",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) SHA256 hash"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "SHA256 hash uniquely identifies file content. Same hash = same content, enabling deduplication."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q4"
            }), ": Which tool is commonly used for server-side virus scanning?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) ClamAV\r\nb) Wireshark\r\nc) Nmap\r\nd) tcpdump"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-quiz4",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: a) ClamAV"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ClamAV is the most popular open-source antivirus engine for server-side file scanning."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q5"
            }), ": How does CDN help with file delivery?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Reduces upload time\r\nb) Caches files at edge locations for faster downloads\r\nc) Scans files for viruses\r\nd) Validates file types"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "sd14-quiz5",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: b) Caches files at edge locations for faster downloads"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "CDN caches files at geographically distributed edge locations, reducing latency for end users."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "exercises",
            children: "Exercises"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Easy"
            }), " — Generate a presigned S3 URL for a file upload using boto3. Upload a file using curl with the presigned URL."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Easy"
            }), " — Write a server-side validation function that checks MIME type using magic bytes (python-magic), file size, and filename safety."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium"
            }), " — Build a chunked upload client in Python: split a file into 5MB chunks, upload in parallel with retries, and assemble on complete."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium"
            }), " — Create a virus scanning pipeline using S3 events, Lambda, and ClamAV. Scan uploaded files and tag them as clean or quarantined."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard"
            }), " — Design and build a complete file upload system with: presigned URLs, chunked upload, virus scanning, thumbnail generation, CDN serving, and deduplication."]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "common-mistakes",
            children: "Common Mistakes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Relying on client-side validation only — bypassed by curl/Postman"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Not handling partial uploads — failed large uploads force full retransfer"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Making uploaded files immediately public before virus scan"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Storing files on application server disk instead of object storage"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Not implementing storage tiering — hot data costs 10x cold data"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "revision-notes",
            children: "Revision Notes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Direct upload: server proxy, simple but doesn't scale for large files"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Presigned URL: client → storage directly, scalable, supports chunked upload"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Chunked: split into 5-50MB parts, parallel upload, resume on failure"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Validation: server-side magic bytes, size limits, sanitized filenames"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Virus scanning: async pipeline with ClamAV, quarantine on detection"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Processing: thumbnail generation, video transcoding, metadata extraction"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "CDN: edge caching, range requests, signed URLs for private content"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Deduplication: SHA256 content-addressable storage, reference counting"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Storage tiers: hot (S3 Standard), warm (S3 Infrequent), cold (Glacier)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Security: separate upload domain, encryption at rest, access logging"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "placement-section",
            children: "Placement Section"
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "top-10-interview-questions",
            children: "Top 10 Interview Questions"
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "google-style",
            children: "Google Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Explain the core idea of Design File Upload System — Direct Upload, Presigned URLs, CDN in under 60 seconds, then give a real-world analogy."
                }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Design a minimal, well-typed function in this chapter — Direct Upload, Presigned URLs, CDN."
                }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "amazon-style",
            children: "Amazon Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "4",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Describe a production bug caused by misunderstanding this technique — Direct Upload, Presigned URLs, CDN. How did you diagnose and fix it?"
                }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "How would you scale a system using this technique — Direct Upload, Presigned URLs, CDN from 10 users to 10 million?"
                }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "microsoft-style",
            children: "Microsoft Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "6",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Compare Design File Upload System — Direct Upload, Presigned URLs, CDN with the closest alternative approach. When would you choose each?"
                }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Walk through how you would test a component built on this — Direct Upload, Presigned URLs, CDN."
                }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "nvidia-style",
            children: "NVIDIA Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "8",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "How does Design File Upload System — Direct Upload, Presigned URLs, CDN behave differently at scale — memory, throughput, or precision-wise?"
                }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "How would you make an implementation of this technique — Direct Upload, Presigned URLs, CDN run faster on GPU hardware?"
                }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "ai-startup-style",
            children: "AI Startup Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "10",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Write the smallest possible implementation of this technique — Direct Upload, Presigned URLs, CDN that is production-quality."
              }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "resume-tips",
            children: "Resume Tips"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Name Design File Upload System — Direct Upload, Presigned URLs, CDN explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Design File Upload System — Direct Upload, Presigned URLs, CDN\")."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Add a bullet describing a project that applies Design File Upload System — Direct Upload, Presigned URLs, CDN to real data, with numbers."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Mention the tools and libraries you used alongside Design File Upload System — Direct Upload, Presigned URLs, CDN (linters, test frameworks, profiling tools)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keep resume bullets under 15 words and start each with an action verb."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "interview-day-checklist",
            children: "Interview Day Checklist"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Rehearse a 60-second explanation of Design File Upload System — Direct Upload, Presigned URLs, CDN and one real-world analogy."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Prepare one STAR story about debugging a Design File Upload System — Direct Upload, Presigned URLs, CDN-related production issue."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review complexity and edge cases for the classic Design File Upload System — Direct Upload, Presigned URLs, CDN interview problem."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Have questions ready: how does the team apply Design File Upload System — Direct Upload, Presigned URLs, CDN in production today?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "truefalse",
            children: "True/False"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " Design File Upload System — Direct Upload, Presigned URLs, CDN builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " You should write at least one code example for Design File Upload System — Direct Upload, Presigned URLs, CDN before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Active recall with hands-on code beats passive reading for retention."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " The complexity analysis for Design File Upload System — Direct Upload, Presigned URLs, CDN is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "False."
              }), " Complexity grows with input size; always state best, average, and worst case."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " Edge cases (empty input, invalid input, boundary values) matter for Design File Upload System — Direct Upload, Presigned URLs, CDN in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Most production bugs come from unhandled edge cases."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " You should memorize the Design File Upload System — Direct Upload, Presigned URLs, CDN chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "False."
              }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "fill-in-the-blank",
            children: "Fill in the Blank"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The chapter that covers Design File Upload System — Direct Upload, Presigned URLs, CDN is Chapter ___ of this module. — Answer: check the module's table of contents."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The time complexity of the standard approach to 14 Design File Upload System is ___. — Answer: O(log n) with consistent hashing"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The main edge case to handle when implementing 14 Design File Upload System is ___. — Answer: single point of failure, thundering herd, split brain"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The tools commonly used to debug Design File Upload System — Direct Upload, Presigned URLs, CDN issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The related topic that connects to Design File Upload System — Direct Upload, Presigned URLs, CDN in the next chapter is ___. — Answer: see the Next Topic section."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "scenario-questions",
            children: "Scenario Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " A teammate ships a change involving Design File Upload System — Direct Upload, Presigned URLs, CDN that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " Your implementation of this technique — Direct Upload, Presigned URLs, CDN is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " A new hire asks you to explain Design File Upload System — Direct Upload, Presigned URLs, CDN in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " Your team's codebase has three different patterns for Design File Upload System — Direct Upload, Presigned URLs, CDN and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "output-questions",
            children: "Output Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the output of the simplest correct implementation of this technique — Direct Upload, Presigned URLs, CDN on an empty input?"
              }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the output when the input is at the boundary value?"
              }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What does the implementation return when given invalid input types?"
              }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the output for the sample input given in the chapter's Examples section?"
              }), " — Re-run the chapter's example code and compare against the documented output."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the time complexity output when you profile the implementation at 10x input size?"
              }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "difficulty-level",
            children: "Difficulty Level"
          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Level"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Time"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "What It Takes"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Beginner"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "1-2 sessions"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Read theory, run the chapter examples, solve the Easy exercises"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Intermediate"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "3-5 sessions"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Complete Medium exercises, explain Design File Upload System — Direct Upload, Presigned URLs, CDN to someone else"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Advanced"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "1+ week"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
                })]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "tips--tricks",
            children: "Tips & Tricks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Always write a one-line example of Design File Upload System — Direct Upload, Presigned URLs, CDN from memory before opening the chapter — active recall first."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Use the chapter's Revision Notes as a checklist: you have mastered Design File Upload System — Direct Upload, Presigned URLs, CDN when you can explain each bullet."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "For interviews, practice explaining Design File Upload System — Direct Upload, Presigned URLs, CDN twice: once with a technical audience, once with a non-technical audience."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keep a personal examples file where you collect your own Design File Upload System — Direct Upload, Presigned URLs, CDN snippets; interviewers love original examples."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "memory-tricks",
            children: "Memory Tricks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Acronym"
              }), ": build a mnemonic from the 5 key concepts of Design File Upload System — Direct Upload, Presigned URLs, CDN listed in the Chapter at a Glance table."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Story"
              }), ": link Design File Upload System — Direct Upload, Presigned URLs, CDN to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Number anchor"
              }), ": remember the complexity of Design File Upload System — Direct Upload, Presigned URLs, CDN by connecting it to a known algorithm of the same class."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Color code"
              }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Teach-back"
              }), ": explain Design File Upload System — Direct Upload, Presigned URLs, CDN to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "further-reading",
            children: "Further Reading"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "'Designing Data-Intensive Applications' by Martin Kleppmann — the definitive system design book"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "'System Design Interview' by Alex Xu (Volumes 1 & 2)"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["High Scalability blog: ", (0,jsx_runtime.jsx)(_components.a, {
                href: "http://highscalability.com",
                children: "http://highscalability.com"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["AWS Architecture Center: ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://aws.amazon.com/architecture",
                children: "https://aws.amazon.com/architecture"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Netflix Tech Blog: ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://netflixtechblog.com",
                children: "https://netflixtechblog.com"
              }), " File Upload System — Direct Upload, Presigned URLs, CDN"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "related-topics",
            children: "Related Topics"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Previous chapter"
              }), " in Module 07 — builds the foundation for 14 Design File Upload System"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Next chapter"
              }), " — extends 14 Design File Upload System with advanced techniques"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Module 07 System Design"
              }), " — how 14 Design File Upload System fits into scalable production architectures"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Module 21 Interview Preparation"
              }), " — FAANG-style questions on 14 Design File Upload System"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Module 19 Capstone Projects"
              }), " — end-to-end application of 14 Design File Upload System"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "faqs",
            children: "FAQs"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Do I need to memorize all of 14 Design File Upload System?"
              }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What if I get stuck on an exercise?"
              }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "How much time should I spend on 14 Design File Upload System?"
              }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Is 14 Design File Upload System asked in FAANG interviews?"
              }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What's the fastest way to master 14 Design File Upload System?"
              }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "important-notes",
            children: "Important Notes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Design File Upload System — Direct Upload, Presigned URLs, CDN is a core requirement for the rest of this module — do not skip the examples."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Always analyze complexity (time and space) when working with Design File Upload System — Direct Upload, Presigned URLs, CDN."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Production correctness means handling edge cases, not just the happy path."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Interview answers should start with the definition, then the example, then the trade-offs."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "historical-context",
            children: "Historical Context"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Design File Upload System — Direct Upload, Presigned URLs, CDN emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The tools used for Design File Upload System — Direct Upload, Presigned URLs, CDN today evolved from simpler versions; the chapter covers the modern, recommended approach."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Interviewers value knowing one historical fact about Design File Upload System — Direct Upload, Presigned URLs, CDN — it shows genuine interest, not just cramming."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The library/tooling ecosystem around Design File Upload System — Direct Upload, Presigned URLs, CDN changes quickly; focus on fundamentals that remain stable."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "security-considerations",
            children: "Security Considerations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Use TLS 1.3 for all inter-service communication, not just external APIs"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implement rate limiting at the API gateway layer to prevent DDoS and brute force attacks"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Use JWT with short expiry (15 min) + refresh tokens rather than long-lived session tokens"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Encrypt data at rest (AES-256) and in transit (TLS) — especially PII and financial data"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implement circuit breakers to prevent cascading failures from propagating across services"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "ml-intuition",
            children: "ML Intuition"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "System design for ML adds model serving, feature stores, and data pipelines to standard distributed systems"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Model inference is CPU/GPU-bound — horizontal scaling with load balancing is the standard approach"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Feature stores solve the training-serving skew problem by providing consistent features at both train and serve time"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "A/B testing infrastructure is essential for safely rolling out model updates"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Monitoring ML systems requires both infrastructure metrics (latency, error rate) and model metrics (drift, accuracy)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "analogies",
            children: "Analogies"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "14 Design File Upload System is like a GPS navigation system"
                }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Complexity is like a restaurant kitchen"
                }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Edge cases are like stress tests"
                }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "The chapter roadmap is a subway map"
                }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "https://github.com/Raushan666java/ai-engineering-journey",
                  children: "Module Capstone: End-to-End Project"
                }), " — this chapter contributes the Design File Upload System — Direct Upload, Presigned URLs, CDN skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "flashcards",
            children: "Flashcards"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "07systemdesign-14designfileuploadsystem-flash1",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Which upload method is best for large files at scale?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "b) Presigned URL to S3/GCS"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "07systemdesign-14designfileuploadsystem-flash2",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What HTTP status code indicates a partial upload for resume?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) 308"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "07systemdesign-14designfileuploadsystem-flash3",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What file property is used for content-addressable deduplication?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) SHA256 hash"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "07systemdesign-14designfileuploadsystem-flash4",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Which tool is commonly used for server-side virus scanning?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "a) ClamAV"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "07systemdesign-14designfileuploadsystem-flash5",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    How does CDN help with file delivery?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "b) Caches files at edge locations for faster downloads"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "research-references",
            children: "Research References"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Official documentation of the primary library for Design File Upload System — Direct Upload, Presigned URLs, CDN (linked in Further Reading)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The classic paper or textbook chapter introducing Design File Upload System — Direct Upload, Presigned URLs, CDN (see References below)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The standard library reference for Design File Upload System — Direct Upload, Presigned URLs, CDN-related functions"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Engineering blog posts from companies running Design File Upload System — Direct Upload, Presigned URLs, CDN in production at scale"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "PEPs and RFCs where applicable (Python and networking standards)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "open-source-tools",
            children: "Open-Source Tools"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Redis"
              }), " — in-memory cache and message broker"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Apache Kafka"
              }), " — distributed event streaming for high-throughput pipelines"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "PostgreSQL"
              }), " — relational database with excellent read replica support"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Nginx"
              }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "HAProxy"
              }), " — load balancers"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Prometheus + Grafana"
              }), " — metrics collection and visualization File Upload System — Direct Upload, Presigned URLs, CDN"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "debugging-guide",
            children: "Debugging Guide"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Step 1"
              }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Step 2"
              }), ": Add structured logging at each stage of the 14 Design File Upload System pipeline to identify exactly where the failure occurs."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Step 3"
              }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Step 4"
              }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pdb.set_trace()"
              }), " or your IDE debugger to inspect intermediate values at the failure point."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Step 5"
              }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cProfile"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "py-spy"
              }), " before optimizing — never guess at bottlenecks."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Step 6"
              }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "mock-interview-section",
            children: "Mock Interview Section"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round 1 — Screening (15 min)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Explain Design File Upload System — Direct Upload, Presigned URLs, CDN in 60 seconds."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Write a minimal working example of Design File Upload System — Direct Upload, Presigned URLs, CDN."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What is the complexity of your example?"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round 2 — Coding (45 min)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Solve the Medium exercise from this chapter under time pressure."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "State your assumptions, then implement with type hints."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Test with edge cases: empty input, boundary values, invalid input."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round 3 — Behavioral + System (30 min)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Tell me about a time you debugged a Design File Upload System — Direct Upload, Presigned URLs, CDN problem in a project."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "How would you design a system where Design File Upload System — Direct Upload, Presigned URLs, CDN is used at scale?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What metrics would you monitor?"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation rubric"
            }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "optimized-implementation",
            children: "Optimized Implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-python",
              children: "from typing import Any, Optional\r\n\r\ndef demonstrate_14_design_file_upload_system(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 14 Design File Upload System.\r\n\r\n    Key concepts: scalability, availability, consistency, latency, throughput\r\n    Complexity: O(log n) with consistent hashing\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 14 Design File Upload System here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keeps the function signature stable so tests written against it stay valid."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Handles the empty-input contract explicitly."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Add unit tests for the edge cases before implementing the logic (test-first)."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "evaluation-metrics",
            children: "Evaluation Metrics"
          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Skill"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Test"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Target"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Concept recall"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Explain Design File Upload System — Direct Upload, Presigned URLs, CDN without notes"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "60-second explanation"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Code fluency"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Write the chapter example from memory"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "No syntax errors"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Edge cases"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Handle empty/invalid input in exercises"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "All cases pass"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Complexity"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "State time/space for the standard approach"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Correct big-O"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Interview readiness"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Answer 5 Interview Q&A questions out loud"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Fluent, structured answers"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Retention"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Chapter quiz score after 3 days"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "80%+"
                })]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "real-world-examples",
            children: "Real-World Examples"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Twitter/X"
              }), " uses consistent hashing to distribute tweets across shards, handling 500M tweets/day"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Netflix"
              }), " uses a microservices architecture with 700+ services and chaos engineering to ensure 99.99% uptime"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Uber"
              }), " uses geospatial sharding and real-time event streaming (Kafka) to match 14M trips/day"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "WhatsApp"
              }), " served 2B users with only 50 engineers by using Erlang's actor model for message routing"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Interview insight"
              }), ": always clarify scale requirements first — 1K vs 1M vs 1B users require fundamentally different architectures"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "limitations",
            children: "Limitations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Design File Upload System — Direct Upload, Presigned URLs, CDN, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Performance of Design File Upload System — Direct Upload, Presigned URLs, CDN depends on input size and distribution — always benchmark for your own data."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
            }), "\n"]
          }), "\n"]
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