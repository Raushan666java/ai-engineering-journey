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
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_09_cron_automation_md_61f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/09-cron-automation","title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/09-cron-automation.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/09-cron-automation","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/09-cron-automation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":66,"frontMatter":{"id":"09-cron-automation","slug":"/ai-engineering-placement/04-git-linux-cli/09-cron-automation","title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","sidebar_label":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","sidebar_position":66},"sidebar":"placementSidebar","previous":{"title":"Process Management — Monitoring, Signals, Resource Control","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/08-process-management"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/visual-notes"}}');
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
    mermaid: "mermaid",
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
        children: "* * * * * command-to-execute\r\n┬ ┬ ┬ ┬ ┬\r\n│ │ │ │ └──── Day of week (0-7, 0/7 = Sunday)\r\n│ │ │ └────── Month (1-12)\r\n│ │ └──────── Day of month (1-31)\r\n│ └────────── Hour (0-23)\r\n└──────────── Minute (0-59)\n"
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
        children: "# Edit current user's crontab\r\ncrontab -e\r\n\r\n# List cron jobs\r\ncrontab -l\r\n\r\n# Remove all cron jobs\r\ncrontab -r\r\n\r\n# Edit another user's crontab (root)\r\ncrontab -u mluser -e\r\n\r\n# List another user's cron jobs\r\ncrontab -u mluser -l\r\n\r\n# Install from file\r\ncrontab /path/to/cronfile\r\n\r\n# Backup crontab\r\ncrontab -l > crontab-backup.txt\r\n\r\n# Crontab file format:\r\n# Each line is: schedule command\r\n# Empty lines and lines starting with # are ignored\r\n# Environment variables can be set:\r\n# MAILTO=user@example.com\r\n# SHELL=/bin/bash\r\n# PATH=/usr/local/bin:/usr/bin:/bin\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron examples"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Run every day at 2:30 AM\r\n30 2 * * * /usr/local/bin/backup.sh\r\n\r\n# Run every weekday (Mon-Fri) at 9 AM\r\n0 9 * * 1-5 /usr/local/bin/daily-report.sh\r\n\r\n# Run every 15 minutes\r\n*/15 * * * * /usr/local/bin/health-check.sh\r\n\r\n# Run on the 1st and 15th of every month at midnight\r\n0 0 1,15 * * /usr/local/bin/monthly-cleanup.sh\r\n\r\n# Run every Sunday at 3 AM\r\n0 3 * * 0 /usr/local/bin/weekly-maintenance.sh\r\n\r\n# Run at 8 AM and 6 PM every day\r\n0 8,18 * * * /usr/local/bin/sync-data.sh\r\n\r\n# Run at startup\r\n@reboot /usr/local/bin/start-ml-service.sh\r\n\r\n# Run hourly model validation\r\n@hourly /usr/local/bin/validate-metrics.sh\r\n\r\n# Run every 30 seconds (cron doesn't support seconds)\r\n# Use sleep in script:\r\n* * * * * /usr/local/bin/run-every-30s.sh\r\n# run-every-30s.sh contains:\r\n#   #!/bin/bash\r\n#   /usr/local/bin/task.sh\r\n#   sleep 30\r\n#   /usr/local/bin/task.sh\n"
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
        children: "# /etc/systemd/system/ml-daily-backup.service\r\n[Unit]\r\nDescription=Daily ML Model Backup\r\nWants=network-online.target\r\nAfter=network-online.target\r\n\r\n[Service]\r\nType=oneshot\r\nUser=mluser\r\nGroup=mlgroup\r\nExecStart=/usr/local/bin/backup-models.sh\r\nEnvironment=BACKUP_DIR=/data/backups\r\nEnvironment=RETENTION_DAYS=30\r\n\r\n# Resource limits\r\nCPUQuota=50%\r\nMemoryMax=4G\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/systemd/system/ml-daily-backup.timer\r\n[Unit]\r\nDescription=Run ML backup daily at 3 AM\r\nRequires=ml-daily-backup.service\r\n\r\n[Timer]\r\n# Run daily at 3:00 AM\r\nOnCalendar=daily\r\nOnCalendar=*-*-* 03:00:00\r\n\r\n# Alternative schedules:\r\n# OnCalendar=Mon..Fri 09:00:00  (weekdays at 9 AM)\r\n# OnCalendar=*-*-01 00:00:00   (1st of month)\r\n# OnCalendar=*:0/15:00        (every 15 minutes)\r\n\r\n# Additional options\r\nPersistent=true         # Run immediately if missed\r\nRandomizedDelaySec=300  # Random delay up to 5 min\r\nFixedRandomDelay=true   # Same random delay per host\r\nAccuracySec=1sec        # Scheduling accuracy\r\n\r\n[Install]\r\nWantedBy=timers.target\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timer management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable and start timer\r\nsudo systemctl enable ml-daily-backup.timer\r\nsudo systemctl start ml-daily-backup.timer\r\n\r\n# List all timers\r\nsystemctl list-timers --all\r\n\r\n# Show next run\r\nsystemctl list-timers ml-daily-backup.timer\r\n\r\n# View timer status\r\nsystemctl status ml-daily-backup.timer\r\n\r\n# View service logs\r\njournalctl -u ml-daily-backup.service\r\n\r\n# Trigger service manually\r\nsudo systemctl start ml-daily-backup.service\r\n\r\n# Disable timer\r\nsudo systemctl disable ml-daily-backup.timer\r\n\r\n# Monitor timer events in real-time\r\njournalctl -f -u ml-daily-backup.timer\n"
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
        children: "# Schedule command at specific time\r\necho \"python /opt/train.py --quick-test\" | at now + 1 hour\r\necho \"systemctl stop ml-training.service\" | at 23:00 today\r\n\r\n# Interactive mode\r\nat 15:00\r\n> python validate.py\r\n> mail -s \"Validation done\" user@example.com < result.txt\r\n> Ctrl+D\r\n\r\n# Common time formats\r\nat now + 5 minutes\r\nat now + 2 hours\r\nat noon tomorrow\r\nat 3:00 PM next week\r\nat 09:00 next Monday\r\nat 2024-12-31 23:59\r\n\r\n# List pending at jobs\r\natq\r\n\r\n# Remove specific job\r\natrm 5   # Remove job number 5\r\n\r\n# Batch (runs when load average < 1.5)\r\nbatch\r\n> python heavy-training.py\r\n> Ctrl+D\r\n\r\n# View at daemon status\r\nsystemctl status atd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logrotate",
      children: "Logrotate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logrotate automates log rotation, compression, and deletion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/logrotate.conf\r\n# Global defaults\r\nweekly\r\nrotate 4\r\ncreate\r\ncompress\r\ndelaycompress\r\nmissingok\r\nnotifempty\r\nsu root root\r\n\r\n# Include application-specific configs\r\ninclude /etc/logrotate.d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# /etc/logrotate.d/ml-training\r\n/var/log/ml/training.log {\r\n    # Rotate daily, keep 30 days\r\n    daily\r\n    rotate 30\r\n    compress\r\n    delaycompress          # Keep 1 uncompressed for viewing\r\n    missingok\r\n    notifempty\r\n    copytruncate           # Works with running processes\r\n    dateext                # Add date to rotated file\r\n    dateformat -%Y%m%d\r\n    maxsize 500M           # Also rotate if > 500MB\r\n    minsize 100M           # Only rotate if > 100MB\r\n\r\n    # Run post-rotation command\r\n    postrotate\r\n        systemctl reload ml-training.service > /dev/null 2>&1 || true\r\n    endscript\r\n}\r\n\r\n# GPU cluster logs\r\n/var/log/ml/gpu-monitor.log {\r\n    size 100M              # Rotate at 100MB\r\n    rotate 10\r\n    compress\r\n    copytruncate\r\n    missingok\r\n    notifempty\r\n}\r\n\r\n# Multiple log files\r\n/var/log/ml/*.log {\r\n    weekly\r\n    rotate 12              # 3 months of weekly backups\r\n    compress\r\n    missingok\r\n    sharedscripts          # Run postrotate once for all\r\n    postrotate\r\n        journalctl --vacuum-size=500M\r\n    endscript\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logrotate commands"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test configuration\r\nsudo logrotate -d /etc/logrotate.conf\r\n\r\n# Force rotation\r\nsudo logrotate -f /etc/logrotate.d/ml-training\r\n\r\n# Run with verbose\r\nsudo logrotate -v /etc/logrotate.conf\r\n\r\n# Check last rotation time\r\nls -la /var/log/ml/*.gz\r\n\r\n# View logrotate status\r\ncat /var/lib/logrotate/status\r\n\r\n# Dry run (no changes)\r\nsudo logrotate -d /etc/logrotate.d/ml-training\n"
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
        children: "#!/bin/bash\r\n# /usr/local/bin/backup-models.sh\r\n\r\nBACKUP_DIR=\"/data/backups\"\r\nSOURCE_DIR=\"/data/models\"\r\nDATE=$(date +%Y%m%d)\r\nLATEST_LINK=\"$BACKUP_DIR/latest\"\r\n\r\n# Create daily backup with hard links to unchanged files\r\nrsync -az --delete \\\r\n    --link-dest=\"$LATEST_LINK\" \\\r\n    \"$SOURCE_DIR/\" \\\r\n    \"$BACKUP_DIR/backup-$DATE/\"\r\n\r\n# Update latest symlink\r\nrm -f \"$LATEST_LINK\"\r\nln -s \"backup-$DATE\" \"$LATEST_LINK\"\r\n\r\n# Remove backups older than 30 days\r\nfind \"$BACKUP_DIR\" -maxdepth 1 -type d -name \"backup-*\" -mtime +30 -exec rm -rf {} \\;\r\n\r\n# Log success\r\nlogger \"Backup completed: $DATE, size: $(du -sh $BACKUP_DIR/backup-$DATE | cut -f1)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Database backup automation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\r\n# /usr/local/bin/backup-db.sh\r\n\r\nDB_NAME=\"ml_experiments\"\r\nBACKUP_DIR=\"/data/db-backups\"\r\nRETENTION_DAYS=30\r\n\r\n# Create backup\r\npg_dump -U mluser -d \"$DB_NAME\" \\\r\n    --format=custom \\\r\n    --compress=9 \\\r\n    --file=\"$BACKUP_DIR/${DB_NAME}_$(date +%Y%m%d_%H%M%S).dump\"\r\n\r\n# Encrypt backup\r\ngpg --encrypt --recipient backup-key \\\r\n    \"$BACKUP_DIR\"/*.dump\r\n\r\n# Upload to S3\r\naws s3 sync \"$BACKUP_DIR/\" \"s3://ml-backups/db/\"\r\n\r\n# Cleanup old backups\r\nfind \"$BACKUP_DIR\" -name \"*.dump\" -mtime +\"$RETENTION_DAYS\" -delete\r\n\r\n# Send notification\r\ncurl -X POST -H \"Content-Type: application/json\" \\\r\n    -d '{\"text\": \"Database backup completed successfully\"}' \\\r\n    \"$SLACK_WEBHOOK_URL\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full ML workflow backup"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Crontab for ML infrastructure\r\n# /etc/cron.d/ml-backups\r\n\r\n# Hourly: backup experiment metadata\r\n0 * * * * mluser /usr/local/bin/backup-meta.sh\r\n\r\n# Daily at 2 AM: backup model checkpoints\r\n0 2 * * * mluser /usr/local/bin/backup-models.sh\r\n\r\n# Daily at 3 AM: backup databases\r\n0 3 * * * mluser /usr/local/bin/backup-db.sh\r\n\r\n# Weekly on Sunday at 4 AM: full system backup\r\n0 4 * * 0 root /usr/local/bin/full-system-backup.sh\r\n\r\n# Monthly on 1st at 5 AM: archive old data\r\n0 5 1 * * mluser /usr/local/bin/archive-monthly.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cron-workflow-diagram",
      children: "Cron Workflow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Scheduling\r\n        A[Cron/Crontab] --> B[Systemd Timers]\r\n        C[At/Batch] --> B\r\n    end\r\n\r\n    subgraph Execution\r\n        B --> D{Trigger Check}\r\n        D -->|Time Match| E[Run Command]\r\n        D -->|No Match| F[Wait]\r\n        E --> G[Shell Script]\r\n        G --> H[Log Output]\r\n    end\r\n\r\n    subgraph Common Tasks\r\n        H --> I[Backup Automation]\r\n        H --> J[Log Rotation]\r\n        H --> K[Data Pipeline]\r\n        H --> L[Model Retraining]\r\n        H --> M[Health Checks]\r\n        H --> N[Report Generation]\r\n    end\r\n\r\n    subgraph Monitoring\r\n        I & J & K & L & M & N --> O[Log Files]\r\n        O --> P[Logrotate]\r\n        P --> Q[Compressed Archive]\r\n        O --> R[Journald/Syslog]\r\n        R --> S[Alert if Failed]\r\n    end\r\n\r\n    style A fill:#4a90d9,color:#fff\r\n    style E fill:#50b86c,color:#fff\r\n    style Q fill:#f5a623,color:#fff\r\n    style S fill:#e85d75,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-basics",
      children: "Ansible Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ansible automates infrastructure provisioning and configuration management."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Ansible\r\npip install ansible\r\n\r\n# Check version\r\nansible --version\r\n\r\n# Inventory file (hosts.ini)\r\ncat > hosts.ini << EOF\r\n[ml-servers]\r\ngpu-01 ansible_host=10.0.1.1 ansible_user=ubuntu\r\ngpu-02 ansible_host=10.0.1.2 ansible_user=ubuntu\r\ngpu-03 ansible_host=10.0.1.3 ansible_user=ubuntu\r\n\r\n[ml-servers:vars]\r\nansible_python_interpreter=/usr/bin/python3\r\nansible_ssh_private_key_file=~/.ssh/ml-key.pem\r\nEOF\r\n\r\n# Run ad-hoc command on all servers\r\nansible ml-servers -i hosts.ini -m ping\r\nansible ml-servers -i hosts.ini -m shell -a \"nvidia-smi --query-gpu=name --format=csv,noheader\"\r\n\r\n# Copy file to all servers\r\nansible ml-servers -i hosts.ini -m copy -a \"src=train.py dest=/opt/ml/train.py mode=0755\"\r\n\r\n# Install packages\r\nansible ml-servers -i hosts.ini -m apt -a \"name=python3-pip state=present\" --become\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ansible playbook example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\r\n# playbooks/ml-server-setup.yml\r\n- name: Setup ML Training Server\r\n  hosts: ml-servers\r\n  become: yes\r\n  vars:\r\n    cuda_version: \"12.1\"\r\n    python_version: \"3.10\"\r\n    ml_user: \"mluser\"\r\n\r\n  tasks:\r\n    - name: Create ML user\r\n      user:\r\n        name: \"{{ ml_user }}\"\r\n        state: present\r\n        groups: sudo,docker\r\n        shell: /bin/bash\r\n\r\n    - name: Install system packages\r\n      apt:\r\n        name:\r\n          - python3-pip\r\n          - python3-venv\r\n          - docker.io\r\n          - nvidia-docker2\r\n          - htop\r\n          - rsync\r\n          - postgresql-client\r\n        state: present\r\n        update_cache: yes\r\n\r\n    - name: Install Python packages\r\n      pip:\r\n        name:\r\n          - torch\r\n          - transformers\r\n          - datasets\r\n          - scikit-learn\r\n          - mlflow\r\n        state: present\r\n\r\n    - name: Create data directories\r\n      file:\r\n        path: \"{{ item }}\"\r\n        state: directory\r\n        owner: \"{{ ml_user }}\"\r\n        group: \"{{ ml_user }}\"\r\n        mode: 0755\r\n      loop:\r\n        - /data/models\r\n        - /data/datasets\r\n        - /data/backups\r\n\r\n    - name: Deploy cron job for daily backup\r\n      cron:\r\n        name: \"Daily model backup\"\r\n        minute: \"0\"\r\n        hour: \"2\"\r\n        job: \"/usr/local/bin/backup-models.sh\"\r\n        user: \"{{ ml_user }}\"\r\n\r\n    - name: Set up logrotate for ML logs\r\n      copy:\r\n        dest: /etc/logrotate.d/ml-training\r\n        content: |\r\n          /var/log/ml/*.log {\r\n              daily\r\n              rotate 30\r\n              compress\r\n              copytruncate\r\n              missingok\r\n              notifempty\r\n          }\r\n\r\n    - name: Restart services\r\n      systemd:\r\n        name: \"{{ item }}\"\r\n        state: restarted\r\n        daemon_reload: yes\r\n      loop:\r\n        - cron\r\n        - docker\r\n\r\n    - name: Verify GPU access\r\n      shell: nvidia-smi\r\n      register: gpu_check\r\n      changed_when: false\r\n\r\n    - name: Display GPU info\r\n      debug:\r\n        msg: \"{{ gpu_check.stdout_lines }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Running playbooks"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run playbook\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml\r\n\r\n# Check mode (dry run)\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --check\r\n\r\n# Limit to specific hosts\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --limit gpu-01\r\n\r\n# Run with specific user\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml -u ubuntu\r\n\r\n# Ask for sudo password\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml -K\r\n\r\n# Verbose output\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml -vvv\r\n\r\n# Run specific tags\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --tags backup\r\n\r\n# List hosts that would be affected\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --list-hosts\r\n\r\n# List all tasks\r\nansible-playbook -i hosts.ini playbooks/ml-server-setup.yml --list-tasks\n"
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
        children: "#!/bin/bash\r\n# /usr/local/bin/weekly-retrain.sh\r\n\r\nMODEL_DIR=\"/data/models\"\r\nDATA_DIR=\"/data/datasets/current\"\r\nMLFLOW_URI=\"http://mlflow.internal:5000\"\r\nDATE=$(date +%Y%m%d)\r\n\r\necho \"[$(date)] Starting weekly model retraining\"\r\n\r\n# 1. Check for new data\r\nif [ ! -f \"$DATA_DIR/new_data_available.flag\" ]; then\r\n    echo \"No new data available. Skipping.\"\r\n    exit 0\r\nfi\r\n\r\n# 2. Run training script\r\npython3 /opt/ml/train.py \\\r\n    --data-dir \"$DATA_DIR\" \\\r\n    --output-dir \"$MODEL_DIR/$DATE\" \\\r\n    --mlflow-uri \"$MLFLOW_URI\" \\\r\n    --experiment \"weekly-retrain\"\r\n\r\n# 3. Evaluate and compare with production\r\npython3 /opt/ml/evaluate.py \\\r\n    --new-model \"$MODEL_DIR/$DATE\" \\\r\n    --production-model \"$MODEL_DIR/production\"\r\n\r\n# 4. If new model is better, promote\r\nif [ -f \"$MODEL_DIR/$DATE/champion.flag\" ]; then\r\n    ln -sfn \"$DATE\" \"$MODEL_DIR/production\"\r\n    echo \"New champion model promoted: $DATE\"\r\nfi\r\n\r\n# 5. Cleanup old models (keep last 20)\r\nls -t \"$MODEL_DIR\" | grep -E \"^[0-9]{8}$\" | tail -n +21 | \\\r\n    xargs -I {} rm -rf \"$MODEL_DIR/{}\"\r\n\r\necho \"[$(date)] Weekly retraining complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring cron jobs"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\r\n# /usr/local/bin/cron-monitor.sh\r\n# Run this as a cron job to alert on failures\r\n\r\n# Check if critical cron jobs ran recently\r\nCRITICAL_JOBS=(\"backup\" \"retrain\" \"cleanup\")\r\nALERT_EMAIL=\"team@example.com\"\r\n\r\nfor job in \"${CRITICAL_JOBS[@]}\"; do\r\n    # Check journalctl for the job's last run\r\n    LAST_RUN=$(journalctl -u \"ml-$job.service\" --since \"24 hours ago\" | grep \"Started\" | tail -1)\r\n\r\n    if [ -z \"$LAST_RUN\" ]; then\r\n        echo \"Job ml-$job did not run in last 24 hours\" | \\\r\n            mail -s \"CRON ALERT: $job not running\" \"$ALERT_EMAIL\"\r\n    fi\r\ndone\r\n\r\n# Check disk space\r\nDISK_USAGE=$(df /data | tail -1 | awk '{print $5}' | sed 's/%//')\r\nif [ \"$DISK_USAGE\" -gt 85 ]; then\r\n    echo \"Disk usage at ${DISK_USAGE}% on /data\" | \\\r\n        mail -s \"DISK ALERT: ${DISK_USAGE}%\" \"$ALERT_EMAIL\"\r\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Schedulers\r\n        A[Cron] --> B[Systemd Timer]\r\n        C[At/Batch] --> B\r\n    end\r\n\r\n    subgraph Automation Tasks\r\n        B --> D[Backups]\r\n        B --> E[Model Retraining]\r\n        B --> F[Data Pipelines]\r\n        B --> G[Health Checks]\r\n        B --> H[Report Generation]\r\n        B --> I[Log Rotation]\r\n    end\r\n\r\n    subgraph Tools\r\n        D --> J[rsync]\r\n        D --> K[pg_dump]\r\n        E --> L[Python Scripts]\r\n        I --> M[logrotate]\r\n    end\r\n\r\n    subgraph Infrastructure\r\n        J & K & L & M --> N[Ansible]\r\n        N --> O[Configuration]\r\n        N --> P[Deployment]\r\n        N --> Q[Inventory]\r\n    end\r\n\r\n    style A fill:#4a90d9,color:#fff\r\n    style B fill:#50b86c,color:#fff\r\n    style N fill:#f5a623,color:#fff"
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
        children: "#!/usr/bin/env python3\r\n\"\"\"Cron job management and monitoring for ML infrastructure\"\"\"\r\n\r\nimport os\r\nimport sys\r\nimport subprocess\r\nimport json\r\nfrom datetime import datetime, timedelta\r\nfrom typing import Dict, List, Optional\r\n\r\nclass CronManager:\r\n    \"\"\"Manage and monitor cron jobs for ML workflows\"\"\"\r\n\r\n    def __init__(self, user: str = \"mluser\"):\r\n        self.user = user\r\n\r\n    def list_jobs(self) -> List[Dict]:\r\n        \"\"\"List all cron jobs for the user\"\"\"\r\n        try:\r\n            result = subprocess.run(\r\n                [\"crontab\", \"-u\", self.user, \"-l\"],\r\n                capture_output=True, text=True, timeout=10\r\n            )\r\n            if result.returncode != 0:\r\n                return []\r\n\r\n            jobs = []\r\n            for line in result.stdout.strip().split(\"\\n\"):\r\n                line = line.strip()\r\n                if line and not line.startswith(\"#\"):\r\n                    parts = line.split(None, 5)\r\n                    if len(parts) >= 6:\r\n                        jobs.append({\r\n                            \"schedule\": \" \".join(parts[:5]),\r\n                            \"command\": parts[5],\r\n                            \"raw\": line,\r\n                        })\r\n            return jobs\r\n        except subprocess.TimeoutExpired:\r\n            return []\r\n\r\n    def add_job(self, schedule: str, command: str, comment: str = \"\") -> bool:\r\n        \"\"\"Add a new cron job\"\"\"\r\n        try:\r\n            # Get existing jobs\r\n            result = subprocess.run(\r\n                [\"crontab\", \"-u\", self.user, \"-l\"],\r\n                capture_output=True, text=True, timeout=10\r\n            )\r\n            existing = result.stdout if result.returncode == 0 else \"\"\r\n\r\n            # Create new entry\r\n            new_entry = \"\"\r\n            if comment:\r\n                new_entry += f\"# {comment}\\n\"\r\n            new_entry += f\"{schedule} {command}\\n\"\r\n\r\n            full_crontab = existing + new_entry\r\n\r\n            # Install new crontab\r\n            proc = subprocess.Popen(\r\n                [\"crontab\", \"-u\", self.user, \"-\"],\r\n                stdin=subprocess.PIPE, text=True\r\n            )\r\n            proc.communicate(input=full_crontab, timeout=10)\r\n            return proc.returncode == 0\r\n        except subprocess.TimeoutExpired:\r\n            return False\r\n\r\n    def remove_job(self, command_pattern: str) -> bool:\r\n        \"\"\"Remove cron jobs matching pattern\"\"\"\r\n        try:\r\n            result = subprocess.run(\r\n                [\"crontab\", \"-u\", self.user, \"-l\"],\r\n                capture_output=True, text=True, timeout=10\r\n            )\r\n            if result.returncode != 0:\r\n                return False\r\n\r\n            lines = result.stdout.split(\"\\n\")\r\n            filtered = [l for l in lines if command_pattern not in l]\r\n\r\n            proc = subprocess.Popen(\r\n                [\"crontab\", \"-u\", self.user, \"-\"],\r\n                stdin=subprocess.PIPE, text=True\r\n            )\r\n            proc.communicate(input=\"\\n\".join(filtered), timeout=10)\r\n            return proc.returncode == 0\r\n        except subprocess.TimeoutExpired:\r\n            return False\r\n\r\n    def last_run(self, job_pattern: str) -> Optional[datetime]:\r\n        \"\"\"Check when a cron job last ran via journalctl\"\"\"\r\n        try:\r\n            result = subprocess.run(\r\n                [\"journalctl\", \"-u\", f\"cron.service\",\r\n                 \"--since\", \"7 days ago\", \"--no-pager\"],\r\n                capture_output=True, text=True, timeout=30\r\n            )\r\n            # Look for the command in cron logs\r\n            for line in result.stdout.split(\"\\n\"):\r\n                if job_pattern in line and \"CMD\" in line:\r\n                    timestamp_str = line.split()[0] + \" \" + line.split()[1]\r\n                    timestamp = datetime.strptime(\r\n                        timestamp_str.split(\".\")[0],\r\n                        \"%b %d %H:%M:%S\"\r\n                    )\r\n                    # Replace year with current\r\n                    now = datetime.now()\r\n                    timestamp = timestamp.replace(year=now.year)\r\n                    return timestamp\r\n            return None\r\n        except (subprocess.TimeoutExpired, ValueError):\r\n            return None\r\n\r\nclass BackupOrchestrator:\r\n    \"\"\"Coordinate backup strategy for ML artifacts\"\"\"\r\n\r\n    def __init__(self, config_path: str = \"/etc/ml-backup/config.json\"):\r\n        self.config = self._load_config(config_path)\r\n\r\n    def _load_config(self, path: str) -> Dict:\r\n        default_config = {\r\n            \"backup_root\": \"/data/backups\",\r\n            \"sources\": [\r\n                \"/data/models\",\r\n                \"/data/experiments\",\r\n                \"/opt/ml/configs\",\r\n            ],\r\n            \"databases\": [\"ml_experiments\", \"metadata\"],\r\n            \"retention_days\": 30,\r\n            \"s3_bucket\": \"s3://ml-backups/\",\r\n            \"slack_webhook\": \"\",\r\n        }\r\n        if os.path.exists(path):\r\n            with open(path) as f:\r\n                return {**default_config, **json.load(f)}\r\n        return default_config\r\n\r\n    def backup_directory(self, source: str, dest: str) -> Dict:\r\n        \"\"\"Backup a directory using rsync\"\"\"\r\n        result = subprocess.run(\r\n            [\"rsync\", \"-az\", \"--delete\",\r\n             source, dest],\r\n            capture_output=True, text=True, timeout=3600\r\n        )\r\n        return {\r\n            \"source\": source,\r\n            \"dest\": dest,\r\n            \"success\": result.returncode == 0,\r\n            \"output\": result.stdout[:500],\r\n        }\r\n\r\n    def backup_database(self, db_name: str, dest_dir: str) -> Dict:\r\n        \"\"\"Backup a PostgreSQL database\"\"\"\r\n        timestamp = datetime.now().strftime(\"%Y%m%d_%H%M%S\")\r\n        filename = f\"{dest_dir}/{db_name}_{timestamp}.dump\"\r\n\r\n        result = subprocess.run(\r\n            [\"pg_dump\", \"-U\", \"mluser\", \"-d\", db_name,\r\n             \"--format=custom\", \"--compress=9\",\r\n             \"--file\", filename],\r\n            capture_output=True, text=True, timeout=3600\r\n        )\r\n        return {\r\n            \"database\": db_name,\r\n            \"file\": filename,\r\n            \"success\": result.returncode == 0,\r\n        }\r\n\r\n    def run_full_backup(self) -> Dict:\r\n        \"\"\"Execute complete backup strategy\"\"\"\r\n        results = {}\r\n        date_str = datetime.now().strftime(\"%Y%m%d\")\r\n        backup_dir = f\"{self.config['backup_root']}/backup-{date_str}\"\r\n\r\n        # Ensure backup directory exists\r\n        os.makedirs(backup_dir, exist_ok=True)\r\n\r\n        # Backup directories\r\n        for source in self.config[\"sources\"]:\r\n            dest = f\"{backup_dir}/{os.path.basename(source)}\"\r\n            results[f\"dir_{os.path.basename(source)}\"] = self.backup_directory(source, dest)\r\n\r\n        # Backup databases\r\n        for db in self.config[\"databases\"]:\r\n            results[f\"db_{db}\"] = self.backup_database(db, backup_dir)\r\n\r\n        # Cleanup old backups\r\n        cutoff = datetime.now() - timedelta(days=self.config[\"retention_days\"])\r\n        for item in os.listdir(self.config[\"backup_root\"]):\r\n            item_path = os.path.join(self.config[\"backup_root\"], item)\r\n            if os.path.isdir(item_path):\r\n                mtime = datetime.fromtimestamp(os.path.getmtime(item_path))\r\n                if mtime < cutoff:\r\n                    subprocess.run([\"rm\", \"-rf\", item_path])\r\n\r\n        return results\r\n\r\nif __name__ == \"__main__\":\r\n    # List existing cron jobs\r\n    manager = CronManager()\r\n    jobs = manager.list_jobs()\r\n    print(f\"Current cron jobs ({len(jobs)}):\")\r\n    for job in jobs:\r\n        print(f\"  {job['schedule']} -> {job['command'][:60]}...\")\r\n\r\n    # Add a training job\r\n    manager.add_job(\r\n        schedule=\"0 2 * * 1\",\r\n        command=\"/usr/local/bin/retrain-model.sh\",\r\n        comment=\"Weekly model retraining every Monday at 2 AM\"\r\n    )\r\n\r\n    # Run backup\r\n    backup = BackupOrchestrator()\r\n    results = backup.run_full_backup()\r\n    print(f\"\\nBackup results:\")\r\n    for key, value in results.items():\r\n        status = \"OK\" if value.get(\"success\") else \"FAIL\"\r\n        print(f\"  {key}: {status}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Current cron jobs (3):\r\n  0 2 * * * /usr/local/bin/backup-models.sh\r\n  0 3 * * * /usr/local/bin/backup-db.sh\r\n  */5 * * * * /usr/local/bin/health-check.sh\r\n\r\nBackup results:\r\n  dir_data/models: OK\r\n  dir_data/experiments: OK\r\n  dir_opt/ml/configs: OK\r\n  db_ml_experiments: OK\r\n  db_metadata: OK\n"
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
      children: "a) * 15 * * *\r\nb) */15 * * * *\r\nc) 15 * * * *\r\nd) 0 15 * * *"
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
      children: "a) RandomizedDelaySec\r\nb) OnBootSec\r\nc) Persistent=true\r\nd) AccuracySec"
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
      children: "a) copytruncate\r\nb) rotate\r\nc) compress\r\nd) postrotate"
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
      children: "a) Agent-based pull\r\nb) Agentless push\r\nc) Master-slave\r\nd) Peer-to-peer"
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
      children: "a) cron\r\nb) at\r\nc) systemd-run\r\nd) scheduler"
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
            children: "Design a minimal, well-typed function in this chapter — Scheduling, Systemd Timers, Backups, Ansible."
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
            children: "Describe a production bug caused by misunderstanding this technique — Scheduling, Systemd Timers, Backups, Ansible. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Scheduling, Systemd Timers, Backups, Ansible from 10 users to 10 million?"
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
            children: "Walk through how you would test a component built on this — Scheduling, Systemd Timers, Backups, Ansible."
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
            children: "How would you make an implementation of this technique — Scheduling, Systemd Timers, Backups, Ansible run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Scheduling, Systemd Timers, Backups, Ansible that is production-quality."
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
        children: "The time complexity of the standard approach to 09 Cron Automation is ___. — Answer: O(n) for log, O(1) for checkout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 09 Cron Automation is ___. — Answer: merge conflicts, detached HEAD, force push"
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
          }), " Your implementation of this technique — Scheduling, Systemd Timers, Backups, Ansible is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of this technique — Scheduling, Systemd Timers, Backups, Ansible on an empty input?"
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
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Automation — Scheduling, Systemd Timers, Backups, Ansible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 04 — builds the foundation for 09 Cron Automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 09 Cron Automation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 09 Cron Automation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 09 Cron Automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 09 Cron Automation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 09 Cron Automation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 09 Cron Automation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 09 Cron Automation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 09 Cron Automation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "09 Cron Automation is like a GPS navigation system"
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
          }), " — this chapter contributes the Cron Automation — Scheduling, Systemd Timers, Backups, Ansible skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Automation — Scheduling, Systemd Timers, Backups, Ansible"
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
        }), ": Add structured logging at each stage of the 09 Cron Automation pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_09_cron_automation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 09 Cron Automation.\r\n\r\n    Key concepts: commit, branch, merge, rebase, pull request\r\n    Complexity: O(n) for log, O(1) for checkout\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 09 Cron Automation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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