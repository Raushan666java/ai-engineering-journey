"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[36589],{

/***/ 30760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_02_linux_basics_md_b78_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-02-linux-basics-md-b78.json
const site_docs_courses_devops_02_linux_basics_md_b78_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/02-linux-basics","title":"Chapter 2: Linux Basics for DevOps","description":"Next: Advanced Git","source":"@site/docs/courses/devops/02-linux-basics.md","sourceDirName":"courses/devops","slug":"/devops/02-linux-basics","permalink":"/ai-engineering-journey/devops/02-linux-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"02-linux-basics","slug":"/devops/02-linux-basics","title":"Chapter 2: Linux Basics for DevOps","sidebar_label":"Chapter 2: Linux Basics for DevOps","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"Chapter 2: Advanced Git","permalink":"/ai-engineering-journey/devops/02-git"},"next":{"title":"Chapter 3: Build Tools","permalink":"/ai-engineering-journey/devops/03-build-tools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/02-linux-basics.md


const frontMatter = {
	id: '02-linux-basics',
	slug: '/devops/02-linux-basics',
	title: 'Chapter 2: Linux Basics for DevOps',
	sidebar_label: 'Chapter 2: Linux Basics for DevOps',
	sidebar_position: 3
};
const contentTitle = 'Chapter 2: Linux Basics for DevOps';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Filesystem Hierarchy Standard (FHS)",
  "id": "filesystem-hierarchy-standard-fhs",
  "level": 3
}, {
  "value": "Essential Command-Line Operations",
  "id": "essential-command-line-operations",
  "level": 3
}, {
  "value": "File Permissions",
  "id": "file-permissions",
  "level": 3
}, {
  "value": "Pipes, Redirection, and Streams",
  "id": "pipes-redirection-and-streams",
  "level": 3
}, {
  "value": "Text Processing Power Tools",
  "id": "text-processing-power-tools",
  "level": 3
}, {
  "value": "Shell Scripting",
  "id": "shell-scripting",
  "level": 3
}, {
  "value": "systemd Service Management",
  "id": "systemd-service-management",
  "level": 3
}, {
  "value": "Network Configuration",
  "id": "network-configuration",
  "level": 3
}, {
  "value": "Package Management",
  "id": "package-management",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Log Analysis Pipeline",
  "id": "example-1-log-analysis-pipeline",
  "level": 3
}, {
  "value": "Example 2: Deployment Rollback Script",
  "id": "example-2-deployment-rollback-script",
  "level": 3
}, {
  "value": "Example 3: Resource Monitoring Script",
  "id": "example-3-resource-monitoring-script",
  "level": 3
}, {
  "value": "Example 4: Automated Backup with Rotation",
  "id": "example-4-automated-backup-with-rotation",
  "level": 3
}, {
  "value": "Process Monitor and Resource Tracker",
  "id": "process-monitor-and-resource-tracker",
  "level": 3
}, {
  "value": "Shell Script Validator and Analyzer",
  "id": "shell-script-validator-and-analyzer",
  "level": 3
}, {
  "value": "Linux Process Monitor Service",
  "id": "linux-process-monitor-service",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: Linux Automation with Node.js",
  "id": "typescript-linux-automation-with-nodejs",
  "level": 2
}, {
  "value": "Mermaid: Systemd Service Lifecycle",
  "id": "mermaid-systemd-service-lifecycle",
  "level": 2
}, {
  "value": "Mermaid: Linux Process States",
  "id": "mermaid-linux-process-states",
  "level": 2
}, {
  "value": "Deeper Explanation: Linux Performance Troubleshooting",
  "id": "deeper-explanation-linux-performance-troubleshooting",
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
    blockquote: "blockquote",
    br: "br",
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
        id: "chapter-2-linux-basics-for-devops",
        children: "Chapter 2: Linux Basics for DevOps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/02-git",
          children: "Advanced Git"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Linux filesystem hierarchy and navigate it effectively."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master essential command-line operations for file management, process control, and system administration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand file permissions, users, and groups."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use pipes, redirection, and text processing tools."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write and debug shell scripts for automation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure networking and manage services with systemd."
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
        href: "../../assets/images/lessons/devops/02-linux-basics/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/02-linux-basics/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/02-linux-basics/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/02-linux-basics/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/02-linux-basics/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/02-linux-basics/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Filesystem Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard directory layout (FHS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know where configs, logs, and binaries live"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command Line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core utilities for daily DevOps work"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "grep"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "awk"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find"
            }), " are indispensable"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write/execute for user/group/other"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chmod"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chown"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "umask"
            }), " daily"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipes and Redirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain commands together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build pipelines like `ps aux"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shell Scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate repetitive tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterize scripts for CI/CD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "systemd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service management and boot process"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "systemctl"
            }), " for all service operations"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Filesystem Hierarchy] --> B[Shell Basics]\n    B --> C[File Operations]\n    B --> D[Process Management]\n    B --> E[Permissions]\n    C --> F[Pipes & Redirection]\n    D --> F\n    E --> F\n    F --> G[Text Processing]\n    G --> H[Shell Scripting]\n    H --> I[systemd Services]\n    H --> J[Network Configuration]\n    I & J --> K[Automation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filesystem-hierarchy-standard-fhs",
      children: "Filesystem Hierarchy Standard (FHS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux follows the Filesystem Hierarchy Standard, which defines the directory structure:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root directory, base of the filesystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/bin"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Essential user command binaries (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cp"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/sbin"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["System administration binaries (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fdisk"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mkfs"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/etc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System-wide configuration files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/var"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable data (logs, databases, spools)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary files (cleared on reboot)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/home"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal directories for users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Home directory for root user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/usr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary hierarchy for user utilities and applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/opt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional third-party software packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/proc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual filesystem for process and kernel information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/dev"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device files representing hardware"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Understanding this hierarchy is crucial for DevOps work because logs live in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/var/log"
      }), ", configs in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc"
      }), ", and executables in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/usr/bin"
      }), ". When writing automated scripts or configuring CI/CD agents, knowing where to find and place files is fundamental."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "essential-command-line-operations",
      children: "Essential Command-Line Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation and File Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pwd"
        }), " — Print working directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ls -la"
        }), " — List all files with details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cd ~/project"
        }), " — Change directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cp -r src/ dest/"
        }), " — Copy recursively"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mv old new"
        }), " — Move or rename"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf dir/"
        }), " — Remove directory recursively (dangerous)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mkdir -p a/b/c"
        }), " — Create nested directories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "touch file.txt"
        }), " — Create empty file or update timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "find /path -name \"*.log\""
        }), " — Search for files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Viewing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cat file"
        }), " — Display entire file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "less file"
        }), " — Scroll through file (press ", (0,jsx_runtime.jsx)(_components.code, {
          children: "q"
        }), " to quit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "head -20 file"
        }), " — First 20 lines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tail -f file"
        }), " — Follow file in real-time (crucial for logs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "nl file"
        }), " — Numbered lines"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process Management:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ps aux"
        }), " — All processes with details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "top"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "htop"
        }), " — Interactive process viewer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kill -9 PID"
        }), " — Force kill process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pgrep -f pattern"
        }), " — Search processes by name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pkill -f pattern"
        }), " — Kill processes by pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "nice -n 10 command"
        }), " — Run with lower priority"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "System Information:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "uname -a"
        }), " — Kernel version and system info"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "df -h"
        }), " — Disk space usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "du -sh /path"
        }), " — Directory size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "free -h"
        }), " — Memory usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "uptime"
        }), " — System uptime and load average"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lscpu"
        }), " — CPU information"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-permissions",
      children: "File Permissions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every file and directory has three permission sets (owner, group, others) with three modes (read, write, execute)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "-rwxr-xr--  1 user group  1024 Jun 24 10:00 script.sh\n|  |  |  |\n|  |  |  +- Others: read only (r--)\n|  |  +---- Group: read and execute (r-x)\n|  +------- Owner: read, write, execute (rwx)\n+---------- File type (- for file, d for directory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numeric permissions (octal):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "r"
        }), " = 4, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "w"
        }), " = 2, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " = 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chmod 755 file"
        }), " = owner rwx (7), group r-x (5), others r-x (5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chmod 644 file"
        }), " = owner rw- (6), group r-- (4), others r-- (4)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "chmod 755 script.sh     # Make script executable\nchown user:group file   # Change owner and group\numask 022               # Default permissions for new files\nchmod +x script.sh      # Add execute permission\nchmod -R 755 directory/  # Recursively set permissions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pipes-redirection-and-streams",
      children: "Pipes, Redirection, and Streams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux uses three standard I/O streams:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stdin"
        }), " (0) — Input to command"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stdout"
        }), " (1) — Normal output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stderr"
        }), " (2) — Error output"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redirection operators:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "command > file      # Redirect stdout to file (overwrite)\ncommand >> file     # Redirect stdout to file (append)\ncommand 2> file     # Redirect stderr to file\ncommand &> file     # Redirect both stdout and stderr\ncommand < file      # Read stdin from file\ncommand << EOF      # Here document (inline input)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipes"
      }), " connect stdout of one command to stdin of another:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "ps aux | grep nginx | awk '{print $2}'\ncat access.log | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text-processing-power-tools",
      children: "Text Processing Power Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "grep"
        }), " — Pattern searching:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "grep \"ERROR\" app.log                    # Find lines containing ERROR\ngrep -v \"DEBUG\" app.log                 # Exclude DEBUG lines\ngrep -i \"warning\" app.log               # Case-insensitive\ngrep -r \"TODO\" src/                     # Recursive search in directory\ngrep -E \"ERROR|FATAL\" app.log           # Extended regex (multiple patterns)\ngrep -c \"pattern\" file                  # Count matches\ngrep -A 5 -B 5 \"ERROR\" log              # 5 lines after and before match\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sed"
        }), " — Stream editor:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "sed -i 's/old/new/g' file               # Replace all occurrences in-place\nsed -n '/ERROR/p' log                   # Print only ERROR lines\nsed '/^#/d' config                      # Delete comment lines\nsed '1,10d' file                        # Delete first 10 lines\nsed 's/  */,/g' data                    # Convert spaces to commas\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "awk"
        }), " — Pattern scanning and processing:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "awk '{print $1}' file                   # Print first column\nawk -F: '{print $1, $3}' /etc/passwd   # Use : as delimiter\nawk '$3 > 100 {print $1}' data          # Conditional print\nawk '{sum+=$1} END {print sum}' file    # Sum column values\nawk 'NR==FNR {a[$1]; next} $1 in a' f1 f2  # Join two files\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shell-scripting",
      children: "Shell Scripting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shell scripts automate repetitive tasks. They are essential for CI/CD pipelines, deployment scripts, and system administration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic script structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -euo pipefail  # Strict mode: exit on error, undefined vars, pipe failures\n\n# Variables\nPROJECT_DIR=\"/var/www/app\"\nBACKUP_DIR=\"/backups/$(date +%Y%m%d)\"\nLOG_FILE=\"/var/log/deploy.log\"\n\n# Functions\nlog() {\n    echo \"[$(date '+%Y-%m-%d %H:%M:%S')] $1\" >> \"$LOG_FILE\"\n}\n\ncleanup() {\n    log \"Cleaning up temporary files...\"\n    rm -rf /tmp/deploy-*\n}\n\n# Trap for cleanup on exit\ntrap cleanup EXIT\n\n# Main\nlog \"Starting deployment...\"\nmkdir -p \"$BACKUP_DIR\"\nif cp -r \"$PROJECT_DIR\" \"$BACKUP_DIR\"; then\n    log \"Backup created successfully\"\nelse\n    log \"ERROR: Backup failed\"\n    exit 1\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key scripting patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameter expansion:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${VAR:-default}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${VAR:?error message}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arrays:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr=(a b c)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${arr[@]}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${#arr[@]}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditionals:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if, elif, else, case"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loops:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for i in list; do done"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while read line; do done"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exit codes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$?"
        }), " for last command status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Command substitution:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$(command)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "`command`"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systemd-service-management",
      children: "systemd Service Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern Linux uses systemd for service management, boot process, and logging."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Common ", (0,jsx_runtime.jsx)(_components.code, {
          children: "systemctl"
        }), " commands:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "systemctl start nginx          # Start a service\nsystemctl stop nginx           # Stop a service\nsystemctl restart nginx        # Restart a service\nsystemctl status nginx         # Check service status\nsystemctl enable nginx         # Start on boot\nsystemctl disable nginx        # Disable auto-start\nsystemctl reload nginx         # Reload configuration\nsystemctl daemon-reload        # Reload unit files after change\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Creating a systemd unit file (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/systemd/system/myapp.service"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "[Unit]\nDescription=My Application Service\nAfter=network.target postgresql.service\nWants=postgresql.service\n\n[Service]\nType=simple\nUser=myapp\nGroup=myapp\nWorkingDirectory=/opt/myapp\nExecStart=/usr/bin/node /opt/myapp/server.js\nRestart=on-failure\nRestartSec=5\nEnvironment=NODE_ENV=production\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Journald logging:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "journalctl -u nginx              # Service-specific logs\njournalctl -u nginx --since \"1 hour ago\"\njournalctl -u nginx -f           # Follow log in real-time\njournalctl --disk-usage          # Check log size\njournalctl --vacuum-size=500M    # Limit log size\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-configuration",
      children: "Network Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "ip addr              # Show network interfaces and IPs\nip route             # Show routing table\nss -tulpn            # Show listening ports and processes\nnetstat -tulpn       # (Legacy) Show network connections\nping -c 4 host       # Test connectivity\ntraceroute host      # Trace network path\nnslookup domain      # DNS lookup\ncurl -v URL          # HTTP request with debugging\nwget URL             # Download file\nnc -zv host port     # Test TCP port connectivity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-management",
      children: "Package Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Debian/Ubuntu (APT):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "apt update                      # Update package index\napt upgrade                     # Upgrade all packages\napt install nginx               # Install package\napt remove nginx                # Remove package\napt autoremove                  # Remove unused dependencies\ndpkg -l | grep nginx            # List installed packages\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RHEL/CentOS/Fedora (YUM/DNF):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "yum update                      # Update all packages\nyum install nginx               # Install package\nyum remove nginx                # Remove package\nrpm -qa | grep nginx            # List installed packages\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-log-analysis-pipeline",
      children: "Example 1: Log Analysis Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A common DevOps task is analyzing application logs to diagnose issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -euo pipefail\n\nLOG_FILE=\"/var/log/app/error.log\"\nREPORT_FILE=\"/tmp/error_report.txt\"\n\necho \"=== Error Analysis Report ===\" > \"$REPORT_FILE\"\necho \"Generated: $(date)\" >> \"$REPORT_FILE\"\necho \"\" >> \"$REPORT_FILE\"\n\n# Top 10 most common error messages\necho \"Top 10 Error Messages:\" >> \"$REPORT_FILE\"\ngrep -E \"ERROR|FATAL\" \"$LOG_FILE\" | \\\n    sed 's/.*\\[ERROR\\] //' | \\\n    sed 's/.*\\[FATAL\\] //' | \\\n    sort | uniq -c | sort -rn | head -10 >> \"$REPORT_FILE\"\n\necho \"\" >> \"$REPORT_FILE\"\n\n# Error count by hour\necho \"Errors by Hour (last 24h):\" >> \"$REPORT_FILE\"\nawk '{print $2}' \"$LOG_FILE\" | \\\n    cut -d: -f1 | \\\n    sort | uniq -c | sort -k2 >> \"$REPORT_FILE\"\n\necho \"\" >> \"$REPORT_FILE\"\n\n# Endpoint-level error breakdown\necho \"Errors by Endpoint:\" >> \"$REPORT_FILE\"\ngrep -oP '\\[route: \\K[^\\]]+' \"$LOG_FILE\" | \\\n    sort | uniq -c | sort -rn >> \"$REPORT_FILE\"\n\ncat \"$REPORT_FILE\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-deployment-rollback-script",
      children: "Example 2: Deployment Rollback Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -euo pipefail\n\nAPP_DIR=\"/var/www/myapp\"\nBACKUP_DIR=\"/backups/myapp\"\nRELEASE=\"$1\"\n\nif [ -z \"$RELEASE\" ]; then\n    echo \"Usage: $0 <release-tag>\"\n    exit 1\nfi\n\necho \"Rolling back to release: $RELEASE\"\n\n# Verify backup exists\nif [ ! -d \"$BACKUP_DIR/$RELEASE\" ]; then\n    echo \"ERROR: Release $RELEASE not found in $BACKUP_DIR\"\n    exit 1\nfi\n\n# Create a backup of current state before rollback\nCURRENT_BACKUP=\"/backups/pre-rollback-$(date +%Y%m%d_%H%M%S)\"\ncp -r \"$APP_DIR\" \"$CURRENT_BACKUP\"\n\n# Perform rollback\nrm -rf \"$APP_DIR\"/*\ncp -r \"$BACKUP_DIR/$RELEASE\"/* \"$APP_DIR\"\n\n# Restart service\nsystemctl restart myapp\n\n# Verify health\nsleep 5\nHEALTH=$(curl -s -o /dev/null -w \"%{http_code}\" http://localhost:8080/health)\nif [ \"$HEALTH\" = \"200\" ]; then\n    echo \"Rollback to $RELEASE successful\"\nelse\n    echo \"ERROR: Health check failed after rollback\"\n    exit 1\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-resource-monitoring-script",
      children: "Example 3: Resource Monitoring Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -euo pipefail\n\nTHRESHOLD_CPU=80\nTHRESHOLD_MEM=90\nALERT_EMAIL=\"ops@example.com\"\n\ncheck_resources() {\n    local cpu_usage mem_usage disk_usage\n\n    cpu_usage=$(top -bn1 | grep \"Cpu(s)\" | awk '{print $2}' | cut -d. -f1)\n    mem_usage=$(free | grep Mem | awk '{print int($3/$2 * 100)}')\n    disk_usage=$(df -h / | awk 'NR==2 {print int($5)}')\n\n    echo \"CPU: ${cpu_usage}% | MEM: ${mem_usage}% | DISK: ${disk_usage}%\"\n\n    if [ \"$cpu_usage\" -gt \"$THRESHOLD_CPU\" ]; then\n        echo \"ALERT: CPU at ${cpu_usage}%\" | mail -s \"CPU Alert\" \"$ALERT_EMAIL\"\n    fi\n\n    if [ \"$mem_usage\" -gt \"$THRESHOLD_MEM\" ]; then\n        echo \"ALERT: Memory at ${mem_usage}%\" | mail -s \"Memory Alert\" \"$ALERT_EMAIL\"\n    fi\n\n    # Find top CPU consumers\n    echo \"\"\n    echo \"Top 5 CPU consumers:\"\n    ps aux --sort=-%cpu | head -6 | awk '{print $2, $11, $3\"%\"}'\n}\n\ncheck_resources\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-automated-backup-with-rotation",
      children: "Example 4: Automated Backup with Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -euo pipefail\n\nBACKUP_SRC=\"/var/lib/postgresql/12/main\"\nBACKUP_DST=\"/backups/postgres\"\nRETENTION_DAYS=30\nTIMESTAMP=$(date +%Y%m%d_%H%M%S)\nBACKUP_FILE=\"$BACKUP_DST/pg_backup_$TIMESTAMP.tar.gz\"\n\n# Create backup\ntar -czf \"$BACKUP_FILE\" -C \"$(dirname $BACKUP_SRC)\" \"$(basename $BACKUP_SRC)\"\n\n# Verify backup integrity\nif ! tar -tzf \"$BACKUP_FILE\" >/dev/null 2>&1; then\n    echo \"ERROR: Backup corruption detected\"\n    rm -f \"$BACKUP_FILE\"\n    exit 1\nfi\n\n# Remove backups older than retention period\nfind \"$BACKUP_DST\" -name \"pg_backup_*.tar.gz\" -mtime \"+$RETENTION_DAYS\" -delete\n\necho \"Backup completed: $BACKUP_FILE\"\necho \"Size: $(du -h \"$BACKUP_FILE\" | cut -f1)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-monitor-and-resource-tracker",
      children: "Process Monitor and Resource Tracker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux process monitoring is fundamental to DevOps operations. The following TypeScript implementation simulates process monitoring, resource tracking, and alerting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ProcessInfo {\n  pid: number;\n  name: string;\n  cpuPercent: number;\n  memoryMB: number;\n  state: 'running' | 'sleeping' | 'stopped' | 'zombie';\n  uptimeSeconds: number;\n}\n\ninterface SystemAlert {\n  type: 'cpu' | 'memory' | 'zombie' | 'oom';\n  message: string;\n  severity: 'warning' | 'critical';\n  timestamp: Date;\n}\n\nclass ProcessMonitor {\n  private processes: ProcessInfo[] = [];\n  private totalMemoryMB: number;\n\n  constructor(totalMemoryMB: number = 16384) {\n    this.totalMemoryMB = totalMemoryMB;\n  }\n\n  ingest(snapshot: ProcessInfo[]): SystemAlert[] {\n    this.processes = snapshot;\n    return this.checkAlerts();\n  }\n\n  private checkAlerts(): SystemAlert[] {\n    const alerts: SystemAlert[] = [];\n    const totalCpu = this.processes.reduce((s, p) => s + p.cpuPercent, 0);\n    const totalMem = this.processes.reduce((s, p) => s + p.memoryMB, 0);\n\n    if (totalCpu > 90) alerts.push({ type: 'cpu', message: `Total CPU at ${totalCpu.toFixed(1)}%`, severity: 'critical', timestamp: new Date() });\n    if (totalMem > this.totalMemoryMB * 0.9) alerts.push({ type: 'memory', message: `Memory at ${(totalMem / 1024).toFixed(1)}GB / ${(this.totalMemoryMB / 1024)}GB`, severity: 'warning', timestamp: new Date() });\n\n    const zombies = this.processes.filter(p => p.state === 'zombie');\n    if (zombies.length > 0) alerts.push({ type: 'zombie', message: `${zombies.length} zombie processes detected`, severity: 'warning', timestamp: new Date() });\n\n    return alerts;\n  }\n\n  findTopProcesses(n: number = 5, by: 'cpu' | 'memory' = 'cpu'): ProcessInfo[] {\n    const key = by === 'cpu' ? 'cpuPercent' : 'memoryMB';\n    return [...this.processes].sort((a, b) => b[key] - a[key]).slice(0, n);\n  }\n}\n\nconst monitor = new ProcessMonitor();\nconst alerts = monitor.ingest([\n  { pid: 1001, name: 'nginx', cpuPercent: 2.1, memoryMB: 128, state: 'running', uptimeSeconds: 86400 },\n  { pid: 1002, name: 'node', cpuPercent: 45.3, memoryMB: 512, state: 'running', uptimeSeconds: 3600 },\n  { pid: 1003, name: 'python3', cpuPercent: 55.2, memoryMB: 256, state: 'running', uptimeSeconds: 7200 },\n  { pid: 1004, name: 'defunct-app', cpuPercent: 0, memoryMB: 0, state: 'zombie', uptimeSeconds: 0 },\n]);\n\nconsole.log('Alerts:', alerts.map(a => `[${a.severity}] ${a.message}`).join('; '));\nconsole.log('Top by CPU:', monitor.findTopProcesses(2, 'cpu').map(p => `${p.name}: ${p.cpuPercent}%`).join(', '));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Programmatic process monitoring enables automated anomaly detection, resource tracking, and alerting for Linux-based production systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shell-script-validator-and-analyzer",
      children: "Shell Script Validator and Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shell scripts are the backbone of DevOps automation. The following tool validates script correctness, detects common errors, and enforces best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// shell-validator.ts\n// Analyze and validate shell scripts for best practices\n\ninterface ShellScript {\n  content: string[];\n  shebang: string | null;\n  hasStrictMode: boolean;\n  hasTraps: boolean;\n  functionCount: number;\n  lineCount: number;\n}\n\ninterface ShellIssue {\n  line: number;\n  severity: 'error' | 'warning' | 'info';\n  message: string;\n  rule: string;\n}\n\ninterface ValidationReport {\n  script: ShellScript;\n  issues: ShellIssue[];\n  score: number;\n  pass: boolean;\n}\n\nclass ShellScriptValidator {\n  private readonly strictPatterns = [\n    { pattern: /set\\s+-[a-z]*e[a-z]*/, flag: 'e', description: 'exit on error' },\n    { pattern: /set\\s+-[a-z]*u[a-z]*/, flag: 'u', description: 'undefined variable error' },\n    { pattern: /set\\s+-[a-z]*o\\s+pipefail/, flag: 'o pipefail', description: 'pipe failure detection' },\n  ];\n\n  analyze(content: string): ShellScript {\n    const lines = content.split('\\n');\n    const shebang = lines[0]?.startsWith('#!') ? lines[0] : null;\n\n    const hasStrictMode = lines.some(l => /set\\s+-[a-z]*e[a-z]*/.test(l)) &&\n      lines.some(l => /set\\s+-[a-z]*u[a-z]*/.test(l));\n\n    const hasTraps = lines.some(l => /^trap\\s+/.test(l));\n    const functionCount = lines.filter(l => /^\\s*(function\\s+)?[a-zA-Z_][a-zA-Z0-9_]*\\s*\\(\\)\\s*\\{/.test(l)).length;\n\n    return {\n      content: lines,\n      shebang,\n      hasStrictMode,\n      hasTraps,\n      functionCount,\n      lineCount: lines.length,\n    };\n  }\n\n  validate(content: string): ValidationReport {\n    const script = this.analyze(content);\n    const issues: ShellIssue[] = [];\n    const lines = script.content;\n\n    // Check for missing shebang\n    if (!script.shebang) {\n      issues.push({ line: 1, severity: 'error', message: 'Missing shebang (#!) line', rule: 'SHEBANG' });\n    }\n\n    // Check strict mode\n    if (!script.hasStrictMode) {\n      issues.push({ line: 1, severity: 'error', message: 'Missing set -euo pipefail (strict mode)', rule: 'STRICT' });\n    }\n\n    // Check for unquoted variables\n    lines.forEach((line, i) => {\n      const quotes = line.match(/\\$\\{[^}]*\\}/g) || line.match(/\\$[a-zA-Z_][a-zA-Z0-9_]*/g);\n      if (quotes && !line.trim().startsWith('#') && !line.includes('\"') && !line.includes(\"'\")) {\n        issues.push({ line: i + 1, severity: 'warning', message: 'Unquoted variable expansion', rule: 'QUOTING' });\n      }\n    });\n\n    // Check for cd without error handling\n    lines.forEach((line, i) => {\n      if (/^cd\\s+/.test(line.trim()) && !/cd\\s+.+\\|\\||cd\\s+.+\\||\\|\\|/.test(line.trim())) {\n        issues.push({ line: i + 1, severity: 'warning', message: 'cd without error handling (use || exit)', rule: 'CD_CHECK' });\n      }\n    });\n\n    // Check for using backticks instead of $()\n    lines.forEach((line, i) => {\n      if (/`[^`]+`/.test(line) && !line.trim().startsWith('#')) {\n        issues.push({ line: i + 1, severity: 'info', message: 'Use $(...) instead of backticks', rule: 'SUBSTITUTION' });\n      }\n    });\n\n    // Check for trap cleanup\n    if (!script.hasTraps) {\n      issues.push({ line: lines.length, severity: 'warning', message: 'No trap for cleanup (risks leaving temp files)', rule: 'TRAP' });\n    }\n\n    const errorCount = issues.filter(i => i.severity === 'error').length;\n    const warningCount = issues.filter(i => i.severity === 'warning').length;\n    const score = Math.max(0, 100 - errorCount * 25 - warningCount * 10);\n    const pass = errorCount === 0;\n\n    return { script, issues, score, pass };\n  }\n\n  generateReport(report: ValidationReport): string {\n    return `## Shell Script Validation\\n\\n` +\n      `**Score:** ${report.score}/100 | **Pass:** ${report.pass ? '?' : '?'}\\n` +\n      `**Lines:** ${report.script.lineCount} | **Functions:** ${report.script.functionCount}\\n\\n` +\n      `| Line | Severity | Message |\\n` +\n      `|------|----------|---------|\\n` +\n      report.issues.map(i => `| ${i.line} | ${i.severity} | ${i.message} |`).join('\\n') + '\\n';\n  }\n}\n\nconst validator = new ShellScriptValidator();\nconst badScript = `#!/bin/bash\necho Hello $name\ncd /tmp\nrm -rf data\nfor f in $(ls); do\n  echo $f\ndone`;\n\nconst result = validator.validate(badScript);\nconsole.log(validator.generateReport(result));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated shell script validation catches common errors (unquoted variables, missing strict mode, unsafe cd) before they cause production incidents, and enforces DevOps scripting standards across teams."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-process-monitor-service",
      children: "Linux Process Monitor Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following tool implements a process monitoring service that tracks resource usage, detects anomalies, and generates alerts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// process-monitor.ts\n// Monitor and manage Linux processes\n\ninterface ProcessInfo {\n  pid: number;\n  name: string;\n  cpuPercent: number;\n  memPercent: number;\n  state: 'R' | 'S' | 'D' | 'Z' | 'T';\n  uptimeSeconds: number;\n  threadCount: number;\n}\n\ninterface ProcessThresholds {\n  maxCpuPercent: number;\n  maxMemPercent: number;\n  maxThreadCount: number;\n  minUptimeForAlert: number;\n}\n\ninterface ProcessAlert {\n  process: ProcessInfo;\n  reason: string;\n  timestamp: Date;\n  severity: 'critical' | 'warning';\n}\n\nclass ProcessMonitor {\n  private alerts: ProcessAlert[] = [];\n  private history: Map<number, ProcessInfo[]> = new Map();\n\n  constructor(private thresholds: ProcessThresholds) {}\n\n  snapshot(processes: ProcessInfo[]): ProcessInfo[] {\n    for (const proc of processes) {\n      if (!this.history.has(proc.pid)) {\n        this.history.set(proc.pid, []);\n      }\n      this.history.get(proc.pid)!.push(proc);\n\n      this.checkThresholds(proc);\n    }\n    return processes;\n  }\n\n  private checkThresholds(proc: ProcessInfo): void {\n    if (proc.uptimeSeconds < this.thresholds.minUptimeForAlert) return;\n\n    if (proc.cpuPercent > this.thresholds.maxCpuPercent) {\n      this.alerts.push({\n        process: proc, reason: `CPU at ${proc.cpuPercent}% (max ${this.thresholds.maxCpuPercent}%)`,\n        timestamp: new Date(), severity: proc.cpuPercent > this.thresholds.maxCpuPercent * 1.5 ? 'critical' : 'warning',\n      });\n    }\n\n    if (proc.memPercent > this.thresholds.maxMemPercent) {\n      this.alerts.push({\n        process: proc, reason: `Memory at ${proc.memPercent}% (max ${this.thresholds.maxMemPercent}%)`,\n        timestamp: new Date(), severity: proc.memPercent > this.thresholds.maxMemPercent * 1.5 ? 'critical' : 'warning',\n      });\n    }\n\n    if (proc.threadCount > this.thresholds.maxThreadCount) {\n      this.alerts.push({\n        process: proc, reason: `Threads at ${proc.threadCount} (max ${this.thresholds.maxThreadCount})`,\n        timestamp: new Date(), severity: 'warning',\n      });\n    }\n  }\n\n  getAlerts(severity?: 'critical' | 'warning'): ProcessAlert[] {\n    return severity ? this.alerts.filter(a => a.severity === severity) : this.alerts;\n  }\n\n  getSpikingProcesses(window: number = 5): string[] {\n    const spiking: string[] = [];\n    for (const [pid, snapshots] of this.history) {\n      if (snapshots.length < 2) continue;\n      const recent = snapshots.slice(-window);\n      const avgCpu = recent.reduce((s, p) => s + p.cpuPercent, 0) / recent.length;\n      if (avgCpu > this.thresholds.maxCpuPercent * 0.8) {\n        spiking.push(`PID ${pid} (${recent[0].name}): avg ${avgCpu.toFixed(1)}% CPU`);\n      }\n    }\n    return spiking;\n  }\n}\n\nconst monitor = new ProcessMonitor({ maxCpuPercent: 80, maxMemPercent: 70, maxThreadCount: 500, minUptimeForAlert: 10 });\nconst procs: ProcessInfo[] = [\n  { pid: 1001, name: 'nginx', cpuPercent: 2.1, memPercent: 1.5, state: 'S', uptimeSeconds: 3600, threadCount: 6 },\n  { pid: 1002, name: 'node', cpuPercent: 95.3, memPercent: 45.2, state: 'R', uptimeSeconds: 120, threadCount: 12 },\n  { pid: 1003, name: 'java', cpuPercent: 30.1, memPercent: 65.8, state: 'S', uptimeSeconds: 7200, threadCount: 256 },\n];\n\nmonitor.snapshot(procs);\nconsole.log('Alerts:', monitor.getAlerts());\nconsole.log('Spiking:', monitor.getSpikingProcesses());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Systematic process monitoring detects resource anomalies early, distinguishes warning from critical thresholds, and enables proactive intervention before outages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learn the find-grep-awk pipeline."
        }), " It's the single most powerful pattern for DevOps work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Master ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set -euo pipefail"
          }), " in every script."]
        }), " It prevents silent failures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "journalctl"
          }), " over raw log files."]
        }), " systemd's journal provides better filtering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always trap cleanup."
        }), " Scripts should never leave the system in an inconsistent state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "systemctl"
          }), " commands."]
        }), " Learn ", (0,jsx_runtime.jsx)(_components.code, {
          children: "start"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stop"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restart"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disable"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reload"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "daemon-reload"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What does the `set -euo pipefail` do in a bash script?"
      }), "**A)** Enables debugging mode", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Exits on error, undefined variables, and pipe failures", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Sets environment variables", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Configures logging", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Exits on error, undefined variables, and pipe failures</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: Which command shows all listening ports and their associated processes?"
        }), "**A)** `ps aux`", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** `ss -tulpn`", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** `netstat -r`", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** `ip addr`", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** `ss -tulpn`"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 3: What does `chmod 755` mean?"
        }), "**A)** Owner can read/write/execute, everyone else can read/execute", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Everyone can read/write/execute", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Owner can read/execute, everyone else can read", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Owner can read/write, group can read, others can read", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** Owner can read/write/execute, everyone else can read/execute</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 4: What is the purpose of a systemd unit file?"
          }), "**A)** To define how a service is managed", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** To configure the kernel", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** To set environment variables", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** To schedule cron jobs", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** To define how a service is managed</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 5: How do you permanently prevent a service from starting on boot?"
            }), "**A)** `systemctl stop nginx`", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** `systemctl disable nginx`", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** `systemctl mask nginx`", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** `systemctl reset nginx`", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** `systemctl disable nginx`"]
          }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "typescript-linux-automation-with-nodejs",
            children: "TypeScript: Linux Automation with Node.js"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DevOps engineers often automate Linux tasks. TypeScript with Node.js provides a cross-platform alternative to bash for complex automation:"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-typescript",
              children: "// linux-automation.ts\n// System administration tasks automated with TypeScript\n\nimport * as fs from 'fs';\nimport * as path from 'path';\nimport { execSync } from 'child_process';\n\ninterface SystemHealth {\n  diskUsage: number;\n  memoryUsage: number;\n  cpuLoad: number;\n  runningServices: number;\n  failedServices: number;\n}\n\nclass LinuxSystemAdmin {\n  private logFile: string;\n\n  constructor(logDir = '/var/log/admin') {\n    this.logFile = path.join(logDir, `system-check-${new Date().toISOString().slice(0, 10)}.log`);\n    if (!fs.existsSync(logDir)) {\n      execSync(`mkdir -p ${logDir}`);\n    }\n  }\n\n  checkHealth(): SystemHealth {\n    const df = execSync(\"df / | tail -1 | awk '{print $5}'\").toString().trim();\n    const free = execSync(\"free | grep Mem | awk '{printf \\\"%.0f\\\", $3/$2 * 100}'\").toString().trim();\n    const load = execSync(\"uptime | awk -F'load average:' '{print $2}' | cut -d, -f1\").toString().trim();\n    const services = execSync('systemctl list-units --type=service --state=running --no-legend | wc -l').toString().trim();\n    const failed = execSync('systemctl list-units --type=service --state=failed --no-legend | wc -l').toString().trim();\n\n    return {\n      diskUsage: parseInt(df),\n      memoryUsage: parseInt(free),\n      cpuLoad: parseFloat(load),\n      runningServices: parseInt(services),\n      failedServices: parseInt(failed),\n    };\n  }\n\n  checkThresholds(health: SystemHealth): string[] {\n    const alerts: string[] = [];\n    if (health.diskUsage > 90) alerts.push(`ALERT: Disk usage at ${health.diskUsage}%`);\n    if (health.memoryUsage > 90) alerts.push(`ALERT: Memory at ${health.memoryUsage}%`);\n    if (health.failedServices > 0) alerts.push(`ALERT: ${health.failedServices} failed services`);\n    return alerts;\n  }\n\n  logResult(health: SystemHealth, alerts: string[]): void {\n    const entry = [\n      `=== System Check ${new Date().toISOString()} ===`,\n      `Disk: ${health.diskUsage}% | Memory: ${health.memoryUsage}% | Load: ${health.cpuLoad}`,\n      `Services: ${health.runningServices} running, ${health.failedServices} failed`,\n      ...alerts,\n      '',\n    ].join('\\n');\n    fs.appendFileSync(this.logFile, entry);\n    console.log(alerts.length ? alerts.join('\\n') : 'System healthy');\n  }\n\n  cleanupLogs(daysToKeep = 30): void {\n    const cutoff = Date.now() - daysToKeep * 86400000;\n    const logDir = path.dirname(this.logFile);\n    fs.readdirSync(logDir).forEach(file => {\n      const filePath = path.join(logDir, file);\n      if (fs.statSync(filePath).mtimeMs < cutoff) {\n        fs.unlinkSync(filePath);\n        console.log(`Removed old log: ${file}`);\n      }\n    });\n  }\n}\n\n// Usage\nconst admin = new LinuxSystemAdmin();\nconst health = admin.checkHealth();\nconst alerts = admin.checkThresholds(health);\nadmin.logResult(health, alerts);\nadmin.cleanupLogs();\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "mermaid-systemd-service-lifecycle",
            children: "Mermaid: Systemd Service Lifecycle"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-mermaid",
              children: "stateDiagram-v2\n    [*] --> inactive\n    inactive --> activating : systemctl start\n    activating --> active : Started successfully\n    activating --> failed : Startup failure\n    active --> deactivating : systemctl stop\n    deactivating --> inactive : Stopped\n    active --> reloading : systemctl reload\n    reloading --> active : Reloaded\n    active --> failed : Process crash\n    failed --> inactive : systemctl reset-failed\n    inactive --> enabled : systemctl enable (boot auto-start)\n    enabled --> disabled : systemctl disable\n    disabled --> enabled : systemctl enable\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "mermaid-linux-process-states",
            children: "Mermaid: Linux Process States"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-mermaid",
              children: "flowchart TD\n    A[Process Created: fork/exec] --> B{Running}\n    B -->|Preempted by scheduler| C[Runnable]\n    C -->|Scheduled| B\n    B -->|Waiting for I/O| D[Sleeping - Interruptible]\n    B -->|Waiting for disk I/O| E[Sleeping - Uninterruptible]\n    D -->|I/O complete| C\n    E -->|I/O complete| C\n    B -->|Stopped by signal| F[Stopped]\n    F -->|SIGCONT| C\n    B -->|Exit| G[Zombie - waiting for parent]\n    G -->|Parent reaps| H[Terminated]\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "deeper-explanation-linux-performance-troubleshooting",
            children: "Deeper Explanation: Linux Performance Troubleshooting"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "The USE Method (Brendan Gregg) for Linux:"
            })
          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Resource"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Utilization"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Saturation"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Errors"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "CPU"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "mpstat"
                  }), " (%user, %sys)"]
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Load average, run queue"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "dmesg"
                  }), " machine check"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Memory"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "free"
                  }), " (used/total)"]
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Swap usage, OOM"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "dmesg"
                  }), " OOM killer"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Disk"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "iostat"
                  }), " (%util)"]
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "I/O wait, queue depth"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "smartctl"
                  }), " errors"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Network"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "sar -n DEV"
                  }), " (bandwidth)"]
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Interface drops, backlog"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "ifconfig"
                  }), " errors"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Filesystem"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "df"
                  }), " (space used)"]
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "inode"
                  }), " count"]
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "dmesg"
                  }), " FS errors"]
                })]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quick triage flow:"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "uptime"
              }), " ? load averages (if > CPU cores, saturation)"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "dmesg -T | tail"
              }), " ? kernel errors (OOM, disk I/O errors)"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "vmstat 1"
              }), " ? run queue, swapping, context switches"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "mpstat -P ALL 1"
              }), " ? per-CPU utilization"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "pidstat 1"
              }), " ? top processes by CPU"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "iostat -xz 1"
              }), " ? disk I/O and await times"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "sar -n DEV 1"
              }), " ? network throughput and errors"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "// git\n// cicd-infrastructure-automation implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'git', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "summary",
            children: "Summary"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The Linux filesystem hierarchy (FHS) standardizes where configuration, log, and binary files reside."
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Core command-line tools (", (0,jsx_runtime.jsx)(_components.code, {
                children: "grep"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "awk"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sed"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "find"
              }), ") form the foundation of DevOps automation."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "File permissions control access at owner, group, and other levels using read/write/execute flags."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pipes and redirection chain commands into powerful data processing pipelines."
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Shell scripting with strict mode (", (0,jsx_runtime.jsx)(_components.code, {
                children: "set -euo pipefail"
              }), ") creates reliable automation scripts."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "systemd manages services, processes, and logging across modern Linux distributions."
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Network tools (", (0,jsx_runtime.jsx)(_components.code, {
                children: "ss"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "curl"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ping"
              }), ") enable connectivity and service health checks."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Package managers like APT and YUM handle software installation and updates."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Log analysis pipelines combine multiple text processing tools for operational insights."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "exercises",
            children: "Exercises"
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "review-questions",
            children: "Review Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What is the FHS standard and why is it important?"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                children: "stdout"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "stderr"
              }), " redirection."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "How do you make a bash script executable from the command line?"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                children: "systemctl enable"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "systemctl start"
              }), "?"]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "How would you find the 10 largest files in a directory?"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "application-problems",
            children: "Application Problems"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Write a bash script that monitors disk usage and sends an alert when usage exceeds 90%."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Create a systemd unit file for a Node.js application that depends on PostgreSQL."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Build a log analysis pipeline that extracts all 5xx errors from an access log."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Write a deployment script that backs up the current version, deploys new code, and supports rollback."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implement the TypeScript system admin tool above. Add a webhook notification that sends Alerts to a Slack channel when disk usage exceeds 90% or memory exceeds 85%."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Using the USE method, diagnose a system with high load averages but low CPU utilization. What commands would you run to identify the bottleneck? Write a script that automates this diagnosis and produces a report."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "challenge-problem",
            children: "Challenge Problem"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Write a complete bash framework for automated deployment that includes: pre-deployment checks (disk space, service health), backup creation, zero-downtime deployment (blue-green or canary), health verification after deploy, and automatic rollback on failure. The script should log everything to syslog and send notifications via both email and webhook."
            }), "\n"]
          }), "\n"]
        })]
      })]
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