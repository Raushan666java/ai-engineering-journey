"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46989],{

/***/ 71012
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_10_configuration_mgmt_md_c9e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-10-configuration-mgmt-md-c9e.json
const site_docs_courses_devops_10_configuration_mgmt_md_c9e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/10-configuration-mgmt","title":"Chapter 10: Advanced Configuration Management","description":"Prev: Terraform & IaC","source":"@site/docs/courses/devops/10-configuration-mgmt.md","sourceDirName":"courses/devops","slug":"/devops/10-configuration-mgmt","permalink":"/ai-engineering-journey/devops/10-configuration-mgmt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"10-configuration-mgmt","slug":"/devops/10-configuration-mgmt","title":"Chapter 10: Advanced Configuration Management","sidebar_label":"Chapter 10: Advanced Configuration Management","sidebar_position":18},"sidebar":"course-devops","previous":{"title":"Chapter 9: Terraform & Infrastructure as Code","permalink":"/ai-engineering-journey/devops/09-iac"},"next":{"title":"Chapter 10: Site Reliability Engineering (SRE) and Monitoring","permalink":"/ai-engineering-journey/devops/10-monitoring"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/10-configuration-mgmt.md


const frontMatter = {
	id: '10-configuration-mgmt',
	slug: '/devops/10-configuration-mgmt',
	title: 'Chapter 10: Advanced Configuration Management',
	sidebar_label: 'Chapter 10: Advanced Configuration Management',
	sidebar_position: 18
};
const contentTitle = 'Chapter 10: Advanced Configuration Management';

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
  "value": "Dynamic Inventories",
  "id": "dynamic-inventories",
  "level": 3
}, {
  "value": "Ansible Tower / AWX",
  "id": "ansible-tower--awx",
  "level": 3
}, {
  "value": "Compliance Automation",
  "id": "compliance-automation",
  "level": 3
}, {
  "value": "Ansible and Container Configuration",
  "id": "ansible-and-container-configuration",
  "level": 3
}, {
  "value": "Secrets Integration",
  "id": "secrets-integration",
  "level": 3
}, {
  "value": "Ansible Pull Mode",
  "id": "ansible-pull-mode",
  "level": 3
}, {
  "value": "Ansible Molecule for Testing",
  "id": "ansible-molecule-for-testing",
  "level": 3
}, {
  "value": "Ansible Content Collections",
  "id": "ansible-content-collections",
  "level": 3
}, {
  "value": "Delegation and Local Actions",
  "id": "delegation-and-local-actions",
  "level": 3
}, {
  "value": "Ansible in CI/CD",
  "id": "ansible-in-cicd",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Compliance Scanner",
  "id": "example-1-compliance-scanner",
  "level": 3
}, {
  "value": "Example 2: Ansible Vault Manager",
  "id": "example-2-ansible-vault-manager",
  "level": 3
}, {
  "value": "Terraform Plan Parser",
  "id": "terraform-plan-parser",
  "level": 3
}, {
  "value": "Configuration Drift Remediation Scheduler",
  "id": "configuration-drift-remediation-scheduler",
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
  "value": "Application Problems (continued)",
  "id": "application-problems-continued",
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
        id: "chapter-10-advanced-configuration-management",
        children: "Chapter 10: Advanced Configuration Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/09-iac",
          children: "Terraform & IaC"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/10-monitoring",
          children: "Monitoring Basics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master advanced Ansible patterns: dynamic inventories, delegation, async tasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Ansible Tower/AWX for enterprise configuration management."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use configuration management for compliance and security hardening."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement configuration management for containers and Kubernetes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply change management and auditing through configuration automation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate configuration management with CI/CD and secrets management."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Dynamic Inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API sources inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-discover EC2 instances by tags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ansible Tower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise CM with RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling, approvals, logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIS benchmarks automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate hardening and verify continuously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container CM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build images with playbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ansible inside containers for provisioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vault, AWS SSM, Azure KV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic secrets at playbook runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run tasks on behalf of other hosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local execution for API calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pull Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ansible-pull for fleet management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes pull config from Git"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git-driven playbook execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run playbooks from CI pipeline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Advanced Ansible] --> B[Dynamic Inventory]\n    A --> C[Ansible Tower/AWX]\n    A --> D[Compliance Automation]\n    A --> E[Secrets Management]\n    A --> F[Container CM]\n    B --> G[AWS EC2 Plugin]\n    B --> H[Azure Plugin]\n    C --> I[Join Tokens]\n    C --> J[Job Templates]\n    D --> K[CIS Benchmarks]\n    D --> L[OpenSCAP]\n    E --> M[HashiCorp Vault]\n    E --> N[AWS SSM]\n    F --> O[Docker Module]\n    F --> P[Kubernetes Module]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-inventories",
      children: "Dynamic Inventories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static inventory files don't scale. Dynamic inventories query cloud APIs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "# inventory/aws_ec2.yaml\nplugin: aws_ec2\nregions:\n  - us-east-1\n  - us-west-2\nfilters:\n  tag:Environment:\n    - production\n  instance-state-name: running\nhostnames:\n  - dns-name\nkeyed_groups:\n  - key: tags.Role\n    prefix: role\n  - key: placement.region\n    prefix: region\ncompose:\n  ansible_host: public_dns_name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Using dynamic groups\n- name: Configure web servers\n  hosts: role_web\n  tasks:\n    - name: Install nginx\n      apt:\n        name: nginx\n        state: present\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-tower--awx",
      children: "Ansible Tower / AWX"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ansible Tower (Red Hat) / AWX (upstream open-source) provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User interface:"
        }), " Manage inventories, credentials, and playbooks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RBAC:"
        }), " Team-based access control for playbook execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduling:"
        }), " Cron-based playbook execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approvals:"
        }), " Workflow approval gates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging:"
        }), " Centralized audit trail"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REST API:"
        }), " Programmatic playbook triggering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notifications:"
        }), " Slack, email, webhook on status changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# AWX job template via API\n- name: Trigger AWX job\n  uri:\n    url: \"https://awx.example.com/api/v2/job_templates/10/launch/\"\n    method: POST\n    headers:\n      Authorization: \"Bearer {{ awx_token }}\"\n      Content-Type: application/json\n    body_format: json\n    body:\n      extra_vars:\n        environment: production\n        version: \"{{ lookup('env', 'CI_COMMIT_SHA') }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compliance-automation",
      children: "Compliance Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated security hardening and compliance verification:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# CIS benchmark compliance checks\n- name: CIS Benchmark - SSH Hardening\n  hosts: all\n  vars:\n    cis_rules:\n      - rule: \"1.1.1.1 Disable unused filesystems\"\n        check: \"modprobe -n -v cramfs\"\n      - rule: \"5.2.1 Ensure permissions on /etc/ssh/sshd_config\"\n        check: \"stat /etc/ssh/sshd_config\"\n  tasks:\n    - name: Check SSH permissions are 600\n      stat:\n        path: /etc/ssh/sshd_config\n      register: ssh_config\n\n    - name: Remediate SSH permissions\n      file:\n        path: /etc/ssh/sshd_config\n        mode: \"0600\"\n        owner: root\n        group: root\n      when: ssh_config.stat.mode != \"0600\"\n\n    - name: Verify no root SSH login\n      lineinfile:\n        path: /etc/ssh/sshd_config\n        regexp: \"^PermitRootLogin\"\n        line: \"PermitRootLogin no\"\n      notify: restart sshd\n      check_mode: yes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-and-container-configuration",
      children: "Ansible and Container Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Building Docker images with Ansible:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "- name: Build application image\n  hosts: localhost\n  tasks:\n    - name: Create Dockerfile\n      copy:\n        dest: /tmp/Dockerfile\n        content: |\n          FROM node:20-alpine\n          WORKDIR /app\n          COPY package*.json ./\n          RUN npm ci\n          COPY dist/ ./\n          EXPOSE 3000\n          CMD [\"node\", \"server.js\"]\n\n    - name: Build Docker image\n      docker_image:\n        name: myapp\n        tag: \"{{ version }}\"\n        build:\n          path: /tmp\n          pull: yes\n        source: build\n        push: yes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managing Kubernetes with Ansible:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "- name: Deploy to Kubernetes\n  hosts: localhost\n  tasks:\n    - name: Create namespace\n      kubernetes.core.k8s:\n        name: \"{{ environment }}\"\n        api_version: v1\n        kind: Namespace\n        state: present\n\n    - name: Deploy application\n      kubernetes.core.k8s:\n        state: present\n        definition:\n          apiVersion: apps/v1\n          kind: Deployment\n          metadata:\n            name: myapp\n            namespace: \"{{ environment }}\"\n          spec:\n            replicas: 3\n            selector:\n              matchLabels:\n                app: myapp\n            template:\n              metadata:\n                labels:\n                  app: myapp\n              spec:\n                containers:\n                  - name: myapp\n                    image: \"myapp:{{ version }}\"\n                    ports:\n                      - containerPort: 3000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secrets-integration",
      children: "Secrets Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inject secrets at runtime without storing them in playbooks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# HashiCorp Vault lookup\n- name: Get database password from Vault\n  debug:\n    msg: \"{{ lookup('community.hashi_vault.hashi_vault', 'secret/data/db', url='https://vault.example.com') }}\"\n\n# AWS SSM Parameter Store lookup\n- name: Get DB password from SSM\n  set_fact:\n    db_password: \"{{ lookup('amazon.aws.ssm_parameter', '/prod/db/password', decrypt=True) }}\"\n\n# Azure Key Vault lookup\n- name: Get API key from Azure KV\n  set_fact:\n    api_key: \"{{ lookup('azure.azcollection.azure_keyvault_secret', 'api-key', vault_url='https://myvault.vault.azure.net') }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-pull-mode",
      children: "Ansible Pull Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In pull mode, nodes fetch configuration from Git and apply locally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Cron job on each node\n*/15 * * * * ansible-pull -o -U https://github.com/org/config-repo.git -d /etc/ansible/pull -i localhost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infrastructure at scale (thousands of nodes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nodes without direct SSH access from control node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IoT and edge devices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ephemeral instances that self-configure on boot"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-molecule-for-testing",
      children: "Ansible Molecule for Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Molecule provides a framework for testing Ansible roles:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "molecule init role myrole --driver docker\nmolecule converge    # Apply role to test container\nmolecule verify      # Run verification tests\nmolecule test        # Full lifecycle: create, converge, verify, destroy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# molecule/default/molecule.yml\ndependency:\n  name: galaxy\ndriver:\n  name: docker\nplatforms:\n  - name: instance\n    image: geerlingguy/docker-ubuntu2204-ansible:latest\n    pre_build_image: true\nprovisioner:\n  name: ansible\nverifier:\n  name: ansible\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# molecule/default/verify.yml\n- name: Verify role applied correctly\n  hosts: all\n  tasks:\n    - name: Check nginx is installed\n      package:\n        name: nginx\n        state: present\n      check_mode: yes\n\n    - name: Check nginx is running\n      service:\n        name: nginx\n        state: started\n      check_mode: yes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits of role testing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catch regressions before production deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproducible test environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI integration for automated role validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation of expected behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-content-collections",
      children: "Ansible Content Collections"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Collections package Ansible content (roles, modules, plugins, playbooks) in distributable bundles:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# requirements.yml\ncollections:\n  - name: community.docker\n    version: \">=3.0.0\"\n  - name: kubernetes.core\n    version: \">=2.0.0\"\n  - name: amazon.aws\n    version: \">=5.0.0\"\n  - name: community.hashi_vault\n    version: \">=4.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using collections in playbooks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "- name: Deploy application\n  hosts: all\n  collections:\n    - community.docker\n    - kubernetes.core\n  tasks:\n    - name: Build image\n      docker_image:\n        name: myapp\n        tag: \"{{ version }}\"\n        source: build\n\n    - name: Deploy to K8s\n      k8s:\n        state: present\n        definition: \"{{ lookup('template', 'deployment.yaml.j2') }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delegation-and-local-actions",
      children: "Delegation and Local Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Delegate tasks to specific hosts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "- name: Register instance with load balancer\n  hosts: webservers\n  tasks:\n    - name: Add instance to ELB\n      elb_instance:\n        instance_id: \"{{ ansible_ec2_instance_id }}\"\n        ec2_elbs:\n          - myapp-elb\n        state: present\n      delegate_to: localhost\n\n- name: Run database migration\n  hosts: app_servers\n  serial: 1\n  tasks:\n    - name: Run migrations\n      command: npm run migrate\n      run_once: true\n      delegate_to: \"{{ groups.app_servers[0] }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ansible-in-cicd",
      children: "Ansible in CI/CD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .gitlab-ci.yml\nstages:\n  - deploy\n\ndeploy:\n  stage: deploy\n  script:\n    - ansible-galaxy install -r requirements.yml\n    - ansible-playbook -i inventory/production site.yml \\\n        --extra-vars \"version=$CI_COMMIT_TAG\" \\\n        --vault-password-file .vault_pass\n  only:\n    - tags\n  environment:\n    name: production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-compliance-scanner",
      children: "Example 1: Compliance Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ComplianceRule {\n  id: string;\n  description: string;\n  category: string;\n  severity: 'critical' | 'high' | 'medium' | 'low';\n  check: () => Promise<boolean>;\n  remediate: () => Promise<void>;\n}\n\nclass ComplianceScanner {\n  private rules: ComplianceRule[] = [];\n  private results: Array<{ rule: string; passed: boolean; error?: string }> = [];\n\n  addRule(rule: ComplianceRule): void {\n    this.rules.push(rule);\n  }\n\n  async runScan(): Promise<void> {\n    console.log('?? Starting compliance scan...\\n');\n\n    for (const rule of this.rules) {\n      try {\n        const passed = await rule.check();\n        this.results.push({ rule: rule.id, passed });\n        const icon = passed ? '?' : '?';\n        console.log(`${icon} ${rule.id}: ${rule.description}`);\n        if (!passed) {\n          console.log(`   Severity: ${rule.severity}`);\n        }\n      } catch (error) {\n        this.results.push({ rule: rule.id, passed: false, error: String(error) });\n        console.log(`? ${rule.id}: Error - ${error}`);\n      }\n    }\n\n    this.printSummary();\n  }\n\n  private printSummary(): void {\n    const passed = this.results.filter(r => r.passed).length;\n    const failed = this.results.filter(r => !r.passed).length;\n    const critical = this.results.filter(r => !r.passed && this.rules.find(rule => rule.id === r.rule)?.severity === 'critical').length;\n    const high = this.results.filter(r => !r.passed && this.rules.find(rule => rule.id === r.rule)?.severity === 'high').length;\n\n    console.log(`\\n=== Compliance Summary ===`);\n    console.log(`Passed: ${passed}/${this.results.length}`);\n    console.log(`Failed: ${failed}`);\n    console.log(`Critical: ${critical}, High: ${high}`);\n\n    if (failed > 0) {\n      console.log(`\\n? Compliance score: ${((passed / this.results.length) * 100).toFixed(0)}%`);\n    } else {\n      console.log(`\\n? Fully compliant`);\n    }\n  }\n\n  generateReport(): string {\n    let report = '# Compliance Scan Report\\n\\n';\n    report += `| Rule | Status | Severity |\\n`;\n    report += `|------|--------|----------|\\n`;\n\n    for (const result of this.results) {\n      const rule = this.rules.find(r => r.id === result.rule);\n      const status = result.passed ? '? Passed' : '? Failed';\n      report += `| ${rule?.id} | ${status} | ${rule?.severity} |\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst scanner = new ComplianceScanner();\nscanner.addRule({\n  id: 'CIS-1.1.1', description: 'Disable unused filesystems', category: 'system', severity: 'high',\n  check: async () => true,\n  remediate: async () => {},\n});\nscanner.addRule({\n  id: 'CIS-5.2.1', description: 'SSH config permissions', category: 'ssh', severity: 'critical',\n  check: async () => false,\n  remediate: async () => {},\n});\nscanner.runScan();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-ansible-vault-manager",
      children: "Example 2: Ansible Vault Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VaultEntry {\n  name: string;\n  path: string;\n  data: Record<string, string>;\n}\n\nclass AnsibleVaultManager {\n  private entries: VaultEntry[] = [];\n\n  addEntry(path: string, name: string, data: Record<string, string>): void {\n    const existing = this.entries.findIndex(e => e.path === path);\n    if (existing >= 0) {\n      this.entries[existing] = { name, path, data };\n    } else {\n      this.entries.push({ name, path, data });\n    }\n  }\n\n  generateVaultFile(path: string): string {\n    const entries = this.entries.filter(e => e.path === path);\n    if (entries.length === 0) throw new Error(`No entries for path: ${path}`);\n\n    return entries.map(entry =>\n      Object.entries(entry.data)\n        .map(([key, value]) => `${key}: \"${value}\"`)\n        .join('\\n')\n    ).join('\\n');\n  }\n\n  auditHardcodedSecrets(playbookPath: string): string[] {\n    const issues: string[] = [];\n    for (const entry of this.entries) {\n      for (const [key, value] of Object.entries(entry.data)) {\n        if (value.length > 4 && /^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]{8,}$/.test(value)) {\n          issues.push(`Potential secret \"${key}\" in ${entry.path} — should be vault-encrypted`);\n        }\n      }\n    }\n    return issues;\n  }\n\n  generateSecretsPlaybook(path: string): string {\n    const entries = this.entries.filter(e => e.path === path);\n\n    return `---\n- name: Deploy secrets from vault\n  hosts: all\n  become: yes\n  vars_files:\n    - vault.yml\n  tasks:\n${entries.map(entry =>\n      Object.keys(entry.data).map(key =>\n        `    - name: Set ${key}\n      set_fact:\n        ${key}: \"{{ ${key} }}\"\n      no_log: true`\n      ).join('\\n')\n    ).join('\\n')}\n    - name: Write .env file\n      template:\n        src: .env.j2\n        dest: /opt/app/.env\n        owner: appuser\n        mode: \"0600\"`;\n  }\n}\n\nconst vault = new AnsibleVaultManager();\nvault.addEntry('vault.yml', 'production', {\n  DB_PASSWORD: 'p@ssw0rd123!',\n  API_KEY: 'sk-abc123def456',\n  JWT_SECRET: 'super-secret-key-2024',\n});\nvault.addEntry('vault.yml', 'staging', {\n  DB_PASSWORD: 'staging-pass',\n  API_KEY: 'sk-test-key',\n  JWT_SECRET: 'test-secret',\n});\n\nconsole.log('Vault file:\\n', vault.generateVaultFile('vault.yml'));\nconsole.log('\\nHardcoded secrets audit:\\n', vault.auditHardcodedSecrets('site.yml').join('\\n'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terraform-plan-parser",
      children: "Terraform Plan Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Analyzing Terraform plan output programmatically enables automated compliance checks and impact analysis before infrastructure changes are applied."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ResourceChange {\n  address: string;\n  action: 'create' | 'delete' | 'update' | 'no-op';\n  changeSummary: string;\n  before: Record<string, unknown>;\n  after: Record<string, unknown>;\n}\n\ninterface PlanSummary {\n  additions: number;\n  changes: number;\n  destructions: number;\n  resourceChanges: ResourceChange[];\n  riskLevel: 'low' | 'medium' | 'high' | 'critical';\n  warnings: string[];\n}\n\nclass TerraformPlanParser {\n  parse(rawPlan: string): PlanSummary {\n    const lines = rawPlan.split('\\n');\n    const resourceChanges: ResourceChange[] = [];\n    const warnings: string[] = [];\n\n    for (const line of lines) {\n      if (line.startsWith('#') || line.startsWith('# aws_')) {\n        const parts = line.split(':');\n        const address = parts[0].replace('# ', '');\n        const action = parts[1]?.trim().toLowerCase() || 'no-op';\n        const actionMap: Record<string, ResourceChange['action']> = {\n          'will be created': 'create', 'will be destroyed': 'delete',\n          'will be updated in-place': 'update', 'will be replaced': 'delete',\n        };\n        resourceChanges.push({\n          address,\n          action: actionMap[action] || 'no-op',\n          changeSummary: action,\n          before: {},\n          after: {},\n        });\n      }\n    }\n\n    const additions = resourceChanges.filter(r => r.action === 'create').length;\n    const changes = resourceChanges.filter(r => r.action === 'update').length;\n    const destructions = resourceChanges.filter(r => r.action === 'delete').length;\n\n    if (destructions > 0) {\n      resourceChanges.filter(r => r.action === 'delete').forEach(r => {\n        warnings.push(`Destructive change: ${r.address}`);\n      });\n    }\n\n    let riskLevel: PlanSummary['riskLevel'] = 'low';\n    if (destructions > 5) riskLevel = 'critical';\n    else if (destructions > 2) riskLevel = 'high';\n    else if (destructions > 0) riskLevel = 'medium';\n\n    return { additions, changes, destructions, resourceChanges, riskLevel, warnings };\n  }\n\n  generateSummary(plan: PlanSummary): string {\n    return `## Terraform Plan Summary\\n\\n` +\n      `**Additions:** ${plan.additions}\\n` +\n      `**Changes:** ${plan.changes}\\n` +\n      `**Destructions:** ${plan.destructions}\\n` +\n      `**Risk Level:** ${plan.riskLevel}\\n\\n` +\n      (plan.warnings.length > 0 ? `**Warnings:**\\n${plan.warnings.map(w => `- ${w}`).join('\\n')}\\n` : '');\n  }\n}\n\n// Simulated terraform plan output\nconst planOutput = `# aws_vpc.main: Will be updated in-place\n# aws_subnet.public: Will be created\n# aws_security_group.legacy: Will be destroyed\n# aws_instance.web: Will be updated in-place`;\n\nconst parser = new TerraformPlanParser();\nconst plan = parser.parse(planOutput);\nconsole.log(parser.generateSummary(plan));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Programmatic Terraform plan parsing enables automated risk classification, destructive change detection, and integration with CI/CD gating pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-drift-remediation-scheduler",
      children: "Configuration Drift Remediation Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drift remediation must be scheduled intelligently to avoid disrupting workloads during peak hours. The following tool implements a drift-aware remediation scheduler with prioritization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// drift-scheduler.ts\n// Schedule drift remediation with prioritization\n\ninterface RemediationTask {\n  id: string;\n  resourceId: string;\n  driftCategory: 'security' | 'config' | 'tag' | 'size' | 'missing';\n  driftSeverity: 'low' | 'medium' | 'high' | 'critical';\n  affectedScope: string;\n  estimatedDurationSec: number;\n  canAutoRemediate: boolean;\n  createdAt: Date;\n}\n\ninterface ScheduleWindow {\n  dayOfWeek: number;\n  startHour: number;\n  endHour: number;\n  timezone: string;\n  maxConcurrentTasks: number;\n}\n\ninterface RemediationSchedule {\n  tasks: RemediationTask[];\n  scheduleWindow: ScheduleWindow;\n  proposedOrder: RemediationTask[];\n  totalEstimatedMinutes: number;\n  windowCapacityMinutes: number;\n  fitsInWindow: boolean;\n  overflowCount: number;\n}\n\nclass DriftScheduler {\n  private windows: ScheduleWindow[];\n  private history: Map<string, Date> = new Map();\n\n  constructor(windows: ScheduleWindow[]) {\n    this.windows = windows;\n  }\n\n  schedule(tasks: RemediationTask[], currentDate: Date): RemediationSchedule {\n    const currentDay = currentDate.getDay();\n    const currentHour = currentDate.getHours();\n    const availableWindow = this.windows.find(w => w.dayOfWeek === currentDay && currentHour >= w.startHour && currentHour < w.endHour);\n\n    if (!availableWindow) {\n      const nextWindow = this.findNextWindow(currentDate);\n      if (!nextWindow) throw new Error('No available maintenance windows');\n      return this.buildDeferredSchedule(tasks, nextWindow);\n    }\n\n    const prioritized = this.prioritizeRemediation(tasks);\n    const windowCapacity = availableWindow.endHour - currentHour;\n    const windowCapacityMinutes = windowCapacity * 60;\n    const totalEstimated = prioritized.reduce((s, t) => s + t.estimatedDurationSec, 0) / 60;\n    const fitsInWindow = totalEstimated <= windowCapacityMinutes;\n\n    const allowed = fitsInWindow ? prioritized : prioritized.slice(0, Math.floor(windowCapacityMinutes / (totalEstimated / prioritized.length)));\n    const overflow = fitsInWindow ? [] : prioritized.slice(allowed.length);\n\n    return {\n      tasks, scheduleWindow: availableWindow,\n      proposedOrder: allowed,\n      totalEstimatedMinutes: Math.ceil(totalEstimated),\n      windowCapacityMinutes, fitsInWindow,\n      overflowCount: overflow.length,\n    };\n  }\n\n  prioritizeRemediation(tasks: RemediationTask[]): RemediationTask[] {\n    return [...tasks].sort((a, b) => {\n      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };\n      const catOrder = { security: 0, missing: 1, size: 2, config: 3, tag: 4 };\n      const aKey = `${severityOrder[a.driftSeverity]}-${catOrder[a.driftCategory]}`;\n      const bKey = `${severityOrder[b.driftSeverity]}-${catOrder[b.driftCategory]}`;\n      return aKey.localeCompare(bKey);\n    });\n  }\n\n  markCompleted(taskId: string): void {\n    this.history.set(taskId, new Date());\n  }\n\n  private findNextWindow(from: Date): ScheduleWindow | null {\n    for (let offset = 0; offset < 7; offset++) {\n      const checkDay = (from.getDay() + offset) % 7;\n      const window = this.windows.find(w => w.dayOfWeek === checkDay);\n      if (window) return window;\n    }\n    return null;\n  }\n\n  private buildDeferredSchedule(tasks: RemediationTask[], window: ScheduleWindow): RemediationSchedule {\n    const prioritized = this.prioritizeRemediation(tasks);\n    return {\n      tasks, scheduleWindow: window,\n      proposedOrder: prioritized,\n      totalEstimatedMinutes: Math.ceil(prioritized.reduce((s, t) => s + t.estimatedDurationSec, 0) / 60),\n      windowCapacityMinutes: (window.endHour - window.startHour) * 60,\n      fitsInWindow: false, overflowCount: 0,\n    };\n  }\n}\n\nconst scheduler = new DriftScheduler([\n  { dayOfWeek: 1, startHour: 2, endHour: 5, timezone: 'UTC', maxConcurrentTasks: 3 },\n  { dayOfWeek: 3, startHour: 2, endHour: 5, timezone: 'UTC', maxConcurrentTasks: 3 },\n  { dayOfWeek: 5, startHour: 3, endHour: 6, timezone: 'UTC', maxConcurrentTasks: 2 },\n]);\n\nconst tasks: RemediationTask[] = [\n  { id: 'drift-001', resourceId: 'sg-prod-web', driftCategory: 'security', driftSeverity: 'high', affectedScope: 'production', estimatedDurationSec: 90, canAutoRemediate: true, createdAt: new Date() },\n  { id: 'drift-002', resourceId: 'instance-db-01', driftCategory: 'size', driftSeverity: 'medium', affectedScope: 'production', estimatedDurationSec: 180, canAutoRemediate: true, createdAt: new Date() },\n  { id: 'drift-003', resourceId: 'bucket-logs', driftCategory: 'config', driftSeverity: 'low', affectedScope: 'staging', estimatedDurationSec: 45, canAutoRemediate: true, createdAt: new Date() },\n];\n\nconst schedule = scheduler.schedule(tasks, new Date('2026-06-25T03:00:00Z'));\nconsole.log(`Schedule: ${schedule.proposedOrder.length} tasks in window (${schedule.totalEstimatedMinutes}min of ${schedule.windowCapacityMinutes}min), overflow: ${schedule.overflowCount}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " A drift remediation scheduler ensures high-severity drifts are fixed within defined maintenance windows while preventing schedule overflow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use dynamic inventories for cloud environments."
        }), " Don't maintain static host lists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrate with a secrets manager."
        }), " Use Vault, SSM, or Azure Key Vault for runtime secrets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run compliance checks as regular playbooks."
        }), " Automate CIS benchmark verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use pull mode for large fleets."
        }), " ansible-pull scales better than push for 1000+ nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run Ansible Tower/AWX for enterprise teams."
        }), " Web UI, RBAC, scheduling, auditing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use check mode first."
        }), " Always preview changes with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--check"
        }), " before applying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is a dynamic inventory in Ansible?"
      }), "**A)** A static host list", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** An inventory that queries cloud APIs for host information", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** A manually maintained host file", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** A YAML file with hostnames", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** An inventory that queries cloud APIs for host information</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is the purpose of Ansible Tower/AWX?"
        }), "**A)** A code editor", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Enterprise Ansible management with UI, RBAC, and scheduling", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** An alternative to Docker", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** A monitoring tool", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Enterprise Ansible management with UI, RBAC, and scheduling</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: How does ansible-pull differ from default Ansible?"
          }), "**A)** It pushes configuration to nodes", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Nodes pull configuration from Git and apply locally", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** It requires a control node", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** It only works with Windows", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Nodes pull configuration from Git and apply locally</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the benefit of using delegate_to in Ansible?"
            }), "**A)** It speeds up playbook execution", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** It runs tasks on a specific host (like localhost) while targeting others", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** It delegates to another playbook", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** It creates new users", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** It runs tasks on a specific host (like localhost) while targeting others</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: How should secrets be handled in Ansible playbooks?"
              }), "**A)** Stored in plaintext in variables", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Loaded from a secrets manager or Ansible Vault at runtime", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Hardcoded in tasks", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Passed via command-line arguments", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Loaded from a secrets manager or Ansible Vault at runtime</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// configuration mgmt\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'configuration mgmt', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Dynamic inventories query cloud APIs (AWS, Azure, GCP) to discover hosts automatically."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Ansible Tower/AWX provides enterprise features: RBAC, scheduling, approvals, and auditing."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Compliance automation uses Ansible to enforce CIS benchmarks and security hardening."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Secrets should be injected from HashiCorp Vault, AWS SSM, or Azure Key Vault at runtime."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "ansible-pull enables nodes to fetch configuration from Git and apply it locally."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Delegation runs tasks on specific hosts while targeting others (e.g., API calls from localhost)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Ansible modules for Docker and Kubernetes extend configuration management to containers."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "CI/CD integration automates playbook execution on infrastructure changes."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a dynamic inventory differ from a static inventory?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the advantages of pull mode over push mode for large deployments?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does Ansible Tower improve team collaboration on playbooks?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the purpose of delegate_to and when should you use it?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How can you integrate HashiCorp Vault with Ansible?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Create a dynamic inventory configuration for AWS EC2 instances tagged with ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "Role=web"
                  }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "Environment=production"
                  }), "."]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a compliance playbook that checks and remediates SSH hardening settings."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure an Ansible workflow that deploys a Docker container with Kubernetes integration."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement a secrets management pattern that loads database credentials from Vault at runtime."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems-continued",
                children: "Application Problems (continued)"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                start: "5",
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "ComplianceScanner"
                  }), " class, implement a complete CIS Level 1 compliance scanner for Ubuntu Linux that checks: SSH configuration (no root login, key-only auth), filesystem permissions (shadow, passwd, sudoers), kernel parameters (IP forwarding disabled, source routing disabled), and audit logging enabled. Generate an HTML report with severity-colored rows."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "DynamicInventoryManager"
                  }), " class that: queries a simulated AWS API (return list of EC2 instances with tags), groups instances by tag (Role, Environment), generates an Ansible-compatible inventory YAML with host groups, and supports filtering by custom criteria (e.g., \"all production web servers with instance type t3.large\")."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a complete enterprise configuration management system using Ansible including: dynamic inventory for 500+ AWS EC2 instances across 3 environments, Ansible Tower/AWX with RBAC (developers can deploy to dev/staging, operators approve prod), compliance automation running CIS benchmarks daily with email reports for violations, secrets integration with HashiCorp Vault for dynamic database credentials, pull-mode configuration for auto-scaling instances using ansible-pull, CI/CD integration running playbooks from GitHub Actions on infrastructure changes, and a self-service portal (via Tower API) allowing developers to trigger common playbooks."
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