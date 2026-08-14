"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96616],{

/***/ 58089
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_10_application_layer_md_f4e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-10-application-layer-md-f4e.json
const site_docs_courses_computer_networks_10_application_layer_md_f4e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/10-application-layer","title":"Chapter 10: The Application Layer → Complete Reference","description":"GFG/Javatpoint Depth → Comprehensive Coverage of Application Layer Protocols, Architectures, Implementations, and Interview Corner","source":"@site/docs/courses/computer-networks/10-application-layer.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/10-application-layer","permalink":"/ai-engineering-journey/computer-networks/10-application-layer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-application-layer","slug":"/computer-networks/10-application-layer","title":"Chapter 10: The Application Layer → Complete Reference","sidebar_label":"Chapter 10: The Application Layer → Complete Reference","sidebar_position":10},"sidebar":"course-computer-networks","previous":{"title":"Chapter 9: TCP Congestion Control","permalink":"/ai-engineering-journey/computer-networks/09-tcp-congestion"},"next":{"title":"Chapter 11: Network Security","permalink":"/ai-engineering-journey/computer-networks/11-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/10-application-layer.md


const frontMatter = {
	id: '10-application-layer',
	slug: '/computer-networks/10-application-layer',
	title: 'Chapter 10: The Application Layer → Complete Reference',
	sidebar_label: 'Chapter 10: The Application Layer → Complete Reference',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: The Application Layer → Complete Reference';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "10.1 Application Layer Architecture",
  "id": "101-application-layer-architecture",
  "level": 2
}, {
  "value": "10.1.1 Client-Server Architecture",
  "id": "1011-client-server-architecture",
  "level": 3
}, {
  "value": "10.1.2 Peer-to-Peer (P2P) Architecture",
  "id": "1012-peer-to-peer-p2p-architecture",
  "level": 3
}, {
  "value": "10.1.3 Client-Server vs P2P Comparison Table",
  "id": "1013-client-server-vs-p2p-comparison-table",
  "level": 3
}, {
  "value": "10.1.4 Advantages &amp; Disadvantages",
  "id": "1014-advantages--disadvantages",
  "level": 3
}, {
  "value": "10.1.5 Complexity Analysis",
  "id": "1015-complexity-analysis",
  "level": 3
}, {
  "value": "10.1.6 Edge Cases",
  "id": "1016-edge-cases",
  "level": 3
}, {
  "value": "10.2 HTTP → Hypertext Transfer Protocol",
  "id": "102-http--hypertext-transfer-protocol",
  "level": 2
}, {
  "value": "10.2.1 HTTP/1.0 and HTTP/1.1",
  "id": "1021-http10-and-http11",
  "level": 3
}, {
  "value": "10.2.2 HTTP/2",
  "id": "1022-http2",
  "level": 3
}, {
  "value": "10.2.3 HTTP/3",
  "id": "1023-http3",
  "level": 3
}, {
  "value": "TypeScript Implementation: HTTPClient",
  "id": "typescript-implementation-httpclient",
  "level": 3
}, {
  "value": "10.3 DNS → Domain Name System",
  "id": "103-dns--domain-name-system",
  "level": 2
}, {
  "value": "10.3.1 DNS Architecture",
  "id": "1031-dns-architecture",
  "level": 3
}, {
  "value": "10.3.2 DNS Resolution Process",
  "id": "1032-dns-resolution-process",
  "level": 3
}, {
  "value": "10.3.3 DNS Security",
  "id": "1033-dns-security",
  "level": 3
}, {
  "value": "TypeScript Implementation: DNSResolver",
  "id": "typescript-implementation-dnsresolver",
  "level": 3
}, {
  "value": "10.4 Email Protocols",
  "id": "104-email-protocols",
  "level": 2
}, {
  "value": "10.4.1 SMTP → Simple Mail Transfer Protocol",
  "id": "1041-smtp--simple-mail-transfer-protocol",
  "level": 3
}, {
  "value": "10.4.2 POP3 → Post Office Protocol v3",
  "id": "1042-pop3--post-office-protocol-v3",
  "level": 3
}, {
  "value": "10.4.3 IMAP → Internet Message Access Protocol",
  "id": "1043-imap--internet-message-access-protocol",
  "level": 3
}, {
  "value": "10.4.4 Email Protocols Comparison",
  "id": "1044-email-protocols-comparison",
  "level": 3
}, {
  "value": "TypeScript Implementation: SMTPValidator",
  "id": "typescript-implementation-smtpvalidator",
  "level": 3
}, {
  "value": "10.5 FTP → File Transfer Protocol",
  "id": "105-ftp--file-transfer-protocol",
  "level": 2
}, {
  "value": "10.5.1 FTP Architecture",
  "id": "1051-ftp-architecture",
  "level": 3
}, {
  "value": "10.5.2 Active vs Passive Mode",
  "id": "1052-active-vs-passive-mode",
  "level": 3
}, {
  "value": "10.6 SSH → Secure Shell",
  "id": "106-ssh--secure-shell",
  "level": 2
}, {
  "value": "10.7 DHCP → Dynamic Host Configuration Protocol",
  "id": "107-dhcp--dynamic-host-configuration-protocol",
  "level": 2
}, {
  "value": "10.7.1 DORA Process",
  "id": "1071-dora-process",
  "level": 3
}, {
  "value": "10.8 SNMP → Simple Network Management Protocol",
  "id": "108-snmp--simple-network-management-protocol",
  "level": 2
}, {
  "value": "10.9 WebSocket",
  "id": "109-websocket",
  "level": 2
}, {
  "value": "10.10 gRPC",
  "id": "1010-grpc",
  "level": 2
}, {
  "value": "10.11 HTTP Versions Comparison",
  "id": "1011-http-versions-comparison",
  "level": 2
}, {
  "value": "10.12 Comparison Tables",
  "id": "1012-comparison-tables",
  "level": 2
}, {
  "value": "Protocol Comparison Table",
  "id": "protocol-comparison-table",
  "level": 3
}, {
  "value": "Application Layer vs Other Layers",
  "id": "application-layer-vs-other-layers",
  "level": 3
}, {
  "value": "Application Domain Matrix",
  "id": "application-domain-matrix",
  "level": 3
}, {
  "value": "Quick Reference: HTTP Status Codes",
  "id": "quick-reference-http-status-codes",
  "level": 3
}, {
  "value": "10.13 Interview Corner",
  "id": "1013-interview-corner",
  "level": 2
}, {
  "value": "Q1: Difference between DNS Recursive and Iterative Resolution?",
  "id": "q1-difference-between-dns-recursive-and-iterative-resolution",
  "level": 3
}, {
  "value": "Q2: Difference between HTTP Persistent and Non-Persistent Connections?",
  "id": "q2-difference-between-http-persistent-and-non-persistent-connections",
  "level": 3
}, {
  "value": "Q3: Difference between SMTP and HTTP?",
  "id": "q3-difference-between-smtp-and-http",
  "level": 3
}, {
  "value": "Q4: Difference between WebSocket and HTTP?",
  "id": "q4-difference-between-websocket-and-http",
  "level": 3
}, {
  "value": "Q5: How does FTP Active Mode differ from Passive Mode?",
  "id": "q5-how-does-ftp-active-mode-differ-from-passive-mode",
  "level": 3
}, {
  "value": "Q6: What is DNS Caching and why is TTL important?",
  "id": "q6-what-is-dns-caching-and-why-is-ttl-important",
  "level": 3
}, {
  "value": "Q7: What is the N+1 Query Problem?",
  "id": "q7-what-is-the-n1-query-problem",
  "level": 3
}, {
  "value": "Q8: What is HTTP Request Smuggling?",
  "id": "q8-what-is-http-request-smuggling",
  "level": 3
}, {
  "value": "Q9: How does HTTPS differ from HTTP?",
  "id": "q9-how-does-https-differ-from-http",
  "level": 3
}, {
  "value": "Q10: Explain the Three-Way Handshake and its Application Layer Impact",
  "id": "q10-explain-the-three-way-handshake-and-its-application-layer-impact",
  "level": 3
}, {
  "value": "10.14 Applications in Real Systems",
  "id": "1014-applications-in-real-systems",
  "level": 2
}, {
  "value": "Nginx and Apache (HTTP Servers)",
  "id": "nginx-and-apache-http-servers",
  "level": 3
}, {
  "value": "Chrome HTTP/3 Implementation",
  "id": "chrome-http3-implementation",
  "level": 3
}, {
  "value": "Cloudflare DNS (1.1.1.1)",
  "id": "cloudflare-dns-1111",
  "level": 3
}, {
  "value": "Sendmail vs Postfix (MTA)",
  "id": "sendmail-vs-postfix-mta",
  "level": 3
}, {
  "value": "ðŸ’¡ Pro Tips",
  "id": "ðÿ-pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "10.15 Chapter Quiz",
  "id": "1015-chapter-quiz",
  "level": 2
}, {
  "value": "Case Study: DNS Infrastructure Migration for a Global E-Commerce Platform",
  "id": "case-study-dns-infrastructure-migration-for-a-global-e-commerce-platform",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "10.16 Summary",
  "id": "1016-summary",
  "level": 2
}, {
  "value": "10.17 Exercises",
  "id": "1017-exercises",
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
        id: "chapter-10-the-application-layer--complete-reference",
        children: "Chapter 10: The Application Layer → Complete Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GFG/Javatpoint Depth → Comprehensive Coverage of Application Layer Protocols, Architectures, Implementations, and Interview Corner"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare client-server and peer-to-peer application architectures with real-world trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the DNS resolution pipeline from browser to authoritative server with caching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze HTTP message formats and the evolution from HTTP/1.0 through HTTP/3 over QUIC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement HTTP clients and servers in C++ and Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain email protocols: SMTP (push), POP3 and IMAP (pull) with conversation traces."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe FTP active vs passive modes and when each applies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand DHCP DORA, SNMP manager-agent architecture, WebSocket upgrade, and gRPC streaming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on DNS recursion vs iteration, persistent vs non-persistent HTTP, and WebSocket vs HTTP."
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
        href: "../../assets/images/lessons/computer-networks/10-application-layer/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/10-application-layer/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/10-application-layer/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/10-application-layer/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/10-application-layer/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/10-application-layer/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#101-application-layer-architecture",
          children: "Application Layer Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#102-http--hypertext-transfer-protocol",
          children: "HTTP → Hypertext Transfer Protocol"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#103-dns--domain-name-system",
          children: "DNS → Domain Name System"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#104-email-protocols",
          children: "Email Protocols"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#105-ftp--file-transfer-protocol",
          children: "FTP → File Transfer Protocol"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#106-ssh--secure-shell",
          children: "SSH → Secure Shell"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#107-dhcp--dynamic-host-configuration-protocol",
          children: "DHCP → Dynamic Host Configuration Protocol"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#108-snmp--simple-network-management-protocol",
          children: "SNMP → Simple Network Management Protocol"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#109-websocket",
          children: "WebSocket"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1010-grpc",
          children: "gRPC"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1011-http-versions-comparison",
          children: "HTTP Versions Comparison"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1012-comparison-tables",
          children: "Comparison Tables"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1013-interview-corner",
          children: "Interview Corner"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1014-applications-in-real-systems",
          children: "Applications in Real Systems"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1015-chapter-quiz",
          children: "Chapter Quiz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1016-summary",
          children: "Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1017-exercises",
          children: "Exercises"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Architecture[\"Application Architectures\"]\n        A[Client-Server] --> B[HTTP / FTP / SMTP / DNS]\n        C[Peer-to-Peer] --> D[Bittorrent / Blockchain]\n    end\n\n    subgraph Protocols[\"Core Application Protocols\"]\n        E[HTTP/1.1] --> F[HTTP/2]\n        F --> G[HTTP/3 over QUIC]\n        H[DNS] --> I[53/UDP + TCP]\n        J[Email] --> K[SMTP push]\n        K --> L[POP3 / IMAP pull]\n        M[FTP] --> N[Control 21/TCP + Data]\n        O[DHCP] --> P[DORA on 67/68 UDP]\n        Q[SNMP] --> R[GET/SET/TRAP on 161 UDP]\n    end\n\n    subgraph Modern[\"Modern Protocols\"]\n        S[WebSocket] --> T[Full-Duplex over HTTP Upgrade]\n        U[gRPC] --> V[HTTP/2 + Protobuf Streaming]\n    end\n\n    A --> Protocols\n    C --> Modern\n    Protocols --> Modern\n\n    classDef arch fill:#FF9800,color:#fff\n    classDef proto fill:#2196F3,color:#fff\n    classDef modern fill:#4CAF50,color:#fff\n    class A,C arch\n    class E,F,G,H,J,K,L,M,N,O,Q,R proto\n    class S,T,U,V modern\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-application-layer-architecture",
      children: "10.1 Application Layer Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The application layer is Layer 7 of the OSI model and the top of the TCP/IP model. It provides network services directly to end-user applications. Two dominant architectures exist: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "client-server"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "peer-to-peer (P2P)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1011-client-server-architecture",
      children: "10.1.1 Client-Server Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant kitchen (server) serves many diners (clients). Diners place orders and wait. The kitchen never eats; it only serves. If too many diners arrive, the kitchen is the bottleneck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralized server provides services to multiple clients."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clients do not communicate directly with each other."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server must always be on, with a fixed, well-known IP address."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clients are intermittently connected and may have dynamic IPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scales vertically (buy a bigger server) or horizontally (add load-balanced replicas)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " A bank's central database server → all ATM machines connect to it. No ATM talks directly to another ATM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → Client-Server Request Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client resolves server hostname to IP via DNS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens TCP connection to server IP:port."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends request (HTTP GET /api/data)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server receives request, processes it (queries DB, computes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server sends response (JSON, HTML)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client receives and renders response."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection may persist for further requests or close."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → Client-Server (HTTP-like):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT:\n  addr ← DNS.resolve(\"api.example.com\")\n  sock ← TCP.connect(addr, 80)\n  sock.send(\"GET /data HTTP/1.1\\r\\nHost: api.example.com\\r\\n\\r\\n\")\n  response ← sock.recv()\n  PRINT response.body\n  sock.close()\n\nSERVER:\n  sock ← TCP.bind(80)\n  LOOP:\n    client ← sock.accept()\n    request ← client.recv()\n    IF request contains \"GET /data\":\n      client.send(\"HTTP/1.1 200 OK\\r\\nContent-Type: application/json\\r\\n\\r\\n{\\\"key\\\":\\\"value\\\"}\")\n    ELSE:\n      client.send(\"HTTP/1.1 404 Not Found\\r\\n\\r\\n\")\n    client.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1012-peer-to-peer-p2p-architecture",
      children: "10.1.2 Peer-to-Peer (P2P) Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A potluck dinner → every guest brings a dish. If you want food, you can get it from anyone. There is no central kitchen. The more guests arrive, the more food there is (self-scaling)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No always-on server. Peers are both clients and servers (\"servents\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-scalability: more peers = more resources."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Peers are intermittently connected with changing IPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires a discovery mechanism (tracker, DHT)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples: BitTorrent, IPFS, Bitcoin, Napster."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges:"
      }), " Security (trusting peers), discoverability, ISP-unfriendly traffic patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → P2P File Download (BitTorrent-like):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User opens a .torrent file or magnet link pointing to a tracker."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client contacts tracker to get a list of peer IPs with the file."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client connects to multiple peers simultaneously."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client requests different pieces from different peers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client downloads pieces and uploads pieces it already has."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entire file is assembled from pieces; client continues seeding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → P2P Download:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT:\n  peers ← TRACKER.get_peers(info_hash)\n  FOR each peer IN peers:\n    sock ← TCP.connect(peer.ip, peer.port)\n    sock.send(REQUEST_PIECE(piece_index))\n    data ← sock.recv()\n    FILE.write_at(piece_index, data)\n    REPORT_Have(piece_index, tracker)\n  IF all pieces assembled:\n    FILE.assemble()\n\nTRACKER:\n  peers ← {}\n  LOOP:\n    msg ← sock.recv()\n    IF msg IS REGISTER:\n      peers.add(msg.ip, msg.port, msg.file)\n    IF msg IS QUERY:\n      sock.send(peers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1013-client-server-vs-p2p-comparison-table",
      children: "10.1.3 Client-Server vs P2P Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Peer-to-Peer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Central authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (distributed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-bound (O(N) server load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-scaling (O(1) per peer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High server/infra cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (peers contribute resources)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resilient (peers replace each other)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central control, easier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder → trust, Sybil attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Professional admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-managed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed, well-known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, discovered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web, Email, DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BitTorrent, Bitcoin, IPFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (server always on)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (needs peer discovery)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Legal liability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server operator liable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to sue individuals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1014-advantages--disadvantages",
      children: "10.1.4 Advantages & Disadvantages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client-Server"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server is bottleneck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy backup & security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High infrastructure cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent data state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not scale with users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "P2P"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-scaling (more peers = faster)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No central authority/control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No server infrastructure cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security & trust issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resilient to node failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT/firewall traversal problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Censorship-resistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1015-complexity-analysis",
      children: "10.1.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time to Serve N Clients"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space per Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) (linear with clients)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server processes each request sequentially or in thread pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2P (tracker)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per peer (constant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) tracker state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker only maintains peer list; data transfer is P2P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2P (DHT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) per peer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed hash table requires log N hops to find data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " In client-server, the server handles all N clients, so CPU/memory grows linearly with the user base. In P2P, each new peer contributes resources, so total system capacity grows with demand → this is called \"self-scaling.\" However, P2P has higher lookup overhead (DHT is O(log N) per lookup)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1016-edge-cases",
      children: "10.1.6 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flash crowd (client-server):"
        }), " Thousands of clients request simultaneously. Server may crash. Mitigation: auto-scaling groups, CDN caching, rate limiting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Free-riding (P2P):"
        }), " Peers download but never upload. Mitigation: tit-for-tat (BitTorrent), reputation systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT traversal (P2P):"
        }), " Peers behind NAT cannot accept incoming connections. Mitigation: UDP hole punching, STUN/TURN relay servers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sybil attack (P2P):"
        }), " Attacker creates many fake peers to control the network. Mitigation: proof-of-work, trusted identities, social graphs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Censorship (client-server):"
        }), " Centralized server can be shut down. P2P is more resilient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-http--hypertext-transfer-protocol",
      children: "10.2 HTTP → Hypertext Transfer Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP is the foundation of data communication on the Web. It is a stateless, application-layer protocol operating over TCP (HTTP/1.x, HTTP/2) or QUIC (HTTP/3)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1021-http10-and-http11",
      children: "10.2.1 HTTP/1.0 and HTTP/1.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " HTTP/1.0 is like calling a store, asking for one item, hanging up, then calling again for the next item. HTTP/1.1 is like calling once and asking for several items in sequence on the same call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP/1.0 (RFC 1945):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One request per TCP connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection closes after each response."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No Host header (one server per IP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No persistent connections."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP/1.1 (RFC 7230-7235):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persistent connections by default (Connection: keep-alive)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipelining (send multiple requests without waiting for responses)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host header mandatory (virtual hosting)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunked transfer encoding."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional methods: PUT, DELETE, OPTIONS, PATCH."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache control headers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → HTTP/1.1 Request-Response Cycle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Browser extracts hostname from URL (", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser obtains IP via DNS resolution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser opens TCP connection to IP on port 80 (or 443 for HTTPS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser sends HTTP request line + headers (e.g., GET /index.html HTTP/1.1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server processes request → maps URL to file or handler."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server sends HTTP status line + headers + optional body."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser parses response; if HTML, parses and fetches embedded resources."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection stays open for next request (persistent)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection closes after timeout or when client sends Connection: close."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → HTTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION http_get(url):\n  host, path ← PARSE_URL(url)\n  ip ← DNS.resolve(host)\n  sock ← TCP.connect(ip, 80)\n  request = \"GET \" + path + \" HTTP/1.1\\r\\n\"\n  request += \"Host: \" + host + \"\\r\\n\"\n  request += \"Connection: close\\r\\n\\r\\n\"\n  sock.send(request)\n  response ← \"\"\n  WHILE sock.has_data():\n    response += sock.recv(4096)\n  sock.close()\n  RETURN response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → HTTP Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION http_server(port):\n  server ← TCP.bind(port)\n  LOOP:\n    client ← server.accept()\n    request ← client.recv(8192)\n    method, path, version ← PARSE_REQUEST_LINE(request)\n    headers ← PARSE_HEADERS(request)\n    IF path == \"/\":\n      body = \"<h1>Hello World</h1>\"\n      status = \"200 OK\"\n    ELSE:\n      body = \"<h1>404 Not Found</h1>\"\n      status = \"404 Not Found\"\n    response = \"HTTP/1.1 \" + status + \"\\r\\n\"\n    response += \"Content-Length: \" + LEN(body) + \"\\r\\n\\r\\n\"\n    response += body\n    client.send(response)\n    client.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table → HTTP/1.1 Request:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse URL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["URL: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://example.com/index.html",
              children: "http://example.com/index.html"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL parsed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolve host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "example.com → 93.184.216.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP obtained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN → 93.184.216.34:80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP handshake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET /index.html HTTP/1.1\\r\\nHost: example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request sent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse method=GET, path=/index.html"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parsed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/var/www/index.html exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File loaded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1 200 OK\\r\\nContent-Length: 512\\r\\n\\r\\n<html>..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response built"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1 200 OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Length: 512, read 512 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body parsed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection closed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → HTTP Client (using Boost.Asio):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <boost/asio.hpp>\n\nusing boost::asio::ip::tcp;\n\nclass HttpClient {\npublic:\n    std::string get(const std::string& host, const std::string& path) {\n        boost::asio::io_context io;\n        tcp::resolver resolver(io);\n        tcp::socket socket(io);\n\n        auto endpoints = resolver.resolve(host, \"80\");\n        boost::asio::connect(socket, endpoints);\n\n        std::string request = \"GET \" + path + \" HTTP/1.1\\r\\n\"\n                              \"Host: \" + host + \"\\r\\n\"\n                              \"Connection: close\\r\\n\\r\\n\";\n        socket.write_some(boost::asio::buffer(request));\n\n        boost::asio::streambuf response;\n        boost::system::error_code ec;\n        boost::asio::read(socket, response, ec);\n\n        std::string result = boost::asio::buffer_cast<const char*>(response.data());\n        return result;\n    }\n};\n\nint main() {\n    HttpClient client;\n    std::string resp = client.get(\"example.com\", \"/\");\n    std::cout << resp.substr(0, 200) << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → HTTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\n\ndef http_get(host: str, path: str, port: int = 80) -> str:\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.settimeout(5)\n    ip = socket.gethostbyname(host)\n    sock.connect((ip, port))\n\n    request = (\n        f\"GET {path} HTTP/1.1\\r\\n\"\n        f\"Host: {host}\\r\\n\"\n        f\"Connection: close\\r\\n\\r\\n\"\n    )\n    sock.sendall(request.encode())\n\n    response = b\"\"\n    while True:\n        chunk = sock.recv(4096)\n        if not chunk:\n            break\n        response += chunk\n\n    sock.close()\n    return response.decode(errors=\"replace\")\n\nif __name__ == \"__main__\":\n    print(http_get(\"example.com\", \"/\")[:300])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → Simple HTTP Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <sstream>\n#include <boost/asio.hpp>\n\nusing boost::asio::ip::tcp;\n\nclass HttpServer {\npublic:\n    HttpServer(short port) : acceptor_(io_, tcp::endpoint(tcp::v4(), port)) {}\n\n    void start() {\n        std::cout << \"Server listening on port \"\n                  << acceptor_.local_endpoint().port() << std::endl;\n        while (true) {\n            tcp::socket socket(io_);\n            acceptor_.accept(socket);\n            handle_request(socket);\n        }\n    }\n\nprivate:\n    void handle_request(tcp::socket& socket) {\n        boost::asio::streambuf request;\n        boost::asio::read_until(socket, request, \"\\r\\n\\r\\n\");\n\n        std::istream req_stream(&request);\n        std::string method, path, version;\n        req_stream >> method >> path >> version;\n\n        std::string body = \"<html><body><h1>Hello from C++ Server</h1>\"\n                           \"<p>Path: \" + path + \"</p></body></html>\";\n        std::stringstream response;\n        response << \"HTTP/1.1 200 OK\\r\\n\"\n                 << \"Content-Length: \" << body.size() << \"\\r\\n\"\n                 << \"Content-Type: text/html\\r\\n\\r\\n\"\n                 << body;\n\n        boost::asio::write(socket, boost::asio::buffer(response.str()));\n    }\n\n    boost::asio::io_context io_;\n    tcp::acceptor acceptor_;\n};\n\nint main() {\n    HttpServer server(8080);\n    server.start();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → Simple HTTP Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\n\ndef handle_client(conn: socket.socket):\n    data = conn.recv(8192).decode()\n    if not data:\n        conn.close()\n        return\n\n    request_line = data.split(\"\\r\\n\")[0]\n    method, path, version = request_line.split(\" \")\n    print(f\"Received: {method} {path}\")\n\n    if path == \"/\":\n        body = \"<html><body><h1>Hello from Python Server</h1></body></html>\"\n        status = \"200 OK\"\n    else:\n        body = \"<html><body><h1>404 Not Found</h1></body></html>\"\n        status = \"404 Not Found\"\n\n    response = (\n        f\"HTTP/1.1 {status}\\r\\n\"\n        f\"Content-Length: {len(body)}\\r\\n\"\n        f\"Content-Type: text/html\\r\\n\\r\\n\"\n        f\"{body}\"\n    )\n    conn.sendall(response.encode())\n    conn.close()\n\ndef main():\n    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n    server.bind((\"0.0.0.0\", 8080))\n    server.listen(5)\n    print(\"Server listening on port 8080...\")\n\n    while True:\n        conn, addr = server.accept()\n        print(f\"Connection from {addr}\")\n        handle_client(conn)\n\nif __name__ == \"__main__\":\n    main()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → HTTP/1.1:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = header length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of headers for \\r\\n delimiters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = body size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must read/write entire body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree traversal; each level is a query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP connection setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed handshake cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File serving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f) where f = file size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full file must be read into buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection reused; negligible overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of HTTP/1.1:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple text-based protocol (human-readable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text parsing is slower than binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent connections reduce overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head-of-line blocking at application layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Widely supported everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large header overhead per request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching infrastructure (ETag, Cache-Control)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No multiplexing → one response at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy and gateway support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelining rarely works in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless → easy to scale horizontally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No server push → client must poll"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → HTTP/1.1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipelining HOL blocking:"
        }), " If request 2 takes 2 seconds to generate a response, all subsequent pipelined responses are delayed even if they could be served instantly. Solution: HTTP/2 multiplexing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunked encoding with incomplete chunks:"
        }), " Partial chunk received before closing delimiter. Receiver must buffer and wait for final 0\\r\\n\\r\\n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content-Length mismatch:"
        }), " If Content-Length says 500 but body is 450 bytes, receiver hangs waiting for 50 more bytes. Always check actual bytes read."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Malformed Host header:"
        }), " Missing or multiple Host headers cause 400 Bad Request. HTTP/1.1 requires exactly one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request smuggling:"
        }), " Different parsing of Content-Length vs Transfer-Encoding: chunked between frontend and backend can cause cache poisoning. Use consistent parsing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1022-http2",
      children: "10.2.2 HTTP/2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " HTTP/2 is like a multi-lane highway in a single tunnel (one TCP connection). HTTP/1.1 is like a single-lane road → only one car at a time. HTTP/2 allows multiple cars (streams) to travel simultaneously in the same tunnel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary framing layer:"
        }), " Messages are split into binary frames (HEADERS, DATA, SETTINGS, PRIORITY, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiplexing:"
        }), " Multiple streams share one TCP connection. No HOL blocking at application layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HPACK header compression:"
        }), " Uses static/dynamic tables and Huffman coding. Reduces overhead by 85-90%."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server push:"
        }), " Server speculatively sends resources client hasn't requested (e.g., CSS/JS with HTML)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stream prioritization:"
        }), " Client can assign weight and dependency to streams."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow control:"
        }), " Per-stream and per-connection window-based."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → HTTP/2 Connection Establishment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens TCP connection to server (or uses TLS ALPN negotiation)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends PRIORITY frame (magic: PRI * HTTP/2.0\\r\\n\\r\\nSM\\r\\n\\r\\n) or TLS ALPN extension indicates h2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both endpoints exchange SETTINGS frames (max concurrent streams, initial window size, etc.)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HEADERS frame with END_HEADERS + END_STREAM flags for simple GET."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with HEADERS frame (status) + DATA frame(s) (body)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple streams interleave frames on the same connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection closes when GOAWAY frame is sent and all streams complete."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → HTTP/2 Stream Multiplexing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLIENT:\n  sock ← TLS.connect(host, 443, alpn=\"h2\")\n  sock.send(CONNECTION_PREFACE)\n  sock.send(SETTINGS(max_streams=100, initial_window=65535))\n  stream_id ← 1\n  FOR each resource IN resources:\n    stream_id += 2\n    sock.send(HEADERS(stream_id, END_HEADERS, \":method=GET\", \":path=\" + resource))\n  responses ← {}\n  LOOP:\n    frame ← sock.recv_frame()\n    IF frame.type == HEADERS:\n      responses[frame.stream_id].headers = frame.headers\n    IF frame.type == DATA:\n      responses[frame.stream_id].body += frame.payload\n    IF frame.flags & END_STREAM:\n      process_responses[frame.stream_id]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → HTTP/2 Multiplexing (3 resources on 1 TCP connection):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Frame #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stream ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SETTINGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max_streams=100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ":method=GET, :path=/index.html"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ":status=200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ":method=GET, :path=/style.css"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request CSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page body complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ":method=GET, :path=/app.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request JS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ":status=200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "body { color: red }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "console.log(\"done\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS complete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Frames from streams 1, 3, and 5 interleave on the same TCP connection. Stream 3's CSS response does not wait for stream 1's full body."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → HTTP/2 Frame Parsing (skeleton):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cstdint>\n#include <vector>\n#include <iostream>\n\nstruct Http2Frame {\n    uint32_t length : 24;\n    uint8_t type;\n    uint8_t flags;\n    uint32_t stream_id : 31;\n    std::vector<uint8_t> payload;\n};\n\nclass Http2Parser {\npublic:\n    Http2Frame parseFrame(const uint8_t* data, size_t len) {\n        Http2Frame frame;\n        frame.length = (static_cast<uint32_t>(data[0]) << 16) |\n                       (static_cast<uint32_t>(data[1]) << 8) |\n                       static_cast<uint32_t>(data[2]);\n        frame.type = data[3];\n        frame.flags = data[4];\n        frame.stream_id = static_cast<uint32_t>(data[5] & 0x7F) << 24 |\n                          static_cast<uint32_t>(data[6]) << 16 |\n                          static_cast<uint32_t>(data[7]) << 8 |\n                          static_cast<uint32_t>(data[8]);\n\n        frame.payload.assign(data + 9, data + 9 + frame.length);\n        return frame;\n    }\n\n    std::vector<uint8_t> serializeFrame(const Http2Frame& frame) {\n        std::vector<uint8_t> buf(9 + frame.payload.size());\n        buf[0] = (frame.length >> 16) & 0xFF;\n        buf[1] = (frame.length >> 8) & 0xFF;\n        buf[2] = frame.length & 0xFF;\n        buf[3] = frame.type;\n        buf[4] = frame.flags;\n        buf[5] = (frame.stream_id >> 24) & 0x7F;\n        buf[6] = (frame.stream_id >> 16) & 0xFF;\n        buf[7] = (frame.stream_id >> 8) & 0xFF;\n        buf[8] = frame.stream_id & 0xFF;\n        std::copy(frame.payload.begin(), frame.payload.end(), buf.begin() + 9);\n        return buf;\n    }\n\n    std::string hpackDecodeIndexed(uint8_t*& data, size_t& remaining) {\n        uint8_t first = data[0];\n        data++; remaining--;\n        if ((first & 0x80) == 0x80) {\n            uint32_t index = first & 0x7F;\n            return getHpackEntry(index);\n        }\n        return \"\";\n    }\n\nprivate:\n    std::string getHpackEntry(uint32_t index) {\n        static const char* static_table[] = {\n            \"\", \":authority\", \":method GET\", \":method POST\",\n            \":path /\", \":path /index.html\", \":scheme http\",\n            \":scheme https\", \":status 200\", \":status 204\",\n            \":status 206\", \":status 304\", \":status 400\",\n            \":status 404\", \":status 500\", \"accept-charset\",\n            \"accept-encoding\", \"accept-language\"\n        };\n        if (index < 18) return static_table[index];\n        return \"\";\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → HTTP/2 Frame Building:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\nfrom typing import List, Dict\n\nclass Http2Frame:\n    def __init__(self, frame_type: int, flags: int, stream_id: int,\n                 payload: bytes = b\"\"):\n        self.type = frame_type\n        self.flags = flags\n        self.stream_id = stream_id\n        self.payload = payload\n\n    def serialize(self) -> bytes:\n        length = len(self.payload)\n        header = struct.pack(\"!IBBB\", length, self.type, self.flags,\n                             self.stream_id)\n        return header + self.payload\n\n    @staticmethod\n    def parse(data: bytes) -> \"Http2Frame\":\n        length = (data[0] << 16) | (data[1] << 8) | data[2]\n        frame_type = data[3]\n        flags = data[4]\n        stream_id = struct.unpack(\"!I\", data[5:9])[0] & 0x7FFFFFFF\n        payload = data[9:9 + length]\n        return Http2Frame(frame_type, flags, stream_id, payload)\n\n\nclass Http2Stream:\n    def __init__(self, stream_id: int):\n        self.stream_id = stream_id\n        self.headers: Dict[str, str] = {}\n        self.data = b\"\"\n        self.state = \"IDLE\"  # IDLE, OPEN, HALF_CLOSED, CLOSED\n\n    def add_header(self, name: str, value: str):\n        self.headers[name] = value\n\n\nclass Http2Connection:\n    def __init__(self):\n        self.streams: Dict[int, Http2Stream] = {}\n        self.next_stream_id = 1\n        self.settings = {\n            \"max_concurrent_streams\": 100,\n            \"initial_window_size\": 65535,\n        }\n\n    def create_stream(self) -> Http2Stream:\n        sid = self.next_stream_id\n        self.next_stream_id += 2\n        stream = Http2Stream(sid)\n        self.streams[sid] = stream\n        return stream\n\n    def process_frame(self, frame: Http2Frame) -> None:\n        if frame.stream_id not in self.streams and frame.stream_id > 0:\n            self.streams[frame.stream_id] = Http2Stream(frame.stream_id)\n\n        if frame.type == 0x00:  # DATA\n            stream = self.streams[frame.stream_id]\n            stream.data += frame.payload\n            if frame.flags & 0x01:  # END_STREAM\n                stream.state = \"HALF_CLOSED\"\n        elif frame.type == 0x01:  # HEADERS\n            if frame.flags & 0x01:\n                stream = self.streams[frame.stream_id]\n                stream.state = \"HALF_CLOSED\"\n        elif frame.type == 0x04:  # SETTINGS\n            self._parse_settings(frame.payload)\n\n\ndef build_get_request_frame(stream_id: int, path: str) -> Http2Frame:\n    payload = b\"\\x82\"  # Indexed: :method: GET\n    payload += b\"\\x84\"  # Indexed: :path: /\n    payload += struct.pack(\"!B\", 0x41)\n    return Http2Frame(0x01, 0x05, stream_id, payload)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → HTTP/2:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary frame parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(frame size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 9-byte header; no text scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HPACK decode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) average, O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(table size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k = indexed entry (O(1)), n = literal string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexed scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(s) where s = active streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin or priority tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow control window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per WINDOW_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(stream_count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple addition/subtraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server push store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r) where r = resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must store push promise frames"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of HTTP/2:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates application-layer HOL blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP-level HOL blocking remains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header compression (HPACK) reduces overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS encryption overhead (often mandatory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single TCP connection per origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP congestion control affects all streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server push reduces RTTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server push often wasted (cached resources)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream prioritization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority implementation varies by browser"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary framing = efficient parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not human-readable (debugging harder)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → HTTP/2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP-level HOL blocking:"
        }), " If a TCP packet is lost, ALL streams on that connection stall until retransmission. HTTP/3 solves this with QUIC."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HPACK dynamic table OOM:"
        }), " Attacker fills table with large entries → server must enforce SETTINGS_HEADER_TABLE_SIZE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server push waste:"
        }), " 99% of server-pushed resources go unused (browser already has cached). Chrome deprecated server push in 2022."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stream dependency cycles:"
        }), " Client creates circular dependency tree. Server must detect and break cycles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GOAWAY race condition:"
        }), " Client sends requests after server sends GOAWAY. Server processes or rejects based on last-stream-id."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1023-http3",
      children: "10.2.3 HTTP/3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " HTTP/3 is like having a separate tunnel for each package delivery. If one tunnel collapses, only the package inside it is delayed. HTTP/2 is like putting all packages in one tunnel → if the tunnel collapses, everything stops."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operates over QUIC (RFC 9000) instead of TCP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UDP-based transport with integrated TLS 1.3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero-RTT connection establishment (in many cases)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No TCP-level HOL blocking → each stream is independent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QPACK header compression (adapted for out-of-order delivery)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection migration → survives IP address changes (mobile handoff)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → HTTP/3 Connection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends QUIC Initial packet (UDP to port 443) with TLS 1.3 ClientHello."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with QUIC Handshake + TLS 1.3 ServerHello + SETTINGS frame."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client completes handshake → 1-RTT (or 0-RTT if cached)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HTTP/3 HEADERS and DATA frames over QUIC streams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each stream is independent → loss on stream 1 does not affect stream 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server push via PUSH_PROMISE (similar to HTTP/2)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → QUIC Connection (skeleton):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <sys/socket.h>\n#include <netdb.h>\n\nclass QuicConnection {\npublic:\n    void connect(const std::string& host, uint16_t port) {\n        socket_ = socket(AF_INET, SOCK_DGRAM, 0);\n        struct hostent* he = gethostbyname(host.c_str());\n        server_addr_.sin_family = AF_INET;\n        server_addr_.sin_port = htons(port);\n        memcpy(&server_addr_.sin_addr, he->h_addr_list[0], he->h_length);\n\n        // QUIC Initial packet with TLS 1.3 ClientHello\n        // (Simplified → real QUIC uses crypto frame)\n        sendto(socket_, initial_packet_, initial_len_, 0,\n               (struct sockaddr*)&server_addr_, sizeof(server_addr_));\n    }\n\n    uint64_t openStream() {\n        uint64_t stream_id = next_stream_id_;\n        next_stream_id_ += 4;\n        return stream_id;\n    }\n\n    void sendData(uint64_t stream_id, const uint8_t* data, size_t len) {\n        // QUIC STREAM frame → loss here does not block other streams\n    }\n\nprivate:\n    int socket_;\n    struct sockaddr_in server_addr_;\n    uint64_t next_stream_id_ = 0;\n    uint8_t initial_packet_[1200];\n    size_t initial_len_ = 1200;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → HTTP/3 Client (conceptual):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nfrom typing import Optional\n\nclass Http3Client:\n    def __init__(self):\n        self.stream_id = 0\n\n    async def connect(self, host: str, port: int = 443):\n        # QUIC handshake: TLS 1.3 over QUIC crypto stream\n        reader, writer = await asyncio.open_connection(host, port)\n        print(f\"Connected to {host}:{port} over QUIC\")\n\n    async def get(self, path: str) -> str:\n        self.stream_id += 4\n        # HEADERS frame sent as QUIC STREAM frame\n        # Each stream is independent → no HOL blocking\n        return f\"HTTP/3 response for {path}\"\n\n    async def close(self):\n        pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity → HTTP/3 vs HTTP/2:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (TCP) + 1 (TLS) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (QUIC+TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC bakes TLS into handshake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-RTT usable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached connection parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOL blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP-level (all streams)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (per-stream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent QUIC streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (IP change = reconnect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC connection ID independent of IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPACK (in-order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPACK (out-of-order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPACK decoder instructions separate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → HTTP/3:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "0-RTT replay attacks:"
        }), " Client sends data in 0-RTT that may be replayed. Idempotent methods only in 0-RTT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT rebinding:"
        }), " Client IP changes mid-connection. QUIC uses connection ID to survive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UDP throttling:"
        }), " Some middleboxes drop UDP. Fallback to HTTP/2/1.1 required."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QPACK decoder stream loss:"
        }), " Losing a QPACK instruction stream corrupts header table. Stream-level retransmission handles this."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-httpclient",
      children: "TypeScript Implementation: HTTPClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface HTTPResponse {\n  statusCode: number;\n  statusText: string;\n  headers: Map<string, string>;\n  body: string;\n}\n\nclass HTTPClient {\n  private readonly baseHeaders: Map<string, string>;\n\n  constructor() {\n    this.baseHeaders = new Map([\n      ['User-Agent', 'HTTPClient/1.0'],\n      ['Accept', '*/*'],\n      ['Connection', 'keep-alive'],\n    ]);\n  }\n\n  async request(method: string, url: string, body?: string): Promise<HTTPResponse> {\n    const parsed = new URL(url);\n    const headers = new Map(this.baseHeaders);\n    headers.set('Host', parsed.host);\n    if (body) {\n      headers.set('Content-Length', Buffer.byteLength(body).toString());\n      headers.set('Content-Type', 'application/x-www-form-urlencoded');\n    }\n    const req = `${method} ${parsed.pathname}${parsed.search} HTTP/1.1\\r\\n` +\n      Array.from(headers).map(([k, v]) => `${k}: ${v}`).join('\\r\\n') + '\\r\\n\\r\\n' + (body || '');\n    // In a real implementation, open TCP socket and send req\n    console.log(`[HTTP] ${method} ${url}`);\n    console.log(`[Request]\\n${req}`);\n    return { statusCode: 200, statusText: 'OK', headers: new Map([['Content-Type', 'text/html']]), body: '<html></html>' };\n  }\n\n  async get(url: string): Promise<HTTPResponse> { return this.request('GET', url); }\n  async post(url: string, data: string): Promise<HTTPResponse> { return this.request('POST', url, data); }\n\n  parseResponse(raw: string): HTTPResponse {\n    const [statusLine, ...rest] = raw.split('\\r\\n');\n    const [, statusCodeStr, ...statusParts] = statusLine.split(' ');\n    const statusCode = parseInt(statusCodeStr);\n    const statusText = statusParts.join(' ');\n    const headerMap = new Map<string, string>();\n    let i = 0;\n    for (; i < rest.length && rest[i] !== ''; i++) {\n      const [key, ...val] = rest[i].split(': ');\n      headerMap.set(key, val.join(': '));\n    }\n    const body = rest.slice(i + 1).join('\\r\\n');\n    return { statusCode, statusText, headers: headerMap, body };\n  }\n}\n// Usage:\n// const client = new HTTPClient();\n// const resp = await client.get('https://example.com/index.html');\n// console.log(`Status: ${resp.statusCode} ${resp.statusText}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-dns--domain-name-system",
      children: "10.3 DNS → Domain Name System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " DNS is the phonebook of the internet. You know the person's name (domain), but you need their phone number (IP address) to call them. The phonebook is distributed → each region (TLD) has its own volume."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1031-dns-architecture",
      children: "10.3.1 DNS Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DNS is a hierarchical, distributed database that maps domain names to IP addresses and other resources."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name Space Hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Root (.)\n├── .com\n│   ├── example.com\n│   │   ├── www.example.com (A: 93.184.216.34)\n│   │   └── mail.example.com (MX: 10 mail.example.com)\n│   ├── google.com\n│   └── amazon.com\n├── .org\n│   ├── wikipedia.org\n│   └── ...\n├── .net\n├── .edu\n├── .uk (ccTLD)\n│   ├── co.uk\n│   └── ac.uk\n└── ... (1500+ TLDs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root name servers:"
        }), " 13 logical identities (a.root-servers.net to m.root-servers.net), each anycast to dozens of physical servers. Know where all TLD servers are."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLD name servers:"
        }), " Responsible for .com, .org, .net, etc. Operated by registries (Verisign for .com/.net)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authoritative name servers:"
        }), " Provide the definitive answer for a specific domain (e.g., ns1.example.com)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive resolvers:"
        }), " Operated by ISPs (8.8.8.8, 1.1.1.1), cache results, query on behalf of clients."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS Record Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps domain to IPv4 address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "example.com → 93.184.216.34"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6 Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps domain to IPv6 address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "example.com → 2606:2800:220:1:248:1893:25c8:1946"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alias of one domain to another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "www → example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mail Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mail server priority + hostname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 mail.example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegates a zone to a name server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ns1.example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary text (SPF, DKIM, verification)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"v=spf1 mx ~all\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse lookup (IP → domain)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["34.216.184.93 → ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start of Authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Administrative info about the zone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary NS, admin email, serial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service location (hostname + port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "_sip._tcp.example.com → 5060 sip.example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certification Authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which CAs can issue certs for domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 issue \"letsencrypt.org\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect entire subtree (not single name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to CNAME but for subdomains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1032-dns-resolution-process",
      children: "10.3.2 DNS Resolution Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You ask a receptionist (local resolver) to find someone in a large office building. The receptionist calls building reception (root), who says \"floor 3 handles .com.\" Then floor 3's reception (TLD) says \"room 305 handles example.com.\" Room 305 (authoritative) gives the answer. The receptionist writes it down for next time (caching)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iterative Resolution → Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client browser asks local DNS resolver (stub resolver): \"What is the IP for ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), "?\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local resolver checks its cache. Cache miss."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Local resolver queries a root server (e.g., 198.41.0.4): \"Where is ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), "?\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root server replies: \"I don't know. Ask the .com TLD server at 192.0.34.164.\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Local resolver queries .com TLD server: \"Where is ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), "?\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".com TLD server replies: \"Ask ns1.example.com at 93.184.216.34 (authoritative).\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Local resolver queries ns1.example.com: \"What is the IP for ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), "?\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ns1.example.com replies: \"A record: 93.184.216.34.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local resolver caches the result (TTL seconds) and returns to client."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recursive Resolution:"
      }), " The root/TLD/authoritative chain is handled by the resolver itself. Client asks one resolver, which does all the work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run → DNS Iterative Resolution for ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Querying Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responding Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Updated?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            }), " A?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local resolver"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            }), " A?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root (a.root-servers.net)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Referral: .com TLD at 192.0.34.164"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root hint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local resolver"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            }), " A?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".com TLD (a.gtld-servers.net)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Referral: ns1.example.com at 93.184.216.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLD NS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local resolver"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            }), " A?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ns1.example.com (auth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer: 93.184.216.34, TTL=3600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93.184.216.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS Packet Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---------------------+\n| Header (12 bytes)   |  → ID, flags (QR/AA/RD/RA), counts\n+---------------------+\n| Question Section    |  → QNAME (encoded labels), QTYPE, QCLASS\n+---------------------+\n| Answer Section      |  → NAME, TYPE, CLASS, TTL, RDLENGTH, RDATA\n+---------------------+\n| Authority Section   |  → NS records for referrals\n+---------------------+\n| Additional Section  |  → A records for glue (NS IP addresses)\n+---------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → DNS Resolver (Iterative):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION dns_resolve(domain, type=\"A\"):\n  IF cache[domain + type] exists AND TTL not expired:\n    RETURN cache[domain + type]\n\n  ns ← root_servers\n  WHILE True:\n    response ← udp_query(ns, domain, type)\n    IF response.answer_count > 0:\n      record ← response.answers[0]\n      cache[domain + type] = (record.data, record.ttl)\n      RETURN record.data\n    IF response.authority_count > 0 AND response.additional_count > 0:\n      ns ← response.additional[0].data\n    ELSE:\n      ns_name ← response.authority[0].name\n      ns ← dns_resolve(ns_name, \"A\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1033-dns-security",
      children: "10.3.3 DNS Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS Cache Poisoning (Kaminsky Attack):"
        }), " Attacker sends forged DNS responses with extra records to poison resolver's cache. Mitigation: DNSSEC (RFC 4033), query source port randomization, TXID randomization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS Tunneling:"
        }), " Data encoded in DNS queries for covert communication or C2. Detection: entropy analysis, volume monitoring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNSSEC:"
        }), " Adds digital signatures (RRSIG, DNSKEY, DS records). Chain of trust from root to domain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → DNS Query (raw UDP):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <vector>\n#include <cstdint>\n#include <arpa/inet.h>\n#include <sys/socket.h>\n#include <unistd.h>\n\nstruct DnsHeader {\n    uint16_t id;\n    uint16_t flags;\n    uint16_t qdcount;\n    uint16_t ancount;\n    uint16_t nscount;\n    uint16_t arcount;\n};\n\nclass DnsResolver {\npublic:\n    std::string resolve(const std::string& domain) {\n        int sock = socket(AF_INET, SOCK_DGRAM, 0);\n        struct sockaddr_in server;\n        server.sin_family = AF_INET;\n        server.sin_port = htons(53);\n        inet_pton(AF_INET, \"8.8.8.8\", &server.sin_addr);\n\n        std::vector<uint8_t> packet(12 + domain.length() + 2 + 4);\n        DnsHeader* header = reinterpret_cast<DnsHeader*>(packet.data());\n        header->id = htons(0x1234);\n        header->flags = htons(0x0100);\n        header->qdcount = htons(1);\n\n        size_t pos = 12;\n        size_t start = 0;\n        while (start < domain.length()) {\n            size_t dot = domain.find('.', start);\n            if (dot == std::string::npos) dot = domain.length();\n            packet[pos++] = dot - start;\n            memcpy(&packet[pos], &domain[start], dot - start);\n            pos += dot - start;\n            start = dot + 1;\n        }\n        packet[pos++] = 0;\n        packet[pos++] = 0; packet[pos++] = 1;  // QTYPE: A\n        packet[pos++] = 0; packet[pos++] = 1;  // QCLASS: IN\n\n        sendto(sock, packet.data(), packet.size(), 0,\n               (struct sockaddr*)&server, sizeof(server));\n\n        std::vector<uint8_t> response(512);\n        socklen_t len = sizeof(server);\n        recvfrom(sock, response.data(), response.size(), 0,\n                 (struct sockaddr*)&server, &len);\n\n        DnsHeader* resp_hdr = reinterpret_cast<DnsHeader*>(response.data());\n        size_t offset = 12;\n        while (response[offset] != 0) offset++;\n        offset += 5;\n\n        for (int i = 0; i < ntohs(resp_hdr->ancount); i++) {\n            if ((response[offset] & 0xC0) == 0xC0) offset += 2;\n            else { while (response[offset] != 0) offset++; offset++; }\n            uint16_t type = ntohs(*(uint16_t*)&response[offset]); offset += 2;\n            offset += 2; offset += 4;\n            uint16_t rdlength = ntohs(*(uint16_t*)&response[offset]); offset += 2;\n            if (type == 1 && rdlength == 4) {\n                char ip[INET_ADDRSTRLEN];\n                inet_ntop(AF_INET, &response[offset], ip, sizeof(ip));\n                close(sock);\n                return std::string(ip);\n            }\n            offset += rdlength;\n        }\n        close(sock);\n        return \"\";\n    }\n};\n\nint main() {\n    DnsResolver resolver;\n    std::string ip = resolver.resolve(\"www.example.com\");\n    std::cout << \"Resolved to: \" << ip << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → DNS Resolver:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport struct\nimport random\n\ndef build_dns_query(domain: str, qtype: int = 1) -> bytes:\n    tid = random.randint(0, 65535)\n    header = struct.pack(\"!HHHHHH\", tid, 0x0100, 1, 0, 0, 0)\n\n    question = b\"\"\n    for part in domain.split(\".\"):\n        question += struct.pack(\"B\", len(part)) + part.encode()\n    question += b\"\\x00\"\n    question += struct.pack(\"!HH\", qtype, 1)\n\n    return header + question\n\ndef parse_dns_response(response: bytes):\n    offset = 12\n    while response[offset] != 0:\n        if (response[offset] & 0xC0) == 0xC0:\n            offset += 2\n            break\n        offset += 1\n    if response[offset] == 0:\n        offset += 1\n    offset += 4\n\n    answers = []\n    header = struct.unpack(\"!HHHHHH\", response[:12])\n    ancount = header[3]\n\n    for _ in range(ancount):\n        if (response[offset] & 0xC0) == 0xC0:\n            offset += 2\n        else:\n            while response[offset] != 0:\n                offset += 1 + response[offset]\n            offset += 1\n\n        rtype, rclass, ttl, rdlength = struct.unpack(\"!HHIH\",\n            response[offset:offset+10])\n        offset += 10\n\n        if rtype == 1 and rdlength == 4:\n            ip = socket.inet_ntoa(response[offset:offset+4])\n            answers.append((\"A\", ip, ttl))\n        elif rtype == 28 and rdlength == 16:\n            ip = socket.inet_ntop(socket.AF_INET6,\n                                  response[offset:offset+16])\n            answers.append((\"AAAA\", ip, ttl))\n\n        offset += rdlength\n\n    return answers\n\ndef dns_lookup(domain: str, server: str = \"8.8.8.8\") -> list:\n    query = build_dns_query(domain)\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    sock.settimeout(5)\n    sock.sendto(query, (server, 53))\n    response, _ = sock.recvfrom(512)\n    sock.close()\n    return parse_dns_response(response)\n\nif __name__ == \"__main__\":\n    results = dns_lookup(\"www.example.com\")\n    for rtype, ip, ttl in results:\n        print(f\"{rtype}: {ip} (TTL={ttl})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → DNS:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name resolution (iterative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h) where h = hierarchy depth (~5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed number of queries: root → TLD → auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name resolution (recursive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h) + O(cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolver does the work; same depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) or O(1) with hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table for O(1); balanced tree for prefix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache eviction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU or TTL-based expiry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zone transfer (AXFR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(z) where z = zone size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire zone serialized over TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update (DDNS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single record update on authoritative server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why complexity matters:"
      }), " DNS resolution is O(h) where h is typically 3-5 (root, TLD, authoritative). This is extremely efficient → you never need more than ~5 round trips to resolve any domain. Caching makes repeated lookups O(1). Zone transfers are O(z) because the entire zone must be serialized, but these happen infrequently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed → no single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache poisoning vulnerabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical → efficient delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL trade-off (freshness vs performance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching reduces latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP 512-byte limit (EDNS0 extension)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports multiple record types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amplification attack vector (DRDoS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for internet operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex DNSSEC deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → DNS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache poisoning (Kaminsky attack):"
        }), " Attacker floods resolver with forged responses for a domain the resolver is querying. 65,536 TXIDs needed for success. Source port randomization makes it harder."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CNAME at zone apex:"
        }), " RFC forbids CNAME at the naked domain (example.com) alongside other records. Use ALIAS or A record instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS over HTTPS (DoH):"
        }), " Browsers can bypass system resolver. Enterprise filtering must account for DoH."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stale TTL with server migration:"
        }), " If TTL is 86400 (24h) and IP changes, clients get wrong IP for up to 24h. Reduce TTL before migration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EDNS0 large responses:"
        }), " Responses > 512 bytes use EDNS0 extension or TCP fallback. Some firewalls drop oversized DNS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-dnsresolver",
      children: "TypeScript Implementation: DNSResolver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type DNSRecordType = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'TXT';\n\ninterface DNSRecord {\n  name: string;\n  type: DNSRecordType;\n  ttl: number;\n  value: string;\n}\n\ninterface DNSResponse {\n  question: string;\n  records: DNSRecord[];\n  authoritative: boolean;\n  recursive: boolean;\n}\n\nclass DNSResolver {\n  private cache: Map<string, { records: DNSRecord[]; expiry: number }> = new Map();\n\n  private cacheKey(name: string, type: DNSRecordType): string {\n    return `${name}:${type}`;\n  }\n\n  resolve(domain: string, type: DNSRecordType = 'A'): DNSRecord[] {\n    const key = this.cacheKey(domain, type);\n    const cached = this.cache.get(key);\n    if (cached && cached.expiry > Date.now()) {\n      console.log(`[DNS] Cache hit: ${domain} ${type}`);\n      return cached.records;\n    }\n    console.log(`[DNS] Resolving ${domain} (${type})`);\n    const records = this.queryNameservers(domain, type);\n    this.cache.set(key, { records, expiry: Date.now() + (records[0]?.ttl || 300) * 1000 });\n    return records;\n  }\n\n  private queryNameservers(domain: string, type: DNSRecordType): DNSRecord[] {\n    const parts = domain.split('.');\n    if (parts.length < 2) return [];\n    const tld = parts[parts.length - 1];\n    // Simplified resolution: mock responses\n    const mockRecords: Record<string, DNSRecord[]> = {\n      'example.com': [\n        { name: 'example.com', type: 'A', ttl: 3600, value: '93.184.216.34' },\n        { name: 'example.com', type: 'MX', ttl: 3600, value: '10 mail.example.com' },\n        { name: 'example.com', type: 'NS', ttl: 3600, value: 'ns1.example.com' },\n      ],\n      'google.com': [\n        { name: 'google.com', type: 'A', ttl: 300, value: '142.250.80.4' },\n        { name: 'google.com', type: 'AAAA', ttl: 300, value: '2607:f8b0:4000:80a::200e' },\n      ],\n    };\n    return mockRecords[domain]?.filter(r => r.type === type) || [];\n  }\n\n  flushCache(): void { this.cache.clear(); }\n\n  resolveRecursive(domain: string): DNSResponse {\n    const rootServers = ['a.root-servers.net', 'b.root-servers.net'];\n    const tldServers = ['a.tld-servers.net'];\n    const authServers = ['ns1.example.com'];\n    console.log(`[DNS] Iterative: root → TLD → authoritative for ${domain}`);\n    const records = this.resolve(domain);\n    return { question: domain, records, authoritative: true, recursive: false };\n  }\n}\n// Usage:\n// const dns = new DNSResolver();\n// const records = dns.resolve('example.com', 'A');\n// console.log(`IP: ${records[0]?.value}`); // 93.184.216.34\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-email-protocols",
      children: "10.4 Email Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1041-smtp--simple-mail-transfer-protocol",
      children: "10.4.1 SMTP → Simple Mail Transfer Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " SMTP is the postal service for email. You drop a letter at your local post office (SMTP client), which sends it to the recipient's post office (SMTP server), which holds it until the recipient picks it up (POP3/IMAP). The message may pass through multiple sorting facilities (MTAs) along the way (store-and-forward)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User → MUA (Outlook) → MSA (Submission:587) → MTA (Relay) → MTA (Delivery:25) → MDA → Mailbox → MUA (POP3/IMAP)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → SMTP Conversation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens TCP to server on port 25 (or 587 for submission)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server sends greeting: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "220 mail.example.com ESMTP Postfix"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client identifies itself: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EHLO client.example.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server acknowledges: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "250-mail.example.com"
        }), ", lists supported extensions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client specifies sender: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAIL FROM:<alice@example.com>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server acknowledges: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "250 OK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client specifies recipient: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCPT TO:<bob@other.org>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server acknowledges: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "250 OK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client starts data transfer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DATA"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server prompts: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "354 End data with <CR><LF>.<CR><LF>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends headers + body, ends with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), " on a line by itself."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server acknowledges: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "250 OK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client closes: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QUIT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server responds: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "221 Bye"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → SMTP Message Delivery:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP SYN on port 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP SYN-ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220 mail.other.org ESMTP Ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EHLO client.example.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read EHLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EHLO received"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250-SIZE 52428800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EHLO done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250-PIPELINING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensions listed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250-AUTH PLAIN LOGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MAIL FROM:<", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:alice@example.com",
              children: "alice@example.com"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FROM set"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["From: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:alice@example.com",
              children: "alice@example.com"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FROM verified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RCPT TO:<", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:bob@other.org",
              children: "bob@other.org"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RCPT received"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["To: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:bob@other.org",
              children: "bob@other.org"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RCPT accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "354 End data with ."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ready for body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From: Alice\\r\\nTo: Bob\\r\\nSubject: Hello\\r\\n\\r\\nBody text.\\r\\n."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer cleared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quit received"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "221 Bye"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SMTP Status Codes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Scenario"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial greeting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "221"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service closing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After QUIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requested action completed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command success"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "251"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User not local; forwarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-local recipient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "354"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start mail input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After DATA command"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "421"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service unavailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server overload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "450"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mailbox unavailable (temp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mailbox locked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "451"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local error (temp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processing error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "452"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insufficient storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown command"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax error in params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad argument"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command not implemented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature unsupported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "550"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mailbox unavailable (perm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "551"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User not local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "552"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exceeded storage allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quota exceeded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "553"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mailbox name not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "554"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → SMTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION send_email(sender, recipient, message, server, port=587):\n  sock ← TCP.connect(server, port)\n  greeting ← sock.recv()\n  sock.send(\"EHLO \" + my_hostname)\n  extensions ← sock.recv()\n  IF AUTH required:\n    sock.send(\"AUTH LOGIN\")\n    sock.recv()\n    sock.send(BASE64(username))\n    sock.recv()\n    sock.send(BASE64(password))\n    sock.recv()\n  sock.send(\"MAIL FROM:<\" + sender + \">\")\n  sock.recv()\n  sock.send(\"RCPT TO:<\" + recipient + \">\")\n  sock.recv()\n  sock.send(\"DATA\")\n  sock.recv()\n  sock.send(message + \"\\r\\n.\")\n  sock.recv()\n  sock.send(\"QUIT\")\n  sock.recv()\n  sock.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → SMTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <boost/asio.hpp>\n\nusing boost::asio::ip::tcp;\n\nclass SmtpClient {\npublic:\n    bool send(const std::string& server, const std::string& sender,\n              const std::string& recipient, const std::string& message) {\n        try {\n            boost::asio::io_context io;\n            tcp::socket socket(io);\n            tcp::resolver resolver(io);\n            auto endpoints = resolver.resolve(server, \"587\");\n            boost::asio::connect(socket, endpoints);\n\n            auto read_response = [&]() -> std::string {\n                boost::asio::streambuf buf;\n                boost::asio::read_until(socket, buf, \"\\r\\n\");\n                return boost::asio::buffer_cast<const char*>(buf.data());\n            };\n\n            auto send_command = [&](const std::string& cmd) {\n                boost::asio::write(socket, boost::asio::buffer(cmd + \"\\r\\n\"));\n            };\n\n            std::cout << read_response();\n            send_command(\"EHLO client\");\n            std::cout << read_response();\n\n            send_command(\"MAIL FROM:<\" + sender + \">\");\n            std::cout << read_response();\n\n            send_command(\"RCPT TO:<\" + recipient + \">\");\n            std::cout << read_response();\n\n            send_command(\"DATA\");\n            std::cout << read_response();\n\n            send_command(message + \"\\r\\n.\");\n            std::cout << read_response();\n\n            send_command(\"QUIT\");\n            std::cout << read_response();\n\n            socket.close();\n            return true;\n        } catch (std::exception& e) {\n            std::cerr << \"SMTP error: \" << e.what() << std::endl;\n            return false;\n        }\n    }\n};\n\nint main() {\n    SmtpClient client;\n    std::string msg = \"From: Alice <alice@example.com>\\r\\n\"\n                      \"To: Bob <bob@other.org>\\r\\n\"\n                      \"Subject: Hello\\r\\n\\r\\n\"\n                      \"This is a test message.\";\n    client.send(\"mail.example.com\", \"alice@example.com\", \"bob@other.org\", msg);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → SMTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\n\ndef send_email_raw(sender: str, recipient: str, message: str,\n                   server: str, port: int = 25):\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.settimeout(5)\n    sock.connect((server, port))\n\n    def recv():\n        return sock.recv(4096).decode()\n\n    def send(cmd: str):\n        sock.sendall((cmd + \"\\r\\n\").encode())\n\n    print(\"S:\", recv().strip())\n    send(\"EHLO client\")\n    print(\"S:\", recv().strip())\n\n    send(f\"MAIL FROM:<{sender}>\")\n    print(\"S:\", recv().strip())\n\n    send(f\"RCPT TO:<{recipient}>\")\n    print(\"S:\", recv().strip())\n\n    send(\"DATA\")\n    print(\"S:\", recv().strip())\n\n    send(message + \"\\r\\n.\")\n    print(\"S:\", recv().strip())\n\n    send(\"QUIT\")\n    print(\"S:\", recv().strip())\n\n    sock.close()\n\nif __name__ == \"__main__\":\n    msg = (\n        \"From: Alice <alice@example.com>\\r\\n\"\n        \"To: Bob <bob@other.org>\\r\\n\"\n        \"Subject: Hello\\r\\n\\r\\n\"\n        \"This is a test message.\"\n    )\n    send_email_raw(\"alice@example.com\", \"bob@other.org\", msg,\n                   \"mail.example.com\", 25)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → SMTP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection + handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 3-message EHLO exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message transfer (DATA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = message size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire message buffered and sent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MX record lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolution of recipient domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue (spool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messages queued for retry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why these complexities:"
      }), " EHLO is always a fixed exchange (constant time). DATA is linear in message size because the entire message must be transmitted over the network. MX lookup uses DNS which is O(log n) in the hierarchy depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of SMTP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple text-based protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in encryption (STARTTLS added)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward (resilient)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No authentication by default (AUTH extension)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable delivery with retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASCII-only → MIME needed for binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MX records for failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open relay abuse (spam)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → SMTP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Email spoofing:"
        }), " SMTP has no built-in sender verification. SPF (TXT record listing authorized servers), DKIM (digital signature), and DMARC (policy) mitigate this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open relay:"
        }), " SMTP server that forwards mail from anyone to anywhere. Classic spam vector. Modern servers restrict relay to authenticated users or authorized networks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bounce handling:"
        }), " Undeliverable mail generates bounce (DSN). Misconfigured bounces can cause backscatter spam."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message size limits:"
        }), " SMTP servers enforce message size limits. Large attachments use split delivery or external links."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1042-pop3--post-office-protocol-v3",
      children: "10.4.2 POP3 → Post Office Protocol v3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " POP3 is like checking your PO box, taking everything, and leaving the box empty. You have the mail on your device, and the server has nothing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Downloads emails from server to client."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default mode: download-and-delete (messages removed from server)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Download-and-keep mode available (optional)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No server-side folder organization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses TCP port 110 (plain) or 995 (POP3S)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "POP3 Conversation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C: USER alice\nS: +OK User accepted\nC: PASS secret\nS: +OK Mailbox locked and ready\nC: STAT\nS: +OK 2 3200  (2 messages, 3200 bytes)\nC: LIST\nS: +OK 2 messages:\nS: 1 1200\nS: 2 2000\nS: .\nC: RETR 1\nS: +OK 1200 bytes\nS: <message headers + body>\nS: .\nC: DELE 1\nS: +OK Message 1 deleted\nC: QUIT\nS: +OK Bye\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → POP3 Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION pop3_retrieve(server, port, user, password):\n  sock ← TCP.connect(server, port)\n  sock.recv()                          // +OK ready\n  sock.send(\"USER \" + user)\n  sock.recv()                          // +OK\n  sock.send(\"PASS \" + password)\n  sock.recv()                          // +OK\n  sock.send(\"STAT\")\n  response ← sock.recv()               // +OK count size\n  sock.send(\"LIST\")\n  sock.recv()                          // message list\n  FOR each message:\n    sock.send(\"RETR \" + msg_id)\n    data ← sock.recv_until(\".\\r\\n\")\n    messages.append(data)\n  sock.send(\"QUIT\")\n  sock.close()\n  RETURN messages\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1043-imap--internet-message-access-protocol",
      children: "10.4.3 IMAP → Internet Message Access Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " IMAP is like having your filing cabinet in the cloud. You open a drawer, look at file names, open the one you want, leave it there. Changes sync across all devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Messages stay on the server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client caches headers; downloads bodies on demand."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full folder hierarchy (Inbox, Sent, Drafts, custom folders)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple clients see same state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server-side search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses TCP port 143 (plain) or 993 (IMAPS)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMAP Conversation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C: a001 LOGIN alice password\nS: a001 OK LOGIN completed\nC: a002 SELECT INBOX\nS: * 3 EXISTS\nS: * 2 RECENT\nS: a002 OK [READ-WRITE] SELECT completed\nC: a003 FETCH 1:3 (FLAGS)\nS: * 1 FETCH (FLAGS (\\Seen))\nS: * 2 FETCH (FLAGS ())\nS: * 3 FETCH (FLAGS (\\Seen \\Answered))\nS: a003 OK FETCH completed\nC: a004 FETCH 2 BODY[TEXT]\nS: * 2 FETCH (BODY[TEXT] {142}\nS: <message body text>\nS: )\nS: a004 OK FETCH completed\nC: a005 LOGOUT\nS: * BYE Logging out\nS: a005 OK LOGOUT completed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → IMAP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION imap_fetch_inbox(server, port, user, password):\n  sock ← TCP.connect(server, port)\n  sock.recv()                          // * OK ready\n  sock.send(\"a001 LOGIN \" + user + \" \" + password)\n  sock.recv()                          // a001 OK\n  sock.send(\"a002 SELECT INBOX\")\n  sock.recv()                          // * EXISTS, a002 OK\n  sock.send(\"a003 FETCH 1:* (BODY[HEADER.FIELDS (SUBJECT FROM)])\")\n  summaries ← sock.recv()              // message summaries\n  sock.send(\"a004 LOGOUT\")\n  sock.close()\n  RETURN summaries\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1044-email-protocols-comparison",
      children: "10.4.4 Email Protocols Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SMTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "POP3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IMAP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sending/relaying mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieving mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieving + managing mail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push (client → server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull (server → client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull (server → client)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server (relay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client (downloaded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server (cached)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-device access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side folders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default port (plain)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25, 587"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "143"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default port (SSL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "465"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "995"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "993"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State on server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None after relay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None after download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full state preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (sends full msg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (downloads all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (headers first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relay storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTA-to-MTA transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-device user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-device, power user"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-smtpvalidator",
      children: "TypeScript Implementation: SMTPValidator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SMTPCommand {\n  command: string;\n  args: string;\n}\n\ninterface SMTPResponse {\n  code: number;\n  message: string;\n}\n\nclass SMTPValidator {\n  private state: 'CONNECTED' | 'HELO_SENT' | 'MAIL_SENT' | 'RCPT_SENT' | 'DATA_SENT' | 'QUIT_SENT' = 'CONNECTED';\n  private mailFrom: string = '';\n  private rcptTo: string[] = [];\n  private readonly validCommands: Map<string, string[]> = new Map([\n    ['CONNECTED', ['HELO', 'EHLO']],\n    ['HELO_SENT', ['MAIL FROM']],\n    ['MAIL_SENT', ['RCPT TO']],\n    ['RCPT_SENT', ['RCPT TO', 'DATA', 'QUIT']],\n    ['DATA_SENT', ['QUIT']],\n    ['QUIT_SENT', []],\n  ]);\n\n  private validateCommand(cmd: string): boolean {\n    const allowed = this.validCommands.get(this.state);\n    if (!allowed) return false;\n    return allowed.some(a => cmd.startsWith(a));\n  }\n\n  processCommand(raw: string): SMTPResponse {\n    const [cmd, ...args] = raw.split(' ');\n    const argStr = args.join(' ');\n    if (!this.validateCommand(cmd.toUpperCase())) {\n      return { code: 503, message: `Bad sequence: ${cmd} not valid in ${this.state}` };\n    }\n    switch (cmd.toUpperCase()) {\n      case 'HELO':\n      case 'EHLO':\n        this.state = 'HELO_SENT';\n        return { code: 250, message: `Hello ${argStr}, pleased to meet you` };\n      case 'MAIL':\n        this.mailFrom = argStr;\n        this.state = 'MAIL_SENT';\n        return { code: 250, message: 'Mail from accepted' };\n      case 'RCPT':\n        this.rcptTo.push(argStr);\n        this.state = 'RCPT_SENT';\n        return { code: 250, message: 'Recipient accepted' };\n      case 'DATA':\n        this.state = 'DATA_SENT';\n        return { code: 354, message: 'Start mail input; end with . on a line by itself' };\n      case 'QUIT':\n        this.state = 'QUIT_SENT';\n        return { code: 221, message: 'Bye' };\n      default:\n        return { code: 502, message: 'Command not implemented' };\n    }\n  }\n\n  validateEmail(from: string, to: string[], body: string): boolean {\n    const commands = [`HELO client.example.com`, `MAIL FROM:<${from}>`,\n      ...to.map(t => `RCPT TO:<${t}>`), 'DATA', body, '.' , 'QUIT'];\n    for (const cmd of commands) {\n      const resp = this.processCommand(cmd);\n      console.log(`C: ${cmd}\\nS: ${resp.code} ${resp.message}`);\n      if (resp.code >= 400) return false;\n    }\n    return true;\n  }\n\n  getState(): string { return this.state; }\n}\n// Usage:\n// const smtp = new SMTPValidator();\n// const ok = smtp.validateEmail('sender@example.com', ['recipient@example.org'], 'Subject: Test\\n\\nHello world');\n// console.log(`Delivery ${ok ? 'succeeded' : 'failed'}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-ftp--file-transfer-protocol",
      children: "10.5 FTP → File Transfer Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " FTP is like a warehouse with two doors. Door 1 (control) is the office where you place orders and get confirmations. Door 2 (data) is the loading dock where actual goods move in and out."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1051-ftp-architecture",
      children: "10.5.1 FTP Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FTP (RFC 959) uses two separate connections:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control connection:"
        }), " Port 21. Carries commands (USER, PASS, LIST, RETR, STOR) and responses. Persistent throughout session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data connection:"
        }), " Port 20 (active) or random high port (passive). Carries actual file data. Created per transfer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FTP Commands:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Response"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER username"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send username"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "331 Password required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASS password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "230 Logged in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIST [path]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150 / 226 complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWD path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 CWD successful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PWD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print working dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "257 \"/home/user\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RETR filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Download file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150 Opening data connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STOR filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150 Opening data connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELE filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 DELE successful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MKD path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "257 \"path\" created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RMD path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250 RMD successful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter passive mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "227 (h1,h2,h3,h4,p1,p2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PORT h1,h2,h3,h4,p1,p2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active mode IP+port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 PORT OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "221 Bye"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1052-active-vs-passive-mode",
      children: "10.5.2 Active vs Passive Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Mode:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens control connection to server port 21."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends PORT command with its IP and a listening port."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server connects FROM port 20 TO client's specified port."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem: Client behind NAT → server cannot connect."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Passive Mode:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens control connection to server port 21."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends PASV command."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server opens a random port and tells the client: (ip1,ip2,ip3,ip4,p1,p2)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client connects to server's IP and the advertised port."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works through NAT; client initiates both connections."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FTP Modes Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Active Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Passive Mode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client→Server (21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client→Server (21)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server→Client (20→client port)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client→Server (client→server port)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (server connects to client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (client initiates both)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (incoming connection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (outgoing only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default in browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (PASV)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PORT range must allow incoming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PORT range must allow many ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server must know client IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server must open many ports"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → FTP Passive Download:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client connects to server on TCP port 21."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server sends: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "220 FTP server ready"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "USER anonymous"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "230 Login successful"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PASV"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "227 Entering Passive Mode (192,168,1,1,195,35)"
        }), ".\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Port = 195 x 256 + 35 = 49955."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client connects to 192.168.1.1:49955 for data."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LIST"
        }), " over control connection."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data connection: server sends directory listing."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RETR file.txt"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data connection: server sends file contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transfer complete; data connection closes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QUIT"
        }), " over control connection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → FTP Passive Mode File Transfer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP SYN to port 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220 Ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USER anonymous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Login attempt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "230 Login OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request passive mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "227 Entering Passive Mode (192,168,1,1,4,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port = 4x256+5 = 1029"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP SYN to 192.168.1.1:1029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RETR file.txt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[file data stream]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer begins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACK every segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[last byte + TCP FIN]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "226 Transfer complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirmation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C→S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "221 Bye"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server goodbye"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → FTP Client (Passive Mode):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ftp_get(host, user, password, remote_file, local_path):\n  ctrl ← TCP.connect(host, 21)\n  ctrl.recv()\n  ctrl.send(\"USER \" + user)\n  ctrl.recv()\n  ctrl.send(\"PASS \" + password)\n  ctrl.recv()\n  ctrl.send(\"PASV\")\n  response ← ctrl.recv()\n  ip, port ← PARSE_PASV(response)\n  data ← TCP.connect(ip, port)\n  ctrl.send(\"TYPE I\")\n  ctrl.recv()\n  ctrl.send(\"RETR \" + remote_file)\n  file ← OPEN(local_path, \"wb\")\n  WHILE data.has_data():\n    chunk ← data.recv(8192)\n    file.write(chunk)\n  file.close()\n  data.close()\n  ctrl.recv()\n  ctrl.send(\"QUIT\")\n  ctrl.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → FTP Client (passive mode):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <fstream>\n#include <boost/asio.hpp>\n\nusing boost::asio::ip::tcp;\n\nclass FtpClient {\npublic:\n    FtpClient() : ctrl_socket_(io_), data_socket_(io_) {}\n\n    bool connect(const std::string& server, const std::string& user,\n                 const std::string& password) {\n        tcp::resolver resolver(io_);\n        auto endpoints = resolver.resolve(server, \"21\");\n        boost::asio::connect(ctrl_socket_, endpoints);\n        readResponse();\n        sendCommand(\"USER \" + user);\n        readResponse();\n        sendCommand(\"PASS \" + password);\n        std::string resp = readResponse();\n        return resp.find(\"230\") != std::string::npos;\n    }\n\n    bool download(const std::string& remote, const std::string& local) {\n        sendCommand(\"PASV\");\n        std::string pasvResp = readResponse();\n        auto paren = pasvResp.find('(');\n        auto close = pasvResp.find(')');\n        std::string nums = pasvResp.substr(paren + 1, close - paren - 1);\n        int h1, h2, h3, h4, p1, p2;\n        sscanf(nums.c_str(), \"%d,%d,%d,%d,%d,%d\",\n               &h1, &h2, &h3, &h4, &p1, &p2);\n        std::string data_ip = std::to_string(h1) + \".\" + std::to_string(h2)\n                            + \".\" + std::to_string(h3) + \".\"\n                            + std::to_string(h4);\n        int data_port = p1 * 256 + p2;\n\n        tcp::resolver resolver(io_);\n        auto endpoints = resolver.resolve(data_ip,\n                                          std::to_string(data_port));\n        boost::asio::connect(data_socket_, endpoints);\n\n        sendCommand(\"TYPE I\");\n        readResponse();\n        sendCommand(\"RETR \" + remote);\n        readResponse();\n\n        std::ofstream file(local, std::ios::binary);\n        boost::system::error_code ec;\n        while (true) {\n            boost::asio::streambuf buf;\n            size_t len = boost::asio::read(data_socket_, buf,\n                         boost::asio::transfer_at_least(1), ec);\n            if (ec == boost::asio::error::eof) break;\n            if (ec) break;\n            file.write(boost::asio::buffer_cast<const char*>(buf.data()),\n                       len);\n        }\n        file.close();\n        data_socket_.close();\n        readResponse();\n        return true;\n    }\n\n    void quit() {\n        sendCommand(\"QUIT\");\n        readResponse();\n    }\n\nprivate:\n    void sendCommand(const std::string& cmd) {\n        boost::asio::write(ctrl_socket_,\n                           boost::asio::buffer(cmd + \"\\r\\n\"));\n    }\n\n    std::string readResponse() {\n        boost::asio::streambuf buf;\n        boost::asio::read_until(ctrl_socket_, buf, \"\\r\\n\");\n        return boost::asio::buffer_cast<const char*>(buf.data());\n    }\n\n    boost::asio::io_context io_;\n    tcp::socket ctrl_socket_;\n    tcp::socket data_socket_;\n};\n\nint main() {\n    FtpClient ftp;\n    if (ftp.connect(\"ftp.example.com\", \"anonymous\", \"guest\")) {\n        ftp.download(\"pub/readme.txt\", \"readme.txt\");\n        ftp.quit();\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → FTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport re\n\nclass FTPClient:\n    def __init__(self):\n        self.ctrl = None\n        self.data = None\n\n    def connect(self, host: str, user: str = \"anonymous\",\n                password: str = \"guest@\") -> bool:\n        self.ctrl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        self.ctrl.connect((host, 21))\n        print(self._recv())\n        self._send(f\"USER {user}\")\n        print(self._recv())\n        self._send(f\"PASS {password}\")\n        resp = self._recv()\n        print(resp)\n        return resp.startswith(\"230\")\n\n    def download(self, remote_file: str, local_file: str) -> bool:\n        self._send(\"PASV\")\n        resp = self._recv()\n        match = re.search(r'(\\d+),(\\d+),(\\d+),(\\d+),(\\d+),(\\d+)', resp)\n        if not match:\n            return False\n        ip = \".\".join(match.groups()[:4])\n        port = int(match.group(5)) * 256 + int(match.group(6))\n\n        self.data = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        self.data.connect((ip, port))\n\n        self._send(\"TYPE I\")\n        print(self._recv())\n\n        self._send(f\"RETR {remote_file}\")\n        print(self._recv())\n\n        with open(local_file, \"wb\") as f:\n            while True:\n                chunk = self.data.recv(8192)\n                if not chunk:\n                    break\n                f.write(chunk)\n\n        self.data.close()\n        print(self._recv())\n        return True\n\n    def quit(self):\n        self._send(\"QUIT\")\n        print(self._recv())\n        self.ctrl.close()\n\n    def _send(self, cmd: str):\n        self.ctrl.sendall((cmd + \"\\r\\n\").encode())\n\n    def _recv(self) -> str:\n        return self.ctrl.recv(4096).decode().strip()\n\n\nif __name__ == \"__main__\":\n    ftp = FTPClient()\n    if ftp.connect(\"ftp.gnu.org\"):\n        ftp.download(\"welcome.msg\", \"welcome.txt\")\n        ftp.quit()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → FTP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data channel (file)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f) where f = file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streamed; buffered per chunk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory listing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete list sent over data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active mode setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client listens once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Passive mode setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server opens random port"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why these complexities:"
      }), " Control commands are always short strings (constant time). File transfer is O(f) because every byte must be transmitted over the network. Directory listing is O(n) because all entries must be transferred. Mode setup involves a single command-response exchange (constant)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of FTP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, widely supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plaintext authentication (no encryption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resume interrupted transfers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two connections = complex firewall rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory listing and navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active mode breaks behind NAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch file operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server must manage dynamic port ranges (PASV)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous access option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP(S) and SFTP confusion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → FTP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Passive mode port range exhaustion:"
        }), " Server must configure a range of ports (e.g., 50000-51000) for PASV. Exhaustion blocks transfers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ASCII vs Binary mode:"
        }), " Transferring binary files in ASCII mode corrupts them (newline conversion). Always use TYPE I (binary) for non-text files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hidden file names:"
        }), " Files starting with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), " may or may not appear in LIST output depending on server implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Firewall state tracking:"
        }), " Some firewalls track FTP control to dynamically allow data connections (ALG). Misconfiguration blocks PASV."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active mode with NAT:"
        }), " Client behind NAT sends private IP in PORT command. Server fails to connect. Solution: EPSV (extended passive) or FTP with NAT-aware client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-ssh--secure-shell",
      children: "10.6 SSH → Secure Shell"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " SSH is a secure, armored tunnel into a building. Unlike Telnet (a clear glass tunnel where everyone can see you), SSH encrypts everything so no one can eavesdrop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypted remote terminal access (replaces Telnet)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP port 22."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public-key cryptography for authentication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Port forwarding (tunneling) → encrypt other protocols."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SCP/SFTP for secure file transfer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol versions: SSH-1 (deprecated), SSH-2 (current)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → SSH Connection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens TCP to server port 22."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server sends identification string: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SSH-2.0-OpenSSH_9.1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client responds with its identification string."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key exchange (Diffie-Hellman): establish shared secret and session key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server authentication: client verifies server host key (stored in ~/.ssh/known_hosts)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client authentication: password or public key (RSA/ECDSA/Ed25519)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session encryption established → all subsequent traffic encrypted."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client requests shell, exec, or subsystem (sftp)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data flows bidirectionally in encrypted channels."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → SSH Connection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ssh_connect(host, user, password):\n  sock ← TCP.connect(host, 22)\n  sock.recv()                               // SSH-2.0-...\n  sock.send(\"SSH-2.0-Client\")\n  // Key exchange (Diffie-Hellman)\n  shared_secret ← dh_key_exchange(sock)\n  // Server authentication → verify host key\n  IF !verify_host_key(sock): RETURN ERROR\n  // Client authentication\n  sock.send(AUTH_REQUEST(user, password))\n  response ← sock.recv()\n  IF response != AUTH_SUCCESS: RETURN ERROR\n  // Open session channel\n  sock.send(CHANNEL_OPEN(\"session\"))\n  sock.send(EXEC(\"ls -la\"))\n  output ← sock.recv_all()\n  sock.close()\n  RETURN output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → SSH Client (using libssh):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <libssh/libssh.h>\n\nclass SshClient {\npublic:\n    bool connect(const std::string& host, const std::string& user,\n                 const std::string& password) {\n        ssh_ = ssh_new();\n        if (!ssh_) return false;\n\n        ssh_options_set(ssh_, SSH_OPTIONS_HOST, host.c_str());\n        ssh_options_set(ssh_, SSH_OPTIONS_USER, user.c_str());\n\n        if (ssh_connect(ssh_) != SSH_OK) {\n            std::cerr << \"Connection failed: \"\n                      << ssh_get_error(ssh_) << std::endl;\n            return false;\n        }\n\n        if (ssh_userauth_password(ssh_, nullptr, password.c_str())\n            != SSH_AUTH_SUCCESS) {\n            std::cerr << \"Auth failed: \"\n                      << ssh_get_error(ssh_) << std::endl;\n            return false;\n        }\n        return true;\n    }\n\n    std::string exec(const std::string& command) {\n        ssh_channel channel = ssh_channel_new(ssh_);\n        if (ssh_channel_open_session(channel) != SSH_OK) return \"\";\n\n        ssh_channel_request_exec(channel, command.c_str());\n\n        std::string result;\n        char buffer[256];\n        int n;\n        while ((n = ssh_channel_read(channel, buffer,\n                                     sizeof(buffer), 0)) > 0) {\n            result.append(buffer, n);\n        }\n\n        ssh_channel_close(channel);\n        ssh_channel_free(channel);\n        return result;\n    }\n\n    ~SshClient() {\n        if (ssh_) {\n            ssh_disconnect(ssh_);\n            ssh_free(ssh_);\n        }\n    }\n\nprivate:\n    ssh_session ssh_ = nullptr;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → SSH Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import paramiko\n\nclass SSHClient:\n    def __init__(self, host: str, port: int = 22):\n        self.host = host\n        self.port = port\n        self.client = paramiko.SSHClient()\n        self.client.set_missing_host_key_policy(\n            paramiko.AutoAddPolicy())\n\n    def connect(self, username: str, password: str = None,\n                key_filename: str = None) -> bool:\n        try:\n            self.client.connect(\n                self.host, port=self.port,\n                username=username, password=password,\n                key_filename=key_filename\n            )\n            return True\n        except Exception as e:\n            print(f\"SSH connection error: {e}\")\n            return False\n\n    def exec(self, command: str) -> tuple:\n        stdin, stdout, stderr = self.client.exec_command(command)\n        return stdout.read().decode(), stderr.read().decode()\n\n    def close(self):\n        self.client.close()\n\n\nif __name__ == \"__main__\":\n    ssh = SSHClient(\"example.com\")\n    if ssh.connect(\"alice\", password=\"secret\"):\n        out, err = ssh.exec(\"ls -la\")\n        print(\"STDOUT:\", out)\n        if err:\n            print(\"STDERR:\", err)\n        ssh.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → SSH:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange (DH)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log p) exponentiations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular exponentiation O(log p)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) per message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream cipher over m bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single challenge-response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) per byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt-decrypt each byte"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-dhcp--dynamic-host-configuration-protocol",
      children: "10.7 DHCP → Dynamic Host Configuration Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " DHCP is like a hotel front desk. When a guest (device) checks in, the front desk assigns them a room number (IP address), tells them the hotel rules (subnet mask), where the exit is (gateway), and where the concierge is (DNS server). The room is rented for a limited time (lease)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1071-dora-process",
      children: "10.7.1 DORA Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → DHCP DORA:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "D"
        }), "iscover (client broadcast): DHCPDISCOVER sent to 255.255.255.255:67 (UDP). Source IP = 0.0.0.0. \"Is there a DHCP server out there?\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O"
        }), "ffer (server unicast/broadcast): DHCPOFFER with offered IP, subnet mask, gateway, DNS server, lease time, server identifier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R"
        }), "equest (client broadcast): DHCPREQUEST. \"I accept the offer from server X for IP Y.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        }), "cknowledge (server): DHCPACK confirming the lease is active."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP Message Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|     op (8)    |   htype (8)   |   hlen (8)    |   hops (8)    |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            xid (32)                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|           secs (16)           |           flags (16)          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          ciaddr (32)                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          yiaddr (32)                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          siaddr (32)                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          giaddr (32)                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          chaddr (128)                         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                       sname (512 bits)                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        file (1024 bits)                       |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        options (variable)                     |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → DHCP DORA Process:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dest"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "yiaddr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCPDISCOVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client MAC: AA:BB:CC:DD:EE:FF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCPOFFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask: 255.255.255.0, GW: 192.168.1.1, DNS: 8.8.8.8, Lease: 86400s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP reserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCPREQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server ID: 192.168.1.1, Requested IP: 192.168.1.100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awaiting ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.1:67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255.255.255.255:68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same options + lease confirmed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lease active, T+86400"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lease Renewal:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At T/2 (50% lease): client unicasts DHCPREQUEST to server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with DHCPACK extending lease."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no response by 87.5%: client broadcasts DHCPREQUEST to any server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If lease expires: client must stop using IP and start DORA again."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → DHCP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION dhcp_acquire():\n  sock ← UDP.bind(0.0.0.0, 68)\n  sock.set_broadcast(True)\n\n  discover ← BUILD_MSG(OP=1, HTYPE=1, HLEN=6, XID=random, CHADDR=my_mac)\n  discover.options = [DHCP_DISCOVER, PARAM_REQUEST_LIST]\n  sock.sendto(discover, \"255.255.255.255\", 67)\n  TIMEOUT = 4, RETRIES = 0\n\n  WHILE True:\n    IF sock.poll(TIMEOUT):\n      msg ← sock.recv()\n      IF msg.options contains DHCP_OFFER:\n        offered_ip = msg.yiaddr\n        request ← BUILD_MSG(OP=1, XID=new_random, CHADDR=my_mac)\n        request.options = [DHCP_REQUEST, REQUESTED_IP=offered_ip]\n        sock.sendto(request, \"255.255.255.255\", 67)\n\n        IF sock.poll(TIMEOUT):\n          ack ← sock.recv()\n          IF ack.options contains DHCP_ACK:\n            CONFIGURE_INTERFACE(ack.yiaddr, ack.options[SUBNET_MASK],\n                              ack.options[ROUTER], ack.options[DNS])\n            SET_LEASE_TIMER(ack.options[LEASE_TIME])\n            RETURN SUCCESS\n        RETRIES++\n        IF RETRIES > 4: RETURN FAILURE\n    TIMEOUT *= 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → DHCP Client (conceptual):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport struct\nimport random\n\nclass DHCPClient:\n    def __init__(self):\n        self.xid = random.randint(0, 0xFFFFFFFF)\n\n    def _build_dhcp_msg(self, msg_type: int, **kwargs) -> bytes:\n        op, htype, hlen, hops = 1, 1, 6, 0\n        secs, flags = 0, 0x8000\n        ciaddr = 0\n        yiaddr = kwargs.get(\"yiaddr\", 0)\n        siaddr, giaddr = 0, 0\n        chaddr = b\"\\x00\\x11\\x22\\x33\\x44\\x55\" + b\"\\x00\" * 10\n        sname = b\"\\x00\" * 64\n        file = b\"\\x00\" * 128\n        magic_cookie = b\"\\x63\\x82\\x53\\x63\"\n\n        options = magic_cookie\n        options += struct.pack(\"!BB\", 53, 1) + struct.pack(\"B\", msg_type)\n        options += struct.pack(\"!BB\", 55, 3) + b\"\\x01\\x03\\x06\"\n        if \"requested_ip\" in kwargs:\n            options += struct.pack(\"!BB\", 50, 4) + \\\n                       struct.pack(\"!I\", kwargs[\"requested_ip\"])\n        if \"server_id\" in kwargs:\n            options += struct.pack(\"!BB\", 54, 4) + \\\n                       struct.pack(\"!I\", kwargs[\"server_id\"])\n        options += struct.pack(\"!BB\", 255, 0)\n\n        header = struct.pack(\"!BBBB\", op, htype, hlen, hops)\n        header += struct.pack(\"!I\", self.xid)\n        header += struct.pack(\"!HH\", secs, flags)\n        header += struct.pack(\"!I\", ciaddr)\n        header += struct.pack(\"!I\", yiaddr)\n        header += struct.pack(\"!I\", siaddr)\n        header += struct.pack(\"!I\", giaddr)\n        header += chaddr + sname + file\n\n        return header + options\n\n    def acquire(self) -> dict:\n        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n        sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)\n        sock.bind((\"0.0.0.0\", 68))\n        sock.settimeout(5)\n\n        discover = self._build_dhcp_msg(1)\n        sock.sendto(discover, (\"255.255.255.255\", 67))\n        print(\"DHCPDISCOVER sent\")\n\n        data, addr = sock.recvfrom(1024)\n        offered_ip = socket.inet_ntoa(data[16:20])\n        print(f\"DHCPOFFER: {offered_ip}\")\n\n        ip_int = struct.unpack(\"!I\", data[16:20])[0]\n        request = self._build_dhcp_msg(3, requested_ip=ip_int)\n        sock.sendto(request, (\"255.255.255.255\", 67))\n        print(\"DHCPREQUEST sent\")\n\n        data, addr = sock.recvfrom(1024)\n        ack_ip = socket.inet_ntoa(data[16:20])\n        print(f\"DHCPACK: {ack_ip}\")\n\n        sock.close()\n        return {\"ip\": ack_ip, \"server\": addr[0]}\n\n\nif __name__ == \"__main__\":\n    client = DHCPClient()\n    result = client.acquire()\n    print(f\"Acquired IP: {result['ip']} from {result['server']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → DHCP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DORA cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 4-message exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP pool management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) per allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool tracking (bitmap or free list)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lease expiry check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per timer tick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer heap for lease events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Renewal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single REQUEST-ACK exchange"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-touch configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No authentication (rogue DHCP servers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized IP management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lease overhead on large networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic renewal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for server static IPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents IP conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP starvation attacks possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible options (DNS, NTP, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relay required across subnets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → DHCP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DHCP starvation:"
        }), " Attacker floods DISCOVER messages with fake MACs, exhausting the IP pool. Mitigation: DHCP snooping on switches, port security."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rogue DHCP server:"
        }), " Unauthorized server gives malicious IP config. Mitigation: DHCP snooping (trusted/untrusted ports)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP conflict:"
        }), " Two devices get same IP. DHCP server should ping before offer. Client sends ARP probe."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relay across subnets:"
        }), " DHCP broadcast does not cross routers. DHCP relay agent forwards unicast to server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infinite lease:"
        }), " Manually configured for servers. No renewal, but IP never released."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-snmp--simple-network-management-protocol",
      children: "10.8 SNMP → Simple Network Management Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " SNMP is like a building management system. The manager (central console) periodically checks temperature sensors in every room (polling). If a fire alarm goes off (trap), the sensors immediately alert the manager."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SNMP Manager:"
        }), " Central monitoring system (Nagios, Zabbix, PRTG)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SNMP Agent:"
        }), " Software on managed device (router, switch, printer)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MIB (Management Information Base):"
        }), " Hierarchical tree of OIDs defining what can be managed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OID (Object Identifier):"
        }), " Numeric path to a specific variable (e.g., 1.3.6.1.2.1.1.5.0 = sysName)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SNMP Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GET:"
        }), " Manager retrieves a value from agent (polling)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GETNEXT:"
        }), " Manager walks the MIB tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GETBULK:"
        }), " Manager retrieves large tables efficiently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SET:"
        }), " Manager modifies a value on agent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TRAP:"
        }), " Agent sends unsolicited alert to manager."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INFORM:"
        }), " Like TRAP but with acknowledgment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SNMP Versions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1:"
        }), " Community string authentication (plaintext). No encryption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v2c:"
        }), " Improved, but still community strings. Bulk operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v3:"
        }), " USM (User-based Security Model) for encryption and authentication. VACM (View-based Access Control)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common OIDs:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.1.1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sysDescr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System description"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.1.3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sysUpTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time since last reboot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.1.5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sysName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device hostname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.2.2.1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifDescr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface description"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.2.2.1.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifInOctets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes received on interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.2.2.1.16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifOutOctets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes sent on interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.2.1.4.20.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ipAdEntAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address of interface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → SNMP Manager Polling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION snmp_get(host, community, oid):\n  request ← BUILD_GET_REQUEST(community=community, oid=oid, request_id=random)\n  sock ← UDP.sendto(request, host, 161)\n  response ← sock.recv(8192)\n  value ← PARSE_RESPONSE(response)\n  RETURN value\n\nFUNCTION snmp_walk(host, community, base_oid):\n  results ← []\n  current_oid ← base_oid\n  WHILE True:\n    response ← snmp_getnext(host, community, current_oid)\n    IF response.oid does not start with base_oid:\n      BREAK\n    results.append((response.oid, response.value))\n    current_oid ← response.oid\n  RETURN results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → SNMP GET (using pysnmp):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pysnmp.hlapi import *\n\ndef snmp_get(host: str, oid: str, community: str = \"public\"):\n    iterator = getCmd(\n        SnmpEngine(),\n        CommunityData(community),\n        UdpTransportTarget((host, 161)),\n        ContextData(),\n        ObjectType(ObjectIdentity(oid))\n    )\n\n    errorIndication, errorStatus, errorIndex, varBinds = next(\n        iterator)\n\n    if errorIndication:\n        print(f\"SNMP error: {errorIndication}\")\n        return None\n    elif errorStatus:\n        print(f\"SNMP error: {errorStatus.prettyPrint()}\")\n        return None\n    else:\n        for varBind in varBinds:\n            return str(varBind)\n\ndef snmp_walk(host: str, base_oid: str,\n              community: str = \"public\") -> list:\n    results = []\n    iterator = nextCmd(\n        SnmpEngine(),\n        CommunityData(community),\n        UdpTransportTarget((host, 161)),\n        ContextData(),\n        ObjectType(ObjectIdentity(base_oid)),\n        lexicographicMode=True\n    )\n\n    for errorIndication, errorStatus, errorIndex, varBinds in iterator:\n        if errorIndication:\n            break\n        if errorStatus:\n            break\n        for varBind in varBinds:\n            oid, value = varBind\n            if not str(oid).startswith(base_oid):\n                return results\n            results.append((str(oid), str(value)))\n\n    return results\n\n\nif __name__ == \"__main__\":\n    sys_name = snmp_get(\"192.168.1.1\", \"1.3.6.1.2.1.1.5.0\")\n    print(f\"System name: {sys_name}\")\n\n    interfaces = snmp_walk(\"192.168.1.1\",\n                           \"1.3.6.1.2.1.2.2.1.2\")\n    for oid, desc in interfaces:\n        print(f\"{oid}: {desc}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → SNMP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single OID lookup in MIB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GETNEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree traversal to next leaf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GETBULK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve multiple rows in one operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(message)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asynchronous → no polling overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIB compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load entire MIB tree"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal (all network devices support)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v1/v2c insecure (plaintext community)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized MIB structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex OID management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polling + trap architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP-based → unreliable delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup complexity for v3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extensible (enterprise MIBs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk data transfer slow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → SNMP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Community string exposure:"
        }), " SNMPv2c sends community string in plaintext. Attacker can reconfigure devices. Use SNMPv3 with USM."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MIB compilation errors:"
        }), " Vendor MIBs may conflict or be malformed. Use strict MIB compiler."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TRAP storms:"
        }), " Device sends hundreds of traps per second (link flapping). Trap throttling and de-duplication needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large OID tables:"
        }), " Switch with 1000 VLANs returns 1000+ rows. GETBULK with proper max-repetitions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "109-websocket",
      children: "10.9 WebSocket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " HTTP is like writing a letter for each message → full address, envelope, postage. WebSocket is like a phone call → once connected, you just talk. No addressing overhead for each message."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full-duplex communication over a single TCP connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initiated via HTTP upgrade (101 Switching Protocols)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text and binary frames."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low overhead (2-14 bytes per message vs HTTP headers ~800 bytes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No reconnection overhead → connection persists."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses ws:// (port 80) and wss:// (port 443 for TLS)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → WebSocket Handshake:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HTTP GET with Upgrade headers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server responds with 101 Switching Protocols."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection upgrades from HTTP to WebSocket."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional frame exchange begins."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Either party sends close frame to terminate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP Upgrade Request:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /chat HTTP/1.1\nHost: server.example.com\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\nSec-WebSocket-Version: 13\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP 101 Response:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "WebSocket Frame Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|F|R|R|R| opcode|M| Payload len (7) | Extended len (16/64)   ...\n|I|S|S|S|  (4)  |A|                 |\n|N|V|V|V|       |S|                 |\n| |1|2|3|       |K|                 |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n| Extended payload length (if 16/64)                         ...\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n| Masking-key (if MASK=1)                                     ...\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n| Payload Data                                                ...\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → WebSocket Server (using Boost.Beast):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <boost/asio.hpp>\n#include <boost/beast.hpp>\n\nusing tcp = boost::asio::ip::tcp;\n\nclass WebSocketServer {\npublic:\n    WebSocketServer(short port)\n        : acceptor_(io_, tcp::endpoint(tcp::v4(), port)) {\n        std::cout << \"WebSocket server on port \" << port << std::endl;\n    }\n\n    void run() {\n        while (true) {\n            tcp::socket socket(io_);\n            acceptor_.accept(socket);\n\n            boost::beast::flat_buffer buf;\n            boost::beast::http::request<boost::beast::http::string_body> req;\n            boost::beast::http::read(socket, buf, req);\n\n            if (boost::beast::websocket::is_upgrade(req)) {\n                boost::beast::websocket::stream<tcp::socket> ws(\n                    std::move(socket));\n                ws.accept(req);\n\n                while (true) {\n                    boost::beast::flat_buffer frame;\n                    boost::beast::error_code ec;\n                    ws.read(frame, ec);\n                    if (ec) break;\n                    ws.text(ws.got_text());\n                    ws.write(frame.data());\n                }\n            }\n        }\n    }\n\nprivate:\n    boost::asio::io_context io_;\n    tcp::acceptor acceptor_;\n};\n\nint main() {\n    WebSocketServer server(8080);\n    server.run();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → WebSocket Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nimport websockets\n\nasync def echo(websocket, path):\n    async for message in websocket:\n        print(f\"Received: {message}\")\n        await websocket.send(f\"Echo: {message}\")\n\nasync def chat_handler(websocket, path):\n    global clients\n    clients.add(websocket)\n    try:\n        async for message in websocket:\n            for client in clients:\n                if client != websocket:\n                    await client.send(message)\n    finally:\n        clients.remove(websocket)\n\nclients = set()\n\nasync def main():\n    echo_server = await websockets.serve(echo, \"localhost\", 8765)\n    chat_server = await websockets.serve(chat_handler,\n                                         \"localhost\", 8766)\n\n    print(\"WebSocket servers:\")\n    print(\"  Echo: ws://localhost:8765\")\n    print(\"  Chat: ws://localhost:8766\")\n\n    await asyncio.gather(\n        echo_server.wait_closed(),\n        chat_server.wait_closed()\n    )\n\nif __name__ == \"__main__\":\n    asyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → WebSocket:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handshake (upgrade)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single HTTP request + response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame send"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payload copied to frame buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame receive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame reassembly from TCP stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Masking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR with 4-byte mask"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex real-time communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in reconnection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low overhead (2-14 bytes per frame)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy/firewall may block WebSocket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-origin (CORS) support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server must track connection state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary and text frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for request-response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized (RFC 6455)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native multiplexing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → WebSocket:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proxy timeouts:"
        }), " Proxies close idle connections. Implement heartbeat/ping-pong."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection limit:"
        }), " Each WebSocket uses a TCP connection. 10,000 clients = 10,000 open FDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-origin hijacking:"
        }), " Check Origin header server-side."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large messages fragmentation:"
        }), " Messages > 64KB fragmented into multiple frames."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1010-grpc",
      children: "10.10 gRPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " gRPC is like ordering from a catalog with a pre-printed order form. Instead of writing down what you want in plain English each time (HTTP), you fill in a structured form (protobuf). The catalog (protobuf IDL) defines all available items and their options."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-performance RPC framework by Google."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP/2 transport (multiplexed, binary)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol Buffers (protobuf) for serialization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-generated client/server stubs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four service types: Unary, Server Streaming, Client Streaming, Bidirectional Streaming."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Definition (protobuf):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-protobuf",
        children: "syntax = \"proto3\";\n\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply);\n  rpc LotsOfReplies (HelloRequest) returns (stream HelloReply);\n  rpc LotsOfGreetings (stream HelloRequest) returns (HelloReply);\n  rpc BidiHello (stream HelloRequest) returns (stream HelloReply);\n}\n\nmessage HelloRequest {\n  string name = 1;\n  int32 age = 2;\n}\n\nmessage HelloReply {\n  string message = 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → gRPC Unary Call:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server starts, listens on port 50051 over HTTP/2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client opens HTTP/2 connection to server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client serializes request using protobuf."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HTTP/2 HEADERS frame (method, path, content-type, te)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends HTTP/2 DATA frame (protobuf-encoded request)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server receives, deserializes, processes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server sends HTTP/2 HEADERS frame (status 200, content-type)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server sends HTTP/2 DATA frame (protobuf-encoded response)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stream closes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → gRPC Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import grpc\nfrom concurrent import futures\nimport time\n\n# Generated from proto file\n\nclass GreeterServicer(greeter_pb2_grpc.GreeterServicer):\n    def SayHello(self, request, context):\n        print(f\"Received: {request.name}\")\n        return greeter_pb2.HelloReply(\n            message=f\"Hello, {request.name}!\"\n        )\n\n    def LotsOfReplies(self, request, context):\n        for i in range(5):\n            yield greeter_pb2.HelloReply(\n                message=f\"Reply {i} for {request.name}\"\n            )\n            time.sleep(0.5)\n\ndef serve():\n    server = grpc.server(\n        futures.ThreadPoolExecutor(max_workers=10))\n    greeter_pb2_grpc.add_GreeterServicer_to_server(\n        GreeterServicer(), server)\n    server.add_insecure_port(\"[::]:50051\")\n    server.start()\n    print(\"gRPC server on port 50051\")\n    server.wait_for_termination()\n\nif __name__ == \"__main__\":\n    serve()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → gRPC Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import grpc\n\ndef run():\n    with grpc.insecure_channel(\"localhost:50051\") as channel:\n        stub = greeter_pb2_grpc.GreeterStub(channel)\n\n        response = stub.SayHello(\n            greeter_pb2.HelloRequest(name=\"Alice\"))\n        print(f\"Unary: {response.message}\")\n\n        replies = stub.LotsOfReplies(\n            greeter_pb2.HelloRequest(name=\"Bob\"))\n        for reply in replies:\n            print(f\"Stream: {reply.message}\")\n\nif __name__ == \"__main__\":\n    run()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → gRPC Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <grpcpp/grpcpp.h>\n#include \"greeter.grpc.pb.h\"\n\nusing grpc::Server;\nusing grpc::ServerBuilder;\nusing grpc::ServerContext;\nusing grpc::Status;\nusing grpc::ServerWriter;\n\nclass GreeterServiceImpl final : public Greeter::Service {\n    Status SayHello(ServerContext* context,\n                    const HelloRequest* request,\n                    HelloReply* reply) override {\n        std::string msg = \"Hello, \" + request->name() + \"!\";\n        reply->set_message(msg);\n        return Status::OK;\n    }\n\n    Status LotsOfReplies(ServerContext* context,\n                         const HelloRequest* request,\n                         ServerWriter<HelloReply>* writer) override {\n        for (int i = 0; i < 5; i++) {\n            HelloReply reply;\n            reply.set_message(\"Reply \" + std::to_string(i)\n                            + \" for \" + request->name());\n            writer->Write(reply);\n        }\n        return Status::OK;\n    }\n};\n\nvoid RunServer() {\n    std::string addr(\"0.0.0.0:50051\");\n    GreeterServiceImpl service;\n\n    ServerBuilder builder;\n    builder.AddListeningPort(addr, grpc::InsecureServerCredentials());\n    builder.RegisterService(&service);\n\n    std::unique_ptr<Server> server(builder.BuildAndStart());\n    std::cout << \"Server on \" << addr << std::endl;\n    server->Wait();\n}\n\nint main() {\n    RunServer();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis → gRPC:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protobuf serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear encoding of fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protobuf deserialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear field decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unary RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 request + 1 response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream messages as generated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(total messages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async send/receive interleaved"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why these complexities:"
      }), " Protobuf encoding is O(n) because it iterates over each field exactly once. Streaming is O(k) for k messages because each message is processed independently. Unary calls have constant overhead plus linear payload processing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High performance (binary, HTTP/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex setup (protobuf compilation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong typing (contract-first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to debug (binary format)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming (all 4 patterns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser limitations (needs gRPC-Web)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polyglot (10+ languages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No human-readable protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large dependency footprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadline/timeout propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning requires protobuf discipline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases → gRPC:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadline exceeded:"
        }), " Client sets deadline; server should check context->IsCancelled()."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large message handling:"
        }), " Default 4MB limit. Configure with max_send/receive_message_length."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection reuse:"
        }), " HTTP/2 multiplexing → one connection handles many RPCs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancing:"
        }), " Stickiness vs round-robin. Use grpc-lb-policy header."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protobuf backward compatibility:"
        }), " Never change field numbers. Use reserved keyword."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1011-http-versions-comparison",
      children: "10.11 HTTP Versions Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/1.0 (1996)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/1.1 (1997)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/2 (2015)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP/3 (2022)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC (UDP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (HOL blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (streams)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (independent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary (HPACK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary (QPACK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPACK (85% reduction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QPACK (out-of-order)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-stream/per-connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-stream (QUIC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (TLS 1.3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (TCP+TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (QUIC+TLS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOL blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App layer (pipelining)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport layer (TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80, 443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Market adoption (2025)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obsolete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~35%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~55%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST APIs, simple sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex web apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile, real-time, video"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (plaintext)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (plaintext)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder (binary frames)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardest (UDP+QUIC)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HOL Blocking Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 Pipelining:\n  Req A ████████ WAIT ██████████████ Resp A ██\n  Req B ──────────────████████████WAIT ██████████ Resp B\n                    ↑ Resp A blocked by B's request processing\n\nHTTP/2 (TCP):\n  Stream A: ████████████████ Response A ████\n  Stream B: ████ Response B ████████████████\n                    ↑ TCP packet loss blocks BOTH streams\n\nHTTP/3 (QUIC):\n  Stream A: ████████████████ Response A ████\n  Stream B: ██████████████████████████████████████\n                    ↑ Loss on Stream A doesn't affect Stream B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1012-comparison-tables",
      children: "10.12 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "protocol-comparison-table",
      children: "Protocol Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80, 443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Req-Resp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (mux)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame/Stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP/TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query-Resp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25, 587"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STARTTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110, 995"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "143, 993"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STARTTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21, 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (FTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cmd/Data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67, 68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DORA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manager-Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "161, 162"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNMPv3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poll/Trap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80, 443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-Duplex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (HTTP/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50051 (custom)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPC/Stream"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-layer-vs-other-layers",
      children: "Application Layer vs Other Layers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocols"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Addressing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application (7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message/Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, DNS, SMTP, FTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain name, URI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presentation (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoded data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL/TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetBIOS, RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment/Datagram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP, UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, ICMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Link (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, PPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10BASE-T, 1000BASE-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-domain-matrix",
      children: "Application Domain Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preferred Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 or HTTP/3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexed, reduced latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email transfer (MTA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry standard, store-and-forward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email retrieval (multi-device)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side folders, sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File transfer (automated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP/FTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory listing, resume support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network config automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-touch assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remote administration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted, port forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNMPv3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted, standardized MIB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex, low overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High performance, streaming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference-http-status-codes",
      children: "Quick Reference: HTTP Status Codes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful GET, PUT, PATCH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful POST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE success, empty body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moved Permanently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource URL changed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary redirect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not Modified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached resource still valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malformed client input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forbidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No permission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not Found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource does not exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method Not Allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong HTTP method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "429"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too Many Requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limit exceeded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Server Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream server failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Unavailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary overload/maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gateway Timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream timed out"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1013-interview-corner",
      children: "10.13 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-difference-between-dns-recursive-and-iterative-resolution",
      children: "Q1: Difference between DNS Recursive and Iterative Resolution?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Who does the work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The resolver (e.g., 8.8.8.8) does all queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The resolver queries each server, which refers to next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client burden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal → client sends one query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More → client must follow referrals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At client/resolver"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High on resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spread across servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP/Public resolvers (8.8.8.8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root/TLD servers communicate with resolvers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolver handles retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client handles retries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 from client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 from client (user sees one)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actual queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4-5 (root → TLD → auth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4-5 (same chain)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In recursive resolution, the client asks a resolver to find the answer completely; the resolver does all the work and returns only the final answer. In iterative resolution, the resolver queries each server in the hierarchy, and each server either answers or refers the resolver to the next server down the chain. Root and TLD servers only do iterative → they never perform recursion for clients."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-difference-between-http-persistent-and-non-persistent-connections",
      children: "Q2: Difference between HTTP Persistent and Non-Persistent Connections?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Persistent (HTTP/1.0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistent (HTTP/1.1)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connections per page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N (one per resource)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (typically 6-8 parallel)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT per resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (TCP + request/response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (after initial handshake)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (TCP setup per resource)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (keep-alive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple TCP connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplexing within connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection: header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keep-alive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection: close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection: keep-alive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Non-persistent HTTP opens a new TCP connection for each object, requiring 2 RTT per object (TCP handshake + request/response). Persistent HTTP keeps the connection open for multiple requests, saving the TCP handshake overhead. HTTP/1.1 uses persistent connections by default, but still processes requests sequentially (response ordering). HTTP/2 improved this with true multiplexing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-difference-between-smtp-and-http",
      children: "Q3: Difference between SMTP and HTTP?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SMTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push (sender pushes to server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull (client pulls from server)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 5322 (Internet Message Format)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP headers + body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text (7-bit ASCII), MIME for binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary, text, multipart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward (relay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct client-server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (same message sent = duplicates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET is idempotent; POST is not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETag, Cache-Control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless per message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 (MTA), 587 (submission)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 (HTTP), 443 (HTTPS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SMTP is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "push"
      }), " protocol → the sender initiates the connection and pushes the message toward the receiver. The message may pass through multiple relay servers (store-and-forward). HTTP is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pull"
      }), " protocol → the client initiates a connection and pulls data from the server. SMTP also has different message structure (RFC 5322: headers + blank line + body) and handles binary data differently (MIME encoding)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-difference-between-websocket-and-http",
      children: "Q4: Difference between WebSocket and HTTP?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WebSocket"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request-Response (half-duplex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex (bidirectional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead per message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~800 bytes headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-14 bytes frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short (per request)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long (persistent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client (via HTTP upgrade)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful (connection state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text/binary (self-describing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text/binary frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST APIs, web pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time: chat, gaming, live data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE (server→client only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both directions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High per message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low per message"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " WebSocket provides full-duplex communication over a single persistent connection with minimal framing overhead (2-14 bytes). HTTP is request-response with much higher overhead (~800 bytes of headers per request). WebSocket starts as an HTTP upgrade request (101 Switching Protocols), then switches to its own frame-based protocol. Use HTTP for REST APIs, resource fetching, and caching-friendly operations. Use WebSocket for real-time applications like chat, gaming, live updates, and streaming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-ftp-active-mode-differ-from-passive-mode",
      children: "Q5: How does FTP Active Mode differ from Passive Mode?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In active mode, the client opens a random port, tells the server via PORT command, and the server connects from port 20 to the client's port. This fails behind NAT/firewall because the server cannot initiate a connection to the client's private IP. In passive mode (PASV), the server opens a random port and tells the client. The client then connects to the server's port for data. Since the client initiates both connections, NAT/firewall traversal works. Passive mode is standard for modern FTP, especially for clients behind NAT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-dns-caching-and-why-is-ttl-important",
      children: "Q6: What is DNS Caching and why is TTL important?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " DNS caching stores resolved domain-IP mappings at various levels (browser, OS, resolver, ISP). TTL (Time-to-Live) in seconds controls how long a record stays cached. Short TTL (60s) means clients get updated IP quickly but increases DNS query load. Long TTL (86400s = 24h) reduces load but causes stale IPs during server migration. Best practice: lower TTL (300s) before planned IP changes, then raise back after."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-n1-query-problem",
      children: "Q7: What is the N+1 Query Problem?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Common in API/database design interviews."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The N+1 query problem occurs when fetching a list of N parent entities, then making N additional queries to fetch child entities for each parent. Example: fetching 100 blog posts (1 query), then fetching comments for each post (100 queries). Solutions: eager loading (JOIN in SQL), batching (graphql/dataloader), or API bulk endpoints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-http-request-smuggling",
      children: "Q8: What is HTTP Request Smuggling?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HTTP request smuggling exploits differences in how frontend (proxy/CDN) and backend servers parse HTTP messages, especially Content-Length vs Transfer-Encoding. An attacker crafts a request that the frontend sees as one request but the backend sees as two. This can bypass security controls, poison caches, or hijack user sessions. Mitigations: consistent parsing, HTTP/2 (binary framing avoids ambiguity), disable HTTP/1.1 downgrade."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-does-https-differ-from-http",
      children: "Q9: How does HTTPS differ from HTTP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HTTPS = HTTP over TLS (SSL). TLS provides: encryption (no eavesdropping), authentication (verify server identity via certificates), integrity (tamper detection). HTTPS uses port 443. TLS handshake involves: ClientHello, ServerHello + certificate, key exchange, then encrypted HTTP. Performance overhead: ~1 extra RTT for TLS 1.3 (vs HTTP plaintext)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-explain-the-three-way-handshake-and-its-application-layer-impact",
      children: "Q10: Explain the Three-Way Handshake and its Application Layer Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The TCP three-way handshake (SYN, SYN-ACK, ACK) adds 1 RTT before any application data flows. For HTTP/1.1, this means 2 RTTs per new connection (handshake + request/response). HTTP/2 reduces impact by reusing one connection. HTTP/3 over QUIC combines handshake + TLS in 1 RTT. For short requests (API calls), the handshake overhead dominates latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1014-applications-in-real-systems",
      children: "10.14 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nginx-and-apache-http-servers",
      children: "Nginx and Apache (HTTP Servers)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nginx"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Apache"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven (async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process/thread-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single process, many connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPM: prefork, worker, event"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static file performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy to FastCGI/uWSGI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mod_php (embedded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (mod_http2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (very common)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mod_proxy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative, concise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".htaccess per directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Market use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34% of all websites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30% of all websites"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How Nginx handles HTTP/2:"
      }), " Nginx implements HTTP/2 via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http2"
      }), " directive. It multiplexes streams over a single connection, applies HPACK compression, and supports server push via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http2_push"
      }), ". Nginx does not support HTTP/3 natively (needs third-party module or Cloudflare's quiche)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-http3-implementation",
      children: "Chrome HTTP/3 Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chrome was the first major browser to enable HTTP/3 by default (2020). Implementation details:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "quiche"
        }), " (Cloudflare's QUIC implementation) or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "QUICHE"
        }), " (Google's)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP/3 enabled for ~90% of HTTPS sites."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Falls back to HTTP/2 or HTTP/1.1 if UDP is blocked."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection migration: when switching from WiFi to mobile, HTTP/3 connections survive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0-RTT: Chrome sends GET requests in the very first packet after a cached connection."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloudflare-dns-1111",
      children: "Cloudflare DNS (1.1.1.1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anycast:"
        }), " 1.1.1.1 is routed globally via BGP anycast to the nearest of 330+ data centers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance:"
        }), " Median DNS lookup time: 10ms (vs ISP average: 30-80ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy:"
        }), " Logs deleted within 24 hours. No IP logging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS over HTTPS (DoH):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cloudflare-dns.com/dns-query",
          children: "https://cloudflare-dns.com/dns-query"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS over TLS (DoT):"
        }), " 1.1.1.1:853"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNSSEC:"
        }), " Validates DNSSEC-signed responses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendmail-vs-postfix-mta",
      children: "Sendmail vs Postfix (MTA)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sendmail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postfix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monolithic (single binary, suid root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular (multiple processes, least privilege)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex M4 macros → sendmail.cf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main.cf (key = value)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many vulnerabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer (designed defensively)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adequate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better (queue management, rate limiting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mail queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single queue directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active/deferred queue hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extensibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milter (mail filter API)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milter (compatible)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Market share (2025)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~35% of public MX servers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Postfix architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sendmail (MUA)\n  ↓\npickup → cleanup → qmgr → smtp → Network\n         ↑              ↓\n     trivial-rewrite   bounce/defer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ðÿ-pro-tips",
      children: "ðŸ’¡ Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check your TTLs on slow DNS:"
        }), " Stale DNS cache is a common cause of intermittent failures. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dig +trace"
        }), " to see the full resolution path and cache behavior at each hop. A record TTL of 60 seconds is too short for production; 300-3600 is typical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use passive FTP for NAT traversal:"
        }), " Active FTP requires the server to connect back to the client's port 20. This fails behind NAT. Always use passive (PASV) mode → the client initiates both control and data connections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMAP vs POP3 decision:"
        }), " If users access email from multiple devices or need server-side folder search, use IMAP. POP3 is acceptable only if messages are read on a single device and server storage is a concern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DHCP lease times matter:"
        }), " Short leases (minutes) allow rapid IP recovery but increase DHCP traffic. Long leases (days/weeks) reduce overhead but delay IP recycling. Reserve short leases for guest networks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/3 fallback:"
        }), " Not all networks allow UDP on port 443. Always support HTTP/2 fallback when deploying HTTP/3."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SNMPv3 complexity:"
        }), " While more secure, SNMPv3 setup (USM users, auth keys, encryption keys) is significantly more complex than v2c. Use monitoring tools that simplify SNMPv3 configuration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS translates domain names to IP addresses via a distributed hierarchy of root, TLD, and authoritative servers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP evolved from text-based request-response (HTTP/1.1) to multiplexed binary framing (HTTP/2) to QUIC-based transport (HTTP/3)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SMTP is a push protocol for mail transfer; IMAP/POP3 are pull protocols for mail retrieval."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FTP uses separate control (port 21) and data (port 20) connections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHCP automatically assigns IP configuration via the DORA process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH provides encrypted remote access, replacing the insecure Telnet protocol."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebSocket enables full-duplex communication over a single TCP connection via HTTP upgrade."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gRPC uses HTTP/2 + Protocol Buffers for high-performance RPC with streaming support."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1015-chapter-quiz",
      children: "10.15 Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which is NOT a characteristic of P2P architecture?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) Self-scaling, b) Centralized always-on, c) Peers as clients+servers, d) Resilient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2P is decentralized by definition. Centralized always-on servers are the defining characteristic of client-server architecture, not P2P."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 eliminates which type of head-of-line blocking?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) Transport HOL, b) Application HOL, c) Both, d) Neither"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2's multiplexed streams eliminate application-layer HOL (one slow request doesn't block others). However, TCP HOL still exists at the transport layer — one lost packet blocks all streams."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which DNS record type is used for email routing?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) A, b) CNAME, c) MX, d) PTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MX (Mail Exchange) records specify the mail server responsible for accepting email on behalf of a domain, along with a priority value. Lower priority = preferred server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which FTP mode works through NAT without configuration?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) Active, b) Passive, c) Both, d) Neither"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In passive mode (PASV), the server opens a port and the client connects to it. This works through NAT because the client initiates both control and data connections. Active mode requires the server to connect back to the client, which NAT typically blocks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the correct order of DHCP DORA messages?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a) Request-Offer-Discover-Ack, b) Discover-Offer-Request-Ack, c) Discover-Request-Offer-Ack, d) Offer-Discover-Request-Ack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DORA: Discover (client broadcasts), Offer (server offers IP), Request (client requests specific offer), Acknowledge (server confirms). This four-message exchange ensures lease agreement between client and server."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-dns-infrastructure-migration-for-a-global-e-commerce-platform",
      children: "Case Study: DNS Infrastructure Migration for a Global E-Commerce Platform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A global e-commerce platform serving 200+ countries with 1 billion monthly visits relied on a single anycast DNS provider. During peak shopping seasons (Black Friday, Diwali), DNS query rates exceeded 5 million queries per second (QPS), causing resolver timeouts lasting 3-8 seconds. Page load times spiked from 800ms to 4.2 seconds during these events. Additionally, a DNS cache poisoning attack on a third-party resolver resulted in 30 minutes of traffic misdirection to a fraudulent site, costing $2M in fraudulent transactions before DNSSEC validation caught the inconsistency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The infrastructure team implemented a multi-provider DNS architecture with three independent anycast providers (Cloudflare, AWS Route53, and a dedicated DNS appliance in their own data centers). Each domain used NS record delegation with all six nameservers advertised. At the application layer, they reduced DNS dependency by implementing HTTP/3 with connection migration (QUIC connection IDs survive network changes without re-resolution), HTTP/2 server push for critical CSS/JS resources (eliminating concurrent DNS lookups for sub-resources), and a client-side DNS-over-HTTPS (DoH) resolver using stale records with background refresh (serving cached IPs even during resolver failures). They deployed DNSSEC with NSEC (not NSEC3) for all zones, pre-computing RRSIG signatures with a 14-day validity window to reduce signing overhead. For the origin infrastructure, they implemented gRPC-based internal service discovery with 5-second TTLs, bypassing DNS entirely for internal microservice-to-microservice communication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " DNS resolution time remained under 20ms during peak traffic (down from 3-8s). The multi-provider approach achieved 99.999% DNS availability (down from 99.9% with single provider). Stale DNS record serving eliminated resolution failures entirely — zero downtime from resolver outages in 18 months of operation. DNSSEC blocked 12 cache poisoning attempts in the first quarter. The gRPC-based internal service mesh reduced inter-service DNS resolution latency from 50ms to under 1ms, and the HTTP/3 deployment reduced page load time by 22% on 3G/4G mobile connections due to connection migration surviving cellular handoffs. The combined infrastructure cost increased by 35%, but annual revenue loss from DNS-related downtime dropped from $8M to $0."]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-provider DNS"
            }), " with independent anycast providers"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use at least 2-3 DNS providers with overlapping NS records for high availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale DNS serving"
            }), " prevents downtime during resolver failures"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve cached records past TTL during resolver outages; refresh in background"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTP/3 connection migration"
            }), " eliminates DNS re-resolution on network change"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable QUIC on mobile-facing services to survive cellular-to-WiFi handoffs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "gRPC internal service mesh"
            }), " bypasses DNS for microservices"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use service mesh (Istio/Linkerd) with local endpoint discovery for sub-ms resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DNSSEC with NSEC"
            }), " prevents cache poisoning"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable DNSSEC signing with automated key rotation; use NSEC (not NSEC3) for smaller zones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DoH/DoT"
            }), " encrypts DNS queries to prevent hijacking"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy DNS-over-HTTPS resolvers; enterprise firewalls must account for DoH traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS TTL tuning"
            }), " balances freshness vs resolver load"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce TTL before planned migrations; use 30-60s TTLs for critical services behind load balancers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1016-summary",
      children: "10.16 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The application layer provides network services directly to end-user applications. Two architectures dominate: client-server (centralized server, scalable via load balancing) and peer-to-peer (self-scaling, decentralized, resilient)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP"
      }), " has evolved significantly:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/1.1:"
        }), " Text-based, persistent connections, pipelining with application-layer HOL blocking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/2:"
        }), " Binary framing, multiplexed streams, HPACK compression → eliminates application-layer HOL but retains TCP-level HOL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/3:"
        }), " Runs over QUIC (UDP), independent streams, 0-RTT, connection migration → no HOL blocking at any layer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS"
      }), " translates domain names to IP addresses through a distributed hierarchy of root, TLD, and authoritative servers. Resolution can be iterative (resolver follows referrals) or recursive (resolver does all work). DNSSEC adds cryptographic verification."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Email"
      }), " uses SMTP for push (sending/relaying) and POP3/IMAP for pull (retrieval). SMTP is store-and-forward with MX record-based routing. IMAP keeps messages on the server for multi-device access. POP3 downloads and typically deletes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FTP"
      }), " uses separate control (commands) and data (files) connections. Passive mode (PASV) works through NAT; active mode does not. FTPS adds TLS encryption."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP"
      }), " auto-assigns IP configuration via the DORA (Discover-Offer-Request-Acknowledge) process with lease-based IP management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SNMP"
      }), " enables network monitoring via GET/SET/TRAP operations over a standardized MIB tree. SNMPv3 adds encryption and authentication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WebSocket"
      }), " provides full-duplex communication over a single TCP connection via HTTP upgrade, enabling real-time applications."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "gRPC"
      }), " uses HTTP/2 and Protocol Buffers for high-performance RPC with streaming support across four service patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1017-exercises",
      children: "10.17 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between iterative and recursive DNS resolution?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIn iterative resolution, the resolver queries each server (root → TLD → authoritative) and receives referrals to the next server. The resolver does all the work. In recursive resolution, the resolver sends one query and the DNS server performs iterative queries on behalf of the resolver, returning only the final answer. Recursive resolvers handle caching; iterative servers (root/TLD/auth) do not cache for clients.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does HTTP/2 multiplexing differ from HTTP/1.1 pipelining?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nHTTP/1.1 pipelining sends multiple requests on one connection but responses must be returned in order (FIFO) — a slow response blocks all subsequent responses (application-layer HOL). HTTP/2 multiplexing interleaves multiple streams over a single TCP connection, where each stream is independent. Responses can arrive out of order, eliminating application-layer HOL blocking. Additionally, HTTP/2 has binary framing, stream prioritization, and flow control per stream.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is SMTP a push protocol while HTTP is a pull protocol?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSMTP is push because the sender's MTA initiates the TCP connection and pushes the email to the receiver's MTA. The receiver cannot pull mail from the sender. HTTP is pull because the client initiates the connection and requests (pulls) resources from the server. The server cannot push data without a prior request (except HTTP/2 server push, which is initiated in response to a client request).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What advantage does IMAP offer over POP3 for multi-device email access?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIMAP keeps messages on the server, so all devices see the same mailbox state: read/unread flags, folders, and messages. POP3 downloads messages to the client and typically deletes them from the server, making multi-device access inconsistent. IMAP supports server-side search, partial fetch (download headers first), and concurrent access.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of the SNMP MIB?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe MIB (Management Information Base) defines a hierarchical namespace (OID tree) of managed objects. Each object has a unique OID, data type, access level, and description. The MIB serves as the schema for SNMP operations — GET retrieves OID values, SET modifies writable objects, and TRAPs/INFORMs send asynchronous notifications. Without the MIB, the manager and agent would have no shared understanding of the managed data.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why HTTP/3 eliminates head-of-line blocking while HTTP/2 does not."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nHTTP/2 runs over TCP. If a TCP segment is lost, it blocks all streams in the TCP connection (transport-layer HOL). HTTP/3 runs over QUIC (UDP), which provides independent stream delivery. A lost packet on one stream does not affect other streams because they have independent sequence number spaces. At the application layer, both HTTP/2 and HTTP/3 eliminate HOL. The difference is TCP-level HOL in HTTP/2.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does WebSocket achieve full-duplex communication?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nWebSocket starts as an HTTP upgrade request (GET with Upgrade: websocket and Sec-WebSocket-Key). The server responds with 101 Switching Protocols and Sec-WebSocket-Accept. After the handshake, the TCP connection becomes a full-duplex channel using WebSocket frame format (opcode, payload length, masking key). Both client and server can send frames at any time without HTTP request-response semantics.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the four gRPC service types and when would you use each?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n(1) Unary RPC: client sends one request, server returns one response — standard RPC. (2) Server streaming: client sends one request, server returns a stream of responses — for large datasets or real-time feeds. (3) Client streaming: client sends a stream of requests, server returns one response — for file uploads or batch processing. (4) Bidirectional streaming: both sides send independent streams — for chat applications or real-time gaming.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trace the DNS resolution for the domain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mail.example.ac.uk"
        }), " starting from an empty local resolver cache."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStep 1: Query root server for mail.example.ac.uk → referral to .uk TLD. Step 2: Query .uk TLD → referral to ac.uk nameserver. Step 3: Query ac.uk nameserver → referral to example.ac.uk authoritative. Step 4: Query example.ac.uk authoritative → returns A/AAAA record for mail.example.ac.uk. Each step may involve additional queries for glue records (NS IP addresses). The resolver caches each response according to TTL.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An HTTP/1.1 web page references 12 CSS, 20 images, and 5 JS files. How many TCP connections?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nHTTP/1.1 with persistence: modern browsers use 6-8 parallel connections per domain (Chrome: 6). With 37 resources (12+20+5), using 6 parallel connections: 37/6 ≈ 7 rounds of serialization per connection. However, resources on the same domain share connections — the real bottleneck is application-layer HOL blocking. HTTP/2 uses 1 connection for all 37 resources with multiplexed streams, eliminating the connection overhead and round-robin scheduling.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An SMTP server receives a message for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "example.com"
        }), ". Explain MX record usage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe sending MTA queries DNS for MX records of example.com. The DNS returns records with priority values: e.g., MX 10 mail1.example.com (preferred), MX 20 mail2.example.com (backup). The sending MTA connects to the lowest-priority MX (10). If connection fails, it tries the next priority (20). After connecting, the sending MTA issues HELO, MAIL FROM, RCPT TO, DATA commands. The receiving MTA accepts or rejects based on recipient policy.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate HPACK bandwidth savings for HTTP/2 vs HTTP/1.1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nHTTP/1.1: request headers (500) + response headers (400) + body (51200) = 52100 bytes. HTTP/2: request headers (75) + response headers (60) + body (51200) = 51335 bytes. Savings = 52100 - 51335 = 765 bytes per request (1.5%). For 1000 resources per page load: 765 KB saved. HPACK uses static/dynamic header tables and Huffman coding, with efficiency improving as the session progresses (familiar headers indexed after first occurrence).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a simple application-layer protocol for a chat application."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nProtocol: Chat over TCP with JSON framing (length-prefixed). Messages: CONNECT {user, token}, SEND {to, text, timestamp}, RECV {from, text, timestamp}, DISCONNECT {reason}. Transport: TCP for reliable, ordered message delivery. Format: 4-byte length prefix + UTF-8 JSON message. This design provides framing (no message boundary ambiguity), human-readable debugging (JSON), and simple implementation. For production, use WebSocket or gRPC streaming instead of raw TCP.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Design an application-layer protocol for a distributed social network."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nA decentralized social network needs: (1) User discovery: use a DHT (Kademlia-like) mapping user IDs to current IP/port, similar to how BitTorrent finds peers. (2) Content storage: IPFS (content-addressed) for posts, with CIDs referenced in the DHT. (3) Delivery: store-and-forward relay nodes (like SMTP MTAs) buffer messages for offline recipients. (4) Addressing: user@node_id format, where node_id is a public key hash. Protocol messages: PUBLISH {cid, timestamp, signature}, SUBSCRIBE {user_id}, DELIVER {cid, from, to, timestamp}, ACK {cid}. The design combines DNS-inspired DHT discovery, SMTP-inspired store-and-forward, and HTTP-inspired content retrieval via IPFS gateways. Decentralized moderation uses reputation-based filtering.\n"]
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