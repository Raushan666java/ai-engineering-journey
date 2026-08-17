"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[43683],{

/***/ 42137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_professional_knowledge_08_cloud_computing_md_dde_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-professional-knowledge-08-cloud-computing-md-dde.json
const site_docs_courses_professional_knowledge_08_cloud_computing_md_dde_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/professional-knowledge/08-cloud-computing","title":"Chapter 8: Cloud Computing — Exam Quick Revision","description":"Learning Objectives","source":"@site/docs/courses/professional-knowledge/08-cloud-computing.md","sourceDirName":"courses/professional-knowledge","slug":"/professional-knowledge/08-cloud-computing","permalink":"/ai-engineering-journey/professional-knowledge/08-cloud-computing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-cloud-computing","slug":"/professional-knowledge/08-cloud-computing","title":"Chapter 8: Cloud Computing — Exam Quick Revision","sidebar_label":"Chapter 8: Cloud Computing — Exam Quick Revision","sidebar_position":8},"sidebar":"course-professional-knowledge","previous":{"title":"Chapter 7: Web Technologies — Exam Quick Revision","permalink":"/ai-engineering-journey/professional-knowledge/07-web-technologies"},"next":{"title":"Chapter 9: Information Security — Exam Quick Revision","permalink":"/ai-engineering-journey/professional-knowledge/09-information-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/professional-knowledge/08-cloud-computing.md


