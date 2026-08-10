"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[22782],{

/***/ 80223
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_01_introduction_md_033_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-01-introduction-md-033.json
const site_docs_courses_cloud_computing_01_introduction_md_033_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/01-introduction","title":"Chapter 1: Introduction to Cloud Computing","description":"Next Virtualization","source":"@site/docs/courses/cloud-computing/01-introduction.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/01-introduction","permalink":"/ai-engineering-journey/cloud-computing/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/cloud-computing/01-introduction","title":"Chapter 1: Introduction to Cloud Computing","sidebar_label":"Chapter 1: Introduction to Cloud Computing","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Cloud Computing — Comprehensive Course Textbook","permalink":"/ai-engineering-journey/cloud-computing"},"next":{"title":"Chapter 2: Virtualization","permalink":"/ai-engineering-journey/cloud-computing/02-virtualization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/cloud-computing/01-introduction',
	title: 'Chapter 1: Introduction to Cloud Computing',
	sidebar_label: 'Chapter 1: Introduction to Cloud Computing',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Cloud Computing';

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
  "value": "1.1 Definition of Cloud Computing",
  "id": "11-definition-of-cloud-computing",
  "level": 3
}, {
  "value": "1.2 Essential Characteristics",
  "id": "12-essential-characteristics",
  "level": 3
}, {
  "value": "1.3 Service Models",
  "id": "13-service-models",
  "level": 3
}, {
  "value": "1.4 Service Model Comparison",
  "id": "14-service-model-comparison",
  "level": 3
}, {
  "value": "1.5 Deployment Models",
  "id": "15-deployment-models",
  "level": 3
}, {
  "value": "1.6 Cloud Economics",
  "id": "16-cloud-economics",
  "level": 3
}, {
  "value": "1.7 Cloud Adoption Drivers",
  "id": "17-cloud-adoption-drivers",
  "level": 3
}, {
  "value": "1.8 Common Cloud Myths",
  "id": "18-common-cloud-myths",
  "level": 3
}, {
  "value": "1.9 Cloud Migration Strategies (The 6 Rs)",
  "id": "19-cloud-migration-strategies-the-6-rs",
  "level": 3
}, {
  "value": "1.10 Vendor Lock-in",
  "id": "110-vendor-lock-in",
  "level": 3
}, {
  "value": "1.11 Benefits and Challenges",
  "id": "111-benefits-and-challenges",
  "level": 3
}, {
  "value": "1.12 Major Cloud Providers",
  "id": "112-major-cloud-providers",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1.1: CAPEX vs OPEX Comparison",
  "id": "example-11-capex-vs-opex-comparison",
  "level": 3
}, {
  "value": "Example 1.2: Service Model Abstraction Layers",
  "id": "example-12-service-model-abstraction-layers",
  "level": 3
}, {
  "value": "Example 1.3: 6 Rs Decision Flow",
  "id": "example-13-6-rs-decision-flow",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: Cloud Service Cost Calculator",
  "id": "typescript-cloud-service-cost-calculator",
  "level": 3
}, {
  "value": "TypeScript: Region Latency Comparison Tool",
  "id": "typescript-region-latency-comparison-tool",
  "level": 3
}, {
  "value": "TypeScript: Cloud Adoption Maturity &amp; TCO Comparator",
  "id": "typescript-cloud-adoption-maturity--tco-comparator",
  "level": 3
}, {
  "value": "Pulumi: Cloud-Agnostic Infrastructure as Code",
  "id": "pulumi-cloud-agnostic-infrastructure-as-code",
  "level": 2
}, {
  "value": "Real-World Case Study: Capital One&#39;s Cloud Migration",
  "id": "real-world-case-study-capital-ones-cloud-migration",
  "level": 2
}, {
  "value": "Multi-Cloud Architecture Comparison",
  "id": "multi-cloud-architecture-comparison",
  "level": 2
}, {
  "value": "Cloud Adoption Journey Stages",
  "id": "cloud-adoption-journey-stages",
  "level": 2
}, {
  "value": "Additional Exercise",
  "id": "additional-exercise",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-1-introduction-to-cloud-computing",
        children: "Chapter 1: Introduction to Cloud Computing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/02-virtualization",
          children: "Chapter 2: Virtualization"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/cloud-computing/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/01-introduction/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define cloud computing according to the NIST SP 800-145 standard."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the five essential characteristics of cloud computing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between Infrastructure as a Service, Platform as a Service, and Software as a Service."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast public, private, hybrid, community, and multi-cloud deployment models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the economic differences between capital expenditure and operational expenditure models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the benefits and challenges of adopting cloud computing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the major cloud service providers and their market positioning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the 6 Rs framework to cloud migration planning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess vendor lock-in risks and mitigation strategies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NIST Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 essential characteristics define true cloud computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguishes cloud from traditional hosting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualized compute, storage, networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, no hardware management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed platform for application deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Focus on code, skip infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully managed applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero ops, use as-is"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public, Private, Hybrid, Community, Multi-Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each has different trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Economics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPEX ? OPEX shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay for what you use, no upfront investment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6 Rs Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rehost, Replatform, Refactor, Repurchase, Retire, Retain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose strategy by business value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[NIST Definition] --> B[5 Essential Characteristics]\n    B --> C[Service Models]\n    C --> D[Deployment Models]\n    D --> E[Cloud Economics]\n    E --> F[Migration Strategies]\n    F --> G[Vendor Lock-in]\n    G --> H[Major Providers]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-definition-of-cloud-computing",
      children: "1.1 Definition of Cloud Computing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The National Institute of Standards and Technology (NIST) Special Publication 800-145 defines cloud computing as \"a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.\" This definition has become the canonical reference point for the industry and academia alike."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NIST definition is significant because it establishes a clear boundary between true cloud computing and traditional hosted services. Prior to the formalization of this definition, many vendors marketed managed hosting as \"cloud\" computing. The five essential characteristics, three service models, and four deployment models together form the complete cloud computing framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-essential-characteristics",
      children: "1.2 Essential Characteristics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "On-Demand Self-Service."
      }), " A consumer can provision computing capabilities unilaterally without requiring human interaction with the service provider. This is typically accomplished through a web portal, API, or command-line interface. The implication is profound: infrastructure that once required a purchase order, a hardware lead time of weeks, and manual configuration by system administrators can now be created in seconds through an API call."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Broad Network Access."
      }), " Resources are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, workstations). This characteristic ensures that cloud resources are not tied to a specific physical location or device. Standard protocols such as HTTPS, SSH, and TLS form the backbone of cloud accessibility."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource Pooling."
      }), " The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand. There is a sense of location independence in that the customer generally has no control or knowledge over the exact location of the provided resources but may be able to specify location at a higher level of abstraction (e.g., country, state, or availability zone). Examples of pooled resources include storage, processing power, memory, and network bandwidth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rapid Elasticity."
      }), " Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand. To the consumer, the capabilities available for provisioning often appear to be unlimited and can be appropriated in any quantity at any time. This is the defining characteristic that separates cloud computing from traditional IT infrastructure. An e-commerce platform handling Black Friday traffic might scale from ten servers to ten thousand servers and back down within hours."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Measured Service."
      }), " Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (e.g., storage, processing, bandwidth, active user accounts). Resource usage can be monitored, controlled, and reported, providing transparency for both the provider and consumer of the utilized service. This pay-per-use billing model is fundamental to cloud economics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-service-models",
      children: "1.3 Service Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Infrastructure as a Service (IaaS)."
      }), " The provider offers virtualized computing resources over the internet. The consumer can provision processing, storage, networks, and other fundamental computing resources and deploy and run arbitrary software, which can include operating systems and applications. The consumer does not manage or control the underlying cloud infrastructure but has control over operating systems, storage, and deployed applications, and possibly limited control over select networking components (e.g., host firewalls). IaaS is best suited for workloads that require fine-grained control over the infrastructure stack. Examples include AWS EC2, Azure Virtual Machines, and Google Compute Engine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Platform as a Service (PaaS)."
      }), " The consumer deploys applications onto the cloud infrastructure using programming languages, libraries, services, and tools supported by the provider. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, or storage, but has control over the deployed applications and possibly the configuration settings for the application-hosting environment. PaaS abstracts away infrastructure management entirely, allowing developers to focus exclusively on code. Examples include AWS Elastic Beanstalk, Azure App Service, and Google App Engine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Software as a Service (SaaS)."
      }), " The consumer uses the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (e.g., web-based email), or a programmatic interface. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings. Examples include Salesforce, Google Workspace, Microsoft 365, and Slack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph On-Premises\n        A1[Applications]\n        A2[Data]\n        A3[Runtime]\n        A4[OS]\n        A5[Virtualization]\n        A6[Servers]\n        A7[Storage]\n        A8[Networking]\n    end\n    subgraph IaaS\n        B1[Applications]\n        B2[Data]\n        B3[Runtime]\n        B4[OS]\n        B5[Virtualization]\n        B6[Servers]\n        B7[Storage]\n        B8[Networking]\n    end\n    subgraph PaaS\n        C1[Applications]\n        C2[Data]\n        C3[Runtime]\n        C4[OS]\n        C5[Virtualization]\n        C6[Servers]\n        C7[Storage]\n        C8[Networking]\n    end\n    subgraph SaaS\n        D1[Applications]\n        D2[Data]\n        D3[Runtime]\n        D4[OS]\n        D5[Virtualization]\n        D6[Servers]\n        D7[Storage]\n        D8[Networking]\n    end\n    style A1 fill:#e74c3c,color:#fff\n    style A2 fill:#e74c3c,color:#fff\n    style A3 fill:#e74c3c,color:#fff\n    style A4 fill:#e74c3c,color:#fff\n    style A5 fill:#e74c3c,color:#fff\n    style A6 fill:#e74c3c,color:#fff\n    style A7 fill:#e74c3c,color:#fff\n    style A8 fill:#e74c3c,color:#fff\n    style B1 fill:#e74c3c,color:#fff\n    style B2 fill:#e74c3c,color:#fff\n    style B3 fill:#e74c3c,color:#fff\n    style B4 fill:#e74c3c,color:#fff\n    style B5 fill:#3498db,color:#fff\n    style B6 fill:#3498db,color:#fff\n    style B7 fill:#3498db,color:#fff\n    style B8 fill:#3498db,color:#fff\n    style C1 fill:#e74c3c,color:#fff\n    style C2 fill:#e74c3c,color:#fff\n    style C3 fill:#3498db,color:#fff\n    style C4 fill:#3498db,color:#fff\n    style C5 fill:#3498db,color:#fff\n    style C6 fill:#3498db,color:#fff\n    style C7 fill:#3498db,color:#fff\n    style C8 fill:#3498db,color:#fff\n    style D1 fill:#e74c3c,color:#fff\n    style D2 fill:#3498db,color:#fff\n    style D3 fill:#3498db,color:#fff\n    style D4 fill:#3498db,color:#fff\n    style D5 fill:#3498db,color:#fff\n    style D6 fill:#3498db,color:#fff\n    style D7 fill:#3498db,color:#fff\n    style D8 fill:#3498db,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-service-model-comparison",
      children: "1.4 Service Model Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "What you manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apps, data, runtime, OS, middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apps, data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users, configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization, servers, storage, networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime, OS, virtualization, servers, storage, networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everything including apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Technical skill needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System administration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Development only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No technical skill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full OS and app control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-constrained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual or auto via ASG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling built in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider handles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS EC2, Azure VMs, GCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic Beanstalk, App Service, App Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Salesforce, Google Workspace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy migration, specialized workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, APIs, microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, CRM, collaboration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-deployment-models",
      children: "1.5 Deployment Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Public Cloud."
      }), " The cloud infrastructure is provisioned for open use by the general public. It may be owned, managed, and operated by a business, academic, or government organization, or some combination of them. It exists on the premises of the cloud provider. Public cloud offers economies of scale, elastic capacity, and pay-as-you-go pricing. The trade-off is reduced control over physical infrastructure and potential data residency concerns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Private Cloud."
      }), " The cloud infrastructure is provisioned for exclusive use by a single organization comprising multiple consumers (e.g., business units). It may be owned, managed, and operated by the organization, a third party, or some combination of them, and it may exist on or off premises. Private cloud offers greater control over security, compliance, and customization but requires significant capital investment and operational overhead."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid Cloud."
      }), " The cloud infrastructure is a composition of two or more distinct cloud infrastructures (private, community, or public) that remain unique entities but are bound together by standardized or proprietary technology that enables data and application portability (e.g., cloud bursting for load balancing between clouds). Hybrid cloud offers the best of both worlds: sensitive workloads remain in private cloud while burst capacity and less sensitive workloads use public cloud. The trade-off is increased architectural complexity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Community Cloud."
      }), " The cloud infrastructure is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g., mission, security requirements, policy, and compliance considerations). It may be owned, managed, and operated by one or more of the organizations in the community, a third party, or some combination of them. Community cloud is common in regulated industries such as healthcare, finance, and government."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Cloud."
      }), " Multi-cloud refers to the use of two or more public cloud providers simultaneously. This strategy avoids vendor lock-in, provides geographic redundancy, and allows organizations to use the best-of-breed services from each provider. However, multi-cloud introduces significant complexity in networking, security, and operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Deployment Model Spectrum\"\n        A[On-Premises] -->|Virtualize| B[Private Cloud]\n        B -->|Connect| C[Hybrid Cloud]\n        C -->|Expand| D[Public Cloud]\n        D -->|Multiple| E[Multi-Cloud]\n    end\n    subgraph \"Control vs Cost\"\n        F[High Control] --> G[High Cost]\n        H[Low Control] --> I[Low Cost]\n    end\n    B -.-> F\n    D -.-> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-cloud-economics",
      children: "1.6 Cloud Economics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Capital Expenditure (CAPEX)."
      }), " In the traditional on-premises IT model, organizations invest heavily in hardware, software, data center facilities, and staffing before realizing any value. CAPEX is characterized by large upfront costs, depreciation schedules spanning multiple years, and the risk of over-provisioning or under-provisioning. The organization bears the full financial risk of capacity planning errors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operational Expenditure (OPEX)."
      }), " Cloud computing shifts costs from CAPEX to OPEX, where organizations pay only for the resources they consume. This model provides financial flexibility, eliminates upfront investment, and aligns costs directly with business activity. OPEX also includes the operational costs of managing cloud resources, including data transfer, support plans, and specialized services."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cost Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional (CAPEX)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud (OPEX)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50,000?$500,000 upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0 upfront"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software licenses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual licenses, upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription, monthly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center construction/lease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Included in provider price"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power & cooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$100?$300/kW/month"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Included in provider price"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Staffing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-time ops team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced ops headcount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-provision or under-provision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic, pay-as-you-go"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, disruptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic by provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depreciation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 year schedules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No depreciation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Cost of Ownership (TCO)."
      }), " TCO analysis compares the full cost of on-premises infrastructure (hardware, software, labor, facilities, electricity, cooling, and network) against the equivalent cloud services. Cloud TCO must account for compute costs, storage costs, data transfer costs, and the labor costs of cloud operations. Organizations must also factor in the cost of downtime, disaster recovery, and security compliance. Cloud often proves more cost-effective for variable workloads, while predictable, high-utilization workloads may be cheaper on-premises."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-cloud-adoption-drivers",
      children: "1.7 Cloud Adoption Drivers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Organizations adopt cloud computing for several strategic reasons:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agility and Speed:"
        }), " Provision resources in minutes instead of weeks. Development teams can spin up test environments instantly and experiment without procurement delays."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elasticity:"
        }), " Match capacity to demand in real time. No more over-provisioning for peak load or under-provisioning and losing revenue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost Efficiency:"
        }), " Convert fixed costs to variable costs. Pay only for what you use, when you use it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Scale:"
        }), " Deploy applications in data centers around the world with a few clicks. Reach users wherever they are with low latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Innovation Access:"
        }), " Leverage advanced services (AI/ML, big data, IoT, serverless) that would be prohibitively expensive to build on-premises."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Focus on Core Business:"
        }), " Offload undifferentiated heavy lifting (server maintenance, patching, capacity planning) to the provider."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-common-cloud-myths",
      children: "1.8 Common Cloud Myths"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Myth 1: \"Cloud is always cheaper.\" Cloud can be more expensive for predictable, high-utilization workloads. A server running at 90% utilization 24/7 is often cheaper on-premises. Cloud's financial advantage comes from elasticity, not absolute cost."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Myth 2: \"Cloud is less secure.\" Major cloud providers invest billions in security ? more than most organizations can afford. However, the shared responsibility model means customers must configure their part correctly. Misconfiguration, not the provider, causes most cloud breaches."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Myth 3: \"Cloud means losing control.\" Organizations retain full control over their data, who accesses it, and how it is encrypted. Cloud providers offer extensive governance tools for policy enforcement, auditing, and access control."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Myth 4: \"Migration is a one-time project.\" Cloud adoption is an ongoing journey. Initial lift-and-shift migration is just the first step. Modernization, optimization, and governance are continuous processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Myth 5: \"All workloads should move to the cloud.\" Some workloads are better kept on-premises due to latency requirements, regulatory constraints, or economic factors. The right strategy is selective migration, not wholesale movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-cloud-migration-strategies-the-6-rs",
      children: "1.9 Cloud Migration Strategies (The 6 Rs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    A[Current State] --> B{Which Strategy?}\n    B --> C[Rehost<br/>Lift & Shift]\n    B --> D[Replatform<br/>Lift, Tinker & Shift]\n    B --> E[Refactor<br/>Re-architect]\n    B --> F[Repurchase<br/>Replace with SaaS]\n    B --> G[Retire<br/>Decommission]\n    B --> H[Retain<br/>Keep as-is]\n    C --> I[Fastest migration<br/>Minimal change]\n    D --> J[Some cloud optimization<br/>Moderate effort]\n    E --> K[Maximum cloud benefit<br/>Highest effort]\n    F --> L[Buy instead of build<br/>Quick win]\n    G --> M[Reduce footprint<br/>Cost saving]\n    H --> N[Defer decision<br/>Zero risk]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rehost (Lift and Shift)."
      }), " Move applications as-is to the cloud with minimal changes. Fastest migration path. Suitable for legacy applications that are difficult to modify. Often automated with tools like AWS Application Migration Service or Azure Migrate. Provides immediate benefits from data center exit but limited cloud-native advantages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Replatform (Lift, Tinker, and Shift)."
      }), " Make minor cloud-optimizing changes during migration without changing core architecture. Examples: moving from self-managed MySQL to RDS, or from on-premises load balancers to cloud-native ALB. Balances speed with some cloud benefits."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Refactor (Re-architect)."
      }), " Rebuild the application using cloud-native patterns (microservices, serverless, containers). Highest effort but maximum benefit: elasticity, reduced costs, improved resilience. Usually reserved for applications where the business value justifies the investment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Repurchase."
      }), " Replace the application with a SaaS alternative. Eliminates all maintenance burden. Common for CRM (replace with Salesforce), email (replace with Google Workspace), and HR systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Retire."
      }), " Decommission applications that are no longer needed. Many organizations find 10-20% of their application portfolio has no business owner or active users."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Retain."
      }), " Keep applications on-premises for now. Valid reasons: regulatory constraints, extreme latency sensitivity, recent major investment in on-premises infrastructure, or pending decommission."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-vendor-lock-in",
      children: "1.10 Vendor Lock-in"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vendor lock-in occurs when a customer becomes dependent on a specific provider's proprietary services and faces significant cost or complexity when switching. In cloud computing, lock-in risks include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data egress fees:"
        }), " Most providers charge to move data out ($0.05?$0.12/GB). Moving petabytes of data can cost hundreds of thousands of dollars."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proprietary APIs:"
        }), " Services like DynamoDB, SQS, and Lambda use provider-specific APIs. Code written for one provider requires rework for another."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Managed service coupling:"
        }), " Using managed databases, message queues, or AI services ties the architecture to that provider."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use open standards and multi-cloud tools (Terraform, Kubernetes, Docker)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design for portability at the application layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain data portability (avoid proprietary database features)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negotiate data egress discounts for large volumes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use cloud-agnostic abstraction layers (Dapr, Knative, CloudEvents)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-benefits-and-challenges",
      children: "1.11 Benefits and Challenges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits."
      }), " Cloud computing offers agility through rapid provisioning, global reach through geographically distributed data centers, elasticity to match capacity to demand, pay-as-you-go pricing that aligns costs with usage, reduced maintenance burden, improved disaster recovery capabilities, automatic software updates, increased collaboration, and access to advanced technologies such as machine learning, big data analytics, and serverless computing that would be prohibitively expensive to implement on-premises."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges."
      }), " Cloud adoption presents several challenges: security and compliance concerns around data protection and regulatory requirements, vendor lock-in risks associated with proprietary services, cost management complexity due to the granularity of billing, technical expertise requirements for cloud architecture and operations, latency and bandwidth constraints for latency-sensitive applications, data transfer costs for large-scale data movement, and the complexity of integrating cloud services with existing on-premises systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-major-cloud-providers",
      children: "1.12 Major Cloud Providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon Web Services (AWS), launched in 2006, remains the market leader with the broadest portfolio of services and the largest global infrastructure footprint. Microsoft Azure, launched in 2010, leads in enterprise integration with Microsoft products and hybrid cloud capabilities. Google Cloud Platform (GCP), launched in 2010, differentiates through leadership in data analytics, machine learning, and container-native infrastructure. Other significant providers include IBM Cloud, Oracle Cloud, and Alibaba Cloud, each with specific regional or industry specializations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-11-capex-vs-opex-comparison",
      children: "Example 1.1: CAPEX vs OPEX Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A company needs to run a web application with variable traffic. On-premises: the company purchases ten servers at $5,000 each ($50,000 CAPEX), networking equipment ($10,000), and staffing ($80,000/year). Cloud: the company uses EC2 instances costing $500/month when traffic is low and $3,000/month during peak, averaging $1,500/month ($18,000/year OPEX). The cloud model eliminates the $60,000 upfront investment and scales costs directly with revenue."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-12-service-model-abstraction-layers",
      children: "Example 1.2: Service Model Abstraction Layers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "On-Premises"
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
            children: "Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-13-6-rs-decision-flow",
      children: "Example 1.3: 6 Rs Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type MigrationStrategy = \"rehost\" | \"replatform\" | \"refactor\" | \"repurchase\" | \"retire\" | \"retain\";\n\ninterface Application {\n  name: string;\n  isLegacy: boolean;\n  canModify: boolean;\n  hasSaaSAlternative: boolean;\n  hasActiveUsers: boolean;\n  businessCriticality: \"low\" | \"medium\" | \"high\";\n}\n\nfunction determineMigrationStrategy(app: Application): MigrationStrategy {\n  if (!app.hasActiveUsers) return \"retire\";\n\n  if (app.hasSaaSAlternative && app.businessCriticality !== \"high\") {\n    return \"repurchase\";\n  }\n\n  if (app.isLegacy && !app.canModify) {\n    return \"rehost\";\n  }\n\n  if (app.businessCriticality === \"high\" && app.canModify) {\n    return \"refactor\";\n  }\n\n  return \"replatform\";\n}\n\nconst apps: Application[] = [\n  { name: \"Legacy CRM\", isLegacy: true, canModify: false, hasSaaSAlternative: true, hasActiveUsers: true, businessCriticality: \"high\" },\n  { name: \"Internal Dashboard\", isLegacy: false, canModify: true, hasSaaSAlternative: false, hasActiveUsers: true, businessCriticality: \"low\" },\n  { name: \"EOL Reporting Tool\", isLegacy: true, canModify: false, hasSaaSAlternative: false, hasActiveUsers: false, businessCriticality: \"low\" },\n];\n\nfor (const app of apps) {\n  const strategy = determineMigrationStrategy(app);\n  console.log(`${app.name}: ${strategy}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Legacy CRM: repurchase\nInternal Dashboard: refactor\nEOL Reporting Tool: retire\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cloud computing transforms IT from a capital-intensive, fixed-capacity utility to an elastic, pay-per-use model that lets organizations match infrastructure spend directly to business activity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start your cloud journey with SaaS for standard business functions (email, CRM), then adopt PaaS for custom development, and finally IaaS only when you need fine-grained infrastructure control. This minimizes operational overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The \"pay-as-you-go\" model sounds cheap, but uncontrolled cloud spending is a major risk. Without cost governance, orphaned resources, oversized instances, and data transfer fees can quickly exceed on-premises costs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualized compute, storage, network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User manages OS and apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy lift-and-shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed runtime for applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User only writes code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully managed software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User just uses the app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, collaboration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared multi-tenant infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Economies of scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startups, variable workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-tenant dedicated infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum control, compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulated industries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Private connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility + control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burst capacity, DR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple public providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid lock-in, best-of-breed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy, geographic coverage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Essential Characteristics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-demand, Broad access, Pooling, Elasticity, Measured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All five must be present for true cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Service Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS, PaaS, SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increasing abstraction = decreasing control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public, Private, Hybrid, Community, Multi-Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choice depends on compliance and workload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPEX vs OPEX, TCO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud wins for variable, loses for predictable high-usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6 Rs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rehost, Replatform, Refactor, Repurchase, Retire, Retain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select by app criticality and modifiability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Major Providers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS, Azure, GCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each has different strengths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NIST Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture guidelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-user tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise productivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-site architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data residency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6 Rs Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portfolio rationalization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following is NOT one of the five essential characteristics of cloud computing as defined by NIST?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) On-demand self-service"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Rapid elasticity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Open-source software"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Measured service"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Open-source software.** The five essential characteristics are on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. Open-source is not a requirement for cloud computing.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A healthcare startup needs to process patient data subject to HIPAA while using cloud services. Which deployment model is most appropriate?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Public cloud only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Private cloud only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Hybrid cloud ? sensitive data in private, analytics in public"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Community cloud ? shared with other healthcare organizations"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Hybrid cloud.** Hybrid cloud allows the startup to keep sensitive patient data in a private or community cloud environment while using public cloud for non-sensitive analytics, balancing compliance with cost efficiency.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does cloud computing favor variable workloads over predictable, high-utilization workloads?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Cloud is always more expensive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Cloud's strength is elasticity ? scaling down when not needed saves money; a fully utilized on-prem server is cheaper"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Variable workloads are easier to program"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Cloud providers charge less for variable usage"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Cloud's strength is elasticity ? scaling down when not needed saves money; a fully utilized on-prem server is cheaper.** The cloud's pay-per-use model is most cost-effective for workloads with fluctuating demand.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which cloud migration strategy involves making minimal changes and moving applications as-is?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Refactor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Replatform"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Rehost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Repurchase"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Rehost (Lift and Shift).** Rehost moves applications with minimal changes and is the fastest migration path, though it yields the least cloud-native benefit.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary risk of vendor lock-in in cloud computing?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Provider goes out of business"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) High switching costs due to data egress fees and proprietary APIs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Loss of source code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Mandatory software upgrades"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) High switching costs due to data egress fees and proprietary APIs.** Data egress fees ($0.05?$0.12/GB) and provider-specific service APIs create economic and technical barriers to switching providers.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cloud-service-cost-calculator",
      children: "TypeScript: Cloud Service Cost Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PricingTier {\n  provider: \"aws\" | \"azure\" | \"gcp\";\n  service: string;\n  unitPrice: number;\n  unit: string;\n  freeTier: boolean;\n}\n\ninterface CostEstimate {\n  compute: number;\n  storage: number;\n  dataTransfer: number;\n  database: number;\n  total: number;\n}\n\nclass CloudCostCalculator {\n  private pricingMatrix: PricingTier[] = [\n    { provider: \"aws\", service: \"compute-t3-medium\", unitPrice: 0.0416, unit: \"hour\", freeTier: false },\n    { provider: \"aws\", service: \"storage-s3-standard\", unitPrice: 0.023, unit: \"gb-month\", freeTier: true },\n    { provider: \"aws\", service: \"data-transfer-out\", unitPrice: 0.09, unit: \"gb\", freeTier: false },\n    { provider: \"aws\", service: \"rds-postgres-t3-medium\", unitPrice: 0.068, unit: \"hour\", freeTier: false },\n    { provider: \"azure\", service: \"compute-b2s\", unitPrice: 0.0408, unit: \"hour\", freeTier: false },\n    { provider: \"azure\", service: \"storage-blob-hot\", unitPrice: 0.0208, unit: \"gb-month\", freeTier: true },\n    { provider: \"azure\", service: \"data-transfer-out\", unitPrice: 0.087, unit: \"gb\", freeTier: false },\n    { provider: \"gcp\", service: \"compute-n2-standard-2\", unitPrice: 0.0516, unit: \"hour\", freeTier: false },\n    { provider: \"gcp\", service: \"storage-standard\", unitPrice: 0.026, unit: \"gb-month\", freeTier: true },\n    { provider: \"gcp\", service: \"data-transfer-out\", unitPrice: 0.12, unit: \"gb\", freeTier: false },\n  ];\n\n  estimateMonthly(params: {\n    provider: \"aws\" | \"azure\" | \"gcp\";\n    instances: number;\n    instanceHours: number;\n    storageGB: number;\n    dataTransferGB: number;\n    useDatabase: boolean;\n  }): CostEstimate {\n    const computeRate = this.pricingMatrix.find(\n      (p) => p.provider === params.provider && p.service.startsWith(\"compute-\")\n    )!;\n    const storageRate = this.pricingMatrix.find(\n      (p) => p.provider === params.provider && p.service.startsWith(\"storage-\")\n    )!;\n    const transferRate = this.pricingMatrix.find(\n      (p) => p.provider === params.provider && p.service === \"data-transfer-out\"\n    )!;\n    const dbRate = this.pricingMatrix.find(\n      (p) => p.provider === params.provider && p.service.startsWith(\"rds-\")\n    );\n\n    const compute = params.instances * params.instanceHours * computeRate.unitPrice;\n    const storage = params.storageGB * storageRate.unitPrice;\n    const dataTransfer = params.dataTransferGB * transferRate.unitPrice;\n    const database = params.useDatabase && dbRate ? 730 * dbRate.unitPrice : 0;\n\n    return { compute, storage, dataTransfer, database, total: compute + storage + dataTransfer + database };\n  }\n\n  compareProviders(params: Omit<Parameters<CloudCostCalculator[\"estimateMonthly\"]>[0], \"provider\">): Record<string, CostEstimate> {\n    const results: Record<string, CostEstimate> = {};\n    for (const provider of [\"aws\", \"azure\", \"gcp\"] as const) {\n      results[provider] = this.estimateMonthly({ ...params, provider });\n    }\n    return results;\n  }\n\n  findCheapest(params: Omit<Parameters<CloudCostCalculator[\"estimateMonthly\"]>[0], \"provider\">): { provider: string; cost: number } {\n    const results = this.compareProviders(params);\n    let best = { provider: \"\", cost: Infinity };\n    for (const [provider, estimate] of Object.entries(results)) {\n      if (estimate.total < best.cost) { best = { provider, cost: estimate.total }; }\n    }\n    return best;\n  }\n}\n\nconst calculator = new CloudCostCalculator();\nconst workload = { instances: 3, instanceHours: 730, storageGB: 500, dataTransferGB: 1000, useDatabase: true };\nconsole.log(\"AWS monthly:\", \"$\" + calculator.estimateMonthly({ ...workload, provider: \"aws\" }).total.toFixed(2));\nconsole.log(\"Azure monthly:\", \"$\" + calculator.estimateMonthly({ ...workload, provider: \"azure\" }).total.toFixed(2));\nconsole.log(\"GCP monthly:\", \"$\" + calculator.estimateMonthly({ ...workload, provider: \"gcp\" }).total.toFixed(2));\nconsole.log(\"Cheapest:\", calculator.findCheapest(workload));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-region-latency-comparison-tool",
      children: "TypeScript: Region Latency Comparison Tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RegionData {\n  name: string;\n  provider: string;\n  continent: string;\n  latencyFrom: Record<string, number>;\n  complianceCertifications: string[];\n}\n\nclass RegionSelector {\n  private regions: RegionData[] = [\n    { name: \"us-east-1\", provider: \"AWS\", continent: \"North America\", latencyFrom: { \"New York\": 5, \"London\": 80, \"Tokyo\": 180, \"Sydney\": 250 }, complianceCertifications: [\"SOC\", \"PCI\", \"HIPAA\"] },\n    { name: \"eu-west-1\", provider: \"AWS\", continent: \"Europe\", latencyFrom: { \"New York\": 80, \"London\": 5, \"Tokyo\": 250, \"Sydney\": 280 }, complianceCertifications: [\"SOC\", \"PCI\", \"GDPR\"] },\n    { name: \"ap-southeast-1\", provider: \"AWS\", continent: \"Asia\", latencyFrom: { \"New York\": 220, \"London\": 180, \"Tokyo\": 70, \"Sydney\": 100 }, complianceCertifications: [\"SOC\", \"PCI\"] },\n    { name: \"us-central1\", provider: \"GCP\", continent: \"North America\", latencyFrom: { \"New York\": 20, \"London\": 90, \"Tokyo\": 190, \"Sydney\": 260 }, complianceCertifications: [\"SOC\", \"PCI\", \"HIPAA\"] },\n    { name: \"europe-west1\", provider: \"GCP\", continent: \"Europe\", latencyFrom: { \"New York\": 90, \"London\": 15, \"Tokyo\": 260, \"Sydney\": 290 }, complianceCertifications: [\"SOC\", \"PCI\", \"GDPR\"] },\n  ];\n\n  findBestRegion(targetUsers: Record<string, number>, requirements: { minCompliance?: string[]; providers?: string[] }): RegionData[] {\n    const scored = this.regions\n      .filter((r) => !requirements.providers || requirements.providers.includes(r.provider))\n      .filter((r) => !requirements.minCompliance || requirements.minCompliance.every((c) => r.complianceCertifications.includes(c)))\n      .map((r) => {\n        const avgLatency = Object.entries(targetUsers)\n          .reduce((sum, [loc, weight]) => sum + (r.latencyFrom[loc] || 300) * weight, 0)\n          / Object.values(targetUsers).reduce((a, b) => a + b, 0);\n        return { region: r, avgLatency };\n      })\n      .sort((a, b) => a.avgLatency - b.avgLatency);\n\n    return scored.map((s) => s.region);\n  }\n}\n\nconst selector = new RegionSelector();\nconst topRegions = selector.findBestRegion(\n  { \"New York\": 40, \"London\": 30, \"Tokyo\": 20, \"Sydney\": 10 },\n  { providers: [\"AWS\", \"GCP\"] }\n);\nconsole.log(\"Top regions for user distribution:\", topRegions.slice(0, 2).map((r) => r.name + \" (\" + r.provider + \")\").join(\", \"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cloud-adoption-maturity--tco-comparator",
      children: "TypeScript: Cloud Adoption Maturity & TCO Comparator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TCOInput {\n  serverCount: number; upfrontPerServer: number; opsYearPerServer: number; years: number;\n  onDemandHourly: number; reservedHourly: number; monthlyDataTransfer: number; monthlyManagedDB: number;\n}\n\nclass TCOComparator {\n  compute(input: TCOInput): Record<string, { capex: number; opex: number; total: number }> {\n    const hoursPerYear = 8760;\n    const onPrem = {\n      capex: input.serverCount * input.upfrontPerServer,\n      opex: input.serverCount * input.opsYearPerServer * input.years,\n    };\n    onPrem.total = onPrem.capex + onPrem.opex;\n\n    const cloud = (hourly: number) => {\n      const computeCost = input.serverCount * hourly * hoursPerYear * input.years;\n      const networkCost = input.monthlyDataTransfer * 12 * input.years;\n      const dbCost = input.monthlyManagedDB * 12 * input.years;\n      return { capex: 0, opex: computeCost + networkCost + dbCost, total: computeCost + networkCost + dbCost };\n    };\n\n    return { onPremises: onPrem, onDemand: cloud(input.onDemandHourly), reserved: cloud(input.reservedHourly) };\n  }\n\n  rank(adoptionLevel: string): string[] {\n    const stages: Record<string, string[]> = {\n      \"initial\": [\"Assess\", \"Pilot 3-5 apps\"],\n      \"established\": [\"Migrate phase 1\", \"Cloud COE\"],\n      \"optimized\": [\"FinOps\", \"Well-Architected reviews\"],\n      \"transformed\": [\"Cloud-native\", \"AI/ML integration\"],\n    };\n    return stages[adoptionLevel] || stages[\"initial\"];\n  }\n}\n\nconst tco = new TCOComparator();\nconst result = tco.compute({\n  serverCount: 50, upfrontPerServer: 8000, opsYearPerServer: 3000, years: 3,\n  onDemandHourly: 0.0832, reservedHourly: 0.0525, monthlyDataTransfer: 500, monthlyManagedDB: 200,\n});\nObject.entries(result).forEach(([k, v]) => console.log(`${k}: $${v.total.toLocaleString()}`));\nconsole.log(\"Transformed stage actions:\", tco.rank(\"transformed\").join(\" ? \"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// introduction\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'introduction', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// introduction - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'introduction' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\nCloud computing represents a paradigm shift from capital-intensive, fixed-capacity IT infrastructure to an elastic, pay-per-use utility model. The five essential characteristics of on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service define the boundaries of true cloud computing. The three service models (IaaS, PaaS, SaaS) offer increasing levels of abstraction, while deployment models (public, private, hybrid, community, multi-cloud) provide flexibility in how cloud infrastructure is owned and operated. Cloud economics favor variable workloads through the CAPEX-to-OPEX shift, though careful TCO analysis is required. Organizations must weigh the benefits of agility, scale, and innovation against the challenges of security, compliance, and operational complexity. The 6 Rs framework provides a structured approach to cloud migration, while vendor lock-in awareness and mitigation strategies ensure long-term architectural flexibility.\n\n## Exercises\n\n### Review Questions\n\n1. What are the five essential characteristics of cloud computing as defined by NIST SP 800-145?\n2. Explain the difference between IaaS, PaaS, and SaaS. Provide a real-world example of each.\n3. How does resource pooling enable multi-tenancy in cloud environments?\n4. Compare public cloud, private cloud, and hybrid cloud. What factors drive the choice between them?\n5. What is the difference between CAPEX and OPEX, and how does cloud computing change the cost structure?\n6. Describe rapid elasticity and explain why it is the defining characteristic of cloud computing.\n7. What is the shared responsibility model in cloud computing, and why is it important?\n8. Identify three major cloud providers and describe a key differentiator for each.\n9. What challenges does vendor lock-in present in a multi-cloud strategy?\n10. Explain the 6 Rs of cloud migration and when to use each.\n\n### Application Problems\n\n1. A startup expects traffic to grow from zero to one million users in eighteen months. Compare the financial and operational implications of building an on-premises data center versus using public cloud infrastructure.\n\n2. For each of the following workloads, recommend the most appropriate service model (IaaS, PaaS, or SaaS) and justify your reasoning: a) a legacy enterprise application running on Windows Server with custom DLLs, b) a team of five developers building a new REST API, c) an organization requiring email and document collaboration for 10,000 employees, d) a data science team running custom machine learning training jobs on GPU instances.\n\n3. A hospital system must store patient records subject to HIPAA regulations. Select a deployment model and explain how it addresses compliance, data residency, and security requirements while maintaining operational efficiency.\n\n4. An e-commerce platform experiences 95% normal traffic and 5% flash sales with ten times the normal load. Design a hybrid cloud strategy that handles the flash sales without maintaining excess idle capacity.\n\n5. Use the 6 Rs framework to create a migration plan for the following application portfolio: a) a legacy mainframe batch processing system, b) a modern Node.js API, c) an old SharePoint intranet, d) an Excel-based reporting tool used by three people, e) a Salesforce CRM system.\n\n### Challenge Problem\n\nA multinational corporation operates in 30 countries with varying data sovereignty laws. The company runs 200 applications, including 50 legacy applications that cannot be modified and 150 modern microservices. The board has mandated a 40% reduction in IT operating costs over three years and a 50% improvement in time-to-market for new features. Design a comprehensive cloud adoption strategy covering the following: recommended deployment model(s), service model allocation, migration timeline with phase descriptions, cost optimization approach, compliance architecture spanning multiple jurisdictions, and a governance framework for managing cloud resources across business units.\n\n## TypeScript Infrastructure as Code: AWS CDK Multi-Tier App\n\nThe AWS Cloud Development Kit (CDK) lets you define cloud infrastructure in TypeScript:\n\n```typescript\nimport * as cdk from \"aws-cdk-lib\";\nimport * as ec2 from \"aws-cdk-lib/aws-ec2\";\nimport * as rds from \"aws-cdk-lib/aws-rds\";\nimport * as elb from \"aws-cdk-lib/aws-elasticloadbalancingv2\";\nimport * as autoscaling from \"aws-cdk-lib/aws-autoscaling\";\n\nclass MultiTierAppStack extends cdk.Stack {\n  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {\n    super(scope, id, props);\n\n    const vpc = new ec2.Vpc(this, \"AppVpc\", {\n      maxAzs: 2,\n      natGateways: 1,\n    });\n\n    const alb = new elb.ApplicationLoadBalancer(this, \"AppALB\", {\n      vpc,\n      internetFacing: true,\n    });\n\n    const asg = new autoscaling.AutoScalingGroup(this, \"AppASG\", {\n      vpc,\n      instanceType: ec2.InstanceType.of(\n        ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM\n      ),\n      machineImage: ec2.MachineImage.latestAmazonLinux2(),\n      minCapacity: 2,\n      maxCapacity: 10,\n    });\n\n    const listener = alb.addListener(\"HttpListener\", { port: 80 });\n    listener.addTargets(\"AppTarget\", {\n      port: 80,\n      targets: [asg],\n    });\n\n    new rds.DatabaseInstance(this, \"AppDatabase\", {\n      engine: rds.DatabaseInstanceEngine.postgres({\n        version: rds.PostgresEngineVersion.VER_16,\n      }),\n      vpc,\n      allocatedStorage: 100,\n      multiAz: true,\n      backupRetention: cdk.Duration.days(7),\n      deletionProtection: true,\n    });\n  }\n}\n\nconst app = new cdk.App();\nnew MultiTierAppStack(app, \"MultiTierApp\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This CDK stack provisions a production-ready three-tier architecture: an ALB for traffic distribution, an auto-scaling group for compute capacity, and a Multi-AZ RDS database ? all in about 50 lines of TypeScript. The same infrastructure would require hundreds of lines of YAML in CloudFormation or manual clicks in the console."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pulumi-cloud-agnostic-infrastructure-as-code",
      children: "Pulumi: Cloud-Agnostic Infrastructure as Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pulumi provides a similar experience across AWS, Azure, and GCP using standard TypeScript:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as aws from \"@pulumi/aws\";\nimport * as pulumi from \"@pulumi/pulumi\";\n\nconst config = new pulumi.Config();\nconst instanceType = config.get(\"instanceType\") || \"t3.medium\";\n\nconst vpc = new aws.ec2.Vpc(\"app-vpc\", {\n  cidrBlock: \"10.0.0.0/16\",\n  enableDnsHostnames: true,\n  tags: { Name: \"app-vpc\" },\n});\n\nconst subnet = new aws.ec2.Subnet(\"app-subnet\", {\n  vpcId: vpc.id,\n  cidrBlock: \"10.0.1.0/24\",\n  mapPublicIpOnLaunch: true,\n});\n\nconst sg = new aws.ec2.SecurityGroup(\"app-sg\", {\n  vpcId: vpc.id,\n  ingress: [\n    { protocol: \"tcp\", fromPort: 80, toPort: 80, cidrBlocks: [\"0.0.0.0/0\"] },\n    { protocol: \"tcp\", fromPort: 22, toPort: 22, cidrBlocks: [\"10.0.0.0/8\"] },\n  ],\n  egress: [\n    { protocol: \"-1\", fromPort: 0, toPort: 0, cidrBlocks: [\"0.0.0.0/0\"] },\n  ],\n});\n\nconst instance = new aws.ec2.Instance(\"app-server\", {\n  instanceType,\n  vpcSecurityGroupIds: [sg.id],\n  ami: \"ami-0c55b159cbfafe1f0\",\n  subnetId: subnet.id,\n  userData: `#!/bin/bash\nyum install -y httpd\nsystemctl start httpd\necho \"<h1>Deployed with Pulumi&lt;/h1&gt;\" > /var/www/html/index.html`,\n});\n\nexport const publicIp = instance.publicIp;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-case-study-capital-ones-cloud-migration",
      children: "Real-World Case Study: Capital One's Cloud Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capital One transformed from a traditional bank operating on-premises data centers to one of the most cloud-forward financial institutions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 (2015?2016) ? Foundation:"
      }), " Capital One adopted AWS as their primary cloud provider, establishing a cloud center of excellence and training 1,000+ engineers. They focused on the shared responsibility model and security-first migration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 (2017?2019) ? Migration:"
      }), " Capital One migrated 65% of their applications to AWS using a combination of rehosting and refactoring. They developed internal tooling for automated security scanning and compliance validation. Customer-facing applications like the Capital One Mobile app and CreditWise were re-architected as cloud-native microservices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 (2020?2023) ? Modernization:"
      }), " Capital One adopted a cloud-first strategy for all new development. They migrated core banking systems to AWS, became the first major US bank to go all-in on public cloud, and closed all their primary data centers. They saved $2.5 billion in infrastructure costs over five years."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Success Factors:"
      }), " Executive commitment from the CEO, a dedicated cloud engineering team, investment in cloud training and certification, automated compliance and security tooling, and a phased approach balancing speed with risk management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-cloud-architecture-comparison",
      children: "Multi-Cloud Architecture Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"AWS-Centric\"\n        A1[Route53]\n        A2[CloudFront CDN]\n        A3[ALB]\n        A4[ECS Fargate]\n        A5[RDS Multi-AZ]\n        A1 --> A2 --> A3 --> A4 --> A5\n    end\n    subgraph \"Azure-Centric\"\n        B1[Azure DNS]\n        B2[Azure Front Door]\n        B3[App Gateway]\n        B4[AKS]\n        B5[Azure SQL DB]\n        B1 --> B2 --> B3 --> B4 --> B5\n    end\n    subgraph \"GCP-Centric\"\n        C1[Cloud DNS]\n        C2[Cloud CDN]\n        C3[HTTP LB]\n        C4[Cloud Run]\n        C5[Cloud SQL]\n        C1 --> C2 --> C3 --> C4 --> C5\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloud-adoption-journey-stages",
      children: "Cloud Adoption Journey Stages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    P1[Assess<br/>Portfolio analysis<br/>TCO modeling] --> P2[Pilot<br/>3-5 apps<br/>Build expertise]\n    P2 --> P3[Migrate<br/>Phase 1<br/>Rehost + Replatform]\n    P3 --> P4[Modernize<br/>Phase 2<br/>Refactor key apps]\n    P4 --> P5[Optimize<br/>Ongoing<br/>FinOps + Governance]\n    P5 --> P1\n    style P1 fill:#4a90d9,color:#fff\n    style P2 fill:#50b86c,color:#fff\n    style P3 fill:#f5a623,color:#fff\n    style P4 fill:#d94a4a,color:#fff\n    style P5 fill:#7b61d9,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercise",
      children: "Additional Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCO Analysis:"
        }), " A company runs 50 servers at 60% utilization on-premises (each server costs $8,000 upfront + $3,000/year in ops). Calculate the 3-year TCO. Compare this to running equivalent EC2 instances on-demand (t3.large at $0.0832/hr) versus 1-year reserved instances ($0.0525/hr). Factor in data transfer costs of $500/month and managed database costs of $200/month. Which option is most cost-effective?"]
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