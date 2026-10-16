"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7942],{

/***/ 1993
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_19_keystroke_to_response_md_b52_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-19-keystroke-to-response-md-b52.json
const site_docs_courses_computer_networks_19_keystroke_to_response_md_b52_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/19-keystroke-to-response","title":"Chapter 19: From Keystroke to Response — How the OS and Network Work Together","description":"GFG/Javatpoint Depth — Processes vs threads, the syscall boundary, file descriptors, sockets, the three-way handshake, DNS, routing, accept/fork, latency budgets, and where user space ends","source":"@site/docs/courses/computer-networks/19-keystroke-to-response.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/19-keystroke-to-response","permalink":"/ai-engineering-journey/computer-networks/19-keystroke-to-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"19-keystroke-to-response","slug":"/computer-networks/19-keystroke-to-response","title":"Chapter 19: From Keystroke to Response — How the OS and Network Work Together","sidebar_label":"Chapter 19: From Keystroke to Response","sidebar_position":19},"sidebar":"course-computer-networks","previous":{"title":"Chapter 18: Modern Networking → Complete Reference","permalink":"/ai-engineering-journey/computer-networks/18-modern"},"next":{"title":"Computer Networks — Complete Course Textbook","permalink":"/ai-engineering-journey/computer-networks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/computer-networks/19-keystroke-to-response.md


const frontMatter = {
	id: '19-keystroke-to-response',
	slug: '/computer-networks/19-keystroke-to-response',
	title: 'Chapter 19: From Keystroke to Response — How the OS and Network Work Together',
	sidebar_label: 'Chapter 19: From Keystroke to Response',
	sidebar_position: 19
};
const contentTitle = 'Chapter 19: From Keystroke to Response — How the OS and Network Work Together';

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
  "value": "19.1 Two Machines, One Abstraction Stack",
  "id": "191-two-machines-one-abstraction-stack",
  "level": 2
}, {
  "value": "19.2 Keystroke to Process — Interrupt, Handler, Scheduler",
  "id": "192-keystroke-to-process--interrupt-handler-scheduler",
  "level": 2
}, {
  "value": "19.3 The System Call Boundary",
  "id": "193-the-system-call-boundary",
  "level": 2
}, {
  "value": "19.4 A Socket Is a Kernel Object Wearing a File Descriptor",
  "id": "194-a-socket-is-a-kernel-object-wearing-a-file-descriptor",
  "level": 2
}, {
  "value": "19.5 Connection Establishment — The Three-Way Handshake",
  "id": "195-connection-establishment--the-three-way-handshake",
  "level": 2
}, {
  "value": "19.6 DNS — Turning a Name into an Address",
  "id": "196-dns--turning-a-name-into-an-address",
  "level": 2
}, {
  "value": "19.7 Routing — Getting There",
  "id": "197-routing--getting-there",
  "level": 2
}, {
  "value": "19.8 The Server Side — Accept, Fork, Serve",
  "id": "198-the-server-side--accept-fork-serve",
  "level": 2
}, {
  "value": "19.9 The Response Path — Coming Back",
  "id": "199-the-response-path--coming-back",
  "level": 2
}, {
  "value": "19.10 Where the Boundaries Blur",
  "id": "1910-where-the-boundaries-blur",
  "level": 2
}, {
  "value": "19.11 When It Breaks — Latency, Blocking, Failure Modes",
  "id": "1911-when-it-breaks--latency-blocking-failure-modes",
  "level": 2
}, {
  "value": "19.12 Comparison Tables",
  "id": "1912-comparison-tables",
  "level": 2
}, {
  "value": "19.13 Interview Corner",
  "id": "1913-interview-corner",
  "level": 2
}, {
  "value": "19.14 Applications in Real Systems",
  "id": "1914-applications-in-real-systems",
  "level": 2
}, {
  "value": "19.15 Pro Tips",
  "id": "1915-pro-tips",
  "level": 2
}, {
  "value": "19.16 Chapter Quiz",
  "id": "1916-chapter-quiz",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "19.17 Summary",
  "id": "1917-summary",
  "level": 2
}, {
  "value": "19.18 Exercises",
  "id": "1918-exercises",
  "level": 2
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
        id: "chapter-19-from-keystroke-to-response--how-the-os-and-network-work-together",
        children: "Chapter 19: From Keystroke to Response — How the OS and Network Work Together"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GFG/Javatpoint Depth — Processes vs threads, the syscall boundary, file descriptors, sockets, the three-way handshake, DNS, routing, accept/fork, latency budgets, and where user space ends"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace a single HTTP request from a keypress to a rendered response, naming the OS and network mechanism at each hop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the syscall boundary: what crosses from user space to kernel space, and what the return path costs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe a socket as a kernel object surfaced to a process as a file descriptor, and predict what happens when a descriptor is leaked."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account for every millisecond of a request's latency: DNS, handshake, congestion window, server queueing, and transfer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish a function call from a syscall, and a thread from a process, in terms of what the kernel must do for each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose a slow or hung request by locating which stage of the pipeline is responsible."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagram note:"
        }), " the four Mermaid diagrams in this chapter are the visual source. The\nraster asset for this chapter has not been generated yet; run the repo's diagram pipeline\nto produce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assets/images/diagrams/computer-networks/ch19-keystroke-to-response.png"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#191-two-machines-one-abstraction-stack",
          children: "19.1 Two Machines, One Abstraction Stack"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#192-keystroke-to-process--interrupt-handler-scheduler",
          children: "19.2 Keystroke to Process — Interrupt, Handler, Scheduler"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#193-the-system-call-boundary",
          children: "19.3 The System Call Boundary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#194-a-socket-is-a-kernel-object-wearing-a-file-descriptor",
          children: "19.4 A Socket Is a Kernel Object Wearing a File Descriptor"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#195-connection-establishment--the-three-way-handshake",
          children: "19.5 Connection Establishment — The Three-Way Handshake"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#196-dns--turning-a-name-into-an-address",
          children: "19.6 DNS — Turning a Name into an Address"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#197-routing--getting-there",
          children: "19.7 Routing — Getting There"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#198-the-server-side--accept-fork-serve",
          children: "19.8 The Server Side — Accept, Fork, Serve"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#199-the-response-path--coming-back",
          children: "19.9 The Response Path — Coming Back"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1910-where-the-boundaries-blur",
          children: "19.10 Where the Boundaries Blur"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1911-when-it-breaks--latency-blocking-failure-modes",
          children: "19.11 When It Breaks — Latency, Blocking, Failure Modes"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1912-comparison-tables",
          children: "19.12 Comparison Tables"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1913-interview-corner",
          children: "19.13 Interview Corner"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1914-applications-in-real-systems",
          children: "19.14 Applications in Real Systems"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1915-pro-tips",
          children: "19.15 Pro Tips"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1916-chapter-quiz",
          children: "19.16 Chapter Quiz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#practical-takeaways",
          children: "Practical Takeaways"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1917-summary",
          children: "19.17 Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1918-exercises",
          children: "19.18 Exercises"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "191-two-machines-one-abstraction-stack",
      children: "19.1 Two Machines, One Abstraction Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A web request looks like one thing: you press a key, a page appears. It is actually two independent machines agreeing on a story, and every step of that story belongs to either an operating system or a network protocol."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The useful framing is that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your machine runs a program, and the OS is what lets that program use the network at all"
      }), ". There is no networking inside a language runtime. When a TypeScript program writes to a socket, the runtime eventually asks the kernel to do it. The OS and the network stack are not two optional topics that meet occasionally; they are one continuous mechanism seen from two ends."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Client[\"Client machine\"]\n        A[Keypress] --> B[Kernel input driver]\n        B --> C[Process: HTTP client]\n        C --> D[Syscall: send]\n        D --> E[Kernel: TCP/IP stack]\n        E --> F[NIC]\n    end\n    subgraph Wire[\"The network\"]\n        F --> G[Switches and routers]\n    end\n    subgraph Server[\"Server machine\"]\n        H[NIC] --> I[Kernel: TCP/IP stack]\n        I --> J[Accepted socket]\n        J --> K[Server process]\n        K --> L[Response bytes]\n        L --> I\n        I --> H\n    end\n    G --> H\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read that diagram as a single causal chain. Every arrow is a hand-off between two components that do not share memory, or between a process and the kernel. The hand-offs are where time is spent and where failures happen."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The central idea of this chapter:"
      }), " a network call is a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "sequence"
      }), " of kernel operations, and each one costs something measurable. Performance work on the network is really syscall work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "192-keystroke-to-process--interrupt-handler-scheduler",
      children: "19.2 Keystroke to Process — Interrupt, Handler, Scheduler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The request does not begin when your code calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fetch"
      }), ". It begins at the keyboard, and the path from there is entirely operating-system work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The keyboard controller raises an interrupt."
        }), " This is a hardware signal on a dedicated line. It does not carry the key value itself; it says only \"something happened\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The CPU takes the interrupt."
        }), " Because an interrupt is higher priority than whatever the CPU was doing, the current instruction finishes and then control transfers to the kernel's interrupt handler. This is a ", (0,jsx_runtime.jsx)(_components.em, {
          children: "mode switch"
        }), " from user space into kernel space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The handler reads the device."
        }), " The driver reads the keyboard controller's register to learn which key was pressed and writes the scancode into a buffer maintained by the kernel, commonly a ring buffer, because the CPU may not service the next interrupt immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The kernel signals the process."
        }), " A thread waiting on that buffer is made runnable. The scheduler may or may not run it right away."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The process reads the character."
        }), " Only now does user-space code call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), " to get the byte."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is why an idle editor can still respond instantly: the CPU is not polling the keyboard in a loop. It is asleep, and the interrupt wakes it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Step 5 in isolation: a process reading from an input source.\n// The interrupt, handler, and scheduler work above happens underneath this.\nimport { readFileSync } from \"node:fs\";\n\nfunction readConfig(path: string): string {\n  // read() is a syscall. The bytes were buffered by the kernel long ago.\n  return readFileSync(path, \"utf8\");\n}\n\nconst raw = readConfig(\"./request.json\");\nconsole.log(`loaded ${raw.length} bytes`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The consequence for network debugging: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "latency before your code runs is not your code's fault."
      }), " If a keystroke takes 200 ms to become a character, look at scheduling and device handling, not at the network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "193-the-system-call-boundary",
      children: "19.3 The System Call Boundary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A syscall is a controlled, documented transition from user space into kernel space. It is not a function call, and the difference is the single most misunderstood thing in systems work."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runs in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user mode → kernel mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trusted code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "untrusted input must be validated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~nanoseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~hundreds of nanoseconds to microseconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mode switch, often register save/restore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can it fail arbitrarily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes: EACCES, ENOMEM, EAGAIN, EINTR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The kernel must validate every argument. A user process can pass any pointer it likes, including one that traps, so the kernel re-derives and bounds-checks the data rather than trusting the caller."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// What a syscall costs, made visible.\n// Every iteration performs real work in the kernel: read() then write().\nimport { openSync, writeSync, closeSync } from \"node:fs\";\n\nfunction writeAll(fd: number, text: string): void {\n  const buf = Buffer.from(text, \"utf8\");\n  let offset = 0;\n  while (offset < buf.length) {\n    // write() is a syscall. It may write fewer bytes than asked.\n    offset += writeSync(fd, buf, offset, buf.length - offset);\n  }\n}\n\nconst fd = openSync(\"./scratch.txt\", \"w\");\nconst t0 = process.hrtime.bigint();\nfor (let i = 0; i < 2000; i++) writeAll(fd, `line ${i}\\n`);\nconst t1 = process.hrtime.bigint();\ncloseSync(fd);\n\nconst perCallNs = Number(t1 - t0) / (2000 * 2);\nconsole.log(`~${(perCallNs / 1000).toFixed(2)} us per syscall (read+write loop)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run it, and you will see the real cost on your machine rather than a number from a textbook. Expect a figure in the low microseconds on Windows and an order of magnitude lower on Linux, because Windows syscall and context-transition overhead is genuinely higher."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this matters for the network:"
      }), " a chatty protocol that issues one syscall per byte pays microseconds per byte. Buffering 1 KB and issuing one syscall costs about the same as 1 byte. This is the single highest-leverage performance rule in networked code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// BAD: one syscall per piece of data\nimport { openSync, writeSync, closeSync } from \"node:fs\";\n\nconst fd = openSync(\"./bad.txt\", \"w\");\nfor (const part of [\"a\", \"b\", \"c\", \"d\"]) {\n  writeSync(fd, part);       // 4 syscalls\n}\ncloseSync(fd);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// GOOD: one syscall for the whole payload\nimport { openSync, writeSync, closeSync } from \"node:fs\";\n\nconst fd = openSync(\"./good.txt\", \"w\");\nwriteSync(fd, \"abcd\");       // 1 syscall\ncloseSync(fd);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "194-a-socket-is-a-kernel-object-wearing-a-file-descriptor",
      children: "19.4 A Socket Is a Kernel Object Wearing a File Descriptor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unix unified three unrelated things behind one abstraction: files, pipes, and sockets. A process refers to each with an integer, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file descriptor"
      }), ". That unification is why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "write"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "close"
      }), " work identically on all three."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The descriptor is an index into the process's descriptor table. The entry points at a kernel object. For a socket, that object is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "struct socket"
      }), " holding the send buffer, receive buffer, sequence numbers, and connection state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    P[Process fd table] -->|index 3| S[socket object]\n    P -->|index 4| F[regular file]\n    P -->|index 5| PIPE[pipe]\n    S --> SB[send buffer]\n    S --> RB[receive buffer]\n    S --> ST[TCP state: ESTABLISHED]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The consequence that bites in production: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a socket is closed when its descriptor is closed, and that can happen by accident."
      }), " If a function returns before closing, the descriptor leaks. Leaked descriptors exhaust the per-process limit, and then new socket calls fail with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMFILE"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Detecting descriptor leaks: count open descriptors before and after work.\nimport { openSync, closeSync, readFileSync, writeSync } from \"node:fs\";\n\nfunction descriptorsOpen(): number {\n  // Linux exposes these under /proc/self/fd; this is a real, checkable signal.\n  try {\n    return readFileSync(\"/proc/self/fd\").toString()\n      .split(\"\\n\")\n      .filter((l) => l.trim() !== \"\").length - 1; // minus the fd used to read\n  } catch {\n    return -1; // not Linux\n  }\n}\n\nfunction leakOnce(n: number): void {\n  // Deliberately not closed, to show the counter climbing.\n  const fd = openSync(`./tmp-leak-${n}.txt`, \"w\");\n  writeSync(fd, \"x\");\n  console.log(`after ${n} unclosed opens: ${descriptorsOpen()} descriptors`);\n}\n\nconst before = descriptorsOpen();\nconsole.log(`baseline: ${before} descriptors`);\nfor (let i = 1; i <= 3; i++) leakOnce(i);\nconsole.log(\"if that number grew by 3, each open leaked one descriptor\");\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The fix is unglamorous: use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try/finally"
      }), ", or let a scoped construct handle it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Correct: the descriptor cannot outlive the block.\nfunction writeSafely(path: string, text: string): void {\n  const fd = openSync(path, \"w\");\n  try {\n    writeSync(fd, text);\n  } finally {\n    closeSync(fd);            // runs even if writeSync throws\n  }\n}\n\nwriteSafely(\"./scoped.txt\", \"committed\");\nconsole.log(\"descriptor closed regardless of outcome\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "195-connection-establishment--the-three-way-handshake",
      children: "19.5 Connection Establishment — The Three-Way Handshake"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP is a connection-oriented, reliable, ordered byte stream. Before any byte of application data moves, both sides agree on starting sequence numbers. That agreement is the three-way handshake, and it is the single largest fixed cost in a short HTTP request."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Client\n    participant S as Server\n    C->>S: SYN (seq=x)\n    Note right of S: SYN/ACK reserves state, no data\n    S-->>C: SYN-ACK (seq=y, ack=x+1)\n    C->>S: ACK (ack=y+1)\n    Note left of C: Connection now ESTABLISHED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two things matter for performance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One full round trip before any data can be sent."
        }), " At 100 ms RTT, that is 100 ms spent before the request even starts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The server allocates state on SYN."
        }), " An attacker who never completes the handshake exhausts that state. This is the mechanism behind SYN flooding, and it is why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tcp_syncookies"
        }), " exists."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Measuring the handshake cost directly: connect() completes the 3-way handshake.\nimport { connect } from \"node:net\";\n\nfunction measureHandshake(host: string, port: number): Promise<number> {\n  return new Promise((resolve, reject) => {\n    const t0 = process.hrtime.bigint();\n    const sock = connect({ host, port }, () => {\n      const t1 = process.hrtime.bigint();\n      console.log(`connected to ${host}:${port}`);\n      sock.end();\n      resolve(Number(t1 - t0));\n    });\n    sock.on(\"error\", reject);\n  });\n}\n\nconst ms = await measureHandshake(\"example.com\", 443);\nconsole.log(`handshake+connect: ${(ms / 1e6).toFixed(1)} ms`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Compare that against a reused connection. On the second connection the handshake is skipped, which is exactly what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "keep-alive"
      }), " buys you."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "196-dns--turning-a-name-into-an-address",
      children: "19.6 DNS — Turning a Name into an Address"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "example.com"
      }), " is not an address. Before any packet can be sent, the name must be resolved. DNS is itself a network protocol, so it can fail, time out, and be slow — a fact that surprises people whose \"network problem\" is really a resolver problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resolution order is worth knowing because it explains most DNS latency:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Browser cache"
        }), " — may be minutes to hours."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS resolver cache"
        }), " — typically seconds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/etc/hosts"
          })
        }), " (or the Windows equivalent) — checked before any query leaves the machine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive resolver"
        }), " — your ISP's or a public one, queried over the network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authoritative nameserver"
        }), " — the source of truth for the zone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Observe the resolver cache directly. This is a real command you can run.\nimport { execFileSync } from \"node:child_process\";\n\nfunction dnsCacheSize(): string {\n  try {\n    // On Windows: ipconfig /displaydns. Output can be large, so count entries.\n    const out = execFileSync(\"ipconfig\", [\"/displaydns\"], { encoding: \"utf8\" });\n    const entries = out.match(/Record Name/g)?.length ?? 0;\n    return `${entries} cached records`;\n  } catch (e) {\n    return `unavailable: ${(e as Error).message}`;\n  }\n}\n\nconsole.log(dnsCacheSize());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run it twice with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fetch"
      }), " in between. The second lookup should be faster, and that gap is the resolver cache doing its job."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequence:"
      }), " a cold resolver cache can add tens or hundreds of milliseconds that have nothing to do with the server. This is why load tests that bypass DNS produce results that never reproduce in production."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "197-routing--getting-there",
      children: "19.7 Routing — Getting There"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the destination address is known, each machine along the path independently decides where to send the packet. No single machine knows the whole route; each hop only knows its next hop."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At every router:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Packet arrives] --> B{TTL > 1?}\n    B -->|no| C[Drop, send ICMP Time Exceeded]\n    B -->|yes| D[Look up longest-prefix match<br/>in routing table]\n    D --> E[Decrement TTL, recompute checksum]\n    E --> F[Send to next hop]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two details cause real outages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL is decremented at every hop."
        }), " When it reaches zero the packet is dropped and an ICMP Time Exceeded is returned. This is why long paths fail even when the address is valid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The checksum must be recomputed"
        }), " because the IP header changed. On hardware-accelerated routers this is free, but on constrained devices it is not."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// The routing decision itself, so the longest-prefix-match rule is concrete.\ntype Route = { prefix: string; mask: string; nextHop: string };\n\nconst routes: Route[] = [\n  { prefix: \"10.0.0.0\",   mask: \"255.0.0.0\",   nextHop: \"gateway-a\" },\n  { prefix: \"10.1.0.0\",   mask: \"255.255.0.0\", nextHop: \"gateway-b\" }, // more specific, wins\n  { prefix: \"0.0.0.0\",    mask: \"0.0.0.0\",    nextHop: \"gateway-default\" },\n];\n\nfunction toInt(ip: string): number {\n  return ip.split(\".\").reduce((acc, o) => ((acc << 8) | Number(o)) >>> 0, 0);\n}\n\nfunction longestPrefixMatch(ip: string): string {\n  const addr = toInt(ip);\n  let best = routes[0];\n  let bestMask = -1;\n  for (const r of routes) {\n    const m = toInt(r.mask);\n    // Host bits must all match under this mask.\n    if (((addr & m) >>> 0) === ((toInt(r.prefix) & m) >>> 0)) {\n      const popcount = m.toString(2).split(\"1\").length - 1;\n      if (popcount > bestMask) { bestMask = popcount; best = r; }\n    }\n  }\n  return best.nextHop;\n}\n\nfor (const ip of [\"10.1.2.3\", \"10.2.2.3\", \"8.8.8.8\"]) {\n  console.log(`${ip} -> ${longestPrefixMatch(ip)}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-console",
        children: "10.1.2.3 -> gateway-b\n10.2.2.3 -> gateway-a\n8.8.8.8 -> gateway-default\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "10.1.2.3"
      }), " goes to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gateway-b"
      }), " because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.1.0.0/16"
      }), " is longer than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.0.0.0/8"
      }), ". This single rule is the whole of IP forwarding, and it is why overlapping routes are such a persistent source of misconfiguration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "198-the-server-side--accept-fork-serve",
      children: "19.8 The Server Side — Accept, Fork, Serve"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The server kernel does the mirror image of the client work. The important part is what it does with a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "completed"
      }), " connection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A listening socket does not serve requests itself. It exists to produce new connected sockets, one per client. The accepted socket is a different kernel object with its own buffers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// A single-process TCP echo server, so the accept loop is visible end to end.\nimport { createServer } from \"node:net\";\n\nconst server = createServer((socket) => {\n  // Runs once per accepted connection, in the same event loop.\n  socket.on(\"data\", (buf) => {\n    socket.write(buf);            // echo\n  });\n  socket.on(\"error\", () => {\n    // A peer that resets mid-write must not kill the server.\n    socket.destroy();\n  });\n});\n\nserver.listen(9000, \"127.0.0.1\", () => {\n  console.log(\"listening on 9000\");\n});\n\n// Run:  node echo.mjs\n// Then:  curl -s --data-binary \"hello\" http://127.0.0.1:9000 --output -\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three real servers use different strategies, and the choice determines what happens under load:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost per connection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fails as"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread per connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shared memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thread stack (~8 MB virtual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thread exhaustion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Process per connection (", (0,jsx_runtime.jsx)(_components.code, {
              children: "fork"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "full isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "whole address space copy-on-write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memory pressure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none, single thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "small, one context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head-of-line blocking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The event loop is cheapest per connection and worst at isolation: one slow computation stalls every client. This is the trade-off behind every \"async\" framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "199-the-response-path--coming-back",
      children: "19.9 The Response Path — Coming Back"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The response retraces the client path, and it is worth being explicit because ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the return trip is not symmetric"
      }), ". The server's congestion window is usually large, so it can send the whole response without growing slowly. The client's receive window starts small, so flow control matters on the way back too."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full path of one request, with the hop where time is usually lost:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[DNS lookup] --> B[TCP handshake]\n    B --> C[Request send]\n    C --> D[Server accept + queue]\n    D --> E[App processing]\n    E --> F[Response send]\n    F --> G[Client render]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When a request is slow, exactly one of these is the culprit"
      }), ", and the only reliable method is to measure rather than guess:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS slow → cold resolver cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handshake slow → RTT, or TCP retransmit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queue slow → server accept backlog is full"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App slow → your code, the database, or a downstream call"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Render slow → main-thread work, or an unoptimised asset"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1910-where-the-boundaries-blur",
      children: "19.10 Where the Boundaries Blur"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three boundaries that experienced engineers routinely conflate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function call vs syscall."
      }), " A function call stays in the same mode and is cheap. A syscall enters the kernel and is not. Calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "readFileSync"
      }), " on a small file is one syscall, not one per byte — but a loop of individual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read()"
      }), " calls is one per iteration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread vs process."
      }), " Threads share an address space, so communication is a pointer assignment and a bug in one corrupts all of them. Processes have separate address spaces, so isolation is free but communication needs IPC. Choosing wrongly costs either safety or throughput."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Async vs fast."
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), " does not make work parallel; it keeps the thread free while waiting. If the awaited work is CPU-bound in JavaScript, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), " makes it worse by adding scheduling to a task that was already blocking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Two ways to hash many files. The async version is NOT faster.\nimport { createHash } from \"node:crypto\";\nimport { readFile } from \"node:fs/promises\";\n\nasync function hashManyAsync(paths: string[]): Promise<string[]> {\n  const out: string[] = [];\n  for (const p of paths) {\n    const buf = await readFile(p);          // yields between reads: good\n    out.push(createHash(\"sha256\").update(buf).digest(\"hex\"));\n  }\n  return out;\n}\n\nfunction hashManySync(paths: string[]): string[] {\n  return paths.map((p) => {\n    const buf = require(\"node:fs\").readFileSync(p);\n    return createHash(\"sha256\").update(buf).digest(\"hex\");\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For I/O-bound work the async version wins because the thread is released during each read. For CPU-bound work the async version is strictly worse: it adds scheduling overhead to work that never yielded anyway. Know which kind you have before reaching for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "async"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1911-when-it-breaks--latency-blocking-failure-modes",
      children: "19.11 When It Breaks — Latency, Blocking, Failure Modes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency budget."
      }), " A typical p50 request of 100 ms decomposes roughly as: DNS 5 ms, handshake 20 ms (1 RTT), server processing 30 ms, transfer 45 ms. Every optimisation targets one of these. Tail latency is a different problem entirely: a p99 of 2 s usually means queueing, not slow code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Head-of-line blocking."
      }), " In the event-loop model, one 500 ms database call delays every other client, because the thread cannot advance until it returns. This is why blocking calls in async handlers are the most common production outage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection exhaustion."
      }), " Each open socket costs kernel memory and a file descriptor. A leak of 10,000 sockets will exhaust the limit and start failing new connections with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMFILE"
      }), " — the symptom looks like \"the network is down\" but is purely local."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Half-open connections."
      }), " A connection can die without either side noticing. Keep-alive amplifies this: a connection idle for too long is silently dead, and the next write fails long after the failure occurred. TCP keepalive probes exist for exactly this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The thundering herd."
      }), " When a resource recovers after an outage, every client that backed off retries at once. Exponential backoff ", (0,jsx_runtime.jsx)(_components.em, {
        children: "with jitter"
      }), " is the fix; exponential backoff ", (0,jsx_runtime.jsx)(_components.em, {
        children: "without"
      }), " jitter synchronises clients perfectly and repeats the outage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Backoff with jitter. The jitter is the part people omit.\nfunction delay(ms: number): Promise<void> {\n  return new Promise((r) => setTimeout(r, ms));\n}\n\nasync function withRetry<T>(fn: () => Promise<T>, attempts = 5): Promise<T> {\n  let lastErr: unknown;\n  for (let i = 0; i < attempts; i++) {\n    try {\n      return await fn();\n    } catch (err) {\n      lastErr = err;\n      const base = Math.min(2 ** i * 100, 5000);\n      // Full jitter: random in [0, base]. Without it, retries synchronise.\n      await delay(Math.random() * base);\n    }\n  }\n  throw lastErr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1912-comparison-tables",
      children: "19.12 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Function call vs syscall"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user → kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "every argument"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.5–5 us"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exceptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errno values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be preempted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes, signal delivery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread vs process"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "separate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shared memory, cheap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC, expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creation cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 us"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "can corrupt all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "contained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thousands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hundreds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transport comparison"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QUIC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "handshake (1 RTT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ordered, retransmits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "best effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ordered, retransmits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "separate (TLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "separate (DTLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "built in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Head-of-line blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes at transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n/a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "per stream only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SSH, DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, video, games"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer boundary summary"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Who owns it"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure looks like"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keystroke → process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS (interrupt, scheduler)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "input lag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process → kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS (syscall)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EACCES, EMFILE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel → NIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS (driver)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tx queue drops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Host → host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "network (routing, TCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "timeout, RST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Host → application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "both (accept, queue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "502, connection refused"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1913-interview-corner",
      children: "19.13 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: What happens between pressing Enter and the request leaving the NIC?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interrupt-driven input capture, scheduling of the reader thread, application construction of the request, a syscall to write, kernel TCP/IP processing including checksum, driver hand-off to the NIC, and the NIC framing the packet onto the medium."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q: Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "connect()"
        }), " take two round trips before data can be sent?"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because TCP must agree on initial sequence numbers in both directions before either side can be confident about ordering and retransmission. The first RTT establishes the client's sequence number, the second confirms it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: A service has p50 = 80 ms but p99 = 3 s. What is the likely cause?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queueing, not slow code. If processing were uniformly slow, p50 would also be high. A p99 far above p50 usually means a resource pool is saturating: threads busy, connection pool exhausted, or a downstream dependency slow for a minority of requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Why does one syscall per byte perform so badly?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each syscall costs a mode switch, argument validation, and scheduler interaction, in the microsecond range. Sending 1 KB byte-by-byte costs thousands of syscalls. Buffering and issuing one call reduces the cost to nearly the same as one byte."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: How do you tell a DNS problem from a server problem?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resolve the name repeatedly. If resolution time varies widely while the server's own response time is stable, it is DNS. Confirm by connecting to the resolved IP address directly, bypassing name resolution entirely."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q: What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EMFILE"
        }), " mean and what causes it?"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Too many open files for a process. On a network service it almost always means sockets are not being closed: a leak, or a connection pool that grows without bound."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1914-applications-in-real-systems",
      children: "19.14 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse proxy."
      }), " Accepts on the public socket, then opens a second connection to the origin. Two handshakes instead of one, which is why a well-configured proxy pools upstream connections aggressively."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection pooling."
      }), " Databases and HTTP clients keep sockets warm to avoid repeated handshakes. The pool size is the tuning knob: too small queues requests, too large exhausts descriptors. This is the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMFILE"
      }), " risk under a friendlier name."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "gRPC and HTTP/2 multiplexing."
      }), " Many logical streams share one connection, so one handshake serves many requests. This removes per-request handshake cost but reintroduces head-of-line blocking at the connection level, which is the specific problem QUIC's independent streams solve."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service mesh."
      }), " A sidecar proxy accepts the application's connection and makes its own to the upstream. Tracing, retries, and mTLS become transparent. The cost is exactly the double handshake above, paid on every hop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Serverless cold starts."
      }), " The platform must start a process, load the runtime, and initialise your code before handling a request. Every step is an OS operation, which is why cold-start latency is dominated by process creation and I/O rather than your business logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1915-pro-tips",
      children: "19.15 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measure before optimising."
        }), " Split DNS, handshake, server time, and transfer. Guessing wastes days."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer aggressively."
        }), " One large write beats thousands of small ones, always."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "finally"
          }), " for cleanup."]
        }), " Descriptor leaks present as network outages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add jitter to every backoff."
        }), " Without it, retries re-synchronise clients."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set connection and idle timeouts."
        }), " Unbounded connections are unbounded resource use."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep-alive only pays off if you reuse."
        }), " One request per connection throws away the entire handshake saving."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Watch ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EMFILE"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ENFILE"
          }), " as separate limits."]
        }), " Per-process versus system-wide; they fail differently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test with cold caches."
        }), " Warm DNS and warm connections hide the latency real users feel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distinguish p50 from p99."
        }), " Optimise the tail; it dominates perceived speed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never block an event loop."
        }), " A single synchronous call can stall every connection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1916-chapter-quiz",
      children: "19.16 Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the first thing that happens when a user presses a key?\na) The keyboard driver writes to the process's memory\nb) The keyboard controller raises a hardware interrupt\nc) The OS scheduler pre-empts the running process\nd) The console driver forwards to the browser"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**b)** The keyboard controller raises a hardware interrupt. The driver reads the scancode only *after* the CPU takes the interrupt. Option (a) reverses cause and effect; (c) is a consequence, not the trigger; (d) assumes a browser that may not exist.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What is the primary difference between a function call and a syscall?\na) Syscalls are always faster\nb) Function calls cross into kernel space\nc) Syscalls cross into kernel space and validate arguments\nd) Syscalls cannot fail"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**c)** Syscalls transition from user to kernel mode and validate every argument, since the caller is untrusted. (a) is backwards — syscalls are far slower. (b) is inverted. (d) is false: syscalls return errno values routinely.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " On a server with p50 = 80 ms and p99 = 3000 ms, what is the most likely cause?\na) The CPU is uniformly slow\nb) Network bandwidth is saturated\nc) Queueing from a saturating resource pool\nd) DNS resolution is slow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**c)** A p99 far above p50 indicates queueing. Uniform slowness (a) would raise p50 too. Bandwidth saturation (d) tends to affect all requests. DNS (d) is usually bimodal, not a long smooth tail.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " A service starts returning new connections refused only under load. Which error would most likely explain it?\na) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EACCES"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EINVAL"
      }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMFILE"
      }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ENOENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**c)** `EMFILE` is the per-process open-file limit, which sockets consume. If sockets leak, new connections fail while existing ones survive — matching \"only under load\". `EACCES` is permissions, `EINVAL` a bad argument, `ENOENT` a missing path.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " In the routing table, why does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.1.2.3"
      }), " prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.1.0.0/16"
      }), " over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.0.0.0/8"
      }), "?\na) The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/8"
      }), " route is administratively disabled\nb) Longest-prefix match wins\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/16"
      }), " was configured more recently\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/8"
      }), " has a higher priority number"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**b)** Forwarding uses longest-prefix match: the most specific matching route wins. (a) is irrelevant, (c) has no effect on forwarding, (d) is not a real concept.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " Why does a server process call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "listen()"
      }), " on one socket but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "accept()"
      }), " on another?\na) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "listen()"
      }), " binds the port, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "accept()"
      }), " creates a new connected socket\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "listen()"
      }), " opens the port, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "accept()"
      }), " closes it\nc) They are aliases in modern kernels\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "accept()"
      }), " runs in user space"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**a)** `listen()` marks a bound socket as passive and queues incoming connection attempts; each `accept()` returns a *new* connected socket with its own buffers. (b) is nonsense, (c) is false, (d) is false — both are syscalls.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " What does adding full jitter to exponential backoff prevent?\na) Retries exceeding the deadline\nb) Clients re-synchronising and retrying simultaneously\nc) The server from detecting load\nd) TLS renegotiation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**b)** Without jitter, all clients that backed off by the same amount retry at the same moment, reproducing the outage. Full jitter randomises each delay independently.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " Which transport removes transport-level head-of-line blocking for HTTP?\na) TCP\nb) UDP\nc) QUIC\nd) IP"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**c)** QUIC carries independent streams over one connection, so a stalled stream does not block others. (a) is exactly the problem. (b) has no ordering to block. (d) is not a transport.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many small writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer, then write once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One syscall per item"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Socket lifecycle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "try/finally"
            }), " close"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relying on GC timing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exponential backoff ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "with jitter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff without jitter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure DNS/handshake/server separately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guessing from p50 alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool and keep-alive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One request per connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix queueing and pools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-optimising the median"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never block the event loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            }), " on CPU-bound work"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cap pools, watch ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EMFILE"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded connection growth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1917-summary",
      children: "19.17 Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A network call is a sequence of kernel operations, and performance work on the network is really syscall work."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input arrives by interrupt, is buffered by the kernel, and only then does user code read it. Latency before your code runs is not your code's fault."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A syscall crosses a mode boundary and validates every argument. It costs microseconds, so syscall count dominates small-write performance."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A socket is a kernel object reached through a file descriptor. Leaking descriptors surfaces as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EMFILE"
        }), " and looks exactly like a network outage."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP must complete a one-RTT handshake before any data moves. Keep-alive removes that cost only if connections are actually reused."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS resolution is a network operation with its own caches. Cold DNS is a frequent cause of latency blamed on the server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forwarding is longest-prefix match; TTL is decremented at every hop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A listening socket produces connected sockets. Thread-per-connection, process-per-connection, and event loop each trade isolation against cost."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The response path is not symmetric: the server's congestion window is already large."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p50 and p99 are different problems. A long tail means queueing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unbounded pools, blocking the event loop, and backoff without jitter are the three failure modes that recur most."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1918-exercises",
      children: "19.18 Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a function that opens a file, writes three separate chunks, and guarantees the descriptor is closed even if the second write throws. Demonstrate the leak by removing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finally"
      }), " and counting descriptors before and after."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "net.createServer"
      }), " to accept exactly three connections, log the descriptor number assigned to each, and show that the numbers differ, proving each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "accept()"
      }), " returns a new kernel object."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement the routing table from section 19.7 with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/24"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/16"
      }), ", and default routes. Add a route table and print the chosen next hop for 20 addresses, including addresses that fall inside two matching prefixes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Measure the time for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "connect()"
      }), " to a public host, then measure a second connection to the same host with keep-alive. Report both figures and explain the difference in terms of the handshake."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write an event-loop server with one route that blocks synchronously for 500 ms and another that returns immediately. Issue ten concurrent requests to each and show that the fast route is delayed by the slow one. Explain which production pattern this reproduces."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a connection pool for an HTTP client with a configurable maximum. When the maximum is reached, queue requests rather than opening more sockets. Then set the maximum to 1 and drive it past the process descriptor limit to observe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMFILE"
      }), ", and explain why the pool prevents it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Instrument a full request path: time DNS resolution, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "connect()"
      }), ", time to first byte, and total transfer separately. Compare against a warm-cache run and attribute the difference to the DNS and handshake stages specifically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " A service shows p50 of 90 ms and p99 of 4.2 s. Profiling shows CPU at 15% and memory stable. The service makes one downstream HTTP call per request using a pool of 20 connections. Diagnose the cause, name the specific mechanism, and propose two changes with their expected effect on p99."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nLow CPU with a long tail rules out the service itself as the bottleneck. The downstream call is the suspect, and a pool of 20 is the specific mechanism: when more than 20 requests arrive concurrently, the rest queue *inside the pool*, waiting for a connection to free up. Each queued request waits for the entire downstream round trip of the one ahead of it, so p99 grows with queue depth while CPU stays idle — the signature of queueing, not saturation.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Two changes. First, raise the pool size so concurrency matches arrival rate, which cuts queueing but transfers pressure downstream; this only helps if the downstream has headroom. Second, add a per-request timeout and fail fast so queued requests do not accumulate behind a slow dependency, which converts a latency spike into a bounded error. A third option, if the downstream supports it, is caching or request coalescing to remove the dependency from the hot path entirely."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " A Node.js HTTP service leaks roughly 300 file descriptors per hour under production load. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMFILE"
      }), " appears every few days and takes the service down. The leak is in a helper that wraps socket creation. Describe how you would localise it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lsof"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/proc/self/fd"
      }), ", explain why a garbage-collected runtime does not save you, and propose a fix that makes the leak structurally impossible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nLocalise it by sampling the descriptor count over time and then taking a snapshot when the count is elevated: `ls -l /proc/self/fd` on Linux, or `Get-Process -Id <pid> | Select-Object -ExpandProperty Handles` on Windows. Correlate the fd targets with the helper's call sites; sockets appear as `socket:[inode]`, regular files by path, so the target type immediately narrows whether the leak is socket- or file-shaped.\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A garbage collector does not help because descriptors are not memory. They are kernel table entries, closed only by an explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "close()"
        }), ". A dropped ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Socket"
        }), " object becomes eligible for collection, but nothing in the language runtime closes the underlying descriptor, and the finalizer that might is not guaranteed to run. Worse, GC pressure is unrelated to the leak rate, so the failure timing looks random."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The structural fix is ownership: the component that opens the resource is the only component allowed to close it, enforced by a scoped helper using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "try/finally"
        }), " so the close happens on the success path, the error path, and the throw path. With that in place the leak is not merely less likely, it is unrepresentable — there is no code path that can open without closing. Add a descriptor-count assertion in CI to catch regressions before production does."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "End of Chapter 19 — From Keystroke to Response"
        })
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



/***/ }

}]);