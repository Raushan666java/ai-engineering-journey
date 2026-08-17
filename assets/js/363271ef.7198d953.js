"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81902],{

/***/ 18879
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_03_cloud_compute_md_363_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-03-cloud-compute-md-363.json
const site_docs_courses_cloud_computing_03_cloud_compute_md_363_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/03-cloud-compute","title":"Chapter 3: Cloud Compute Services","description":"Previous Virtualization | Next Cloud Storage Services","source":"@site/docs/courses/cloud-computing/03-cloud-compute.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/03-cloud-compute","permalink":"/ai-engineering-journey/cloud-computing/03-cloud-compute","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-cloud-compute","slug":"/cloud-computing/03-cloud-compute","title":"Chapter 3: Cloud Compute Services","sidebar_label":"Chapter 3: Cloud Compute Services","sidebar_position":3},"sidebar":"course-cloud-computing","previous":{"title":"Chapter 2: Virtualization","permalink":"/ai-engineering-journey/cloud-computing/02-virtualization"},"next":{"title":"Chapter 4: Cloud Storage Services","permalink":"/ai-engineering-journey/cloud-computing/04-cloud-storage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/03-cloud-compute.md


const frontMatter = {
	id: '03-cloud-compute',
	slug: '/cloud-computing/03-cloud-compute',
	title: 'Chapter 3: Cloud Compute Services',
	sidebar_label: 'Chapter 3: Cloud Compute Services',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Cloud Compute Services';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "3.1 The Virtual Machine Model in the Cloud",
  "id": "31-the-virtual-machine-model-in-the-cloud",
  "level": 3
}, {
  "value": "3.2 Provider Service Comparison",
  "id": "32-provider-service-comparison",
  "level": 3
}, {
  "value": "3.3 Instance Families and Selection",
  "id": "33-instance-families-and-selection",
  "level": 3
}, {
  "value": "3.4 Detailed Instance Type Specifications",
  "id": "34-detailed-instance-type-specifications",
  "level": 3
}, {
  "value": "3.5 Lifecycle and Pricing Models",
  "id": "35-lifecycle-and-pricing-models",
  "level": 3
}, {
  "value": "3.6 Storage for Compute",
  "id": "36-storage-for-compute",
  "level": 3
}, {
  "value": "3.7 Scaling and Availability Patterns",
  "id": "37-scaling-and-availability-patterns",
  "level": 3
}, {
  "value": "3.8 Load Balancing",
  "id": "38-load-balancing",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 3.1: Multi-Cloud Instance Deployment (CLI)",
  "id": "example-31-multi-cloud-instance-deployment-cli",
  "level": 3
}, {
  "value": "Example 3.2: Configure Auto-Scaling Policy (AWS)",
  "id": "example-32-configure-auto-scaling-policy-aws",
  "level": 3
}, {
  "value": "Example 3.3: TypeScript AWS SDK ? Launch Instances",
  "id": "example-33-typescript-aws-sdk--launch-instances",
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
  "value": "TypeScript: Auto Scaling Group Simulator",
  "id": "typescript-auto-scaling-group-simulator",
  "level": 3
}, {
  "value": "TypeScript: Spot Fleet Optimizer",
  "id": "typescript-spot-fleet-optimizer",
  "level": 3
}, {
  "value": "TypeScript: Instance Config Validator",
  "id": "typescript-instance-config-validator",
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
        id: "chapter-3-cloud-compute-services",
        children: "Chapter 3: Cloud Compute Services"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/02-virtualization",
          children: "Chapter 2: Virtualization"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/04-cloud-storage",
          children: "Chapter 4: Cloud Storage Services"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast compute services across AWS (EC2), Azure (Virtual Machines), and GCP (Compute Engine)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize instance families and select the appropriate type for specific workload profiles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate pricing models including on-demand, spot/preemptible, and commitment-based options."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement automated scaling using Auto Scaling Groups, Scale Sets, and Managed Instance Groups."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure persistent block storage and instance-store volumes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design high-availability architectures using placement groups and availability zones."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and configure multi-layer load balancing solutions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand auto-scaling strategies and load balancing algorithms."
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
            children: "VM Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2, Azure VMs, GCE ? same concept, different implementations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose provider by integrated services, not VM features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance Families"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, Compute, Memory, Storage, GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match instance type to workload profile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-Demand, Spot, Reserved, Dedicated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mix models to optimize cost: baseline ? Reserved, spikes ? On-Demand, batch ? Spot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto Scaling Groups, Scale Sets, MIGs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal scaling is the cloud-native approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral (instance store) vs Persistent (EBS/PD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never store critical data on ephemeral volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 (network) vs L7 (application)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use L7 for HTTP apps, L4 for ultra-low latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autoscaling Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target tracking, Step scaling, Scheduled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match scaling strategy to traffic pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[VM Model Overview] --> B[Instance Families]\n    B --> C[Pricing Models]\n    C --> D[Storage Options]\n    D --> E[Scaling & HA]\n    E --> F[Auto Scaling Strategies]\n    F --> G[Load Balancing Algorithms]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-the-virtual-machine-model-in-the-cloud",
      children: "3.1 The Virtual Machine Model in the Cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud compute services provide resizable, on-demand virtual machine (VM) instances. These services form the fundamental \"Infrastructure as a Service\" (IaaS) layer. While the underlying hypervisors vary ? AWS uses Nitro (KVM-based), Azure uses Hyper-V, and GCP uses KVM ? the abstraction provided to the consumer is a consistent set of virtual CPU (vCPU), memory, storage, and networking resources."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The primary advantage of cloud compute is the shift from physical hardware procurement to software-defined provisioning. This enables \"just-in-time\" infrastructure where resources are created in seconds and terminated when no longer needed, supporting the cloud's core promise of agility and elasticity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-provider-service-comparison",
      children: "3.2 Provider Service Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS EC2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GCP Compute Engine"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic Compute Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMI (Amazon Machine Image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Image / VHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine Image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto Scaling Groups (ASG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM Scale Sets (VMSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Instance Groups (MIG)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary Disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBS (Elastic Block Store)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Managed Disks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent Disk (PD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated Hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated Hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated Hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sole-Tenant Nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-instance-families-and-selection",
      children: "3.3 Instance Families and Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Providers organize instances into families optimized for different workloads. Naming conventions typically include a family identifier, a generation number, and a size (e.g., AWS ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m5.large"
      }), ", Azure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "D2s_v5"
      }), ", GCP ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n2-standard-2"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Instance Families\"\n        A[General Purpose] --> A1[Web servers]\n        A --> A2[Dev/test]\n        A --> A3[Small DBs]\n        \n        B[Compute Optimized] --> B1[Batch processing]\n        B --> B2[Media transcoding]\n        B --> B3[Scientific modeling]\n        \n        C[Memory Optimized] --> C1[In-memory DBs]\n        C --> C2[Real-time analytics]\n        C --> C3[SAP HANA]\n        \n        D[Storage Optimized] --> D1[NoSQL DBs]\n        D --> D2[Data warehousing]\n        D --> D3[Distributed FS]\n        \n        E[Accelerated Computing] --> E1[ML training]\n        E --> E2[3D rendering]\n        E --> E3[Financial modeling]\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vCPU:Memory Ratio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GCP Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "General Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t3, m5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n2, e2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-intensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c5, c6g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c2, c3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:8 to 1:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large in-memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r5, x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m1, m3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:4 to 1:8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i3, d2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU/FPGA workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p3, g4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NC, ND-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a2, g2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-detailed-instance-type-specifications",
      children: "3.4 Detailed Instance Type Specifications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vCPUs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory (GB)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network (Gbps)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Price/hr (On-Demand)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t3.micro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.0104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-traffic web, dev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t3.medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.0416"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small apps, dev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "m5.large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c5.2xlarge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r5.4xlarge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory databases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p3.2xlarge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$3.06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML training (1 GPU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i3.2xlarge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.624"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoSQL, NVMe SSD"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-lifecycle-and-pricing-models",
      children: "3.5 Lifecycle and Pricing Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud compute economics allow for significant cost optimization through tiered pricing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Pricing Models\"\n        A[On-Demand] -->|Highest cost,<br/>Max flexibility| D[Workload Matching]\n        B[Spot/Preemptible] -->|Up to 90% off,<br/>Can be interrupted| D\n        C[Reserved/CUD] -->|40-60% off,<br/>1-3yr commitment| D\n        E[Dedicated] -->|Full host,<br/>BYOL/Compliance| D\n    end\n    D --> F[Optimal Cost]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-Demand:"
        }), " Pay-per-second or per-hour with no commitment. Highest cost but maximum flexibility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spot (AWS/Azure) / Preemptible (GCP):"
        }), " Access to spare capacity at up to 90% discount. Instances can be reclaimed by the provider with short notice (30s to 2min). Best for fault-tolerant, stateless workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reserved / Committed Use:"
        }), " Discount for committing to 1- or 3-year usage. AWS uses Reserved Instances and Savings Plans; GCP uses Committed Use Discounts (CUDs); Azure uses Reserved Virtual Machine Instances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dedicated Hardware:"
        }), " Physical servers dedicated to a single tenant. Necessary for specific licensing (BYOL) or strict regulatory compliance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spot Instance Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as User\n    participant Spot as Spot Request\n    participant EC2 as EC2 Service\n\n    User->>Spot: Create spot request\n    Spot->>EC2: Bid for capacity\n    EC2-->>Spot: Instance launched\n    Spot-->>User: Instance running\n    Note over User,EC2: Normal operation\n    EC2->>Spot: Capacity needed elsewhere\n    Spot->>User: 2-minute termination notice\n    User->>EC2: Checkpoint state\n    EC2-->>Spot: Instance terminated\n    User->>Spot: Request new capacity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-storage-for-compute",
      children: "3.6 Storage for Compute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VMs typically interact with two types of block storage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ephemeral / Instance Store:"
        }), " Physically attached to the host computer. Offers high IOPS and low latency but data is lost if the instance is stopped or terminated. Used for swap space, caches, and temporary data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistent Block Storage:"
        }), " Network-attached storage that persists independently of the VM lifecycle. Can be detached from one instance and attached to another.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance Tiers:"
            }), " Standard HDD, Balanced SSD, High-Performance SSD (Provisioned IOPS), and Ultra Disks for sub-millisecond latency."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface StorageVolume {\n  type: \"instance-store\" | \"ebs\" | \"persistent-disk\";\n  sizeGB: number;\n  iops: number;\n  throughputMBps: number;\n  persistent: boolean;\n}\n\nfunction selectStorageForWorkload(\n  needsPersistence: boolean,\n  requiredIOPS: number,\n  budgetDollarsPerGB: number\n): StorageVolume {\n  if (!needsPersistence) {\n    return {\n      type: \"instance-store\",\n      sizeGB: 100,\n      iops: 30000,\n      throughputMBps: 500,\n      persistent: false,\n    };\n  }\n\n  if (requiredIOPS > 10000) {\n    return {\n      type: \"ebs\",\n      sizeGB: 500,\n      iops: requiredIOPS,\n      throughputMBps: 1000,\n      persistent: true,\n    }; // Provisioned IOPS SSD\n  }\n\n  return {\n    type: \"ebs\",\n    sizeGB: 500,\n    iops: 3000,\n    throughputMBps: 250,\n    persistent: true,\n  }; // General Purpose SSD\n}\n\nconst dbStorage = selectStorageForWorkload(true, 20000, 0.5);\nconsole.log(\"Database storage:\", JSON.stringify(dbStorage, null, 2));\n\nconst cacheStorage = selectStorageForWorkload(false, 5000, 0.1);\nconsole.log(\"Cache storage:\", JSON.stringify(cacheStorage, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Database storage: {\n  \"type\": \"ebs\",\n  \"sizeGB\": 500,\n  \"iops\": 20000,\n  \"throughputMBps\": 1000,\n  \"persistent\": true\n}\nCache storage: {\n  \"type\": \"instance-store\",\n  \"sizeGB\": 100,\n  \"iops\": 30000,\n  \"throughputMBps\": 500,\n  \"persistent\": false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-scaling-and-availability-patterns",
      children: "3.7 Scaling and Availability Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Horizontal Scaling"
      }), " involves adding more instances to a fleet, while ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vertical Scaling"
      }), " involves increasing the size of an existing instance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Vertical Scaling (Scale Up)\"\n        A1[2 vCPU / 8 GB] --> A2[4 vCPU / 16 GB] --> A3[8 vCPU / 32 GB]\n    end\n    subgraph \"Horizontal Scaling (Scale Out)\"\n        B1[1 instance] --> B2[2 instances] --> B3[5 instances]\n    end\n    subgraph \"Key Differences\"\n        C1[Vertical: Limited by max instance size, requires restart]\n        C2[Horizontal: Unlimited scale, no downtime, cloud-native]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto Scaling:"
      }), " Providers use metrics (CPU utilization, request count) to dynamically adjust the number of instances."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto Scaling Strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain a metric at target value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steady-state workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU at 50%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add/remove instances in steps based on metric magnitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 2 instances when CPU > 70%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale at specific times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale up at 8 AM daily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictive Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-based future load prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclical patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale for weekly peaks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual Machine Restart Policy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ScalingStrategy = \"target-tracking\" | \"step-scaling\" | \"scheduled\" | \"predictive\";\n\ninterface ScalingPolicy {\n  strategy: ScalingStrategy;\n  minInstances: number;\n  maxInstances: number;\n  targetMetric?: string;\n  targetValue?: number;\n}\n\nfunction configureAutoScaling(\n  trafficPattern: \"steady\" | \"variable\" | \"predictable\" | \"cyclical\"\n): ScalingPolicy {\n  switch (trafficPattern) {\n    case \"steady\":\n      return { strategy: \"target-tracking\", minInstances: 2, maxInstances: 10, targetMetric: \"CPUUtilization\", targetValue: 50 };\n    case \"variable\":\n      return { strategy: \"step-scaling\", minInstances: 2, maxInstances: 20 };\n    case \"predictable\":\n      return { strategy: \"scheduled\", minInstances: 2, maxInstances: 50 };\n    case \"cyclical\":\n      return { strategy: \"predictive\", minInstances: 2, maxInstances: 30 };\n  }\n}\n\nconsole.log(configureAutoScaling(\"steady\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability Sets / Placement Groups:"
        }), " Strategies to ensure VMs are placed on different physical racks or power sources to avoid correlated failures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Placement Group Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency, same rack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPC, tightly coupled apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single AZ, limited instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinct hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical VMs, HA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 instances per AZ max"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical groups across racks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed systems (Hadoop, Kafka)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 partitions per AZ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health Checks:"
        }), " The scaling service monitors instance health and automatically replaces failed instances."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-load-balancing",
      children: "3.8 Load Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load balancers distribute incoming traffic across a pool of healthy VM instances."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OSI Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classic LB (CLB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4/L7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application LB (ALB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS, path, host, header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, HTTP apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network LB (NLB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/UDP, IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low latency, static IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gateway LB (GLB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline network appliances"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancing Algorithms:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round Robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests distributed sequentially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal-capacity servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends to server with fewest active connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable request duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client IP determines target server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session persistence (sticky sessions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted Round Robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servers receive proportional traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heterogeneous server capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random selection with optional weighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large server pools"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LoadBalancerConfig {\n  type: \"alb\" | \"nlb\" | \"clb\" | \"glb\";\n  algorithm: \"round-robin\" | \"least-connections\" | \"ip-hash\" | \"weighted\";\n  healthCheckPath: string;\n  healthCheckInterval: number; // seconds\n  unhealthyThreshold: number;\n  stickySessions: boolean;\n}\n\nfunction configureLoadBalancer(\n  isHttp: boolean,\n  needStaticIp: boolean,\n  needPathRouting: boolean\n): LoadBalancerConfig {\n  if (isHttp && needPathRouting) {\n    return {\n      type: \"alb\",\n      algorithm: \"least-connections\",\n      healthCheckPath: \"/health\",\n      healthCheckInterval: 30,\n      unhealthyThreshold: 3,\n      stickySessions: false,\n    };\n  }\n\n  if (!isHttp && needStaticIp) {\n    return {\n      type: \"nlb\",\n      algorithm: \"round-robin\",\n      healthCheckPath: \"\",\n      healthCheckInterval: 10,\n      unhealthyThreshold: 2,\n      stickySessions: false,\n    };\n  }\n\n  return {\n    type: \"alb\",\n    algorithm: \"round-robin\",\n    healthCheckPath: \"/health\",\n    healthCheckInterval: 30,\n    unhealthyThreshold: 3,\n    stickySessions: false,\n  };\n}\n\nconst webLB = configureLoadBalancer(true, false, true);\nconsole.log(\"Web app LB:\", webLB.type, \"with\", webLB.algorithm);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layer 7 (Application):"
        }), " Inspects HTTP/HTTPS headers, paths, and cookies. Useful for microservices and URL-based routing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layer 4 (Network):"
        }), " Routes based on IP and TCP/UDP ports. Offers ultra-high performance and low latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global vs. Regional:"
        }), " Some load balancers (like GCP's Cloud Load Balancing) are global, while others are confined to a specific region."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-31-multi-cloud-instance-deployment-cli",
      children: "Example 3.1: Multi-Cloud Instance Deployment (CLI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS EC2 Launch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "aws ec2 run-instances --image-id ami-0123456789 --count 1 --instance-type t3.micro --key-name MyKeyPair\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure VM Launch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-azurecli",
        children: "az vm create --resource-group MyRG --name MyVM --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GCP GCE Launch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-micro --image-family=debian-11\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-32-configure-auto-scaling-policy-aws",
      children: "Example 3.2: Configure Auto-Scaling Policy (AWS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To maintain average CPU utilization at 50%:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "aws autoscaling put-scaling-policy \\\n  --auto-scaling-group-name my-asg \\\n  --policy-name cpu50-target-tracking \\\n  --policy-type TargetTrackingScaling \\\n  --target-tracking-configuration \"{\\\"TargetValue\\\": 50.0, \\\"PredefinedMetricSpecification\\\": {\\\"PredefinedMetricType\\\": \\\"ASGAverageCPUUtilization\\\"}}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-33-typescript-aws-sdk--launch-instances",
      children: "Example 3.3: TypeScript AWS SDK ? Launch Instances"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { EC2, AutoScaling, ElasticLoadBalancingV2 } from \"@aws-sdk/client-ec2\";\n\ninterface LaunchConfig {\n  imageId: string;\n  instanceType: string;\n  minCount: number;\n  maxCount: number;\n  securityGroupIds: string[];\n  subnetIds: string[];\n}\n\nasync function launchInstances(config: LaunchConfig): Promise<void> {\n  const ec2 = new EC2({ region: \"us-east-1\" });\n\n  const result = await ec2.runInstances({\n    ImageId: config.imageId,\n    InstanceType: config.instanceType,\n    MinCount: config.minCount,\n    MaxCount: config.maxCount,\n    SecurityGroupIds: config.securityGroupIds,\n    SubnetId: config.subnetIds[0],\n  });\n\n  const instanceIds = result.Instances?.map(i => i.InstanceId!) || [];\n  console.log(`Launched ${instanceIds.length} instances:`, instanceIds);\n}\n\nasync function configureScaling(\n  asgName: string,\n  launchTemplateId: string,\n  subnetIds: string[]\n): Promise<void> {\n  const asg = new AutoScaling({ region: \"us-east-1\" });\n\n  await asg.createAutoScalingGroup({\n    AutoScalingGroupName: asgName,\n    LaunchTemplate: { LaunchTemplateId: launchTemplateId, Version: \"$Default\" },\n    MinSize: 2,\n    MaxSize: 10,\n    DesiredCapacity: 2,\n    VPCZoneIdentifier: subnetIds.join(\",\"),\n    HealthCheckType: \"ELB\",\n    HealthCheckGracePeriod: 300,\n  });\n\n  await asg.putScalingPolicy({\n    AutoScalingGroupName: asgName,\n    PolicyName: \"cpu-target-50\",\n    PolicyType: \"TargetTrackingScaling\",\n    TargetTrackingConfiguration: {\n      TargetValue: 50,\n      PredefinedMetricSpecification: { PredefinedMetricType: \"ASGAverageCPUUtilization\" },\n    },\n  });\n\n  console.log(`Auto Scaling Group \"${asgName}\" configured with CPU tracking at 50%`);\n}\n\nasync function createLoadBalancer(name: string, subnetIds: string[], vpcId: string): Promise<void> {\n  const elbv2 = new ElasticLoadBalancingV2({ region: \"us-east-1\" });\n\n  const lbResult = await elbv2.createLoadBalancer({\n    Name: name,\n    Subnets: subnetIds,\n    Scheme: \"internet-facing\",\n    Type: \"application\",\n    IpAddressType: \"ipv4\",\n  });\n\n  const lbArn = lbResult.LoadBalancers![0].LoadBalancerArn!;\n  console.log(`ALB \"${name}\" created with ARN: ${lbArn}`);\n}\n\nexport { launchInstances, configureScaling, createLoadBalancer };\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cloud compute is about matching the right instance family, pricing model, and scaling strategy to your workload ? the cheapest instance is the one you don't leave running idle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For cost optimization, always start with Reserved Instances (or Savings Plans) for baseline capacity and use Spot Instances for fault-tolerant batch workloads. This combination can reduce compute costs by 50-70%."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Spot/Preemptible instances can be terminated with as little as 30 seconds notice. Never use them for stateful workloads, databases, or any application that cannot handle sudden interruptions."]
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
            children: "On-Demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay per hour/second, no commitment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum flexibility, highest cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unpredictable workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spot/Preemptible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spare capacity at discount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 90% off, can be terminated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing, stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved/CUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 year commitment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-60% discount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline, predictable capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated Host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical server for single tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance, BYOL licensing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulated industries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local physical storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High IOPS, data lost on stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache, temp data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EBS/Persistent Disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network-attached block storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survives instance terminations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, boot volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical placement strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster: low latency; Spread: HA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPC vs critical apps"
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
              children: "Instance Families"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General, Compute, Memory, Storage, GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose by workload profile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pricing Tiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-Demand, Spot, Reserved, Dedicated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mix for optimal cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (more instances) vs Vertical (bigger instance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal is more resilient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling Strategies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target tracking, Step, Scheduled, Predictive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match to traffic pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Load Balancer Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 (TCP/UDP), L7 (HTTP/HTTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7 supports path-based routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HA Patterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ, Auto Scaling, Health Checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for failure from day one"
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
            children: "Auto Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic workload management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-efficient capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spot Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD worker nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disposable build agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline capacity planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term cost mgmt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HA architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-green deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global traffic distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance Families"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workload matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev/test environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated GPU/Compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database provisioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which pricing model offers the deepest discount but carries the highest risk of interruption?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) On-Demand"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Reserved Instances"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Spot/Preemptible Instances"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Dedicated Hosts"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Spot/Preemptible Instances.** These use spare cloud capacity at up to 90% discount but can be reclaimed by the provider with minimal notice (30 seconds to 2 minutes). They're ideal for fault-tolerant, stateless workloads.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary difference between an Application Load Balancer (L7) and a Network Load Balancer (L4)?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) L7 is faster than L4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) L7 inspects HTTP headers for intelligent routing; L4 routes by IP and port only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) L4 is more expensive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) L7 only works with AWS"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) L7 inspects HTTP headers for intelligent routing; L4 routes by IP and port only.** L7 load balancers can route based on URL path, host header, cookies, and HTTP methods. L4 load balancers offer lower latency and are protocol-agnostic.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A company runs a critical database 24/7 on a cloud VM. Which storage type should they use?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Instance Store (ephemeral)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Persistent Block Storage (EBS/Azure Disk/Persistent Disk)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Temporary Disk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) RAM disk"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Persistent Block Storage.** Instance store data is lost when the VM stops or terminates. Persistent block storage survives VM lifecycle events and supports snapshots, replication, and independent resizing ? essential for databases.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which auto-scaling strategy is best for an application with predictable peak traffic every weekday at 9 AM?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Target Tracking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Step Scaling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Scheduled Scaling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Predictive Scaling"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Scheduled Scaling.** Scheduled scaling allows you to set specific times to increase or decrease capacity, making it ideal for predictable traffic patterns like morning rush.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the maximum number of instances per AZ in a spread placement group?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 7"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 20"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 100"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Unlimited"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) 7.** Spread placement groups are limited to 7 running instances per Availability Zone because each instance runs on distinct hardware, ensuring maximum fault isolation.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-auto-scaling-group-simulator",
      children: "TypeScript: Auto Scaling Group Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ASGConfig {\n  minSize: number;\n  maxSize: number;\n  desiredCapacity: number;\n  cooldownSeconds: number;\n  scaleUpThreshold: number;\n  scaleDownThreshold: number;\n}\n\nclass AutoScalingGroup {\n  private instances: { id: string; state: string; cpuUtil: number; healthy: boolean }[] = [];\n  private config: ASGConfig;\n  private time: number = 0;\n  private counter: number = 0;\n  private lastScale: number = 0;\n\n  constructor(config: ASGConfig) {\n    this.config = config;\n    for (let i = 0; i < config.desiredCapacity; i++) this.launchInstance();\n  }\n\n  private launchInstance(): void {\n    this.instances.push({\n      id: `i-${++this.counter}`, state: \"running\",\n      cpuUtil: Math.random() * 30 + 10, healthy: true,\n    });\n  }\n\n  setCPU(utils: number[]): void {\n    this.instances.filter((i) => i.state === \"running\")\n      .forEach((inst, idx) => { inst.cpuUtil = utils[idx % utils.length]; });\n  }\n\n  tick(): void {\n    this.time++;\n    const running = this.instances.filter((i) => i.state === \"running\");\n    const avgCPU = running.length > 0\n      ? running.reduce((s, i) => s + i.cpuUtil, 0) / running.length : 0;\n\n    if (this.time - this.lastScale >= this.config.cooldownSeconds) {\n      if (avgCPU > this.config.scaleUpThreshold && this.instances.length < this.config.maxSize) {\n        this.launchInstance();\n        this.lastScale = this.time;\n      } else if (avgCPU < this.config.scaleDownThreshold && this.instances.length > this.config.minSize) {\n        const t = this.instances.find((i) => i.state === \"running\");\n        if (t) { t.state = \"terminated\"; this.lastScale = this.time; }\n      }\n    }\n  }\n\n  getActive(): number { return this.instances.filter((i) => i.state === \"running\").length; }\n  getAvgCPU(): number {\n    const r = this.instances.filter((i) => i.state === \"running\");\n    return r.length > 0 ? r.reduce((s, i) => s + i.cpuUtil, 0) / r.length : 0;\n  }\n}\n\nconst asg = new AutoScalingGroup({ minSize: 2, maxSize: 8, desiredCapacity: 2, cooldownSeconds: 3, scaleUpThreshold: 70, scaleDownThreshold: 30 });\nconst load = [20, 25, 30, 40, 55, 65, 80, 85, 90, 85, 75, 60, 45, 35, 25, 20, 30, 50, 70, 85];\nload.forEach((l) => {\n  asg.setCPU(new Array(asg.getActive()).fill(l));\n  asg.tick();\n});\nconsole.log(`Final: ${asg.getActive()} instances, avg CPU: ${asg.getAvgCPU().toFixed(1)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-spot-fleet-optimizer",
      children: "TypeScript: Spot Fleet Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SpotOption {\n  type: string;\n  price: number;\n  onDemand: number;\n  interruptRate: \"low\" | \"medium\" | \"high\";\n}\n\nclass SpotFleetOptimizer {\n  private options: SpotOption[] = [];\n\n  addOption(opt: SpotOption): void { this.options.push(opt); }\n\n  optimize(budget: number, diversity: number = 0.3): SpotOption[] {\n    const ranked = [...this.options]\n      .filter((o) => o.price <= budget)\n      .sort((a, b) => a.price / a.onDemand - b.price / b.onDemand);\n\n    const result: SpotOption[] = [];\n    const maxTypes = Math.max(1, Math.floor(ranked.length * diversity));\n    let remaining = budget;\n\n    for (let i = 0; i < Math.min(maxTypes, ranked.length); i++) {\n      const count = Math.floor(remaining / (ranked.length - i) / ranked[i].price);\n      if (count > 0) {\n        result.push(ranked[i]);\n        remaining -= count * ranked[i].price;\n      }\n    }\n    return result;\n  }\n}\n\nconst fleet = new SpotFleetOptimizer();\nfleet.addOption({ type: \"t3.medium\", price: 0.015, onDemand: 0.0416, interruptRate: \"low\" });\nfleet.addOption({ type: \"m5.large\", price: 0.038, onDemand: 0.096, interruptRate: \"medium\" });\nfleet.addOption({ type: \"c5.large\", price: 0.034, onDemand: 0.085, interruptRate: \"high\" });\nconsole.log(\"Spot fleet plan:\", fleet.optimize(0.5).map((o) => o.type + \" @ $\" + o.price));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-instance-config-validator",
      children: "TypeScript: Instance Config Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface InstanceConfig {\n  family: string; vCores: number; memoryGB: number; networkGbps: number; ebsBandwidthMbps: number;\n}\n\nclass InstanceValidator {\n  validate(config: InstanceConfig, requirements: { minCores: number; minMemoryGB: number; minNetworkGbps: number }): { pass: boolean; issues: string[] } {\n    const issues: string[] = [];\n    if (config.vCores < requirements.minCores) issues.push(`Needs ${requirements.minCores} vCores, has ${config.vCores}`);\n    if (config.memoryGB < requirements.minMemoryGB) issues.push(`Needs ${requirements.minMemoryGB} GB, has ${config.memoryGB}`);\n    if (config.networkGbps < requirements.minNetworkGbps) issues.push(`Needs ${requirements.minNetworkGbps} Gbps, has ${config.networkGbps}`);\n    return { pass: issues.length === 0, issues };\n  }\n\n  recommendMonthly(requirements: { minCores: number; minMemoryGB: number; minNetworkGbps: number }, budget: number): InstanceConfig[] {\n    const catalog: InstanceConfig[] = [\n      { family: \"t3.medium\", vCores: 2, memoryGB: 4, networkGbps: 0.5, ebsBandwidthMbps: 2085 },\n      { family: \"m5.large\", vCores: 2, memoryGB: 8, networkGbps: 10, ebsBandwidthMbps: 4750 },\n      { family: \"c5.xlarge\", vCores: 4, memoryGB: 8, networkGbps: 10, ebsBandwidthMbps: 4750 },\n      { family: \"r5.xlarge\", vCores: 4, memoryGB: 32, networkGbps: 10, ebsBandwidthMbps: 4750 },\n    ];\n    const prices: Record<string, number> = { \"t3.medium\": 30, \"m5.large\": 69, \"c5.xlarge\": 85, \"r5.xlarge\": 126 };\n    return catalog.filter(c => {\n      const valid = this.validate(c, requirements);\n      return valid.pass && (prices[c.family] || 0) <= budget;\n    });\n  }\n}\n\nconst iv = new InstanceValidator();\nconsole.log(\"m5.large validation:\", JSON.stringify(iv.validate({ family: \"m5.large\", vCores: 2, memoryGB: 8, networkGbps: 10, ebsBandwidthMbps: 4750 }, { minCores: 4, minMemoryGB: 16, minNetworkGbps: 5 }), null, 2));\nconsole.log(\"Recommended under $100/month:\", iv.recommendMonthly({ minCores: 2, minMemoryGB: 8, minNetworkGbps: 5 }, 100).map(c => c.family));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cloud compute\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cloud compute', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// cloud compute - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud compute' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- Cloud compute provides virtualized hardware (IaaS) through VMs.\n- Compute resources are organized into families (General Purpose, Compute, Memory, Storage, GPU).\n- Pricing models range from expensive but flexible (On-Demand) to cheap but interruptible (Spot).\n- Persistent storage (EBS/PD) survives instance termination, while instance store is ephemeral.\n- Auto-scaling strategies include target tracking, step scaling, scheduled, and predictive.\n- Load balancers (L4/L7) distribute traffic using algorithms like round robin, least connections, and IP hash.\n- Placement groups control physical server placement for performance or high availability.\n- Horizontal scaling via managed groups ensures application availability and cost efficiency.\n\n## Exercises\n\n### Review Questions\n\n1. Explain the difference between horizontal and vertical scaling.\n2. Under what circumstances should a Spot or Preemptible instance be avoided?\n3. What is the difference between a Layer 4 and a Layer 7 load balancer?\n4. How does persistent block storage differ from local instance storage?\n5. Define \"Noisy Neighbor\" and explain how dedicated hosts mitigate this issue.\n6. Compare target tracking, step scaling, and scheduled scaling strategies.\n7. What are the three types of placement groups and when should each be used?\n\n### Application Problems\n\n1. A news website expects a massive traffic spike during an election. The current load is 2 VMs. Recommend a scaling policy and load balancer configuration to handle the spike while maintaining 99.9% availability.\n\n2. A developer needs to run a 24-hour batch processing job that is checkpointed (saves state every 10 minutes). Compare the cost of using an On-Demand m5.large instance versus a Spot instance for this task.\n\n3. Design a high-availability architecture for a web application using two Availability Zones. Specify the components required to ensure the app stays online if one AZ fails.\n\n4. Write a TypeScript function that recommends an instance family given a workload description (CPU-intensive vs memory-intensive vs I/O-intensive) and a monthly budget.\n\n5. An e-commerce site experiences traffic spikes on holidays. Configure a combination of auto-scaling strategies to handle both predictable holiday spikes and unpredictable flash sales.\n\n### Challenge Problem\n\nA company is migrating a legacy application that requires a specific hardware ID for licensing and cannot be scaled horizontally. The application is mission-critical and requires 128GB of RAM. Propose a cloud compute architecture that addresses: 1) Hardware-dependent licensing, 2) High availability despite no horizontal scaling, 3) Performance consistency, and 4) Cost-effective disaster recovery in a different region.\n"
      })
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