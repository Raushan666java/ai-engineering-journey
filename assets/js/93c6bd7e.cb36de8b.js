"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6242],{

/***/ 46301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_04_git_linux_cli_08_process_management_md_93c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-04-git-linux-cli-08-process-management-md-93c.json
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_08_process_management_md_93c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/08-process-management","title":"Process Management — Monitoring, Signals, Resource Control","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/08-process-management.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/08-process-management","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/08-process-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":65,"frontMatter":{"id":"08-process-management","slug":"/ai-engineering-placement/04-git-linux-cli/08-process-management","title":"Process Management — Monitoring, Signals, Resource Control","sidebar_label":"Process Management — Monitoring, Signals, Resource Control","sidebar_position":65},"sidebar":"placementSidebar","previous":{"title":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access"},"next":{"title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/09-cron-automation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/04-git-linux-cli/08-process-management.md


const frontMatter = {
	id: '08-process-management',
	slug: '/ai-engineering-placement/04-git-linux-cli/08-process-management',
	title: 'Process Management — Monitoring, Signals, Resource Control',
	sidebar_label: 'Process Management — Monitoring, Signals, Resource Control',
	sidebar_position: 65
};
const contentTitle = 'Process Management — Monitoring, Signals, Resource Control';

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
  "value": "Process States in Linux",
  "id": "process-states-in-linux",
  "level": 3
}, {
  "value": "Process Monitoring with ps",
  "id": "process-monitoring-with-ps",
  "level": 3
}, {
  "value": "Interactive Monitoring with top and htop",
  "id": "interactive-monitoring-with-top-and-htop",
  "level": 3
}, {
  "value": "Process Priority and Nice Values",
  "id": "process-priority-and-nice-values",
  "level": 3
}, {
  "value": "Process Signals",
  "id": "process-signals",
  "level": 3
}, {
  "value": "Systemd Service Management",
  "id": "systemd-service-management",
  "level": 3
}, {
  "value": "Cgroups (Control Groups)",
  "id": "cgroups-control-groups",
  "level": 3
}, {
  "value": "Process Monitoring in AI Workflows",
  "id": "process-monitoring-in-ai-workflows",
  "level": 3
}, {
  "value": "Resource Limits (ulimit)",
  "id": "resource-limits-ulimit",
  "level": 3
}, {
  "value": "Visual Explanation",
  "id": "visual-explanation",
  "level": 2
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
  "value": "Next Topic",
  "id": "next-topic",
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
        id: "process-management--monitoring-signals-resource-control",
        children: "Process Management — Monitoring, Signals, Resource Control"
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
            children: "Monitor system processes using ps, top, htop, and process trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage processes with kill signals, priority control (nice/renice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand Linux process states and the process lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure services with systemd (units, journalctl, systemctl)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply cgroups for resource limits and control groups management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement process monitoring for AI/ML training workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Process management is essential for AI engineers who run resource-intensive training jobs, manage model serving, and monitor system health. Understanding processes, signals, and resource control helps you debug performance issues and keep systems stable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Linux command line skills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of CPU, memory, and I/O concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with shell scripting basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-states-in-linux",
      children: "Process States in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\r\n    [*] --> Runnable: fork()/exec()\r\n    Runnable --> Running: scheduler selects\r\n    Running --> Runnable: preempted/time slice\r\n    Running --> Sleeping: I/O wait\r\n    Running --> Stopped: SIGSTOP/SIGTSTP\r\n    Stopped --> Runnable: SIGCONT\r\n    Running --> Zombie: exit() (parent hasn't reaped)\r\n    Zombie --> [*]: wait() by parent\r\n    Sleeping --> Runnable: I/O complete\r\n    Sleeping --> Running: signal/interrupt\r\n    Running --> UninterruptibleSleep: kernel I/O (D state)\r\n    UninterruptibleSleep --> Runnable: I/O complete\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Process states"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runnable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running or ready to run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleeping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting for an event/interruptible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninterruptible Sleep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel I/O wait (cannot be killed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stopped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspended by signal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zombie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminated, awaiting parent reaping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process cleaned up"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-monitoring-with-ps",
      children: "Process Monitoring with ps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all processes\r\nps aux\r\n\r\n# Custom format\r\nps -eo pid,ppid,cmd,%cpu,%mem,stat,user\r\n\r\n# Tree view\r\nps auxf\r\nps -ejH\r\n\r\n# Process by name\r\nps aux | grep python\r\n\r\n# Specific PID info\r\nps -fp 1234\r\n\r\n# Threads of a process\r\nps -eLf | grep 1234\r\n\r\n# Sort by memory usage\r\nps aux --sort=-%mem | head -10\r\n\r\n# Sort by CPU usage\r\nps aux --sort=-%cpu | head -10\r\n\r\n# Show process environment\r\nps -eww 1234\r\n\r\n# Security context\r\nps -eo pid,user,label,cmd\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ps output fields"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PPID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent Process ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%MEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VSZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory size (KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resident set size (KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process state code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative CPU time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command with arguments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interactive-monitoring-with-top-and-htop",
      children: "Interactive Monitoring with top and htop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Basic top\r\ntop\r\n\r\n# Batch mode (for scripts)\r\ntop -b -n 1\r\n\r\n# Sort by memory\r\ntop -o %MEM\r\n\r\n# Show only specific user processes\r\ntop -u ubuntu\r\n\r\n# Monitor specific PIDs\r\ntop -p 1234,5678\r\n\r\n# Update interval (seconds)\r\ntop -d 2\r\n\r\n# Install htop\r\nsudo apt install htop\r\n\r\n# Interactive htop (better than top)\r\nhtop\r\n\r\n# Tree view in htop\r\nhtop -t\r\n\r\n# Filter by process name\r\nhtop -p 1234\r\n\r\n# Show process tree (F5 in htop)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "htop interactive commands"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter by name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kill process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show user processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle tree view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle kernel threads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-priority-and-nice-values",
      children: "Process Priority and Nice Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Start process with low priority\r\nnice -n 19 ./training-script.sh\r\n\r\n# Start with high priority (requires root)\r\nnice -n -20 ./critical-service.sh\r\n\r\n# Check priority of running processes\r\nps -eo pid,nice,cmd\r\n\r\n# Change priority of running process\r\nrenice -n 10 -p 1234\r\n\r\n# Change priority by process name\r\nrenice -n 5 -g python\r\n\r\n# Show priority ranges\r\n# -20 (highest priority) to 19 (lowest priority)\r\n# Default: 0\r\n\r\n# Real-time priority (RT, for time-critical)\r\nchrt -r 99 ./realtime-task.sh\r\n\r\n# Check scheduling policy\r\nchrt -p 1234\r\n\r\n# Set scheduling policy\r\nchrt -f -p 50 1234\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduling policies"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCHED_OTHER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default time-sharing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCHED_BATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-intensive batch jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCHED_IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low priority"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCHED_FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time, no time slicing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCHED_RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time, round-robin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-signals",
      children: "Process Signals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all signals\r\nkill -l\r\n\r\n# Common signals:\r\n# SIGTERM (15) - Graceful termination (default)\r\n# SIGKILL (9) - Force kill (cannot be caught)\r\n# SIGSTOP (19) - Pause process (cannot be caught)\r\n# SIGCONT (18) - Resume process\r\n# SIGHUP (1) - Hang up / reload config\r\n# SIGINT (2) - Interrupt (Ctrl+C)\r\n# SIGQUIT (3) - Quit with core dump\r\n# SIGUSR1 (10) - User-defined signal 1\r\n# SIGUSR2 (12) - User-defined signal 2\r\n\r\n# Send signals by PID\r\nkill 1234                # SIGTERM\r\nkill -9 1234             # SIGKILL\r\nkill -15 1234            # SIGTERM (explicit)\r\nkill -SIGSTOP 1234       # STOP\r\nkill -SIGCONT 1234       # CONT\r\n\r\n# Kill by process name\r\npkill python\r\npkill -f \"train.py\"\r\n\r\n# Kill all processes of a user\r\npkill -u ubuntu\r\n\r\n# Kill specific signal by name\r\npkill -HUP nginx\r\n\r\n# Kill processes matching pattern\r\nkillall python3\r\nkillall -9 training\r\n\r\n# Check if process exists\r\nkill -0 1234  # Returns 0 if alive, error if not\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systemd-service-management",
      children: "Systemd Service Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Systemd service lifecycle\r\nsystemctl start service-name\r\nsystemctl stop service-name\r\nsystemctl restart service-name\r\nsystemctl reload service-name\r\nsystemctl enable service-name\r\nsystemctl disable service-name\r\nsystemctl status service-name\r\nsystemctl is-active service-name\r\nsystemctl is-enabled service-name\r\n\r\n# Service unit file location\r\n# /etc/systemd/system/service-name.service\r\n# /lib/systemd/system/service-name.service\r\n\r\n# List all services\r\nsystemctl list-units --type=service\r\n\r\n# List failed services\r\nsystemctl --failed\r\n\r\n# View service dependencies\r\nsystemctl list-dependencies service-name\r\n\r\n# Mask/unmask (prevent starting)\r\nsystemctl mask service-name\r\nsystemctl unmask service-name\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Systemd unit file example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/systemd/system/ml-training.service\r\n[Unit]\r\nDescription=ML Model Training Service\r\nAfter=network.target\r\nWants=gpu-monitor.service\r\n\r\n[Service]\r\nType=simple\r\nUser=mluser\r\nGroup=mlgroup\r\nWorkingDirectory=/opt/ml-project\r\nEnvironmentFile=/etc/ml-training.env\r\nExecStart=/usr/bin/python3 /opt/ml-project/train.py --config production.yaml\r\nExecReload=/bin/kill -HUP $MAINPID\r\nRestart=on-failure\r\nRestartSec=10\r\nLimitNOFILE=65536\r\nLimitNPROC=4096\r\nCPUQuota=80%\r\nMemoryMax=32G\r\nTasksMax=8192\r\n\r\n# GPU access\r\nDeviceAllow=/dev/nvidia0\r\nDeviceAllow=/dev/nvidiactl\r\n\r\n# Security\r\nPrivateTmp=true\r\nProtectSystem=full\r\nProtectHome=true\r\nNoNewPrivileges=true\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Journalctl (log viewing)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View all logs\r\njournalctl\r\n\r\n# Follow latest logs\r\njournalctl -f\r\n\r\n# Service-specific logs\r\njournalctl -u ml-training.service\r\n\r\n# Since last boot\r\njournalctl -b\r\n\r\n# Last hour\r\njournalctl --since \"1 hour ago\"\r\n\r\n# Specific time range\r\njournalctl --since \"2024-01-01 00:00:00\" --until \"2024-01-02 00:00:00\"\r\n\r\n# Priority-based\r\njournalctl -p err -b\r\n\r\n# JSON output\r\njournalctl -u ml-training.service -o json\r\n\r\n# Show recent N lines\r\njournalctl -u ml-training.service -n 50\r\n\r\n# Disk usage\r\njournalctl --disk-usage\r\n\r\n# Vacuum old logs\r\njournalctl --vacuum-time=30d\r\njournalctl --vacuum-size=500M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cgroups-control-groups",
      children: "Cgroups (Control Groups)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cgroups limit and account for resource usage of process groups."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List cgroup controllers\r\ncat /proc/cgroups\r\n\r\n# Check cgroup version (v1 vs v2)\r\nstat -fc %T /sys/fs/cgroup/\r\n# tmpfs = v1, cgroup2fs = v2\r\n\r\n# View cgroup hierarchy\r\nls /sys/fs/cgroup/\r\n\r\n# Create cgroup (v2)\r\nsudo mkdir /sys/fs/cgroup/ml-jobs\r\nsudo bash -c 'echo \"+cpu +memory\" > /sys/fs/cgroup/cgroup.subtree_control'\r\nsudo bash -c 'echo \"+memory +cpu\" > /sys/fs/cgroup/ml-jobs/cgroup.subtree_control'\r\n\r\n# Set limits\r\nsudo bash -c 'echo \"32G\" > /sys/fs/cgroup/ml-jobs/memory.max'\r\nsudo bash -c 'echo \"80000 100000\" > /sys/fs/cgroup/ml-jobs/cpu.max'\r\n\r\n# Add process to cgroup\r\nsudo bash -c 'echo 1234 > /sys/fs/cgroup/ml-jobs/cgroup.procs'\r\n\r\n# View cgroup stats\r\ncat /sys/fs/cgroup/ml-jobs/memory.current\r\ncat /sys/fs/cgroup/ml-jobs/cpu.stat\r\n\r\n# Systemd integration\r\nsystemd-cgls  # Tree view of cgroups\r\nsystemd-cgtop  # Top-like for cgroups\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Using systemd resource control"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run command with limits\r\nsystemd-run --user --scope -p MemoryMax=16G -p CPUQuota=50% python train.py\r\n\r\n# Run as service with transient unit\r\nsystemd-run --unit=ml-job-1 -p MemoryMax=32G -p CPUQuota=200% python train.py\r\n\r\n# View cgroup for service\r\nsystemctl show ml-job-1.service -p ControlGroup\r\n\r\n# Resource control properties:\r\n# CPUQuota=200% (2 cores)\r\n# MemoryMax=32G\r\n# MemoryHigh=24G (memory throttle point)\r\n# TasksMax=4096 (max threads)\r\n# IOReadBandwidthMax=/dev/sda 100M\r\n# IOWriteBandwidthMax=/dev/sda 100M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-monitoring-in-ai-workflows",
      children: "Process Monitoring in AI Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Monitor GPU processes\r\nnvidia-smi\r\nnvidia-smi pmon  # Process monitor\r\nnvidia-smi dmon  # Device monitor\r\n\r\n# Watch GPU usage continuously\r\nwatch -n 1 nvidia-smi\r\n\r\n# Monitor specific training process\r\nwhile true; do\r\n    ps -p $(pgrep -f train.py) -o pid,%cpu,%mem,rss,vsz,etime --no-headers\r\n    sleep 5\r\ndone\r\n\r\n# Find GPU memory by process\r\nnvidia-smi --query-compute-apps=pid,used_memory --format=csv\r\n\r\n# Monitor disk I/O per process\r\niotop -o -p 1234\r\n\r\n# Network traffic per process\r\nnethogs\r\n\r\n# Process tree visualization\r\npstree -p -u ubuntu\r\n\r\n# Full process details in /proc\r\ncat /proc/1234/status\r\ncat /proc/1234/limits\r\ncat /proc/1234/environ  # null-separated\r\nls /proc/1234/fd/      # Open file descriptors\r\nls /proc/1234/task/    # Threads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-limits-ulimit",
      children: "Resource Limits (ulimit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View all limits\r\nulimit -a\r\n\r\n# Set file descriptor limit\r\nulimit -n 65536\r\n\r\n# Set core file size (0 = disable)\r\nulimit -c unlimited\r\n\r\n# Set max user processes\r\nulimit -u 4096\r\n\r\n# Set virtual memory limit\r\nulimit -v unlimited\r\n\r\n# Persistent limits in /etc/security/limits.conf\r\necho \"mluser soft nofile 65536\" >> /etc/security/limits.conf\r\necho \"mluser hard nofile 1048576\" >> /etc/security/limits.conf\r\necho \"mluser soft nproc 4096\" >> /etc/security/limits.conf\r\necho \"mluser hard nproc 8192\" >> /etc/security/limits.conf\r\n\r\n# System-wide limits\r\n# /etc/sysctl.conf\r\n# fs.file-max = 2097152\r\n# kernel.pid_max = 4194303\r\n# vm.max_map_count = 262144\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Process Lifecycle] --> B[fork/exec]\r\n    B --> C[Runnable]\r\n    C --> D{Running?}\r\n    D -->|Yes| E[Running]\r\n    D -->|No| C\r\n    E --> F{Event?}\r\n    F -->|I/O Wait| G[Sleeping]\r\n    F -->|Stop Signal| H[Stopped]\r\n    F -->|Time Slice End| C\r\n    F -->|Exit| I[Zombie]\r\n    G -->|I/O Complete| C\r\n    H -->|SIGCONT| C\r\n    I -->|parent wait| J[Removed]\r\n    E -->|OOM| K[Killed]\r\n    E -->|Signal| L[Terminated]\r\n    subgraph Monitoring Tools\r\n        M[ps aux]\r\n        N[top/htop]\r\n        O[systemctl]\r\n        P[journalctl]\r\n        Q[nvidia-smi]\r\n    end\r\n    style A fill:#4a90d9,color:#fff\r\n    style J fill:#50b86c,color:#fff\r\n    style K fill:#e85d75,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of process management like running a restaurant kitchen. The chef (kernel) manages many cooks (processes). Each cook has a state: working on a dish (running), waiting for ingredients (sleeping), or on a break (stopped). The nice value is like priority — head chef has -20 (VIP dish first), dishwasher has 19 (low priority). Signals are like commands: \"stop\" (SIGSTOP), \"continue\" (SIGCONT), \"clock out\" (SIGTERM), or \"get out immediately\" (SIGKILL). Cgroups are like sections — the pastry section has a max of 2 cooks, the grill has 4. Systemd is the restaurant manager who ensures all stations are staffed and restarts anyone who walks out."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\r\n\"\"\"Process management and monitoring for ML training\"\"\"\r\n\r\nimport os\r\nimport time\r\nimport signal\r\nimport subprocess\r\nimport psutil\r\nfrom typing import Dict, List, Optional\r\n\r\nclass MLTrainingProcess:\r\n    \"\"\"Manage and monitor ML training processes\"\"\"\r\n\r\n    def __init__(self, name: str, cmd: List[str], gpu_ids: Optional[List[int]] = None):\r\n        self.name = name\r\n        self.cmd = cmd\r\n        self.gpu_ids = gpu_ids\r\n        self.process: Optional[subprocess.Popen] = None\r\n        self.log_file = f\"/var/log/ml/{name}.log\"\r\n\r\n    def start(self) -> None:\r\n        \"\"\"Start training process with resource limits\"\"\"\r\n        env = os.environ.copy()\r\n        if self.gpu_ids:\r\n            env[\"CUDA_VISIBLE_DEVICES\"] = \",\".join(map(str, self.gpu_ids))\r\n\r\n        log_fd = open(self.log_file, \"a\")\r\n        self.process = subprocess.Popen(\r\n            self.cmd,\r\n            stdout=log_fd,\r\n            stderr=subprocess.STDOUT,\r\n            env=env,\r\n            preexec_fn=os.setsid\r\n        )\r\n        print(f\"[+] Started {self.name} (PID: {self.process.pid})\")\r\n\r\n    def set_cpu_quota(self, quota_percent: int) -> None:\r\n        \"\"\"Set CPU quota via cgroups\"\"\"\r\n        if self.process is None:\r\n            return\r\n        pid = self.process.pid\r\n        cgroup = f\"/sys/fs/cgroup/ml/{self.name}\"\r\n        os.makedirs(cgroup, exist_ok=True)\r\n\r\n        # Configure CPU quota (e.g., 200% = 2 cores)\r\n        period = 100000\r\n        quota = int(period * quota_percent / 100)\r\n        with open(f\"{cgroup}/cpu.max\", \"w\") as f:\r\n            f.write(f\"{quota} {period}\\n\")\r\n\r\n        # Set memory limit\r\n        with open(f\"{cgroup}/memory.max\", \"w\") as f:\r\n            f.write(\"16G\\n\")\r\n\r\n        # Add process to cgroup\r\n        with open(f\"{cgroup}/cgroup.procs\", \"w\") as f:\r\n            f.write(str(pid))\r\n\r\n        print(f\"[+] Resource limits applied: CPU {quota_percent}%, Memory 16G\")\r\n\r\n    def get_stats(self) -> Dict:\r\n        \"\"\"Get real-time process statistics\"\"\"\r\n        if self.process is None:\r\n            return {}\r\n\r\n        try:\r\n            proc = psutil.Process(self.process.pid)\r\n            cpu_percent = proc.cpu_percent(interval=1.0)\r\n            mem_info = proc.memory_info()\r\n            children = proc.children(recursive=True)\r\n\r\n            stats = {\r\n                \"pid\": self.process.pid,\r\n                \"cpu_percent\": cpu_percent,\r\n                \"memory_rss_mb\": mem_info.rss / 1024 / 1024,\r\n                \"memory_vms_mb\": mem_info.vms / 1024 / 1024,\r\n                \"num_threads\": proc.num_threads(),\r\n                \"num_children\": len(children),\r\n                \"status\": proc.status(),\r\n                \"uptime_seconds\": time.time() - proc.create_time(),\r\n                \"cpu_times\": {\r\n                    \"user\": proc.cpu_times().user,\r\n                    \"system\": proc.cpu_times().system,\r\n                },\r\n            }\r\n\r\n            # GPU stats if available\r\n            try:\r\n                result = subprocess.run(\r\n                    [\"nvidia-smi\", \"--query-compute-apps=pid,used_memory\",\r\n                     \"--format=csv,noheader\"],\r\n                    capture_output=True, text=True, timeout=5\r\n                )\r\n                for line in result.stdout.strip().split(\"\\n\"):\r\n                    if line and str(self.process.pid) in line:\r\n                        stats[\"gpu_memory_mb\"] = int(line.split(\",\")[1].strip().replace(\" MiB\", \"\"))\r\n            except Exception:\r\n                pass\r\n\r\n            return stats\r\n        except (psutil.NoSuchProcess, psutil.AccessDenied):\r\n            return {}\r\n\r\n    def send_signal(self, sig: int = signal.SIGTERM) -> bool:\r\n        \"\"\"Send signal to process group\"\"\"\r\n        if self.process is None:\r\n            return False\r\n        try:\r\n            pgid = os.getpgid(self.process.pid)\r\n            os.killpg(pgid, sig)\r\n            sig_name = signal.Signals(sig).name\r\n            print(f\"[+] Sent {sig_name} to {self.name} (PGID: {pgid})\")\r\n            return True\r\n        except ProcessLookupError:\r\n            print(f\"[-] Process {self.name} not found\")\r\n            return False\r\n\r\n    def wait_for_completion(self, timeout: Optional[int] = None) -> int:\r\n        \"\"\"Wait for process to complete\"\"\"\r\n        try:\r\n            returncode = self.process.wait(timeout=timeout)\r\n            print(f\"[+] {self.name} exited with code {returncode}\")\r\n            return returncode\r\n        except subprocess.TimeoutExpired:\r\n            print(f\"[-] {self.name} timed out after {timeout}s\")\r\n            self.send_signal(signal.SIGKILL)\r\n            return -1\r\n\r\n    def cleanup(self) -> None:\r\n        \"\"\"Clean up zombie processes and logs\"\"\"\r\n        if self.process and self.process.poll() is not None:\r\n            try:\r\n                self.process.wait(timeout=5)\r\n            except subprocess.TimeoutExpired:\r\n                pass\r\n        print(f\"[+] Cleaned up {self.name}\")\r\n\r\nif __name__ == \"__main__\":\r\n    trainer = MLTrainingProcess(\r\n        name=\"bert-finetune\",\r\n        cmd=[\"python3\", \"train.py\", \"--model\", \"bert-base\", \"--epochs\", \"10\"],\r\n        gpu_ids=[0, 1]\r\n    )\r\n    trainer.start()\r\n    trainer.set_cpu_quota(150)\r\n\r\n    # Monitor until completion\r\n    try:\r\n        while True:\r\n            stats = trainer.get_stats()\r\n            if not stats:\r\n                break\r\n            print(f\"  CPU: {stats['cpu_percent']:.1f}% | \"\r\n                  f\"RAM: {stats['memory_rss_mb']:.0f}MB | \"\r\n                  f\"Threads: {stats['num_threads']} | \"\r\n                  f\"Status: {stats['status']}\")\r\n            if stats.get('gpu_memory_mb'):\r\n                print(f\"  GPU Mem: {stats['gpu_memory_mb']}MB\")\r\n            time.sleep(5)\r\n    except KeyboardInterrupt:\r\n        print(\"\\n[!] Interrupted, stopping...\")\r\n        trainer.send_signal(signal.SIGTERM)\r\n\r\n    trainer.wait_for_completion(timeout=3600)\r\n    trainer.cleanup()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "[+] Started bert-finetune (PID: 12345)\r\n[+] Resource limits applied: CPU 150%, Memory 16G\r\n  CPU: 120.5% | RAM: 2456MB | Threads: 8 | Status: running\r\n  GPU Mem: 4096MB\r\n  CPU: 145.2% | RAM: 3120MB | Threads: 8 | Status: running\r\n  GPU Mem: 6144MB\r\n[+] bert-finetune exited with code 0\r\n[+] Cleaned up bert-finetune\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux process management covers monitoring, signaling, and resource control for everything that runs on a system. Processes move through five primary states — Runnable (R), Sleeping (S), Uninterruptible Sleep (D), Stopped (T), and Zombie (Z) — and are inspected with ps, top, htop, and /proc. Signals control lifecycle: SIGTERM requests graceful shutdown, SIGKILL forces immediate termination, and SIGSTOP/SIGCONT pause and resume execution. Nice values (-20 to 19) tune scheduler priority, while systemd manages services declaratively through unit files with logging via journalctl. Cgroups enforce hard CPU, memory, and I/O limits per process group, and ulimit sets per-user limits. For AI engineers this matters most when running training jobs: nvidia-smi maps GPU memory to PIDs, cgroup quotas stop one job from OOMing the host, and SIGTERM lets training save checkpoints before shutdown. The trade-off is that misusing signals or ignoring resource limits causes data loss, silent OOM kills, or exhausted PID tables."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process states: R (running), S (sleeping), D (uninterruptible I/O), T (stopped), Z (zombie)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SIGTERM (15) is graceful and catchable; SIGKILL (9) cannot be caught or blocked."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nice values range from -20 (highest priority) to 19 (lowest); default is 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systemd manages services via unit files; journalctl -u views per-service logs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cgroups v2 limit CPU quota, memory.max, and I/O per process group."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The OOM killer scores processes; oom_score_adj protects critical services."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signals"
        }), ": Always send SIGTERM (15) first so training can save checkpoints, wait a few seconds, then escalate to SIGKILL (9) if the process is still alive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "D state"
        }), ": A process in D (uninterruptible sleep) is waiting on kernel I/O and cannot be killed — do not mistake it for a dead process or try to SIGKILL it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nice values"
        }), ": Start non-critical experiments with nice -n 19 so interactive and serving processes stay responsive; only root can set negative values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "systemd units"
        }), ": Use Restart=on-failure with RestartSec in a .service file to auto-recover ML training services, and check logs with journalctl -u ml-training.service."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cgroups"
        }), ": Limit training jobs with CPUQuota=200% and MemoryMax=32G (or systemd-run -p flags) so a single job cannot OOM the host."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OOM killer"
        }), ": Protect sshd and monitoring with echo -500 > /proc/PID/oom_score_adj, since high-memory training jobs naturally get high oom_scores."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU monitoring"
        }), ": Use nvidia-smi --query-compute-apps=pid,used_memory and watch -n 1 nvidia-smi to catch memory leaks in long training runs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the different process states in Linux and how do they transition?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Linux has five primary process states. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Running (R)"
          }), ": process is executing or ready to execute. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sleeping (S)"
          }), ": waiting for I/O or a signal, can be interrupted. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Uninterruptible Sleep (D)"
          }), ": waiting for kernel I/O (disk), cannot be killed. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stopped (T)"
          }), ": suspended by a signal like SIGSTOP or SIGTSTP. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Zombie (Z)"
          }), ": process terminated but parent hasn't called wait() to reap it. Transitions: fork/exec creates a process in Runnable state. Scheduler picks it to Run. I/O wait moves to Sleeping. Signals can Stop or Continue. Exit creates Zombie until parent reaps."]
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
      "data-qid": "git08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the difference between SIGTERM and SIGKILL.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SIGTERM (15)"
          }), " is the default signal sent by kill. It requests graceful termination — the process can catch SIGTERM, clean up resources, save state, and exit. SIGTERM is the polite way to stop a process. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SIGKILL (9)"
          }), " forces immediate termination. It cannot be caught, blocked, or ignored by the process. The kernel immediately stops the process. Use SIGKILL only when SIGTERM fails. For ML training: first try SIGTERM (saves checkpoint), wait a few seconds, then SIGKILL if still running. Always try SIGTERM before SIGKILL."]
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
      "data-qid": "git08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What are nice values and how do they affect process scheduling?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nice values range from -20 (highest priority) to 19 (lowest priority). Default is 0. The nice value is a \"niceness\" hint to the scheduler — a higher nice value means \"be nicer to other processes.\" The kernel uses nice values to calculate the process's priority. A process with nice -20 gets more CPU time than a process with nice 19. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nice -n 19 command"
          }), " to start with low priority. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "renice -n 5 -p PID"
          }), " to change priority of a running process. Root can set negative nice values. For ML training, set nice 10-19 for non-critical experiments so interactive processes stay responsive."]
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
      "data-qid": "git08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does systemd manage services and what is a unit file?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["systemd is the init system and service manager for modern Linux. It manages services via ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "unit files"
          }), " — declarative configuration files with .service, .timer, .socket, etc. extensions. A service unit file has three sections: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "[Unit]"
          }), " — description, dependencies (After, Wants, Requires). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "[Service]"
          }), " — start/stop/reload commands, restart behavior, user/group, resource limits, environment. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "[Install]"
          }), " — WantedBy specifies which target enables the service. Key commands: systemctl start/stop/restart/enable/disable/status. Journalctl views logs. systemd provides dependency-based parallel startup, socket activation, and resource control via cgroups."]
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
      "data-qid": "git08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What are control groups (cgroups) and why are they important for AI workloads?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cgroups limit, account for, and isolate resource usage of process groups. They provide: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU limits"
          }), " — quota/period, share weighting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory limits"
          }), " — max usage, swap limit, OOM priority. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "I/O limits"
          }), " — read/write bandwidth and IOPS. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "PID limits"
          }), " — max number of processes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device access"
          }), " — restrict which devices a group can use. For AI workloads: prevent one training job from consuming all GPU memory, limit CPU usage to leave room for model serving, ensure fair resource sharing among team members, and set memory limits to prevent OOM kills of critical services. systemd integrates cgroups automatically for each service."]
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
      "data-qid": "git08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do zombie processes form and how do you clean them up?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A zombie process forms when a child process exits (via exit()) but the parent hasn't called wait() or waitpid() to read its exit status. The kernel keeps the process table entry (PID, exit status, resource usage) until the parent reaps it. Zombies show status Z in ps output. Causes: parent process bug (forgets to wait), parent process crashed before reaping. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cleanup"
          }), ": kill the parent process (SIGTERM) so the zombie children are inherited by init (PID 1), which automatically reaps them. If the parent can't be killed, you must fix the parent code. Zombies don't consume memory or CPU but they consume PID table entries, and the system can run out of PIDs."]
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
      "data-qid": "git08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the OOM killer and how does it decide which process to kill?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the system runs out of memory, the Out-Of-Memory (OOM) killer selects a process to terminate. It calculates an ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "oom_score"
          }), " for each process based on: memory usage (RSS + swap), CPU time, runtime, process priority (nice), whether the process is root-owned, and whether it's a direct child of init. Higher oom_score means more likely to be killed. You can influence OOM selection: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "echo -1000 > /proc/PID/oom_score_adj"
          }), " protects a process (never kill), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "echo 1000"
          }), " makes it a preferred target. ML training jobs often have high oom_score because they use lots of memory. Protect critical services like sshd and monitoring with oom_score_adj -500."]
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
      "data-qid": "git08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you monitor GPU processes and debug GPU memory issues?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) nvidia-smi"
          }), " — real-time GPU utilization, memory, temperature, processes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) nvidia-smi pmon"
          }), " — per-process GPU metrics. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) nvidia-smi --query-compute-apps"
          }), " — PID to GPU memory mapping. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) nvtop"
          }), " — htop-like GPU monitor. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) gpustat"
          }), " — colorized GPU summary. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Memory debugging"
          }), ": set ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CUDA_LAUNCH_BLOCKING=1"
          }), " for deterministic execution. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch.cuda.memory_summary()"
          }), " for PyTorch memory breakdown. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Memory leak detection"
          }), ": monitor memory with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "watch -n 1 nvidia-smi"
          }), ". If memory grows continuously without release, there's a leak. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) OOM recovery"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fuser -v /dev/nvidia*"
          }), " shows processes using GPU, then kill them."]
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
      "data-qid": "git08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: Explain process vs thread and how they appear in monitoring tools.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Process"
          }), ": independent execution unit with its own address space, file descriptors, and PID. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread"
          }), ": lightweight execution unit within a process, shares address space and file descriptors with sibling threads. Each thread has its own thread ID (TID) and stack. In ps: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ps -eLf"
          }), " shows threads (one line per thread). In top: press H to toggle thread view. In htop: press H for thread display. Python threads are OS-level (1:1 with kernel threads). ML frameworks use multiple threads for data loading, preprocessing, and GPU operations. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/PID/task/"
          }), " lists threads. Threads in the same process compete for resources together; processes are isolated."]
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
      "data-qid": "git08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you design a process monitoring system for a GPU cluster?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Collection"
          }), ": Deploy node_exporter (Prometheus) on each node — collects CPU, memory, disk, network metrics. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) GPU metrics"
          }), ": Use dcgm-exporter (NVIDIA DCGM) for GPU metrics (utilization, memory, temperature, power). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Process-level"
          }), ": Deploy a custom exporter that reads /proc and nvidia-smi to map PIDs to GPU memory. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Alerting"
          }), ": Alert on GPU memory > 90%, process crashes, OOM events. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Logging"
          }), ": Centralized logging with Loki or ELK, including journald logs from systemd services. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Dashboard"
          }), ": Grafana dashboard showing cluster utilization, per-node GPU usage, top processes by resource consumption. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Auto-recovery"
          }), ": Systemd restart policies, Kubernetes liveness probes, automated job resubmission on failure."]
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
      }), ": What ps command shows all processes with customized output fields?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ps -a\r\nb) ps aux\r\nc) ps -eLf\r\nd) ps -eo pid,ppid,cmd,%cpu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) ps -eo pid,ppid,cmd,%cpu"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-e"
          }), " selects all processes, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-o"
          }), " specifies custom output format."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which signal cannot be caught or ignored by a process?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) SIGTERM\r\nb) SIGHUP\r\nc) SIGKILL\r\nd) SIGINT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) SIGKILL (9)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SIGKILL forces immediate termination and cannot be caught, blocked, or ignored."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What nice value range represents lowest priority?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) -20\r\nb) 0\r\nc) 19\r\nd) 99"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 19"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Nice values range from -20 (highest priority) to 19 (lowest priority). 19 is the nicest."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which command views logs for a specific systemd service?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) syslog -u\r\nb) journalctl -u\r\nc) systemctl logs\r\nd) service --logs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) journalctl -u service-name"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "journalctl -u filters logs by systemd unit name."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does the 'D' state mean in process status?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Dead\r\nb) Uninterruptible sleep (disk I/O)\r\nc) Detached\r\nd) Defunct"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Uninterruptible sleep"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "D state means the process is waiting for kernel I/O and cannot be killed. Usually disk I/O."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Use ps to find the top 5 memory-consuming processes. Use kill to send SIGTERM to a test process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Start a process with nice value 15 using nice. Verify with ps -eo pid,nice,cmd."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a systemd service for a Python training script with automatic restart on failure. Test by simulating a crash."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Use cgroups v2 to limit a training process to 50% CPU and 8GB memory. Verify the limits are enforced."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a process monitor script in Python that tracks CPU, memory, and GPU stats for ML training processes and logs to a file."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Set up a GPU cluster monitoring stack with node_exporter, dcgm-exporter, Prometheus, and Grafana."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using SIGKILL instead of SIGTERM, causing data loss from unsaved checkpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring zombie processes until PID table exhaustion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running ML training without any resource limits (can OOM the system)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not setting ulimit for file descriptors when running distributed training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusing process states — especially D state (uninterruptible, not dead)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process states: R (running), S (sleeping), D (disk I/O), T (stopped), Z (zombie)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ps aux shows all processes; ps -eo for custom format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "top/htop for interactive monitoring; sort by %MEM or %CPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signals: SIGTERM (15) graceful, SIGKILL (9) immediate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nice values: -20 (highest) to 19 (lowest); renice to adjust"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systemd: systemctl manage services, journalctl view logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cgroups: limit CPU, memory, I/O per process group"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OOM killer: oom_score_adj to protect critical processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No such thing as \"D state = dead\" — D state is I/O wait"
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
            children: "Explain the core idea of Process Management — Monitoring, Signals, Resource Control in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Monitoring, Signals, Resource Control."
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
            children: "Describe a production bug caused by misunderstanding this technique — Monitoring, Signals, Resource Control. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Monitoring, Signals, Resource Control from 10 users to 10 million?"
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
            children: "Compare Process Management — Monitoring, Signals, Resource Control with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Monitoring, Signals, Resource Control."
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
            children: "How does Process Management — Monitoring, Signals, Resource Control behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Monitoring, Signals, Resource Control run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Monitoring, Signals, Resource Control that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Process Management — Monitoring, Signals, Resource Control explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Process Management — Monitoring, Signals, Resource Control\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Process Management — Monitoring, Signals, Resource Control to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Process Management — Monitoring, Signals, Resource Control (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Process Management — Monitoring, Signals, Resource Control and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Process Management — Monitoring, Signals, Resource Control-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Process Management — Monitoring, Signals, Resource Control interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Process Management — Monitoring, Signals, Resource Control in production today?"
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
        }), " Process Management — Monitoring, Signals, Resource Control builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Process Management — Monitoring, Signals, Resource Control before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Process Management — Monitoring, Signals, Resource Control is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Process Management — Monitoring, Signals, Resource Control in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Process Management — Monitoring, Signals, Resource Control chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Process Management — Monitoring, Signals, Resource Control is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Process Management is ___. — Answer: O(n) for log, O(1) for checkout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Process Management is ___. — Answer: merge conflicts, detached HEAD, force push"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Process Management — Monitoring, Signals, Resource Control issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Process Management — Monitoring, Signals, Resource Control in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Process Management — Monitoring, Signals, Resource Control that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Monitoring, Signals, Resource Control is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Process Management — Monitoring, Signals, Resource Control in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Process Management — Monitoring, Signals, Resource Control and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Monitoring, Signals, Resource Control on an empty input?"
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
            children: "Complete Medium exercises, explain Process Management — Monitoring, Signals, Resource Control to someone else"
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
        children: "Always write a one-line example of Process Management — Monitoring, Signals, Resource Control from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Process Management — Monitoring, Signals, Resource Control when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Process Management — Monitoring, Signals, Resource Control twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Process Management — Monitoring, Signals, Resource Control snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Process Management — Monitoring, Signals, Resource Control listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Process Management — Monitoring, Signals, Resource Control to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Process Management — Monitoring, Signals, Resource Control by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Process Management — Monitoring, Signals, Resource Control to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Management — Monitoring, Signals, Resource Control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 04 — builds the foundation for 08 Process Management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Process Management with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Process Management fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Process Management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Process Management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Process Management?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Process Management?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Process Management asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Process Management?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process Management — Monitoring, Signals, Resource Control is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Process Management — Monitoring, Signals, Resource Control."
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
        children: "Process Management — Monitoring, Signals, Resource Control emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Process Management — Monitoring, Signals, Resource Control today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Process Management — Monitoring, Signals, Resource Control — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Process Management — Monitoring, Signals, Resource Control changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Process Management is like a GPS navigation system"
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
          }), " — this chapter contributes the Process Management — Monitoring, Signals, Resource Control skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-08processmanagement-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What ps command shows all processes with customized output fields?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "d) ps -eo pid,ppid,cmd,%cpu"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-08processmanagement-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which signal cannot be caught or ignored by a process?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) SIGKILL (9)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-08processmanagement-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What nice value range represents lowest priority?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) 19"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-08processmanagement-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command views logs for a specific systemd service?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) journalctl -u service-name"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-08processmanagement-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does the 'D' state mean in process status?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Uninterruptible sleep"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Process Management — Monitoring, Signals, Resource Control (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Process Management — Monitoring, Signals, Resource Control (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Process Management — Monitoring, Signals, Resource Control-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Process Management — Monitoring, Signals, Resource Control in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Management — Monitoring, Signals, Resource Control"
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
        }), ": Add structured logging at each stage of the 08 Process Management pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Process Management — Monitoring, Signals, Resource Control in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Process Management — Monitoring, Signals, Resource Control."
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
        children: "Tell me about a time you debugged a Process Management — Monitoring, Signals, Resource Control problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Process Management — Monitoring, Signals, Resource Control is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_process_management(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Process Management.\r\n\r\n    Key concepts: commit, branch, merge, rebase, pull request\r\n    Complexity: O(n) for log, O(1) for checkout\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Process Management here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Process Management — Monitoring, Signals, Resource Control without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/09-cron-automation",
        children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process Management — Monitoring, Signals, Resource Control, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Process Management — Monitoring, Signals, Resource Control depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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