const frontMatter = {
	id: '08-cloud-computing',
	slug: '/professional-knowledge/08-cloud-computing',
	title: 'Chapter 8: Cloud Computing — Exam Quick Revision',
	sidebar_label: 'Chapter 8: Cloud Computing — Exam Quick Revision',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Cloud Computing — Exam Quick Revision';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "1. Cloud Service Models",
  "id": "1-cloud-service-models",
  "level": 2
}, {
  "value": "NIST Definition (5 Essential Characteristics)",
  "id": "nist-definition-5-essential-characteristics",
  "level": 3
}, {
  "value": "2. Deployment Models",
  "id": "2-deployment-models",
  "level": 2
}, {
  "value": "Hybrid Cloud Use Case",
  "id": "hybrid-cloud-use-case",
  "level": 3
}, {
  "value": "3. Virtualization Types",
  "id": "3-virtualization-types",
  "level": 2
}, {
  "value": "Hypervisor Types",
  "id": "hypervisor-types",
  "level": 3
}, {
  "value": "4. AWS Core Services",
  "id": "4-aws-core-services",
  "level": 2
}, {
  "value": "AWS Regions &amp; Availability Zones",
  "id": "aws-regions--availability-zones",
  "level": 3
}, {
  "value": "5. Cloud Storage Types",
  "id": "5-cloud-storage-types",
  "level": 2
}, {
  "value": "S3 Storage Classes (AWS)",
  "id": "s3-storage-classes-aws",
  "level": 3
}, {
  "value": "6. Elasticity vs Scalability",
  "id": "6-elasticity-vs-scalability",
  "level": 2
}, {
  "value": "Scalability Types",
  "id": "scalability-types",
  "level": 3
}, {
  "value": "7. Cloud Security — Shared Responsibility Model",
  "id": "7-cloud-security--shared-responsibility-model",
  "level": 2
}, {
  "value": "Cloud Security Threats",
  "id": "cloud-security-threats",
  "level": 3
}, {
  "value": "8. CAP Theorem (Brewer&#39;s Theorem)",
  "id": "8-cap-theorem-brewers-theorem",
  "level": 2
}, {
  "value": "CAP Combinations",
  "id": "cap-combinations",
  "level": 3
}, {
  "value": "NoSQL Database Types (by CAP)",
  "id": "nosql-database-types-by-cap",
  "level": 3
}, {
  "value": "9. Cloud Deployment Patterns",
  "id": "9-cloud-deployment-patterns",
  "level": 2
}, {
  "value": "Infrastructure as Code (IaC)",
  "id": "infrastructure-as-code-iac",
  "level": 3
}, {
  "value": "Microservices on Cloud",
  "id": "microservices-on-cloud",
  "level": 3
}, {
  "value": "Serverless Architecture",
  "id": "serverless-architecture",
  "level": 3
}, {
  "value": "Solved MCQs",
  "id": "solved-mcqs",
  "level": 2
}, {
  "value": "10. Kubernetes (Container Orchestration) Basics",
  "id": "10-kubernetes-container-orchestration-basics",
  "level": 2
}, {
  "value": "Core Concepts",
  "id": "core-concepts",
  "level": 3
}, {
  "value": "Control Plane Components",
  "id": "control-plane-components",
  "level": 3
}, {
  "value": "Pod Lifecycle",
  "id": "pod-lifecycle",
  "level": 3
}, {
  "value": "11. Cloud Cost Models",
  "id": "11-cloud-cost-models",
  "level": 2
}, {
  "value": "Pricing Models Comparison",
  "id": "pricing-models-comparison",
  "level": 3
}, {
  "value": "Cost Optimization Strategies",
  "id": "cost-optimization-strategies",
  "level": 3
}, {
  "value": "12. Multi-Cloud &amp; Disaster Recovery",
  "id": "12-multi-cloud--disaster-recovery",
  "level": 2
}, {
  "value": "Multi-Cloud Strategies",
  "id": "multi-cloud-strategies",
  "level": 3
}, {
  "value": "Disaster Recovery Metrics",
  "id": "disaster-recovery-metrics",
  "level": 3
}, {
  "value": "DR Strategies (in order of cost/complexity)",
  "id": "dr-strategies-in-order-of-costcomplexity",
  "level": 3
}, {
  "value": "13. Serverless Frameworks &amp; Event-Driven Architecture",
  "id": "13-serverless-frameworks--event-driven-architecture",
  "level": 2
}, {
  "value": "AWS Lambda Triggers",
  "id": "aws-lambda-triggers",
  "level": 3
}, {
  "value": "Serverless Pros &amp; Cons",
  "id": "serverless-pros--cons",
  "level": 3
}, {
  "value": "State Machine (AWS Step Functions)",
  "id": "state-machine-aws-step-functions",
  "level": 3
}, {
  "value": "📌 Extended Theory — Deep Dive for IBPS SO Mains (2024–2026 Trends)",
  "id": "-extended-theory--deep-dive-for-ibps-so-mains-20242026-trends",
  "level": 2
}, {
  "value": "Cloud Cost Calculator — TypeScript",
  "id": "cloud-cost-calculator--typescript",
  "level": 3
}, {
  "value": "Deployment Model Comparison — Extended",
  "id": "deployment-model-comparison--extended",
  "level": 3
}, {
  "value": "Service Model Scenarios — Decision Matrix",
  "id": "service-model-scenarios--decision-matrix",
  "level": 3
}, {
  "value": "Hypervisor Scheduler — TypeScript",
  "id": "hypervisor-scheduler--typescript",
  "level": 3
}, {
  "value": "AWS vs Azure vs GCP — Service Mapping",
  "id": "aws-vs-azure-vs-gcp--service-mapping",
  "level": 3
}, {
  "value": "Auto-Scaling with TypeScript",
  "id": "auto-scaling-with-typescript",
  "level": 3
}, {
  "value": "📝 Solved Examples (20 MCQs)",
  "id": "-solved-examples-20-mcqs",
  "level": 2
}, {
  "value": "📖 Exercise Bank (30 Questions)",
  "id": "-exercise-bank-30-questions",
  "level": 2
}, {
  "value": "📌 Additional PYQ Integration (2024–2026 Analysis)",
  "id": "-additional-pyq-integration-20242026-analysis",
  "level": 2
}, {
  "value": "📌 Topic-wise Weightage Analysis for IBPS SO IT Mains",
  "id": "-topic-wise-weightage-analysis-for-ibps-so-it-mains",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "HOT Topics (Frequently Asked in IBPS SO IT Mains)",
  "id": "hot-topics-frequently-asked-in-ibps-so-it-mains",
  "level": 2
}, {
  "value": "Chapter Quiz (MCQs)",
  "id": "chapter-quiz-mcqs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
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
        id: "chapter-8-cloud-computing--exam-quick-revision",
        children: "Chapter 8: Cloud Computing — Exam Quick Revision"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate IaaS, PaaS, SaaS with real-world provider examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare deployment models (public, private, hybrid, community)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify virtualization types and hypervisor architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map AWS core services and their Azure equivalents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish storage types (object, block, file) with use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain elasticity, scalability, and the shared responsibility model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply CAP theorem to cloud database selection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-cloud-service-models",
      children: "1. Cloud Service Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph On-Premise\n    A1[Applications] & A2[Data] & A3[Runtime] & A4[Middleware] & A5[OS] & A6[Virtualization] & A7[Servers] & A8[Storage] & A9[Networking]\n    end\n    subgraph IaaS\n    B1[Applications] & B2[Data] & B3[Runtime] & B4[Middleware] & B5[OS] --- B6[Provided by Cloud]\n    B6 --- B7[Virtualization]\n    B6 --- B8[Servers]\n    B6 --- B9[Storage]\n    B6 --- B10[Networking]\n    end\n    subgraph PaaS\n    C1[Applications] & C2[Data] --- C3[Provided by Cloud]\n    C3 --- C4[Runtime]\n    C3 --- C5[Middleware]\n    C3 --- C6[OS]\n    C3 --- C7[Virtualization]\n    C3 --- C8[Servers]\n    C3 --- C9[Storage]\n    C3 --- C10[Networking]\n    end\n    subgraph SaaS\n    D1[Provided by Cloud] --- D2[Applications]\n    D1 --- D3[Data]\n    D1 --- D4[Runtime]\n    D1 --- D5[Middleware]\n    D1 --- D6[OS]\n    D1 --- D7[Virtualization]\n    D1 --- D8[Servers]\n    D1 --- D9[Storage]\n    D1 --- D10[Networking]\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IaaS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PaaS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SaaS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "You manage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apps, data, runtime, middleware, OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apps, data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Provider manages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization, servers, storage, networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime, middleware, OS, infra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everything"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rent a server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rent a platform (like Heroku)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rent software (like Gmail)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS EC2, Azure VM, GCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Elastic Beanstalk, Heroku, Google App Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gmail, Office 365, Salesforce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, custom infra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev/deploy without ops overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-user productivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual/auto scaling instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handled by provider"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nist-definition-5-essential-characteristics",
      children: "NIST Definition (5 Essential Characteristics)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-demand self-service"
        }), " — provision resources without human interaction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broad network access"
        }), " — accessible via standard protocols"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource pooling"
        }), " — multi-tenant, location independent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rapid elasticity"
        }), " — scale up/down quickly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measured service"
        }), " — pay-per-use metering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-deployment-models",
      children: "2. Deployment Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Public Cloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party provider, multi-tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low cost, no maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less control, compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS, Azure, GCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Private Cloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated to one organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High cost, maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenStack, VMware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid Cloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Private with orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best of both: burst to public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity, latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Outposts, Azure Arc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Community Cloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared by several organizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared cost, compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited provider options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Government cloud"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybrid-cloud-use-case",
      children: "Hybrid Cloud Use Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normal load:"
        }), " Private cloud (sensitive data)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peak load:"
        }), " Burst to public cloud (encrypted data)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DR:"
        }), " Public cloud as backup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-virtualization-types",
      children: "3. Virtualization Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Virtualization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest OS unmodified; hypervisor emulates all hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VMware ESXi, KVM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paravirtualization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest OS modified for hypercalls; better performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS-Level (Containers)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared kernel, isolated user spaces; lightweight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker, LXC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware-Assisted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses CPU extensions (Intel VT-x, AMD-V) for VM operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KVM, Hyper-V"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hypervisor-types",
      children: "Hypervisor Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 1 (Bare-metal)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs directly on hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VMware ESXi, Hyper-V, KVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 2 (Hosted)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on host OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VirtualBox, VMware Workstation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (OS overhead)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Type 1: [Hardware] → [Hypervisor] → [VMs]\nType 2: [Hardware] → [Host OS] → [Hypervisor] → [VMs]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-aws-core-services",
      children: "4. AWS Core Services"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure VMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS/EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AKS (Azure Kubernetes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic Beanstalk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS for web apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App Service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object storage (buckets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blob Storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block storage (volumes for EC2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk Storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File storage (shared NFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed SQL databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure SQL DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoSQL (key-value + document)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosmos DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElastiCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory cache (Redis/Memcached)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Cache for Redis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual private cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Network (VNet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure DNS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN (content delivery)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure CDN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Load Balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity & access management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure AD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Vault"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring & logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Monitor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-regions--availability-zones",
      children: "AWS Regions & Availability Zones"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Region:"
        }), " Geographic area (us-east-1, eu-west-1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AZ:"
        }), " One or more data centers within a region"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-AZ deployment → high availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-region replication → disaster recovery"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-cloud-storage-types",
      children: "5. Cloud Storage Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Object Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat namespace: bucket → key → data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP (REST API)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency for large objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media, backups, data lakes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw volumes: formatted with filesystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attached to VM (iSCSI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High, low latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DB storage, OS boot volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical, shared across VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFS, SMB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared configs, home dirs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "s3-storage-classes-aws",
      children: "S3 Storage Classes (AWS)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Durability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Retrieval Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.999999999% (11 9s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Intelligent-Tiering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 9s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-tiering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Standard-IA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 9s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per GB retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 One Zone-IA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 9s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per GB retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Glacier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 9s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Glacier Deep Archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 9s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+ hours"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-elasticity-vs-scalability",
      children: "6. Elasticity vs Scalability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elasticity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scalability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto scale up/down based on demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability to handle increased load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (metrics-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual or planned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both scale up and scale down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually scale up"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Timeframe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-term, dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term, planned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud-specific"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (elastic = cloud native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Also applies to on-prem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scalability-types",
      children: "Scalability Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical scaling (Scale up):"
        }), " Bigger instance (more CPU/RAM) — limited by hardware max"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal scaling (Scale out):"
        }), " More instances — theoretically unlimited"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-cloud-security--shared-responsibility-model",
      children: "7. Cloud Security — Shared Responsibility Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌─────────────────────────┐\n                    │   CUSTOMER RESPONSIBILITY │\n                    │  (Data, Applications,     │\n                    │   Identity, OS patches)    │\n├────────────────────┼─────────────────────────┤\n                    │   PROVIDER RESPONSIBILITY  │\n                    │  (Physical security, infra, │\n                    │   hypervisor, network)      │\n                    └────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IaaS:"
      }), " Customer secures OS, apps, data + network config\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PaaS:"
      }), " Customer secures apps + data\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SaaS:"
      }), " Customer secures data + user access"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-security-threats",
      children: "Cloud Security Threats"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data breaches"
        }), " — unauthorized access to stored data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Misconfiguration"
        }), " — open S3 buckets, overly permissive IAM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insecure APIs"
        }), " — weak authentication on cloud management APIs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Account hijacking"
        }), " — compromised credentials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insider threats"
        }), " — malicious employees with access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DDoS attacks"
        }), " — resource exhaustion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared technology vulnerabilities"
        }), " — hypervisor escape"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-cap-theorem-brewers-theorem",
      children: "8. CAP Theorem (Brewer's Theorem)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a distributed data store, at most ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two"
      }), " of these three can be guaranteed simultaneously:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency (C)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every read receives the most recent write (all nodes see same data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability (A)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every request receives a (non-error) response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partition Tolerance (P)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System continues despite network partition between nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cap-combinations",
      children: "CAP Combinations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HBase, MongoDB (with consistency preference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, Cassandra, CouchDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational DBs (single node — no partition)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " In distributed systems, partitions are inevitable, so ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "P is mandatory"
      }), ". You choose between CP and AP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nosql-database-types-by-cap",
      children: "NoSQL Database Types (by CAP)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CAP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key-Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple key → value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis, DynamoDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP/CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-like documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB, CouchDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column Family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wide-column stores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, HBase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships as edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neo4j, Amazon Neptune"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-cloud-deployment-patterns",
      children: "9. Cloud Deployment Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "infrastructure-as-code-iac",
      children: "Infrastructure as Code (IaC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# AWS CloudFormation / Terraform snippet\nResources:\n  WebServer:\n    Type: AWS::EC2::Instance\n    Properties:\n      InstanceType: t2.micro\n      ImageId: ami-0c55b159cbfafe1f0\n      SecurityGroups:\n        - !Ref WebSecurityGroup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "microservices-on-cloud",
      children: "Microservices on Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each service deployed independently (containers/Lambda)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service discovery, API gateway, circuit breakers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits: independent scaling, deployment, technology diversity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverless-architecture",
      children: "Serverless Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No server management — just code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event-driven: function triggered by HTTP, queue, DB change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cold start: first invocation latency (container initialization)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " Pay per invocation + duration (not idle time)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solved-mcqs",
      children: "Solved MCQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which cloud service model gives the user maximum control?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(a) SaaS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(b) PaaS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(c) IaaS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(d) FaaS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (c) IaaS. User manages OS, apps, data — provider manages only infra."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " In CAP theorem, which two are typically chosen for distributed databases?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(a) Consistency + Availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(b) Consistency + Partition Tolerance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(c) Availability + Partition Tolerance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(d) Availability + Partition Tolerance is impossible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (c) Availability + Partition Tolerance. Since partitions are inevitable in distributed systems (P is mandatory), you choose between CP and AP. Most NoSQL databases choose AP for high availability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which AWS service is used for object storage?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(a) EBS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(b) EFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(c) S3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(d) RDS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (c) S3. EBS is block storage, EFS is file storage. S3 is object storage (buckets with keys)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What is the main advantage of Type 1 hypervisors over Type 2?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(a) Lower cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(b) Better performance (no host OS overhead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(c) Better portability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(d) More features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (b) Better performance (no host OS overhead). Type 1 runs directly on hardware, eliminating the host OS layer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What does AWS Lambda's cold start refer to?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(a) First invocation after idle period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(b) Instance termination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(c) Cache miss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(d) Database connection timeout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (a) First invocation after idle period. Cold start occurs when Lambda needs to provision a new container (download code, initialize runtime), adding latency to the first request."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-kubernetes-container-orchestration-basics",
      children: "10. Kubernetes (Container Orchestration) Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-concepts",
      children: "Core Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest deployable unit — one or more containers sharing network/storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable network endpoint to access pods (load-balanced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative pod management (replicas, rolling updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ConfigMap / Secret"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration and sensitive data injected into pods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worker machine (VM or physical) running pods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cluster"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of nodes managed by control plane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Namespace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual cluster for isolation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "control-plane-components",
      children: "Control Plane Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kube-apiserver (API gateway) → etcd (cluster state)\n       ↓\nkube-scheduler (assigns pods to nodes)\n       ↓\nkube-controller-manager (maintains desired state)\n       ↓\ncloud-controller-manager (cloud provider integration)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pod-lifecycle",
      children: "Pod Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pending → ContainerCreating → Running → Succeeded (or Failed)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RestartPolicy:"
        }), " Always (default), OnFailure, Never"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-cloud-cost-models",
      children: "11. Cloud Cost Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pricing-models-comparison",
      children: "Pricing Models Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Commitment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Discount"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "On-Demand"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (pay per hour/second)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable workloads, testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reserved (1yr/3yr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 year commitment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable, predictable workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spot/Preemptible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (can be reclaimed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing, fault-tolerant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Savings Plan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$/hr commitment (flexible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mix of instance types"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cost-optimization-strategies",
      children: "Cost Optimization Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Right-sizing:"
        }), " Match instance type to workload requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-scaling:"
        }), " Scale down during low demand"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Spot for non-critical workloads"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reserved instances for baseline capacity"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage tiering:"
        }), " Move infrequent data to colder storage (S3 Glacier)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete unused resources:"
        }), " Orphaned volumes, idle load balancers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use managed services:"
        }), " Reduces operational overhead (RDS vs self-managed DB)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-multi-cloud--disaster-recovery",
      children: "12. Multi-Cloud & Disaster Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-cloud-strategies",
      children: "Multi-Cloud Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Active-Passive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary cloud active, backup cloud idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-effective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Active-Active"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both clouds handle traffic concurrently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud-agnostic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstraction layer (Terraform, Kubernetes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No vendor lock-in"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disaster-recovery-metrics",
      children: "Disaster Recovery Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RTO (Recovery Time Objective)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max acceptable downtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RPO (Recovery Point Objective)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max acceptable data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds to minutes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dr-strategies-in-order-of-costcomplexity",
      children: "DR Strategies (in order of cost/complexity)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup & Restore:"
        }), " S3 backup → restore in new region (RPO: hours, RTO: days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pilot Light:"
        }), " Replicate critical data, spin up infra on failover (RPO: minutes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warm Standby:"
        }), " Reduced-capacity replica running (RPO: seconds)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Site Active-Active:"
        }), " Full capacity in both regions (RPO: near zero)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-serverless-frameworks--event-driven-architecture",
      children: "13. Serverless Frameworks & Event-Driven Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-lambda-triggers",
      children: "AWS Lambda Triggers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP REST API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image processing on upload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB Streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time data change processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQS/SNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue/notification processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled cron jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cognito"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authentication workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverless-pros--cons",
      children: "Serverless Pros & Cons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No server management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cold start latency (50ms-5s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scale to zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout limit (15 min for Lambda)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pay per invocation (idle = $0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging/monitoring harder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor lock-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited runtime environments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-machine-aws-step-functions",
      children: "State Machine (AWS Step Functions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Order Received] → [Validate Payment] → [Check Inventory]\n                     ↓ fail                    ↓ fail\n                  [Send Error]              [Restock]\n                     ↓                        ↓ ok\n                  [End]                   [Ship Order] → [End]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-extended-theory--deep-dive-for-ibps-so-mains-20242026-trends",
      children: "📌 Extended Theory — Deep Dive for IBPS SO Mains (2024–2026 Trends)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-cost-calculator--typescript",
      children: "Cloud Cost Calculator — TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface InstanceType {\n  name: string;\n  vCPU: number;\n  memoryGB: number;\n  hourlyPrice: number;\n}\n\ninterface CostEstimate {\n  onDemand: number;\n  reserved1yr: number;\n  reserved3yr: number;\n  spot: number;\n}\n\nclass CloudCostCalculator {\n  constructor(private instances: InstanceType[]) {}\n\n  estimate(instanceName: string, hoursPerMonth: number, months: number): CostEstimate | null {\n    const inst = this.instances.find(i => i.name === instanceName);\n    if (!inst) return null;\n\n    const totalHoursOnDemand = hoursPerMonth * months;\n    const onDemand = inst.hourlyPrice * totalHoursOnDemand;\n\n    // Reserved 1yr: ~60% discount (30% upfront + 70% monthly)\n    const reserved1yr = inst.hourlyPrice * 0.4 * totalHoursOnDemand;\n    // Reserved 3yr: ~70% discount\n    const reserved3yr = inst.hourlyPrice * 0.3 * totalHoursOnDemand;\n    // Spot: ~70% discount on average\n    const spot = inst.hourlyPrice * 0.3 * totalHoursOnDemand;\n\n    return {\n      onDemand: Math.round(onDemand * 100) / 100,\n      reserved1yr: Math.round(reserved1yr * 100) / 100,\n      reserved3yr: Math.round(reserved3yr * 100) / 100,\n      spot: Math.round(spot * 100) / 100,\n    };\n  }\n\n  findCheapestInstance(requirements: { minCPU: number; minMemory: number }): InstanceType[] {\n    return this.instances\n      .filter(i => i.vCPU >= requirements.minCPU && i.memoryGB >= requirements.minMemory)\n      .sort((a, b) => a.hourlyPrice - b.hourlyPrice);\n  }\n}\n\nconst awsPrices: InstanceType[] = [\n  { name: 't3.micro', vCPU: 2, memoryGB: 1, hourlyPrice: 0.0104 },\n  { name: 't3.small', vCPU: 2, memoryGB: 2, hourlyPrice: 0.0208 },\n  { name: 't3.medium', vCPU: 2, memoryGB: 4, hourlyPrice: 0.0416 },\n  { name: 'm5.large', vCPU: 2, memoryGB: 8, hourlyPrice: 0.096 },\n  { name: 'c5.2xlarge', vCPU: 8, memoryGB: 16, hourlyPrice: 0.34 },\n];\n\n// Usage: new CloudCostCalculator(awsPrices).estimate('t3.medium', 730, 12)\n// On-demand ≈ $364/yr vs Reserved ≈ $218/yr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-model-comparison--extended",
      children: "Deployment Model Comparison — Extended"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Public Cloud\"\n        PC1[App A] --- PC2[App B]\n        PC1 --- PC3[Shared Infra]\n    end\n    subgraph \"Private Cloud\"\n        PR1[App A] --- PR2[Dedicated Infra]\n    end\n    subgraph \"Hybrid Cloud\"\n        HC1[Sensitive Data] --> Private\n        HC2[Peak Load] --> Public\n    end\n    subgraph \"Community Cloud\"\n        CC1[Org A] --- CC2[Org B] --- CC3[Shared Infra/Compliance]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PYQ 2024:"
        }), " A bank needs to store sensitive financial data while being able to handle flash traffic spikes during sale events. Which deployment model is best?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Hybrid Cloud. Keep sensitive data on private cloud (compliance). Burst to public cloud during peak demand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-model-scenarios--decision-matrix",
      children: "Service Model Scenarios — Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup deploying web app without DevOps team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS (Heroku, Elastic Beanstalk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No OS/runtime management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise migrating legacy app with custom OS requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS (EC2, Azure VM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control over OS and middleware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team of 5 building a CRM from scratch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS (Salesforce)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No infrastructure, no custom development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data science team needs GPU for ML training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS (EC2 P3/P4 instances)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bare-metal/VM with GPU passthrough"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bank running payment processing with strict compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private Cloud / On-premise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sovereignty, audit requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Media company encoding videos on demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FaaS (Lambda, Cloud Functions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven, pay-per-execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hypervisor-scheduler--typescript",
      children: "Hypervisor Scheduler — TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VirtualMachine {\n  id: string;\n  vCPUs: number;\n  memoryMB: number;\n  priority: number; // 1 (highest) to 5\n}\n\ninterface PhysicalHost {\n  totalCPUs: number;\n  totalMemoryMB: number;\n  usedCPUs: number;\n  usedMemoryMB: number;\n}\n\nclass HypervisorScheduler {\n  constructor(private hosts: PhysicalHost[]) {}\n\n  allocateVM(vm: VirtualMachine): { hostIndex: number } | null {\n    // Best-fit: find host with smallest remaining capacity that fits\n    let bestFitIdx = -1;\n    let bestFitRemaining = Infinity;\n\n    for (let i = 0; i < this.hosts.length; i++) {\n      const host = this.hosts[i];\n      const availCPU = host.totalCPUs - host.usedCPUs;\n      const availMem = host.totalMemoryMB - host.usedMemoryMB;\n\n      if (availCPU >= vm.vCPUs && availMem >= vm.memoryMB) {\n        const remainingCPU = availCPU - vm.vCPUs;\n        const remainingMem = availMem - vm.memoryMB;\n        const remaining = remainingCPU + remainingMem / 1024;\n        if (remaining < bestFitRemaining) {\n          bestFitRemaining = remaining;\n          bestFitIdx = i;\n        }\n      }\n    }\n\n    if (bestFitIdx === -1) return null;\n\n    this.hosts[bestFitIdx].usedCPUs += vm.vCPUs;\n    this.hosts[bestFitIdx].usedMemoryMB += vm.memoryMB;\n    return { hostIndex: bestFitIdx };\n  }\n\n  deallocateVM(vm: VirtualMachine, hostIndex: number): void {\n    this.hosts[hostIndex].usedCPUs -= vm.vCPUs;\n    this.hosts[hostIndex].usedMemoryMB -= vm.memoryMB;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-vs-azure-vs-gcp--service-mapping",
      children: "AWS vs Azure vs GCP — Service Mapping"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GCP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS/EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blob Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent Disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosmos DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firestore/Bigtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud DNS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud CDN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Load Balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure AD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud IAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI/ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SageMaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDInsight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dataproc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auto-scaling-with-typescript",
      children: "Auto-Scaling with TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ScalingMetrics {\n  cpuUtilization: number; // 0-100\n  memoryUtilization: number;\n  requestCount: number; // per minute\n}\n\nclass AutoScalingGroup {\n  private instances: number;\n  private minInstances: number;\n  private maxInstances: number;\n  private scaleUpThreshold: number;\n  private scaleDownThreshold: number;\n\n  constructor(config: {\n    min: number; max: number;\n    scaleUpThreshold?: number;\n    scaleDownThreshold?: number;\n  }) {\n    this.instances = config.min;\n    this.minInstances = config.min;\n    this.maxInstances = config.max;\n    this.scaleUpThreshold = config.scaleUpThreshold ?? 70;\n    this.scaleDownThreshold = config.scaleDownThreshold ?? 30;\n  }\n\n  evaluate(metrics: ScalingMetrics): { action: string; instances: number } {\n    const avgUtilization = (metrics.cpuUtilization + metrics.memoryUtilization) / 2;\n\n    if (avgUtilization > this.scaleUpThreshold && this.instances < this.maxInstances) {\n      this.instances++;\n      return { action: 'SCALE_UP', instances: this.instances };\n    }\n    if (avgUtilization < this.scaleDownThreshold && this.instances > this.minInstances) {\n      this.instances--;\n      return { action: 'SCALE_DOWN', instances: this.instances };\n    }\n    return { action: 'NOOP', instances: this.instances };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-solved-examples-20-mcqs",
      children: "📝 Solved Examples (20 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q1: Which cloud service model provides the highest level of control?"
      }), "\n(a) SaaS (b) PaaS (c) IaaS (d) FaaS\n**Answer:** (c) IaaS. User manages OS, runtime, middleware, data, and applications. Provider manages virtualization, servers, storage, networking.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q2: In CAP theorem, which property is sacrificed by AP systems during a network partition?"
      }), "\n(a) Availability (b) Consistency (c) Partition Tolerance (d) Durability\n**Answer:** (b) Consistency. AP systems (DynamoDB, Cassandra) continue to accept writes during partition, but different nodes may have different data.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q3: Which AWS service is used for DNS resolution?"
      }), "\n(a) CloudFront (b) Route 53 (c) ELB (d) VPC\n**Answer:** (b) Route 53. It provides domain registration, DNS resolution, and health checking.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q4: Type 1 hypervisor runs directly on:"
      }), "\n(a) Host OS (b) Hardware (c) Guest OS (d) Virtual Machine\n**Answer:** (b) Hardware. Type 1 (bare-metal) hypervisors run directly on physical hardware. Type 2 runs on top of a host OS.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q5: What does the 'R' in RTO stand for?"
      }), "\n(a) Recovery (b) Response (c) Return (d) Resource\n**Answer:** (a) Recovery. RTO = Recovery Time Objective — maximum acceptable downtime after a disaster.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q6: Which of the following is NOT a cloud deployment model?"
      }), "\n(a) Public (b) Private (c) Virtual (d) Hybrid\n**Answer:** (c) Virtual. Deployment models: Public, Private, Hybrid, Community.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q7: Which AWS storage service provides block-level storage for EC2?"
      }), "\n(a) S3 (b) EBS (c) EFS (d) Glacier\n**Answer:** (b) EBS (Elastic Block Store). Attached to EC2 instances. S3 = object, EFS = file, Glacier = archival.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q8: What is the primary benefit of serverless computing?"
      }), "\n(a) No cold starts (b) No server management (c) Unlimited execution time (d) Lower latency\n**Answer:** (b) No server management. Developers just upload code; cloud provider handles scaling, availability, and infrastructure.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q9: Which NoSQL database type is DynamoDB?"
      }), "\n(a) Document (b) Column Family (c) Key-Value (d) Graph\n**Answer:** (c) Key-Value. DynamoDB is a key-value and document database. Cassandra = Column Family, MongoDB = Document, Neo4j = Graph.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q10: In virtualization, what is the purpose of the hypervisor?"
      }), "\n(a) Manage physical hardware (b) Create and run VMs (c) Compile code (d) Route network traffic\n**Answer:** (b) Create and run VMs. The hypervisor (VMM) abstracts physical hardware and manages multiple virtual machines.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q11: What is the difference between vertical and horizontal scaling?"
      }), "\n(a) Vertical = more instances, Horizontal = bigger instance (b) Vertical = bigger instance, Horizontal = more instances (c) Both are same (d) Vertical = cloud, Horizontal = on-prem\n**Answer:** (b) Vertical scaling (scale up) = add more CPU/RAM to existing instance. Horizontal scaling (scale out) = add more instances.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q12: Which AWS service is equivalent to Azure Functions?"
      }), "\n(a) EC2 (b) Lambda (c) ECS (d) S3\n**Answer:** (b) Lambda. Both Lambda and Azure Functions are serverless compute services. EC2 = Azure VMs, ECS = AKS.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q13: In the shared responsibility model, who is responsible for physical security?"
      }), "\n(a) Customer (b) Cloud provider (c) Both (d) Third party\n**Answer:** (b) Cloud provider. Provider secures physical infrastructure (data centers, hardware, networking). Customer secures data, applications, and access.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q14: Which S3 storage class is designed for long-term archival with 12+ hour retrieval?"
      }), "\n(a) S3 Standard (b) S3 Intelligent-Tiering (c) S3 Glacier (d) Glacier Deep Archive\n**Answer:** (d) Glacier Deep Archive. Retrieval time: 12+ hours. Lowest cost storage at $0.001/GB/month.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q15: What is the benefit of containers over virtual machines?"
      }), "\n(a) Stronger isolation (b) Lighter weight (shared kernel) (c) Each container has own OS (d) Better for legacy apps\n**Answer:** (b) Lighter weight. Containers share host OS kernel, start in seconds, use less memory than VMs (each VM has full OS).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q16: In AWS, what does CloudFormation provide?"
      }), "\n(a) Monitoring (b) Infrastructure as Code (c) DNS (d) CDN\n**Answer:** (b) Infrastructure as Code (IaC). CloudFormation uses YAML/JSON templates to provision AWS resources declaratively.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q17: Which cloud characteristic allows resources to be provisioned without human interaction?"
      }), "\n(a) Measured service (b) On-demand self-service (c) Resource pooling (d) Rapid elasticity\n**Answer:** (b) On-demand self-service. Users can provision computing capabilities automatically without requiring human interaction with service provider.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q18: What is the purpose of an Availability Zone in AWS?"
      }), "\n(a) Global DNS (b) Isolated data center within a region (c) CDN edge location (d) Database service\n**Answer:** (b) Isolated data center within a region. Multi-AZ deployments provide high availability and fault tolerance.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q19: In Kubernetes, what is the smallest deployable unit?"
      }), "\n(a) Node (b) Pod (c) Service (d) Deployment\n**Answer:** (b) Pod. A pod contains one or more containers with shared storage/network and is the basic scheduling unit.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q20: What is cold start latency in serverless computing?"
      }), "\n(a) Time to shut down a function (b) Delay when invoking a function after idle period (c) Database connection time (d) Network initialization\n**Answer:** (b) Delay when invoking a function after idle period. Cold start involves provisioning a new container, loading code, and initializing runtime.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-exercise-bank-30-questions",
      children: "📖 Exercise Bank (30 Questions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare IaaS, PaaS, and SaaS for: a hospital (HIPAA), a gaming startup, a data analytics platform."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript function that determines the optimal cloud deployment model based on compliance, scalability, and cost requirements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate monthly cost: 10 EC2 t3.medium instances (hourly $0.0416) running 24/7 for 30 days. Compare on-demand vs 1-year reserved."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a VPC with public and private subnets across 2 AZs with NAT gateway."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript class simulating AWS S3 bucket policies (allow/deny by IP, user, resource)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain CAP theorem with 3 real-world database examples for each combination."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code for a CloudWatch-style log aggregator with filtering and alerting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare object storage (S3), block storage (EBS), and file storage (EFS) for: database storage, media streaming, shared config files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a Kubernetes deployment YAML and explain each field."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript load balancer (round-robin, least-connections, weighted) for distributing requests."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a multi-cloud disaster recovery strategy with RTO < 15 minutes and RPO < 1 minute."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code for a Lambda function that resizes images on S3 upload (trigger: S3 put event)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare AWS, Azure, and GCP pricing models (compute, storage, data transfer)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript Resource Manager that tracks cloud resource allocation and costs across teams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between stateful and stateless applications in cloud deployment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code simulating a container orchestrator scheduler (bin-packing, spread, random)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a cloud migration strategy (6 R's: Rehost, Replatform, Refactor, Repurchase, Retire, Retain)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript cost optimization engine that suggests rightsizing based on utilization metrics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare serverless vs containers for: cold start, scaling, cost, debugging, vendor lock-in."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code for a cloud security group simulator (stateful firewall rules evaluation)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between RDS and DynamoDB in terms of data model, scaling, and use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript IaC template parser (YAML → cloud resource definitions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a cloud-native microservices architecture with API Gateway, service discovery, and circuit breakers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code simulating an auto-scaling policy based on SQS queue depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare cloud monitoring tools: CloudWatch vs Azure Monitor vs Google Cloud Operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript function that calculates S3 storage costs for different storage classes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concepts of blue-green deployment and canary release in cloud environments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code for a cloud billing alert system (budget thresholds, SNS notifications)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare EBS volume types: gp3, io2, st1, sc1 — performance and use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a TypeScript class that simulates a cloud region availability matrix (service availability per region)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-demand: 10 × $0.0416 × 24 × 30 = $299.52/month. Reserved 1yr: ~60% → $179.71/month"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate request principal, IP, resource ARN against policy statements. First explicit DENY wins, then ALLOW, default DENY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database: block (EBS) for performance. Media streaming: object (S3) + CDN. Shared config: file (EFS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Round-robin: cycle through instances. Least-connections: track active connections, pick lowest. Weighted: assign weights, distribute proportionally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active-Active across two regions with global load balancer. Synchronous replication for RPO < 1min"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track resource tags per team. Calculate hourly cost × usage. Generate per-team billing report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bin-packing: pack VMs to minimize hosts. Spread: distribute evenly. Random: simple but may overload"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehost (lift & shift): fastest. Replatform: modify for cloud (managed DB). Refactor: redesign for cloud-native"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless: cold start 50ms-5s, auto-scale to zero, pay per call. Containers: no cold start, min instances, pay for runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate rules in order: if source/dest IP matches → allow/deny. Stateful: auto-allow return traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse YAML resources: each resource type maps to specific handler. Generate create/update/delete operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If queue depth > threshold → scale up. If queue depth < threshold for N consecutive checks → scale down"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blue-green: two identical environments, switch traffic. Canary: route small % traffic to new version, gradual increase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate costs by service. Compare against budget. If threshold (80%, 100%) exceeded → SNS notification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-additional-pyq-integration-20242026-analysis",
      children: "📌 Additional PYQ Integration (2024–2026 Analysis)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PYQ 2025:"
        }), " An e-commerce company experiences unpredictable traffic spikes during flash sales. Their current infrastructure runs on-premise with fixed capacity. During last year's Big Billion Day sale, the website was down for 4 hours. Recommend a cloud migration strategy with justification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Migrate to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid Cloud"
      }), " architecture:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move the web/application tier to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS EC2 Auto Scaling"
        }), " with target tracking policies based on CPU/request count"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RDS with Multi-AZ"
        }), " for the database tier (high availability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep sensitive customer data (PCI DSS) on-premise or in a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "private cloud"
        }), " with encrypted VPN connection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CloudFront CDN"
        }), " for static assets to reduce origin load"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Elastic Load Balancer"
        }), " to distribute traffic across AZs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For extreme peaks, configure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "predictive scaling"
        }), " using historical traffic patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benefits: Elasticity handles spikes, pay-per-use reduces costs, DR capabilities improve resilience."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PYQ 2024:"
        }), " Compare the following cloud service models for a startup building a Node.js application with PostgreSQL:\n(a) Deploy on EC2 with self-managed DB\n(b) Deploy on Elastic Beanstalk with RDS\n(c) Deploy on serverless (Lambda + Aurora Serverless)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Option (b) Elastic Beanstalk + RDS is best for a startup:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(a) EC2: Full control but high ops overhead (OS patching, DB admin, scaling)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(b) EB + RDS: Managed platform, auto-scaling, automated backups, minimal ops — ideal when team < 5 engineers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(c) Lambda + Aurora Serverless: No servers, but cold start latency (~500ms-5s) may impact UX; connection pooling needed; 15-min timeout limit"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PYQ 2026:"
        }), " In the CAP theorem context, a globally distributed social media feed requires availability during network partitions. Which NoSQL database type and consistency model would you choose?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Choose an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AP system"
      }), " (Availability + Partition Tolerance). Examples:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DynamoDB"
        }), " (eventual consistency, key-value)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cassandra"
        }), " (tunable consistency, column-family)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CouchDB"
        }), " (eventual consistency, document)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These systems accept writes during network partitions (high availability) and resolve conflicts via last-writer-wins or vector clocks. Users may see slightly stale data during partitions, but the feed remains responsive. Consistency is sacrificed for availability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-topic-wise-weightage-analysis-for-ibps-so-it-mains",
      children: "📌 Topic-wise Weightage Analysis for IBPS SO IT Mains"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weightage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Models (IaaS/PaaS/SaaS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every exam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-12%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every exam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy-Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Services Mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12-15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every exam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization & Hypervisors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAP Theorem & NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-12%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Security (Shared Resp.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Types (Object/Block/File)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-7%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless & Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DR & Cost Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service models:"
        }), " IaaS (infra), PaaS (platform), SaaS (software)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment:"
        }), " Public (shared), Private (dedicated), Hybrid (best of both)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtualization:"
        }), " Full (unmodified guest), Para (modified guest), OS-level (containers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hypervisors:"
        }), " Type 1 (bare-metal, faster), Type 2 (hosted, portable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS:"
        }), " EC2 (compute), S3 (object), RDS (SQL), Lambda (serverless), VPC (network)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage:"
        }), " Object (REST/HTTP), Block (VM attached), File (shared/NFS)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elasticity:"
        }), " Auto-scale; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability:"
        }), " Handle growth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Shared responsibility model — customer secures data, provider secures infra"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAP:"
        }), " Consistency, Availability, Partition Tolerance — pick 2 (P mandatory in distributed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes:"
        }), " Pods (smallest unit), Services (networking), Deployments (replica mgmt)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " On-demand (flexible), Reserved (cheap, committed), Spot (batch, cheap)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DR:"
        }), " RTO (downtime), RPO (data loss) — Backup → Pilot Light → Warm Standby → Active-Active"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serverless:"
        }), " Lambda triggers, cold start, pay-per-invocation, event-driven"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hot-topics-frequently-asked-in-ibps-so-it-mains",
      children: "HOT Topics (Frequently Asked in IBPS SO IT Mains)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IaaS vs PaaS vs SaaS — which service model for given scenario"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public vs Private vs Hybrid cloud — advantages/disadvantages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAP theorem application — which NoSQL DB for which requirement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AWS services — match service with its purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtualization vs containerization — performance, isolation, use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared responsibility model — who is responsible for what"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vertical vs horizontal scaling — when to use each"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud deployment models — differences in cost, security, control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless vs containers — comparison of cold start, cost, statefulness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elasticity vs scalability — real-world examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-mcqs",
      children: "Chapter Quiz (MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q1: Which of the following is NOT a characteristic of cloud computing as per NIST?"
      }), "\nA1: \"Fixed capacity\" is not a characteristic. The five essential characteristics are: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q2: In a hybrid cloud, sensitive data typically resides in which cloud?"
      }), "\nA2: Private cloud. Hybrid cloud uses private cloud for sensitive/regulated data and public cloud for less sensitive data or for burst capacity during peak loads.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q3: What is the difference between EBS and EFS in AWS?"
      }), "\nA3: EBS is block-level storage (single EC2 attachment, high performance). EFS is file-level storage (multiple EC2s, NFS-based, scalable). EBS is like a hard drive; EFS is like a shared network drive.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q4: Which cloud service model would a developer choose to deploy code without managing the underlying OS?"
      }), "\nA4: PaaS (Platform as a Service) — e.g., AWS Elastic Beanstalk, Heroku, Google App Engine. The developer only manages code and data.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q5: What does 'measured service' mean in cloud computing?"
      }), "\nA5: Cloud resources are metered and billed based on usage (pay-per-use). This provides transparency for both provider and consumer, enabling optimization and cost control.\n"]
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