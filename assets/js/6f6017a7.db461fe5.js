"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39305],{

/***/ 32416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_04_git_linux_cli_01_git_basics_md_6f6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-04-git-linux-cli-01-git-basics-md-6f6.json
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_01_git_basics_md_6f6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/01-git-basics","title":"Git Basics","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/01-git-basics.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/01-git-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/01-git-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"id":"01-git-basics","slug":"/ai-engineering-placement/04-git-linux-cli/01-git-basics","title":"Git Basics","sidebar_label":"Git Basics","sidebar_position":53},"sidebar":"coursesSidebar","previous":{"title":"04 — Git, Linux & CLI","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli"},"next":{"title":"Git Branching","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/02-git-branching"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/04-git-linux-cli/01-git-basics.md


const frontMatter = {
	id: '01-git-basics',
	slug: '/ai-engineering-placement/04-git-linux-cli/01-git-basics',
	title: 'Git Basics',
	sidebar_label: 'Git Basics',
	sidebar_position: 53
};
const contentTitle = 'Git Basics';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
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
  "value": "01.1 Git Initialization",
  "id": "011-git-initialization",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "01.2 Staging and Committing",
  "id": "012-staging-and-committing",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "01.3 Inspecting History",
  "id": "013-inspecting-history",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "01.4 Undoing Changes",
  "id": "014-undoing-changes",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "01.5 .gitignore",
  "id": "015-gitignore",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-4",
  "level": 2
}, {
  "value": "01.6 Real-World Best Practices",
  "id": "016-real-world-best-practices",
  "level": 3
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
  "value": "Mixed: unstages but keeps files",
  "id": "mixed-unstages-but-keeps-files",
  "level": 2
}, {
  "value": "Hard: discloses everything",
  "id": "hard-discloses-everything",
  "level": 2
}, {
  "value": "Restore it",
  "id": "restore-it",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Practical Tips",
  "id": "practical-tips",
  "level": 2
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 3
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 3
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 3
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 3
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
  "id": "truefalse-1",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank-1",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions-1",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions-1",
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
    hr: "hr",
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
        id: "git-basics",
        children: "Git Basics"
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
            children: "Understand how Git tracks changes and manages project history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize repos, stage files, and create commits with meaningful messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use git status, git log, and git diff to inspect repository state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure .gitignore to exclude files and directories from version control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply undo and recovery workflows for common mistakes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow commit message conventions used in professional teams"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git is the industry-standard version control system. Understanding Git fundamentals — init, add, commit, branching — is essential for every software engineer. AI engineers use Git to manage training code, model versions, and collaboration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic command line usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text editor familiarity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git Initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating repos, understanding .git directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Staging and Committing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add, commit, the three-area model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspecting History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log, diff, show, status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undoing Changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "restore, reset, amend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gitignore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excluding files from tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-World Workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit conventions, atomic commits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Git Basics] --> B[Init]\n    B --> C[Stage & Commit]\n    C --> D[Inspect History]\n    D --> E[Undo Changes]\n    E --> F[.gitignore]\n    F --> G[Best Practices]\n"
      })
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
      id: "011-git-initialization",
      children: "01.1 Git Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git is a distributed version control system that tracks changes to files over time. Unlike centralized systems, every developer has a full copy of the repository history on their machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating a new repository:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Create a new repo in the current directory\ngit init\n\n## Create a new repo in a specific directory\ngit init my-project\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git init"
      }), " creates a hidden ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".git"
      }), " directory that stores all version control metadata: commit objects, branch refs, configuration, and the object database."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloning an existing repository:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Clone via HTTPS\ngit clone https://github.com/user/repo.git\n\n## Clone via SSH\ngit clone git@github.com:user/repo.git\n\n## Clone into a specific directory\ngit clone https://github.com/user/repo.git my-folder\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cloning copies the entire history, all branches, and sets up a remote called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), " automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Git concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Working Directory"
        }), ": Your actual files on disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Staging Area (Index)"
        }), ": Files marked for the next commit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository (.git)"
        }), ": The committed history database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HEAD"
        }), ": A pointer to the current commit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Working Directory] -->|git add| B[Staging Area]\n    B -->|git commit| C[Repository]\n    C -->|git checkout| A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "012-staging-and-committing",
      children: "01.2 Staging and Committing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The staging area lets you craft commits selectively. You can stage some changes while leaving others unstaged, allowing atomic, focused commits."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Adding files to the staging area:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Stage a specific file\ngit add index.html\n\n## Stage all changes in current directory\ngit add .\n\n## Stage all changes everywhere\ngit add -A\n\n## Stage specific file types\ngit add *.js\n\n## Stage changes interactively (choose hunks)\ngit add -p\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Committing staged changes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Commit with inline message\ngit commit -m \"Add user authentication module\"\n\n## Commit all tracked changes (skip staging)\ngit commit -am \"Fix login redirect bug\"\n\n## Commit with verbose output showing diff\ngit commit -v -m \"Update API rate limiting\"\n\n## Amend the last commit (message or files)\ngit commit --amend -m \"Fix: correct typo in auth header\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The three-area model in practice:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Edit a file\necho \"console.log('hello');\" > app.js\n\n## Check status — shows unstaged changes\ngit status\n\n## Stage the file\ngit add app.js\n\n## Check status — shows staged changes\ngit status\n\n## Commit\ngit commit -m \"Initialize app entry point\"\n\n## Check status — clean working tree\ngit status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "013-inspecting-history",
      children: "01.3 Inspecting History"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git log shows the commit history. Understanding how to read and filter it is essential for debugging and code review."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Viewing commit history:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Compact one-line log\ngit log --oneline\n\n## Graph with branches\ngit log --oneline --graph --all\n\n## Last 5 commits\ngit log -5\n\n## Show file changes per commit\ngit log --stat\n\n## Show actual diffs\ngit log -p\n\n## Filter by author\ngit log --author=\"Alice\"\n\n## Filter by date\ngit log --since=\"2024-01-01\" --until=\"2024-06-01\"\n\n## Search commit messages\ngit log --grep=\"fix\" --oneline\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparing changes with diff:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Unstaged changes (working dir vs staging)\ngit diff\n\n## Staged changes (staging vs last commit)\ngit diff --staged\n\n## Diff between two commits\ngit diff abc1234 def5678\n\n## Diff between branches\ngit diff main..feature-branch\n\n## Diff showing only filenames\ngit diff --name-only\n\n## Diff with word-level changes\ngit diff --word-diff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inspecting specific commits:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Show a commit's details and diff\ngit show abc1234\n\n## Show commit stats only\ngit show --stat abc1234\n\n## Show the contents of a file at a specific commit\ngit show abc1234:path/to/file.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "014-undoing-changes",
      children: "01.4 Undoing Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mistakes happen. Git provides multiple tools to undo changes, each with different safety levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discarding unstaged changes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Discard changes in a specific file\ngit restore index.html\n\n## Discard all working directory changes\ngit restore .\n\n## Restore a file from last commit\ngit restore --source=HEAD~2 path/to/file.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unstaging files:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Unstage a specific file (keeps working dir changes)\ngit restore --staged index.html\n\n## Unstage all files\ngit restore --staged .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resetting commits (use with caution):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Soft reset: move HEAD, keep staged changes\ngit reset --soft HEAD~1\n\n## Mixed reset (default): unstage changes, keep in working dir\ngit reset HEAD~1\n\n## Hard reset: discard everything (DANGEROUS)\ngit reset --hard HEAD~1\n\n## Reset to a specific commit\ngit reset --hard abc1234\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovering with reflog:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## View the reflog (safety net for lost commits)\ngit reflog\n\n## Recover a \"lost\" commit\ngit reset --hard HEAD@{2}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "015-gitignore",
      children: "01.5 .gitignore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), " file tells Git which files and directories to ignore. This prevents generated files, secrets, and dependencies from being tracked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating a .gitignore:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Create a .gitignore file\ntouch .gitignore\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common .gitignore patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gitignore",
        children: "\n## Dependencies\nnode_modules/\nvenv/\n__pycache__/\n\n## Build output\ndist/\nbuild/\n*.o\n*.class\n\n## Environment files\n.env\n.env.local\n.env.*.local\n\n## IDE files\n.vscode/\n.idea/\n*.swp\n*.swo\n\n## OS files\n.DS_Store\nThumbs.db\n\n## Logs\n*.log\nlogs/\n\n## Coverage reports\ncoverage/\nhtmlcov/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gitignore",
        children: "\n## Ignore all .log files\n*.log\n\n## But keep important.log\n!important.log\n\n## Ignore all files in temp/ directory\ntemp/\n\n## Ignore build/ at root only (not sub/build/)\n/build\n\n## Ignore TODO files in root and subdirs\n/**/TODO\n\n## Ignore files ending in .bak\n*~\n\n## Ignore files with spaces in name\n\"My Documents/\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Removing tracked files from Git (after adding to .gitignore):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Remove file from Git but keep on disk\ngit rm --cached secret.env\n\n## Remove directory from Git but keep locally\ngit rm -r --cached node_modules/\n\n## Commit the removal\ngit commit -m \"Remove tracked secrets and dependencies\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-4",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "016-real-world-best-practices",
      children: "01.6 Real-World Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Atomic commits:"
      }), " Each commit should represent one logical change. This makes code review easier and bisection reliable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Bad: one massive commit\ngit add .\ngit commit -m \"Update everything\"\n\n## Good: separate logical changes\ngit add src/auth.ts src/auth.test.ts\ngit commit -m \"Add JWT authentication with tests\"\n\ngit add src/api/routes.ts\ngit commit -m \"Add protected API routes\"\n\ngit add README.md\ngit commit -m \"Update README with auth setup instructions\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Commit message convention (Conventional Commits):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "<type>(<scope>): <description>\n\n[optional body]\n\n[optional footer]\n```text\n\n```bash\ngit commit -m \"feat(auth): add OAuth2 Google login\"\ngit commit -m \"fix(api): handle null response from payment gateway\"\ngit commit -m \"docs(readme): add installation steps\"\ngit commit -m \"refactor(db): simplify query builder\"\ngit commit -m \"test(auth): add edge case for expired tokens\"\ngit commit -m \"chore(deps): upgrade axios to 1.6.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Commit message rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use imperative mood: \"Add feature\" not \"Added feature\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep subject line under 72 characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capitalize the subject line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No period at the end of the subject"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use body to explain \"what\" and \"why\", not \"how\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git tracks changes in a three-area model: working directory, staging area, repository"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git init"
        }), " creates a new repository; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        }), " copies an existing one"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git add"
        }), " stages files; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit"
        }), " records staged snapshots"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git status"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git diff"
        }), " are your primary inspection tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git restore"
        }), " undoes working directory changes; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git restore --staged"
        }), " unstages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git reset"
        }), " moves HEAD (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--soft"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mixed"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--hard"
        }), " carefully)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " prevents files from being tracked — configure it early"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write atomic commits with conventional commit messages"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git reflog"
        }), " is your safety net for recovering \"lost\" commits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always review changes before staging with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git diff"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starting a project"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git init"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".gitignore"
            }), " immediately"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committing without .gitignore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Daily work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small, frequent atomic commits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One giant end-of-day commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commit messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conventional format with scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"fix stuff\" or \"update\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reviewing changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git diff --staged"
            }), " before committing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blindly staging everything"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undoing mistakes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git restore"
            }), " for files, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git reset"
            }), " for commits"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git reset --hard"
            }), " without checking reflog"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finding bugs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git log --oneline"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git bisect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manually reading every commit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between git reset --soft, --mixed, and --hard?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "--soft"
          }), " moves HEAD but keeps changes staged. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "--mixed"
          }), " (default) moves HEAD and unstages changes but keeps them in the working directory. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "--hard"
          }), " moves HEAD and.\ndiscards all changes permanently. Use --soft for amending commits, --mixed for reorganizing, and --hard only when you're certain you want to discard changes."]
        }), (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Soft: keeps changes staged\ngit reset --soft HEAD~1\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "mixed-unstages-but-keeps-files",
              children: "Mixed: unstages but keeps files"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "git reset HEAD~1"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "hard-discloses-everything",
              children: "Hard: discloses everything"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git reset --hard HEAD~1"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the three areas of Git (working directory, staging area, repository).\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "working directory"
          }), " is your project's files on disk. The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "staging area (index)"
          }), " is a preparation zone where you select which changes to include in the next commit. The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "repository (.git)"
          }), " stores the permanent history of committed snapshots. Files flow:.\nWorking Directory → (git add) → Staging Area → (git commit) → Repository. This design lets you craft precise,.\natomic commits rather than dumping all changes at once."]
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
      "data-qid": "git01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you recover a commit that was accidentally reset?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git reflog"
          }), " to find the lost commit hash. The reflog tracks every movement of HEAD. Once you find the hash, use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git reset --hard <hash>"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git cherry-pick <hash>"
          }), " to restore it. Reflog entries expire after 90 days by default."]
        }), (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Find the lost commit\ngit reflog\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "restore-it",
              children: "Restore it"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git reset --hard abc1234"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Write a proper commit message for adding rate limiting to an API.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Using conventional commits format:"
        }), (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["feat(api): add rate limiting middleware\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Implement token bucket algorithm for request throttling"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Default limit: 100 requests per minute per IP"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add X-RateLimit-Remaining header to responses"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Return 429 Too Many Requests when exceeded"
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Closes #234"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What does .gitignore do and what happens if you add a file after .gitignore?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [".gitignore tells Git to skip tracking files matching its patterns. However, if a file is already tracked before adding it to .gitignore, Git continues tracking it. You must explicitly untrack it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git rm --cached <file>"
          }), " for .gitignore to take effect on that file."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# File is tracked, .gitignore won't help\ngit rm --cached secret.env\ngit commit -m \"Stop tracking secret.env\""
          })
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
      }), ": Which command stages all modified and new files in the current directory?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) git commit -a\nb) git add .\nc) git add -A\nd) Both b and c"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add ."
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add -A"
          }), " stage all changes. The difference: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add ."
          }), " stages changes in the current directory and below, while ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add -A"
          }), " stages changes everywhere in the repo. At the repo root they behave identically."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is the correct order of the Git workflow?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) commit → add → edit\nb) edit → commit → add\nc) edit → add → commit\nd) add → edit → commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The standard workflow is: edit files → stage changes with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add"
          }), " → commit with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git commit"
          }), ". You edit working files, selectively stage what you want, then commit a snapshot of staged changes."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which command shows the differences between the staging area and the last commit?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) git diff\nb) git diff --staged\nc) git diff HEAD\nd) git show"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git diff"
          }), " shows working directory vs staging area. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git diff --staged"
          }), " (or --cached) shows staging area vs last commit. This is the diff that will be included in your next commit."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What happens when you run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git commit --amend"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Creates a new branch with the changes\nb) Deletes the last commit entirely\nc) Modifies the last commit with new changes or message\nd) Reverts the last commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git commit --amend"
          }), " modifies the most recent commit. You can change the message, add forgotten files, or both. It creates a new commit hash that replaces the previous one. Never amend commits that have been pushed to a shared branch."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": In .gitignore, what does the pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.log"
      }), " do?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Ignores only files named \"*.log\"\nb) Ignores all files ending in .log\nc) Ignores the log directory\nd) Ignores all files containing \"log\" in the name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git01-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*.log"
          }), " pattern uses a wildcard that matches any characters before \".log\". It ignores all files with the .log extension in any directory. To ignore only in root, use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/*.log"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-tips",
      children: "Practical Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git status"
        }), " before committing to verify what will be included"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -p"
        }), " to stage parts of files selectively — great for separating mixed changes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write commit messages in imperative mood: \"Add feature\" not \"Added feature\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep commits atomic: one logical change per commit for easier review and bisection"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log --oneline --graph"
        }), " for a compact visual history of branches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set up a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " at project start — adding it later requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git rm --cached"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding git linux cli is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to git linux cli.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": git linux cli concepts are independent of each other.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — Most concepts build on each other and are interconnected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 5"
      }), ": Real-world applications often combine multiple concepts from this chapter.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Production systems use combinations of these fundamental concepts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 1"
      }), ": The key concept in this chapter is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Review the chapter's Learning Objectives for the specific answer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 2"
      }), ": In git linux cli, the time complexity of the basic operation is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Depends on the specific operation — check the Theory section]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1"
      }), ": How would you apply the concepts from this chapter in a real AI engineering project?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output 1"
      }), ": What is the time complexity of the main algorithm discussed in this chapter?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Check the Theory section for the specific complexity analysis]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Initialize a new Git repository, create three files, stage them individually, and commit each with a meaningful message. Verify with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git log"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), " that excludes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.env"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist/"
      }), ". Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), " directory and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " file, verify they are ignored, then test that a tracked file added before ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), " still shows in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git status"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Make a commit, then accidentally run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git reset --hard HEAD~1"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git reflog"
      }), " to find and restore the lost commit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Set up a project with 10 commits. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git rebase -i"
      }), " to squash the last 5 commits into one. Then use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git reflog"
      }), " to recover the original state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Committing too frequently without meaningful messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not using .gitignore for sensitive files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Force pushing to shared branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding staging area"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to pull before pushing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "git init → initialize repo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "git add → stage changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "git commit → save snapshot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "git status → check state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "git log → view history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".gitignore → exclude files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit often, push after review"
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
            children: "Explain the core idea of Git Basics in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Git Basics."
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
            children: "Describe a production bug caused by misunderstanding Git Basics. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Git Basics from 10 users to 10 million?"
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
            children: "Compare Git Basics with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Git Basics."
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
            children: "How does Git Basics behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Git Basics run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Git Basics that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Git Basics explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Git Basics\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Git Basics to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Git Basics (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Git Basics and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Git Basics-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Git Basics interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Git Basics in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse-1",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Git Basics builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Git Basics before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Git Basics is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Git Basics in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Git Basics chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Git Basics is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Git Basics is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Git Basics is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Git Basics issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Git Basics in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Git Basics that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Git Basics is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Git Basics in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Git Basics and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Git Basics on an empty input?"
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
            children: "Complete Medium exercises, explain Git Basics to someone else"
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
        children: "Always write a one-line example of Git Basics from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Git Basics when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Git Basics twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Git Basics snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Git Basics listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Git Basics to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Git Basics by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Git Basics to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Git Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Git Basics (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Git Basics problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Git Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Git Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Git Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Git Basics fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Git Basics is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Git Basics is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Git Basics, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Git Basics asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git Basics is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Git Basics."
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
        children: "Git Basics emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Git Basics today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Git Basics — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Git Basics changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Git Basics."
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
        children: "Git Basics appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Git Basics helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Git Basics concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Git Basics skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Git Basics to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Basics is like a recipe"
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
        }), " — this chapter contributes the Git Basics skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-01gitbasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command stages all modified and new files in the current directory?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "d"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-01gitbasics-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the correct order of the Git workflow?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-01gitbasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command shows the differences between the staging area and the last commit?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-01gitbasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What happens when you run git commit --amend?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-01gitbasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    In .gitignore, what does the pattern .log do?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Git Basics (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Git Basics (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Git Basics-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Git Basics in production at scale"
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
        children: "Testing: pytest for unit tests of Git Basics code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Git Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Git Basics code."]
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
        }), " or your IDE's debugger to step through the Git Basics example code."]
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
        children: "Explain Git Basics in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Git Basics."
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
        children: "Tell me about a time you debugged a Git Basics problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Git Basics is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Git Basics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Git Basics logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Git Basics without notes"
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
        }), ": a small team uses Git Basics daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Git Basics patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Git Basics principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Git Basics shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Git Basics to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/02-git-branching",
        children: "Git Branching"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git Basics, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Git Basics depends on input size and distribution — always benchmark for your own data."
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