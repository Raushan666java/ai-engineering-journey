"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[50681],{

/***/ 45728
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_index_md_df7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-index-md-df7.json
const site_docs_courses_operating_systems_index_md_df7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/index","title":"Operating Systems — A Comprehensive Textbook","description":"Course Description","source":"@site/docs/courses/operating-systems/index.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/index","permalink":"/ai-engineering-journey/operating-systems/index","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"index","slug":"/operating-systems/index","title":"Operating Systems — A Comprehensive Textbook","sidebar_label":"Operating Systems — A Comprehensive Textbook","sidebar_position":19},"sidebar":"coursesSidebar","previous":{"title":"Chapter 18: Union-Find (Disjoint Set Union)","permalink":"/ai-engineering-journey/data-structures/18-union-find"},"next":{"title":"Chapter 1: Introduction to Operating Systems","permalink":"/ai-engineering-journey/operating-systems/01-introduction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/index.md


const frontMatter = {
	id: 'index',
	slug: '/operating-systems/index',
	title: 'Operating Systems — A Comprehensive Textbook',
	sidebar_label: 'Operating Systems — A Comprehensive Textbook',
	sidebar_position: 19
};
const contentTitle = 'Operating Systems — A Comprehensive Textbook';

const assets = {

};



const toc = [{
  "value": "Course Description",
  "id": "course-description",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "How to Use This Textbook",
  "id": "how-to-use-this-textbook",
  "level": 2
}, {
  "value": "Chapter List",
  "id": "chapter-list",
  "level": 2
}, {
  "value": "Part I: Foundations",
  "id": "part-i-foundations",
  "level": 3
}, {
  "value": "Part II: Concurrency",
  "id": "part-ii-concurrency",
  "level": 3
}, {
  "value": "Part III: Memory Management",
  "id": "part-iii-memory-management",
  "level": 3
}, {
  "value": "Part IV: Storage",
  "id": "part-iv-storage",
  "level": 3
}, {
  "value": "Part V: Advanced Topics",
  "id": "part-v-advanced-topics",
  "level": 3
}, {
  "value": "Supplementary Resources",
  "id": "supplementary-resources",
  "level": 2
}, {
  "value": "Conventions Used",
  "id": "conventions-used",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "operating-systems--a-comprehensive-textbook",
        children: "Operating Systems — A Comprehensive Textbook"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-description",
      children: "Course Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This textbook provides a rigorous, bottom-up exploration of modern operating systems — the software layer that mediates between hardware and applications. From boot sequences to virtual memory, from process scheduling to file systems, each chapter builds on the last to give you a complete mental model of how an OS works."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operating systems are the ultimate exercise in resource management: CPU cycles, memory pages, disk sectors, network packets, and security policies must be orchestrated so that hundreds of processes ", (0,jsx_runtime.jsx)(_components.em, {
        children: "feel"
      }), " like they have the machine to themselves. By the end of this course, you will understand not only ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what"
      }), " an OS does but ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why"
      }), " it does it — the trade-offs, the algorithms, the data structures, and the hardware constraints that shape every design decision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Computer architecture basics"
        }), ": CPU, memory hierarchy, interrupts, I/O buses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data structures"
        }), ": queues, linked lists, hash tables, trees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C programming"
        }), ": pointers, memory management, system calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic understanding of assembly"
        }), ": registers, stack, instruction execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-textbook",
      children: "How to Use This Textbook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each chapter follows a consistent structure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning Objectives"
        }), " — what you should be able to do after reading"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Theory"
        }), " — the concepts, algorithms, and reasoning (with subsections)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples"
        }), " — concrete code snippets, diagrams, and walkthroughs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summary"
        }), " — key takeaways in condensed form"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercises"
        }), " — tiered by difficulty: Basic, Intermediate, Advanced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code examples are written in C with POSIX system calls unless otherwise noted. All examples are pedagogical — they illustrate the concept, not production robustness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-list",
      children: "Chapter List"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-i-foundations",
      children: "Part I: Foundations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/01-introduction",
              children: "Introduction to Operating Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS definition, types (batch, time-sharing, distributed, real-time), history, system calls, OS structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/02-processes",
              children: "Processes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process concept, process states, PCB, context switching, process creation/termination, IPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/03-cpu-scheduling",
              children: "CPU Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS, SJF, SRTF, Priority, Round Robin, Multilevel Queue, Multilevel Feedback Queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/04-threads",
              children: "Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread models, user vs kernel threads, multithreading models (many-to-one, one-to-one, many-to-many), thread libraries (POSIX, Java)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-ii-concurrency",
      children: "Part II: Concurrency"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/05-synchronization",
              children: "Process Synchronization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race conditions, critical section problem, Peterson's solution, mutex locks, semaphores, hardware support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/06-semaphores-monitors",
              children: "Semaphores & Monitors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic synchronization problems (bounded buffer, readers-writers, dining philosophers), monitors, condition variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/07-deadlocks",
              children: "Deadlocks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock characterization (necessary conditions), resource-allocation graphs, prevention, avoidance (Banker's algorithm), detection, recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-iii-memory-management",
      children: "Part III: Memory Management"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/08-memory-management",
              children: "Memory Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous allocation, dynamic partitioning, paging, page tables, segmentation, TLB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/09-virtual-memory",
              children: "Virtual Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demand paging, page replacement (FIFO, Optimal, LRU, Second-Chance), thrashing, working-set model, allocation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-iv-storage",
      children: "Part IV: Storage"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/10-file-systems",
              children: "File Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File concepts, access methods (sequential, direct), directory structures, file system mounting, file sharing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/11-file-system-impl",
              children: "File System Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File system layout, allocation methods (contiguous, linked, indexed), free-space management, efficiency/performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/12-secondary-storage",
              children: "Secondary Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk scheduling (FCFS, SCAN, C-SCAN, LOOK), disk management, RAID structure and levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/13-io-systems",
              children: "I/O Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O hardware (ports, buses, controllers), polling vs interrupts, DMA, kernel I/O subsystem, buffering, caching, spooling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-v-advanced-topics",
      children: "Part V: Advanced Topics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/14-linux-kernel",
              children: "Linux Kernel Internals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux process/thread model (clone), O(1) and CFS schedulers, memory management (buddy allocator, slab), VFS, /proc filesystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/15-shell-scripting",
              children: "Shell Scripting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell types, variables, control flow, pipes, redirection, job control, signal handling, practical scripts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/16-security",
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, authorization, access control (DAC, MAC, RBAC), encryption, SELinux, Linux Security Modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/17-virtualization",
              children: "Virtualization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypervisors (Type 1 vs Type 2), container vs VM, hardware-assisted virtualization (Intel VT-x, AMD-V), paravirtualization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/operating-systems/18-case-studies",
              children: "Case Studies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows NT kernel, Linux kernel, macOS/XNU, real-time OS (FreeRTOS), microkernel comparison"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supplementary-resources",
      children: "Supplementary Resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommended OS"
        }), ": Linux (Ubuntu/Debian/Fedora) — all examples target POSIX"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommended text"
        }), ": ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Operating System Concepts"
        }), " (Silberschatz, Galvin, Gagne) — the \"Dinosaur Book\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Additional"
        }), ": ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Modern Operating Systems"
        }), " (Tanenbaum), ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Linux Kernel Development"
        }), " (Love)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Online"
        }), ": OSDev Wiki (osdev.org), Linux man pages (man7.org), The Linux Kernel documentation (kernel.org/doc)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conventions-used",
      children: "Conventions Used"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Code blocks like this indicate terminal commands or C source code\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Inline code"
      }), " denotes function names, system calls, or file paths"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Callout boxes highlight important nuances or common pitfalls"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning"
        }), ": These flag potential bugs or security-sensitive patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: June 2026"
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