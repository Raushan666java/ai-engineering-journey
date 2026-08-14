"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[49979],{

/***/ 81841
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_13_sockets_md_868_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-13-sockets-md-868.json
const site_docs_courses_computer_networks_13_sockets_md_868_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/13-sockets","title":"Chapter 13: Socket Programming → Complete Reference","description":"Learning Objectives","source":"@site/docs/courses/computer-networks/13-sockets.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/13-sockets","permalink":"/ai-engineering-journey/computer-networks/13-sockets","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-sockets","slug":"/computer-networks/13-sockets","title":"Chapter 13: Socket Programming → Complete Reference","sidebar_label":"Chapter 13: Socket Programming → Complete Reference","sidebar_position":13},"sidebar":"course-computer-networks","previous":{"title":"Chapter 12: Wireless Networks (Extended)","permalink":"/ai-engineering-journey/computer-networks/12-wireless"},"next":{"title":"Chapter 14: Software-Defined Networking","permalink":"/ai-engineering-journey/computer-networks/14-sdn"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/13-sockets.md


const frontMatter = {
	id: '13-sockets',
	slug: '/computer-networks/13-sockets',
	title: 'Chapter 13: Socket Programming → Complete Reference',
	sidebar_label: 'Chapter 13: Socket Programming → Complete Reference',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Socket Programming → Complete Reference';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "13.1 Socket API Overview",
  "id": "131-socket-api-overview",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "What Is a Socket?",
  "id": "what-is-a-socket",
  "level": 3
}, {
  "value": "Socket Creation",
  "id": "socket-creation",
  "level": 3
}, {
  "value": "Numbered Steps → Socket Lifecycle",
  "id": "numbered-steps--socket-lifecycle",
  "level": 3
}, {
  "value": "Pseudocode → Generic Client/Server",
  "id": "pseudocode--generic-clientserver",
  "level": 3
}, {
  "value": "Dry Run → Socket Creation Trace",
  "id": "dry-run--socket-creation-trace",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "A&amp;D Table → Socket API",
  "id": "ad-table--socket-api",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "13.2 TCP Sockets",
  "id": "132-tcp-sockets",
  "level": 2
}, {
  "value": "Real-World Analogy: Restaurant Phone for Reservations",
  "id": "real-world-analogy-restaurant-phone-for-reservations",
  "level": 3
}, {
  "value": "TCP Server Steps",
  "id": "tcp-server-steps",
  "level": 3
}, {
  "value": "TCP Client Steps",
  "id": "tcp-client-steps",
  "level": 3
}, {
  "value": "Pseudocode → TCP Echo Server",
  "id": "pseudocode--tcp-echo-server",
  "level": 3
}, {
  "value": "Pseudocode → TCP Echo Client",
  "id": "pseudocode--tcp-echo-client",
  "level": 3
}, {
  "value": "Dry Run → TCP 3-Way Handshake",
  "id": "dry-run--tcp-3-way-handshake",
  "level": 3
}, {
  "value": "Connection Establishment",
  "id": "connection-establishment",
  "level": 4
}, {
  "value": "Connection Teardown",
  "id": "connection-teardown",
  "level": 4
}, {
  "value": "C++ Implementation → TCP Echo Server",
  "id": "c-implementation--tcp-echo-server",
  "level": 3
}, {
  "value": "C++ Implementation → TCP Echo Client",
  "id": "c-implementation--tcp-echo-client",
  "level": 3
}, {
  "value": "Python Implementation → TCP Echo Server",
  "id": "python-implementation--tcp-echo-server",
  "level": 3
}, {
  "value": "Python Implementation → TCP Echo Client",
  "id": "python-implementation--tcp-echo-client",
  "level": 3
}, {
  "value": "Complexity Analysis → TCP",
  "id": "complexity-analysis--tcp",
  "level": 3
}, {
  "value": "A&amp;D Table → TCP Sockets",
  "id": "ad-table--tcp-sockets",
  "level": 3
}, {
  "value": "Edge Cases → TCP",
  "id": "edge-cases--tcp",
  "level": 3
}, {
  "value": "TypeScript Implementation: TCPSocketServer",
  "id": "typescript-implementation-tcpsocketserver",
  "level": 3
}, {
  "value": "13.3 UDP Sockets",
  "id": "133-udp-sockets",
  "level": 2
}, {
  "value": "Real-World Analogy: Post Office Mailbox",
  "id": "real-world-analogy-post-office-mailbox",
  "level": 3
}, {
  "value": "UDP Server Steps",
  "id": "udp-server-steps",
  "level": 3
}, {
  "value": "UDP Client Steps",
  "id": "udp-client-steps",
  "level": 3
}, {
  "value": "Pseudocode → UDP Echo Server",
  "id": "pseudocode--udp-echo-server",
  "level": 3
}, {
  "value": "Pseudocode → UDP Echo Client",
  "id": "pseudocode--udp-echo-client",
  "level": 3
}, {
  "value": "Dry Run → UDP Datagram Flow",
  "id": "dry-run--udp-datagram-flow",
  "level": 3
}, {
  "value": "C++ Implementation → UDP Echo Server",
  "id": "c-implementation--udp-echo-server",
  "level": 3
}, {
  "value": "C++ Implementation → UDP Echo Client",
  "id": "c-implementation--udp-echo-client",
  "level": 3
}, {
  "value": "Python Implementation → UDP Echo Server",
  "id": "python-implementation--udp-echo-server",
  "level": 3
}, {
  "value": "Python Implementation → UDP Echo Client",
  "id": "python-implementation--udp-echo-client",
  "level": 3
}, {
  "value": "Complexity Analysis → UDP",
  "id": "complexity-analysis--udp",
  "level": 3
}, {
  "value": "A&amp;D Table → UDP Sockets",
  "id": "ad-table--udp-sockets",
  "level": 3
}, {
  "value": "Edge Cases → UDP",
  "id": "edge-cases--udp",
  "level": 3
}, {
  "value": "TypeScript Implementation: UDPSocket",
  "id": "typescript-implementation-udpsocket",
  "level": 3
}, {
  "value": "13.4 Blocking vs Non-blocking Sockets",
  "id": "134-blocking-vs-non-blocking-sockets",
  "level": 2
}, {
  "value": "Real-World Analogy: Restaurant Ordering Styles",
  "id": "real-world-analogy-restaurant-ordering-styles",
  "level": 3
}, {
  "value": "Detailed Comparison",
  "id": "detailed-comparison",
  "level": 3
}, {
  "value": "Setting Non-blocking Mode",
  "id": "setting-non-blocking-mode",
  "level": 3
}, {
  "value": "C++ → Non-blocking TCP Server (Single Client, Polling)",
  "id": "c--non-blocking-tcp-server-single-client-polling",
  "level": 3
}, {
  "value": "Python → Non-blocking Socket Example",
  "id": "python--non-blocking-socket-example",
  "level": 3
}, {
  "value": "Dry Run → Blocking vs Non-blocking recv",
  "id": "dry-run--blocking-vs-non-blocking-recv",
  "level": 3
}, {
  "value": "Blocking recv Trace",
  "id": "blocking-recv-trace",
  "level": 4
}, {
  "value": "Non-blocking recv Trace",
  "id": "non-blocking-recv-trace",
  "level": 4
}, {
  "value": "Complexity Analysis → Blocking vs Non-blocking",
  "id": "complexity-analysis--blocking-vs-non-blocking",
  "level": 3
}, {
  "value": "Edge Cases → Blocking/Non-blocking",
  "id": "edge-cases--blockingnon-blocking",
  "level": 3
}, {
  "value": "TypeScript Implementation: NonBlockingIO",
  "id": "typescript-implementation-nonblockingio",
  "level": 3
}, {
  "value": "13.5 I/O Multiplexing: select, poll, epoll, kqueue",
  "id": "135-io-multiplexing-select-poll-epoll-kqueue",
  "level": 2
}, {
  "value": "Real-World Analogy: The Maître d&#39;",
  "id": "real-world-analogy-the-maître-d",
  "level": 3
}, {
  "value": "13.5.1 select()",
  "id": "1351-select",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
  "level": 4
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run → select() Event Loop",
  "id": "dry-run--select-event-loop",
  "level": 4
}, {
  "value": "C++ → select-based Echo Server",
  "id": "c--select-based-echo-server",
  "level": 4
}, {
  "value": "Python → select-based Chat Server",
  "id": "python--select-based-chat-server",
  "level": 4
}, {
  "value": "13.5.2 poll()",
  "id": "1352-poll",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-1",
  "level": 4
}, {
  "value": "Key Differences from select()",
  "id": "key-differences-from-select",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Dry Run → poll() Event Loop",
  "id": "dry-run--poll-event-loop",
  "level": 4
}, {
  "value": "C++ → poll-based Echo Server",
  "id": "c--poll-based-echo-server",
  "level": 4
}, {
  "value": "13.5.3 epoll() (Linux)",
  "id": "1353-epoll-linux",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-2",
  "level": 4
}, {
  "value": "Level-Triggered vs Edge-Triggered",
  "id": "level-triggered-vs-edge-triggered",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Dry Run → epoll Event Loop",
  "id": "dry-run--epoll-event-loop",
  "level": 4
}, {
  "value": "C++ → epoll Echo Server (Edge-Triggered)",
  "id": "c--epoll-echo-server-edge-triggered",
  "level": 4
}, {
  "value": "Python → epoll Echo Server",
  "id": "python--epoll-echo-server",
  "level": 4
}, {
  "value": "13.5.4 kqueue (BSD/macOS)",
  "id": "1354-kqueue-bsdmacos",
  "level": 3
}, {
  "value": "Complexity Analysis → I/O Multiplexing",
  "id": "complexity-analysis--io-multiplexing",
  "level": 3
}, {
  "value": "select vs poll vs epoll vs kqueue → Comparison",
  "id": "select-vs-poll-vs-epoll-vs-kqueue--comparison",
  "level": 3
}, {
  "value": "A&amp;D Table → I/O Multiplexing",
  "id": "ad-table--io-multiplexing",
  "level": 3
}, {
  "value": "Edge Cases → I/O Multiplexing",
  "id": "edge-cases--io-multiplexing",
  "level": 3
}, {
  "value": "13.6 Unix Domain Sockets",
  "id": "136-unix-domain-sockets",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "Types",
  "id": "types",
  "level": 3
}, {
  "value": "Key Advantages Over TCP Loopback",
  "id": "key-advantages-over-tcp-loopback",
  "level": 3
}, {
  "value": "C++ → Unix Domain Socket Echo Server",
  "id": "c--unix-domain-socket-echo-server",
  "level": 3
}, {
  "value": "Python → Unix Domain Socket Client",
  "id": "python--unix-domain-socket-client",
  "level": 3
}, {
  "value": "Dry Run → Unix Domain Socket",
  "id": "dry-run--unix-domain-socket",
  "level": 3
}, {
  "value": "Edge Cases → Unix Domain Sockets",
  "id": "edge-cases--unix-domain-sockets",
  "level": 3
}, {
  "value": "13.7 Raw Sockets",
  "id": "137-raw-sockets",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 3
}, {
  "value": "Numbered Steps → Raw Socket (Ping/ICMP)",
  "id": "numbered-steps--raw-socket-pingicmp",
  "level": 3
}, {
  "value": "Security Concerns",
  "id": "security-concerns",
  "level": 3
}, {
  "value": "C++ → Raw ICMP Ping (Simplified)",
  "id": "c--raw-icmp-ping-simplified",
  "level": 3
}, {
  "value": "A&amp;D Table → Raw Sockets",
  "id": "ad-table--raw-sockets",
  "level": 3
}, {
  "value": "Use Cases for Raw Sockets",
  "id": "use-cases-for-raw-sockets",
  "level": 3
}, {
  "value": "13.8 Socket Options",
  "id": "138-socket-options",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "setsockopt / getsockopt Signatures",
  "id": "setsockopt--getsockopt-signatures",
  "level": 3
}, {
  "value": "Complete Socket Options Table",
  "id": "complete-socket-options-table",
  "level": 3
}, {
  "value": "SO_LINGER Behavior",
  "id": "so_linger-behavior",
  "level": 3
}, {
  "value": "C++ → Socket Options Utility",
  "id": "c--socket-options-utility",
  "level": 3
}, {
  "value": "Edge Cases → Socket Options",
  "id": "edge-cases--socket-options",
  "level": 3
}, {
  "value": "13.9 Comparison Tables",
  "id": "139-comparison-tables",
  "level": 2
}, {
  "value": "TCP vs UDP Sockets",
  "id": "tcp-vs-udp-sockets",
  "level": 3
}, {
  "value": "Blocking vs Non-blocking Comparison",
  "id": "blocking-vs-non-blocking-comparison",
  "level": 3
}, {
  "value": "Stream vs Datagram vs Raw Sockets",
  "id": "stream-vs-datagram-vs-raw-sockets",
  "level": 3
}, {
  "value": "I/O Multiplexing Comparison",
  "id": "io-multiplexing-comparison",
  "level": 3
}, {
  "value": "13.10 Interview Corner",
  "id": "1310-interview-corner",
  "level": 2
}, {
  "value": "Q1: epoll vs select → what&#39;s the fundamental difference?",
  "id": "q1-epoll-vs-select--whats-the-fundamental-difference",
  "level": 3
}, {
  "value": "Q2: What is the C10K problem?",
  "id": "q2-what-is-the-c10k-problem",
  "level": 3
}, {
  "value": "Q3: TIME_WAIT and SO_REUSEADDR",
  "id": "q3-time_wait-and-so_reuseaddr",
  "level": 3
}, {
  "value": "Q4: What is Nagle&#39;s algorithm?",
  "id": "q4-what-is-nagles-algorithm",
  "level": 3
}, {
  "value": "Q5: What happens when you write to a closed connection?",
  "id": "q5-what-happens-when-you-write-to-a-closed-connection",
  "level": 3
}, {
  "value": "Q6: What is the difference between EAGAIN and EWOULDBLOCK?",
  "id": "q6-what-is-the-difference-between-eagain-and-ewouldblock",
  "level": 3
}, {
  "value": "Q7: How does the kernel implement epoll internally?",
  "id": "q7-how-does-the-kernel-implement-epoll-internally",
  "level": 3
}, {
  "value": "13.11 Applications in Real Systems",
  "id": "1311-applications-in-real-systems",
  "level": 2
}, {
  "value": "Nginx (epoll, kqueue, event ports)",
  "id": "nginx-epoll-kqueue-event-ports",
  "level": 3
}, {
  "value": "Node.js (libuv)",
  "id": "nodejs-libuv",
  "level": 3
}, {
  "value": "HAProxy (epoll, kqueue, splice)",
  "id": "haproxy-epoll-kqueue-splice",
  "level": 3
}, {
  "value": "Redis (epoll/kqueue + single-threaded event loop)",
  "id": "redis-epollkqueue--single-threaded-event-loop",
  "level": 3
}, {
  "value": "Apache vs Nginx → Architecture Comparison",
  "id": "apache-vs-nginx--architecture-comparison",
  "level": 3
}, {
  "value": "libevent / libev / libuv → Library Comparison",
  "id": "libevent--libev--libuv--library-comparison",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "Quick Reference: Socket State Machine",
  "id": "quick-reference-socket-state-machine",
  "level": 2
}, {
  "value": "Mermaid Diagram: Socket API Call Comparison (TCP vs UDP)",
  "id": "mermaid-diagram-socket-api-call-comparison-tcp-vs-udp",
  "level": 2
}, {
  "value": "Case Study: Building a Chat Server for 100K Concurrent Users",
  "id": "case-study-building-a-chat-server-for-100k-concurrent-users",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-13-socket-programming--complete-reference",
        children: "Chapter 13: Socket Programming → Complete Reference"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the socket API and its relationship to the transport layer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TCP client-server applications in C++ and Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write UDP client-server applications in C++ and Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare blocking, non-blocking, and I/O multiplexing approaches."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement concurrent servers using select, poll, and epoll."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Unix domain sockets, raw sockets, and socket options."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze scalability trade-offs for the C10K problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify edge cases: connection refused, broken pipe, EAGAIN, address in use."
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
        href: "../../assets/images/lessons/computer-networks/13-sockets/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/13-sockets/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/13-sockets/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/13-sockets/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/computer-networks/13-sockets/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/computer-networks/13-sockets/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-socket-api-overview",
      children: "13.1 Socket API Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A socket is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "phone outlet in a building"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "socket()"
        }), " → You install a phone jack (create the endpoint)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "bind()"
        }), " → You assign a phone number to that jack (IP + port)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "listen()"
        }), " → You wait for someone to call (TCP server only)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "connect()"
        }), " → You dial someone's number (TCP client)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "accept()"
        }), " → You pick up the call (TCP server)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "send()/recv()"
        }), " → You talk / listen."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "close()"
        }), " → You hang up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The kernel is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "telephone exchange"
      }), ": it routes data between endpoints, buffers when lines are busy, and notifies when a call arrives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-socket",
      children: "What Is a Socket?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A socket is a software abstraction representing one endpoint of a two-way communication channel. The socket API (Berkeley sockets, 1983) provides system calls that allow user-space programs to send and receive data across a network."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Application (user space)\n        |\n   [Socket FD] → int\n        |\n    Kernel\n        |\n    Protocol Stack (TCP/UDP/IP)\n        |\n    Network Interface (NIC)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "socket-creation",
      children: "Socket Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "socket()"
      }), " system call creates an endpoint:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int socket(int domain, int type, int protocol);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "domain"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AF_INET"
            }), " (IPv4), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AF_INET6"
            }), " (IPv6), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AF_UNIX"
            }), " (local)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address family"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SOCK_STREAM"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SOCK_DGRAM"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SOCK_RAW"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protocol"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " (default for type), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPPROTO_TCP"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPPROTO_UDP"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--socket-lifecycle",
      children: "Numbered Steps → Socket Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create socket"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "socket()"
        }), " returns a file descriptor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bind (server)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bind()"
        }), " assigns address and port."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Listen (TCP server)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "listen()"
        }), " marks socket as passive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect (TCP client)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "connect()"
        }), " initiates 3-way handshake."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accept (TCP server)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "accept()"
        }), " creates new connected socket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data transfer"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recv()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sendto()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recvfrom()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Close"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "close()"
        }), " releases resources."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--generic-clientserver",
      children: "Pseudocode → Generic Client/Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== SERVER ===\nfd = socket(AF_INET, SOCK_STREAM, 0)\nbind(fd, addr, len)\nlisten(fd, backlog)\nloop:\n    client_fd = accept(fd, client_addr, &addrlen)\n    recv(client_fd, buf, len, 0)\n    send(client_fd, response, len, 0)\n    close(client_fd)\n\n=== CLIENT ===\nfd = socket(AF_INET, SOCK_STREAM, 0)\nconnect(fd, server_addr, addrlen)\nsend(fd, msg, len, 0)\nrecv(fd, buf, len, 0)\nclose(fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--socket-creation-trace",
      children: "Dry Run → Socket Creation Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket(AF_INET, SOCK_STREAM, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fd=3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates inode, protocol control block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bind(3, {AF_INET, 8080, INADDR_ANY}, 16)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigns port 8080, marks bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "listen(3, 128)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks passive, creates accept queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connect(fd, {AF_INET, 8080, 127.0.0.1}, 16)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN sent, enters SYN_SENT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["accept returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fd=4"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection established, ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "send(4, \"hello\", 5, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data queued in send buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv(4, buf, 1024, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data copied to user buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close(4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN sent, socket released"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates a fixed-size inode + protocol control block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just writes a port + address into a kernel structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "listen()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(backlog)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pre-allocates accept queue of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "backlog"
            }), " slots"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) call + O(RTT) wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call returns immediately; handshake is async"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeues from pre-allocated accept queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (usually)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies to kernel buffer; may block if buffer full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (usually)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies from kernel buffer to user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frees descriptor, sends FIN if connected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--socket-api",
      children: "A&D Table → Socket API"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Universal abstraction across protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level: error-prone, manual buffer mgmt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct kernel access → minimal overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex state machine per socket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform (POSIX standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different APIs on Windows (Winsock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports any protocol (TCP/UDP/ICMP/raw)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in backpressure handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-copy options (sendfile, splice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in TLS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Handle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            }), " returns -1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System FD limit reached"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno == EMFILE"
            }), "; increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ulimit -n"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            }), " EADDRINUSE"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port already in use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_REUSEADDR"
            }), "; wait for TIME_WAIT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            }), " EACCES"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binding to privileged port (< 1024)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run as root or use CAP_NET_BIND_SERVICE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "listen()"
            }), " EADDRINUSE"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race on simultaneous binds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry with backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            }), " returns -1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupted by signal (EINTR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart accept in loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            }), " returns < len"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial write (short send)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop until all bytes sent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            }), " returns 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer closed connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close socket, stop reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            }), " returns -1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAGAIN (non-blocking, no data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try again later"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            }), " ECONNREFUSED"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No process listening on port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry or report error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            }), " ETIMEDOUT"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall drop or server down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential backoff retry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-tcp-sockets",
      children: "13.2 TCP Sockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-restaurant-phone-for-reservations",
      children: "Real-World Analogy: Restaurant Phone for Reservations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A TCP connection is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dedicated phone line between a restaurant host and a customer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server socket"
        }), " = The restaurant's main phone line."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "bind()"
        }), " = Getting the phone number published."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "listen()"
        }), " = The host waits by the phone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "connect()"
        }), " = The customer dials the number."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "accept()"
        }), " = The host picks up and creates a conversation channel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "send()/recv()"
        }), " = Talking back and forth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "close()"
        }), " = Hanging up."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "byte stream"
        }), " = Everything said in order, nothing lost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3-way handshake"
        }), " = \"Hello?\" → \"Hi, who's this?\" → \"It's me, let's talk.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TCP guarantees: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reliable, in-order, connection-oriented, full-duplex byte stream"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-server-steps",
      children: "TCP Server Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: socket()    → Create endpoint (fd=3)\nStep 2: setsockopt(SO_REUSEADDR) → Allow port reuse\nStep 3: bind()      → Assign IP + port\nStep 4: listen()    → Mark as passive, set backlog\nStep 5: accept()    → Block until client connects → returns client_fd\nStep 6: recv()/send() → Echo loop\nStep 7: close()     → Close client, then server\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-client-steps",
      children: "TCP Client Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: socket()    → Create endpoint\nStep 2: connect()   → Initiate 3-way handshake\nStep 3: send()/recv() → Data exchange\nStep 4: close()     → Terminate connection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--tcp-echo-server",
      children: "Pseudocode → TCP Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function tcp_echo_server(port):\n    server_fd = socket(AF_INET, SOCK_STREAM, 0)\n    if server_fd < 0: error(\"socket\")\n    opt = 1\n    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt)\n    addr = {AF_INET, port, INADDR_ANY}\n    bind(server_fd, &addr, sizeof(addr))\n    listen(server_fd, 128)\n    while true:\n        client_fd = accept(server_fd, &client_addr, &addrlen)\n        if client_fd < 0: continue\n        while true:\n            n = recv(client_fd, buf, BUF_SIZE, 0)\n            if n <= 0: break\n            send(client_fd, buf, n, 0)\n        close(client_fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--tcp-echo-client",
      children: "Pseudocode → TCP Echo Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function tcp_echo_client(host, port, message):\n    fd = socket(AF_INET, SOCK_STREAM, 0)\n    server_addr = resolve(host, port)\n    connect(fd, &server_addr, sizeof(server_addr))\n    send(fd, message, len(message), 0)\n    n = recv(fd, buf, BUF_SIZE, 0)\n    print \"Echoed:\", string(buf, n)\n    close(fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--tcp-3-way-handshake",
      children: "Dry Run → TCP 3-Way Handshake"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "connection-establishment",
      children: "Connection Establishment"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "listen()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LISTEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_SENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN"
            }), " seq=100"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives SYN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN_RCVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives SYN+ACK"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN+ACK"
            }), " seq=300 ack=101"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends SYN+ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends ACK"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ACK"
            }), " seq=101 ack=301"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTABLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "send(\"hello\")"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DATA"
            }), " seq=101"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            }), " returns"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives echo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DATA"
            }), " seq=301 ack=106"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "send(\"hello\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "connection-teardown",
      children: "Connection Teardown"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FIN"
            }), " seq=106"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives FIN → CLOSE_WAIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_WAIT_2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ACK"
            }), " seq=302"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FIN"
            }), " seq=302"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends FIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ACK"
            }), " seq=107"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives ACK → CLOSED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED (after 2*MSL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--tcp-echo-server",
      children: "C++ Implementation → TCP Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// tcp_echo_server.cpp\n#include <iostream>\n#include <cstring>\n#include <string>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <system_error>\n\nconstexpr int PORT = 8080;\nconstexpr int BUFFER_SIZE = 4096;\nconstexpr int BACKLOG = 128;\n\nclass TCPServer {\n    int server_fd;\n\npublic:\n    TCPServer() : server_fd(-1) {}\n\n    void start() {\n        server_fd = ::socket(AF_INET, SOCK_STREAM, 0);\n        if (server_fd < 0)\n            throw std::system_error(errno, std::generic_category(), \"socket\");\n\n        int opt = 1;\n        if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt)) < 0)\n            throw std::system_error(errno, std::generic_category(), \"setsockopt\");\n\n        sockaddr_in addr{};\n        addr.sin_family = AF_INET;\n        addr.sin_addr.s_addr = INADDR_ANY;\n        addr.sin_port = htons(PORT);\n\n        if (bind(server_fd, (struct sockaddr*)&addr, sizeof(addr)) < 0)\n            throw std::system_error(errno, std::generic_category(), \"bind\");\n\n        if (listen(server_fd, BACKLOG) < 0)\n            throw std::system_error(errno, std::generic_category(), \"listen\");\n\n        std::cout << \"[TCP Server] Listening on port \" << PORT << std::endl;\n\n        while (true) {\n            sockaddr_in client_addr{};\n            socklen_t addrlen = sizeof(client_addr);\n            int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);\n            if (client_fd < 0) {\n                if (errno == EINTR) continue;\n                std::cerr << \"accept failed: \" << strerror(errno) << std::endl;\n                continue;\n            }\n            char client_ip[INET_ADDRSTRLEN];\n            inet_ntop(AF_INET, &client_addr.sin_addr, client_ip, sizeof(client_ip));\n            std::cout << \"[+] Client connected: \" << client_ip\n                      << \":\" << ntohs(client_addr.sin_port) << std::endl;\n\n            handle_client(client_fd, client_addr);\n            close(client_fd);\n            std::cout << \"[-] Client disconnected: \" << client_ip\n                      << \":\" << ntohs(client_addr.sin_port) << std::endl;\n        }\n    }\n\n    void handle_client(int fd, const sockaddr_in&) {\n        char buf[BUFFER_SIZE];\n        while (true) {\n            ssize_t n = recv(fd, buf, sizeof(buf) - 1, 0);\n            if (n < 0) {\n                if (errno == EINTR) continue;\n                if (errno == EAGAIN || errno == EWOULDBLOCK) break;\n                std::cerr << \"recv error: \" << strerror(errno) << std::endl;\n                break;\n            }\n            if (n == 0) {\n                std::cout << \"[*] Client closed connection\" << std::endl;\n                break;\n            }\n            buf[n] = '\\0';\n            std::cout << \"[RECV] \" << buf << std::endl;\n            ssize_t sent = 0;\n            while (sent < n) {\n                ssize_t s = send(fd, buf + sent, n - sent, 0);\n                if (s < 0) {\n                    if (errno == EINTR) continue;\n                    std::cerr << \"send error: \" << strerror(errno) << std::endl;\n                    return;\n                }\n                sent += s;\n            }\n        }\n    }\n\n    ~TCPServer() {\n        if (server_fd >= 0) close(server_fd);\n    }\n};\n\nint main() {\n    try {\n        TCPServer server;\n        server.start();\n    } catch (const std::exception& e) {\n        std::cerr << \"Fatal: \" << e.what() << std::endl;\n        return 1;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--tcp-echo-client",
      children: "C++ Implementation → TCP Echo Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// tcp_echo_client.cpp\n#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n\nconstexpr int PORT = 8080;\nconstexpr int BUFFER_SIZE = 4096;\n\nint main(int argc, char* argv[]) {\n    const char* message = (argc > 1) ? argv[1] : \"Hello, TCP Server!\";\n\n    int fd = socket(AF_INET, SOCK_STREAM, 0);\n    if (fd < 0) {\n        std::cerr << \"socket: \" << strerror(errno) << std::endl;\n        return 1;\n    }\n\n    sockaddr_in server_addr{};\n    server_addr.sin_family = AF_INET;\n    server_addr.sin_port = htons(PORT);\n    if (inet_pton(AF_INET, \"127.0.0.1\", &server_addr.sin_addr) <= 0) {\n        std::cerr << \"inet_pton: invalid address\" << std::endl;\n        close(fd);\n        return 1;\n    }\n\n    if (connect(fd, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {\n        std::cerr << \"connect: \" << strerror(errno) << std::endl;\n        close(fd);\n        return 1;\n    }\n    std::cout << \"[TCP Client] Connected to server\" << std::endl;\n\n    size_t len = strlen(message);\n    ssize_t sent = 0;\n    while (sent < (ssize_t)len) {\n        ssize_t s = send(fd, message + sent, len - sent, 0);\n        if (s < 0) {\n            if (errno == EINTR) continue;\n            std::cerr << \"send: \" << strerror(errno) << std::endl;\n            close(fd);\n            return 1;\n        }\n        sent += s;\n    }\n    std::cout << \"[SENT] \" << message << std::endl;\n\n    char buf[BUFFER_SIZE];\n    ssize_t received = 0;\n    while (received < (ssize_t)len) {\n        ssize_t n = recv(fd, buf + received, BUFFER_SIZE - received - 1, 0);\n        if (n < 0) {\n            if (errno == EINTR) continue;\n            std::cerr << \"recv: \" << strerror(errno) << std::endl;\n            close(fd);\n            return 1;\n        }\n        if (n == 0) {\n            std::cout << \"[*] Server closed connection\" << std::endl;\n            break;\n        }\n        received += n;\n    }\n    buf[received] = '\\0';\n    std::cout << \"[RECV] \" << buf << std::endl;\n\n    close(fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--tcp-echo-server",
      children: "Python Implementation → TCP Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport sys\n\nHOST = '0.0.0.0'\nPORT = 8080\nBUFFER_SIZE = 4096\nBACKLOG = 128\n\n\ndef tcp_echo_server():\n    server_fd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    try:\n        server_fd.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n        server_fd.bind((HOST, PORT))\n        server_fd.listen(BACKLOG)\n        print(f\"[TCP Server] Listening on {HOST}:{PORT}\")\n\n        while True:\n            client_fd, (client_ip, client_port) = server_fd.accept()\n            print(f\"[+] Client connected: {client_ip}:{client_port}\")\n            try:\n                while True:\n                    data = client_fd.recv(BUFFER_SIZE)\n                    if not data:\n                        print(f\"[*] Client {client_ip}:{client_port} closed\")\n                        break\n                    print(f\"[RECV] {data.decode(errors='replace')}\")\n                    client_fd.sendall(data)\n            except ConnectionResetError:\n                print(f\"[!] Connection reset by {client_ip}:{client_port}\")\n            except BrokenPipeError:\n                print(f\"[!] Broken pipe: {client_ip}:{client_port}\")\n            finally:\n                client_fd.close()\n                print(f\"[-] Client disconnected: {client_ip}:{client_port}\")\n    except OSError as e:\n        print(f\"[FATAL] {e}\")\n        sys.exit(1)\n    finally:\n        server_fd.close()\n\n\nif __name__ == '__main__':\n    tcp_echo_server()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--tcp-echo-client",
      children: "Python Implementation → TCP Echo Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport sys\n\nHOST = '127.0.0.1'\nPORT = 8080\n\n\ndef tcp_echo_client(message=\"Hello, TCP Server!\"):\n    fd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    try:\n        fd.connect((HOST, PORT))\n        print(f\"[TCP Client] Connected to {HOST}:{PORT}\")\n\n        fd.sendall(message.encode())\n        print(f\"[SENT] {message}\")\n\n        response = fd.recv(4096)\n        print(f\"[RECV] {response.decode(errors='replace')}\")\n    except ConnectionRefusedError:\n        print(\"[!] Connection refused. Is the server running?\")\n        sys.exit(1)\n    except OSError as e:\n        print(f\"[!] Error: {e}\")\n        sys.exit(1)\n    finally:\n        fd.close()\n\n\nif __name__ == '__main__':\n    msg = sys.argv[1] if len(sys.argv) > 1 else \"Hello, TCP Server!\"\n    tcp_echo_client(msg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--tcp",
      children: "Complexity Analysis → TCP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel allocates a fixed-size socket structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port check + assignment in kernel port table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "listen()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(backlog)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pre-allocates accept queue of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "backlog"
            }), " entries"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) syscall + O(RTT) wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN sent; kernel retries, user blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeues completed connection; may allocate new FD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies n bytes from user → kernel send buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies n bytes from kernel recv buffer → user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN sent; socket enters TIME_WAIT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) for send/recv?"
      }), " Data must be copied between user space and kernel space. This copy is the dominant cost for large transfers. Zero-copy techniques (sendfile, splice, msg_zerocopy) bypass this for file transfers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--tcp-sockets",
      children: "A&D Table → TCP Sockets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Reliable: all data arrives in order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection setup overhead (3-way handshake)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic retransmission on loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head-of-line blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow control (sliding window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More memory per socket (send/recv buffers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Congestion control (AIMD, CUBIC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No broadcast/multicast support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented state tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT state ties up ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffering handles bursts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower throughput than UDP for lossy links"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--tcp",
      children: "Edge Cases → TCP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection refused"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No server listening on port"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            }), " returns -1, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno == ECONNREFUSED"
            }), " (111)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check server is running; wait and retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broken pipe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to closed connection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            }), " returns -1, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGPIPE"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno == EPIPE"
            }), " (32)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ignore SIGPIPE with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "signal(SIGPIPE, SIG_IGN)"
            }), "; check recv return"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection reset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer crashed without FIN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            }), " returns -1, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno == ECONNRESET"
            }), " (104)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close socket immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address in use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_WAIT from previous run"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            }), " returns -1, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno == EADDRINUSE"
            }), " (98)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_REUSEADDR"
            }), " before bind"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial send"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffer full or congestion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            }), " returns < len"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop until all bytes sent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale connections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No traffic, peer dead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv blocks forever"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_KEEPALIVE"
            }), " or application-level timeout"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SYN flood"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious client sends many SYNs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            }), " may fail, backlog fills"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp_syncookies"
            }), " on Linux"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Too many open files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process FD limit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "socket()/accept()"
            }), " returns -1, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EMFILE"
            }), " (24)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ulimit -n"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-tcpsocketserver",
      children: "TypeScript Implementation: TCPSocketServer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type TCPState = 'CLOSED' | 'LISTEN' | 'SYN_SENT' | 'SYN_RCVD' | 'ESTABLISHED' | 'FIN_WAIT_1' | 'FIN_WAIT_2' | 'TIME_WAIT' | 'CLOSE_WAIT' | 'LAST_ACK';\n\ninterface SocketOptions { reuseAddr: boolean; backlog: number; nonBlocking: boolean; }\n\nclass TCPSocketServer {\n  private serverFd: number = -1;\n  private state: TCPState = 'CLOSED';\n  private port: number = 0;\n  private clients: Map<number, { fd: number; state: TCPState; buffer: string; remoteAddr: string; remotePort: number }> = new Map();\n  private nextFd: number = 3;\n  private nextClientFd: number = 1000;\n  private log: string[] = [];\n\n  getLog(): string[] { return this.log; }\n\n  private l(msg: string): void { this.log.push(msg); console.log(msg); }\n\n  create(): number {\n    this.serverFd = this.nextFd++;\n    this.state = 'CLOSED';\n    this.l(`[socket()] fd=${this.serverFd} created (domain=AF_INET, type=SOCK_STREAM, protocol=0)`);\n    return this.serverFd;\n  }\n\n  setSockOpt(opt: string, val: boolean): void {\n    this.l(`[setsockopt] ${opt}=${val}`);\n  }\n\n  bind(port: number): void {\n    if (this.state !== 'CLOSED') throw new Error('Socket not in CLOSED state');\n    this.port = port;\n    this.l(`[bind()] fd=${this.serverFd} bound to 0.0.0.0:${port}`);\n  }\n\n  listen(backlog: number = 128): void {\n    if (this.port === 0) throw new Error('Bind before listen');\n    this.state = 'LISTEN';\n    this.l(`[listen()] fd=${this.serverFd} listening, backlog=${backlog}, state=LISTEN`);\n  }\n\n  accept(): { clientFd: number; remoteAddr: string; remotePort: number } | null {\n    if (this.state !== 'LISTEN') throw new Error('Not LISTENing');\n    // Simulate a client connecting after some time\n    const clientFd = this.nextClientFd++;\n    const client = { fd: clientFd, state: 'ESTABLISHED' as TCPState, buffer: '', remoteAddr: '127.0.0.1', remotePort: 50000 + Math.floor(Math.random() * 10000) };\n    this.clients.set(clientFd, client);\n    this.l(`[accept()] fd=${this.serverFd} -> new client fd=${clientFd} (${client.remoteAddr}:${client.remotePort}), state=ESTABLISHED`);\n    return { clientFd, remoteAddr: client.remoteAddr, remotePort: client.remotePort };\n  }\n\n  connect(host: string, port: number): boolean {\n    if (this.state !== 'CLOSED') throw new Error('Already connected or listening');\n    this.state = 'SYN_SENT';\n    this.l(`[connect()] fd=${this.serverFd} -> ${host}:${port}, state=SYN_SENT`);\n    this.state = 'ESTABLISHED';\n    this.port = port;\n    this.l(`[connect()] SYN-ACK received, state=ESTABLISHED`);\n    return true;\n  }\n\n  recv(fd: number): string | null {\n    const client = this.clients.get(fd);\n    if (!client) { this.l(`[recv()] fd=${fd} not found`); return null; }\n    const data = `HTTP/1.1 200 OK\\r\\nContent-Length: 13\\r\\n\\r\\nHello, World!`;\n    const n = data.length;\n    this.l(`[recv()] fd=${fd} received ${n} bytes: \"${data.substring(0, 20)}...\"`);\n    return data;\n  }\n\n  send(fd: number, data: string): number {\n    const client = this.clients.get(fd);\n    if (!client) { this.l(`[send()] fd=${fd} not found`); return -1; }\n    if (client.state === 'CLOSE_WAIT') { this.l(`[send()] fd=${fd} BROKEN PIPE`); return -1; }\n    const n = data.length;\n    this.l(`[send()] fd=${fd} sent ${n} bytes`);\n    return n;\n  }\n\n  close(fd?: number): void {\n    if (fd === undefined || fd === this.serverFd) {\n      this.state = 'CLOSED';\n      this.l(`[close()] fd=${this.serverFd} closed, state=CLOSED`);\n      for (const [cfd] of this.clients) this.close(cfd);\n    } else {\n      const client = this.clients.get(fd);\n      if (client) {\n        client.state = 'FIN_WAIT_1';\n        this.l(`[close()] fd=${fd} FIN sent, state=FIN_WAIT_1`);\n        client.state = 'TIME_WAIT';\n        this.clients.delete(fd);\n        this.l(`[close()] fd=${fd} TIME_WAIT (2MSL), then CLOSED`);\n      }\n    }\n  }\n\n  getState(fd?: number): TCPState {\n    if (fd === undefined || fd === this.serverFd) return this.state;\n    return this.clients.get(fd)?.state ?? 'CLOSED';\n  }\n}\n\n// Usage\nconst server = new TCPSocketServer();\nserver.create();\nserver.setSockOpt('SO_REUSEADDR', true);\nserver.bind(8080);\nserver.listen(128);\nconst client = server.accept();\nif (client) {\n  const req = server.recv(client.clientFd);\n  if (req) server.send(client.clientFd, 'HTTP/1.1 200 OK\\r\\n\\r\\nOK');\n  server.close(client.clientFd);\n}\nserver.close();\nconsole.log('\\nSocket lifecycle log:');\nserver.getLog().forEach(l => console.log(`  ${l}`));\n/*\nOutput:\n[socket()] fd=3 created (domain=AF_INET, type=SOCK_STREAM, protocol=0)\n[setsockopt] SO_REUSEADDR=true\n[bind()] fd=3 bound to 0.0.0.0:8080\n[listen()] fd=3 listening, backlog=128, state=LISTEN\n[accept()] fd=3 -> new client fd=1000 (127.0.0.1:50000), state=ESTABLISHED\n...\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-udp-sockets",
      children: "13.3 UDP Sockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-post-office-mailbox",
      children: "Real-World Analogy: Post Office Mailbox"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UDP is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sending postcards through the mail"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "socket()"
        }), " = You buy a stack of postcards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "bind()"
        }), " = You write your return address on each."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sendto()"
        }), " = You drop a postcard in the mailbox."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "recvfrom()"
        }), " = You check your mailbox for replies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No connect/listen/accept"
        }), " = No phone call, no reservation. Just send and hope."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No ordering"
        }), " = Postcards may arrive out of order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No guarantee"
        }), " = Some postcards get lost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UDP characteristics: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unreliable, connectionless, message-oriented, no ordering guarantees, no congestion control"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udp-server-steps",
      children: "UDP Server Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: socket(AF_INET, SOCK_DGRAM, 0)\nStep 2: bind(sock, addr, len)\nStep 3: recvfrom(sock, buf, len, 0, &client_addr, &addrlen)\nStep 4: sendto(sock, response, len, 0, &client_addr, addrlen)\nStep 5: close(sock)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udp-client-steps",
      children: "UDP Client Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: socket(AF_INET, SOCK_DGRAM, 0)\nStep 2: sendto(sock, msg, len, 0, &server_addr, addrlen)\nStep 3: recvfrom(sock, buf, len, 0, &from_addr, &addrlen)\nStep 4: close(sock)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--udp-echo-server",
      children: "Pseudocode → UDP Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function udp_echo_server(port):\n    fd = socket(AF_INET, SOCK_DGRAM, 0)\n    addr = {AF_INET, port, INADDR_ANY}\n    bind(fd, &addr, sizeof(addr))\n    while true:\n        n = recvfrom(fd, buf, MAX_SIZE, 0, &client_addr, &addrlen)\n        if n > 0:\n            sendto(fd, buf, n, 0, &client_addr, addrlen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--udp-echo-client",
      children: "Pseudocode → UDP Echo Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function udp_echo_client(host, port, message):\n    fd = socket(AF_INET, SOCK_DGRAM, 0)\n    sendto(fd, message, len(message), 0, &server_addr, addrlen)\n    n = recvfrom(fd, buf, MAX_SIZE, 0, &from_addr, &addrlen)\n    print \"Echoed:\", string(buf, n)\n    close(fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--udp-datagram-flow",
      children: "Dry Run → UDP Datagram Flow"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet (src:port → dst:port)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket(AF_INET, SOCK_DGRAM)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bind(0.0.0.0:8080)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sendto(\"ping\", 127.0.0.1:8080)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP"
            }), " 127.0.0.1:54321 → 127.0.0.1:8080"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel delivers to bound socket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "payload: \"ping\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            }), " returns (\"ping\", (127.0.0.1, 54321))"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP"
            }), " 127.0.0.1:8080 → 127.0.0.1:54321"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sendto(\"ping\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            }), " returns \"ping\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "payload: \"ping\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), ": No handshake. The server doesn't know a client exists until the first datagram arrives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--udp-echo-server",
      children: "C++ Implementation → UDP Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// udp_echo_server.cpp\n#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n\nconstexpr int PORT = 8080;\nconstexpr int BUFFER_SIZE = 65507;  // Max UDP payload\n\nint main() {\n    int fd = socket(AF_INET, SOCK_DGRAM, 0);\n    if (fd < 0) {\n        std::cerr << \"socket: \" << strerror(errno) << std::endl;\n        return 1;\n    }\n\n    sockaddr_in addr{};\n    addr.sin_family = AF_INET;\n    addr.sin_addr.s_addr = INADDR_ANY;\n    addr.sin_port = htons(PORT);\n\n    if (bind(fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {\n        std::cerr << \"bind: \" << strerror(errno) << std::endl;\n        close(fd);\n        return 1;\n    }\n\n    std::cout << \"[UDP Server] Listening on port \" << PORT << std::endl;\n\n    char buf[BUFFER_SIZE];\n    sockaddr_in client_addr{};\n    socklen_t addrlen = sizeof(client_addr);\n\n    while (true) {\n        ssize_t n = recvfrom(fd, buf, sizeof(buf), 0,\n                             (struct sockaddr*)&client_addr, &addrlen);\n        if (n < 0) {\n            if (errno == EINTR) continue;\n            std::cerr << \"recvfrom: \" << strerror(errno) << std::endl;\n            break;\n        }\n        buf[n] = '\\0';\n        std::cout << \"[RECV \" << n << \" bytes] \" << buf << std::endl;\n        ssize_t sent = sendto(fd, buf, n, 0,\n                              (struct sockaddr*)&client_addr, addrlen);\n        if (sent < 0) {\n            std::cerr << \"sendto: \" << strerror(errno) << std::endl;\n        }\n    }\n\n    close(fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--udp-echo-client",
      children: "C++ Implementation → UDP Echo Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// udp_echo_client.cpp\n#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n\nconstexpr int PORT = 8080;\nconstexpr int BUFFER_SIZE = 4096;\n\nint main(int argc, char* argv[]) {\n    const char* message = (argc > 1) ? argv[1] : \"Hello, UDP Server!\";\n\n    int fd = socket(AF_INET, SOCK_DGRAM, 0);\n    if (fd < 0) {\n        std::cerr << \"socket: \" << strerror(errno) << std::endl;\n        return 1;\n    }\n\n    sockaddr_in server_addr{};\n    server_addr.sin_family = AF_INET;\n    server_addr.sin_port = htons(PORT);\n    inet_pton(AF_INET, \"127.0.0.1\", &server_addr.sin_addr);\n\n    sendto(fd, message, strlen(message), 0,\n           (struct sockaddr*)&server_addr, sizeof(server_addr));\n    std::cout << \"[SENT] \" << message << std::endl;\n\n    char buf[BUFFER_SIZE];\n    sockaddr_in from_addr{};\n    socklen_t fromlen = sizeof(from_addr);\n\n    ssize_t n = recvfrom(fd, buf, sizeof(buf) - 1, 0,\n                         (struct sockaddr*)&from_addr, &fromlen);\n    if (n >= 0) {\n        buf[n] = '\\0';\n        std::cout << \"[RECV] \" << buf << std::endl;\n    } else {\n        std::cerr << \"recvfrom: \" << strerror(errno) << std::endl;\n    }\n\n    close(fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--udp-echo-server",
      children: "Python Implementation → UDP Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket, sys\n\nHOST = '0.0.0.0'\nPORT = 8080\nBUFFER_SIZE = 65507\n\n\ndef udp_echo_server():\n    fd = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    try:\n        fd.bind((HOST, PORT))\n        print(f\"[UDP Server] Listening on {HOST}:{PORT}\")\n\n        while True:\n            data, (client_ip, client_port) = fd.recvfrom(BUFFER_SIZE)\n            print(f\"[RECV {len(data)} bytes from {client_ip}:{client_port}] \"\n                  f\"{data.decode(errors='replace')}\")\n            fd.sendto(data, (client_ip, client_port))\n    except OSError as e:\n        print(f\"[FATAL] {e}\")\n        sys.exit(1)\n    finally:\n        fd.close()\n\n\nif __name__ == '__main__':\n    udp_echo_server()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--udp-echo-client",
      children: "Python Implementation → UDP Echo Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket, sys\n\nHOST = '127.0.0.1'\nPORT = 8080\n\n\ndef udp_echo_client(message=\"Hello, UDP Server!\"):\n    fd = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    try:\n        fd.sendto(message.encode(), (HOST, PORT))\n        print(f\"[SENT] {message}\")\n        data, (host, port) = fd.recvfrom(4096)\n        print(f\"[RECV] {data.decode(errors='replace')}\")\n    except OSError as e:\n        print(f\"[!] {e}\")\n        sys.exit(1)\n    finally:\n        fd.close()\n\n\nif __name__ == '__main__':\n    msg = sys.argv[1] if len(sys.argv) > 1 else \"Hello, UDP Server!\"\n    udp_echo_client(msg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--udp",
      children: "Complexity Analysis → UDP"
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
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight allocation (no connection state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port assignment in kernel table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sendto()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) copy + O(1) lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy to kernel; single IP lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue datagram; copy to user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drop socket, no FIN exchange"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why UDP is faster than TCP:"
      }), " No connection state → no handshake, no congestion control, no sequence numbers, no retransmission timers. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sendto()"
      }), " is typically 2-5x faster than TCP ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send()"
      }), " in microbenchmarks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--udp-sockets",
      children: "A&D Table → UDP Sockets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Zero connection overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No delivery guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No head-of-line blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports broadcast and multicast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No congestion control → can flood network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lower latency (no handshake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in flow control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller kernel memory footprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Datagram boundaries: max 65507 bytes payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for real-time apps (VoIP, gaming)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application must handle loss, reordering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--udp",
      children: "Edge Cases → UDP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Datagram loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network congestion, buffer overflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            }), " never returns that datagram"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level ACK + retransmit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Out-of-order delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network multipathing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Datagrams arrive in wrong order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence numbers + reorder buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network retransmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same datagram received twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedup via unique IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver too slow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            }), " drops datagrams silently"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Increase socket buffer with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_RCVBUF"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message too large"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Datagram > path MTU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sendto()"
            }), " returns EMSGSIZE (90)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment in application or use PMTUD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No client bind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client didn't call bind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral port auto-assigned on first sendto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works fine; port visible in recvfrom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EAGAIN (non-blocking)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No datagram ready"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recvfrom()"
            }), " returns -1, errno EAGAIN"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try again later"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-udpsocket",
      children: "TypeScript Implementation: UDPSocket"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UDPPacket { srcAddr: string; srcPort: number; dstAddr: string; dstPort: number; data: string; }\n\nclass UDPSocket {\n  private fd: number;\n  private bound: boolean = false;\n  private localAddr: string = '';\n  private localPort: number = 0;\n  private rxQueue: UDPPacket[] = [];\n  private log: string[] = [];\n\n  constructor() { this.fd = Math.floor(Math.random() * 1000) + 10; }\n\n  private l(msg: string): void { this.log.push(msg); console.log(msg); }\n\n  getLog(): string[] { return this.log; }\n\n  create(): number {\n    this.l(`[socket()] fd=${this.fd} created (AF_INET, SOCK_DGRAM, 0) — connectionless`);\n    return this.fd;\n  }\n\n  bind(port: number, addr: string = '0.0.0.0'): void {\n    this.localAddr = addr;\n    this.localPort = port;\n    this.bound = true;\n    this.l(`[bind()] fd=${this.fd} bound to ${addr}:${port}`);\n  }\n\n  sendto(data: string, dstAddr: string, dstPort: number): number {\n    if (!this.bound) {\n      // Auto-bind with ephemeral port\n      this.localPort = 49152 + Math.floor(Math.random() * 16383);\n      this.bound = true;\n      this.l(`[auto-bind] fd=${this.fd} ephemeral port ${this.localPort}`);\n    }\n    const packet: UDPPacket = { srcAddr: this.localAddr || '127.0.0.1', srcPort: this.localPort, dstAddr, dstPort, data };\n    const n = data.length;\n    this.l(`[sendto()] fd=${this.fd} ${n}B -> ${dstAddr}:${dstPort}: \"${data.substring(0, 30)}\"`);\n    // In a real system, this would be queued at the receiver\n    return n;\n  }\n\n  recvfrom(timeoutMs: number = 5000): { data: string; addr: string; port: number } | null {\n    if (this.rxQueue.length === 0) {\n      this.l(`[recvfrom()] fd=${this.fd} no data (EAGAIN if non-blocking)`);\n      return null;\n    }\n    const pkt = this.rxQueue.shift()!;\n    this.l(`[recvfrom()] fd=${this.fd} ${pkt.data.length}B from ${pkt.srcAddr}:${pkt.srcPort}`);\n    return { data: pkt.data, addr: pkt.srcAddr, port: pkt.srcPort };\n  }\n\n  // Simulate incoming packet (normally from network)\n  receivePacket(pkt: UDPPacket): void {\n    this.rxQueue.push(pkt);\n    this.l(`[incoming] fd=${this.fd} queued ${pkt.data.length}B from ${pkt.srcAddr}:${pkt.srcPort}`);\n  }\n\n  close(): void {\n    this.l(`[close()] fd=${this.fd} closed — no FIN exchange (connectionless)`);\n  }\n\n  getBoundPort(): number { return this.localPort; }\n}\n\n// Usage\nconst server = new UDPSocket();\nserver.create();\nserver.bind(8080);\n\nconst client = new UDPSocket();\nclient.create();\n\n// Client sends\nclient.sendto('Hello UDP Server!', '127.0.0.1', 8080);\nserver.receivePacket({ srcAddr: '127.0.0.1', srcPort: client.getBoundPort(), dstAddr: '0.0.0.0', dstPort: 8080, data: 'Hello UDP Server!' });\nconst msg = server.recvfrom();\nif (msg) {\n  console.log(`Server received: \"${msg.data}\" from ${msg.addr}:${msg.port}`);\n  // Echo back\n  client.receivePacket({ srcAddr: '127.0.0.1', srcPort: 8080, dstAddr: '127.0.0.1', dstPort: msg.port, data: msg.data });\n}\nconst echo = client.recvfrom();\nif (echo) console.log(`Client received echo: \"${echo.data}\"`);\n\nserver.close();\nclient.close();\n/*\nOutput:\n[socket()] fd=... created (AF_INET, SOCK_DGRAM, 0) — connectionless\n[bind()] fd=... bound to 0.0.0.0:8080\n[socket()] fd=... created (AF_INET, SOCK_DGRAM, 0) — connectionless\n[sendto()] fd=... 17B -> 127.0.0.1:8080: \"Hello UDP Server!\"\n[incoming] fd=... queued 17B from 127.0.0.1:...\n[recvfrom()] fd=... 17B from 127.0.0.1:...\nServer received: \"Hello UDP Server!\" from 127.0.0.1:...\n...\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-blocking-vs-non-blocking-sockets",
      children: "13.4 Blocking vs Non-blocking Sockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-restaurant-ordering-styles",
      children: "Real-World Analogy: Restaurant Ordering Styles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking"
        }), " = You sit at the counter and stare at the chef until your food is ready. You do nothing else."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-blocking (polling)"
        }), " = Every 30 seconds you ask \"Is it ready?\", then go back to reading. You waste checking cycles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I/O Multiplexing"
        }), " = You give your order number and sit down. The waiter calls your number when ready. You do other things in between."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-comparison",
      children: "Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-blocking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call blocks until done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns immediately with -1 / EAGAIN if can't complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 thread per connection required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 thread can manage many connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero while blocked (waiting in kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy-waiting if polling in a tight loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal for single connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly higher due to repeated syscalls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple linear code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle partial operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple clients, low concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-concurrency servers with epoll/select"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-non-blocking-mode",
      children: "Setting Non-blocking Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Set a socket to non-blocking\nint flags = fcntl(sock_fd, F_GETFL, 0);\nfcntl(sock_fd, F_SETFL, flags | O_NONBLOCK);\n\n// Or use ioctl:\nint on = 1;\nioctl(sock_fd, FIONBIO, &on);\n\n// Modern: SOCK_NONBLOCK at socket creation (Linux 2.6.27+)\nint fd = socket(AF_INET, SOCK_STREAM | SOCK_NONBLOCK, 0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c--non-blocking-tcp-server-single-client-polling",
      children: "C++ → Non-blocking TCP Server (Single Client, Polling)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <fcntl.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n\nconstexpr int PORT = 8080;\n\nint set_nonblocking(int fd) {\n    int flags = fcntl(fd, F_GETFL, 0);\n    return fcntl(fd, F_SETFL, flags | O_NONBLOCK);\n}\n\nint main() {\n    int server_fd = socket(AF_INET, SOCK_STREAM, 0);\n    if (server_fd < 0) { perror(\"socket\"); return 1; }\n\n    int opt = 1;\n    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n    set_nonblocking(server_fd);\n\n    sockaddr_in addr{};\n    addr.sin_family = AF_INET;\n    addr.sin_addr.s_addr = INADDR_ANY;\n    addr.sin_port = htons(PORT);\n    bind(server_fd, (struct sockaddr*)&addr, sizeof(addr));\n    listen(server_fd, 128);\n\n    std::cout << \"Non-blocking server on port \" << PORT << std::endl;\n\n    while (true) {\n        // Non-blocking accept → returns -1/EAGAIN if no client\n        sockaddr_in client_addr{};\n        socklen_t addrlen = sizeof(client_addr);\n        int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);\n        if (client_fd >= 0) {\n            set_nonblocking(client_fd);\n            std::cout << \"Accepted connection, fd=\" << client_fd << std::endl;\n        } else if (errno != EAGAIN && errno != EWOULDBLOCK) {\n            perror(\"accept\");\n        }\n\n        // Poll each client (simplified: only one)\n        // In production use epoll/select instead of busy-waiting\n        usleep(1000);  // Avoid busy-wait → 1ms sleep\n    }\n    close(server_fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python--non-blocking-socket-example",
      children: "Python → Non-blocking Socket Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket, errno, select, sys\n\nHOST, PORT = '0.0.0.0', 8080\n\nfd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nfd.setblocking(False)  # Non-blocking mode\nfd.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nfd.bind((HOST, PORT))\nfd.listen(128)\n\nprint(f\"Non-blocking server on {HOST}:{PORT}\")\n\nclients = []\nwhile True:\n    try:\n        conn, addr = fd.accept()  # Non-blocking accept\n        conn.setblocking(False)\n        clients.append(conn)\n        print(f\"[+] {addr}\")\n    except BlockingIOError:\n        pass  # No pending connection\n\n    # Non-blocking recv on all clients\n    for c in clients[:]:\n        try:\n            data = c.recv(4096)\n            if not data:\n                c.close()\n                clients.remove(c)\n            else:\n                c.sendall(data)\n        except BlockingIOError:\n            pass  # No data yet\n        except ConnectionResetError:\n            c.close()\n            clients.remove(c)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--blocking-vs-non-blocking-recv",
      children: "Dry Run → Blocking vs Non-blocking recv"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "blocking-recv-trace",
      children: "Blocking recv Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv(fd, buf, 1024, 0)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No data in recv buffer → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "block thread"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(blocked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet arrives; kernel copies to recv buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(woken up)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies data to user buf; returns n=100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=5+ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User processes data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total wall time = 5s. Thread was parked for 5s."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "non-blocking-recv-trace",
      children: "Non-blocking recv Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv(fd, buf, 1024, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data → returns -1, EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0+1µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do other work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv(fd, buf, 1024, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still no data → returns -1, EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1.0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recv(fd, buf, 1024, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data arrived → returns n=100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1.001s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wall time = 1.001s, but thread was productive for ~1s doing other work."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--blocking-vs-non-blocking",
      children: "Complexity Analysis → Blocking vs Non-blocking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-blocking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU per request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (just wakeup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + syscall overhead (EAGAIN returns)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory per connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (kernel stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (user space state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threads needed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for n connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (event loop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switches"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 per I/O (block + wake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 if no data ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher per-thread, lower overall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower per-thread, higher overall"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why use non-blocking?"
      }), " Blocking requires O(n) threads for n concurrent connections. Non-blocking + I/O multiplexing requires O(1) threads. At 10,000 connections, non-blocking is the only practical approach (C10K)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--blockingnon-blocking",
      children: "Edge Cases → Blocking/Non-blocking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EAGAIN / EWOULDBLOCK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking operation can't complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry later; never retry in a tight loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EINTR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal interrupted a blocking call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart the system call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Short writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking send sends partial data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop until all data sent or EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spurious wakeup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select/poll returns but recv returns EAGAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Happens on some systems; loop to handle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EINPROGRESS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking connect in progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use select/poll to wait for writability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EISCONN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking connect already connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect completed between check and call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-nonblockingio",
      children: "TypeScript Implementation: NonBlockingIO"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type IOEventType = 'READABLE' | 'WRITABLE' | 'ERROR';\ninterface IOEvent { fd: number; type: IOEventType; timestamp: number; }\ntype IOCallback = (event: IOEvent) => void;\n\ninterface FDState { fd: number; readable: boolean; writable: boolean; buffer: string; closed: boolean; }\n\nclass NonBlockingIO {\n  private fds: Map<number, FDState> = new Map();\n  private callbacks: Map<number, IOCallback> = new Map();\n  private eventQueue: IOEvent[] = [];\n  private running: boolean = false;\n  private nextFd: number = 3;\n  private log: string[] = [];\n\n  private l(msg: string): void { this.log.push(msg); }\n\n  getLog(): string[] { return this.log; }\n\n  register(fd?: number): number {\n    const actualFd = fd ?? this.nextFd++;\n    this.fds.set(actualFd, { fd: actualFd, readable: false, writable: false, buffer: '', closed: false });\n    this.l(`[register] fd=${actualFd} added to event loop`);\n    return actualFd;\n  }\n\n  on(fd: number, callback: IOCallback): void {\n    this.callbacks.set(fd, callback);\n  }\n\n  setReadable(fd: number, data: string = ''): void {\n    const state = this.fds.get(fd);\n    if (!state) return;\n    state.readable = true;\n    state.buffer = data;\n    this.eventQueue.push({ fd, type: 'READABLE', timestamp: Date.now() });\n  }\n\n  setWritable(fd: number): void {\n    const state = this.fds.get(fd);\n    if (!state) return;\n    state.writable = true;\n    this.eventQueue.push({ fd, type: 'WRITABLE', timestamp: Date.now() });\n  }\n\n  read(fd: number): string | null {\n    const state = this.fds.get(fd);\n    if (!state || !state.readable) {\n      this.l(`[read] fd=${fd} EAGAIN (no data)`);\n      return null;\n    }\n    const data = state.buffer;\n    state.buffer = '';\n    state.readable = false;\n    this.l(`[read] fd=${fd} -> \"${data.substring(0, 30)}\" (${data.length}B)`);\n    return data;\n  }\n\n  write(fd: number, data: string): number {\n    const state = this.fds.get(fd);\n    if (!state || state.closed) {\n      this.l(`[write] fd=${fd} EPIPE (broken pipe)`);\n      return -1;\n    }\n    if (!state.writable) {\n      this.l(`[write] fd=${fd} EAGAIN (buffer full)`);\n      return 0;\n    }\n    const n = data.length;\n    this.l(`[write] fd=${fd} \"${data.substring(0, 30)}\" (${n}B)`);\n    return n;\n  }\n\n  close(fd: number): void {\n    const state = this.fds.get(fd);\n    if (state) state.closed = true;\n    this.callbacks.delete(fd);\n    this.l(`[close] fd=${fd} removed from event loop`);\n  }\n\n  // Event loop iteration (like epoll_wait)\n  poll(timeoutMs: number = 0): IOEvent[] {\n    if (this.eventQueue.length === 0 && timeoutMs > 0) {\n      this.l(`[poll] waiting ${timeoutMs}ms...`);\n      // Simulate blocking\n    }\n    const events = [...this.eventQueue];\n    this.eventQueue = [];\n    return events;\n  }\n\n  // Single event loop iteration\n  tick(): void {\n    const events = this.poll(0);\n    for (const ev of events) {\n      const cb = this.callbacks.get(ev.fd);\n      if (cb) {\n        this.l(`[tick] dispatching ${ev.type} fd=${ev.fd}`);\n        cb(ev);\n      }\n    }\n  }\n\n  run(iterations: number = 10): void {\n    this.running = true;\n    for (let i = 0; i < iterations && this.running; i++) {\n      this.l(`--- event loop iteration ${i + 1} ---`);\n      this.tick();\n    }\n  }\n\n  stop(): void { this.running = false; }\n}\n\n// Usage\nconst nbio = new NonBlockingIO();\nconst serverFd = nbio.register();\nconst clientFd = nbio.register();\n\nnbio.on(serverFd, (ev) => {\n  if (ev.type === 'READABLE') {\n    const data = nbio.read(serverFd);\n    if (data) console.log(`Server recv: \"${data}\"`);\n  }\n});\n\nnbio.on(clientFd, (ev) => {\n  if (ev.type === 'WRITABLE') {\n    const n = nbio.write(clientFd, 'Hello from event loop!');\n    if (n > 0) console.log(`Client sent ${n} bytes`);\n  }\n});\n\n// Simulate I/O events\nnbio.setReadable(serverFd, 'GET / HTTP/1.1');\nnbio.setWritable(clientFd);\nnbio.run(5);\nconsole.log('\\nEvent loop log:');\nnbio.getLog().forEach(l => console.log(`  ${l}`));\n/*\nOutput:\n[register] fd=3 added to event loop\n[register] fd=4 added to event loop\n...event loop iterations...\nServer recv: \"GET / HTTP/1.1\"\nClient sent 22 bytes\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-io-multiplexing-select-poll-epoll-kqueue",
      children: "13.5 I/O Multiplexing: select, poll, epoll, kqueue"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-maître-d",
      children: "Real-World Analogy: The Maître d'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You're a maître d' at a busy restaurant with 50 tables. Each table has a call button."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No multiplexing (blocking)"
        }), ": You stand at one table until they finish. The other 49 tables starve."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Busy polling (non-blocking)"
        }), ": You walk to each table every 2 seconds asking \"Ready to order?\" Waste of steps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "select()"
        }), ": You stand in the middle and look at ALL 50 tables' call buttons at once. Your vision is limited to 50 buttons max."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "poll()"
        }), ": Same as select, but you can look at any number of tables. Still checking all 50 every time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epoll()"
        }), ": The tables have a centralized display board that lights up only the tables that need you. You glance at the board and go directly to those tables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epoll (edge-triggered)"
        }), ": The board shows a table once → when it first calls. After you serve it, the light goes out until the table calls again."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1351-select",
      children: "13.5.1 select()"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fd_set"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FD_ZERO"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add descriptors to watch with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FD_SET"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set timeout (or NULL for infinite)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "select(maxfd+1, &readfds, &writefds, &exceptfds, &timeout)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check return: -1 error, 0 timeout, >0 ready descriptors."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Iterate 0..maxfd; check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FD_ISSET(fd, &readfds)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle I/O on ready descriptors."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FD_SETSIZE hard limit (typically 1024)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bitmap is re-initialized every call (kernel writes, user reads)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n) scanning: must check all descriptors every time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modifies the fd_set in place (must re-add every call)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function select_echo_server(port):\n    server_fd = socket() → bind() → listen()\n    clients = []\n    while true:\n        read_fds = {server_fd} ∪ clients\n        nready = select(max_fd+1, &read_fds, NULL, NULL, NULL)\n        if FD_ISSET(server_fd, read_fds):\n            client_fd = accept(server_fd)\n            clients.append(client_fd)\n        for each client_fd in clients:\n            if FD_ISSET(client_fd, read_fds):\n                n = recv(client_fd, buf, SIZE, 0)\n                if n <= 0: close(client_fd); remove from clients\n                else: send(client_fd, buf, n, 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--select-event-loop",
      children: "Dry Run → select() Event Loop"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FD Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "select Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ready FDs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3 (server)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → client fd=4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3, 4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3, 4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → fd=5, recv 4 → echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3, 4, 5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv 4 → echo \"hello\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3, 4, 5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv 5 returns 0 → close 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3, 4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv 4 returns 0 → close 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → fd=6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c--select-based-echo-server",
      children: "C++ → select-based Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <vector>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n\nconstexpr int PORT = 8080;\nconstexpr int MAX_CLIENTS = 1020;\n\nint make_server() {\n    int fd = socket(AF_INET, SOCK_STREAM, 0);\n    int opt = 1;\n    setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n    sockaddr_in addr{};\n    addr.sin_family = AF_INET;\n    addr.sin_addr.s_addr = INADDR_ANY;\n    addr.sin_port = htons(PORT);\n    bind(fd, (struct sockaddr*)&addr, sizeof(addr));\n    listen(fd, 128);\n    return fd;\n}\n\nint main() {\n    int server_fd = make_server();\n    std::vector<int> clients;\n    std::cout << \"[select] Server on port \" << PORT << std::endl;\n\n    while (true) {\n        fd_set read_fds;\n        FD_ZERO(&read_fds);\n        FD_SET(server_fd, &read_fds);\n        int max_fd = server_fd;\n\n        for (int fd : clients) {\n            FD_SET(fd, &read_fds);\n            if (fd > max_fd) max_fd = fd;\n        }\n\n        int nready = select(max_fd + 1, &read_fds, nullptr, nullptr, nullptr);\n        if (nready < 0) {\n            if (errno == EINTR) continue;\n            perror(\"select\");\n            break;\n        }\n\n        // Handle new connections\n        if (FD_ISSET(server_fd, &read_fds)) {\n            sockaddr_in client_addr{};\n            socklen_t addrlen = sizeof(client_addr);\n            int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);\n            if (client_fd >= 0) {\n                clients.push_back(client_fd);\n                char ip[INET_ADDRSTRLEN];\n                inet_ntop(AF_INET, &client_addr.sin_addr, ip, sizeof(ip));\n                std::cout << \"[+] \" << ip << \":\" << ntohs(client_addr.sin_port) << std::endl;\n            }\n            if (--nready <= 0) continue;\n        }\n\n        // Handle client data\n        for (auto it = clients.begin(); it != clients.end(); ) {\n            int fd = *it;\n            if (FD_ISSET(fd, &read_fds)) {\n                char buf[4096];\n                ssize_t n = recv(fd, buf, sizeof(buf) - 1, 0);\n                if (n <= 0) {\n                    close(fd);\n                    std::cout << \"[-] fd=\" << fd << \" disconnected\" << std::endl;\n                    it = clients.erase(it);\n                } else {\n                    buf[n] = '\\0';\n                    send(fd, buf, n, 0);\n                    ++it;\n                }\n                if (--nready <= 0) break;\n            } else {\n                ++it;\n            }\n        }\n    }\n\n    for (int fd : clients) close(fd);\n    close(server_fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python--select-based-chat-server",
      children: "Python → select-based Chat Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport select\nimport sys\n\nHOST, PORT = '0.0.0.0', 8080\n\ndef chat_server():\n    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n    server.bind((HOST, PORT))\n    server.listen(128)\n    server.setblocking(False)\n\n    inputs = [server]    # Sockets to read from\n    outputs = []         # Sockets to write to\n    message_queues = {}  # fd -> queue of messages\n\n    print(f\"[select chat] Server on {HOST}:{PORT}\")\n\n    while inputs:\n        readable, writable, exceptional = select.select(inputs, outputs, inputs, 0.5)\n\n        for s in readable:\n            if s is server:\n                conn, addr = s.accept()\n                conn.setblocking(False)\n                inputs.append(conn)\n                message_queues[conn] = []\n                print(f\"[+] {addr}\")\n            else:\n                data = s.recv(4096)\n                if data:\n                    msg = f\"[{s.getpeername()}] {data.decode(errors='replace')}\"\n                    print(msg, end='')\n                    # Echo back to sender\n                    message_queues[s].append(data)\n                    if s not in outputs:\n                        outputs.append(s)\n                else:\n                    if s in outputs:\n                        outputs.remove(s)\n                    inputs.remove(s)\n                    s.close()\n                    del message_queues[s]\n\n        for s in writable:\n            if message_queues.get(s):\n                next_msg = message_queues[s].pop(0)\n                try:\n                    s.sendall(next_msg)\n                except OSError:\n                    pass\n            if not message_queues.get(s):\n                outputs.remove(s)\n\n        for s in exceptional:\n            print(f\"[!] Exception on {s.getpeername()}\")\n            inputs.remove(s)\n            if s in outputs:\n                outputs.remove(s)\n            s.close()\n            del message_queues[s]\n\n\nif __name__ == '__main__':\n    chat_server()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1352-poll",
      children: "13.5.2 poll()"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-1",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allocate array of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct pollfd"
        }), " for each descriptor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".fd"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".events"
        }), " (POLLIN, POLLOUT, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "poll(array, nfds, timeout_ms)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check return: >0 ready, 0 timeout, -1 error."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Iterate array; check ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".revents"
        }), " for POLLIN / POLLOUT / POLLERR / POLLHUP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-differences-from-select",
      children: "Key Differences from select()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No FD_SETSIZE limit → uses linked-list array."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Events and revents are separate fields (no in-place modification)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better for sparse descriptor sets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Still O(n) scanning of the entire array."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function poll_echo_server(port):\n    server_fd = socket() → bind() → listen()\n    fds = [{fd: server_fd, events: POLLIN}]\n    while true:\n        nready = poll(fds, nfds, -1)\n        for each fds[i]:\n            if fds[i].revents & POLLIN:\n                if fds[i].fd == server_fd:\n                    client_fd = accept(server_fd)\n                    fds.append({fd: client_fd, events: POLLIN})\n                else:\n                    n = recv(fds[i].fd, buf, SIZE, 0)\n                    if n <= 0: close(fd); remove from fds\n                    else: send(fds[i].fd, buf, n, 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--poll-event-loop",
      children: "Dry Run → poll() Event Loop"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pollfds array size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "poll Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "revents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "server: POLLIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → fd=4, add to array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (server, fd=4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "both POLLIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → fd=5, recv 4 → echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (server, 4, 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=5: POLLIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv 5 → echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=5: POLLHUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close 5, remove from array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (server, 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=4: POLLIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv 4 → echo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c--poll-based-echo-server",
      children: "C++ → poll-based Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <vector>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <poll.h>\n\nconstexpr int PORT = 8080;\nconstexpr int MAX_EVENTS = 4096;\n\nint make_server() {\n    int fd = socket(AF_INET, SOCK_STREAM, 0);\n    int opt = 1;\n    setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n    sockaddr_in addr{};\n    addr.sin_family = AF_INET;\n    addr.sin_addr.s_addr = INADDR_ANY;\n    addr.sin_port = htons(PORT);\n    bind(fd, (struct sockaddr*)&addr, sizeof(addr));\n    listen(fd, 128);\n    return fd;\n}\n\nint main() {\n    int server_fd = make_server();\n    std::vector<pollfd> fds;\n    fds.push_back({server_fd, POLLIN, 0});\n    std::cout << \"[poll] Server on port \" << PORT << std::endl;\n\n    while (true) {\n        int nready = poll(fds.data(), fds.size(), -1);\n        if (nready < 0) {\n            if (errno == EINTR) continue;\n            perror(\"poll\");\n            break;\n        }\n\n        // Process ready descriptors → careful about iterating while modifying\n        for (size_t i = 0; i < fds.size() && nready > 0; i++) {\n            if (!(fds[i].revents & POLLIN)) continue;\n            nready--;\n\n            if (fds[i].fd == server_fd) {\n                sockaddr_in client_addr{};\n                socklen_t addrlen = sizeof(client_addr);\n                int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);\n                if (client_fd >= 0) {\n                    fds.push_back({client_fd, POLLIN, 0});\n                    std::cout << \"[+] New connection, fd=\" << client_fd << std::endl;\n                }\n            } else {\n                char buf[4096];\n                ssize_t n = recv(fds[i].fd, buf, sizeof(buf) - 1, 0);\n                if (n <= 0) {\n                    close(fds[i].fd);\n                    std::cout << \"[-] fd=\" << fds[i].fd << \" disconnected\" << std::endl;\n                    fds.erase(fds.begin() + i);\n                    i--;  // Adjust index after erase\n                } else {\n                    buf[n] = '\\0';\n                    send(fds[i].fd, buf, n, 0);\n                }\n            }\n        }\n    }\n\n    for (auto& pfd : fds) close(pfd.fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1353-epoll-linux",
      children: "13.5.3 epoll() (Linux)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-2",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epoll_create1(0)"
        }), " → Create epoll instance, returns epoll_fd."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "struct epoll_event ev"
        }), " → Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ev.events"
        }), " (EPOLLIN, EPOLLOUT, EPOLLET, etc.) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ev.data.fd"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ev.data.ptr"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epoll_ctl(epoll_fd, EPOLL_CTL_ADD, target_fd, &ev)"
        }), " → Register interest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epoll_wait(epoll_fd, events, maxevents, timeout)"
        }), " → Wait for events."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterate returned events array (only ready descriptors)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle each: new connection → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "accept()"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epoll_ctl(ADD)"
        }), " to add client; data → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recv()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For edge-triggered: loop on recv until EAGAIN."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "level-triggered-vs-edge-triggered",
      children: "Level-Triggered vs Edge-Triggered"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level-Triggered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event fires as long as data exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity; default; tolerant of partial reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge-Triggered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event fires once when state changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency; must read until EAGAIN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function epoll_echo_server(port):\n    server_fd = socket() → bind() → listen()\n    epoll_fd = epoll_create1(0)\n    ev = {events: EPOLLIN, data: {fd: server_fd}}\n    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_fd, &ev)\n\n    while true:\n        nready = epoll_wait(epoll_fd, events, MAX_EVENTS, -1)\n        for i = 0..nready-1:\n            if events[i].data.fd == server_fd:\n                while (client_fd = accept(server_fd)) >= 0:\n                    set_nonblocking(client_fd)\n                    ev = {events: EPOLLIN | EPOLLET, data: {fd: client_fd}}\n                    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, client_fd, &ev)\n            else:\n                while (n = recv(events[i].data.fd, buf, SIZE, 0)) > 0:\n                    send(events[i].data.fd, buf, n, 0)\n                if n == -1 and errno != EAGAIN:\n                    close(fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--epoll-event-loop",
      children: "Dry Run → epoll Event Loop"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "epoll_wait Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Events"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=3 (server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → fd=4, epoll_ctl ADD 4 (EPOLLIN|EPOLLET)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=4 (client data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv \"hello\", echo back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=3 (new), fd=4 (more data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept → fd=5, recv fd=4 \"world\", echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=5 (data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "recv → echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(timeout after 5s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do maintenance tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=4 (POLLHUP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close fd=4, epoll_ctl DEL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c--epoll-echo-server-edge-triggered",
      children: "C++ → epoll Echo Server (Edge-Triggered)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <fcntl.h>\n#include <sys/socket.h>\n#include <sys/epoll.h>\n#include <netinet/in.h>\n\nconstexpr int PORT = 8080;\nconstexpr int MAX_EVENTS = 4096;\nconstexpr int BUFFER_SIZE = 4096;\n\nint set_nonblocking(int fd) {\n    int flags = fcntl(fd, F_GETFL, 0);\n    return fcntl(fd, F_SETFL, flags | O_NONBLOCK);\n}\n\nint main() {\n    int server_fd = socket(AF_INET, SOCK_STREAM, 0);\n    int opt = 1;\n    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n    set_nonblocking(server_fd);\n\n    sockaddr_in addr{};\n    addr.sin_family = AF_INET;\n    addr.sin_addr.s_addr = INADDR_ANY;\n    addr.sin_port = htons(PORT);\n    bind(server_fd, (struct sockaddr*)&addr, sizeof(addr));\n    listen(server_fd, 128);\n\n    int epoll_fd = epoll_create1(0);\n    if (epoll_fd < 0) { perror(\"epoll_create1\"); return 1; }\n\n    epoll_event ev{};\n    ev.events = EPOLLIN;\n    ev.data.fd = server_fd;\n    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_fd, &ev);\n\n    epoll_event events[MAX_EVENTS];\n    std::cout << \"[epoll ET] Server on port \" << PORT << std::endl;\n\n    while (true) {\n        int nready = epoll_wait(epoll_fd, events, MAX_EVENTS, -1);\n        if (nready < 0) {\n            if (errno == EINTR) continue;\n            perror(\"epoll_wait\");\n            break;\n        }\n\n        for (int i = 0; i < nready; i++) {\n            if (events[i].data.fd == server_fd) {\n                // Accept all pending connections (ET: loop until EAGAIN)\n                while (true) {\n                    sockaddr_in client_addr{};\n                    socklen_t addrlen = sizeof(client_addr);\n                    int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);\n                    if (client_fd < 0) {\n                        if (errno == EAGAIN || errno == EWOULDBLOCK) break;\n                        perror(\"accept\");\n                        break;\n                    }\n                    set_nonblocking(client_fd);\n                    epoll_event cev{};\n                    cev.events = EPOLLIN | EPOLLET;  // Edge-triggered\n                    cev.data.fd = client_fd;\n                    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, client_fd, &cev);\n                    std::cout << \"[+] Connection fd=\" << client_fd << std::endl;\n                }\n            } else {\n                int client_fd = events[i].data.fd;\n                char buf[BUFFER_SIZE];\n                bool closed = false;\n\n                // ET: read until EAGAIN\n                while (true) {\n                    ssize_t n = recv(client_fd, buf, sizeof(buf) - 1, 0);\n                    if (n > 0) {\n                        buf[n] = '\\0';\n                        ssize_t sent = 0;\n                        while (sent < n) {\n                            ssize_t s = send(client_fd, buf + sent, n - sent, 0);\n                            if (s < 0) {\n                                if (errno == EAGAIN) {\n                                    // Write buffer full → in production, buffer remaining\n                                    break;\n                                }\n                                closed = true;\n                                break;\n                            }\n                            sent += s;\n                        }\n                        if (closed) break;\n                    } else if (n == 0) {\n                        closed = true;\n                        break;\n                    } else {\n                        if (errno == EAGAIN || errno == EWOULDBLOCK) break;\n                        closed = true;\n                        break;\n                    }\n                }\n\n                if (closed) {\n                    std::cout << \"[-] fd=\" << client_fd << \" closed\" << std::endl;\n                    epoll_ctl(epoll_fd, EPOLL_CTL_DEL, client_fd, nullptr);\n                    close(client_fd);\n                }\n            }\n        }\n    }\n\n    close(epoll_fd);\n    close(server_fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python--epoll-echo-server",
      children: "Python → epoll Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport select\nimport errno\n\nHOST, PORT = '0.0.0.0', 8080\n\n\ndef epoll_echo_server():\n    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n    server.bind((HOST, PORT))\n    server.listen(128)\n    server.setblocking(False)\n\n    epoll = select.epoll()\n    epoll.register(server.fileno(), select.EPOLLIN | select.EPOLLET)\n\n    connections = {server.fileno(): server}  # fd -> socket object\n    buffers = {}  # fd -> partial data buffer\n    print(f\"[epoll ET] Server on {HOST}:{PORT}\")\n\n    try:\n        while True:\n            events = epoll.poll(timeout=-1)\n            for fd, event in events:\n                if fd == server.fileno():\n                    # Accept all pending connections (edge-triggered)\n                    while True:\n                        try:\n                            conn, addr = server.accept()\n                            conn.setblocking(False)\n                            conn_fd = conn.fileno()\n                            connections[conn_fd] = conn\n                            buffers[conn_fd] = b\"\"\n                            epoll.register(conn_fd, select.EPOLLIN | select.EPOLLET)\n                            print(f\"[+] {addr}\")\n                        except socket.error as e:\n                            if e.errno == errno.EAGAIN or e.errno == errno.EWOULDBLOCK:\n                                break\n                            raise\n                else:\n                    # Client socket has data\n                    conn = connections.get(fd)\n                    if not conn:\n                        continue\n\n                    try:\n                        # Read all available data (ET: loop until EAGAIN)\n                        while True:\n                            data = conn.recv(4096)\n                            if not data:\n                                raise ConnectionResetError()\n                            buffers[fd] += data\n                    except (socket.error, ConnectionResetError, BrokenPipeError) as e:\n                        is_eagain = isinstance(e, socket.error) and (\n                            e.errno == errno.EAGAIN or e.errno == errno.EWOULDBLOCK\n                        )\n                        if is_eagain:\n                            # All data read → echo it back\n                            if buffers[fd]:\n                                try:\n                                    conn.sendall(buffers[fd])\n                                except OSError:\n                                    pass\n                                buffers[fd] = b\"\"\n                        else:\n                            # Connection closed\n                            epoll.unregister(fd)\n                            conn.close()\n                            del connections[fd]\n                            buffers.pop(fd, None)\n    finally:\n        epoll.close()\n        server.close()\n\n\nif __name__ == '__main__':\n    epoll_echo_server()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1354-kqueue-bsdmacos",
      children: "13.5.4 kqueue (BSD/macOS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "kqueue is the BSD equivalent of epoll. It provides a unified event notification interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <sys/types.h>\n#include <sys/event.h>\n#include <sys/time.h>\n\nint kq = kqueue();\n\nstruct kevent change;\nEV_SET(&change, fd, EVFILT_READ, EV_ADD, 0, 0, NULL);\nkevent(kq, &change, 1, NULL, 0, NULL);\n\nstruct kevent event;\nwhile (1) {\n    int n = kevent(kq, NULL, 0, &event, 1, NULL);\n    if (n > 0) {\n        // event.ident = fd, event.filter = EVFILT_READ\n        recv(event.ident, buf, sizeof(buf), 0);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "kqueue vs epoll differences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["kqueue can monitor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "process, signal, filesystem events, and timers"
        }), " → not just sockets."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kqueue uses a change list + event list architecture."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kevent supports EV_ONESHOT (one-shot notification, similar to EPOLLONESHOT)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "macOS kqueue has limitations with certain file types (regular files)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--io-multiplexing",
      children: "Complexity Analysis → I/O Multiplexing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Registration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event Wait"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Per-Event Delivery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "select()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel copies all fd_set bits; user scans all n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "poll()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel iterates pollfd array; user scans all n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) add/remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-black tree for registration; callback wakes only ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kqueue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) add/remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table + event list; per-fd filter objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why epoll is O(1) for event wait:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internally, epoll uses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "red-black tree"
        }), " for registered descriptors and a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ready list"
        }), " (doubly linked list) for triggered events."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When data arrives, the network driver calls the socket's callback, which adds the socket to epoll's ready list and wakes the waiting thread."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epoll_wait()"
        }), " simply copies the ready list → no scanning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "select-vs-poll-vs-epoll-vs-kqueue--comparison",
      children: "select vs poll vs epoll vs kqueue → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "select"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "poll"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "epoll"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "kqueue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux (2.5.44+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BSD / macOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max FDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FD_SETSIZE (1024)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmask modified in-place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate events/revents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate registration vs wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change list vs event list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Re-registration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must rebuild fd_set each call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must repopulate array each call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epoll_ctl add once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must re-apply EV_ADD (one-shot mitigates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(n) scan required?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (all FDs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (all FDs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (only ready)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (only ready)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level/Edge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both (LT default, ET with EPOLLET)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EV_CLEAR for edge-like behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can use signalfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate signalfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "signalfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVFILT_SIGNAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance @ 10k"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades severely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades severely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel data structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RB-tree + ready list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table + filter objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--io-multiplexing",
      children: "A&D Table → I/O Multiplexing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform, simple API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FD_SETSIZE limit, O(n) scan, bitmask destruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "poll"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No hard limit, separate revents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scan, no edge-triggering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) ready iteration, ET/LT, millions FDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux-only, slightly more complex API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kqueue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1), monitors non-socket events (FS, signals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BSD/macOS only, complex API"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--io-multiplexing",
      children: "Edge Cases → I/O Multiplexing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "select returns with 0 ready after FD_ISSET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious wakeup (Linux may return early)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always re-check FD_ISSET results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "select EINTR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal interrupted select"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Loop: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while ((n = select(...)) < 0 && errno == EINTR)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "poll POLLNVAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd not open at poll time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check fd validity before poll"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "poll POLLHUP without POLLIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer closed, no more data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close fd immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll EPOLLET starvation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-triggered: miss event if don't read all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop recv until EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll EPOLLONESHOT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-shot: re-arm after handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for multi-threaded event handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll race with close"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd reused between close and epoll_ctl DEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use EPOLL_CTL_DEL before close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll EPOLLRDHUP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer closed (Linux 2.6.17+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects shutdown without reading"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-unix-domain-sockets",
      children: "13.6 Unix Domain Sockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unix domain sockets (AF_UNIX) allow IPC between processes on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same host"
      }), ". They use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file system"
      }), " as the address namespace instead of IP:port."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Process A  ←→  [ /tmp/app.sock ]  ←→  Process B\n          stream / datagram              |\n                                    Same kernel → no network stack\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types",
      children: "Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pathname"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tmp/mysock"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bind to a file path; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "struct sockaddr_un"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstract"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@mysock"
            }), " (Linux)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No filesystem entry; starts with null byte"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-advantages-over-tcp-loopback",
      children: "Key Advantages Over TCP Loopback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faster"
        }), ": No protocol stack (TCP/IP headers, checksums, routing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "More secure"
        }), ": Access controlled by file permissions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lower overhead"
        }), ": No 3-way handshake, no congestion control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c--unix-domain-socket-echo-server",
      children: "C++ → Unix Domain Socket Echo Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <sys/un.h>\n\nconstexpr const char* SOCK_PATH = \"/tmp/echo.sock\";\n\nint main() {\n    unlink(SOCK_PATH);  // Remove any existing socket file\n\n    int server_fd = socket(AF_UNIX, SOCK_STREAM, 0);\n    if (server_fd < 0) { perror(\"socket\"); return 1; }\n\n    sockaddr_un addr{};\n    addr.sun_family = AF_UNIX;\n    strncpy(addr.sun_path, SOCK_PATH, sizeof(addr.sun_path) - 1);\n\n    if (bind(server_fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {\n        perror(\"bind\");\n        close(server_fd);\n        return 1;\n    }\n\n    chmod(SOCK_PATH, 0666);  // Allow other users to connect\n    listen(server_fd, 128);\n    std::cout << \"[Unix] Listening on \" << SOCK_PATH << std::endl;\n\n    char buf[4096];\n    while (true) {\n        sockaddr_un client_addr{};\n        socklen_t addrlen = sizeof(client_addr);\n        int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);\n        if (client_fd < 0) { perror(\"accept\"); continue; }\n\n        ssize_t n = recv(client_fd, buf, sizeof(buf) - 1, 0);\n        if (n > 0) {\n            buf[n] = '\\0';\n            std::cout << \"Received: \" << buf << std::endl;\n            send(client_fd, buf, n, 0);\n        }\n        close(client_fd);\n    }\n\n    close(server_fd);\n    unlink(SOCK_PATH);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python--unix-domain-socket-client",
      children: "Python → Unix Domain Socket Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import socket\nimport os\n\nSOCK_PATH = '/tmp/echo.sock'\n\n\ndef unix_client(message=\"Hello Unix!\"):\n    fd = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)\n    try:\n        fd.connect(SOCK_PATH)\n        fd.sendall(message.encode())\n        data = fd.recv(4096)\n        print(f\"Received: {data.decode()}\")\n    except FileNotFoundError:\n        print(f\"[!] Socket {SOCK_PATH} not found. Is the server running?\")\n    except ConnectionRefusedError:\n        print(\"[!] Connection refused\")\n    finally:\n        fd.close()\n\n\nif __name__ == '__main__':\n    unix_client(\"Hello from Python over Unix socket!\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--unix-domain-socket",
      children: "Dry Run → Unix Domain Socket"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket(AF_UNIX, SOCK_STREAM, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates socket inode (no NIC needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bind(\"/tmp/echo.sock\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates filesystem entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "listen()"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "accept()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until peer connects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Client ", (0,jsx_runtime.jsx)(_components.code, {
              children: "connect(\"/tmp/echo.sock\")"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same kernel: no routing, no headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel memcpy between process buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes socket inode"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency benchmark"
      }), ": Unix domain sockets typically complete in 5-15µs per round-trip vs 30-60µs for TCP loopback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--unix-domain-sockets",
      children: "Edge Cases → Unix Domain Sockets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address already in use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale socket file from crash"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unlink(SOCK_PATH)"
            }), " before bind"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Permission denied"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File permissions restrict access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chmod(SOCK_PATH, 0666)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ENOENT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket file doesn't exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check path; create directory if needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EACCES on connect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No write permission on socket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix directory/file permissions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File system full"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No space for socket inode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor disk space; use abstract sockets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-raw-sockets",
      children: "13.7 Raw Sockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Raw sockets allow direct access to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP layer"
      }), ". Applications construct their own IP headers, transport headers, and payload. This bypasses the kernel's TCP/UDP protocol handlers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Create raw socket for ICMP\nint fd = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP);\n\n// Create raw socket for TCP (requires CAP_NET_RAW)\nint fd = socket(AF_INET, SOCK_RAW, IPPROTO_TCP);\n\n// Create raw socket for custom protocol\nint fd = socket(AF_INET, SOCK_RAW, 255);  // Custom L4 protocol\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--raw-socket-pingicmp",
      children: "Numbered Steps → Raw Socket (Ping/ICMP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create raw socket with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPPROTO_ICMP"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build ICMP echo request header (type=8, code=0, checksum, ID, sequence)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate ICMP checksum."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sendto()"
        }), " to target IP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "recvfrom()"
        }), " and parse ICMP echo reply (type=0)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate RTT from send/receive timestamps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-concerns",
      children: "Security Concerns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root only"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Raw sockets require ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CAP_NET_RAW"
            }), " or root"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spoofing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can forge source IP addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sniffing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw sockets can capture all IP traffic on the system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource abuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can craft packets to amplify DDoS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c--raw-icmp-ping-simplified",
      children: "C++ → Raw ICMP Ping (Simplified)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/ip.h>\n#include <netinet/ip_icmp.h>\n#include <arpa/inet.h>\n#include <chrono>\n\n// Pseudo-header checksum\nunsigned short checksum(unsigned short* buf, int len) {\n    unsigned long sum = 0;\n    for (; len > 1; len -= 2) sum += *buf++;\n    if (len == 1) sum += *(unsigned char*)buf;\n    sum = (sum >> 16) + (sum & 0xFFFF);\n    sum += (sum >> 16);\n    return (unsigned short)~sum;\n}\n\nint main(int argc, char* argv[]) {\n    if (argc < 2) { std::cerr << \"Usage: \" << argv[0] << \" <IP>\\n\"; return 1; }\n\n    int fd = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP);\n    if (fd < 0) { perror(\"socket (need root)\"); return 1; }\n\n    sockaddr_in dest{};\n    dest.sin_family = AF_INET;\n    inet_pton(AF_INET, argv[1], &dest.sin_addr);\n\n    // Build ICMP echo request\n    struct icmphdr icmp{};\n    icmp.type = ICMP_ECHO;\n    icmp.code = 0;\n    icmp.un.echo.id = getpid();\n    icmp.un.echo.sequence = 1;\n    icmp.checksum = checksum((unsigned short*)&icmp, sizeof(icmp));\n\n    auto start = std::chrono::steady_clock::now();\n    sendto(fd, &icmp, sizeof(icmp), 0, (struct sockaddr*)&dest, sizeof(dest));\n\n    char buf[1024];\n    sockaddr_in from{};\n    socklen_t fromlen = sizeof(from);\n    ssize_t n = recvfrom(fd, buf, sizeof(buf), 0, (struct sockaddr*)&from, &fromlen);\n    auto end = std::chrono::steady_clock::now();\n\n    if (n > 0) {\n        auto rtt = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();\n        char ip[INET_ADDRSTRLEN];\n        inet_ntop(AF_INET, &from.sin_addr, ip, sizeof(ip));\n        std::cout << \"Reply from \" << ip << \" RTT=\" << rtt << \"ms\" << std::endl;\n    }\n\n    close(fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--raw-sockets",
      children: "A&D Table → Raw Sockets"
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
            children: "Complete control over packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires root / CAP_NET_RAW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can implement custom protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No kernel assistance (checksums, retransmit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet crafting for testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to ICMP, IGMP, all IP protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to crash system with bad packets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-cases-for-raw-sockets",
      children: "Use Cases for Raw Sockets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ping"
        }), " (ICMP echo request/reply)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "traceroute"
        }), " (ICMP TTL exceeded + UDP to high ports)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ARP spoofing detection"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom VPN/protocol implementations"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network scanners"
        }), " (nmap-style SYN scan)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet injection for security testing"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-socket-options",
      children: "13.8 Socket Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Socket options are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "settings on a home appliance"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SO_REUSEADDR"
        }), " = Setting your phone to immediately accept calls at the same number after hanging up."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SO_KEEPALIVE"
        }), " = An automatic \"Are you still there?\" check for long silences."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP_NODELAY"
        }), " = Sending text messages character-by-character vs. waiting for a full sentence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SO_RCVBUF"
        }), " = Size of your mailbox."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setsockopt--getsockopt-signatures",
      children: "setsockopt / getsockopt Signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int setsockopt(int sockfd, int level, int optname,\n               const void *optval, socklen_t optlen);\n\nint getsockopt(int sockfd, int level, int optname,\n               void *optval, socklen_t *optlen);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sockfd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket file descriptor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "level"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Protocol level: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SOL_SOCKET"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPPROTO_TCP"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPPROTO_IP"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "optname"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option identifier (see table below)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "optval"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to option value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "optlen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of option value (in/out for getsockopt)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-socket-options-table",
      children: "Complete Socket Options Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_REUSEADDR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow reuse of local address even in TIME_WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All TCP servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_REUSEPORT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple processes can bind same port (Linux 3.9+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-worker servers (Nginx)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_KEEPALIVE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send keepalive probes when idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-lived connections (SSH, DB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_LINGER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off (l_onoff=0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control close behavior with pending data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "See details below"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_RCVBUF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~208KB (auto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of receive buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_SNDBUF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~208KB (auto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of send buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_RCVTIMEO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout for recv operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you don't want blocking forever"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_SNDTIMEO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout for send operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect stuck connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_NODELAY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off (Nagle enabled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable Nagle's algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive apps (SSH, HTTP API)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_QUICKACK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On (kernel managed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable delayed ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency apps (Linux only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_CORK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't send partial frames; build full segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk transfer optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_DEFER_ACCEPT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't wake accept until data arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce context switches on accept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_KEEPIDLE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7200s (2h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle time before first keepalive probe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust keepalive frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_KEEPINTVL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interval between keepalive probes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust keepalive frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TCP_KEEPCNT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max keepalive probes before declaring dead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust keepalive frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IP_TTL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-to-live for outgoing packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "traceroute, multicast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IP_MULTICAST_TTL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPPROTO_IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL for multicast packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multicast apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_BROADCAST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow sending broadcast packets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP broadcast apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SO_PRIORITY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOL_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set socket priority for QoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic shaping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "so_linger-behavior",
      children: "SO_LINGER Behavior"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "l_onoff"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "l_linger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "close() Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(ignored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default: close returns immediately, kernel tries to deliver pending data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard abort"
            }), ": RST sent, data discarded, no TIME_WAIT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Graceful timeout"
            }), ": close blocks up to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "l_linger"
            }), " seconds for data delivery, then RST"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "struct linger l;\nl.l_onoff = 1;   // Enable linger\nl.l_linger = 10; // Wait 10 seconds for pending data to be sent\nsetsockopt(fd, SOL_SOCKET, SO_LINGER, &l, sizeof(l));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c--socket-options-utility",
      children: "C++ → Socket Options Utility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <netinet/tcp.h>\n\nclass SocketConfig {\npublic:\n    static void set_reuseaddr(int fd, bool enable = true) {\n        int opt = enable ? 1 : 0;\n        setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n    }\n\n    static void set_reuseport(int fd, bool enable = true) {\n        int opt = enable ? 1 : 0;\n        setsockopt(fd, SOL_SOCKET, SO_REUSEPORT, &opt, sizeof(opt));\n    }\n\n    static void set_tcp_nodelay(int fd, bool enable = true) {\n        int opt = enable ? 1 : 0;\n        setsockopt(fd, IPPROTO_TCP, TCP_NODELAY, &opt, sizeof(opt));\n    }\n\n    static void set_keepalive(int fd, int idle_sec = 60,\n                              int interval_sec = 10, int count = 5) {\n        int opt = 1;\n        setsockopt(fd, SOL_SOCKET, SO_KEEPALIVE, &opt, sizeof(opt));\n        setsockopt(fd, IPPROTO_TCP, TCP_KEEPIDLE, &idle_sec, sizeof(idle_sec));\n        setsockopt(fd, IPPROTO_TCP, TCP_KEEPINTVL, &interval_sec, sizeof(interval_sec));\n        setsockopt(fd, IPPROTO_TCP, TCP_KEEPCNT, &count, sizeof(count));\n    }\n\n    static void set_recv_buffer(int fd, int size_bytes) {\n        setsockopt(fd, SOL_SOCKET, SO_RCVBUF, &size_bytes, sizeof(size_bytes));\n    }\n\n    static bool get_tcp_info(int fd) {\n        int rcvbuf = 0, sndbuf = 0;\n        socklen_t len = sizeof(rcvbuf);\n        getsockopt(fd, SOL_SOCKET, SO_RCVBUF, &rcvbuf, &len);\n        getsockopt(fd, SOL_SOCKET, SO_SNDBUF, &sndbuf, &len);\n        std::cout << \"RCV: \" << rcvbuf/2 << \" bytes, SND: \" << sndbuf/2 << \" bytes\" << std::endl;\n        return true;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--socket-options",
      children: "Edge Cases → Socket Options"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SO_REUSEADDR on client"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually not needed; may cause unexpected behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SO_REUSEPORT security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple processes binding same port → ensure trust boundary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP_NODELAY + small writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can increase overhead (more packets sent) → use Nagle for bulk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SO_RCVBUF doubling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel internally doubles the requested value (for overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SO_SNDBUF too large"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes memory; no benefit beyond BDP (Bandwidth-Delay Product)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KEEPALIVE not guaranteed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keepalive probes can be lost; it's a \"dead connection\" hint, not guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "getsockopt on closed socket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EBADF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "139-comparison-tables",
      children: "13.9 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp-vs-udp-sockets",
      children: "TCP vs UDP Sockets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP (SOCK_STREAM)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UDP (SOCK_DGRAM)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented (handshake needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectionless (send and pray)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable: ACKs, retransmission, sequence numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreliable: no ACKs, no retransmission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-order delivery guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-order possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data boundary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream (no message boundaries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message-oriented (preserves datagram boundaries)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flow control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window (prevents receiver overflow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (may overflow receiver)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Congestion control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIMD, CUBIC, BBR (adapts to network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (will saturate link)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Headers overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 bytes (TCP) + 20 bytes (IP) = 40 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (UDP) + 20 bytes (IP) = 28 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handshake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-way handshake (1 RTT before data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (0 RTT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State in kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significant: send/recv buffers, timers, seq numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal: just the socket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max payload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limit (streamed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65507 bytes (65KB - UDP header - IP header)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broadcast/Multicast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, HTTPS, SSH, FTP, SMTP, WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, DHCP, VoIP, Video streaming, Gaming, QUIC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Socket API"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "socket/bind/listen/accept/connect/recv/send"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "socket/bind/sendto/recvfrom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower throughput (congestion control overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher throughput, lower latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Firewall behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to track state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectionless, harder to filter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blocking-vs-non-blocking-comparison",
      children: "Blocking vs Non-blocking Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-blocking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threads needed for N connections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 thread (with multiplexing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU while waiting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0% (thread parked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near 0% (with multiplexing) or high (busy poll)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex, state-machine per connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Per-request latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (immediate wakeup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly higher (system call + epoll overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "read/write semantics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns when complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns partial; must check EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8MB per thread (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1KB per connection (state struct)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "accept behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until client arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1/EAGAIN if no client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "connect behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until handshake done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1/EINPROGRESS; check with poll"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suitable for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low concurrency (< 100), simple servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High concurrency (10k+), event-driven servers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stream-vs-datagram-vs-raw-sockets",
      children: "Stream vs Datagram vs Raw Sockets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SOCK_STREAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SOCK_DGRAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SOCK_RAW"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (typically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (typically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP, custom, or any IP protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream (no boundaries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messages (preserves boundaries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw packets (application builds headers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header construction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel handles all headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel handles IP + UDP headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application builds everything"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privileges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root / CAP_NET_RAW required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SSH, databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, media streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ping, traceroute, packet crafting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel assistance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (routing, congestion, retransmit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (IP routing only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (IP routing only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on implementation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "io-multiplexing-comparison",
      children: "I/O Multiplexing Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "select"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "poll"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "epoll"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "kqueue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Platform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX (all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX (all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux (2.5.44+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BSD, macOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max FDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 (hard limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limit (soft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scan cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) → check all FDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) → check all FDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) → only ready events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) → only ready events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Re-init cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (rebuild bitmask)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (rebuild array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (registered once)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (registered once)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge-triggered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (EPOLLET)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (EV_CLEAR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-socket events"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "signalfd, eventfd, timerfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files, signals, processes, timers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (wakeup via EFD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1310-interview-corner",
      children: "13.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-epoll-vs-select--whats-the-fundamental-difference",
      children: "Q1: epoll vs select → what's the fundamental difference?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": select uses O(n) bitmap scanning → every call iterates all n file descriptors to find which are ready. epoll uses O(1) event notification → descriptors are registered once, and when events occur, they're added to an internal ready list. epoll_wait copies only k ready events (k << n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "select:  register + wait + scan(n)   → O(n) per iteration\nepoll:   register once                → O(1) per iteration\n         wait + copy(k)               → O(k) per iteration\n\nAt n=10,000:\n  select scans 10,000 bits → 10,000 checks\n  epoll checks 10 ready events → 10 checks\n\nSpeedup: ~1000x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-c10k-problem",
      children: "Q2: What is the C10K problem?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The C10K problem (10,000 concurrent clients) was identified by Dan Kegel in 1999. The issue is that traditional thread-per-connection or process-per-connection servers can't handle 10,000 clients because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each thread consumes ~8MB of stack → 10,000 threads = 80GB RAM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context switching 10,000 threads causes massive overhead."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "select() is limited to 1024 FDs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Event-driven architecture with epoll/kqueue + non-blocking I/O + small state per connection (~1KB). Modern servers (Nginx, HAProxy, Redis) handle 100k-1M concurrent connections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Thread-per-connection:  10,000 clients × 8MB stack = 80GB  ✗\nEvent-driven epoll:     10,000 clients × 1KB state = 10MB  ✓\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-time_wait-and-so_reuseaddr",
      children: "Q3: TIME_WAIT and SO_REUSEADDR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why does TIME_WAIT exist?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TIME_WAIT (2 * MSL ≈ 60 seconds) prevents two problems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delayed segments"
        }), ": A packet from a closed connection arriving at a new connection with the same IP:port."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliable FIN"
        }), ": The final ACK might be lost; the server retransmits FIN, and TIME_WAIT ensures the client can ACK again."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why SO_REUSEADDR?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without SO_REUSEADDR, if a server crashes and restarts within TIME_WAIT, bind() fails with EADDRINUSE. SO_REUSEADDR allows the new process to bind the same port immediately."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int opt = 1;\nsetsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));\n// Now bind() succeeds even if previous instance is in TIME_WAIT\nbind(server_fd, ...);  // Won't fail with EADDRINUSE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caution"
      }), ": SO_REUSEADDR on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "client"
      }), " socket can cause unexpected behavior → multiple clients may bind the same ephemeral port."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-nagles-algorithm",
      children: "Q4: What is Nagle's algorithm?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Nagle's algorithm (RFC 896, 1984) delays small TCP writes to coalesce them into larger segments. It holds data until:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The outstanding ACK arrives, OR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The buffer accumulates MSS (Maximum Segment Size) bytes of data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Without Nagle (TCP_NODELAY = 1):\n  send(\"H\") → send(\"e\") → send(\"l\") → send(\"l\") → send(\"o\")\n  5 packets, 5 headers, huge overhead\n\nWith Nagle (default):\n  send(\"H\") → [wait for ACK] → send(\"ello\")\n  2 packets, much more efficient\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to disable Nagle"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interactive applications (SSH, telnet, online games)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP API servers with small request bodies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time applications (VoIP, videoconferencing)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to keep Nagle"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bulk file transfers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Streaming large responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any application where latency isn't critical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-happens-when-you-write-to-a-closed-connection",
      children: "Q5: What happens when you write to a closed connection?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Two scenarios:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Server closed gracefully"
          }), ": TCP FIN received. First write succeeds (data buffered), second write causes SIGPIPE (or EPIPE if SIGPIPE is ignored)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Server crashed (no FIN)"
          }), ": Write succeeds until the send buffer fills up. Eventually TCP retransmissions fail, RST is sent, and subsequent reads/writes get ECONNRESET."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "signal(SIGPIPE, SIG_IGN);  // Prevent SIGPIPE from killing the process\n// Now send() returns -1 with errno = EPIPE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-difference-between-eagain-and-ewouldblock",
      children: "Q6: What is the difference between EAGAIN and EWOULDBLOCK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": On most modern systems, they are the same value (11 on Linux). The POSIX standard allows them to be distinct, but in practice they are identical. Always check for both:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (errno == EAGAIN || errno == EWOULDBLOCK) {\n    // Would block; try again later\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-does-the-kernel-implement-epoll-internally",
      children: "Q7: How does the kernel implement epoll internally?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": epoll uses two key data structures:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Red-Black Tree"
        }), " → Stores all registered file descriptors (for O(log n) add/remove/modify)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ready List"
        }), " (doubly linked list) → Contains only descriptors with pending events."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "epoll_ctl(ADD, fd) → Insert into RB-tree\nData arrives on fd → Callback: add fd to ready list, wake epoll_wait\nepoll_wait()       → Copy ready list to user space, return count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The callback mechanism makes it O(1): only descriptors with events are examined."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1311-applications-in-real-systems",
      children: "13.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nginx-epoll-kqueue-event-ports",
      children: "Nginx (epoll, kqueue, event ports)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nginx is the premier example of event-driven architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "epoll"
        }), " on Linux, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kqueue"
        }), " on BSD/macOS, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "event ports"
        }), " on Solaris."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each worker process runs a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single-threaded event loop"
        }), " handling thousands of connections."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No threads per connection → state machines for each HTTP request."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Achieves ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "500k+ concurrent connections"
        }), " on a single server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Nginx Architecture:\n                    Master Process (config, signals)\n                     /    |     |     \\\n              Worker1  Worker2  ...  WorkerN\n                |         |              |\n             epoll     epoll          epoll\n             (10k)     (10k)          (10k)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodejs-libuv",
      children: "Node.js (libuv)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node.js uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "libuv"
      }), ", a cross-platform async I/O library:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux"
        }), ": epoll (level-triggered)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS"
        }), ": kqueue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows"
        }), ": IOCP (I/O Completion Ports)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All JavaScript runs on a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single thread"
        }), " with an event loop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["I/O operations are delegated to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thread pool"
        }), " (4 threads by default) or the kernel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node.js Event Loop:\n                   ┌─────────────────┐\n                   │   timers        │ ← setTimeout, setInterval\n                   │   pending cb    │ ← I/O callbacks\n                   │   idle/prepare  │ ← internal\n            ────── │   poll          │ ← epoll_wait / kqueue / IOCP\n           │       │   check         │ ← setImmediate\n           │       │   close cb      │ ← close events\n           │       └─────────────────┘\n           │               │\n           └───────────────┘ (loop forever)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "haproxy-epoll-kqueue-splice",
      children: "HAProxy (epoll, kqueue, splice)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAProxy is a high-performance TCP/HTTP proxy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "epoll"
        }), " with edge-triggered mode for maximum performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "splice()"
        }), " for zero-copy data forwarding (avoids user-space copy)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection pooling reduces overhead."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can handle ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "100k-1M concurrent connections"
        }), " on commodity hardware."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HAProxy Data Path:\nClient → epoll_wait → recv(client) → splice → send(server)\nServer → epoll_wait → recv(server) → splice → send(client)\n\nZero-copy: data never touches user space on the proxy.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-epollkqueue--single-threaded-event-loop",
      children: "Redis (epoll/kqueue + single-threaded event loop)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Redis uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single-threaded event loop"
      }), " with epoll/kqueue:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All commands execute on one thread → no locking overhead."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-blocking I/O for all network operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event loop handles thousands of client connections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100k+ QPS on a single core."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Redis Event Loop:\nwhile (1) {\n    aeApiPoll(tvlp);        // epoll_wait → collect ready events\n    processFileEvents();     // Read/write client data\n    processTimeEvents();     // Timers: expire keys, BLPOP timeout\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apache-vs-nginx--architecture-comparison",
      children: "Apache vs Nginx → Architecture Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Apache (prefork)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Apache (worker)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nginx"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process-per-connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-per-connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking + epoll"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory per conn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8MB (process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1MB (thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1KB (state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max concurrent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500,000+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loaded per process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loaded per thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loaded per worker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Keep-alive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One process held"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One thread held"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One state (~1KB) held"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "libevent--libev--libuv--library-comparison",
      children: "libevent / libev / libuv → Library Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used By"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "libevent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select/poll/epoll/kqueue/IOCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memcached, Tor, tmux"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "libev"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select/poll/epoll/kqueue/port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GNU gettext, some embedded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "libuv"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epoll/kqueue/IOCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node.js, Julia, Luvit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always ignore SIGPIPE"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signal(SIGPIPE, SIG_IGN);"
        }), " Prevents your server from dying when writing to a closed socket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use SO_REUSEADDR on all TCP servers"
        }), ": Allows immediate restart without waiting for TIME_WAIT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epoll edge-triggered + non-blocking = power"
        }), ": But you MUST loop on recv/send until EAGAIN. Otherwise you miss data and deadlock."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nagle kills interactive latency"
        }), ": Set TCP_NODELAY for HTTP APIs, SSH, games. Keep it for bulk transfers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer management matters"
        }), ": For high-throughput, pre-allocate buffers per connection to avoid malloc overhead in the hot path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial reads are the rule, not the exception"
        }), ": Always loop on recv/send."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use SOCK_NONBLOCK at creation"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "socket(AF_INET, SOCK_STREAM | SOCK_NONBLOCK | SOCK_CLOEXEC, 0)"
        }), " to avoid races."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Don't use select() in new code"
        }), ": It's limited, slow, and obsolete. Use epoll or poll (but poll also scans O(n))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unix domain sockets for local IPC"
        }), ": 3-10x faster than TCP loopback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epoll_wait can be woken with eventfd"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eventfd()"
        }), " to inject work into the event loop from other threads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-socket-state-machine",
      children: "Quick Reference: Socket State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TCP Server:\nCLOSED → socket() → bind() → listen() → LISTEN → accept() → ESTABLISHED\n                                                              ↓\n                                                        recv/send loop\n                                                              ↓\n                                                        close() → TIME_WAIT → CLOSED\n\nTCP Client:\nCLOSED → socket() → connect() → SYN_SENT → ESTABLISHED → recv/send loop → FIN_WAIT\n                                                                           ↓\n                                                                     TIME_WAIT → CLOSED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-socket-api-call-comparison-tcp-vs-udp",
      children: "Mermaid Diagram: Socket API Call Comparison (TCP vs UDP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n  subgraph TCP[\"TCP Socket Lifecycle\"]\n    direction TB\n    TCP_SOCK[\"socket(AF_INET, SOCK_STREAM, 0)\"]\n    TCP_BIND[\"bind(ip, port)\"]\n    TCP_LISTEN[\"listen(backlog)\"]\n    TCP_CONN[\"connect(server)\"]\n    TCP_ACCEPT[\"accept() → new fd\"]\n    TCP_SEND[\"send(data)\"]\n    TCP_RECV[\"recv(buf)\"]\n    TCP_CLOSE[\"close() → FIN\"]\n\n    TCP_SERV[\"SERVER:\"] --> TCP_SOCK --> TCP_BIND --> TCP_LISTEN\n    TCP_LISTEN --> TCP_ACCEPT --> TCP_RECV --> TCP_SEND --> TCP_CLOSE\n    TCP_CLIENT[\"CLIENT:\"] --> TCP_SOCK --> TCP_CONN --> TCP_SEND\n    TCP_SEND2[\"send(data)\"] --> TCP_RECV2[\"recv(buf)\"] --> TCP_CLOSE2[\"close()\"]\n    TCP_CONN -.->|SYN/SYN-ACK/ACK| TCP_ACCEPT\n  end\n\n  subgraph UDP[\"UDP Socket Lifecycle\"]\n    direction TB\n    UDP_SOCK[\"socket(AF_INET, SOCK_DGRAM, 0)\"]\n    UDP_BIND[\"bind(ip, port)\"]\n    UDP_SENDTO[\"sendto(data, addr)\"]\n    UDP_RECVFROM[\"recvfrom(buf)\"]\n    UDP_CLOSE[\"close()\"]\n\n    UDP_SERV[\"SERVER:\"] --> UDP_SOCK --> UDP_BIND\n    UDP_BIND --> UDP_RECVFROM --> UDP_SENDTO --> UDP_CLOSE\n    UDP_CLIENT[\"CLIENT:\"] --> UDP_SOCK2[\"socket()\"]\n    UDP_SOCK2 --> UDP_SENDTO2[\"sendto(data)\"] --> UDP_RECVFROM2[\"recvfrom(buf)\"] --> UDP_CLOSE2[\"close()\"]\n  end\n\n  TCP -.->|\"Reliable, Ordered, Connection-oriented\"| UDP\n  TCP_SEND -.->|\"Byte stream (no boundaries)\"| TCP_RECV\n  UDP_SENDTO -.->|\"Datagrams (message boundaries preserved)\"| UDP_RECVFROM\n\n  classDef tcp fill:#d5f5e3,stroke:#27ae60,stroke-width:2px\n  classDef udp fill:#d4e6f1,stroke:#2980b9,stroke-width:2px\n  classDef label fill:#fef9e7,stroke:#f1c40f,stroke-dasharray: 5 5\n  class TCP_SOCK,TCP_BIND,TCP_LISTEN,TCP_ACCEPT,TCP_CONN,TCP_SEND,TCP_RECV,TCP_CLOSE,TCP_SEND2,TCP_RECV2,TCP_CLOSE2 tcp\n  class UDP_SOCK,UDP_BIND,UDP_SENDTO,UDP_RECVFROM,UDP_CLOSE,UDP_SOCK2,UDP_SENDTO2,UDP_RECVFROM2,UDP_CLOSE2 udp\n  class TCP,TCP_SERV,TCP_CLIENT,UDP,UDP_SERV,UDP_CLIENT label\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-building-a-chat-server-for-100k-concurrent-users",
      children: "Case Study: Building a Chat Server for 100K Concurrent Users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem."
      }), " A startup building a real-time group chat application needed to support 100,000 concurrent users on a single server cluster with sub-100ms message delivery latency. Initial prototypes using a thread-per-connection model (one thread per client) failed at 2,000 connections due to memory exhaustion (~8 MB per thread stack = 16 GB for 2,000) and context-switching overhead. The server needed to handle chat message broadcast to groups of up to 10,000 users with reliable delivery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution."
      }), " The team redesigned the server using an event-driven architecture on Linux with epoll (edge-triggered). Key design decisions: (1) A single event loop per CPU core (4 worker processes) using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SO_REUSEPORT"
      }), " to distribute incoming connections across workers. (2) Each connection consumed ~2 KB of application state (as opposed to 8 MB per thread), enabling 50,000 connections per worker. (3) The epoll event loop used edge-triggered mode with non-blocking sockets — all reads looped until ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EAGAIN"
      }), ", and writes were buffered per connection with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EPOLLOUT"
      }), " registered only when data was pending. (4) Message broadcast used a lock-free ring buffer per worker: a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send()"
      }), " call per recipient was batched into 64 KB chunks to amortize system call overhead. (5) Connection management included a 60-second heartbeat with lazy cleanup — connections idle for >120 seconds were closed without scanning the full connection table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome."
      }), " The final server handled 50,000 concurrent connections per node (4 nodes for 200K capacity) at under 5% CPU utilization. Message delivery latency averaged 15 ms p99 across all group sizes. Memory per connection was 2.5 KB (state + send buffer), totaling ~125 MB per node at 50K connections — a 3,200x improvement over the thread-per-connection model. The system went on to power chat for 2 million daily active users."]
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
            children: "Event-driven architecture (epoll/kqueue) is essential for C10K+ concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use edge-triggered epoll with non-blocking I/O; never use thread-per-connection beyond 100 clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per connection determines maximum concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design connection state to be ~2-4 KB; avoid per-connection thread stacks (8 MB each)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch system calls to amortize overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accumulate data into 64 KB buffers before send(); use writev() for scatter-gather"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-triggered epoll requires careful loop logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always loop on recv() until EAGAIN; register EPOLLOUT only when write buffer is non-empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection cleanup must be O(1), not O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a timeout wheel (hierarchical timer wheel) instead of scanning all connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU scaling through SO_REUSEPORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind multiple worker processes to the same port; each handles a subset of connections via kernel load balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always plan for partial reads and writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer all I/O; never assume a single recv() or send() completes the full operation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which system call is used by a TCP server to wait for incoming client connections?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) connect()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) accept()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) recvfrom()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) listen()"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the key advantage of epoll over select() for high-concurrency servers?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) epoll is available on all operating systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) epoll returns only the ready file descriptors, avoiding O(n) scanning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) epoll supports UDP sockets while select does not"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) epoll automatically handles TLS encryption"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In edge-triggered epoll mode, what must a server do after receiving an EPOLLIN event?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Read exactly 1024 bytes and stop"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Loop on recv() until it returns EAGAIN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Immediately close the connection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Switch to level-triggered mode"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What error does a non-blocking send() return when the kernel send buffer is full?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) EPIPE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) ECONNRESET"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) EAGAIN / EWOULDBLOCK"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) EINTR"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why does UDP not have a listen() or accept() system call?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) UDP is connectionless — there is no connection to establish"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) UDP is only used for multicast"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) UDP requires raw socket access"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) UDP uses connect() instead"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP servers call accept() to dequeue the next completed connection from the listen backlog, returning a new file descriptor for the client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select() scans all n file descriptors (O(n)); epoll returns only the k ready descriptors (O(k)), essential at 10K+ scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In edge-triggered mode, events are delivered only when the state changes; the application must read until EAGAIN or risk missing data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAGAIN (or EWOULDBLOCK) indicates the operation would block; for non-blocking sockets, the kernel returns immediately instead of blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP is connectionless — datagrams are sent directly to the destination without establishing a connection, so no listen/accept is needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Socket programming provides the interface between applications and the transport layer. TCP sockets (SOCK_STREAM) offer reliable, connection-oriented byte streams following the socket → bind → listen → accept (server) and socket → connect (client) pattern. UDP sockets (SOCK_DGRAM) provide connectionless datagram communication using sendto/recvfrom."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For concurrent servers, I/O multiplexing with select, poll, or epoll enables a single thread to manage thousands of connections. epoll (Linux) and kqueue (BSD) scale to millions of connections with O(1) event notification → essential for solving the C10K problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Socket options like SO_REUSEADDR, TCP_NODELAY, and SO_KEEPALIVE tune behavior for specific workloads. Raw sockets give complete control over packet construction (ICMP ping, packet crafting). Unix domain sockets provide fast local IPC."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world systems like Nginx, Node.js (libuv), HAProxy, and Redis all use event-driven architectures with epoll/kqueue to achieve massive concurrency on modest hardware."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP Server:"
            }), " CLOSED → socket() → bind() → listen() → LISTEN → accept() → ESTABLISHED → recv/send loop → close() → TIME_WAIT → CLOSED. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP Client:"
            }), " CLOSED → socket() → connect() → SYN_SENT → ESTABLISHED → recv/send loop → close() → FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED. The server uses passive open (listen → accept); the client uses active open (connect). Both end in TIME_WAIT (2×MSL ≈ 60s) on the side that sends the first FIN."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Level-triggered (LT):"
            }), " The event fires as long as data exists. If you don't read all data, epoll_wait returns again immediately. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge-triggered (ET):"
            }), " The event fires once when the state changes from empty to non-empty. If you miss data, you don't get another event until new data arrives. Use LT for simplicity (e.g., Redis) — tolerant of partial reads. Use ET for maximum performance (e.g., Nginx) — requires looping to EAGAIN but reduces epoll_wait calls."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "UDP is faster because: (a) No connection handshake — sendto() sends immediately without SYN/SYN-ACK/ACK. (b) No congestion control — no window adjustments, no RTT tracking, no AIMD. (c) No retransmission timers — lost datagrams are not retransmitted by the kernel. (d) Smaller header overhead — 8 bytes vs TCP's 20+ bytes."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "C10K is the problem of handling 10,000 concurrent clients. Thread-per-connection fails because 10,000 threads × 8 MB stack = 80 GB. epoll solves it with O(1) event notification: a single thread polls for readiness and handles only active connections. Each connection requires ~1-4 KB state instead of 8 MB."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "TIME_WAIT prevents: (a) delayed segments from a closed connection being misinterpreted by a new connection on the same IP:port, and (b) the final ACK being lost (the server retransmits FIN, and TIME_WAIT allows re-ACKing). Duration = 2×MSL ≈ 60 seconds. SO_REUSEADDR allows a new process to bind to a port in TIME_WAIT, which is essential for fast server restart after crash."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "6",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "select-based chat server (Python):"
            }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "select.select()"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inputs"
            }), " list (server + clients). On readable events: if server, accept and add to inputs; if client, recv and broadcast to all other clients. Track client addresses for display. Handle disconnection by removing from inputs. See section 13.5.1 for the full Python implementation."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP vs Unix throughput comparison:"
            }), " Create two echo servers (one TCP on 127.0.0.1:PORT, one Unix on /tmp/bench.sock). Measure time to send 100 MB in 1 KB chunks. Results typically show Unix domain sockets 3-10× faster (no protocol stack, no checksums, no routing). TCP = ~45 µs/RTT; Unix = ~8 µs/RTT for localhost."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "epoll echo server (C++):"
            }), " See section 13.5.3 for the full implementation. Key design: non-blocking sockets, EPOLLET | EPOLLIN, accept loop until EAGAIN, recv loop until EAGAIN, per-connection buffer for partial reads, SIGINT handler calling close(), per-connection byte counter updated after each successful recv."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "9",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP reverse proxy with epoll:"
          }), " Architecture — main event loop calls epoll_wait, handles server_fd (accept, add client to epoll), client_fd (read request, connect to backend, add backend to epoll), backend_fd (read response, forward to client). Key structures: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unordered_map<int, Conn> conns"
          }), " where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Conn { int client_fd, backend_fd; string rbuf, wbuf; bool headers_sent; }"
          }), ". For EPOLLOUT: only register when wbuf non-empty; after write, if data remains, keep EPOLLOUT; if empty, remove EPOLLOUT. For EPOLLIN: read into rbuf; if HTTP request complete, parse method/path, create backend connection, forward request. For HTTP/1.1 keep-alive, after response is fully sent, keep connection open and reset state for next request. For graceful shutdown, maintain a list of active connections; on SIGINT, stop accepting new connections, drain pending writes, then close."]
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