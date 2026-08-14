"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2074],{

/***/ 96228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_04_git_linux_cli_09_cron_automation_md_61f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-04-git-linux-cli-09-cron-automation-md-61f.json
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_09_cron_automation_md_61f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/09-cron-automation","title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/09-cron-automation.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/09-cron-automation","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/09-cron-automation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":66,"frontMatter":{"id":"09-cron-automation","slug":"/ai-engineering-placement/04-git-linux-cli/09-cron-automation","title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","sidebar_label":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","sidebar_position":66},"sidebar":"placementSidebar","previous":{"title":"Process Management — Monitoring, Signals, Resource Control","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/08-process-management"},"next":{"title":"Visual Notes — Git & Linux CLI","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/04-git-linux-cli/09-cron-automation.md


const frontMatter = {
	id: '09-cron-automation',
	slug: '/ai-engineering-placement/04-git-linux-cli/09-cron-automation',
	title: 'Cron Automation — Scheduling, Systemd Timers, Backups, Ansible',
	sidebar_label: 'Cron Automation — Scheduling, Systemd Timers, Backups, Ansible',
	sidebar_position: 66
};
const contentTitle = 'Cron Automation — Scheduling, Systemd Timers, Backups, Ansible';

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
  "value": "Cron Syntax",
  "id": "cron-syntax",
  "level": 3
}, {
  "value": "Crontab Management",
  "id": "crontab-management",
  "level": 3
}, {
  "value": "Systemd Timers (Modern Cron)",
  "id": "systemd-timers-modern-cron",
  "level": 3
}, {
  "value": "At and Batch (One-Time Tasks)",
  "id": "at-and-batch-one-time-tasks",
  "level": 3
}, {
  "value": "Logrotate",
  "id": "logrotate",
  "level": 3
}, {
  "value": "Backup Automation",
  "id": "backup-automation",
  "level": 3
}, {
  "value": "Cron Workflow Diagram",
  "id": "cron-workflow-diagram",
  "level": 3
}, {
  "value": "Ansible Basics",
  "id": "ansible-basics",
  "level": 3
}, {
  "value": "Automation for ML Workflows",
  "id": "automation-for-ml-workflows",
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
        id: "cron-automation--scheduling-systemd-timers-backups-ansible",
        children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
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
            children: "Write cron expressions and manage crontab entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create systemd timers as modern alternatives to cron"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use at and batch for one-time scheduled tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure logrotate for log management automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design backup automation strategies for ML workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand Ansible basics for infrastructure automation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automation is the backbone of reliable system administration. Cron jobs schedule repetitive tasks like backups, model retraining, and log rotation. AI engineers use these tools to automate data pipelines, model training schedules, and infrastructure management."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Linux command line skills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of shell scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with systemd basics"
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
      id: "cron-syntax",
      children: "Cron Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cron uses a five-field expression to define schedule timing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "* * * * * command-to-execute\n┬ ┬ ┬ ┬ ┬\n│ │ │ │ └──── Day of week (0-7, 0/7 = Sunday)\n│ │ │ └────── Month (1-12)\n│ │ └──────── Day of month (1-31)\n│ └────────── Hour (0-23)\n└──────────── Minute (0-59)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Special characters"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "* * * * *"
            }), " = every minute"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1,15 * * * *"
            }), " = minute 1 and 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "9-17 * * * *"
            }), " = 9 AM to 5 PM"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*/5 * * * *"
            }), " = every 5 minutes"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Special keywords"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@reboot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run at system startup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@yearly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 0 1 1 *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run once a year"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@monthly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 0 1 * *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run once a month"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@weekly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 0 * * 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run once a week"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@daily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 0 * * *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run once a day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@hourly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 * * * *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run once an hour"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crontab-management",
      children: "Crontab Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit current user's crontab\ncrontab -e\n\n# List cron jobs\ncrontab -l\n\n# Remove all cron jobs\ncrontab -r\n\n# Edit another user's crontab (root)\ncrontab -u mluser -e\n\n# List another user's cron jobs\ncrontab -u mluser -l\n\n# Install from file\ncrontab /path/to/cronfile\n\n# Backup crontab\ncrontab -l > crontab-backup.txt\n\n# Crontab file format:\n# Each line is: schedule command\n# Empty lines and lines starting with # are ignored\n# Environment variables can be set:\n# MAILTO=user@example.com\n# SHELL=/bin/bash\n# PATH=/usr/local/bin:/usr/bin:/bin\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron examples"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Run every day at 2:30 AM\n30 2 * * * /usr/local/bin/backup.sh\n\n# Run every weekday (Mon-Fri) at 9 AM\n0 9 * * 1-5 /usr/local/bin/daily-report.sh\n\n# Run every 15 minutes\n*/15 * * * * /usr/local/bin/health-check.sh\n\n# Run on the 1st and 15th of every month at midnight\n0 0 1,15 * * /usr/local/bin/monthly-cleanup.sh\n\n# Run every Sunday at 3 AM\n0 3 * * 0 /usr/local/bin/weekly-maintenance.sh\n\n# Run at 8 AM and 6 PM every day\n0 8,18 * * * /usr/local/bin/sync-data.sh\n\n# Run at startup\n@reboot /usr/local/bin/start-ml-service.sh\n\n# Run hourly model validation\n@hourly /usr/local/bin/validate-metrics.sh\n\n# Run every 30 seconds (cron doesn't support seconds)\n# Use sleep in script:\n* * * * * /usr/local/bin/run-every-30s.sh\n# run-every-30s.sh contains:\n#   #!/bin/bash\n#   /usr/local/bin/task.sh\n#   sleep 30\n#   /usr/local/bin/task.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systemd-timers-modern-cron",
      children: "Systemd Timers (Modern Cron)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systemd timers provide more features than cron: dependency management, persistent timers, randomized delays, and logging integration."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple timer example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/systemd/system/ml-daily-backup.service\n[Unit]\nDescription=Daily ML Model Backup\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nType=oneshot\nUser=mluser\nGroup=mlgroup\nExecStart=/usr/local/bin/backup-models.sh\nEnvironment=BACKUP_DIR=/data/backups\nEnvironment=RETENTION_DAYS=30\n\n# Resource limits\nCPUQuota=50%\nMemoryMax=4G\n\n[Install]\nWantedBy=multi-user.target\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/systemd/system/ml-daily-backup.timer\n[Unit]\nDescription=Run ML backup daily at 3 AM\nRequires=ml-daily-backup.service\n\n[Timer]\n# Run daily at 3:00 AM\nOnCalendar=daily\nOnCalendar=*-*-* 03:00:00\n\n# Alternative schedules:\n# OnCalendar=Mon..Fri 09:00:00  (weekdays at 9 AM)\n# OnCalendar=*-*-01 00:00:00   (1st of month)\n# OnCalendar=*:0/15:00        (every 15 minutes)\n\n# Additional options\nPersistent=true         # Run immediately if missed\nRandomizedDelaySec=300  # Random delay up to 5 min\nFixedRandomDelay=true   # Same random delay per host\nAccuracySec=1sec        # Scheduling accuracy\n\n[Install]\nWantedBy=timers.target\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timer management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable and start timer\nsudo systemctl enable ml-daily-backup.timer\nsudo systemctl start ml-daily-backup.timer\n\n# List all timers\nsystemctl list-timers --all\n\n# Show next run\nsystemctl list-timers ml-daily-backup.timer\n\n# View timer status\nsystemctl status ml-daily-backup.timer\n\n# View service logs\njournalctl -u ml-daily-backup.service\n\n# Trigger service manually\nsudo systemctl start ml-daily-backup.service\n\n# Disable timer\nsudo systemctl disable ml-daily-backup.timer\n\n# Monitor timer events in real-time\njournalctl -f -u ml-daily-backup.timer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timer schedules (OnCalendar formats)"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "daily"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00:00:00 every day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hourly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every hour at :00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weekly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monday 00:00:00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "monthly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1st of month 00:00:00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Mon..Fri *-*-* 09:00:00"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekdays at 9 AM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*-*-01,15 00:00:00"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1st and 15th at midnight"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*:0/15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every 15 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*-*-* 06..22:00/2:00"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every 2 hours from 6-22"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "at-and-batch-one-time-tasks",
      children: "At and Batch (One-Time Tasks)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Schedule command at specific time\necho \"python /opt/train.py --quick-test\" | at now + 1 hour\necho \"systemctl stop ml-training.service\" | at 23:00 today\n\n# Interactive mode\nat 15:00\n> python validate.py\n> mail -s \"Validation done\" user@example.com < result.txt\n> Ctrl+D\n\n# Common time formats\nat now + 5 minutes\nat now + 2 hours\nat noon tomorrow\nat 3:00 PM next week\nat 09:00 next Monday\nat 2024-12-31 23:59\n\n# List pending at jobs\natq\n\n# Remove specific job\natrm 5   # Remove job number 5\n\n# Batch (runs when load average < 1.5)\nbatch\n> python heavy-training.py\n> Ctrl+D\n\n# View at daemon status\nsystemctl status atd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logrotate",
      children: "Logrotate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logrotate automates log rotation, compression, and deletion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/logrotate.conf\n# Global defaults\nweekly\nrotate 4\ncreate\ncompress\ndelaycompress\nmissingok\nnotifempty\nsu root root\n\n# Include application-specific configs\ninclude /etc/logrotate.d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/logrotate.d/ml-training\n/var/log/ml/training.log {\n    # Rotate daily, keep 30 days\n    daily\n    rotate 30\n    compress\n    delaycompress          # Keep 1 uncompressed for viewing\n    missingok\n    notifempty\n    copytruncate           # Works with running processes\n    dateext                # Add date to rotated file\n    dateformat -%Y%m%d\n    maxsize 500M           # Also rotate if > 500MB\n    minsize 100M           # Only rotate if > 100MB\n\n    # Run post-rotation command\n    postrotate\n        systemctl reload ml-training.service > /dev/null 2>&1 || true\n    endscript\n}\n\n# GPU cluster logs\n/var/log/ml/gpu-monitor.log {\n    size 100M              # Rotate at 100MB\n    rotate 10\n    compress\n    copytruncate\n    missingok\n    notifempty\n}\n\n# Multiple log files\n/var/log/ml/*.log {\n    weekly\n    rotate 12              # 3 months of weekly backups\n    compress\n    missingok\n    sharedscripts          # Run postrotate once for all\n    postrotate\n        journalctl --vacuum-size=500M\n    endscript\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logrotate commands"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test configuration\nsudo logrotate -d /etc/logrotate.conf\n\n# Force rotation\nsudo logrotate -f /etc/logrotate.d/ml-training\n\n# Run with verbose\nsudo logrotate -v /etc/logrotate.conf\n\n# Check last rotation time\nls -la /var/log/ml/*.gz\n\n# View logrotate status\ncat /var/lib/logrotate/status\n\n# Dry run (no changes)\nsudo logrotate -d /etc/logrotate.d/ml-training\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backup-automation",
      children: "Backup Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incremental backup with rsync"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# /usr/local/bin/backup-models.sh\n\nBACKUP_DIR=\"/data/backups\"\nSOURCE_DIR=\"/data/models\"\nDATE=$(date +%Y%m%d)\nLATEST_LINK=\"$BACKUP_DIR/latest\"\n\n# Create daily backup with hard links to unchanged files\nrsync -az --delete \\\n    --link-dest=\"$LATEST_LINK\" \\\n    \"$SOURCE_DIR/\" \\\n    \"$BACKUP_DIR/backup-$DATE/\"\n\n# Update latest symlink\nrm -f \"$LATEST_LINK\"\nln -s \"backup-$DATE\" \"$LATEST_LINK\"\n\n# Remove backups older than 30 days\nfind \"$BACKUP_DIR\" -maxdepth 1 -type d -name \"backup-*\" -mtime +30 -exec rm -rf {} \\;\n\n# Log success\nlogger \"Backup completed: $DATE, size: $(du -sh $BACKUP_DIR/backup-$DATE | cut -f1)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Database backup automation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# /usr/local/bin/backup-db.sh\n\nDB_NAME=\"ml_experiments\"\nBACKUP_DIR=\"/data/db-backups\"\nRETENTION_DAYS=30\n\n# Create backup\npg_dump -U mluser -d \"$DB_NAME\" \\\n    --format=custom \\\n    --compress=9 \\\n    --file=\"$BACKUP_DIR/${DB_NAME}_$(date +%Y%m%d_%H%M%S).dump\"\n\n# Encrypt backup\ngpg --encrypt --recipient backup-key \\\n    \"$BACKUP_DIR\"/*.dump\n\n# Upload to S3\naws s3 sync \"$BACKUP_DIR/\" \"s3://ml-backups/db/\"\n\n# Cleanup old backups\nfind \"$BACKUP_DIR\" -name \"*.dump\" -mtime +\"$RETENTION_DAYS\" -delete\n\n# Send notification\ncurl -X POST -H \"Content-Type: application/json\" \\\n    -d '{\"text\": \"Database backup completed successfully\"}' \\\n    \"$SLACK_WEBHOOK_URL\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full ML workflow backup"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Crontab for ML infrastructure\n# /etc/cron.d/ml-backups\n\n# Hourly: backup experiment metadata\n0 * * * * mluser /usr/local/bin/backup-meta.sh\n\n# Daily at 2 AM: backup model checkpoints\n0 2 * * * mluser /usr/local/bin/backup-models.sh\n\n# Daily at 3 AM: backup databases\n0 3 * * * mluser /usr/local/bin/backup-db.sh\n\n# Weekly on Sunday at 4 AM: full system backup\n0 4 * * 0 root /usr/local/bin/full-system-backup.sh\n\n# Monthly on 1st at 5 AM: archive old data\n0 5 1 * * mluser /usr/local/bin/archive-monthly.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cron-workflow-diagram",
      children: "Cron Workflow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Scheduling\n        A[Cron/Crontab] --> B[Systemd Timers]\n        C[At/Batch] --> B\n    end\n\n    subgraph Execution\n        B --> D{Trigger Check}\n        D -->|Time Match| E[Run Command]\n        D -->|No Match| F[Wait]\n        E --> G[Shell Script]\n        G --> H[Log Output]\n    end\n\n    subgraph Common Tasks\n        H --> I[Backup Automation]\n        H --> J[Log Rotation]\n        H --> K[Data Pipeline]\n        H --> L[Model Retraining]\n        H --> M[Health Checks]\n        H --> N[Report Generation]\n    end\n\n    subgraph Monitoring\n        I & J & K & L & M & N --> O[Log Files]\n        O --> P[Logrotate]\n        P --> Q[Compressed Archive]\n        O --> R[Journald/Syslog]\n        R --> S[Alert if Failed]\n    end\n\n    style A fill:#4a90d9,color:#fff\n    style E fill:#50b86c,color:#fff\n    style Q fill:#f5a623,color:#fff\n    style S fill:#e85d75,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-basics",
      children: "Ansible Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ansible automates infrastructure provisioning and configuration management."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Ansible\npip install ansible\n\n# Check version\nansible --version\n\n# Inventory file (hosts.ini)\ncat > hosts.ini << EOF\n[ml-servers]\ngpu-01 ansible_host=10.0.1.1 ansible_user=ubuntu\ngpu-02 ansible_host=10.0.1.2 ansible_user=ubuntu\ngpu-03 ansible_host=10.0.1.3 ansible_user=ubuntu\n\n[ml-servers:vars]\nansible_python_interpreter=/usr/bin/python3\nansible_ssh_private_key_file=~/.ssh/ml-key.pem\nEOF\n\n# Run ad-hoc command on all servers\nansible ml-servers -i hosts.ini -m ping\nansible ml-servers -i hosts.ini -m shell -a \"nvidia-smi --query-gpu=name --format=csv,noheader\"\n\n# Copy file to all servers\nansible ml-servers -i hosts.ini -m copy -a \"src=train.py dest=/opt/ml/train.py mode=0755\"\n\n# Install packages\nansible ml-servers -i hosts.ini -m apt -a \"name=python3-pip state=present\" --become\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ansible playbook example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\n# playbooks/ml-server-setup.yml\n- name: Setup ML Training Server\n  hosts: ml-servers\n  become: yes\n  vars:\n    cuda_version: \"12.1\"\n    python_version: \"3.10\"\n    ml_user: \"mluser\"\n\n  tasks:\n    - name: Create ML user\n      user:\n        name: \"{{ ml_user }}\"\n        state: present\n        groups: sudo,docker\n        shell: /bin/bash\n\n    - name: Install system packages\n      apt:\n        name:\n          - python3-pip\n          - python3-venv\n          - docker.io\n          - nvidia-docker2\n          - htop\n          - rsync\n          - postgresql-client\n        state: present\n        update_cache: yes\n\n    - name: Install Python packages\n      pip:\n        name:\n          - torch\n          - transformers\n          - datasets\n          - scikit-learn\n          - mlflow\n        state: present\n\n    - name: Create data directories\n      file:\n        path: \"{{ item }}\"\n        state: directory\n        owner: \"{{ ml_user }}\"\n        group: \"{{ ml_user }}\"\n        mode: 0755\n      loop:\n        - /data/models\n        - /data/datasets\n        - /data/backups\n\n    - name: Deploy cron job for daily backup\n      cron:\n        name: \"Daily model backup\"\n        minute: \"0\"\n        hour: \"2\"\n        job: \"/usr/local/bin/backup-models.sh\"\n        user: \"{{ ml_user }}\"\n\n    - name: Set up logrotate for ML logs\n      copy:\n        dest: /etc/logrotate.d/ml-training\n        content: |\n          /var/log/ml/*.log {\n              daily\n              rotate 30\n              compress\n              copytruncate\n              missingok\n              notifempty\n          }\n\n    - name: Restart services\n      systemd:\n        name: \"{{ item }}\"\n        state: restarted\n        daemon_reload: yes\n      loop:\n        - cron\n        - docker\n\n    - name: Verify GPU access\n      shell: nvidia-smi\n      register: gpu_check\n      changed_when: false\n\n    - name: Display GPU info\n      debug:\n        msg: \"{{ gpu_check.stdout_lines }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Running playbooks"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run playbook\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml\n\n# Check mode (dry run)\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --check\n\n# Limit to specific hosts\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --limit gpu-01\n\n# Run with specific user\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml -u ubuntu\n\n# Ask for sudo password\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml -K\n\n# Verbose output\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml -vvv\n\n# Run specific tags\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --tags backup\n\n# List hosts that would be affected\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --list-hosts\n\n# List all tasks\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --list-tasks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automation-for-ml-workflows",
      children: "Automation for ML Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated model retraining pipeline"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# /usr/local/bin/weekly-retrain.sh\n\nMODEL_DIR=\"/data/models\"\nDATA_DIR=\"/data/datasets/current\"\nMLFLOW_URI=\"http://mlflow.internal:5000\"\nDATE=$(date +%Y%m%d)\n\necho \"[$(date)] Starting weekly model retraining\"\n\n# 1. Check for new data\nif [ ! -f \"$DATA_DIR/new_data_available.flag\" ]; then\n    echo \"No new data available. Skipping.\"\n    exit 0\nfi\n\n# 2. Run training script\npython3 /opt/ml/train.py \\\n    --data-dir \"$DATA_DIR\" \\\n    --output-dir \"$MODEL_DIR/$DATE\" \\\n    --mlflow-uri \"$MLFLOW_URI\" \\\n    --experiment \"weekly-retrain\"\n\n# 3. Evaluate and compare with production\npython3 /opt/ml/evaluate.py \\\n    --new-model \"$MODEL_DIR/$DATE\" \\\n    --production-model \"$MODEL_DIR/production\"\n\n# 4. If new model is better, promote\nif [ -f \"$MODEL_DIR/$DATE/champion.flag\" ]; then\n    ln -sfn \"$DATE\" \"$MODEL_DIR/production\"\n    echo \"New champion model promoted: $DATE\"\nfi\n\n# 5. Cleanup old models (keep last 20)\nls -t \"$MODEL_DIR\" | grep -E \"^[0-9]{8}$\" | tail -n +21 | \\\n    xargs -I {} rm -rf \"$MODEL_DIR/{}\"\n\necho \"[$(date)] Weekly retraining complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring cron jobs"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# /usr/local/bin/cron-monitor.sh\n# Run this as a cron job to alert on failures\n\n# Check if critical cron jobs ran recently\nCRITICAL_JOBS=(\"backup\" \"retrain\" \"cleanup\")\nALERT_EMAIL=\"team@example.com\"\n\nfor job in \"${CRITICAL_JOBS[@]}\"; do\n    # Check journalctl for the job's last run\n    LAST_RUN=$(journalctl -u \"ml-$job.service\" --since \"24 hours ago\" | grep \"Started\" | tail -1)\n\n    if [ -z \"$LAST_RUN\" ]; then\n        echo \"Job ml-$job did not run in last 24 hours\" | \\\n            mail -s \"CRON ALERT: $job not running\" \"$ALERT_EMAIL\"\n    fi\ndone\n\n# Check disk space\nDISK_USAGE=$(df /data | tail -1 | awk '{print $5}' | sed 's/%//')\nif [ \"$DISK_USAGE\" -gt 85 ]; then\n    echo \"Disk usage at ${DISK_USAGE}% on /data\" | \\\n        mail -s \"DISK ALERT: ${DISK_USAGE}%\" \"$ALERT_EMAIL\"\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Schedulers\n        A[Cron] --> B[Systemd Timer]\n        C[At/Batch] --> B\n    end\n\n    subgraph Automation Tasks\n        B --> D[Backups]\n        B --> E[Model Retraining]\n        B --> F[Data Pipelines]\n        B --> G[Health Checks]\n        B --> H[Report Generation]\n        B --> I[Log Rotation]\n    end\n\n    subgraph Tools\n        D --> J[rsync]\n        D --> K[pg_dump]\n        E --> L[Python Scripts]\n        I --> M[logrotate]\n    end\n\n    subgraph Infrastructure\n        J & K & L & M --> N[Ansible]\n        N --> O[Configuration]\n        N --> P[Deployment]\n        N --> Q[Inventory]\n    end\n\n    style A fill:#4a90d9,color:#fff\n    style B fill:#50b86c,color:#fff\n    style N fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of cron like a school bell system. The cron expression is the schedule: \"every weekday at 8 AM\" (0 8 * * 1-5). The bell (system timer) rings at the correct time, the teacher (script) runs the lesson (backup/retraining). Systemd timers are like programmable digital bells — they can ring with random delay to prevent stampedes (RandomizedDelaySec), ring immediately if the school was closed and reopens (Persistent=true). Logrotate is like rotating notebooks — keep last 30 days, compress old ones, throw away expired. Ansible is like the principal's memo system — send one instruction to all classrooms and they all execute it consistently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"Cron job management and monitoring for ML infrastructure\"\"\"\n\nimport os\nimport sys\nimport subprocess\nimport json\nfrom datetime import datetime, timedelta\nfrom typing import Dict, List, Optional\n\nclass CronManager:\n    \"\"\"Manage and monitor cron jobs for ML workflows\"\"\"\n\n    def __init__(self, user: str = \"mluser\"):\n        self.user = user\n\n    def list_jobs(self) -> List[Dict]:\n        \"\"\"List all cron jobs for the user\"\"\"\n        try:\n            result = subprocess.run(\n                [\"crontab\", \"-u\", self.user, \"-l\"],\n                capture_output=True, text=True, timeout=10\n            )\n            if result.returncode != 0:\n                return []\n\n            jobs = []\n            for line in result.stdout.strip().split(\"\\n\"):\n                line = line.strip()\n                if line and not line.startswith(\"#\"):\n                    parts = line.split(None, 5)\n                    if len(parts) >= 6:\n                        jobs.append({\n                            \"schedule\": \" \".join(parts[:5]),\n                            \"command\": parts[5],\n                            \"raw\": line,\n                        })\n            return jobs\n        except subprocess.TimeoutExpired:\n            return []\n\n    def add_job(self, schedule: str, command: str, comment: str = \"\") -> bool:\n        \"\"\"Add a new cron job\"\"\"\n        try:\n            # Get existing jobs\n            result = subprocess.run(\n                [\"crontab\", \"-u\", self.user, \"-l\"],\n                capture_output=True, text=True, timeout=10\n            )\n            existing = result.stdout if result.returncode == 0 else \"\"\n\n            # Create new entry\n            new_entry = \"\"\n            if comment:\n                new_entry += f\"# {comment}\\n\"\n            new_entry += f\"{schedule} {command}\\n\"\n\n            full_crontab = existing + new_entry\n\n            # Install new crontab\n            proc = subprocess.Popen(\n                [\"crontab\", \"-u\", self.user, \"-\"],\n                stdin=subprocess.PIPE, text=True\n            )\n            proc.communicate(input=full_crontab, timeout=10)\n            return proc.returncode == 0\n        except subprocess.TimeoutExpired:\n            return False\n\n    def remove_job(self, command_pattern: str) -> bool:\n        \"\"\"Remove cron jobs matching pattern\"\"\"\n        try:\n            result = subprocess.run(\n                [\"crontab\", \"-u\", self.user, \"-l\"],\n                capture_output=True, text=True, timeout=10\n            )\n            if result.returncode != 0:\n                return False\n\n            lines = result.stdout.split(\"\\n\")\n            filtered = [l for l in lines if command_pattern not in l]\n\n            proc = subprocess.Popen(\n                [\"crontab\", \"-u\", self.user, \"-\"],\n                stdin=subprocess.PIPE, text=True\n            )\n            proc.communicate(input=\"\\n\".join(filtered), timeout=10)\n            return proc.returncode == 0\n        except subprocess.TimeoutExpired:\n            return False\n\n    def last_run(self, job_pattern: str) -> Optional[datetime]:\n        \"\"\"Check when a cron job last ran via journalctl\"\"\"\n        try:\n            result = subprocess.run(\n                [\"journalctl\", \"-u\", f\"cron.service\",\n                 \"--since\", \"7 days ago\", \"--no-pager\"],\n                capture_output=True, text=True, timeout=30\n            )\n            # Look for the command in cron logs\n            for line in result.stdout.split(\"\\n\"):\n                if job_pattern in line and \"CMD\" in line:\n                    timestamp_str = line.split()[0] + \" \" + line.split()[1]\n                    timestamp = datetime.strptime(\n                        timestamp_str.split(\".\")[0],\n                        \"%b %d %H:%M:%S\"\n                    )\n                    # Replace year with current\n                    now = datetime.now()\n                    timestamp = timestamp.replace(year=now.year)\n                    return timestamp\n            return None\n        except (subprocess.TimeoutExpired, ValueError):\n            return None\n\nclass BackupOrchestrator:\n    \"\"\"Coordinate backup strategy for ML artifacts\"\"\"\n\n    def __init__(self, config_path: str = \"/etc/ml-backup/config.json\"):\n        self.config = self._load_config(config_path)\n\n    def _load_config(self, path: str) -> Dict:\n        default_config = {\n            \"backup_root\": \"/data/backups\",\n            \"sources\": [\n                \"/data/models\",\n                \"/data/experiments\",\n                \"/opt/ml/configs\",\n            ],\n            \"databases\": [\"ml_experiments\", \"metadata\"],\n            \"retention_days\": 30,\n            \"s3_bucket\": \"s3://ml-backups/\",\n            \"slack_webhook\": \"\",\n        }\n        if os.path.exists(path):\n            with open(path) as f:\n                return {**default_config, **json.load(f)}\n        return default_config\n\n    def backup_directory(self, source: str, dest: str) -> Dict:\n        \"\"\"Backup a directory using rsync\"\"\"\n        result = subprocess.run(\n            [\"rsync\", \"-az\", \"--delete\",\n             source, dest],\n            capture_output=True, text=True, timeout=3600\n        )\n        return {\n            \"source\": source,\n            \"dest\": dest,\n            \"success\": result.returncode == 0,\n            \"output\": result.stdout[:500],\n        }\n\n    def backup_database(self, db_name: str, dest_dir: str) -> Dict:\n        \"\"\"Backup a PostgreSQL database\"\"\"\n        timestamp = datetime.now().strftime(\"%Y%m%d_%H%M%S\")\n        filename = f\"{dest_dir}/{db_name}_{timestamp}.dump\"\n\n        result = subprocess.run(\n            [\"pg_dump\", \"-U\", \"mluser\", \"-d\", db_name,\n             \"--format=custom\", \"--compress=9\",\n             \"--file\", filename],\n            capture_output=True, text=True, timeout=3600\n        )\n        return {\n            \"database\": db_name,\n            \"file\": filename,\n            \"success\": result.returncode == 0,\n        }\n\n    def run_full_backup(self) -> Dict:\n        \"\"\"Execute complete backup strategy\"\"\"\n        results = {}\n        date_str = datetime.now().strftime(\"%Y%m%d\")\n        backup_dir = f\"{self.config['backup_root']}/backup-{date_str}\"\n\n        # Ensure backup directory exists\n        os.makedirs(backup_dir, exist_ok=True)\n\n        # Backup directories\n        for source in self.config[\"sources\"]:\n            dest = f\"{backup_dir}/{os.path.basename(source)}\"\n            results[f\"dir_{os.path.basename(source)}\"] = self.backup_directory(source, dest)\n\n        # Backup databases\n        for db in self.config[\"databases\"]:\n            results[f\"db_{db}\"] = self.backup_database(db, backup_dir)\n\n        # Cleanup old backups\n        cutoff = datetime.now() - timedelta(days=self.config[\"retention_days\"])\n        for item in os.listdir(self.config[\"backup_root\"]):\n            item_path = os.path.join(self.config[\"backup_root\"], item)\n            if os.path.isdir(item_path):\n                mtime = datetime.fromtimestamp(os.path.getmtime(item_path))\n                if mtime < cutoff:\n                    subprocess.run([\"rm\", \"-rf\", item_path])\n\n        return results\n\nif __name__ == \"__main__\":\n    # List existing cron jobs\n    manager = CronManager()\n    jobs = manager.list_jobs()\n    print(f\"Current cron jobs ({len(jobs)}):\")\n    for job in jobs:\n        print(f\"  {job['schedule']} -> {job['command'][:60]}...\")\n\n    # Add a training job\n    manager.add_job(\n        schedule=\"0 2 * * 1\",\n        command=\"/usr/local/bin/retrain-model.sh\",\n        comment=\"Weekly model retraining every Monday at 2 AM\"\n    )\n\n    # Run backup\n    backup = BackupOrchestrator()\n    results = backup.run_full_backup()\n    print(f\"\\nBackup results:\")\n    for key, value in results.items():\n        status = \"OK\" if value.get(\"success\") else \"FAIL\"\n        print(f\"  {key}: {status}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Current cron jobs (3):\n  0 2 * * * /usr/local/bin/backup-models.sh\n  0 3 * * * /usr/local/bin/backup-db.sh\n  */5 * * * * /usr/local/bin/health-check.sh\n\nBackup results:\n  dir_data/models: OK\n  dir_data/experiments: OK\n  dir_opt/ml/configs: OK\n  db_ml_experiments: OK\n  db_metadata: OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cron automation is the backbone of reliable system administration, scheduling repetitive tasks such as backups, log rotation, model retraining, and health checks. Cron uses a five-field expression (minute, hour, day of month, month, day of week) managed through crontab, while systemd timers provide a more powerful modern alternative with Persistent=true for missed runs, RandomizedDelaySec to prevent thundering herds, dependency ordering, and journald logging. The at command schedules one-time tasks and batch defers them until system load drops. Logrotate automates rotation, compression, and deletion of log files, and backup automation combines rsync incremental snapshots, pg_dump database dumps, encryption, and offsite S3 sync. Ansible extends automation to infrastructure with agentless, idempotent YAML playbooks pushed over SSH. AI engineers use these tools to retrain models weekly, back up checkpoints hourly, and provision identical GPU servers. The trade-offs are operational: cron runs with a minimal PATH, jobs can overlap without locking, and untested backups are worthless."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cron syntax: minute hour day-of-month month day-of-week; */5 * * * * runs every 5 minutes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systemd timers: OnCalendar, Persistent=true, RandomizedDelaySec, and journalctl logging."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "at schedules one-time tasks; batch runs them when load average is low."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logrotate: copytruncate rotates logs still open by running processes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rsync --link-dest creates incremental hard-link backups at near-zero extra cost."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible is agentless, push-based, and idempotent via YAML playbooks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cron syntax"
        }), ": Minute Hour Day-of-month Month Day-of-week — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "* * * * *"
        }), " runs every minute, and cron has no seconds field; use sleep inside a script for sub-minute runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full paths"
        }), ": Cron runs with a minimal PATH, so always use absolute paths and set SHELL and MAILTO at the top of the crontab."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Systemd timers"
        }), ": Use OnCalendar=daily with Persistent=true so missed jobs run right after downtime, and RandomizedDelaySec=300 to avoid thundering herd."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overlap protection"
        }), ": Wrap jobs with /usr/bin/flock -n /tmp/job.lock to prevent a second run from starting before the first finishes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logrotate"
        }), ": Use copytruncate for logs held open by training processes, combine daily with maxsize 500M, keep 30 rotated files, and compress."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backups"
        }), ": Follow the 3-2-1 rule — rsync --link-dest incremental backups, pg_dump custom-format dumps, gpg encryption, offsite S3 sync, and monthly restore drills."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ansible"
        }), ": For N identical ML servers, use an idempotent playbook with inventory groups, --check for dry runs, and --limit for staged rollout."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Explain the cron syntax with examples for different scheduling patterns.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cron uses five fields: minute (0-59), hour (0-23), day of month (1-31), month (1-12), and day of week (0-7, 0/7=Sunday). ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), " means every. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*/15"
          }), " means every 15 units. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1,15"
          }), " means at 1 and 15. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "9-17"
          }), " means range 9 to 17. Examples: Every day at 2:30 AM: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "30 2 * * *"
          }), ". Weekdays at 9 AM: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0 9 * * 1-5"
          }), ". Every 5 minutes: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*/5 * * * *"
          }), ". 1st of month at midnight: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0 0 1 * *"
          }), ". Every Sunday at 3 AM: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0 3 * * 0"
          }), ". Special keywords: @reboot, @daily, @hourly, @weekly, @monthly, @yearly."]
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
      "data-qid": "git09-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do systemd timers improve upon traditional cron?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Systemd timers offer several advantages: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Persistent=true"
          }), " — run missed jobs immediately after system downtime. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) RandomizedDelaySec"
          }), " — prevent thundering herd when many systems run the same job. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Dependencies"
          }), " — use After/Requires with other systemd units. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Logging"
          }), " — integrated journalctl logging. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Resource control"
          }), " — cgroup-based CPU/memory limits via the service unit. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Calendar syntax"
          }), " — more expressive than cron (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Mon..Fri *-*-* 09:00:00"
          }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Monotonic timers"
          }), " — run relative to boot or activation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) Unit activation"
          }), " — timers activate by socket, path, or device changes."]
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
      "data-qid": "git09-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How does logrotate work and how would you configure it for ML training logs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Logrotate reads configuration files to determine how to rotate logs. On each cycle, it renames the current log file (adding suffix), creates a new empty log file, optionally compresses old logs, and runs postrotate scripts. Key directives: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "daily/weekly/monthly"
          }), " — rotation frequency. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "rotate N"
          }), " — keep N rotated files. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "compress"
          }), " — gzip old logs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "copytruncate"
          }), " — copy and truncate (works with running processes). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "size"
          }), " — rotate at size threshold. For ML logs: use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "copytruncate"
          }), " (training processes hold file handles), rotate daily or at 500MB, compress, keep 30 days. The postrotate script can reload or signal the training service."]
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
      "data-qid": "git09-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Design a backup strategy for ML training artifacts (models, datasets, configs, databases).\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Frequency"
          }), ": Model checkpoints hourly (incremental), datasets daily, databases daily, full system weekly. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Strategy"
          }), ": Use rsync with --link-dest for incremental hard-link backups — unchanged files take zero extra space. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Databases"
          }), ": pg_dump with custom format and compression. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Retention"
          }), ": Hourly for 7 days, daily for 30 days, weekly for 6 months, monthly for 1 year. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Offsite"
          }), ": Encrypt backups with GPG and sync to S3/Glacier after local retention expires. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Testing"
          }), ": Monthly restore test to verify backup integrity. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tools"
          }), ": rsync + cron for local, s3cmd/aws-cli for cloud, borg/restic for encrypted deduplicated backups."]
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
      "data-qid": "git09-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is Ansible and how does it compare to other configuration management tools?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ansible is an agentless configuration management and automation tool. It uses SSH to connect to nodes and executes YAML playbooks. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Agentless"
          }), ": no software to install on managed nodes (unlike Puppet/Chef which require agents). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Push-based"
          }), ": control node pushes config to nodes (vs pull-based in Puppet). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Idempotent"
          }), ": running a playbook multiple times produces the same result. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Modules"
          }), ": built-in modules for package management, file operations, systemd, cloud APIs. Ansible is simpler to learn than Puppet/Chef (YAML vs Ruby DSL), works well for ML infrastructure setup, but is slower for large deployments compared to SaltStack or Terraform for infrastructure provisioning."]
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
      "data-qid": "git09-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you monitor cron jobs and alert on failures?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) MAILTO"
          }), ": Set MAILTO in crontab to receive job output via email. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Journalctl"
          }), ": systemd timers log to journald — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "journalctl -u timer-name"
          }), " shows execution history. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Health check script"
          }), ": Monitor job with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/usr/local/bin/cron-monitor.sh"
          }), " that checks last run time. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Dead man's switch"
          }), ": Cron job pings an external service (e.g., healthchecks.io, Dead Man's Snitch) which alerts if no ping received. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Metrics"
          }), ": Export last-run timestamp to Prometheus. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Log monitoring"
          }), ": Use logwatch or custom watcher to scan for error patterns in job output. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Exit codes"
          }), ": Ensure every script exits non-zero on failure so cron sends the output."]
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
      "data-qid": "git09-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the difference between cron's @reboot and a systemd service with Restart=always?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@reboot"
          }), ": runs a script once when the system starts. It's a one-shot execution. If the script crashes or exits, it doesn't restart. No dependency management — runs after cron daemon starts, not necessarily after network. Logging only via cron's mail mechanism. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "systemd service with Restart=always"
          }), ": runs at boot (if enabled), restarts on failure (Restart=always), supports dependencies (After=network.target), integrated logging (journalctl), resource limits (cgroups), and security hardening (ProtectSystem, PrivateTmp). For ML services that must stay up (model serving, experiment trackers), use systemd. For one-time startup tasks (creating directories, cleaning temp files), @reboot is sufficient."]
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
      "data-qid": "git09-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How would you schedule a training job that runs every 30 minutes but must complete before the next run?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-container",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Three approaches: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1) Cron + lockfile"
            }), ": Run every 30 minutes but use a lockfile to prevent overlap. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*/30 * * * * /usr/bin/flock -n /tmp/train.lock /usr/local/bin/train.sh"
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2) systemd timer + service"
            }), ": Create a service with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "StartLimitIntervalSec=1800"
            }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OnCalendar=*:0/30"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ConditionPathExists=!/tmp/train.lock"
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3) Internal scheduling"
            }), ": The training script itself checks the clock and only starts if the previous run completed and the window is open. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4) Workflow manager"
            }), ": Use Airflow, Prefect, or Dagster for complex scheduling with dependency tracking — they handle retries, backfills, and SLA monitoring natively."]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "Bookmark"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: Explain the at command and when you'd use it over cron.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["at schedules a one-time task at a specific future time. Use cases: running a database migration during a maintenance window TONIGHT, deploying a model update after traffic drops at 2 AM, scheduling a resource-intensive experiment to run after hours, or setting a temporary alert to remind you to check a training job. Unlike cron (recurring), at is for one-offs. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "echo \"python train.py --quick-test\" | at now + 2 hours"
          }), ". batch is similar but runs when system load is low. View pending: atq. Remove: atrm. atd daemon must be running (", (0,jsx_runtime.jsx)(_components.code, {
            children: "systemctl status atd"
          }), ")."]
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
      "data-qid": "git09-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you automate the setup of 10 identical ML training servers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use Ansible with the following approach: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Inventory"
          }), ": Define ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[ml-servers]"
          }), " group with all 10 hosts in hosts.ini. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Playbook"
          }), ": Write a playbook that installs CUDA drivers, Python, ML frameworks (PyTorch, TensorFlow), creates users, sets up data directories, configures SSH, deploys cron jobs, sets up logrotate, and configures monitoring. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Variables"
          }), ": Use group_vars for shared settings (CUDA version, Python packages) and host_vars for unique settings (IP addresses, GPU type). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Roles"
          }), ": Organize into roles: common, nvidia, ml-frameworks, monitoring, backup. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Execution"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ansible-playbook -i hosts.ini site.yml -f 10"
          }), " (parallel on 10 hosts). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Idempotent"
          }), ": Run multiple times safely. Re-run weekly to ensure compliance."]
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
      }), ": What cron expression runs a job every 15 minutes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) * 15 * * *\nb) */15 * * * *\nc) 15 * * * *\nd) 0 15 * * *"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) */15 * * * *"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The / in the minute field means \"every 15 minutes\" — runs at :00, :15, :30, :45."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What systemd timer directive runs a missed job after system downtime?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) RandomizedDelaySec\nb) OnBootSec\nc) Persistent=true\nd) AccuracySec"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Persistent=true"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Persistent=true triggers the timer immediately after boot if the scheduled time was missed."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which logrotate directive allows rotating logs of running processes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) copytruncate\nb) rotate\nc) compress\nd) postrotate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) copytruncate"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "copytruncate copies the file and truncates the original, allowing running processes to continue writing."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is Ansible's architecture called?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Agent-based pull\nb) Agentless push\nc) Master-slave\nd) Peer-to-peer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Agentless push"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Ansible pushes configurations via SSH without requiring agents on managed nodes."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which command schedules a one-time task for later execution?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) cron\nb) at\nc) systemd-run\nd) scheduler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git09-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) at"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["at schedules one-time tasks. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "echo \"command\" | at now + 1 hour"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a cron job that runs a Python script every hour and logs the output to a file. Verify it runs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Convert a cron job to a systemd timer with persistent=true and RandomizedDelaySec=300. Compare behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Set up logrotate for ML training logs with daily rotation, compression, and 30-day retention. Test with force rotation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write an Ansible playbook that sets up an ML training server (Python, PyTorch, CUDA, data directories, cron jobs, logrotate)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete backup automation system with rsync incremental backups, database dumps, S3 sync, and monitoring alerts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting that cron runs with a minimal PATH — always use full paths in cron commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not capturing and logging cron job output — failures go unnoticed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using cron for tasks that need dependency management (use workflow tools instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not testing backup restores — backups are only as good as the last successful restore"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running heavy workloads without locking — overlapping cron jobs cause resource contention"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cron syntax: minute hour day month weekday; special keywords: @daily, @hourly, @reboot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "crontab -e edits, crontab -l lists, crontab -r removes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systemd timers: OnCalendar, Persistent, RandomizedDelaySec"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "at for one-time, batch for load-dependent scheduling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logrotate: manage log files — rotate, compress, delete old logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ansible: agentless, push-based, YAML playbooks, idempotent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup 3-2-1 rule: 3 copies, 2 media types, 1 offsite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always test backups with restore drills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor cron with MAILTO, journalctl, health checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use lockfiles to prevent overlapping cron job execution"
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
            children: "Explain the core idea of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Cron Automation — Scheduling, Systemd Timers, Backups, Ansible."
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
            children: "Describe a production bug caused by misunderstanding Cron Automation — Scheduling, Systemd Timers, Backups, Ansible. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Cron Automation — Scheduling, Systemd Timers, Backups, Ansible from 10 users to 10 million?"
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
            children: "Compare Cron Automation — Scheduling, Systemd Timers, Backups, Ansible with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Cron Automation — Scheduling, Systemd Timers, Backups, Ansible."
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
            children: "How does Cron Automation — Scheduling, Systemd Timers, Backups, Ansible behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Cron Automation — Scheduling, Systemd Timers, Backups, Ansible explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Cron Automation — Scheduling, Systemd Timers, Backups, Ansible\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Cron Automation — Scheduling, Systemd Timers, Backups, Ansible to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Cron Automation — Scheduling, Systemd Timers, Backups, Ansible (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Cron Automation — Scheduling, Systemd Timers, Backups, Ansible-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Cron Automation — Scheduling, Systemd Timers, Backups, Ansible interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in production today?"
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
        }), " Cron Automation — Scheduling, Systemd Timers, Backups, Ansible builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Cron Automation — Scheduling, Systemd Timers, Backups, Ansible chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Cron Automation — Scheduling, Systemd Timers, Backups, Ansible issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Cron Automation — Scheduling, Systemd Timers, Backups, Ansible that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible on an empty input?"
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
            children: "Complete Medium exercises, explain Cron Automation — Scheduling, Systemd Timers, Backups, Ansible to someone else"
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
        children: "Always write a one-line example of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Cron Automation — Scheduling, Systemd Timers, Backups, Ansible when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Cron Automation — Scheduling, Systemd Timers, Backups, Ansible twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Cron Automation — Scheduling, Systemd Timers, Backups, Ansible snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Cron Automation — Scheduling, Systemd Timers, Backups, Ansible to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Cron Automation — Scheduling, Systemd Timers, Backups, Ansible to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Cron Automation — Scheduling, Systemd Timers, Backups, Ansible (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Cron Automation — Scheduling, Systemd Timers, Backups, Ansible problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Cron Automation — Scheduling, Systemd Timers, Backups, Ansible fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Cron Automation — Scheduling, Systemd Timers, Backups, Ansible asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Cron Automation — Scheduling, Systemd Timers, Backups, Ansible."
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
        children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Cron Automation — Scheduling, Systemd Timers, Backups, Ansible — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Cron Automation — Scheduling, Systemd Timers, Backups, Ansible changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Cron Automation — Scheduling, Systemd Timers, Backups, Ansible."
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
        children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Cron Automation — Scheduling, Systemd Timers, Backups, Ansible helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Cron Automation — Scheduling, Systemd Timers, Backups, Ansible concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Cron Automation — Scheduling, Systemd Timers, Backups, Ansible skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Cron Automation — Scheduling, Systemd Timers, Backups, Ansible to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is like a recipe"
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
        }), " — this chapter contributes the Cron Automation — Scheduling, Systemd Timers, Backups, Ansible skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-09cronautomation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What cron expression runs a job every 15 minutes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) */15 * * * *"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-09cronautomation-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What systemd timer directive runs a missed job after system downtime?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Persistent=true"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-09cronautomation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which logrotate directive allows rotating logs of running processes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) copytruncate"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-09cronautomation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is Ansible's architecture called?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Agentless push"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-09cronautomation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command schedules a one-time task for later execution?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) at"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Cron Automation — Scheduling, Systemd Timers, Backups, Ansible (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in production at scale"
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
        children: "Testing: pytest for unit tests of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Cron Automation — Scheduling, Systemd Timers, Backups, Ansible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Cron Automation — Scheduling, Systemd Timers, Backups, Ansible code."]
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
        }), " or your IDE's debugger to step through the Cron Automation — Scheduling, Systemd Timers, Backups, Ansible example code."]
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
        children: "Explain Cron Automation — Scheduling, Systemd Timers, Backups, Ansible in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible."
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
        children: "Tell me about a time you debugged a Cron Automation — Scheduling, Systemd Timers, Backups, Ansible problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Cron Automation — Scheduling, Systemd Timers, Backups, Ansible is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Cron Automation — Scheduling, Systemd Timers, Backups, Ansible."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Cron Automation — Scheduling, Systemd Timers, Backups, Ansible logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Cron Automation — Scheduling, Systemd Timers, Backups, Ansible without notes"
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
        }), ": a small team uses Cron Automation — Scheduling, Systemd Timers, Backups, Ansible daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Cron Automation — Scheduling, Systemd Timers, Backups, Ansible patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Cron Automation — Scheduling, Systemd Timers, Backups, Ansible principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Cron Automation — Scheduling, Systemd Timers, Backups, Ansible shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Cron Automation — Scheduling, Systemd Timers, Backups, Ansible to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cron Automation — Scheduling, Systemd Timers, Backups, Ansible, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Cron Automation — Scheduling, Systemd Timers, Backups, Ansible depends on input size and distribution — always benchmark for your own data."
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