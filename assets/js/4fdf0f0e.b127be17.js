"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[66932],{

/***/ 72658
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_23_case_study_dropbox_md_4fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-23-case-study-dropbox-md-4fd.json
const site_docs_courses_system_design_23_case_study_dropbox_md_4fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/23-case-study-dropbox","title":"Chapter 23: Case Study — Dropbox and File Storage","description":"Previous 24 Interview Preparation","source":"@site/docs/courses/system-design/23-case-study-dropbox.md","sourceDirName":"courses/system-design","slug":"/system-design/23-case-study-dropbox","permalink":"/ai-engineering-journey/system-design/23-case-study-dropbox","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"id":"23-case-study-dropbox","slug":"/system-design/23-case-study-dropbox","title":"Chapter 23: Case Study — Dropbox and File Storage","sidebar_label":"Chapter 23: Case Study — Dropbox and File Storage","sidebar_position":23},"sidebar":"course-system-design","previous":{"title":"Chapter 22: Case Study — Twitter and News Feed","permalink":"/ai-engineering-journey/system-design/22-case-study-twitter"},"next":{"title":"Chapter 24: System Design Interview Preparation","permalink":"/ai-engineering-journey/system-design/24-interview-preparation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/23-case-study-dropbox.md


const frontMatter = {
	id: '23-case-study-dropbox',
	slug: '/system-design/23-case-study-dropbox',
	title: 'Chapter 23: Case Study — Dropbox and File Storage',
	sidebar_label: 'Chapter 23: Case Study — Dropbox and File Storage',
	sidebar_position: 23
};
const contentTitle = 'Chapter 23: Case Study — Dropbox and File Storage';

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
  "value": "Theory / Case Study",
  "id": "theory--case-study",
  "level": 2
}, {
  "value": "Phase 1: Problem Scope and Requirements",
  "id": "phase-1-problem-scope-and-requirements",
  "level": 3
}, {
  "value": "Phase 2: Client Architecture",
  "id": "phase-2-client-architecture",
  "level": 3
}, {
  "value": "Phase 3: Sync Protocol and Block-Level Transfer",
  "id": "phase-3-sync-protocol-and-block-level-transfer",
  "level": 3
}, {
  "value": "Phase 3 (continued): Server Architecture",
  "id": "phase-3-continued-server-architecture",
  "level": 3
}, {
  "value": "Phase 4: Team Collaboration and Security",
  "id": "phase-4-team-collaboration-and-security",
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
  "value": "Mermaid: Dropbox Sync State Machine",
  "id": "mermaid-dropbox-sync-state-machine",
  "level": 3
}, {
  "value": "TypeScript: Content-Defined Chunking",
  "id": "typescript-content-defined-chunking",
  "level": 3
}, {
  "value": "Implementation: Dropbox Architecture Case Study",
  "id": "implementation-dropbox-architecture-case-study",
  "level": 3
}, {
  "value": "TypeScript: File Sync Engine with Delta Sync, Block Storage with Deduplication, and File Watcher",
  "id": "typescript-file-sync-engine-with-delta-sync-block-storage-with-deduplication-and-file-watcher",
  "level": 3
}, {
  "value": "TypeScript: LAN Sync Discovery and Version History",
  "id": "typescript-lan-sync-discovery-and-version-history",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study: Large File Sync with Delta Optimization",
  "id": "case-study-large-file-sync-with-delta-optimization",
  "level": 2
}, {
  "value": "Case Study: Conflict Resolution in Team Collaboration",
  "id": "case-study-conflict-resolution-in-team-collaboration",
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
        id: "chapter-23-case-study--dropbox-and-file-storage",
        children: "Chapter 23: Case Study — Dropbox and File Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/22-case-study-twitter",
          children: "22 Case Study Twitter"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/24-interview-preparation",
          children: "24 Interview Preparation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a block-level sync engine using content-defined chunking with Rabin fingerprinting for delta synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the client-server sync architecture including file watchers, indexing engines, and state-machine-based reconciliation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate deduplication strategies at block level using SHA-256 hashing and their impact on storage efficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the evolution from Amazon S3 to custom object storage (Magic Pocket) at exabyte scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examine conflict resolution strategies including last-writer-wins, version history, and LAN sync"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the metadata store sharding pattern and the streaming download architecture for large files"
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
        href: "../../assets/images/lessons/system-design/23-case-study-dropbox/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/23-case-study-dropbox/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/23-case-study-dropbox/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/23-case-study-dropbox/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/23-case-study-dropbox/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/23-case-study-dropbox/visual-explanation.png",
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
            children: "Dropbox architecture: sync, block storage, dedup, conflict resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-level sync, chunking, deduplication, delta sync, LAN sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sync Engine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local folder monitoring, chunking, compression, encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-level deduplication, compression, encrypted storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict Resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version vectors, CRDTs, server-authoritative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local-first design, incremental sync, efficient delta encoding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory / Case Study]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[Chapter Quiz]\n    C --> D\n    E[Concept Comparison]\n    D --> E\n    F[Quick Reference]\n    E --> F\n    G[Chapter Quiz]\n    F --> G\n    H[Exercises]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory--case-study",
      children: "Theory / Case Study"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/23-dropbox.png",
        alt: "Dropbox Architecture Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-problem-scope-and-requirements",
      children: "Phase 1: Problem Scope and Requirements"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nDropbox serves over 700 million users storing more than 500 billion files across Windows, macOS, Linux, iOS, Android, and the web. The core promise is simple: a file saved on one device appears on all others within seconds. Behind this simplicity lies one of the most complex engineering challenges in distributed systems — synchronizing billions of file changes across heterogeneous devices with unreliable network connections, limited battery life, and widely varying storage capacities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The requirements are deceptively demanding. Conflict detection for small files must complete within 100 milliseconds — the user should not see a sync conflict icon persist after saving a file. Sync must work across platforms with fundamentally different file system event notification APIs: Windows uses ReadDirectoryChangesW, macOS uses FSEvents, and Linux uses inotify. The system must handle files up to hundreds of gigabytes (CAD files, video projects, database dumps) while also optimizing for the common case of small text documents and photos."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-functional requirements include strong read-after-write consistency within a single user's namespace (if I save a file on my laptop and open it on my phone 10 seconds later, I must see the latest version), bi-directional sync that converges to the same state on all devices, and graceful handling of offline periods lasting days or weeks. For business users, the system must support team folders with shared ownership, granular permissions, and audit logging."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scale is staggering. Users store over 500 billion files. The average user stores 10,000 files across 500 folders. The total data stored exceeds 10 exabytes (10 million terabytes). On the desktop client alone, the file watcher must track changes to millions of files without consuming more than 5% of CPU or 200MB of memory — the client cannot degrade the user's computing experience. The mobile app must handle photo uploads from the camera roll, selective sync (choose which folders to sync to mobile), and offline access with local caching. The web client must serve file previews for 100+ file types, including Office documents, PDFs, videos, and RAW photos — all within a browser tab."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-client-architecture",
      children: "Phase 2: Client Architecture"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Dropbox desktop client is a multi-process application with carefully separated concerns. Each component runs in its own process or thread with well-defined interfaces."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Watcher"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The file watcher monitors the Dropbox folder for changes. On each platform, it uses the native file system notification API:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReadDirectoryChangesW"
        }), " with a completion routine, watching for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE_NOTIFY_CHANGE_FILE_NAME"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE_NOTIFY_CHANGE_DIR_NAME"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE_NOTIFY_CHANGE_LAST_WRITE"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE_NOTIFY_CHANGE_SIZE"
        }), ". The watcher receives a buffer of change events and processes them in batches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FSEvents"
        }), " API with a latency flag set to 0.1 seconds (100ms coalescing window). The callback receives a list of changed paths since the last callback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inotify"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN_CLOSE_WRITE"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN_MOVED_TO"
        }), " events. The watcher maintains an inotify descriptor for each watched directory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The file watcher must handle several edge cases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rapid successive saves"
        }), ": An application may save a file dozens of times per second (auto-save in IDEs, Excel auto-recovery). The watcher debounces events with a 200ms coalescing window."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic moves"
        }), ": When an application saves a file by writing to a temp file and renaming, the watcher sees a delete event followed by a create event — it must recognize this as a modification, not a delete-and-recreate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symlinks"
        }), ": On macOS and Linux, symlinks within the Dropbox folder are followed; symlinks pointing outside are ignored (to avoid syncing system files)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Indexing Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The indexing engine maintains a local SQLite database that stores the complete state of the Dropbox folder: for every file and directory, it records the path, modification time, size, SHA-256 hash of content, and a list of block hashes (for block-level sync). The local database serves as the source of truth for \"what is on this device.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the file watcher detects a change, the indexing engine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reads the file's metadata (size, modification time)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the file is small (< 4MB), computes the SHA-256 hash of the entire file."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the file is large, splits it into 4MB blocks and computes SHA-256 for each block."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compares the new state with the local database."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the file is new or modified, flags it for upload to the sync engine."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates the local database with the new metadata."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sync Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sync engine is the brain of the client. It maintains a state machine with three states for every file:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local state"
        }), ": what the file looks like on this device (from the local SQLite database)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote state"
        }), ": what the file looks like on the server (from the last sync response)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Desired state"
        }), ": what the file should look like after sync completes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sync engine's loop:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect local changes (from the indexing engine)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fetch remote changes (from the server API)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the diff: for each file, compare local state vs remote state."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply actions:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If local changed but remote did not: upload local version."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If remote changed but local did not: download remote version."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If both changed: conflict resolution (see below)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sync engine communicates with the server via HTTPS with persistent connections. For bandwidth efficiency, it uses HTTP chunked transfer encoding and deflate compression. The engine implements exponential backoff for retries: 1 second, 2 seconds, 4 seconds, 8 seconds, up to a maximum of 5 minutes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conflict Resolution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a file is modified on two devices before either change has propagated, a conflict occurs. Dropbox's conflict resolution strategy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default: Last writer wins"
        }), ". The server timestamps each upload. The version with the later timestamp becomes the canonical version."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict copy"
        }), ": If conflicting changes are detected (the server receives two uploads for the same file at approximately the same time), one version is saved as the original filename, and the other is saved as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filename (User's conflicted copy YYYY-MM-DD).ext"
        }), ". Both versions are synced to all devices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version history"
        }), ": Free users get 30 days of version history (ability to restore any previous version). Paid users get extended version history (180 days for Plus, 1 year for Professional). Enterprise customers can opt for unlimited version history."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The conflict detection window is critical. If the window is too short, legitimate parallel edits are lost. If too long, users see spurious conflicts. Dropbox uses a server-side timestamp with NTP synchronization across all servers to ensure monotonic clocks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selective Sync and Smart Sync"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dropbox offers selective sync (choose which folders to sync to which device) and Smart Sync (see all files in the file system but download only the ones you open). Selective sync is implemented by storing a per-device folder filter list in the metadata store. When the sync engine runs, it checks each file against the device's filter list before downloading."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart Sync is more architecturally interesting. On supported platforms (macOS and Windows), the client creates \"online-only\" files that have valid filenames, icons, and metadata in the file system but no actual file content stored locally. When the user opens an online-only file, the operating system generates a file open event that the file watcher intercepts. The client immediately downloads the file content and hands it to the requesting application. The user sees a brief \"Downloading from Dropbox...\" progress indicator, typically completing in under 2 seconds for files under 100MB."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementation differs by platform:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS"
        }), ": Uses the File Provider extension API (NSFileProviderManager). The client registers itself as a file provider, and the OS routes file access through the extension. The extension's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "providePlaceholder"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "startProvidingItem"
        }), " methods handle the online-to-local transition transparently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows"
        }), ": Uses the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CfApi"
        }), " (Cloud Files API) introduced in Windows 10. The client registers sync root IDs and uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CfCreatePlaceholders"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CfGetPlaceholderInfo"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CfHydratePlaceholder"
        }), " for the same functionality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux"
        }), ": Selective sync is supported but Smart Sync is not available due to the lack of a standardized cloud files API in the Linux kernel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart Sync dramatically reduces local storage requirements. An enterprise user with a team folder containing 500GB of files might only store 5GB locally — the files they actually use — while seeing all 500GB in their file system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-sync-protocol-and-block-level-transfer",
      children: "Phase 3: Sync Protocol and Block-Level Transfer"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Block-Level Sync"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight behind Dropbox's efficiency is block-level sync. Instead of uploading an entire file when a single byte changes (consider a 2GB database file where one row is updated), Dropbox splits the file into 4MB blocks and only uploads the blocks that have changed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The process:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a file changes, the client splits it into 4MB blocks using content-defined chunking."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each block, compute SHA-256 hash."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the list of block hashes with the previous list (stored in the local database)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only upload blocks whose hashes differ from the previous version."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server reconstructs the file from the blocks it already has plus the new blocks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The savings are dramatic. For a 100MB presentation where one slide image is replaced (roughly a 2MB block change), only 2MB is uploaded instead of 100MB. For a 1GB virtual machine disk file where a few sectors change, the upload might be 12-20MB instead of 1GB."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Content-Defined Chunking (CDC)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dropbox uses content-defined chunking with a rolling hash based on Rabin fingerprinting. Unlike fixed-size block boundaries (which shift every time a byte is inserted or deleted near a boundary), CDC determines block boundaries based on the content itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Rabin fingerprint is a polynomial hash computed over a sliding window of bytes. When the fingerprint modulo a target value hits zero, a block boundary is declared. This means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inserting or deleting bytes in the middle of a file only affects the local block boundary — most block boundaries remain stable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The same content chunk in different files produces the same block hash, enabling cross-file deduplication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The average block size is configurable (Dropbox uses ~4MB), but blocks can be as small as 512KB or as large as 16MB."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deduplication"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At the server side, Dropbox stores each unique block exactly once. The block is identified by its SHA-256 hash. A file is represented as an ordered list of block hashes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "file_block_list = [\"hash1\", \"hash2\", \"hash3\", ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the server receives a block upload, it checks if a block with that hash already exists. If yes, the block is not stored again — the file's block list simply references the existing block. This provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block-level deduplication across files"
        }), ": If 1 million users each have a copy of the same 100MB video file, the server stores it once (roughly 100MB) instead of 1 million times (100PB). Each user's block list references the same set of block hashes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block-level deduplication across versions"
        }), ": When a file is edited, only the changed blocks consume new storage space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delta encoding for non-binary files"
        }), ": For text-based files, Dropbox can also compute byte-level diffs for version history, storing only the delta between versions rather than full copies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The deduplication ratio for Dropbox is estimated at 10:1 to 50:1 depending on the user population. Shared operating system files, common document templates, and popular media files all benefit from dedup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-continued-server-architecture",
      children: "Phase 3 (continued): Server Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata Store"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The metadata store is a sharded MySQL database. User data is sharded by user ID:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "shard_id = hash(user_id) % N\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each shard is a MySQL instance (or master-replica pair) containing the metadata for N users. The schema is relatively simple:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tables:\n  files: id, user_id, parent_id, name, is_folder, block_list_hash,\n         size, created_at, modified_at, is_deleted\n  versions: id, file_id, block_list_hash, size, timestamp,\n            change_description, user_id\n  shares: id, file_id, shared_with_user_id, permission_level\n  team_folders: id, team_id, root_folder_id, member_count\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "block_list_hash"
      }), " is a SHA-256 of the concatenation of all block hashes in the file. This provides a compact fingerprint of the file's content: if the block list hash is the same, the file content is guaranteed to be the same (by collision resistance of SHA-256)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The metadata store must be highly available. Write operations go to the MySQL master; read operations are served from replicas with eventual consistency. In the rare case of a conflict (a read from a replica is stale), the sync engine detects the inconsistency in its next reconciliation pass and corrects it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Architecture: From S3 to Magic Pocket"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dropbox initially stored all file blocks on Amazon S3. As the platform grew to hundreds of petabytes, the S3 bill became one of Dropbox's largest operational expenses. In 2015, Dropbox began migrating to Magic Pocket — a custom object storage system built from commodity hardware."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Magic Pocket's key design decisions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commodity servers"
        }), ": Standard x86 servers with directly attached hard drives (12-16 drives per server). No SAN, no NAS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Erasure coding"
        }), ": Instead of 3x replication (300% overhead), Magic Pocket uses Reed-Solomon erasure coding with a (12, 8) configuration. Data is split into 8 fragments, and 4 parity fragments are computed. Any 8 of the 12 fragments can reconstruct the data. This provides better durability than 3x replication with only 50% overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HAMR (Hardware-Aware Merge Regions)"
        }), ": Drives on a single server are grouped into regions. The system is aware of which drives share a SAS controller, which servers share a top-of-rack switch, and which racks share a power distribution unit. Failure domains are modeled explicitly, and data placement ensures that no two fragments of a single block are on the same failure domain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Geo distribution"
        }), ": Blocks are replicated across two geographic regions. Primary region serves read/write traffic; secondary region maintains a replica for disaster recovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency model"
        }), ": Read-after-write consistency within a region. Cross-region replication is asynchronous, with typical latency of seconds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The migration from S3 to Magic Pocket saved Dropbox an estimated $500M over 5 years."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Streaming File Download"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user downloads a file, the client requests the file's block list from the metadata store, then fetches each block from the storage layer. Key optimizations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP Range Requests"
          }), ": The download uses HTTP Range headers to request specific byte ranges. This enables:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resume on interruption: if a download fails at 60%, the client requests bytes 60% to 100%."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Parallel chunk download: the client requests multiple blocks simultaneously (typically 4-6 parallel connections)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Progressive download: for media files, the client can start playing before the entire file is downloaded."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bandwidth estimation"
          }), ": The client monitors download speed and adjusts parallel connection count dynamically. On a 100Mbps connection, it might use 6 parallel connections. On a cellular connection, it might use 2 connections to avoid overwhelming the radio."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delta sync"
          }), ": When a file has been slightly modified, the client downloads only the changed blocks, not the entire file. The local file is reconstructed by merging the unchanged local blocks with the new remote blocks."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LAN Sync"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of Dropbox's most innovative features is LAN sync: when two devices on the same local network both have a file, the file transfers directly between them instead of through the internet."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The protocol:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both clients report their private IP addresses to the server during sync."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server detects that two devices with the same file are on the same subnet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server tells each client the other's IP address and port."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The clients establish a direct TCP connection (with NAT traversal via UPnP or STUN)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File blocks transfer peer-to-peer over the local network."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LAN sync provides dramatic speed improvements. A 1GB file that would take 30 seconds over a 300Mbps internet connection takes 3 seconds over a 1Gbps LAN. It also reduces server bandwidth costs: popular files shared within an organization are transferred locally rather than through the cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-team-collaboration-and-security",
      children: "Phase 4: Team Collaboration and Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAS Integration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network Attached Storage (NAS) integration is a critical feature for professional users. Users with Synology, QNAP, or other NAS devices can sync Dropbox folders directly to their NAS, making them available across the home or office network without requiring a desktop computer to be running."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NAS integration works through the Dropbox API. NAS manufacturers implement the Dropbox client as a package that runs on the NAS's operating system. The NAS client is a stripped-down version of the desktop client: it implements the file watcher (via inotify on Linux-based NAS operating systems), the sync engine (state machine), and the block-level sync protocol. However, it omits the Smart Sync feature (not needed since NAS storage is abundant), the file preview engine, and the graphical user interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When files are synced to a NAS, LAN sync becomes especially valuable. If a desktop computer and a NAS are on the same LAN and both have the same file, the file transfers directly between them at gigabit Ethernet speeds, never touching Dropbox's servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mobile Client Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Dropbox mobile client (iOS and Android) faces constraints fundamentally different from the desktop client: limited battery, intermittent connectivity, restricted background execution, and no file system access (on iOS, apps are sandboxed)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The mobile sync strategy is optimized for the most common mobile use case: photo and video backup. When the user opens the app, the camera upload feature:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enumerates the camera roll using the OS Photos API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compares against the last upload timestamp (stored in NSUserDefaults / SharedPreferences)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compresses and uploads new photos in the background using a URLSession background upload task (iOS) or WorkManager (Android)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On completion, marks the photo as backed up in the camera roll (iOS: writes a flag to the photo metadata via PHAssetChangeRequest)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For file access, the mobile client does not maintain a full local copy of the Dropbox folder. Instead, it keeps a lightweight index (file names, sizes, thumbnails) in the local SQLite database. Full file content is downloaded on demand when the user taps a file. Recently viewed files are cached locally; the cache is evicted using an LRU policy bounded by a configurable storage limit (default: 2GB on iOS, varies by Android device)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Offline access is implemented through \"favorites.\" When the user marks a file or folder as a favorite, the client downloads all content (files in the folder) to the local cache and marks it as \"pinned\" — exempt from LRU eviction. Pinned files are updated whenever the device has connectivity and the file changes on the server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Client Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Dropbox web client (dropbox.com) provides a full-featured file manager in the browser. Key architectural elements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File preview"
          }), ": Over 100 file types are previewed directly in the browser without downloading. Previews are generated server-side by the preview service. For documents (PDF, Office), the preview service converts the file to HTML or PNG thumbnails using LibreOffice headless mode. For videos and audio, it generates HLS (HTTP Live Streaming) segments for progressive playback. For images, it generates multiple resolution versions (thumbnail, small, medium, full)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chunked upload"
          }), ": The web client uploads files using resumable chunked upload. Files are split into 8MB chunks. Each chunk is uploaded as a separate HTTP PUT request. If the connection drops, the client resumes from the last successfully uploaded chunk. The upload progress is tracked server-side with a session ID."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "WebSocket notifications"
          }), ": When a file changes (another collaborator edits it, a shared folder is updated), the web client receives a real-time notification via a WebSocket connection. The notification includes the file name, the type of change, and the user who made the change. This allows the web client to update the file listing without polling."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Drag-and-drop upload"
          }), ": Drag-and-drop uses the HTML5 File API. The browser reads the file into memory as an ArrayBuffer, then uploads it in chunks via XMLHttpRequest. For folders dragged onto the browser, the web client recursively enumerates files using the File API's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "webkitGetAsEntry"
          }), " (Chrome/Firefox) or the DataTransferItem's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getAsEntry"
          }), " (standard)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trash and Deletion Recovery"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user deletes a file, the file is not immediately removed from storage. Instead, it is moved to a \"trash\" state with a configurable retention period (30 days for free users, until trash is emptied for paid users). The deletion flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The sync engine on the deleting device updates the local database: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_deleted = true"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The change propagates to the server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server marks the file as deleted in the metadata store but does not remove the block references."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server publishes a delete notification to all other devices via the notification service."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Other devices receive the notification and move the file to their local trash folders."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["During the retention period, the file is restorable via a simple undo: the server sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_deleted = false"
        }), " and re-syncs to all devices."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After the retention period (or when the user empties the trash), the background cleanup service permanently removes the metadata entry. The block level references are decremented. When a block's reference count reaches zero, it is eligible for garbage collection in the storage layer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The trash architecture prevents catastrophic data loss. If a user accidentally deletes an entire folder, they have 30 days to recover it. For enterprise teams, the admin console provides an additional layer of recovery: admins can restore any user's deleted files, even after the user's trash retention has expired (up to 1 year)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dropbox Paper is a collaborative document editor integrated with the file storage platform. It uses CRDTs (Conflict-Free Replicated Data Types) for real-time collaborative editing. Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time cursor presence"
        }), ": Each collaborator's cursor position is broadcast via WebSocket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OT/CRDT-based reconciliation"
        }), ": Concurrent edits to the same document converge without conflicts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comment threads"
        }), ": Inline comments on specific text selections, with @mentions for notifications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task management"
        }), ": Checkbox items within documents, assignable to team members."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version history"
        }), ": Every save creates a version that can be reverted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Architecture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption at rest"
        }), ": All blocks stored on servers are encrypted with AES-256. Each block has a unique encryption key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption in transit"
        }), ": All client-server communication uses TLS 1.2+."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-knowledge encryption"
        }), " (optional, enterprise): The encryption key is derived from the user's password and never sent to Dropbox's servers. Dropbox cannot decrypt user files even if compelled by law enforcement. Key management is handled client-side."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two-factor authentication"
        }), ": TOTP-based 2FA, U2F security keys, and SMS-based 2FA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Team audit logs"
        }), ": Enterprise administrators can view a complete log of all file operations by team members."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Client Device\"\n        FW[File Watcher<br/>inotify/FSEvents/RDCW]\n        IE[Indexing Engine<br/>SQLite DB]\n        SE[Sync Engine<br/>State Machine]\n        CD[Conflict Detector]\n        CDC[Content-Defined Chunking<br/>Rabin Fingerprint]\n    end\n\n    subgraph \"Network\"\n        LS[LAN Sync<br/>P2P Transfer]\n        TLS[TLS/HTTPS]\n    end\n\n    subgraph \"Server\"\n        API[Sync API]\n        MS[(Metadata Store<br/>Sharded MySQL)]\n        SS[(Block Storage<br/>S3 / Magic Pocket)]\n    end\n\n    subgraph \"Magic Pocket\"\n        EC[Erasure Coding<br/>Reed-Solomon 12,8]\n        GR[Geo Replication]\n        HAMR[Failure Domain<br/>Aware Placement]\n    end\n\n    subgraph \"Collaboration\"\n        DP[Dropbox Paper<br/>CRDT-based]\n        SH[Sharing Service]\n        VH[Version History]\n    end\n\n    subgraph \"Security\"\n        ENC[AES-256 Encryption]\n        ZKE[Zero-Knowledge Key<br/>Enterprise]\n        TFA[Two-Factor Auth]\n        AL[Audit Logging]\n    end\n\n    FW --> IE\n    IE --> CDC\n    CDC --> SE\n    SE --> CD\n    SE --> LS\n    SE --> TLS\n    TLS --> API\n    API --> MS\n    API --> SS\n    SS --> EC\n    EC --> GR\n    GR --> HAMR\n    MS --> SH\n    SH --> DP\n    SH --> VH\n    API --> ENC\n    API --> ZKE\n    API --> TFA\n    API --> AL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Metric"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory / Case Study"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 23: Case Study — Dropbox and File Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
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
            children: "Theory / Case Study"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 23: Case Study — Dropbox and File Storage"
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
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory / Case Study"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does content-defined chunking with Rabin fingerprinting differ from fixed-size blocks?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Fixed-size are faster, B) CDC determines block boundaries by content hash, ensuring stable boundaries across edits, C) CDC uses larger blocks, D) No difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary advantage of Dropbox's block-level deduplication?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Faster uploads, B) Identical content across users or file versions is stored once, achieving 10:1 to 50:1 compression, C) Better encryption, D) Lower latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does the sync engine resolve conflicts when a file is modified on two devices simultaneously?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Both versions are kept \"conflicted copy,\" B) Server picks randomly, C) Last-writer-wins with timestamp-based detection creating conflict copies for simultaneous edits, D) Older version overwrites newer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What erasure coding configuration does Magic Pocket use and why?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) 3x replication for simplicity, B) Reed-Solomon (12,8): split into 8 fragments + 4 parity, any 8 of 12 reconstructs, 50% overhead vs 200% for 3x replication, C) RAID 5, D) No redundancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does LAN sync discover peers on the same network?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) DNS lookup, B) Clients report private IPs to server; server detects same subnet and coordinates direct P2P TCP connection via UPnP/STUN, C) Broadcast UDP, D) Bluetooth discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-dropbox-sync-state-machine",
      children: "Mermaid: Dropbox Sync State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Local: File Created] --> B{Compare with Remote}\n    B -->|Identical| C[Synced]\n    B -->|Different| D{Conflict?}\n    D -->|No| E[Upload to Remote]\n    D -->|Yes| F[Create Conflict Copy]\n    E --> C\n    F --> G[Both Versions Saved]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-content-defined-chunking",
      children: "TypeScript: Content-Defined Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RabinChunker {\n  private readonly windowSize = 48;\n  private readonly averageChunkSize = 8192;\n  private readonly minChunk = 2048;\n  private readonly maxChunk = 16384;\n  private readonly mask = (1 << 13) - 1;\n\n  chunk(data: Buffer): Buffer[] {\n    const chunks: Buffer[] = [];\n    let start = 0;\n    let hash = 0;\n    for (let i = 1; i < data.length; i++) {\n      hash = ((hash << 1) + data[i]) & 0x7fffffff;\n      const chunkLen = i - start + 1;\n      if ((chunkLen >= this.minChunk && (hash & this.mask) === 0) || chunkLen >= this.maxChunk) {\n        chunks.push(data.slice(start, i + 1));\n        start = i + 1;\n        hash = 0;\n      }\n    }\n    if (start < data.length) chunks.push(data.slice(start));\n    return chunks;\n  }\n}\n\nclass DedupEngine {\n  private store = new Map<string, Buffer>();\n  private refCount = new Map<string, number>();\n\n  async storeBlock(block: Buffer): Promise<string> {\n    const hash = this.sha256(block);\n    if (!this.store.has(hash)) {\n      this.store.set(hash, block);\n      this.refCount.set(hash, 0);\n    }\n    this.refCount.set(hash, this.refCount.get(hash)! + 1);\n    return hash;\n  }\n\n  getBlock(hash: string): Buffer | undefined { return this.store.get(hash); }\n\n  removeBlock(hash: string): void {\n    const count = this.refCount.get(hash) ?? 0;\n    if (count <= 1) { this.store.delete(hash); this.refCount.delete(hash); }\n    else this.refCount.set(hash, count - 1);\n  }\n\n  private sha256(data: Buffer): string {\n    let hash = 0;\n    for (let i = 0; i < data.length; i++) hash = ((hash << 5) - hash + data[i]) | 0;\n    return Math.abs(hash).toString(16).padStart(8, \"0\");\n  }\n}\n\nclass ConflictResolver {\n  resolve(localMtime: number, remoteMtime: number, localContent: string, remoteContent: string): { action: string; result: string } {\n    if (localContent === remoteContent) return { action: \"noop\", result: localContent };\n    if (localMtime > remoteMtime) return { action: \"local-wins\", result: localContent };\n    if (remoteMtime > localMtime) return { action: \"remote-wins\", result: remoteContent };\n    return {\n      action: \"conflict-copy\",\n      result: localContent,\n    };\n  }\n}\n\nclass SyncEngine {\n  private localState = new Map<string, { mtime: number; content: string }>();\n  private remoteState = new Map<string, { mtime: number; content: string }>();\n  private resolver = new ConflictResolver();\n\n  localChange(path: string, content: string): void {\n    this.localState.set(path, { mtime: Date.now(), content });\n  }\n\n  remoteChange(path: string, content: string, mtime: number): void {\n    this.remoteState.set(path, { mtime, content });\n  }\n\n  sync(path: string): string {\n    const l = this.localState.get(path);\n    const r = this.remoteState.get(path);\n    if (!l && !r) return \"noop\";\n    if (!l) { this.localState.set(path, r!); return \"downloaded\"; }\n    if (!r) { this.remoteState.set(path, l); return \"uploaded\"; }\n    const result = this.resolver.resolve(l.mtime, r.mtime, l.content, r.content);\n    if (result.action === \"local-wins\") this.remoteState.set(path, l);\n    else if (result.action === \"remote-wins\") this.localState.set(path, r);\n    return result.action;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-dropbox-architecture-case-study",
      children: "Implementation: Dropbox Architecture Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DropboxFileSystem {\n  private files = new Map<string, { id: string; name: string; userId: string; size: number; parentId: string | null; isDir: boolean; version: number; chunks: string[] }>();\n  private chunks = new Map<string, string>(); private chunkSize = 4 * 1024 * 1024; // 4MB\n  createFile(userId: string, name: string, parentId: string | null, content: string): string {\n    const id = `file-${Date.now()}-${Math.random().toString(36).slice(2)}`; const chunks: string[] = [];\n    for (let i = 0; i < content.length; i += this.chunkSize) { const cid = `${id}-chunk-${i / this.chunkSize}`; this.chunks.set(cid, content.slice(i, i + this.chunkSize)); chunks.push(cid); }\n    this.files.set(id, { id, name, userId, size: content.length, parentId, isDir: false, version: 1, chunks }); return id; }\n  readFile(fileId: string): string | null { const file = this.files.get(fileId); if (!file) return null; return file.chunks.map(cid => this.chunks.get(cid) || \"\").join(\"\"); }\n  updateFile(fileId: string, content: string): boolean {\n    const file = this.files.get(fileId); if (!file) return false; const oldChunks = file.chunks;\n    file.chunks.forEach(cid => this.chunks.delete(cid)); const newChunks: string[] = [];\n    for (let i = 0; i < content.length; i += this.chunkSize) { const cid = `${fileId}-chunk-${i / this.chunkSize}`; this.chunks.set(cid, content.slice(i, i + this.chunkSize)); newChunks.push(cid); }\n    file.chunks = newChunks; file.size = content.length; file.version++; return true; }\n  createFolder(userId: string, name: string, parentId: string | null): string { const id = `folder-${Date.now()}`; this.files.set(id, { id, name, userId, size: 0, parentId, isDir: true, version: 1, chunks: [] }); return id; }\n  listFolder(folderId: string): { name: string; isDir: boolean; size: number; version: number }[] {\n    return [...this.files.values()].filter(f => f.parentId === folderId).map(({ name, isDir, size, version }) => ({ name, isDir, size, version })); }\n  deleteFile(fileId: string): boolean { const f = this.files.get(fileId); if (!f) return false; if (!f.isDir) f.chunks.forEach(cid => this.chunks.delete(cid)); this.files.delete(fileId); return true; }\n}\nclass SyncEngine { private syncStatus = new Map<string, \"synced\" | \"pending\" | \"conflict\">();\n  markPending(fileId: string): void { this.syncStatus.set(fileId, \"pending\"); }\n  sync(fileId: string): { status: string } { const status = this.syncStatus.get(fileId) || \"synced\"; if (status === \"conflict\") return { status: \"conflict\" }; this.syncStatus.set(fileId, \"synced\"); return { status: \"synced\" }; }\n  getConflicts(): string[] { return [...this.syncStatus.entries()].filter(([_, s]) => s === \"conflict\").map(([id]) => id); }\n  resolveConflict(fileId: string, resolution: \"local\" | \"remote\"): void { this.syncStatus.set(fileId, \"synced\"); } }\nclass VersionHistory { private versions = new Map<string, { version: number; timestamp: number; size: number }[]>();\n  record(fileId: string, size: number): void { if (!this.versions.has(fileId)) this.versions.set(fileId, []); this.versions.get(fileId)!.push({ version: this.versions.get(fileId)!.length + 1, timestamp: Date.now(), size }); }\n  getHistory(fileId: string, limit = 10): { version: number; timestamp: number; size: number }[] { return (this.versions.get(fileId) || []).slice(-limit); } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case study dropbox\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'case study dropbox', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// case study dropbox - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'case study dropbox' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-file-sync-engine-with-delta-sync-block-storage-with-deduplication-and-file-watcher",
      children: "TypeScript: File Sync Engine with Delta Sync, Block Storage with Deduplication, and File Watcher"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FileSyncEngine {\n  private localState = new Map<string, { mtime: number; size: number; hash: string; blocks: string[] }>();\n  private remoteState = new Map<string, { mtime: number; size: number; hash: string; blocks: string[] }>();\n  private syncQueue: string[] = [];\n  private conflictCopies = new Map<string, string>();\n  private readonly retryBase = 1000;\n  private readonly retryMax = 300000;\n\n  detectLocalChange(path: string, mtime: number, size: number, hash: string, blocks: string[]): void {\n    this.localState.set(path, { mtime, size, hash, blocks });\n    if (!this.syncQueue.includes(path)) this.syncQueue.push(path);\n  }\n\n  fetchRemoteState(path: string, mtime: number, size: number, hash: string, blocks: string[]): void {\n    this.remoteState.set(path, { mtime, size, hash, blocks });\n  }\n\n  computeDelta(path: string): { action: \"upload\" | \"download\" | \"conflict\" | \"noop\"; changedBlocks: string[]; newBlocks: string[] } {\n    const local = this.localState.get(path);\n    const remote = this.remoteState.get(path);\n    if (!local && !remote) return { action: \"noop\", changedBlocks: [], newBlocks: [] };\n    if (!local) return { action: \"download\", changedBlocks: remote?.blocks ?? [], newBlocks: [] };\n    if (!remote) return { action: \"upload\", changedBlocks: local.blocks, newBlocks: local.blocks };\n    if (local.hash === remote.hash) return { action: \"noop\", changedBlocks: [], newBlocks: [] };\n    if (local.mtime > remote.mtime + 1000) {\n      const newBlocks = local.blocks.filter(b => !remote.blocks.includes(b));\n      return { action: \"upload\", changedBlocks: local.blocks, newBlocks };\n    }\n    if (remote.mtime > local.mtime + 1000) {\n      const changedBlocks = remote.blocks.filter(b => !local.blocks.includes(b));\n      return { action: \"download\", changedBlocks, newBlocks: [] };\n    }\n    const conflictId = `${path}.conflicted-${Date.now()}`;\n    this.conflictCopies.set(path, conflictId);\n    return { action: \"conflict\", changedBlocks: [], newBlocks: [] };\n  }\n\n  async syncAll(onUpload: (path: string, blocks: string[]) => Promise<boolean>, onDownload: (path: string) => Promise<{ blocks: string[] }>): Promise<{ synced: number; conflicts: number; errors: number }> {\n    let synced = 0, conflicts = 0, errors = 0;\n    for (const path of this.syncQueue) {\n      const delta = this.computeDelta(path);\n      try {\n        if (delta.action === \"upload\") {\n          const ok = await onUpload(path, delta.newBlocks);\n          if (ok) { synced++; this.remoteState.set(path, this.localState.get(path)!); }\n        } else if (delta.action === \"download\") {\n          const result = await onDownload(path);\n          synced++;\n        } else if (delta.action === \"conflict\") {\n          await onUpload(path, this.localState.get(path)!.blocks);\n          conflicts++;\n        }\n      } catch {\n        errors++;\n      }\n    }\n    this.syncQueue = [];\n    return { synced, conflicts, errors };\n  }\n\n  getConflicts(): { path: string; conflictCopy: string }[] {\n    return [...this.conflictCopies.entries()].map(([path, conflictCopy]) => ({ path, conflictCopy }));\n  }\n}\n\nclass BlockStorage {\n  private blocks = new Map<string, Buffer>();\n  private refCounts = new Map<string, number>();\n  private compressionEnabled = true;\n  private readonly chunkSize = 4 * 1024 * 1024;\n\n  chunkData(data: Buffer): Buffer[] {\n    const chunks: Buffer[] = [];\n    for (let i = 0; i < data.length; i += this.chunkSize) {\n      chunks.push(data.slice(i, Math.min(i + this.chunkSize, data.length)));\n    }\n    return chunks;\n  }\n\n  async storeBlock(data: Buffer, encryptKey?: string): Promise<string> {\n    const compressed = this.compressionEnabled ? this.compress(data) : data;\n    const encrypted = encryptKey ? this.encrypt(compressed, encryptKey) : compressed;\n    const hash = this.sha256(encrypted);\n    if (!this.blocks.has(hash)) {\n      this.blocks.set(hash, encrypted);\n      this.refCounts.set(hash, 1);\n    } else {\n      this.refCounts.set(hash, this.refCounts.get(hash)! + 1);\n    }\n    return hash;\n  }\n\n  getBlock(hash: string, decryptKey?: string): Buffer | null {\n    const encrypted = this.blocks.get(hash);\n    if (!encrypted) return null;\n    const decrypted = decryptKey ? this.decrypt(encrypted, decryptKey) : encrypted;\n    return this.compressionEnabled ? this.decompress(decrypted) : decrypted;\n  }\n\n  deduplicateBlocks(blockHashes: string[]): { unique: number; duplicates: number; totalSize: number } {\n    const seen = new Set<string>();\n    let duplicates = 0;\n    for (const hash of blockHashes) {\n      if (seen.has(hash)) duplicates++;\n      else seen.add(hash);\n    }\n    let totalSize = 0;\n    for (const hash of seen) {\n      const block = this.blocks.get(hash);\n      if (block) totalSize += block.length;\n    }\n    return { unique: seen.size, duplicates, totalSize };\n  }\n\n  referenceCount(hash: string): number { return this.refCounts.get(hash) ?? 0; }\n\n  private compress(data: Buffer): Buffer {\n    const result: number[] = [];\n    let i = 0;\n    while (i < data.length) {\n      let runLength = 1;\n      while (i + runLength < data.length && data[i + runLength] === data[i] && runLength < 255) runLength++;\n      if (runLength > 3) { result.push(runLength, data[i]); i += runLength; }\n      else { result.push(data[i]); i++; }\n    }\n    return Buffer.from(result);\n  }\n\n  private decompress(data: Buffer): Buffer {\n    const result: number[] = [];\n    let i = 0;\n    while (i < data.length) {\n      if (data[i] > 3 && i + 1 < data.length) {\n        for (let j = 0; j < data[i]; j++) result.push(data[i + 1]);\n        i += 2;\n      } else { result.push(data[i]); i++; }\n    }\n    return Buffer.from(result);\n  }\n\n  private encrypt(data: Buffer, key: string): Buffer {\n    return Buffer.from(data.map((b, i) => b ^ key.charCodeAt(i % key.length)));\n  }\n\n  private decrypt(data: Buffer, key: string): Buffer {\n    return Buffer.from(data.map((b, i) => b ^ key.charCodeAt(i % key.length)));\n  }\n\n  private sha256(data: Buffer): string {\n    let hash = 0;\n    for (let i = 0; i < data.length; i++) hash = ((hash << 5) - hash + data[i]) | 0;\n    return Math.abs(hash).toString(16).padStart(8, \"0\");\n  }\n}\n\nclass FileWatcher {\n  private watchedPaths = new Set<string>();\n  private changeQueue: { path: string; type: \"create\" | \"modify\" | \"delete\"; mtime: number }[] = [];\n  private debounceTimers = new Map<string, NodeJS.Timer>();\n  private readonly debounceMs = 200;\n  private readonly uploadQueue: string[] = [];\n  private uploadInProgress = false;\n  private retryCount = new Map<string, number>();\n  private readonly maxRetries = 5;\n\n  watch(path: string): void {\n    this.watchedPaths.add(path);\n  }\n\n  unwatch(path: string): void {\n    this.watchedPaths.delete(path);\n    this.debounceTimers.delete(path);\n  }\n\n  onChange(path: string, type: \"create\" | \"modify\" | \"delete\"): void {\n    const existing = this.debounceTimers.get(path);\n    if (existing) clearTimeout(existing);\n    this.debounceTimers.set(path, setTimeout(() => {\n      this.changeQueue.push({ path, type, mtime: Date.now() });\n      this.debounceTimers.delete(path);\n      this.enqueueUpload(path);\n    }, this.debounceMs));\n  }\n\n  private enqueueUpload(path: string): void {\n    if (!this.uploadQueue.includes(path)) this.uploadQueue.push(path);\n    this.processUploadQueue();\n  }\n\n  private async processUploadQueue(): Promise<void> {\n    if (this.uploadInProgress) return;\n    this.uploadInProgress = true;\n    while (this.uploadQueue.length > 0) {\n      const path = this.uploadQueue.shift()!;\n      try {\n        await this.uploadFile(path);\n        this.retryCount.delete(path);\n      } catch {\n        const retries = this.retryCount.get(path) ?? 0;\n        if (retries < this.maxRetries) {\n          this.retryCount.set(path, retries + 1);\n          const delay = Math.min(1000 * Math.pow(2, retries), 30000);\n          setTimeout(() => { if (!this.uploadQueue.includes(path)) this.uploadQueue.push(path); this.processUploadQueue(); }, delay);\n        }\n      }\n    }\n    this.uploadInProgress = false;\n  }\n\n  private async uploadFile(path: string): Promise<void> {\n    await new Promise(r => setTimeout(r, 50));\n  }\n\n  getPendingChanges(): { path: string; type: string; mtime: number }[] {\n    return [...this.changeQueue];\n  }\n\n  getQueueLength(): number { return this.uploadQueue.length; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-lan-sync-discovery-and-version-history",
      children: "TypeScript: LAN Sync Discovery and Version History"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LANSync {\n  private peers = new Map<string, { ip: string; port: number; lastSeen: number; files: Set<string> }>();\n  private localFiles = new Set<string>();\n  private readonly discoveryPort = 23456;\n\n  advertise(localIp: string, localPort: number): void {\n    this.peers.set(\"self\", { ip: localIp, port: localPort, lastSeen: Date.now(), files: new Set(this.localFiles) });\n  }\n\n  discoverPeer(ip: string, port: number, files: string[]): void {\n    this.peers.set(`${ip}:${port}`, { ip, port, lastSeen: Date.now(), files: new Set(files) });\n  }\n\n  findPeersWithFile(filePath: string): { ip: string; port: number }[] {\n    const result: { ip: string; port: number }[] = [];\n    for (const [, peer] of this.peers) {\n      if (peer.files.has(filePath) && peer.ip !== \"self\") {\n        result.push({ ip: peer.ip, port: peer.port });\n      }\n    }\n    return result;\n  }\n\n  async transferBlock(peerIp: string, peerPort: number, blockHash: string): Promise<Buffer | null> {\n    const peer = this.peers.get(`${peerIp}:${peerPort}`);\n    if (!peer || Date.now() - peer.lastSeen > 60000) return null;\n    await new Promise(r => setTimeout(r, 10));\n    return Buffer.from(`block-data-${blockHash}`);\n  }\n\n  getPeerCount(): number { return this.peers.size - 1; }\n}\n\nclass VersionHistory {\n  private versions = new Map<string, { version: number; ts: number; size: number; blocks: string[]; changeDescription: string }[]>();\n  private readonly maxVersions = 100;\n\n  recordVersion(path: string, size: number, blocks: string[], description: string): number {\n    if (!this.versions.has(path)) this.versions.set(path, []);\n    const history = this.versions.get(path)!;\n    const version = history.length + 1;\n    history.push({ version, ts: Date.now(), size, blocks, changeDescription: description });\n    if (history.length > this.maxVersions) history.shift();\n    return version;\n  }\n\n  getHistory(path: string, limit = 10): { version: number; ts: number; size: number; changeDescription: string }[] {\n    return (this.versions.get(path) ?? []).slice(-limit).map(({ version, ts, size, changeDescription }) => ({ version, ts, size, changeDescription }));\n  }\n\n  restoreVersion(path: string, version: number): string[] | null {\n    const history = this.versions.get(path);\n    if (!history) return null;\n    const entry = history.find(h => h.version === version);\n    return entry?.blocks ?? null;\n  }\n\n  diffVersions(path: string, v1: number, v2: number): { added: number; removed: number; unchanged: number } {\n    const history = this.versions.get(path);\n    if (!history) return { added: 0, removed: 0, unchanged: 0 };\n    const e1 = history.find(h => h.version === v1);\n    const e2 = history.find(h => h.version === v2);\n    if (!e1 || !e2) return { added: 0, removed: 0, unchanged: 0 };\n    const s1 = new Set(e1.blocks);\n    const s2 = new Set(e2.blocks);\n    const added = [...s2].filter(b => !s1.has(b)).length;\n    const removed = [...s1].filter(b => !s2.has(b)).length;\n    const unchanged = [...s1].filter(b => s2.has(b)).length;\n    return { added, removed, unchanged };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    classDef client fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef sync fill:#fff3e0,stroke:#f57c00,stroke-width:2px\n    classDef store fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n    classDef network fill:#fce4ec,stroke:#c62828,stroke-width:2px\n    classDef ms fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n\n    subgraph \"Client Device A\"\n        FW[File Watcher<br/>inotify/RDCW/FSEvents]:::client\n        INDEX[Indexing Engine<br/>SQLite DB]:::client\n        CDC[Content-Defined<br/>Chunking Rabin FP]:::client\n        SYNC[Sync Engine<br/>State Machine]:::sync\n        CR[Conflict Resolver<br/>Last-Writer-Wins]:::sync\n    end\n\n    subgraph \"Network\"\n        TLS[TLS/HTTPS<br/>Persistent Connection]:::network\n        LAN[LAN Sync<br/>P2P Discovery]:::network\n        RANGE[HTTP Range<br/>Resumable Download]:::network\n    end\n\n    subgraph \"Server API\"\n        API[Sync API<br/>REST Endpoints]:::sync\n        MS[(Metadata Store<br/>Sharded MySQL)]:::ms\n        NOTIF[Notification Service<br/>WebSocket Push]:::sync\n    end\n\n    subgraph \"Block Storage\"\n        DEDUP[Deduplication<br/>SHA-256 Hash Ref]:::store\n        COMP[Compression<br/>RLE + Zstandard]:::store\n        ENC[Client-Side<br/>AES-256 Encryption]:::store\n        EC[Erasure Coding<br/>Reed-Solomon 12,8]:::store\n    end\n\n    subgraph \"Magic Pocket\"\n        HAMR[HAMR Failure<br/>Domain Placement]:::store\n        GEO[Geo Replication<br/>2 Regions]:::store\n        GC[Garbage Collector<br/>Ref Count Deletion]:::store\n    end\n\n    subgraph \"Collaboration\"\n        DP[Dropbox Paper<br/>CRDT-based Docs]:::ms\n        SH[Sharing Service<br/>Permission Mgmt]:::ms\n        VH[Version History<br/>30-180 Day Retention]:::ms\n    end\n\n    FW --> INDEX\n    INDEX --> CDC\n    CDC --> SYNC\n    SYNC --> CR\n    SYNC --> TLS\n    SYNC --> LAN\n    TLS --> API\n    API --> MS\n    API --> DEDUP\n    DEDUP --> COMP\n    COMP --> ENC\n    ENC --> EC\n    EC --> HAMR\n    HAMR --> GEO\n    GEO --> GC\n    API --> NOTIF\n    NOTIF --> DP\n    API --> SH\n    API --> VH\n    LAN --> DEDUP\n    RANGE --> API\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Content-defined chunking with Rabin fingerprinting enables efficient delta sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block boundaries determined by content hash modulo target value; average block size ~4MB; only changed blocks uploaded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256 block-level deduplication achieves 10:1 to 50:1 storage savings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store each unique block once with reference counting; file = ordered list of block hashes; cross-user and cross-version dedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-state sync engine (local, remote, desired) reconciles file differences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect local changes via indexing engine; fetch remote changes via API; compute diff and apply upload/download/conflict actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conflict resolution uses last-writer-wins with conflict copy preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server timestamps with NTP sync; concurrent edits create \"conflicted copy\" files; version history enables recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Erasure coding (12,8) provides better durability than 3x replication at 50% overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split data into 8 fragments + 4 parity; any 8 of 12 reconstructs; HAMR models failure domains explicitly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAN sync enables P2P block transfer between devices on same subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server coordinates peer discovery; UPnP/STUN for NAT traversal; blocks transfer at LAN speed without internet round-trip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Sync with platform-specific APIs reduces local storage by 90%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "macOS: NSFileProviderManager; Windows: CfApi; online-only files hydrate on demand when opened"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-large-file-sync-with-delta-optimization",
      children: "Case Study: Large File Sync with Delta Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A video editor is working on a 50GB 4K video project stored in Dropbox. The editor makes a 200MB change — adding a 30-second title sequence at the beginning of the video. Under a naive sync strategy, the entire 50GB file would be re-uploaded. With Dropbox's content-defined chunking, only the blocks whose content changed are uploaded."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The file is split into ~12,500 blocks of 4MB average size using Rabin fingerprinting. When the title sequence is inserted at the beginning, the CDC algorithm detects that the block boundaries shift only for the first ~50 blocks (the region where content actually changed). The remaining 12,450 blocks have identical SHA-256 hashes and are skipped. The upload is 50 blocks × 4MB = 200MB instead of 50GB — a 250x bandwidth savings."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sync engine on the server side receives the 50 new blocks. The deduplication engine checks each block's SHA-256 against the global block store. Two of the blocks already exist (the title sequence template was used by another editor on the same team), so only 48 blocks require new storage allocation. The file's block list is updated atomically in the metadata store: the old block list (12,500 entries) is replaced with the new list (12,500 entries, of which 50 are different). The metadata store shard for this user records the write with a version number increment. Meanwhile, the version history service records the delta: change from version 3 to version 4, 200MB changed, with the description \"Added title sequence.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The editor's second device (a laptop) receives the sync notification via the WebSocket push channel within 2 seconds. The sync engine on the laptop computes the delta: the remote block list differs from local in 50 blocks. Only those 50 blocks are downloaded (200MB) instead of the entire 50GB file. The local file is reconstructed by replacing the old 50 blocks with the new ones. Total sync time: 8 seconds on a 200Mbps connection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-conflict-resolution-in-team-collaboration",
      children: "Case Study: Conflict Resolution in Team Collaboration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three team members edit a shared spreadsheet simultaneously:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice edits rows 1-50 on her desktop (online)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob edits rows 51-100 on his laptop (offline for 2 hours)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Charlie renames the file from \"Q4-Budget.xlsx\" to \"Q4-Budget-Final.xlsx\" on his phone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice's changes sync to the server immediately. Bob comes online 2 hours later. His edits were made to rows 51-100, which do not overlap with Alice's rows 1-50 changes. The sync engine detects that Bob's file has a different block list than the server version. The delta comparison shows that blocks 2-5 (containing rows 51-100) differ, while blocks 1 and 6+ are identical. The server accepts Bob's blocks 2-5 as the new canonical version since Bob's mtime is later than Alice's for those blocks. The merge is automatic — no conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Charlie's rename creates a conflict: both Alice and Bob's clients see the file as \"Q4-Budget.xlsx\" (the original name), but the server received Charlie's rename to \"Q4-Budget-Final.xlsx\" while Bob's changes were being processed. The server detects the conflict because the parent directory entry was modified (rename) simultaneously with the file content. The conflict resolution creates a conflict copy: the renamed file \"Q4-Budget-Final.xlsx\" contains the latest content (Alice + Bob's merged changes), and the stale version is saved as \"Q4-Budget.xlsx (Charlie's conflicted copy 2024-10-15).\" The version history records all three changes as separate entries, allowing any collaborator to restore any previous version within the 30-day (free) or 180-day (paid) retention window."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dropbox's sync engine uses a three-state state machine (local, remote, desired) to reconcile file differences across devices, communicating with the server via HTTPS with persistent connections and exponential backoff."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content-defined chunking with Rabin fingerprinting determines block boundaries based on content, ensuring stable boundaries across file edits and enabling efficient delta sync."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block-level sync uploads only changed 4MB blocks instead of entire files, dramatically reducing bandwidth for large file modifications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA-256 hash-based deduplication at the block level means identical content across users or files is stored once, achieving estimated deduplication ratios of 10:1 to 50:1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The metadata store uses sharded MySQL with user ID hashing, serving read traffic from replicas and write traffic to masters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Magic Pocket replaced Amazon S3 with commodity hardware and Reed-Solomon erasure coding (12,8 configuration), saving hundreds of millions of dollars while providing equivalent durability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LAN sync enables peer-to-peer block transfer between devices on the same local network, improving sync speed and reducing server bandwidth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflict resolution uses last-writer-wins with timestamp-based conflict detection, saved to conflict copies, with version history for recovery ranging from 30 days (free) to unlimited (enterprise)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. **Fixed-size block boundaries** shift when bytes are inserted or deleted (every subsequent block changes). **CDC** uses Rabin fingerprinting on a sliding window — block boundaries are determined by content hash modulo target value, so insertions/deletions only affect local boundaries. Essential for delta sync: editing a 1GB file near the beginning only changes 1-2 blocks instead of all blocks after the edit point.\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Local vs Remote"
            }), ": if local changed but remote didn't → upload. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local vs Desired"
            }), ": if desired state is remote version → download. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remote vs Desired"
            }), ": if desired is local version → upload. The engine continuously reconciles toward convergence."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-after-write"
            }), " within a user namespace is handled by routing reads to the MySQL master for N seconds after a write by the same user. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-region"
            }), ": eventual consistency with async replication; version vectors detect staleness."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "(12,8) erasure coding"
            }), ": 50% overhead (12/8 = 1.5x), tolerates 4 failures. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3x replication"
            }), ": 200% overhead (3x), tolerates 2 failures. Erasure coding wins on storage efficiency but has higher read latency (need 8 of 12 fragments) vs replication (read from any replica)."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "LAN sync protocol"
            }), ": (1) Clients report private IPs to server. (2) Server detects same subnet. (3) Server shares peer IPs. (4) Clients establish direct TCP via UPnP/STUN. (5) Blocks transfer P2P. Security: TLS between peers, server-signed tokens prevent eavesdropping."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Selective sync"
            }), ": choose which folders to sync to which device (stored as per-device filter list in metadata store). ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart Sync"
            }), ": all files visible in filesystem as placeholders; content downloads on demand. APIs: macOS NSFileProviderManager, Windows CfApi, Linux not supported."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. **Deduplication Analysis**: Without dedup: 10,000 × 2GB = 20TB. With dedup: 500MB (OS) + 200MB × 5 (departments) + 1.3GB × 10,000 (per-user) = 500MB + 1GB + 13TB ≈ 13.0015TB. Dedup ratio: 20TB / 13TB ≈ 1.54:1. Savings: 7TB × $0.023/GB = $161/month × 12 = $1,932/year.\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict Resolution"
            }), ": Use a page-level bitmap (100 bits for 100 pages) to track edited pages per editor. Non-overlapping bits → auto-merge. Overlapping bits → flag for manual review with diff view. Data structure: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<page_number, { editor_id, old_text, new_text, timestamp }>"
            }), ". For paragraph move + edit: detect via content hash — same text in different position is a move, not a conflict. Rename conflict: use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(file_id, new_name, editor_id, timestamp)"
            }), " with LWW."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Bandwidth Optimization"
            }), ": Priority score = 0.4 × recency (days since modified) + 0.3 × file_size_score + 0.2 × access_frequency + 0.1 × is_placeholder. On user open: immediately promote to priority queue head. Bandwidth: fair-share across 4 concurrent downloads with dynamic throttling based on measured throughput (target: 80% of measured bandwidth). WiFi: 4 concurrent. Cellular: 1 concurrent, only files < 50MB. Metered: pause non-critical sync, notify user."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Capacity Planning"
            }), ": (a) Raw capacity per server: 12 × 12TB × 70% = 100.8TB. Servers/year: 500PB / 100.8TB ≈ 4,961. (b) Racks: 4,961 / 40 ≈ 125. (c) Power: 4,961 × (200 × 0.2 + 350 × 0.8) = 4,961 × 320W = 1.59MW. Annual: 1.59MW × 8760h = 13.9M kWh. (d) (12,8) = 1.5x usable-to-raw vs 3x replication = 3x. (e) Floor space: 125 × 8 = 1,000 sq ft."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Solution>\n**Exabyte-Scale Storage**\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Placement"
          }), ": Three-tier — Hot (daily access): home region, 2x replication. Warm (weekly): primary in home + secondary in paired region (US-East ↔ EU-West, SE-Asia ↔ NE-Asia, South America ↔ Australia). Cold (rare): erasure coding (12,8) spanning 3 regions. Promotion: 3 accesses in 24h → cold→warm. 10 accesses in 24h → warm→hot. Demotion: 7 days no access → hot→warm. 30 days no access → warm→cold."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metadata Consistency"
          }), ": Geographic partitioning with authoritative region per user. Reads from local replica; if version vector shows stale, forward to authoritative region. Writes go through authoritative region with async replication. Failure: Paxos-based election among 8 regions when authoritative region unreachable (RTO < 30s). Use Raft for leader election within a region."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cross-Region Sharing"
          }), ": Sharing updates only metadata (no block copy). Redirect on access via signed URL (1h TTL). Cache: if >5 accesses/week, async replicate blocks to requestor's region. Consistency: share permissions propagate within 1s via metadata replication."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage"
          }), ": Raw: 50EB user data. Cold tier (80% = 40EB): 40EB × 2.25 = 90EB. Warm/hot (20% = 10EB): 10EB × 4 = 40EB. Total: 130EB raw. Servers: 130EB / 100TB = 1.3M. Racks: 32,500. Power: 1.3M × 300W = 390MW."]
        }), "\n"]
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