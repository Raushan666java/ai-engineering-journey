"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52751],{

/***/ 79077
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_01_docker_basics_md_f91_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-01-docker-basics-md-f91.json
const site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_01_docker_basics_md_f91_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/01-docker-basics","title":"Docker Basics — Containers, Images, and Docker Engine","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":74,"frontMatter":{"id":"01-docker-basics","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics","title":"Docker Basics — Containers, Images, and Docker Engine","sidebar_label":"Docker Basics — Containers, Images, and Docker Engine","sidebar_position":74},"sidebar":"coursesSidebar","previous":{"title":"06 — Docker, Kubernetes & Cloud","permalink":"/ai-engineering-journey/ai-engineering-placement"},"next":{"title":"Docker Compose — Multi-Container Orchestration","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics.md


const frontMatter = {
	id: '01-docker-basics',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics',
	title: 'Docker Basics — Containers, Images, and Docker Engine',
	sidebar_label: 'Docker Basics — Containers, Images, and Docker Engine',
	sidebar_position: 74
};
const contentTitle = 'Docker Basics — Containers, Images, and Docker Engine';

const assets = {

};



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
  "value": "1.1 Containers vs Virtual Machines",
  "id": "11-containers-vs-virtual-machines",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "1.2 Docker Architecture",
  "id": "12-docker-architecture",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "1.3 Working with Docker Images",
  "id": "13-working-with-docker-images",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "1.4 Dockerfiles",
  "id": "14-dockerfiles",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "1.5 Container Lifecycle",
  "id": "15-container-lifecycle",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-4",
  "level": 2
}, {
  "value": "1.6 Docker Networking",
  "id": "16-docker-networking",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-5",
  "level": 2
}, {
  "value": "1.7 Volumes and Bind Mounts",
  "id": "17-volumes-and-bind-mounts",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-6",
  "level": 2
}, {
  "value": "1.8 Docker Compose Basics",
  "id": "18-docker-compose-basics",
  "level": 3
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "VM — full OS image",
  "id": "vm--full-os-image",
  "level": 2
}, {
  "value": "Ubuntu Server + Python: ~2 GB</code></pre>",
  "id": "ubuntu-server--python-2-gb",
  "level": 2
}, {
  "value": "Inefficient: copies everything first, cache invalidated",
  "id": "inefficient-copies-everything-first-cache-invalidated",
  "level": 2
}, {
  "value": "docker run my-image python other.py  # runs other.py",
  "id": "docker-run-my-image-python-otherpy---runs-otherpy",
  "level": 2
}, {
  "value": "ENTRYPOINT fixed, CMD as default args",
  "id": "entrypoint-fixed-cmd-as-default-args",
  "level": 2
}, {
  "value": "docker run my-image other.py  # runs python other.py",
  "id": "docker-run-my-image-otherpy---runs-python-otherpy",
  "level": 2
}, {
  "value": "docker run my-image  # runs python app.py</code></pre>",
  "id": "docker-run-my-image---runs-python-apppy",
  "level": 2
}, {
  "value": "Runtime stage — only the binary",
  "id": "runtime-stage--only-the-binary",
  "level": 2
}, {
  "value": "Check exit code",
  "id": "check-exit-code",
  "level": 2
}, {
  "value": "docker run with env file",
  "id": "docker-run-with-env-file",
  "level": 2
}, {
  "value": "docker-compose.yml",
  "id": "docker-composeyml",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
        id: "docker-basics--containers-images-and-docker-engine",
        children: "Docker Basics — Containers, Images, and Docker Engine"
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
            children: "Understand the difference between containers and virtual machines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install Docker Engine and run your first container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work with Docker images: pull, list, tag, and remove"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Dockerfiles and build custom images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage container lifecycle: run, stop, exec, logs, inspect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Docker networking and volumes for data persistence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containers vs VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-level virtualization vs hardware virtualization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engine, daemon, CLI, registry, objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working with Images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pull, push, tag, rmi, layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dockerfiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FROM, RUN, COPY, CMD, ENTRYPOINT, multi-stage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "run, start, stop, rm, exec, logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bridge, host, none, custom networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volumes and Bind Mounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "persist, share, backup data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "multi-container with docker-compose.yml"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Install Docker] --> B[Understand Architecture]\n    B --> C[Pull & Run Images]\n    C --> D[Write Dockerfiles]\n    D --> E[Build Custom Images]\n    E --> F[Manage Containers]\n    F --> G[Networking]\n    G --> H[Volumes]\n    H --> I[Docker Compose]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker is the standard for packaging and deploying AI applications — from training environments with GPU passthrough to production inference services at scale. Without containers,.\nthe \"it works on my machine\" problem plagues ML teams, making model deployment unreliable and slow. This chapter covers containers, images,.\nDockerfiles, and Docker Compose — the essential skills for any AI engineer who needs to ship models from laptop to production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic command line / terminal proficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of what a server and process are"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with Python or TypeScript project structures"
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
      id: "11-containers-vs-virtual-machines",
      children: "1.1 Containers vs Virtual Machines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers provide OS-level virtualization by sharing the host kernel, while VMs use a hypervisor to run full guest operating systems. This fundamental difference makes containers lighter, faster, and more resource-efficient."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Check Docker version\ndocker --version\ndocker info\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Virtual Machine"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seconds to minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shares host kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Own kernel per VM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10s-100s per host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 per host"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why containers for AI engineering"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproducible environments for model training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent deployment across dev, staging, production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microservices architecture for ML pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU passthrough for training containers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph VM[\"Virtual Machines\"]\n        V1[App A<br/>Libs] --> G1[Guest OS]\n        V2[App B<br/>Libs] --> G2[Guest OS]\n        G1 --> H1[Hypervisor]\n        G2 --> H1\n        H1 --> H2[Host OS]\n        H2 --> H3[Hardware]\n    end\n    subgraph Container[\"Containers\"]\n        C1[App A] --> D1[Docker Engine]\n        C2[App B] --> D1\n        D1 --> D2[Host OS]\n        D2 --> D3[Hardware]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-docker-architecture",
      children: "1.2 Docker Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker follows a client-server architecture with three main components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker Daemon (dockerd)"
      }), ": Background service that manages Docker objects — images, containers, networks, volumes. Listens on a Unix socket or network port."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker Client (docker)"
      }), ": CLI tool that sends commands to the daemon using the Docker API. Most commands map directly to REST API calls."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker Registry (Docker Hub)"
      }), ": Repository for Docker images. Default public registry is Docker Hub. Private registries include AWS ECR, Google Artifact Registry, and self-hosted registries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Docker daemon info\ndocker info\n\n## Show running containers\ndocker ps\n\n## Show all containers (including stopped)\ndocker ps -a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Docker objects"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    D[Docker Daemon] --> I[Images]\n    D --> C[Containers]\n    D --> N[Networks]\n    D --> V[Volumes]\n    I --> R[Registry]\n    C --> I\n    C --> N\n    C --> V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Images are read-only templates. Containers are runnable instances of images. Each container gets its own filesystem, network stack, and process tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-working-with-docker-images",
      children: "1.3 Working with Docker Images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Images consist of read-only layers stacked on top of each other. Each RUN, COPY, or ADD instruction adds a new layer. Layers are cached and reused across builds."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Pull an image\ndocker pull nginx:latest\ndocker pull python:3.11-slim\n\n## List images\ndocker images\n\n## or\ndocker image ls\n\n## Tag an image\ndocker tag nginx:latest my-nginx:v1\n\n## Push to registry\ndocker push my-nginx:v1\n\n## Remove images\ndocker rmi nginx:latest\ndocker image prune  # remove dangling images\n\n## Show image layers\ndocker history nginx:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image naming convention"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "[registry/][user/]repository[:tag]\n```text\n\nExamples: `python:3.11-slim`, `nginx:latest`, `myregistry.com/team/app:v2`\n\n**Layers and caching**: Docker caches each layer after a successful build. If a layer hasn't changed, Docker reuses the cached version. Place instructions that change less frequently (system packages) earlier in the Dockerfile.\n\n```bash\n\n## Save and load images as tar files\ndocker save -o my-image.tar my-image:tag\ndocker load -i my-image.tar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-dockerfiles",
      children: "1.4 Dockerfiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Dockerfile is a text file with instructions for building an image."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\n## Dockerfile for a Python AI service\nFROM python:3.11-slim AS builder\n\nWORKDIR /app\n\n## Install system dependencies\nRUN apt-get update && apt-get install -y \\\n    gcc \\\n    && rm -rf /var/lib/apt/lists/*\n\n## Copy requirements first (leverage layer caching)\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n## Copy application code\nCOPY src/ ./src/\n\n## Final stage — multi-stage build\nFROM python:3.11-slim AS runtime\n\nWORKDIR /app\nCOPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages\nCOPY --from=builder /app/src ./src\n\nEXPOSE 8000\n\nCMD [\"python\", \"-m\", \"uvicorn\", \"src.main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Dockerfile instructions"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FROM python:3.11-slim"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WORKDIR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WORKDIR /app"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COPY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COPY . ."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RUN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RUN pip install -r requirements.txt"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "EXPOSE 8000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CMD [\"python\", \"app.py\"]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTRYPOINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ENTRYPOINT [\"python\"]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ENV PYTHONUNBUFFERED=1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build-time variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ARG VERSION=latest"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-stage builds"
      }), " keep final images small by separating build and runtime stages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Build an image\ndocker build -t my-app:v1 .\n\n## Build with build args\ndocker build --build-arg VERSION=2.0 -t my-app:v2 .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-container-lifecycle",
      children: "1.5 Container Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Run a container\ndocker run -d --name web -p 8080:80 nginx:latest\n\n## Run interactively\ndocker run -it --name debug python:3.11-slim bash\n\n## List containers\ndocker ps           # running only\ndocker ps -a        # all containers\n\n## Stop a container\ndocker stop web\n\n## Start a stopped container\ndocker start web\n\n## Restart\ndocker restart web\n\n## Remove a container\ndocker rm web\ndocker rm -f web    # force remove running container\ndocker container prune  # remove all stopped containers\n\n## Execute command in running container\ndocker exec -it web bash\n\n## View logs\ndocker logs web\ndocker logs -f web  # follow mode\n\n## Inspect container details\ndocker inspect web\n\n## View resource usage\ndocker stats web\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Container states"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\n    [*] --> Created: docker create\n    Created --> Running: docker start\n    Running --> Paused: docker pause\n    Paused --> Running: docker unpause\n    Running --> Stopped: docker stop\n    Running --> Exited: process dies\n    Stopped --> Running: docker start\n    Stopped --> [*]: docker rm\n    Exited --> [*]: docker rm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-4",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-docker-networking",
      children: "1.6 Docker Networking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker provides several network drivers for different isolation levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## List networks\ndocker network ls\n\n## Create custom network\ndocker network create --driver bridge my-network\n\n## Run container on specific network\ndocker run -d --name app --network my-network my-app\n\n## Connect container to network\ndocker network connect my-network web\n\n## Inspect network\ndocker network inspect my-network\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network drivers"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Driver"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for single host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containers can communicate via IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No network isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container uses host network stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completely isolated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-host (Swarm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containers across hosts communicate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS resolution"
      }), ": Containers on the same user-defined bridge network can resolve each other by container name, not just IP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Port mapping\ndocker run -d -p 8080:80 -p 443:443 nginx\n\n## HOST:CONTAINER\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-5",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-volumes-and-bind-mounts",
      children: "1.7 Volumes and Bind Mounts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data persistence in Docker is managed through volumes and bind mounts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Create a volume\ndocker volume create data-volume\n\n## Run with volume\ndocker run -d --name db -v data-volume:/var/lib/postgresql/data postgres:15\n\n## Bind mount (host directory)\ndocker run -d --name dev -v $(pwd):/app python:3.11-slim python /app/script.py\n\n## List volumes\ndocker volume ls\n\n## Remove volume\ndocker volume rm data-volume\ndocker volume prune\n\n## Copy files between container and host\ndocker cp file.txt container:/app/\ndocker cp container:/app/output.txt .\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Volume types"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Managed by"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/var/lib/docker/volumes/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy — copy from volume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bind mount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any host path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tmpfs mount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not persistent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use named volumes for database data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use bind mounts for development (hot-reload)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never store sensitive data in image layers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mount"
        }), " syntax for more explicit configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Using --mount syntax\ndocker run -d \\\n    --mount type=volume,source=data,target=/data \\\n    --mount type=bind,source=$(pwd),target=/app \\\n    my-image\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-6",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-docker-compose-basics",
      children: "1.8 Docker Compose Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker Compose defines multi-container applications in a YAML file."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## docker-compose.yml\nversion: \"3.9\"\n\nservices:\n  api:\n    build:\n      context: .\n      dockerfile: Dockerfile.dev\n    ports:\n      - \"8000:8000\"\n    volumes:\n      - .:/app\n    environment:\n      - DATABASE_URL=postgresql://postgres:password@db:5432/app\n    depends_on:\n      - db\n      - redis\n\n  db:\n    image: postgres:15\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    environment:\n      POSTGRES_PASSWORD: password\n      POSTGRES_DB: app\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379:6379\"\n\nvolumes:\n  postgres_data:\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Compose commands"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Start services\ndocker compose up\ndocker compose up -d  # detached\n\n## Build and start\ndocker compose up --build\n\n## Stop services\ndocker compose down\n\n## Stop and remove volumes\ndocker compose down -v\n\n## View logs\ndocker compose logs -f\n\n## Scale a service\ndocker compose up -d --scale api=3\n\n## Execute in running service\ndocker compose exec api bash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[docker-compose.yml] --> B[docker compose up]\n    B --> C[Create network]\n    B --> D[Pull/Build images]\n    B --> E[Create containers]\n    E --> F[api:8000]\n    E --> G[db:5432]\n    E --> H[redis:6379]\n    F --> G\n    F --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of Docker like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shipping containers"
      }), " on a cargo ship:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker container"
        }), " = A shipping container — a standardized box that holds your app, its libraries, and everything it needs to run. It doesn't care what's inside; the port crane (Docker Engine) handles it the same way."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker image"
        }), " = The blueprint for a container — a read-only template that says \"put Python 3.11 here, copy the code there, run this command.\" You build images from Dockerfiles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dockerfile"
        }), " = The recipe — step-by-step instructions for building an image. \"Start with this base, install these packages, copy the code.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Compose"
        }), " = The shipping manifest — a document that describes multiple containers (app + database + cache) and how they work together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Volumes"
        }), " = Storage containers — persistent boxes that stay even when the shipping container is unloaded. Your data survives container restarts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This helps because the entire Docker revolution came from the shipping industry's insight: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "standardize the container, not the contents"
      }), ". Just as you can ship anything in a standard 20-foot box, you can run any app in a standard Docker container regardless of the language or framework inside."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While Docker is primarily managed via CLI, TypeScript can interact with the Docker daemon programmatically using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dockerode"
      }), " library:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import Docker from \"dockerode\";\n\nconst docker = new Docker({ socketPath: \"/var/run/docker.sock\" });\n\nasync function listContainers(): Promise<void> {\n  const containers = await docker.listContainers({ all: true });\n  for (const c of containers) {\n    console.log(`${c.Id.slice(0, 12)} — ${c.Image} — ${c.State}`);\n  }\n}\n\nasync function runContainer(image: string, cmd: string[]): Promise<void> {\n  const container = await docker.createContainer({\n    Image: image,\n    Cmd: cmd,\n    AttachStdout: true,\n  });\n  await container.start();\n  const stream = await container.logs({ stdout: true, follow: true });\n  stream.pipe(process.stdout);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containers share the host kernel, making them lighter and faster than VMs; they start in milliseconds and consume minimal resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker uses a client-server architecture with the daemon (dockerd), CLI (docker), and registry (Docker Hub)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Images are read-only templates composed of layers; each Dockerfile instruction creates a new layer that can be cached"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds produce smaller production images by separating build and runtime stages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container lifecycle: create, start, pause, stop, restart, remove — managed through simple CLI commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker networking allows containers to communicate via bridge, host, overlay, or none networks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Volumes provide persistent storage independent of container lifecycle; bind mounts enable host-container file sharing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose defines multi-container applications in YAML, enabling orchestration with a single command"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer caching optimizes builds: place infrequently-changing instructions early in the Dockerfile"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Best practices include using ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        }), ", minimal base images, non-root users, and health checks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Development environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind mount source code + hot-reload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebuilding image for every code change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage build with slim base image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large images with build tools included"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind mount (permission issues)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-service app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose with depends_on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running services manually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker secrets or env_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoding in Dockerfile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--gpus all"
            }), " flag"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-only when GPU needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCHECK instruction in Dockerfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No health monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between a container and a virtual machine?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Containers share the host OS kernel and run as isolated processes in user space, while VMs run a full guest OS on top of a hypervisor. This makes containers more lightweight — they start in milliseconds, use MB instead of GB, and achieve higher density per host."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Containers provide process-level isolation (cgroups, namespaces), whereas VMs provide hardware-level isolation. Containers are ideal for microservices and stateless applications, while VMs offer stronger isolation for multi-tenant environments."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Container — shares host kernel\nFROM python:3.11-slim  # ~125 MB\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "vm--full-os-image",
              children: "VM — full OS image"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "ubuntu-server--python-2-gb",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ubuntu Server + Python: ~2 GB"
            })
          })]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain Docker's layered filesystem. How does it improve build performance?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Each Dockerfile instruction (FROM, RUN, COPY) creates a new read-only layer. Layers are cached — if a layer hasn't changed since the last build, Docker reuses it from cache."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache optimization"
          }), ": Order instructions so that the most stable layers come first. Copy dependencies (package.json, requirements.txt) before source code so dependency installation is cached."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Efficient: cache npm install unless package.json changes\nCOPY package.json package-lock.json ./\nRUN npm ci\nCOPY . .\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "inefficient-copies-everything-first-cache-invalidated",
              children: "Inefficient: copies everything first, cache invalidated"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COPY . .\nRUN npm ci"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Layer sharing"
          }), ": If two images share the same base (e.g., both FROM python:3.11-slim), the base layer is stored once and shared, saving disk space."]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between CMD and ENTRYPOINT in a Dockerfile?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CMD"
          }), " provides default arguments for the container. It can be overridden when running the container: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker run image command"
          }), " replaces CMD."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ENTRYPOINT"
          }), " defines the executable that always runs. Arguments passed to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker run"
          }), " are appended to ENTRYPOINT."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# CMD overridden\nCMD [\"python\", \"app.py\"]\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "docker-run-my-image-python-otherpy---runs-otherpy",
              children: "docker run my-image python other.py  # runs other.py"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "entrypoint-fixed-cmd-as-default-args",
              children: "ENTRYPOINT fixed, CMD as default args"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ENTRYPOINT [\"python\"]\nCMD [\"app.py\"]"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "docker-run-my-image-otherpy---runs-python-otherpy",
              children: "docker run my-image other.py  # runs python other.py"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "docker-run-my-image---runs-python-apppy",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run my-image  # runs python app.py"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<p><strong>Best practice</strong>: Use ENTRYPOINT for the main executable and CMD for default arguments.</p>\n"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does Docker networking work? Explain bridge, host, and overlay modes.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bridge"
          }), " (default): Each container gets a virtual Ethernet interface connected to the bridge. Containers can communicate via IP, and can resolve each other by name on user-defined bridges."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host"
          }), ": Container uses the host's network stack directly. No network isolation — the container binds directly to host ports. Best for performance-critical applications."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Overlay"
          }), ": Used in Docker Swarm for multi-host communication. Creates a distributed network across all Swarm nodes, enabling containers on different hosts to communicate."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "None"
          }), ": No network access. Useful for offline batch jobs."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docker network create --driver overlay my-overlay\ndocker service create --network my-overlay my-service"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What are Docker volumes and why are they important?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Volumes are the preferred mechanism for persisting data generated and used by Docker containers. They are managed by Docker and stored in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/var/lib/docker/volumes/"
          }), "."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key features"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Data persists when container is removed"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can be shared across multiple containers"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Easy to backup and migrate"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Driver support for remote storage (NFS, cloud)"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "When to use volumes vs bind mounts"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Volumes: production databases, configuration data, any data that Docker should manage"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bind mounts: development hot-reload, sharing host config files"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docker volume create app-data\ndocker run -v app-data:/app/data my-image"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is a multi-stage build and why would you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "A multi-stage build uses multiple FROM statements in a single Dockerfile. Each FROM begins a new stage. You can selectively copy artifacts from one stage to another, leaving behind build tools and intermediate files."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Build stage\nFROM golang:1.21 AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "runtime-stage--only-the-binary",
              children: "Runtime stage — only the binary"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FROM alpine:latest\nCOPY --from=builder /app/myapp /usr/local/bin/\nCMD [\"myapp\"]"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Benefits"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Smaller final images (GB -> MB)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Smaller attack surface (fewer tools in runtime)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Faster deploys and pulls"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No need for separate Dockerfiles for build and runtime"
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you debug a container that fails to start?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Several techniques for debugging failing containers:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Check logs"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker logs container_name"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Override entrypoint"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --entrypoint bash my-image"
            }), " to inspect interactively"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inspect"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker inspect container_name"
            }), " for exit code, mounts, network"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Run with same config"
            }), ": Replicate the run command with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rm -it"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Check Docker events"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker events --filter container=name"
            })]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Debug with interactive shell\ndocker run -it --entrypoint sh my-image\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "check-exit-code",
              children: "Check exit code"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker inspect --format '{{.State.ExitCode}}' container_name"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: Explain the purpose of a .dockerignore file.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".dockerignore"
          }), " file specifies which files and directories to exclude from the Docker build context. This improves build performance and security by:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reducing context size sent to Docker daemon"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preventing secrets (env files, SSH keys, tokens) from being included in images"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Avoiding accidental inclusion of node_modules, .git, etc."
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# .dockerignore\n.git\nnode_modules\n.env\n*.md\ndist\n__pycache__\n*.pyc\n.vscode"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Without a ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".dockerignore"
          }), ", building in a project directory with gigabytes of dependencies will be extremely slow."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle environment variables in Docker?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multiple ways to pass environment variables:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "In Dockerfile"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ENV MY_VAR=value"
            }), " — baked into image, not ideal for secrets"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "At runtime"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run -e MY_VAR=value"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "From file"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --env-file .env"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "In Compose"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "environment:"
            }), " section or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "env_file:"
            })]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# .env file\nDATABASE_URL=postgresql://user:pass@localhost:5432/db\nAPI_KEY=sk-abc123\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "docker-run-with-env-file",
              children: "docker run with env file"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "docker run --env-file .env my-app"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "docker-composeyml",
              children: "docker-compose.yml"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "services:\napp:\nenv_file: .env"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security"
          }), ": For production, use Docker secrets or external secret managers (HashiCorp Vault, AWS Secrets Manager). Never hardcode secrets in Dockerfiles."]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What are Docker best practices for production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production Docker best practices:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Use specific tags"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python:3.11-slim"
            }), " not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python:latest"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-stage builds"
            }), ": Keep production images small"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-root user"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "USER appuser"
            }), " — reduces security risk"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Health checks"
            }), ": HEALTHCHECK instruction for container orchestration"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-only root filesystem"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --read-only"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource limits"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--memory=512m --cpus=0.5"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging"
            }), ": Write logs to stdout/stderr, not files"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Security scanning"
            }), ": Use Docker Scout, Trivy, or Snyk"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: ".dockerignore"
            }), ": Exclude irrelevant files from build context"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Layer caching"
            }), ": Order Dockerfile instructions for maximum cache reuse"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "# Production-ready Dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsxs)(_components.code, {
              children: ["FROM node:20-alpine\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nEXPOSE 3000\nHEALTHCHECK --interval=30s --timeout=3s CMD wget --no-verbose --tries=1 --spider ", (0,jsx_runtime.jsx)(_components.a, {
                href: "http://localhost:3000/health",
                children: "http://localhost:3000/health"
              }), " || exit 1\nCMD [\"node\", \"dist/server.js\"]"]
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which Docker component is responsible for managing containers, images, and volumes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Docker Client\nb) Docker Daemon\nc) Docker Compose\nd) Docker Hub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Docker Daemon"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The Docker daemon (dockerd) manages all Docker objects. The client sends commands to the daemon via the Docker API."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What instruction in a Dockerfile sets the command that always runs when the container starts?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) CMD\nb) RUN\nc) ENTRYPOINT\nd) START"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) ENTRYPOINT"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ENTRYPOINT defines the executable that always runs. CMD provides default arguments that can be overridden."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which network driver allows a container to use the host's network stack directly?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) bridge\nb) overlay\nc) host\nd) none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) host"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Host mode removes network isolation between the container and the host — the container binds directly to host ports."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the purpose of a .dockerignore file?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Ignore Docker updates\nb) Exclude files from the build context\nc) Ignore container errors\nd) Skip Dockerfile validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Exclude files from the build context"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The .dockerignore file prevents specified files from being sent to the Docker daemon as part of the build context, improving build speed and security."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which command shows resource usage of running containers?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) docker ps\nb) docker stats\nc) docker info\nd) docker inspect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s01-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) docker stats"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "docker stats displays real-time CPU, memory, network I/O, and disk I/O for running containers."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding docker kubernetes cloud is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to docker kubernetes cloud.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": docker kubernetes cloud concepts are independent of each other.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), ": In docker kubernetes cloud, the time complexity of the basic operation is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), " — Run a simple Nginx container on port 8080 and verify it serves the default page. Stop and remove the container."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a Dockerfile for a FastAPI application that uses multi-stage builds, installs dependencies from requirements.txt, runs as a non-root user, and includes a health check."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a docker-compose.yml with a FastAPI app, PostgreSQL database, and Redis. Configure proper depends_on, volumes for persistence, and environment variables."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a Python image that runs a machine learning inference script. The Dockerfile should download model weights at build time (not runtime), use GPU passthrough, and include a health check that pings the model endpoint."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Debug a broken Docker setup: given a Dockerfile that fails to build (provide a buggy Dockerfile with issues like incorrect WORKDIR, missing COPY, base image mismatch), identify and fix all issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "latest"
        }), " tag in production Dockerfiles — always pin specific versions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "python:3.11-slim"
        }), ") for reproducible builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copying source code before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " — invalidates the layer cache and rebuilds dependencies on every code change"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running containers as root — always add a non-root USER for security in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Storing secrets in Dockerfiles or images — use Docker secrets, env_file, or external secret managers instead"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skipping ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        }), " — the build context sends the entire directory including ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " to the daemon"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containers share the host kernel (OS-level virtualization); VMs run full guest OSes (hardware-level virtualization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker architecture: daemon (dockerd) manages objects, CLI (docker) sends commands, registry stores images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Images are read-only layers; each Dockerfile instruction adds a layer; layers are cached across builds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds separate build and runtime stages to produce smaller production images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container states: Created → Running → Paused → Stopped → Removed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Volumes persist data independently of containers; bind mounts enable hot-reload in development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose defines multi-container apps in YAML with automatic networking"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        }), " excludes files from build context; HEALTHCHECK enables orchestrator health monitoring"]
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
            children: "Explain the core idea of Docker Basics — Containers, Images, and Docker Engine in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Docker Basics — Containers, Images, and Docker Engine."
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
            children: "Describe a production bug caused by misunderstanding Docker Basics — Containers, Images, and Docker Engine. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Docker Basics — Containers, Images, and Docker Engine from 10 users to 10 million?"
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
            children: "Compare Docker Basics — Containers, Images, and Docker Engine with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Docker Basics — Containers, Images, and Docker Engine."
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
            children: "How does Docker Basics — Containers, Images, and Docker Engine behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Docker Basics — Containers, Images, and Docker Engine run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Docker Basics — Containers, Images, and Docker Engine that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Docker Basics — Containers, Images, and Docker Engine explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Docker Basics — Containers, Images, and Docker Engine\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Docker Basics — Containers, Images, and Docker Engine to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Docker Basics — Containers, Images, and Docker Engine (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Docker Basics — Containers, Images, and Docker Engine and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Docker Basics — Containers, Images, and Docker Engine-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Docker Basics — Containers, Images, and Docker Engine interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Docker Basics — Containers, Images, and Docker Engine in production today?"
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
        }), " Docker Basics — Containers, Images, and Docker Engine builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Docker Basics — Containers, Images, and Docker Engine before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Docker Basics — Containers, Images, and Docker Engine is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Docker Basics — Containers, Images, and Docker Engine in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Docker Basics — Containers, Images, and Docker Engine chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Docker Basics — Containers, Images, and Docker Engine is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Docker Basics — Containers, Images, and Docker Engine is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Docker Basics — Containers, Images, and Docker Engine is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Docker Basics — Containers, Images, and Docker Engine issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Docker Basics — Containers, Images, and Docker Engine in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Docker Basics — Containers, Images, and Docker Engine that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Docker Basics — Containers, Images, and Docker Engine is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Docker Basics — Containers, Images, and Docker Engine in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Docker Basics — Containers, Images, and Docker Engine and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Docker Basics — Containers, Images, and Docker Engine on an empty input?"
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
            children: "Complete Medium exercises, explain Docker Basics — Containers, Images, and Docker Engine to someone else"
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
        children: "Always write a one-line example of Docker Basics — Containers, Images, and Docker Engine from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Docker Basics — Containers, Images, and Docker Engine when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Docker Basics — Containers, Images, and Docker Engine twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Docker Basics — Containers, Images, and Docker Engine snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Docker Basics — Containers, Images, and Docker Engine listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Docker Basics — Containers, Images, and Docker Engine to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Docker Basics — Containers, Images, and Docker Engine by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Docker Basics — Containers, Images, and Docker Engine to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Docker Basics — Containers, Images, and Docker Engine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Docker Basics — Containers, Images, and Docker Engine (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Docker Basics — Containers, Images, and Docker Engine problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Docker Basics — Containers, Images, and Docker Engine"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Docker Basics — Containers, Images, and Docker Engine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Docker Basics — Containers, Images, and Docker Engine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Docker Basics — Containers, Images, and Docker Engine fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Docker Basics — Containers, Images, and Docker Engine is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Docker Basics — Containers, Images, and Docker Engine is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Docker Basics — Containers, Images, and Docker Engine, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Docker Basics — Containers, Images, and Docker Engine asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Basics — Containers, Images, and Docker Engine is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Docker Basics — Containers, Images, and Docker Engine."
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
        children: "Docker Basics — Containers, Images, and Docker Engine emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Docker Basics — Containers, Images, and Docker Engine today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Docker Basics — Containers, Images, and Docker Engine — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Docker Basics — Containers, Images, and Docker Engine changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Docker Basics — Containers, Images, and Docker Engine."
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
        children: "Docker Basics — Containers, Images, and Docker Engine appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Docker Basics — Containers, Images, and Docker Engine helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Docker Basics — Containers, Images, and Docker Engine concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Docker Basics — Containers, Images, and Docker Engine skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Docker Basics — Containers, Images, and Docker Engine to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Basics — Containers, Images, and Docker Engine is like a recipe"
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
        }), " — this chapter contributes the Docker Basics — Containers, Images, and Docker Engine skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-01dockerbasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which Docker component is responsible for managing containers, images, and volumes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Docker Daemon"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-01dockerbasics-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What instruction in a Dockerfile sets the command that always runs when the container starts?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) ENTRYPOINT"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-01dockerbasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which network driver allows a container to use the host's network stack directly?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) host"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-01dockerbasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the purpose of a .dockerignore file?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Exclude files from the build context"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-01dockerbasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command shows resource usage of running containers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) docker stats"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Docker Basics — Containers, Images, and Docker Engine (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Docker Basics — Containers, Images, and Docker Engine (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Docker Basics — Containers, Images, and Docker Engine-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Docker Basics — Containers, Images, and Docker Engine in production at scale"
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
        children: "Testing: pytest for unit tests of Docker Basics — Containers, Images, and Docker Engine code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Docker Basics — Containers, Images, and Docker Engine"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Docker Basics — Containers, Images, and Docker Engine code."]
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
        }), " or your IDE's debugger to step through the Docker Basics — Containers, Images, and Docker Engine example code."]
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
        children: "Explain Docker Basics — Containers, Images, and Docker Engine in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Docker Basics — Containers, Images, and Docker Engine."
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
        children: "Tell me about a time you debugged a Docker Basics — Containers, Images, and Docker Engine problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Docker Basics — Containers, Images, and Docker Engine is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Docker Basics — Containers, Images, and Docker Engine."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Docker Basics — Containers, Images, and Docker Engine logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Docker Basics — Containers, Images, and Docker Engine without notes"
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
        }), ": a small team uses Docker Basics — Containers, Images, and Docker Engine daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Docker Basics — Containers, Images, and Docker Engine patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Docker Basics — Containers, Images, and Docker Engine principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Docker Basics — Containers, Images, and Docker Engine shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Docker Basics — Containers, Images, and Docker Engine to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose",
        children: "Docker Compose — Multi-Container Orchestration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Basics — Containers, Images, and Docker Engine, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Docker Basics — Containers, Images, and Docker Engine depends on input size and distribution — always benchmark for your own data."
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