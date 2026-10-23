"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4287],{

/***/ 74127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_09_azure_and_gcp_basics_md_bbc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-09-azure-and-gcp-basics-md-bbc.json
const site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_09_azure_and_gcp_basics_md_bbc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/09-azure-and-gcp-basics","title":"Azure and GCP Basics — Cloud Providers Comparison","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/09-azure-and-gcp-basics.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/09-azure-and-gcp-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/09-azure-and-gcp-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":89,"frontMatter":{"id":"09-azure-and-gcp-basics","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/09-azure-and-gcp-basics","title":"Azure and GCP Basics — Cloud Providers Comparison","sidebar_label":"Azure and GCP Basics — Cloud Providers Comparison","sidebar_position":89},"sidebar":"placementSidebar","previous":{"title":"AWS Containers — ECS, ECR, and EKS","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/08-aws-containers"},"next":{"title":"CI/CD Pipelines — Continuous Integration and Delivery","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/10-ci-cd-pipelines"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/09-azure-and-gcp-basics.md


const frontMatter = {
	id: '09-azure-and-gcp-basics',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/09-azure-and-gcp-basics',
	title: 'Azure and GCP Basics — Cloud Providers Comparison',
	sidebar_label: 'Azure and GCP Basics — Cloud Providers Comparison',
	sidebar_position: 89
};
const contentTitle = 'Azure and GCP Basics — Cloud Providers Comparison';

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
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "9.1 Azure Compute",
  "id": "91-azure-compute",
  "level": 2
}, {
  "value": "9.2 Azure Storage",
  "id": "92-azure-storage",
  "level": 2
}, {
  "value": "9.3 Azure Networking",
  "id": "93-azure-networking",
  "level": 2
}, {
  "value": "9.4 GCP Compute",
  "id": "94-gcp-compute",
  "level": 2
}, {
  "value": "9.5 GCP Storage",
  "id": "95-gcp-storage",
  "level": 2
}, {
  "value": "9.6 GCP Networking",
  "id": "96-gcp-networking",
  "level": 2
}, {
  "value": "9.7 Multi-Cloud Comparison",
  "id": "97-multi-cloud-comparison",
  "level": 2
}, {
  "value": "9.8 Cloud Cost Management",
  "id": "98-cloud-cost-management",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Azure Identity and Access Management",
  "id": "azure-identity-and-access-management",
  "level": 2
}, {
  "value": "GCP Identity and Access Management",
  "id": "gcp-identity-and-access-management",
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
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
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
        id: "azure-and-gcp-basics--cloud-providers-comparison",
        children: "Azure and GCP Basics — Cloud Providers Comparison"
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
            children: "Understand Microsoft Azure core services: VMs, Blob Storage, AKS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand Google Cloud Platform core services: Compute Engine, GKE, Cloud Storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare compute services across AWS, Azure, and GCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare storage and database offerings across providers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage multi-cloud identity and access management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement cloud cost management across providers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers and cloud platforms are where AI models live in production. Docker packages your model, Kubernetes orchestrates it, and cloud platforms scale it. This module covers the full deployment stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding azure and gcp basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how azure and gcp basics works in practice."
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
            children: "9.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VMs, Scale Sets, App Service, AKS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blob Storage, Azure Files, Cosmos DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VNet, Load Balancer, Azure DNS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCP Compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine, GKE, Cloud Run, App Engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCP Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Storage, Cloud SQL, Firestore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCP Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC, Cloud CDN, Cloud Load Balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Cloud Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Services mapping, migration strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Cost Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing models, cost tools, optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Azure Compute] --> B[Azure Storage]\r\n    B --> C[Azure Networking]\r\n    C --> D[GCP Compute]\r\n    D --> E[GCP Storage]\r\n    E --> F[GCP Networking]\r\n    F --> G[Multi-Cloud]\r\n    G --> H[Cost Management]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-azure-compute",
      children: "9.1 Azure Compute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Azure provides several compute options for different workloads."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure Virtual Machines"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create VM\r\naz vm create     --resource-group my-rg     --name my-vm     --image UbuntuLTS     --size Standard_B2s     --admin-username azureuser     --generate-ssh-keys\r\n\r\n## SSH\r\nssh azureuser@PUBLIC_IP\r\n\r\n## Stop/start\r\naz vm stop --resource-group my-rg --name my-vm\r\naz vm start --resource-group my-rg --name my-vm\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure App Service"
      }), " — PaaS for web apps:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "az webapp create     --resource-group my-rg     --plan my-plan     --name my-unique-app     --runtime \"NODE:18-lts\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure Kubernetes Service (AKS)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create cluster\r\naz aks create     --resource-group my-rg     --name my-cluster     --node-count 3     --enable-managed-identity\r\n\r\n## Get credentials\r\naz aks get-credentials --resource-group my-rg --name my-cluster\r\n\r\n## Deploy\r\nkubectl apply -f deployment.yaml\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Azure Compute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, custom images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic Beanstalk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS web apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Kubernetes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fargate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPC, batch processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-azure-storage",
      children: "9.2 Azure Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blob Storage"
      }), " — object storage (equivalent to S3):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create storage account\r\naz storage account create     --name mystorageaccount     --resource-group my-rg     --location eastus     --sku Standard_LRS\r\n\r\n## Upload blob\r\naz storage blob upload     --account-name mystorageaccount     --container-name mycontainer     --name file.txt     --file ./file.txt\r\n\r\n## List blobs\r\naz storage blob list     --account-name mystorageaccount     --container-name mycontainer     --output table\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure Files"
      }), " — managed file shares (SMB/NFS):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "az storage share create --name myshare --account-name mystorageaccount\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cosmos DB"
      }), " — globally distributed NoSQL:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "az cosmosdb create --name my-cosmos-db --resource-group my-rg\r\naz cosmosdb sql database create --account-name my-cosmos-db --name my-database\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-azure-networking",
      children: "9.3 Azure Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual Network (VNet)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "az network vnet create     --resource-group my-rg     --name my-vnet     --address-prefix 10.0.0.0/16     --subnet-name default     --subnet-prefix 10.0.1.0/24\r\n\r\n## Load Balancer\r\naz network lb create     --resource-group my-rg     --name my-lb     --sku Standard     --frontend-ip-name my-frontend     --public-ip-address my-public-ip\r\n\r\n## Application Gateway (Layer 7)\r\naz network application-gateway create     --resource-group my-rg     --name my-gateway     --sku Standard_v2     --capacity 2     --vnet-name my-vnet     --subnet appgw-subnet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-gcp-compute",
      children: "9.4 GCP Compute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create VM\r\ngcloud compute instances create my-instance     --zone us-central1-a     --machine-type e2-medium     --image-family ubuntu-2204-lts     --image-project ubuntu-os-cloud\r\n\r\n## SSH\r\ngcloud compute ssh my-instance --zone us-central1-a\r\n\r\n## Stop/start\r\ngcloud compute instances stop my-instance --zone us-central1-a\r\ngcloud compute instances start my-instance --zone us-central1-a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Kubernetes Engine (GKE)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create cluster\r\ngcloud container clusters create my-cluster     --zone us-central1-a     --num-nodes 3     --machine-type e2-standard-2\r\n\r\n## Get credentials\r\ngcloud container clusters get-credentials my-cluster --zone us-central1-a\r\n\r\n## Deploy\r\nkubectl apply -f deployment.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Run"
      }), " — serverless containers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Deploy container\r\ngcloud run deploy my-service     --image gcr.io/my-project/my-image:latest     --platform managed     --region us-central1     --allow-unauthenticated\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "App Engine"
      }), " — PaaS:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcloud app deploy app.yaml --project my-project\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "GCP Compute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VMs with custom images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Kubernetes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fargate + App Runner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic Beanstalk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PaaS apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CodeBuild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-gcp-storage",
      children: "9.5 GCP Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Storage"
      }), " — object storage (equivalent to S3):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create bucket\r\ngsutil mb gs://my-unique-bucket/\r\n\r\n## Upload\r\ngsutil cp file.txt gs://my-bucket/\r\ngsutil rsync -r ./local-folder gs://my-bucket/\r\n\r\n## Set lifecycle\r\ngsutil lifecycle set lifecycle.json gs://my-bucket/\r\n\r\n## Storage classes\r\ngsutil cp file.txt gs://my-bucket/ --storage-class NEARLINE\r\ngsutil rewrite -s COLDLINE gs://my-bucket/file.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud SQL"
      }), " — managed relational databases:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcloud sql instances create my-instance     --database-version POSTGRES_15     --cpu 2 --memory 8GB     --region us-central1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Firestore"
      }), " — NoSQL document database:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcloud firestore databases create --region us-central1\r\n\r\n## Use client libraries for CRUD operations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-gcp-networking",
      children: "9.6 GCP Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create VPC\r\ngcloud compute networks create my-vpc --subnet-mode custom\r\n\r\n## Create subnet\r\ngcloud compute networks subnets create my-subnet     --network my-vpc     --region us-central1     --range 10.0.1.0/24\r\n\r\n## Firewall rules\r\ngcloud compute firewall-rules create allow-http     --network my-vpc     --allow tcp:80     --source-ranges 0.0.0.0/0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Load Balancing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcloud compute forwarding-rules create my-rule     --region us-central1     --load-balancing-scheme EXTERNAL     --ports 80     --target-http-proxy my-proxy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-multi-cloud-comparison",
      children: "9.7 Multi-Cloud Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service Category"
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
            children: "Compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS/EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GKE/Cloud Run"
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
            children: "Relational DB"
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
            children: "Firestore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElastiCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memorystore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud CDN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud DNS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB/NLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud LB"
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
            children: "Entra ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud IAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CodePipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Build"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration strategies"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effort"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lift and shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move as-is to cloud VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Re-platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move to PaaS services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Re-factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-architect for cloud-native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Re-purchase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch to SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decommission unused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-cloud-cost-management",
      children: "9.8 Cloud Cost Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost comparison by provider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## AWS Cost Explorer\r\naws ce get-cost-and-usage --time-period Start=2024-01-01,End=2024-01-31 --granularity MONTHLY --metrics BlendedCost\r\n\r\n## Azure Cost Management\r\naz consumption usage list --billing-period-name 202401\r\n\r\n## GCP Cost\r\ngcloud billing accounts list\r\ngcloud billing projects describe PROJECT_ID\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost optimization across clouds"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
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
            children: "Reserved instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committed Use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spot/preemptible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low Priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preemptible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale Sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Instance Groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage tiering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blob Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object Lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rightsizing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advisor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommender"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CloudProvider {\r\n  name: string;\r\n  region: string;\r\n  computeService: string;\r\n  storageService: string;\r\n}\r\n\r\nconst providers: CloudProvider[] = [\r\n  { name: \"AWS\", region: \"us-east-1\", computeService: \"EC2\", storageService: \"S3\" },\r\n  { name: \"Azure\", region: \"eastus\", computeService: \"Virtual Machines\", storageService: \"Blob Storage\" },\r\n  { name: \"GCP\", region: \"us-central1\", computeService: \"Compute Engine\", storageService: \"Cloud Storage\" },\r\n];\r\n\r\nfunction getServiceMapping(provider: string, category: string): string {\r\n  const mapping: Record<string, Record<string, string>> = {\r\n    \"compute\": { \"AWS\": \"EC2\", \"Azure\": \"VM\", \"GCP\": \"Compute Engine\" },\r\n    \"serverless\": { \"AWS\": \"Lambda\", \"Azure\": \"Functions\", \"GCP\": \"Cloud Functions\" },\r\n  };\r\n  return mapping[category]?.[provider] || \"Unknown\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure VMs, App Service, and AKS provide compute options similar to EC2, Beanstalk, and EKS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure Blob Storage is equivalent to S3; Azure Files provides managed SMB/NFS shares"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GCP Compute Engine, GKE, and Cloud Run mirror EC2, EKS, and Fargate respectively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud Storage offers the same durability as S3 with similar storage classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A multi-cloud strategy uses services from multiple providers for redundancy and best-of-breed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud cost management involves rightsizing, reserved capacity, and storage tiering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lift-and-shift is the fastest migration; re-factoring provides the most benefit long-term"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each provider offers equivalent services with different naming and minor feature differences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IAM is critical across all clouds — use least privilege and regular audits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost monitoring tools (Cost Explorer, Cost Management, Cloud Billing) are essential"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
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
            children: "VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GKE"
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
            children: "Cost savings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved + Spot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved + Low Priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committed + Preemptible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use consistent IAM and monitoring across providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same left"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q1: Compare AWS, Azure, and GCP compute services."]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "AWS: EC2 (VMs), ECS/EKS (containers), Lambda (serverless). Azure: Virtual Machines, AKS, Functions. GCP: Compute Engine, GKE, Cloud Run/Functions. All three have equivalent offerings with different naming and slight feature differences."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q2: What is the equivalent of AWS S3 on Azure and GCP?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Azure Blob Storage and GCP Cloud Storage. All three provide 11 nines durability, tiered storage classes (standard, infrequent access, archive/glacier), and lifecycle management."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q3: What is Cloud Run and when would you use it?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Cloud Run is GCP's serverless container platform. You deploy container images and Cloud Run automatically scales based on request traffic (including scaling to zero). Use for HTTP-driven applications, APIs, and event-driven workloads."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q4: What migration strategies exist for moving to the cloud?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Lift and shift (fastest, least benefit), re-platform (move to PaaS), re-factor (re-architect for cloud-native), re-purchase (SaaS), retire (decommission). The 6 Rs of migration: Rehost, Replatform, Refactor, Repurchase, Retire, Retain."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q5: How do you manage costs across multiple cloud providers?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use native cost tools (AWS Cost Explorer, Azure Cost Management, GCP Cost Table). Tag resources consistently. Set budgets and alerts. Use reserved/committed capacity. Implement auto scaling. Monitor with third-party tools (CloudHealth, CloudCheckr)."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q6: What are the differences between GKE, AKS, and EKS?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "GKE offers auto-pilot mode and faster node scaling. AKS integrates deeply with Azure AD and Azure DevOps. EKS has the largest community and broadest CNCF compatibility. All manage the K8s control plane and offer managed node groups."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q7: What is Azure Functions and how does it compare to Lambda?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Azure Functions is Microsoft's serverless compute, equivalent to AWS Lambda. Both support event-driven execution, automatic scaling, and pay-per-execution pricing. Azure Functions has tighter integration with Microsoft ecosystem (Office 365, Teams, Dynamics)."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q8: How does VPC differ between AWS, Azure, and GCP?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "AWS VPC: region-scoped with Availability Zone subnets. Azure VNet: region-scoped with availability zone support. GCP VPC: global, spans regions; subnets are regional. GCP's global VPC is unique — resources in different regions can communicate using internal IPs."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q9: What is multi-cloud and what are the benefits?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-cloud uses services from multiple cloud providers simultaneously. Benefits: avoid vendor lock-in, use best-of-breed services from each provider, geographic redundancy, cost optimization through competition, compliance with local data regulations."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q10: How do you implement IAM across multiple clouds?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a central identity provider (Azure AD, Okta, Google Workspace) with federation/SAML. Each cloud has its own IAM: AWS IAM, Azure Entra ID/RBAC, GCP Cloud IAM. Use infrastructure-as-code (Terraform) to manage policies consistently. Implement least privilege everywhere."
        })
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
      }), ": Which GCP service provides serverless containers?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Compute Engine\r\nb) GKE\r\nc) Cloud Run\r\nd) App Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Cloud Run"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is Azure's equivalent of AWS Lambda?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Azure App Service\r\nb) Azure Functions\r\nc) Azure VMs\r\nd) Azure AKS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Azure Functions"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which cloud provider offers a global VPC?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) AWS\r\nb) Azure\r\nc) GCP\r\nd) All three"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) GCP"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What does GCP's Cloud Storage offer that is equivalent to AWS S3 Glacier?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Coldline\r\nb) Archive\r\nc) Nearline\r\nd) Standard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Archive (Coldline is IA-equivalent)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which migration strategy involves the least effort?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Re-factor\r\nb) Re-platform\r\nc) Lift and shift\r\nd) Re-purchase"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s09-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Lift and shift"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a VM in each cloud provider (AWS EC2, Azure VM, GCP Compute Engine) and verify you can SSH into it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Deploy a containerized web app to Azure AKS and GCP GKE. Compare the deployment process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Set up cost budgets and alerts for each cloud provider. Create a cost comparison report."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design a multi-cloud architecture: app frontend on AWS, ML training on GCP (TPUs), database on Azure (Cosmos DB). Implement IAM federation and secure networking between clouds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write a Terraform configuration that deploys the same infrastructure (VPC, compute, storage) across all three providers using modules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "azure-identity-and-access-management",
      children: "Azure Identity and Access Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure Entra ID"
      }), " (formerly Azure AD):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create service principal\r\naz ad sp create-for-rbac --name my-app-sp --role Contributor --scopes /subscriptions/SUBSCRIPTION_ID\r\n\r\n## Managed Identity for Azure resources\r\naz vm identity assign --resource-group my-rg --name my-vm\r\naz webapp identity assign --resource-group my-rg --name my-app\r\n\r\n## Role assignments\r\naz role assignment create --assignee <principal-id> --role Reader --resource-group my-rg\r\naz role assignment list --assignee <principal-id> --output table\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure Policy"
      }), " enforces compliance rules across resources:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Assign built-in policy\r\naz policy assignment create --name \"require-tags\" --policy \"require-sql-server-encryption\" --resource-group my-rg\r\n\r\n## Create custom policy\r\naz policy definition create --name \"allowed-locations\" --rules policy-rules.json --params policy-params.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gcp-identity-and-access-management",
      children: "GCP Identity and Access Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service accounts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Create service account\r\ngcloud iam service-accounts create my-sa --display-name \"My Service Account\"\r\n\r\n## Grant roles\r\ngcloud projects add-iam-policy-binding my-project \\\r\n    --member \"serviceAccount:my-sa@my-project.iam.gserviceaccount.com\" \\\r\n    --role \"roles/storage.objectViewer\"\r\n\r\n## Create key for external use\r\ngcloud iam service-accounts keys create key.json --iam-account my-sa@my-project.iam.gserviceaccount.com\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GCP Resource Manager"
      }), " organizes resources hierarchically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Organization\r\n├── Folder (Teams)\r\n│   ├── Project (Production)\r\n│   │   ├── VPC\r\n│   │   ├── GKE Cluster\r\n│   │   └── Cloud Storage Buckets\r\n│   └── Project (Development)\r\n└── Folder (Platform)\r\n    ├── Shared Networking\r\n    └── Shared CI/CD\r\n```text\r\n\r\n## Serverless Comparison\r\n\r\n| Feature | Azure Functions | GCP Cloud Functions |\r\n|---------|----------------|---------------------|\r\n| Runtime | Python, Node, Java, .NET, Go | Python, Node, Go, Java, .NET |\r\n| Trigger types | HTTP, Timer, Queue, Event Grid, Cosmos DB | HTTP, Cloud Pub/Sub, Cloud Storage, Firestore |\r\n| Cold start | ~300ms-1s (Premium: ~100ms) | ~100ms-500ms |\r\n| Max timeout | 10 min (Consumption), 60 min (Premium) | 9 min (1st gen), 60 min (2nd gen) |\r\n| Concurrency | 1 per instance (default) | 1 per instance (default) |\r\n| Pricing | Pay per execution + resources | Pay per execution + resources |\r\n\r\n---\r\n\r\n## Common Mistakes\r\n\r\n1. Not understanding the fundamental concepts before applying them\r\n2. Skipping edge cases in implementation\r\n3. Not analyzing time/space complexity\r\n4. Forgetting to handle null/empty inputs\r\n5. Not practicing enough problems to build pattern recognition\r\n\r\n## Revision Notes\r\n\r\n- - Core principle: Understand the fundamental concepts thoroughly\r\n- - Implementation pattern: Practice with real code examples\r\n- - Complexity: Know the time and space complexity\r\n- - Application: Know when to use this in production systems\r\n- - Interview: Frequently asked in technical interviews\r\n- - Edge cases: Consider common failure scenarios\r\n- - Related concepts: Connect to broader system design\r\n\r\n## Placement Section\r\n\r\n### Top 10 Interview Questions\r\n\r\n#### Google Style\r\n\r\n1. **Explain the core idea of Azure and GCP Basics — Cloud Providers Comparison in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?\r\n\r\n2. **Design a minimal, well-typed function in this chapter — Cloud Providers Comparison.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?\r\n\r\n3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.\r\n\r\n#### Amazon Style\r\n\r\n4. **Describe a production bug caused by misunderstanding this technique — Cloud Providers Comparison. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.\r\n\r\n5. **How would you scale a system using this technique — Cloud Providers Comparison from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?\r\n\r\n#### Microsoft Style\r\n\r\n6. **Compare Azure and GCP Basics — Cloud Providers Comparison with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?\r\n\r\n7. **Walk through how you would test a component built on this — Cloud Providers Comparison.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.\r\n\r\n#### NVIDIA Style\r\n\r\n8. **How does Azure and GCP Basics — Cloud Providers Comparison behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?\r\n\r\n9. **How would you make an implementation of this technique — Cloud Providers Comparison run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.\r\n\r\n#### AI Startup Style\r\n\r\n10. **Write the smallest possible implementation of this technique — Cloud Providers Comparison that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?\r\n\r\n### Resume Tips\r\n\r\n- Name Azure and GCP Basics — Cloud Providers Comparison explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Azure and GCP Basics — Cloud Providers Comparison\").\r\n- Add a bullet describing a project that applies Azure and GCP Basics — Cloud Providers Comparison to real data, with numbers.\r\n- Mention the tools and libraries you used alongside Azure and GCP Basics — Cloud Providers Comparison (linters, test frameworks, profiling tools).\r\n- Keep resume bullets under 15 words and start each with an action verb.\r\n\r\n### Interview Day Checklist\r\n\r\n- Rehearse a 60-second explanation of Azure and GCP Basics — Cloud Providers Comparison and one real-world analogy.\r\n- Prepare one STAR story about debugging a Azure and GCP Basics — Cloud Providers Comparison-related production issue.\r\n- Review complexity and edge cases for the classic Azure and GCP Basics — Cloud Providers Comparison interview problem.\r\n- Have questions ready: how does the team apply Azure and GCP Basics — Cloud Providers Comparison in production today?\r\n- Test your environment (Python, editor, internet) 15 minutes before the interview.\r\n\r\n## True/False\r\n\r\n1. **True or False:** Azure and GCP Basics — Cloud Providers Comparison builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.\r\n2. **True or False:** You should write at least one code example for Azure and GCP Basics — Cloud Providers Comparison before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.\r\n3. **True or False:** The complexity analysis for Azure and GCP Basics — Cloud Providers Comparison is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.\r\n4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Azure and GCP Basics — Cloud Providers Comparison in production. — **True.** Most production bugs come from unhandled edge cases.\r\n5. **True or False:** You should memorize the Azure and GCP Basics — Cloud Providers Comparison chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.\r\n\r\n## Fill in the Blank\r\n\r\n1. The chapter that covers Azure and GCP Basics — Cloud Providers Comparison is Chapter ___ of this module. — Answer: check the module's table of contents.\r\n2. The time complexity of the standard approach to 09 Azure And Gcp Basics is ___. — Answer: O(1) container start with cached layers\r\n3. The main edge case to handle when implementing 09 Azure And Gcp Basics is ___. — Answer: missing base image, port conflicts, volume mounts\r\n4. The tools commonly used to debug Azure and GCP Basics — Cloud Providers Comparison issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.\r\n5. The related topic that connects to Azure and GCP Basics — Cloud Providers Comparison in the next chapter is ___. — Answer: see the Next Topic section.\r\n\r\n## Scenario Questions\r\n\r\n1. **Scenario:** A teammate ships a change involving Azure and GCP Basics — Cloud Providers Comparison that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.\r\n\r\n2. **Scenario:** Your implementation of this technique — Cloud Providers Comparison is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.\r\n\r\n3. **Scenario:** A new hire asks you to explain Azure and GCP Basics — Cloud Providers Comparison in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.\r\n\r\n4. **Scenario:** Your team's codebase has three different patterns for Azure and GCP Basics — Cloud Providers Comparison and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.\r\n\r\n## Output Questions\r\n\r\n1. **What is the output of the simplest correct implementation of this technique — Cloud Providers Comparison on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.\r\n2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.\r\n3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.\r\n4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.\r\n5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).\r\n\r\n## Difficulty Level\r\n\r\n| Level | Time | What It Takes |\r\n|-------|------|---------------|\r\n| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |\r\n| Intermediate | 3-5 sessions | Complete Medium exercises, explain Azure and GCP Basics — Cloud Providers Comparison to someone else |\r\n| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |\r\n\r\n## Tips & Tricks\r\n\r\n- Always write a one-line example of Azure and GCP Basics — Cloud Providers Comparison from memory before opening the chapter — active recall first.\r\n- Use the chapter's Revision Notes as a checklist: you have mastered Azure and GCP Basics — Cloud Providers Comparison when you can explain each bullet.\r\n- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.\r\n- For interviews, practice explaining Azure and GCP Basics — Cloud Providers Comparison twice: once with a technical audience, once with a non-technical audience.\r\n- Keep a personal examples file where you collect your own Azure and GCP Basics — Cloud Providers Comparison snippets; interviewers love original examples.\r\n\r\n## Memory Tricks\r\n\r\n- **Acronym**: build a mnemonic from the 5 key concepts of Azure and GCP Basics — Cloud Providers Comparison listed in the Chapter at a Glance table.\r\n- **Story**: link Azure and GCP Basics — Cloud Providers Comparison to a familiar story — the analogy in the Visual Analogy section is designed to stick.\r\n- **Number anchor**: remember the complexity of Azure and GCP Basics — Cloud Providers Comparison by connecting it to a known algorithm of the same class.\r\n- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.\r\n- **Teach-back**: explain Azure and GCP Basics — Cloud Providers Comparison to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.\r\n\r\n## Further Reading\r\n\r\n- Docker official documentation: https://docs.docker.com\r\n- 'Docker Deep Dive' by Nigel Poulton — concise practical guide\r\n- Kubernetes documentation: https://kubernetes.io/docs\r\n- 'Container Security' by Liz Rice — security-focused deep dive\r\n- Docker Hub official images: https://hub.docker.com and GCP Basics — Cloud Providers Comparison\r\n\r\n## Related Topics\r\n\r\n- **Previous chapter** in Module 06 — builds the foundation for 09 Azure And Gcp Basics\r\n- **Next chapter** — extends 09 Azure And Gcp Basics with advanced techniques\r\n- **Module 07 System Design** — how 09 Azure And Gcp Basics fits into scalable production architectures\r\n- **Module 21 Interview Preparation** — FAANG-style questions on 09 Azure And Gcp Basics\r\n- **Module 19 Capstone Projects** — end-to-end application of 09 Azure And Gcp Basics\r\n\r\n## FAQs\r\n\r\n1. **Do I need to memorize all of 09 Azure And Gcp Basics?** — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation.\r\n2. **What if I get stuck on an exercise?** — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes.\r\n3. **How much time should I spend on 09 Azure And Gcp Basics?** — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session.\r\n4. **Is 09 Azure And Gcp Basics asked in FAANG interviews?** — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups.\r\n5. **What's the fastest way to master 09 Azure And Gcp Basics?** — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading.\r\n\r\n## Important Notes\r\n\r\n- Azure and GCP Basics — Cloud Providers Comparison is a core requirement for the rest of this module — do not skip the examples.\r\n- Always analyze complexity (time and space) when working with Azure and GCP Basics — Cloud Providers Comparison.\r\n- Production correctness means handling edge cases, not just the happy path.\r\n- Interview answers should start with the definition, then the example, then the trade-offs.\r\n- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.\r\n\r\n## Historical Context\r\n\r\n- Azure and GCP Basics — Cloud Providers Comparison emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.\r\n- The tools used for Azure and GCP Basics — Cloud Providers Comparison today evolved from simpler versions; the chapter covers the modern, recommended approach.\r\n- Interviewers value knowing one historical fact about Azure and GCP Basics — Cloud Providers Comparison — it shows genuine interest, not just cramming.\r\n- The library/tooling ecosystem around Azure and GCP Basics — Cloud Providers Comparison changes quickly; focus on fundamentals that remain stable.\r\n\r\n## Security Considerations\r\n\r\n- Never store secrets in Dockerfile ENV or ARG — use Docker secrets or environment injection at runtime\r\n- Use minimal base images (distroless, alpine) to reduce attack surface\r\n- Scan images with Trivy or Snyk before pushing to registry\r\n- Set resource limits (--memory, --cpus) to prevent container resource exhaustion attacks\r\n- Use read-only filesystems (--read-only) for stateless containers\r\n\r\n## ML Intuition\r\n\r\n- Docker containers for ML training should mount data volumes rather than copying data into the image\r\n- GPU access in containers requires nvidia-docker runtime and CUDA-compatible base images\r\n- Model serving containers should be optimized for inference: use ONNX Runtime or TensorRT for faster inference\r\n- Multi-stage builds separate training dependencies (PyTorch, CUDA) from serving dependencies (FastAPI, ONNX)\r\n- Container resource limits prevent one model from starving others in multi-model serving setups\r\n\r\n## Analogies\r\n\r\n- **09 Azure And Gcp Basics is like a GPS navigation system**: you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling).\r\n- **Complexity is like a restaurant kitchen**: a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing).\r\n- **Edge cases are like stress tests**: the happy path is a calm day, but production is Black Friday — design for the worst case.\r\n- **The chapter roadmap is a subway map**: each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link\r\n\r\n- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Azure and GCP Basics — Cloud Providers Comparison skills used in the module's capstone project. Complete the exercises here before starting the capstone.\r\n\r\n## Flashcards\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"06dockerkubernetescloud-09azureandgcpbasics-flash1\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Which GCP service provides serverless containers?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>c) Cloud Run</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"06dockerkubernetescloud-09azureandgcpbasics-flash2\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    What is Azure's equivalent of AWS Lambda?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b) Azure Functions</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"06dockerkubernetescloud-09azureandgcpbasics-flash3\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Which cloud provider offers a global VPC?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>c) GCP</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"06dockerkubernetescloud-09azureandgcpbasics-flash4\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    What does GCP's Cloud Storage offer that is equivalent to AWS S3 Glacier?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>b) Archive (Coldline is IA-equivalent)</p>\r\n  </div>\r\n</details>\r\n\r\n<details class=\"tp-qa-card\" data-qid=\"06dockerkubernetescloud-09azureandgcpbasics-flash5\">\r\n  <summary class=\"tp-qa-question\">\r\n    <span class=\"tp-qa-status\"></span>\r\n    Which migration strategy involves the least effort?\r\n  </summary>\r\n  <div class=\"tp-qa-answer\">\r\n    <p>c) Lift and shift</p>\r\n  </div>\r\n</details>\r\n\r\n## Research References\r\n\r\n- Official documentation of the primary library for Azure and GCP Basics — Cloud Providers Comparison (linked in Further Reading)\r\n- The classic paper or textbook chapter introducing Azure and GCP Basics — Cloud Providers Comparison (see References below)\r\n- The standard library reference for Azure and GCP Basics — Cloud Providers Comparison-related functions\r\n- Engineering blog posts from companies running Azure and GCP Basics — Cloud Providers Comparison in production at scale\r\n- PEPs and RFCs where applicable (Python and networking standards)\r\n\r\n## Open-Source Tools\r\n\r\n- **Docker Desktop** — local development environment\r\n- **Docker Compose** — multi-container local orchestration\r\n- **Trivy** — container image vulnerability scanner\r\n- **Dive** — tool for exploring Docker image layers\r\n- **Hadolint** — Dockerfile linter for best practices and GCP Basics — Cloud Providers Comparison\r\n\r\n## Debugging Guide\r\n\r\n- **Step 1**: Reproduce the failure with the smallest possible input — isolate the bug before changing any code.\r\n- **Step 2**: Add structured logging at each stage of the 09 Azure And Gcp Basics pipeline to identify exactly where the failure occurs.\r\n- **Step 3**: Check the Common Mistakes section — 80% of bugs match one of those patterns.\r\n- **Step 4**: Use `pdb.set_trace()` or your IDE debugger to inspect intermediate values at the failure point.\r\n- **Step 5**: For performance issues, profile with `cProfile` or `py-spy` before optimizing — never guess at bottlenecks.\r\n- **Step 6**: Write a regression test that reproduces the bug before fixing it — this prevents recurrence.\r\n\r\n## Mock Interview Section\r\n\r\n**Round 1 — Screening (15 min)**\r\n- Explain Azure and GCP Basics — Cloud Providers Comparison in 60 seconds.\r\n- Write a minimal working example of Azure and GCP Basics — Cloud Providers Comparison.\r\n- What is the complexity of your example?\r\n\r\n**Round 2 — Coding (45 min)**\r\n- Solve the Medium exercise from this chapter under time pressure.\r\n- State your assumptions, then implement with type hints.\r\n- Test with edge cases: empty input, boundary values, invalid input.\r\n\r\n**Round 3 — Behavioral + System (30 min)**\r\n- Tell me about a time you debugged a Azure and GCP Basics — Cloud Providers Comparison problem in a project.\r\n- How would you design a system where Azure and GCP Basics — Cloud Providers Comparison is used at scale?\r\n- What metrics would you monitor?\r\n\r\n**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).\r\n\r\n## Optimized Implementation\r\n\r\n```python\r\nfrom typing import Any, Optional\r\n\r\ndef demonstrate_09_azure_and_gcp_basics(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 09 Azure And Gcp Basics.\r\n\r\n    Key concepts: images, containers, volumes, networks, Dockerfile\r\n    Complexity: O(1) container start with cached layers\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 09 Azure And Gcp Basics here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Azure and GCP Basics — Cloud Providers Comparison without notes"
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
          children: "Airbnb"
        }), " migrated 1000+ services to Docker, reducing deployment time from 12 minutes to 2 minutes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PayPal"
        }), " uses Docker to run 700M+ containers per year across their payment processing infrastructure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spotify"
        }), " uses Docker to ensure consistent environments across 2000+ engineers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google"
        }), " runs 2 billion container instances per week using their internal Borg system (which inspired Kubernetes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention multi-stage builds for production — they reduce image size by 80-90% by separating build and runtime dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/10-ci-cd-pipelines",
        children: "CI/CD Pipelines — Continuous Integration and Delivery"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure and GCP Basics — Cloud Providers Comparison, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Azure and GCP Basics — Cloud Providers Comparison depends on input size and distribution — always benchmark for your own data."
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