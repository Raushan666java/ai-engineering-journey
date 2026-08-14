"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59390],{

/***/ 46360
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_01_introduction_md_8d9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-01-introduction-md-8d9.json
const site_docs_courses_operating_systems_01_introduction_md_8d9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/01-introduction","title":"Chapter 1: Introduction to Operating Systems","description":"Next: Processes >>","source":"@site/docs/courses/operating-systems/01-introduction.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/01-introduction","permalink":"/ai-engineering-journey/operating-systems/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/operating-systems/01-introduction","title":"Chapter 1: Introduction to Operating Systems","sidebar_label":"Chapter 1: Introduction to Operating Systems","sidebar_position":1},"sidebar":"course-operating-systems","next":{"title":"Chapter 2: Processes","permalink":"/ai-engineering-journey/operating-systems/02-processes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/operating-systems/01-introduction',
	title: 'Chapter 1: Introduction to Operating Systems',
	sidebar_label: 'Chapter 1: Introduction to Operating Systems',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Operating Systems';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Operating Systems Matter",
  "id": "why-operating-systems-matter",
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
  "value": "What is an Operating System?",
  "id": "what-is-an-operating-system",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 4
}, {
  "value": "Core Responsibilities",
  "id": "core-responsibilities",
  "level": 4
}, {
  "value": "Pseudocode: OS Bootstrap and Initialization",
  "id": "pseudocode-os-bootstrap-and-initialization",
  "level": 4
}, {
  "value": "Step-by-Step: OS Boot Sequence",
  "id": "step-by-step-os-boot-sequence",
  "level": 4
}, {
  "value": "C++ Implementation: Minimal Boot Sequence Simulation",
  "id": "c-implementation-minimal-boot-sequence-simulation",
  "level": 4
}, {
  "value": "Python Implementation: OS Initialization Simulation",
  "id": "python-implementation-os-initialization-simulation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages",
  "level": 4
}, {
  "value": "Edge Cases in OS Initialization",
  "id": "edge-cases-in-os-initialization",
  "level": 4
}, {
  "value": "Operating System Functions",
  "id": "operating-system-functions",
  "level": 3
}, {
  "value": "Major OS Functions",
  "id": "major-os-functions",
  "level": 4
}, {
  "value": "Pseudocode: Simple Process Scheduler",
  "id": "pseudocode-simple-process-scheduler",
  "level": 4
}, {
  "value": "C++ Implementation: Process Control Block and Scheduler",
  "id": "c-implementation-process-control-block-and-scheduler",
  "level": 4
}, {
  "value": "Python Implementation: Process Management",
  "id": "python-implementation-process-management",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases in OS Functions",
  "id": "edge-cases-in-os-functions",
  "level": 4
}, {
  "value": "History of Operating Systems",
  "id": "history-of-operating-systems",
  "level": 3
}, {
  "value": "Phase 1: Batch Systems (1940s-1950s)",
  "id": "phase-1-batch-systems-1940s-1950s",
  "level": 4
}, {
  "value": "Phase 2: Multiprogramming (1960s)",
  "id": "phase-2-multiprogramming-1960s",
  "level": 4
}, {
  "value": "Phase 3: Time-Sharing (1970s)",
  "id": "phase-3-time-sharing-1970s",
  "level": 4
}, {
  "value": "Phase 4: Personal Computing (1980s)",
  "id": "phase-4-personal-computing-1980s",
  "level": 4
}, {
  "value": "Phase 5: Modern Era (1990s-Present)",
  "id": "phase-5-modern-era-1990s-present",
  "level": 4
}, {
  "value": "Types of Operating Systems",
  "id": "types-of-operating-systems",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 4
}, {
  "value": "1. Batch OS",
  "id": "1-batch-os",
  "level": 4
}, {
  "value": "2. Time-Sharing OS",
  "id": "2-time-sharing-os",
  "level": 4
}, {
  "value": "3. Real-Time OS (RTOS)",
  "id": "3-real-time-os-rtos",
  "level": 4
}, {
  "value": "4. Distributed OS",
  "id": "4-distributed-os",
  "level": 4
}, {
  "value": "5. Embedded OS",
  "id": "5-embedded-os",
  "level": 4
}, {
  "value": "System Calls",
  "id": "system-calls",
  "level": 3
}, {
  "value": "What is a System Call?",
  "id": "what-is-a-system-call",
  "level": 4
}, {
  "value": "System Call Categories",
  "id": "system-call-categories",
  "level": 4
}, {
  "value": "System Call Flow (Step-by-Step)",
  "id": "system-call-flow-step-by-step",
  "level": 4
}, {
  "value": "Dry Run Trace: <code>read(fd, buf, 1024)</code> System Call",
  "id": "dry-run-trace-readfd-buf-1024-system-call",
  "level": 4
}, {
  "value": "Pseudocode: System Call Handler",
  "id": "pseudocode-system-call-handler",
  "level": 4
}, {
  "value": "C++ Implementation: System Call Simulation",
  "id": "c-implementation-system-call-simulation",
  "level": 4
}, {
  "value": "Python Implementation: System Call Dispatcher",
  "id": "python-implementation-system-call-dispatcher",
  "level": 4
}, {
  "value": "API vs System Call",
  "id": "api-vs-system-call",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-2",
  "level": 4
}, {
  "value": "Edge Cases in System Calls",
  "id": "edge-cases-in-system-calls",
  "level": 4
}, {
  "value": "Operating System Structures",
  "id": "operating-system-structures",
  "level": 3
}, {
  "value": "1. Monolithic Kernel",
  "id": "1-monolithic-kernel",
  "level": 4
}, {
  "value": "2. Microkernel",
  "id": "2-microkernel",
  "level": 4
}, {
  "value": "3. Layered Approach",
  "id": "3-layered-approach",
  "level": 4
}, {
  "value": "4. Modular Kernel (Hybrid)",
  "id": "4-modular-kernel-hybrid",
  "level": 4
}, {
  "value": "Kernel Types Comparison",
  "id": "kernel-types-comparison",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Tracing System Calls with strace",
  "id": "example-1-tracing-system-calls-with-strace",
  "level": 3
}, {
  "value": "Example 2: Kernel vs User Mode",
  "id": "example-2-kernel-vs-user-mode",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. System Call vs Normal Function Call",
  "id": "1-system-call-vs-normal-function-call",
  "level": 3
}, {
  "value": "2. Kernel Space vs User Space",
  "id": "2-kernel-space-vs-user-space",
  "level": 3
}, {
  "value": "3. RTOS vs GPOS",
  "id": "3-rtos-vs-gpos",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Windows NT Kernel",
  "id": "windows-nt-kernel",
  "level": 3
}, {
  "value": "Linux Kernel",
  "id": "linux-kernel",
  "level": 3
}, {
  "value": "macOS / XNU Kernel",
  "id": "macos--xnu-kernel",
  "level": 3
}, {
  "value": "QNX RTOS",
  "id": "qnx-rtos",
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
  "value": "TypeScript OS Boot Simulator",
  "id": "typescript-os-boot-simulator",
  "level": 3
}, {
  "value": "System Call vs Library Call Comparison",
  "id": "system-call-vs-library-call-comparison",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Basic",
  "id": "basic",
  "level": 4
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 4
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 4
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
  "value": "Basic",
  "id": "basic-1",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate-1",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
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
        id: "chapter-1-introduction-to-operating-systems",
        children: "Chapter 1: Introduction to Operating Systems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/02-processes",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: Processes"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define an operating system and explain its role as a resource manager"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the historical evolution from batch to modern OS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish among batch, time-sharing, distributed, real-time, and embedded OS types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the services an OS provides to users and programs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain system calls and differentiate standard APIs from actual system calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare OS structures: monolithic, microkernel, layered, modular, hybrid"
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
        href: "../../assets/images/lessons/operating-systems/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/01-introduction/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-operating-systems-matter",
      children: "Why Operating Systems Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a 50-story office building. Without a building manager, chaos erupts: people fight over elevators, rooms are double-booked, the HVAC runs randomly, and unauthorized people wander into restricted areas. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "building manager"
      }), " allocates office space, schedules cleaning, controls access, mediates disputes, and ensures utilities run efficiently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "operating system"
      }), " is the building manager of a computer. It:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allocates resources"
        }), " (CPU time, memory, disk space) like a manager assigns offices and meeting rooms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schedules tasks"
        }), " like a manager coordinates elevator maintenance, cleaning shifts, and tenant move-ins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controls access"
        }), " like a manager issues keycards and restricts entry to authorized floors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handles conflicts"
        }), " like a manager resolves two tenants requesting the same conference room"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provides services"
        }), " (file storage, printing, networking) like a manager provides mail service, parking, and janitorial services"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without an OS, every programmer would need to write their own device drivers, memory managers, and schedulers → the equivalent of every office tenant installing their own plumbing and electrical wiring. The OS is what makes general-purpose computing practical."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What is an OS?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocator, control program, intermediary between hardware and users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS History"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch → Multiprogramming → Time-sharing → Personal → Modern/Cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch, time-sharing, distributed, real-time (hard/soft), embedded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System Calls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface for user programs to request kernel services; switch from user to kernel mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS Structures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monolithic (Linux), microkernel (MINIX), layered (THE), modular/hybrid (Windows NT)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[OS Basics] --> B[OS History & Types]\n    B --> C[System Calls]\n    C --> D[OS Structures]\n    D --> E[Kernel Types]\n    E --> F[Real-World Applications]\n    F --> G[Summary & Exercises]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/01-introduction.png",
        alt: "OS Components"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-an-operating-system",
      children: "What is an Operating System?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " The OS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hotel manager"
      }), ". The manager doesn't cook food (that's the restaurant app), clean rooms (that's the cleaning staff subsystem), or fix plumbing (that's the device driver), but the manager coordinates everything: assigns rooms (memory), handles guest requests (system calls), ensures security (keycard access), and resolves conflicts (two guests wanting the same conference room)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "operating system"
      }), " is system software that acts as an intermediary between computer hardware and user programs. It manages hardware resources (CPU, memory, I/O devices), provides common services (file management, networking, security), and enables multiple applications to run concurrently without interfering with each other."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "core-responsibilities",
      children: "Core Responsibilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Allocation"
        }), " → Decide which process gets the CPU, how much memory each process can use, and how disk and I/O devices are shared"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control Program"
        }), " → Prevent user programs from making errors or using the computer improperly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel"
        }), " → The core component that remains in memory and provides the most essential services (scheduling, memory management, IPC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Interface"
        }), " → Provide APIs (system calls) that applications use to request services without needing to know hardware details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-os-bootstrap-and-initialization",
      children: "Pseudocode: OS Bootstrap and Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "START\n    LOAD bootloader from disk into memory\n    IF bootloader is corrupted THEN\n        DISPLAY \"Boot failure\"\n        HALT\n    END IF\n    LOAD OS kernel into memory\n    INITIALIZE interrupt vector table\n    INITIALIZE process table (empty)\n    INITIALIZE memory management structures\n    INITIALIZE device drivers for all detected hardware\n    CREATE idle process\n    START scheduler loop\n        WHILE system is running DO\n            SELECT next process to run\n            DISPATCH process to CPU\n            HANDLE interrupts and system calls as they occur\n        END WHILE\n    END\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-os-boot-sequence",
      children: "Step-by-Step: OS Boot Sequence"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Change"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIOS/UEFI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power-on self-test (POST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIOS/UEFI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load bootloader from disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootloader in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootloader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locate and load kernel image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel code loaded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up interrupt descriptors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupts enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize page tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create process table, schedule init/PID 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First user process ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init/PID 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start system daemons and login manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System ready for users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-minimal-boot-sequence-simulation",
      children: "C++ Implementation: Minimal Boot Sequence Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n\nclass OSKernel {\nprivate:\n    bool bootloaderOk;\n    bool interruptTableReady;\n    bool memoryInitDone;\n    std::vector<std::string> processes;\n\npublic:\n    OSKernel() : bootloaderOk(false), interruptTableReady(false), memoryInitDone(false) {}\n\n    bool loadBootloader() {\n        std::cout << \"[BOOT] Loading bootloader from disk...\\n\";\n        bootloaderOk = true;\n        return bootloaderOk;\n    }\n\n    bool initInterruptTable() {\n        std::cout << \"[KERNEL] Initializing interrupt vector table...\\n\";\n        interruptTableReady = true;\n        return interruptTableReady;\n    }\n\n    bool initMemoryManagement() {\n        std::cout << \"[KERNEL] Setting up page tables...\\n\";\n        memoryInitDone = true;\n        return memoryInitDone;\n    }\n\n    void createProcess(const std::string& name) {\n        processes.push_back(name);\n        std::cout << \"[KERNEL] Process created: \" << name << \"\\n\";\n    }\n\n    void boot() {\n        if (!loadBootloader()) {\n            std::cerr << \"[FATAL] Bootloader corrupted\\n\";\n            return;\n        }\n        if (!initInterruptTable()) {\n            std::cerr << \"[FATAL] Cannot set up interrupts\\n\";\n            return;\n        }\n        if (!initMemoryManagement()) {\n            std::cerr << \"[FATAL] Memory init failed\\n\";\n            return;\n        }\n        createProcess(\"idle\");\n        createProcess(\"init (PID 1)\");\n        std::cout << \"[KERNEL] System ready. Entering scheduler loop.\\n\";\n    }\n};\n\nint main() {\n    OSKernel kernel;\n    kernel.boot();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-os-initialization-simulation",
      children: "Python Implementation: OS Initialization Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\n\nclass OSKernel:\n    def __init__(self):\n        self.bootloader_ok = False\n        self.interrupt_table_ready = False\n        self.memory_init_done = False\n        self.processes = []\n\n    def load_bootloader(self):\n        print(\"[BOOT] Loading bootloader from disk...\")\n        time.sleep(0.1)\n        self.bootloader_ok = True\n        return True\n\n    def init_interrupt_table(self):\n        print(\"[KERNEL] Initializing interrupt vector table...\")\n        time.sleep(0.1)\n        self.interrupt_table_ready = True\n        return True\n\n    def init_memory_management(self):\n        print(\"[KERNEL] Setting up page tables...\")\n        time.sleep(0.1)\n        self.memory_init_done = True\n        return True\n\n    def create_process(self, name: str):\n        self.processes.append(name)\n        print(f\"[KERNEL] Process created: {name}\")\n\n    def boot(self):\n        if not self.load_bootloader():\n            print(\"[FATAL] Bootloader corrupted\")\n            return\n        if not self.init_interrupt_table():\n            print(\"[FATAL] Cannot set up interrupts\")\n            return\n        if not self.init_memory_management():\n            print(\"[FATAL] Memory init failed\")\n            return\n        self.create_process(\"idle\")\n        self.create_process(\"init (PID 1)\")\n        print(\"[KERNEL] System ready. Entering scheduler loop.\")\n\nif __name__ == \"__main__\":\n    kernel = OSKernel()\n    kernel.boot()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bootloader load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(kernel_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size block read from disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt table init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of interrupt vectors (256 on x86)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page table init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of page table entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list insertion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
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
            children: "Abstracts hardware complexity from programmers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds overhead compared to bare-metal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables multiprogramming and multitasking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel bugs crash the entire system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides security and isolation between processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS itself consumes memory and CPU cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized APIs for portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy OS code can contain security vulnerabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manages resource contention automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poorly designed OS can become a bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-os-initialization",
      children: "Edge Cases in OS Initialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bootloader corruption"
        }), " → If the bootloader's checksum fails, the system cannot load the kernel. Solution: redundant boot sectors or recovery partition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insufficient memory during kernel load"
        }), " → If the kernel image exceeds available memory on embedded devices, the system panics. Solution: compressed kernel images (zImage, bzImage)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device initialization failure"
        }), " → A faulty driver during init can hang the boot process. Solution: fallback to safe mode or minimal driver set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupt vector conflict"
        }), " → Two devices claiming the same IRQ (legacy systems). Solution: shared IRQ handling or IOAPIC re-routing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operating-system-functions",
      children: "Operating System Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " An OS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hospital administration"
      }), ". The administration doesn't perform surgery (that's the doctor), but it manages bed allocation (memory), schedules operating rooms (CPU scheduling), maintains patient records (file system), controls visitor access (security), and coordinates departments (IPC)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "major-os-functions",
      children: "Major OS Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Process Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create and terminate user and system processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Schedule processes on available CPUs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Synchronize and communicate between processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle deadlocks when processes compete for resources"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Track which parts of memory are in use and by whom"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allocate and deallocate memory to processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle virtual memory through paging and segmentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement protection by isolating process address spaces"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "File System Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Organize data into files and directories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Map files to physical storage blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Control access permissions (read, write, execute)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide caching for performance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "I/O System Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Buffer data between devices and processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide a uniform interface through device drivers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle device interrupts and DMA transfers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Protection and Security"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Authenticate users (passwords, biometrics, tokens)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enforce access control policies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Isolate processes from each other"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Defend against malicious programs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Networking"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement TCP/IP protocol stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide socket interfaces for network communication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Route data between network interfaces"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-simple-process-scheduler",
      children: "Pseudocode: Simple Process Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE schedule()\n    INPUT: ready_queue (list of processes)\n    OUTPUT: selected process to dispatch\n\n    IF ready_queue is empty THEN\n        RETURN idle_process\n    END IF\n\n    // Simple round-robin: pick the first in queue\n    selected = ready_queue.dequeue()\n    selected.state = RUNNING\n    LOAD CPU registers from selected.context\n    RETURN selected\nEND PROCEDURE\n\nPROCEDURE create_process(program_path)\n    INPUT: path to executable\n    OUTPUT: new process ID or error\n\n    new_pid = allocate_pid()\n    IF new_pid == -1 THEN\n        RETURN \"Error: No available PIDs\"\n    END IF\n\n    new_pcb = allocate_memory_for_PCB()\n    IF new_pcb == NULL THEN\n        RETURN \"Error: Out of kernel memory\"\n    END IF\n\n    new_pcb.pid = new_pid\n    new_pcb.state = NEW\n    new_pcb.program_counter = load_executable(program_path)\n    new_pcb.memory_limit = calculate_memory_need(program_path)\n\n    add_to_process_table(new_pcb)\n    add_to_ready_queue(new_pcb)\n\n    RETURN new_pid\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-process-control-block-and-scheduler",
      children: "C++ Implementation: Process Control Block and Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <string>\n#include <vector>\n\nenum ProcessState { NEW, READY, RUNNING, WAITING, TERMINATED };\n\nstruct PCB {\n    int pid;\n    std::string name;\n    ProcessState state;\n    int programCounter;\n    int memoryBase;\n    int memoryLimit;\n    int cpuBurstTime;\n};\n\nclass Scheduler {\nprivate:\n    std::queue<PCB*> readyQueue;\n    std::vector<PCB> processTable;\n    int nextPid;\n\npublic:\n    Scheduler() : nextPid(1) {}\n\n    int createProcess(const std::string& name, int memoryNeeded) {\n        if (nextPid > 32768) {\n            std::cerr << \"Error: PID exhaustion\\n\";\n            return -1;\n        }\n        PCB proc;\n        proc.pid = nextPid++;\n        proc.name = name;\n        proc.state = NEW;\n        proc.programCounter = 0;\n        proc.memoryBase = 0;\n        proc.memoryLimit = memoryNeeded;\n        proc.cpuBurstTime = 0;\n\n        processTable.push_back(proc);\n        proc.state = READY;\n        readyQueue.push(&processTable.back());\n\n        std::cout << \"Process created: \" << name << \" (PID: \" << proc.pid << \")\\n\";\n        return proc.pid;\n    }\n\n    PCB* schedule() {\n        if (readyQueue.empty()) {\n            std::cout << \"No processes to schedule\\n\";\n            return nullptr;\n        }\n        PCB* selected = readyQueue.front();\n        readyQueue.pop();\n        selected->state = RUNNING;\n        std::cout << \"Scheduled: \" << selected->name << \" (PID: \" << selected->pid << \")\\n\";\n        return selected;\n    }\n\n    void terminateProcess(int pid) {\n        for (auto& p : processTable) {\n            if (p.pid == pid) {\n                p.state = TERMINATED;\n                std::cout << \"Process terminated: \" << p.name << \" (PID: \" << pid << \")\\n\";\n                return;\n            }\n        }\n        std::cout << \"Error: PID \" << pid << \" not found\\n\";\n    }\n};\n\nint main() {\n    Scheduler sched;\n    sched.createProcess(\"Firefox\", 256);\n    sched.createProcess(\"Terminal\", 64);\n    sched.schedule();\n    sched.schedule();\n    sched.schedule(); // queue empty case\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-process-management",
      children: "Python Implementation: Process Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\nimport os\nfrom enum import Enum\n\nclass ProcessState(Enum):\n    NEW = 1\n    READY = 2\n    RUNNING = 3\n    WAITING = 4\n    TERMINATED = 5\n\nclass PCB:\n    def __init__(self, pid: int, name: str, memory_needed: int):\n        self.pid = pid\n        self.name = name\n        self.state = ProcessState.NEW\n        self.program_counter = 0\n        self.memory_limit = memory_needed\n        self.cpu_burst_time = 0\n\n    def __repr__(self):\n        return f\"PCB(PID={self.pid}, name={self.name}, state={self.state.name})\"\n\nclass Scheduler:\n    def __init__(self):\n        self.ready_queue = deque()\n        self.process_table = {}\n        self.next_pid = 1\n\n    def create_process(self, name: str, memory_needed: int) -> int:\n        if self.next_pid > 32768:\n            print(\"Error: PID exhaustion\")\n            return -1\n        pid = self.next_pid\n        self.next_pid += 1\n        proc = PCB(pid, name, memory_needed)\n        proc.state = ProcessState.READY\n        self.process_table[pid] = proc\n        self.ready_queue.append(pid)\n        print(f\"Process created: {name} (PID: {pid})\")\n        return pid\n\n    def schedule(self):\n        if not self.ready_queue:\n            print(\"No processes to schedule\")\n            return None\n        pid = self.ready_queue.popleft()\n        self.process_table[pid].state = ProcessState.RUNNING\n        print(f\"Scheduled: {self.process_table[pid]}\")\n\n    def terminate_process(self, pid: int):\n        if pid in self.process_table:\n            self.process_table[pid].state = ProcessState.TERMINATED\n            print(f\"Process terminated: {self.process_table[pid].name} (PID: {pid})\")\n        else:\n            print(f\"Error: PID {pid} not found\")\n\nif __name__ == \"__main__\":\n    sched = Scheduler()\n    sched.create_process(\"Firefox\", 256)\n    sched.create_process(\"Terminal\", 64)\n    sched.schedule()\n    sched.schedule()\n    sched.schedule()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) total processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB allocation is constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore CPU registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (FCFS) to O(n) (priority)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buddy system: O(1), first-fit: O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-and-disadvantages-1",
      children: "Advantages and Disadvantages"
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
            children: "Abstract hardware so apps are portable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS services add CPU and memory overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiprogramming maximizes hardware utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switching consumes CPU cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security model prevents unauthorized access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bugs in OS compromise entire system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard APIs simplify application development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some abstractions hide useful hardware features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic resource management reduces programmer burden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource management policies may not fit all workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-os-functions",
      children: "Edge Cases in OS Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fork bomb"
        }), " → A process recursively creates copies of itself, exhausting the process table. Solution: per-user process limits (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ulimit -u"
        }), "), PID rationing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory fragmentation"
        }), " → After many allocations/deallocations, free memory is split into small non-contiguous chunks. Solution: compaction (copying collector) or virtual memory with paging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadlock"
        }), " → Two processes each hold a resource the other needs, neither progresses. Solution: deadlock detection and recovery, or prevention via resource ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority inversion"
        }), " → A low-priority process holds a lock needed by a high-priority process, while a medium-priority process preempts the low-priority one. Solution: priority inheritance protocol."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thrashing"
        }), " → The system spends more time swapping pages than executing processes. Solution: adjust degree of multiprogramming, use working set model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "history-of-operating-systems",
      children: "History of Operating Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1-batch-systems-1940s-1950s",
      children: "Phase 1: Batch Systems (1940s-1950s)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Early computers (ENIAC, UNIVAC) had no OS. Programmers interacted directly with the hardware using switches and paper tape. The first OS appeared in the 1950s with the GM-NAA I/O system for the IBM 701."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch systems collected jobs (programs + data) into batches. A resident monitor loaded and executed them sequentially. When one job finished, the monitor loaded the next. This eliminated significant setup time but offered no interactivity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2-multiprogramming-1960s",
      children: "Phase 2: Multiprogramming (1960s)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiprogramming improved CPU utilization by keeping multiple jobs in memory simultaneously. While one job waited for I/O, the CPU switched to another. This required interrupt hardware and memory protection."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IBM's OS/360 (1964) was a landmark multiprogramming system → and also famously one of the most complex software projects ever attempted (Fred Brooks wrote ", (0,jsx_runtime.jsx)(_components.em, {
        children: "The Mythical Man-Month"
      }), " about it)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3-time-sharing-1970s",
      children: "Phase 3: Time-Sharing (1970s)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Time-sharing extended multiprogramming to provide interactive computing. The CPU rapidly switched between users, giving each the illusion of a dedicated machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CTSS (MIT, 1961) and Multics (MIT/Bell Labs/GE, 1965) pioneered time-sharing. Unix (Ken Thompson and Dennis Ritchie, 1970s) evolved from Multics and became the foundation of modern OS design."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-4-personal-computing-1980s",
      children: "Phase 4: Personal Computing (1980s)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microprocessors made personal computers viable. CP/M, MS-DOS (Microsoft, 1981), and early Mac OS (1984) brought OS to desktops. These were simpler → single-user, single-task → but introduced graphical user interfaces (GUIs) to the mainstream."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-5-modern-era-1990s-present",
      children: "Phase 5: Modern Era (1990s-Present)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux (Linus Torvalds, 1991) brought Unix-like power to PCs as free software. Windows NT (1993) provided a true, portable OS core. Mobile OS (iOS, Android) adapted kernel designs for resource-constrained, touch-based devices. Cloud and container OS (VMware ESXi, Linux containers) abstract entire machines."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-operating-systems",
      children: "Types of Operating Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " OS types are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vehicle types"
      }), ". A batch OS is a cargo ship (load once, process, unload → no interaction mid-voyage). A time-sharing OS is a city bus (many passengers share the ride, each gets a turn). A real-time OS is an ambulance (must reach destination within a guaranteed time). A distributed OS is a fleet of delivery trucks (coordinated to appear as one system). An embedded OS is a car's ECU (single-purpose, resource-constrained)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time-Sharing OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-Time OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distributed OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded OS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Response Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours/days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms to seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "us to ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU Utilization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (single-purpose)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Experience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit-and-wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seamless network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invisible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBM OS/360"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix, Linux, Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VxWorks, FreeRTOS, QNX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amoeba, Plan 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Linux, TinyOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadline Guarantee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (hard or soft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-batch-os",
      children: "1. Batch OS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jobs with similar needs are grouped into batches and executed sequentially without user interaction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A laundromat → you drop off clothes, they wash everything in batches, and you pick them up later. No interaction during the cycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advantage:"
        }), " Efficient for high-volume repetitive jobs (payroll processing, bill generation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disadvantage:"
        }), " Poor turnaround time, difficult to debug, starvation possible for short jobs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " IBM OS/360, early mainframe operating systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-time-sharing-os",
      children: "2. Time-Sharing OS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CPU time is divided into small slices (time quanta) and distributed among multiple users/applications. The rapid switching gives each user the illusion of a dedicated machine."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A professor holding office hours → each student gets 5 minutes, the professor rotates through all students in the queue. Each student feels they have the professor's attention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advantage:"
        }), " Interactive response, fair CPU distribution, good for general-purpose computing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disadvantage:"
        }), " Overhead from frequent context switches, response degrades under heavy load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Unix, Linux, Windows, macOS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-real-time-os-rtos",
      children: "3. Real-Time OS (RTOS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guarantees that critical tasks complete within a strict time bound. Two subtypes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hard real-time:"
          }), " Missing a deadline is catastrophic (aircraft flight control, medical life-support, automotive braking)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Soft real-time:"
          }), " Missing deadlines degrades quality but does not cause system failure (video streaming, online gaming, VoIP)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Analogy:"
          }), " An ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ambulance"
          }), " must reach the hospital within the \"golden hour\" (hard real-time). A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "movie streaming buffer"
          }), " should load before the scene starts; if it's late, the video stutters but no one dies (soft real-time)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Example:"
          }), " FreeRTOS, VxWorks, QNX, RTLinux."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-distributed-os",
      children: "4. Distributed OS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manages a group of independent computers connected by a network, making them appear as a single computer to the user."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "chain of bank branches"
        }), " → you can deposit money at any branch and withdraw at any other branch. The network of branches appears as one bank."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenge:"
        }), " Synchronization, fault tolerance, transparency, network latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Amoeba, Sprite, Plan 9, Google's Fuchsia."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "5-embedded-os",
      children: "5. Embedded OS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Designed for devices with limited resources → sensors, smart appliances, IoT devices, wearables. Often runs from ROM, has minimal footprint, and serves a single purpose."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "microwave keypad"
        }), " → you press a button, it runs the timer and beeps. There's no need for a file system, multitasking, or user accounts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Embedded Linux, Windows IoT, TinyOS, FreeRTOS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-calls",
      children: "System Calls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A system call is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ordering food at a restaurant"
      }), ". You (the user program) sit at the table and look at the menu (API). You tell the waiter (the standard library) what you want. The waiter goes to the kitchen (kernel) through the kitchen door (the trap instruction), where the chef (kernel service routine) prepares your order. The waiter brings it back to your table (returns to user mode). You never enter the kitchen yourself → that would violate the health code (security restriction)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "what-is-a-system-call",
      children: "What is a System Call?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "system call"
      }), " is a programmatic way for a user-space program to request a service from the OS kernel. It is the only legitimate way to transition from user mode to kernel mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system-call-categories",
      children: "System Call Categories"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Calls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Control"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exec()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "waitpid()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create, run, terminate, and synchronize processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Management"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "open()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lseek()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulate files and file descriptors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device Management"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ioctl()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communicate with hardware devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Information Maintenance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getpid()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "alarm()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gettimeofday()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query/set system state and time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pipe()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shmget()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msgget()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC and networking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system-call-flow-step-by-step",
      children: "System Call Flow (Step-by-Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User program calls API"
        }), " → e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"Hello\")"
        }), " invokes the C library function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "libc prepares the call"
        }), " → Arguments are placed in CPU registers (or on the stack)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trap instruction executes"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "syscall"
        }), " (x86-64) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int 0x80"
        }), " (x86) switches to kernel mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU saves context"
        }), " → Program counter, stack pointer, and flags are saved to the kernel stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System call handler runs"
        }), " → The kernel uses the syscall number to index into a dispatch table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service routine executes"
        }), " → The specific kernel function performs the requested operation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result returned"
        }), " → The kernel places the return value in a register (or memory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return from trap"
        }), " → CPU switches back to user mode, restores context, execution continues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dry-run-trace-readfd-buf-1024-system-call",
      children: ["Dry Run Trace: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read(fd, buf, 1024)"
      }), " System Call"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Data"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read(3, buf, 1024)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd=3, buf=0x7fff..., count=1024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "libc wrapper"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Places args in registers: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rdi=3, rsi=buf, rdx=1024"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AX = __NR_read (0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "libc wrapper"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Executes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "syscall"
            }), " instruction"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU saves RIP, RSP to kernel stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switches to Ring 0, jumps to entry_syscall_64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CR3 for kernel page tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entry_syscall_64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saves all registers to pt_regs on kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pt_regs struct contains structure of user state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses AX (syscall number) to look up table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sys_call_table[0] = __x64_sys_read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "__x64_sys_read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extracts fd, buf, count from saved registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls vfs_read(fd, buf, count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VFS layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locates file struct from fd table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File struct for fd=3 points to ext4 inode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext4 driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculates disk block, issues I/O request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block #84213 dispatched to disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA completes, data in page cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffer now has 1024 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vfs_read"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Copy data from kernel buffer to user-space ", (0,jsx_runtime.jsx)(_components.code, {
              children: "buf"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "copy_to_user(buf, kernel_buf, 1024)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores return value (1024) in RAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAX = 1024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores user registers, switches to Ring 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sysretq instruction executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reads return value of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), ", continues"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buf now contains file data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-system-call-handler",
      children: "Pseudocode: System Call Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE handle_syscall(cpu_state)\n    syscall_number = cpu_state.AX\n    arg1 = cpu_state.DI\n    arg2 = cpu_state.SI\n    arg3 = cpu_state.DX\n\n    IF syscall_number < 0 OR syscall_number >= MAX_SYSCALLS THEN\n        cpu_state.AX = -1\n        cpu_state.error_code = EINVAL\n        RETURN TO USER MODE\n    END IF\n\n    IF NOT validate_arguments(syscall_number, arg1, arg2, arg3) THEN\n        cpu_state.AX = -1\n        cpu_state.error_code = EFAULT\n        RETURN TO USER MODE\n    END IF\n\n    result = sys_call_table[syscall_number](arg1, arg2, arg3)\n    cpu_state.AX = result\n    RETURN TO USER MODE\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-system-call-simulation",
      children: "C++ Implementation: System Call Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n\nusing SyscallHandler = int(*)(int, int, int);\n\nint sys_read(int fd, char* buf, int count) {\n    if (fd < 0) { std::cerr << \"[KERNEL] read: Invalid fd\\n\"; return -1; }\n    if (buf == nullptr) { std::cerr << \"[KERNEL] read: Bad buffer\\n\"; return -1; }\n    const char* data = \"Hello from kernel!\";\n    int len = std::min(count, (int)std::strlen(data));\n    std::memcpy(buf, data, len);\n    return len;\n}\n\nint sys_write(int fd, const char* buf, int count) {\n    if (fd < 0) return -1;\n    if (buf == nullptr) return -1;\n    std::cout << \"[KERNEL] write(\" << fd << \", \\\"\" << buf << \"\\\", \" << count << \")\\n\";\n    return count;\n}\n\nint sys_getpid() {\n    static int pid = 1001;\n    return pid;\n}\n\nSyscallHandler sys_call_table[256] = {nullptr};\n\nclass SystemCallManager {\npublic:\n    static void init() {\n        sys_call_table[0] = reinterpret_cast<SyscallHandler>(sys_read);\n        sys_call_table[1] = reinterpret_cast<SyscallHandler>(sys_write);\n        sys_call_table[39] = reinterpret_cast<SyscallHandler>(sys_getpid);\n    }\n\n    static int dispatch(int number, int a1, int a2, int a3) {\n        if (number < 0 || number >= 256 || sys_call_table[number] == nullptr) {\n            std::cerr << \"[KERNEL] Unknown syscall: \" << number << \"\\n\";\n            return -1;\n        }\n        return sys_call_table[number](a1, a2, a3);\n    }\n};\n\nint main() {\n    SystemCallManager::init();\n    char buffer[1024] = {0};\n    int result = SystemCallManager::dispatch(0, 3, reinterpret_cast<int>(buffer), 1024);\n    std::cout << \"[USER] read returned \" << result << \": \\\"\" << buffer << \"\\\"\\n\";\n    int pid = SystemCallManager::dispatch(39, 0, 0, 0);\n    std::cout << \"[USER] PID = \" << pid << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-system-call-dispatcher",
      children: "Python Implementation: System Call Dispatcher"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nfrom enum import IntEnum\n\nclass SyscallNum(IntEnum):\n    READ = 0\n    WRITE = 1\n    GETPID = 39\n\nclass Kernel:\n    def __init__(self):\n        self.syscall_table = {\n            SyscallNum.READ: self.sys_read,\n            SyscallNum.WRITE: self.sys_write,\n            SyscallNum.GETPID: self.sys_getpid,\n        }\n\n    def sys_read(self, fd: int, buf_addr: int, count: int) -> int:\n        if fd < 0: return -1\n        data = \"Hello from kernel!\"\n        n = min(count, len(data))\n        print(f\"[KERNEL] read({fd}, addr={buf_addr}, count={count}) -> {n} bytes\")\n        return n\n\n    def sys_write(self, fd: int, buf_addr: int, count: int) -> int:\n        if fd < 0: return -1\n        return count\n\n    def sys_getpid(self) -> int:\n        return os.getpid()\n\n    def handle_syscall(self, number: int, arg1=0, arg2=0, arg3=0) -> int:\n        if number not in self.syscall_table:\n            print(f\"[KERNEL] Unknown syscall #{number}\")\n            return -1\n        if arg1 < 0 and number in (SyscallNum.READ, SyscallNum.WRITE):\n            print(f\"[KERNEL] Permission denied\")\n            return -1\n        handler = self.syscall_table[number]\n        return handler(arg1, arg2, arg3)\n\nif __name__ == \"__main__\":\n    kernel = Kernel()\n    print(\"[USER] read(3, buffer, 1024)\")\n    result = kernel.handle_syscall(SyscallNum.READ, 3, 0x7fff, 1024)\n    print(f\"[USER] Got {result} bytes\")\n    print(\"[USER] getpid() ->\", kernel.handle_syscall(SyscallNum.GETPID))\n    print(\"[USER] bad syscall ->\", kernel.handle_syscall(999))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "api-vs-system-call",
      children: "API vs System Call"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most programs use an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API"
      }), " rather than invoking system calls directly. The C standard library provides wrapper functions that make the system call on your behalf."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Underlying Syscall"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "open()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libc"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "brk()"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mmap()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "time()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gettimeofday()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall entry/exit (trap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-microcoded, ~100-300 cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Argument validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall handler dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array index into sys_call_table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data copy (copy_to_user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = bytes copied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full syscall (e.g., read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to O(N) I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on disk/network latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-and-disadvantages-2",
      children: "Advantages and Disadvantages"
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
            children: "Protects kernel from malformed user requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch overhead (~1-5us per syscall)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides clean, stable ABI across kernel versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits flexibility from user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces security boundary between user and kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every I/O requires expensive mode switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Makes system portable across hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy syscall volume can become a bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-system-calls",
      children: "Edge Cases in System Calls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupted system call"
        }), " → A syscall like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), " is interrupted by a signal. The kernel may return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-EINTR"
        }), ". Solution: manually restart the syscall with a loop: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while ((n = read(...)) == -1 && errno == EINTR);"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failed argument validation"
        }), " → User passes an invalid pointer. The kernel detects this during ", (0,jsx_runtime.jsx)(_components.code, {
          children: "copy_from_user()"
        }), " and returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-EFAULT"
        }), ". The process receives ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SIGSEGV"
        }), " if it uses the result without checking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource exhaustion"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " cannot allocate a new PID or memory. Returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-EAGAIN"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-ENOMEM"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syscall during signal handler"
        }), " → A syscall in progress may return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-EINTR"
        }), " if a signal handler is invoked. The programmer must restart."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File descriptor exhaustion"
        }), " → Opening too many files returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-EMFILE"
        }), " (per-process) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-ENFILE"
        }), " (system-wide). ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ulimit -n"
        }), " controls the per-process limit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operating-system-structures",
      children: "Operating System Structures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " OS structures are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "building architectures"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monolithic"
        }), " = A single-room warehouse → everything is together, fast to move around, but a fire in any area destroys everything"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Microkernel"
        }), " = A campus of small buildings → each function is isolated, a fire in one doesn't spread, but moving between buildings takes time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layered"
        }), " = A multi-story building → each floor depends on the floor below, clear hierarchy, but adding a new feature may require modifying multiple floors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modular/Hybrid"
        }), " = A modern office with pluggable wall panels → core structure is fixed, but rooms can be reconfigured by swapping panels"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-monolithic-kernel",
      children: "1. Monolithic Kernel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The entire OS runs in kernel space as a single large program. All components (scheduler, memory manager, file system, device drivers) share the same address space."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+--------------------------------------------------+\n|                  User Programs                    |\n+--------------------------------------------------+\n|              System Call Interface                |\n+--------------------------------------------------+\n|  Scheduler | Memory | File System | Drivers      |\n|  IPC       | Net    | Security   | VFS          |\n|  (ALL components in kernel space, same address   |\n|   space -- function calls are direct)             |\n+--------------------------------------------------+\n|                  Hardware                         |\n+--------------------------------------------------+\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assessment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High -- components communicate via direct function calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low -- any driver bug crashes entire kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low -- no isolation between subsystems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Development"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard -- entire OS recompiled for any change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low -- tightly coupled to hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, traditional Unix, MS-DOS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-microkernel",
      children: "2. Microkernel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The kernel is minimized to only essential functions (IPC, basic scheduling, low-level memory management). File systems, device drivers, networking, and other services run as user-space processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------------+\n|   File Svc | Network Svc | Device Driver |  <- User space\n|   (user-space processes, isolated)       |\n+------------------------------------------+\n|    IPC       | Basic Scheduler            |  <- Kernel space\n|    VM (min)  | Interrupt Handler         |   (small kernel)\n+------------------------------------------+\n|              Hardware                     |\n+------------------------------------------+\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assessment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower -- IPC overhead for service requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High -- service crash does not crash kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher -- services are memory-isolated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Development"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier -- services can be developed/updated independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High -- minimal hardware-dependent code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINIX, QNX, seL4, Mach"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-layered-approach",
      children: "3. Layered Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OS is divided into N layers, each built on top of the layer below. Layer 0 is hardware. Layer N is the user interface. Each layer only uses services from the immediate lower layer."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assessment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate -- requests must pass through each layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate -- upper layers depend on lower layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent -- clean separation of concerns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low -- hard to bypass layers or add cross-layer services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THE system (Dijkstra, 1968), Venus"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-modular-kernel-hybrid",
      children: "4. Modular Kernel (Hybrid)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern kernels combine monolithic and microkernel ideas. The kernel is a core with loadable modules (device drivers, file systems, protocol stacks). Modules run in kernel space but can be loaded/unloaded dynamically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------------------------------------------+\n|  User Applications  |  Shell  |  GUI          |\n+----------------------------------------------+\n|         System Libraries (libc)               |\n+----------------------------------------------+\n|         System Call Interface                 |\n+----------------------------------------------+\n| Core Kernel | Module 1 | Module 2 | Module 3 |\n| (scheduler,  | (driver) | (FS)     | (net)   |\n|  VM, IPC)    |          |          |         |\n| All modules in kernel space -- dynamic load   |\n+----------------------------------------------+\n|      Hardware Abstraction Layer               |\n+----------------------------------------------+\n|              Hardware                          |\n+----------------------------------------------+\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assessment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High -- module communication is direct (same address space)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate -- bad module can crash kernel, but modules are optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High -- load/unload modules at runtime, no recompile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Development"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate -- need stable module API, version compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows NT, modern Linux (with LKMs), macOS XNU"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernel-types-comparison",
      children: "Kernel Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monolithic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microkernel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hybrid (Modular)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exokernel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single large kernel in kernel space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal core + user-space services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core kernel + loadable modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal kernel exposes hardware directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single (all in kernel space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple (services isolated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single (modules in kernel space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library OSes get dedicated spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (direct calls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (IPC overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (direct calls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (minimal abstraction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (any bug crashes all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (services isolated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (bad module crashes kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (libOS bugs affect only that app)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (monolithic build)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (services swappable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (dynamic modules)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (apps manage resources)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of LOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of LOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of LOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of LOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, BSD, MS-DOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINIX, QNX, seL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows NT, macOS XNU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ExOS, Nemesis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-tracing-system-calls-with-strace",
      children: "Example 1: Tracing System Calls with strace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strace"
      }), " tool on Linux shows every system call a program makes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ strace -c ls /tmp\n% time     seconds  usecs/call     calls    errors syscall\n------ ----------- ----------- --------- --------- ----------------\n  0.00    0.000000           0         5           read\n  0.00    0.000000           0         1           write\n  0.00    0.000000           0        11           openat\n  0.00    0.000000           0        11           close\n  0.00    0.000000           0         7           fstat\n  0.00    0.000000           0        18           mmap\n  0.00    0.000000           0         4           mprotect\n  0.00    0.000000           0         2           munmap\n  0.00    0.000000           0         3           brk\n  0.00    0.000000           0         2           ioctl\n  0.00    0.000000           0         1           getdents64\n  0.00    0.000000           0         1           set_tid_address\n  0.00    0.000000           0        12           newfstatat\n  0.00    0.000000           0         1           set_robust_list\n------ ----------- ----------- --------- --------- ----------------\n100.00    0.000000                    79           total\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Even a simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ls"
      }), " command makes nearly 80 system calls!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-kernel-vs-user-mode",
      children: "Example 2: Kernel vs User Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processors support at least two privilege levels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User mode"
        }), ": Restricted access -- cannot execute privileged instructions, cannot access kernel memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel mode"
        }), ": Full access -- can execute any instruction, access any memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On x86, these are implemented via protection rings (Ring 0 = kernel, Ring 3 = user). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "syscall"
      }), " instruction (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int 0x80"
      }), " on older systems) transitions from user to kernel mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main() {\n    printf(\"About to attempt privileged operation...\\n\");\n    // Halt instruction -- only valid in kernel mode\n    __asm__(\"hlt\");\n    printf(\"This line never executes\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-system-call-vs-normal-function-call",
      children: "1. System Call vs Normal Function Call"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Normal Function Call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mode switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User -> Kernel -> User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stays in user mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (~1-5us) -- context save + mode switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (nanoseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privilege level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel mode (Ring 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User mode (Ring 3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware, kernel memory, page tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only user memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Triggered by"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "syscall"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int 0x80"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CALL"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BL"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "JSR"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1, sets errno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns error code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABI defined by kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by language ABI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(fd, buf, n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen(s)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-kernel-space-vs-user-space",
      children: "2. Kernel Space vs User Space"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High memory (e.g., 0xC0000000+ on 32-bit Linux)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low memory (0x00000000 - 0xBFFFFFFF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privilege ring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring 0 (x86) / EL1 (ARM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring 3 (x86) / EL0 (ARM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allowed instruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (HLT, IN/OUT, LGDT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All physical/virtual memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only process's address space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crash consequence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel panic -- system crashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segfault -- only the process dies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate kernel stack per process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entry method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only via system calls or interrupts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program execution starts here"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-rtos-vs-gpos",
      children: "3. RTOS vs GPOS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RTOS (FreeRTOS, QNX)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPOS (Linux, Windows)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary goal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput and fairness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority-based preemptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFS (Linux) or priority with boost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microkernel or minimal monolithic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monolithic or hybrid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory mgmt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static allocation, often no VM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory with paging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, bounded-time message passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipes, sockets, shared memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Footprint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5KB - 500KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1GB - 32GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boot time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airbag controller, pacemaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop, server, laptop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-nt-kernel",
      children: "Windows NT Kernel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Hybrid (modular kernel)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " Executive (kernel) + HAL + loadable drivers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key feature:"
        }), " HAL abstracts CPU architecture -- NT ran on x86, Alpha, MIPS, Itanium, ARM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System calls:"
        }), " NT API (ntdll.dll) translates Win32 API calls into kernel service requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design philosophy:"
        }), " \"The kernel does as little as possible\" -- microkernel-like philosophy but most services run in kernel space for performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------+\n| Win32 App  | Win32 App  | POSIX App|\n+------------------------------------+\n| kernel32.dll | ntdll.dll | psxdll  |\n+------------------------------------+\n|    System Service Dispatcher        |\n+------------------------------------+\n| I/O Mgr | Object Mgr | Process Mgr |\n| Cache   | VMM       | Security    |\n| + Device Drivers (loadable)         |\n+------------------------------------+\n| Hardware Abstraction Layer (HAL)    |\n+------------------------------------+\n|            Hardware                 |\n+------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-kernel",
      children: "Linux Kernel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Monolithic with loadable kernel modules (LKM)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " Single kernel image with dynamically loaded modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key features:"
        }), " CFS scheduler, VFS layer, namespaces, cgroups"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System calls:"
        }), " ~350+ on x86-64, defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sys_call_table"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design philosophy:"
        }), " \"Everything is a file\" -- devices, sockets, pipes accessed via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ioctl()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------------+\n| User Processes | Daemons | Shell          |\n+------------------------------------------+\n|  GNU C Library (glibc) -- syscall wrapper |\n+------------------------------------------+\n|       System Call Interface (arch/x86)    |\n+------------------------------------------+\n| VFS  | Scheduler | Memory  | Network     |\n| ext4 | CFS       | Manager | TCP/IP      |\n| + Loadable Kernel Modules + Drivers      |\n+------------------------------------------+\n| Architecture-specific code (x86/ARM)      |\n+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "macos--xnu-kernel",
      children: "macOS / XNU Kernel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Hybrid kernel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core:"
        }), " Mach microkernel (IPC, VM, scheduler) + BSD (file systems, networking, POSIX)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drivers:"
        }), " IOKit (C++-based driver framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System calls:"
        }), " Mach traps + BSD syscalls + Mach IPC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------------+\n| User-space: Launchd, WindowServer, Apps   |\n+------------------------------------------+\n| Mach IPC | BSD Syscalls | IOKit           |\n+------------------------------------------+\n| Mach Microkernel Core                     |\n| (scheduler, VM, IPC, task/thread mgmt)   |\n+------------------------------------------+\n| BSD Layer (POSIX, file systems, net)      |\n+------------------------------------------+\n| IOKit (C++ device drivers)               |\n+------------------------------------------+\n| Hardware                                  |\n+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qnx-rtos",
      children: "QNX RTOS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " True microkernel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel size:"
        }), " ~12KB (among the smallest production kernels)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " Kernel provides only IPC, scheduling, and interrupt handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key feature:"
        }), " If a driver crashes, it can be restarted without affecting the kernel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use cases:"
        }), " Automotive (255M+ vehicles), medical devices, industrial control"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------------+\n|  Proc A  |  Proc B  |  File Sys  | Net   |\n|  (app)   |  (driver)|  (fs-qnx6) | Stack |\n+------------------------------------------+\n|   Message Passing (IPC) -- QNX Neutrino   |\n+------------------------------------------+\n|  Scheduler | Interrupt | Timer | Signal  |  <- ~12KB microkernel\n+------------------------------------------+\n|  Hardware                                |\n+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monolithic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microkernel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modular (Hybrid)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exokernel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single large kernel in kernel space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal + user-space services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core + loadable modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware exposed to libOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (IPC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Development"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, BSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINIX, QNX, seL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THE, Venus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows NT, macOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ExOS, Nemesis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System software managing hardware and providing services to programs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System Call"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Programmatic request for kernel service (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "open()"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted privilege level -- no direct hardware access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel Mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full privilege -- can execute any instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trap/Interrupt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanism to switch from user to kernel mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library wrappers around system calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core OS component, always resident in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monolithic Kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single kernel with all services in kernel space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microkernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal kernel with most services in user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid Kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core kernel with loadable modules in kernel space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exokernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel exposing hardware directly to applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RTOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time OS with guaranteed task timing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-Process Communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saving/restoring state when switching processes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-os-boot-simulator",
      children: "TypeScript OS Boot Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class simulates the OS boot sequence, system call dispatch, and interrupt handling flow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * OS Boot and System Call Simulator\n * Demonstrates boot sequence, mode switching, and syscall dispatch\n */\ninterface MemoryRegion {\n  name: string;\n  base: number;\n  size: number;\n  contents: string[];\n}\n\ninterface PCB {\n  pid: number;\n  state: 'new' | 'ready' | 'running' | 'waiting' | 'terminated';\n  pc: number;\n  registers: Map<string, number>;\n}\n\nclass OSSimulator {\n  private kernelLoaded = false;\n  private currentMode: 'user' | 'kernel' = 'user';\n  private memoryMap: MemoryRegion[] = [];\n  private processes: PCB[] = [];\n  private nextPid = 1;\n  private interruptVector = new Map<number, string>();\n\n  constructor() {\n    this.initMemoryLayout();\n    this.initInterruptVector();\n  }\n\n  private initMemoryLayout(): void {\n    this.memoryMap = [\n      { name: 'BIOS/UEFI', base: 0xFFFF0000, size: 0x10000, contents: ['POST', 'Boot device selection'] },\n      { name: 'Bootloader', base: 0x7C00, size: 0x200, contents: ['Load kernel from disk'] },\n      { name: 'Kernel', base: 0x100000, size: 0x400000, contents: ['Scheduler', 'Memory mgr', 'VFS'] },\n      { name: 'User Programs', base: 0x400000, size: 0x1000000, contents: ['Applications'] },\n      { name: 'Interrupt Vector Table', base: 0x000000, size: 0x400, contents: ['ISR addresses'] }\n    ];\n  }\n\n  private initInterruptVector(): void {\n    this.interruptVector.set(0, 'Divide by Zero');\n    this.interruptVector.set(3, 'Breakpoint');\n    this.interruptVector.set(13, 'General Protection Fault');\n    this.interruptVector.set(14, 'Page Fault');\n    this.interruptVector.set(0x80, 'System Call (Linux)');\n  }\n\n  boot(): string[] {\n    const log: string[] = [];\n    log.push('=== OS Boot Sequence ===');\n    log.push('1. CPU reset: CS=0xF000, IP=0xFFF0 (BIOS entry)');\n    log.push('2. BIOS POST: Checking hardware integrity...');\n\n    // Simulate POST checks\n    const postOk = Math.random() > 0.1;\n    if (!postOk) {\n      log.push('ERROR: POST failed — beep code sequence emitted');\n      return log;\n    }\n    log.push('   CPU: OK, RAM: 4096 MB, Disk: 256 GB');\n    log.push('3. BIOS boot device selection: checking MBR/GPT');\n\n    // Load bootloader\n    log.push('4. Loading bootloader from sector 0 to 0x7C00');\n    log.push('5. Bootloader loads kernel from disk to 0x100000');\n    log.push('6. Kernel decompression and initialization...');\n    \n    this.kernelLoaded = true;\n    this.currentMode = 'kernel';\n    \n    log.push('7. Interrupt Descriptor Table (IDT) initialized');\n    log.push('8. Process table initialized (PID 0 = idle process)');\n    log.push('9. Memory management: page tables set up');\n    log.push('10. Device drivers loaded: keyboard, disk, timer');\n    log.push('11. init process (PID 1) spawned');\n    \n    this.currentMode = 'user';\n    log.push('12. Switching to user mode — system ready');\n    log.push(`    Kernel loaded: ${this.kernelLoaded}, Mode: ${this.currentMode}`);\n    return log;\n  }\n\n  systemCall(syscallNum: number, ...args: number[]): string {\n    const log: string[] = [];\n    log.push(`[${this.currentMode} mode] syscall(${syscallNum}) invoked`);\n    \n    if (this.currentMode === 'user') {\n      log.push('   → Trap instruction (int 0x80 / syscall)');\n      log.push('   → CPU switches to Ring 0 (kernel mode)');\n      this.currentMode = 'kernel';\n    }\n\n    const syscalls: Record<number, string> = {\n      0: 'read', 1: 'write', 2: 'open', 3: 'close',\n      4: 'stat', 5: 'fstat', 6: 'lstat', 7: 'poll',\n      8: 'lseek', 9: 'mmap', 10: 'mprotect', 11: 'munmap',\n      12: 'brk', 13: 'rt_sigaction', 14: 'rt_sigprocmask',\n      15: 'rt_sigreturn', 16: 'ioctl', 17: 'pread64',\n      18: 'pwrite64', 19: 'readv', 20: 'writev'\n    };\n\n    if (syscallNum in syscalls) {\n      log.push(`   → Kernel dispatches sys_${syscalls[syscallNum]}()`);\n      log.push(`   → Arguments: [${args.join(', ')}]`);\n      log.push('   → Operation performed in kernel space');\n    } else {\n      log.push(`   → Unknown syscall ${syscallNum} — returns -ENOSYS`);\n    }\n\n    log.push('   → sysretq / iretd — back to user mode');\n    this.currentMode = 'user';\n    \n    return log.join('\\n');\n  }\n\n  createProcess(program: string): number {\n    const pid = this.nextPid++;\n    const pcb: PCB = {\n      pid,\n      state: 'new',\n      pc: 0,\n      registers: new Map([['RAX', 0], ['RBX', 0], ['RCX', 0], ['RDX', 0]])\n    };\n    \n    this.processes.push(pcb);\n    return pid;\n  }\n\n  getMemoryMap(): MemoryRegion[] {\n    return [...this.memoryMap];\n  }\n\n  getStatus(): string {\n    return JSON.stringify({\n      kernelLoaded: this.kernelLoaded,\n      mode: this.currentMode,\n      processes: this.processes.length,\n      memoryRegions: this.memoryMap.length\n    }, null, 2);\n  }\n}\n\n// Usage example\nconst os = new OSSimulator();\nconsole.log(os.boot().join('\\n'));\nconsole.log(os.systemCall(1, 1, 0x1000, 12));\nconsole.log(os.systemCall(0, 0, 0x2000, 4096));\nconsole.log(os.getStatus());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-call-vs-library-call-comparison",
      children: "System Call vs Library Call Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many developers confuse library functions with system calls. The following table clarifies the distinction:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Function (API)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "brk()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User space (library code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privilege level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring 3 (user mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring 0 (kernel mode)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (~5-50 ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (~100-500 ns)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No mode switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User→kernel mode switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable across OS variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-specific syscall numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example flow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf()"
            }), " → formats string → calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            }), " → enters kernel → VFS→driver→hardware"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which component of the OS remains in memory at all times?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Shell"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Kernel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) File system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Device drivers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "System calls are typically invoked via which CPU instruction on x86-64?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int 0x80"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "syscall"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sysenter"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "call"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jmp"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary advantage of a microkernel over a monolithic kernel?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Faster execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Better isolation and reliability when a service crashes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Simpler to implement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Better support for device drivers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the layered OS approach, which layer interacts directly with hardware?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Application layer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Service layer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Kernel layer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Hardware Abstraction Layer (HAL)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of these is NOT a valid system call category?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Process control"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) File management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) User interface rendering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Device management"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-b, 10-b, 11-b, 12-d, 13-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strace -c ls"
        }), " on a Linux system and identify the five most frequently used system calls. Explain what each one does."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare Linux's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "syscall"
        }), " instruction with the legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int 0x80"
        }), " approach. What are the performance differences?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a TypeScript function that models the x86-64 syscall mechanism: the function should accept a syscall number and up to 6 arguments (matching the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rsi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdx"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r10"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r8"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r9"
        }), " register convention), simulate the mode switch, dispatch to the appropriate handler, and return a result."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research how macOS's XNU kernel handles system calls differently from Linux. What is the Mach trap mechanism?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a simple shell that demonstrates the relationship between library calls and system calls. When the user types ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls"
        }), ", the shell should trace which library functions are called (via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readdir"
        }), ", etc.) and which syscalls they ultimately trigger."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal OS boot simulator in TypeScript that models the x86 boot sequence: BIOS POST → bootloader → kernel decompression → init process → shell prompt."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smartphone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent connections (Nginx workers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query execution threads (PostgreSQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time tasks (FreeRTOS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App lifecycle (Android)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pools, keep-alive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer pool (innodb_buffer_pool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited SRAM/Flash, no VM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory pressure, low-kill daemon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static files, logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data files, WAL, undo logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash FS (littlefs, FAT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandbox storage (SQLite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User isolation, cgroups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC, row-level security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPU, privileged vs user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux app sandboxing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System Calls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accept(), read(), sendfile()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pread(), pwrite(), fsync()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task delays, semaphores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "binder IPC, mmap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which OS type guarantees critical tasks complete within a strict time bound? a) Batch b) Time-sharing c) Real-time d) Distributed"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What mechanism triggers user-to-kernel mode switch? a) Trap/interrupt b) Function call c) Context switch d) Library call"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which kernel structure runs most services in user space? a) Monolithic b) Microkernel c) Layered d) Hybrid"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which is a system call? a) printf() b) scanf() c) fork() d) malloc()"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Primary disadvantage of a microkernel vs monolithic? a) Worse security b) IPC overhead c) Harder to develop d) Less portable"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "x86-64 instruction to enter kernel mode? a) int 0x80 b) syscall c) call d) jmp"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kernel type of Windows NT? a) Monolithic b) Microkernel c) Hybrid d) Exokernel"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RTOS stands for? a) Rapid Transaction OS b) Real-Time OS c) Runtime OS d) Reliable Task OS"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-c, 2-a, 3-b, 4-c, 5-b, 6-b, 7-c, 8-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OS"
        }), " manages hardware resources and provides services -- like a building manager coordinates tenants, utilities, and access"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OS functions: process management, memory management, file system, I/O, security, networking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OS history: batch -> multiprogramming -> time-sharing -> modern systems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OS types: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "batch"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "time-sharing"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "distributed"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "real-time"
        }), " (hard/soft), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "embedded"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System calls"
        }), " are the interface between user programs and the kernel; they switch to kernel mode via a trap instruction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OS structures: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "monolithic"
        }), " (Linux), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "microkernel"
        }), " (MINIX), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "layered"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "modular/hybrid"
        }), " (Windows NT), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "exokernel"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel types: monolithic = speed, microkernel = reliability, hybrid = balance, exokernel = flexibility"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API is not the system call"
        }), " -- the library wraps the system call for convenience and portability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-1",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List five services an OS provides and explain why each is necessary."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between user mode and kernel mode? Why does this distinction exist?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strace"
        }), " on Linux to trace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls"
        }), ". Identify five different system calls and their purposes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw a diagram of the user-to-kernel transition during a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), " system call. Label all steps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate-1",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare batch processing with time-sharing. What hardware features made time-sharing possible?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the sequence from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf()"
        }), " to characters on terminal. List every OS component involved."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monolithic kernel is faster but less reliable than microkernel. Which would you choose for a spacecraft? Justify."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), " trace table, explain what could go wrong at Step 7 if the file descriptor is invalid."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-1",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research Mach microkernel in macOS/XNU. Which services run in user space and which in the kernel? Why is XNU called \"hybrid\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a minimal HAL interface (5-8 functions) for a kernel scheduler to operate across different CPU architectures."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a C program using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waitpid()"
        }), " to create a job-control shell."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a microkernel-like architecture in Python: a kernel process dispatching messages to user-space service handlers using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "queue.Queue"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[TIP]\nFocus on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "system call flow"
        }), " -- it is the bridge between user programs and the kernel. The user-to-kernel mode switch via trap/interrupt is foundational for every OS topic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[NOTE]\nThe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API vs system call"
        }), " distinction is frequently tested. Remember: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf()"
        }), " is an API; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write()"
        }), " is the system call."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[WARNING]\nDo not confuse ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "multiprogramming"
        }), " (multiple jobs in memory, CPU switches during I/O wait) with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "time-sharing"
        }), " (CPU switching between users for interactive response). Multiprogramming improves CPU utilization; time-sharing improves user experience."]
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