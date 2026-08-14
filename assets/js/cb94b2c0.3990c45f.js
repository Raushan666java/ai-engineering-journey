"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9962],{

/***/ 12470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_03_nio_networking_md_cb9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-03-nio-networking-md-cb9.json
const site_docs_courses_java_03_nio_networking_md_cb9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/03-nio-networking","title":"Java NIO & Networking","description":"Previous Java Modules & Packaging","source":"@site/docs/courses/java/03-nio-networking.md","sourceDirName":"courses/java","slug":"/java/03-nio-networking","permalink":"/ai-engineering-journey/java/03-nio-networking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-nio-networking","slug":"/java/03-nio-networking","title":"Java NIO & Networking","sidebar_label":"Java NIO & Networking","sidebar_position":3},"sidebar":"course-java","previous":{"title":"Multithreading & Concurrency","permalink":"/ai-engineering-journey/java/02-concurrency"},"next":{"title":"Java Modules (JPMS) & Packaging","permalink":"/ai-engineering-journey/java/04-jpms-packaging"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/03-nio-networking.md


const frontMatter = {
	id: '03-nio-networking',
	slug: '/java/03-nio-networking',
	title: 'Java NIO & Networking',
	sidebar_label: 'Java NIO & Networking',
	sidebar_position: 3
};
const contentTitle = 'Java NIO & Networking';

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
  "value": "1. NIO Overview",
  "id": "1-nio-overview",
  "level": 2
}, {
  "value": "1.1 NIO vs. Traditional I/O",
  "id": "11-nio-vs-traditional-io",
  "level": 3
}, {
  "value": "1.2 Core Abstractions",
  "id": "12-core-abstractions",
  "level": 3
}, {
  "value": "2. Buffers",
  "id": "2-buffers",
  "level": 2
}, {
  "value": "2.1 Buffer Types",
  "id": "21-buffer-types",
  "level": 3
}, {
  "value": "2.2 Buffer Properties",
  "id": "22-buffer-properties",
  "level": 3
}, {
  "value": "2.3 Essential Buffer Operations",
  "id": "23-essential-buffer-operations",
  "level": 3
}, {
  "value": "2.4 Direct vs. Heap Buffers",
  "id": "24-direct-vs-heap-buffers",
  "level": 3
}, {
  "value": "2.5 Byte Order (Endianness)",
  "id": "25-byte-order-endianness",
  "level": 3
}, {
  "value": "3. Channels",
  "id": "3-channels",
  "level": 2
}, {
  "value": "3.1 Channel Hierarchy",
  "id": "31-channel-hierarchy",
  "level": 3
}, {
  "value": "3.2 FileChannel",
  "id": "32-filechannel",
  "level": 3
}, {
  "value": "Position, Size, Truncate, Force",
  "id": "position-size-truncate-force",
  "level": 4
}, {
  "value": "TransferTo and TransferFrom (Zero-Copy)",
  "id": "transferto-and-transferfrom-zero-copy",
  "level": 4
}, {
  "value": "FileLock",
  "id": "filelock",
  "level": 4
}, {
  "value": "Memory-Mapped Files (MappedByteBuffer)",
  "id": "memory-mapped-files-mappedbytebuffer",
  "level": 4
}, {
  "value": "3.3 Scatter/Gather I/O",
  "id": "33-scattergather-io",
  "level": 3
}, {
  "value": "4. Selectors",
  "id": "4-selectors",
  "level": 2
}, {
  "value": "4.1 SelectionKey Operations",
  "id": "41-selectionkey-operations",
  "level": 3
}, {
  "value": "4.2 select(), selectNow(), select(timeout), wakeup()",
  "id": "42-select-selectnow-selecttimeout-wakeup",
  "level": 3
}, {
  "value": "4.3 Client for the Non-Blocking Echo Server",
  "id": "43-client-for-the-non-blocking-echo-server",
  "level": 3
}, {
  "value": "5. TCP Networking",
  "id": "5-tcp-networking",
  "level": 2
}, {
  "value": "5.1 SocketChannel and ServerSocketChannel",
  "id": "51-socketchannel-and-serversocketchannel",
  "level": 3
}, {
  "value": "5.2 Non-Blocking Connection with finishConnect()",
  "id": "52-non-blocking-connection-with-finishconnect",
  "level": 3
}, {
  "value": "6. UDP Networking",
  "id": "6-udp-networking",
  "level": 2
}, {
  "value": "6.1 Basic UDP Send/Receive",
  "id": "61-basic-udp-sendreceive",
  "level": 3
}, {
  "value": "6.2 UDP Multicast",
  "id": "62-udp-multicast",
  "level": 3
}, {
  "value": "7. Java HTTP Client (Java 11+)",
  "id": "7-java-http-client-java-11",
  "level": 2
}, {
  "value": "7.1 Synchronous GET",
  "id": "71-synchronous-get",
  "level": 3
}, {
  "value": "7.2 Asynchronous GET",
  "id": "72-asynchronous-get",
  "level": 3
}, {
  "value": "7.3 POST, PUT, DELETE",
  "id": "73-post-put-delete",
  "level": 3
}, {
  "value": "7.4 Custom Headers and Body Publishers",
  "id": "74-custom-headers-and-body-publishers",
  "level": 3
}, {
  "value": "7.5 WebSocket Support",
  "id": "75-websocket-support",
  "level": 3
}, {
  "value": "8. Asynchronous NIO",
  "id": "8-asynchronous-nio",
  "level": 2
}, {
  "value": "8.1 AsynchronousFileChannel",
  "id": "81-asynchronousfilechannel",
  "level": 3
}, {
  "value": "8.2 AsynchronousSocketChannel",
  "id": "82-asynchronoussocketchannel",
  "level": 3
}, {
  "value": "8.3 Async Client",
  "id": "83-async-client",
  "level": 3
}, {
  "value": "9. NIO.2 File Operations",
  "id": "9-nio2-file-operations",
  "level": 2
}, {
  "value": "9.1 Path and Files Basics",
  "id": "91-path-and-files-basics",
  "level": 3
}, {
  "value": "9.2 Directory Walking with Files.walk, Files.find, Files.list",
  "id": "92-directory-walking-with-fileswalk-filesfind-fileslist",
  "level": 3
}, {
  "value": "9.3 FileVisitor and walkFileTree",
  "id": "93-filevisitor-and-walkfiletree",
  "level": 3
}, {
  "value": "9.4 WatchService (File System Change Monitoring)",
  "id": "94-watchservice-file-system-change-monitoring",
  "level": 3
}, {
  "value": "10. NIO.2 File Attributes",
  "id": "10-nio2-file-attributes",
  "level": 2
}, {
  "value": "10.1 BasicFileAttributes",
  "id": "101-basicfileattributes",
  "level": 3
}, {
  "value": "10.2 PosixFileAttributes",
  "id": "102-posixfileattributes",
  "level": 3
}, {
  "value": "10.3 DosFileAttributes",
  "id": "103-dosfileattributes",
  "level": 3
}, {
  "value": "10.4 UserDefinedFileAttributeView",
  "id": "104-userdefinedfileattributeview",
  "level": 3
}, {
  "value": "10.5 Reading Attributes by Name",
  "id": "105-reading-attributes-by-name",
  "level": 3
}, {
  "value": "11. Performance Considerations",
  "id": "11-performance-considerations",
  "level": 2
}, {
  "value": "11.1 Buffer Size Tuning",
  "id": "111-buffer-size-tuning",
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
  "value": "Exercise 1: FileChannel Copy",
  "id": "exercise-1-filechannel-copy",
  "level": 3
}, {
  "value": "Exercise 2: Non-Blocking Chat Server",
  "id": "exercise-2-non-blocking-chat-server",
  "level": 3
}, {
  "value": "Exercise 3: HTTP Client with JSON Processing",
  "id": "exercise-3-http-client-with-json-processing",
  "level": 3
}, {
  "value": "Exercise 4: Memory-Mapped File Comparator",
  "id": "exercise-4-memory-mapped-file-comparator",
  "level": 3
}, {
  "value": "Exercise 5: Directory Tree Size Analyzer",
  "id": "exercise-5-directory-tree-size-analyzer",
  "level": 3
}, {
  "value": "Exercise 6: UDP Ping/Pong",
  "id": "exercise-6-udp-pingpong",
  "level": 3
}, {
  "value": "Exercise 7: File Change Monitor",
  "id": "exercise-7-file-change-monitor",
  "level": 3
}, {
  "value": "Exercise 8: Async File Copy",
  "id": "exercise-8-async-file-copy",
  "level": 3
}, {
  "value": "Exercise 9: Custom File Attributes",
  "id": "exercise-9-custom-file-attributes",
  "level": 3
}, {
  "value": "Exercise 10: Scatter/Gather Protocol Parser",
  "id": "exercise-10-scattergather-protocol-parser",
  "level": 3
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
        id: "java-nio--networking",
        children: "Java NIO & Networking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/02-concurrency",
          children: "Multithreading & Concurrency"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/04-jpms-packaging",
          children: "Java Modules & Packaging"
        })]
      }), "\n"]
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
        href: "../../assets/images/lessons/java/03-nio-networking/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/03-nio-networking/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/03-nio-networking/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/03-nio-networking/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/03-nio-networking/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/03-nio-networking/visual-explanation.png",
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
        children: "Explain the Java NIO architecture and contrast it with traditional blocking I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use buffers and channels for efficient data transfer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileChannel"
        }), " for advanced file operations including zero-copy transfers and memory-mapped files"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement scatter/gather I/O patterns"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build non-blocking TCP and UDP network servers using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Selector"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use UDP for connectionless communication and multicast"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Send HTTP requests and handle responses with the Java 11+ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpClient"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write asynchronous NIO code using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletionHandler"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Future"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate the filesystem and monitor directory changes with NIO.2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and write file attributes using the NIO.2 attribute views"
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
            children: "NIO Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer + Channel + Selector model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking I/O without thread-per-connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct vs heap buffers, ByteBuffer API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct buffers avoid copying for I/O operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileChannel, SocketChannel, ServerSocketChannel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileChannel supports zero-copy transferTo/transferFrom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single thread monitors multiple channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven networking without thread-per-connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java HTTP Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive-style HTTP/1.1 and HTTP/2 client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in, supports async send with CompletableFuture"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[NIO Overview] --> B[Buffers]\n    B --> C[Channels]\n    C --> D[Selectors]\n    D --> E[TCP Networking]\n    E --> F[UDP Networking]\n    F --> G[Java HTTP Client]\n    G --> H[Async NIO]\n    H --> I[NIO.2 Files]\n    I --> J[Performance]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For most web applications, the Java HTTP Client (Java 11+) is sufficient. Drop down to raw NIO with Selectors only when you need custom protocol handling or maximum control over I/O multiplexing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-nio-overview",
      children: "1. NIO Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/03-nio-networking.png",
        alt: "Java NIO Architecture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java NIO (New I/O, introduced in Java 1.4 and enhanced in Java 7 as NIO.2) provides a different approach to I/O compared to the traditional ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.io"
      }), " stream-based model. NIO is buffer-oriented, channel-based, and supports non-blocking operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-nio-vs-traditional-io",
      children: "1.1 NIO vs. Traditional I/O"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O (java.io)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NIO (java.nio)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream-oriented (one byte at a time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer-oriented (blocks of data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both blocking and non-blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexed I/O with Selector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (especially with direct buffers)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-core-abstractions",
      children: "1.2 Core Abstractions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NIO is built on three core abstractions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffers"
        }), " → containers for data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Channels"
        }), " → connections to I/O sources/sinks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selectors"
        }), " → multiplexers for non-blocking channels"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-buffers",
      children: "2. Buffers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A buffer is a fixed-capacity container for a specific primitive type. All buffers share a common set of properties and methods defined in the abstract ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Buffer"
      }), " class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-buffer-types",
      children: "2.1 Buffer Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each primitive type (except ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boolean"
      }), ") has a corresponding buffer:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.nio.*;\n\n/**\n * Demonstrates all buffer types available in java.nio.\n */\npublic class BufferTypes {\n\n    public static void main(String[] args) {\n        // Each buffer type wraps an array of the corresponding primitive\n        ByteBuffer byteBuf = ByteBuffer.allocate(64);\n        CharBuffer charBuf = CharBuffer.allocate(64);\n        ShortBuffer shortBuf = ShortBuffer.allocate(64);\n        IntBuffer intBuf = IntBuffer.allocate(64);\n        LongBuffer longBuf = LongBuffer.allocate(64);\n        FloatBuffer floatBuf = FloatBuffer.allocate(64);\n        DoubleBuffer doubleBuf = DoubleBuffer.allocate(64);\n\n        System.out.println(\"ByteBuffer:   \" + byteBuf);\n        System.out.println(\"CharBuffer:   \" + charBuf);\n        System.out.println(\"ShortBuffer:  \" + shortBuf);\n        System.out.println(\"IntBuffer:    \" + intBuf);\n        System.out.println(\"LongBuffer:   \" + longBuf);\n        System.out.println(\"FloatBuffer:  \" + floatBuf);\n        System.out.println(\"DoubleBuffer: \" + doubleBuf);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-buffer-properties",
      children: "2.2 Buffer Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every buffer tracks four key properties:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     0 <= mark <= position <= limit <= capacity\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "capacity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum number of elements the buffer can hold (fixed at creation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index of the next element to read or write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index of the first element that should not be read/written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mark"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A remembered position (for later ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reset()"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.nio.ByteBuffer;\n\n/**\n * Visualizes buffer position/limit/capacity after each operation.\n */\npublic class BufferProperties {\n\n    public static void print(ByteBuffer buf, String label) {\n        System.out.printf(\"%-20s position=%d limit=%d capacity=%d%n\",\n            label, buf.position(), buf.limit(), buf.capacity());\n    }\n\n    public static void main(String[] args) {\n        ByteBuffer buf = ByteBuffer.allocate(16);\n        print(buf, \"after allocate\");\n\n        buf.put((byte) 1);\n        buf.put((byte) 2);\n        buf.put((byte) 3);\n        print(buf, \"after put(3 bytes)\");\n\n        buf.flip();\n        print(buf, \"after flip\");\n\n        buf.get();\n        print(buf, \"after get(1)\");\n\n        buf.compact();\n        print(buf, \"after compact\");\n\n        buf.rewind();\n        print(buf, \"after rewind\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-essential-buffer-operations",
      children: "2.3 Essential Buffer Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.nio.ByteBuffer;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates all essential Buffer operations.\n */\npublic class BufferOperations {\n\n    public static void main(String[] args) {\n        // --- allocate ---\n        ByteBuffer buf = ByteBuffer.allocate(32);\n        System.out.println(\"Allocated: \" + buf);\n\n        // --- put ---\n        buf.put((byte) 0x41);                         // 'A'\n        buf.put(new byte[]{0x42, 0x43, 0x44});        // 'B', 'C', 'D'\n        String hello = \"Hello\";\n        buf.put(hello.getBytes(StandardCharsets.UTF_8));\n        System.out.println(\"After puts: \" + buf);\n\n        // --- flip ---\n        buf.flip();\n        System.out.println(\"After flip: \" + buf);\n\n        // --- absolute get (does not advance position) ---\n        byte b = buf.get(0);\n        System.out.println(\"Byte at index 0: 0x\" + Integer.toHexString(b & 0xFF));\n\n        // --- relative get (advances position) ---\n        byte first = buf.get();\n        byte second = buf.get();\n        System.out.printf(\"First two bytes: 0x%02X 0x%02X%n\", first, second);\n\n        // --- bulk get ---\n        buf.rewind();\n        byte[] dest = new byte[Math.min(buf.remaining(), 8)];\n        buf.get(dest);\n        System.out.println(\"Bulk read: \" + new String(dest, StandardCharsets.UTF_8));\n\n        // --- mark and reset ---\n        buf.rewind();\n        buf.position(2);\n        buf.mark();\n        buf.position(6);\n        System.out.println(\"Before reset: position=\" + buf.position());\n        buf.reset();\n        System.out.println(\"After reset:  position=\" + buf.position());\n\n        // --- rewind ---\n        buf.rewind();\n        System.out.println(\"After rewind: position=\" + buf.position());\n\n        // --- compact ---\n        buf.position(4);\n        buf.limit(10);\n        ByteBuffer compacted = buf.compact();\n        System.out.println(\"After compact: \" + compacted);\n\n        // --- clear ---\n        buf.clear();\n        System.out.println(\"After clear: \" + buf);\n\n        // --- wrap ---\n        byte[] array = {1, 2, 3, 4, 5};\n        ByteBuffer wrapped = ByteBuffer.wrap(array);\n        System.out.println(\"Wrapped: \" + wrapped);\n\n        // --- slice ---\n        ByteBuffer original = ByteBuffer.allocate(10);\n        for (int i = 0; i < 10; i++) original.put((byte) i);\n        original.position(3).limit(7);\n        ByteBuffer slice = original.slice();\n        System.out.println(\"Slice: position=\" + slice.position()\n            + \" capacity=\" + slice.capacity());\n        // Modifying the slice affects the original\n        slice.put(0, (byte) 99);\n        System.out.println(\"Original[3] after slice modification: \"\n            + original.get(3));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-direct-vs-heap-buffers",
      children: "2.4 Direct vs. Heap Buffers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap buffers"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ByteBuffer.allocate(cap)"
        }), ") → allocated on the JVM heap, subject to GC, may involve an extra copy during I/O operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Direct buffers"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ByteBuffer.allocateDirect(cap)"
        }), ") → allocated outside the JVM heap, used directly by native I/O operations, avoiding intermediate copies. Allocation and deallocation are more expensive, so they should be reused."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\n\n/**\n * Compares throughput of direct vs. heap buffers for file I/O.\n */\npublic class DirectVsHeap {\n\n    static final int SIZE = 10 * 1024 * 1024;  // 10 MB\n    static final int ITERATIONS = 3;\n\n    public static void main(String[] args) throws Exception {\n        Path tempFile = Files.createTempFile(\"nio-bench\", \".dat\");\n        try {\n\n            // Warm up\n            measure(\"Heap buffer\", tempFile, false);\n            measure(\"Direct buffer\", tempFile, true);\n\n        } finally {\n            Files.deleteIfExists(tempFile);\n        }\n    }\n\n    static void measure(String label, Path file, boolean direct) throws Exception {\n        long totalTime = 0;\n\n        for (int i = 0; i < ITERATIONS; i++) {\n            ByteBuffer buf = direct\n                ? ByteBuffer.allocateDirect(SIZE)\n                : ByteBuffer.allocate(SIZE);\n\n            long start = System.nanoTime();\n\n            try (FileChannel ch = FileChannel.open(file,\n                    StandardOpenOption.CREATE, StandardOpenOption.WRITE,\n                    StandardOpenOption.READ)) {\n                // Write\n                buf.position(0).limit(SIZE);\n                ch.write(buf);\n                ch.position(0);\n\n                // Read\n                buf.clear();\n                ch.read(buf);\n            }\n\n            long elapsed = System.nanoTime() - start;\n            totalTime += elapsed;\n        }\n\n        long avgMs = totalTime / ITERATIONS / 1_000_000;\n        System.out.printf(\"%-20s avg: %d ms%n\", label, avgMs);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-byte-order-endianness",
      children: "2.5 Byte Order (Endianness)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.nio.ByteBuffer;\nimport java.nio.ByteOrder;\n\n/**\n * Demonstrates little-endian and big-endian buffer access.\n */\npublic class ByteOrderDemo {\n\n    public static void main(String[] args) {\n        ByteBuffer buf = ByteBuffer.allocate(8);\n        buf.order(ByteOrder.BIG_ENDIAN);\n        buf.putInt(0x12345678);\n        buf.flip();\n\n        System.out.printf(\"Big-endian:  0x%08X%n\", buf.getInt());\n\n        buf.clear();\n        buf.order(ByteOrder.LITTLE_ENDIAN);\n        buf.putInt(0x12345678);\n        buf.flip();\n\n        System.out.printf(\"Little-endian: 0x%08X%n\", buf.getInt());\n\n        // View buffers with different order\n        buf.clear();\n        buf.order(ByteOrder.BIG_ENDIAN);\n        buf.putInt(0xDEADBEEF);\n\n        buf.rewind();\n        ByteOrder nativeOrder = ByteOrder.nativeOrder();\n        System.out.println(\"Native byte order: \" + nativeOrder);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-channels",
      children: "3. Channels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Channel"
      }), " represents an open connection to an I/O source or sink. Channels are thread-safe and can operate in blocking or non-blocking mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-channel-hierarchy",
      children: "3.1 Channel Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Channel (interface)\n├── ReadableByteChannel\n│   └── ScatteringByteChannel\n├── WritableByteChannel\n│   └── GatheringByteChannel\n├── InterruptibleChannel\n├── FileChannel\n├── SocketChannel\n├── ServerSocketChannel\n└── DatagramChannel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-filechannel",
      children: "3.2 FileChannel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FileChannel"
      }), " provides file read/write, position management, locking, and memory-mapped I/O."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\n/**\n * Basic FileChannel read/write demonstration.\n */\npublic class FileChannelBasic {\n\n    public static void main(String[] args) throws IOException {\n        Path path = Files.createTempFile(\"fc-basic\", \".txt\");\n\n        // --- Writing with FileChannel ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"rw\");\n             FileChannel channel = file.getChannel()) {\n\n            String data = \"Hello, NIO FileChannel!\\n\";\n            ByteBuffer buf = ByteBuffer.wrap(data.getBytes(StandardCharsets.UTF_8));\n            int bytesWritten = channel.write(buf);\n            System.out.println(\"Wrote \" + bytesWritten + \" bytes\");\n        }\n\n        // --- Reading with FileChannel ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"r\");\n             FileChannel channel = file.getChannel()) {\n\n            ByteBuffer buf = ByteBuffer.allocate(128);\n            int bytesRead = channel.read(buf);\n\n            buf.flip();\n            byte[] bytes = new byte[buf.remaining()];\n            buf.get(bytes);\n            System.out.println(\"Read: \" + new String(bytes, StandardCharsets.UTF_8));\n        }\n\n        Files.deleteIfExists(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "position-size-truncate-force",
      children: "Position, Size, Truncate, Force"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates position(), size(), truncate(), and force().\n */\npublic class FileChannelPosition {\n\n    public static void main(String[] args) throws Exception {\n        Path path = Files.createTempFile(\"fc-position\", \".dat\");\n\n        try (RandomAccessFile raf = new RandomAccessFile(path.toFile(), \"rw\");\n             FileChannel ch = raf.getChannel()) {\n\n            // Write some data\n            ch.write(ByteBuffer.wrap(\"ABCDEFGHIJKLMNOP\".getBytes(StandardCharsets.UTF_8)));\n            System.out.println(\"Size after write: \" + ch.size());          // 16\n            System.out.println(\"Position after write: \" + ch.position());  // 16\n\n            // Reposition\n            ch.position(5);\n            System.out.println(\"Position after ch.position(5): \" + ch.position());\n\n            // Read from new position\n            ByteBuffer buf = ByteBuffer.allocate(4);\n            ch.read(buf);\n            buf.flip();\n            byte[] b = new byte[buf.remaining()];\n            buf.get(b);\n            System.out.println(\"Read at position 5: \" + new String(b, StandardCharsets.UTF_8)); // \"FGHI\"\n\n            // Truncate\n            ch.truncate(8);\n            System.out.println(\"Size after truncate(8): \" + ch.size());\n\n            // Force (fsync) → flush to disk\n            ch.force(true);\n            System.out.println(\"Forced to disk\");\n\n            // Verify truncation\n            ch.position(0);\n            buf.clear();\n            ch.read(buf);\n            buf.flip();\n            byte[] rest = new byte[(int) ch.size()];\n            buf.get(rest);\n            System.out.println(\"After truncation: [\" + new String(rest, StandardCharsets.UTF_8) + \"]\");\n        }\n\n        Files.deleteIfExists(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "transferto-and-transferfrom-zero-copy",
      children: "TransferTo and TransferFrom (Zero-Copy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.RandomAccessFile;\nimport java.nio.channels.FileChannel;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates zero-copy transfers between channels.\n */\npublic class ZeroCopy {\n\n    public static void main(String[] args) throws Exception {\n        Path source = Files.createTempFile(\"zero-copy-src\", \".dat\");\n        Path dest = Files.createTempFile(\"zero-copy-dst\", \".dat\");\n\n        // Prepare source data\n        Files.writeString(source, \"This is the source data for zero-copy transfer!\");\n\n        try (RandomAccessFile srcFile = new RandomAccessFile(source.toFile(), \"r\");\n             FileChannel srcChannel = srcFile.getChannel();\n             RandomAccessFile dstFile = new RandomAccessFile(dest.toFile(), \"rw\");\n             FileChannel dstChannel = dstFile.getChannel()) {\n\n            // transferTo: from source to destination\n            long position = 0;\n            long count = srcChannel.size();\n            long transferred = srcChannel.transferTo(position, count, dstChannel);\n            System.out.println(\"transferTo transferred \" + transferred + \" bytes\");\n\n            // Verify\n            dstChannel.position(0);\n            ByteBuffer buf = ByteBuffer.allocate((int) dstChannel.size());\n            dstChannel.read(buf);\n            System.out.println(\"Destination: \" + new String(buf.array(), StandardCharsets.UTF_8));\n        }\n\n        // Also possible: transferFrom\n        try (RandomAccessFile srcFile = new RandomAccessFile(source.toFile(), \"r\");\n             FileChannel srcChannel = srcFile.getChannel();\n             RandomAccessFile dstFile = new RandomAccessFile(dest.toFile(), \"rw\");\n             FileChannel dstChannel = dstFile.getChannel()) {\n\n            dstChannel.position(0);\n            long transferred = dstChannel.transferFrom(srcChannel, 0, srcChannel.size());\n            System.out.println(\"transferFrom transferred \" + transferred + \" bytes\");\n        }\n\n        Files.deleteIfExists(source);\n        Files.deleteIfExists(dest);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "filelock",
      children: "FileLock"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.RandomAccessFile;\nimport java.nio.channels.FileChannel;\nimport java.nio.channels.FileLock;\n\n/**\n * Demonstrates file locking with FileChannel.\n */\npublic class FileLockDemo {\n\n    public static void main(String[] args) throws Exception {\n        Path path = Files.createTempFile(\"file-lock\", \".dat\");\n        Files.writeString(path, \"Lockable content\");\n\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"rw\");\n             FileChannel channel = file.getChannel()) {\n\n            // Exclusive lock on the entire file\n            try (FileLock lock = channel.lock()) {\n                System.out.println(\"Lock acquired: \" + lock);\n                System.out.println(\"Is shared: \" + lock.isShared());\n                System.out.println(\"Position: \" + lock.position());\n                System.out.println(\"Size: \" + lock.size());\n\n                // Write while locked\n                channel.position(channel.size());\n                channel.write(ByteBuffer.wrap(\"Appended under lock\".getBytes()));\n\n                // lock.release() is automatic via try-with-resources\n            }\n            System.out.println(\"Lock released\");\n\n            // Partial file lock (shared, region-based)\n            try (FileLock sharedLock = channel.lock(0, 10, true)) {\n                System.out.println(\"Shared lock on bytes 0-10: \" + sharedLock);\n\n                // Reading is allowed, writing from another thread would block\n            }\n        }\n\n        Files.deleteIfExists(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-mapped-files-mappedbytebuffer",
      children: "Memory-Mapped Files (MappedByteBuffer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.MappedByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.channels.FileChannel.MapMode;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates memory-mapped files using MappedByteBuffer.\n */\npublic class MemoryMappedFile {\n\n    public static void main(String[] args) throws Exception {\n        Path path = Files.createTempFile(\"mmap\", \".dat\");\n\n        // --- Create file and map for writing ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"rw\");\n             FileChannel channel = file.getChannel()) {\n\n            // Map a 1024-byte region for read/write\n            MappedByteBuffer mapped = channel.map(MapMode.READ_WRITE, 0, 1024);\n\n            // Write data through the mapped buffer\n            String message = \"Memory-mapped I/O is fast!\";\n            mapped.put(message.getBytes(StandardCharsets.UTF_8));\n            mapped.putInt(100, 0xCAFEBABE);\n            mapped.putDouble(200, 3.14159265358979);\n\n            // Force changes to disk\n            mapped.force();\n            System.out.println(\"Data written via memory map\");\n        }\n\n        // --- Read back using a separate mapping ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"r\");\n             FileChannel channel = file.getChannel()) {\n\n            MappedByteBuffer mapped = channel.map(MapMode.READ_ONLY, 0, 1024);\n\n            byte[] strBytes = new byte[message.length()];\n            mapped.get(strBytes);\n            System.out.println(\"String: \" + new String(strBytes, StandardCharsets.UTF_8));\n\n            int magic = mapped.getInt(100);\n            System.out.printf(\"Magic at 100: 0x%08X%n\", magic);\n\n            double pi = mapped.getDouble(200);\n            System.out.printf(\"Pi at 200: %.15f%n\", pi);\n\n            System.out.println(\"File size: \" + Files.size(path));\n        }\n\n        // --- MapMode.READ_WRITE (private → copy-on-write) ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"rw\");\n             FileChannel channel = file.getChannel()) {\n\n            MappedByteBuffer privateMap = channel.map(MapMode.PRIVATE, 0, 128);\n            privateMap.put(0, (byte) 'X');\n            // Original file unchanged (copy-on-write)\n            System.out.println(\"Private-mapped byte 0: \" + (char) privateMap.get(0));\n\n            // Verify original is not modified\n            MappedByteBuffer readOnly = channel.map(MapMode.READ_ONLY, 0, 128);\n            System.out.println(\"Original byte 0: \" + (char) readOnly.get(0));\n        }\n\n        Files.deleteIfExists(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-scattergather-io",
      children: "3.3 Scatter/Gather I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scatter/gather allows reading from a channel into multiple buffers (scatter) or writing from multiple buffers to a channel (gather). This is useful for fixed-length headers followed by variable-length payloads."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.channels.GatheringByteChannel;\nimport java.nio.channels.ScatteringByteChannel;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates scatter (read into multiple buffers) and gather\n * (write from multiple buffers) I/O operations.\n */\npublic class ScatterGather {\n\n    public static void main(String[] args) throws Exception {\n        Path path = Files.createTempFile(\"scatter-gather\", \".dat\");\n\n        // --- Gather: write from multiple buffers ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"rw\");\n             FileChannel channel = (FileChannel) file.getChannel()) {\n\n            ByteBuffer header = ByteBuffer.allocate(8);\n            ByteBuffer body = ByteBuffer.allocate(64);\n\n            // Prepare header (fixed-length: 8 bytes)\n            header.putInt(42);              // record type\n            header.putInt(128);             // body length\n            header.flip();\n\n            // Prepare body\n            body.put(\"This is the variable-length payload.\".getBytes(StandardCharsets.UTF_8));\n            body.flip();\n\n            // Gather write: writes header then body sequentially\n            ByteBuffer[] buffers = {header, body};\n            long bytesWritten = channel.write(buffers);\n            System.out.println(\"Gather wrote \" + bytesWritten + \" bytes\");\n        }\n\n        // --- Scatter: read into multiple buffers ---\n        try (RandomAccessFile file = new RandomAccessFile(path.toFile(), \"r\");\n             FileChannel channel = (FileChannel) file.getChannel()) {\n\n            ByteBuffer header = ByteBuffer.allocate(8);\n            ByteBuffer body = ByteBuffer.allocate(128);\n\n            ByteBuffer[] buffers = {header, body};\n            long bytesRead = channel.read(buffers);\n            System.out.println(\"Scatter read \" + bytesRead + \" bytes\");\n\n            header.flip();\n            int recordType = header.getInt();\n            int bodyLength = header.getInt();\n            System.out.println(\"Record type: \" + recordType);\n            System.out.println(\"Body length: \" + bodyLength);\n\n            body.flip();\n            byte[] bodyBytes = new byte[bodyLength];\n            body.get(bodyBytes);\n            System.out.println(\"Body: \" + new String(bodyBytes, StandardCharsets.UTF_8));\n        }\n\n        Files.deleteIfExists(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-selectors",
      children: "4. Selectors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Selector"
      }), " allows a single thread to monitor multiple channels for readiness events. This is the foundation of scalable, non-blocking network I/O in Java."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-selectionkey-operations",
      children: "4.1 SelectionKey Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.nio.channels.SelectionKey;\n\n/**\n * Prints SelectionKey interest set names.\n */\npublic class SelectionKeyOps {\n\n    public static void main(String[] args) {\n        System.out.println(\"OP_READ    = \" + SelectionKey.OP_READ);\n        System.out.println(\"OP_WRITE   = \" + SelectionKey.OP_WRITE);\n        System.out.println(\"OP_CONNECT = \" + SelectionKey.OP_CONNECT);\n        System.out.println(\"OP_ACCEPT  = \" + SelectionKey.OP_ACCEPT);\n\n        // Interest set combinations\n        int readWrite = SelectionKey.OP_READ | SelectionKey.OP_WRITE;\n        int all = SelectionKey.OP_READ | SelectionKey.OP_WRITE\n                | SelectionKey.OP_ACCEPT | SelectionKey.OP_CONNECT;\n\n        System.out.println(\"\\nInterest set (READ|WRITE):          \" + readWrite);\n        System.out.println(\"Interest set (ALL):                  \" + all);\n        System.out.println(\"Contains OP_READ?                    \" +\n            ((readWrite & SelectionKey.OP_READ) != 0));\n        System.out.println(\"Contains OP_ACCEPT?                  \" +\n            ((readWrite & SelectionKey.OP_ACCEPT) != 0));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-select-selectnow-selecttimeout-wakeup",
      children: "4.2 select(), selectNow(), select(timeout), wakeup()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.*;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Iterator;\nimport java.util.Set;\nimport java.util.concurrent.atomic.AtomicBoolean;\n\n/**\n * Non-blocking echo server using Selector.\n * Connect with: telnet localhost 8080  (or nc localhost 8080)\n */\npublic class NonBlockingEchoServer {\n\n    static final int PORT = 8080;\n    static final int BUFFER_SIZE = 256;\n    static final AtomicBoolean running = new AtomicBoolean(true);\n\n    public static void main(String[] args) throws IOException {\n        // Create selector\n        try (Selector selector = Selector.open();\n             ServerSocketChannel serverChannel = ServerSocketChannel.open()) {\n\n            // Configure server channel as non-blocking\n            serverChannel.configureBlocking(false);\n            serverChannel.bind(new InetSocketAddress(\"0.0.0.0\", PORT));\n\n            // Register the server channel for ACCEPT events\n            serverChannel.register(selector, SelectionKey.OP_ACCEPT);\n            System.out.println(\"Echo server listening on port \" + PORT);\n\n            // Register a shutdown hook to wake up the selector\n            Runtime.getRuntime().addShutdownHook(new Thread(() -> {\n                running.set(false);\n                selector.wakeup();\n            }));\n\n            // Non-blocking event loop\n            while (running.get()) {\n                System.out.println(\"  select() waiting for events...\");\n\n                // Block until at least one channel is ready (or timeout)\n                int readyChannels = selector.select(5000);\n\n                // Demonstrate selectNow() → non-blocking variant\n                // int readyChannels = selector.selectNow();\n\n                // Demonstrate select(timeout) with 5s timeout\n                // int readyChannels = selector.select(5000);\n\n                if (readyChannels == 0) {\n                    System.out.println(\"  select() timed out after 5s, continuing...\");\n                    continue;\n                }\n\n                Set<SelectionKey> selectedKeys = selector.selectedKeys();\n                Iterator<SelectionKey> keyIterator = selectedKeys.iterator();\n\n                while (keyIterator.hasNext()) {\n                    SelectionKey key = keyIterator.next();\n                    keyIterator.remove();  // Must remove to avoid re-processing\n\n                    try {\n                        if (!key.isValid()) continue;\n\n                        if (key.isAcceptable()) {\n                            handleAccept(key, selector);\n                        } else if (key.isReadable()) {\n                            handleRead(key, selector);\n                        } else if (key.isWritable()) {\n                            handleWrite(key);\n                        }\n                    } catch (IOException e) {\n                        System.err.println(\"Error processing key: \" + e.getMessage());\n                        key.cancel();\n                        closeChannel(key);\n                    }\n                }\n            }\n        }\n        System.out.println(\"Server shut down.\");\n    }\n\n    static void handleAccept(SelectionKey key, Selector selector) throws IOException {\n        ServerSocketChannel serverChannel = (ServerSocketChannel) key.channel();\n        SocketChannel clientChannel = serverChannel.accept();\n        if (clientChannel == null) return;\n\n        clientChannel.configureBlocking(false);\n\n        // Allocate a per-client buffer, attach it as an attachment\n        ByteBuffer buffer = ByteBuffer.allocate(BUFFER_SIZE);\n        SelectionKey clientKey = clientChannel.register(selector, SelectionKey.OP_READ, buffer.data);\n\n        System.out.println(\"Accepted connection from: \"\n            + clientChannel.getRemoteAddress());\n    }\n\n    static void handleRead(SelectionKey key, Selector selector) throws IOException {\n        SocketChannel clientChannel = (SocketChannel) key.channel();\n        ByteBuffer buffer = (ByteBuffer) key.attachment();\n\n        int bytesRead = clientChannel.read(buffer);\n        if (bytesRead == -1) {\n            System.out.println(\"Client disconnected: \"\n                + clientChannel.getRemoteAddress());\n            key.cancel();\n            closeChannel(key);\n            return;\n        }\n\n        if (bytesRead > 0) {\n            System.out.println(\"Received \" + bytesRead + \" bytes from \"\n                + clientChannel.getRemoteAddress());\n\n            buffer.flip();\n            byte[] data = new byte[buffer.remaining()];\n            buffer.get(data);\n            System.out.println(\"Echoing: \" + new String(data, StandardCharsets.UTF_8).trim());\n\n            // Switch to write mode and register for OP_WRITE\n            buffer.rewind();\n            key.interestOps(SelectionKey.OP_WRITE);\n        }\n    }\n\n    static void handleWrite(SelectionKey key) throws IOException {\n        SocketChannel clientChannel = (SocketChannel) key.channel();\n        ByteBuffer buffer = (ByteBuffer) key.attachment();\n\n        // Write buffer contents back to client\n        clientChannel.write(buffer);\n\n        if (buffer.hasRemaining()) {\n            // Incomplete write → remain in WRITE mode\n            return;\n        }\n\n        // All done → switch back to READ mode\n        buffer.clear();\n        key.interestOps(SelectionKey.OP_READ);\n    }\n\n    static void closeChannel(SelectionKey key) {\n        try {\n            key.channel().close();\n        } catch (IOException e) {\n            // Ignore\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-client-for-the-non-blocking-echo-server",
      children: "4.3 Client for the Non-Blocking Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.SelectionKey;\nimport java.nio.channels.Selector;\nimport java.nio.channels.SocketChannel;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Iterator;\nimport java.util.Scanner;\nimport java.util.Set;\n\n/**\n * A non-blocking client for the NonBlockingEchoServer.\n */\npublic class NonBlockingEchoClient {\n\n    public static void main(String[] args) throws IOException, InterruptedException {\n        try (Selector selector = Selector.open();\n             SocketChannel channel = SocketChannel.open()) {\n\n            channel.configureBlocking(false);\n            channel.connect(new InetSocketAddress(\"localhost\", 8080));\n\n            channel.register(selector, SelectionKey.OP_CONNECT);\n            System.out.println(\"Connecting to echo server...\");\n\n            Scanner scanner = new Scanner(System.in);\n            ByteBuffer buffer = ByteBuffer.allocate(256);\n\n            Thread readerThread = new Thread(() -> {\n                try {\n                    while (!Thread.currentThread().isInterrupted()) {\n                        if (selector.select(1000) == 0) continue;\n\n                        Set<SelectionKey> keys = selector.selectedKeys();\n                        Iterator<SelectionKey> it = keys.iterator();\n\n                        while (it.hasNext()) {\n                            SelectionKey key = it.next();\n                            it.remove();\n\n                            if (!key.isValid()) continue;\n\n                            SocketChannel sc = (SocketChannel) key.channel();\n\n                            if (key.isConnectable()) {\n                                if (sc.finishConnect()) {\n                                    System.out.println(\"Connected!\");\n                                    key.interestOps(SelectionKey.OP_READ | SelectionKey.OP_WRITE);\n                                }\n                            }\n\n                            if (key.isReadable()) {\n                                buffer.clear();\n                                int bytesRead = sc.read(buffer);\n                                if (bytesRead > 0) {\n                                    buffer.flip();\n                                    byte[] data = new byte[buffer.remaining()];\n                                    buffer.get(data);\n                                    System.out.print(\"\\nEcho: \");\n                                    System.out.write(data, 0, data.length);\n                                    System.out.println();\n                                    System.out.print(\"> \");\n                                    System.out.flush();\n                                }\n                            }\n                        }\n                    }\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            });\n\n            readerThread.start();\n\n            // Main thread reads user input\n            System.out.print(\"> \");\n            while (scanner.hasNextLine()) {\n                String line = scanner.nextLine();\n                if (\"exit\".equalsIgnoreCase(line)) break;\n\n                buffer.clear();\n                buffer.put(line.getBytes(StandardCharsets.UTF_8));\n                buffer.flip();\n\n                while (buffer.hasRemaining()) {\n                    channel.write(buffer);\n                }\n\n                System.out.print(\"> \");\n            }\n\n            readerThread.interrupt();\n            readerThread.join();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tcp-networking",
      children: "5. TCP Networking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-socketchannel-and-serversocketchannel",
      children: "5.1 SocketChannel and ServerSocketChannel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.net.SocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.ServerSocketChannel;\nimport java.nio.channels.SocketChannel;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates blocking TCP networking with SocketChannel\n * and ServerSocketChannel.\n */\npublic class TcpBlockingExample {\n\n    static final int PORT = 8081;\n\n    public static void main(String[] args) throws Exception {\n        // Start server in a background thread\n        Thread serverThread = new Thread(TcpBlockingExample::runServer);\n        serverThread.setDaemon(true);\n        serverThread.start();\n\n        Thread.sleep(500); // Let the server start\n\n        // Run client\n        runClient();\n    }\n\n    static void runServer() {\n        try (ServerSocketChannel serverChannel = ServerSocketChannel.open()) {\n            serverChannel.bind(new InetSocketAddress(PORT));\n            serverChannel.configureBlocking(true); // blocking mode (default)\n            System.out.println(\"TCP server listening on port \" + PORT);\n\n            SocketChannel clientChannel = serverChannel.accept();\n            System.out.println(\"Accepted: \" + clientChannel.getRemoteAddress());\n\n            // Echo loop\n            ByteBuffer buffer = ByteBuffer.allocate(256);\n            while (clientChannel.read(buffer) != -1) {\n                buffer.flip();\n                clientChannel.write(buffer);\n                buffer.clear();\n            }\n\n            clientChannel.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    static void runClient() {\n        try (SocketChannel channel = SocketChannel.open()) {\n            SocketAddress address = new InetSocketAddress(\"localhost\", PORT);\n            channel.connect(address);\n            System.out.println(\"Connected to server\");\n\n            // Send message\n            String message = \"Hello from SocketChannel client!\";\n            ByteBuffer buffer = ByteBuffer.wrap(message.getBytes(StandardCharsets.UTF_8));\n            channel.write(buffer);\n\n            // Read echo\n            buffer.clear();\n            channel.read(buffer);\n            buffer.flip();\n            byte[] response = new byte[buffer.remaining()];\n            buffer.get(response);\n            System.out.println(\"Server echoed: \" + new String(response, StandardCharsets.UTF_8));\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-non-blocking-connection-with-finishconnect",
      children: "5.2 Non-Blocking Connection with finishConnect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.channels.SelectionKey;\nimport java.nio.channels.Selector;\nimport java.nio.channels.SocketChannel;\nimport java.util.Iterator;\nimport java.util.Set;\n\n/**\n * Demonstrates non-blocking connect using finishConnect().\n */\npublic class NonBlockingConnect {\n\n    public static void main(String[] args) throws IOException, InterruptedException {\n        // Start a simple server on a thread\n        Thread server = new Thread(() -> {\n            try (var ssc = new java.net.ServerSocket(8082)) {\n                java.net.Socket s = ssc.accept();\n                s.getOutputStream().write(\"OK\\n\".getBytes());\n                s.close();\n            } catch (IOException e) { /* ignore */ }\n        });\n        server.setDaemon(true);\n        server.start();\n        Thread.sleep(300);\n\n        // Non-blocking client connect\n        try (Selector selector = Selector.open();\n             SocketChannel channel = SocketChannel.open()) {\n\n            channel.configureBlocking(false);\n            channel.register(selector, SelectionKey.OP_CONNECT);\n            channel.connect(new InetSocketAddress(\"localhost\", 8082));\n\n            while (true) {\n                if (selector.select(3000) == 0) {\n                    System.out.println(\"Connect timed out\");\n                    break;\n                }\n\n                Set<SelectionKey> keys = selector.selectedKeys();\n                Iterator<SelectionKey> it = keys.iterator();\n\n                while (it.hasNext()) {\n                    SelectionKey key = it.next();\n                    it.remove();\n\n                    if (key.isConnectable()) {\n                        SocketChannel sc = (SocketChannel) key.channel();\n                        if (sc.finishConnect()) {\n                            System.out.println(\"Non-blocking connect succeeded! \"\n                                + \"isConnected=\" + sc.isConnected());\n                            // Now ready to read/write\n                            key.interestOps(SelectionKey.OP_READ);\n                        } else {\n                            System.out.println(\"finishConnect returned false\");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-udp-networking",
      children: "6. UDP Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UDP is connectionless and unreliable. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatagramChannel"
      }), " provides NIO access to UDP sockets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-basic-udp-sendreceive",
      children: "6.1 Basic UDP Send/Receive"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.net.SocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.DatagramChannel;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates UDP send/receive with DatagramChannel.\n */\npublic class UdpExample {\n\n    static final int PORT = 9090;\n\n    public static void main(String[] args) throws Exception {\n        // Start server thread\n        Thread serverThread = new Thread(UdpExample::runServer);\n        serverThread.setDaemon(true);\n        serverThread.start();\n\n        Thread.sleep(500);\n        runClient();\n    }\n\n    static void runServer() {\n        try (DatagramChannel channel = DatagramChannel.open()) {\n            channel.bind(new InetSocketAddress(PORT));\n            System.out.println(\"UDP server listening on port \" + PORT);\n\n            ByteBuffer buffer = ByteBuffer.allocate(1024);\n\n            // Receive datagram\n            buffer.clear();\n            SocketAddress clientAddr = channel.receive(buffer);\n            buffer.flip();\n\n            byte[] data = new byte[buffer.remaining()];\n            buffer.get(data);\n            System.out.println(\"Received from \" + clientAddr + \": \"\n                + new String(data, StandardCharsets.UTF_8));\n\n            // Send response (reuse buffer)\n            buffer.rewind();\n            channel.send(buffer, clientAddr);\n            System.out.println(\"Echoed back\");\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    static void runClient() {\n        try (DatagramChannel channel = DatagramChannel.open()) {\n            SocketAddress serverAddr = new InetSocketAddress(\"localhost\", PORT);\n\n            String message = \"Hello UDP!\";\n            ByteBuffer buffer = ByteBuffer.wrap(message.getBytes(StandardCharsets.UTF_8));\n\n            // Send\n            int sent = channel.send(buffer, serverAddr);\n            System.out.println(\"Sent \" + sent + \" bytes to server\");\n\n            // Receive echo\n            buffer.clear();\n            channel.receive(buffer);\n            buffer.flip();\n            byte[] response = new byte[buffer.remaining()];\n            buffer.get(response);\n            System.out.println(\"Server echo: \" + new String(response, StandardCharsets.UTF_8));\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-udp-multicast",
      children: "6.2 UDP Multicast"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetAddress;\nimport java.net.InetSocketAddress;\nimport java.net.NetworkInterface;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.DatagramChannel;\nimport java.nio.channels.MembershipKey;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Enumeration;\n\n/**\n * Demonstrates UDP multicast with DatagramChannel and MembershipKey.\n */\npublic class MulticastExample {\n\n    static final String GROUP = \"230.0.0.1\";\n    static final int PORT = 9091;\n\n    public static void main(String[] args) throws Exception {\n        NetworkInterface ni = findMulticastInterface();\n\n        // Subscriber thread\n        Thread subscriber = new Thread(() -> runSubscriber(ni));\n        subscriber.setDaemon(true);\n        subscriber.start();\n\n        Thread.sleep(500);\n\n        // Publisher\n        runPublisher(ni);\n    }\n\n    static NetworkInterface findMulticastInterface() throws IOException {\n        Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();\n        while (interfaces.hasMoreElements()) {\n            NetworkInterface ni = interfaces.nextElement();\n            if (ni.isUp() && ni.supportsMulticast() && !ni.isLoopback()) {\n                System.out.println(\"Using interface: \" + ni.getName());\n                return ni;\n            }\n        }\n        throw new RuntimeException(\"No suitable multicast interface found\");\n    }\n\n    static void runSubscriber(NetworkInterface ni) {\n        try (DatagramChannel channel = DatagramChannel.open()) {\n            channel.setOption(java.net.StandardSocketOptions.SO_REUSEADDR, true);\n            channel.bind(new InetSocketAddress(PORT));\n            channel.configureBlocking(true);\n\n            // Join multicast group\n            InetAddress groupAddr = InetAddress.getByName(GROUP);\n            MembershipKey key = channel.join(groupAddr, ni);\n            System.out.println(\"Joined multicast group \" + GROUP);\n\n            ByteBuffer buffer = ByteBuffer.allocate(1024);\n            System.out.println(\"Waiting for multicast message...\");\n\n            buffer.clear();\n            channel.receive(buffer);\n            buffer.flip();\n            byte[] data = new byte[buffer.remaining()];\n            buffer.get(data);\n            System.out.println(\"Multicast received: \"\n                + new String(data, StandardCharsets.UTF_8));\n\n            // Leave group\n            key.drop();\n            System.out.println(\"Left multicast group\");\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    static void runPublisher(NetworkInterface ni) {\n        try (DatagramChannel channel = DatagramChannel.open()) {\n            String message = \"Hello from multicast publisher!\";\n            ByteBuffer buffer = ByteBuffer.wrap(message.getBytes(StandardCharsets.UTF_8));\n\n            InetSocketAddress groupAddr = new InetSocketAddress(\n                InetAddress.getByName(GROUP), PORT);\n            channel.send(buffer, groupAddr);\n            System.out.println(\"Sent multicast message\");\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-java-http-client-java-11",
      children: "7. Java HTTP Client (Java 11+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 11 introduced a modern, fully asynchronous HTTP client in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.net.http"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-synchronous-get",
      children: "7.1 Synchronous GET"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\n/**\n * Demonstrates a simple synchronous HTTP GET.\n */\npublic class HttpGetSync {\n\n    public static void main(String[] args) throws Exception {\n        // Create HttpClient\n        HttpClient client = HttpClient.newHttpClient();\n\n        // Build request\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/get\"))\n            .header(\"Accept\", \"application/json\")\n            .GET()\n            .build();\n\n        // Send (blocking)\n        HttpResponse<String> response = client.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        // Read response\n        System.out.println(\"Status code: \" + response.statusCode());\n        System.out.println(\"Headers: \");\n        response.headers().map().forEach((k, v) ->\n            System.out.println(\"  \" + k + \": \" + v));\n        System.out.println(\"\\nBody:\");\n        System.out.println(response.body());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-asynchronous-get",
      children: "7.2 Asynchronous GET"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.concurrent.CompletableFuture;\n\n/**\n * Demonstrates asynchronous HTTP GET with CompletableFuture.\n */\npublic class HttpGetAsync {\n\n    public static void main(String[] args) {\n        HttpClient client = HttpClient.newHttpClient();\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/delay/2\"))\n            .GET()\n            .build();\n\n        System.out.println(\"Sending async request at \" + System.currentTimeMillis());\n\n        CompletableFuture<HttpResponse<String>> future =\n            client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n\n        // Attach callbacks\n        future.thenAccept(response -> {\n            System.out.println(\"Received response at \" + System.currentTimeMillis());\n            System.out.println(\"Status: \" + response.statusCode());\n            System.out.println(\"Body: \" + response.body().substring(0, 100) + \"...\");\n        });\n\n        future.exceptionally(throwable -> {\n            System.err.println(\"Request failed: \" + throwable.getMessage());\n            return null;\n        });\n\n        // Do other work while request is in flight\n        System.out.println(\"Doing other work while request is pending...\");\n\n        // Block to see the result (in real code you'd keep the JVM alive)\n        future.join();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-post-put-delete",
      children: "7.3 POST, PUT, DELETE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Demonstrates POST, PUT, and DELETE with HttpRequest builders.\n */\npublic class HttpMethods {\n\n    static final HttpClient client = HttpClient.newHttpClient();\n\n    public static void main(String[] args) throws Exception {\n        postExample();\n        putExample();\n        deleteExample();\n    }\n\n    static void postExample() throws Exception {\n        String json = \"{\\\"name\\\": \\\"John\\\", \\\"email\\\": \\\"john@example.com\\\"}\";\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/post\"))\n            .header(\"Content-Type\", \"application/json\")\n            .POST(HttpRequest.BodyPublishers.ofString(json))\n            .build();\n\n        HttpResponse<String> response = client.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        System.out.println(\"POST status: \" + response.statusCode());\n    }\n\n    static void putExample() throws Exception {\n        String json = \"{\\\"id\\\": 1, \\\"name\\\": \\\"Updated\\\"}\";\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/put\"))\n            .header(\"Content-Type\", \"application/json\")\n            .PUT(HttpRequest.BodyPublishers.ofString(json))\n            .build();\n\n        HttpResponse<String> response = client.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        System.out.println(\"PUT status: \" + response.statusCode());\n    }\n\n    static void deleteExample() throws Exception {\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/delete\"))\n            .DELETE()\n            .build();\n\n        HttpResponse<String> response = client.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        System.out.println(\"DELETE status: \" + response.statusCode());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-custom-headers-and-body-publishers",
      children: "7.4 Custom Headers and Body Publishers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.FileInputStream;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.nio.file.Path;\nimport java.time.Duration;\n\n/**\n * Demonstrates custom headers, timeouts, and body publishers\n * (file, input stream, byte array).\n */\npublic class HttpBodyPublishers {\n\n    public static void main(String[] args) throws Exception {\n        HttpClient client = HttpClient.newBuilder()\n            .connectTimeout(Duration.ofSeconds(10))\n            .followRedirects(HttpClient.Redirect.NORMAL)\n            .build();\n\n        // --- JSON POST with custom headers ---\n        String json = \"{\\\"key\\\": \\\"value\\\"}\";\n        HttpRequest jsonRequest = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/post\"))\n            .timeout(Duration.ofSeconds(5))\n            .header(\"Content-Type\", \"application/json\")\n            .header(\"Authorization\", \"Bearer my-token\")\n            .header(\"X-Custom\", \"custom-value\")\n            .POST(HttpRequest.BodyPublishers.ofString(json))\n            .build();\n\n        HttpResponse<String> response = client.send(jsonRequest,\n            HttpResponse.BodyHandlers.ofString());\n        System.out.println(\"JSON POST: \" + response.statusCode());\n\n        // --- File upload ---\n        Path tempFile = Files.createTempFile(\"upload\", \".txt\");\n        Files.writeString(tempFile, \"File content for upload\");\n\n        HttpRequest fileRequest = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/post\"))\n            .header(\"Content-Type\", \"text/plain\")\n            .POST(HttpRequest.BodyPublishers.ofFile(tempFile))\n            .build();\n\n        response = client.send(fileRequest, HttpResponse.BodyHandlers.ofString());\n        System.out.println(\"File upload: \" + response.statusCode());\n\n        Files.deleteIfExists(tempFile);\n\n        // --- InputStream publisher ---\n        Path dataFile = Files.createTempFile(\"data\", \".bin\");\n        Files.write(dataFile, new byte[]{1, 2, 3, 4, 5});\n\n        try (FileInputStream fis = new FileInputStream(dataFile.toFile())) {\n            HttpRequest streamRequest = HttpRequest.newBuilder()\n                .uri(URI.create(\"https://httpbin.org/post\"))\n                .POST(HttpRequest.BodyPublishers.ofInputStream(() -> fis))\n                .build();\n\n            response = client.send(streamRequest, HttpResponse.BodyHandlers.ofString());\n            System.out.println(\"InputStream POST: \" + response.statusCode());\n        }\n\n        Files.deleteIfExists(dataFile);\n\n        // --- No body ---\n        HttpRequest noBody = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/delete\"))\n            .method(\"DELETE\", HttpRequest.BodyPublishers.noBody())\n            .build();\n\n        response = client.send(noBody, HttpResponse.BodyHandlers.ofString());\n        System.out.println(\"DELETE noBody: \" + response.statusCode());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-websocket-support",
      children: "7.5 WebSocket Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.WebSocket;\nimport java.nio.ByteBuffer;\nimport java.util.concurrent.CompletionStage;\nimport java.util.concurrent.CountDownLatch;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * Demonstrates WebSocket client support in java.net.http.\n */\npublic class WebSocketExample {\n\n    public static void main(String[] args) throws Exception {\n        // Requires a WebSocket echo server (e.g., wss://echo.websocket.org)\n        // Note: echo.websocket.org may be deprecated; use a local server for testing\n        String wsUri = \"wss://echo.websocket.org\";\n\n        CountDownLatch latch = new CountDownLatch(1);\n\n        HttpClient client = HttpClient.newHttpClient();\n\n        WebSocket websocket = client.newWebSocketBuilder()\n            .buildAsync(URI.create(wsUri), new WebSocket.Listener() {\n\n                @Override\n                public void onOpen(WebSocket webSocket) {\n                    System.out.println(\"WebSocket opened\");\n                    // Send a text message\n                    webSocket.sendText(\"Hello WebSocket!\", true);\n                    webSocket.request(1);\n                }\n\n                @Override\n                public CompletionStage<?> onText(WebSocket webSocket,\n                        CharSequence data, boolean last) {\n                    System.out.println(\"Received text: \" + data);\n                    latch.countDown();\n                    webSocket.request(1);\n                    return null;\n                }\n\n                @Override\n                public CompletionStage<?> onBinary(WebSocket webSocket,\n                        ByteBuffer data, boolean last) {\n                    byte[] bytes = new byte[data.remaining()];\n                    data.get(bytes);\n                    System.out.println(\"Received binary: \" + bytes.length + \" bytes\");\n                    webSocket.request(1);\n                    return null;\n                }\n\n                @Override\n                public CompletionStage<?> onPing(WebSocket webSocket,\n                        ByteBuffer message) {\n                    webSocket.request(1);\n                    return null;\n                }\n\n                @Override\n                public CompletionStage<?> onPong(WebSocket webSocket,\n                        ByteBuffer message) {\n                    webSocket.request(1);\n                    return null;\n                }\n\n                @Override\n                public CompletionStage<?> onClose(WebSocket webSocket,\n                        int statusCode, String reason) {\n                    System.out.println(\"WebSocket closed: \" + statusCode\n                        + \" \" + reason);\n                    latch.countDown();\n                    return null;\n                }\n\n                @Override\n                public void onError(WebSocket webSocket, Throwable error) {\n                    System.err.println(\"WebSocket error: \" + error.getMessage());\n                    latch.countDown();\n                }\n            })\n            .join();  // Wait for the WebSocket to connect\n\n        boolean finished = latch.await(10, TimeUnit.SECONDS);\n        System.out.println(\"Test \" + (finished ? \"completed\" : \"timed out\"));\n\n        websocket.sendClose(WebSocket.NORMAL_CLOSURE, \"done\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-asynchronous-nio",
      children: "8. Asynchronous NIO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 7 introduced truly asynchronous channel operations with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsynchronousFileChannel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsynchronousSocketChannel"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsynchronousServerSocketChannel"
      }), ". These use a thread pool managed by the JVM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-asynchronousfilechannel",
      children: "8.1 AsynchronousFileChannel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.AsynchronousFileChannel;\nimport java.nio.channels.CompletionHandler;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\nimport java.util.concurrent.Future;\n\n/**\n * Demonstrates AsynchronousFileChannel with Future and\n * CompletionHandler approaches.\n */\npublic class AsyncFileChannelDemo {\n\n    public static void main(String[] args) throws Exception {\n        Path path = Files.createTempFile(\"async-file\", \".dat\");\n\n        // --- Future-based write ---\n        try (AsynchronousFileChannel channel = AsynchronousFileChannel.open(\n                path, StandardOpenOption.WRITE, StandardOpenOption.CREATE)) {\n\n            ByteBuffer buffer = ByteBuffer.wrap(\n                \"Asynchronous NIO is powerful!\".getBytes(StandardCharsets.UTF_8));\n\n            Future<Integer> operation = channel.write(buffer, 0);\n            int bytesWritten = operation.get();  // blocks until done\n            System.out.println(\"Future-based write: \" + bytesWritten + \" bytes\");\n        }\n\n        // --- CompletionHandler-based read ---\n        try (AsynchronousFileChannel channel = AsynchronousFileChannel.open(\n                path, StandardOpenOption.READ)) {\n\n            ByteBuffer buffer = ByteBuffer.allocate(128);\n\n            channel.read(buffer, 0, buffer, new CompletionHandler<Integer, ByteBuffer>() {\n                @Override\n                public void completed(Integer result, ByteBuffer attachment) {\n                    attachment.flip();\n                    byte[] data = new byte[attachment.remaining()];\n                    attachment.get(data);\n                    System.out.println(\"Handler-based read: \"\n                        + new String(data, StandardCharsets.UTF_8));\n                }\n\n                @Override\n                public void failed(Throwable exc, ByteBuffer attachment) {\n                    System.err.println(\"Read failed: \" + exc.getMessage());\n                }\n            });\n\n            // Give the async operation time to complete\n            Thread.sleep(500);\n        }\n\n        Files.deleteIfExists(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-asynchronoussocketchannel",
      children: "8.2 AsynchronousSocketChannel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.AsynchronousServerSocketChannel;\nimport java.nio.channels.AsynchronousSocketChannel;\nimport java.nio.channels.CompletionHandler;\nimport java.nio.charset.StandardCharsets;\nimport java.util.concurrent.CountDownLatch;\n\n/**\n * Asynchronous echo server using AsynchronousServerSocketChannel\n * and AsynchronousSocketChannel with CompletionHandler.\n */\npublic class AsyncEchoServer {\n\n    static final int PORT = 9092;\n\n    public static void main(String[] args) throws Exception {\n        CountDownLatch latch = new CountDownLatch(1);\n\n        try (AsynchronousServerSocketChannel server =\n                AsynchronousServerSocketChannel.open().bind(new InetSocketAddress(PORT))) {\n\n            System.out.println(\"Async echo server on port \" + PORT);\n\n            // Start accepting connections\n            server.accept(null, new CompletionHandler<AsynchronousSocketChannel, Void>() {\n                @Override\n                public void completed(AsynchronousSocketChannel client, Void attachment) {\n                    // Accept the next connection immediately\n                    server.accept(null, this);\n\n                    System.out.println(\"Accepted: \" + client.getRemoteAddress());\n\n                    // Read from the client\n                    ByteBuffer buffer = ByteBuffer.allocate(256);\n                    client.read(buffer, buffer, new CompletionHandler<Integer, ByteBuffer>() {\n                        @Override\n                        public void completed(Integer result, ByteBuffer attachment) {\n                            if (result == -1) {\n                                closeClient(client);\n                                return;\n                            }\n\n                            attachment.flip();\n                            byte[] data = new byte[attachment.remaining()];\n                            attachment.get(data);\n                            System.out.println(\"Received: \"\n                                + new String(data, StandardCharsets.UTF_8).trim());\n\n                            // Echo back (same data)\n                            attachment.rewind();\n                            client.write(attachment, attachment,\n                                new CompletionHandler<Integer, ByteBuffer>() {\n                                    @Override\n                                    public void completed(Integer result,\n                                            ByteBuffer buffer) {\n                                        if (buffer.hasRemaining()) {\n                                            client.write(buffer, buffer, this);\n                                        } else {\n                                            buffer.clear();\n                                            client.read(buffer, buffer, this);\n                                        }\n                                    }\n\n                                    @Override\n                                    public void failed(Throwable exc,\n                                            ByteBuffer buffer) {\n                                        System.err.println(\"Write failed: \"\n                                            + exc.getMessage());\n                                        closeClient(client);\n                                    }\n                                });\n                        }\n\n                        @Override\n                        public void failed(Throwable exc, ByteBuffer attachment) {\n                            System.err.println(\"Read failed: \" + exc.getMessage());\n                            closeClient(client);\n                        }\n                    });\n                }\n\n                @Override\n                public void failed(Throwable exc, Void attachment) {\n                    System.err.println(\"Accept failed: \" + exc.getMessage());\n                }\n            });\n\n            // Keep server alive\n            System.out.println(\"Press Ctrl+C to stop\");\n            latch.await();\n        }\n    }\n\n    static void closeClient(AsynchronousSocketChannel client) {\n        try {\n            client.close();\n        } catch (IOException e) {\n            // Ignore\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-async-client",
      children: "8.3 Async Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.AsynchronousSocketChannel;\nimport java.nio.channels.CompletionHandler;\nimport java.nio.charset.StandardCharsets;\nimport java.util.concurrent.CountDownLatch;\n\n/**\n * Asynchronous client for the AsyncEchoServer.\n */\npublic class AsyncEchoClient {\n\n    public static void main(String[] args) throws Exception {\n        CountDownLatch latch = new CountDownLatch(1);\n\n        try (AsynchronousSocketChannel client = AsynchronousSocketChannel.open()) {\n\n            client.connect(new InetSocketAddress(\"localhost\", 9092), null,\n                new CompletionHandler<Void, Void>() {\n                    @Override\n                    public void completed(Void result, Void attachment) {\n                        System.out.println(\"Connected\");\n\n                        String message = \"Hello Async World!\";\n                        ByteBuffer buffer = ByteBuffer.wrap(\n                            message.getBytes(StandardCharsets.UTF_8));\n\n                        client.write(buffer, buffer,\n                            new CompletionHandler<Integer, ByteBuffer>() {\n                                @Override\n                                public void completed(Integer result,\n                                        ByteBuffer attachment) {\n                                    if (attachment.hasRemaining()) {\n                                        client.write(attachment, attachment, this);\n                                        return;\n                                    }\n\n                                    // Read echo\n                                    ByteBuffer readBuf = ByteBuffer.allocate(256);\n                                    client.read(readBuf, readBuf,\n                                        new CompletionHandler<Integer, ByteBuffer>() {\n                                            @Override\n                                            public void completed(Integer result,\n                                                    ByteBuffer buffer) {\n                                                buffer.flip();\n                                                byte[] data = new byte[buffer.remaining()];\n                                                buffer.get(data);\n                                                System.out.println(\"Echo: \"\n                                                    + new String(data,\n                                                        StandardCharsets.UTF_8));\n                                                latch.countDown();\n                                            }\n\n                                            @Override\n                                            public void failed(Throwable exc,\n                                                    ByteBuffer buffer) {\n                                                System.err.println(\n                                                    \"Read failed: \" + exc.getMessage());\n                                                latch.countDown();\n                                            }\n                                        });\n                                }\n\n                                @Override\n                                public void failed(Throwable exc,\n                                        ByteBuffer attachment) {\n                                    System.err.println(\n                                        \"Write failed: \" + exc.getMessage());\n                                    latch.countDown();\n                                }\n                            });\n                    }\n\n                    @Override\n                    public void failed(Throwable exc, Void attachment) {\n                        System.err.println(\"Connect failed: \" + exc.getMessage());\n                        latch.countDown();\n                    }\n                });\n\n            latch.await();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-nio2-file-operations",
      children: "9. NIO.2 File Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 7's NIO.2 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.nio.file"
      }), ") provides comprehensive filesystem operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-path-and-files-basics",
      children: "9.1 Path and Files Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.net.URI;\nimport java.nio.file.*;\n\n/**\n * Demonstrates Path and Files basic operations.\n */\npublic class PathAndFiles {\n\n    public static void main(String[] args) throws IOException {\n        // --- Creating Paths ---\n        Path absolute = Paths.get(\"C:\", \"Users\", \"john\", \"file.txt\");\n        Path relative = Paths.get(\"docs\", \"notes.txt\");\n        Path fromUri = Paths.get(URI.create(\"file:///C:/data/config.xml\"));\n\n        System.out.println(\"Absolute: \" + absolute.toAbsolutePath());\n        System.out.println(\"Relative: \" + relative);\n        System.out.println(\"From URI: \" + fromUri);\n\n        // Path components\n        Path p = Paths.get(\"C:\", \"project\", \"src\", \"main\", \"java\", \"App.java\");\n        System.out.println(\"\\nPath components:\");\n        System.out.println(\"  File name: \" + p.getFileName());\n        System.out.println(\"  Parent: \" + p.getParent());\n        System.out.println(\"  Root: \" + p.getRoot());\n        System.out.println(\"  Name count: \" + p.getNameCount());\n        for (int i = 0; i < p.getNameCount(); i++) {\n            System.out.println(\"  [\" + i + \"]: \" + p.getName(i));\n        }\n\n        // Resolve and relativize\n        Path base = Paths.get(\"C:\", \"project\");\n        Path resolved = base.resolve(\"docs/file.txt\");\n        System.out.println(\"\\nResolved: \" + resolved);\n\n        Path full = Paths.get(\"C:\", \"project\", \"src\", \"main\", \"java\");\n        Path other = Paths.get(\"C:\", \"project\", \"target\", \"classes\");\n        System.out.println(\"Relativized (full -> other): \"\n            + full.relativize(other));\n\n        // Files operations\n        Path tempDir = Files.createTempDirectory(\"nio2-demo\");\n        Path newFile = tempDir.resolve(\"test.txt\");\n\n        // Write\n        Files.writeString(newFile, \"Hello NIO.2!\\nSecond line\");\n\n        // Read\n        String content = Files.readString(newFile);\n        System.out.println(\"\\nRead from file:\\n\" + content);\n\n        // Check properties\n        System.out.println(\"Exists: \" + Files.exists(newFile));\n        System.out.println(\"Is regular file: \" + Files.isRegularFile(newFile));\n        System.out.println(\"Size: \" + Files.size(newFile) + \" bytes\");\n\n        // Copy\n        Path copy = tempDir.resolve(\"copy.txt\");\n        Files.copy(newFile, copy, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(\"Copied to: \" + copy);\n\n        // Move\n        Path moved = tempDir.resolve(\"moved.txt\");\n        Files.move(copy, moved, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(\"Moved to: \" + moved);\n\n        // Delete\n        Files.delete(newFile);\n        Files.delete(moved);\n\n        // Cleanup\n        Files.delete(tempDir);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-directory-walking-with-fileswalk-filesfind-fileslist",
      children: "9.2 Directory Walking with Files.walk, Files.find, Files.list"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.BasicFileAttributes;\nimport java.util.stream.Stream;\n\n/**\n * Demonstrates directory walking using Files.walk, Files.find,\n * and Files.list.\n */\npublic class DirectoryWalking {\n\n    public static void main(String[] args) throws IOException {\n        // Create a temporary directory structure\n        Path root = Files.createTempDirectory(\"walk-demo\");\n        Files.createDirectories(root.resolve(\"sub1/subsub\"));\n        Files.createDirectories(root.resolve(\"sub2\"));\n        Files.writeString(root.resolve(\"a.txt\"), \"file a\");\n        Files.writeString(root.resolve(\"sub1/b.txt\"), \"file b\");\n        Files.writeString(root.resolve(\"sub1/subsub/c.txt\"), \"file c\");\n        Files.writeString(root.resolve(\"sub2/d.log\"), \"log d\");\n\n        // --- Files.walk (depth-first stream) ---\n        System.out.println(\"=== Files.walk (all) ===\");\n        try (Stream<Path> stream = Files.walk(root)) {\n            stream.forEach(System.out::println);\n        }\n\n        // --- Files.walk with maxDepth ---\n        System.out.println(\"\\n=== Files.walk (depth=1) ===\");\n        try (Stream<Path> stream = Files.walk(root, 1)) {\n            stream.forEach(System.out::println);\n        }\n\n        // --- Files.find (filtered walk) ---\n        System.out.println(\"\\n=== Files.find (.txt files) ===\");\n        try (Stream<Path> stream = Files.find(root, Integer.MAX_VALUE,\n                (path, attrs) -> path.toString().endsWith(\".txt\"))) {\n            stream.forEach(System.out::println);\n        }\n\n        // --- Files.list (shallow) ---\n        System.out.println(\"\\n=== Files.list (shallow) ===\");\n        try (Stream<Path> stream = Files.list(root)) {\n            stream.forEach(System.out::println);\n        }\n\n        // --- Files.lines (stream lines of a file) ---\n        System.out.println(\"\\n=== Files.lines ===\");\n        try (Stream<String> lines = Files.lines(root.resolve(\"a.txt\"))) {\n            lines.forEach(line -> System.out.println(\"  Line: \" + line));\n        }\n\n        // --- newDirectoryStream ---\n        System.out.println(\"\\n=== newDirectoryStream (filtered) ===\");\n        try (DirectoryStream<Path> stream = Files.newDirectoryStream(root, \"*.txt\")) {\n            for (Path entry : stream) {\n                System.out.println(\"  \" + entry.getFileName());\n            }\n        }\n\n        // Cleanup\n        try (Stream<Path> walk = Files.walk(root)) {\n            walk.sorted(java.util.Comparator.reverseOrder())\n                .forEach(p -> {\n                    try { Files.deleteIfExists(p); } catch (IOException e) { /* ignore */ }\n                });\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-filevisitor-and-walkfiletree",
      children: "9.3 FileVisitor and walkFileTree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.BasicFileAttributes;\n\n/**\n * Demonstrates FileVisitor with walkFileTree for recursively\n * processing a directory tree.\n */\npublic class FileVisitorDemo {\n\n    public static void main(String[] args) throws IOException {\n        // Create test structure\n        Path root = Files.createTempDirectory(\"visitor-demo\");\n        Files.createDirectories(root.resolve(\"src/main/java\"));\n        Files.createDirectories(root.resolve(\"src/main/resources\"));\n        Files.createDirectories(root.resolve(\"src/test/java\"));\n        Files.writeString(root.resolve(\"src/main/java/App.java\"),\n            \"public class App {}\");\n        Files.writeString(root.resolve(\"src/main/java/Util.java\"),\n            \"public class Util {}\");\n        Files.writeString(root.resolve(\"src/test/java/AppTest.java\"),\n            \"public class AppTest {}\");\n\n        // Walk file tree with FileVisitor\n        System.out.println(\"=== Tree structure ===\");\n        Files.walkFileTree(root, new SimpleFileVisitor<Path>() {\n            private int indent = 0;\n\n            @Override\n            public FileVisitResult preVisitDirectory(Path dir,\n                    BasicFileAttributes attrs) {\n                System.out.println(\"  \".repeat(indent) + \"[DIR] \"\n                    + dir.getFileName());\n                indent++;\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult visitFile(Path file,\n                    BasicFileAttributes attrs) {\n                System.out.println(\"  \".repeat(indent) + \"[FILE] \"\n                    + file.getFileName() + \" (\" + attrs.size() + \" bytes)\");\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult visitFileFailed(Path file,\n                    IOException exc) {\n                System.err.println(\"  Error accessing: \" + file);\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult postVisitDirectory(Path dir,\n                    IOException exc) {\n                indent--;\n                return FileVisitResult.CONTINUE;\n            }\n        });\n\n        // ---- Custom FileVisitor: Java source finder ----\n        System.out.println(\"\\n=== Java source files ===\");\n        JavaFileFinder finder = new JavaFileFinder();\n        Files.walkFileTree(root, finder);\n        System.out.println(\"Total .java files: \" + finder.getCount());\n\n        // Cleanup\n        try (Stream<Path> walk = Files.walk(root)) {\n            walk.sorted(java.util.Comparator.reverseOrder())\n                .forEach(p -> {\n                    try { Files.deleteIfExists(p); } catch (IOException e) { /* ignore */ }\n                });\n        }\n    }\n}\n\n/**\n * Custom FileVisitor that counts and prints .java files.\n */\nclass JavaFileFinder extends SimpleFileVisitor<Path> {\n    private int count = 0;\n\n    @Override\n    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {\n        if (file.toString().endsWith(\".java\")) {\n            System.out.println(\"  \" + file + \" (\" + attrs.size() + \" bytes)\");\n            count++;\n        }\n        return FileVisitResult.CONTINUE;\n    }\n\n    public int getCount() { return count; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-watchservice-file-system-change-monitoring",
      children: "9.4 WatchService (File System Change Monitoring)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.util.concurrent.TimeUnit;\n\nimport static java.nio.file.StandardWatchEventKinds.*;\n\n/**\n * Demonstrates WatchService for monitoring file system changes.\n */\npublic class WatchServiceDemo {\n\n    public static void main(String[] args) throws IOException, InterruptedException {\n        Path dir = Files.createTempDirectory(\"watch-demo\");\n        System.out.println(\"Watching directory: \" + dir);\n\n        try (WatchService watcher = FileSystems.getDefault().newWatchService()) {\n            // Register directory for events\n            dir.register(watcher,\n                ENTRY_CREATE,\n                ENTRY_MODIFY,\n                ENTRY_DELETE);\n\n            // Create some files to trigger events\n            System.out.println(\"Creating files to trigger events...\");\n            Files.writeString(dir.resolve(\"test1.txt\"), \"Hello\");\n            Thread.sleep(100);\n            Files.writeString(dir.resolve(\"test2.txt\"), \"World\");\n            Thread.sleep(100);\n            Files.writeString(dir.resolve(\"test1.txt\"), \"Modified content\");\n            Thread.sleep(100);\n            Files.delete(dir.resolve(\"test2.txt\"));\n\n            // Poll for events\n            System.out.println(\"\\n=== Events detected ===\");\n            for (int i = 0; i < 4; i++) {\n                WatchKey key = watcher.poll(2, TimeUnit.SECONDS);\n                if (key == null) {\n                    System.out.println(\"No more events\");\n                    break;\n                }\n\n                for (WatchEvent<?> event : key.pollEvents()) {\n                    WatchEvent.Kind<?> kind = event.kind();\n                    Path filename = (Path) event.context();\n                    long count = event.count();\n\n                    System.out.printf(\"  %s: %s (count=%d)%n\",\n                        kind.name(), filename, count);\n                }\n\n                if (!key.reset()) {\n                    System.out.println(\"  Key is no longer valid\");\n                    break;\n                }\n            }\n        }\n\n        // Cleanup\n        try (var files = Files.list(dir)) {\n            files.forEach(p -> {\n                try { Files.deleteIfExists(p); } catch (IOException e) { /* ignore */ }\n            });\n        }\n        Files.deleteIfExists(dir);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-nio2-file-attributes",
      children: "10. NIO.2 File Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-basicfileattributes",
      children: "10.1 BasicFileAttributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.*;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * Demonstrates reading BasicFileAttributes.\n */\npublic class FileAttributesDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"attrs\", \".txt\");\n        Files.writeString(file, \"Attribute demo content\");\n\n        // --- BasicFileAttributes (cross-platform) ---\n        BasicFileAttributes basic = Files.readAttributes(file,\n            BasicFileAttributes.class);\n\n        System.out.println(\"=== BasicFileAttributes ===\");\n        System.out.println(\"  Size: \" + basic.size() + \" bytes\");\n        System.out.println(\"  Is directory: \" + basic.isDirectory());\n        System.out.println(\"  Is regular file: \" + basic.isRegularFile());\n        System.out.println(\"  Is symbolic link: \" + basic.isSymbolicLink());\n        System.out.println(\"  Is other: \" + basic.isOther());\n        System.out.println(\"  File key: \" + basic.fileKey());\n        System.out.println(\"  Creation time: \" + basic.creationTime());\n        System.out.println(\"  Last access time: \" + basic.lastAccessTime());\n        System.out.println(\"  Last modified time: \" + basic.lastModifiedTime());\n\n        // Set timestamps\n        FileTime future = FileTime.from(\n            System.currentTimeMillis() + 3600_000, TimeUnit.MILLISECONDS);\n        Files.setLastModifiedTime(file, future);\n        System.out.println(\"  Updated last modified: \"\n            + Files.getLastModifiedTime(file));\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-posixfileattributes",
      children: "10.2 PosixFileAttributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.*;\n\n/**\n * Demonstrates POSIX file attributes (Linux/macOS only).\n * Will fail on Windows → demonstrates conditional support.\n */\npublic class PosixAttributesDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"posix-attrs\", \".txt\");\n        Files.writeString(file, \"POSIX attributes\");\n\n        FileStore store = Files.getFileStore(file);\n        System.out.println(\"File store: \" + store);\n        System.out.println(\"Supports POSIX: \"\n            + store.supportsFileAttributeView(PosixFileAttributeView.class));\n\n        if (store.supportsFileAttributeView(PosixFileAttributeView.class)) {\n            // Read POSIX attributes\n            PosixFileAttributes posix = Files.readAttributes(file,\n                PosixFileAttributes.class);\n\n            System.out.println(\"\\n=== POSIX File Attributes ===\");\n            System.out.println(\"  Owner: \" + posix.owner().getName());\n            System.out.println(\"  Group: \" + posix.group().getName());\n            System.out.println(\"  Permissions: \" + posix.permissions());\n\n            // Set permissions\n            java.util.Set<PosixFilePermission> perms = PosixFilePermissions.fromString(\"rw-r--r--\");\n            Files.setPosixFilePermissions(file, perms);\n            System.out.println(\"  Updated permissions: \" + Files.getPosixFilePermissions(file));\n\n            // Set owner (requires appropriate privileges)\n            // Files.setOwner(file, file.getFileSystem().getUserPrincipalLookupService()\n            //     .lookupPrincipalByName(\"anotheruser\"));\n\n        } else {\n            System.out.println(\"POSIX attributes not supported on this filesystem.\");\n            System.out.println(\"  (Expected on Windows; run on Linux/macOS to see POSIX attributes)\");\n        }\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-dosfileattributes",
      children: "10.3 DosFileAttributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.*;\n\n/**\n * Demonstrates DOS file attributes (Windows-specific).\n */\npublic class DosAttributesDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"dos-attrs\", \".txt\");\n        Files.writeString(file, \"DOS attribute demo\");\n\n        FileStore store = Files.getFileStore(file);\n        System.out.println(\"Supports DOS: \"\n            + store.supportsFileAttributeView(DosFileAttributeView.class));\n\n        if (store.supportsFileAttributeView(DosFileAttributeView.class)) {\n            // Read DOS attributes\n            DosFileAttributes dos = Files.readAttributes(file,\n                DosFileAttributes.class);\n\n            System.out.println(\"\\n=== DOS File Attributes ===\");\n            System.out.println(\"  Read-only: \" + dos.isReadOnly());\n            System.out.println(\"  Hidden: \" + dos.isHidden());\n            System.out.println(\"  Archive: \" + dos.isArchive());\n            System.out.println(\"  System: \" + dos.isSystem());\n\n            // Set read-only\n            Files.setAttribute(file, \"dos:readonly\", true);\n            System.out.println(\"  Set read-only: \"\n                + Files.readAttributes(file, DosFileAttributes.class).isReadOnly());\n\n            // Unset read-only\n            Files.setAttribute(file, \"dos:readonly\", false);\n        } else {\n            System.out.println(\"DOS attributes not supported on this filesystem.\");\n        }\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-userdefinedfileattributeview",
      children: "10.4 UserDefinedFileAttributeView"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.ByteBuffer;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.*;\nimport java.nio.file.attribute.UserDefinedFileAttributeView;\n\n/**\n * Demonstrates custom (user-defined) file attributes.\n * Typically supported on Linux (ext4, xfs) and macOS (HFS+, APFS).\n * Not supported on Windows NTFS.\n */\npublic class UserDefinedAttributesDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"user-attrs\", \".dat\");\n        Files.writeString(file, \"User-defined attributes\");\n\n        UserDefinedFileAttributeView view = Files.getFileAttributeView(\n            file, UserDefinedFileAttributeView.class);\n\n        if (view != null) {\n            System.out.println(\"=== User-Defined File Attributes ===\");\n\n            // Write custom attributes\n            view.write(\"author\", ByteBuffer.wrap(\n                \"John Doe\".getBytes(StandardCharsets.UTF_8)));\n            view.write(\"version\", ByteBuffer.wrap(\n                \"1.0\".getBytes(StandardCharsets.UTF_8)));\n\n            // List attribute names\n            System.out.println(\"  Attribute names: \" + view.list());\n\n            // Read attribute size\n            int authorSize = view.size(\"author\");\n            System.out.println(\"  'author' size: \" + authorSize + \" bytes\");\n\n            // Read attribute value\n            ByteBuffer buf = ByteBuffer.allocate(authorSize);\n            view.read(\"author\", buf);\n            buf.flip();\n            byte[] data = new byte[buf.remaining()];\n            buf.get(data);\n            System.out.println(\"  author: \" + new String(data, StandardCharsets.UTF_8));\n\n            // Alternative: read via Files.getAttribute\n            byte[] versionBytes = (byte[]) Files.getAttribute(file,\n                \"user:version\");\n            System.out.println(\"  version: \"\n                + new String(versionBytes, StandardCharsets.UTF_8));\n\n            // Remove attribute\n            view.delete(\"version\");\n            System.out.println(\"  After delete: \" + view.list());\n\n        } else {\n            System.out.println(\"User-defined attributes not supported on this filesystem.\");\n        }\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-reading-attributes-by-name",
      children: "10.5 Reading Attributes by Name"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.util.Map;\n\n/**\n * Demonstrates reading individual file attributes by name string.\n */\npublic class AttributeByName {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"by-name\", \".txt\");\n        Files.writeString(file, \"Reading attributes by name\");\n\n        // Read individual attributes by name\n        System.out.println(\"size:        \" + Files.getAttribute(file, \"size\"));\n        System.out.println(\"isDirectory: \" + Files.getAttribute(file, \"isDirectory\"));\n        System.out.println(\"isRegular:   \" + Files.getAttribute(file, \"isRegularFile\"));\n        System.out.println(\"isSymbolic:  \" + Files.getAttribute(file, \"isSymbolicLink\"));\n        System.out.println(\"lastModified: \"\n            + Files.getAttribute(file, \"lastModifiedTime\"));\n        System.out.println(\"creationTime: \"\n            + Files.getAttribute(file, \"creationTime\"));\n        System.out.println(\"fileKey:     \" + Files.getAttribute(file, \"fileKey\"));\n\n        // Bulk read\n        System.out.println(\"\\n=== Bulk attributes ===\");\n        Map<String, Object> attrs = Files.readAttributes(file, \"*\");\n        attrs.forEach((key, value) ->\n            System.out.println(\"  \" + key + \" = \" + value));\n\n        // Read view-specific attributes\n        System.out.println(\"\\n=== DOS-specific ===\");\n        try {\n            Map<String, Object> dosAttrs = Files.readAttributes(file, \"dos:*\");\n            dosAttrs.forEach((key, value) ->\n                System.out.println(\"  \" + key + \" = \" + value));\n        } catch (UnsupportedOperationException e) {\n            System.out.println(\"  DOS attributes not supported\");\n        }\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-performance-considerations",
      children: "11. Performance Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-buffer-size-tuning",
      children: "11.1 Buffer Size Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3;\n\nimport java.io.IOException;\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\n/**\n * Benchmarks different buffer sizes for FileChannel throughput.\n */\npublic class BufferSizeBenchmark {\n\n    static final int FILE_SIZE = 50 * 1024 * 1024;  // 50 MB\n    static final int[] BUFFER_SIZES = {256, 1024, 4096, 8192, 16384,\n        65536, 262144, 1048576};\n\n    public static void main(String[] args) throws Exception {\n        Path file = Files.createTempFile(\"bench\", \".dat\");\n\n        // Create a test file\n        try (RandomAccessFile raf = new RandomAccessFile(file.toFile(), \"rw\");\n             FileChannel ch = raf.getChannel()) {\n            ByteBuffer data = ByteBuffer.allocateDirect(65536);\n            // Fill with pattern\n            for (int i = 0; i < data.capacity(); i++) {\n                data.put((byte) (i & 0xFF));\n            }\n            data.flip();\n\n            long written = 0;\n            while (written < FILE_SIZE) {\n                data.rewind();\n                int limit = (int) Math.min(data.capacity(), FILE_SIZE - written);\n                data.limit(limit);\n                written += ch.write(data);\n            }\n        }\n\n        System.out.printf(\"%-12s %12s %12s%n\", \"Buffer Size\", \"Read (ms)\", \"MB/s\");\n        System.out.println(\"-\".repeat(40));\n\n        for (int bufSize : BUFFER_SIZES) {\n            long elapsed = benchmarkRead(file, bufSize);\n            double mbps = (FILE_SIZE / (double) (1024 * 1024))\n                / (elapsed / 1000.0);\n            System.out.printf(\"%-12d %12d %11.1f%n\", bufSize, elapsed, mbps);\n        }\n\n        Files.deleteIfExists(file);\n    }\n\n    static long benchmarkRead(Path file, int bufferSize) throws IOException {\n        try (RandomAccessFile raf = new RandomAccessFile(file.toFile(), \"r\");\n             FileChannel ch = raf.getChannel()) {\n\n            ByteBuffer buf = ByteBuffer.allocateDirect(bufferSize);\n            long start = System.nanoTime();\n\n            while (ch.read(buf) != -1) {\n                buf.clear();\n            }\n\n            return (System.nanoTime() - start) / 1_000_000;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Traditional IO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream-oriented, blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads byte-by-byte, thread-per-connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple file operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer + Channel + Selector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking, scatter/gather"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance networking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NIO.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced filesystem API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path, FileVisitor, WatchService"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File tree walking, directory monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java HTTP Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1 + HTTP/2 client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async via CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern HTTP communication"
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
            children: "Key Classes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ByteBuffer, CharBuffer, IntBuffer, MappedByteBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "flip() before read, clear()/compact() after read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Channels"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileChannel, SocketChannel, ServerSocketChannel, DatagramChannel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileChannel.transferTo() for zero-copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selectors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selector, SelectionKey, SelectableChannel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register channels with interest ops OP_READ/OP_WRITE/OP_ACCEPT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Async"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsynchronousSocketChannel, CompletionHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback-based or Future-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path, Files, FileVisitor, WatchService"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files.walkFileTree() for recursive operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Servers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Processing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-Time Systems"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NIO Selector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Netty, Undertow core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput gateways"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service mesh proxies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-Mapped Files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large file processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared memory IPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java HTTP Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal service calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WatchService"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot reload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File ingestion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config file monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary advantage of using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileChannel.transferTo()"
        }), "?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It compresses data during transfer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It performs zero-copy transfer directly between channels"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It encrypts data automatically"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It is the only way to read files"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It performs zero-copy transfer directly between channels.** transferTo/transferFrom avoids copying data through application memory, making it highly efficient for large file transfers.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In NIO Selector, which method returns the set of channels ready for I/O operations?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "select()"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "keys()"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "selectedKeys()"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wakeup()"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) `selectedKeys()`.** After select() blocks until channels are ready, selectedKeys() returns the Set of SelectionKeys ready for processing.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ByteBuffer.flip()"
        }), " do?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Clears the buffer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Switches from write mode to read mode by setting limit to position and position to 0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Increases buffer capacity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Rewinds the buffer to the beginning"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Switches from write mode to read mode.** After writing data into a buffer, flip() prepares it for reading by setting limit to current position and position to 0.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which feature distinguishes Java NIO.2 from the original NIO?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Non-blocking I/O"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) FileVisitor and WatchService for filesystem traversal and monitoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ByteBuffer API"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Channel-based I/O"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) FileVisitor and WatchService.** NIO.2 enhanced the original NIO with a comprehensive filesystem API including symbolic link support, file tree walking, and directory change monitoring.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the following key topics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIO Architecture"
        }), ": buffer-oriented I/O with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ByteBuffer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CharBuffer"
        }), ", and other buffer types; the four buffer properties (capacity, position, limit, mark); essential operations (flip, clear, compact, rewind); and the contrast between direct and heap buffers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Channels"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileChannel"
        }), " for advanced file I/O including position management, zero-copy transfers via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transferTo"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "transferFrom"
        }), ", file locking with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileLock"
        }), ", and memory-mapped files through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MappedByteBuffer"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scatter/Gather"
        }), ": Reading into multiple buffers and writing from multiple buffers in a single operation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selectors"
        }), ": The multiplexed I/O model using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Selector"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SelectionKey"
        }), ", and the four interest operations (", (0,jsx_runtime.jsx)(_components.code, {
          children: "OP_ACCEPT"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OP_READ"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OP_WRITE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OP_CONNECT"
        }), "); the non-blocking event loop pattern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP Networking"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SocketChannel"
        }), " for client connections and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ServerSocketChannel"
        }), " for server sockets, both in blocking and non-blocking modes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UDP Networking"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DatagramChannel"
        }), " for connectionless communication and multicast with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MembershipKey"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java HTTP Client (Java 11+)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpClient"
        }), " with synchronous (", (0,jsx_runtime.jsx)(_components.code, {
          children: "send"
        }), ") and asynchronous (", (0,jsx_runtime.jsx)(_components.code, {
          children: "sendAsync"
        }), ") modes; request builders for GET, POST, PUT, DELETE; body publishers and handlers; WebSocket support."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous NIO"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AsynchronousFileChannel"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AsynchronousSocketChannel"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AsynchronousServerSocketChannel"
        }), " with both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Future"
        }), "-based and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletionHandler"
        }), "-based APIs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIO.2 File Operations"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Path"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Files"
        }), " utility methods (walk, find, lines, list), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DirectoryStream"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileVisitor"
        }), " for tree traversal, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WatchService"
        }), " for monitoring filesystem events."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIO.2 File Attributes"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BasicFileAttributes"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PosixFileAttributes"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DosFileAttributes"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UserDefinedFileAttributeView"
        }), ", and attribute-by-name access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-filechannel-copy",
      children: "Exercise 1: FileChannel Copy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that copies a file using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FileChannel"
      }), " with a configurable buffer size. Accept source, destination, and buffer size as command-line arguments. Measure and print the time taken for the copy. Compare heap vs. direct buffers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.nio.channels.*;\nimport java.nio.file.*;\n\npublic class Exercise1 {\n    public static void main(String[] args) throws Exception {\n        if (args.length < 2) {\n            System.err.println(\"Usage: Exercise1 <source> <dest> [bufferSize]\");\n            return;\n        }\n        Path source = Paths.get(args[0]);\n        Path dest = Paths.get(args[1]);\n        int bufSize = args.length > 2 ? Integer.parseInt(args[2]) : 8192;\n\n        // TODO: Implement FileChannel copy\n        // 1. Open source as ReadableByteChannel\n        // 2. Open dest as WritableByteChannel\n        // 3. Allocate a direct buffer of bufSize\n        // 4. Loop: read into buffer, flip, write from buffer, clear\n        // 5. Measure and print elapsed time\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-non-blocking-chat-server",
      children: "Exercise 2: Non-Blocking Chat Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NonBlockingEchoServer"
      }), " to support multiple simultaneous clients where messages from one client are broadcast to all other connected clients. Use a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Selector"
      }), " and maintain a list of connected clients."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.*;\nimport java.nio.charset.StandardCharsets;\nimport java.util.*;\n\npublic class Exercise2 {\n    // TODO: Implement broadcast chat server\n    // 1. Use Selector with ServerSocketChannel\n    // 2. On OP_ACCEPT: register new client, add to client list\n    // 3. On OP_READ: read message, broadcast to all other clients\n    // 4. On client disconnect: remove from list, cancel key\n    // 5. Handle partial writes by tracking per-client write buffers\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-http-client-with-json-processing",
      children: "Exercise 3: HTTP Client with JSON Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that uses the Java 11+ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HttpClient"
      }), " to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Send a GET request to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.github.com/users/%7Busername%7D",
          children: "https://api.github.com/users/{username}"
        }), " (use \"octocat\" as default)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse the JSON response to extract name, public_repos, and followers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Send a POST request to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://httpbin.org/post",
          children: "https://httpbin.org/post"
        }), " with a JSON body"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Print both responses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.net.URI;\nimport java.net.http.*;\n\npublic class Exercise3 {\n    public static void main(String[] args) throws Exception {\n        String username = args.length > 0 ? args[0] : \"octocat\";\n        // TODO: Implement HTTP client with JSON\n        // 1. Create HttpClient\n        // 2. GET https://api.github.com/users/{username}\n        // 3. Parse JSON to extract name, public_repos, followers\n        // 4. POST to https://httpbin.org/post with JSON body\n        // 5. Print both responses\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-memory-mapped-file-comparator",
      children: "Exercise 4: Memory-Mapped File Comparator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that memory-maps two files and compares them byte-by-byte using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MappedByteBuffer"
      }), ". Report the first differing position and whether the files are identical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.io.RandomAccessFile;\nimport java.nio.MappedByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.file.*;\n\npublic class Exercise4 {\n    public static void main(String[] args) throws Exception {\n        if (args.length < 2) {\n            System.err.println(\"Usage: Exercise4 <file1> <file2>\");\n            return;\n        }\n        // TODO: Implement memory-mapped file comparison\n        // 1. Map both files with FileChannel.map(MapMode.READ_ONLY)\n        // 2. Compare byte-by-byte up to the smaller file's size\n        // 3. Print \"Identical\" or first diff position\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-directory-tree-size-analyzer",
      children: "Exercise 5: Directory Tree Size Analyzer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Files.walkFileTree()"
      }), " with a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FileVisitor"
      }), " to analyze a directory tree. Print the total number of files, total size in bytes, and the top 10 largest files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.BasicFileAttributes;\nimport java.util.*;\n\npublic class Exercise5 {\n    public static void main(String[] args) throws IOException {\n        Path start = args.length > 0 ? Paths.get(args[0]) : Paths.get(\".\");\n        // TODO: Implement directory tree analyzer\n        // 1. Create a custom FileVisitor that tracks file count and sizes\n        // 2. Use a PriorityQueue to track top 10 largest files\n        // 3. Print total files, total size, top 10 largest\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-udp-pingpong",
      children: "Exercise 6: UDP Ping/Pong"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a UDP ping/pong application where the client sends a timestamped message and the server responds with the same message. The client calculates and prints round-trip time for each ping."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.net.*;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.DatagramChannel;\nimport java.nio.charset.StandardCharsets;\n\npublic class Exercise6 {\n    static final int PORT = 9093;\n\n    public static void main(String[] args) throws Exception {\n        if (args.length == 0) {\n            System.err.println(\"Usage: Exercise6 server|client\");\n            return;\n        }\n        // TODO: Implement UDP ping/pong\n        // If \"server\": bind, receive, echo back\n        // If \"client\": send 5 pings with timestamps, print RTT\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-file-change-monitor",
      children: "Exercise 7: File Change Monitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WatchService"
      }), " to monitor a directory for changes. When a file is created, modified, or deleted, print the event type and filename. The program should continue until the user presses Ctrl+C."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.io.IOException;\nimport java.nio.file.*;\n\npublic class Exercise7 {\n    public static void main(String[] args) throws IOException, InterruptedException {\n        Path dir = args.length > 0 ? Paths.get(args[0]) : Paths.get(\".\");\n        System.out.println(\"Monitoring: \" + dir.toAbsolutePath());\n        // TODO: Implement WatchService monitor\n        // 1. Create WatchService and register directory for ENTRY_CREATE,\n        //    ENTRY_MODIFY, ENTRY_DELETE\n        // 2. Loop: take() a WatchKey, process events, reset key\n        // 3. Print each event with its kind and filename\n        // 4. Run until Ctrl+C\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-async-file-copy",
      children: "Exercise 8: Async File Copy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that copies a file using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsynchronousFileChannel"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletionHandler"
      }), ". The program should verify that the copy is identical to the source and print the time taken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.nio.ByteBuffer;\nimport java.nio.channels.*;\nimport java.nio.file.*;\nimport java.util.concurrent.CountDownLatch;\n\npublic class Exercise8 {\n    public static void main(String[] args) throws Exception {\n        if (args.length < 2) {\n            System.err.println(\"Usage: Exercise8 <source> <dest>\");\n            return;\n        }\n        Path source = Paths.get(args[0]);\n        Path dest = Paths.get(args[1]);\n        // TODO: Implement async file copy with CompletionHandler\n        // 1. Open AsynchronousFileChannel for source (READ)\n        // 2. Open AsynchronousFileChannel for dest (WRITE, CREATE)\n        // 3. Use a CompletionHandler to chain read → write → read\n        // 4. When complete, verify files are identical\n        // 5. Print elapsed time\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-custom-file-attributes",
      children: "Exercise 9: Custom File Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a program that stores custom metadata (author, creation timestamp, tags) as user-defined file attributes on a file, then reads them back. Test whether your filesystem supports user-defined attributes and print an appropriate message if not."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.nio.file.attribute.UserDefinedFileAttributeView;\n\npublic class Exercise9 {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"exercise9\", \".dat\");\n        // TODO: Implement custom attributes\n        // 1. Get UserDefinedFileAttributeView\n        // 2. If null, print \"Not supported\" and exit\n        // 3. Store \"author\", \"created\", and \"tags\"\n        // 4. List all attribute names\n        // 5. Read and print each attribute\n        // 6. Delete one attribute\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-scattergather-protocol-parser",
      children: "Exercise 10: Scatter/Gather Protocol Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a program that reads a binary file with a fixed 16-byte header (4-byte magic, 4-byte type, 8-byte length) followed by a variable-length body. Use scatter I/O to read the header into one buffer and the body into another. Display the parsed fields."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter3.exercises;\n\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\n\npublic class Exercise10 {\n    public static void main(String[] args) throws Exception {\n        Path file = Files.createTempFile(\"protocol\", \".bin\");\n\n        // Create sample protocol data\n        try (RandomAccessFile raf = new RandomAccessFile(file.toFile(), \"rw\");\n             FileChannel ch = raf.getChannel()) {\n\n            ByteBuffer header = ByteBuffer.allocate(16);\n            header.putInt(0xDEADBEEF);     // magic\n            header.putInt(1);               // type\n            header.putLong(12);             // body length\n            header.flip();\n\n            ByteBuffer body = ByteBuffer.wrap(\n                \"Hello, world!\".getBytes());\n            ch.write(new ByteBuffer[]{header, body});\n        }\n\n        // TODO: Implement scatter read and parsing\n        // 1. Open FileChannel in read mode\n        // 2. Create two buffers: header (16 bytes), body (variable)\n        // 3. Read body length from header after scatter\n        // 4. Print magic (as hex), type, body length, body content\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter: Java NIO & Networking"
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