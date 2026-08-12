"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[86242],{

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
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_08_process_management_md_93c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/08-process-management","title":"Process Management — Monitoring, Signals, Resource Control","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/08-process-management.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/08-process-management","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/08-process-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":61,"frontMatter":{"id":"08-process-management","slug":"/ai-engineering-placement/04-git-linux-cli/08-process-management","title":"Process Management — Monitoring, Signals, Resource Control","sidebar_label":"Process Management — Monitoring, Signals, Resource Control","sidebar_position":61},"sidebar":"coursesSidebar","previous":{"title":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access"},"next":{"title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/09-cron-automation"}}');
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
	sidebar_position: 61
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-states-in-linux",
      children: "Process States in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\n    [*] --> Runnable: fork()/exec()\n    Runnable --> Running: scheduler selects\n    Running --> Runnable: preempted/time slice\n    Running --> Sleeping: I/O wait\n    Running --> Stopped: SIGSTOP/SIGTSTP\n    Stopped --> Runnable: SIGCONT\n    Running --> Zombie: exit() (parent hasn't reaped)\n    Zombie --> [*]: wait() by parent\n    Sleeping --> Runnable: I/O complete\n    Sleeping --> Running: signal/interrupt\n    Running --> UninterruptibleSleep: kernel I/O (D state)\n    UninterruptibleSleep --> Runnable: I/O complete\n"
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
        children: "# List all processes\nps aux\n\n# Custom format\nps -eo pid,ppid,cmd,%cpu,%mem,stat,user\n\n# Tree view\nps auxf\nps -ejH\n\n# Process by name\nps aux | grep python\n\n# Specific PID info\nps -fp 1234\n\n# Threads of a process\nps -eLf | grep 1234\n\n# Sort by memory usage\nps aux --sort=-%mem | head -10\n\n# Sort by CPU usage\nps aux --sort=-%cpu | head -10\n\n# Show process environment\nps -eww 1234\n\n# Security context\nps -eo pid,user,label,cmd\n"
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
        children: "# Basic top\ntop\n\n# Batch mode (for scripts)\ntop -b -n 1\n\n# Sort by memory\ntop -o %MEM\n\n# Show only specific user processes\ntop -u ubuntu\n\n# Monitor specific PIDs\ntop -p 1234,5678\n\n# Update interval (seconds)\ntop -d 2\n\n# Install htop\nsudo apt install htop\n\n# Interactive htop (better than top)\nhtop\n\n# Tree view in htop\nhtop -t\n\n# Filter by process name\nhtop -p 1234\n\n# Show process tree (F5 in htop)\n"
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
        children: "# Start process with low priority\nnice -n 19 ./training-script.sh\n\n# Start with high priority (requires root)\nnice -n -20 ./critical-service.sh\n\n# Check priority of running processes\nps -eo pid,nice,cmd\n\n# Change priority of running process\nrenice -n 10 -p 1234\n\n# Change priority by process name\nrenice -n 5 -g python\n\n# Show priority ranges\n# -20 (highest priority) to 19 (lowest priority)\n# Default: 0\n\n# Real-time priority (RT, for time-critical)\nchrt -r 99 ./realtime-task.sh\n\n# Check scheduling policy\nchrt -p 1234\n\n# Set scheduling policy\nchrt -f -p 50 1234\n"
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
        children: "# List all signals\nkill -l\n\n# Common signals:\n# SIGTERM (15) - Graceful termination (default)\n# SIGKILL (9) - Force kill (cannot be caught)\n# SIGSTOP (19) - Pause process (cannot be caught)\n# SIGCONT (18) - Resume process\n# SIGHUP (1) - Hang up / reload config\n# SIGINT (2) - Interrupt (Ctrl+C)\n# SIGQUIT (3) - Quit with core dump\n# SIGUSR1 (10) - User-defined signal 1\n# SIGUSR2 (12) - User-defined signal 2\n\n# Send signals by PID\nkill 1234                # SIGTERM\nkill -9 1234             # SIGKILL\nkill -15 1234            # SIGTERM (explicit)\nkill -SIGSTOP 1234       # STOP\nkill -SIGCONT 1234       # CONT\n\n# Kill by process name\npkill python\npkill -f \"train.py\"\n\n# Kill all processes of a user\npkill -u ubuntu\n\n# Kill specific signal by name\npkill -HUP nginx\n\n# Kill processes matching pattern\nkillall python3\nkillall -9 training\n\n# Check if process exists\nkill -0 1234  # Returns 0 if alive, error if not\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systemd-service-management",
      children: "Systemd Service Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Systemd service lifecycle\nsystemctl start service-name\nsystemctl stop service-name\nsystemctl restart service-name\nsystemctl reload service-name\nsystemctl enable service-name\nsystemctl disable service-name\nsystemctl status service-name\nsystemctl is-active service-name\nsystemctl is-enabled service-name\n\n# Service unit file location\n# /etc/systemd/system/service-name.service\n# /lib/systemd/system/service-name.service\n\n# List all services\nsystemctl list-units --type=service\n\n# List failed services\nsystemctl --failed\n\n# View service dependencies\nsystemctl list-dependencies service-name\n\n# Mask/unmask (prevent starting)\nsystemctl mask service-name\nsystemctl unmask service-name\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Systemd unit file example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/systemd/system/ml-training.service\n[Unit]\nDescription=ML Model Training Service\nAfter=network.target\nWants=gpu-monitor.service\n\n[Service]\nType=simple\nUser=mluser\nGroup=mlgroup\nWorkingDirectory=/opt/ml-project\nEnvironmentFile=/etc/ml-training.env\nExecStart=/usr/bin/python3 /opt/ml-project/train.py --config production.yaml\nExecReload=/bin/kill -HUP $MAINPID\nRestart=on-failure\nRestartSec=10\nLimitNOFILE=65536\nLimitNPROC=4096\nCPUQuota=80%\nMemoryMax=32G\nTasksMax=8192\n\n# GPU access\nDeviceAllow=/dev/nvidia0\nDeviceAllow=/dev/nvidiactl\n\n# Security\nPrivateTmp=true\nProtectSystem=full\nProtectHome=true\nNoNewPrivileges=true\n\n[Install]\nWantedBy=multi-user.target\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Journalctl (log viewing)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View all logs\njournalctl\n\n# Follow latest logs\njournalctl -f\n\n# Service-specific logs\njournalctl -u ml-training.service\n\n# Since last boot\njournalctl -b\n\n# Last hour\njournalctl --since \"1 hour ago\"\n\n# Specific time range\njournalctl --since \"2024-01-01 00:00:00\" --until \"2024-01-02 00:00:00\"\n\n# Priority-based\njournalctl -p err -b\n\n# JSON output\njournalctl -u ml-training.service -o json\n\n# Show recent N lines\njournalctl -u ml-training.service -n 50\n\n# Disk usage\njournalctl --disk-usage\n\n# Vacuum old logs\njournalctl --vacuum-time=30d\njournalctl --vacuum-size=500M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cgroups-control-groups",
      children: "Cgroups (Control Groups)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cgroups limit and account for resource usage of process groups."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List cgroup controllers\ncat /proc/cgroups\n\n# Check cgroup version (v1 vs v2)\nstat -fc %T /sys/fs/cgroup/\n# tmpfs = v1, cgroup2fs = v2\n\n# View cgroup hierarchy\nls /sys/fs/cgroup/\n\n# Create cgroup (v2)\nsudo mkdir /sys/fs/cgroup/ml-jobs\nsudo bash -c 'echo \"+cpu +memory\" > /sys/fs/cgroup/cgroup.subtree_control'\nsudo bash -c 'echo \"+memory +cpu\" > /sys/fs/cgroup/ml-jobs/cgroup.subtree_control'\n\n# Set limits\nsudo bash -c 'echo \"32G\" > /sys/fs/cgroup/ml-jobs/memory.max'\nsudo bash -c 'echo \"80000 100000\" > /sys/fs/cgroup/ml-jobs/cpu.max'\n\n# Add process to cgroup\nsudo bash -c 'echo 1234 > /sys/fs/cgroup/ml-jobs/cgroup.procs'\n\n# View cgroup stats\ncat /sys/fs/cgroup/ml-jobs/memory.current\ncat /sys/fs/cgroup/ml-jobs/cpu.stat\n\n# Systemd integration\nsystemd-cgls  # Tree view of cgroups\nsystemd-cgtop  # Top-like for cgroups\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Using systemd resource control"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run command with limits\nsystemd-run --user --scope -p MemoryMax=16G -p CPUQuota=50% python train.py\n\n# Run as service with transient unit\nsystemd-run --unit=ml-job-1 -p MemoryMax=32G -p CPUQuota=200% python train.py\n\n# View cgroup for service\nsystemctl show ml-job-1.service -p ControlGroup\n\n# Resource control properties:\n# CPUQuota=200% (2 cores)\n# MemoryMax=32G\n# MemoryHigh=24G (memory throttle point)\n# TasksMax=4096 (max threads)\n# IOReadBandwidthMax=/dev/sda 100M\n# IOWriteBandwidthMax=/dev/sda 100M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-monitoring-in-ai-workflows",
      children: "Process Monitoring in AI Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Monitor GPU processes\nnvidia-smi\nnvidia-smi pmon  # Process monitor\nnvidia-smi dmon  # Device monitor\n\n# Watch GPU usage continuously\nwatch -n 1 nvidia-smi\n\n# Monitor specific training process\nwhile true; do\n    ps -p $(pgrep -f train.py) -o pid,%cpu,%mem,rss,vsz,etime --no-headers\n    sleep 5\ndone\n\n# Find GPU memory by process\nnvidia-smi --query-compute-apps=pid,used_memory --format=csv\n\n# Monitor disk I/O per process\niotop -o -p 1234\n\n# Network traffic per process\nnethogs\n\n# Process tree visualization\npstree -p -u ubuntu\n\n# Full process details in /proc\ncat /proc/1234/status\ncat /proc/1234/limits\ncat /proc/1234/environ  # null-separated\nls /proc/1234/fd/      # Open file descriptors\nls /proc/1234/task/    # Threads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-limits-ulimit",
      children: "Resource Limits (ulimit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View all limits\nulimit -a\n\n# Set file descriptor limit\nulimit -n 65536\n\n# Set core file size (0 = disable)\nulimit -c unlimited\n\n# Set max user processes\nulimit -u 4096\n\n# Set virtual memory limit\nulimit -v unlimited\n\n# Persistent limits in /etc/security/limits.conf\necho \"mluser soft nofile 65536\" >> /etc/security/limits.conf\necho \"mluser hard nofile 1048576\" >> /etc/security/limits.conf\necho \"mluser soft nproc 4096\" >> /etc/security/limits.conf\necho \"mluser hard nproc 8192\" >> /etc/security/limits.conf\n\n# System-wide limits\n# /etc/sysctl.conf\n# fs.file-max = 2097152\n# kernel.pid_max = 4194303\n# vm.max_map_count = 262144\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Process Lifecycle] --> B[fork/exec]\n    B --> C[Runnable]\n    C --> D{Running?}\n    D -->|Yes| E[Running]\n    D -->|No| C\n    E --> F{Event?}\n    F -->|I/O Wait| G[Sleeping]\n    F -->|Stop Signal| H[Stopped]\n    F -->|Time Slice End| C\n    F -->|Exit| I[Zombie]\n    G -->|I/O Complete| C\n    H -->|SIGCONT| C\n    I -->|parent wait| J[Removed]\n    E -->|OOM| K[Killed]\n    E -->|Signal| L[Terminated]\n    subgraph Monitoring Tools\n        M[ps aux]\n        N[top/htop]\n        O[systemctl]\n        P[journalctl]\n        Q[nvidia-smi]\n    end\n    style A fill:#4a90d9,color:#fff\n    style J fill:#50b86c,color:#fff\n    style K fill:#e85d75,color:#fff\n"
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
        children: "#!/usr/bin/env python3\n\"\"\"Process management and monitoring for ML training\"\"\"\n\nimport os\nimport time\nimport signal\nimport subprocess\nimport psutil\nfrom typing import Dict, List, Optional\n\nclass MLTrainingProcess:\n    \"\"\"Manage and monitor ML training processes\"\"\"\n\n    def __init__(self, name: str, cmd: List[str], gpu_ids: Optional[List[int]] = None):\n        self.name = name\n        self.cmd = cmd\n        self.gpu_ids = gpu_ids\n        self.process: Optional[subprocess.Popen] = None\n        self.log_file = f\"/var/log/ml/{name}.log\"\n\n    def start(self) -> None:\n        \"\"\"Start training process with resource limits\"\"\"\n        env = os.environ.copy()\n        if self.gpu_ids:\n            env[\"CUDA_VISIBLE_DEVICES\"] = \",\".join(map(str, self.gpu_ids))\n\n        log_fd = open(self.log_file, \"a\")\n        self.process = subprocess.Popen(\n            self.cmd,\n            stdout=log_fd,\n            stderr=subprocess.STDOUT,\n            env=env,\n            preexec_fn=os.setsid\n        )\n        print(f\"[+] Started {self.name} (PID: {self.process.pid})\")\n\n    def set_cpu_quota(self, quota_percent: int) -> None:\n        \"\"\"Set CPU quota via cgroups\"\"\"\n        if self.process is None:\n            return\n        pid = self.process.pid\n        cgroup = f\"/sys/fs/cgroup/ml/{self.name}\"\n        os.makedirs(cgroup, exist_ok=True)\n\n        # Configure CPU quota (e.g., 200% = 2 cores)\n        period = 100000\n        quota = int(period * quota_percent / 100)\n        with open(f\"{cgroup}/cpu.max\", \"w\") as f:\n            f.write(f\"{quota} {period}\\n\")\n\n        # Set memory limit\n        with open(f\"{cgroup}/memory.max\", \"w\") as f:\n            f.write(\"16G\\n\")\n\n        # Add process to cgroup\n        with open(f\"{cgroup}/cgroup.procs\", \"w\") as f:\n            f.write(str(pid))\n\n        print(f\"[+] Resource limits applied: CPU {quota_percent}%, Memory 16G\")\n\n    def get_stats(self) -> Dict:\n        \"\"\"Get real-time process statistics\"\"\"\n        if self.process is None:\n            return {}\n\n        try:\n            proc = psutil.Process(self.process.pid)\n            cpu_percent = proc.cpu_percent(interval=1.0)\n            mem_info = proc.memory_info()\n            children = proc.children(recursive=True)\n\n            stats = {\n                \"pid\": self.process.pid,\n                \"cpu_percent\": cpu_percent,\n                \"memory_rss_mb\": mem_info.rss / 1024 / 1024,\n                \"memory_vms_mb\": mem_info.vms / 1024 / 1024,\n                \"num_threads\": proc.num_threads(),\n                \"num_children\": len(children),\n                \"status\": proc.status(),\n                \"uptime_seconds\": time.time() - proc.create_time(),\n                \"cpu_times\": {\n                    \"user\": proc.cpu_times().user,\n                    \"system\": proc.cpu_times().system,\n                },\n            }\n\n            # GPU stats if available\n            try:\n                result = subprocess.run(\n                    [\"nvidia-smi\", \"--query-compute-apps=pid,used_memory\",\n                     \"--format=csv,noheader\"],\n                    capture_output=True, text=True, timeout=5\n                )\n                for line in result.stdout.strip().split(\"\\n\"):\n                    if line and str(self.process.pid) in line:\n                        stats[\"gpu_memory_mb\"] = int(line.split(\",\")[1].strip().replace(\" MiB\", \"\"))\n            except Exception:\n                pass\n\n            return stats\n        except (psutil.NoSuchProcess, psutil.AccessDenied):\n            return {}\n\n    def send_signal(self, sig: int = signal.SIGTERM) -> bool:\n        \"\"\"Send signal to process group\"\"\"\n        if self.process is None:\n            return False\n        try:\n            pgid = os.getpgid(self.process.pid)\n            os.killpg(pgid, sig)\n            sig_name = signal.Signals(sig).name\n            print(f\"[+] Sent {sig_name} to {self.name} (PGID: {pgid})\")\n            return True\n        except ProcessLookupError:\n            print(f\"[-] Process {self.name} not found\")\n            return False\n\n    def wait_for_completion(self, timeout: Optional[int] = None) -> int:\n        \"\"\"Wait for process to complete\"\"\"\n        try:\n            returncode = self.process.wait(timeout=timeout)\n            print(f\"[+] {self.name} exited with code {returncode}\")\n            return returncode\n        except subprocess.TimeoutExpired:\n            print(f\"[-] {self.name} timed out after {timeout}s\")\n            self.send_signal(signal.SIGKILL)\n            return -1\n\n    def cleanup(self) -> None:\n        \"\"\"Clean up zombie processes and logs\"\"\"\n        if self.process and self.process.poll() is not None:\n            try:\n                self.process.wait(timeout=5)\n            except subprocess.TimeoutExpired:\n                pass\n        print(f\"[+] Cleaned up {self.name}\")\n\nif __name__ == \"__main__\":\n    trainer = MLTrainingProcess(\n        name=\"bert-finetune\",\n        cmd=[\"python3\", \"train.py\", \"--model\", \"bert-base\", \"--epochs\", \"10\"],\n        gpu_ids=[0, 1]\n    )\n    trainer.start()\n    trainer.set_cpu_quota(150)\n\n    # Monitor until completion\n    try:\n        while True:\n            stats = trainer.get_stats()\n            if not stats:\n                break\n            print(f\"  CPU: {stats['cpu_percent']:.1f}% | \"\n                  f\"RAM: {stats['memory_rss_mb']:.0f}MB | \"\n                  f\"Threads: {stats['num_threads']} | \"\n                  f\"Status: {stats['status']}\")\n            if stats.get('gpu_memory_mb'):\n                print(f\"  GPU Mem: {stats['gpu_memory_mb']}MB\")\n            time.sleep(5)\n    except KeyboardInterrupt:\n        print(\"\\n[!] Interrupted, stopping...\")\n        trainer.send_signal(signal.SIGTERM)\n\n    trainer.wait_for_completion(timeout=3600)\n    trainer.cleanup()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "[+] Started bert-finetune (PID: 12345)\n[+] Resource limits applied: CPU 150%, Memory 16G\n  CPU: 120.5% | RAM: 2456MB | Threads: 8 | Status: running\n  GPU Mem: 4096MB\n  CPU: 145.2% | RAM: 3120MB | Threads: 8 | Status: running\n  GPU Mem: 6144MB\n[+] bert-finetune exited with code 0\n[+] Cleaned up bert-finetune\n"
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
      children: "a) ps -a\nb) ps aux\nc) ps -eLf\nd) ps -eo pid,ppid,cmd,%cpu"
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
      children: "a) SIGTERM\nb) SIGHUP\nc) SIGKILL\nd) SIGINT"
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
      children: "a) -20\nb) 0\nc) 19\nd) 99"
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
      children: "a) syslog -u\nb) journalctl -u\nc) systemctl logs\nd) service --logs"
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
      children: "a) Dead\nb) Uninterruptible sleep (disk I/O)\nc) Detached\nd) Defunct"
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
            children: "Design a minimal, well-typed function that demonstrates Process Management — Monitoring, Signals, Resource Control."
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
            children: "Describe a production bug caused by misunderstanding Process Management — Monitoring, Signals, Resource Control. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Process Management — Monitoring, Signals, Resource Control from 10 users to 10 million?"
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
            children: "Walk through how you would test a component that depends on Process Management — Monitoring, Signals, Resource Control."
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
            children: "How would you make an implementation of Process Management — Monitoring, Signals, Resource Control run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Process Management — Monitoring, Signals, Resource Control that is production-quality."
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
        children: "The time complexity of the standard approach to Process Management — Monitoring, Signals, Resource Control is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Process Management — Monitoring, Signals, Resource Control is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of Process Management — Monitoring, Signals, Resource Control is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of Process Management — Monitoring, Signals, Resource Control on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Process Management — Monitoring, Signals, Resource Control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Process Management — Monitoring, Signals, Resource Control (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Process Management — Monitoring, Signals, Resource Control problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Process Management — Monitoring, Signals, Resource Control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Process Management — Monitoring, Signals, Resource Control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Process Management — Monitoring, Signals, Resource Control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Process Management — Monitoring, Signals, Resource Control fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Process Management — Monitoring, Signals, Resource Control is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Process Management — Monitoring, Signals, Resource Control is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Process Management — Monitoring, Signals, Resource Control, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Process Management — Monitoring, Signals, Resource Control asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing Process Management — Monitoring, Signals, Resource Control."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process Management — Monitoring, Signals, Resource Control appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Process Management — Monitoring, Signals, Resource Control helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Process Management — Monitoring, Signals, Resource Control concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Process Management — Monitoring, Signals, Resource Control skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Process Management — Monitoring, Signals, Resource Control to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process Management — Monitoring, Signals, Resource Control is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Process Management — Monitoring, Signals, Resource Control skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Process Management — Monitoring, Signals, Resource Control code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Process Management — Monitoring, Signals, Resource Control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Process Management — Monitoring, Signals, Resource Control code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Process Management — Monitoring, Signals, Resource Control example code."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Process Management — Monitoring, Signals, Resource Control."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Process Management — Monitoring, Signals, Resource Control logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Process Management — Monitoring, Signals, Resource Control daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Process Management — Monitoring, Signals, Resource Control patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Process Management — Monitoring, Signals, Resource Control principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Process Management — Monitoring, Signals, Resource Control shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Process Management — Monitoring, Signals, Resource Control to the business outcome, not just the code."]
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