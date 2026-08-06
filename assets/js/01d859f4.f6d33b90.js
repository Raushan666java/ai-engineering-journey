"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61110],{

/***/ 76756
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_09_iac_md_01d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-09-iac-md-01d.json
const site_docs_courses_devops_09_iac_md_01d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/09-iac","title":"Chapter 9: Terraform & Infrastructure as Code","description":"Prev: Continuous Delivery","source":"@site/docs/courses/devops/09-iac.md","sourceDirName":"courses/devops","slug":"/devops/09-iac","permalink":"/ai-engineering-journey/devops/09-iac","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"09-iac","slug":"/devops/09-iac","title":"Chapter 9: Terraform & Infrastructure as Code","sidebar_label":"Chapter 9: Terraform & Infrastructure as Code","sidebar_position":17},"sidebar":"coursesSidebar","previous":{"title":"Chapter 9: Continuous Delivery","permalink":"/ai-engineering-journey/devops/09-continuous-delivery"},"next":{"title":"Chapter 10: Advanced Configuration Management","permalink":"/ai-engineering-journey/devops/10-configuration-mgmt"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/09-iac.md


const frontMatter = {
	id: '09-iac',
	slug: '/devops/09-iac',
	title: 'Chapter 9: Terraform & Infrastructure as Code',
	sidebar_label: 'Chapter 9: Terraform & Infrastructure as Code',
	sidebar_position: 17
};
const contentTitle = 'Chapter 9: Terraform & Infrastructure as Code';

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
  "value": "Terraform Workspaces",
  "id": "terraform-workspaces",
  "level": 3
}, {
  "value": "Data Sources",
  "id": "data-sources",
  "level": 3
}, {
  "value": "Terraform Provisioners",
  "id": "terraform-provisioners",
  "level": 3
}, {
  "value": "Terraform Modules from Registry",
  "id": "terraform-modules-from-registry",
  "level": 3
}, {
  "value": "Terraform Cloud",
  "id": "terraform-cloud",
  "level": 3
}, {
  "value": "Pulumi (TypeScript IaC)",
  "id": "pulumi-typescript-iac",
  "level": 3
}, {
  "value": "Cross-Cloud Infrastructure",
  "id": "cross-cloud-infrastructure",
  "level": 3
}, {
  "value": "Terraform Best Practices",
  "id": "terraform-best-practices",
  "level": 3
}, {
  "value": "Terragrunt",
  "id": "terragrunt",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Terraform State Manager",
  "id": "example-1-terraform-state-manager",
  "level": 3
}, {
  "value": "Example 2: Terraform to Pulumi Converter",
  "id": "example-2-terraform-to-pulumi-converter",
  "level": 3
}, {
  "value": "Drift Remediation Engine",
  "id": "drift-remediation-engine",
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
  "value": "TypeScript: Pulumi Infrastructure as Code",
  "id": "typescript-pulumi-infrastructure-as-code",
  "level": 2
}, {
  "value": "Mermaid: Terraform State Management Workflow",
  "id": "mermaid-terraform-state-management-workflow",
  "level": 2
}, {
  "value": "Mermaid: Terraform Module Composition",
  "id": "mermaid-terraform-module-composition",
  "level": 2
}, {
  "value": "Deeper Explanation: Terraform State and Locking",
  "id": "deeper-explanation-terraform-state-and-locking",
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
        id: "chapter-9-terraform--infrastructure-as-code",
        children: "Chapter 9: Terraform & Infrastructure as Code"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/09-continuous-delivery",
          children: "Continuous Delivery"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/10-configuration-mgmt",
          children: "Advanced Configuration Mgmt"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master Terraform for multi-cloud infrastructure provisioning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Terraform workspaces, backends, and state management."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Terraform modules for reusable infrastructure components."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage secrets, variables, and remote execution in Terraform Cloud."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Terraform best practices for production-grade infrastructure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate Terraform with CI/CD pipelines for automated provisioning."
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
        href: "../../assets/images/lessons/devops/09-iac/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/09-iac/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/09-iac/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/09-iac/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/09-iac/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/09-iac/visual-explanation.png",
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
            children: "Terraform Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workspaces, data sources, provisioners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate state per environment with workspaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composable infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable patterns for VPC, ECS, RDS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote backends, locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 + DynamoDB for team collaboration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote execution, VCS integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collaborate with policy-as-code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pulumi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript-native IaC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use familiar programming languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-provider orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terraform manages AWS + GCP + Azure + K8s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Terraform Core] --> B[Providers]\n    A --> C[State Management]\n    A --> D[Modules]\n    B --> E[AWS]\n    B --> F[GCP]\n    B --> G[Azure]\n    B --> H[Kubernetes]\n    C --> I[Local]\n    C --> J[Remote Backends]\n    J --> K[S3 + DynamoDB]\n    J --> L[Terraform Cloud]\n    D --> M[Modules Registry]\n    M --> N[Community Modules]\n    M --> O[Private Modules]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terraform-workspaces",
      children: "Terraform Workspaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workspaces provide isolated state for different environments using the same configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "terraform {\n  backend \"s3\" {\n    bucket = \"myorg-terraform-state\"\n    key    = \"network/terraform.tfstate\"\n    region = \"us-east-1\"\n  }\n}\n\nvariable \"environment\" {\n  type    = string\n  default = \"development\"\n}\n\nresource \"aws_vpc\" \"main\" {\n  cidr_block = var.environment == \"production\" ? \"10.0.0.0/16\" : \"10.1.0.0/16\"\n\n  tags = {\n    Name        = \"${var.environment}-vpc\"\n    Environment = var.environment\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "terraform workspace new dev\nterraform workspace new staging\nterraform workspace new prod\nterraform workspace select dev\nterraform apply\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-sources",
      children: "Data Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data sources fetch information from existing infrastructure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# Fetch existing VPC data\ndata \"aws_vpc\" \"selected\" {\n  tags = {\n    Environment = var.environment\n  }\n}\n\ndata \"aws_subnets\" \"private\" {\n  filter {\n    name   = \"vpc-id\"\n    values = [data.aws_vpc.selected.id]\n  }\n  tags = {\n    Tier = \"private\"\n  }\n}\n\nresource \"aws_ecs_service\" \"app\" {\n  network_configuration {\n    subnets = data.aws_subnets.private.ids\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terraform-provisioners",
      children: "Terraform Provisioners"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provisioners execute scripts on resources after creation (use sparingly — prefer user_data or configuration management):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "resource \"aws_instance\" \"web\" {\n  ami           = \"ami-0c55b159cbfafe1f0\"\n  instance_type = \"t3.micro\"\n\n  # Preferred: cloud-init\n  user_data = <<-EOF\n    #!/bin/bash\n    apt-get update\n    apt-get install -y nginx\n    systemctl start nginx\n  EOF\n\n  # Alternative provisioners (last resort)\n  provisioner \"remote-exec\" {\n    inline = [\n      \"sudo apt-get update\",\n      \"sudo apt-get install -y nginx\",\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terraform-modules-from-registry",
      children: "Terraform Modules from Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# VPC module from Terraform Registry\nmodule \"vpc\" {\n  source  = \"terraform-aws-modules/vpc/aws\"\n  version = \"5.0.0\"\n\n  name = \"myapp-vpc\"\n  cidr = \"10.0.0.0/16\"\n\n  azs             = [\"us-east-1a\", \"us-east-1b\", \"us-east-1c\"]\n  private_subnets = [\"10.0.1.0/24\", \"10.0.2.0/24\", \"10.0.3.0/24\"]\n  public_subnets  = [\"10.0.101.0/24\", \"10.0.102.0/24\", \"10.0.103.0/24\"]\n\n  enable_nat_gateway = true\n  enable_vpn_gateway = false\n  enable_dns_hostnames = true\n\n  tags = {\n    Environment = var.environment\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terraform-cloud",
      children: "Terraform Cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Terraform Cloud provides remote execution, state management, and policy enforcement:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "terraform {\n  cloud {\n    organization = \"myorg\"\n\n    workspaces {\n      name = \"production-infrastructure\"\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote state storage with encryption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote execution (no local credentials needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VCS-driven runs (PR plan, merge apply)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sentinel policy-as-code enforcement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost estimation for changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team collaboration with run queues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pulumi-typescript-iac",
      children: "Pulumi (TypeScript IaC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pulumi allows infrastructure provisioning using familiar languages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as aws from '@pulumi/aws';\nimport * as pulumi from '@pulumi/pulumi';\n\nconst config = new pulumi.Config();\nconst environment = config.require('environment');\n\n// Create VPC\nconst vpc = new aws.ec2.Vpc('main', {\n  cidrBlock: '10.0.0.0/16',\n  enableDnsHostnames: true,\n  tags: { Name: `${environment}-vpc`, Environment: environment },\n});\n\n// Create subnets\nconst subnet = new aws.ec2.Subnet('public', {\n  vpcId: vpc.id,\n  cidrBlock: '10.0.1.0/24',\n  availabilityZone: 'us-east-1a',\n  mapPublicIpOnLaunch: true,\n});\n\n// Create ECS cluster\nconst cluster = new aws.ecs.Cluster('main', {\n  name: `${environment}-cluster`,\n});\n\n// Outputs\nexport const vpcId = vpc.id;\nexport const clusterName = cluster.name;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-cloud-infrastructure",
      children: "Cross-Cloud Infrastructure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# Multi-cloud configuration\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\nprovider \"google\" {\n  project = \"my-gcp-project\"\n  region  = \"us-central1\"\n}\n\nprovider \"azurerm\" {\n  features {}\n}\n\n# Deploy DNS in Route53 pointing to GCP\nresource \"aws_route53_record\" \"app\" {\n  zone_id = aws_route53_zone.main.zone_id\n  name    = \"app.example.com\"\n  type    = \"A\"\n  alias {\n    name                   = google_compute_global_address.app.address\n    zone_id                = google_compute_global_address.app.id\n    evaluate_target_health = true\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terraform-best-practices",
      children: "Terraform Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use remote state with locking."
        }), " Never share local state files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pin provider versions."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "required_providers"
        }), " with version constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use modules from the registry."
        }), " Don't reinvent common patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separate state per component."
        }), " Network state, cluster state, app state."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use workspaces or directory structure for environments."
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
            children: "terraform plan"
          }), " in PRs, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "apply"
          }), " on merge."]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prevent_destroy"
          }), " for critical resources."]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag everything."
        }), " Costs, ownership, environment, automation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terragrunt",
      children: "Terragrunt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Terragrunt reduces duplication across Terraform configurations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# terragrunt.hcl\nremote_state {\n  backend = \"s3\"\n  config = {\n    bucket         = \"myorg-terraform-state\"\n    key            = \"${path_relative_to_include()}/terraform.tfstate\"\n    region         = \"us-east-1\"\n    encrypt        = true\n    dynamodb_table = \"terraform-locks\"\n  }\n}\n\n# child terragrunt.hcl for VPC\nterraform {\n  source = \"tfr:///terraform-aws-modules/vpc/aws//?version=5.0.0\"\n}\n\ninputs = {\n  name = \"myapp-vpc\"\n  cidr = \"10.0.0.0/16\"\n  azs  = [\"us-east-1a\", \"us-east-1b\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-terraform-state-manager",
      children: "Example 1: Terraform State Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface StateResource {\n  address: string;\n  type: string;\n  name: string;\n  provider: string;\n}\n\ninterface StateFile {\n  version: number;\n  terraform_version: string;\n  serial: number;\n  lineage: string;\n  resources: StateResource[];\n}\n\nclass StateManager {\n  private currentSerial: number = 0;\n  private resources: Map<string, StateResource> = new Map();\n\n  constructor(initialState?: StateFile) {\n    if (initialState) {\n      this.currentSerial = initialState.serial;\n      for (const r of initialState.resources) {\n        this.resources.set(r.address, r);\n      }\n    }\n  }\n\n  addResource(address: string, type: string, name: string, provider: string): void {\n    this.resources.set(address, { address, type, name, provider });\n    this.currentSerial++;\n  }\n\n  removeResource(address: string): boolean {\n    const existed = this.resources.delete(address);\n    if (existed) this.currentSerial++;\n    return existed;\n  }\n\n  findResource(address: string): StateResource | undefined {\n    return this.resources.get(address);\n  }\n\n  findByType(type: string): StateResource[] {\n    return [...this.resources.values()].filter(r => r.type === type);\n  }\n\n  findByProvider(provider: string): StateResource[] {\n    return [...this.resources.values()].filter(r => r.provider === provider);\n  }\n\n  exportState(): StateFile {\n    return {\n      version: 4,\n      terraform_version: '1.6.0',\n      serial: this.currentSerial,\n      lineage: crypto.randomUUID?.() || 'abc-123',\n      resources: [...this.resources.values()],\n    };\n  }\n\n  count(): number {\n    return this.resources.size;\n  }\n\n  generateReport(): string {\n    let report = '# Terraform State Report\\n\\n';\n    report += `## Overview\\n\\n`;\n    report += `- **Total resources:** ${this.resources.size}\\n`;\n    report += `- **Serial number:** ${this.currentSerial}\\n\\n`;\n\n    const byType = new Map<string, number>();\n    for (const r of this.resources.values()) {\n      byType.set(r.type, (byType.get(r.type) || 0) + 1);\n    }\n\n    report += `## Resources by Type\\n\\n`;\n    for (const [type, count] of byType) {\n      report += `- ${type}: ${count}\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst state = new StateManager();\nstate.addResource('aws_vpc.main', 'aws_vpc', 'main', 'provider.aws');\nstate.addResource('aws_subnet.public', 'aws_subnet', 'public', 'provider.aws');\nstate.addResource('aws_security_group.web', 'aws_security_group', 'web', 'provider.aws');\nconsole.log(state.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-terraform-to-pulumi-converter",
      children: "Example 2: Terraform to Pulumi Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TerraformResource {\n  type: string;\n  name: string;\n  args: Record<string, any>;\n}\n\nclass TerraformToPulumi {\n  convert(resources: TerraformResource[]): string {\n    const imports: Set<string> = new Set();\n    const blocks: string[] = [];\n\n    for (const resource of resources) {\n      const provider = this.getProvider(resource.type);\n      const tsType = this.toPulumiType(resource.type);\n      const tsName = resource.name.replace(/-/g, '_');\n\n      imports.add(`import * as ${provider} from \"@pulumi/${provider}\";`);\n\n      const argsStr = this.formatArgs(resource.args, 2);\n      blocks.push(`const ${tsName} = new ${tsType}(\"${resource.name}\", {\\n${argsStr}\\n});`);\n    }\n\n    return [...imports, '', ...blocks].join('\\n');\n  }\n\n  private getProvider(type: string): string {\n    const parts = type.split('_');\n    return parts[0]; // aws, azurerm, google, etc.\n  }\n\n  private toPulumiType(type: string): string {\n    const parts = type.split('_');\n    const provider = parts[0];\n    const resourceParts = parts.slice(1).map(p =>\n      p.charAt(0).toUpperCase() + p.slice(1)\n    );\n    return `${provider}.${resourceParts.join('')}`;\n  }\n\n  private formatArgs(args: Record<string, any>, indent: number): string {\n    const pad = ' '.repeat(indent);\n    return Object.entries(args)\n      .map(([key, value]) => {\n        const tsKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());\n        if (typeof value === 'string') return `${pad}${tsKey}: \"${value}\"`;\n        if (typeof value === 'number' || typeof value === 'boolean') return `${pad}${tsKey}: ${value}`;\n        return `${pad}${tsKey}: ${JSON.stringify(value)}`;\n      })\n      .join(',\\n');\n  }\n}\n\nconst converter = new TerraformToPulumi();\nconst ts = converter.convert([\n  { type: 'aws_vpc', name: 'main', args: { cidr_block: '10.0.0.0/16', enable_dns_hostnames: true } },\n  { type: 'aws_subnet', name: 'public', args: { vpc_id: '${aws_vpc.main.id}', cidr_block: '10.0.1.0/24', map_public_ip_on_launch: true } },\n]);\nconsole.log(ts);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drift-remediation-engine",
      children: "Drift Remediation Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Infrastructure drift — when actual infrastructure state diverges from declared configuration — is a leading cause of configuration drift incidents. The following tool detects, analyzes, and proposes remediation for drift."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// drift-remediation.ts\n// Detect and remediate infrastructure drift\n\ninterface DeclaredResource {\n  id: string;\n  type: string;\n  properties: Record<string, any>;\n  lastUpdated: Date;\n}\n\ninterface ActualResource {\n  id: string;\n  type: string;\n  properties: Record<string, any>;\n  discoveredAt: Date;\n}\n\ninterface DriftEntry {\n  resourceId: string;\n  resourceType: string;\n  property: string;\n  declaredValue: any;\n  actualValue: any;\n  severity: 'low' | 'medium' | 'high' | 'critical';\n  autoRemediable: boolean;\n  category: 'config' | 'tag' | 'security' | 'size' | 'missing';\n}\n\ninterface DriftReport {\n  entries: DriftEntry[];\n  summary: {\n    total: number;\n    critical: number;\n    high: number;\n    medium: number;\n    low: number;\n    autoRemediableCount: number;\n    categories: Record<string, number>;\n  };\n  generatedAt: Date;\n}\n\nclass DriftDetector {\n  detect(declared: DeclaredResource[], actual: ActualResource[]): DriftReport {\n    const entries: DriftEntry[] = [];\n    const actualMap = new Map(actual.map(a => [a.id, a]));\n\n    for (const d of declared) {\n      const a = actualMap.get(d.id);\n      if (!a) {\n        entries.push({ resourceId: d.id, resourceType: d.type, property: '__exists__', declaredValue: true, actualValue: false, severity: 'critical', autoRemediable: true, category: 'missing' });\n        continue;\n      }\n\n      for (const [key, declaredVal] of Object.entries(d.properties)) {\n        const actualVal = a.properties[key];\n        if (JSON.stringify(declaredVal) !== JSON.stringify(actualVal)) {\n          let severity: DriftEntry['severity'] = 'low';\n          let category: DriftEntry['category'] = 'config';\n          let autoRemediable = true;\n\n          if (key.toLowerCase().includes('port') || key.toLowerCase().includes('cidr')) {\n            severity = 'high'; category = 'security';\n          } else if (key.toLowerCase().includes('instance') || key.toLowerCase().includes('size')) {\n            severity = 'medium'; category = 'size';\n          } else if (key.toLowerCase().includes('tag')) {\n            severity = 'low'; category = 'tag';\n          }\n\n          entries.push({ resourceId: d.id, resourceType: d.type, property: key, declaredValue: declaredVal, actualValue: actualVal, severity, autoRemediable, category });\n        }\n      }\n    }\n\n    return this.buildReport(entries);\n  }\n\n  planRemediation(drift: DriftEntry[]): string[] {\n    const steps: string[] = [];\n    for (const d of drift) {\n      if (!d.autoRemediable) continue;\n      if (d.category === 'missing') {\n        steps.push(`terraform apply -target=${d.resourceType}.${d.resourceId}`);\n      } else {\n        steps.push(`terraform apply to correct ${d.resourceType}.${d.resourceId}.${d.property} from \"${d.actualValue}\" to \"${d.declaredValue}\"`);\n      }\n    }\n    return steps;\n  }\n\n  private buildReport(entries: DriftEntry[]): DriftReport {\n    const summary = {\n      total: entries.length,\n      critical: entries.filter(e => e.severity === 'critical').length,\n      high: entries.filter(e => e.severity === 'high').length,\n      medium: entries.filter(e => e.severity === 'medium').length,\n      low: entries.filter(e => e.severity === 'low').length,\n      autoRemediableCount: entries.filter(e => e.autoRemediable).length,\n      categories: {} as Record<string, number>,\n    };\n    for (const e of entries) summary.categories[e.category] = (summary.categories[e.category] || 0) + 1;\n    return { entries, summary, generatedAt: new Date() };\n  }\n}\n\nconst detector = new DriftDetector();\nconst declared: DeclaredResource[] = [\n  { id: 'web-sg', type: 'aws_security_group', properties: { name: 'web-sg', description: 'Web tier security group', ingress_port: 443, cidr_blocks: ['10.0.0.0/8'] }, lastUpdated: new Date('2026-01-01') },\n  { id: 'web-instance', type: 'aws_instance', properties: { instance_type: 't3.medium', ami: 'ami-12345', tags: { Name: 'web-server', Environment: 'production' } }, lastUpdated: new Date('2026-01-01') },\n];\nconst actual: ActualResource[] = [\n  { id: 'web-sg', type: 'aws_security_group', properties: { name: 'web-sg', description: 'Web tier (modified)', ingress_port: 80, cidr_blocks: ['0.0.0.0/0'] }, discoveredAt: new Date() },\n  { id: 'web-instance', type: 'aws_instance', properties: { instance_type: 't3.large', ami: 'ami-67890', tags: { Name: 'web-server', Environment: 'production' } }, discoveredAt: new Date() },\n];\n\nconst report = detector.detect(declared, actual);\nconsole.log(`Drift: ${report.summary.total} entries (${report.summary.critical} critical, ${report.summary.high} high)`);\nconsole.log('Categories:', JSON.stringify(report.summary.categories));\nconsole.log('Remediation steps:', detector.planRemediation(report.entries).join('; '));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated drift detection and remediation planning ensures infrastructure stays aligned with declared configuration, preventing configuration drift from causing production incidents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use remote state."
        }), " S3 + DynamoDB for locking is the standard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modularize everything."
        }), " Break infrastructure into reusable modules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use workspaces or directories for environments."
        }), " Isolate state per environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run plan in PRs."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "terraform plan"
        }), " output should be part of code review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag all resources."
        }), " Every resource should have environment, project, and owner tags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prevent_destroy"
          }), " on critical resources."]
        }), " RDS databases, S3 buckets with data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is the purpose of Terraform workspaces?"
      }), "**A)** Manage multiple cloud providers", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Isolate state for different environments with the same configuration", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Share state across teams", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Speed up Terraform execution", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Isolate state for different environments with the same configuration</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is a Terraform data source used for?"
        }), "**A)** Define new resources", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Fetch information about existing infrastructure", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Store secrets", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Deploy applications", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Fetch information about existing infrastructure</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What does `prevent_destroy` do?"
          }), "**A)** Prevents accidental deletion of resources", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Blocks terraform apply", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Creates a backup before deletion", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Locks the state file", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** Prevents accidental deletion of resources</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What advantage does Pulumi have over Terraform?"
            }), "**A)** It supports more providers", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** It uses familiar programming languages instead of HCL", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** It is faster", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** It has better state management", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** It uses familiar programming languages instead of HCL</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: How does Terragrunt help with Terraform configurations?"
              }), "**A)** It adds new providers", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** It reduces duplication across multiple Terraform modules", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** It speeds up terraform apply", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** It provides a GUI", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** It reduces duplication across multiple Terraform modules</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "typescript-pulumi-infrastructure-as-code",
                children: "TypeScript: Pulumi Infrastructure as Code"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Pulumi brings IaC to TypeScript with native programming constructs:"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "// infrastructure.ts\n// Define cloud infrastructure using Pulumi with TypeScript\n\nimport * as aws from '@pulumi/aws';\nimport * as pulumi from '@pulumi/pulumi';\n\ninterface ServiceConfig {\n  name: string;\n  environment: string;\n  cpu: string;\n  memory: string;\n  desiredCount: number;\n  containerPort: number;\n  healthCheckPath: string;\n}\n\nclass MicroserviceInfrastructure {\n  private readonly vpc: aws.ec2.Vpc;\n  private readonly cluster: aws.ecs.Cluster;\n  private readonly alb: aws.lb.LoadBalancer;\n\n  constructor(private config: ServiceConfig) {\n    this.vpc = this.createVpc();\n    this.cluster = this.createCluster();\n    this.alb = this.createLoadBalancer();\n  }\n\n  private createVpc(): aws.ec2.Vpc {\n    return new aws.ec2.Vpc(`${this.config.name}-vpc`, {\n      cidrBlock: '10.0.0.0/16',\n      enableDnsSupport: true,\n      enableDnsHostnames: true,\n      tags: { Name: `${this.config.name}-vpc`, Environment: this.config.environment },\n    });\n  }\n\n  private createCluster(): aws.ecs.Cluster {\n    return new aws.ecs.Cluster(`${this.config.name}-cluster`, {\n      tags: { Name: `${this.config.name}-cluster`, Environment: this.config.environment },\n    });\n  }\n\n  private createLoadBalancer(): aws.lb.LoadBalancer {\n    return new aws.lb.LoadBalancer(`${this.config.name}-alb`, {\n      internal: false,\n      loadBalancerType: 'application',\n      securityGroups: [this.createSecurityGroup().id],\n      subnets: this.createSubnets().map(s => s.id),\n      tags: { Name: `${this.config.name}-alb`, Environment: this.config.environment },\n    });\n  }\n\n  private createSecurityGroup(): aws.ec2.SecurityGroup {\n    return new aws.ec2.SecurityGroup(`${this.config.name}-sg`, {\n      vpcId: this.vpc.id,\n      ingress: [\n        { protocol: 'tcp', fromPort: 443, toPort: 443, cidrBlocks: ['0.0.0.0/0'] },\n        { protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ['0.0.0.0/0'] },\n      ],\n      egress: [{ protocol: '-1', fromPort: 0, toPort: 0, cidrBlocks: ['0.0.0.0/0'] }],\n    });\n  }\n\n  private createSubnets(): aws.ec2.Subnet[] {\n    return [\n      new aws.ec2.Subnet(`${this.config.name}-subnet-a`, {\n        vpcId: this.vpc.id, cidrBlock: '10.0.1.0/24', availabilityZone: 'us-east-1a',\n      }),\n      new aws.ec2.Subnet(`${this.config.name}-subnet-b`, {\n        vpcId: this.vpc.id, cidrBlock: '10.0.2.0/24', availabilityZone: 'us-east-1b',\n      }),\n    ];\n  }\n\n  deployService(): aws.ecs.Service {\n    const taskDef = new aws.ecs.TaskDefinition(`${this.config.name}-task`, {\n      family: this.config.name,\n      cpu: this.config.cpu,\n      memory: this.config.memory,\n      networkMode: 'awsvpc',\n      containerDefinitions: JSON.stringify([{\n        name: this.config.name,\n        image: `${this.config.name}:latest`,\n        essential: true,\n        portMappings: [{ containerPort: this.config.containerPort, protocol: 'tcp' }],\n        healthCheck: {\n          command: [`CMD-SHELL`, `curl -f http://localhost:${this.config.containerPort}${this.config.healthCheckPath} || exit 1`],\n          interval: 30,\n          timeout: 5,\n          retries: 3,\n        },\n        environment: [{ name: 'NODE_ENV', value: this.config.environment }],\n      }]),\n    });\n\n    return new aws.ecs.Service(`${this.config.name}-service`, {\n      cluster: this.cluster.arn,\n      taskDefinition: taskDef.arn,\n      desiredCount: this.config.desiredCount,\n      launchType: 'FARGATE',\n      networkConfiguration: {\n        assignPublicIp: true,\n        subnets: this.createSubnets().map(s => s.id),\n        securityGroups: [this.createSecurityGroup().id],\n      },\n      loadBalancers: [{\n        targetGroupArn: this.createTargetGroup().arn,\n        containerName: this.config.name,\n        containerPort: this.config.containerPort,\n      }],\n    });\n  }\n\n  private createTargetGroup(): aws.lb.TargetGroup {\n    return new aws.lb.TargetGroup(`${this.config.name}-tg`, {\n      port: this.config.containerPort,\n      protocol: 'HTTP',\n      targetType: 'ip',\n      vpcId: this.vpc.id,\n      healthCheck: { path: this.config.healthCheckPath, interval: 30 },\n    });\n  }\n}\n\n// Deploy API service infrastructure\nconst apiInfra = new MicroserviceInfrastructure({\n  name: 'api-service',\n  environment: 'production',\n  cpu: '512',\n  memory: '1024',\n  desiredCount: 3,\n  containerPort: 3000,\n  healthCheckPath: '/health',\n});\n\nexport const service = apiInfra.deployService();\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-terraform-state-management-workflow",
                children: "Mermaid: Terraform State Management Workflow"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart TD\n    subgraph \"Terraform Operations\"\n        A[terraform init] --> B[terraform plan]\n        B --> C{Plan review}\n        C -->|Approve| D[terraform apply]\n        C -->|Reject| E[terraform plan -destroy]\n        D --> F[(State File)]\n        F --> G[terraform refresh]\n        G --> B\n    end\n    subgraph \"Remote State (S3 + DynamoDB)\"\n        S3[(S3 Bucket<br/>state storage)] --> LOCK[DynamoDB<br/>State Locking]\n        LOCK --> H{Lock acquired?}\n        H -->|Yes| I[Read state]\n        H -->|No| J[Wait for lock release]\n        I --> K[Plan/Apply]\n        K --> L[Write state]\n    end\n    subgraph \"CI/CD Integration\"\n        PR[Open PR] --> PLAN[tf plan in PR]\n        PLAN --> REVIEW[Review plan output]\n        REVIEW --> MERGE[Merge to main]\n        MERGE --> APPLY[tf apply in pipeline]\n    end\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-terraform-module-composition",
                children: "Mermaid: Terraform Module Composition"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart LR\n    subgraph \"Root Module\"\n        ROOT[main.tf] --> MOD[Module Calls]\n        ROOT --> BACKEND[backend.tf]\n        ROOT --> VARS[variables.tf]\n        ROOT --> OUT[outputs.tf]\n    end\n    subgraph \"Reusable Modules\"\n        MOD --> VPC[module/vpc]\n        MOD --> ECS[module/ecs-fargate]\n        MOD --> RDS[module/rds]\n        MOD --> S3[module/s3-bucket]\n    end\n    subgraph \"Module Structure\"\n        VPC --> M1[main.tf]\n        VPC --> M2[variables.tf]\n        VPC --> M3[outputs.tf]\n        VPC --> M4[README.md]\n    end\n    subgraph \"Registry\"\n        R1[Terraform Registry]\n        R2[GitHub: org/terraform-modules]\n    end\n    MOD -.-> R1\n    MOD -.-> R2\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "deeper-explanation-terraform-state-and-locking",
                children: "Deeper Explanation: Terraform State and Locking"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Why remote state matters:"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Collaboration:"
                  }), " Multiple team members work on the same infrastructure simultaneously"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "State safety:"
                  }), " State file not lost if local machine fails"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Locking:"
                  }), " Prevents concurrent modifications that could corrupt state"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Versioning:"
                  }), " S3 versioning provides state change history and recovery"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "State locking mechanisms:"
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "Backend"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Locking"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Notes"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "S3 + DynamoDB"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "DynamoDB table"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Best for AWS, most common"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "AzureRM"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Azure Blob Storage lease"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Native Azure support"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "GCS"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Cloud Storage object lock"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Native GCP support"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Terraform Cloud"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Built-in"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Simplest, managed"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Consul"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Session lock"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Good for multi-cloud"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// continuous delivery\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'continuous delivery', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Terraform workspaces isolate state for different environments using the same configuration."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Data sources fetch existing infrastructure attributes for use in configurations."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Provisioners execute scripts on resources (use sparingly; prefer user_data or config management)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "The Terraform Registry provides reusable community modules for common infrastructure patterns."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Terraform Cloud adds remote execution, VCS integration, and policy-as-code enforcement."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Pulumi enables IaC using TypeScript, Python, Go, and other general-purpose languages."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Terragrunt reduces boilerplate across multiple Terraform configurations."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Terraform best practices include remote state, modules, tagging, and CI/CD integration."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do Terraform workspaces differ from using separate directories for each environment?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the tradeoffs between Terraform modules and the Terraform Registry?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "When should you use a data source versus hardcoding values?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the benefits of Terraform Cloud over open-source Terraform?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does Pulumi differ from Terraform in terms of programming model?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a Terraform module for an ECS Fargate service with ALB and auto-scaling."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure a remote backend with S3 and DynamoDB with state locking."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a Terraform configuration that deploys resources across AWS and GCP."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Implement a CI/CD pipeline that runs ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "terraform plan"
                  }), " in PRs and ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "apply"
                  }), " on merge to main."]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Convert the Pulumi TypeScript example above to Terraform. Create equivalent resources: VPC with subnets, ECS Fargate cluster, ALB, security group, and auto-scaling service. Compare the two approaches in terms of readability, reusability, and type safety."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a Terragrunt configuration that reduces boilerplate across dev, staging, and prod environments. Each environment should share the same Terraform module but with different variable values for instance size, desired count, and database tier."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a complete multi-cloud infrastructure provisioning system using Terraform including: reusable modules for VPC (with public/private subnets, NAT gateway), ECS Fargate cluster with auto-scaling, RDS PostgreSQL with read replicas and backups, S3 buckets with lifecycle policies and encryption, IAM roles with least privilege, Route53 DNS with health checks, CloudFront CDN distribution, separate workspaces for dev, staging, prod, remote state with locking and encryption, a CI/CD pipeline with plan in PRs, apply on merge, and policy-as-code checks, and cost estimation and tagging for resource tracking."
                }), "\n"]
              }), "\n"]
            })]
          })]
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