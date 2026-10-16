"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6616],{

/***/ 8089
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "flowchart TD\r\n    subgraph Architecture[\"Application Architectures\"]\r\n        A[Client-Server] --> B[HTTP / FTP / SMTP / DNS]\r\n        C[Peer-to-Peer] --> D[Bittorrent / Blockchain]\r\n    end\r\n\r\n    subgraph Protocols[\"Core Application Protocols\"]\r\n        E[HTTP/1.1] --> F[HTTP/2]\r\n        F --> G[HTTP/3 over QUIC]\r\n        H[DNS] --> I[53/UDP + TCP]\r\n        J[Email] --> K[SMTP push]\r\n        K --> L[POP3 / IMAP pull]\r\n        M[FTP] --> N[Control 21/TCP + Data]\r\n        O[DHCP] --> P[DORA on 67/68 UDP]\r\n        Q[SNMP] --> R[GET/SET/TRAP on 161 UDP]\r\n    end\r\n\r\n    subgraph Modern[\"Modern Protocols\"]\r\n        S[WebSocket] --> T[Full-Duplex over HTTP Upgrade]\r\n        U[gRPC] --> V[HTTP/2 + Protobuf Streaming]\r\n    end\r\n\r\n    A --> Protocols\r\n    C --> Modern\r\n    Protocols --> Modern\r\n\r\n    classDef arch fill:#FF9800,color:#fff\r\n    classDef proto fill:#2196F3,color:#fff\r\n    classDef modern fill:#4CAF50,color:#fff\r\n    class A,C arch\r\n    class E,F,G,H,J,K,L,M,N,O,Q,R proto\r\n    class S,T,U,V modern\n"
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
        children: "CLIENT:\r\n  addr ← DNS.resolve(\"api.example.com\")\r\n  sock ← TCP.connect(addr, 80)\r\n  sock.send(\"GET /data HTTP/1.1\\r\\nHost: api.example.com\\r\\n\\r\\n\")\r\n  response ← sock.recv()\r\n  PRINT response.body\r\n  sock.close()\r\n\r\nSERVER:\r\n  sock ← TCP.bind(80)\r\n  LOOP:\r\n    client ← sock.accept()\r\n    request ← client.recv()\r\n    IF request contains \"GET /data\":\r\n      client.send(\"HTTP/1.1 200 OK\\r\\nContent-Type: application/json\\r\\n\\r\\n{\\\"key\\\":\\\"value\\\"}\")\r\n    ELSE:\r\n      client.send(\"HTTP/1.1 404 Not Found\\r\\n\\r\\n\")\r\n    client.close()\n"
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
        children: "CLIENT:\r\n  peers ← TRACKER.get_peers(info_hash)\r\n  FOR each peer IN peers:\r\n    sock ← TCP.connect(peer.ip, peer.port)\r\n    sock.send(REQUEST_PIECE(piece_index))\r\n    data ← sock.recv()\r\n    FILE.write_at(piece_index, data)\r\n    REPORT_Have(piece_index, tracker)\r\n  IF all pieces assembled:\r\n    FILE.assemble()\r\n\r\nTRACKER:\r\n  peers ← {}\r\n  LOOP:\r\n    msg ← sock.recv()\r\n    IF msg IS REGISTER:\r\n      peers.add(msg.ip, msg.port, msg.file)\r\n    IF msg IS QUERY:\r\n      sock.send(peers)\n"
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
        children: "FUNCTION http_get(url):\r\n  host, path ← PARSE_URL(url)\r\n  ip ← DNS.resolve(host)\r\n  sock ← TCP.connect(ip, 80)\r\n  request = \"GET \" + path + \" HTTP/1.1\\r\\n\"\r\n  request += \"Host: \" + host + \"\\r\\n\"\r\n  request += \"Connection: close\\r\\n\\r\\n\"\r\n  sock.send(request)\r\n  response ← \"\"\r\n  WHILE sock.has_data():\r\n    response += sock.recv(4096)\r\n  sock.close()\r\n  RETURN response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → HTTP Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION http_server(port):\r\n  server ← TCP.bind(port)\r\n  LOOP:\r\n    client ← server.accept()\r\n    request ← client.recv(8192)\r\n    method, path, version ← PARSE_REQUEST_LINE(request)\r\n    headers ← PARSE_HEADERS(request)\r\n    IF path == \"/\":\r\n      body = \"<h1>Hello World</h1>\"\r\n      status = \"200 OK\"\r\n    ELSE:\r\n      body = \"<h1>404 Not Found</h1>\"\r\n      status = \"404 Not Found\"\r\n    response = \"HTTP/1.1 \" + status + \"\\r\\n\"\r\n    response += \"Content-Length: \" + LEN(body) + \"\\r\\n\\r\\n\"\r\n    response += body\r\n    client.send(response)\r\n    client.close()\n"
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
        children: "#include <iostream>\r\n#include <string>\r\n#include <boost/asio.hpp>\r\n\r\nusing boost::asio::ip::tcp;\r\n\r\nclass HttpClient {\r\npublic:\r\n    std::string get(const std::string& host, const std::string& path) {\r\n        boost::asio::io_context io;\r\n        tcp::resolver resolver(io);\r\n        tcp::socket socket(io);\r\n\r\n        auto endpoints = resolver.resolve(host, \"80\");\r\n        boost::asio::connect(socket, endpoints);\r\n\r\n        std::string request = \"GET \" + path + \" HTTP/1.1\\r\\n\"\r\n                              \"Host: \" + host + \"\\r\\n\"\r\n                              \"Connection: close\\r\\n\\r\\n\";\r\n        socket.write_some(boost::asio::buffer(request));\r\n\r\n        boost::asio::streambuf response;\r\n        boost::system::error_code ec;\r\n        boost::asio::read(socket, response, ec);\r\n\r\n        std::string result = boost::asio::buffer_cast<const char*>(response.data());\r\n        return result;\r\n    }\r\n};\r\n\r\nint main() {\r\n    HttpClient client;\r\n    std::string resp = client.get(\"example.com\", \"/\");\r\n    std::cout << resp.substr(0, 200) << std::endl;\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → HTTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\r\n\r\ndef http_get(host: str, path: str, port: int = 80) -> str:\r\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n    sock.settimeout(5)\r\n    ip = socket.gethostbyname(host)\r\n    sock.connect((ip, port))\r\n\r\n    request = (\r\n        f\"GET {path} HTTP/1.1\\r\\n\"\r\n        f\"Host: {host}\\r\\n\"\r\n        f\"Connection: close\\r\\n\\r\\n\"\r\n    )\r\n    sock.sendall(request.encode())\r\n\r\n    response = b\"\"\r\n    while True:\r\n        chunk = sock.recv(4096)\r\n        if not chunk:\r\n            break\r\n        response += chunk\r\n\r\n    sock.close()\r\n    return response.decode(errors=\"replace\")\r\n\r\nif __name__ == \"__main__\":\r\n    print(http_get(\"example.com\", \"/\")[:300])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → Simple HTTP Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <sstream>\r\n#include <boost/asio.hpp>\r\n\r\nusing boost::asio::ip::tcp;\r\n\r\nclass HttpServer {\r\npublic:\r\n    HttpServer(short port) : acceptor_(io_, tcp::endpoint(tcp::v4(), port)) {}\r\n\r\n    void start() {\r\n        std::cout << \"Server listening on port \"\r\n                  << acceptor_.local_endpoint().port() << std::endl;\r\n        while (true) {\r\n            tcp::socket socket(io_);\r\n            acceptor_.accept(socket);\r\n            handle_request(socket);\r\n        }\r\n    }\r\n\r\nprivate:\r\n    void handle_request(tcp::socket& socket) {\r\n        boost::asio::streambuf request;\r\n        boost::asio::read_until(socket, request, \"\\r\\n\\r\\n\");\r\n\r\n        std::istream req_stream(&request);\r\n        std::string method, path, version;\r\n        req_stream >> method >> path >> version;\r\n\r\n        std::string body = \"<html><body><h1>Hello from C++ Server</h1>\"\r\n                           \"<p>Path: \" + path + \"</p></body></html>\";\r\n        std::stringstream response;\r\n        response << \"HTTP/1.1 200 OK\\r\\n\"\r\n                 << \"Content-Length: \" << body.size() << \"\\r\\n\"\r\n                 << \"Content-Type: text/html\\r\\n\\r\\n\"\r\n                 << body;\r\n\r\n        boost::asio::write(socket, boost::asio::buffer(response.str()));\r\n    }\r\n\r\n    boost::asio::io_context io_;\r\n    tcp::acceptor acceptor_;\r\n};\r\n\r\nint main() {\r\n    HttpServer server(8080);\r\n    server.start();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → Simple HTTP Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\r\n\r\ndef handle_client(conn: socket.socket):\r\n    data = conn.recv(8192).decode()\r\n    if not data:\r\n        conn.close()\r\n        return\r\n\r\n    request_line = data.split(\"\\r\\n\")[0]\r\n    method, path, version = request_line.split(\" \")\r\n    print(f\"Received: {method} {path}\")\r\n\r\n    if path == \"/\":\r\n        body = \"<html><body><h1>Hello from Python Server</h1></body></html>\"\r\n        status = \"200 OK\"\r\n    else:\r\n        body = \"<html><body><h1>404 Not Found</h1></body></html>\"\r\n        status = \"404 Not Found\"\r\n\r\n    response = (\r\n        f\"HTTP/1.1 {status}\\r\\n\"\r\n        f\"Content-Length: {len(body)}\\r\\n\"\r\n        f\"Content-Type: text/html\\r\\n\\r\\n\"\r\n        f\"{body}\"\r\n    )\r\n    conn.sendall(response.encode())\r\n    conn.close()\r\n\r\ndef main():\r\n    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\r\n    server.bind((\"0.0.0.0\", 8080))\r\n    server.listen(5)\r\n    print(\"Server listening on port 8080...\")\r\n\r\n    while True:\r\n        conn, addr = server.accept()\r\n        print(f\"Connection from {addr}\")\r\n        handle_client(conn)\r\n\r\nif __name__ == \"__main__\":\r\n    main()\n"
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
        children: "CLIENT:\r\n  sock ← TLS.connect(host, 443, alpn=\"h2\")\r\n  sock.send(CONNECTION_PREFACE)\r\n  sock.send(SETTINGS(max_streams=100, initial_window=65535))\r\n  stream_id ← 1\r\n  FOR each resource IN resources:\r\n    stream_id += 2\r\n    sock.send(HEADERS(stream_id, END_HEADERS, \":method=GET\", \":path=\" + resource))\r\n  responses ← {}\r\n  LOOP:\r\n    frame ← sock.recv_frame()\r\n    IF frame.type == HEADERS:\r\n      responses[frame.stream_id].headers = frame.headers\r\n    IF frame.type == DATA:\r\n      responses[frame.stream_id].body += frame.payload\r\n    IF frame.flags & END_STREAM:\r\n      process_responses[frame.stream_id]\n"
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
        children: "#include <cstdint>\r\n#include <vector>\r\n#include <iostream>\r\n\r\nstruct Http2Frame {\r\n    uint32_t length : 24;\r\n    uint8_t type;\r\n    uint8_t flags;\r\n    uint32_t stream_id : 31;\r\n    std::vector<uint8_t> payload;\r\n};\r\n\r\nclass Http2Parser {\r\npublic:\r\n    Http2Frame parseFrame(const uint8_t* data, size_t len) {\r\n        Http2Frame frame;\r\n        frame.length = (static_cast<uint32_t>(data[0]) << 16) |\r\n                       (static_cast<uint32_t>(data[1]) << 8) |\r\n                       static_cast<uint32_t>(data[2]);\r\n        frame.type = data[3];\r\n        frame.flags = data[4];\r\n        frame.stream_id = static_cast<uint32_t>(data[5] & 0x7F) << 24 |\r\n                          static_cast<uint32_t>(data[6]) << 16 |\r\n                          static_cast<uint32_t>(data[7]) << 8 |\r\n                          static_cast<uint32_t>(data[8]);\r\n\r\n        frame.payload.assign(data + 9, data + 9 + frame.length);\r\n        return frame;\r\n    }\r\n\r\n    std::vector<uint8_t> serializeFrame(const Http2Frame& frame) {\r\n        std::vector<uint8_t> buf(9 + frame.payload.size());\r\n        buf[0] = (frame.length >> 16) & 0xFF;\r\n        buf[1] = (frame.length >> 8) & 0xFF;\r\n        buf[2] = frame.length & 0xFF;\r\n        buf[3] = frame.type;\r\n        buf[4] = frame.flags;\r\n        buf[5] = (frame.stream_id >> 24) & 0x7F;\r\n        buf[6] = (frame.stream_id >> 16) & 0xFF;\r\n        buf[7] = (frame.stream_id >> 8) & 0xFF;\r\n        buf[8] = frame.stream_id & 0xFF;\r\n        std::copy(frame.payload.begin(), frame.payload.end(), buf.begin() + 9);\r\n        return buf;\r\n    }\r\n\r\n    std::string hpackDecodeIndexed(uint8_t*& data, size_t& remaining) {\r\n        uint8_t first = data[0];\r\n        data++; remaining--;\r\n        if ((first & 0x80) == 0x80) {\r\n            uint32_t index = first & 0x7F;\r\n            return getHpackEntry(index);\r\n        }\r\n        return \"\";\r\n    }\r\n\r\nprivate:\r\n    std::string getHpackEntry(uint32_t index) {\r\n        static const char* static_table[] = {\r\n            \"\", \":authority\", \":method GET\", \":method POST\",\r\n            \":path /\", \":path /index.html\", \":scheme http\",\r\n            \":scheme https\", \":status 200\", \":status 204\",\r\n            \":status 206\", \":status 304\", \":status 400\",\r\n            \":status 404\", \":status 500\", \"accept-charset\",\r\n            \"accept-encoding\", \"accept-language\"\r\n        };\r\n        if (index < 18) return static_table[index];\r\n        return \"\";\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → HTTP/2 Frame Building:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\r\nfrom typing import List, Dict\r\n\r\nclass Http2Frame:\r\n    def __init__(self, frame_type: int, flags: int, stream_id: int,\r\n                 payload: bytes = b\"\"):\r\n        self.type = frame_type\r\n        self.flags = flags\r\n        self.stream_id = stream_id\r\n        self.payload = payload\r\n\r\n    def serialize(self) -> bytes:\r\n        length = len(self.payload)\r\n        header = struct.pack(\"!IBBB\", length, self.type, self.flags,\r\n                             self.stream_id)\r\n        return header + self.payload\r\n\r\n    @staticmethod\r\n    def parse(data: bytes) -> \"Http2Frame\":\r\n        length = (data[0] << 16) | (data[1] << 8) | data[2]\r\n        frame_type = data[3]\r\n        flags = data[4]\r\n        stream_id = struct.unpack(\"!I\", data[5:9])[0] & 0x7FFFFFFF\r\n        payload = data[9:9 + length]\r\n        return Http2Frame(frame_type, flags, stream_id, payload)\r\n\r\n\r\nclass Http2Stream:\r\n    def __init__(self, stream_id: int):\r\n        self.stream_id = stream_id\r\n        self.headers: Dict[str, str] = {}\r\n        self.data = b\"\"\r\n        self.state = \"IDLE\"  # IDLE, OPEN, HALF_CLOSED, CLOSED\r\n\r\n    def add_header(self, name: str, value: str):\r\n        self.headers[name] = value\r\n\r\n\r\nclass Http2Connection:\r\n    def __init__(self):\r\n        self.streams: Dict[int, Http2Stream] = {}\r\n        self.next_stream_id = 1\r\n        self.settings = {\r\n            \"max_concurrent_streams\": 100,\r\n            \"initial_window_size\": 65535,\r\n        }\r\n\r\n    def create_stream(self) -> Http2Stream:\r\n        sid = self.next_stream_id\r\n        self.next_stream_id += 2\r\n        stream = Http2Stream(sid)\r\n        self.streams[sid] = stream\r\n        return stream\r\n\r\n    def process_frame(self, frame: Http2Frame) -> None:\r\n        if frame.stream_id not in self.streams and frame.stream_id > 0:\r\n            self.streams[frame.stream_id] = Http2Stream(frame.stream_id)\r\n\r\n        if frame.type == 0x00:  # DATA\r\n            stream = self.streams[frame.stream_id]\r\n            stream.data += frame.payload\r\n            if frame.flags & 0x01:  # END_STREAM\r\n                stream.state = \"HALF_CLOSED\"\r\n        elif frame.type == 0x01:  # HEADERS\r\n            if frame.flags & 0x01:\r\n                stream = self.streams[frame.stream_id]\r\n                stream.state = \"HALF_CLOSED\"\r\n        elif frame.type == 0x04:  # SETTINGS\r\n            self._parse_settings(frame.payload)\r\n\r\n\r\ndef build_get_request_frame(stream_id: int, path: str) -> Http2Frame:\r\n    payload = b\"\\x82\"  # Indexed: :method: GET\r\n    payload += b\"\\x84\"  # Indexed: :path: /\r\n    payload += struct.pack(\"!B\", 0x41)\r\n    return Http2Frame(0x01, 0x05, stream_id, payload)\n"
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
        children: "#include <iostream>\r\n#include <cstring>\r\n#include <sys/socket.h>\r\n#include <netdb.h>\r\n\r\nclass QuicConnection {\r\npublic:\r\n    void connect(const std::string& host, uint16_t port) {\r\n        socket_ = socket(AF_INET, SOCK_DGRAM, 0);\r\n        struct hostent* he = gethostbyname(host.c_str());\r\n        server_addr_.sin_family = AF_INET;\r\n        server_addr_.sin_port = htons(port);\r\n        memcpy(&server_addr_.sin_addr, he->h_addr_list[0], he->h_length);\r\n\r\n        // QUIC Initial packet with TLS 1.3 ClientHello\r\n        // (Simplified → real QUIC uses crypto frame)\r\n        sendto(socket_, initial_packet_, initial_len_, 0,\r\n               (struct sockaddr*)&server_addr_, sizeof(server_addr_));\r\n    }\r\n\r\n    uint64_t openStream() {\r\n        uint64_t stream_id = next_stream_id_;\r\n        next_stream_id_ += 4;\r\n        return stream_id;\r\n    }\r\n\r\n    void sendData(uint64_t stream_id, const uint8_t* data, size_t len) {\r\n        // QUIC STREAM frame → loss here does not block other streams\r\n    }\r\n\r\nprivate:\r\n    int socket_;\r\n    struct sockaddr_in server_addr_;\r\n    uint64_t next_stream_id_ = 0;\r\n    uint8_t initial_packet_[1200];\r\n    size_t initial_len_ = 1200;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → HTTP/3 Client (conceptual):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nfrom typing import Optional\r\n\r\nclass Http3Client:\r\n    def __init__(self):\r\n        self.stream_id = 0\r\n\r\n    async def connect(self, host: str, port: int = 443):\r\n        # QUIC handshake: TLS 1.3 over QUIC crypto stream\r\n        reader, writer = await asyncio.open_connection(host, port)\r\n        print(f\"Connected to {host}:{port} over QUIC\")\r\n\r\n    async def get(self, path: str) -> str:\r\n        self.stream_id += 4\r\n        # HEADERS frame sent as QUIC STREAM frame\r\n        # Each stream is independent → no HOL blocking\r\n        return f\"HTTP/3 response for {path}\"\r\n\r\n    async def close(self):\r\n        pass\n"
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
        children: "interface HTTPResponse {\r\n  statusCode: number;\r\n  statusText: string;\r\n  headers: Map<string, string>;\r\n  body: string;\r\n}\r\n\r\nclass HTTPClient {\r\n  private readonly baseHeaders: Map<string, string>;\r\n\r\n  constructor() {\r\n    this.baseHeaders = new Map([\r\n      ['User-Agent', 'HTTPClient/1.0'],\r\n      ['Accept', '*/*'],\r\n      ['Connection', 'keep-alive'],\r\n    ]);\r\n  }\r\n\r\n  async request(method: string, url: string, body?: string): Promise<HTTPResponse> {\r\n    const parsed = new URL(url);\r\n    const headers = new Map(this.baseHeaders);\r\n    headers.set('Host', parsed.host);\r\n    if (body) {\r\n      headers.set('Content-Length', Buffer.byteLength(body).toString());\r\n      headers.set('Content-Type', 'application/x-www-form-urlencoded');\r\n    }\r\n    const req = `${method} ${parsed.pathname}${parsed.search} HTTP/1.1\\r\\n` +\r\n      Array.from(headers).map(([k, v]) => `${k}: ${v}`).join('\\r\\n') + '\\r\\n\\r\\n' + (body || '');\r\n    // In a real implementation, open TCP socket and send req\r\n    console.log(`[HTTP] ${method} ${url}`);\r\n    console.log(`[Request]\\n${req}`);\r\n    return { statusCode: 200, statusText: 'OK', headers: new Map([['Content-Type', 'text/html']]), body: '<html></html>' };\r\n  }\r\n\r\n  async get(url: string): Promise<HTTPResponse> { return this.request('GET', url); }\r\n  async post(url: string, data: string): Promise<HTTPResponse> { return this.request('POST', url, data); }\r\n\r\n  parseResponse(raw: string): HTTPResponse {\r\n    const [statusLine, ...rest] = raw.split('\\r\\n');\r\n    const [, statusCodeStr, ...statusParts] = statusLine.split(' ');\r\n    const statusCode = parseInt(statusCodeStr);\r\n    const statusText = statusParts.join(' ');\r\n    const headerMap = new Map<string, string>();\r\n    let i = 0;\r\n    for (; i < rest.length && rest[i] !== ''; i++) {\r\n      const [key, ...val] = rest[i].split(': ');\r\n      headerMap.set(key, val.join(': '));\r\n    }\r\n    const body = rest.slice(i + 1).join('\\r\\n');\r\n    return { statusCode, statusText, headers: headerMap, body };\r\n  }\r\n}\r\n// Usage:\r\n// const client = new HTTPClient();\r\n// const resp = await client.get('https://example.com/index.html');\r\n// console.log(`Status: ${resp.statusCode} ${resp.statusText}`);\n"
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
        children: "Root (.)\r\n├── .com\r\n│   ├── example.com\r\n│   │   ├── www.example.com (A: 93.184.216.34)\r\n│   │   └── mail.example.com (MX: 10 mail.example.com)\r\n│   ├── google.com\r\n│   └── amazon.com\r\n├── .org\r\n│   ├── wikipedia.org\r\n│   └── ...\r\n├── .net\r\n├── .edu\r\n├── .uk (ccTLD)\r\n│   ├── co.uk\r\n│   └── ac.uk\r\n└── ... (1500+ TLDs)\n"
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
        children: "+---------------------+\r\n| Header (12 bytes)   |  → ID, flags (QR/AA/RD/RA), counts\r\n+---------------------+\r\n| Question Section    |  → QNAME (encoded labels), QTYPE, QCLASS\r\n+---------------------+\r\n| Answer Section      |  → NAME, TYPE, CLASS, TTL, RDLENGTH, RDATA\r\n+---------------------+\r\n| Authority Section   |  → NS records for referrals\r\n+---------------------+\r\n| Additional Section  |  → A records for glue (NS IP addresses)\r\n+---------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → DNS Resolver (Iterative):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION dns_resolve(domain, type=\"A\"):\r\n  IF cache[domain + type] exists AND TTL not expired:\r\n    RETURN cache[domain + type]\r\n\r\n  ns ← root_servers\r\n  WHILE True:\r\n    response ← udp_query(ns, domain, type)\r\n    IF response.answer_count > 0:\r\n      record ← response.answers[0]\r\n      cache[domain + type] = (record.data, record.ttl)\r\n      RETURN record.data\r\n    IF response.authority_count > 0 AND response.additional_count > 0:\r\n      ns ← response.additional[0].data\r\n    ELSE:\r\n      ns_name ← response.authority[0].name\r\n      ns ← dns_resolve(ns_name, \"A\")\n"
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
        children: "#include <iostream>\r\n#include <cstring>\r\n#include <vector>\r\n#include <cstdint>\r\n#include <arpa/inet.h>\r\n#include <sys/socket.h>\r\n#include <unistd.h>\r\n\r\nstruct DnsHeader {\r\n    uint16_t id;\r\n    uint16_t flags;\r\n    uint16_t qdcount;\r\n    uint16_t ancount;\r\n    uint16_t nscount;\r\n    uint16_t arcount;\r\n};\r\n\r\nclass DnsResolver {\r\npublic:\r\n    std::string resolve(const std::string& domain) {\r\n        int sock = socket(AF_INET, SOCK_DGRAM, 0);\r\n        struct sockaddr_in server;\r\n        server.sin_family = AF_INET;\r\n        server.sin_port = htons(53);\r\n        inet_pton(AF_INET, \"8.8.8.8\", &server.sin_addr);\r\n\r\n        std::vector<uint8_t> packet(12 + domain.length() + 2 + 4);\r\n        DnsHeader* header = reinterpret_cast<DnsHeader*>(packet.data());\r\n        header->id = htons(0x1234);\r\n        header->flags = htons(0x0100);\r\n        header->qdcount = htons(1);\r\n\r\n        size_t pos = 12;\r\n        size_t start = 0;\r\n        while (start < domain.length()) {\r\n            size_t dot = domain.find('.', start);\r\n            if (dot == std::string::npos) dot = domain.length();\r\n            packet[pos++] = dot - start;\r\n            memcpy(&packet[pos], &domain[start], dot - start);\r\n            pos += dot - start;\r\n            start = dot + 1;\r\n        }\r\n        packet[pos++] = 0;\r\n        packet[pos++] = 0; packet[pos++] = 1;  // QTYPE: A\r\n        packet[pos++] = 0; packet[pos++] = 1;  // QCLASS: IN\r\n\r\n        sendto(sock, packet.data(), packet.size(), 0,\r\n               (struct sockaddr*)&server, sizeof(server));\r\n\r\n        std::vector<uint8_t> response(512);\r\n        socklen_t len = sizeof(server);\r\n        recvfrom(sock, response.data(), response.size(), 0,\r\n                 (struct sockaddr*)&server, &len);\r\n\r\n        DnsHeader* resp_hdr = reinterpret_cast<DnsHeader*>(response.data());\r\n        size_t offset = 12;\r\n        while (response[offset] != 0) offset++;\r\n        offset += 5;\r\n\r\n        for (int i = 0; i < ntohs(resp_hdr->ancount); i++) {\r\n            if ((response[offset] & 0xC0) == 0xC0) offset += 2;\r\n            else { while (response[offset] != 0) offset++; offset++; }\r\n            uint16_t type = ntohs(*(uint16_t*)&response[offset]); offset += 2;\r\n            offset += 2; offset += 4;\r\n            uint16_t rdlength = ntohs(*(uint16_t*)&response[offset]); offset += 2;\r\n            if (type == 1 && rdlength == 4) {\r\n                char ip[INET_ADDRSTRLEN];\r\n                inet_ntop(AF_INET, &response[offset], ip, sizeof(ip));\r\n                close(sock);\r\n                return std::string(ip);\r\n            }\r\n            offset += rdlength;\r\n        }\r\n        close(sock);\r\n        return \"\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    DnsResolver resolver;\r\n    std::string ip = resolver.resolve(\"www.example.com\");\r\n    std::cout << \"Resolved to: \" << ip << std::endl;\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → DNS Resolver:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\r\nimport struct\r\nimport random\r\n\r\ndef build_dns_query(domain: str, qtype: int = 1) -> bytes:\r\n    tid = random.randint(0, 65535)\r\n    header = struct.pack(\"!HHHHHH\", tid, 0x0100, 1, 0, 0, 0)\r\n\r\n    question = b\"\"\r\n    for part in domain.split(\".\"):\r\n        question += struct.pack(\"B\", len(part)) + part.encode()\r\n    question += b\"\\x00\"\r\n    question += struct.pack(\"!HH\", qtype, 1)\r\n\r\n    return header + question\r\n\r\ndef parse_dns_response(response: bytes):\r\n    offset = 12\r\n    while response[offset] != 0:\r\n        if (response[offset] & 0xC0) == 0xC0:\r\n            offset += 2\r\n            break\r\n        offset += 1\r\n    if response[offset] == 0:\r\n        offset += 1\r\n    offset += 4\r\n\r\n    answers = []\r\n    header = struct.unpack(\"!HHHHHH\", response[:12])\r\n    ancount = header[3]\r\n\r\n    for _ in range(ancount):\r\n        if (response[offset] & 0xC0) == 0xC0:\r\n            offset += 2\r\n        else:\r\n            while response[offset] != 0:\r\n                offset += 1 + response[offset]\r\n            offset += 1\r\n\r\n        rtype, rclass, ttl, rdlength = struct.unpack(\"!HHIH\",\r\n            response[offset:offset+10])\r\n        offset += 10\r\n\r\n        if rtype == 1 and rdlength == 4:\r\n            ip = socket.inet_ntoa(response[offset:offset+4])\r\n            answers.append((\"A\", ip, ttl))\r\n        elif rtype == 28 and rdlength == 16:\r\n            ip = socket.inet_ntop(socket.AF_INET6,\r\n                                  response[offset:offset+16])\r\n            answers.append((\"AAAA\", ip, ttl))\r\n\r\n        offset += rdlength\r\n\r\n    return answers\r\n\r\ndef dns_lookup(domain: str, server: str = \"8.8.8.8\") -> list:\r\n    query = build_dns_query(domain)\r\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\r\n    sock.settimeout(5)\r\n    sock.sendto(query, (server, 53))\r\n    response, _ = sock.recvfrom(512)\r\n    sock.close()\r\n    return parse_dns_response(response)\r\n\r\nif __name__ == \"__main__\":\r\n    results = dns_lookup(\"www.example.com\")\r\n    for rtype, ip, ttl in results:\r\n        print(f\"{rtype}: {ip} (TTL={ttl})\")\n"
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
        children: "type DNSRecordType = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'TXT';\r\n\r\ninterface DNSRecord {\r\n  name: string;\r\n  type: DNSRecordType;\r\n  ttl: number;\r\n  value: string;\r\n}\r\n\r\ninterface DNSResponse {\r\n  question: string;\r\n  records: DNSRecord[];\r\n  authoritative: boolean;\r\n  recursive: boolean;\r\n}\r\n\r\nclass DNSResolver {\r\n  private cache: Map<string, { records: DNSRecord[]; expiry: number }> = new Map();\r\n\r\n  private cacheKey(name: string, type: DNSRecordType): string {\r\n    return `${name}:${type}`;\r\n  }\r\n\r\n  resolve(domain: string, type: DNSRecordType = 'A'): DNSRecord[] {\r\n    const key = this.cacheKey(domain, type);\r\n    const cached = this.cache.get(key);\r\n    if (cached && cached.expiry > Date.now()) {\r\n      console.log(`[DNS] Cache hit: ${domain} ${type}`);\r\n      return cached.records;\r\n    }\r\n    console.log(`[DNS] Resolving ${domain} (${type})`);\r\n    const records = this.queryNameservers(domain, type);\r\n    this.cache.set(key, { records, expiry: Date.now() + (records[0]?.ttl || 300) * 1000 });\r\n    return records;\r\n  }\r\n\r\n  private queryNameservers(domain: string, type: DNSRecordType): DNSRecord[] {\r\n    const parts = domain.split('.');\r\n    if (parts.length < 2) return [];\r\n    const tld = parts[parts.length - 1];\r\n    // Simplified resolution: mock responses\r\n    const mockRecords: Record<string, DNSRecord[]> = {\r\n      'example.com': [\r\n        { name: 'example.com', type: 'A', ttl: 3600, value: '93.184.216.34' },\r\n        { name: 'example.com', type: 'MX', ttl: 3600, value: '10 mail.example.com' },\r\n        { name: 'example.com', type: 'NS', ttl: 3600, value: 'ns1.example.com' },\r\n      ],\r\n      'google.com': [\r\n        { name: 'google.com', type: 'A', ttl: 300, value: '142.250.80.4' },\r\n        { name: 'google.com', type: 'AAAA', ttl: 300, value: '2607:f8b0:4000:80a::200e' },\r\n      ],\r\n    };\r\n    return mockRecords[domain]?.filter(r => r.type === type) || [];\r\n  }\r\n\r\n  flushCache(): void { this.cache.clear(); }\r\n\r\n  resolveRecursive(domain: string): DNSResponse {\r\n    const rootServers = ['a.root-servers.net', 'b.root-servers.net'];\r\n    const tldServers = ['a.tld-servers.net'];\r\n    const authServers = ['ns1.example.com'];\r\n    console.log(`[DNS] Iterative: root → TLD → authoritative for ${domain}`);\r\n    const records = this.resolve(domain);\r\n    return { question: domain, records, authoritative: true, recursive: false };\r\n  }\r\n}\r\n// Usage:\r\n// const dns = new DNSResolver();\r\n// const records = dns.resolve('example.com', 'A');\r\n// console.log(`IP: ${records[0]?.value}`); // 93.184.216.34\n"
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
        children: "FUNCTION send_email(sender, recipient, message, server, port=587):\r\n  sock ← TCP.connect(server, port)\r\n  greeting ← sock.recv()\r\n  sock.send(\"EHLO \" + my_hostname)\r\n  extensions ← sock.recv()\r\n  IF AUTH required:\r\n    sock.send(\"AUTH LOGIN\")\r\n    sock.recv()\r\n    sock.send(BASE64(username))\r\n    sock.recv()\r\n    sock.send(BASE64(password))\r\n    sock.recv()\r\n  sock.send(\"MAIL FROM:<\" + sender + \">\")\r\n  sock.recv()\r\n  sock.send(\"RCPT TO:<\" + recipient + \">\")\r\n  sock.recv()\r\n  sock.send(\"DATA\")\r\n  sock.recv()\r\n  sock.send(message + \"\\r\\n.\")\r\n  sock.recv()\r\n  sock.send(\"QUIT\")\r\n  sock.recv()\r\n  sock.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → SMTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <boost/asio.hpp>\r\n\r\nusing boost::asio::ip::tcp;\r\n\r\nclass SmtpClient {\r\npublic:\r\n    bool send(const std::string& server, const std::string& sender,\r\n              const std::string& recipient, const std::string& message) {\r\n        try {\r\n            boost::asio::io_context io;\r\n            tcp::socket socket(io);\r\n            tcp::resolver resolver(io);\r\n            auto endpoints = resolver.resolve(server, \"587\");\r\n            boost::asio::connect(socket, endpoints);\r\n\r\n            auto read_response = [&]() -> std::string {\r\n                boost::asio::streambuf buf;\r\n                boost::asio::read_until(socket, buf, \"\\r\\n\");\r\n                return boost::asio::buffer_cast<const char*>(buf.data());\r\n            };\r\n\r\n            auto send_command = [&](const std::string& cmd) {\r\n                boost::asio::write(socket, boost::asio::buffer(cmd + \"\\r\\n\"));\r\n            };\r\n\r\n            std::cout << read_response();\r\n            send_command(\"EHLO client\");\r\n            std::cout << read_response();\r\n\r\n            send_command(\"MAIL FROM:<\" + sender + \">\");\r\n            std::cout << read_response();\r\n\r\n            send_command(\"RCPT TO:<\" + recipient + \">\");\r\n            std::cout << read_response();\r\n\r\n            send_command(\"DATA\");\r\n            std::cout << read_response();\r\n\r\n            send_command(message + \"\\r\\n.\");\r\n            std::cout << read_response();\r\n\r\n            send_command(\"QUIT\");\r\n            std::cout << read_response();\r\n\r\n            socket.close();\r\n            return true;\r\n        } catch (std::exception& e) {\r\n            std::cerr << \"SMTP error: \" << e.what() << std::endl;\r\n            return false;\r\n        }\r\n    }\r\n};\r\n\r\nint main() {\r\n    SmtpClient client;\r\n    std::string msg = \"From: Alice <alice@example.com>\\r\\n\"\r\n                      \"To: Bob <bob@other.org>\\r\\n\"\r\n                      \"Subject: Hello\\r\\n\\r\\n\"\r\n                      \"This is a test message.\";\r\n    client.send(\"mail.example.com\", \"alice@example.com\", \"bob@other.org\", msg);\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → SMTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\r\n\r\ndef send_email_raw(sender: str, recipient: str, message: str,\r\n                   server: str, port: int = 25):\r\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n    sock.settimeout(5)\r\n    sock.connect((server, port))\r\n\r\n    def recv():\r\n        return sock.recv(4096).decode()\r\n\r\n    def send(cmd: str):\r\n        sock.sendall((cmd + \"\\r\\n\").encode())\r\n\r\n    print(\"S:\", recv().strip())\r\n    send(\"EHLO client\")\r\n    print(\"S:\", recv().strip())\r\n\r\n    send(f\"MAIL FROM:<{sender}>\")\r\n    print(\"S:\", recv().strip())\r\n\r\n    send(f\"RCPT TO:<{recipient}>\")\r\n    print(\"S:\", recv().strip())\r\n\r\n    send(\"DATA\")\r\n    print(\"S:\", recv().strip())\r\n\r\n    send(message + \"\\r\\n.\")\r\n    print(\"S:\", recv().strip())\r\n\r\n    send(\"QUIT\")\r\n    print(\"S:\", recv().strip())\r\n\r\n    sock.close()\r\n\r\nif __name__ == \"__main__\":\r\n    msg = (\r\n        \"From: Alice <alice@example.com>\\r\\n\"\r\n        \"To: Bob <bob@other.org>\\r\\n\"\r\n        \"Subject: Hello\\r\\n\\r\\n\"\r\n        \"This is a test message.\"\r\n    )\r\n    send_email_raw(\"alice@example.com\", \"bob@other.org\", msg,\r\n                   \"mail.example.com\", 25)\n"
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
        children: "C: USER alice\r\nS: +OK User accepted\r\nC: PASS secret\r\nS: +OK Mailbox locked and ready\r\nC: STAT\r\nS: +OK 2 3200  (2 messages, 3200 bytes)\r\nC: LIST\r\nS: +OK 2 messages:\r\nS: 1 1200\r\nS: 2 2000\r\nS: .\r\nC: RETR 1\r\nS: +OK 1200 bytes\r\nS: <message headers + body>\r\nS: .\r\nC: DELE 1\r\nS: +OK Message 1 deleted\r\nC: QUIT\r\nS: +OK Bye\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → POP3 Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION pop3_retrieve(server, port, user, password):\r\n  sock ← TCP.connect(server, port)\r\n  sock.recv()                          // +OK ready\r\n  sock.send(\"USER \" + user)\r\n  sock.recv()                          // +OK\r\n  sock.send(\"PASS \" + password)\r\n  sock.recv()                          // +OK\r\n  sock.send(\"STAT\")\r\n  response ← sock.recv()               // +OK count size\r\n  sock.send(\"LIST\")\r\n  sock.recv()                          // message list\r\n  FOR each message:\r\n    sock.send(\"RETR \" + msg_id)\r\n    data ← sock.recv_until(\".\\r\\n\")\r\n    messages.append(data)\r\n  sock.send(\"QUIT\")\r\n  sock.close()\r\n  RETURN messages\n"
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
        children: "C: a001 LOGIN alice password\r\nS: a001 OK LOGIN completed\r\nC: a002 SELECT INBOX\r\nS: * 3 EXISTS\r\nS: * 2 RECENT\r\nS: a002 OK [READ-WRITE] SELECT completed\r\nC: a003 FETCH 1:3 (FLAGS)\r\nS: * 1 FETCH (FLAGS (\\Seen))\r\nS: * 2 FETCH (FLAGS ())\r\nS: * 3 FETCH (FLAGS (\\Seen \\Answered))\r\nS: a003 OK FETCH completed\r\nC: a004 FETCH 2 BODY[TEXT]\r\nS: * 2 FETCH (BODY[TEXT] {142}\r\nS: <message body text>\r\nS: )\r\nS: a004 OK FETCH completed\r\nC: a005 LOGOUT\r\nS: * BYE Logging out\r\nS: a005 OK LOGOUT completed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → IMAP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION imap_fetch_inbox(server, port, user, password):\r\n  sock ← TCP.connect(server, port)\r\n  sock.recv()                          // * OK ready\r\n  sock.send(\"a001 LOGIN \" + user + \" \" + password)\r\n  sock.recv()                          // a001 OK\r\n  sock.send(\"a002 SELECT INBOX\")\r\n  sock.recv()                          // * EXISTS, a002 OK\r\n  sock.send(\"a003 FETCH 1:* (BODY[HEADER.FIELDS (SUBJECT FROM)])\")\r\n  summaries ← sock.recv()              // message summaries\r\n  sock.send(\"a004 LOGOUT\")\r\n  sock.close()\r\n  RETURN summaries\n"
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
        children: "interface SMTPCommand {\r\n  command: string;\r\n  args: string;\r\n}\r\n\r\ninterface SMTPResponse {\r\n  code: number;\r\n  message: string;\r\n}\r\n\r\nclass SMTPValidator {\r\n  private state: 'CONNECTED' | 'HELO_SENT' | 'MAIL_SENT' | 'RCPT_SENT' | 'DATA_SENT' | 'QUIT_SENT' = 'CONNECTED';\r\n  private mailFrom: string = '';\r\n  private rcptTo: string[] = [];\r\n  private readonly validCommands: Map<string, string[]> = new Map([\r\n    ['CONNECTED', ['HELO', 'EHLO']],\r\n    ['HELO_SENT', ['MAIL FROM']],\r\n    ['MAIL_SENT', ['RCPT TO']],\r\n    ['RCPT_SENT', ['RCPT TO', 'DATA', 'QUIT']],\r\n    ['DATA_SENT', ['QUIT']],\r\n    ['QUIT_SENT', []],\r\n  ]);\r\n\r\n  private validateCommand(cmd: string): boolean {\r\n    const allowed = this.validCommands.get(this.state);\r\n    if (!allowed) return false;\r\n    return allowed.some(a => cmd.startsWith(a));\r\n  }\r\n\r\n  processCommand(raw: string): SMTPResponse {\r\n    const [cmd, ...args] = raw.split(' ');\r\n    const argStr = args.join(' ');\r\n    if (!this.validateCommand(cmd.toUpperCase())) {\r\n      return { code: 503, message: `Bad sequence: ${cmd} not valid in ${this.state}` };\r\n    }\r\n    switch (cmd.toUpperCase()) {\r\n      case 'HELO':\r\n      case 'EHLO':\r\n        this.state = 'HELO_SENT';\r\n        return { code: 250, message: `Hello ${argStr}, pleased to meet you` };\r\n      case 'MAIL':\r\n        this.mailFrom = argStr;\r\n        this.state = 'MAIL_SENT';\r\n        return { code: 250, message: 'Mail from accepted' };\r\n      case 'RCPT':\r\n        this.rcptTo.push(argStr);\r\n        this.state = 'RCPT_SENT';\r\n        return { code: 250, message: 'Recipient accepted' };\r\n      case 'DATA':\r\n        this.state = 'DATA_SENT';\r\n        return { code: 354, message: 'Start mail input; end with . on a line by itself' };\r\n      case 'QUIT':\r\n        this.state = 'QUIT_SENT';\r\n        return { code: 221, message: 'Bye' };\r\n      default:\r\n        return { code: 502, message: 'Command not implemented' };\r\n    }\r\n  }\r\n\r\n  validateEmail(from: string, to: string[], body: string): boolean {\r\n    const commands = [`HELO client.example.com`, `MAIL FROM:<${from}>`,\r\n      ...to.map(t => `RCPT TO:<${t}>`), 'DATA', body, '.' , 'QUIT'];\r\n    for (const cmd of commands) {\r\n      const resp = this.processCommand(cmd);\r\n      console.log(`C: ${cmd}\\nS: ${resp.code} ${resp.message}`);\r\n      if (resp.code >= 400) return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  getState(): string { return this.state; }\r\n}\r\n// Usage:\r\n// const smtp = new SMTPValidator();\r\n// const ok = smtp.validateEmail('sender@example.com', ['recipient@example.org'], 'Subject: Test\\n\\nHello world');\r\n// console.log(`Delivery ${ok ? 'succeeded' : 'failed'}`);\n"
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
        children: "FUNCTION ftp_get(host, user, password, remote_file, local_path):\r\n  ctrl ← TCP.connect(host, 21)\r\n  ctrl.recv()\r\n  ctrl.send(\"USER \" + user)\r\n  ctrl.recv()\r\n  ctrl.send(\"PASS \" + password)\r\n  ctrl.recv()\r\n  ctrl.send(\"PASV\")\r\n  response ← ctrl.recv()\r\n  ip, port ← PARSE_PASV(response)\r\n  data ← TCP.connect(ip, port)\r\n  ctrl.send(\"TYPE I\")\r\n  ctrl.recv()\r\n  ctrl.send(\"RETR \" + remote_file)\r\n  file ← OPEN(local_path, \"wb\")\r\n  WHILE data.has_data():\r\n    chunk ← data.recv(8192)\r\n    file.write(chunk)\r\n  file.close()\r\n  data.close()\r\n  ctrl.recv()\r\n  ctrl.send(\"QUIT\")\r\n  ctrl.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → FTP Client (passive mode):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <fstream>\r\n#include <boost/asio.hpp>\r\n\r\nusing boost::asio::ip::tcp;\r\n\r\nclass FtpClient {\r\npublic:\r\n    FtpClient() : ctrl_socket_(io_), data_socket_(io_) {}\r\n\r\n    bool connect(const std::string& server, const std::string& user,\r\n                 const std::string& password) {\r\n        tcp::resolver resolver(io_);\r\n        auto endpoints = resolver.resolve(server, \"21\");\r\n        boost::asio::connect(ctrl_socket_, endpoints);\r\n        readResponse();\r\n        sendCommand(\"USER \" + user);\r\n        readResponse();\r\n        sendCommand(\"PASS \" + password);\r\n        std::string resp = readResponse();\r\n        return resp.find(\"230\") != std::string::npos;\r\n    }\r\n\r\n    bool download(const std::string& remote, const std::string& local) {\r\n        sendCommand(\"PASV\");\r\n        std::string pasvResp = readResponse();\r\n        auto paren = pasvResp.find('(');\r\n        auto close = pasvResp.find(')');\r\n        std::string nums = pasvResp.substr(paren + 1, close - paren - 1);\r\n        int h1, h2, h3, h4, p1, p2;\r\n        sscanf(nums.c_str(), \"%d,%d,%d,%d,%d,%d\",\r\n               &h1, &h2, &h3, &h4, &p1, &p2);\r\n        std::string data_ip = std::to_string(h1) + \".\" + std::to_string(h2)\r\n                            + \".\" + std::to_string(h3) + \".\"\r\n                            + std::to_string(h4);\r\n        int data_port = p1 * 256 + p2;\r\n\r\n        tcp::resolver resolver(io_);\r\n        auto endpoints = resolver.resolve(data_ip,\r\n                                          std::to_string(data_port));\r\n        boost::asio::connect(data_socket_, endpoints);\r\n\r\n        sendCommand(\"TYPE I\");\r\n        readResponse();\r\n        sendCommand(\"RETR \" + remote);\r\n        readResponse();\r\n\r\n        std::ofstream file(local, std::ios::binary);\r\n        boost::system::error_code ec;\r\n        while (true) {\r\n            boost::asio::streambuf buf;\r\n            size_t len = boost::asio::read(data_socket_, buf,\r\n                         boost::asio::transfer_at_least(1), ec);\r\n            if (ec == boost::asio::error::eof) break;\r\n            if (ec) break;\r\n            file.write(boost::asio::buffer_cast<const char*>(buf.data()),\r\n                       len);\r\n        }\r\n        file.close();\r\n        data_socket_.close();\r\n        readResponse();\r\n        return true;\r\n    }\r\n\r\n    void quit() {\r\n        sendCommand(\"QUIT\");\r\n        readResponse();\r\n    }\r\n\r\nprivate:\r\n    void sendCommand(const std::string& cmd) {\r\n        boost::asio::write(ctrl_socket_,\r\n                           boost::asio::buffer(cmd + \"\\r\\n\"));\r\n    }\r\n\r\n    std::string readResponse() {\r\n        boost::asio::streambuf buf;\r\n        boost::asio::read_until(ctrl_socket_, buf, \"\\r\\n\");\r\n        return boost::asio::buffer_cast<const char*>(buf.data());\r\n    }\r\n\r\n    boost::asio::io_context io_;\r\n    tcp::socket ctrl_socket_;\r\n    tcp::socket data_socket_;\r\n};\r\n\r\nint main() {\r\n    FtpClient ftp;\r\n    if (ftp.connect(\"ftp.example.com\", \"anonymous\", \"guest\")) {\r\n        ftp.download(\"pub/readme.txt\", \"readme.txt\");\r\n        ftp.quit();\r\n    }\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → FTP Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\r\nimport re\r\n\r\nclass FTPClient:\r\n    def __init__(self):\r\n        self.ctrl = None\r\n        self.data = None\r\n\r\n    def connect(self, host: str, user: str = \"anonymous\",\r\n                password: str = \"guest@\") -> bool:\r\n        self.ctrl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n        self.ctrl.connect((host, 21))\r\n        print(self._recv())\r\n        self._send(f\"USER {user}\")\r\n        print(self._recv())\r\n        self._send(f\"PASS {password}\")\r\n        resp = self._recv()\r\n        print(resp)\r\n        return resp.startswith(\"230\")\r\n\r\n    def download(self, remote_file: str, local_file: str) -> bool:\r\n        self._send(\"PASV\")\r\n        resp = self._recv()\r\n        match = re.search(r'(\\d+),(\\d+),(\\d+),(\\d+),(\\d+),(\\d+)', resp)\r\n        if not match:\r\n            return False\r\n        ip = \".\".join(match.groups()[:4])\r\n        port = int(match.group(5)) * 256 + int(match.group(6))\r\n\r\n        self.data = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n        self.data.connect((ip, port))\r\n\r\n        self._send(\"TYPE I\")\r\n        print(self._recv())\r\n\r\n        self._send(f\"RETR {remote_file}\")\r\n        print(self._recv())\r\n\r\n        with open(local_file, \"wb\") as f:\r\n            while True:\r\n                chunk = self.data.recv(8192)\r\n                if not chunk:\r\n                    break\r\n                f.write(chunk)\r\n\r\n        self.data.close()\r\n        print(self._recv())\r\n        return True\r\n\r\n    def quit(self):\r\n        self._send(\"QUIT\")\r\n        print(self._recv())\r\n        self.ctrl.close()\r\n\r\n    def _send(self, cmd: str):\r\n        self.ctrl.sendall((cmd + \"\\r\\n\").encode())\r\n\r\n    def _recv(self) -> str:\r\n        return self.ctrl.recv(4096).decode().strip()\r\n\r\n\r\nif __name__ == \"__main__\":\r\n    ftp = FTPClient()\r\n    if ftp.connect(\"ftp.gnu.org\"):\r\n        ftp.download(\"welcome.msg\", \"welcome.txt\")\r\n        ftp.quit()\n"
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
        children: "FUNCTION ssh_connect(host, user, password):\r\n  sock ← TCP.connect(host, 22)\r\n  sock.recv()                               // SSH-2.0-...\r\n  sock.send(\"SSH-2.0-Client\")\r\n  // Key exchange (Diffie-Hellman)\r\n  shared_secret ← dh_key_exchange(sock)\r\n  // Server authentication → verify host key\r\n  IF !verify_host_key(sock): RETURN ERROR\r\n  // Client authentication\r\n  sock.send(AUTH_REQUEST(user, password))\r\n  response ← sock.recv()\r\n  IF response != AUTH_SUCCESS: RETURN ERROR\r\n  // Open session channel\r\n  sock.send(CHANNEL_OPEN(\"session\"))\r\n  sock.send(EXEC(\"ls -la\"))\r\n  output ← sock.recv_all()\r\n  sock.close()\r\n  RETURN output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → SSH Client (using libssh):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <libssh/libssh.h>\r\n\r\nclass SshClient {\r\npublic:\r\n    bool connect(const std::string& host, const std::string& user,\r\n                 const std::string& password) {\r\n        ssh_ = ssh_new();\r\n        if (!ssh_) return false;\r\n\r\n        ssh_options_set(ssh_, SSH_OPTIONS_HOST, host.c_str());\r\n        ssh_options_set(ssh_, SSH_OPTIONS_USER, user.c_str());\r\n\r\n        if (ssh_connect(ssh_) != SSH_OK) {\r\n            std::cerr << \"Connection failed: \"\r\n                      << ssh_get_error(ssh_) << std::endl;\r\n            return false;\r\n        }\r\n\r\n        if (ssh_userauth_password(ssh_, nullptr, password.c_str())\r\n            != SSH_AUTH_SUCCESS) {\r\n            std::cerr << \"Auth failed: \"\r\n                      << ssh_get_error(ssh_) << std::endl;\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    std::string exec(const std::string& command) {\r\n        ssh_channel channel = ssh_channel_new(ssh_);\r\n        if (ssh_channel_open_session(channel) != SSH_OK) return \"\";\r\n\r\n        ssh_channel_request_exec(channel, command.c_str());\r\n\r\n        std::string result;\r\n        char buffer[256];\r\n        int n;\r\n        while ((n = ssh_channel_read(channel, buffer,\r\n                                     sizeof(buffer), 0)) > 0) {\r\n            result.append(buffer, n);\r\n        }\r\n\r\n        ssh_channel_close(channel);\r\n        ssh_channel_free(channel);\r\n        return result;\r\n    }\r\n\r\n    ~SshClient() {\r\n        if (ssh_) {\r\n            ssh_disconnect(ssh_);\r\n            ssh_free(ssh_);\r\n        }\r\n    }\r\n\r\nprivate:\r\n    ssh_session ssh_ = nullptr;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → SSH Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import paramiko\r\n\r\nclass SSHClient:\r\n    def __init__(self, host: str, port: int = 22):\r\n        self.host = host\r\n        self.port = port\r\n        self.client = paramiko.SSHClient()\r\n        self.client.set_missing_host_key_policy(\r\n            paramiko.AutoAddPolicy())\r\n\r\n    def connect(self, username: str, password: str = None,\r\n                key_filename: str = None) -> bool:\r\n        try:\r\n            self.client.connect(\r\n                self.host, port=self.port,\r\n                username=username, password=password,\r\n                key_filename=key_filename\r\n            )\r\n            return True\r\n        except Exception as e:\r\n            print(f\"SSH connection error: {e}\")\r\n            return False\r\n\r\n    def exec(self, command: str) -> tuple:\r\n        stdin, stdout, stderr = self.client.exec_command(command)\r\n        return stdout.read().decode(), stderr.read().decode()\r\n\r\n    def close(self):\r\n        self.client.close()\r\n\r\n\r\nif __name__ == \"__main__\":\r\n    ssh = SSHClient(\"example.com\")\r\n    if ssh.connect(\"alice\", password=\"secret\"):\r\n        out, err = ssh.exec(\"ls -la\")\r\n        print(\"STDOUT:\", out)\r\n        if err:\r\n            print(\"STDERR:\", err)\r\n        ssh.close()\n"
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
        children: " 0                   1                   2                   3\r\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|     op (8)    |   htype (8)   |   hlen (8)    |   hops (8)    |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                            xid (32)                           |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|           secs (16)           |           flags (16)          |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                          ciaddr (32)                          |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                          yiaddr (32)                          |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                          siaddr (32)                          |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                          giaddr (32)                          |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                          chaddr (128)                         |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                       sname (512 bits)                        |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                        file (1024 bits)                       |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                        options (variable)                     |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
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
        children: "FUNCTION dhcp_acquire():\r\n  sock ← UDP.bind(0.0.0.0, 68)\r\n  sock.set_broadcast(True)\r\n\r\n  discover ← BUILD_MSG(OP=1, HTYPE=1, HLEN=6, XID=random, CHADDR=my_mac)\r\n  discover.options = [DHCP_DISCOVER, PARAM_REQUEST_LIST]\r\n  sock.sendto(discover, \"255.255.255.255\", 67)\r\n  TIMEOUT = 4, RETRIES = 0\r\n\r\n  WHILE True:\r\n    IF sock.poll(TIMEOUT):\r\n      msg ← sock.recv()\r\n      IF msg.options contains DHCP_OFFER:\r\n        offered_ip = msg.yiaddr\r\n        request ← BUILD_MSG(OP=1, XID=new_random, CHADDR=my_mac)\r\n        request.options = [DHCP_REQUEST, REQUESTED_IP=offered_ip]\r\n        sock.sendto(request, \"255.255.255.255\", 67)\r\n\r\n        IF sock.poll(TIMEOUT):\r\n          ack ← sock.recv()\r\n          IF ack.options contains DHCP_ACK:\r\n            CONFIGURE_INTERFACE(ack.yiaddr, ack.options[SUBNET_MASK],\r\n                              ack.options[ROUTER], ack.options[DNS])\r\n            SET_LEASE_TIMER(ack.options[LEASE_TIME])\r\n            RETURN SUCCESS\r\n        RETRIES++\r\n        IF RETRIES > 4: RETURN FAILURE\r\n    TIMEOUT *= 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → DHCP Client (conceptual):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\r\nimport struct\r\nimport random\r\n\r\nclass DHCPClient:\r\n    def __init__(self):\r\n        self.xid = random.randint(0, 0xFFFFFFFF)\r\n\r\n    def _build_dhcp_msg(self, msg_type: int, **kwargs) -> bytes:\r\n        op, htype, hlen, hops = 1, 1, 6, 0\r\n        secs, flags = 0, 0x8000\r\n        ciaddr = 0\r\n        yiaddr = kwargs.get(\"yiaddr\", 0)\r\n        siaddr, giaddr = 0, 0\r\n        chaddr = b\"\\x00\\x11\\x22\\x33\\x44\\x55\" + b\"\\x00\" * 10\r\n        sname = b\"\\x00\" * 64\r\n        file = b\"\\x00\" * 128\r\n        magic_cookie = b\"\\x63\\x82\\x53\\x63\"\r\n\r\n        options = magic_cookie\r\n        options += struct.pack(\"!BB\", 53, 1) + struct.pack(\"B\", msg_type)\r\n        options += struct.pack(\"!BB\", 55, 3) + b\"\\x01\\x03\\x06\"\r\n        if \"requested_ip\" in kwargs:\r\n            options += struct.pack(\"!BB\", 50, 4) + \\\r\n                       struct.pack(\"!I\", kwargs[\"requested_ip\"])\r\n        if \"server_id\" in kwargs:\r\n            options += struct.pack(\"!BB\", 54, 4) + \\\r\n                       struct.pack(\"!I\", kwargs[\"server_id\"])\r\n        options += struct.pack(\"!BB\", 255, 0)\r\n\r\n        header = struct.pack(\"!BBBB\", op, htype, hlen, hops)\r\n        header += struct.pack(\"!I\", self.xid)\r\n        header += struct.pack(\"!HH\", secs, flags)\r\n        header += struct.pack(\"!I\", ciaddr)\r\n        header += struct.pack(\"!I\", yiaddr)\r\n        header += struct.pack(\"!I\", siaddr)\r\n        header += struct.pack(\"!I\", giaddr)\r\n        header += chaddr + sname + file\r\n\r\n        return header + options\r\n\r\n    def acquire(self) -> dict:\r\n        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\r\n        sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)\r\n        sock.bind((\"0.0.0.0\", 68))\r\n        sock.settimeout(5)\r\n\r\n        discover = self._build_dhcp_msg(1)\r\n        sock.sendto(discover, (\"255.255.255.255\", 67))\r\n        print(\"DHCPDISCOVER sent\")\r\n\r\n        data, addr = sock.recvfrom(1024)\r\n        offered_ip = socket.inet_ntoa(data[16:20])\r\n        print(f\"DHCPOFFER: {offered_ip}\")\r\n\r\n        ip_int = struct.unpack(\"!I\", data[16:20])[0]\r\n        request = self._build_dhcp_msg(3, requested_ip=ip_int)\r\n        sock.sendto(request, (\"255.255.255.255\", 67))\r\n        print(\"DHCPREQUEST sent\")\r\n\r\n        data, addr = sock.recvfrom(1024)\r\n        ack_ip = socket.inet_ntoa(data[16:20])\r\n        print(f\"DHCPACK: {ack_ip}\")\r\n\r\n        sock.close()\r\n        return {\"ip\": ack_ip, \"server\": addr[0]}\r\n\r\n\r\nif __name__ == \"__main__\":\r\n    client = DHCPClient()\r\n    result = client.acquire()\r\n    print(f\"Acquired IP: {result['ip']} from {result['server']}\")\n"
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
        children: "FUNCTION snmp_get(host, community, oid):\r\n  request ← BUILD_GET_REQUEST(community=community, oid=oid, request_id=random)\r\n  sock ← UDP.sendto(request, host, 161)\r\n  response ← sock.recv(8192)\r\n  value ← PARSE_RESPONSE(response)\r\n  RETURN value\r\n\r\nFUNCTION snmp_walk(host, community, base_oid):\r\n  results ← []\r\n  current_oid ← base_oid\r\n  WHILE True:\r\n    response ← snmp_getnext(host, community, current_oid)\r\n    IF response.oid does not start with base_oid:\r\n      BREAK\r\n    results.append((response.oid, response.value))\r\n    current_oid ← response.oid\r\n  RETURN results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → SNMP GET (using pysnmp):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pysnmp.hlapi import *\r\n\r\ndef snmp_get(host: str, oid: str, community: str = \"public\"):\r\n    iterator = getCmd(\r\n        SnmpEngine(),\r\n        CommunityData(community),\r\n        UdpTransportTarget((host, 161)),\r\n        ContextData(),\r\n        ObjectType(ObjectIdentity(oid))\r\n    )\r\n\r\n    errorIndication, errorStatus, errorIndex, varBinds = next(\r\n        iterator)\r\n\r\n    if errorIndication:\r\n        print(f\"SNMP error: {errorIndication}\")\r\n        return None\r\n    elif errorStatus:\r\n        print(f\"SNMP error: {errorStatus.prettyPrint()}\")\r\n        return None\r\n    else:\r\n        for varBind in varBinds:\r\n            return str(varBind)\r\n\r\ndef snmp_walk(host: str, base_oid: str,\r\n              community: str = \"public\") -> list:\r\n    results = []\r\n    iterator = nextCmd(\r\n        SnmpEngine(),\r\n        CommunityData(community),\r\n        UdpTransportTarget((host, 161)),\r\n        ContextData(),\r\n        ObjectType(ObjectIdentity(base_oid)),\r\n        lexicographicMode=True\r\n    )\r\n\r\n    for errorIndication, errorStatus, errorIndex, varBinds in iterator:\r\n        if errorIndication:\r\n            break\r\n        if errorStatus:\r\n            break\r\n        for varBind in varBinds:\r\n            oid, value = varBind\r\n            if not str(oid).startswith(base_oid):\r\n                return results\r\n            results.append((str(oid), str(value)))\r\n\r\n    return results\r\n\r\n\r\nif __name__ == \"__main__\":\r\n    sys_name = snmp_get(\"192.168.1.1\", \"1.3.6.1.2.1.1.5.0\")\r\n    print(f\"System name: {sys_name}\")\r\n\r\n    interfaces = snmp_walk(\"192.168.1.1\",\r\n                           \"1.3.6.1.2.1.2.2.1.2\")\r\n    for oid, desc in interfaces:\r\n        print(f\"{oid}: {desc}\")\n"
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
        children: "GET /chat HTTP/1.1\r\nHost: server.example.com\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\nSec-WebSocket-Version: 13\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP 101 Response:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "WebSocket Frame Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0                   1                   2                   3\r\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|F|R|R|R| opcode|M| Payload len (7) | Extended len (16/64)   ...\r\n|I|S|S|S|  (4)  |A|                 |\r\n|N|V|V|V|       |S|                 |\r\n| |1|2|3|       |K|                 |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n| Extended payload length (if 16/64)                         ...\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n| Masking-key (if MASK=1)                                     ...\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n| Payload Data                                                ...\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → WebSocket Server (using Boost.Beast):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <string>\r\n#include <boost/asio.hpp>\r\n#include <boost/beast.hpp>\r\n\r\nusing tcp = boost::asio::ip::tcp;\r\n\r\nclass WebSocketServer {\r\npublic:\r\n    WebSocketServer(short port)\r\n        : acceptor_(io_, tcp::endpoint(tcp::v4(), port)) {\r\n        std::cout << \"WebSocket server on port \" << port << std::endl;\r\n    }\r\n\r\n    void run() {\r\n        while (true) {\r\n            tcp::socket socket(io_);\r\n            acceptor_.accept(socket);\r\n\r\n            boost::beast::flat_buffer buf;\r\n            boost::beast::http::request<boost::beast::http::string_body> req;\r\n            boost::beast::http::read(socket, buf, req);\r\n\r\n            if (boost::beast::websocket::is_upgrade(req)) {\r\n                boost::beast::websocket::stream<tcp::socket> ws(\r\n                    std::move(socket));\r\n                ws.accept(req);\r\n\r\n                while (true) {\r\n                    boost::beast::flat_buffer frame;\r\n                    boost::beast::error_code ec;\r\n                    ws.read(frame, ec);\r\n                    if (ec) break;\r\n                    ws.text(ws.got_text());\r\n                    ws.write(frame.data());\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\nprivate:\r\n    boost::asio::io_context io_;\r\n    tcp::acceptor acceptor_;\r\n};\r\n\r\nint main() {\r\n    WebSocketServer server(8080);\r\n    server.run();\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → WebSocket Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nimport websockets\r\n\r\nasync def echo(websocket, path):\r\n    async for message in websocket:\r\n        print(f\"Received: {message}\")\r\n        await websocket.send(f\"Echo: {message}\")\r\n\r\nasync def chat_handler(websocket, path):\r\n    global clients\r\n    clients.add(websocket)\r\n    try:\r\n        async for message in websocket:\r\n            for client in clients:\r\n                if client != websocket:\r\n                    await client.send(message)\r\n    finally:\r\n        clients.remove(websocket)\r\n\r\nclients = set()\r\n\r\nasync def main():\r\n    echo_server = await websockets.serve(echo, \"localhost\", 8765)\r\n    chat_server = await websockets.serve(chat_handler,\r\n                                         \"localhost\", 8766)\r\n\r\n    print(\"WebSocket servers:\")\r\n    print(\"  Echo: ws://localhost:8765\")\r\n    print(\"  Chat: ws://localhost:8766\")\r\n\r\n    await asyncio.gather(\r\n        echo_server.wait_closed(),\r\n        chat_server.wait_closed()\r\n    )\r\n\r\nif __name__ == \"__main__\":\r\n    asyncio.run(main())\n"
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
        children: "syntax = \"proto3\";\r\n\r\nservice Greeter {\r\n  rpc SayHello (HelloRequest) returns (HelloReply);\r\n  rpc LotsOfReplies (HelloRequest) returns (stream HelloReply);\r\n  rpc LotsOfGreetings (stream HelloRequest) returns (HelloReply);\r\n  rpc BidiHello (stream HelloRequest) returns (stream HelloReply);\r\n}\r\n\r\nmessage HelloRequest {\r\n  string name = 1;\r\n  int32 age = 2;\r\n}\r\n\r\nmessage HelloReply {\r\n  string message = 1;\r\n}\n"
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
        children: "import grpc\r\nfrom concurrent import futures\r\nimport time\r\n\r\n# Generated from proto file\r\n\r\nclass GreeterServicer(greeter_pb2_grpc.GreeterServicer):\r\n    def SayHello(self, request, context):\r\n        print(f\"Received: {request.name}\")\r\n        return greeter_pb2.HelloReply(\r\n            message=f\"Hello, {request.name}!\"\r\n        )\r\n\r\n    def LotsOfReplies(self, request, context):\r\n        for i in range(5):\r\n            yield greeter_pb2.HelloReply(\r\n                message=f\"Reply {i} for {request.name}\"\r\n            )\r\n            time.sleep(0.5)\r\n\r\ndef serve():\r\n    server = grpc.server(\r\n        futures.ThreadPoolExecutor(max_workers=10))\r\n    greeter_pb2_grpc.add_GreeterServicer_to_server(\r\n        GreeterServicer(), server)\r\n    server.add_insecure_port(\"[::]:50051\")\r\n    server.start()\r\n    print(\"gRPC server on port 50051\")\r\n    server.wait_for_termination()\r\n\r\nif __name__ == \"__main__\":\r\n    serve()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation → gRPC Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import grpc\r\n\r\ndef run():\r\n    with grpc.insecure_channel(\"localhost:50051\") as channel:\r\n        stub = greeter_pb2_grpc.GreeterStub(channel)\r\n\r\n        response = stub.SayHello(\r\n            greeter_pb2.HelloRequest(name=\"Alice\"))\r\n        print(f\"Unary: {response.message}\")\r\n\r\n        replies = stub.LotsOfReplies(\r\n            greeter_pb2.HelloRequest(name=\"Bob\"))\r\n        for reply in replies:\r\n            print(f\"Stream: {reply.message}\")\r\n\r\nif __name__ == \"__main__\":\r\n    run()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation → gRPC Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <memory>\r\n#include <string>\r\n#include <grpcpp/grpcpp.h>\r\n#include \"greeter.grpc.pb.h\"\r\n\r\nusing grpc::Server;\r\nusing grpc::ServerBuilder;\r\nusing grpc::ServerContext;\r\nusing grpc::Status;\r\nusing grpc::ServerWriter;\r\n\r\nclass GreeterServiceImpl final : public Greeter::Service {\r\n    Status SayHello(ServerContext* context,\r\n                    const HelloRequest* request,\r\n                    HelloReply* reply) override {\r\n        std::string msg = \"Hello, \" + request->name() + \"!\";\r\n        reply->set_message(msg);\r\n        return Status::OK;\r\n    }\r\n\r\n    Status LotsOfReplies(ServerContext* context,\r\n                         const HelloRequest* request,\r\n                         ServerWriter<HelloReply>* writer) override {\r\n        for (int i = 0; i < 5; i++) {\r\n            HelloReply reply;\r\n            reply.set_message(\"Reply \" + std::to_string(i)\r\n                            + \" for \" + request->name());\r\n            writer->Write(reply);\r\n        }\r\n        return Status::OK;\r\n    }\r\n};\r\n\r\nvoid RunServer() {\r\n    std::string addr(\"0.0.0.0:50051\");\r\n    GreeterServiceImpl service;\r\n\r\n    ServerBuilder builder;\r\n    builder.AddListeningPort(addr, grpc::InsecureServerCredentials());\r\n    builder.RegisterService(&service);\r\n\r\n    std::unique_ptr<Server> server(builder.BuildAndStart());\r\n    std::cout << \"Server on \" << addr << std::endl;\r\n    server->Wait();\r\n}\r\n\r\nint main() {\r\n    RunServer();\r\n    return 0;\r\n}\n"
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
        children: "HTTP/1.1 Pipelining:\r\n  Req A ████████ WAIT ██████████████ Resp A ██\r\n  Req B ──────────────████████████WAIT ██████████ Resp B\r\n                    ↑ Resp A blocked by B's request processing\r\n\r\nHTTP/2 (TCP):\r\n  Stream A: ████████████████ Response A ████\r\n  Stream B: ████ Response B ████████████████\r\n                    ↑ TCP packet loss blocks BOTH streams\r\n\r\nHTTP/3 (QUIC):\r\n  Stream A: ████████████████ Response A ████\r\n  Stream B: ██████████████████████████████████████\r\n                    ↑ Loss on Stream A doesn't affect Stream B\n"
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
        children: "Sendmail (MUA)\r\n  ↓\r\npickup → cleanup → qmgr → smtp → Network\r\n         ↑              ↓\r\n     trivial-rewrite   bounce/defer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
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
      }), " A global e-commerce platform serving 200+ countries with 1 billion monthly visits relied on a single anycast DNS provider. During peak shopping seasons (Black Friday, Diwali), DNS query rates exceeded 5 million queries per second (QPS), causing resolver timeouts lasting 3-8 seconds. Page load times spiked from 800ms to 4.2 seconds during these events. a DNS cache poisoning attack on a third-party resolver resulted in 30 minutes of traffic misdirection to a fraudulent site, costing $2M in fraudulent transactions before DNSSEC validation caught the inconsistency."]
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
      }), "\nHTTP/1.1 pipelining sends multiple requests on one connection but responses must be returned in order (FIFO) — a slow response blocks all subsequent responses (application-layer HOL). HTTP/2 multiplexing interleaves multiple streams over a single TCP connection, where each stream is independent. Responses can arrive out of order, eliminating application-layer HOL blocking. HTTP/2 has binary framing, stream prioritization, and flow control per stream.\n"]
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



/***/ }

}]);