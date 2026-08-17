"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81063],{

/***/ 26267
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_14_linux_kernel_md_8bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-14-linux-kernel-md-8bb.json
const site_docs_courses_operating_systems_14_linux_kernel_md_8bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/14-linux-kernel","title":"Chapter 14: Linux Kernel Internals","description":"---","source":"@site/docs/courses/operating-systems/14-linux-kernel.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/14-linux-kernel","permalink":"/ai-engineering-journey/operating-systems/14-linux-kernel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-linux-kernel","slug":"/operating-systems/14-linux-kernel","title":"Chapter 14: Linux Kernel Internals","sidebar_label":"Chapter 14: Linux Kernel Internals","sidebar_position":14},"sidebar":"course-operating-systems","previous":{"title":"Chapter 13: I/O Systems","permalink":"/ai-engineering-journey/operating-systems/13-io-systems"},"next":{"title":"Chapter 15: Shell Scripting","permalink":"/ai-engineering-journey/operating-systems/15-shell-scripting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/14-linux-kernel.md


const frontMatter = {
	id: '14-linux-kernel',
	slug: '/operating-systems/14-linux-kernel',
	title: 'Chapter 14: Linux Kernel Internals',
	sidebar_label: 'Chapter 14: Linux Kernel Internals',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Linux Kernel Internals';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "Key Terms",
  "id": "key-terms",
  "level": 2
}, {
  "value": "1. Linux Kernel Architecture",
  "id": "1-linux-kernel-architecture",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Monolithic vs Modular: Deep Dive",
  "id": "monolithic-vs-modular-deep-dive",
  "level": 3
}, {
  "value": "Kernel Space vs User Space",
  "id": "kernel-space-vs-user-space",
  "level": 3
}, {
  "value": "Kernel Subsystem Map",
  "id": "kernel-subsystem-map",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "2. Process Management in Linux",
  "id": "2-process-management-in-linux",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "task_struct: The Process Control Block",
  "id": "task_struct-the-process-control-block",
  "level": 3
}, {
  "value": "Process States in Linux",
  "id": "process-states-in-linux",
  "level": 3
}, {
  "value": "State Transition Diagram",
  "id": "state-transition-diagram",
  "level": 3
}, {
  "value": "The clone() System Call",
  "id": "the-clone-system-call",
  "level": 3
}, {
  "value": "Steps of clone()",
  "id": "steps-of-clone",
  "level": 4
}, {
  "value": "Dry Run: fork() Trace",
  "id": "dry-run-fork-trace",
  "level": 4
}, {
  "value": "Kernel Threads",
  "id": "kernel-threads",
  "level": 3
}, {
  "value": "Complexity Analysis of fork()",
  "id": "complexity-analysis-of-fork",
  "level": 3
}, {
  "value": "Edge Cases in Process Management",
  "id": "edge-cases-in-process-management",
  "level": 3
}, {
  "value": "3. Completely Fair Scheduler (CFS)",
  "id": "3-completely-fair-scheduler-cfs",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "CFS Core Concepts",
  "id": "cfs-core-concepts",
  "level": 3
}, {
  "value": "nice Value Weight Table",
  "id": "nice-value-weight-table",
  "level": 3
}, {
  "value": "CFS Red-Black Tree",
  "id": "cfs-red-black-tree",
  "level": 3
}, {
  "value": "CFS Scheduling Tick Pseudocode",
  "id": "cfs-scheduling-tick-pseudocode",
  "level": 3
}, {
  "value": "Dry Run: Three Processes Under CFS",
  "id": "dry-run-three-processes-under-cfs",
  "level": 3
}, {
  "value": "CFS with Different Nice Values",
  "id": "cfs-with-different-nice-values",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Edge Cases in CFS",
  "id": "edge-cases-in-cfs",
  "level": 3
}, {
  "value": "User-Space View: sched_setscheduler()",
  "id": "user-space-view-sched_setscheduler",
  "level": 3
}, {
  "value": "4. Memory Management in Linux",
  "id": "4-memory-management-in-linux",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Memory Allocation Hierarchy",
  "id": "memory-allocation-hierarchy",
  "level": 3
}, {
  "value": "Buddy Allocator",
  "id": "buddy-allocator",
  "level": 3
}, {
  "value": "Core Algorithm",
  "id": "core-algorithm",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run: Allocate 3 pages (order 2)",
  "id": "dry-run-allocate-3-pages-order-2",
  "level": 4
}, {
  "value": "SLAB/SLUB Allocator",
  "id": "slabslub-allocator",
  "level": 3
}, {
  "value": "SLUB Structure",
  "id": "slub-structure",
  "level": 4
}, {
  "value": "Key SLUB Operations",
  "id": "key-slub-operations",
  "level": 4
}, {
  "value": "kmalloc vs vmalloc vs __get_free_pages",
  "id": "kmalloc-vs-vmalloc-vs-__get_free_pages",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Kernel Same-Page Merging (KSM)",
  "id": "kernel-same-page-merging-ksm",
  "level": 3
}, {
  "value": "OOM Killer",
  "id": "oom-killer",
  "level": 3
}, {
  "value": "Edge Cases in Memory Management",
  "id": "edge-cases-in-memory-management",
  "level": 3
}, {
  "value": "5. Virtual File System (VFS)",
  "id": "5-virtual-file-system-vfs",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "VFS Object Model",
  "id": "vfs-object-model",
  "level": 3
}, {
  "value": "System Call Flow: read()",
  "id": "system-call-flow-read",
  "level": 3
}, {
  "value": "VFS Path Walk: /home/user/docs/file.txt",
  "id": "vfs-path-walk-homeuserdocsfiletxt",
  "level": 3
}, {
  "value": "Dentry Cache (dcache)",
  "id": "dentry-cache-dcache",
  "level": 3
}, {
  "value": "VFS Complexity Analysis",
  "id": "vfs-complexity-analysis",
  "level": 3
}, {
  "value": "Edge Cases in VFS",
  "id": "edge-cases-in-vfs",
  "level": 3
}, {
  "value": "6. Interrupt Handling",
  "id": "6-interrupt-handling",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Interrupt Flow",
  "id": "interrupt-flow",
  "level": 3
}, {
  "value": "Top Half vs Bottom Half",
  "id": "top-half-vs-bottom-half",
  "level": 3
}, {
  "value": "Bottom Half Mechanisms",
  "id": "bottom-half-mechanisms",
  "level": 3
}, {
  "value": "Edge Cases in Interrupt Handling",
  "id": "edge-cases-in-interrupt-handling",
  "level": 3
}, {
  "value": "7. Kernel Synchronization",
  "id": "7-kernel-synchronization",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Synchronization Primitive Comparison",
  "id": "synchronization-primitive-comparison",
  "level": 3
}, {
  "value": "Spinlock Usage",
  "id": "spinlock-usage",
  "level": 3
}, {
  "value": "Mutex Usage",
  "id": "mutex-usage",
  "level": 3
}, {
  "value": "Read-Copy-Update (RCU)",
  "id": "read-copy-update-rcu",
  "level": 3
}, {
  "value": "How RCU Works",
  "id": "how-rcu-works",
  "level": 4
}, {
  "value": "RCU API",
  "id": "rcu-api",
  "level": 4
}, {
  "value": "RCU Complexity",
  "id": "rcu-complexity",
  "level": 4
}, {
  "value": "Priority Inversion",
  "id": "priority-inversion",
  "level": 3
}, {
  "value": "Edge Cases in Kernel Synchronization",
  "id": "edge-cases-in-kernel-synchronization",
  "level": 3
}, {
  "value": "8. Kernel Modules",
  "id": "8-kernel-modules",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Complete Kernel Module Example",
  "id": "complete-kernel-module-example",
  "level": 3
}, {
  "value": "Makefile",
  "id": "makefile",
  "level": 3
}, {
  "value": "Build and Test",
  "id": "build-and-test",
  "level": 3
}, {
  "value": "Module Loading Steps",
  "id": "module-loading-steps",
  "level": 3
}, {
  "value": "Module Advantages &amp; Disadvantages",
  "id": "module-advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases in Kernel Modules",
  "id": "edge-cases-in-kernel-modules",
  "level": 3
}, {
  "value": "9. Control Groups (cgroups) and Namespaces",
  "id": "9-control-groups-cgroups-and-namespaces",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "cgroups (Control Groups)",
  "id": "cgroups-control-groups",
  "level": 3
}, {
  "value": "cgroup v2 Controllers",
  "id": "cgroup-v2-controllers",
  "level": 4
}, {
  "value": "cgroup Usage",
  "id": "cgroup-usage",
  "level": 3
}, {
  "value": "Namespaces",
  "id": "namespaces",
  "level": 3
}, {
  "value": "cgroups vs Namespaces: Comparison",
  "id": "cgroups-vs-namespaces-comparison",
  "level": 3
}, {
  "value": "How Docker Uses cgroups and Namespaces",
  "id": "how-docker-uses-cgroups-and-namespaces",
  "level": 3
}, {
  "value": "Edge Cases in cgroups and Namespaces",
  "id": "edge-cases-in-cgroups-and-namespaces",
  "level": 3
}, {
  "value": "10. Interview Corner",
  "id": "10-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the cost of switching between user mode and kernel mode?",
  "id": "q1-what-is-the-cost-of-switching-between-user-mode-and-kernel-mode",
  "level": 3
}, {
  "value": "Q2: How does the kernel handle a system call?",
  "id": "q2-how-does-the-kernel-handle-a-system-call",
  "level": 3
}, {
  "value": "Q3: When does the OOM killer trigger, and how does it select victims?",
  "id": "q3-when-does-the-oom-killer-trigger-and-how-does-it-select-victims",
  "level": 3
}, {
  "value": "Q4: What is the difference between a process and a thread in Linux?",
  "id": "q4-what-is-the-difference-between-a-process-and-a-thread-in-linux",
  "level": 3
}, {
  "value": "Q5: Explain the /proc filesystem. Why is it called a &quot;pseudo&quot; filesystem?",
  "id": "q5-explain-the-proc-filesystem-why-is-it-called-a-pseudo-filesystem",
  "level": 3
}, {
  "value": "Q6: What is priority inversion and how does Linux solve it?",
  "id": "q6-what-is-priority-inversion-and-how-does-linux-solve-it",
  "level": 3
}, {
  "value": "Q7: How do I measure context switch overhead?",
  "id": "q7-how-do-i-measure-context-switch-overhead",
  "level": 3
}, {
  "value": "Q8: What is the relationship between nice value and CFS vruntime?",
  "id": "q8-what-is-the-relationship-between-nice-value-and-cfs-vruntime",
  "level": 3
}, {
  "value": "11. Applications in Real Systems",
  "id": "11-applications-in-real-systems",
  "level": 2
}, {
  "value": "Android (Linux-based Mobile OS)",
  "id": "android-linux-based-mobile-os",
  "level": 3
}, {
  "value": "Embedded Linux",
  "id": "embedded-linux",
  "level": 3
}, {
  "value": "Containers (Docker, Podman, LXC)",
  "id": "containers-docker-podman-lxc",
  "level": 3
}, {
  "value": "Concept Comparison: Linux vs Windows NT vs macOS/XNU",
  "id": "concept-comparison-linux-vs-windows-nt-vs-macosxnu",
  "level": 3
}, {
  "value": "12. Summary",
  "id": "12-summary",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "TypeScript Implementation — CFS Scheduler Simulator",
  "id": "typescript-implementation--cfs-scheduler-simulator",
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
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-14-linux-kernel-internals",
        children: "Chapter 14: Linux Kernel Internals"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/13-io-systems",
          children: "I/O Systems"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/15-shell-scripting",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: Shell Scripting"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate monolithic vs modular kernel architecture with trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the Linux process model via task_struct and clone() system call"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze CFS scheduler design using vruntime and red-black trees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Linux memory management hierarchy: buddy allocator, SLAB/SLUB, vmalloc"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace a system call through VFS: open()/read()/write() path from user to device"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement, compile, and load a kernel module with /proc interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare kernel synchronization primitives: spinlock, mutex, RCU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand control groups and namespaces as container building blocks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel code is written in C (GCC extensions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process & threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux treats threads as special processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page tables, MMU, TLB operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User to kernel mode transition mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked lists, red-black trees, hash tables in kernel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monolithic + modules; kernel/user space split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Car factory: core chassis (kernel) + optional add-ons (modules)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Mgmt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "task_struct PCB, CFS, clone(), process states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hospital patient records (task_struct), triage nurse (scheduler)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Mgmt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buddy allocator (physical), SLUB (objects), KSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse (buddy: pallets of boxes), Vending machine (SLAB: cans)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "super_block, inode, dentry, file objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postal system: uniform delivery regardless of transport mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interrupts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top half (urgent), bottom half (deferrable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restaurant: host seats (top half), chef cooks (bottom half)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synchronization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spinlock, mutex, RCU, atomic ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library bathroom key (spinlock), coffee machine queue (mutex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cgroups/ns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits, namespace isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apartment building: separate units (ns), HOA rules (cgroups)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid\nflowchart LR\n    A[Linux Architecture<br/>Monolithic + Modules] --> B[Process Management<br/>task_struct + CFS]\n    A --> C[Memory Management<br/>Buddy + SLAB + vmalloc]\n    A --> D[VFS<br/>super_block/inode/dentry/file]\n    A --> E[Interrupt Handling<br/>Top half / Bottom half]\n    A --> F[Kernel Synchronization<br/>spinlock/mutex/RCU]\n    A --> G[cgroups & Namespaces<br/>Container foundations]\n    F --> H[Kernel Modules<br/>LKMs + /proc interface]\n    H --> I[Booting + System Call Flow]\n    I --> J[Interview Corner]\n    J --> K[Applications: Android, Embedded, Containers]\n    K --> L[Summary & Exercises]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terms",
      children: "Key Terms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "CFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completely Fair Scheduler: O(log n) red-black tree scheduler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual File System: uniform interface for multiple FS types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buddy Allocator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical page allocator using power-of-two block coalescing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SLAB/SLUB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel object cache allocator (SLUB is the modern default)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel Module"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamically loadable kernel code (.ko) extending functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System Call"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software interrupt (int 0x80 / sysenter) transitioning user to kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RCU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-Copy-Update: lock-free synchronization for read-heavy workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cgroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control group: constrain CPU/memory/IO per process group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Namespace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolate process trees, mounts, network, PID, user, IPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vruntime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual runtime: weighted execution time used by CFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOM Killer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-Of-Memory killer: terminates processes when memory exhausted"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-linux-kernel-architecture",
      children: "1. Linux Kernel Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of the Linux kernel as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a car factory with modular assembly lines"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monolithic core"
        }), " = The main chassis assembly line: everything is welded together, fast and efficient"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loadable modules"
        }), " = Optional feature kits (sunroof, GPS, heated seats) that snap in without rebuilding the factory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User space"
        }), " = The dealerships and customers who drive the cars but never enter the factory floor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System calls"
        }), " = The order forms dealerships submit to request cars from the factory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monolithic-vs-modular-deep-dive",
      children: "Monolithic vs Modular: Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Linux is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "monolithic kernel"
      }), " (all core services run in kernel space) with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loadable module support"
      }), " - not a hybrid kernel."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pure Monolithic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linux (Monolithic + Modules)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microkernel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single kernel space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single kernel space + module loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel + user-space servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls (ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls (ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC (us)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (module overhead negligible once loaded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (IPC overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recompile to change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load/unload at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add servers at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bug crashes entire kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buggy module can crash kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server crash = restart server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module debugging via kgdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (user space servers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single large binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller base + optional modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small kernel + many servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older Unix, early Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, Solaris"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minix, QNX, L4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernel-space-vs-user-space",
      children: "Kernel Space vs User Space"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privilege level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring 3 (x86)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring 0 (x86)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual address space only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical + virtual, all pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (HLT, IN/OUT, LGDT, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crash recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process killed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panic (system halts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "glibc, musl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (kernel has own lib: lib/)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entry points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System calls, exceptions, interrupts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (runs in kernel mode)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*The kernel has a minimal library (", (0,jsx_runtime.jsx)(_components.code, {
        children: "lib/"
      }), ") - string ops, checksums, sorting - not a full libc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernel-subsystem-map",
      children: "Kernel Subsystem Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------------------------------------------------------------+\n|                      USER SPACE (Ring 3)                          |\n|  [Application] -> [glibc] -> [syscall wrapper]                    |\n+-------------------------------|-----------------------------------+\n                               | int 0x80 / syscall / sysenter\n+-------------------------------|-----------------------------------+\n|                      KERNEL SPACE (Ring 0)                         |\n|                                                                   |\n|  +------------------+  +------------------+  +------------------+  |\n|  | System Call Layer|  | VFS Layer        |  | Signals          |  |\n|  | (sys_read, etc.) |  | (ext4, XFS, NFS) |  | (do_signal)      |  |\n|  +--------+---------+  +--------+---------+  +------------------+  |\n|           |                     |                                  |\n|  +--------v---------+  +--------v---------+  +------------------+  |\n|  | Process Mgmt      |  | Memory Mgmt       |  | Net Stack        |  |\n|  | (CFS, task_struct)|  | (Buddy, SLAB, MMU)|  | (TCP/IP)         |  |\n|  +-------------------+  +-------------------+  +------------------+  |\n|           |                     |                                  |\n|  +--------v---------+  +--------v---------+  +------------------+  |\n|  | Device Drivers    |  | Interrupt Handler|  | Arch code        |  |\n|  | (char, block, net)|  | (top/bottom half)|  | (x86, ARM)       |  |\n|  +-------------------+  +-------------------+  +------------------+  |\n|                                                                   |\n|  +-------------------------------------------------------------+  |\n|  | Kernel Modules (loadable .ko files)                          |  |\n|  | [driver.ko] [fs.ko] [netfilter.ko] [crypto.ko]              |  |\n|  +-------------------------------------------------------------+  |\n+-------------------------------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High performance (direct function calls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One bug panics entire system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modules isolated; core carefully reviewed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rich feature set in kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSM (SELinux, AppArmor), KASLR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime extensibility via modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module can introduce vulnerabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed modules, lock down insmod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tight integration of subsystems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coupling makes maintenance hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-defined APIs between subsystems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for general-purpose OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less suitable for safety-critical (no hard RT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREEMPT_RT patch set exists"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "module_init() fails"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module load aborted; no memory leak (error path cleans up)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents half-initialized modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "rmmod while in use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module refcount > 0; removal fails with EBUSY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents use-after-free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Module stack overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel oops (random memory corruption; no guard page)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack in kernel is small (8KB); deep call chains crash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel NULL deref"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "oops, often panic (depending on context)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A module bug that dereferences NULL crashes the system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel panic in IRQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "panic_on_oops (must be set; else deadlock)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt context cannot schedule; must die gracefully"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-process-management-in-linux",
      children: "2. Process Management in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task_struct"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hospital patient record"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patient ID (PID)"
        }), " = Unique patient number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State"
        }), " = In waiting room (runnable), in surgery (running), discharged (zombie)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority"
        }), " = Emergency severity level (triage)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mm"
        }), " = Medical history (memory map)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "files"
        }), " = Current prescriptions (open file descriptors)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "parent/children"
        }), " = Referring doctor / dependent patients"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "signal"
        }), " = Nurse call button (pending signals)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task_struct-the-process-control-block",
      children: "task_struct: The Process Control Block"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "include/linux/sched.h"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_struct"
      }), " is the largest structure in the kernel (approx 2KB on x86_64 with approx 200+ fields)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Complete field groups of task_struct (kernel 6.x)\nstruct task_struct {\n    /* 1. State & Identity */\n    volatile long           state;           // TASK_RUNNING, _INTERRUPTIBLE, etc.\n    int                     exit_state;      // EXIT_DEAD, EXIT_ZOMBIE\n    pid_t                   pid;             // Process ID\n    pid_t                   tgid;            // Thread group ID (PID of main thread)\n    struct task_struct      *real_parent;    // Actual parent (receives SIGCHLD)\n    struct task_struct      *parent;         // Receiving ptrace or debugger\n    struct list_head        children;        // List of children\n    struct list_head        sibling;         // Sibling in parent's children list\n\n    /* 2. Scheduling */\n    unsigned int            policy;          // SCHED_NORMAL, SCHED_FIFO, SCHED_RR, etc.\n    int                     prio;            // Dynamic priority\n    int                     static_prio;     // Base priority (set by nice)\n    int                     normal_prio;     // Normal priority (static + RT adjustments)\n    unsigned int            rt_priority;     // Real-time priority (0-99)\n    struct sched_entity     se;              // CFS scheduling entity\n    struct sched_rt_entity  rt;              // RT scheduling entity\n    struct sched_dl_entity  dl;              // Deadline scheduling entity\n\n    /* 3. Memory Management */\n    struct mm_struct        *mm;             // Memory descriptor (address space)\n    struct mm_struct        *active_mm;      // Borrowed mm for kernel threads\n\n    /* 4. File System */\n    struct fs_struct        *fs;             // Root, pwd, umask\n    struct files_struct     *files;          // Open file descriptor table\n    struct nsproxy          *nsproxy;        // Namespace proxy\n\n    /* 5. Signal Handling */\n    struct signal_struct    *signal;         // Shared signal handler table\n    struct sighand_struct   *sighand;        // Signal handler functions\n    sigset_t                blocked;         // Mask of blocked signals\n    sigset_t                real_blocked;    // Temporary signal mask\n    sigset_t                pending;         // Pending signals\n\n    /* 6. Credentials & Security */\n    const struct cred       *cred;           // UID, GID, capabilities\n    struct audit_context    *audit_context;  // Audit subsystem tracking\n\n    /* 7. Timers & Accounting */\n    cputime_t               utime;           // User-mode CPU time\n    cputime_t               stime;           // Kernel-mode CPU time\n    u64                     start_time;      // Boot time when process started\n    unsigned long           nvcsw;           // Voluntary context switches\n    unsigned long           nivcsw;          // Involuntary context switches\n\n    /* 8. Hardware Context */\n    struct thread_struct    thread;          // CPU registers, FPU state, debug regs\n\n    /* 9. cgroups */\n    struct css_set          *cgroups;        // Control group subsystem state\n\n    /* 10. Tracing & Profiling */\n    unsigned int            ptrace;          // Ptrace flags\n    struct list_head        ptraced;         // List of traced processes\n    struct list_head        ptrace_entry;    // Entry in ptracer's list\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-states-in-linux",
      children: "Process States in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define TASK_RUNNING            0x0000\n#define TASK_INTERRUPTIBLE      0x0001\n#define TASK_UNINTERRUPTIBLE    0x0002\n#define __TASK_STOPPED          0x0004\n#define __TASK_TRACED           0x0008\n#define EXIT_DEAD               0x0010\n#define EXIT_ZOMBIE             0x0020\n#define TASK_DEAD               0x0040\n#define TASK_WAKEKILL           0x0080\n#define TASK_WAKING             0x0100\n#define TASK_NOLOAD             0x0200\n#define TASK_NEW                0x0400\n#define TASK_RTLOCK_WAIT        0x0800\n#define TASK_FREEZABLE          0x1000\n#define TASK_FREEZABLE_UNSAFE   0x2000\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wake-up"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running or ready to run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already runnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_INTERRUPTIBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting for event, can receive signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal or event"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_UNINTERRUPTIBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting for event, no signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_STOPPED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stopped (SIGSTOP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGCONT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_TRACED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Being traced by ptrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptrace event"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXIT_ZOMBIE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminated, parent not yet waited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wait() call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXIT_DEAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final state (being reaped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-transition-diagram",
      children: "State Transition Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                          +-------------+\n                          |  TASK_NEW   |\n                          +------+------+\n                                 | fork()/clone() success\n                                 v\n                    +-----------------------+\n                    |   TASK_RUNNING        |<-------+\n                    | (runnable, waiting    |        |\n                    |  for CPU)             |        |\n                    +------+-------+--------+        |\n                      |    ^       |                 |\n    schedule()      |    |       | wake_up()        |\n    picks this task  |    |       +------------------+\n                      v    |\n              +---------------------------+\n              |   TASK_RUNNING (running)  |\n              +------+----------+---------+\n                 |          |\n        schedule()    |     syscall/exception\n        (preempt)     |     -> kernel mode\n                 |          |\n                 v          v\n    +-----------------------+  +--------------------------+\n    | TASK_INTERRUPTIBLE    |  | TASK_UNINTERRUPTIBLE     |\n    | (sleep, can signal)   |  | (sleep, no signals)      |\n    +--------+--------------+  +-----------+--------------+\n             | event/signal               | event only\n             +----------+-----------------+\n                        v\n                    TASK_RUNNING (runnable again)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-clone-system-call",
      children: "The clone() System Call"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Linux unifies process and thread creation under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone()"
      }), ". The library functions ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vfork()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pthread_create()"
      }), " all call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone()"
      }), " with different flag combinations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-of-clone",
      children: "Steps of clone()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allocate task_struct"
        }), ": kmem_cache_alloc(task_struct_cache) - approx 2KB from SLAB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy or share resources based on flags"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLONE_VM"
            }), " set -> share address space (no copy; thread semantics)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLONE_VM"
            }), " cleared -> copy-on-write page tables (fork semantics)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLONE_FILES"
            }), " -> share fd table; else copy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLONE_SIGHAND"
            }), " -> share signal handlers; else copy"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy thread_struct"
        }), ": Save register state for the new context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set scheduling entity"
        }), ": Initialize sched_entity with vruntime = 0 or inherit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wake up new task"
        }), ": Place on runqueue; scheduler picks when appropriate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// clone() flag combinations\npid_t clone(int (*fn)(void *), void *child_stack, int flags, void *arg, ...);\n\n// fork() behavior:\n#define FORK_FLAGS (CLONE_CHILD_SETTID | CLONE_CHILD_CLEARTID | SIGCHLD)\n\n// pthread_create() behavior (creates a thread):\n#define THREAD_FLAGS (CLONE_VM | CLONE_FILES | CLONE_SIGHAND | \\\n                      CLONE_THREAD | CLONE_SYSVSEM | CLONE_SETTLS | \\\n                      CLONE_PARENT_SETTID | CLONE_CHILD_CLEARTID | \\\n                      CLONE_CHILD_SETTID)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-fork-trace",
      children: "Dry Run: fork() Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "syscall entry: save regs, check syscall_nr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pt_regs on kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kmem_cache_alloc(task_struct_cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLAB cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy_process(): copy flags, creds, limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "task_struct fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(num_fields)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup_task_struct(): copy thread_struct, set parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thread_struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy_mm(): copy-on-write page tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mm_struct, pgd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(num_vmas)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy_files(): dup fd table (if not shared)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "files_struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(num_fds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy_sighand(): copy signal handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sighand_struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sched_fork(): init sched_entity, assign PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFS runqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wake_up_new_task(): place on runqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rq->cfs_tasks RB tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "syscall return: return PID to parent, 0 to child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernel-threads",
      children: "Kernel Threads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kernel threads are processes that run only in kernel mode. They have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no user-space address space"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "mm = NULL"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// kthread_create() - Create a kernel thread\nstruct task_struct *kthread_create(int (*threadfn)(void *data),\n                                   void *data, const char namefmt[], ...);\n\n// Example: kworker threads, khugepaged, kswapd, jbd2\n//  $ ps -eo pid,comm | grep '^\\[' \n//  [pid]  [kthreadd] [kswapd0] [khungtaskd] [jbd2/sda1-8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-fork",
      children: "Complexity Analysis of fork()"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "task_struct allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLAB cache pre-allocates objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy page tables (COW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = number of VMAs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must walk mmap list, mark all pages read-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy fd table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f) where f = number of open fds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel dup_fd() loops over RLIMIT_NOFILE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFS enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-black tree insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idr bitmap allocator (XArray since 5.x)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-process-management",
      children: "Edge Cases in Process Management"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zombie process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent has not called wait(); task_struct retained, no memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exit() sends SIGCHLD; wait() reaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphan process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent dies before child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child reparented to init (PID 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PID exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No free PIDs (65536 default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork() returns -EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread explosion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of threads sharing mm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack per thread causes VM pressure; nr_threads limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vfork() hang"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child execs or exits; parent blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_VFORK + wait_for_completion()"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-completely-fair-scheduler-cfs",
      children: "3. Completely Fair Scheduler (CFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CFS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "round-robin pizza party"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each person (process) has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hunger counter (vruntime)"
        }), " tracking how much pizza they have eaten"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The hungriest person (smallest vruntime) always gets the next slice"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VIP guests (higher priority via nice) get ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "larger slices"
        }), ", so their vruntime rises slower"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The organizer (scheduler) uses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "seating chart (red-black tree)"
        }), " sorted by hunger level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "target latency"
        }), " = goal time for everyone to eat at least once (approx 20ms pizza party round)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "minimum granularity"
        }), " = smallest bite size (approx 1ms, prevents choking on context switches)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cfs-core-concepts",
      children: "CFS Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CFS (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kernel/sched/fair.c"
      }), ", by Ingo Molnar, 2007) replaced the O(1) scheduler. It models an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ideal, perfectly fair multitasking CPU"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vruntime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vruntime += delta_exec * (1024 / se->load.weight)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted execution time; 1024 = NICE_0_LOAD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "load.weight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 / (1.25^n) where n = nice value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process weight: nice -20 = 88761, nice 0 = 1024, nice 19 = 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "target latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (default 20ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time interval for each task to run once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "min granularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (default 1ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum slice to limit context switch overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "time slice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target_latency / nr_running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-task timeslice (bounded by min/max granularity)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nice-value-weight-table",
      children: "nice Value Weight Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "nice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative CPU share vs nice 0"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88761"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86.7x more CPU time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9548"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.3x more CPU time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3355"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3x more CPU time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x (baseline)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "335"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.33x CPU time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.11x CPU time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.015x CPU time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cfs-red-black-tree",
      children: "CFS Red-Black Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    CFS runqueue (per-CPU):\n\n    rb_root: &rq->cfs_tasks\n         |\n         v\n          [vruntime=2000, A]                  <- root\n         /                  \\\n   [v=1000, B]            [v=3000, D]\n   /        \\            /        \\\n[v=500, E] [v=1500, F] [v=2500, G] [v=3500, H]\n     ^\n  leftmost -> pick_next_task_fair() returns this\n\nProperties:\n- Every node has vruntime > all nodes in its left subtree\n- Every node has vruntime < all nodes in its right subtree\n- Height <= 2*log2(n+1) (guaranteed by red-black invariants)\n  - Root is always black\n  - Red nodes have black children\n  - Every path from root to leaf has same number of black nodes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cfs-scheduling-tick-pseudocode",
      children: "CFS Scheduling Tick Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "scheduler_tick():\n  curr = current task\n  delta = now - curr->se.last_update_time\n  \n  // Update vruntime of current task\n  weight = curr->se.load.weight          // depends on nice value\n  curr->se.vruntime += delta * NICE_0_LOAD / weight\n  \n  // Check if we need to preempt\n  leftmost = rb_first(&rq->cfs_tasks)    // task with smallest vruntime\n  if curr->se.vruntime > leftmost->vruntime:\n      set_tsk_need_resched(curr)          // flag for preemption\n\npick_next_task_fair():\n  leftmost = rb_first(&rq->cfs_tasks)\n  se = rb_entry(leftmost, struct sched_entity, run_node)\n  task = container_of(se, struct task_struct, se)\n  return task                               // O(log n) -> O(1) with cached leftmost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-three-processes-under-cfs",
      children: "Dry Run: Three Processes Under CFS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario: 3 processes A, B, C all at nice 0, all start at vruntime=0, target_latency=20ms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (ms)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A vruntime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B vruntime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C vruntime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Leftmost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next Task"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A (arbitrary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After A runs 6.67ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After B runs 6.67ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After C runs 6.67ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A (arbitrary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After A runs 6.67ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each process gets exactly 6.67ms per round (20ms / 3 processes). Perfect fairness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cfs-with-different-nice-values",
      children: "CFS with Different Nice Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario: A (nice 0, weight 1024), B (nice -5, weight 3355), target_latency=20ms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (ms)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A vruntime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B vruntime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tie (A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A time slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B time slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-21.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B gets 16.4ms vs A gets 5ms (B weight 3355 vs A weight 1024 = 3.3x ratio). That matches the formula."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue task (rb_insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-black tree insertion requires rebalancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue task (rb_erase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-black tree deletion requires rebalancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pick next (pick_next_task_fair)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached leftmost pointer; update on enqueue/dequeue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update vruntime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple arithmetic on timer tick"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log n) matters"
      }), ": For a system with 1000 runnable processes, CFS worst-case is about 10 comparisons. The O(1) scheduler was also O(1) but used heuristics that hurt fairness. CFS trades slightly higher theoretical bound for guaranteed fairness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-cfs",
      children: "Edge Cases in CFS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Thundering herd"
            }), " (many tasks wake simultaneously)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each enqueues; RB tree rebalances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wake_idle() tries to spread across CPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling latency spikes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running task + many short tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O-bound tasks get compensation via sleep_avg in vruntime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RT task starvation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCHED_FIFO at rt_priority=99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time tasks run before CFS (RT class checked first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-prio task holds lock needed by high-prio task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority Inheritance Protocol (PI) via rt_mutex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU-bound hog under cgroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cgroup CPU limit caps vruntime advancement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throttle hierarchy via cfs_bandwidth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-space-view-sched_setscheduler",
      children: "User-Space View: sched_setscheduler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"Check and set scheduling policy for a process.\"\"\"\nimport os\nimport ctypes\nimport ctypes.util\n\nSCHED_OTHER = 0\nSCHED_FIFO = 1\nSCHED_RR = 2\nSCHED_BATCH = 3\nSCHED_IDLE = 5\nSCHED_DEADLINE = 6\n\nlibc = ctypes.CDLL(ctypes.util.find_library('c'))\n\nclass SchedParam(ctypes.Structure):\n    _fields_ = [(\"sched_priority\", ctypes.c_int)]\n\ndef get_sched_policy(pid=0):\n    policy = libc.sched_getscheduler(pid)\n    names = {0: \"SCHED_OTHER\", 1: \"SCHED_FIFO\", 2: \"SCHED_RR\",\n             3: \"SCHED_BATCH\", 5: \"SCHED_IDLE\", 6: \"SCHED_DEADLINE\"}\n    return names.get(policy, f\"UNKNOWN({policy})\")\n\ndef set_rt_policy(pid=0, policy=SCHED_FIFO, priority=50):\n    param = SchedParam(priority)\n    ret = libc.sched_setscheduler(pid, policy, ctypes.byref(param))\n    return ret == 0\n\npid = os.getpid()\nprint(f\"PID {pid} current policy: {get_sched_policy(pid)}\")\nprint(f\"PID {pid} min/max RT priority: \"\n      f\"{libc.sched_get_priority_min(SCHED_FIFO)}/\"\n      f\"{libc.sched_get_priority_max(SCHED_FIFO)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-memory-management-in-linux",
      children: "4. Memory Management in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Linux memory management is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a warehouse logistics system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buddy allocator"
        }), " = Forklift operator managing pallets of boxes. Only handles pallets in sizes that are powers of 2 (1-box, 2-box, 4-box, etc.). When a 3-box request comes in, splits a 4-box pallet into 2+2, gives one 2-box pallet plus a split from the other."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLAB allocator"
        }), " = A vending machine for frequently-used items. Each vending machine holds pre-packaged identical items (all are task_struct, all are inode, etc.). Items are grabbed quickly without forklifting pallets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "vmalloc"
        }), " = A custom crate builder that takes boards from different pallets and nails them together into a logically contiguous area (even though physically scattered)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KSM"
        }), " = Recycling center: finds identical items across the warehouse and replaces them with single shared copies (COW)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-allocation-hierarchy",
      children: "Memory Allocation Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                        +-----------+\n                        |  Process  |\n                        |  malloc() |\n                        +-----+-----+\n                              | page fault\n                              v\n                      +---------------+\n                      |  glibc alloc  |\n                      |  (brk/mmap)   |\n                      +-------+-------+\n                              | syscall (do_mmap/do_brk)\n                              v\n                      +---------------+\n                      |  Page Alloc   |\n                      |  (alloc_pages)|\n                      +-------+-------+\n                    /                \\\n                   v                  v\n          +-------------+     +---------------+\n          | Buddy Sys   |     | vmalloc()     |\n          | (phys cont) |     | (virt cont)   |\n          +------+------+     +-------+-------+\n                 |                     |\n                 v                     v\n          +-------------+     +---------------+\n          | SLAB/SLUB   |     | IOMMU/SW IOTLB|\n          | (obj cache) |     | (scatter seg) |\n          +------+------+     +---------------+\n                 |\n                 v\n          +-------------+\n          |  Page Frame |\n          |  (struct    |\n          |   page)     |\n          +-------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buddy-allocator",
      children: "Buddy Allocator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "buddy allocator"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "mm/page_alloc.c"
      }), ") manages physical page allocation. It maintains free lists for each order (0 through MAX_ORDER-1, typically 10)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "core-algorithm",
      children: "Core Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Free area lists (per-CPU, per-ZONE):\norder 0 (1 page = 4KB):  [page 4] [page 17] [page 93]\norder 1 (2 pages):        [pages 8-9] [pages 56-57]\norder 2 (4 pages):        [pages 12-15]\norder 3 (8 pages):        (empty)\norder 4 (16 pages):       [pages 64-79]\n...\norder 10 (1024 pages):    (empty)\n\nAllocation: request 3 pages:\n  1. Round up to next power of 2: 4 pages (order 2)\n  2. Check order 2 free list -> non-empty, take [pages 12-15]\n\n  If order 2 were empty:\n    3. Check order 3: exists, split [pages 12-19] into two buddies\n       - Buddy A: [pages 12-15] -> return to caller\n       - Buddy B: [pages 16-19] -> add to order 2 free list\n    4. Continue splitting if needed\n\nFreeing: free [pages 12-15]:\n  1. Compute buddy address for order 2: pages 16-19\n  2. Check if buddy is free (in order 2 free list)\n  3. If yes: merge into [pages 12-19], move to order 3\n  4. Check buddy at order 3: pages 20-27\n  5. Continue merging up\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "alloc_pages(gfp_mask, order):\n  for o = order to MAX_ORDER-1:\n    if free_list[o] is not empty:\n      block = remove from free_list[o]\n      while o > order:\n        o--\n        buddy = split(block)   // split into two halves\n        add buddy to free_list[o]\n      mark pages as allocated\n      return block\n  return NULL (OOM)\n\nfree_pages(block, order):\n  page_idx = page_to_index(block)\n  for o = order to MAX_ORDER-2:\n    buddy_idx = page_idx ^ (1 << o)  // XOR flips the bit at order o\n    buddy = index_to_page(buddy_idx)\n    if buddy is not free or buddy's order != o:\n      break\n    remove buddy from free_list[o]\n    page_idx &= buddy_idx             // merge: keep lower address\n    order++\n  add block at page_idx to free_list[order]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-allocate-3-pages-order-2",
      children: "Dry Run: Allocate 3 pages (order 2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "State before: order 2 empty, order 3 has [8-15] (8 pages)\n\nStep 1: Check order 2 -> empty\nStep 2: Check order 3 -> [8-15] exists\nStep 3: Split [8-15] -> buddy A [8-11], buddy B [12-15]\nStep 4: Add B [12-15] to order 2 free list\nStep 5: Return A [8-11] to caller\n\nState after: order 2 has [12-15], order 3 empty\n\nNow free A [8-11] back:\nStep 1: buddy of [8-11] at order 2 = [12-15]\nStep 2: [12-15] IS in order 2 free list -> merge\nStep 3: Merged = [8-15], add to order 3 free list\n\nState after free: order 2 empty, order 3 has [8-15]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slabslub-allocator",
      children: "SLAB/SLUB Allocator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLAB allocator"
      }), " (and its successor SLUB, default since Linux 2.6.23) manages kernel object allocations. It maintains caches of commonly used objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "slub-structure",
      children: "SLUB Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SLUB Cache: \"task_struct_cache\" (object size: 2KB)\n+---------------------------------------------------------------------+\n| SLUB page (1 or more physical pages)                                |\n|                                                                     |\n|  +----------+----------+----------+----------+----------+----------+|\n|  | task     | task     | task     | FREE     | FREE     | FREE     ||\n|  | struct   | struct   | struct   | (obj)    | (obj)    | (obj)    ||\n|  +----------+----------+----------+----------+----------+----------+|\n|  freelist pointer -> offset of 1st free object (indices: 3,4,5)    |\n+---------------------------------------------------------------------+\n| more SLUB pages...                                                  |\n|                                                                     |\n| Partial page:  [task][FREE][task][task][FREE][FREE]                 |\n| Full page:     [task][task][task][task][task][task]                 |\n| Empty page:    [FREE][FREE][FREE][FREE][FREE][FREE]                 |\n+---------------------------------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-slub-operations",
      children: "Key SLUB Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Create a cache for a specific object type\nstruct kmem_cache *cache = kmem_cache_create(\n    \"my_object\",          // name (visible in /proc/slabinfo)\n    sizeof(struct my_obj), // object size\n    0,                     // alignment (0 = natural)\n    SLAB_HWCACHE_ALIGN,    // flags\n    NULL);                 // constructor (optional)\n\n// Allocate an object\nstruct my_obj *obj = kmem_cache_alloc(cache, GFP_KERNEL);\n\n// Free an object\nkmem_cache_free(cache, obj);\n\n// Destroy cache (unload module)\nkmem_cache_destroy(cache);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kmalloc-vs-vmalloc-vs-__get_free_pages",
      children: "kmalloc vs vmalloc vs __get_free_pages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contiguity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "__get_free_pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical + virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4MB (10 pages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA buffers, page table pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kmalloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical + virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128KB (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driver buffers, small allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vmalloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by VM area"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (page table update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large kernel module, swap, framebuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kvmalloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual (falls back to vmalloc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-effort large allocation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Allocator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buddy allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) worst, O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) worst, O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split/coalesce walks up orders; fast-path has per-CPU page lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLUB allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freelist pop/push from per-CPU partial slabs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vmalloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must walk free vmap area, update page tables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernel-same-page-merging-ksm",
      children: "Kernel Same-Page Merging (KSM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KSM scans anonymous memory pages and merges identical ones:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redundant in virtual machines running the same OS/kernel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merged pages are marked copy-on-write"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Controlled via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/sys/kernel/mm/ksm/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ echo 100 > /sys/kernel/mm/ksm/pages_to_scan   # pages per scan\n$ echo 500 > /sys/kernel/mm/ksm/sleep_millisecs  # ms between scans\n$ cat /sys/kernel/mm/ksm/pages_shared            # merged pages\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oom-killer",
      children: "OOM Killer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When memory is exhausted and swap is full, the kernel invokes the OOM killer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Simplified OOM selection criteria (badness heuristic)\nunsigned long oom_badness(struct task_struct *p, struct mem_cgroup *memcg)\n{\n    // Base: total virtual memory size\n    points = get_mm_rss(p->mm) + get_mm_counter(p->mm, MM_SWAPENTS);\n    \n    // Root processes get less points (they're important)\n    if (has_capability_noaudit(p, CAP_SYS_ADMIN))\n        points -= 30;\n    \n    // Child processes of init (essential services) protected\n    if (p->pid == 1)  // init\n        points = 0;\n    \n    // OOM score adjustment (user-set via /proc/pid/oom_score_adj)\n    points += p->signal->oom_score_adj;\n    \n    // More points = more likely to be killed\n    return points;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check which process will be killed first\n$ for pid in /proc/[0-9]*; do\n>   echo \"$(cat $pid/oom_score) $(cat $pid/comm) $(cat $pid/oom_score_adj)\";\n> done | sort -rn | head -5\n\n# Protect a critical process\n$ echo -1000 > /proc/$(pidof mysqld)/oom_score_adj\n\n# Sacrifice a process\n$ echo 1000 > /proc/$(pidof memory_hog)/oom_score_adj\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-memory-management",
      children: "Edge Cases in Memory Management"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOM (no memory)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel invokes OOM killer; selects victim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "badness heuristic; can deadlock if victim holds locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free pages exist but no contiguous block for order >= 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "compact_nodes()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kswapd"
            }), " defrag via page migration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kmalloc > 8KB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls back to vmalloc transparently (if GFP flags allow)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kmalloc_large()"
            }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "alloc_pages()"
            }), " directly"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vmalloc fault"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLB miss; kernel walks page tables to find mapping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["vmalloc area covered by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kernel_page_tables"
            }), " on x86"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-virtual-file-system-vfs",
      children: "5. Virtual File System (VFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The VFS is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a postal system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "super_block"
        }), " = A post office distribution center (one per country/mounted FS)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "inode"
        }), " = A specific address/location (unique per file; stores metadata like who lives there, size of building)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dentry"
        }), " = A street sign in a directory listing (one per path component: \"/\", \"usr\", \"share\", \"doc\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "file"
        }), " = An open letter you are currently reading (has a bookmark/f_pos for where you are)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "file_operations"
        }), " = Instructions for how letters are handled in each country (ext4 reads vs NFS reads)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No matter who delivers the mail (ext4, XFS, NFS), the postal worker uses the same procedure: find zip code (super_block), go to address (inode), find street sign (dentry), read letter (file)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vfs-object-model",
      children: "VFS Object Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// The four core VFS objects\n\n// 1. super_block: metadata for a mounted filesystem\nstruct super_block {\n    dev_t                     s_dev;          // Device identifier\n    unsigned long             s_blocksize;    // Block size (e.g., 4096)\n    struct file_system_type   *s_type;        // ext4, xfs, btrfs, etc.\n    struct super_operations   *s_op;          alloc_inode, destroy_inode, sync_fs, etc.\n    struct dentry             *s_root;        // Root dentry of this FS\n    struct list_head          s_inodes;       // List of all inodes on this FS\n    void                      *s_fs_info;     // Filesystem-specific data\n};\n\n// 2. inode: permanent metadata for a file/directory\nstruct inode {\n    umode_t                   i_mode;         // File type + permissions\n    uid_t                     i_uid;          // Owner UID\n    gid_t                     i_gid;          // Owner GID\n    loff_t                    i_size;         // File size in bytes\n    struct timespec64         i_atime;        // Last access time\n    struct timespec64         i_mtime;        // Last modify time\n    struct timespec64         i_ctime;        // Last status change time\n    unsigned long             i_ino;          // Inode number (unique within FS)\n    struct inode_operations   *i_op;          // lookup, create, link, unlink, mkdir, etc.\n    struct address_space      *i_mapping;     // Page cache mapping\n    atomic_t                  i_count;        // Reference count\n};\n\n// 3. dentry: directory entry (path component in memory)\nstruct dentry {\n    struct dentry             *d_parent;      // Parent directory dentry\n    struct qstr               d_name;         // Component name (\"home\", \"file.txt\")\n    struct inode              *d_inode;       // Inode this dentry points to\n    unsigned char             d_flags;        // Flags (DCACHE_DISCONNECTED, etc.)\n    struct list_head          d_child;        // Child of parent's d_subdirs list\n    struct list_head          d_subdirs;      // List of child dentries\n    struct dentry_operations  *d_op;          // d_compare, d_delete, d_release\n    struct super_block        *d_sb;          // Super block\n};\n\n// 4. file: open file descriptor (process-specific)\nstruct file {\n    struct file_operations    *f_op;          // read, write, llseek, mmap, etc.\n    struct dentry             *f_dentry;      // Associated dentry\n    struct vfsmount           *f_vfsmnt;      // Mount point\n    loff_t                    f_pos;          // Current file position\n    fmode_t                   f_mode;         // FMODE_READ, FMODE_WRITE\n    int                       f_flags;        // O_SYNC, O_NONBLOCK, etc.\n    void                      *private_data;  // Filesystem-specific data\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-call-flow-read",
      children: "System Call Flow: read()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User space:                        Kernel space:\n+-----------+\n| read(fd, buf, count)            Stage 1: syscall entry\n|   glibc wrapper:                - syscall instruction (sysenter/syscall)\n|     mov $0, %rax (sys_read)     - save registers to pt_regs\n|     syscall                     - verify syscall number (0 = read)\n+--------+-----------+            - jump to sys_read() in fs/read_write.c\n         |            ^\n         |            | return to user (restore regs, iret/sysexit)\n         v            |\n   Stage 2: VFS sys_read()\n   +--------------------------+\n   | fd = 3 (regular file)    |\n   | struct file *filp =      |\n   |   fget(fd)               |\n   | struct inode *inode =    |\n   |   file_inode(filp)       |\n   | loff_t pos = filp->f_pos |\n   |                          |\n   | Stage 3: call specific FS|\n   | ret = filp->f_op->read() |\n   |   -> ext4_file_read_iter() -> -> -> generic_file_read_iter()\n   |                          |\n   | Stage 4: page cache      |\n   | address_space =           |\n   |   inode->i_mapping       |\n   | page = pagecache_get_page|\n   | if page not in cache:    |\n   |   page = page_cache_alloc|\n   |   mapping->a_ops->       |\n   |     readpage(page)       |\n   |   -> submit_bio()        |\n   |   -> block layer         |\n   |   -> device driver       |\n   |   -> disk                |\n   |                          |\n   | copy_page_to_user(page,  |\n   |   buf, count)            |\n   | filp->f_pos += count     |\n   | fput(filp)               |\n   | return count             |\n   +--------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vfs-path-walk-homeuserdocsfiletxt",
      children: "VFS Path Walk: /home/user/docs/file.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Start at task->fs->root (dentry for \"/\")\nStep 2: Look up \"home\":\n   - Check dentry cache (dcache) for <parent_dentry, \"home\">\n   - If miss: call ext4_lookup() on root inode\n   - Read root directory contents, find \"home\" entry\n   - Create a new dentry, attach to inode from on-disk\nStep 3: Follow dentry to inode. Look up \"user\":\n   - Check dcache (miss on first access)\n   - Call inode->i_op->lookup() on home_inode\n   - ext4_readdir() on home directory\n   - Find \"user\" entry, get inode number\n   - If not in dcache: alloc new dentry + read inode from disk\nStep 4: Follow to inode. Look up \"docs\":\n   - Same process (usually dentry is now cached if recently accessed)\nStep 5: Follow to inode. Look up \"file.txt\":\n   - Same process\n   - Final dentry -> final inode\nStep 6: Open: dentry->d_inode->i_fop->open()\n   - For regular file: typically just succeeds (check perms, etc.)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dentry-cache-dcache",
      children: "Dentry Cache (dcache)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dcache speeds up path resolution. It caches resolved dentry-to-inode mappings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dcache (hash table, keyed by parent dentry + name hash):\n+-----------------------------------------------+\n| hash_buckets[0]: dentry_A -> dentry_B -> ...  |\n| hash_buckets[1]: dentry_C                     |\n| hash_buckets[2]: (empty)                      |\n| ...                                            |\n+-----------------------------------------------+\n\nEach dentry has:\n- d_hash (hash list pointer)\n- d_lru (for LRU reclaim when memory tight)\n- d_count (reference count; can be negative dentry for names that don't exist)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vfs-complexity-analysis",
      children: "VFS Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "open() path walk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst where n = path depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each \"/\" component requires lookup and dcache probe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "open() with dcache hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) but each lookup is O(1) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table lookup per component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read() cached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) if page in page cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct copy_to_user from page cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read() uncached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + I/O wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page fault reads from disk; I/O dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stat()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) path walk then O(1) inode read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk to inode; read metadata from inode"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-vfs",
      children: "Edge Cases in VFS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symlink loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELOOP returned (max 40 follows)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "symlink"
            }), " limit in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "namei()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardlink across mounts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXDEV returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inode numbers unique per FS; cannot link across superblocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File deleted while open"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inode retained until all fds closed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "i_count"
            }), " reference counting; data still accessible"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk full during write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENOSPC; page remains dirty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "writeback fails; error returned to user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "mmap file truncated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGBUS on access past new size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vm_ops->fault()"
            }), " checks i_size"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale NFS file handle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESTALE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server restarted inode; client dentry invalid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-interrupt-handling",
      children: "6. Interrupt Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Interrupt handling is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a restaurant with a host and a chef"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupt (IRQ)"
        }), " = A customer arrives (doorbell rings)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top half (ISR)"
        }), " = The host quickly seats the customer, takes the name, gives menu. Very fast (approx 10us). Must not block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bottom half (softirq/tasklet/workqueue)"
        }), " = The chef cooks the meal. Can take longer, can sleep if needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why split?"
        }), " If the host did the cooking too, the door would be unattended and no new customers could be seated (interrupts would be disabled too long)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interrupt-flow",
      children: "Interrupt Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hardware Event (e.g., network packet arrives):\n  |\n  +-> CPU receives IRQ (interrupt request line)\n  |      |\n  +-> CPU saves current context (registers, flags)\n  |      |\n  +-> Disable interrupts on this CPU (to prevent nesting)\n  |      |\n  +-> Jump to IDT (Interrupt Descriptor Table) entry\n  |      |\n  +-> Execute ISR (top half):\n  |     - Acknowledge hardware (clear IRQ)\n  |     - Copy data to memory (DMA or PIO)\n  |     - Schedule bottom half (softirq/tasklet/workqueue)\n  |     - Return: restore registers, re-enable interrupts\n  |      |\n  +-> (later, on next ksoftirqd or return from interrupt):\n       Execute bottom half:\n       - Process the data (e.g., TCP/IP stack)\n       - Wake up waiting processes\n       - Can sleep if workqueue; cannot if softirq/tasklet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-half-vs-bottom-half",
      children: "Top Half vs Bottom Half"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Top Half (ISR)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bottom Half (Softirq/Tasklet/Workqueue)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediately on interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred, scheduled by top half"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interrupts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disabled on local CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabled (softirqs disabled for softirq)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can sleep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softirq: No; Workqueue: Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As short as possible (us)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longer (ms or more)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softirq: interrupt; Tasklet: softirq; Workqueue: process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dedicated to"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific IRQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually shared (tasklet bound to CPU)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bottom-half-mechanisms",
      children: "Bottom Half Mechanisms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Sleep"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "softirq"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statically allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple CPUs run same handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network RX/TX, block layer, timers, tasklets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "tasklet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built on softirq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same tasklet serialized on one CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drivers (classic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "workqueue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled on any CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running tasks, I/O completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "threaded IRQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel thread per IRQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-IRQ thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drivers that need sleep, PREEMPT_RT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-interrupt-handling",
      children: "Edge Cases in Interrupt Handling"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IRQ storm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of interrupts per second"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "irqbalance"
            }), " spreads across CPUs; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nohz_full"
            }), " for isolation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interrupt nesting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top half interrupted by higher-priority IRQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel tracks interrupt nesting depth; saves/restores flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bottom half too slow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softirqs consume all CPU (networking flood)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ksoftirqd"
            }), " bounds softirq processing; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "net_rx_action"
            }), " quota"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing IRQ ack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device never generates another interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard lockup detector; watchdog fires"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-kernel-synchronization",
      children: "7. Kernel Synchronization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Synchronization in the kernel is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "access control in a busy office building"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spinlock"
        }), " = The single-emergency-bathroom key. You grab it, go in, lock the door, come out in 2 seconds. If the key is taken, you stand there spinning in place until it's free. Only for very quick tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutex"
        }), " = The coffee machine queue. If machine is busy, you go sit at your desk (sleep) and get notified when it's free. Can wait a while."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RCU (Read-Copy-Update)"
        }), " = The office whiteboard. Many people can read it simultaneously. When someone needs to update it, they prepare a new version on a separate board, then quickly swap them. Readers never wait."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic operations"
        }), " = The elevator call button. Pressing it is a single, indivisible action. Two people cannot both press it at exactly the same time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "synchronization-primitive-comparison",
      children: "Synchronization Primitive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Primitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sleep"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead (ns)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Starvation-Free"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "spinlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Busy-wait (atomic test-and-set)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (including IRQ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (can spin forever)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick critical sections (us)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "raw_spinlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninterruptible busy-wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (including NMI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low-level (scheduler, timer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "mutex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleep-wait (down/up)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (priority inheritance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longer critical sections (ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "rt_mutex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleep-wait with PI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (PI prevents inversion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time mutex (futex, PI-futex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "semaphore"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-based sleep-wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting resource access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "rwlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple readers / single writer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (including IRQ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (writer can starve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-mostly, short sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RCU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-free read, deferred free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grace period only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read: 1-5; Free: 100-10K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-mostly, pointer updates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spinlock-usage",
      children: "Spinlock Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "spinlock_t my_lock = SPIN_LOCK_UNLOCKED; // or DEFINE_SPINLOCK(my_lock)\n\nvoid critical_section(void)\n{\n    unsigned long flags;\n    \n    // Must disable local IRQ if this code runs in interrupt context\n    spin_lock_irqsave(&my_lock, flags);\n    \n    // Critical section: very short, no sleeping, no blocking\n    shared_data->value++;\n    list_add(&shared_data->list, &global_list);\n    \n    spin_unlock_irqrestore(&my_lock, flags);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spinlock Pitfalls"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Holding spinlock while sleeping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System deadlock (scheduler needs same lock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spinlock protect across IRQ handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt deadlock (ISR spins on held lock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too long in spinlock critical section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High interrupt latency, system feels sluggish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not disabling interrupts (", (0,jsx_runtime.jsx)(_components.code, {
              children: "spin_lock"
            }), " not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_irqsave"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt handler on same CPU deadlocks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mutex-usage",
      children: "Mutex Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "DEFINE_MUTEX(my_mutex);\n\nvoid long_critical_section(void)\n{\n    mutex_lock(&my_mutex);    // may sleep (schedule out)\n    \n    // Longer operation; can sleep (kmalloc, copy_to_user, etc.)\n    struct my_obj *obj = kmalloc(sizeof(*obj), GFP_KERNEL);\n    \n    mutex_unlock(&my_mutex);  // wake up waiters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mutex vs Spinlock Decision"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Can the critical section sleep?\n  +-- Yes -> Use mutex (or semaphore)\n  +-- No -> Can it run in interrupt context?\n  |     +-- Yes -> Use spinlock (with appropriate irq variant)\n  |     +-- No -> Is the critical section very short (us)?\n  |     |     +-- Yes -> Use spinlock (faster)\n  |     |     +-- No -> Use mutex (avoid long busy-wait)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-copy-update-rcu",
      children: "Read-Copy-Update (RCU)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RCU is the kernel's most sophisticated synchronization mechanism, designed for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "read-mostly data structures"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-rcu-works",
      children: "How RCU Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reader"
        }), ": Read the pointer without any lock. Just ensure you access before a grace period ends."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Writer"
        }), ": Create a new copy of the data structure, update the pointer atomically (rcu_assign_pointer)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grace period"
        }), ": Wait until all pre-existing readers have finished. Then free the old copy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial state: ptr -> [data_old]\n\nReader 1 starts: reads ptr (gets data_old)     [time ---->\nReader 2 starts: reads ptr (gets data_old)     [time ---->\nWriter: alloc new_data, copy, modify\nWriter: rcu_assign_pointer(ptr, new_data)       ptr -> [data_new]\nReader 3 starts: reads ptr (gets data_new)      [time ---->\nReader 4 starts: reads ptr (gets data_new)      [time ---->\nWriter: synchronize_rcu()                       wait for R1,R2 to finish\nWriter: kfree(data_old)                         safe to free\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rcu-api",
      children: "RCU API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Reader side */\nrcu_read_lock();             // lightweight; disables preemption only\np = rcu_dereference(ptr);   // read + memory barrier\n// access through p...\nrcu_read_unlock();\n\n/* Writer side */\nstruct my_data *new = kmalloc(sizeof(*new), GFP_KERNEL);\n*new = *old;                 // copy\nnew->field = new_value;      // modify\nrcu_assign_pointer(ptr, new); // publish (memory barrier)\nsynchronize_rcu();           // wait for all existing readers to finish\nkfree(old);                  // safe to free old data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rcu-complexity",
      children: "RCU Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reader overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1), approx 1-5ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just pointer read + memory barrier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Writer update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic pointer assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grace period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(wait for pre-existing readers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on CPU scheduling; typically tens of us"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory for grace period tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-CPU bitmaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with number of CPUs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "priority-inversion",
      children: "Priority Inversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Priority inversion occurs when a high-priority task is blocked by a low-priority task holding a needed lock, while a medium-priority task preempts the low-priority task."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario: H (high), M (medium), L (low) priority tasks\nLock L1 shared between H and L\n\nTime -->\nH: needs L1  -- blocked (L holds L1)\nL: holds L1\nM: preempts L (M has higher priority than L, but lower than H)\n   -- L cannot release L1 because L is not running\n   -- H is stuck waiting for L1\n   -- M runs freely despite H being blocked\n   -- Priority inversion!\n\nSolution: Priority Inheritance Protocol (PI)\n  - When H blocks on L1 held by L:\n    - L temporarily inherits H's priority (becomes high priority)\n    - L runs instead of M\n    - L releases L1, priority drops back to normal\n    - H acquires L1 and runs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Linux implements PI via rt_mutex (used in futex, PI-futex)\nstruct rt_mutex {\n    raw_spinlock_t      wait_lock;\n    struct rb_root_cached   waiters;   // Red-black tree of waiters\n    struct task_struct      *owner;    // Current owner (bit 0 marks \"has waiters\")\n};\n\n// PI is transparent to user space via:\n//   pthread_mutexattr_setprotocol(&attr, PTHREAD_PRIO_INHERIT);\n//   pthread_mutex_init(&mtx, &attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-kernel-synchronization",
      children: "Edge Cases in Kernel Synchronization"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spinlock in IRQ context"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spin_lock_irqsave()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disables local interrupts; prevents deadlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ABBA deadlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two tasks, two locks, inconsistent order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lockdep validates locking order; circular dependency detected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RCU stall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader holds rcu_read_lock for too long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RCU stall detector prints warning; can panic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rcu_cpu_stall_panic"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lock contention on hot cacheline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cacheline bouncing between CPUs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "perf c2c"
            }), " detects false sharing; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "____cacheline_aligned"
            }), " annotation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutex owner dies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never releases lock"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kernel detects: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mutex_lock()"
            }), " returns -EOWNERDEAD (robust futex)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-kernel-modules",
      children: "8. Kernel Modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kernel modules are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "USB peripherals for the operating system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You plug in a USB device (insmod module.ko)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It connects to the system bus and registers itself"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Other parts of the system can now use it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You unplug it (rmmod) and it disconnects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No need to reboot the computer (no need to recompile the kernel)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-kernel-module-example",
      children: "Complete Kernel Module Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// simple_proc_module.c\n#include <linux/module.h>\n#include <linux/kernel.h>\n#include <linux/init.h>\n#include <linux/proc_fs.h>\n#include <linux/uaccess.h>\n#include <linux/slab.h>\n\n#define PROC_NAME \"my_device\"\n#define BUF_SIZE  PAGE_SIZE\n\nstatic char *storage;\nstatic struct proc_dir_entry *proc_entry;\n\nstatic ssize_t my_read(struct file *file, char __user *ubuf,\n                       size_t count, loff_t *ppos)\n{\n    int len = strlen(storage);\n    return simple_read_from_buffer(ubuf, count, ppos, storage, len);\n}\n\nstatic ssize_t my_write(struct file *file, const char __user *ubuf,\n                        size_t count, loff_t *ppos)\n{\n    if (count > BUF_SIZE - 1)\n        return -ENOSPC;\n    \n    if (copy_from_user(storage, ubuf, count))\n        return -EFAULT;\n    \n    storage[count] = '\\0';\n    return count;\n}\n\nstatic struct file_operations proc_fops = {\n    .owner = THIS_MODULE,\n    .read  = my_read,\n    .write = my_write,\n};\n\nstatic int __init my_init(void)\n{\n    storage = kmalloc(BUF_SIZE, GFP_KERNEL);\n    if (!storage)\n        return -ENOMEM;\n    \n    strcpy(storage, \"Hello from kernel module!\\n\");\n    \n    proc_entry = proc_create(PROC_NAME, 0666, NULL, &proc_fops);\n    if (!proc_entry) {\n        kfree(storage);\n        return -ENOMEM;\n    }\n    \n    printk(KERN_INFO \"Module loaded. Created /proc/%s\\n\", PROC_NAME);\n    return 0;\n}\n\nstatic void __exit my_exit(void)\n{\n    remove_proc_entry(PROC_NAME, NULL);\n    kfree(storage);\n    printk(KERN_INFO \"Module unloaded. Removed /proc/%s\\n\", PROC_NAME);\n}\n\nmodule_init(my_init);\nmodule_exit(my_exit);\n\nMODULE_LICENSE(\"GPL\");\nMODULE_AUTHOR(\"OS Course\");\nMODULE_DESCRIPTION(\"/proc device example - read/write string storage\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makefile",
      children: "Makefile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "obj-m += simple_proc_module.o\n\nKDIR := /lib/modules/$(shell uname -r)/build\nPWD  := $(shell pwd)\n\nall:\n\t$(MAKE) -C $(KDIR) M=$(PWD) modules\n\nclean:\n\t$(MAKE) -C $(KDIR) M=$(PWD) clean\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-and-test",
      children: "Build and Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build the module\n$ make\nmake -C /lib/modules/6.2.0-35-generic/build M=/home/user/modules modules\n  CC [M]  simple_proc_module.o\n  MODPOST simple_proc_module.mod.c\n  CC [M]  simple_proc_module.mod.o\n  LD [M]  simple_proc_module.ko\n\n# Load\n$ sudo insmod simple_proc_module.ko\n$ lsmod | grep simple_proc\nsimple_proc_module     16384  0\n\n# Test read\n$ cat /proc/my_device\nHello from kernel module!\n\n# Test write\n$ echo \"Kernel programming is fun\" > /proc/my_device\n$ cat /proc/my_device\nKernel programming is fun\n\n# Check kernel log\n$ dmesg | tail -2\n[ 1234.567890] Module loaded. Created /proc/my_device\n\n# Unload\n$ sudo rmmod simple_proc_module\n$ dmesg | tail -1\n[ 1240.123456] Module unloaded. Removed /proc/my_device\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "module-loading-steps",
      children: "Module Loading Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "insmod"
        }), " opens the .ko file, reads ELF headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sys_init_module()"
        }), " copies module code into kernel memory via vmalloc"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel relocations are applied to fix symbol addresses"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Module symbols are resolved against kernel symbol table (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/kallsyms"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "module_init()"
        }), " function called with kernel module parameter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Module enters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MODULE_STATE_LIVE"
        }), "; system can now use it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "module-advantages--disadvantages",
      children: "Module Advantages & Disadvantages"
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
            children: "No reboot for driver updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module versioning (need modversion check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller base kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced security (kernel code from unknown source)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor drivers without upstreaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module licensing concerns (GPL vs proprietary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debug/test without rebuilding everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack depth issues when many modules load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributions ship optional modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module dependency trees can be complex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-kernel-modules",
      children: "Edge Cases in Kernel Modules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Module init fails"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module not loaded; memory cleaned up"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sys_init_module()"
            }), " rolls back on error"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Module in use (refcount > 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rmmod returns EBUSY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "try_module_get()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "module_put()"
            }), " refcounting"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Module stack overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random memory corruption; kernel oops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8KB kernel stack; no guard page on all archs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Module version mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insmod fails with -EINVAL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "modversions"
            }), " CRC check on exported symbols"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Circular module dependency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "modprobe fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "modprobe detects dependency loops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-control-groups-cgroups-and-namespaces",
      children: "9. Control Groups (cgroups) and Namespaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "cgroups"
        }), " = The building's HOA (Homeowners Association) rules. Each apartment gets a maximum number of guests (CPU), water usage (memory), and parking spots (I/O). If one apartment throws a party (runaway process), the HOA restricts their resources instead of evicting everyone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Namespaces"
        }), " = The individual apartment units themselves. Each apartment has its own door (PID namespace), windows (network namespace), mailbox (IPC namespace), and street address (mount namespace). People in apartment A cannot see what's happening in apartment B."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cgroups-control-groups",
      children: "cgroups (Control Groups)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cgroups limit, account for, and isolate resource usage of process collections. There are two versions: cgroup v1 (unified hierarchy) and cgroup v2 (single hierarchy, default since kernel 5.x)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cgroup-v2-controllers",
      children: "cgroup v2 Controllers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resource Controlled"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cpu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU time, scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cpu.max, cpu.weight"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "echo \"50000 100000\" > cpu.max"
            }), " (50% of 1 CPU)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage, swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memory.max, memory.current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "echo 100M > memory.max"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "io"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block I/O bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "io.max, io.weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "echo \"8:0 rbps=1048576\" > io.max"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pids"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pids.max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "echo 100 > pids.max"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cpuset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU pinning, NUMA nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cpuset.cpus, cpuset.mems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "echo \"0-3\" > cpuset.cpus"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hugetlb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HugeTLB pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hugetlb.1GB.max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "echo 1G > hugetlb.1GB.max"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "rdma"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDMA resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rdma.max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "echo \"mlx5_0 max=10\" > rdma.max"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cgroup-usage",
      children: "cgroup Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create a cgroup hierarchy\n$ mkdir /sys/fs/cgroup/mygroup\n\n# Set memory limit to 100MB\n$ echo 104857600 > /sys/fs/cgroup/mygroup/memory.max\n\n# Set CPU limit: 50ms of every 100ms period (50% of one CPU)\n$ echo \"50000 100000\" > /sys/fs/cgroup/mygroup/cpu.max\n\n# Limit number of processes to 50\n$ echo 50 > /sys/fs/cgroup/mygroup/pids.max\n\n# Add a process to the cgroup\n$ echo 1234 > /sys/fs/cgroup/mygroup/cgroup.procs\n\n# Check current memory usage\n$ cat /sys/fs/cgroup/mygroup/memory.current\n\n# Monitor OOM events\n$ cat /sys/fs/cgroup/mygroup/memory.events\nlow 0\nhigh 0\nmax 0\noom 0\noom_kill 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "namespaces",
      children: "Namespaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Namespaces provide ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "isolation of global system resources"
      }), ". Each namespace type wraps a global resource so that processes inside see their own independent instance."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Namespace"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isolated Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Created By"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "/proc Entry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Since Kernel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "mount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mount points, filesystem hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/proc/self/mountinfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4.19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "uts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hostname, domain name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWUTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.6.19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ipc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System V IPC, POSIX message queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWIPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.6.19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process IDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWPID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/proc/self/ns/pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.6.24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "net"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network devices, IP addresses, routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWNET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/proc/self/ns/net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.6.29"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "user"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UID/GID mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWUSER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/proc/self/ns/user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cgroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cgroup root directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWCGROUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/proc/self/ns/cgroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System time (boot time, monotonic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLONE_NEWTIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cgroups-vs-namespaces-comparison",
      children: "cgroups vs Namespaces: Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cgroups"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Namespaces"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit and measure resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolate global resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchy (tree of groups)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of per-process views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What they control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, memory, IO, pids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID, network, mount, UTS, IPC, user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If no limit, unlimited access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If not isolated, global view shared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Used by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "systemd, Docker, LXC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker, LXC, containerd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cgroup controller subsystems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "struct nsproxy + namespace structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security boundary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a security boundary (can escape)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a full security boundary (root in ns != root on host)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal accounting overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (except mount ns on heavy FS activity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Together"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System resource caps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process isolation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-docker-uses-cgroups-and-namespaces",
      children: "How Docker Uses cgroups and Namespaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each Docker container is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set of namespaces + cgroup limits"
      }), " sharing the host kernel:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------------------------------------------------------+\n| Host Linux Kernel                                         |\n|                                                           |\n|  +-------+  +-------+  +-------+                          |\n|  | cgroup|  | cgroup|  | cgroup|                          |\n|  | limits|  | limits|  | limits|                          |\n|  +---|---+  +---|---+  +---|---+                          |\n|      |          |          |                              |\n|  +---v-----+  +-v-------++-v-------+                      |\n|  |Container|  |Container||Container|                      |\n|  | 1: nginx|  | 2: mysql|| 3: redis|                      |\n|  |ns: pid  |  |ns: pid  ||ns: pid  |                      |\n|  |ns: net  |  |ns: net  ||ns: net  |                      |\n|  |ns: mnt  |  |ns: mnt  ||ns: mnt  |                      |\n|  |ns: uts  |  |ns: uts  ||ns: uts  |                      |\n|  |ns: ipc  |  |ns: ipc  ||ns: ipc  |                      |\n|  +---------+  +---------++---------+                      |\n+-----------------------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-cgroups-and-namespaces",
      children: "Edge Cases in cgroups and Namespaces"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOM within cgroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only processes in the cgroup are killed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "memory.events oom_kill"
            }), " increments; other processes unaffected"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP socket leak in net ns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Net namespace cannot be destroyed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sit tunnel"
            }), " devices can leak; need ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ip netns delete"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PID namespace overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID 0 (idle) not available; fork fails"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pids.max"
            }), " prevents fork bomb inside container"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cgroup pressure stall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSI (Pressure Stall Information) signals memory/IO pressure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/proc/pressure/{cpu,memory,io}"
            }), " indicates imminent OOM"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-interview-corner",
      children: "10. Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-cost-of-switching-between-user-mode-and-kernel-mode",
      children: "Q1: What is the cost of switching between user mode and kernel mode?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user-to-kernel mode switch (e.g., for a system call) involves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU mode change"
        }), ": Rings 3 -> 0 (x86). The CPU loads a new CS segment with Ring 0 privilege."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack switch"
        }), ": Switch from user stack to kernel stack (per-process kernel stack, 8KB or 16KB)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register save"
        }), ": All general-purpose registers, flags, and instruction pointer saved to kernel stack (pt_regs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page table"
        }), ": No switch needed (kernel mapped in upper half of every process address space)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLB flush"
        }), ": Usually not needed (kernel pages are global; user pages stay unless ASID exhausted)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost breakdown"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition overhead"
        }), ": 50-200ns (syscall/sysenter is faster than int 0x80)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full context switch (mode + process)"
        }), ": 1-10us (depends on CPU, cache working set)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Measure syscall overhead with perf\n$ perf stat -e cycles,instructions -r 1000 python3 -c \"import os; os.getpid()\"\n\n# Typical result (x86_64, 3GHz):\n#  getpid() syscall: ~200 cycles (~67ns)\n#  read() syscall with actual I/O: ~10,000+ cycles (dominated by I/O)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-the-kernel-handle-a-system-call",
      children: "Q2: How does the kernel handle a system call?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. User program calls a glibc wrapper (e.g., write(3, buf, 1024))\n2. glibc moves syscall number (1 = write) into %rax, arguments into %rdi, %rsi, %rdx\n3. glibc executes 'syscall' instruction (x86_64)\n   - CPU saves return address to %rcx, RFLAGS to %r11\n   - CPU loads CS with kernel code segment (Ring 0)\n   - CPU loads RIP from MSR_LSTAR (syscall entry point, entry_SYSCALL_64)\n4. Kernel saves all registers to pt_regs on kernel stack\n5. Kernel calls syscall_trace_enter() for ptrace/seccomp\n6. Kernel indexes sys_call_table[syscall_nr] -> calls sys_write()\n7. Kernel executes the actual operation (VFS -> ext4 -> block layer)\n8. On return: syscall_trace_exit(), restore registers, 'sysretq' instruction\n9. glibc receives return value (or sets errno for negative returns)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overhead by component"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (ns)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU mode switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register save/restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall dispatch (table lookup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security hooks (SELinux, seccomp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total (empty syscall like getpid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "100-500"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-when-does-the-oom-killer-trigger-and-how-does-it-select-victims",
      children: "Q3: When does the OOM killer trigger, and how does it select victims?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The OOM killer triggers when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__alloc_pages_slowpath()"
      }), " fails after trying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reclaim (kswapd)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compact memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All available zones"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection algorithm"
      }), " (oom_badness):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "score = RSS + swap_usage + (total_vm / 16)"
        }), " (approximately)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root processes weighted down (-30)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adjustments from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/pid/oom_score_adj"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Innocent child heuristic"
        }), ": A process with many children gets more points (to avoid killing init's children)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "init/PID 1 is protected (score capped to 0)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View OOM scores for all processes\n$ cat /proc/*/oom_score 2>/dev/null | sort -rn | head -5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-a-process-and-a-thread-in-linux",
      children: "Q4: What is the difference between a process and a thread in Linux?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Linux, there is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no structural difference"
      }), " between a process and a thread. Both are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_struct"
      }), " entries. The distinction is what resources are shared:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process (fork())"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread (pthread_create())"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "clone() flags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORK_FLAGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THREAD_FLAGS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate (COW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (CLONE_VM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File descriptors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (CLONE_FILES)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal handlers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (CLONE_SIGHAND)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same tgid, unique tid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate, new region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate, allocated by pthreads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "wait()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can wait on child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot wait on thread (tgkill)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel creation cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (page tables, fd table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (share most resources)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-the-proc-filesystem-why-is-it-called-a-pseudo-filesystem",
      children: "Q5: Explain the /proc filesystem. Why is it called a \"pseudo\" filesystem?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "/proc"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual (pseudo) filesystem"
      }), " that exposes kernel data structures as files and directories. It is called \"pseudo\" because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No on-disk storage"
        }), ": Files are generated on-the-fly by kernel code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No real inodes"
        }), ": inode numbers are dynamically assigned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-sized files"
        }), ": Most /proc files show 0 bytes with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls -l"
        }), " but contain data when read"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Writes trigger actions"
        }), ": Writing to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/sys/..."
        }), " changes kernel parameters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Simplified procfs file creation (from a module)\nstatic const struct proc_ops my_fops = {\n    .proc_read = my_read,\n    .proc_write = my_write,\n};\n\n// Each read() triggers my_read() which formats data on demand\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-priority-inversion-and-how-does-linux-solve-it",
      children: "Q6: What is priority inversion and how does Linux solve it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Priority inversion: a high-priority (H) task is blocked waiting for a low-priority (L) task that holds a lock, while a medium-priority (M) task preempts L. M runs freely while H starves."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux solution"
      }), ": Priority Inheritance Protocol (PI) via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rt_mutex"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When H blocks on L's lock, L inherits H's priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L runs (preempting M since L now has H's priority)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L releases lock, L's priority drops back"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "H acquires lock and runs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verified via"
      }), ": Lockdep (CONFIG_PROVE_LOCKING) detects potential inversion paths at boot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-i-measure-context-switch-overhead",
      children: "Q7: How do I measure context switch overhead?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Using vmstat\n$ vmstat 1\nprocs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 8100000 50000 6000000    0    0    20    30  200 1500  5  3 92  0  0\n\n# cs = context switches per second (typically 1000-20000 on a busy server)\n\n# Using perf bench\n$ perf bench sched pipe\n# Running 'sched/pipe' benchmark:\n# Executed 1000000 pipe operations between two processes\n# Total time: 2.456 sec\n# 407166.1234 ops/sec\n# Context switch cost: ~2.456us per operation (2 switches: ping-pong)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-relationship-between-nice-value-and-cfs-vruntime",
      children: "Q8: What is the relationship between nice value and CFS vruntime?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The nice value maps to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "load.weight"
      }), " that scales vruntime accumulation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vruntime_advancement = delta_exec * (NICE_0_LOAD / se->load.weight)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "nice 0 (weight 1024)"
        }), ": vruntime advances at wall-clock rate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "nice -5 (weight 3355)"
        }), ": vruntime advances 1024/3355 = 0.305x wall-clock rate (gets 3.3x more CPU)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "nice 10 (weight 110)"
        }), ": vruntime advances 1024/110 = 9.3x wall-clock rate (gets 0.11x CPU)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The weight table ensures that each nice value step changes CPU share by about 10% (geometric progression: 1.25^n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-applications-in-real-systems",
      children: "11. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-linux-based-mobile-os",
      children: "Android (Linux-based Mobile OS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Android uses a modified Linux kernel with these key differences:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Android Kernel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard Linux"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D-Bus / sockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance, reference-counted IPC for service-oriented architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low Memory Killer (LMK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOM killer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kill background apps proactively for foreground responsiveness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Power"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wakelocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspend/resume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent suspend during critical operations (music playback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cgroups for app groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFS fixed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "top-app"
            }), " gets 90% CPU, foreground gets 10%, background gets 0-5%"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filesystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EROFS (read-only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext4/XFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-optimized for read-heavy mobile apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zygote (prefork Java VM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork()/exec()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster app startup by forking pre-initialized VM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Android-specific cgroup hierarchy\n# /dev/cpuctl/top-app/     -> highest CPU share\n# /dev/cpuctl/foreground/  -> medium CPU share\n# /dev/cpuctl/background/  -> lowest CPU share (0-5%)\n# /dev/cpuctl/system-background/ -> system services\n\n# Check which cgroup a process belongs to\n$ cat /proc/<pid>/cgroup\n12:freezer:/\n11:cpuset:/foreground\n10:blkio:/foreground\n9:cpuctl:/foreground\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedded-linux",
      children: "Embedded Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embedded Linux runs on resource-constrained devices (routers, IoT, automotive):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adaptation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limited RAM (4-64MB)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static kernel, minimal modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No module loading; built-in drivers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No MMU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uClinux fork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOMMU support; flat memory model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time requirements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREEMPT_RT patch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully preemptible kernel, threaded IRQs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UBIFS/SquashFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash-friendly filesystems with wear leveling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Firmware size limits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel compression (XZ/LZ4)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CONFIG_KERNEL_XZ"
            }), " for decompression at boot"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boot time (<1s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initramfs with parallel startup"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "initcall_debug"
            }), " for profiling boot sequence"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Embedded kernel boot time breakdown (example)\n$ cat /proc/timer_list | grep \"jiffies\"   # system uptime in jiffies\n# Typical breakdown: bootloader 300ms, kernel init 200ms, init system 500ms = ~1s total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "containers-docker-podman-lxc",
      children: "Containers (Docker, Podman, LXC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers leverage cgroups + namespaces for lightweight virtualization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------------------------------------------------------------+\n| Host OS                                                            |\n| +------------------+  +------------------+  +------------------+  |\n| | Container A      |  | Container B      |  | Container C      |  |\n| | Apache           |  | PostgreSQL       |  | Node.js          |  |\n| | PID ns: 1..100   |  | PID ns: 1..50    |  | PID ns: 1..200   |  |\n| | Net ns: 172.17.1|  | Net ns: 172.17.2 |  | Net ns: 172.17.3 |  |\n| | Mount ns: /var/  |  | Mount ns: /data  |  | Mount ns: /app   |  |\n| | Memory: 512MB    |  | Memory: 2GB      |  | Memory: 256MB    |  |\n| | CPU: 0.5 cores   |  | CPU: 2 cores     |  | CPU: 0.25 cores  |  |\n| +------------------+  +------------------+  +------------------+  |\n|                                                                   |\n| Docker daemon / containerd / runc                                 |\n+-------------------------------------------------------------------+\n| Host Linux Kernel (CFS, cgroups v2, namespaces, netfilter)        |\n+-------------------------------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-linux-vs-windows-nt-vs-macosxnu",
      children: "Concept Comparison: Linux vs Windows NT vs macOS/XNU"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Windows NT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "macOS/XNU"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monolithic + modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (Mach + BSD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFS (vruntime RB-tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority-based (boosts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level feedback queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VFS -> ext4/XFS/Btrfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS (B+ tree $MFT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APFS (B-tree)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork()/clone()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateProcess()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork() + Mach tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipes, sockets, shm, futex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LPC/ALPC, named pipes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mach messages, BSD sockets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ko (same address space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sys (same address space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".kext (same address space)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spinlock, mutex, RCU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KeAcquireSpinLock, mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mutex_lock, lck_mtx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kgdb, kprobes, ftrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WinDbg, ETW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTrace, KDebug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cgroups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (cgroup v2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits (launchd)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker, LXC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyper-V containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandbox + Docker for Mac"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary",
      children: "12. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux Architecture"
        }), ": Monolithic kernel with loadable modules; user/kernel space separation via rings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "task_struct"
        }), ": Large (approx 2KB) PCB with state, scheduling, memory, files, signals, credentials, timers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "clone()"
        }), ": Unified syscall for fork/thread creation; flags control resource sharing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFS"
        }), ": Red-black tree of tasks keyed by vruntime; O(log n) for enqueue/dequeue, O(1) amortized for pick"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buddy allocator"
        }), ": Power-of-2 physical page allocation; O(log n) worst case, coalesces on free"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLUB allocator"
        }), ": Object cache in kernel; O(1) allocation from freelist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VFS"
        }), ": Four objects (super_block, inode, dentry, file); dcache accelerates path resolution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupts"
        }), ": Split into top half (urgent, no sleep) and bottom half (deferrable, can sleep)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synchronization"
        }), ": Spinlock (busy-wait, no sleep), mutex (sleep-wait, PI), RCU (lock-free read)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "cgroups"
        }), ": Resource limits via controllers (CPU, memory, IO, pids)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Namespaces"
        }), ": Process isolation for PID, net, mount, UTS, IPC, user, cgroup, time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority Inversion"
        }), ": Solved by Priority Inheritance Protocol in rt_mutex"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fair CPU distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsive queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RT patches (PREEMPT_RT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU shares via cgroups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed file systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data file storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash-friendly FS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OverlayFS for layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Netfilter/storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU drivers (CUDA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal static kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cgroups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits per site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App-level CPU/mem limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Namespaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (bare metal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-app UID isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route table updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy UI state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sleep in spinlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgot the constraint; called kmalloc(GFP_KERNEL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use GFP_ATOMIC in atomic context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgot to disable IRQ for spinlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spinlock shared with ISR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spin_lock_irqsave()"
            }), " in process context"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep call chain + large local arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use dynamic allocation; keep stack usage under 2KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCU stall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader holds rcu_read_lock too long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never sleep/schedule in RCU read-side critical section"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOM panic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap off, overcommit on, memory exhausted"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vm.overcommit_memory=2"
            }), " for strict accounting"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation--cfs-scheduler-simulator",
      children: "TypeScript Implementation — CFS Scheduler Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * CfsSimulator: A TypeScript model of the Linux Completely Fair Scheduler.\n * Demonstrates how vruntime, weights, and the red-black tree interact.\n */\ninterface SchedEntity {\n  pid: number;\n  nice: number;\n  weight: number;\n  vruntime: number;  // virtual runtime in ms\n}\n\nclass CfsRunQueue {\n  private tasks: SchedEntity[] = [];\n  private readonly NICE_0_WEIGHT = 1024;\n  \n  /** Convert nice value to weight (simplified kernel weight table) */\n  private niceToWeight(nice: number): number {\n    const weights: Record<number, number> = {\n      -20: 88761, -19: 71755, -18: 56483, -17: 46273,\n      -16: 36291, -15: 29154, -14: 23254, -13: 18705,\n      -12: 14949, -11: 11916, -10: 9548,  -9: 7620,\n      -8: 6100,   -7: 4904,   -6: 3906,   -5: 3121,\n      -4: 2501,   -3: 1991,   -2: 1586,   -1: 1277,\n      0: 1024,    1: 820,     2: 655,     3: 526,\n      4: 423,     5: 339,     6: 271,     7: 217,\n      8: 174,     9: 139,     10: 110,    11: 87,\n      12: 70,     13: 56,     14: 45,     15: 36,\n      16: 29,     17: 23,     18: 19,     19: 15,\n    };\n    return weights[nice] ?? this.NICE_0_WEIGHT;\n  }\n\n  constructor() {}\n\n  addTask(pid: number, nice: number): void {\n    this.tasks.push({\n      pid, nice,\n      weight: this.niceToWeight(nice),\n      vruntime: 0\n    });\n  }\n\n  /** The CFS \"pick next\" using scanned minimum (simulating RB-tree leftmost) */\n  private pickNext(): SchedEntity {\n    // In real CFS: red-black tree leftmost node = minimum vruntime\n    return this.tasks.reduce((min, t) => t.vruntime < min.vruntime ? t : min);\n  }\n\n  /**\n   * Simulate one scheduling round.\n   * Each task runs for a time slice proportional to its weight.\n   */\n  run(timeQuantumMs: number = 20): void {\n    console.log(`\\n=== CFS Simulation: ${timeQuantumMs}ms time slice ===`);\n    console.log(`PID | Nice | Weight | vruntime_before | vruntime_after`);\n\n    for (let round = 0; round < 3; round++) {\n      for (const task of this.tasks) {\n        const before = task.vruntime;\n        // CFS: vruntime += (actual_runtime * NICE_0_WEIGHT) / task.weight\n        const actualRuntime = timeQuantumMs;\n        task.vruntime += (actualRuntime * this.NICE_0_WEIGHT) / task.weight;\n        const after = Math.round(task.vruntime * 100) / 100;\n        console.log(\n          `${String(task.pid).padStart(3)} | ${String(task.nice).padStart(4)} | ` +\n          `${String(task.weight).padStart(6)} | ${before.toFixed(2).padStart(13)} | ${after.toFixed(2)}`\n        );\n      }\n    }\n\n    // Show fairness: tasks with higher priority should have closer vruntime values\n    const maxVruntime = Math.max(...this.tasks.map(t => t.vruntime));\n    const minVruntime = Math.min(...this.tasks.map(t => t.vruntime));\n    console.log(`\\nFairness metric (max-min vruntime): ${(maxVruntime - minVruntime).toFixed(2)}ms`);\n    console.log(`Smaller values = fairer scheduling.`);\n  }\n\n  /** Print current task states */\n  dump(): void {\n    console.log('\\nTask State:');\n    for (const t of this.tasks) {\n      const weightRatio = (t.weight / this.NICE_0_WEIGHT).toFixed(2);\n      console.log(`  PID=${t.pid} nice=${t.nice} weight=${t.weight} (${weightRatio}x) vruntime=${t.vruntime.toFixed(2)}`);\n    }\n  }\n}\n\n// Example: Create 3 tasks with different priorities\nconst cfs = new CfsRunQueue();\ncfs.addTask(100, 0);    // default priority\ncfs.addTask(101, -10);  // higher priority (weight ~9548 vs 1024)\ncfs.addTask(102, 10);   // lower priority (weight ~110)\ncfs.dump();\ncfs.run(20);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What type of kernel does Linux use?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Microkernel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Hybrid"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Monolithic with modules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Exokernel"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CFS uses which data structure?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Linked list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Red-black tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) B-tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Priority queue"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VFS is responsible for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Managing virtual memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Uniform interface to multiple FS types"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Scheduling I/O"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Loading modules"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which synchronization primitive can sleep?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Spinlock"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Raw spinlock"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Mutex"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) RCU read lock"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the top half of interrupt handling?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Deferred processing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Immediate, short ISR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Workqueue handler"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) ksoftirqd thread"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which syscall creates both processes and threads?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) fork()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) clone()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) vfork()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) execve()"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cgroups are used for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Process isolation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Resource limiting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Network configuration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) File encryption"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Priority inversion is solved by:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Round-robin scheduling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Priority inheritance protocol"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Lock-free algorithms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Decreasing time slices"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is vruntime in CFS?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Total execution time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Weighted execution time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Wall-clock time since boot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Time until deadline"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The dentry cache (dcache) speeds up:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Memory allocation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Path resolution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Process creation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Network routing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the role of the buddy allocator in Linux?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Allocate kernel objects (task_struct, inodes)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Manage physical page frames using power-of-two free lists"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Allocate virtual memory for user processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Manage the dentry cache"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Linux kernel feature allows a module to be loaded without recompiling the entire kernel?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Device mapper"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Loadable Kernel Module (LKM)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) kprobes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) ftrace"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when a process in a cgroup exceeds its memory.limit_in_bytes?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The process is killed immediately"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The process is swapped out"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The OOM killer may terminate processes in the cgroup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The kernel returns ENOMEM to every malloc"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the Linux VFS, what does the dentry (directory entry) cache store?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) File data blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Mappings from file names to inode numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Disk block allocation bitmaps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Superblock metadata"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a Linux namespace type?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) PID namespace"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Network namespace"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Memory namespace"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Mount namespace"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-c, 2-b, 3-b, 4-c, 5-b, 6-b, 7-b, 8-b, 9-b, 10-b, 11-b, 12-b, 13-c, 14-b, 15-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["List the key fields in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_struct"
        }), ". Why is it the largest structure in the kernel?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What flags differentiate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create()"
        }), " in terms of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does CFS ensure fairness? Explain the role of vruntime and the red-black tree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/self/status"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/self/maps"
        }), ". Explain each field and each memory region."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/sched_debug"
        }), " and identify CFS runqueue entries, vruntime values, and scheduling entities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compile and load the example kernel module. Extend it to create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/hello"
        }), " that returns \"Hello from kernel!\" when read."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "perf stat -e context-switches,cpu-migrations"
        }), " to measure context switch overhead for a grep over a large file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a kernel module with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/my_device"
        }), " file. Writing stores a string; reading returns it (character device semantics)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Analyze ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kernel/sched/fair.c"
        }), " function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pick_next_task_fair()"
        }), ". Explain time complexity and the role of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cfs_rq->leftmost"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "perf"
        }), " to measure syscall cost: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "perf stat -e cycles,instructions,cache-misses"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), " from a regular file vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/self/status"
        }), ". Explain the difference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a cgroup with 50MB memory limit, run a memory-hungry process inside it, and observe OOM kills via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory.events"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a Python script using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ctypes"
        }), " to call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sched_setscheduler()"
        }), " to set a process to SCHED_FIFO with priority 50. What privileges are needed?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CFS weight calculator"
          }), ": Extend the CfsSimulator TypeScript code to support ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set_weight()"
          }), " at runtime, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "removeTask(pid)"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getFairness()"
          }), " that returns the max-min vruntime spread. Run a simulation with 5 tasks at nice values -20, -10, 0, 10, 19 and show the execution time each receives over 10 rounds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SLUB allocator simulator"
          }), ": Implement a simplified SLUB allocator in TypeScript. Maintain per-CPU freelists of pre-allocated objects. When a CPU's freelist is empty, fetch a slab of objects from the central allocator. When freeing, return to the per-CPU freelist. Compare allocation latency vs a simple malloc/free model."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "System call tracer"
          }), ": Write a Python script that uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "strace"
          }), " to trace all system calls made by a command (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ls -R /"
          }), "). Categorize syscalls by type (file, process, network, memory, etc.), count occurrences, and compute the percentage of total. Generate a pie chart of the distribution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RCU vs mutex benchmark"
          }), ": Implement a linked-list protected by: (a) a single mutex, (b) an RCU-style mechanism with read-side lock-free traversal and synchronized updates. Benchmark with 8 reader threads and 1 writer thread doing 100,000 operations. Measure read throughput and write latency for both approaches."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Buddy allocator fragmentation analyzer"
          }), ": Implement a buddy allocator in C or TypeScript with power-of-2 free lists. Simulate a workload of allocate/free requests of varying sizes (from 1 page to 512 pages). Track: external fragmentation percentage, allocation success rate, average search time, and coalescing effectiveness."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "cgroup memory pressure test"
          }), ": Write a script that creates a cgroup with 100 MB memory limit, then runs a process that allocates memory in a loop until it is OOM-killed. Log ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/sys/fs/cgroup/<cgroup>/memory.events"
          }), " during the test. Show the sequence of events leading to the OOM kill."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VFS path resolution walker"
          }), ": Write a program that traces the path resolution for a given absolute path (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/usr/bin/python3"
          }), "). For each component, show: the dentry cache lookup (hit/miss), the parent directory inode number, the resolved inode number, and the final file system type. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "strace -e trace=openat,statx"
          }), " to observe the real system calls."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kernel module stack depth analyzer"
          }), ": Write a kernel module that tracks the maximum call stack depth in the kernel. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dump_stack()"
          }), " at key points. Compare the stack depth in process context vs interrupt context vs softirq context. Explain why kernel stack overflows are dangerous."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OOM killer behavior analyzer"
          }), ": Write a program that triggers the OOM killer by allocating memory until killed. Capture ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/<pid>/oom_score"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/<pid>/oom_score_adj"
          }), " before the kill. Analyze which process was killed and why (oom_badness calculation). Repeat with different ", (0,jsx_runtime.jsx)(_components.code, {
            children: "oom_score_adj"
          }), " values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Namespaces deep dive"
          }), ": Write a C program that creates a child process in new PID, mount, and user namespaces using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clone()"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CLONE_NEWPID | CLONE_NEWNS | CLONE_NEWUSER"
          }), ". Inside the namespace: show PID 1, remount ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc"
          }), ", create a temp file, and show it cannot see the host's processes or files."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "eBPF program for syscall counting"
          }), ": Write an eBPF program that attaches to the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sys_enter"
          }), " tracepoint and counts system calls per process per second. Output the top 5 syscalls by count every second. Use BCC or libbpf. Compare overhead vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "perf stat -e syscalls:sys_enter_*"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PREEMPT_RT latency test"
          }), ": Install PREEMPT_RT kernel patches. Write a real-time test program with a SCHED_FIFO thread (priority 90) that measures maximum scheduling latency by waking up every 1 ms and recording the actual wake-up time. Compare results with a standard kernel."]
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